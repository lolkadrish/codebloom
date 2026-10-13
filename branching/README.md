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

The shared learning-guide.js adds seven absolute-beginner sections and detailed explanations for both courses, including line-by-line traces, input/output tables, comparison operators, common errors and prompts before practice. Examples do not solve the exercises.

The first if explorer starts at +5 and requires a successful explicit Python run with a negative temperature. Its completion is saved per language. It gates first-module checking, the module tick, course completion and automatic continuation. Existing solved programs remain intact; the first-course progress now has ten steps.


Теория находится на отдельной странице theory.html: семь вводных разделов и восемь тем для обоих курсов. В задачах остаются практика, эксперименты и ссылка на нужное объяснение. Язык и тема общие с курсами; чтение теории не отмечает задания выполненными.

Кнопка «Поделиться заданием» копирует обычную ссылку с идентификатором задачи. Ссылка не содержит код или прогресс. Другой браузер начинает со своими пустыми сохранениями; перезагрузка сохраняет собственные решения. Синхронизации между устройствами и аккаунтов нет. Люди, использующие один профиль браузера на одном устройстве, используют одно локальное сохранение.

Ошибки после запуска или проверки объясняются простым языком: отмечается строка, показывается причина и ссылка на правило. Проверены двадцать реальных ошибок Python на трёх языках, включая смешанные условие и print, двоеточия, скобки, кавычки, отступы, опечатки в командах и неизвестные переменные. Точное сообщение Python можно раскрыть отдельно. Код не исправляется автоматически, решения задач не подставляются.
