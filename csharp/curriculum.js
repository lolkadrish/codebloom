window.CB_COMPILED_COURSE = {
  "id": "csharp",
  "name": "C#",
  "prefix": "cs:",
  "storageKey": "csharp-learning-v1",
  "compiler": "mono-6.12.0.199",
  "runtime": "C# · Mono 6.12",
  "filename": "Program.cs",
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
            "en": "`using System;` makes Console available by its short name. `class Program` groups the program’s code. Execution starts in `static void Main()`. Write the instructions inside Main’s braces.",
            "ru": "`using System;` позволяет обращаться к Console по короткому имени. `class Program` объединяет код программы. Выполнение начинается с `static void Main()`. Команды пишутся внутри фигурных скобок Main.",
            "uk": "`using System;` дозволяє звертатися до Console за коротким іменем. `class Program` об’єднує код програми. Виконання починається зі `static void Main()`. Команди пишуться всередині фігурних дужок Main."
          },
          {
            "en": "`Console.WriteLine(...)` displays a value and starts a new output line. Text goes between double quotes. A calculation goes outside quotes: `2 + 3` gives 5, while `\"2 + 3\"` is just text.",
            "ru": "`Console.WriteLine(...)` показывает значение и переходит на новую строку. Текст записывается в двойных кавычках. Вычисление пишется без кавычек: `2 + 3` даст 5, а `\"2 + 3\"` останется текстом.",
            "uk": "`Console.WriteLine(...)` показує значення й переходить на новий рядок. Текст записується у подвійних лапках. Обчислення пишеться без лапок: `2 + 3` дасть 5, а `\"2 + 3\"` залишиться текстом."
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
          "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int score = 4;\n        score = score + 2;\n        Console.WriteLine(score);\n    }\n}\n",
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
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
            "en": "`Console.ReadLine()` reads one line as text. `int.Parse(...)` converts number text into an integer. `\"4\" + \"2\"` joins text, while `4 + 2` adds numbers.",
            "ru": "`Console.ReadLine()` читает одну строку как текст. `int.Parse(...)` превращает текст с числом в целое число. `\"4\" + \"2\"` склеит текст, а `4 + 2` сложит числа.",
            "uk": "`Console.ReadLine()` читає один рядок як текст. `int.Parse(...)` перетворює текст із числом на ціле число. `\"4\" + \"2\"` з’єднає текст, а `4 + 2` додасть числа."
          },
          {
            "en": "Store each input under a useful name. For a calculation, ask: which values come from the person, what operation is needed, and which result should be displayed?",
            "ru": "Сохраняй каждый ввод под понятным именем. Для расчёта спроси себя: какие значения вводит человек, какое действие нужно выполнить и какой результат показать?",
            "uk": "Зберігай кожне введення під зрозумілим іменем. Для розрахунку запитай себе: які значення вводить людина, яку дію потрібно виконати та який результат показати?"
          }
        ],
        "example": {
          "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int price = int.Parse(Console.ReadLine());\n        Console.WriteLine(price + 4);\n    }\n}\n",
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
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int age = int.Parse(Console.ReadLine());\n        if (age >= 16) {\n            Console.WriteLine(\"Allowed\");\n        } else {\n            Console.WriteLine(\"Wait\");\n        }\n    }\n}\n",
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
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int i = 1;\n        while (i <= 3) {\n            Console.WriteLine(i);\n            i = i + 1;\n        }\n    }\n}\n",
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
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
            "en": "A method stores instructions under a name. Defining Add does not perform addition yet. Calling `Add(2, 5)` runs it with these two values. The parameter names a and b belong to that call.",
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
          "code": "using System;\n\nclass Program\n{\n    static int Add(int a, int b) { return a + b; }\n    static void Main()\n    {\n        int result = Add(2, 5);\n        Console.WriteLine(result);\n    }\n}\n",
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
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
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
          "starter": "using System;\n\nclass Program\n{\n    static int Double(int value) {\n        // Return twice value.\n        return 0;\n    }\n    static void Main()\n    {\n        int n = int.Parse(Console.ReadLine());\n        Console.WriteLine(Double(n));\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
            "en": "`text.Trim()` removes whitespace at both ends, and `text.Length` counts characters. To keep output predictable, our character exercises use ASCII text.",
            "ru": "`text.Trim()` убирает пробельные символы по краям, а `text.Length` считает символы. В заданиях на символы используется ASCII-текст: подсчёт не зависит от особенностей Unicode.",
            "uk": "`text.Trim()` прибирає пробільні символи з країв, а `text.Length` рахує символи. У завданнях на символи використовується ASCII-текст: підрахунок не залежить від особливостей Unicode."
          },
          {
            "en": "An array has a fixed number of slots: `int[] values = { 4, 7, 2 };`. `values[0]` is 4, not 7. A foreach loop visits each value without making you manage an index.",
            "ru": "У массива фиксированное число ячеек: `int[] values = { 4, 7, 2 };`. `values[0]` равно 4, а не 7. Цикл foreach перебирает значения и не требует вести индекс вручную.",
            "uk": "У масиву фіксована кількість комірок: `int[] values = { 4, 7, 2 };`. `values[0]` дорівнює 4, а не 7. Цикл foreach перебирає значення й не потребує вести індекс вручну."
          },
          {
            "en": "When finding a maximum, use the first real value as the starting maximum. Starting from 0 would be wrong when every value is negative. Empty inputs need a separate rule stated in the exercise.",
            "ru": "При поиске максимума начни с первого настоящего значения. Начальный максимум 0 даст ошибку, если все числа отрицательные. Для пустой последовательности нужно отдельное правило из условия.",
            "uk": "Під час пошуку максимуму почни з першого справжнього значення. Початковий максимум 0 дасть помилку, якщо всі числа від’ємні. Для порожньої послідовності потрібне окреме правило з умови."
          }
        ],
        "example": {
          "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int[] values = { 4, 7, 2 };\n        int total = 0;\n        foreach (int value in values) { total += value; }\n        Console.WriteLine(total);\n    }\n}\n",
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
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
        ]
      },
      "tasks": [
        {
          "id": "trim-text",
          "revision": 1,
          "title": {
            "en": "Keep only the useful edges",
            "ru": "Убери лишнее по краям",
            "uk": "Прибери зайве з країв"
          },
          "learn": {
            "en": "Trim returns cleaned text. Save that returned value before printing it. Spaces between words stay.",
            "ru": "Trim возвращает очищенный текст. Сохрани возвращённое значение перед выводом. Пробелы между словами остаются.",
            "uk": "Trim повертає очищений текст. Збережи повернене значення перед виведенням. Пробіли між словами залишаються."
          },
          "steps": [
            {
              "en": "Read a line. Print it without whitespace at the beginning or end. Preserve letter case and internal spaces.",
              "ru": "Прочитай строку. Выведи её без пробельных символов в начале и конце. Регистр и пробелы между словами сохрани.",
              "uk": "Прочитай рядок. Виведи його без пробільних символів на початку й наприкінці. Регістр і пробіли між словами збережи."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "  Hello  \n",
              "output": "Hello\n"
            },
            {
              "input": " A  B \n",
              "output": "A  B\n"
            },
            {
              "input": "   \n",
              "output": "\n"
            }
          ],
          "hints": [
            {
              "en": "Trim returns cleaned text. Save that returned value before printing it. Spaces between words stay.",
              "ru": "Trim возвращает очищенный текст. Сохрани возвращённое значение перед выводом. Пробелы между словами остаются.",
              "uk": "Trim повертає очищений текст. Збережи повернене значення перед виведенням. Пробіли між словами залишаються."
            },
            {
              "en": "Print the variable that stores the result of Trim.",
              "ru": "Выводи переменную с результатом Trim.",
              "uk": "Виводь змінну з результатом Trim."
            }
          ],
          "features": []
        },
        {
          "id": "upper-text",
          "revision": 1,
          "title": {
            "en": "Change letter case",
            "ru": "Измени регистр букв",
            "uk": "Зміни регістр літер"
          },
          "learn": {
            "en": "ToUpperInvariant returns an uppercase copy without depending on the computer’s current culture.",
            "ru": "ToUpperInvariant возвращает копию в верхнем регистре, не завися от региональных настроек компьютера.",
            "uk": "ToUpperInvariant повертає копію у верхньому регістрі, що не залежить від регіональних налаштувань комп’ютера."
          },
          "steps": [
            {
              "en": "Read ASCII text. Print its uppercase version. Keep spaces and digits.",
              "ru": "Прочитай ASCII-текст. Выведи его версию в верхнем регистре. Пробелы и цифры сохрани.",
              "uk": "Прочитай ASCII-текст. Виведи його версію у верхньому регістрі. Пробіли та цифри збережи."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "Hi 2\n",
              "output": "HI 2\n"
            },
            {
              "input": "code\n",
              "output": "CODE\n"
            },
            {
              "input": "\n",
              "output": "\n"
            }
          ],
          "hints": [
            {
              "en": "ToUpperInvariant returns an uppercase copy without depending on the computer’s current culture.",
              "ru": "ToUpperInvariant возвращает копию в верхнем регистре, не завися от региональных настроек компьютера.",
              "uk": "ToUpperInvariant повертає копію у верхньому регістрі, що не залежить від регіональних налаштувань комп’ютера."
            },
            {
              "en": "Call the method on the entered string, including its parentheses.",
              "ru": "Вызови метод у введённой строки, не забывая круглые скобки.",
              "uk": "Виклич метод у введеного рядка, не забуваючи круглі дужки."
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
        "en": "Choose the right collection",
        "ru": "Выбери подходящую коллекцию",
        "uk": "Обери відповідну колекцію"
      },
      "intro": {
        "en": "Grow a list, look up a key, and keep unique values.",
        "ru": "Расширяй список, ищи по ключу и храни уникальные значения.",
        "uk": "Розширюй список, шукай за ключем і зберігай унікальні значення."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "An array has a fixed length. `List<int>` can grow: create it with `new List<int>()`, add an integer with `Add`, and read the number of elements with `Count`. A foreach loop still works.",
            "ru": "Длина массива фиксирована. `List<int>` умеет расти: создай его через `new List<int>()`, добавляй целые методом `Add`, а количество элементов читай через `Count`. Цикл foreach работает и здесь.",
            "uk": "Довжина масиву фіксована. `List<int>` уміє зростати: створи його через `new List<int>()`, додавай цілі методом `Add`, а кількість елементів читай через `Count`. Цикл foreach працює й тут."
          },
          {
            "en": "`Dictionary<string, int>` maps a text key to an integer value. Access it with `prices[key]`. Check `ContainsKey(key)` first if a key may be missing: an absent key is not automatically worth 0.",
            "ru": "`Dictionary<string, int>` связывает текстовый ключ с целым значением. Обращение записывается как `prices[key]`. Если ключа может не быть, сначала проверь `ContainsKey(key)`: отсутствие ключа само по себе не означает 0.",
            "uk": "`Dictionary<string, int>` пов’язує текстовий ключ із цілим значенням. Звернення записується як `prices[key]`. Якщо ключа може не бути, спочатку перевір `ContainsKey(key)`: відсутність ключа сама собою не означає 0."
          },
          {
            "en": "`HashSet<string>` keeps each distinct string once. Adding the same word again does not increase Count. Use a set for uniqueness, and a dictionary when you need a separate count for each word. Comparisons here are case-sensitive.",
            "ru": "`HashSet<string>` хранит каждую отличающуюся строку один раз. Повторное Add того же слова не увеличивает Count. Для уникальности нужен набор, для отдельных частот — словарь. Здесь регистр букв учитывается.",
            "uk": "`HashSet<string>` зберігає кожен відмінний рядок один раз. Повторне Add того самого слова не збільшує Count. Для унікальності потрібна множина, для окремих частот — словник. Тут регістр літер враховується."
          }
        ],
        "example": {
          "code": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        var words = new HashSet<string>();\n        words.Add(\"red\");\n        words.Add(\"red\");\n        words.Add(\"blue\");\n        Console.WriteLine(words.Count);\n    }\n}\n",
          "input": "",
          "output": "2\n"
        },
        "lines": [
          {
            "en": "Create an empty set.",
            "ru": "Создаём пустой набор.",
            "uk": "Створюємо порожню множину."
          },
          {
            "en": "Add red twice and blue once.",
            "ru": "Добавляем red дважды и blue один раз.",
            "uk": "Додаємо red двічі та blue один раз."
          },
          {
            "en": "Count distinct words, not Add calls.",
            "ru": "Считаем разные слова, а не вызовы Add.",
            "uk": "Рахуємо різні слова, а не виклики Add."
          }
        ],
        "trace": [
          {
            "en": "After red: 1; after red again: 1; after blue: 2.",
            "ru": "После red: 1; после повторного red: 1; после blue: 2.",
            "uk": "Після red: 1; після повторного red: 1; після blue: 2."
          }
        ],
        "mistake": {
          "en": "A dictionary key and its value have different jobs. Asking for counts[word] before creating that key can throw an exception.",
          "ru": "Ключ словаря и его значение выполняют разные задачи. Обращение counts[word] до создания этого ключа может вызвать исключение.",
          "uk": "Ключ словника та його значення виконують різні завдання. Звернення counts[word] до створення цього ключа може викликати виняток."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
        ]
      },
      "tasks": [
        {
          "id": "list-count",
          "revision": 1,
          "title": {
            "en": "Grow a list",
            "ru": "Выращивай список",
            "uk": "Збільшуй список"
          },
          "learn": {
            "en": "List<int> stores integers. Each Add appends one element; Count reads how many are stored.",
            "ru": "List<int> хранит целые. Каждый Add добавляет один элемент, Count показывает их количество.",
            "uk": "List<int> зберігає цілі. Кожен Add додає один елемент, Count показує їхню кількість."
          },
          "steps": [
            {
              "en": "Read count (0–10), then count integers. Add them to a List<int> and print its Count.",
              "ru": "Прочитай count (0–10), затем count целых. Добавь их в List<int> и выведи его Count.",
              "uk": "Прочитай count (0–10), потім count цілих. Додай їх у List<int> та виведи його Count."
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
              "en": "List<int> stores integers. Each Add appends one element; Count reads how many are stored.",
              "ru": "List<int> хранит целые. Каждый Add добавляет один элемент, Count показывает их количество.",
              "uk": "List<int> зберігає цілі. Кожен Add додає один елемент, Count показує їхню кількість."
            },
            {
              "en": "A list keeps duplicates too.",
              "ru": "Список сохраняет и повторяющиеся значения.",
              "uk": "Список зберігає й повторювані значення."
            }
          ],
          "features": [
            "list"
          ]
        },
        {
          "id": "list-positive",
          "revision": 1,
          "title": {
            "en": "Build a selected list",
            "ru": "Собери отобранный список",
            "uk": "Склади відібраний список"
          },
          "learn": {
            "en": "Use one list for input and a second for values that satisfy an if. Add only the matching values to the second list.",
            "ru": "Один список хранит ввод, второй — значения, прошедшие if. Добавляй во второй только подходящие значения.",
            "uk": "Один список зберігає введення, другий — значення, що пройшли if. Додавай у другий лише відповідні значення."
          },
          "steps": [
            {
              "en": "Read count (0–10), then integers (−20 to 20). Put only positive values into a new list and print its count.",
              "ru": "Прочитай count (0–10), затем целые (от −20 до 20). Сохрани только положительные в новый список и выведи их количество.",
              "uk": "Прочитай count (0–10), потім цілі (від −20 до 20). Збережи лише додатні в новий список і виведи їхню кількість."
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "4\n-1\n3\n0\n7\n",
              "output": "2\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "2\n-2\n-1\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "Use one list for input and a second for values that satisfy an if. Add only the matching values to the second list.",
              "ru": "Один список хранит ввод, второй — значения, прошедшие if. Добавляй во второй только подходящие значения.",
              "uk": "Один список зберігає введення, другий — значення, що пройшли if. Додавай у другий лише відповідні значення."
            },
            {
              "en": "A value of 0 is not positive.",
              "ru": "Ноль не является положительным.",
              "uk": "Нуль не є додатним."
            }
          ],
          "features": []
        },
        {
          "id": "dictionary-price",
          "revision": 1,
          "title": {
            "en": "Look up a price",
            "ru": "Найди цену по ключу",
            "uk": "Знайди ціну за ключем"
          },
          "learn": {
            "en": "A dictionary initializer uses key/value pairs. ContainsKey protects a lookup when the input may name an unknown product.",
            "ru": "Начальное заполнение словаря состоит из пар ключ/значение. ContainsKey защищает обращение при вводе неизвестного товара.",
            "uk": "Початкове заповнення словника складається з пар ключ/значення. ContainsKey захищає звернення при введенні невідомого товару."
          },
          "steps": [
            {
              "en": "Store apple → 3 and book → 8 in a dictionary. Read a key. Print its price, or 0 for an unknown key.",
              "ru": "Сохрани в словарь apple → 3 и book → 8. Прочитай ключ. Выведи цену или 0, если такого ключа нет.",
              "uk": "Збережи в словник apple → 3 та book → 8. Прочитай ключ. Виведи ціну або 0, якщо такого ключа немає."
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
              "en": "A dictionary initializer uses key/value pairs. ContainsKey protects a lookup when the input may name an unknown product.",
              "ru": "Начальное заполнение словаря состоит из пар ключ/значение. ContainsKey защищает обращение при вводе неизвестного товара.",
              "uk": "Початкове заповнення словника складається з пар ключ/значення. ContainsKey захищає звернення при введенні невідомого товару."
            },
            {
              "en": "The conditional expression is condition ? valueIfTrue : valueIfFalse. An ordinary if works too.",
              "ru": "Короткий выбор записывается так: условие ? значениеЕслиДа : значениеЕслиНет. Можно использовать обычный if.",
              "uk": "Короткий вибір записується так: умова ? значенняЯкщоТак : значенняЯкщоНі. Можна використати звичайний if."
            }
          ],
          "features": [
            "dictionary"
          ]
        },
        {
          "id": "word-count",
          "revision": 1,
          "title": {
            "en": "Count one word",
            "ru": "Посчитай одно слово",
            "uk": "Порахуй одне слово"
          },
          "learn": {
            "en": "Create a new key with 0 before its first increment. Later occurrences update the existing value.",
            "ru": "Перед первым увеличением создай новый ключ со значением 0. Следующие повторы меняют уже существующее значение.",
            "uk": "Перед першим збільшенням створи новий ключ зі значенням 0. Наступні повтори змінюють уже наявне значення."
          },
          "steps": [
            {
              "en": "Read count (0–10), then count words, then a query word. Print how many times the query occurred. Case matters.",
              "ru": "Прочитай count (0–10), затем count слов и слово-запрос. Выведи число появлений слова-запроса. Регистр учитывается.",
              "uk": "Прочитай count (0–10), потім count слів та слово-запит. Виведи кількість появ слова-запиту. Регістр враховується."
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
              "en": "Create a new key with 0 before its first increment. Later occurrences update the existing value.",
              "ru": "Перед первым увеличением создай новый ключ со значением 0. Следующие повторы меняют уже существующее значение.",
              "uk": "Перед першим збільшенням створи новий ключ зі значенням 0. Наступні повтори змінюють уже наявне значення."
            },
            {
              "en": "Read the query after all words, outside the loop.",
              "ru": "Читай запрос после всех слов, вне цикла.",
              "uk": "Читай запит після всіх слів, поза циклом."
            }
          ],
          "features": []
        },
        {
          "id": "unique-words",
          "revision": 1,
          "title": {
            "en": "Keep unique words",
            "ru": "Оставь уникальные слова",
            "uk": "Залиш унікальні слова"
          },
          "learn": {
            "en": "HashSet.Add ignores a duplicate that is already stored. Count tells you how many distinct strings remain.",
            "ru": "HashSet.Add не добавляет вторую копию уже сохранённого слова. Count показывает число разных строк.",
            "uk": "HashSet.Add не додає другу копію вже збереженого слова. Count показує кількість різних рядків."
          },
          "steps": [
            {
              "en": "Read count (0–10), then words. Print the number of distinct words. Case matters.",
              "ru": "Прочитай count (0–10), затем слова. Выведи количество разных слов. Регистр учитывается.",
              "uk": "Прочитай count (0–10), потім слова. Виведи кількість різних слів. Регістр враховується."
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
              "en": "HashSet.Add ignores a duplicate that is already stored. Count tells you how many distinct strings remain.",
              "ru": "HashSet.Add не добавляет вторую копию уже сохранённого слова. Count показывает число разных строк.",
              "uk": "HashSet.Add не додає другу копію вже збереженого слова. Count показує кількість різних рядків."
            },
            {
              "en": "The set, rather than a nested loop, handles uniqueness.",
              "ru": "За уникальность отвечает набор, а не вложенный цикл.",
              "uk": "За унікальність відповідає множина, а не вкладений цикл."
            }
          ],
          "features": [
            "set"
          ]
        }
      ]
    },
    {
      "id": "objects",
      "title": {
        "en": "Model something with a class",
        "ru": "Опиши объект классом",
        "uk": "Опиши об’єкт класом"
      },
      "intro": {
        "en": "Connect a value with the operations that belong to it.",
        "ru": "Свяжи данные с действиями, которые к ним относятся.",
        "uk": "Пов’яжи дані з діями, що до них належать."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "A class describes a kind of object. A variable of that class can refer to one created object. `new Counter(4)` creates a Counter and calls its constructor with 4. Different objects can store different values.",
            "ru": "Класс описывает вид объектов. Переменная этого класса может ссылаться на созданный объект. `new Counter(4)` создаёт Counter и вызывает его конструктор с 4. Разные объекты могут хранить разные значения.",
            "uk": "Клас описує вид об’єктів. Змінна цього класу може посилатися на створений об’єкт. `new Counter(4)` створює Counter і викликає його конструктор із 4. Різні об’єкти можуть зберігати різні значення."
          },
          {
            "en": "A field stores data inside the object. A method performs an action on that object. A property such as `public int Value { get; private set; }` allows outside code to read Value while only the class can assign it.",
            "ru": "Поле хранит данные внутри объекта. Метод выполняет действие над этим объектом. Свойство `public int Value { get; private set; }` разрешает внешнему коду читать Value, а менять его может только сам класс.",
            "uk": "Поле зберігає дані всередині об’єкта. Метод виконує дію над цим об’єктом. Властивість `public int Value { get; private set; }` дозволяє зовнішньому коду читати Value, а змінювати його може лише сам клас."
          },
          {
            "en": "An interface states which operations a type provides. Inheritance can share behavior; a virtual method permits an override in a derived class. Introduce these only after ordinary fields, constructors, and methods are comfortable.",
            "ru": "Интерфейс задаёт, какие операции предоставляет тип. Наследование позволяет разделять поведение; virtual разрешает переопределить метод в дочернем классе. Сначала разберись с полями, конструкторами и обычными методами.",
            "uk": "Інтерфейс задає, які операції надає тип. Успадкування дає змогу ділитися поведінкою; virtual дозволяє перевизначити метод у дочірньому класі. Спочатку розберися з полями, конструкторами та звичайними методами."
          }
        ],
        "example": {
          "code": "using System;\n\nclass Program\n{\n    class Counter { public int Value { get; private set; } public Counter(int start) { Value = start; } public void Add(int amount) { Value += amount; } }\n    static void Main()\n    {\n        var counter = new Counter(4);\n        counter.Add(2);\n        Console.WriteLine(counter.Value);\n    }\n}\n",
          "input": "",
          "output": "6\n"
        },
        "lines": [
          {
            "en": "Create an object with an initial value of 4.",
            "ru": "Создаём объект с начальным значением 4.",
            "uk": "Створюємо об’єкт із початковим значенням 4."
          },
          {
            "en": "Call the object’s Add method with 2.",
            "ru": "Вызываем метод Add этого объекта с 2.",
            "uk": "Викликаємо метод Add цього об’єкта з 2."
          },
          {
            "en": "Read its updated Value property.",
            "ru": "Читаем обновлённое свойство Value.",
            "uk": "Читаємо оновлену властивість Value."
          }
        ],
        "trace": [
          {
            "en": "The constructor saves 4; Add replaces it with 6.",
            "ru": "Конструктор сохраняет 4; Add меняет значение на 6.",
            "uk": "Конструктор зберігає 4; Add змінює значення на 6."
          }
        ],
        "mistake": {
          "en": "Declaring a class does not create an object. Creating two objects gives them separate state.",
          "ru": "Объявление класса ещё не создаёт объект. При создании двух объектов у каждого будет своё состояние.",
          "uk": "Оголошення класу ще не створює об’єкт. Після створення двох об’єктів кожен матиме власний стан."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
        ]
      },
      "tasks": [
        {
          "id": "object-field",
          "revision": 1,
          "title": {
            "en": "Read a field from an object",
            "ru": "Прочитай поле объекта",
            "uk": "Прочитай поле об’єкта"
          },
          "learn": {
            "en": "A field belongs to an object. Use object.Field to assign it and read it.",
            "ru": "Поле принадлежит объекту. Запись объект.Поле позволяет присвоить и прочитать значение.",
            "uk": "Поле належить об’єкту. Запис об’єкт.Поле дає змогу присвоїти та прочитати значення."
          },
          "steps": [
            {
              "en": "Read a name. Declare Person with a public string field Name. Create a Person, save the name, and print its Name.",
              "ru": "Прочитай имя. Объяви Person с открытым строковым полем Name. Создай Person, сохрани имя и выведи его Name.",
              "uk": "Прочитай ім’я. Оголоси Person із відкритим рядковим полем Name. Створи Person, збережи ім’я та виведи його Name."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "Alex\n",
              "output": "Alex\n"
            },
            {
              "input": "Mary Jane\n",
              "output": "Mary Jane\n"
            }
          ],
          "hints": [
            {
              "en": "A field belongs to an object. Use object.Field to assign it and read it.",
              "ru": "Поле принадлежит объекту. Запись объект.Поле позволяет присвоить и прочитать значение.",
              "uk": "Поле належить об’єкту. Запис об’єкт.Поле дає змогу присвоїти та прочитати значення."
            },
            {
              "en": "Put the Person declaration inside Program but outside Main, or before Program as a separate class.",
              "ru": "Объяви Person внутри Program, но вне Main, или отдельным классом перед Program.",
              "uk": "Оголоси Person усередині Program, але поза Main, або окремим класом перед Program."
            }
          ],
          "features": [
            "class"
          ]
        },
        {
          "id": "constructor-area",
          "revision": 1,
          "title": {
            "en": "Start with a constructor",
            "ru": "Начни с конструктора",
            "uk": "Почни з конструктора"
          },
          "learn": {
            "en": "A constructor has the class name and no return type. Save its incoming parameters into fields so other methods can use them.",
            "ru": "У конструктора имя класса и нет типа результата. Сохрани параметры в поля, чтобы другие методы могли ими пользоваться.",
            "uk": "Конструктор має ім’я класу й не має типу результату. Збережи параметри в поля, щоб інші методи могли ними користуватися."
          },
          "steps": [
            {
              "en": "Read width and height (0–100). Define Rectangle with a constructor and an Area() method. Print the area of a created rectangle.",
              "ru": "Прочитай width и height (0–100). Объяви Rectangle с конструктором и методом Area(). Выведи площадь созданного прямоугольника.",
              "uk": "Прочитай width та height (0–100). Оголоси Rectangle з конструктором і методом Area(). Виведи площу створеного прямокутника."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "3\n4\n",
              "output": "12\n"
            },
            {
              "input": "0\n7\n",
              "output": "0\n"
            },
            {
              "input": "2\n5\n",
              "output": "10\n"
            }
          ],
          "hints": [
            {
              "en": "A constructor has the class name and no return type. Save its incoming parameters into fields so other methods can use them.",
              "ru": "У конструктора имя класса и нет типа результата. Сохрани параметры в поля, чтобы другие методы могли ими пользоваться.",
              "uk": "Конструктор має ім’я класу й не має типу результату. Збережи параметри в поля, щоб інші методи могли ними користуватися."
            },
            {
              "en": "Area multiplies the two stored dimensions.",
              "ru": "Area перемножает две сохранённые стороны.",
              "uk": "Area перемножує дві збережені сторони."
            }
          ],
          "features": [
            "class"
          ]
        },
        {
          "id": "object-update",
          "revision": 1,
          "title": {
            "en": "Let an object change itself",
            "ru": "Пусть объект изменит себя",
            "uk": "Нехай об’єкт змінить себе"
          },
          "learn": {
            "en": "An instance method uses the object’s current data. Add modifies its balance; the property exposes the resulting balance.",
            "ru": "Метод экземпляра использует текущие данные объекта. Add меняет баланс, а свойство показывает получившийся баланс.",
            "uk": "Метод екземпляра використовує поточні дані об’єкта. Add змінює баланс, а властивість показує отриманий баланс."
          },
          "steps": [
            {
              "en": "Read initial balance and deposit (0–1000). Create Account, call Deposit(amount), and print Balance. Keep its setter private.",
              "ru": "Прочитай начальный баланс и пополнение (0–1000). Создай Account, вызови Deposit(amount) и выведи Balance. Setter оставь закрытым.",
              "uk": "Прочитай початковий баланс і поповнення (0–1000). Створи Account, виклич Deposit(amount) та виведи Balance. Setter залиш закритим."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "10\n5\n",
              "output": "15\n"
            },
            {
              "input": "0\n0\n",
              "output": "0\n"
            },
            {
              "input": "4\n20\n",
              "output": "24\n"
            }
          ],
          "hints": [
            {
              "en": "An instance method uses the object’s current data. Add modifies its balance; the property exposes the resulting balance.",
              "ru": "Метод экземпляра использует текущие данные объекта. Add меняет баланс, а свойство показывает получившийся баланс.",
              "uk": "Метод екземпляра використовує поточні дані об’єкта. Add змінює баланс, а властивість показує отриманий баланс."
            },
            {
              "en": "The constructor sets the initial value; Deposit adds to the existing value.",
              "ru": "Конструктор задаёт начало; Deposit прибавляет к существующему значению.",
              "uk": "Конструктор задає початок; Deposit додає до наявного значення."
            }
          ],
          "features": [
            "class"
          ]
        },
        {
          "id": "override-method",
          "revision": 1,
          "title": {
            "en": "Specialize one behavior",
            "ru": "Уточни одно поведение",
            "uk": "Уточни одну поведінку"
          },
          "learn": {
            "en": "virtual in a base class allows override in a derived class. Calling through the base type still selects the object’s override.",
            "ru": "virtual в базовом классе разрешает override в дочернем. Вызов через базовый тип всё равно выберет переопределение реального объекта.",
            "uk": "virtual у базовому класі дозволяє override в дочірньому. Виклик через базовий тип усе одно обере перевизначення справжнього об’єкта."
          },
          "steps": [
            {
              "en": "Read `cat` or `dog`. Define Animal.Speak(), override it in Cat and Dog, and print `Meow` or `Woof` by calling Speak on an Animal reference.",
              "ru": "Прочитай `cat` или `dog`. Объяви Animal.Speak(), переопредели его в Cat и Dog. Через ссылку Animal вызови Speak и выведи `Meow` или `Woof`.",
              "uk": "Прочитай `cat` або `dog`. Оголоси Animal.Speak(), перевизнач його в Cat та Dog. Через посилання Animal виклич Speak і виведи `Meow` або `Woof`."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
              "en": "virtual in a base class allows override in a derived class. Calling through the base type still selects the object’s override.",
              "ru": "virtual в базовом классе разрешает override в дочернем. Вызов через базовый тип всё равно выберет переопределение реального объекта.",
              "uk": "virtual у базовому класі дозволяє override в дочірньому. Виклик через базовий тип усе одно обере перевизначення справжнього об’єкта."
            },
            {
              "en": "The override keeps the same name, parameters, and result type as the base method.",
              "ru": "Переопределение сохраняет имя, параметры и тип результата базового метода.",
              "uk": "Перевизначення зберігає ім’я, параметри й тип результату базового методу."
            }
          ],
          "features": [
            "override"
          ]
        },
        {
          "id": "interface-cost",
          "revision": 1,
          "title": {
            "en": "Call through a contract",
            "ru": "Вызови через общий договор",
            "uk": "Виклич через спільний договір"
          },
          "learn": {
            "en": "An interface lists required operations. A class implements them, and a variable of the interface type can use those operations.",
            "ru": "Интерфейс перечисляет обязательные операции. Класс реализует их, а переменная типа интерфейса может вызывать эти операции.",
            "uk": "Інтерфейс перелічує обов’язкові операції. Клас реалізує їх, а змінна типу інтерфейсу може викликати ці операції."
          },
          "steps": [
            {
              "en": "Read price (0–100). Define ICost with int Cost(). Implement Ticket whose Cost returns the stored price. Call it through ICost and print the result.",
              "ru": "Прочитай price (0–100). Объяви ICost с int Cost(). Реализуй Ticket: Cost возвращает сохранённую цену. Вызови его через ICost и выведи результат.",
              "uk": "Прочитай price (0–100). Оголоси ICost з int Cost(). Реалізуй Ticket: Cost повертає збережену ціну. Виклич його через ICost і виведи результат."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "8\n",
              "output": "8\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "99\n",
              "output": "99\n"
            }
          ],
          "hints": [
            {
              "en": "An interface lists required operations. A class implements them, and a variable of the interface type can use those operations.",
              "ru": "Интерфейс перечисляет обязательные операции. Класс реализует их, а переменная типа интерфейса может вызывать эти операции.",
              "uk": "Інтерфейс перелічує обов’язкові операції. Клас реалізує їх, а змінна типу інтерфейсу може викликати ці операції."
            },
            {
              "en": "Ticket must provide a public Cost method with the declared signature.",
              "ru": "Ticket должен предоставить открытый метод Cost с указанной сигнатурой.",
              "uk": "Ticket має надати відкритий метод Cost із зазначеною сигнатурою."
            }
          ],
          "features": [
            "interface"
          ]
        }
      ]
    },
    {
      "id": "queries-generics",
      "title": {
        "en": "Describe a transformation",
        "ru": "Опиши преобразование данных",
        "uk": "Опиши перетворення даних"
      },
      "intro": {
        "en": "Use lambdas, LINQ operations, and one generic method.",
        "ru": "Используй лямбды, операции LINQ и обобщённый метод.",
        "uk": "Використовуй лямбди, операції LINQ та узагальнений метод."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "`x => x * 2` is a small function: receive x, return x * 2. A `Func<int, int>` variable can store such a function. The first type is the input and the last is the result.",
            "ru": "`x => x * 2` — маленькая функция: получить x, вернуть x * 2. Переменная `Func<int, int>` может хранить такую функцию. Первый тип описывает вход, последний — результат.",
            "uk": "`x => x * 2` — маленька функція: отримати x, повернути x * 2. Змінна `Func<int, int>` може зберігати таку функцію. Перший тип описує вхід, останній — результат."
          },
          {
            "en": "LINQ operations describe work on sequences. `Where` keeps matching elements, `Select` transforms each element, and `OrderBy` orders them. `Count()` and `Sum()` produce final results. Add `using System.Linq;` for these extension methods.",
            "ru": "Операции LINQ описывают обработку последовательностей. `Where` оставляет подходящие элементы, `Select` преобразует каждый, `OrderBy` упорядочивает. `Count()` и `Sum()` дают итог. Для этих методов нужно `using System.Linq;`.",
            "uk": "Операції LINQ описують обробку послідовностей. `Where` залишає відповідні елементи, `Select` перетворює кожен, `OrderBy` впорядковує. `Count()` та `Sum()` дають підсумок. Для цих методів потрібне `using System.Linq;`."
          },
          {
            "en": "A generic method uses a type parameter T instead of committing to one type. `First<T>(T[] values)` can return an int from an int array or a string from a string array. Generics preserve types; they do not turn every value into interchangeable text.",
            "ru": "Обобщённый метод использует параметр типа T вместо одного конкретного типа. `First<T>(T[] values)` может вернуть int из массива int или string из массива string. Обобщения сохраняют типы, а не превращают любые значения в текст.",
            "uk": "Узагальнений метод використовує параметр типу T замість одного конкретного типу. `First<T>(T[] values)` може повернути int із масиву int або string із масиву string. Узагальнення зберігають типи, а не перетворюють будь-які значення на текст."
          }
        ],
        "example": {
          "code": "using System;\nusing System.Linq;\n\nclass Program\n{\n    static void Main()\n    {\n        int[] values = { -2, 3, 5 };\n        int total = values.Where(x => x > 0).Sum();\n        Console.WriteLine(total);\n    }\n}\n",
          "input": "",
          "output": "8\n"
        },
        "lines": [
          {
            "en": "Start with three values.",
            "ru": "Начинаем с трёх значений.",
            "uk": "Починаємо з трьох значень."
          },
          {
            "en": "Where keeps 3 and 5.",
            "ru": "Where оставляет 3 и 5.",
            "uk": "Where залишає 3 та 5."
          },
          {
            "en": "Sum produces 8.",
            "ru": "Sum даёт 8.",
            "uk": "Sum дає 8."
          }
        ],
        "trace": [
          {
            "en": "Original: −2, 3, 5 → selected: 3, 5 → sum: 8.",
            "ru": "Исходные: −2, 3, 5 → отобранные: 3, 5 → сумма: 8.",
            "uk": "Початкові: −2, 3, 5 → відібрані: 3, 5 → сума: 8."
          }
        ],
        "mistake": {
          "en": "First() needs a nonempty sequence. Count() has parentheses; a List’s Count property does not.",
          "ru": "First() требует непустую последовательность. У Count() из LINQ есть круглые скобки, у свойства Count списка их нет.",
          "uk": "First() потребує непорожньої послідовності. Count() з LINQ має круглі дужки, властивість Count списку їх не має."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
        ]
      },
      "tasks": [
        {
          "id": "lambda-double",
          "revision": 1,
          "title": {
            "en": "Store a small function",
            "ru": "Сохрани маленькую функцию",
            "uk": "Збережи маленьку функцію"
          },
          "learn": {
            "en": "A Func<int, int> receives an integer and returns an integer. Call its variable like a method.",
            "ru": "Func<int, int> получает целое и возвращает целое. Переменная с такой функцией вызывается как метод.",
            "uk": "Func<int, int> отримує ціле й повертає ціле. Змінна з такою функцією викликається як метод."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Store a doubling lambda in Func<int, int> twice. Call twice(n) and print the result.",
              "ru": "Прочитай n (от −100 до 100). Сохрани удваивающую лямбду в Func<int, int> twice. Вызови twice(n) и выведи результат.",
              "uk": "Прочитай n (від −100 до 100). Збережи лямбду подвоєння у Func<int, int> twice. Виклич twice(n) і виведи результат."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "4\n",
              "output": "8\n"
            },
            {
              "input": "-2\n",
              "output": "-4\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "A Func<int, int> receives an integer and returns an integer. Call its variable like a method.",
              "ru": "Func<int, int> получает целое и возвращает целое. Переменная с такой функцией вызывается как метод.",
              "uk": "Func<int, int> отримує ціле й повертає ціле. Змінна з такою функцією викликається як метод."
            },
            {
              "en": "The lambda parameter is a placeholder for the value supplied at each call.",
              "ru": "Параметр лямбды получает значение при каждом вызове.",
              "uk": "Параметр лямбди отримує значення під час кожного виклику."
            }
          ],
          "features": [
            "lambda"
          ]
        },
        {
          "id": "linq-filter",
          "revision": 1,
          "title": {
            "en": "Filter with a question",
            "ru": "Отфильтруй вопросом",
            "uk": "Відфільтруй запитанням"
          },
          "learn": {
            "en": "Where takes a bool-producing function. The resulting sequence keeps only values for which that answer is true.",
            "ru": "Where получает функцию с результатом bool. В результате остаются значения, для которых ответ верный.",
            "uk": "Where отримує функцію з результатом bool. У результаті залишаються значення, для яких відповідь істинна."
          },
          "steps": [
            {
              "en": "Read count (0–10), then integers (−20 to 20). Use Where to select positive values, then print Count().",
              "ru": "Прочитай count (0–10), затем целые (от −20 до 20). Через Where отберите положительные и выведи Count().",
              "uk": "Прочитай count (0–10), потім цілі (від −20 до 20). Через Where обери додатні та виведи Count()."
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
              "en": "Where takes a bool-producing function. The resulting sequence keeps only values for which that answer is true.",
              "ru": "Where получает функцию с результатом bool. В результате остаются значения, для которых ответ верный.",
              "uk": "Where отримує функцію з результатом bool. У результаті залишаються значення, для яких відповідь істинна."
            },
            {
              "en": "Count the filtered sequence, not the original list.",
              "ru": "Считай элементы отфильтрованной последовательности, а не исходного списка.",
              "uk": "Рахуй елементи відфільтрованої послідовності, а не початкового списку."
            }
          ],
          "features": [
            "where"
          ]
        },
        {
          "id": "linq-transform",
          "revision": 1,
          "title": {
            "en": "Transform before summing",
            "ru": "Преобразуй перед суммированием",
            "uk": "Перетвори перед додаванням"
          },
          "learn": {
            "en": "Select changes each element into a result. Sum then adds those results.",
            "ru": "Select превращает каждый элемент в результат. Затем Sum складывает эти результаты.",
            "uk": "Select перетворює кожен елемент на результат. Потім Sum додає ці результати."
          },
          "steps": [
            {
              "en": "Read count (0–10), then integers (−10 to 10). Use Select to square each value, then print their sum.",
              "ru": "Прочитай count (0–10), затем целые (от −10 до 10). Через Select возведи каждое в квадрат и выведи сумму квадратов.",
              "uk": "Прочитай count (0–10), потім цілі (від −10 до 10). Через Select піднеси кожне до квадрата та виведи суму квадратів."
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "2\n3\n4\n",
              "output": "25\n"
            },
            {
              "input": "0\n",
              "output": "0\n"
            },
            {
              "input": "2\n-2\n1\n",
              "output": "5\n"
            }
          ],
          "hints": [
            {
              "en": "Select changes each element into a result. Sum then adds those results.",
              "ru": "Select превращает каждый элемент в результат. Затем Sum складывает эти результаты.",
              "uk": "Select перетворює кожен елемент на результат. Потім Sum додає ці результати."
            },
            {
              "en": "Square with x * x; the input list does not need to change.",
              "ru": "Квадрат — x * x; исходный список менять не нужно.",
              "uk": "Квадрат — x * x; початковий список змінювати не потрібно."
            }
          ],
          "features": [
            "select"
          ]
        },
        {
          "id": "linq-order",
          "revision": 1,
          "title": {
            "en": "Order and take the first",
            "ru": "Упорядочь и возьми первый",
            "uk": "Впорядкуй та візьми перший"
          },
          "learn": {
            "en": "OrderBy(x => x) orders numbers by their own value. The first element is then the smallest.",
            "ru": "OrderBy(x => x) упорядочивает числа по их значениям. Первый элемент после этого — наименьший.",
            "uk": "OrderBy(x => x) впорядковує числа за їхніми значеннями. Перший елемент після цього — найменший."
          },
          "steps": [
            {
              "en": "Read count (1–10), then integers (−100 to 100). Use OrderBy and First to print the smallest.",
              "ru": "Прочитай count (1–10), затем целые (от −100 до 100). Через OrderBy и First выведи наименьшее.",
              "uk": "Прочитай count (1–10), потім цілі (від −100 до 100). Через OrderBy та First виведи найменше."
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "3\n5\n-2\n1\n",
              "output": "-2\n"
            },
            {
              "input": "1\n7\n",
              "output": "7\n"
            },
            {
              "input": "2\n0\n0\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "OrderBy(x => x) orders numbers by their own value. The first element is then the smallest.",
              "ru": "OrderBy(x => x) упорядочивает числа по их значениям. Первый элемент после этого — наименьший.",
              "uk": "OrderBy(x => x) впорядковує числа за їхніми значеннями. Перший елемент після цього — найменший."
            },
            {
              "en": "The task guarantees at least one input, so First has a value to return.",
              "ru": "По условию есть хотя бы одно число, поэтому First есть что вернуть.",
              "uk": "За умовою є хоча б одне число, тому First має що повернути."
            }
          ],
          "features": [
            "orderby"
          ]
        },
        {
          "id": "generic-first",
          "revision": 1,
          "title": {
            "en": "Reuse an operation across types",
            "ru": "Повтори операцию для разных типов",
            "uk": "Повтори операцію для різних типів"
          },
          "learn": {
            "en": "A type parameter T links the element type in the input to the return type. The compiler can infer T from an array argument.",
            "ru": "Параметр типа T связывает тип элемента на входе с типом результата. Компилятор может определить T по переданному массиву.",
            "uk": "Параметр типу T пов’язує тип елемента на вході з типом результату. Компілятор може визначити T за переданим масивом."
          },
          "steps": [
            {
              "en": "Read an integer n and then a word. Define First<T>(T[] values) returning values[0]. Call it for {n, 0} and {word, \"other\"}; print the two results on separate lines.",
              "ru": "Прочитай целое n и слово. Объяви First<T>(T[] values), возвращающий values[0]. Вызови для {n, 0} и {word, \"other\"}; выведи результаты с разных строк.",
              "uk": "Прочитай ціле n та слово. Оголоси First<T>(T[] values), що повертає values[0]. Виклич для {n, 0} та {word, \"other\"}; виведи результати з різних рядків."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "7\nred\n",
              "output": "7\nred\n"
            },
            {
              "input": "-2\nblue\n",
              "output": "-2\nblue\n"
            }
          ],
          "hints": [
            {
              "en": "A type parameter T links the element type in the input to the return type. The compiler can infer T from an array argument.",
              "ru": "Параметр типа T связывает тип элемента на входе с типом результата. Компилятор может определить T по переданному массиву.",
              "uk": "Параметр типу T пов’язує тип елемента на вході з типом результату. Компілятор може визначити T за переданим масивом."
            },
            {
              "en": "The same T appears as the result type and the array element type.",
              "ru": "Один и тот же T стоит на месте типа результата и типа элементов массива.",
              "uk": "Той самий T стоїть на місці типу результату й типу елементів масиву."
            }
          ],
          "features": [
            "generic"
          ]
        }
      ]
    },
    {
      "id": "safe-data",
      "title": {
        "en": "Handle data that may fail",
        "ru": "Обработай данные, с которыми бывает ошибка",
        "uk": "Оброби дані, з якими трапляється помилка"
      },
      "intro": {
        "en": "Validate input and work with text streams and temporary files.",
        "ru": "Проверяй ввод и работай с текстовыми потоками и временными файлами.",
        "uk": "Перевіряй введення та працюй з текстовими потоками й тимчасовими файлами."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "Examples so far supplied valid numbers. Real text may not be a number. `int.TryParse(text, out number)` returns whether conversion succeeded and writes the parsed value to number. Use the value only according to that answer.",
            "ru": "До этого ввод содержал корректные числа. Настоящий текст может не быть числом. `int.TryParse(text, out number)` возвращает успех преобразования и записывает число в number. Дальнейшее действие выбирай по ответу.",
            "uk": "До цього введення містило коректні числа. Справжній текст може не бути числом. `int.TryParse(text, out number)` повертає успіх перетворення й записує число в number. Подальшу дію обирай за відповіддю."
          },
          {
            "en": "An exception interrupts the ordinary flow. A matching catch handles a known failure, such as FormatException from int.Parse. Do not catch everything just to hide a bug; decide what a failed input should produce.",
            "ru": "Исключение прерывает обычный ход выполнения. Подходящий catch обрабатывает известную ошибку, например FormatException от int.Parse. Не перехватывай всё ради сокрытия ошибки: определи ожидаемый ответ на неверные данные.",
            "uk": "Виняток перериває звичайний хід виконання. Відповідний catch обробляє відому помилку, наприклад FormatException від int.Parse. Не перехоплюй усе заради приховування помилки: визнач очікувану відповідь на хибні дані."
          },
          {
            "en": "StringReader reads lines from a string as if it were a text file. StringWriter collects output in a string. File.WriteAllText and File.ReadAllText work with a named file. Files in this online exercise exist only for that execution; they do not become files on your computer.",
            "ru": "StringReader читает строки из текста как из файла. StringWriter собирает вывод в строку. File.WriteAllText и File.ReadAllText работают с именованным файлом. Файлы в онлайн-задании существуют только во время этого запуска и не появляются на твоём компьютере.",
            "uk": "StringReader читає рядки з тексту як із файлу. StringWriter збирає виведення в рядок. File.WriteAllText та File.ReadAllText працюють з іменованим файлом. Файли в онлайн-завданні існують лише під час цього запуску й не з’являються на твоєму комп’ютері."
          }
        ],
        "example": {
          "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        string text = \"twelve\";\n        int number;\n        if (int.TryParse(text, out number)) Console.WriteLine(number + 1);\n        else Console.WriteLine(\"Invalid\");\n    }\n}\n",
          "input": "",
          "output": "Invalid\n"
        },
        "lines": [
          {
            "en": "Store text that is not a number.",
            "ru": "Сохраняем текст, который не является числом.",
            "uk": "Зберігаємо текст, що не є числом."
          },
          {
            "en": "TryParse returns false without crashing the program.",
            "ru": "TryParse возвращает false, не завершая программу с ошибкой.",
            "uk": "TryParse повертає false, не завершуючи програму з помилкою."
          },
          {
            "en": "Select the explicit error result.",
            "ru": "Выбираем явно заданный ответ на ошибку.",
            "uk": "Обираємо явно задану відповідь на помилку."
          }
        ],
        "trace": [
          {
            "en": "\"twelve\" → conversion failed → Invalid.",
            "ru": "\"twelve\" → преобразование не удалось → Invalid.",
            "uk": "\"twelve\" → перетворення не вдалося → Invalid."
          }
        ],
        "mistake": {
          "en": "A successful parse does not prove a number is in a valid range. Conversion and domain validation are separate checks.",
          "ru": "Успешное преобразование ещё не доказывает, что число попало в допустимый диапазон. Преобразование и проверка границ — разные проверки.",
          "uk": "Успішне перетворення ще не доводить, що число потрапило в допустимий діапазон. Перетворення та перевірка меж — різні перевірки."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
        ]
      },
      "tasks": [
        {
          "id": "try-parse",
          "revision": 1,
          "title": {
            "en": "Try a conversion",
            "ru": "Попробуй преобразование",
            "uk": "Спробуй перетворення"
          },
          "learn": {
            "en": "TryParse reports failure with a false result. You choose the replacement output.",
            "ru": "TryParse сообщает о неудаче ответом false. Ты выбираешь, что вывести в таком случае.",
            "uk": "TryParse повідомляє про невдачу відповіддю false. Ти обираєш, що вивести в такому випадку."
          },
          "steps": [
            {
              "en": "Read a line. If it is a valid 32-bit integer, print that integer plus 1; otherwise print `Invalid`. Inputs never contain the maximum 32-bit integer.",
              "ru": "Прочитай строку. Если это целое типа int, выведи его плюс 1, иначе `Invalid`. Максимальное значение int во вводе не встречается.",
              "uk": "Прочитай рядок. Якщо це ціле типу int, виведи його плюс 1, інакше `Invalid`. Максимальне значення int у введенні не трапляється."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "12\n",
              "output": "13\n"
            },
            {
              "input": "no\n",
              "output": "Invalid\n"
            },
            {
              "input": "-1\n",
              "output": "0\n"
            },
            {
              "input": "\n",
              "output": "Invalid\n"
            }
          ],
          "hints": [
            {
              "en": "TryParse reports failure with a false result. You choose the replacement output.",
              "ru": "TryParse сообщает о неудаче ответом false. Ты выбираешь, что вывести в таком случае.",
              "uk": "TryParse повідомляє про невдачу відповіддю false. Ти обираєш, що вивести в такому випадку."
            },
            {
              "en": "Declare the out variable before the call if that syntax is easier to follow.",
              "ru": "Если так понятнее, объяви переменную out перед вызовом.",
              "uk": "Якщо так зрозуміліше, оголоси змінну out перед викликом."
            }
          ],
          "features": [
            "tryparse"
          ]
        },
        {
          "id": "validate-age",
          "revision": 1,
          "title": {
            "en": "Convert, then validate",
            "ru": "Преобразуй, затем проверь",
            "uk": "Перетвори, потім перевір"
          },
          "learn": {
            "en": "A line must both convert to an int and fall in the allowed range. && stops evaluating as soon as an earlier condition is false.",
            "ru": "Строка должна и преобразоваться в int, и попасть в допустимый диапазон. && прекращает дальнейшие проверки после первого неверного условия.",
            "uk": "Рядок має і перетворитися на int, і потрапити в допустимий діапазон. && припиняє подальші перевірки після першої хибної умови."
          },
          "steps": [
            {
              "en": "Read text. Print `Valid` only for an integer from 0 through 120; otherwise `Invalid`.",
              "ru": "Прочитай текст. Выведи `Valid` только для целого от 0 до 120 включительно, иначе `Invalid`.",
              "uk": "Прочитай текст. Виведи `Valid` лише для цілого від 0 до 120 включно, інакше `Invalid`."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "0\n",
              "output": "Valid\n"
            },
            {
              "input": "120\n",
              "output": "Valid\n"
            },
            {
              "input": "121\n",
              "output": "Invalid\n"
            },
            {
              "input": "abc\n",
              "output": "Invalid\n"
            }
          ],
          "hints": [
            {
              "en": "A line must both convert to an int and fall in the allowed range. && stops evaluating as soon as an earlier condition is false.",
              "ru": "Строка должна и преобразоваться в int, и попасть в допустимый диапазон. && прекращает дальнейшие проверки после первого неверного условия.",
              "uk": "Рядок має і перетворитися на int, і потрапити в допустимий діапазон. && припиняє подальші перевірки після першої хибної умови."
            },
            {
              "en": "Do not accept every successfully parsed number.",
              "ru": "Не принимай любое успешно преобразованное число.",
              "uk": "Не приймай будь-яке успішно перетворене число."
            }
          ],
          "features": []
        },
        {
          "id": "catch-format",
          "revision": 1,
          "title": {
            "en": "Handle a known exception",
            "ru": "Обработай известное исключение",
            "uk": "Оброби відомий виняток"
          },
          "learn": {
            "en": "int.Parse throws FormatException for malformed number text. The matching catch runs instead of the rest of try.",
            "ru": "int.Parse вызывает FormatException, если формат текста неверный. Подходящий catch выполняется вместо оставшейся части try.",
            "uk": "int.Parse викликає FormatException, якщо формат тексту хибний. Відповідний catch виконується замість решти try."
          },
          "steps": [
            {
              "en": "Read text representing a number from −100 to 100, or invalid letters. Use try/catch around int.Parse. Print twice the number or `Invalid`.",
              "ru": "Прочитай текст с числом от −100 до 100 или неверными буквами. Используй try/catch вокруг int.Parse. Выведи удвоенное число или `Invalid`.",
              "uk": "Прочитай текст із числом від −100 до 100 або хибними літерами. Використай try/catch навколо int.Parse. Виведи подвоєне число або `Invalid`."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "4\n",
              "output": "8\n"
            },
            {
              "input": "wrong\n",
              "output": "Invalid\n"
            },
            {
              "input": "-2\n",
              "output": "-4\n"
            }
          ],
          "hints": [
            {
              "en": "int.Parse throws FormatException for malformed number text. The matching catch runs instead of the rest of try.",
              "ru": "int.Parse вызывает FormatException, если формат текста неверный. Подходящий catch выполняется вместо оставшейся части try.",
              "uk": "int.Parse викликає FormatException, якщо формат тексту хибний. Відповідний catch виконується замість решти try."
            },
            {
              "en": "Only the potentially failing work belongs in try. Catch the failure named in the task.",
              "ru": "В try помещается работа, которая может не получиться. Перехватывай указанную в задаче ошибку.",
              "uk": "У try розташовується робота, що може не вдатися. Перехоплюй зазначену в завданні помилку."
            }
          ],
          "features": [
            "catch"
          ]
        },
        {
          "id": "text-stream",
          "revision": 1,
          "title": {
            "en": "Read an existing text as a stream",
            "ru": "Прочитай готовый текст как поток",
            "uk": "Прочитай готовий текст як потік"
          },
          "learn": {
            "en": "StringReader.ReadLine reads from its own text, independently from Console.ReadLine. using closes the reader when its block ends.",
            "ru": "StringReader.ReadLine читает свой текст отдельно от Console.ReadLine. using закрывает reader после завершения блока.",
            "uk": "StringReader.ReadLine читає власний текст окремо від Console.ReadLine. using закриває reader після завершення блоку."
          },
          "steps": [
            {
              "en": "Read two integers from separate console lines. Build a text containing those two lines, read it with StringReader, and print their sum.",
              "ru": "Прочитай два целых с разных строк консоли. Собери текст из этих двух строк, прочитай его через StringReader и выведи сумму чисел.",
              "uk": "Прочитай два цілі з різних рядків консолі. Склади текст із цих двох рядків, прочитай його через StringReader та виведи суму чисел."
            }
          ],
          "starter": "using System;\nusing System.IO;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "3\n7\n",
              "output": "10\n"
            },
            {
              "input": "-2\n2\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "StringReader.ReadLine reads from its own text, independently from Console.ReadLine. using closes the reader when its block ends.",
              "ru": "StringReader.ReadLine читает свой текст отдельно от Console.ReadLine. using закрывает reader после завершения блока.",
              "uk": "StringReader.ReadLine читає власний текст окремо від Console.ReadLine. using закриває reader після завершення блоку."
            },
            {
              "en": "A newline inside the prepared text separates the two records.",
              "ru": "Символ новой строки внутри подготовленного текста разделяет две записи.",
              "uk": "Символ нового рядка всередині підготовленого тексту розділяє два записи."
            }
          ],
          "features": [
            "stringreader"
          ]
        },
        {
          "id": "file-roundtrip",
          "revision": 1,
          "title": {
            "en": "Write and read one file",
            "ru": "Запиши и прочитай один файл",
            "uk": "Запиши й прочитай один файл"
          },
          "learn": {
            "en": "WriteAllText creates or replaces the named text file. ReadAllText returns its contents. This sandbox file lasts only for the current run.",
            "ru": "WriteAllText создаёт или заменяет текстовый файл. ReadAllText возвращает его содержимое. Файл песочницы живёт только в текущем запуске.",
            "uk": "WriteAllText створює або замінює текстовий файл. ReadAllText повертає його вміст. Файл пісочниці живе лише в поточному запуску."
          },
          "steps": [
            {
              "en": "Read a text line. Write it to `note.txt`, read that file back, and print the returned contents.",
              "ru": "Прочитай строку текста. Запиши её в `note.txt`, прочитай файл обратно и выведи прочитанное содержимое.",
              "uk": "Прочитай рядок тексту. Запиши його в `note.txt`, прочитай файл назад і виведи прочитаний вміст."
            }
          ],
          "starter": "using System;\nusing System.IO;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
              "en": "WriteAllText creates or replaces the named text file. ReadAllText returns its contents. This sandbox file lasts only for the current run.",
              "ru": "WriteAllText создаёт или заменяет текстовый файл. ReadAllText возвращает его содержимое. Файл песочницы живёт только в текущем запуске.",
              "uk": "WriteAllText створює або замінює текстовий файл. ReadAllText повертає його вміст. Файл пісочниці живе лише в поточному запуску."
            },
            {
              "en": "The output should come from reading the file.",
              "ru": "Вывод должен браться из чтения файла.",
              "uk": "Виведення має братися з читання файлу."
            }
          ],
          "features": [
            "file"
          ]
        }
      ]
    },
    {
      "id": "async-testing",
      "title": {
        "en": "Wait for work and verify results",
        "ru": "Дождись работы и проверь результат",
        "uk": "Дочекайся роботи й перевір результат"
      },
      "intro": {
        "en": "Understand Task, await, cancellation, and small self-checks.",
        "ru": "Разберись с Task, await, отменой и небольшими самопроверками.",
        "uk": "Розберися з Task, await, скасуванням і невеликими самоперевірками."
      },
      "theory": {
        "paragraphs": [
          {
            "en": "A Task represents work and its eventual completion. `Task<int>` will provide an int result. `async` permits await inside a method; `await` obtains the result after the task completes. async by itself does not mean “run everything in parallel.”",
            "ru": "Task представляет работу и её завершение. `Task<int>` предоставит результат типа int. `async` разрешает await внутри метода, а `await` получает результат после завершения задачи. Само async не означает «выполнить всё параллельно».",
            "uk": "Task представляє роботу та її завершення. `Task<int>` надасть результат типу int. `async` дозволяє await усередині методу, а `await` отримує результат після завершення задачі. Саме async не означає «виконати все паралельно»."
          },
          {
            "en": "The online compiler uses a conventional synchronous Main. Our prepared bridge calls `Work().GetAwaiter().GetResult()`. Inside Work, use await. On modern .NET, an async Main is another option. Do not use this blocking bridge as a general UI/server pattern.",
            "ru": "Онлайн-компилятор использует обычный синхронный Main. Готовый переход вызывает `Work().GetAwaiter().GetResult()`. Внутри Work используй await. В современном .NET возможен async Main. Такой блокирующий переход не является общим шаблоном для интерфейсов и серверов.",
            "uk": "Онлайн-компілятор використовує звичайний синхронний Main. Готовий перехід викликає `Work().GetAwaiter().GetResult()`. Усередині Work використовуй await. У сучасному .NET можливий async Main. Такий блокувальний перехід не є загальним шаблоном для інтерфейсів і серверів."
          },
          {
            "en": "Task.WhenAll waits for all supplied tasks and returns results in input order. A CancellationToken is a cooperative stop request: work must observe it. An assertion compares actual with expected; a failed check should be visible rather than silently accepted.",
            "ru": "Task.WhenAll ждёт завершения всех переданных задач и возвращает результаты в порядке передачи. CancellationToken — запрос на согласованную отмену: работа должна его проверить. Проверка сравнивает фактическое с ожидаемым; ошибка проверки должна быть видна.",
            "uk": "Task.WhenAll чекає завершення всіх переданих задач і повертає результати в порядку передачі. CancellationToken — запит на узгоджене скасування: робота має його перевірити. Перевірка порівнює фактичне з очікуваним; помилка перевірки має бути видимою."
          }
        ],
        "example": {
          "code": "using System;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static async Task<int> Work() { int value = await Task.FromResult(6); return value + 1; }\n    static void Main()\n    {\n        Console.WriteLine(Work().GetAwaiter().GetResult());\n    }\n}\n",
          "input": "",
          "output": "7\n"
        },
        "lines": [
          {
            "en": "Call Work to obtain a task.",
            "ru": "Вызываем Work и получаем задачу.",
            "uk": "Викликаємо Work та отримуємо задачу."
          },
          {
            "en": "await obtains 6 inside Work, then Work returns 7.",
            "ru": "await получает 6 внутри Work, затем Work возвращает 7.",
            "uk": "await отримує 6 усередині Work, потім Work повертає 7."
          },
          {
            "en": "The prepared Main bridge prints the final result.",
            "ru": "Готовый переход в Main выводит итоговый результат.",
            "uk": "Готовий перехід у Main виводить підсумковий результат."
          }
        ],
        "trace": [
          {
            "en": "Task.FromResult(6) is already complete; await still receives its value.",
            "ru": "Task.FromResult(6) уже завершена; await всё равно получает её значение.",
            "uk": "Task.FromResult(6) вже завершена; await однаково отримує її значення."
          }
        ],
        "mistake": {
          "en": "Do not print a Task object when you need its result. Wait for the task first. Avoid long delays or real network requests in these exercises.",
          "ru": "Не выводи объект Task вместо его результата. Сначала дождись задачи. В этих упражнениях не нужны долгие задержки и настоящие сетевые запросы.",
          "uk": "Не виводь об’єкт Task замість його результату. Спочатку дочекайся задачі. У цих вправах не потрібні довгі затримки та справжні мережеві запити."
        },
        "sources": [
          "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/"
        ]
      },
      "tasks": [
        {
          "id": "await-value",
          "revision": 1,
          "title": {
            "en": "Receive a task result",
            "ru": "Получи результат задачи",
            "uk": "Отримай результат задачі"
          },
          "learn": {
            "en": "Task.FromResult creates a completed task from a known value. await reads that task’s result inside an async method.",
            "ru": "Task.FromResult создаёт завершённую задачу из готового значения. await читает результат внутри async-метода.",
            "uk": "Task.FromResult створює завершену задачу з готового значення. await читає результат усередині async-методу."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). Define async Task<int> NextAsync(int n): await Task.FromResult(n), then return n + 1. Print its final result.",
              "ru": "Прочитай n (от −100 до 100). Объяви async Task<int> NextAsync(int n): дождись Task.FromResult(n), затем верни n + 1. Выведи результат задачи.",
              "uk": "Прочитай n (від −100 до 100). Оголоси async Task<int> NextAsync(int n): дочекайся Task.FromResult(n), потім поверни n + 1. Виведи результат задачі."
            }
          ],
          "starter": "using System;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "4\n",
              "output": "5\n"
            },
            {
              "input": "-1\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "Task.FromResult creates a completed task from a known value. await reads that task’s result inside an async method.",
              "ru": "Task.FromResult создаёт завершённую задачу из готового значения. await читает результат внутри async-метода.",
              "uk": "Task.FromResult створює завершену задачу з готового значення. await читає результат усередині async-методу."
            },
            {
              "en": "The return type is Task<int>, while the expression returned inside async is an int.",
              "ru": "Тип результата метода — Task<int>, но внутри async возвращается выражение типа int.",
              "uk": "Тип результату методу — Task<int>, але всередині async повертається вираз типу int."
            }
          ],
          "features": [
            "await"
          ]
        },
        {
          "id": "run-task",
          "revision": 1,
          "title": {
            "en": "Await scheduled work",
            "ru": "Дождись запланированной работы",
            "uk": "Дочекайся запланованої роботи"
          },
          "learn": {
            "en": "Task.Run schedules a function on the thread pool. The caller receives a task and awaits the computed value.",
            "ru": "Task.Run планирует функцию в пуле потоков. Вызывающий код получает задачу и дожидается вычисленного значения.",
            "uk": "Task.Run планує функцію в пулі потоків. Код, що викликає, отримує задачу й очікує обчисленого значення."
          },
          "steps": [
            {
              "en": "Read n (−100 to 100). In async DoubleAsync, await Task.Run(() => n * 2). Print the returned result.",
              "ru": "Прочитай n (от −100 до 100). В async DoubleAsync дождись Task.Run(() => n * 2). Выведи возвращённый результат.",
              "uk": "Прочитай n (від −100 до 100). В async DoubleAsync дочекайся Task.Run(() => n * 2). Виведи повернений результат."
            }
          ],
          "starter": "using System;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
              "en": "Task.Run schedules a function on the thread pool. The caller receives a task and awaits the computed value.",
              "ru": "Task.Run планирует функцию в пуле потоков. Вызывающий код получает задачу и дожидается вычисленного значения.",
              "uk": "Task.Run планує функцію в пулі потоків. Код, що викликає, отримує задачу й очікує обчисленого значення."
            },
            {
              "en": "Return the awaited number, not the Task itself from a method declared to return int.",
              "ru": "Возвращай полученное через await число; тип самого async-метода должен быть Task<int>.",
              "uk": "Повертай отримане через await число; тип самого async-методу має бути Task<int>."
            }
          ],
          "features": [
            "await"
          ]
        },
        {
          "id": "when-all",
          "revision": 1,
          "title": {
            "en": "Wait for two results",
            "ru": "Дождись двух результатов",
            "uk": "Дочекайся двох результатів"
          },
          "learn": {
            "en": "WhenAll combines independent tasks. Its result is an array containing their results.",
            "ru": "WhenAll объединяет независимые задачи. Результат — массив их результатов.",
            "uk": "WhenAll об’єднує незалежні задачі. Результат — масив їхніх результатів."
          },
          "steps": [
            {
              "en": "Read a and b (−100 to 100). Create completed tasks for each. Await Task.WhenAll and print the sum of the two results.",
              "ru": "Прочитай a и b (от −100 до 100). Создай завершённые задачи для каждого. Дождись Task.WhenAll и выведи сумму двух результатов.",
              "uk": "Прочитай a та b (від −100 до 100). Створи завершені задачі для кожного. Дочекайся Task.WhenAll і виведи суму двох результатів."
            }
          ],
          "starter": "using System;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "3\n7\n",
              "output": "10\n"
            },
            {
              "input": "-2\n2\n",
              "output": "0\n"
            }
          ],
          "hints": [
            {
              "en": "WhenAll combines independent tasks. Its result is an array containing their results.",
              "ru": "WhenAll объединяет независимые задачи. Результат — массив их результатов.",
              "uk": "WhenAll об’єднує незалежні задачі. Результат — масив їхніх результатів."
            },
            {
              "en": "After await, the array elements are ordinary integers.",
              "ru": "После await элементы массива — обычные целые числа.",
              "uk": "Після await елементи масиву — звичайні цілі числа."
            }
          ],
          "features": [
            "whenall"
          ]
        },
        {
          "id": "cancel-work",
          "revision": 1,
          "title": {
            "en": "Respect a stop request",
            "ru": "Уважай запрос остановки",
            "uk": "Поважай запит зупинки"
          },
          "learn": {
            "en": "CancellationTokenSource.Cancel requests cancellation. ThrowIfCancellationRequested observes it and throws OperationCanceledException.",
            "ru": "CancellationTokenSource.Cancel запрашивает отмену. ThrowIfCancellationRequested проверяет запрос и вызывает OperationCanceledException.",
            "uk": "CancellationTokenSource.Cancel запитує скасування. ThrowIfCancellationRequested перевіряє запит і викликає OperationCanceledException."
          },
          "steps": [
            {
              "en": "Read flag (0 or 1). Create CancellationTokenSource; cancel it for 1. Check its token and print `Done`, or catch cancellation and print `Cancelled`.",
              "ru": "Прочитай flag (0 или 1). Создай CancellationTokenSource; для 1 запроси отмену. Проверь токен и выведи `Done`, либо перехвати отмену и выведи `Cancelled`.",
              "uk": "Прочитай flag (0 або 1). Створи CancellationTokenSource; для 1 запитай скасування. Перевір токен і виведи `Done`, або перехопи скасування й виведи `Cancelled`."
            }
          ],
          "starter": "using System;\nusing System.Threading;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "0\n",
              "output": "Done\n"
            },
            {
              "input": "1\n",
              "output": "Cancelled\n"
            }
          ],
          "hints": [
            {
              "en": "CancellationTokenSource.Cancel requests cancellation. ThrowIfCancellationRequested observes it and throws OperationCanceledException.",
              "ru": "CancellationTokenSource.Cancel запрашивает отмену. ThrowIfCancellationRequested проверяет запрос и вызывает OperationCanceledException.",
              "uk": "CancellationTokenSource.Cancel запитує скасування. ThrowIfCancellationRequested перевіряє запит і викликає OperationCanceledException."
            },
            {
              "en": "A token does not forcibly kill a thread. Work checks the request at an appropriate point.",
              "ru": "Токен не убивает поток принудительно. Работа сама проверяет запрос в подходящем месте.",
              "uk": "Токен не вбиває потік примусово. Робота сама перевіряє запит у відповідному місці."
            }
          ],
          "features": [
            "cancellation"
          ]
        },
        {
          "id": "self-test",
          "revision": 1,
          "title": {
            "en": "Check a helper yourself",
            "ru": "Сам проверь помощника",
            "uk": "Сам перевір помічника"
          },
          "learn": {
            "en": "A small assertion can throw if a known calculation returns the wrong answer. Keep self-checks separate from input/output.",
            "ru": "Небольшая проверка может вызвать исключение, если известный расчёт дал неверный ответ. Отделяй самопроверки от ввода и вывода.",
            "uk": "Невелика перевірка може викликати виняток, якщо відомий розрахунок дав хибну відповідь. Відокремлюй самоперевірки від введення та виведення."
          },
          "steps": [
            {
              "en": "Define Add(a,b). Before reading input, check Add(2,3)==5 and Add(-1,1)==0; throw if either fails. Read a,b and print Add(a,b).",
              "ru": "Объяви Add(a,b). До ввода проверь Add(2,3)==5 и Add(-1,1)==0; при ошибке вызывай исключение. Прочитай a,b и выведи Add(a,b).",
              "uk": "Оголоси Add(a,b). До введення перевір Add(2,3)==5 та Add(-1,1)==0; за помилки викликай виняток. Прочитай a,b та виведи Add(a,b)."
            }
          ],
          "starter": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
          "cases": [
            {
              "input": "7\n8\n",
              "output": "15\n"
            },
            {
              "input": "-4\n1\n",
              "output": "-3\n"
            }
          ],
          "hints": [
            {
              "en": "A small assertion can throw if a known calculation returns the wrong answer. Keep self-checks separate from input/output.",
              "ru": "Небольшая проверка может вызвать исключение, если известный расчёт дал неверный ответ. Отделяй самопроверки от ввода и вывода.",
              "uk": "Невелика перевірка може викликати виняток, якщо відомий розрахунок дав хибну відповідь. Відокремлюй самоперевірки від введення та виведення."
            },
            {
              "en": "A failing self-check should stop the program with a clear message.",
              "ru": "Неудачная самопроверка должна остановить программу с понятным сообщением.",
              "uk": "Невдала самоперевірка має зупинити програму зі зрозумілим повідомленням."
            }
          ],
          "features": [
            "throw"
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
        "en": "Combine input, collections, validation, and small named operations.",
        "ru": "Объединяй ввод, коллекции, проверки и небольшие именованные действия.",
        "uk": "Поєднуй введення, колекції, перевірки та невеликі іменовані дії."
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
            "en": "This course builds a console-programming foundation. Continue locally with current .NET, nullable reference types, records, JSON, unit-test frameworks, Git, package management, and an ASP.NET Core or Unity specialization. Learn those through real projects; completing these exercises does not mean knowing the entire ecosystem.",
            "ru": "Этот курс строит основу консольного программирования. Дальше работай локально: современный .NET, nullable-ссылки, records, JSON, тестовые фреймворки, Git, пакеты и специализация ASP.NET Core или Unity. Изучай их на настоящих проектах: завершение этих упражнений не означает знание всей экосистемы.",
            "uk": "Цей курс будує основу консольного програмування. Далі працюй локально: сучасний .NET, nullable-посилання, records, JSON, тестові фреймворки, Git, пакети й спеціалізація ASP.NET Core або Unity. Вивчай їх на справжніх проєктах: завершення цих вправ не означає знання всієї екосистеми."
          }
        ],
        "example": {
          "code": "using System;\nusing System.Linq;\n\nclass Program\n{\n    static void Main()\n    {\n        int[] costs = { 4, 7, 2 };\n        int total = costs.Sum();\n        Console.WriteLine(total);\n        Console.WriteLine(20 - total);\n    }\n}\n",
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
          "https://learn.microsoft.com/en-us/dotnet/csharp/"
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
          "starter": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
            }
          ],
          "starter": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write your code here.\n    }\n}\n",
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
