-- Add the JavaScript namespace to the existing owner-scoped sync endpoint.
create or replace function public.sync_learning_progress(changes jsonb default '{}'::jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  account_id uuid := auth.uid();
  merged jsonb;
  item record;
  previous jsonb;
  incoming_time bigint;
  incoming_counter bigint;
  incoming_actor text;
  did_change boolean := false;
begin
  if account_id is null then raise exception 'Authentication required' using errcode='42501'; end if;
  if changes is null or jsonb_typeof(changes) <> 'object' or octet_length(changes::text) > 2000000 then
    raise exception 'Invalid progress payload' using errcode='22023';
  end if;
  insert into public.learning_progress(user_id) values(account_id) on conflict(user_id) do nothing;
  select entries into merged from public.learning_progress where user_id=account_id for update;
  for item in select key,value from jsonb_each(changes) loop
    if length(item.key)>240 or item.key !~ '^(first|next|continuation|loops|javascript)/(drafts|inputs|solved|hints|quizzes|answers|verifiedRevisions|experiments|position)/[^/]+$'
      or split_part(item.key,'/',3) in ('__proto__','constructor','prototype')
      or jsonb_typeof(item.value) is distinct from 'object'
      or jsonb_typeof(item.value->'clock') is distinct from 'array'
      or jsonb_array_length(item.value->'clock') <> 3
      or jsonb_typeof(item.value->'clock'->0) is distinct from 'number'
      or jsonb_typeof(item.value->'clock'->1) is distinct from 'number'
      or jsonb_typeof(item.value->'clock'->2) is distinct from 'string'
      or jsonb_typeof(item.value->'deleted') is distinct from 'boolean'
      or octet_length(item.value::text)>70000 then
      raise exception 'Invalid progress entry' using errcode='22023';
    end if;
    if (item.value->'clock'->>0) !~ '^[0-9]{1,16}$' or (item.value->'clock'->>1) !~ '^[0-9]{1,10}$'
      or (item.value->'clock'->>2) !~ '^[a-zA-Z0-9-]{8,100}$'
      or not (item.value->>'deleted')::boolean and not (item.value ? 'value') then
      raise exception 'Invalid progress clock' using errcode='22023';
    end if;
    incoming_time := (item.value->'clock'->>0)::bigint;
    incoming_counter := (item.value->'clock'->>1)::bigint;
    if incoming_time>9007199254740991 or incoming_counter>9007199254740991 then
      raise exception 'Clock out of range' using errcode='22023';
    end if;
    incoming_actor := item.value->'clock'->>2;
    previous := merged->item.key;
    if previous is null or row(incoming_time,incoming_counter,incoming_actor collate "C") >
       row((previous->'clock'->>0)::bigint,(previous->'clock'->>1)::bigint,(previous->'clock'->>2) collate "C") then
      merged := jsonb_set(merged,array[item.key],item.value,true);did_change := true;
    end if;
  end loop;
  if octet_length(merged::text)>8000000 then raise exception 'Progress storage limit reached' using errcode='22023'; end if;
  if did_change then update public.learning_progress set entries=merged,updated_at=now() where user_id=account_id; end if;
  return merged;
end;
$$;
revoke all on function public.sync_learning_progress(jsonb) from public, anon;
grant execute on function public.sync_learning_progress(jsonb) to authenticated;
