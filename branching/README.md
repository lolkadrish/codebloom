# Первый шаг / Перший крок / First step

An introductory, interactive Python branching lesson with a fully translated Russian, Ukrainian and English interface.

Start of the combined two-course learning path: https://lolkadrish.github.io/python-next-step/branching/

- Five topics: `if`, `else`, `elif`, nested conditions and conditional expressions.
- Nine exercises and ten quick understanding questions.
- Live branch explorers, three gradual hints per exercise, highlighted code and indentation controls.
- Light, dark, lavender and system themes. Theme and language choices are saved.
- Real Python execution in a Web Worker with Pyodide 0.27.7. Stop control, 12-second execution limit and output cap.
- Separate code drafts, input, progress, hints and quiz answers for each language in browser localStorage.
- No accounts, server execution or shared student data. Internet access is needed to download Pyodide and the optional web fonts. The fonts have system fallbacks.

The topic sequence and exercise ideas are inspired by [ProgInSchool’s introductory branching lesson](https://proginschool.github.io/tutorial/branching.html). Explanations, UI, translations and interactive implementation are newly written.

## Local use

Run `python -m http.server 8000` in the folder containing these files. Open `http://localhost:8000/`. In the full GitHub repository, start the server at its root and open `/branching/`. The next-step link opens the existing online course. Do not open index.html directly with a file URL: the Python worker needs an HTTP origin.

## Validation

The actual Python execution wrapper is checked against 138 input/output cases (46 cases in each of three languages), five error cases and the final exercise’s conditional-expression check. Browser checks cover Python execution, translated output, language-specific drafts, quizzes, interactive branch traces, themes and persistence.

Reference solutions and QA harnesses are kept outside the published files.


After all nine exercises are verified, the next-step course opens automatically. Both courses use this shared interface, themes and language preference. Keep this folder together with the repository root for the full local route. The combined source archive contains both courses.

The core Python runtime is now hosted in ../runtime/pyodide on the same site, with a two-minute startup watchdog and a retry button beside the result. Keep the runtime folder in the complete source archive for local use.
Startup now automatically retries against the official pinned jsDelivr distribution in a fresh worker. Both errors remain visible if neither source loads. Synchronous beginner exercises do not enable the optional async stack-switching runtime feature.
