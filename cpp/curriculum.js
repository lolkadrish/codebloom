window.CB_COMPILED_COURSE = {
  "id": "cpp",
  "name": "C++",
  "prefix": "cpp:",
  "storageKey": "cpp-learning-v1",
  "compiler": "gcc-13.2.0",
  "runtime": "C++17 · GCC 13.2",
  "filename": "main.cpp",
  "stages": [
    {
      "id": "first-lines",
      "title": {
        "en": "Your first lines",
        "ru": "Твои первые строки",
        "uk": "Твої перші рядки"
      },
      "intro": {
        "en": "Display text, calculate, and change one saved value.",
        "ru": "Выводи текст, считай и меняй одно сохранённое значение.",
        "uk": "Виводь текст, рахуй і змінюй одне збережене значення."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "A program is a sequence of instructions. Start by reading it from top to bottom. Today you only need to write inside the prepared main block. The surrounding lines make a complete program; you do not have to invent them.",
            "ru": "Программа — это команды, которые выполняются по порядку сверху вниз. Пока пиши команды внутри готового блока запуска. Внешние строки делают файл полноценной программой: сейчас их не нужно придумывать самому.",
            "uk": "Програма — це команди, що виконуються послідовно згори вниз. Поки пиши команди всередині готового блоку запуску. Зовнішні рядки роблять файл повноцінною програмою: зараз їх не потрібно вигадувати самостійно."
          },
          {
            "en": "`#include <iostream>` makes input and output tools available. Execution starts in `int main()`. Its braces enclose the instructions. `return 0;` reports successful completion at the end.",
            "ru": "`#include <iostream>` подключает инструменты ввода и вывода. Выполнение начинается с `int main()`. В её фигурных скобках находятся команды. В конце `return 0;` сообщает об успешном завершении.",
            "uk": "`#include <iostream>` підключає інструменти введення та виведення. Виконання починається з `int main()`. У її фігурних дужках розташовані команди. Наприкінці `return 0;` повідомляє про успішне завершення."
          },
          {
            "en": "`std::cout << value << '\\n';` displays a value and starts a new output line. `#include <iostream>` connects the input/output library. Text goes between double quotes. A calculation goes outside quotes: `2 + 3` gives 5, while `\"2 + 3\"` is just text.",
            "ru": "`std::cout << значение << '\\n';` показывает значение и переходит на новую строку. `#include <iostream>` подключает библиотеку ввода и вывода. Текст записывается в двойных кавычках. Вычисление пишется без кавычек: `2 + 3` даст 5, а `\"2 + 3\"` останется текстом.",
            "uk": "`std::cout << значення << '\\n';` показує значення й переходить на новий рядок. `#include <iostream>` підключає бібліотеку введення та виведення. Текст записується у подвійних лапках. Обчислення пишеться без лапок: `2 + 3` дасть 5, а `\"2 + 3\"` залишиться текстом."
          },
          {
            "en": "`int score = 4;` creates a variable named score that stores a whole number. `=` means “calculate the right-hand side, then save the result under the name on the left.” It does not mean mathematical equality.",
            "ru": "`int score = 4;` создаёт переменную score и сохраняет в ней целое число. Знак `=` читается так: «вычисли справа, затем сохрани результат под именем слева». Это команда сохранения, а не математическое равенство.",
            "uk": "`int score = 4;` створює змінну score й зберігає в ній ціле число. Знак `=` читається так: «обчисли праворуч, потім збережи результат під іменем ліворуч». Це команда збереження, а не математична рівність."
          },
          {
            "en": "Read `score = score + 2;` in three steps: take the current 4, add 2, replace score with 6. The old value was used before it was replaced. Most instructions end with `;`; braces `{ }` group instructions.",
            "ru": "`score = score + 2;` разбирается на три действия: взять старое 4, прибавить 2, сохранить 6 обратно в score. Старое значение успевает участвовать в вычислении. Большинство команд заканчивается `;`, а фигурные скобки `{ }` объединяют команды.",
            "uk": "`score = score + 2;` розбирається на три дії: взяти старе 4, додати 2, зберегти 6 назад у score. Старе значення встигає взяти участь в обчисленні. Більшість команд закінчується `;`, а фігурні дужки `{ }` об’єднують команди."
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    int score = 4;\n    score = score + 2;\n    std::cout << score << '\\n';\n    return 0;\n}\n",
          "input": "",
          "output": "6\n"
        },
        "lines": [
          {
            "en": "Create score and save 4.",
            "ru": "Создаём score и сохраняем 4.",
            "uk": "Створюємо score та зберігаємо 4."
          },
          {
            "en": "Read the old score, add 2, save 6.",
            "ru": "Берём старое score, прибавляем 2, сохраняем 6.",
            "uk": "Беремо старе score, додаємо 2, зберігаємо 6."
          },
          {
            "en": "Display the latest stored value.",
            "ru": "Показываем последнее сохранённое значение.",
            "uk": "Показуємо останнє збережене значення."
          }
        ],
        "trace": [
          {
            "en": "Before the update: score = 4.",
            "ru": "До изменения: score = 4.",
            "uk": "До зміни: score = 4."
          },
          {
            "en": "After the update: score = 6. Output: 6.",
            "ru": "После изменения: score = 6. Вывод: 6.",
            "uk": "Після зміни: score = 6. Виведення: 6."
          }
        ],
        "mistake": {
          "en": "Writing `score = 2` replaces the value with 2. To add 2, the right side must use the old score: `score + 2`.",
          "ru": "`score = 2` заменит значение на 2. Чтобы прибавить 2, справа нужно использовать старое score: `score + 2`.",
          "uk": "`score = 2` замінить значення на 2. Щоб додати 2, праворуч потрібно використати старе score: `score + 2`."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "hello",
          "revision": 1,
          "title": {
            "en": "Make the program speak",
            "ru": "Пусть программа заговорит",
            "uk": "Нехай програма заговорить"
          },
          "learn": {
            "en": "The prepared program is empty. Put one output instruction inside its braces. The quoted text is the value you want to show.",
            "ru": "Готовая программа пока пустая. Внутри её скобок нужна одна команда вывода. Текст в кавычках — это то, что увидит человек.",
            "uk": "Готова програма поки порожня. Усередині її дужок потрібна одна команда виведення. Текст у лапках — це те, що побачить людина."
          },
          "steps": [
            {
              "en": "Print exactly `Hello, CodeBloom!` on one line. No input is needed.",
              "ru": "Выведи ровно `Hello, CodeBloom!` одной строкой. Ввод не нужен.",
              "uk": "Виведи рівно `Hello, CodeBloom!` одним рядком. Введення не потрібне."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "",
              "output": "Hello, CodeBloom!\n"
            }
          ],
          "hints": [
            {
              "en": "Use the output command from the theory.",
              "ru": "Возьми команду вывода из теории.",
              "uk": "Візьми команду виведення з теорії."
            },
            {
              "en": "Keep the message inside double quotes and finish the instruction with a semicolon.",
              "ru": "Сообщение должно быть в двойных кавычках, а в конце команды нужна точка с запятой.",
              "uk": "Повідомлення має бути в подвійних лапках, а наприкінці команди потрібна крапка з комою."
            }
          ],
          "features": []
        },
        {
          "id": "two-lines",
          "revision": 1,
          "title": {
            "en": "Two instructions, two lines",
            "ru": "Две команды — две строки",
            "uk": "Дві команди — два рядки"
          },
          "learn": {
            "en": "Each output instruction runs in order. A new-line instruction keeps the two messages on separate lines.",
            "ru": "Команды выполняются по очереди. Перевод строки позволяет показать второе сообщение под первым.",
            "uk": "Команди виконуються по черзі. Перехід рядка дає змогу показати друге повідомлення під першим."
          },
          "steps": [
            {
              "en": "Print `Start`, then print `Ready` on the next line.",
              "ru": "Выведи `Start`, а на следующей строке — `Ready`.",
              "uk": "Виведи `Start`, а на наступному рядку — `Ready`."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "",
              "output": "Start\nReady\n"
            }
          ],
          "hints": [
            {
              "en": "Use two output instructions.",
              "ru": "Используй две команды вывода.",
              "uk": "Використай дві команди виведення."
            },
            {
              "en": "The first instruction shows Start; the second shows Ready.",
              "ru": "Первая команда показывает Start, вторая — Ready.",
              "uk": "Перша команда показує Start, друга — Ready."
            }
          ],
          "features": []
        },
        {
          "id": "calculate",
          "revision": 1,
          "title": {
            "en": "Let the program calculate",
            "ru": "Пусть программа посчитает",
            "uk": "Нехай програма порахує"
          },
          "learn": {
            "en": "An expression outside quotes is calculated before it is displayed. Multiplication uses `*`.",
            "ru": "Выражение без кавычек вычисляется перед выводом. Для умножения используется `*`.",
            "uk": "Вираз без лапок обчислюється перед виведенням. Для множення використовується `*`."
          },
          "steps": [
            {
              "en": "Display the result of `7 * 6`, using the calculation in your code.",
              "ru": "Выведи результат `7 * 6`, записав в коде само вычисление.",
              "uk": "Виведи результат `7 * 6`, записавши в коді саме обчислення."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "",
              "output": "42\n"
            }
          ],
          "hints": [
            {
              "en": "Put the expression where the output value goes.",
              "ru": "Поставь выражение на место выводимого значения.",
              "uk": "Постав вираз на місце значення для виведення."
            },
            {
              "en": "Quotes would turn the calculation into plain text.",
              "ru": "Кавычки превратят вычисление в обычный текст.",
              "uk": "Лапки перетворять обчислення на звичайний текст."
            }
          ],
          "features": [
            "multiply"
          ]
        },
        {
          "id": "save-value",
          "revision": 1,
          "title": {
            "en": "Give a number a name",
            "ru": "Дай числу имя",
            "uk": "Дай числу ім’я"
          },
          "learn": {
            "en": "`int` means a whole-number variable. Declare the name once, then use that name to read the saved number.",
            "ru": "`int` означает переменную для целого числа. Объяви имя один раз, затем используй его, чтобы получить сохранённое число.",
            "uk": "`int` означає змінну для цілого числа. Оголоси ім’я один раз, потім використовуй його, щоб отримати збережене число."
          },
          "steps": [
            {
              "en": "Create an integer variable `coins` with value 12. Display `coins`.",
              "ru": "Создай целочисленную переменную `coins` со значением 12. Выведи `coins`.",
              "uk": "Створи цілочисельну змінну `coins` зі значенням 12. Виведи `coins`."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "",
              "output": "12\n"
            }
          ],
          "hints": [
            {
              "en": "A declaration has a type, a name, and a value.",
              "ru": "В объявлении есть тип, имя и значение.",
              "uk": "В оголошенні є тип, ім’я та значення."
            },
            {
              "en": "For example, `int apples = 3;` stores 3 under apples. Use the names and value from your task.",
              "ru": "Например, `int apples = 3;` сохраняет 3 под именем apples. Возьми имя и число из своей задачи.",
              "uk": "Наприклад, `int apples = 3;` зберігає 3 під іменем apples. Візьми ім’я та число зі своєї задачі."
            }
          ],
          "features": [
            "variable"
          ]
        },
        {
          "id": "change-value",
          "revision": 1,
          "title": {
            "en": "Update a saved number",
            "ru": "Измени сохранённое число",
            "uk": "Зміни збережене число"
          },
          "learn": {
            "en": "To change a variable, assign to the same name again. Use the name on the right to include its current value.",
            "ru": "Чтобы изменить переменную, снова сохрани значение под тем же именем. Имя справа позволяет использовать её текущее значение.",
            "uk": "Щоб змінити змінну, знову збережи значення під тим самим іменем. Ім’я праворуч дає змогу використати її поточне значення."
          },
          "steps": [
            {
              "en": "Save 10 in `coins`. Add 3 to the saved value. Display the new value.",
              "ru": "Сохрани 10 в `coins`. Прибавь к сохранённому значению 3. Выведи новое значение.",
              "uk": "Збережи 10 у `coins`. Додай до збереженого значення 3. Виведи нове значення."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "",
              "output": "13\n"
            }
          ],
          "hints": [
            {
              "en": "First store the starting value, then update it.",
              "ru": "Сначала сохрани начальное значение, затем измени его.",
              "uk": "Спочатку збережи початкове значення, потім зміни його."
            },
            {
              "en": "Read the update as: old coins + 3 → new coins.",
              "ru": "Читай изменение так: старое coins + 3 → новое coins.",
              "uk": "Читай зміну так: старе coins + 3 → нове coins."
            }
          ],
          "features": [
            "update"
          ]
        }
      ]
    },
    {
      "id": "input-values",
      "title": {
        "en": "Use what a person enters",
        "ru": "Работай с вводом человека",
        "uk": "Працюй із введенням людини"
      },
      "intro": {
        "en": "Read text, read numbers, then calculate from input.",
        "ru": "Читай текст и числа, затем считай по входным данным.",
        "uk": "Читай текст і числа, потім рахуй за вхідними даними."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "A value in the input area is supplied to your program when it runs. The program must read it. Do not replace it with the example value: each check can supply different data.",
            "ru": "Число или текст справа поступает в программу при запуске. Его нужно прочитать. Не заменяй ввод числом из примера: в следующей проверке данные будут другими.",
            "uk": "Число або текст праворуч надходить у програму під час запуску. Його потрібно прочитати. Не замінюй введення числом із прикладу: у наступній перевірці дані будуть іншими."
          },
          {
            "en": "`std::getline(std::cin, name)` reads a whole text line, including spaces. `std::cin >> n` reads a number into an existing variable. Read values in the order given in the task.",
            "ru": "`std::getline(std::cin, name)` читает целую строку текста вместе с пробелами. `std::cin >> n` читает число в уже объявленную переменную. Читай данные в порядке из условия.",
            "uk": "`std::getline(std::cin, name)` читає цілий рядок тексту разом із пробілами. `std::cin >> n` читає число у вже оголошену змінну. Читай дані в порядку з умови."
          },
          {
            "en": "Store each input under a useful name. For a calculation, ask: which values come from the person, what operation is needed, and which result should be displayed?",
            "ru": "Сохраняй каждый ввод под понятным именем. Для расчёта спроси себя: какие значения вводит человек, какое действие нужно выполнить и какой результат показать?",
            "uk": "Зберігай кожне введення під зрозумілим іменем. Для розрахунку запитай себе: які значення вводить людина, яку дію потрібно виконати та який результат показати?"
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    int price;\n    std::cin >> price;\n    std::cout << price + 4 << '\\n';\n    return 0;\n}\n",
          "input": "9\n",
          "output": "13\n"
        },
        "lines": [
          {
            "en": "Read 9 and save it as price.",
            "ru": "Читаем 9 и сохраняем в price.",
            "uk": "Читаємо 9 та зберігаємо в price."
          },
          {
            "en": "Add a fixed 4 and show 13.",
            "ru": "Прибавляем постоянное 4 и показываем 13.",
            "uk": "Додаємо постійне 4 й показуємо 13."
          }
        ],
        "trace": [
          {
            "en": "Input 9 → price 9 → output 13.",
            "ru": "Ввод 9 → price 9 → вывод 13.",
            "uk": "Введення 9 → price 9 → виведення 13."
          },
          {
            "en": "Input 0 → price 0 → output 4.",
            "ru": "Ввод 0 → price 0 → вывод 4.",
            "uk": "Введення 0 → price 0 → виведення 4."
          }
        ],
        "mistake": {
          "en": "Do not print explanations such as “Enter a number”. The checker expects only the requested result.",
          "ru": "Не печатай подсказки вроде «Введите число». Проверка ждёт только результат, указанный в условии.",
          "uk": "Не друкуй підказки на кшталт «Введіть число». Перевірка очікує лише результат, указаний в умові."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "echo-text",
          "revision": 1,
          "title": {
            "en": "Repeat the entered text",
            "ru": "Повтори введённый текст",
            "uk": "Повтори введений текст"
          },
          "learn": {
            "en": "Read an entire line and save it in a string variable. Printing that variable shows the text that was actually entered.",
            "ru": "Прочитай целую строку и сохрани в строковую переменную. Вывод переменной покажет именно введённый текст.",
            "uk": "Прочитай цілий рядок і збережи в рядкову змінну. Виведення змінної покаже саме введений текст."
          },
          "steps": [
            {
              "en": "Read a line `name`. Print it unchanged, including spaces between words.",
              "ru": "Прочитай строку `name`. Выведи её без изменений, сохранив пробелы между словами.",
              "uk": "Прочитай рядок `name`. Виведи його без змін, зберігши пробіли між словами."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "Alex\n",
              "output": "Alex\n"
            },
            {
              "input": "Mary Jane\n",
              "output": "Mary Jane\n"
            },
            {
              "input": "\n",
              "output": "\n"
            }
          ],
          "hints": [
            {
              "en": "Read the input first; the examples are not fixed answers.",
              "ru": "Сначала прочитай ввод: примеры не являются постоянными ответами.",
              "uk": "Спочатку прочитай введення: приклади не є постійними відповідями."
            },
            {
              "en": "Calculate from the saved variables and display the result once.",
              "ru": "Вычисляй по сохранённым переменным и выведи результат один раз.",
              "uk": "Обчислюй за збереженими змінними та виведи результат один раз."
            }
          ],
          "features": []
        },
        {
          "id": "greeting",
          "revision": 1,
          "title": {
            "en": "Build a greeting",
            "ru": "Собери приветствие",
            "uk": "Склади привітання"
          },
          "learn": {
            "en": "A fixed text and a saved string can be joined with `+`. The space after the comma is part of the quoted text.",
            "ru": "Постоянный текст и сохранённую строку можно соединить через `+`. Пробел после запятой входит в текст в кавычках.",
            "uk": "Постійний текст і збережений рядок можна з’єднати через `+`. Пробіл після коми входить у текст у лапках."
          },
          "steps": [
            {
              "en": "Read a name. Print `Hi, ` followed by that name on one line.",
              "ru": "Прочитай имя. Выведи `Hi, ` и сразу после него это имя одной строкой.",
              "uk": "Прочитай ім’я. Виведи `Hi, ` й одразу після нього це ім’я одним рядком."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "Sam\n",
              "output": "Hi, Sam\n"
            },
            {
              "input": "Nika\n",
              "output": "Hi, Nika\n"
            },
            {
              "input": "Mary Jane\n",
              "output": "Hi, Mary Jane\n"
            }
          ],
          "hints": [
            {
              "en": "Read the input first; the examples are not fixed answers.",
              "ru": "Сначала прочитай ввод: примеры не являются постоянными ответами.",
              "uk": "Спочатку прочитай введення: приклади не є постійними відповідями."
            },
            {
              "en": "Calculate from the saved variables and display the result once.",
              "ru": "Вычисляй по сохранённым переменным и выведи результат один раз.",
              "uk": "Обчислюй за збереженими змінними та виведи результат один раз."
            }
          ],
          "features": []
        },
        {
          "id": "next-number",
          "revision": 1,
          "title": {
            "en": "The next integer",
            "ru": "Следующее целое число",
            "uk": "Наступне ціле число"
          },
          "learn": {
            "en": "After reading a number, adding 1 gives the next integer. Negative integers work the same way.",
            "ru": "После чтения числа прибавление 1 даёт следующее целое. С отрицательными числами правило такое же.",
            "uk": "Після читання числа додавання 1 дає наступне ціле. Для від’ємних чисел правило таке саме."
          },
          "steps": [
            {
              "en": "Read an integer `n` from −100 to 100. Print the next integer.",
              "ru": "Прочитай целое `n` от −100 до 100. Выведи следующее целое число.",
              "uk": "Прочитай ціле `n` від −100 до 100. Виведи наступне ціле число."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "4\n",
              "output": "5\n"
            },
            {
              "input": "-1\n",
              "output": "0\n"
            },
            {
              "input": "0\n",
              "output": "1\n"
            }
          ],
          "hints": [
            {
              "en": "Read the input first; the examples are not fixed answers.",
              "ru": "Сначала прочитай ввод: примеры не являются постоянными ответами.",
              "uk": "Спочатку прочитай введення: приклади не є постійними відповідями."
            },
            {
              "en": "Calculate from the saved variables and display the result once.",
              "ru": "Вычисляй по сохранённым переменным и выведи результат один раз.",
              "uk": "Обчислюй за збереженими змінними та виведи результат один раз."
            }
          ],
          "features": []
        },
        {
          "id": "add-inputs",
          "revision": 1,
          "title": {
            "en": "Two inputs, one sum",
            "ru": "Два ввода — одна сумма",
            "uk": "Два введення — одна сума"
          },
          "learn": {
            "en": "Two supplied values need two reads. Save the first number before reading the second.",
            "ru": "Для двух значений нужны два чтения. Сохрани первое число, прежде чем читать второе.",
            "uk": "Для двох значень потрібні два читання. Збережи перше число, перш ніж читати друге."
          },
          "steps": [
            {
              "en": "Read integers `a` and `b` from separate lines (−100 to 100). Print their sum.",
              "ru": "Прочитай целые `a` и `b` с разных строк (от −100 до 100). Выведи их сумму.",
              "uk": "Прочитай цілі `a` та `b` з різних рядків (від −100 до 100). Виведи їхню суму."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n8\n",
              "output": "11\n"
            },
            {
              "input": "-5\n5\n",
              "output": "0\n"
            },
            {
              "input": "0\n12\n",
              "output": "12\n"
            }
          ],
          "hints": [
            {
              "en": "Read the input first; the examples are not fixed answers.",
              "ru": "Сначала прочитай ввод: примеры не являются постоянными ответами.",
              "uk": "Спочатку прочитай введення: приклади не є постійними відповідями."
            },
            {
              "en": "Calculate from the saved variables and display the result once.",
              "ru": "Вычисляй по сохранённым переменным и выведи результат один раз.",
              "uk": "Обчислюй за збереженими змінними та виведи результат один раз."
            }
          ],
          "features": []
        },
        {
          "id": "add-fee",
          "revision": 1,
          "title": {
            "en": "Change an entered value",
            "ru": "Измени введённое значение",
            "uk": "Зміни введене значення"
          },
          "learn": {
            "en": "The update pattern also works with input: save the original price, then replace it with price plus a fee.",
            "ru": "Приём изменения работает и с вводом: сохрани исходную цену, затем замени её на цену с доплатой.",
            "uk": "Прийом зміни працює і з введенням: збережи початкову ціну, потім заміни її на ціну з доплатою."
          },
          "steps": [
            {
              "en": "Read a nonnegative integer `price` up to 1000. Increase it by 5 and print the updated value.",
              "ru": "Прочитай целое неотрицательное `price` до 1000. Увеличь его на 5 и выведи новое значение.",
              "uk": "Прочитай ціле невід’ємне `price` до 1000. Збільш його на 5 та виведи нове значення."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "10\n",
              "output": "15\n"
            },
            {
              "input": "0\n",
              "output": "5\n"
            },
            {
              "input": "999\n",
              "output": "1004\n"
            }
          ],
          "hints": [
            {
              "en": "Read the input first; the examples are not fixed answers.",
              "ru": "Сначала прочитай ввод: примеры не являются постоянными ответами.",
              "uk": "Спочатку прочитай введення: приклади не є постійними відповідями."
            },
            {
              "en": "Calculate from the saved variables and display the result once.",
              "ru": "Вычисляй по сохранённым переменным и выведи результат один раз.",
              "uk": "Обчислюй за збереженими змінними та виведи результат один раз."
            }
          ],
          "features": [
            "update"
          ]
        }
      ]
    },
    {
      "id": "conditions",
      "title": {
        "en": "Choose what happens",
        "ru": "Выбирай, что произойдёт",
        "uk": "Обирай, що відбудеться"
      },
      "intro": {
        "en": "Compare values, choose a branch, and combine checks.",
        "ru": "Сравнивай значения, выбирай ветку и объединяй проверки.",
        "uk": "Порівнюй значення, обирай гілку та поєднуй перевірки."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "A comparison is a question with two possible answers. `age >= 18` asks whether age is at least 18. The boundary 18 is included. `>` excludes the boundary. `==` compares values; `=` saves a value.",
            "ru": "Сравнение — это вопрос с двумя ответами. `age >= 18` спрашивает, не меньше ли возраст 18. Само 18 подходит. Знак `>` границу не включает. `==` сравнивает значения, а `=` сохраняет значение.",
            "uk": "Порівняння — це запитання з двома відповідями. `age >= 18` запитує, чи вік не менший за 18. Саме 18 підходить. Знак `>` межу не включає. `==` порівнює значення, а `=` зберігає значення."
          },
          {
            "en": "`if (condition) { ... }` runs its block when the answer is true. `else { ... }` runs when it is false. In this pair, exactly one branch runs. Braces mark the instructions that belong to each branch.",
            "ru": "`if (условие) { ... }` выполняет свой блок, когда ответ верный. `else { ... }` выполняется при неверном ответе. В такой паре сработает ровно одна ветка. Скобки показывают, какие команды к ней относятся.",
            "uk": "`if (умова) { ... }` виконує свій блок, коли відповідь істинна. `else { ... }` виконується за хибної відповіді. У такій парі спрацює рівно одна гілка. Дужки показують, які команди до неї належать."
          },
          {
            "en": "Use `&&` when both questions must be true; use `||` when at least one is enough. For a valid score from 0 to 100, both limits are needed: `score >= 0 && score <= 100`. For an invalid score, either outside limit is enough: `score < 0 || score > 100`.",
            "ru": "`&&` означает «обе проверки верны», `||` — «достаточно хотя бы одной». Для допустимого балла от 0 до 100 нужны обе границы: `score >= 0 && score <= 100`. Для ошибки хватит любого выхода за пределы: `score < 0 || score > 100`.",
            "uk": "`&&` означає «обидві перевірки істинні», `||` — «достатньо хоча б однієї». Для допустимого бала від 0 до 100 потрібні обидві межі: `score >= 0 && score <= 100`. Для помилки вистачить будь-якого виходу за межі: `score < 0 || score > 100`."
          },
          {
            "en": "`n % 2` gives the remainder after division by 2. An even number has remainder 0. An `else if` chain checks conditions in order and stops at the first matching branch.",
            "ru": "`n % 2` даёт остаток от деления на 2. У чётного числа остаток 0. Цепочка `else if` проверяет условия по очереди и останавливается на первой подходящей ветке.",
            "uk": "`n % 2` дає остачу від ділення на 2. У парного числа остача 0. Ланцюжок `else if` перевіряє умови послідовно й зупиняється на першій відповідній гілці."
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    int age;\n    std::cin >> age;\n    if (age >= 16) {\n        std::cout << \"Allowed\" << '\\n';\n    } else {\n        std::cout << \"Wait\" << '\\n';\n    }\n    return 0;\n}\n",
          "input": "15\n",
          "output": "Wait\n"
        },
        "lines": [
          {
            "en": "Read age before testing it.",
            "ru": "Сначала читаем age.",
            "uk": "Спочатку читаємо age."
          },
          {
            "en": "Ask whether age is at least 16.",
            "ru": "Спрашиваем, не меньше ли age 16.",
            "uk": "Запитуємо, чи age не менше за 16."
          },
          {
            "en": "Display only the message from the selected branch.",
            "ru": "Выводим сообщение только выбранной ветки.",
            "uk": "Виводимо повідомлення лише обраної гілки."
          }
        ],
        "trace": [
          {
            "en": "15 >= 16 is false → Wait.",
            "ru": "15 >= 16 неверно → Wait.",
            "uk": "15 >= 16 хибно → Wait."
          },
          {
            "en": "16 >= 16 is true → Allowed.",
            "ru": "16 >= 16 верно → Allowed.",
            "uk": "16 >= 16 істинно → Allowed."
          }
        ],
        "mistake": {
          "en": "For a number below 0 or above 100, do not use &&: one number cannot be below 0 and above 100 simultaneously.",
          "ru": "Для числа меньше 0 или больше 100 не используй &&: одно число не может одновременно находиться по обе стороны диапазона.",
          "uk": "Для числа меншого за 0 або більшого за 100 не використовуй &&: одне число не може одночасно бути з обох боків діапазону."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "adult",
          "revision": 1,
          "title": {
            "en": "Check one boundary",
            "ru": "Проверь одну границу",
            "uk": "Перевір одну межу"
          },
          "learn": {
            "en": "At least 18 includes 18. Use one comparison, then choose between two messages.",
            "ru": "«Не меньше 18» включает 18. Нужна одна проверка и выбор между двумя сообщениями.",
            "uk": "«Не менше 18» включає 18. Потрібна одна перевірка та вибір між двома повідомленнями."
          },
          "steps": [
            {
              "en": "Read age (0–120). Print `Adult` if age is at least 18, otherwise `Young`.",
              "ru": "Прочитай age (0–120). Если возраст не меньше 18, выведи `Adult`, иначе `Young`.",
              "uk": "Прочитай age (0–120). Якщо вік не менший за 18, виведи `Adult`, інакше `Young`."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "17\n",
              "output": "Young\n"
            },
            {
              "input": "18\n",
              "output": "Adult\n"
            },
            {
              "input": "80\n",
              "output": "Adult\n"
            }
          ],
          "hints": [
            {
              "en": "At least 18 includes 18. Use one comparison, then choose between two messages.",
              "ru": "«Не меньше 18» включает 18. Нужна одна проверка и выбор между двумя сообщениями.",
              "uk": "«Не менше 18» включає 18. Потрібна одна перевірка та вибір між двома повідомленнями."
            },
            {
              "en": "Try the boundary itself: which branch should 18 enter?",
              "ru": "Проверь саму границу: в какую ветку должно попасть 18?",
              "uk": "Перевір саму межу: до якої гілки має потрапити 18?"
            }
          ],
          "features": [
            "if"
          ]
        },
        {
          "id": "number-sign",
          "revision": 1,
          "title": {
            "en": "Three possible signs",
            "ru": "Три варианта знака",
            "uk": "Три варіанти знака"
          },
          "learn": {
            "en": "If n is not positive, it can still be negative or zero. Add a second question with else if.",
            "ru": "Если n не положительное, оно ещё может быть отрицательным или нулём. Добавь второй вопрос через else if.",
            "uk": "Якщо n не додатне, воно ще може бути від’ємним або нулем. Додай друге запитання через else if."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Print `Positive`, `Negative`, or `Zero`.",
              "ru": "Прочитай n (от −100 до 100). Выведи `Positive`, `Negative` или `Zero`.",
              "uk": "Прочитай n (від −100 до 100). Виведи `Positive`, `Negative` або `Zero`."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "5\n",
              "output": "Positive\n"
            },
            {
              "input": "-2\n",
              "output": "Negative\n"
            },
            {
              "input": "0\n",
              "output": "Zero\n"
            }
          ],
          "hints": [
            {
              "en": "If n is not positive, it can still be negative or zero. Add a second question with else if.",
              "ru": "Если n не положительное, оно ещё может быть отрицательным или нулём. Добавь второй вопрос через else if.",
              "uk": "Якщо n не додатне, воно ще може бути від’ємним або нулем. Додай друге запитання через else if."
            },
            {
              "en": "After rejecting both n > 0 and n < 0, only zero remains.",
              "ru": "Если не подошло ни n > 0, ни n < 0, остался только ноль.",
              "uk": "Якщо не підійшло ані n > 0, ані n < 0, залишився лише нуль."
            }
          ],
          "features": [
            "if"
          ]
        },
        {
          "id": "even-number",
          "revision": 1,
          "title": {
            "en": "An even-number check",
            "ru": "Проверка на чётность",
            "uk": "Перевірка на парність"
          },
          "learn": {
            "en": "A remainder of 0 means division was exact. Compare the remainder with 0 using ==.",
            "ru": "Остаток 0 означает, что число поделилось нацело. Сравни остаток с нулём через ==.",
            "uk": "Остача 0 означає, що число поділилося націло. Порівняй остачу з нулем через ==."
          },
          "steps": [
            {
              "en": "Read n (0–100). Print `Even` if n is even, otherwise `Odd`.",
              "ru": "Прочитай n (0–100). Для чётного выведи `Even`, для нечётного — `Odd`.",
              "uk": "Прочитай n (0–100). Для парного виведи `Even`, для непарного — `Odd`."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "0\n",
              "output": "Even\n"
            },
            {
              "input": "7\n",
              "output": "Odd\n"
            },
            {
              "input": "12\n",
              "output": "Even\n"
            }
          ],
          "hints": [
            {
              "en": "A remainder of 0 means division was exact. Compare the remainder with 0 using ==.",
              "ru": "Остаток 0 означает, что число поделилось нацело. Сравни остаток с нулём через ==.",
              "uk": "Остача 0 означає, що число поділилося націло. Порівняй остачу з нулем через ==."
            },
            {
              "en": "First calculate n % 2; then ask whether it equals 0.",
              "ru": "Сначала вычисли n % 2, затем спроси, равен ли остаток 0.",
              "uk": "Спочатку обчисли n % 2, потім запитай, чи дорівнює остача 0."
            }
          ],
          "features": []
        },
        {
          "id": "larger-value",
          "revision": 1,
          "title": {
            "en": "Keep the larger value",
            "ru": "Сохрани большее значение",
            "uk": "Збережи більше значення"
          },
          "learn": {
            "en": "Ask “is a greater than b?” If yes, save a. Otherwise save b. Equal numbers give the same value either way.",
            "ru": "Спроси: «a больше b?» Если да — сохрани a, иначе b. При равенстве оба варианта дают одно число.",
            "uk": "Запитай: «a більше за b?» Якщо так — збережи a, інакше b. За рівності обидва варіанти дають одне число."
          },
          "steps": [
            {
              "en": "Read a and b (−100 to 100). Save the larger one in `best`, then print it.",
              "ru": "Прочитай a и b (от −100 до 100). Сохрани большее в `best`, затем выведи его.",
              "uk": "Прочитай a та b (від −100 до 100). Збережи більше в `best`, потім виведи його."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "8\n3\n",
              "output": "8\n"
            },
            {
              "input": "3\n8\n",
              "output": "8\n"
            },
            {
              "input": "-4\n-4\n",
              "output": "-4\n"
            }
          ],
          "hints": [
            {
              "en": "Ask “is a greater than b?” If yes, save a. Otherwise save b. Equal numbers give the same value either way.",
              "ru": "Спроси: «a больше b?» Если да — сохрани a, иначе b. При равенстве оба варианта дают одно число.",
              "uk": "Запитай: «a більше за b?» Якщо так — збережи a, інакше b. За рівності обидва варіанти дають одне число."
            },
            {
              "en": "Separate the comparison from saving its selected number.",
              "ru": "Отдели сравнение от сохранения выбранного числа.",
              "uk": "Відокрем порівняння від збереження обраного числа."
            }
          ],
          "features": []
        },
        {
          "id": "valid-score",
          "revision": 1,
          "title": {
            "en": "Both limits must fit",
            "ru": "Обе границы должны подойти",
            "uk": "Обидві межі мають підійти"
          },
          "learn": {
            "en": "A valid score cannot be below 0 and cannot be above 100. Both boundary checks must be true.",
            "ru": "Допустимый балл не меньше 0 и не больше 100. Обе проверки границ должны быть верны.",
            "uk": "Допустимий бал не менший за 0 та не більший за 100. Обидві перевірки меж мають бути істинними."
          },
          "steps": [
            {
              "en": "Read score (−10 to 110). Print `Valid` for 0–100 inclusive, otherwise `Error`.",
              "ru": "Прочитай score (от −10 до 110). Для диапазона 0–100 включительно выведи `Valid`, иначе `Error`.",
              "uk": "Прочитай score (від −10 до 110). Для діапазону 0–100 включно виведи `Valid`, інакше `Error`."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "-1\n",
              "output": "Error\n"
            },
            {
              "input": "0\n",
              "output": "Valid\n"
            },
            {
              "input": "100\n",
              "output": "Valid\n"
            },
            {
              "input": "101\n",
              "output": "Error\n"
            }
          ],
          "hints": [
            {
              "en": "A valid score cannot be below 0 and cannot be above 100. Both boundary checks must be true.",
              "ru": "Допустимый балл не меньше 0 и не больше 100. Обе проверки границ должны быть верны.",
              "uk": "Допустимий бал не менший за 0 та не більший за 100. Обидві перевірки меж мають бути істинними."
            },
            {
              "en": "Join the two boundary checks with &&.",
              "ru": "Объедини две проверки границ через &&.",
              "uk": "Поєднай дві перевірки меж через &&."
            }
          ],
          "features": [
            "and"
          ]
        }
      ]
    },
    {
      "id": "loops",
      "title": {
        "en": "Repeat, then collect a result",
        "ru": "Повторяй и собирай результат",
        "uk": "Повторюй і збирай результат"
      },
      "intro": {
        "en": "Use a counter, repeat input, and build a running sum.",
        "ru": "Используй счётчик, повторяй ввод и накапливай сумму.",
        "uk": "Використовуй лічильник, повторюй введення та накопичуй суму."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "`while (condition)` means “repeat this block while the condition is true.” First check the condition, then run the block, then return to the condition. If the first check is false, the block runs zero times.",
            "ru": "`while (условие)` означает «повторяй блок, пока условие верно». Сначала проверка, потом блок, затем возврат к проверке. Если условие неверно сразу, блок не выполнится ни разу.",
            "uk": "`while (умова)` означає «повторюй блок, поки умова істинна». Спочатку перевірка, потім блок, далі повернення до перевірки. Якщо умова хибна відразу, блок не виконається жодного разу."
          },
          {
            "en": "A counter stores which repetition you are on. To print 1 through 3, start at 1, print it, add 1, and check again. Without the update, the same true condition may repeat forever.",
            "ru": "Счётчик хранит номер текущего повторения. Чтобы показать от 1 до 3, начни с 1, выведи его, прибавь 1 и проверь условие заново. Без изменения счётчика условие может оставаться верным бесконечно.",
            "uk": "Лічильник зберігає номер поточного повторення. Щоб показати від 1 до 3, почни з 1, виведи його, додай 1 і перевір умову знову. Без зміни лічильника умова може залишатися істинною нескінченно."
          },
          {
            "en": "`for (int i = 1; i <= n; i++)` puts the start, check, and update in one line. `i++` adds 1. The body runs between the check and update. A sum variable starts at 0 before the loop, then grows inside it.",
            "ru": "`for (int i = 1; i <= n; i++)` собирает начало, проверку и изменение в одну строку. `i++` прибавляет 1. Блок выполняется после проверки и перед изменением. Переменная суммы создаётся перед циклом с 0, а увеличивается внутри.",
            "uk": "`for (int i = 1; i <= n; i++)` збирає початок, перевірку та зміну в один рядок. `i++` додає 1. Блок виконується після перевірки та перед зміною. Змінна суми створюється перед циклом із 0, а збільшується всередині."
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    int i = 1;\n    while (i <= 3) {\n        std::cout << i << '\\n';\n        i = i + 1;\n    }\n    return 0;\n}\n",
          "input": "",
          "output": "1\n2\n3\n"
        },
        "lines": [
          {
            "en": "Start with i = 1.",
            "ru": "Начинаем с i = 1.",
            "uk": "Починаємо з i = 1."
          },
          {
            "en": "Check i <= 3 before each repetition.",
            "ru": "Перед каждым повторением проверяем i <= 3.",
            "uk": "Перед кожним повторенням перевіряємо i <= 3."
          },
          {
            "en": "Print i, then add 1.",
            "ru": "Выводим i, затем прибавляем 1.",
            "uk": "Виводимо i, потім додаємо 1."
          }
        ],
        "trace": [
          {
            "en": "i = 1 → true → print 1 → i becomes 2.",
            "ru": "i = 1 → верно → выводим 1 → i становится 2.",
            "uk": "i = 1 → істинно → виводимо 1 → i стає 2."
          },
          {
            "en": "i = 2 → print 2; i = 3 → print 3.",
            "ru": "i = 2 → выводим 2; i = 3 → выводим 3.",
            "uk": "i = 2 → виводимо 2; i = 3 → виводимо 3."
          },
          {
            "en": "i = 4 → false → leave the loop.",
            "ru": "i = 4 → неверно → выходим из цикла.",
            "uk": "i = 4 → хибно → виходимо з циклу."
          }
        ],
        "mistake": {
          "en": "Keep an accumulator outside the loop. Setting sum = 0 inside every repetition throws away the earlier total.",
          "ru": "Создавай накопитель перед циклом. Если писать sum = 0 внутри каждого повторения, предыдущая сумма будет теряться.",
          "uk": "Створюй накопичувач перед циклом. Якщо писати sum = 0 усередині кожного повторення, попередня сума губитиметься."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "count-up",
          "revision": 1,
          "title": {
            "en": "Count from one",
            "ru": "Считай от единицы",
            "uk": "Рахуй від одиниці"
          },
          "learn": {
            "en": "You need two names: n is the final limit; i is the current number. Only i changes during the loop.",
            "ru": "Нужны два имени: n хранит последнюю границу, i — текущее число. Во время цикла меняется i.",
            "uk": "Потрібні два імені: n зберігає кінцеву межу, i — поточне число. Під час циклу змінюється i."
          },
          "steps": [
            {
              "en": "Read n (0–10). Using while, print 1 through n, one per line. For 0, print nothing.",
              "ru": "Прочитай n (0–10). Через while выведи числа от 1 до n, каждое с новой строки. Для 0 ничего не выводи.",
              "uk": "Прочитай n (0–10). Через while виведи числа від 1 до n, кожне з нового рядка. Для 0 нічого не виводь."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n",
              "output": "1\n2\n3\n"
            },
            {
              "input": "0\n",
              "output": ""
            },
            {
              "input": "1\n",
              "output": "1\n"
            }
          ],
          "hints": [
            {
              "en": "You need two names: n is the final limit; i is the current number. Only i changes during the loop.",
              "ru": "Нужны два имени: n хранит последнюю границу, i — текущее число. Во время цикла меняется i.",
              "uk": "Потрібні два імені: n зберігає кінцеву межу, i — поточне число. Під час циклу змінюється i."
            },
            {
              "en": "Start i at 1. The loop continues while i has not passed n.",
              "ru": "Начни i с 1. Цикл продолжается, пока i не перешёл границу n.",
              "uk": "Почни i з 1. Цикл триває, поки i не перейшов межу n."
            }
          ],
          "features": [
            "while"
          ]
        },
        {
          "id": "count-down",
          "revision": 1,
          "title": {
            "en": "Count back to one",
            "ru": "Считай обратно до единицы",
            "uk": "Рахуй назад до одиниці"
          },
          "learn": {
            "en": "A countdown starts at n and subtracts 1 each time. The condition must describe the numbers you still want to print.",
            "ru": "Обратный счёт начинается с n и каждый раз вычитает 1. Условие должно описывать числа, которые ещё надо вывести.",
            "uk": "Зворотний відлік починається з n і щоразу віднімає 1. Умова має описувати числа, які ще треба вивести."
          },
          "steps": [
            {
              "en": "Read n (0–10). Print n down to 1. For 0, print nothing.",
              "ru": "Прочитай n (0–10). Выведи числа от n вниз до 1. Для 0 ничего не выводи.",
              "uk": "Прочитай n (0–10). Виведи числа від n донизу до 1. Для 0 нічого не виводь."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n",
              "output": "3\n2\n1\n"
            },
            {
              "input": "0\n",
              "output": ""
            },
            {
              "input": "1\n",
              "output": "1\n"
            }
          ],
          "hints": [
            {
              "en": "A countdown starts at n and subtracts 1 each time. The condition must describe the numbers you still want to print.",
              "ru": "Обратный счёт начинается с n и каждый раз вычитает 1. Условие должно описывать числа, которые ещё надо вывести.",
              "uk": "Зворотний відлік починається з n і щоразу віднімає 1. Умова має описувати числа, які ще треба вивести."
            },
            {
              "en": "The counter must decrease. i-- is the short form of i = i - 1.",
              "ru": "Счётчик должен уменьшаться. i-- — короткая запись i = i - 1.",
              "uk": "Лічильник має зменшуватися. i-- — короткий запис i = i - 1."
            }
          ],
          "features": []
        },
        {
          "id": "sum-to-n",
          "revision": 1,
          "title": {
            "en": "Keep a running sum",
            "ru": "Накапливай сумму",
            "uk": "Накопичуй суму"
          },
          "learn": {
            "en": "Create total = 0 once. Each repetition adds its current i to the old total. Print after the loop.",
            "ru": "Создай total = 0 один раз. Каждое повторение прибавляет текущее i к старому total. Вывод находится после цикла.",
            "uk": "Створи total = 0 один раз. Кожне повторення додає поточне i до старого total. Виведення розташоване після циклу."
          },
          "steps": [
            {
              "en": "Read n (0–20). Sum the integers from 1 through n with a loop. Print only the final sum.",
              "ru": "Прочитай n (0–20). Циклом найди сумму целых от 1 до n. Выведи только итоговую сумму.",
              "uk": "Прочитай n (0–20). Циклом знайди суму цілих від 1 до n. Виведи лише підсумкову суму."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n",
              "output": "6\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "10\n",
              "output": "55\n"
            }
          ],
          "hints": [
            {
              "en": "Create total = 0 once. Each repetition adds its current i to the old total. Print after the loop.",
              "ru": "Создай total = 0 один раз. Каждое повторение прибавляет текущее i к старому total. Вывод находится после цикла.",
              "uk": "Створи total = 0 один раз. Кожне повторення додає поточне i до старого total. Виведення розташоване після циклу."
            },
            {
              "en": "For n = 3, total changes 0 → 1 → 3 → 6.",
              "ru": "Для n = 3 сумма меняется так: 0 → 1 → 3 → 6.",
              "uk": "Для n = 3 сума змінюється так: 0 → 1 → 3 → 6."
            }
          ],
          "features": [
            "loop"
          ]
        },
        {
          "id": "positive-total",
          "revision": 1,
          "title": {
            "en": "Add only selected inputs",
            "ru": "Суммируй только подходящий ввод",
            "uk": "Додавай лише відповідне введення"
          },
          "learn": {
            "en": "Put a read inside the loop to read a different number each time. Put an if inside to decide whether to add it.",
            "ru": "Чтение внутри цикла получает новое число на каждом повторении. Условие внутри решает, добавлять ли это число.",
            "uk": "Читання всередині циклу отримує нове число на кожному повторенні. Умова всередині вирішує, чи додавати це число."
          },
          "steps": [
            {
              "en": "Read count (0–10), then count integers (−100 to 100), one per line. Print the sum of only the positive ones.",
              "ru": "Прочитай count (0–10), затем count целых чисел (от −100 до 100), по одному в строке. Выведи сумму только положительных.",
              "uk": "Прочитай count (0–10), потім count цілих чисел (від −100 до 100), по одному в рядку. Виведи суму лише додатних."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "4\n3\n-2\n0\n5\n",
              "output": "8\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "2\n-4\n-1\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "Put a read inside the loop to read a different number each time. Put an if inside to decide whether to add it.",
              "ru": "Чтение внутри цикла получает новое число на каждом повторении. Условие внутри решает, добавлять ли это число.",
              "uk": "Читання всередині циклу отримує нове число на кожному повторенні. Умова всередині вирішує, чи додавати це число."
            },
            {
              "en": "i counts how many inputs have been read. value is the actual entered number.",
              "ru": "i считает количество прочитанных значений. value хранит само введённое число.",
              "uk": "i рахує кількість прочитаних значень. value зберігає саме введене число."
            }
          ],
          "features": []
        },
        {
          "id": "until-zero",
          "revision": 1,
          "title": {
            "en": "Stop at a signal value",
            "ru": "Остановись по сигнальному значению",
            "uk": "Зупинись за сигнальним значенням"
          },
          "learn": {
            "en": "A signal value ends the input. Read once before while, then read the next value at the end of its block.",
            "ru": "Сигнальное значение завершает ввод. Прочитай число перед while, а следующее читай в конце его блока.",
            "uk": "Сигнальне значення завершує введення. Прочитай число перед while, а наступне читай наприкінці його блоку."
          },
          "steps": [
            {
              "en": "Read positive integers up to 100 until a 0 appears. The 0 is always present. Print the sum before the 0.",
              "ru": "Читай положительные целые до 100, пока не встретится 0. Ноль есть всегда. Выведи сумму чисел до нуля.",
              "uk": "Читай додатні цілі до 100, поки не трапиться 0. Нуль є завжди. Виведи суму чисел до нуля."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "2\n3\n0\n",
              "output": "5\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "7\n0\n",
              "output": "7\n"
            }
          ],
          "hints": [
            {
              "en": "A signal value ends the input. Read once before while, then read the next value at the end of its block.",
              "ru": "Сигнальное значение завершает ввод. Прочитай число перед while, а следующее читай в конце его блока.",
              "uk": "Сигнальне значення завершує введення. Прочитай число перед while, а наступне читай наприкінці його блоку."
            },
            {
              "en": "The loop checks the current value. Its last instruction must replace that value with the next input.",
              "ru": "Цикл проверяет текущее value. Последняя команда блока должна заменить его следующим вводом.",
              "uk": "Цикл перевіряє поточне value. Остання команда блоку має замінити його наступним введенням."
            }
          ],
          "features": []
        }
      ]
    },
    {
      "id": "functions",
      "title": {
        "en": "Give a piece of work a name",
        "ru": "Дай действию имя",
        "uk": "Дай дії ім’я"
      },
      "intro": {
        "en": "Pass values into a function and use its returned result.",
        "ru": "Передавай значения в функцию и используй возвращённый результат.",
        "uk": "Передавай значення у функцію та використовуй повернений результат."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "A function stores instructions under a name. Defining Add does not perform addition yet. Calling `Add(2, 5)` runs it with these two values. The parameter names a and b belong to that call.",
            "ru": "Функция хранит команды под именем. Объявление Add ещё ничего не складывает. Вызов `Add(2, 5)` запускает её с двумя значениями. Параметры a и b получают значения именно этого вызова.",
            "uk": "Функція зберігає команди під іменем. Оголошення Add ще нічого не додає. Виклик `Add(2, 5)` запускає її з двома значеннями. Параметри a та b отримують значення саме цього виклику."
          },
          {
            "en": "`return a + b;` sends a value back to the caller. It does not print the value. You can save the returned value, use it in another calculation, or pass it to the output command.",
            "ru": "`return a + b;` возвращает значение туда, откуда вызвали функцию. Сам return ничего не печатает. Результат можно сохранить, использовать в вычислении или передать команде вывода.",
            "uk": "`return a + b;` повертає значення туди, звідки викликали функцію. Сам return нічого не друкує. Результат можна зберегти, використати в обчисленні або передати команді виведення."
          },
          {
            "en": "The type before a function name describes its result. `int` returns an integer, `bool` returns a true/false answer. Define these helpers outside Main/main; in C#, keep them inside Program and add static.",
            "ru": "Тип перед именем функции описывает её результат. `int` возвращает целое, `bool` — ответ да/нет. Объявляй помощников вне Main/main; в C# — внутри Program с добавлением static.",
            "uk": "Тип перед іменем функції описує її результат. `int` повертає ціле, `bool` — відповідь так/ні. Оголошуй помічників поза Main/main; у C# — усередині Program із додаванням static."
          }
        ],
        "example": {
          "code": "#include <iostream>\n\nint Add(int a, int b) { return a + b; }\n\nint main() {\n    int result = Add(2, 5);\n    std::cout << result << '\\n';\n    return 0;\n}\n",
          "input": "",
          "output": "7\n"
        },
        "lines": [
          {
            "en": "Define Add with two integer parameters.",
            "ru": "Объявляем Add с двумя целыми параметрами.",
            "uk": "Оголошуємо Add із двома цілими параметрами."
          },
          {
            "en": "Call it with 2 and 5; return produces 7.",
            "ru": "Вызываем с 2 и 5; return даёт 7.",
            "uk": "Викликаємо з 2 та 5; return дає 7."
          },
          {
            "en": "Store the result, then display it.",
            "ru": "Сохраняем результат, затем выводим.",
            "uk": "Зберігаємо результат, потім виводимо."
          }
        ],
        "trace": [
          {
            "en": "a = 2, b = 5 inside Add → return 7.",
            "ru": "Внутри Add: a = 2, b = 5 → return 7.",
            "uk": "Усередині Add: a = 2, b = 5 → return 7."
          },
          {
            "en": "result becomes 7 in Main/main.",
            "ru": "В Main/main переменная result получает 7.",
            "uk": "У Main/main змінна result отримує 7."
          }
        ],
        "mistake": {
          "en": "A printed value and a returned value are different. A helper that returns int must return an integer on every possible path.",
          "ru": "Выведенное и возвращённое значение — разные вещи. Функция с результатом int должна возвращать целое на каждом возможном пути.",
          "uk": "Виведене та повернене значення — різні речі. Функція з результатом int має повертати ціле на кожному можливому шляху."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "double-number",
          "revision": 1,
          "title": {
            "en": "Return twice a value",
            "ru": "Верни удвоенное значение",
            "uk": "Поверни подвоєне значення"
          },
          "learn": {
            "en": "A one-parameter helper receives one number and returns one number. Main/main reads and prints; the helper only calculates.",
            "ru": "Помощник с одним параметром получает число и возвращает число. Main/main читает и печатает; помощник только считает.",
            "uk": "Помічник з одним параметром отримує число та повертає число. Main/main читає й друкує; помічник лише рахує."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Define `Double(int value)` returning twice value, call it for n, and print the result.",
              "ru": "Прочитай n (от −100 до 100). Объяви `Double(int value)`, возвращающую удвоенное value. Вызови её для n и выведи результат.",
              "uk": "Прочитай n (від −100 до 100). Оголоси `Double(int value)`, що повертає подвоєне value. Виклич її для n і виведи результат."
            }
          ],
          "starter": "#include <iostream>\n\nint Double(int value) {\n    // Return twice value.\n    return 0;\n}\n\nint main() {\n    int n; std::cin >> n;\n    std::cout << Double(n) << '\\n';\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n",
              "output": "6\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "-4\n",
              "output": "-8\n"
            }
          ],
          "hints": [
            {
              "en": "A one-parameter helper receives one number and returns one number. Main/main reads and prints; the helper only calculates.",
              "ru": "Помощник с одним параметром получает число и возвращает число. Main/main читает и печатает; помощник только считает.",
              "uk": "Помічник з одним параметром отримує число та повертає число. Main/main читає й друкує; помічник лише рахує."
            },
            {
              "en": "The return expression needs the parameter, not a fixed example number.",
              "ru": "В выражении return нужен параметр, а не постоянное число из примера.",
              "uk": "У виразі return потрібен параметр, а не постійне число з прикладу."
            }
          ],
          "features": [
            "function"
          ]
        },
        {
          "id": "sum-function",
          "revision": 1,
          "title": {
            "en": "Pass two values",
            "ru": "Передай два значения",
            "uk": "Передай два значення"
          },
          "learn": {
            "en": "Parameters are listed in the same order in the definition and call. Separate them with a comma.",
            "ru": "Параметры перечисляются в одинаковом порядке в объявлении и вызове. Между ними ставится запятая.",
            "uk": "Параметри перелічуються в однаковому порядку в оголошенні та виклику. Між ними ставиться кома."
          },
          "steps": [
            {
              "en": "Read a and b (−100 to 100). Define and call `Add(int a, int b)` to print their sum.",
              "ru": "Прочитай a и b (от −100 до 100). Объяви и вызови `Add(int a, int b)`, чтобы вывести их сумму.",
              "uk": "Прочитай a та b (від −100 до 100). Оголоси й виклич `Add(int a, int b)`, щоб вивести їхню суму."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "2\n8\n",
              "output": "10\n"
            },
            {
              "input": "-2\n2\n",
              "output": "0\n"
            },
            {
              "input": "5\n-9\n",
              "output": "-4\n"
            }
          ],
          "hints": [
            {
              "en": "Parameters are listed in the same order in the definition and call. Separate them with a comma.",
              "ru": "Параметры перечисляются в одинаковом порядке в объявлении и вызове. Между ними ставится запятая.",
              "uk": "Параметри перелічуються в однаковому порядку в оголошенні та виклику. Між ними ставиться кома."
            },
            {
              "en": "Both parameters have their own type in the definition.",
              "ru": "В объявлении у каждого параметра есть свой тип.",
              "uk": "В оголошенні кожен параметр має власний тип."
            }
          ],
          "features": [
            "function"
          ]
        },
        {
          "id": "even-function",
          "revision": 1,
          "title": {
            "en": "Return an answer",
            "ru": "Верни ответ проверки",
            "uk": "Поверни відповідь перевірки"
          },
          "learn": {
            "en": "A comparison can be returned directly from a bool function. Use that returned answer in if.",
            "ru": "Сравнение можно сразу вернуть из функции типа bool. Используй возвращённый ответ в if.",
            "uk": "Порівняння можна одразу повернути з функції типу bool. Використай повернену відповідь в if."
          },
          "steps": [
            {
              "en": "Read n (0–100). Define `IsEven(int n)` returning bool. Use it to print `Even` or `Odd`.",
              "ru": "Прочитай n (0–100). Объяви `IsEven(int n)` с результатом bool. Через неё выведи `Even` или `Odd`.",
              "uk": "Прочитай n (0–100). Оголоси `IsEven(int n)` із результатом bool. Через неї виведи `Even` або `Odd`."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "2\n",
              "output": "Even\n"
            },
            {
              "input": "3\n",
              "output": "Odd\n"
            },
            {
              "input": "0\n",
              "output": "Even\n"
            }
          ],
          "hints": [
            {
              "en": "A comparison can be returned directly from a bool function. Use that returned answer in if.",
              "ru": "Сравнение можно сразу вернуть из функции типа bool. Используй возвращённый ответ в if.",
              "uk": "Порівняння можна одразу повернути з функції типу bool. Використай повернену відповідь в if."
            },
            {
              "en": "The helper returns the comparison n % 2 == 0.",
              "ru": "Помощник возвращает результат сравнения n % 2 == 0.",
              "uk": "Помічник повертає результат порівняння n % 2 == 0."
            }
          ],
          "features": [
            "function"
          ]
        },
        {
          "id": "clamp-zero",
          "revision": 1,
          "title": {
            "en": "Protect the lower boundary",
            "ru": "Защити нижнюю границу",
            "uk": "Захисти нижню межу"
          },
          "learn": {
            "en": "A return ends the current function call immediately. You can return 0 for a negative input and the original number otherwise.",
            "ru": "return сразу завершает текущий вызов. Можно вернуть 0 для отрицательного ввода и исходное число для остальных случаев.",
            "uk": "return одразу завершує поточний виклик. Можна повернути 0 для від’ємного введення й початкове число для решти випадків."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Define `Nonnegative(int n)` returning 0 when n < 0, otherwise n. Print its result.",
              "ru": "Прочитай n (от −100 до 100). Объяви `Nonnegative(int n)`: для n < 0 она возвращает 0, иначе n. Выведи результат вызова.",
              "uk": "Прочитай n (від −100 до 100). Оголоси `Nonnegative(int n)`: для n < 0 вона повертає 0, інакше n. Виведи результат виклику."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "-3\n",
              "output": "0\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "8\n",
              "output": "8\n"
            }
          ],
          "hints": [
            {
              "en": "A return ends the current function call immediately. You can return 0 for a negative input and the original number otherwise.",
              "ru": "return сразу завершает текущий вызов. Можно вернуть 0 для отрицательного ввода и исходное число для остальных случаев.",
              "uk": "return одразу завершує поточний виклик. Можна повернути 0 для від’ємного введення й початкове число для решти випадків."
            },
            {
              "en": "Both possible paths need a return value.",
              "ru": "На обоих возможных путях нужен возвращаемый результат.",
              "uk": "На обох можливих шляхах потрібен результат для повернення."
            }
          ],
          "features": [
            "function"
          ]
        },
        {
          "id": "reuse-function",
          "revision": 1,
          "title": {
            "en": "Reuse the same calculation",
            "ru": "Повтори вызов, а не код",
            "uk": "Повтори виклик, а не код"
          },
          "learn": {
            "en": "Calling one helper twice gives it different parameter values without copying its instructions.",
            "ru": "Два вызова одного помощника передают ему разные значения без копирования его команд.",
            "uk": "Два виклики одного помічника передають йому різні значення без копіювання його команд."
          },
          "steps": [
            {
              "en": "Read a and b (0–50). Define `Square(int n)`. Print Square(a) + Square(b).",
              "ru": "Прочитай a и b (0–50). Объяви `Square(int n)`. Выведи Square(a) + Square(b).",
              "uk": "Прочитай a та b (0–50). Оголоси `Square(int n)`. Виведи Square(a) + Square(b)."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n4\n",
              "output": "25\n"
            },
            {
              "input": "0\n2\n",
              "output": "4\n"
            },
            {
              "input": "5\n5\n",
              "output": "50\n"
            }
          ],
          "hints": [
            {
              "en": "Calling one helper twice gives it different parameter values without copying its instructions.",
              "ru": "Два вызова одного помощника передают ему разные значения без копирования его команд.",
              "uk": "Два виклики одного помічника передають йому різні значення без копіювання його команд."
            },
            {
              "en": "Square returns n * n. Both calls use the same definition.",
              "ru": "Square возвращает n * n. Оба вызова используют одно объявление.",
              "uk": "Square повертає n * n. Обидва виклики використовують одне оголошення."
            }
          ],
          "features": [
            "function"
          ]
        }
      ]
    },
    {
      "id": "text-sequences",
      "title": {
        "en": "Text and sequences",
        "ru": "Текст и последовательности",
        "uk": "Текст і послідовності"
      },
      "intro": {
        "en": "Prepare a string, access an element, and process a sequence.",
        "ru": "Подготовь строку, обратись к элементу и обработай последовательность.",
        "uk": "Підготуй рядок, звернися до елемента та оброби послідовність."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "A string stores a sequence of characters. Text methods produce a result that you can save or display. Calling a method without using its result does not replace the original string.",
            "ru": "Строка хранит последовательность символов. Методы текста дают результат, который можно сохранить или вывести. Вызов метода без использования его результата не заменяет исходную строку.",
            "uk": "Рядок зберігає послідовність символів. Методи тексту дають результат, який можна зберегти або вивести. Виклик методу без використання його результату не замінює початковий рядок."
          },
          {
            "en": "`text.size()` counts characters in our ASCII exercises. `text.substr(start, count)` returns a part of a string; `text[0]` accesses its first character. Indexes begin at 0, so the last valid index is size − 1.",
            "ru": "`text.size()` считает символы в наших заданиях с ASCII. `text.substr(начало, количество)` возвращает часть строки, а `text[0]` обращается к первому символу. Индексы начинаются с 0; последний допустимый индекс равен размеру минус 1.",
            "uk": "`text.size()` рахує символи в наших завданнях з ASCII. `text.substr(початок, кількість)` повертає частину рядка, а `text[0]` звертається до першого символу. Індекси починаються з 0; останній допустимий індекс дорівнює розміру мінус 1."
          },
          {
            "en": "A vector stores a sequence of values and can grow: `std::vector<int> values = {4, 7, 2};`. `values[0]` is 4. `push_back(value)` appends a value. A range-based for loop visits each stored value.",
            "ru": "Вектор хранит последовательность и может расти: `std::vector<int> values = {4, 7, 2};`. `values[0]` равно 4. `push_back(value)` добавляет значение в конец. Цикл for по диапазону перебирает сохранённые значения.",
            "uk": "Вектор зберігає послідовність і може зростати: `std::vector<int> values = {4, 7, 2};`. `values[0]` дорівнює 4. `push_back(value)` додає значення в кінець. Цикл for за діапазоном перебирає збережені значення."
          },
          {
            "en": "When finding a maximum, use the first real value as the starting maximum. Starting from 0 would be wrong when every value is negative. Empty inputs need a separate rule stated in the exercise.",
            "ru": "При поиске максимума начни с первого настоящего значения. Начальный максимум 0 даст ошибку, если все числа отрицательные. Для пустой последовательности нужно отдельное правило из условия.",
            "uk": "Під час пошуку максимуму почни з першого справжнього значення. Початковий максимум 0 дасть помилку, якщо всі числа від’ємні. Для порожньої послідовності потрібне окреме правило з умови."
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> values = {4, 7, 2};\n    int total = 0;\n    for (int value : values) { total += value; }\n    std::cout << total << '\\n';\n    return 0;\n}\n",
          "input": "",
          "output": "13\n"
        },
        "lines": [
          {
            "en": "Create three stored values.",
            "ru": "Создаём три сохранённых значения.",
            "uk": "Створюємо три збережені значення."
          },
          {
            "en": "Start total at 0, then visit each element.",
            "ru": "Начинаем total с 0, затем обходим каждый элемент.",
            "uk": "Починаємо total з 0, потім обходимо кожен елемент."
          },
          {
            "en": "Add 4, then 7, then 2. Display 13.",
            "ru": "Прибавляем 4, затем 7, затем 2. Выводим 13.",
            "uk": "Додаємо 4, потім 7, потім 2. Виводимо 13."
          }
        ],
        "trace": [
          {
            "en": "total: 0 → 4 → 11 → 13.",
            "ru": "total: 0 → 4 → 11 → 13.",
            "uk": "total: 0 → 4 → 11 → 13."
          }
        ],
        "mistake": {
          "en": "The index equal to the sequence length is outside the sequence. Check `< length`, not `<= length`, for a zero-based index.",
          "ru": "Индекс, равный длине, уже находится за пределами последовательности. Для индекса от нуля нужна проверка `< длина`, а не `<= длина`.",
          "uk": "Індекс, що дорівнює довжині, вже перебуває за межами послідовності. Для індексу від нуля потрібна перевірка `< довжина`, а не `<= довжина`."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "text-length",
          "revision": 1,
          "title": {
            "en": "Count the characters",
            "ru": "Посчитай символы",
            "uk": "Порахуй символи"
          },
          "learn": {
            "en": "getline keeps spaces in the input. size counts those spaces too. An empty line has length 0.",
            "ru": "getline сохраняет пробелы во вводе. size считает их тоже. Длина пустой строки равна 0.",
            "uk": "getline зберігає пробіли у введенні. size рахує їх також. Довжина порожнього рядка дорівнює 0."
          },
          "steps": [
            {
              "en": "Read an ASCII line, possibly empty. Print its number of characters, including spaces.",
              "ru": "Прочитай ASCII-строку, она может быть пустой. Выведи число символов вместе с пробелами.",
              "uk": "Прочитай ASCII-рядок, він може бути порожнім. Виведи кількість символів разом із пробілами."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "Hi 2\n",
              "output": "4\n"
            },
            {
              "input": "A B\n",
              "output": "3\n"
            },
            {
              "input": "\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "getline keeps spaces in the input. size counts those spaces too. An empty line has length 0.",
              "ru": "getline сохраняет пробелы во вводе. size считает их тоже. Длина пустой строки равна 0.",
              "uk": "getline зберігає пробіли у введенні. size рахує їх також. Довжина порожнього рядка дорівнює 0."
            },
            {
              "en": "Use getline instead of >> when spaces belong to the text.",
              "ru": "Используй getline вместо >>, если пробелы входят в текст.",
              "uk": "Використовуй getline замість >>, якщо пробіли належать до тексту."
            }
          ],
          "features": []
        },
        {
          "id": "text-prefix",
          "revision": 1,
          "title": {
            "en": "Take the beginning of text",
            "ru": "Возьми начало текста",
            "uk": "Візьми початок тексту"
          },
          "learn": {
            "en": "substr(0, 3) asks for at most three characters starting at index 0. A shorter string stays shorter.",
            "ru": "substr(0, 3) берёт до трёх символов начиная с индекса 0. Более короткая строка так и останется короткой.",
            "uk": "substr(0, 3) бере до трьох символів починаючи з індексу 0. Коротший рядок так і залишиться коротким."
          },
          "steps": [
            {
              "en": "Read an ASCII line. Print its first three characters, or the whole line if it has fewer than three.",
              "ru": "Прочитай ASCII-строку. Выведи первые три символа или всю строку, если она короче трёх символов.",
              "uk": "Прочитай ASCII-рядок. Виведи перші три символи або весь рядок, якщо він коротший за три символи."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "CodeBloom\n",
              "output": "Cod\n"
            },
            {
              "input": "Hi\n",
              "output": "Hi\n"
            },
            {
              "input": "\n",
              "output": "\n"
            }
          ],
          "hints": [
            {
              "en": "substr(0, 3) asks for at most three characters starting at index 0. A shorter string stays shorter.",
              "ru": "substr(0, 3) берёт до трёх символов начиная с индекса 0. Более короткая строка так и останется короткой.",
              "uk": "substr(0, 3) бере до трьох символів починаючи з індексу 0. Коротший рядок так і залишиться коротким."
            },
            {
              "en": "The second argument is a count, not the index of the final character.",
              "ru": "Второй аргумент — количество, а не индекс последнего символа.",
              "uk": "Другий аргумент — кількість, а не індекс останнього символу."
            }
          ],
          "features": []
        },
        {
          "id": "sequence-index",
          "revision": 1,
          "title": {
            "en": "Open one slot",
            "ru": "Открой одну ячейку",
            "uk": "Відкрий одну комірку"
          },
          "learn": {
            "en": "Indexes begin at 0: slot 0 holds 5, slot 1 holds 8, and slot 2 holds 13.",
            "ru": "Индексы начинаются с 0: в ячейке 0 лежит 5, в ячейке 1 — 8, в ячейке 2 — 13.",
            "uk": "Індекси починаються з 0: у комірці 0 лежить 5, у комірці 1 — 8, у комірці 2 — 13."
          },
          "steps": [
            {
              "en": "Create the sequence {5, 8, 13}. Read index (0–2) and print the element at that index.",
              "ru": "Создай последовательность {5, 8, 13}. Прочитай index (0–2) и выведи элемент с этим индексом.",
              "uk": "Створи послідовність {5, 8, 13}. Прочитай index (0–2) та виведи елемент із цим індексом."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "0\n",
              "output": "5\n"
            },
            {
              "input": "1\n",
              "output": "8\n"
            },
            {
              "input": "2\n",
              "output": "13\n"
            }
          ],
          "hints": [
            {
              "en": "Indexes begin at 0: slot 0 holds 5, slot 1 holds 8, and slot 2 holds 13.",
              "ru": "Индексы начинаются с 0: в ячейке 0 лежит 5, в ячейке 1 — 8, в ячейке 2 — 13.",
              "uk": "Індекси починаються з 0: у комірці 0 лежить 5, у комірці 1 — 8, у комірці 2 — 13."
            },
            {
              "en": "Use square brackets to select the saved element.",
              "ru": "Выбери сохранённый элемент через квадратные скобки.",
              "uk": "Обери збережений елемент через квадратні дужки."
            }
          ],
          "features": []
        },
        {
          "id": "sequence-sum",
          "revision": 1,
          "title": {
            "en": "Visit every stored value",
            "ru": "Обойди все сохранённые значения",
            "uk": "Обійди всі збережені значення"
          },
          "learn": {
            "en": "First read values into a sequence. A second loop can process the saved values without reading input again.",
            "ru": "Сначала прочитай значения в последовательность. Второй цикл обрабатывает уже сохранённые значения, не читая ввод заново.",
            "uk": "Спочатку прочитай значення в послідовність. Другий цикл обробляє вже збережені значення, не читаючи введення знову."
          },
          "steps": [
            {
              "en": "Read count (0–10), then count integers (−100 to 100). Store them in an array/vector, then print their sum.",
              "ru": "Прочитай count (0–10), затем count целых (от −100 до 100). Сохрани их в массив/вектор и выведи сумму.",
              "uk": "Прочитай count (0–10), потім count цілих (від −100 до 100). Збережи їх у масив/вектор та виведи суму."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n4\n7\n2\n",
              "output": "13\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "2\n-5\n2\n",
              "output": "-3\n"
            }
          ],
          "hints": [
            {
              "en": "First read values into a sequence. A second loop can process the saved values without reading input again.",
              "ru": "Сначала прочитай значения в последовательность. Второй цикл обрабатывает уже сохранённые значения, не читая ввод заново.",
              "uk": "Спочатку прочитай значення в послідовність. Другий цикл обробляє вже збережені значення, не читаючи введення знову."
            },
            {
              "en": "An empty sequence leaves the sum at its starting 0.",
              "ru": "Пустая последовательность оставит сумму равной начальному 0.",
              "uk": "Порожня послідовність залишить суму рівною початковому 0."
            }
          ],
          "features": []
        },
        {
          "id": "sequence-maximum",
          "revision": 1,
          "title": {
            "en": "Start with a real value",
            "ru": "Начни с настоящего значения",
            "uk": "Почни зі справжнього значення"
          },
          "learn": {
            "en": "A maximum starts from the first stored element. Compare every later value and replace best when a larger one is found.",
            "ru": "Максимум начинается с первого сохранённого элемента. Сравнивай остальные и заменяй best, если нашлось большее значение.",
            "uk": "Максимум починається з першого збереженого елемента. Порівнюй решту й замінюй best, якщо знайшлося більше значення."
          },
          "steps": [
            {
              "en": "Read count (1–10), then count integers (−100 to 100). Store them and print the largest.",
              "ru": "Прочитай count (1–10), затем count целых (от −100 до 100). Сохрани их и выведи наибольшее.",
              "uk": "Прочитай count (1–10), потім count цілих (від −100 до 100). Збережи їх та виведи найбільше."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n-5\n-2\n-7\n",
              "output": "-2\n"
            },
            {
              "input": "1\n0\n",
              "output": "0\n"
            },
            {
              "input": "3\n3\n8\n1\n",
              "output": "8\n"
            }
          ],
          "hints": [
            {
              "en": "A maximum starts from the first stored element. Compare every later value and replace best when a larger one is found.",
              "ru": "Максимум начинается с первого сохранённого элемента. Сравнивай остальные и заменяй best, если нашлось большее значение.",
              "uk": "Максимум починається з першого збереженого елемента. Порівнюй решту й замінюй best, якщо знайшлося більше значення."
            },
            {
              "en": "The input is nonempty, so values[0] exists. Do not assume the maximum is at least 0.",
              "ru": "Последовательность непустая, поэтому values[0] существует. Не считай, что максимум обязательно не меньше 0.",
              "uk": "Послідовність непорожня, тому values[0] існує. Не вважай, що максимум обов’язково не менший за 0."
            }
          ],
          "features": []
        }
      ]
    },
    {
      "id": "collections",
      "title": {
        "en": "Choose a container",
        "ru": "Выбери контейнер",
        "uk": "Обери контейнер"
      },
      "intro": {
        "en": "Grow vectors, look up map keys, and keep unique values.",
        "ru": "Расширяй векторы, ищи ключи map и храни уникальные значения.",
        "uk": "Розширюй вектори, шукай ключі map і зберігай унікальні значення."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "`std::vector<int>` stores integers in order. `push_back` appends, `size` counts, and `pop_back` removes the last element. Call pop_back only on a nonempty vector. Containers own their elements and clean them up automatically.",
            "ru": "`std::vector<int>` хранит целые по порядку. `push_back` добавляет, `size` считает, `pop_back` удаляет последний элемент. Вызывай pop_back только для непустого вектора. Контейнеры владеют своими элементами и освобождают их автоматически.",
            "uk": "`std::vector<int>` зберігає цілі за порядком. `push_back` додає, `size` рахує, `pop_back` видаляє останній елемент. Викликай pop_back лише для непорожнього вектора. Контейнери володіють своїми елементами й звільняють їх автоматично."
          },
          {
            "en": "`std::map<std::string, int>` connects each key to a value. `find(key)` searches without adding a key. `map[key]` creates a missing key with an initial 0 for int; this is useful for counters but changes the map even during a lookup.",
            "ru": "`std::map<std::string, int>` связывает ключ со значением. `find(key)` ищет без добавления ключа. `map[key]` создаёт отсутствующий ключ с начальным 0 для int: удобно для счётчиков, но даже обращение для чтения меняет map.",
            "uk": "`std::map<std::string, int>` пов’язує ключ зі значенням. `find(key)` шукає без додавання ключа. `map[key]` створює відсутній ключ із початковим 0 для int: зручно для лічильників, але навіть звернення для читання змінює map."
          },
          {
            "en": "`std::set<std::string>` stores each distinct word once. `insert` adds a word, `erase` removes a word, and `size` counts distinct words. In these exercises, word comparisons are case-sensitive.",
            "ru": "`std::set<std::string>` хранит каждое отличающееся слово один раз. `insert` добавляет, `erase` удаляет, `size` считает разные слова. В этих упражнениях сравнение слов учитывает регистр.",
            "uk": "`std::set<std::string>` зберігає кожне відмінне слово один раз. `insert` додає, `erase` видаляє, `size` рахує різні слова. У цих вправах порівняння слів враховує регістр."
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <string>\n#include <map>\n\nint main() {\n    std::map<std::string, int> counts;\n    counts[\"red\"]++;\n    counts[\"red\"]++;\n    std::cout << counts[\"red\"] << '\\n';\n    return 0;\n}\n",
          "input": "",
          "output": "2\n"
        },
        "lines": [
          {
            "en": "Create an empty map.",
            "ru": "Создаём пустую map.",
            "uk": "Створюємо порожню map."
          },
          {
            "en": "The first access creates red with 0, then increments it.",
            "ru": "Первое обращение создаёт red с 0, затем увеличивает значение.",
            "uk": "Перше звернення створює red із 0, потім збільшує значення."
          },
          {
            "en": "The second increment changes 1 to 2.",
            "ru": "Второе увеличение меняет 1 на 2.",
            "uk": "Друге збільшення змінює 1 на 2."
          }
        ],
        "trace": [
          {
            "en": "red: absent → 0 → 1 → 2.",
            "ru": "red: нет ключа → 0 → 1 → 2.",
            "uk": "red: немає ключа → 0 → 1 → 2."
          }
        ],
        "mistake": {
          "en": "Do not read vector[0] or remove an element when the vector is empty. A size is a count, not a valid final index.",
          "ru": "Не обращайся к vector[0] и не удаляй элемент пустого вектора. Размер — количество, а не допустимый последний индекс.",
          "uk": "Не звертайся до vector[0] та не видаляй елемент порожнього вектора. Розмір — кількість, а не допустимий останній індекс."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "vector-count",
          "revision": 1,
          "title": {
            "en": "Store a changing amount of data",
            "ru": "Храни меняющееся количество данных",
            "uk": "Зберігай змінну кількість даних"
          },
          "learn": {
            "en": "push_back adds the next input to a vector. size gives the number of stored values, including duplicates.",
            "ru": "push_back добавляет следующий ввод в вектор. size даёт число сохранённых значений вместе с повторами.",
            "uk": "push_back додає наступне введення у вектор. size дає кількість збережених значень разом із повторами."
          },
          "steps": [
            {
              "en": "Read count (0–10), then count integers. Store them in a vector and print its size.",
              "ru": "Прочитай count (0–10), затем count целых. Сохрани их в вектор и выведи его размер.",
              "uk": "Прочитай count (0–10), потім count цілих. Збережи їх у вектор і виведи його розмір."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n5\n5\n2\n",
              "output": "3\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "1\n9\n",
              "output": "1\n"
            }
          ],
          "hints": [
            {
              "en": "push_back adds the next input to a vector. size gives the number of stored values, including duplicates.",
              "ru": "push_back добавляет следующий ввод в вектор. size даёт число сохранённых значений вместе с повторами.",
              "uk": "push_back додає наступне введення у вектор. size дає кількість збережених значень разом із повторами."
            },
            {
              "en": "Declare the empty vector before the loop.",
              "ru": "Объяви пустой вектор перед циклом.",
              "uk": "Оголоси порожній вектор перед циклом."
            }
          ],
          "features": [
            "vector"
          ]
        },
        {
          "id": "map-price",
          "revision": 1,
          "title": {
            "en": "Look up a key",
            "ru": "Найди значение по ключу",
            "uk": "Знайди значення за ключем"
          },
          "learn": {
            "en": "find returns an iterator. Compare it with end() to distinguish a missing key before using iterator->second.",
            "ru": "find возвращает итератор. Сравни его с end(), чтобы отличить отсутствующий ключ перед чтением iterator->second.",
            "uk": "find повертає ітератор. Порівняй його з end(), щоб відрізнити відсутній ключ перед читанням iterator->second."
          },
          "steps": [
            {
              "en": "Create prices apple → 3 and book → 8. Read a word and print its price, or 0 if absent. Use find for the lookup.",
              "ru": "Создай цены apple → 3 и book → 8. Прочитай слово и выведи цену или 0 при отсутствии. Для поиска используй find.",
              "uk": "Створи ціни apple → 3 та book → 8. Прочитай слово й виведи ціну або 0 за відсутності. Для пошуку використай find."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <map>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "apple\n",
              "output": "3\n"
            },
            {
              "input": "book\n",
              "output": "8\n"
            },
            {
              "input": "pen\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "find returns an iterator. Compare it with end() to distinguish a missing key before using iterator->second.",
              "ru": "find возвращает итератор. Сравни его с end(), чтобы отличить отсутствующий ключ перед чтением iterator->second.",
              "uk": "find повертає ітератор. Порівняй його з end(), щоб відрізнити відсутній ключ перед читанням iterator->second."
            },
            {
              "en": "first is a pair’s key; second is its stored value.",
              "ru": "first в паре — ключ, second — сохранённое значение.",
              "uk": "first у парі — ключ, second — збережене значення."
            }
          ],
          "features": [
            "map"
          ]
        },
        {
          "id": "word-count",
          "revision": 1,
          "title": {
            "en": "Count repeated words",
            "ru": "Посчитай повторения слов",
            "uk": "Порахуй повторення слів"
          },
          "learn": {
            "en": "For int values, map[word] starts at 0 if absent. Increment that value for each occurrence.",
            "ru": "Для значений int map[word] начинается с 0, если ключа нет. Увеличивай это значение на каждое появление.",
            "uk": "Для значень int map[word] починається з 0, якщо ключа немає. Збільшуй це значення за кожної появи."
          },
          "steps": [
            {
              "en": "Read count (0–10), then words, then a query word. Print its number of occurrences. Words contain no spaces and case matters.",
              "ru": "Прочитай count (0–10), затем слова и слово-запрос. Выведи количество его появлений. Слова без пробелов; регистр учитывается.",
              "uk": "Прочитай count (0–10), потім слова та слово-запит. Виведи кількість його появ. Слова без пробілів; регістр враховується."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <map>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\nred\nblue\nred\nred\n",
              "output": "2\n"
            },
            {
              "input": "0\nred\n",
              "output": "0\n"
            },
            {
              "input": "2\nRed\nred\nRed\n",
              "output": "1\n"
            }
          ],
          "hints": [
            {
              "en": "For int values, map[word] starts at 0 if absent. Increment that value for each occurrence.",
              "ru": "Для значений int map[word] начинается с 0, если ключа нет. Увеличивай это значение на каждое появление.",
              "uk": "Для значень int map[word] починається з 0, якщо ключа немає. Збільшуй це значення за кожної появи."
            },
            {
              "en": "The query is read after the count inputs.",
              "ru": "Запрос читается после count введённых слов.",
              "uk": "Запит читається після count введених слів."
            }
          ],
          "features": []
        },
        {
          "id": "unique-words",
          "revision": 1,
          "title": {
            "en": "Keep each word once",
            "ru": "Храни каждое слово один раз",
            "uk": "Зберігай кожне слово один раз"
          },
          "learn": {
            "en": "A set handles duplicates for you. insert of an existing word leaves the set unchanged.",
            "ru": "Набор обрабатывает повторы самостоятельно. insert существующего слова не меняет набор.",
            "uk": "Множина обробляє повтори самостійно. insert наявного слова не змінює множину."
          },
          "steps": [
            {
              "en": "Read count (0–10), then words without spaces. Print the number of distinct case-sensitive words.",
              "ru": "Прочитай count (0–10), затем слова без пробелов. Выведи количество разных слов с учётом регистра.",
              "uk": "Прочитай count (0–10), потім слова без пробілів. Виведи кількість різних слів з урахуванням регістру."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <set>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\na\nb\na\n",
              "output": "2\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "2\na\nA\n",
              "output": "2\n"
            }
          ],
          "hints": [
            {
              "en": "A set handles duplicates for you. insert of an existing word leaves the set unchanged.",
              "ru": "Набор обрабатывает повторы самостоятельно. insert существующего слова не меняет набор.",
              "uk": "Множина обробляє повтори самостійно. insert наявного слова не змінює множину."
            },
            {
              "en": "Count the set after all inserts, not each insertion.",
              "ru": "Считай размер набора после всех добавлений.",
              "uk": "Рахуй розмір множини після всіх додавань."
            }
          ],
          "features": [
            "set"
          ]
        },
        {
          "id": "vector-remove",
          "revision": 1,
          "title": {
            "en": "Remove safely from the end",
            "ru": "Безопасно удали с конца",
            "uk": "Безпечно видали з кінця"
          },
          "learn": {
            "en": "pop_back requires a nonempty vector. empty() answers whether it has no elements.",
            "ru": "pop_back требует непустой вектор. empty() отвечает, нет ли в нём элементов.",
            "uk": "pop_back потребує непорожнього вектора. empty() відповідає, чи немає в ньому елементів."
          },
          "steps": [
            {
              "en": "Read count (0–10), then integers. Remove the last stored value if any exists. Print the remaining size.",
              "ru": "Прочитай count (0–10), затем целые. Удали последнее сохранённое значение, если оно есть. Выведи оставшийся размер.",
              "uk": "Прочитай count (0–10), потім цілі. Видали останнє збережене значення, якщо воно є. Виведи решту розміру."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n1\n2\n3\n",
              "output": "2\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "1\n7\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "pop_back requires a nonempty vector. empty() answers whether it has no elements.",
              "ru": "pop_back требует непустой вектор. empty() отвечает, нет ли в нём элементов.",
              "uk": "pop_back потребує непорожнього вектора. empty() відповідає, чи немає в ньому елементів."
            },
            {
              "en": "The empty case must skip removal.",
              "ru": "В пустом случае удаление нужно пропустить.",
              "uk": "У порожньому випадку видалення потрібно пропустити."
            }
          ],
          "features": [
            "popback"
          ]
        }
      ]
    },
    {
      "id": "references",
      "title": {
        "en": "Values, references, and addresses",
        "ru": "Значения, ссылки и адреса",
        "uk": "Значення, посилання й адреси"
      },
      "intro": {
        "en": "Distinguish a copy from access to an existing value.",
        "ru": "Отличай копию от обращения к существующему значению.",
        "uk": "Відрізняй копію від звернення до наявного значення."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "`int copy = original;` creates a separate integer. `int& alias = original;` creates a reference: another name for the same integer. Assigning through alias changes original too. A reference must be initialized.",
            "ru": "`int copy = original;` создаёт отдельное целое. `int& alias = original;` создаёт ссылку — другое имя того же целого. Изменение alias меняет и original. Ссылку нужно сразу связать со значением.",
            "uk": "`int copy = original;` створює окреме ціле. `int& alias = original;` створює посилання — інше ім’я того самого цілого. Зміна alias змінює й original. Посилання потрібно відразу пов’язати зі значенням."
          },
          {
            "en": "A parameter passed by value is a copy. A parameter `int& value` lets a function modify the caller’s integer. A `const std::vector<int>&` lets it read an existing vector without copying or modifying it.",
            "ru": "Параметр по значению — копия. Параметр `int& value` позволяет функции менять целое у вызывающего кода. `const std::vector<int>&` даёт чтение существующего вектора без копирования и изменения.",
            "uk": "Параметр за значенням — копія. Параметр `int& value` дозволяє функції змінювати ціле в коді, що викликає. `const std::vector<int>&` дає читання наявного вектора без копіювання та зміни."
          },
          {
            "en": "`int* pointer = &value;` stores value’s address; `*pointer` accesses the pointed-to integer. A pointer may be nullptr, so check it before dereferencing. It must not outlive the object it refers to. Prefer ordinary values and references when they express the job clearly.",
            "ru": "`int* pointer = &value;` сохраняет адрес value; `*pointer` обращается к самому целому по адресу. Указатель может быть nullptr: проверяй перед разыменованием. Указатель не должен пережить объект, на который указывает. Для обычных задач предпочитай понятные значения и ссылки.",
            "uk": "`int* pointer = &value;` зберігає адресу value; `*pointer` звертається до самого цілого за адресою. Вказівник може бути nullptr: перевіряй перед розіменуванням. Вказівник не має пережити об’єкт, на який указує. Для звичайних завдань надавай перевагу зрозумілим значенням і посиланням."
          }
        ],
        "example": {
          "code": "#include <iostream>\n\nint main() {\n    int original = 4;\n    int& alias = original;\n    alias += 2;\n    std::cout << original << '\\n';\n    return 0;\n}\n",
          "input": "",
          "output": "6\n"
        },
        "lines": [
          {
            "en": "Create one integer with value 4.",
            "ru": "Создаём одно целое со значением 4.",
            "uk": "Створюємо одне ціле зі значенням 4."
          },
          {
            "en": "Bind alias to that same integer.",
            "ru": "Связываем alias с тем же целым.",
            "uk": "Пов’язуємо alias із тим самим цілим."
          },
          {
            "en": "Changing alias changes the original to 6.",
            "ru": "Изменение alias меняет исходное значение на 6.",
            "uk": "Зміна alias змінює початкове значення на 6."
          }
        ],
        "trace": [
          {
            "en": "There are two names but one integer object.",
            "ru": "Имен два, но целочисленный объект один.",
            "uk": "Імен два, але цілочисельний об’єкт один."
          }
        ],
        "mistake": {
          "en": "Never dereference nullptr or keep an address of an expired local variable. Passing a reference is not the same as returning a safe reference.",
          "ru": "Нельзя разыменовывать nullptr или хранить адрес уже исчезнувшей локальной переменной. Передать ссылку и вернуть безопасную ссылку — не одно и то же.",
          "uk": "Не можна розіменовувати nullptr або зберігати адресу вже зниклої локальної змінної. Передати посилання й повернути безпечне посилання — не те саме."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "reference-alias",
          "revision": 1,
          "title": {
            "en": "Change through another name",
            "ru": "Измени через другое имя",
            "uk": "Зміни через інше ім’я"
          },
          "learn": {
            "en": "A reference points at the existing integer rather than storing an independent copy.",
            "ru": "Ссылка обозначает существующее целое, а не независимую копию.",
            "uk": "Посилання позначає наявне ціле, а не незалежну копію."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Bind int& alias to n, add 5 through alias, then print n.",
              "ru": "Прочитай n (от −100 до 100). Свяжи int& alias с n, прибавь 5 через alias и выведи n.",
              "uk": "Прочитай n (від −100 до 100). Пов’яжи int& alias із n, додай 5 через alias та виведи n."
            }
          ],
          "starter": "#include <iostream>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n",
              "output": "8\n"
            },
            {
              "input": "-5\n",
              "output": "0\n"
            },
            {
              "input": "0\n",
              "output": "5\n"
            }
          ],
          "hints": [
            {
              "en": "A reference points at the existing integer rather than storing an independent copy.",
              "ru": "Ссылка обозначает существующее целое, а не независимую копию.",
              "uk": "Посилання позначає наявне ціле, а не незалежну копію."
            },
            {
              "en": "The & belongs to the reference declaration.",
              "ru": "Знак & относится к объявлению ссылки.",
              "uk": "Знак & належить до оголошення посилання."
            }
          ],
          "features": [
            "reference"
          ]
        },
        {
          "id": "reference-parameter",
          "revision": 1,
          "title": {
            "en": "Change the caller’s value",
            "ru": "Измени значение вызывающего кода",
            "uk": "Зміни значення коду, що викликає"
          },
          "learn": {
            "en": "A function with an int& parameter can assign to the variable used in its call. A void function returns no value.",
            "ru": "Функция с параметром int& может присваивать переменной, переданной при вызове. Функция void не возвращает значения.",
            "uk": "Функція з параметром int& може присвоювати змінній, переданій під час виклику. Функція void не повертає значення."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Define void AddOne(int& value), call it for n, then print n.",
              "ru": "Прочитай n (от −100 до 100). Объяви void AddOne(int& value), вызови её для n и выведи n.",
              "uk": "Прочитай n (від −100 до 100). Оголоси void AddOne(int& value), виклич її для n та виведи n."
            }
          ],
          "starter": "#include <iostream>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "7\n",
              "output": "8\n"
            },
            {
              "input": "-1\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "A function with an int& parameter can assign to the variable used in its call. A void function returns no value.",
              "ru": "Функция с параметром int& может присваивать переменной, переданной при вызове. Функция void не возвращает значения.",
              "uk": "Функція з параметром int& може присвоювати змінній, переданій під час виклику. Функція void не повертає значення."
            },
            {
              "en": "The caller prints the modified variable; there is no returned integer.",
              "ru": "Вызывающий код выводит изменённую переменную; возвращаемого целого нет.",
              "uk": "Код, що викликає, виводить змінену змінну; поверненого цілого немає."
            }
          ],
          "features": [
            "reference"
          ]
        },
        {
          "id": "const-reference",
          "revision": 1,
          "title": {
            "en": "Read without copying",
            "ru": "Прочитай без копирования",
            "uk": "Прочитай без копіювання"
          },
          "learn": {
            "en": "A const reference borrows a vector for reading. const prevents modifying that vector through the reference.",
            "ru": "Константная ссылка заимствует вектор для чтения. const запрещает менять вектор через эту ссылку.",
            "uk": "Константне посилання позичає вектор для читання. const забороняє змінювати вектор через це посилання."
          },
          "steps": [
            {
              "en": "Read count (0–10), then integers. Define Sum(const std::vector<int>& values) and print its result.",
              "ru": "Прочитай count (0–10), затем целые. Объяви Sum(const std::vector<int>& values) и выведи результат.",
              "uk": "Прочитай count (0–10), потім цілі. Оголоси Sum(const std::vector<int>& values) та виведи результат."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n2\n4\n6\n",
              "output": "12\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "2\n-3\n1\n",
              "output": "-2\n"
            }
          ],
          "hints": [
            {
              "en": "A const reference borrows a vector for reading. const prevents modifying that vector through the reference.",
              "ru": "Константная ссылка заимствует вектор для чтения. const запрещает менять вектор через эту ссылку.",
              "uk": "Константне посилання позичає вектор для читання. const забороняє змінювати вектор через це посилання."
            },
            {
              "en": "The helper keeps its own total, while only reading the borrowed vector.",
              "ru": "Помощник хранит собственную сумму, а заимствованный вектор только читает.",
              "uk": "Помічник зберігає власну суму, а позичений вектор лише читає."
            }
          ],
          "features": [
            "constref"
          ]
        },
        {
          "id": "copy-value",
          "revision": 1,
          "title": {
            "en": "A copy stays separate",
            "ru": "Копия остаётся отдельной",
            "uk": "Копія залишається окремою"
          },
          "learn": {
            "en": "Copying a vector copies its elements. Updating the copy does not update the original vector.",
            "ru": "Копирование вектора копирует его элементы. Изменение копии не меняет исходный вектор.",
            "uk": "Копіювання вектора копіює його елементи. Зміна копії не змінює початковий вектор."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Create vector original containing n. Copy it to copy, add 1 to copy[0], then print original[0] and copy[0] on separate lines.",
              "ru": "Прочитай n (от −100 до 100). Создай вектор original с n. Скопируй в copy, прибавь 1 к copy[0], выведи original[0] и copy[0] с разных строк.",
              "uk": "Прочитай n (від −100 до 100). Створи вектор original із n. Скопіюй у copy, додай 1 до copy[0], виведи original[0] та copy[0] з різних рядків."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "4\n",
              "output": "4\n5\n"
            },
            {
              "input": "-1\n",
              "output": "-1\n0\n"
            }
          ],
          "hints": [
            {
              "en": "Copying a vector copies its elements. Updating the copy does not update the original vector.",
              "ru": "Копирование вектора копирует его элементы. Изменение копии не меняет исходный вектор.",
              "uk": "Копіювання вектора копіює його елементи. Зміна копії не змінює початковий вектор."
            },
            {
              "en": "Declare a value copy here, not a reference.",
              "ru": "Здесь объявляется копия по значению, а не ссылка.",
              "uk": "Тут оголошується копія за значенням, а не посилання."
            }
          ],
          "features": []
        },
        {
          "id": "nullable-pointer",
          "revision": 1,
          "title": {
            "en": "Check an optional address",
            "ru": "Проверь необязательный адрес",
            "uk": "Перевір необов’язкову адресу"
          },
          "learn": {
            "en": "nullptr means no pointed-to object. Only dereference after confirming that the pointer is non-null.",
            "ru": "nullptr означает отсутствие объекта по указателю. Разыменовывай только после проверки, что указатель не пустой.",
            "uk": "nullptr означає відсутність об’єкта за вказівником. Розіменовуй лише після перевірки, що вказівник не порожній."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100) and flag (0 or 1). Set an int* to &n for flag 1, otherwise nullptr. Print the pointed-to value or `Empty`.",
              "ru": "Прочитай n (от −100 до 100) и flag (0 или 1). Для flag 1 запиши в int* адрес &n, иначе nullptr. Выведи значение по указателю или `Empty`.",
              "uk": "Прочитай n (від −100 до 100) та flag (0 або 1). Для flag 1 запиши в int* адресу &n, інакше nullptr. Виведи значення за вказівником або `Empty`."
            }
          ],
          "starter": "#include <iostream>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "7\n1\n",
              "output": "7\n"
            },
            {
              "input": "7\n0\n",
              "output": "Empty\n"
            },
            {
              "input": "-2\n1\n",
              "output": "-2\n"
            }
          ],
          "hints": [
            {
              "en": "nullptr means no pointed-to object. Only dereference after confirming that the pointer is non-null.",
              "ru": "nullptr означает отсутствие объекта по указателю. Разыменовывай только после проверки, что указатель не пустой.",
              "uk": "nullptr означає відсутність об’єкта за вказівником. Розіменовуй лише після перевірки, що вказівник не порожній."
            },
            {
              "en": "&n obtains an address; *pointer reads the value at an address.",
              "ru": "&n получает адрес; *pointer читает значение по адресу.",
              "uk": "&n отримує адресу; *pointer читає значення за адресою."
            }
          ],
          "features": [
            "pointer"
          ]
        }
      ]
    },
    {
      "id": "classes-ownership",
      "title": {
        "en": "Objects and automatic ownership",
        "ru": "Объекты и автоматическое владение",
        "uk": "Об’єкти й автоматичне володіння"
      },
      "intro": {
        "en": "Group data, preserve invariants, and let owners clean up resources.",
        "ru": "Группируй данные, сохраняй правила объекта и освобождай ресурсы через владельцев.",
        "uk": "Групуй дані, зберігай правила об’єкта та звільняй ресурси через власників."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "A struct groups related fields. A class can hide fields behind public methods. A constructor initializes a new object; an initializer list such as `Counter(int n) : value(n) {}` initializes its fields directly. A const method promises not to modify the object through this.",
            "ru": "Структура группирует связанные поля. Класс может скрыть поля за открытыми методами. Конструктор инициализирует объект; список `Counter(int n) : value(n) {}` сразу инициализирует поле. Метод с const обещает не менять объект через this.",
            "uk": "Структура групує пов’язані поля. Клас може приховати поля за відкритими методами. Конструктор ініціалізує об’єкт; список `Counter(int n) : value(n) {}` відразу ініціалізує поле. Метод із const обіцяє не змінювати об’єкт через this."
          },
          {
            "en": "RAII connects a resource’s lifetime to its owner’s lifetime. A destructor runs when an object leaves its scope, including during exception unwinding. Standard containers and file streams already use this pattern. Do not scatter manual cleanup commands across every return path.",
            "ru": "RAII связывает время жизни ресурса со временем жизни владельца. Деструктор вызывается при выходе объекта из области, в том числе при обработке исключения. Стандартные контейнеры и файловые потоки уже следуют этому правилу. Не разбрасывай ручное освобождение по всем веткам return.",
            "uk": "RAII пов’язує час життя ресурсу з часом життя власника. Деструктор викликається під час виходу об’єкта з області, зокрема під час обробки винятку. Стандартні контейнери й файлові потоки вже дотримуються цього правила. Не розкидай ручне звільнення по всіх гілках return."
          },
          {
            "en": "`std::unique_ptr<T>` owns one object. `std::make_unique<T>(...)` creates that owner safely, and `owner->Method()` accesses the object. A virtual method can be overridden in a derived class; a polymorphic base that is deleted through its base type needs a virtual destructor.",
            "ru": "`std::unique_ptr<T>` владеет одним объектом. `std::make_unique<T>(...)` безопасно создаёт такого владельца, а `owner->Method()` обращается к объекту. Виртуальный метод можно переопределить в наследнике; полиморфной базе, удаляемой через базовый тип, нужен виртуальный деструктор.",
            "uk": "`std::unique_ptr<T>` володіє одним об’єктом. `std::make_unique<T>(...)` безпечно створює такого власника, а `owner->Method()` звертається до об’єкта. Віртуальний метод можна перевизначити в нащадку; поліморфній базі, яку видаляють через базовий тип, потрібен віртуальний деструктор."
          }
        ],
        "example": {
          "code": "#include <iostream>\n\nstruct Marker { Marker() { std::cout << \"Open\\n\"; } ~Marker() { std::cout << \"Close\\n\"; } };\n\nint main() {\n    {\n        Marker marker;\n        std::cout << \"Work\\n\";\n    }\n    std::cout << \"After\\n\";\n    return 0;\n}\n",
          "input": "",
          "output": "Open\nWork\nClose\nAfter\n"
        },
        "lines": [
          {
            "en": "Enter a scope and construct Marker.",
            "ru": "Входим в область и создаём Marker.",
            "uk": "Входимо в область і створюємо Marker."
          },
          {
            "en": "Perform work while the object exists.",
            "ru": "Работаем, пока объект существует.",
            "uk": "Працюємо, поки об’єкт існує."
          },
          {
            "en": "Leaving the braces runs the destructor before After.",
            "ru": "Выход из скобок вызывает деструктор до строки After.",
            "uk": "Вихід із дужок викликає деструктор до рядка After."
          }
        ],
        "trace": [
          {
            "en": "Open → Work → Close → After.",
            "ru": "Open → Work → Close → After.",
            "uk": "Open → Work → Close → After."
          }
        ],
        "mistake": {
          "en": "Do not manually delete an object owned by unique_ptr. The owner is responsible for it. After moving ownership, the old unique_ptr no longer owns that object.",
          "ru": "Не удаляй вручную объект, которым владеет unique_ptr. Это ответственность владельца. После переноса владения старый unique_ptr больше не владеет этим объектом.",
          "uk": "Не видаляй вручну об’єкт, яким володіє unique_ptr. Це відповідальність власника. Після перенесення володіння старий unique_ptr більше не володіє цим об’єктом."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "struct-point",
          "revision": 1,
          "title": {
            "en": "Group two coordinates",
            "ru": "Сгруппируй две координаты",
            "uk": "Згрупуй дві координати"
          },
          "learn": {
            "en": "A struct can store related fields. Aggregate initialization fills them in declaration order.",
            "ru": "Структура хранит связанные поля. Инициализация списком заполняет их в порядке объявления.",
            "uk": "Структура зберігає пов’язані поля. Ініціалізація списком заповнює їх у порядку оголошення."
          },
          "steps": [
            {
              "en": "Read x and y (−100 to 100). Declare Point with int x and y, create a Point from the input, and print the sum of its fields.",
              "ru": "Прочитай x и y (от −100 до 100). Объяви Point с int x и y, создай Point из ввода и выведи сумму его полей.",
              "uk": "Прочитай x та y (від −100 до 100). Оголоси Point з int x та y, створи Point із введення й виведи суму його полів."
            }
          ],
          "starter": "#include <iostream>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n4\n",
              "output": "7\n"
            },
            {
              "input": "-2\n2\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "A struct can store related fields. Aggregate initialization fills them in declaration order.",
              "ru": "Структура хранит связанные поля. Инициализация списком заполняет их в порядке объявления.",
              "uk": "Структура зберігає пов’язані поля. Ініціалізація списком заповнює їх у порядку оголошення."
            },
            {
              "en": "Use a dot to select a field from an object value.",
              "ru": "Используй точку для обращения к полю объекта-значения.",
              "uk": "Використовуй крапку для звернення до поля об’єкта-значення."
            }
          ],
          "features": [
            "struct"
          ]
        },
        {
          "id": "class-counter",
          "revision": 1,
          "title": {
            "en": "Keep a value behind methods",
            "ru": "Храни значение за методами",
            "uk": "Зберігай значення за методами"
          },
          "learn": {
            "en": "A private field is accessible to class methods. Public methods form the object’s interface.",
            "ru": "Закрытое поле доступно методам класса. Открытые методы образуют интерфейс объекта.",
            "uk": "Закрите поле доступне методам класу. Відкриті методи утворюють інтерфейс об’єкта."
          },
          "steps": [
            {
              "en": "Read start and amount (0–100). Define Counter with a private value, a constructor, Add(amount), and Value() const. Print the updated counter value.",
              "ru": "Прочитай start и amount (0–100). Объяви Counter с закрытым value, конструктором, Add(amount) и Value() const. Выведи изменённое значение счётчика.",
              "uk": "Прочитай start та amount (0–100). Оголоси Counter із закритим value, конструктором, Add(amount) та Value() const. Виведи змінене значення лічильника."
            }
          ],
          "starter": "#include <iostream>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "4\n3\n",
              "output": "7\n"
            },
            {
              "input": "0\n0\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "A private field is accessible to class methods. Public methods form the object’s interface.",
              "ru": "Закрытое поле доступно методам класса. Открытые методы образуют интерфейс объекта.",
              "uk": "Закрите поле доступне методам класу. Відкриті методи утворюють інтерфейс об’єкта."
            },
            {
              "en": "Place public: before the operations that Main/main should call.",
              "ru": "Поставь public: перед операциями, которые должен вызывать main.",
              "uk": "Постав public: перед операціями, які має викликати main."
            }
          ],
          "features": [
            "class"
          ]
        },
        {
          "id": "scope-cleanup",
          "revision": 1,
          "title": {
            "en": "Observe the end of a lifetime",
            "ru": "Увидь конец времени жизни",
            "uk": "Побач кінець часу життя"
          },
          "learn": {
            "en": "The destructor runs as a local object leaves its braces. Output from its destructor therefore happens before the next outer instruction.",
            "ru": "Деструктор запускается при выходе локального объекта из скобок. Поэтому его вывод происходит перед следующей внешней командой.",
            "uk": "Деструктор запускається під час виходу локального об’єкта з дужок. Тому його виведення відбувається перед наступною зовнішньою командою."
          },
          "steps": [
            {
              "en": "Read n. Create Marker in an inner scope; its constructor prints `Open`, and destructor prints `Close`. Print n inside the scope, then `After` outside.",
              "ru": "Прочитай n. Создай Marker во внутренней области: конструктор выводит `Open`, деструктор `Close`. Внутри области выведи n, снаружи — `After`.",
              "uk": "Прочитай n. Створи Marker у внутрішній області: конструктор виводить `Open`, деструктор `Close`. Усередині області виведи n, зовні — `After`."
            }
          ],
          "starter": "#include <iostream>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "7\n",
              "output": "Open\n7\nClose\nAfter\n"
            },
            {
              "input": "0\n",
              "output": "Open\n0\nClose\nAfter\n"
            }
          ],
          "hints": [
            {
              "en": "The destructor runs as a local object leaves its braces. Output from its destructor therefore happens before the next outer instruction.",
              "ru": "Деструктор запускается при выходе локального объекта из скобок. Поэтому его вывод происходит перед следующей внешней командой.",
              "uk": "Деструктор запускається під час виходу локального об’єкта з дужок. Тому його виведення відбувається перед наступною зовнішньою командою."
            },
            {
              "en": "The destructor name starts with ~ and has no return type.",
              "ru": "Имя деструктора начинается с ~ и не имеет типа результата.",
              "uk": "Ім’я деструктора починається з ~ і не має типу результату."
            }
          ],
          "features": [
            "destructor"
          ]
        },
        {
          "id": "unique-owner",
          "revision": 1,
          "title": {
            "en": "Use one automatic owner",
            "ru": "Используй одного автоматического владельца",
            "uk": "Використай одного автоматичного власника"
          },
          "learn": {
            "en": "make_unique creates an object and its unique owner. Dereference the owner with * to access its value.",
            "ru": "make_unique создаёт объект и единственного владельца. Через * можно обратиться к значению объекта.",
            "uk": "make_unique створює об’єкт та єдиного власника. Через * можна звернутися до значення об’єкта."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Own an int with std::make_unique<int>(n), add 2 to the owned value, and print it. Do not use new or delete.",
              "ru": "Прочитай n (от −100 до 100). Создай владельца int через std::make_unique<int>(n), прибавь 2 к значению и выведи его. new и delete не нужны.",
              "uk": "Прочитай n (від −100 до 100). Створи власника int через std::make_unique<int>(n), додай 2 до значення та виведи його. new і delete не потрібні."
            }
          ],
          "starter": "#include <iostream>\n#include <memory>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "5\n",
              "output": "7\n"
            },
            {
              "input": "-2\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "make_unique creates an object and its unique owner. Dereference the owner with * to access its value.",
              "ru": "make_unique создаёт объект и единственного владельца. Через * можно обратиться к значению объекта.",
              "uk": "make_unique створює об’єкт та єдиного власника. Через * можна звернутися до значення об’єкта."
            },
            {
              "en": "The unique_ptr frees the int when it leaves its scope.",
              "ru": "unique_ptr освободит int при выходе из области.",
              "uk": "unique_ptr звільнить int під час виходу з області."
            }
          ],
          "features": [
            "unique"
          ]
        },
        {
          "id": "virtual-behavior",
          "revision": 1,
          "title": {
            "en": "Call the actual object’s behavior",
            "ru": "Вызови поведение реального объекта",
            "uk": "Виклич поведінку справжнього об’єкта"
          },
          "learn": {
            "en": "A virtual call through a base pointer selects the derived object’s override. A virtual destructor supports safe cleanup through that base.",
            "ru": "Виртуальный вызов через базовый указатель выбирает переопределение дочернего объекта. Виртуальный деструктор обеспечивает безопасное освобождение через базу.",
            "uk": "Віртуальний виклик через базовий вказівник обирає перевизначення дочірнього об’єкта. Віртуальний деструктор забезпечує безпечне звільнення через базу."
          },
          "steps": [
            {
              "en": "Read cat or dog. Define Animal with virtual Speak() const and a virtual destructor. Own a Cat or Dog through unique_ptr<Animal>; print Meow or Woof via Speak().",
              "ru": "Прочитай cat или dog. Объяви Animal с virtual Speak() const и виртуальным деструктором. Через unique_ptr<Animal> храни Cat или Dog; выведи Meow или Woof вызовом Speak().",
              "uk": "Прочитай cat або dog. Оголоси Animal з virtual Speak() const та віртуальним деструктором. Через unique_ptr<Animal> зберігай Cat або Dog; виведи Meow або Woof викликом Speak()."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <memory>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "cat\n",
              "output": "Meow\n"
            },
            {
              "input": "dog\n",
              "output": "Woof\n"
            }
          ],
          "hints": [
            {
              "en": "A virtual call through a base pointer selects the derived object’s override. A virtual destructor supports safe cleanup through that base.",
              "ru": "Виртуальный вызов через базовый указатель выбирает переопределение дочернего объекта. Виртуальный деструктор обеспечивает безопасное освобождение через базу.",
              "uk": "Віртуальний виклик через базовий вказівник обирає перевизначення дочірнього об’єкта. Віртуальний деструктор забезпечує безпечне звільнення через базу."
            },
            {
              "en": "override asks the compiler to check that a matching virtual base method exists.",
              "ru": "override просит компилятор проверить наличие подходящего виртуального метода базы.",
              "uk": "override просить компілятор перевірити наявність відповідного віртуального методу бази."
            }
          ],
          "features": [
            "override"
          ]
        }
      ]
    },
    {
      "id": "algorithms-templates",
      "title": {
        "en": "Express reusable algorithms",
        "ru": "Опиши повторно используемые алгоритмы",
        "uk": "Опиши повторно використовувані алгоритми"
      },
      "intro": {
        "en": "Use lambdas, standard algorithms, and a type parameter.",
        "ru": "Используй лямбды, стандартные алгоритмы и параметр типа.",
        "uk": "Використовуй лямбди, стандартні алгоритми й параметр типу."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "Standard algorithms work on ranges. `values.begin()` points to the first element and `values.end()` represents the position after the last. The end position is excluded; never dereference it.",
            "ru": "Стандартные алгоритмы работают с диапазонами. `values.begin()` указывает на первый элемент, `values.end()` обозначает позицию после последнего. Конец не включается: разыменовывать end нельзя.",
            "uk": "Стандартні алгоритми працюють із діапазонами. `values.begin()` указує на перший елемент, `values.end()` позначає позицію після останнього. Кінець не включається: розіменовувати end не можна."
          },
          {
            "en": "A lambda such as `[](int x) { return x > 0; }` is a small function. count_if uses it as a question about each element. sort changes the order inside its range. accumulate combines a range starting from an initial value such as 0.",
            "ru": "Лямбда `[](int x) { return x > 0; }` — маленькая функция. count_if задаёт ею вопрос каждому элементу. sort меняет порядок внутри диапазона. accumulate объединяет диапазон начиная с начального значения, например 0.",
            "uk": "Лямбда `[](int x) { return x > 0; }` — маленька функція. count_if ставить нею запитання кожному елементу. sort змінює порядок усередині діапазону. accumulate поєднує діапазон починаючи з початкового значення, наприклад 0."
          },
          {
            "en": "A function template begins with `template <typename T>`. T stands for a type selected from the call. `T Larger(T a, T b)` works for compatible types that provide comparison. It is checked by the compiler for each used type.",
            "ru": "Шаблон функции начинается с `template <typename T>`. T обозначает тип, выбранный по вызову. `T Larger(T a, T b)` работает с совместимыми типами, у которых есть сравнение. Компилятор проверяет каждый используемый вариант типа.",
            "uk": "Шаблон функції починається з `template <typename T>`. T позначає тип, обраний за викликом. `T Larger(T a, T b)` працює із сумісними типами, які мають порівняння. Компілятор перевіряє кожен використаний варіант типу."
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> values = {-2, 3, 5};\n    auto count = std::count_if(values.begin(), values.end(), [](int x) { return x > 0; });\n    std::cout << count << '\\n';\n    return 0;\n}\n",
          "input": "",
          "output": "2\n"
        },
        "lines": [
          {
            "en": "Provide the beginning and excluded end of the range.",
            "ru": "Передаём начало и невключённый конец диапазона.",
            "uk": "Передаємо початок та невключений кінець діапазону."
          },
          {
            "en": "Ask whether each value is positive.",
            "ru": "Спрашиваем у каждого значения, положительно ли оно.",
            "uk": "Запитуємо кожне значення, чи воно додатне."
          },
          {
            "en": "Count the true answers.",
            "ru": "Считаем верные ответы.",
            "uk": "Рахуємо істинні відповіді."
          }
        ],
        "trace": [
          {
            "en": "−2 → false; 3 → true; 5 → true. Count: 2.",
            "ru": "−2 → неверно; 3 → верно; 5 → верно. Количество: 2.",
            "uk": "−2 → хибно; 3 → істинно; 5 → істинно. Кількість: 2."
          }
        ],
        "mistake": {
          "en": "An algorithm’s range does not include end(). Sorting mutates the stored order; make a copy first if the original order matters.",
          "ru": "Диапазон алгоритма не включает end(). Сортировка меняет сохранённый порядок: сделай копию, если исходный порядок важен.",
          "uk": "Діапазон алгоритму не включає end(). Сортування змінює збережений порядок: зроби копію, якщо початковий порядок важливий."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "lambda-double",
          "revision": 1,
          "title": {
            "en": "Name a lambda",
            "ru": "Дай лямбде имя",
            "uk": "Дай лямбді ім’я"
          },
          "learn": {
            "en": "auto lets the compiler infer the lambda’s type. Call the saved lambda with parentheses.",
            "ru": "auto позволяет компилятору определить тип лямбды. Сохранённая лямбда вызывается круглыми скобками.",
            "uk": "auto дає змогу компілятору визначити тип лямбди. Збережена лямбда викликається круглими дужками."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Store a doubling lambda in twice and print twice(n).",
              "ru": "Прочитай n (от −100 до 100). Сохрани удваивающую лямбду в twice и выведи twice(n).",
              "uk": "Прочитай n (від −100 до 100). Збережи лямбду подвоєння у twice та виведи twice(n)."
            }
          ],
          "starter": "#include <iostream>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n",
              "output": "6\n"
            },
            {
              "input": "-2\n",
              "output": "-4\n"
            }
          ],
          "hints": [
            {
              "en": "auto lets the compiler infer the lambda’s type. Call the saved lambda with parentheses.",
              "ru": "auto позволяет компилятору определить тип лямбды. Сохранённая лямбда вызывается круглыми скобками.",
              "uk": "auto дає змогу компілятору визначити тип лямбди. Збережена лямбда викликається круглими дужками."
            },
            {
              "en": "The empty [] means the lambda captures no surrounding values.",
              "ru": "Пустые [] означают, что лямбда не захватывает окружающие значения.",
              "uk": "Порожні [] означають, що лямбда не захоплює навколишні значення."
            }
          ],
          "features": [
            "lambda"
          ]
        },
        {
          "id": "algorithm-count",
          "revision": 1,
          "title": {
            "en": "Count matching values",
            "ru": "Посчитай подходящие значения",
            "uk": "Порахуй відповідні значення"
          },
          "learn": {
            "en": "count_if receives a predicate: a function that returns true or false for each element.",
            "ru": "count_if получает предикат — функцию с ответом true или false для каждого элемента.",
            "uk": "count_if отримує предикат — функцію з відповіддю true або false для кожного елемента."
          },
          "steps": [
            {
              "en": "Read count (0–10), then integers. Use std::count_if to print how many are positive.",
              "ru": "Прочитай count (0–10), затем целые. Через std::count_if выведи количество положительных.",
              "uk": "Прочитай count (0–10), потім цілі. Через std::count_if виведи кількість додатних."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n-1\n0\n4\n",
              "output": "1\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "2\n2\n3\n",
              "output": "2\n"
            }
          ],
          "hints": [
            {
              "en": "count_if receives a predicate: a function that returns true or false for each element.",
              "ru": "count_if получает предикат — функцию с ответом true или false для каждого элемента.",
              "uk": "count_if отримує предикат — функцію з відповіддю true або false для кожного елемента."
            },
            {
              "en": "Use begin and end from the same vector.",
              "ru": "Бери begin и end у одного и того же вектора.",
              "uk": "Бери begin та end у того самого вектора."
            }
          ],
          "features": [
            "countif"
          ]
        },
        {
          "id": "algorithm-sort",
          "revision": 1,
          "title": {
            "en": "Sort stored numbers",
            "ru": "Отсортируй сохранённые числа",
            "uk": "Відсортуй збережені числа"
          },
          "learn": {
            "en": "std::sort reorders the elements between begin and end in ascending order by default.",
            "ru": "std::sort по умолчанию переставляет элементы между begin и end по возрастанию.",
            "uk": "std::sort за замовчуванням переставляє елементи між begin та end за зростанням."
          },
          "steps": [
            {
              "en": "Read count (0–10), then integers. Sort them ascending with std::sort and print each on its own line. For 0, print nothing.",
              "ru": "Прочитай count (0–10), затем целые. Отсортируй по возрастанию через std::sort и выведи каждое с новой строки. Для 0 ничего не выводи.",
              "uk": "Прочитай count (0–10), потім цілі. Відсортуй за зростанням через std::sort та виведи кожне з нового рядка. Для 0 нічого не виводь."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n5\n-2\n1\n",
              "output": "-2\n1\n5\n"
            },
            {
              "input": "0\n",
              "output": ""
            },
            {
              "input": "3\n2\n2\n1\n",
              "output": "1\n2\n2\n"
            }
          ],
          "hints": [
            {
              "en": "std::sort reorders the elements between begin and end in ascending order by default.",
              "ru": "std::sort по умолчанию переставляет элементы между begin и end по возрастанию.",
              "uk": "std::sort за замовчуванням переставляє елементи між begin та end за зростанням."
            },
            {
              "en": "Duplicates remain; sorting does not remove them.",
              "ru": "Повторы остаются: сортировка их не удаляет.",
              "uk": "Повтори залишаються: сортування їх не видаляє."
            }
          ],
          "features": [
            "sort"
          ]
        },
        {
          "id": "algorithm-sum",
          "revision": 1,
          "title": {
            "en": "Accumulate from a starting value",
            "ru": "Накопи с начального значения",
            "uk": "Накопич із початкового значення"
          },
          "learn": {
            "en": "accumulate adds each element to its starting value. For an empty range, the starting value is the whole result.",
            "ru": "accumulate прибавляет каждый элемент к начальному значению. Для пустого диапазона результат равен начальному значению.",
            "uk": "accumulate додає кожен елемент до початкового значення. Для порожнього діапазону результат дорівнює початковому значенню."
          },
          "steps": [
            {
              "en": "Read count (0–10), then integers (−100 to 100). Use std::accumulate with an initial 0 and print the sum.",
              "ru": "Прочитай count (0–10), затем целые (от −100 до 100). Через std::accumulate с начальным 0 выведи сумму.",
              "uk": "Прочитай count (0–10), потім цілі (від −100 до 100). Через std::accumulate з початковим 0 виведи суму."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n2\n4\n6\n",
              "output": "12\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "2\n-2\n1\n",
              "output": "-1\n"
            }
          ],
          "hints": [
            {
              "en": "accumulate adds each element to its starting value. For an empty range, the starting value is the whole result.",
              "ru": "accumulate прибавляет каждый элемент к начальному значению. Для пустого диапазона результат равен начальному значению.",
              "uk": "accumulate додає кожен елемент до початкового значення. Для порожнього діапазону результат дорівнює початковому значенню."
            },
            {
              "en": "Include <numeric> for accumulate.",
              "ru": "Для accumulate подключи <numeric>.",
              "uk": "Для accumulate підключи <numeric>."
            }
          ],
          "features": [
            "accumulate"
          ]
        },
        {
          "id": "template-larger",
          "revision": 1,
          "title": {
            "en": "One function, two types",
            "ru": "Одна функция — два типа",
            "uk": "Одна функція — два типи"
          },
          "learn": {
            "en": "A template type parameter connects both inputs and the returned value. Use the same type for each pair of arguments.",
            "ru": "Параметр типа шаблона связывает оба входа и результат. Для каждой пары аргументов используй один тип.",
            "uk": "Параметр типу шаблону пов’язує обидва входи та результат. Для кожної пари аргументів використовуй один тип."
          },
          "steps": [
            {
              "en": "Read integers a,b (−100 to 100), then two lowercase ASCII words x,y. Define template Larger<T>(T a,T b), return the larger, and print the larger integer then lexicographically larger word.",
              "ru": "Прочитай целые a,b (от −100 до 100), затем два слова x,y из строчных ASCII-букв. Объяви шаблон Larger<T>(T a,T b), возвращающий большее. Выведи большее число, затем большее слово в лексикографическом порядке.",
              "uk": "Прочитай цілі a,b (від −100 до 100), потім два слова x,y з малих ASCII-літер. Оголоси шаблон Larger<T>(T a,T b), що повертає більше. Виведи більше число, потім більше слово в лексикографічному порядку."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n8\napple\npear\n",
              "output": "8\npear\n"
            },
            {
              "input": "-2\n-2\nzoo\nant\n",
              "output": "-2\nzoo\n"
            }
          ],
          "hints": [
            {
              "en": "A template type parameter connects both inputs and the returned value. Use the same type for each pair of arguments.",
              "ru": "Параметр типа шаблона связывает оба входа и результат. Для каждой пары аргументов используй один тип.",
              "uk": "Параметр типу шаблону пов’язує обидва входи та результат. Для кожної пари аргументів використовуй один тип."
            },
            {
              "en": "String comparison is lexicographic, not a comparison of word lengths.",
              "ru": "Строки сравниваются лексикографически, а не по длине слов.",
              "uk": "Рядки порівнюються лексикографічно, а не за довжиною слів."
            }
          ],
          "features": [
            "template"
          ]
        }
      ]
    },
    {
      "id": "safe-data",
      "title": {
        "en": "Failures, files, and asynchronous work",
        "ru": "Ошибки, файлы и асинхронная работа",
        "uk": "Помилки, файли та асинхронна робота"
      },
      "intro": {
        "en": "Validate text, keep file lifetimes clear, and receive a future result.",
        "ru": "Проверяй текст, управляй временем жизни файлов и получай результат future.",
        "uk": "Перевіряй текст, керуй часом життя файлів та отримуй результат future."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "std::stoi converts a string to an integer, but may consume only a prefix: \"12x\" can start with a valid 12. Its optional position result tells you how many characters were consumed. Compare that with the full length when the whole input must be a number.",
            "ru": "std::stoi превращает строку в целое, но может прочитать только начало: \"12x\" начинается с корректного 12. Дополнительный результат position показывает количество прочитанных символов. Сравни его с полной длиной, если вся строка должна быть числом.",
            "uk": "std::stoi перетворює рядок на ціле, але може прочитати лише початок: \"12x\" починається з коректного 12. Додатковий результат position показує кількість прочитаних символів. Порівняй його з повною довжиною, якщо весь рядок має бути числом."
          },
          {
            "en": "Throw an exception for a failure your caller needs to handle. catch receives a matching exception. A file stream is an RAII owner: place its writing in a scope so the stream closes and flushes before a separate reader opens the same file. Check whether opening worked.",
            "ru": "Вызывай исключение для ошибки, которую должен обработать вызывающий код. catch принимает подходящее исключение. Файловый поток — RAII-владелец: помести запись в область, чтобы поток закрылся и сбросил буфер до открытия отдельного читателя. Проверяй успешность открытия.",
            "uk": "Викликай виняток для помилки, яку має обробити код, що викликає. catch приймає відповідний виняток. Файловий потік — RAII-власник: помісти запис в область, щоб потік закрився та скинув буфер до відкриття окремого читача. Перевіряй успішність відкриття."
          },
          {
            "en": "std::istringstream reads values from a string. std::async with launch::async schedules work and returns a future; get waits and receives its result, including a stored exception. The exercises use short calculations, not live network access. Online files last only for the current execution.",
            "ru": "std::istringstream читает значения из строки. std::async с launch::async запускает работу и возвращает future; get ждёт и получает результат, включая сохранённое исключение. В заданиях используются короткие расчёты, а не настоящая сеть. Онлайн-файлы живут только в текущем запуске.",
            "uk": "std::istringstream читає значення з рядка. std::async із launch::async запускає роботу та повертає future; get чекає й отримує результат, зокрема збережений виняток. У завданнях використовуються короткі розрахунки, а не справжня мережа. Онлайн-файли живуть лише в поточному запуску."
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <sstream>\n\nint main() {\n    std::istringstream input(\"4 7\");\n    int a, b;\n    input >> a >> b;\n    std::cout << a + b << '\\n';\n    return 0;\n}\n",
          "input": "",
          "output": "11\n"
        },
        "lines": [
          {
            "en": "Create a stream from existing text.",
            "ru": "Создаём поток из готового текста.",
            "uk": "Створюємо потік із готового тексту."
          },
          {
            "en": "Read two numbers from that stream.",
            "ru": "Читаем два числа из этого потока.",
            "uk": "Читаємо два числа із цього потоку."
          },
          {
            "en": "Calculate and display their sum.",
            "ru": "Вычисляем и показываем сумму.",
            "uk": "Обчислюємо й показуємо суму."
          }
        ],
        "trace": [
          {
            "en": "Text \"4 7\" → a = 4, b = 7 → 11.",
            "ru": "Текст \"4 7\" → a = 4, b = 7 → 11.",
            "uk": "Текст \"4 7\" → a = 4, b = 7 → 11."
          }
        ],
        "mistake": {
          "en": "Do not assume a conversion consumed the full string, a file opened, or a future already finished. Check the relevant result at each boundary.",
          "ru": "Не считай заранее, что преобразование прочитало всю строку, файл открылся или future уже завершён. На каждой границе проверяй соответствующий результат.",
          "uk": "Не вважай наперед, що перетворення прочитало весь рядок, файл відкрився або future вже завершено. На кожній межі перевіряй відповідний результат."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "parse-complete",
          "revision": 1,
          "title": {
            "en": "Validate the whole input",
            "ru": "Проверь весь ввод",
            "uk": "Перевір усе введення"
          },
          "learn": {
            "en": "stoi can return a numeric prefix. The position result distinguishes a complete integer from a word starting with digits.",
            "ru": "stoi может вернуть числовое начало. Результат position отличает полное целое от слова, начинающегося цифрами.",
            "uk": "stoi може повернути числовий початок. Результат position відрізняє повне ціле від слова, що починається цифрами."
          },
          "steps": [
            {
              "en": "Read a line: a signed integer in −100..100, invalid letters, or a number with trailing letters. Using stoi and its consumed position, print twice a complete integer; otherwise `Invalid`.",
              "ru": "Прочитай строку: целое в −100..100, неверные буквы или число с буквами в конце. Через stoi и количество прочитанных символов выведи удвоенное полное целое либо `Invalid`.",
              "uk": "Прочитай рядок: ціле в −100..100, хибні літери або число з літерами наприкінці. Через stoi та кількість прочитаних символів виведи подвоєне повне ціле або `Invalid`."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <stdexcept>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "12\n",
              "output": "24\n"
            },
            {
              "input": "12x\n",
              "output": "Invalid\n"
            },
            {
              "input": "no\n",
              "output": "Invalid\n"
            },
            {
              "input": "-2\n",
              "output": "-4\n"
            }
          ],
          "hints": [
            {
              "en": "stoi can return a numeric prefix. The position result distinguishes a complete integer from a word starting with digits.",
              "ru": "stoi может вернуть числовое начало. Результат position отличает полное целое от слова, начинающегося цифрами.",
              "uk": "stoi може повернути числовий початок. Результат position відрізняє повне ціле від слова, що починається цифрами."
            },
            {
              "en": "The catch also handles a string with no convertible numeric prefix.",
              "ru": "catch также обрабатывает строку, в которой вообще нет числового начала.",
              "uk": "catch також обробляє рядок, у якому взагалі немає числового початку."
            }
          ],
          "features": [
            "catch"
          ]
        },
        {
          "id": "throw-invalid",
          "revision": 1,
          "title": {
            "en": "Reject an invalid value",
            "ru": "Отклони неверное значение",
            "uk": "Відхили хибне значення"
          },
          "learn": {
            "en": "A helper may reject an argument with std::invalid_argument. The caller chooses the user-facing result in catch.",
            "ru": "Помощник может отклонить аргумент через std::invalid_argument. Вызывающий код выбирает понятный результат в catch.",
            "uk": "Помічник може відхилити аргумент через std::invalid_argument. Код, що викликає, обирає зрозумілий результат у catch."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Define Nonnegative(n), throwing invalid_argument for a negative value and returning n otherwise. Print its result, or `Invalid` when caught.",
              "ru": "Прочитай n (от −100 до 100). Объяви Nonnegative(n): для отрицательного вызывай invalid_argument, иначе возвращай n. Выведи результат либо `Invalid` при перехвате.",
              "uk": "Прочитай n (від −100 до 100). Оголоси Nonnegative(n): для від’ємного викликай invalid_argument, інакше повертай n. Виведи результат або `Invalid` під час перехоплення."
            }
          ],
          "starter": "#include <iostream>\n#include <stdexcept>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "-1\n",
              "output": "Invalid\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "7\n",
              "output": "7\n"
            }
          ],
          "hints": [
            {
              "en": "A helper may reject an argument with std::invalid_argument. The caller chooses the user-facing result in catch.",
              "ru": "Помощник может отклонить аргумент через std::invalid_argument. Вызывающий код выбирает понятный результат в catch.",
              "uk": "Помічник може відхилити аргумент через std::invalid_argument. Код, що викликає, обирає зрозумілий результат у catch."
            },
            {
              "en": "Keep the validation in the helper and the message in the caller.",
              "ru": "Оставь проверку в помощнике, а сообщение — в вызывающем коде.",
              "uk": "Залиш перевірку в помічнику, а повідомлення — у коді, що викликає."
            }
          ],
          "features": [
            "throw"
          ]
        },
        {
          "id": "file-roundtrip",
          "revision": 1,
          "title": {
            "en": "Write, close, then read",
            "ru": "Запиши, закрой, затем прочитай",
            "uk": "Запиши, закрий, потім прочитай"
          },
          "learn": {
            "en": "An ofstream closes at the end of its scope. Open the ifstream afterwards so the reader sees all written content.",
            "ru": "ofstream закрывается в конце области. Открой ifstream после этого, чтобы читатель увидел весь записанный текст.",
            "uk": "ofstream закривається наприкінці області. Відкрий ifstream після цього, щоб читач побачив увесь записаний текст."
          },
          "steps": [
            {
              "en": "Read an ASCII text line. Write it to note.txt, close the writer using a scope, read it back, and print it. Check file opening.",
              "ru": "Прочитай строку ASCII-текста. Запиши в note.txt, закрой писатель выходом из области, прочитай обратно и выведи. Проверь открытие файлов.",
              "uk": "Прочитай рядок ASCII-тексту. Запиши в note.txt, закрий запис виходом з області, прочитай назад і виведи. Перевір відкриття файлів."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <fstream>\n#include <stdexcept>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "Hello file\n",
              "output": "Hello file\n"
            },
            {
              "input": "\n",
              "output": "\n"
            }
          ],
          "hints": [
            {
              "en": "An ofstream closes at the end of its scope. Open the ifstream afterwards so the reader sees all written content.",
              "ru": "ofstream закрывается в конце области. Открой ifstream после этого, чтобы читатель увидел весь записанный текст.",
              "uk": "ofstream закривається наприкінці області. Відкрий ifstream після цього, щоб читач побачив увесь записаний текст."
            },
            {
              "en": "The braces are meaningful: they end the writer’s lifetime before reading.",
              "ru": "Скобки здесь важны: они завершают время жизни писателя перед чтением.",
              "uk": "Дужки тут важливі: вони завершують час життя записувача перед читанням."
            }
          ],
          "features": [
            "file"
          ]
        },
        {
          "id": "text-stream",
          "revision": 1,
          "title": {
            "en": "Parse numbers from one line",
            "ru": "Разбери числа из одной строки",
            "uk": "Розбери числа з одного рядка"
          },
          "learn": {
            "en": "An istringstream uses the same >> extraction syntax as cin, but its data comes from the stored string.",
            "ru": "istringstream использует извлечение через >> как cin, но берёт данные из сохранённой строки.",
            "uk": "istringstream використовує витягування через >> як cin, але бере дані зі збереженого рядка."
          },
          "steps": [
            {
              "en": "Read one line containing zero or more integers (−100 to 100) separated by spaces. Use istringstream to print their sum. An empty line gives 0.",
              "ru": "Прочитай одну строку с целыми (от −100 до 100), разделёнными пробелами; чисел может не быть. Через istringstream выведи сумму. Пустая строка даёт 0.",
              "uk": "Прочитай один рядок із цілими (від −100 до 100), розділеними пробілами; чисел може не бути. Через istringstream виведи суму. Порожній рядок дає 0."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <sstream>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "4 7 2\n",
              "output": "13\n"
            },
            {
              "input": "\n",
              "output": "0\n"
            },
            {
              "input": "-2 1\n",
              "output": "-1\n"
            }
          ],
          "hints": [
            {
              "en": "An istringstream uses the same >> extraction syntax as cin, but its data comes from the stored string.",
              "ru": "istringstream использует извлечение через >> как cin, но берёт данные из сохранённой строки.",
              "uk": "istringstream використовує витягування через >> як cin, але бере дані зі збереженого рядка."
            },
            {
              "en": "The extraction itself is the loop condition; it becomes false at the end.",
              "ru": "Само извлечение является условием цикла: в конце оно станет неверным.",
              "uk": "Саме витягування є умовою циклу: наприкінці воно стане хибним."
            }
          ],
          "features": [
            "stringstream"
          ]
        },
        {
          "id": "future-result",
          "revision": 1,
          "title": {
            "en": "Receive a future result",
            "ru": "Получи результат future",
            "uk": "Отримай результат future"
          },
          "learn": {
            "en": "async returns a future. get waits for completion and returns its computed value; do not print the future object.",
            "ru": "async возвращает future. get дожидается завершения и возвращает вычисленное значение; не выводи сам future.",
            "uk": "async повертає future. get очікує завершення та повертає обчислене значення; не виводь сам future."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Use std::async(std::launch::async, ...) for a short lambda returning n * 2. Call get() and print the result.",
              "ru": "Прочитай n (от −100 до 100). Через std::async(std::launch::async, ...) запусти короткую лямбду, возвращающую n * 2. Вызови get() и выведи результат.",
              "uk": "Прочитай n (від −100 до 100). Через std::async(std::launch::async, ...) запусти коротку лямбду, що повертає n * 2. Виклич get() та виведи результат."
            }
          ],
          "starter": "#include <iostream>\n#include <future>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\n",
              "output": "6\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "-4\n",
              "output": "-8\n"
            }
          ],
          "hints": [
            {
              "en": "async returns a future. get waits for completion and returns its computed value; do not print the future object.",
              "ru": "async возвращает future. get дожидается завершения и возвращает вычисленное значение; не выводи сам future.",
              "uk": "async повертає future. get очікує завершення та повертає обчислене значення; не виводь сам future."
            },
            {
              "en": "[n] captures a copy of n, so the calculation has its own input.",
              "ru": "[n] захватывает копию n: у расчёта есть собственное входное значение.",
              "uk": "[n] захоплює копію n: розрахунок має власне вхідне значення."
            }
          ],
          "features": [
            "async"
          ]
        }
      ]
    },
    {
      "id": "projects",
      "title": {
        "en": "Build five useful console tools",
        "ru": "Собери пять полезных консольных программ",
        "uk": "Створи п’ять корисних консольних програм"
      },
      "intro": {
        "en": "Combine containers, algorithms, and explicit input contracts.",
        "ru": "Объединяй контейнеры, алгоритмы и чёткие правила ввода.",
        "uk": "Поєднуй контейнери, алгоритми й чіткі правила введення."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "Before coding a project, write its contract: what arrives, in what order, and what must be displayed? Then split the work into read, process, and report. Use the smallest pieces you already know.",
            "ru": "Перед кодом запиши договор программы: что поступает, в каком порядке и что нужно вывести? Затем раздели работу на чтение, обработку и отчёт. Используй маленькие действия, которые уже знаешь.",
            "uk": "Перед кодом запиши договір програми: що надходить, у якому порядку та що потрібно вивести? Потім розділи роботу на читання, обробку й звіт. Використовуй маленькі дії, які вже знаєш."
          },
          {
            "en": "Test the smallest case first, then an ordinary case, then a boundary. For a collection, consider empty data and duplicates. For a report, calculate everything before printing the final lines.",
            "ru": "Сначала проверь самый маленький случай, затем обычный и граничный. Для коллекции подумай о пустых данных и повторах. Для отчёта сначала выполни расчёты, затем выведи итоговые строки.",
            "uk": "Спочатку перевір найменший випадок, потім звичайний і граничний. Для колекції подумай про порожні дані та повтори. Для звіту спочатку виконай розрахунки, потім виведи підсумкові рядки."
          },
          {
            "en": "Continue beyond this core with local builds, CMake, a debugger, sanitizers, unit tests, Git, complexity analysis, move semantics, concepts, ranges, and concurrency. Pick a real systems, application, or game project and study its constraints. This course is a foundation, not a promise of complete C++ mastery.",
            "ru": "После основы переходи к локальным сборкам, CMake, отладчику, санитайзерам, модульным тестам, Git, анализу сложности, move-семантике, concepts, ranges и многопоточности. Выбери настоящий системный, прикладной или игровой проект и изучай его ограничения. Курс даёт основу, а не обещание полного владения C++.",
            "uk": "Після основи переходь до локальних збірок, CMake, налагоджувача, санітайзерів, модульних тестів, Git, аналізу складності, move-семантики, concepts, ranges та багатопотоковості. Обери справжній системний, прикладний або ігровий проєкт і вивчай його обмеження. Курс дає основу, а не обіцянку повного володіння C++."
          }
        ],
        "example": {
          "code": "#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    std::vector<int> costs = {4, 7, 2};\n    int total=std::accumulate(costs.begin(), costs.end(), 0);\n    std::cout << total << '\\n' << 20-total << '\\n';\n    return 0;\n}\n",
          "input": "",
          "output": "13\n7\n"
        },
        "lines": [
          {
            "en": "Keep expenses as data.",
            "ru": "Храним расходы как данные.",
            "uk": "Зберігаємо витрати як дані."
          },
          {
            "en": "Calculate the total once.",
            "ru": "Один раз вычисляем сумму.",
            "uk": "Один раз обчислюємо суму."
          },
          {
            "en": "Report total and remaining budget.",
            "ru": "Показываем сумму и остаток бюджета.",
            "uk": "Показуємо суму та залишок бюджету."
          }
        ],
        "trace": [
          {
            "en": "Expenses 4 + 7 + 2 = 13. Budget 20 − 13 = 7.",
            "ru": "Расходы 4 + 7 + 2 = 13. Бюджет 20 − 13 = 7.",
            "uk": "Витрати 4 + 7 + 2 = 13. Бюджет 20 − 13 = 7."
          }
        ],
        "mistake": {
          "en": "Do not mark a project finished after one matching example. Check different inputs, empty collections where allowed, and the stated boundaries.",
          "ru": "Не считай проект готовым по одному совпавшему примеру. Проверь другие данные, разрешённые пустые коллекции и указанные границы.",
          "uk": "Не вважай проєкт готовим за одним збігом прикладу. Перевір інші дані, дозволені порожні колекції та зазначені межі."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170"
        ]
      },
      "tasks": [
        {
          "id": "project-budget",
          "revision": 1,
          "title": {
            "en": "An expense report",
            "ru": "Отчёт о расходах",
            "uk": "Звіт про витрати"
          },
          "learn": {
            "en": "A budget report combines a running sum with a final subtraction. Keep the initial budget separate from the expense count.",
            "ru": "Отчёт объединяет накопление суммы и итоговое вычитание. Не путай исходный бюджет с количеством расходов.",
            "uk": "Звіт поєднує накопичення суми та підсумкове віднімання. Не плутай початковий бюджет із кількістю витрат."
          },
          "steps": [
            {
              "en": "Read budget (0–10000), count (0–10), then count expenses (0–1000). Print total expenses, then remaining budget on the next line. A negative remainder is allowed.",
              "ru": "Прочитай бюджет (0–10000), count (0–10), затем count расходов (0–1000). Выведи сумму расходов, затем остаток бюджета с новой строки. Отрицательный остаток допустим.",
              "uk": "Прочитай бюджет (0–10000), count (0–10), потім count витрат (0–1000). Виведи суму витрат, потім залишок бюджету з нового рядка. Від’ємний залишок допустимий."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "20\n3\n4\n7\n2\n",
              "output": "13\n7\n"
            },
            {
              "input": "5\n0\n",
              "output": "0\n5\n"
            },
            {
              "input": "2\n1\n9\n",
              "output": "9\n-7\n"
            }
          ],
          "hints": [
            {
              "en": "A budget report combines a running sum with a final subtraction. Keep the initial budget separate from the expense count.",
              "ru": "Отчёт объединяет накопление суммы и итоговое вычитание. Не путай исходный бюджет с количеством расходов.",
              "uk": "Звіт поєднує накопичення суми та підсумкове віднімання. Не плутай початковий бюджет із кількістю витрат."
            },
            {
              "en": "Read budget before the ordinary count/values sequence.",
              "ru": "Прочитай бюджет перед обычной последовательностью count/значения.",
              "uk": "Прочитай бюджет перед звичайною послідовністю count/значення."
            }
          ],
          "features": []
        },
        {
          "id": "project-scores",
          "revision": 1,
          "title": {
            "en": "A score summary",
            "ru": "Сводка баллов",
            "uk": "Зведення балів"
          },
          "learn": {
            "en": "One list can support more than one result. Count matching scores and independently track the maximum.",
            "ru": "Один список позволяет получить несколько результатов. Посчитай подходящие баллы и отдельно найди максимум.",
            "uk": "Один список дає змогу отримати кілька результатів. Порахуй відповідні бали й окремо знайди максимум."
          },
          "steps": [
            {
              "en": "Read count (0–10), then scores (0–100). Print how many scores are at least 60, then the maximum. For no scores, print 0 and 0.",
              "ru": "Прочитай count (0–10), затем баллы (0–100). Выведи количество баллов не меньше 60, затем максимум. Без баллов выведи 0 и 0.",
              "uk": "Прочитай count (0–10), потім бали (0–100). Виведи кількість балів не менших за 60, потім максимум. Без балів виведи 0 та 0."
            }
          ],
          "starter": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "4\n59\n60\n85\n0\n",
              "output": "2\n85\n"
            },
            {
              "input": "0\n",
              "output": "0\n0\n"
            },
            {
              "input": "1\n100\n",
              "output": "1\n100\n"
            }
          ],
          "hints": [
            {
              "en": "One list can support more than one result. Count matching scores and independently track the maximum.",
              "ru": "Один список позволяет получить несколько результатов. Посчитай подходящие баллы и отдельно найди максимум.",
              "uk": "Один список дає змогу отримати кілька результатів. Порахуй відповідні бали й окремо знайди максимум."
            },
            {
              "en": "Here the input is nonnegative, so 0 is a valid starting maximum.",
              "ru": "Здесь ввод неотрицательный, поэтому начальный максимум 0 допустим.",
              "uk": "Тут введення невід’ємне, тому початковий максимум 0 допустимий."
            }
          ],
          "features": []
        },
        {
          "id": "project-contacts",
          "revision": 1,
          "title": {
            "en": "A small address book",
            "ru": "Маленькая адресная книга",
            "uk": "Маленька адресна книга"
          },
          "learn": {
            "en": "Assigning a value to an existing dictionary key updates that entry. Later contact details replace earlier ones.",
            "ru": "Присваивание существующему ключу словаря обновляет запись. Более поздние данные контакта заменяют ранние.",
            "uk": "Присвоєння наявному ключу словника оновлює запис. Пізніші дані контакту замінюють попередні."
          },
          "steps": [
            {
              "en": "Read count (0–10), then name and phone on two separate lines for each contact. Read a query name. Print its latest phone or `Missing`.",
              "ru": "Прочитай count (0–10), затем имя и телефон с двух отдельных строк для каждого контакта. Прочитай имя-запрос. Выведи последний телефон или `Missing`.",
              "uk": "Прочитай count (0–10), потім ім’я та телефон із двох окремих рядків для кожного контакту. Прочитай ім’я-запит. Виведи останній телефон або `Missing`."
            },
            {
              "en": "Names are nonempty words without spaces in this exercise.",
              "ru": "В этой задаче имена — непустые слова без пробелов.",
              "uk": "У цьому завданні імена — непорожні слова без пробілів."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <map>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "2\nAlex\n111\nAlex\n222\nAlex\n",
              "output": "222\n"
            },
            {
              "input": "0\nSam\n",
              "output": "Missing\n"
            },
            {
              "input": "1\nSam\n0123\nSam\n",
              "output": "0123\n"
            }
          ],
          "hints": [
            {
              "en": "Assigning a value to an existing dictionary key updates that entry. Later contact details replace earlier ones.",
              "ru": "Присваивание существующему ключу словаря обновляет запись. Более поздние данные контакта заменяют ранние.",
              "uk": "Присвоєння наявному ключу словника оновлює запис. Пізніші дані контакту замінюють попередні."
            },
            {
              "en": "A phone is text, not a number: leading zeros matter.",
              "ru": "Телефон — текст, а не число: начальные нули важны.",
              "uk": "Телефон — текст, а не число: початкові нулі важливі."
            }
          ],
          "features": []
        },
        {
          "id": "project-inventory",
          "revision": 1,
          "title": {
            "en": "Track stock changes",
            "ru": "Отследи изменения запасов",
            "uk": "Відстеж зміни запасів"
          },
          "learn": {
            "en": "Use a dictionary to accumulate quantities for each item. Negative changes represent removals; the task guarantees the stock never becomes negative.",
            "ru": "Словарь накапливает количество для каждого товара. Отрицательные изменения означают расход; по условию запас никогда не становится отрицательным.",
            "uk": "Словник накопичує кількість для кожного товару. Від’ємні зміни означають витрату; за умовою запас ніколи не стає від’ємним."
          },
          "steps": [
            {
              "en": "Read count (0–10), then an item name and integer change on separate lines for each event. Read a query item. Print its final stock, or 0 if absent.",
              "ru": "Прочитай count (0–10), затем имя товара и целое изменение с разных строк для каждого события. Прочитай товар-запрос. Выведи итоговый запас или 0 при отсутствии.",
              "uk": "Прочитай count (0–10), потім назву товару й цілу зміну з різних рядків для кожної події. Прочитай товар-запит. Виведи підсумковий запас або 0 за відсутності."
            },
            {
              "en": "Names are nonempty words without spaces in this exercise.",
              "ru": "В этой задаче имена — непустые слова без пробелов.",
              "uk": "У цьому завданні імена — непорожні слова без пробілів."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <map>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "3\npen\n5\nbook\n2\npen\n-1\npen\n",
              "output": "4\n"
            },
            {
              "input": "0\npen\n",
              "output": "0\n"
            },
            {
              "input": "2\nx\n2\nx\n-2\nx\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "Use a dictionary to accumulate quantities for each item. Negative changes represent removals; the task guarantees the stock never becomes negative.",
              "ru": "Словарь накапливает количество для каждого товара. Отрицательные изменения означают расход; по условию запас никогда не становится отрицательным.",
              "uk": "Словник накопичує кількість для кожного товару. Від’ємні зміни означають витрату; за умовою запас ніколи не стає від’ємним."
            },
            {
              "en": "Read the item name and its change together inside each repetition.",
              "ru": "Читай имя товара и его изменение вместе внутри каждого повторения.",
              "uk": "Читай назву товару та її зміну разом усередині кожного повторення."
            }
          ],
          "features": []
        },
        {
          "id": "project-tasks",
          "revision": 1,
          "title": {
            "en": "A tiny task manager",
            "ru": "Небольшой список задач",
            "uk": "Невеликий список завдань"
          },
          "learn": {
            "en": "A set can represent pending unique task names. Add places a name in the set; Remove marks it done by removing that name.",
            "ru": "Набор может хранить уникальные названия незавершённых задач. Add добавляет задачу, Remove отмечает её сделанной, удаляя название.",
            "uk": "Множина може зберігати унікальні назви незавершених завдань. Add додає завдання, Remove позначає його виконаним, видаляючи назву."
          },
          "steps": [
            {
              "en": "Read count (0–10), then command (`add` or `done`) and task name on separate lines for each event. Duplicate adds count once; completing an absent task does nothing. Print the number of pending tasks.",
              "ru": "Прочитай count (0–10), затем команду (`add` или `done`) и название задачи с разных строк для каждого события. Повторное add считается один раз; done отсутствующей задачи ничего не меняет. Выведи число незавершённых задач.",
              "uk": "Прочитай count (0–10), потім команду (`add` або `done`) й назву завдання з різних рядків для кожної події. Повторне add рахується один раз; done відсутнього завдання нічого не змінює. Виведи кількість незавершених завдань."
            },
            {
              "en": "Names are nonempty words without spaces in this exercise.",
              "ru": "В этой задаче имена — непустые слова без пробелов.",
              "uk": "У цьому завданні імена — непорожні слова без пробілів."
            }
          ],
          "starter": "#include <iostream>\n#include <string>\n#include <set>\n\nint main() {\n    // Write your code here.\n    return 0;\n}\n",
          "cases": [
            {
              "input": "4\nadd\nlearn\nadd\nlearn\nadd\ncode\ndone\nlearn\n",
              "output": "1\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "1\ndone\nmissing\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "A set can represent pending unique task names. Add places a name in the set; Remove marks it done by removing that name.",
              "ru": "Набор может хранить уникальные названия незавершённых задач. Add добавляет задачу, Remove отмечает её сделанной, удаляя название.",
              "uk": "Множина може зберігати унікальні назви незавершених завдань. Add додає завдання, Remove позначає його виконаним, видаляючи назву."
            },
            {
              "en": "The set stores current pending state, not a history of all add commands.",
              "ru": "Набор хранит текущее незавершённое состояние, а не историю всех команд add.",
              "uk": "Множина зберігає поточний незавершений стан, а не історію всіх команд add."
            }
          ],
          "features": []
        }
      ]
    }
  ]
};
