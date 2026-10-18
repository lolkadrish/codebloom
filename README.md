# CodeBloom

Learn programming through small, progressive exercises, clear explanations, and projects you can run in your browser.

**[Open CodeBloom](https://lolkadrish.github.io/codebloom/)**

## Choose a language

| Path | What you will practice | Open |
| --- | --- | --- |
| Python | Sixteen stages: foundations, functions, sequences, lists, dictionaries and sets, files, modules, objects, deeper Python behavior, testing and algorithms, SQL and API data, async work, and eight projects. 157 exercises and one required introductory experiment. | [Python path](https://lolkadrish.github.io/codebloom/python-path.html) |
| JavaScript | Twelve stages, 77 exercises: first lines, decisions, loops, functions, arrays, objects, reliability and modules, DOM events, async work, deeper language concepts, tests and tools, and projects. | [JavaScript path](https://lolkadrish.github.io/codebloom/javascript.html) |

English is the default for new visitors. Switch to Russian or Ukrainian to change the explanations, exercise statements, hints and interface. Previous language and theme preferences are respected. JavaScript solutions are retained when the explanation language changes.

The JavaScript path ends with six projects: a bill calculator, order summary, bounded counter, live search, task app, and asynchronous product dashboard. Every stage is available; the later stages are working exercises, not placeholders. The path is a foundation for independent development and continued learning.

## Continue with Python

The [Python path](https://lolkadrish.github.io/codebloom/python-path.html) preserves the first four stages and adds 12 further stages, with 96 new exercises and 96 runnable worked examples in English, Russian and Ukrainian. The first new lesson follows loops and begins by calling a simple function. Each stage contains eight exercises.

Use [theory](https://lolkadrish.github.io/codebloom/python-advanced/theory.html) for worked examples and [the local project guide](https://lolkadrish.github.io/codebloom/python-advanced/local-guide.html) for Python installation, virtual environments, multi-file applications, tests, debugging, Git, HTTP clients, async entry points, packaging and continued specialization. Browser exercises execute real temporary files, Python modules, SQLite queries and asynchronous code. API exercises use explicit response fixtures.

The new continuation was checked with 299 reference cases plus 96 worked examples in real Pyodide. Empty starters, required syntax, stopping, output and step bounds, temporary-file reset and storage separation are also checked. This is a route to independent projects; professional depth still comes from building and maintaining software.

## Learn by doing

- Read a small explanation and a worked example of the new tool.
- Write your own code, run it, then check all supplied cases.
- Compare the real input, expected result, and your output when something fails.
- Use the shared theory page and task hints whenever you need them.

Python executes in the bundled Pyodide worker, with a CDN fallback. JavaScript executes in an isolated sandbox; ordinary exercises use a worker, page exercises use real DOM elements, and ES module lessons use real module execution. API lessons use visible, reproducible response fixtures. See [platform implementation notes](backend/PLATFORM.md).

## Keep your progress

An account is optional. Continue locally in the current browser, or sign in with an email code to sync Python and JavaScript work across devices. Guest and account saves remain separate. Import your own guest progress using the explicit account-page action. A shared exercise link contains the task address, not a session or another person's progress.

The account offer is shown once, with persistent browser storage and a site-scoped cookie fallback. Clearing all site data or blocking every form of storage prevents remembering earlier visits.

The optional [study leaderboard](https://lolkadrish.github.io/codebloom/leaderboard.html) counts active learning time. Public participation requires an explicit pseudonym and opt-in; emails remain private. Hidden tabs and long idle periods do not count.

## Existing Python links and saves

The four original Python save keys and all task IDs are preserved. The former root second-stage course now lives at `python.html`; old root task hashes route to it. Compatibility pages at the previous GitHub Pages address forward existing learning links. The origin remains `lolkadrish.github.io`, so browser saves remain accessible after the path change.

## Run locally

Serve this directory with any static HTTP server, for example `python -m http.server 8765`, then open `http://localhost:8765/`. A direct `file://` URL cannot provide the worker environment. No frontend build step is required.

## Accounts and verification

Account setup: [backend/ACCOUNT_SETUP.md](backend/ACCOUNT_SETUP.md), original schema: [backend/001_account_progress.sql](backend/001_account_progress.sql), JavaScript upgrade: [backend/javascript-progress.sql](backend/javascript-progress.sql), Python continuation upgrade: [backend/python-advanced-progress.sql](backend/python-advanced-progress.sql). Use a publishable frontend key; never put a service key or SMTP credentials in client files.

The JavaScript curriculum was checked with 261 real browser cases across all 77 reference solutions, including DOM interactions, async callbacks and modules. Unsolved starters, syntax feedback, execution bounds, sandbox separation, language switching and saved work were also checked. Existing Python controllers and private account merging remain covered by regression checks.

Original Python topic sequence reference: [ProgInSchool](https://proginschool.github.io/tutorial/branching.html). CodeBloom explanations, interface, gradual practice and JavaScript curriculum are authored for this site. Acorn is distributed under its included MIT license.
