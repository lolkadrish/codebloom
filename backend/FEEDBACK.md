# CodeBloom feedback

The Feedback button opens a private form on every public page. It accepts a category,
message, optional reply email, and an optional clean lesson path. It does not read
account sessions, saved code, progress, browser history, or URL query parameters.

The deployed `site-feedback` Edge Function validates the public project API key,
allowed origin, body size and fields, then calls `record_site_feedback` with its
server-only environment credential. `verify_jwt=false` is intentional: this endpoint
accepts guest feedback and performs its own API-key and payload checks. Client API
keys are public identifiers; validation and rate limits protect the write-only intake.

Both tables have RLS enabled and no client policies or anonymous/authenticated grants.
The invoker RPC can only be called by `service_role`. No browser can list messages.
The informational "RLS enabled without policies" advisory is intentional here.

Retries reuse a UUID, so a delayed response cannot create duplicate messages. Basic
abuse control allows 20 new messages per connection per hour. Source addresses are
HMAC-hashed with a server-only key; raw addresses are not stored in the tables.
Old limit buckets are cleaned after two days. The original feedback stays available
for review; no email notifications are sent by this feature.

## Read the inbox

In the Supabase dashboard, open **Table Editor → public.site_feedback**, sorted by
`created_at` descending. `status` can be marked `new`, `read` or `resolved` by the
project owner. Email is optional and private. The form only confirms delivery after
the database acknowledges the record.

For a clean migration on another project, apply `feedback.sql` once and deploy
`feedback/index.ts` together with `_shared/feedback-telegram.ts`. The Edge runtime supplies `SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY`; do not put a service key in frontend files.
If the frontend publishable key is rotated, update the public identifier allowlist
in the Edge Function as well as `branching/account-config.js`. Production origin:
`https://lolkadrish.github.io`. Local review origins: port 8894 and QA port 8898.

## Telegram notifications

The owner receives a private notification from @CodeBloomNotifyBot with the category,
feedback ID and an **Open feedback** button. Visitor messages, email, code and progress
are not sent to Telegram. The link opens the existing private Supabase inbox.

Apply `feedback-telegram.sql` after `feedback.sql` and deploy
`feedback-telegram/index.ts` plus `_shared/feedback-telegram.ts`. Set
`CODEBLOOM_TELEGRAM_BOT_TOKEN` in **Edge Functions → Secrets**; never put it in
the website, repository or chat. The paired private chat ID is held in the protected
`site_feedback_telegram_settings` table. Existing feedback is not backfilled.

To link the owner's chat, the project owner executes
`select public.begin_site_feedback_telegram_pairing();`, opens
`https://t.me/CodeBloomNotifyBot?start=cb_<returned-code>` and presses Start.
The single-use link expires after 20 minutes. Only a private chat presenting that
exact code can bind. The worker polls during this brief pairing window and confirms
the binding in Telegram. An ordinary /start from another person cannot subscribe.

The intake acknowledges the saved feedback first, then attempts notification in a
background task. A transactional outbox and minute scheduler retry delivery with
backoff, up to 8 attempts. Idle scheduling does not invoke the Edge Function. A lease
prevents concurrent processing; retries of the feedback form do not add notifications.
Telegram has no sendMessage idempotency key: an acknowledgment lost after Telegram
accepts the message can still lead to a later duplicate.

Delivery state is in `site_feedback_telegram_outbox`: `sent_at`, `attempts` and safe
`last_error` codes. To retry an exhausted item, the owner can reset its attempts to 0
and available_at to now after fixing the bot token or unblocking the bot. To pause
notifications, set `enabled=false` in the single settings row. Saved feedback stays
in the inbox. No token, visitor content or raw Telegram errors are logged.

The scheduler's separate random key is in Vault, with only its hash in the settings.
The worker requires that key, and all queue/pairing RPCs are service-only SECURITY
INVOKER functions. Tables have RLS and no browser grants. The owner-only scheduler
and pairing-link functions cannot be executed by visitors or service-role clients.
See the [Supabase scheduling guide](https://supabase.com/docs/guides/functions/schedule-functions)
and [Telegram sendMessage](https://core.telegram.org/bots/api#sendmessage).
