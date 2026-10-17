-- Optional public pseudonyms; the underlying activity and account IDs stay private.
create schema learning_metrics;
revoke all on schema learning_metrics from public;
grant usage on schema learning_metrics to anon, authenticated;

create table learning_metrics.study_time (
  user_id uuid primary key references auth.users(id) on delete cascade,
  nickname text,
  is_public boolean not null default false,
  total_ms bigint not null default 0 check (total_ms >= 0),
  last_client uuid,
  last_pulse_at timestamptz,
  lease_until timestamptz,
  created_at timestamptz not null default now(),
  constraint public_name_required check (not is_public or nickname is not null),
  constraint valid_study_nickname check (nickname is null or nickname ~ '^[[:alnum:]][[:alnum:] _-]{1,23}$')
);
alter table learning_metrics.study_time enable row level security;
create policy study_read_own on learning_metrics.study_time for select to authenticated
  using (user_id=(select auth.uid()));
revoke all on learning_metrics.study_time from public, anon, authenticated;
create unique index study_public_nickname on learning_metrics.study_time(lower(nickname)) where is_public;
create index study_public_time on learning_metrics.study_time(total_ms desc, created_at, user_id) where is_public;

create function learning_metrics.profile() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare who uuid := auth.uid(); item learning_metrics.study_time%rowtype; place bigint;
begin
  if who is null then raise exception 'Authentication required' using errcode='28000'; end if;
  select * into item from learning_metrics.study_time where user_id=who;
  if item.is_public then
    select 1+count(*) into place from learning_metrics.study_time where is_public and total_ms>item.total_ms;
  end if;
  return jsonb_build_object('nickname',item.nickname,'is_public',coalesce(item.is_public,false),
    'total_seconds',coalesce(item.total_ms,0)/1000,'rank',place);
end;
$$;

create function learning_metrics.save_profile(display_name text, participate boolean) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare who uuid := auth.uid(); clean text := nullif(btrim(regexp_replace(display_name,'[[:space:]]+',' ','g')),'');
begin
  if who is null then raise exception 'Authentication required' using errcode='28000'; end if;
  if participate is null or (participate and clean is null)
     or (clean is not null and clean !~ '^[[:alnum:]][[:alnum:] _-]{1,23}$') then
    raise exception 'Invalid nickname' using errcode='22023';
  end if;
  insert into learning_metrics.study_time(user_id,nickname,is_public) values(who,clean,participate)
    on conflict(user_id) do update set nickname=excluded.nickname,is_public=excluded.is_public;
  return learning_metrics.profile();
end;
$$;

create function learning_metrics.pulse(client_id uuid, active boolean, elapsed_ms integer) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  who uuid := auth.uid(); item learning_metrics.study_time%rowtype;
  moment timestamptz; credit bigint := 0; owns boolean := false;
begin
  if who is null then raise exception 'Authentication required' using errcode='28000'; end if;
  if client_id is null or active is null or elapsed_ms is null or elapsed_ms<0 or elapsed_ms>30000 then
    raise exception 'Invalid activity interval' using errcode='22023';
  end if;
  insert into learning_metrics.study_time(user_id) values(who) on conflict(user_id) do nothing;
  select * into item from learning_metrics.study_time where user_id=who for update;
  -- Read the clock after acquiring the account lock: concurrent devices cannot add overlapping time.
  moment := clock_timestamp();
  owns := item.last_client=client_id and item.lease_until>=moment;
  if owns then
    credit := least(elapsed_ms,30000,greatest(0,floor(extract(epoch from (moment-item.last_pulse_at))*1000)::bigint));
    update learning_metrics.study_time set total_ms=total_ms+credit,
      last_client=case when active then client_id else null end,
      last_pulse_at=case when active then moment else null end,
      lease_until=case when active then moment+interval '40 seconds' else null end
      where user_id=who;
  elsif active and (item.lease_until is null or item.lease_until<moment) then
    -- First heartbeat establishes a baseline; it never credits a claimed past interval.
    update learning_metrics.study_time set last_client=client_id,last_pulse_at=moment,
      lease_until=moment+interval '40 seconds' where user_id=who;
    owns := true;
  end if;
  return jsonb_build_object('total_seconds',(select total_ms/1000 from learning_metrics.study_time where user_id=who),
    'credited_ms',credit,'leased',coalesce(owns,false));
end;
$$;

create function learning_metrics.leaderboard() returns jsonb
language sql stable security definer set search_path = '' as $$
  select coalesce(jsonb_agg(jsonb_build_object('rank',r.position,'nickname',r.nickname,
    'total_seconds',r.total_ms/1000) order by r.total_ms desc,r.created_at,r.user_id),'[]'::jsonb)
  from (select rank() over(order by total_ms desc) as position,nickname,total_ms,created_at,user_id
    from learning_metrics.study_time where is_public
    order by total_ms desc,created_at,user_id limit 50) r;
$$;

-- Public RPCs run as the caller. Privileged implementations are outside the exposed API schema.
create function public.study_profile() returns jsonb language sql stable security invoker set search_path = ''
  as $$ select learning_metrics.profile(); $$;
create function public.save_study_profile(display_name text, participate boolean) returns jsonb
  language sql security invoker set search_path = '' as $$ select learning_metrics.save_profile(display_name,participate); $$;
create function public.record_study_time(client_id uuid, active boolean, elapsed_ms integer) returns jsonb
  language sql security invoker set search_path = '' as $$ select learning_metrics.pulse(client_id,active,elapsed_ms); $$;
create function public.study_leaderboard() returns jsonb language sql stable security invoker set search_path = ''
  as $$ select learning_metrics.leaderboard(); $$;

revoke all on function learning_metrics.profile(),learning_metrics.save_profile(text,boolean),
  learning_metrics.pulse(uuid,boolean,integer),learning_metrics.leaderboard() from public,anon,authenticated;
revoke all on function public.study_profile(),public.save_study_profile(text,boolean),
  public.record_study_time(uuid,boolean,integer),public.study_leaderboard() from public,anon,authenticated;
grant execute on function learning_metrics.profile(),learning_metrics.save_profile(text,boolean),
  learning_metrics.pulse(uuid,boolean,integer),public.study_profile(),public.save_study_profile(text,boolean),
  public.record_study_time(uuid,boolean,integer) to authenticated;
grant execute on function learning_metrics.leaderboard(),public.study_leaderboard() to anon,authenticated;
