-- Feedback is private. Only the validated Edge Function may add messages.
create table public.site_feedback (
  id uuid primary key,
  created_at timestamptz not null default now(),
  category text not null check (category in ('bug','lesson','idea','other')),
  message text not null check (char_length(message) between 10 and 4000),
  email text check (email is null or char_length(email) <= 254),
  page text check (page is null or char_length(page) <= 300),
  language text not null check (language in ('en','ru','uk')),
  status text not null default 'new' check (status in ('new','read','resolved'))
);
create index site_feedback_created_at_idx on public.site_feedback (created_at desc);
alter table public.site_feedback enable row level security;
revoke all on public.site_feedback from public, anon, authenticated;
grant select, insert on public.site_feedback to service_role;

create table public.site_feedback_limits (
  source_hash text not null check (source_hash ~ '^[0-9a-f]{64}$'),
  bucket_start timestamptz not null,
  hits integer not null check (hits between 1 and 20),
  primary key (source_hash, bucket_start)
);
create index site_feedback_limits_expiry_idx on public.site_feedback_limits (bucket_start);
alter table public.site_feedback_limits enable row level security;
revoke all on public.site_feedback_limits from public, anon, authenticated;
grant select, insert, update, delete on public.site_feedback_limits to service_role;

create function public.record_site_feedback(
  p_id uuid, p_category text, p_message text, p_email text,
  p_page text, p_language text, p_source_hash text
) returns uuid language plpgsql security invoker set search_path = '' as $$
declare
  previous public.site_feedback%rowtype;
  used integer;
begin
  if p_id is null or p_category not in ('bug','lesson','idea','other')
     or p_language not in ('en','ru','uk') or p_source_hash !~ '^[0-9a-f]{64}$'
     or p_message is null or char_length(btrim(p_message)) not between 10 and 4000
     or char_length(p_email)>254 or char_length(p_page)>300 then
    raise exception 'Invalid feedback' using errcode='22023';
  end if;
  -- Idempotency is serialized so retries do not consume the limit twice.
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended('feedback:'||p_id::text,0));
  select * into previous from public.site_feedback where id=p_id;
  if found then
    if row(previous.category,previous.message,previous.email,previous.page,previous.language)
       is distinct from row(p_category,btrim(p_message),nullif(btrim(p_email),''),p_page,p_language) then
      raise exception 'Request id already used' using errcode='22023';
    end if;
    return p_id;
  end if;
  delete from public.site_feedback_limits where bucket_start < now()-interval '2 days';
  insert into public.site_feedback_limits(source_hash,bucket_start,hits)
    values(p_source_hash,date_trunc('hour',now()),1)
    on conflict(source_hash,bucket_start) do update set hits=site_feedback_limits.hits+1
      where site_feedback_limits.hits<20
    returning hits into used;
  if used is null then raise exception 'Feedback limit reached' using errcode='P0001'; end if;
  insert into public.site_feedback(id,category,message,email,page,language)
    values(p_id,p_category,btrim(p_message),nullif(btrim(p_email),''),p_page,p_language);
  return p_id;
end;
$$;
revoke all on function public.record_site_feedback(uuid,text,text,text,text,text,text) from public, anon, authenticated;
grant execute on function public.record_site_feedback(uuid,text,text,text,text,text,text) to service_role;
