# CodeBloom platform extension

CodeBloom uses the existing optional email-code account. Python save keys stay unchanged; JavaScript uses `javascript-learning-v1` locally and the `javascript` namespace inside each owner's existing private cloud document. JavaScript drafts and completions use language-neutral `js:task-id` keys: changing the language of explanations does not discard a JavaScript solution.

`javascript-progress.sql` adds that namespace to the existing sync function. Apply the original account setup first, then this upgrade. It does not migrate or delete existing rows, add public access, or permit direct client writes. The server still derives the owner from `auth.uid()` and accepts changes only to that user's document. No service key or SMTP credentials are part of the client.

The upgrade was verified in local PostgreSQL and against the hosted project using synthetic users inside a transaction that was rolled back. Python and JavaScript records coexisted; a second user could not read them; anonymous function execution and direct client writes remained denied.

## JavaScript execution

The pinned Acorn 8.15.0 npm distribution is included with its MIT license; its npm SHA-512 integrity was checked before extraction. It parses exercises and identifies the requested syntax. Loop bodies and functions receive execution-budget checks.

Student programs execute inside an iframe with `sandbox="allow-scripts"`, without `allow-same-origin`, forms, popups or top navigation. Ordinary programs additionally run in a dedicated Worker. The iframe's CSP blocks real network requests and external resources. API exercises use their explicit response fixtures. ES module exercises use real blob modules and the provided `helpers` module; arbitrary imports are rejected. A student program cannot read the parent page's storage or account session. The host validates frame identity and per-run tokens before accepting results. Run time and output are bounded; Stop removes the execution frame. This is a teaching environment, not a promise of anti-cheat protection against someone editing their own client.

DOM exercises use actual DOM elements and browser events. Their asynchronous listeners are awaited before observations. Each check begins with a new supplied DOM fixture. The visible preview is the last replayed case, and remains interactive until the next run. The supplied HTML, API responses and expected observations are shown alongside the exercise.

## Existing advisory baseline

Security advisors were checked before and after the upgrade; no new findings were introduced. The existing sync endpoint is intentionally an authenticated, owner-bound definer function with an empty search path and no anonymous execution. Its advisory explains the tradeoff: [authenticated definer execution](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable). The existing disabled leaked-password check is unchanged; this site's UI uses email codes: [password protection documentation](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).

## Learning scope and references

The JavaScript path contains 12 stages and 77 exercises, from first output and variables to DOM events, asynchronous data handling, closures, prototypes, classes, modules, testing and six final projects. It is a substantial foundation for independent projects, not a claim that every JavaScript topic has an endpoint. Explanations and exercises are available in English, Russian and Ukrainian. Existing Python material, task IDs, checks and saved work remain available.

Primary references used when checking runtime behavior: [MDN iframe sandbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#sandbox), [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security).
