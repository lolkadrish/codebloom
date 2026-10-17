# Optional cross-device accounts

The learning site stays on GitHub Pages. Guest mode keeps the four existing
localStorage keys unchanged. Authenticated users have a separate on-device cache
and a private cloud record. Guest work is never silently assigned to an account.

## Activation

1. Connect the Supabase project that will own authentication and progress.
2. Apply `001_account_progress.sql`. It creates a private per-user table and an
   authenticated merge function. No anonymous access or direct client writes.
3. Enable email authentication. Configure real SMTP delivery for public learners:
   Supabase's default sender only supports pre-authorized project team addresses.
   Keep SMTP credentials in Supabase; they never belong in the repository.
4. Change **both Confirm sign up and Magic link or OTP** templates to include the code, for example:
   `<p>Your Python learning sign-in code: <strong>{{ .Token }}</strong></p>`.
   The checked-in `email-otp.html` is the shared Russian/Ukrainian/English template.
   Use subject `Код входа / Sign-in code · Python` for both templates.
   Set an appropriate OTP expiry and rate limit in Authentication settings.
   This site verifies codes directly; it does not accept tokens from URL hashes.
5. Put the HTTPS project URL and **publishable key** in
   `branching/account-config.js`, then enable it. Never use a service-role key.
   Disabled or invalid configuration leaves ordinary local learning functional
   and hides the account navigation; account.html explains that setup is pending.
6. Test two independent accounts and two devices against the live project before
   marking cloud accounts ready. Verify private rows and email delivery too.

## Storage and synchronization

- `python-first-step-v1`, `python-next-step-v1`,
  `python-continuation-step-v1`, `python-loops-step-v1`: unchanged guest saves.
- `python-account-mode-v1`: which account's cache is currently shown.
- `python-account-data-v1:<user UUID>`: separate entries, pending uploads,
  logical clock, last sync, and up to twenty older draft versions for that user.
- `python-learning-auth-v1`: the official SDK's authenticated session. Not
  included in progress documents, copied links, or imports.
- Language and theme stay in `python-learning-preferences-v1` on each device.

Drafts, solved code, revision markers, inputs, hints, quizzes, answers and the
required experiment sync across all four courses and three course languages.
The merge function locks the authenticated user's row and compares per-entry
hybrid logical clocks. Two devices changing different tasks retain both edits.
New edits made during a request remain queued. Offline changes remain on-device
until an authenticated connection succeeds. Shared URLs contain no session or
progress. Signing out restores the untouched guest save.

Conflicting draft versions received by a device are retained in that device's
account cache and can be copied from account.html. The newest version is active;
the site does not promise automatic merging of two different Python programs.

## Primary references

- https://supabase.com/docs/guides/auth/auth-email-passwordless
- https://supabase.com/docs/guides/auth/auth-smtp
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/reference/javascript/auth-onauthstatechange

Official Supabase JS SDK 2.118.0 is vendored with its license and NPM integrity
record. It is loaded only for enabled accounts and an account session or an
explicit visit to account.html; ordinary signed-out practice makes no auth API
requests. No account secret is bundled in the site.
