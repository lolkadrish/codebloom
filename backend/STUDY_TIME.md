# Active study time

Apply `study-time.sql` once to provision the hosted database. Public API functions
are security invokers; privileged implementations live in the non-exposed
`learning_metrics` schema. The table has RLS and an owner-only select policy,
but clients receive no table privileges. Mutations always derive the owner from
`auth.uid()`. No email, account UUID, presence timestamp or draft is returned by
the public leaderboard.

The timer runs only for verified accounts in exercises and theory. It pauses
when the page is hidden, unfocused, offline or idle for two minutes. It sends
small activity intervals every 15 seconds, bounded by the server clock. One
40-second account lease prevents overlapping devices from multiplying time.
A first heartbeat or expired lease establishes a baseline without crediting
claimed history. Network failures and page closes can lose the most recent
short interval; time is an estimate of active site use, not proof of learning.
Ordinary guest practice makes no metric or auth requests.

All accounts start private. Learners opt into the public list by saving a
nickname and checking participation. They can opt out without losing time.
The public list contains the top 50 participants; exact ties share a rank.
An authenticated learner can also see their own rank outside the top 50.
Historical visits and guest time are never reconstructed or imported.

QA covers actual Postgres permissions, private profiles, Unicode and duplicate
names, opt-out, concurrent devices, expired leases, clock bounds, tied ranks,
the list limit, hidden/idle/offline/sleeping tabs and account switches.

Pre-existing project advisories are unchanged by this feature: the owner-bound
progress merge RPC intentionally uses SECURITY DEFINER in the public schema
([advisor explanation](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable)).
The existing auth password configuration also reports disabled leaked-password
protection ([Supabase guidance](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection));
the learning UI uses email OTP. This change does not alter auth providers.
