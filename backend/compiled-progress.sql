-- C# / C++ progress namespaces. Applied to CodeBloom on 2026-10-19.
-- Extend only the existing owner's progress namespace allowlist. Keep the
-- existing ownership checks, validation, grants and function security unchanged.
begin;
do $upgrade$
declare
  definition text;
  previous_pattern constant text := '^(first|next|continuation|loops|javascript|pythonadvanced)/';
  expanded_pattern constant text := '^(first|next|continuation|loops|javascript|pythonadvanced|csharp|cpp)/';
begin
  select pg_get_functiondef('public.sync_learning_progress(jsonb)'::regprocedure) into definition;
  if position(expanded_pattern in definition) > 0 then
    raise notice 'Compiled-course progress namespaces already enabled';
  elsif position(previous_pattern in definition) = 0 then
    raise exception 'Unexpected progress function version; inspect before upgrading';
  else
    execute replace(definition, previous_pattern, expanded_pattern);
  end if;
end;
$upgrade$;
commit;
