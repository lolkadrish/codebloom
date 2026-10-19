-- Apply after feedback.sql. Existing feedback is not backfilled or notified.
create extension if not exists pg_cron with schema pg_catalog;
create extension if not exists pg_net with schema extensions;

create table public.site_feedback_telegram_settings (
  singleton boolean primary key default true check (singleton),
  enabled boolean not null default false,
  bot_chat_id text check (bot_chat_id ~ '^[1-9][0-9]{0,19}$'),
  pair_code_hash text,
  pair_expires_at timestamptz,
  dispatch_key_hash text not null check (dispatch_key_hash ~ '^[0-9a-f]{64}$')
);
alter table public.site_feedback_telegram_settings enable row level security;
revoke all on public.site_feedback_telegram_settings from public, anon, authenticated;
grant select on public.site_feedback_telegram_settings to service_role;

-- Only the scheduler's random key is in Vault. The bot token stays in Edge secrets.
do $$
declare dispatch_key text := encode(extensions.gen_random_bytes(32),'hex');
begin
  perform vault.create_secret(dispatch_key,'codebloom_feedback_dispatch');
  insert into public.site_feedback_telegram_settings(singleton,dispatch_key_hash)
    values(true,encode(extensions.digest(dispatch_key,'sha256'),'hex'));
end;
$$;

create table public.site_feedback_telegram_outbox (
  feedback_id uuid primary key references public.site_feedback(id) on delete cascade,
  created_at timestamptz not null default now(),
  attempts integer not null default 0 check (attempts between 0 and 8),
  available_at timestamptz not null default now(),
  lease_id uuid,
  lease_until timestamptz,
  sent_at timestamptz,
  telegram_message_id bigint,
  last_error text check (last_error in ('network','telegram_400','telegram_401','telegram_403','telegram_429','telegram_5xx','telegram_invalid'))
);
create index site_feedback_telegram_pending_idx
  on public.site_feedback_telegram_outbox(available_at,created_at)
  where sent_at is null and attempts < 8;
alter table public.site_feedback_telegram_outbox enable row level security;
revoke all on public.site_feedback_telegram_outbox from public, anon, authenticated;
grant select,insert,update on public.site_feedback_telegram_outbox to service_role;

create function public.queue_site_feedback_telegram()
returns trigger language plpgsql security invoker set search_path='' as $$
begin
  insert into public.site_feedback_telegram_outbox(feedback_id) values(new.id);
  return new;
end;
$$;
revoke all on function public.queue_site_feedback_telegram() from public,anon,authenticated;
grant execute on function public.queue_site_feedback_telegram() to service_role;
create trigger queue_site_feedback_telegram after insert on public.site_feedback
  for each row execute function public.queue_site_feedback_telegram();

create function public.authorize_site_feedback_dispatch(p_key text)
returns boolean language sql stable security invoker set search_path='' as $$
  select coalesce((select (enabled or pair_expires_at>now()) and dispatch_key_hash=encode(extensions.digest(p_key,'sha256'),'hex')
    from public.site_feedback_telegram_settings where singleton),false);
$$;
revoke all on function public.authorize_site_feedback_dispatch(text) from public,anon,authenticated;
grant execute on function public.authorize_site_feedback_dispatch(text) to service_role;

-- The project owner creates one short-lived link; only its matching private chat may bind.
create function public.begin_site_feedback_telegram_pairing()
returns text language plpgsql security invoker set search_path='' as $$
declare code text:=encode(extensions.gen_random_bytes(20),'hex');
begin
  if exists(select 1 from public.site_feedback_telegram_settings where singleton and bot_chat_id is not null) then
    raise exception 'Telegram already paired';
  end if;
  update public.site_feedback_telegram_settings set
    pair_code_hash=encode(extensions.digest(code,'sha256'),'hex'),pair_expires_at=now()+interval '20 minutes'
    where singleton;
  return code;
end;
$$;
revoke all on function public.begin_site_feedback_telegram_pairing() from public,anon,authenticated,service_role;

create function public.site_feedback_telegram_pairing_pending()
returns boolean language sql stable security invoker set search_path='' as $$
  select coalesce((select bot_chat_id is null and pair_expires_at>now()
    from public.site_feedback_telegram_settings where singleton),false);
$$;
revoke all on function public.site_feedback_telegram_pairing_pending() from public,anon,authenticated;
grant execute on function public.site_feedback_telegram_pairing_pending() to service_role;

create function public.complete_site_feedback_telegram_pairing(p_code text,p_chat_id text)
returns boolean language plpgsql security invoker set search_path='' as $$
declare changed integer;
begin
  if p_code !~ '^[0-9a-f]{40}$' or p_chat_id !~ '^[1-9][0-9]{0,19}$' or p_code is null or p_chat_id is null then
    return false;
  end if;
  update public.site_feedback_telegram_settings set bot_chat_id=p_chat_id,enabled=true,
    pair_code_hash=null,pair_expires_at=null
    where singleton and bot_chat_id is null and pair_expires_at>now()
      and pair_code_hash=encode(extensions.digest(p_code,'sha256'),'hex');
  get diagnostics changed=row_count;
  return changed=1;
end;
$$;
revoke all on function public.complete_site_feedback_telegram_pairing(text,text) from public,anon,authenticated;
grant update(bot_chat_id,enabled,pair_code_hash,pair_expires_at) on public.site_feedback_telegram_settings to service_role;
grant execute on function public.complete_site_feedback_telegram_pairing(text,text) to service_role;

create function public.get_site_feedback_telegram_chat()
returns text language sql stable security invoker set search_path='' as $$
  select bot_chat_id from public.site_feedback_telegram_settings where singleton and enabled;
$$;
revoke all on function public.get_site_feedback_telegram_chat() from public,anon,authenticated;
grant execute on function public.get_site_feedback_telegram_chat() to service_role;

create function public.claim_site_feedback_telegram(p_id uuid default null)
returns table(feedback_id uuid,category text,created_at timestamptz,lease_id uuid)
language sql security invoker set search_path='' as $$
  with picked as (
    select q.feedback_id from public.site_feedback_telegram_outbox q
    where q.sent_at is null and q.attempts<8 and q.available_at<=now()
      and (q.lease_until is null or q.lease_until<=now())
      and (p_id is null or q.feedback_id=p_id)
      and exists(select 1 from public.site_feedback_telegram_settings where singleton and enabled)
    order by q.available_at,q.created_at limit 3 for update skip locked
  ), claimed as (
    update public.site_feedback_telegram_outbox q
    set attempts=q.attempts+1,lease_id=pg_catalog.gen_random_uuid(),lease_until=now()+interval '2 minutes'
    from picked p where q.feedback_id=p.feedback_id
    returning q.feedback_id,q.lease_id
  )
  select c.feedback_id,f.category,f.created_at,c.lease_id
  from claimed c join public.site_feedback f on f.id=c.feedback_id;
$$;
revoke all on function public.claim_site_feedback_telegram(uuid) from public,anon,authenticated;
grant execute on function public.claim_site_feedback_telegram(uuid) to service_role;

create function public.finish_site_feedback_telegram(
  p_id uuid,p_lease uuid,p_sent boolean,p_message_id bigint default null,
  p_error text default null,p_retry_seconds integer default null
) returns boolean language plpgsql security invoker set search_path='' as $$
declare changed integer;
begin
  if p_sent is null or (p_sent and (p_message_id is null or p_message_id<=0))
    or (not p_sent and (p_error is null or p_error not in
      ('network','telegram_400','telegram_401','telegram_403','telegram_429','telegram_5xx','telegram_invalid'))) then
    raise exception 'Invalid notification result' using errcode='22023';
  end if;
  update public.site_feedback_telegram_outbox q
  set sent_at=case when p_sent then now() else null end,
    telegram_message_id=case when p_sent then p_message_id else null end,
    last_error=case when p_sent then null else p_error end,
    available_at=now()+pg_catalog.make_interval(secs=>greatest(60,least(86400,
      coalesce(p_retry_seconds,least(3600,60*(2^(q.attempts-1))::integer))))),
    lease_id=null,lease_until=null
  where q.feedback_id=p_id and q.lease_id=p_lease and q.sent_at is null;
  get diagnostics changed=row_count;
  return changed=1;
end;
$$;
revoke all on function public.finish_site_feedback_telegram(uuid,uuid,boolean,bigint,text,integer) from public,anon,authenticated;
grant execute on function public.finish_site_feedback_telegram(uuid,uuid,boolean,bigint,text,integer) to service_role;

-- Scheduler runs as the project owner; this function is not callable by clients.
create function public.invoke_site_feedback_telegram()
returns bigint language plpgsql security invoker set search_path='' as $$
declare request_id bigint;
begin
  if not exists(select 1 from public.site_feedback_telegram_settings where singleton and
      ((bot_chat_id is null and pair_expires_at>now()) or (enabled and exists(
        select 1 from public.site_feedback_telegram_outbox where sent_at is null
        and attempts<8 and available_at<=now() and (lease_until is null or lease_until<=now()))))) then
    return null;
  end if;
  select net.http_post(
    url:='https://jtpyocygkyjvljfejuyo.supabase.co/functions/v1/site-feedback-telegram',
    headers:=jsonb_build_object('Content-Type','application/json','X-CodeBloom-Dispatch-Key',
      (select decrypted_secret from vault.decrypted_secrets where name='codebloom_feedback_dispatch')),
    body:='{}'::jsonb,timeout_milliseconds:=30000
  ) into request_id;
  return request_id;
end;
$$;
revoke all on function public.invoke_site_feedback_telegram() from public,anon,authenticated,service_role;
select cron.schedule('codebloom-feedback-telegram','* * * * *','select public.invoke_site_feedback_telegram();');
