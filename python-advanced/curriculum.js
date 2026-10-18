window.PYTHON_ADVANCED_COURSE = [
  {
    "id": "functions",
    "title": {
      "en": "Functions: one named job",
      "ru": "Функции: действие с именем",
      "uk": "Функції: дія з іменем"
    },
    "intro": {
      "en": "A function stores instructions, not their result. Define it with def; call it with parentheses. Start by calling a function, then pass one value and finally return a result.",
      "ru": "Функция сохраняет команды, а не их результат. def объявляет её, скобки вызывают. Сначала вызови готовое действие, затем передай значение и только потом верни результат.",
      "uk": "Функція зберігає команди, а не їхній результат. def оголошує її, дужки викликають. Спочатку виклич готову дію, потім передай значення й лише тоді поверни результат."
    },
    "example": "def add_bonus(points):\n    return points + 4\n\nscore = add_bonus(6)\nprint(score)",
    "notes": [
      {
        "en": "def names the recipe. Its indented body waits until the call.",
        "ru": "def даёт рецепту имя. Команды с отступом ждут вызова.",
        "uk": "def дає рецепту ім’я. Команди з відступом чекають виклику."
      },
      {
        "en": "At add_bonus(6), points receives 6. It is a local name inside this call.",
        "ru": "При add_bonus(6) points получает 6. Это местное имя внутри вызова.",
        "uk": "Під час add_bonus(6) points отримує 6. Це місцеве ім’я всередині виклику."
      },
      {
        "en": "return computes 6 + 4 and hands 10 back to the caller; it also ends the function.",
        "ru": "return вычисляет 6 + 4 и возвращает 10 в место вызова; функция заканчивается.",
        "uk": "return обчислює 6 + 4 і повертає 10 у місце виклику; функція завершується."
      },
      {
        "en": "score stores 10; print displays it. return and print have different jobs.",
        "ru": "score сохраняет 10; print показывает его. return и print выполняют разные действия.",
        "uk": "score зберігає 10; print показує його. return і print виконують різні дії."
      }
    ],
    "tasks": [
      {
        "id": "call-function",
        "title": {
          "en": "Call a function",
          "ru": "Вызови функцию",
          "uk": "Виклич функцію"
        },
        "learn": {
          "en": "Parentheses start a function. Writing its name alone does not run its body.",
          "ru": "Скобки запускают функцию. Одно имя без скобок не выполняет тело.",
          "uk": "Дужки запускають функцію. Саме ім’я без дужок не виконує тіло."
        },
        "instruction": {
          "en": "Define announce() to print Ready. Read n (0–4) and call announce exactly n times.",
          "ru": "Определи announce(), которая печатает Ready. Прочитай n (0–4) и вызови announce ровно n раз.",
          "uk": "Визнач announce(), яка друкує Ready. Прочитай n (0–4) і виклич announce рівно n разів."
        },
        "example": "def greet():\n    print(\"Hello\")\ngreet()",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "1"
            ],
            "out": "Ready"
          },
          {
            "input": [
              "3"
            ],
            "out": "Ready\nReady\nReady"
          },
          {
            "input": [
              "0"
            ],
            "out": ""
          }
        ],
        "features": [
          "def:announce",
          "call:announce"
        ],
        "revision": 1,
        "exampleOut": "Hello"
      },
      {
        "id": "function-parameter",
        "title": {
          "en": "Pass one value",
          "ru": "Передай одно значение",
          "uk": "Передай одне значення"
        },
        "learn": {
          "en": "A parameter is a local name for the argument supplied at the call.",
          "ru": "Параметр — местное имя для значения, переданного при вызове.",
          "uk": "Параметр — місцеве ім’я для значення, переданого під час виклику."
        },
        "instruction": {
          "en": "Define show_double(number), which prints number * 2. Read an integer and pass it to the function.",
          "ru": "Определи show_double(number), которая печатает number * 2. Прочитай целое число и передай его функции.",
          "uk": "Визнач show_double(number), яка друкує number * 2. Прочитай ціле число й передай його функції."
        },
        "example": "def show_word(word):\n    print(word)\nshow_word(\"tea\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "4"
            ],
            "out": "8"
          },
          {
            "input": [
              "-3"
            ],
            "out": "-6"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          }
        ],
        "features": [
          "def:show_double",
          "call:show_double"
        ],
        "revision": 1,
        "exampleOut": "tea"
      },
      {
        "id": "function-return",
        "title": {
          "en": "Return a value",
          "ru": "Верни значение",
          "uk": "Поверни значення"
        },
        "learn": {
          "en": "return sends a value back. A function that only prints returns None.",
          "ru": "return отдаёт значение обратно. Функция, которая только печатает, возвращает None.",
          "uk": "return віддає значення назад. Функція, яка лише друкує, повертає None."
        },
        "instruction": {
          "en": "Define triple(n) with return. Read an integer, save the returned triple in result and print result.",
          "ru": "Определи triple(n) с return. Прочитай целое число, сохрани возвращённое утроенное значение в result и выведи result.",
          "uk": "Визнач triple(n) з return. Прочитай ціле число, збережи повернене потроєне значення в result і виведи result."
        },
        "example": "def plus_two(n):\n    return n + 2\nanswer = plus_two(5)\nprint(answer)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "5"
            ],
            "out": "15"
          },
          {
            "input": [
              "-2"
            ],
            "out": "-6"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          }
        ],
        "features": [
          "def:triple",
          "Return"
        ],
        "revision": 1,
        "exampleOut": "7"
      },
      {
        "id": "two-parameters",
        "title": {
          "en": "Two parameters",
          "ru": "Два параметра",
          "uk": "Два параметри"
        },
        "learn": {
          "en": "Arguments are matched to parameters in order unless you use their names.",
          "ru": "Аргументы попадают в параметры по порядку, если не указаны их имена.",
          "uk": "Аргументи потрапляють у параметри за порядком, якщо не вказані їхні імена."
        },
        "instruction": {
          "en": "Define rectangle_area(width, height) returning their product. Read width and height on separate lines and print the returned area.",
          "ru": "Определи rectangle_area(width, height), возвращающую произведение. Прочитай width и height с разных строк и выведи площадь.",
          "uk": "Визнач rectangle_area(width, height), що повертає добуток. Прочитай width і height з різних рядків та виведи площу."
        },
        "example": "def add(a, b):\n    return a + b\nprint(add(2, 5))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "3",
              "4"
            ],
            "out": "12"
          },
          {
            "input": [
              "0",
              "9"
            ],
            "out": "0"
          },
          {
            "input": [
              "7",
              "2"
            ],
            "out": "14"
          }
        ],
        "features": [
          "def:rectangle_area",
          "Return"
        ],
        "revision": 1,
        "exampleOut": "7"
      },
      {
        "id": "early-return",
        "title": {
          "en": "Return from a branch",
          "ru": "Возврат из ветки",
          "uk": "Повернення з гілки"
        },
        "learn": {
          "en": "return stops the current call. A later return can cover the remaining case.",
          "ru": "return завершает текущий вызов. Следующий return может обработать оставшийся случай.",
          "uk": "return завершує поточний виклик. Наступний return може обробити решту випадків."
        },
        "instruction": {
          "en": "Define clamp_zero(n): return 0 when n < 0, otherwise return n. Read n and print the result.",
          "ru": "Определи clamp_zero(n): верни 0 при n < 0, иначе верни n. Прочитай n и выведи результат.",
          "uk": "Визнач clamp_zero(n): поверни 0 при n < 0, інакше поверни n. Прочитай n і виведи результат."
        },
        "example": "def sign(n):\n    if n < 0:\n        return \"negative\"\n    return \"not negative\"\nprint(sign(-3))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "-8"
            ],
            "out": "0"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "9"
            ],
            "out": "9"
          }
        ],
        "features": [
          "def:clamp_zero",
          "Return",
          "If"
        ],
        "revision": 1,
        "exampleOut": "negative"
      },
      {
        "id": "default-argument",
        "title": {
          "en": "A default argument",
          "ru": "Значение по умолчанию",
          "uk": "Типове значення"
        },
        "learn": {
          "en": "A default is used only when the caller omits that argument.",
          "ru": "Значение по умолчанию используется, если аргумент не передали.",
          "uk": "Типове значення використовується, якщо аргумент не передали."
        },
        "instruction": {
          "en": "Define add_fee(total, fee=10). Read total then fee; print add_fee(total) and add_fee(total, fee) on separate lines.",
          "ru": "Определи add_fee(total, fee=10). Прочитай total, затем fee; выведи add_fee(total) и add_fee(total, fee) на разных строках.",
          "uk": "Визнач add_fee(total, fee=10). Прочитай total, потім fee; виведи add_fee(total) та add_fee(total, fee) у різних рядках."
        },
        "example": "def greet(name=\"friend\"):\n    return \"Hello, \" + name\nprint(greet())\nprint(greet(\"Ada\"))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "100",
              "5"
            ],
            "out": "110\n105"
          },
          {
            "input": [
              "0",
              "0"
            ],
            "out": "10\n0"
          },
          {
            "input": [
              "20",
              "-3"
            ],
            "out": "30\n17"
          }
        ],
        "features": [
          "def:add_fee",
          "Return",
          "DefaultArgument"
        ],
        "revision": 1,
        "exampleOut": "Hello, friend\nHello, Ada"
      },
      {
        "id": "compose-functions",
        "title": {
          "en": "Combine small functions",
          "ru": "Соедини небольшие функции",
          "uk": "Поєднай невеликі функції"
        },
        "learn": {
          "en": "The returned value of one function can be the argument of another.",
          "ru": "Результат одной функции можно передать другой.",
          "uk": "Результат однієї функції можна передати іншій."
        },
        "instruction": {
          "en": "Define double(n) and add_one(n), both returning a value. Read n and print add_one(double(n)).",
          "ru": "Определи double(n) и add_one(n), обе с возвратом значения. Прочитай n и выведи add_one(double(n)).",
          "uk": "Визнач double(n) та add_one(n), обидві з поверненням значення. Прочитай n і виведи add_one(double(n))."
        },
        "example": "def add_two(n):\n    return n + 2\ndef square(n):\n    return n * n\nprint(square(add_two(3)))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "4"
            ],
            "out": "9"
          },
          {
            "input": [
              "-1"
            ],
            "out": "-1"
          },
          {
            "input": [
              "0"
            ],
            "out": "1"
          }
        ],
        "features": [
          "def:double",
          "def:add_one",
          "Return"
        ],
        "revision": 1,
        "exampleOut": "25"
      },
      {
        "id": "function-mini-project",
        "title": {
          "en": "A price calculator",
          "ru": "Калькулятор цены",
          "uk": "Калькулятор ціни"
        },
        "learn": {
          "en": "A function can combine familiar conditions with a calculation. Keep input and display outside it.",
          "ru": "Функция объединяет знакомые условия и расчёт. Ввод и вывод оставь снаружи.",
          "uk": "Функція поєднує знайомі умови й обчислення. Введення та виведення залиш зовні."
        },
        "instruction": {
          "en": "Define ticket_price(age, member). Base price: age < 12 → 50, otherwise 100. A member receives 20 off. Read age, then yes/no; print the returned price.",
          "ru": "Определи ticket_price(age, member). База: возраст < 12 → 50, иначе 100. Участнику скидка 20. Прочитай возраст, затем yes/no; выведи возвращённую цену.",
          "uk": "Визнач ticket_price(age, member). База: вік < 12 → 50, інакше 100. Учаснику знижка 20. Прочитай вік, потім yes/no; виведи повернену ціну."
        },
        "example": "def add_bonus(points):\n    return points + 4\n\nscore = add_bonus(6)\nprint(score)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "11",
              "yes"
            ],
            "out": "30"
          },
          {
            "input": [
              "12",
              "no"
            ],
            "out": "100"
          },
          {
            "input": [
              "30",
              "yes"
            ],
            "out": "80"
          },
          {
            "input": [
              "0",
              "no"
            ],
            "out": "50"
          }
        ],
        "features": [
          "def:ticket_price",
          "Return"
        ],
        "revision": 1,
        "exampleOut": "10"
      }
    ]
  },
  {
    "id": "sequences",
    "title": {
      "en": "Read and build sequences",
      "ru": "Читай и собирай последовательности",
      "uk": "Читай і збирай послідовності"
    },
    "intro": {
      "en": "A string or list contains ordered elements. Index 0 is the first; a slice stops before its end. Learn one operation at a time before processing a whole line.",
      "ru": "Строка или список хранит элементы по порядку. Индекс 0 — первый; срез не включает правую границу. Освой отдельные операции перед обработкой целой строки.",
      "uk": "Рядок або список зберігає елементи за порядком. Індекс 0 — перший; зріз не включає праву межу. Опануй окремі операції перед обробкою цілого рядка."
    },
    "example": "words = \"red blue green\".split()\nfirst = words[0]\nlast = words[-1]\nprint(first, last)\nprint(\" / \".join(words))",
    "notes": [
      {
        "en": "split() produces three strings in a list: red, blue, green.",
        "ru": "split() создаёт список из трёх строк: red, blue, green.",
        "uk": "split() створює список із трьох рядків: red, blue, green."
      },
      {
        "en": "words[0] is red; words[-1] is green. An empty list has no first item.",
        "ru": "words[0] — red; words[-1] — green. У пустого списка нет первого элемента.",
        "uk": "words[0] — red; words[-1] — green. У порожнього списку немає першого елемента."
      },
      {
        "en": "join inserts the separator between strings; it does not add one at either edge.",
        "ru": "join вставляет разделитель между строками, без лишних разделителей по краям.",
        "uk": "join вставляє роздільник між рядками, без зайвих роздільників по краях."
      },
      {
        "en": "Try changing the input to one word, then to an empty line. Check lengths before indexing.",
        "ru": "Попробуй одно слово, затем пустую строку. Перед обращением по индексу проверяй длину.",
        "uk": "Спробуй одне слово, потім порожній рядок. Перед зверненням за індексом перевіряй довжину."
      }
    ],
    "tasks": [
      {
        "id": "text-length",
        "title": {
          "en": "How long is it?",
          "ru": "Какова длина?",
          "uk": "Яка довжина?"
        },
        "learn": {
          "en": "len(text) counts characters, including spaces.",
          "ru": "len(text) считает символы, включая пробелы.",
          "uk": "len(text) рахує символи, зокрема пробіли."
        },
        "instruction": {
          "en": "Read a line and print its length.",
          "ru": "Прочитай строку и выведи её длину.",
          "uk": "Прочитай рядок і виведи його довжину."
        },
        "example": "text = \"blue sky\"\nprint(len(text))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "hello"
            ],
            "out": "5"
          },
          {
            "input": [
              "a b"
            ],
            "out": "3"
          },
          {
            "input": [
              ""
            ],
            "out": "0"
          }
        ],
        "features": [
          "call:len"
        ],
        "revision": 1,
        "exampleOut": "8"
      },
      {
        "id": "first-character",
        "title": {
          "en": "The first character",
          "ru": "Первый символ",
          "uk": "Перший символ"
        },
        "learn": {
          "en": "Indexing an empty string raises IndexError. Check it first.",
          "ru": "Индекс пустой строки вызывает IndexError. Сначала проверь строку.",
          "uk": "Індекс порожнього рядка викликає IndexError. Спочатку перевір рядок."
        },
        "instruction": {
          "en": "Read text. Print its first character, or EMPTY for an empty line.",
          "ru": "Прочитай текст. Выведи первый символ либо EMPTY для пустой строки.",
          "uk": "Прочитай текст. Виведи перший символ або EMPTY для порожнього рядка."
        },
        "example": "text = \"tea\"\nif text:\n    print(text[0])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "Python"
            ],
            "out": "P"
          },
          {
            "input": [
              "7"
            ],
            "out": "7"
          },
          {
            "input": [
              ""
            ],
            "out": "EMPTY"
          }
        ],
        "features": [
          "Subscript"
        ],
        "revision": 1,
        "exampleOut": "t"
      },
      {
        "id": "slice-prefix",
        "title": {
          "en": "Take a slice",
          "ru": "Возьми срез",
          "uk": "Візьми зріз"
        },
        "learn": {
          "en": "text[:n] takes up to n characters. A short string is allowed.",
          "ru": "text[:n] берёт до n символов. Короткая строка допустима.",
          "uk": "text[:n] бере до n символів. Короткий рядок допустимий."
        },
        "instruction": {
          "en": "Read text then n ≥ 0. Print the first n characters with a slice.",
          "ru": "Прочитай текст, затем n ≥ 0. Выведи первые n символов срезом.",
          "uk": "Прочитай текст, потім n ≥ 0. Виведи перші n символів зрізом."
        },
        "example": "text = \"garden\"\nprint(text[:4])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "Python",
              "3"
            ],
            "out": "Pyt"
          },
          {
            "input": [
              "hi",
              "8"
            ],
            "out": "hi"
          },
          {
            "input": [
              "hello",
              "0"
            ],
            "out": ""
          }
        ],
        "features": [
          "Slice"
        ],
        "revision": 1,
        "exampleOut": "gard"
      },
      {
        "id": "reverse-text",
        "title": {
          "en": "Reverse text",
          "ru": "Разверни текст",
          "uk": "Розверни текст"
        },
        "learn": {
          "en": "A slice with step -1 walks backwards.",
          "ru": "Срез с шагом -1 проходит строку с конца.",
          "uk": "Зріз із кроком -1 проходить рядок із кінця."
        },
        "instruction": {
          "en": "Read text and print it reversed using a slice.",
          "ru": "Прочитай текст и выведи его в обратном порядке с помощью среза.",
          "uk": "Прочитай текст і виведи його у зворотному порядку за допомогою зрізу."
        },
        "example": "text = \"lamp\"\nprint(text[::-1])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "abc"
            ],
            "out": "cba"
          },
          {
            "input": [
              "a b"
            ],
            "out": "b a"
          },
          {
            "input": [
              ""
            ],
            "out": ""
          }
        ],
        "features": [
          "Slice"
        ],
        "revision": 1,
        "exampleOut": "pmal"
      },
      {
        "id": "split-words",
        "title": {
          "en": "Words become a list",
          "ru": "Слова становятся списком",
          "uk": "Слова стають списком"
        },
        "learn": {
          "en": "split() without an argument handles repeated whitespace and empty lines.",
          "ru": "split() без аргумента учитывает повторные пробелы и пустые строки.",
          "uk": "split() без аргументу враховує повторні пробіли й порожні рядки."
        },
        "instruction": {
          "en": "Read text and print the number of words using split().",
          "ru": "Прочитай текст и выведи число слов через split().",
          "uk": "Прочитай текст і виведи кількість слів через split()."
        },
        "example": "words = \"one   two\".split()\nprint(words)\nprint(len(words))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "  two   words "
            ],
            "out": "2"
          },
          {
            "input": [
              "one"
            ],
            "out": "1"
          },
          {
            "input": [
              "   "
            ],
            "out": "0"
          }
        ],
        "features": [
          "call:len"
        ],
        "revision": 1,
        "exampleOut": "['one', 'two']\n2"
      },
      {
        "id": "join-words",
        "title": {
          "en": "Join prepared words",
          "ru": "Соедини готовые слова",
          "uk": "Поєднай готові слова"
        },
        "learn": {
          "en": "join works on strings, not numbers. The separator is written before .join().",
          "ru": "join соединяет строки, а не числа. Разделитель пишется перед .join().",
          "uk": "join поєднує рядки, а не числа. Роздільник пишеться перед .join()."
        },
        "instruction": {
          "en": "Split the input into words and print them joined with a hyphen.",
          "ru": "Раздели ввод на слова и выведи их через дефис.",
          "uk": "Розділи введене на слова й виведи їх через дефіс."
        },
        "example": "words = [\"sun\", \"moon\"]\nprint(\" / \".join(words))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "red blue"
            ],
            "out": "red-blue"
          },
          {
            "input": [
              " one "
            ],
            "out": "one"
          },
          {
            "input": [
              ""
            ],
            "out": ""
          }
        ],
        "features": [],
        "revision": 1,
        "exampleOut": "sun / moon"
      },
      {
        "id": "parse-numbers",
        "title": {
          "en": "Text numbers become integers",
          "ru": "Числа из текста",
          "uk": "Числа з тексту"
        },
        "learn": {
          "en": "split returns strings. Convert each item with int before adding.",
          "ru": "split возвращает строки. Перед сложением преобразуй каждый элемент через int.",
          "uk": "split повертає рядки. Перед додаванням перетвори кожен елемент через int."
        },
        "instruction": {
          "en": "Read space-separated integers; an empty line is allowed. Print their sum.",
          "ru": "Прочитай целые числа через пробел; строка может быть пустой. Выведи сумму.",
          "uk": "Прочитай цілі числа через пробіл; рядок може бути порожнім. Виведи суму."
        },
        "example": "total = 0\nfor word in \"4 7\".split():\n    total += int(word)\nprint(total)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "2 3 -1"
            ],
            "out": "4"
          },
          {
            "input": [
              "-4 4"
            ],
            "out": "0"
          },
          {
            "input": [
              ""
            ],
            "out": "0"
          }
        ],
        "features": [
          "For"
        ],
        "revision": 1,
        "exampleOut": "11"
      },
      {
        "id": "normalize-sentence",
        "title": {
          "en": "A text pipeline",
          "ru": "Цепочка обработки текста",
          "uk": "Ланцюжок обробки тексту"
        },
        "learn": {
          "en": "Do transformations in order. split then join can normalize internal spacing.",
          "ru": "Выполняй изменения по порядку. split и join могут убрать повторные пробелы внутри.",
          "uk": "Виконуй зміни за порядком. split і join можуть прибрати повторні пробіли всередині."
        },
        "instruction": {
          "en": "Read a sentence. Lowercase it, reduce whitespace between words to one space, and print the result.",
          "ru": "Прочитай предложение. Сделай буквы строчными, оставь по одному пробелу между словами и выведи результат.",
          "uk": "Прочитай речення. Зроби літери малими, залиш по одному пробілу між словами й виведи результат."
        },
        "example": "words = \"red blue green\".split()\nfirst = words[0]\nlast = words[-1]\nprint(first, last)\nprint(\" / \".join(words))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "  HELLO   World "
            ],
            "out": "hello world"
          },
          {
            "input": [
              "ONE"
            ],
            "out": "one"
          },
          {
            "input": [
              "  "
            ],
            "out": ""
          }
        ],
        "features": [],
        "revision": 1,
        "exampleOut": "red green\nred / blue / green"
      }
    ]
  },
  {
    "id": "lists",
    "title": {
      "en": "Lists: collect and transform",
      "ru": "Списки: собирай и изменяй",
      "uk": "Списки: збирай і змінюй"
    },
    "intro": {
      "en": "A list stores several values in order and can change. Start with append, then update, filter and sort. A new list and another name for the same list are different things.",
      "ru": "Список хранит несколько значений по порядку и может изменяться. Начни с append, затем изменяй, отбирай и сортируй. Новый список и ещё одно имя старого списка — разные вещи.",
      "uk": "Список зберігає кілька значень за порядком і може змінюватися. Почни з append, потім змінюй, відбирай і сортуй. Новий список та ще одне ім’я старого списку — різні речі."
    },
    "example": "numbers = [2, 5]\nnumbers.append(8)\ncopy = numbers.copy()\ncopy[0] = 9\nprint(numbers)\nprint(copy)",
    "notes": [
      {
        "en": "append changes numbers to [2, 5, 8]. It returns None, so do not assign its result to numbers.",
        "ru": "append меняет numbers на [2, 5, 8]. Он возвращает None: не присваивай этот результат numbers.",
        "uk": "append змінює numbers на [2, 5, 8]. Він повертає None: не присвоюй цей результат numbers."
      },
      {
        "en": "copy() makes a separate outer list. copy = numbers would share one list.",
        "ru": "copy() создаёт отдельный внешний список. copy = numbers дал бы второе имя того же списка.",
        "uk": "copy() створює окремий зовнішній список. copy = numbers дав би друге ім’я того самого списку."
      },
      {
        "en": "Changing copy[0] leaves numbers[0] equal to 2. Nested values still need care.",
        "ru": "Изменение copy[0] оставляет numbers[0] равным 2. Со вложенными значениями нужна осторожность.",
        "uk": "Зміна copy[0] залишає numbers[0] рівним 2. Із вкладеними значеннями потрібна обережність."
      },
      {
        "en": "Filter into a new list instead of deleting items from the list you are currently traversing.",
        "ru": "При отборе создавай новый список вместо удаления из списка, по которому сейчас идёшь.",
        "uk": "Під час відбору створюй новий список замість видалення зі списку, який зараз обходиш."
      }
    ],
    "tasks": [
      {
        "id": "append-item",
        "title": {
          "en": "Add one item",
          "ru": "Добавь элемент",
          "uk": "Додай елемент"
        },
        "learn": {
          "en": "append(value) adds one item at the end.",
          "ru": "append(value) добавляет элемент в конец.",
          "uk": "append(value) додає елемент у кінець."
        },
        "instruction": {
          "en": "Read a line of integers, then one more integer. Append it and print the list as JSON.",
          "ru": "Прочитай строку целых чисел, затем ещё одно число. Добавь его в конец и выведи список как JSON.",
          "uk": "Прочитай рядок цілих чисел, потім ще одне число. Додай його в кінець і виведи список як JSON."
        },
        "example": "values = [3, 6]\nvalues.append(8)\nprint(values)",
        "starter": "import json\nvalues = []\nfor word in input().split():\n    values.append(int(word))\nnew_value = int(input())\n\n# Add new_value to values, then print JSON.\n",
        "cases": [
          {
            "input": [
              "1 2",
              "3"
            ],
            "out": "[1, 2, 3]"
          },
          {
            "input": [
              "",
              "0"
            ],
            "out": "[0]"
          },
          {
            "input": [
              "-2",
              "5"
            ],
            "out": "[-2, 5]"
          }
        ],
        "features": [],
        "revision": 1,
        "compare": "json",
        "exampleOut": "[3, 6, 8]"
      },
      {
        "id": "list-update",
        "title": {
          "en": "Change an item",
          "ru": "Измени элемент",
          "uk": "Зміни елемент"
        },
        "learn": {
          "en": "Assigning list[index] replaces that item. Valid indices here are supplied.",
          "ru": "Присваивание list[index] заменяет элемент. Здесь индекс всегда допустимый.",
          "uk": "Присвоєння list[index] замінює елемент. Тут індекс завжди допустимий."
        },
        "instruction": {
          "en": "Read a nonempty integer list, index, then value on separate lines. Replace that item; print JSON.",
          "ru": "Прочитай непустой список чисел, индекс, затем значение с разных строк. Замени элемент и выведи JSON.",
          "uk": "Прочитай непорожній список чисел, індекс, потім значення з різних рядків. Заміни елемент і виведи JSON."
        },
        "example": "values = [3, 6]\nvalues[1] = 9\nprint(values)",
        "starter": "import json\nvalues = []\nfor word in input().split():\n    values.append(int(word))\nindex = int(input())\nnew_value = int(input())\n\n# Replace the item and print JSON.\n",
        "cases": [
          {
            "input": [
              "1 2",
              "0",
              "8"
            ],
            "out": "[8, 2]"
          },
          {
            "input": [
              "4",
              "0",
              "0"
            ],
            "out": "[0]"
          },
          {
            "input": [
              "3 5 7",
              "2",
              "-1"
            ],
            "out": "[3, 5, -1]"
          }
        ],
        "features": [
          "Subscript"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "[3, 9]"
      },
      {
        "id": "filter-positive",
        "title": {
          "en": "Keep positive values",
          "ru": "Оставь положительные",
          "uk": "Залиш додатні"
        },
        "learn": {
          "en": "Build a new list. Zero does not satisfy n > 0.",
          "ru": "Собирай новый список. Ноль не подходит под n > 0.",
          "uk": "Збирай новий список. Нуль не підходить під n > 0."
        },
        "instruction": {
          "en": "Read integers separated by spaces. Print a JSON list containing only positive ones, in their original order.",
          "ru": "Прочитай целые числа через пробел. Выведи JSON-список только положительных чисел в исходном порядке.",
          "uk": "Прочитай цілі числа через пробіл. Виведи JSON-список лише додатних чисел у початковому порядку."
        },
        "example": "result = []\nfor n in [-2, 5, 0, 8]:\n    if n > 0:\n        result.append(n)\nprint(result)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "-1 2 0 3"
            ],
            "out": "[2, 3]"
          },
          {
            "input": [
              "0 -2"
            ],
            "out": "[]"
          },
          {
            "input": [
              ""
            ],
            "out": "[]"
          }
        ],
        "features": [
          "For",
          "If"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "[5, 8]"
      },
      {
        "id": "list-comprehension",
        "title": {
          "en": "Build with an expression",
          "ru": "Собери выражением",
          "uk": "Збери виразом"
        },
        "learn": {
          "en": "[expression for item in values] builds a new list. The expression runs for every item.",
          "ru": "[выражение for элемент in values] создаёт новый список. Выражение выполняется для каждого элемента.",
          "uk": "[вираз for елемент in values] створює новий список. Вираз виконується для кожного елемента."
        },
        "instruction": {
          "en": "Use a list comprehension to square all input integers. Print JSON.",
          "ru": "Возведи все введённые целые числа в квадрат через генератор списка. Выведи JSON.",
          "uk": "Піднеси всі введені цілі числа до квадрата через списковий вираз. Виведи JSON."
        },
        "example": "values = [2, 3, 4]\nresult = [n + 10 for n in values]\nprint(result)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "2 -3 0"
            ],
            "out": "[4, 9, 0]"
          },
          {
            "input": [
              "1"
            ],
            "out": "[1]"
          },
          {
            "input": [
              ""
            ],
            "out": "[]"
          }
        ],
        "features": [
          "ListComp"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "[12, 13, 14]"
      },
      {
        "id": "sorted-copy",
        "title": {
          "en": "Sort without changing the source",
          "ru": "Сортировка копии",
          "uk": "Сортування копії"
        },
        "learn": {
          "en": "sorted(values) returns a sorted list; values.sort() changes the original and returns None.",
          "ru": "sorted(values) возвращает отсортированный список; values.sort() меняет исходный и возвращает None.",
          "uk": "sorted(values) повертає відсортований список; values.sort() змінює початковий і повертає None."
        },
        "instruction": {
          "en": "Read integers. Print original then sorted(values), each as JSON on its own line.",
          "ru": "Прочитай числа. Выведи исходный список, затем sorted(values), каждый как JSON с новой строки.",
          "uk": "Прочитай числа. Виведи початковий список, потім sorted(values), кожен як JSON із нового рядка."
        },
        "example": "values = [8, 2, 5]\nordered = sorted(values)\nprint(values)\nprint(ordered)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "3 1 2"
            ],
            "out": "[3, 1, 2]\n[1, 2, 3]"
          },
          {
            "input": [
              "2 2"
            ],
            "out": "[2, 2]\n[2, 2]"
          },
          {
            "input": [
              ""
            ],
            "out": "[]\n[]"
          }
        ],
        "features": [
          "call:sorted"
        ],
        "revision": 1,
        "exampleOut": "[8, 2, 5]\n[2, 5, 8]"
      },
      {
        "id": "numbered-items",
        "title": {
          "en": "Keep index and value",
          "ru": "Индекс и значение",
          "uk": "Індекс і значення"
        },
        "learn": {
          "en": "enumerate(values, start=1) supplies a position and an item together.",
          "ru": "enumerate(values, start=1) даёт позицию и элемент вместе.",
          "uk": "enumerate(values, start=1) дає позицію та елемент разом."
        },
        "instruction": {
          "en": "Read words. Use enumerate starting at 1; print position:word for every word.",
          "ru": "Прочитай слова. Используй enumerate с началом 1; выводи позиция:слово для каждого слова.",
          "uk": "Прочитай слова. Використай enumerate з початком 1; виводь позиція:слово для кожного слова."
        },
        "example": "for index, word in enumerate([\"tea\", \"cake\"], start=1):\n    print(index, word)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "red blue"
            ],
            "out": "1:red\n2:blue"
          },
          {
            "input": [
              "one"
            ],
            "out": "1:one"
          },
          {
            "input": [
              ""
            ],
            "out": ""
          }
        ],
        "features": [
          "call:enumerate"
        ],
        "revision": 1,
        "exampleOut": "1 tea\n2 cake"
      },
      {
        "id": "copy-list",
        "title": {
          "en": "An independent copy",
          "ru": "Независимая копия",
          "uk": "Незалежна копія"
        },
        "learn": {
          "en": "A = B shares one list. B.copy() makes a new outer list.",
          "ru": "A = B даёт два имени одному списку. B.copy() создаёт новый внешний список.",
          "uk": "A = B дає два імені одному списку. B.copy() створює новий зовнішній список."
        },
        "instruction": {
          "en": "Read integer values. Copy them, append 99 only to the copy. Print the original then the copy as JSON lines.",
          "ru": "Прочитай числа. Скопируй список, добавь 99 только в копию. Выведи исходный и копию как строки JSON.",
          "uk": "Прочитай числа. Скопіюй список, додай 99 лише в копію. Виведи початковий та копію як рядки JSON."
        },
        "example": "numbers = [2, 5]\nnumbers.append(8)\ncopy = numbers.copy()\ncopy[0] = 9\nprint(numbers)\nprint(copy)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "1 2"
            ],
            "out": "[1, 2]\n[1, 2, 99]"
          },
          {
            "input": [
              ""
            ],
            "out": "[]\n[99]"
          },
          {
            "input": [
              "99"
            ],
            "out": "[99]\n[99, 99]"
          }
        ],
        "features": [],
        "revision": 1,
        "exampleOut": "[2, 5, 8]\n[9, 5, 8]"
      },
      {
        "id": "list-mini-project",
        "title": {
          "en": "A score report",
          "ru": "Отчёт по результатам",
          "uk": "Звіт за результатами"
        },
        "learn": {
          "en": "Combine filtering, counting and a sum. Handle an empty result before division.",
          "ru": "Соедини отбор, подсчёт и сумму. Перед делением обработай пустой результат.",
          "uk": "Поєднай відбір, підрахунок і суму. Перед діленням оброби порожній результат."
        },
        "instruction": {
          "en": "Read integer scores. Keep 0 through 100 inclusive. Print their count and sum on one line.",
          "ru": "Прочитай целые баллы. Оставь значения от 0 до 100 включительно. Выведи их количество и сумму через пробел.",
          "uk": "Прочитай цілі бали. Залиш значення від 0 до 100 включно. Виведи їхню кількість і суму через пробіл."
        },
        "example": "numbers = [2, 5]\nnumbers.append(8)\ncopy = numbers.copy()\ncopy[0] = 9\nprint(numbers)\nprint(copy)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "-1 0 60 100 101"
            ],
            "out": "3 160"
          },
          {
            "input": [
              "-5 120"
            ],
            "out": "0 0"
          },
          {
            "input": [
              ""
            ],
            "out": "0 0"
          }
        ],
        "features": [],
        "revision": 1,
        "exampleOut": "[2, 5, 8]\n[9, 5, 8]"
      }
    ]
  },
  {
    "id": "mappings",
    "title": {
      "en": "Dictionaries, sets and records",
      "ru": "Словари, множества и записи",
      "uk": "Словники, множини й записи"
    },
    "intro": {
      "en": "A dictionary finds a value by a key. A set keeps unique values. Use these structures when the question is about a name, a count, or membership rather than a position.",
      "ru": "Словарь находит значение по ключу. Множество хранит уникальные значения. Используй их, когда вопрос об имени, количестве или наличии, а не о позиции.",
      "uk": "Словник знаходить значення за ключем. Множина зберігає унікальні значення. Використовуй їх, коли питання про ім’я, кількість чи наявність, а не про позицію."
    },
    "example": "counts = {}\nfor word in [\"tea\", \"tea\", \"cake\"]:\n    counts[word] = counts.get(word, 0) + 1\nprint(counts)",
    "notes": [
      {
        "en": "The empty dictionary starts with no keys.",
        "ru": "Пустой словарь начинает без ключей.",
        "uk": "Порожній словник починає без ключів."
      },
      {
        "en": "get(word, 0) returns the current count, or 0 when the word is new.",
        "ru": "get(word, 0) возвращает текущий счётчик либо 0 для нового слова.",
        "uk": "get(word, 0) повертає поточний лічильник або 0 для нового слова."
      },
      {
        "en": "After tea, tea, cake the counts are tea: 2 and cake: 1.",
        "ru": "После tea, tea, cake счётчики равны tea: 2 и cake: 1.",
        "uk": "Після tea, tea, cake лічильники дорівнюють tea: 2 та cake: 1."
      },
      {
        "en": "A set has no meaningful display order; sort it when the task requires stable output.",
        "ru": "У множества нет значимого порядка вывода; сортируй его для стабильного результата.",
        "uk": "Множина не має значущого порядку виведення; сортуй її для стабільного результату."
      }
    ],
    "tasks": [
      {
        "id": "make-record",
        "title": {
          "en": "Create a record",
          "ru": "Создай запись",
          "uk": "Створи запис"
        },
        "learn": {
          "en": "Dictionary literals use key: value pairs inside braces.",
          "ru": "В словаре внутри фигурных скобок стоят пары ключ: значение.",
          "uk": "У словнику всередині фігурних дужок стоять пари ключ: значення."
        },
        "instruction": {
          "en": "Read name then integer age. Print a JSON object with keys name and age.",
          "ru": "Прочитай имя, затем целый возраст. Выведи JSON-объект с ключами name и age.",
          "uk": "Прочитай ім’я, потім цілий вік. Виведи JSON-об’єкт із ключами name та age."
        },
        "example": "import json\nrecord = {\"title\": \"Book\", \"pages\": 20}\nprint(json.dumps(record))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "Ada",
              "20"
            ],
            "out": "{\"name\": \"Ada\", \"age\": 20}"
          },
          {
            "input": [
              "Li",
              "0"
            ],
            "out": "{\"name\": \"Li\", \"age\": 0}"
          },
          {
            "input": [
              "Sam",
              "99"
            ],
            "out": "{\"name\": \"Sam\", \"age\": 99}"
          }
        ],
        "features": [
          "Dict"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "{\"title\": \"Book\", \"pages\": 20}"
      },
      {
        "id": "lookup-default",
        "title": {
          "en": "Look up safely",
          "ru": "Найди без ошибки",
          "uk": "Знайди без помилки"
        },
        "learn": {
          "en": "d[key] fails for a missing key; d.get(key, default) supplies a fallback.",
          "ru": "d[key] вызывает ошибку при отсутствии ключа; d.get(key, запасное) даёт запасное значение.",
          "uk": "d[key] викликає помилку за відсутності ключа; d.get(key, запасне) дає запасне значення."
        },
        "instruction": {
          "en": "Read a JSON dictionary of prices, then an item name. Print its price or 0 if missing.",
          "ru": "Прочитай JSON-словарь цен, затем название товара. Выведи цену либо 0, если товара нет.",
          "uk": "Прочитай JSON-словник цін, потім назву товару. Виведи ціну або 0, якщо товару немає."
        },
        "example": "prices = {\"tea\": 4}\nprint(prices.get(\"tea\", 0))\nprint(prices.get(\"bread\", 0))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "{\"tea\": 5}",
              "tea"
            ],
            "out": "5"
          },
          {
            "input": [
              "{\"tea\": 5}",
              "cake"
            ],
            "out": "0"
          },
          {
            "input": [
              "{}",
              "tea"
            ],
            "out": "0"
          }
        ],
        "features": [],
        "revision": 1,
        "exampleOut": "4\n0"
      },
      {
        "id": "update-count",
        "title": {
          "en": "Update a stored count",
          "ru": "Измени счётчик",
          "uk": "Зміни лічильник"
        },
        "learn": {
          "en": "Read the previous value before replacing it with the incremented one.",
          "ru": "Перед заменой возьми старое значение и прибавь к нему.",
          "uk": "Перед заміною візьми старе значення й додай до нього."
        },
        "instruction": {
          "en": "Read a JSON dictionary of counts, then a key. Increase that key by one, starting from 0 if absent. Print JSON.",
          "ru": "Прочитай JSON-словарь счётчиков, затем ключ. Увеличь его счётчик на 1, начиная с 0 при отсутствии. Выведи JSON.",
          "uk": "Прочитай JSON-словник лічильників, потім ключ. Збільш його лічильник на 1, починаючи з 0 за відсутності. Виведи JSON."
        },
        "example": "counts = {}\nfor word in [\"tea\", \"tea\", \"cake\"]:\n    counts[word] = counts.get(word, 0) + 1\nprint(counts)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "{\"a\": 2}",
              "a"
            ],
            "out": "{\"a\": 3}"
          },
          {
            "input": [
              "{}",
              "x"
            ],
            "out": "{\"x\": 1}"
          },
          {
            "input": [
              "{\"a\": 1}",
              "b"
            ],
            "out": "{\"a\": 1, \"b\": 1}"
          }
        ],
        "features": [],
        "revision": 1,
        "compare": "json",
        "exampleOut": "{'tea': 2, 'cake': 1}"
      },
      {
        "id": "word-counts",
        "title": {
          "en": "Count repeated words",
          "ru": "Подсчитай повторения слов",
          "uk": "Порахуй повторення слів"
        },
        "learn": {
          "en": "Use a dictionary entry as a separate counter for each word.",
          "ru": "Запись словаря служит отдельным счётчиком каждого слова.",
          "uk": "Запис словника слугує окремим лічильником кожного слова."
        },
        "instruction": {
          "en": "Read lowercase words. Print a JSON dictionary of their counts. Empty input gives {}.",
          "ru": "Прочитай слова в нижнем регистре. Выведи JSON-словарь частот. Пустой ввод даёт {}.",
          "uk": "Прочитай слова малими літерами. Виведи JSON-словник частот. Порожній ввід дає {}."
        },
        "example": "counts = {}\nfor word in [\"tea\", \"tea\", \"cake\"]:\n    counts[word] = counts.get(word, 0) + 1\nprint(counts)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "tea tea cake"
            ],
            "out": "{\"tea\": 2, \"cake\": 1}"
          },
          {
            "input": [
              "x x x"
            ],
            "out": "{\"x\": 3}"
          },
          {
            "input": [
              ""
            ],
            "out": "{}"
          }
        ],
        "features": [
          "For"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "{'tea': 2, 'cake': 1}"
      },
      {
        "id": "unique-values",
        "title": {
          "en": "Keep unique values",
          "ru": "Оставь уникальные значения",
          "uk": "Залиш унікальні значення"
        },
        "learn": {
          "en": "set removes duplicates. sorted produces a predictable order.",
          "ru": "set убирает повторы. sorted даёт предсказуемый порядок.",
          "uk": "set прибирає повтори. sorted дає передбачуваний порядок."
        },
        "instruction": {
          "en": "Read integer values. Print sorted unique values as a JSON list.",
          "ru": "Прочитай целые числа. Выведи отсортированные уникальные значения как JSON-список.",
          "uk": "Прочитай цілі числа. Виведи відсортовані унікальні значення як JSON-список."
        },
        "example": "values = [3, 3, 1]\nprint(sorted(set(values)))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "3 1 3 2"
            ],
            "out": "[1, 2, 3]"
          },
          {
            "input": [
              "-1 -1"
            ],
            "out": "[-1]"
          },
          {
            "input": [
              ""
            ],
            "out": "[]"
          }
        ],
        "features": [],
        "revision": 1,
        "compare": "json",
        "exampleOut": "[1, 3]"
      },
      {
        "id": "set-intersection",
        "title": {
          "en": "Find common values",
          "ru": "Найди общие значения",
          "uk": "Знайди спільні значення"
        },
        "learn": {
          "en": "a & b contains only items found in both sets.",
          "ru": "a & b содержит только элементы из обоих множеств.",
          "uk": "a & b містить лише елементи з обох множин."
        },
        "instruction": {
          "en": "Read two lines of words. Print their common unique words, alphabetically sorted, as JSON.",
          "ru": "Прочитай две строки слов. Выведи общие уникальные слова по алфавиту как JSON.",
          "uk": "Прочитай два рядки слів. Виведи спільні унікальні слова за абеткою як JSON."
        },
        "example": "a = {\"red\", \"blue\"}\nb = {\"blue\", \"green\"}\nprint(sorted(a & b))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "a b b",
              "b c"
            ],
            "out": "[\"b\"]"
          },
          {
            "input": [
              "x",
              "y"
            ],
            "out": "[]"
          },
          {
            "input": [
              "",
              ""
            ],
            "out": "[]"
          }
        ],
        "features": [
          "BitAnd"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "['blue']"
      },
      {
        "id": "group-records",
        "title": {
          "en": "Select records",
          "ru": "Отбери записи",
          "uk": "Відбери записи"
        },
        "learn": {
          "en": "A list of dictionaries represents multiple records. Read a field through its key.",
          "ru": "Список словарей хранит несколько записей. Поле читают по ключу.",
          "uk": "Список словників зберігає кілька записів. Поле читають за ключем."
        },
        "instruction": {
          "en": "Read a JSON list of people with name and age. Print a JSON list of names whose age is at least 18, preserving order.",
          "ru": "Прочитай JSON-список людей с name и age. Выведи JSON-список имён тех, кому не меньше 18, сохраняя порядок.",
          "uk": "Прочитай JSON-список людей із name та age. Виведи JSON-список імен тих, кому не менше 18, зберігаючи порядок."
        },
        "example": "counts = {}\nfor word in [\"tea\", \"tea\", \"cake\"]:\n    counts[word] = counts.get(word, 0) + 1\nprint(counts)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[{\"name\": \"A\", \"age\": 17}, {\"name\": \"B\", \"age\": 18}]"
            ],
            "out": "[\"B\"]"
          },
          {
            "input": [
              "[]"
            ],
            "out": "[]"
          },
          {
            "input": [
              "[{\"name\": \"C\", \"age\": 30}]"
            ],
            "out": "[\"C\"]"
          }
        ],
        "features": [],
        "revision": 1,
        "compare": "json",
        "exampleOut": "{'tea': 2, 'cake': 1}"
      },
      {
        "id": "inventory-report",
        "title": {
          "en": "An inventory report",
          "ru": "Отчёт по запасам",
          "uk": "Звіт про запаси"
        },
        "learn": {
          "en": "Combine records with a sum and a separate selection.",
          "ru": "Соедини записи, сумму и отдельный отбор.",
          "uk": "Поєднай записи, суму й окремий відбір."
        },
        "instruction": {
          "en": "Read JSON records with name and quantity (nonnegative). Print total quantity, then a sorted JSON list of names with quantity 0.",
          "ru": "Прочитай JSON-записи с name и quantity (неотрицательное). Выведи общее количество, затем отсортированный JSON-список названий с quantity 0.",
          "uk": "Прочитай JSON-записи з name та quantity (невід’ємне). Виведи загальну кількість, потім відсортований JSON-список назв із quantity 0."
        },
        "example": "counts = {}\nfor word in [\"tea\", \"tea\", \"cake\"]:\n    counts[word] = counts.get(word, 0) + 1\nprint(counts)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[{\"name\": \"tea\", \"quantity\": 3}, {\"name\": \"cake\", \"quantity\": 0}]"
            ],
            "out": "3\n[\"cake\"]"
          },
          {
            "input": [
              "[]"
            ],
            "out": "0\n[]"
          },
          {
            "input": [
              "[{\"name\": \"z\", \"quantity\": 0}, {\"name\": \"a\", \"quantity\": 0}]"
            ],
            "out": "0\n[\"a\", \"z\"]"
          }
        ],
        "features": [],
        "revision": 1,
        "exampleOut": "{'tea': 2, 'cake': 1}"
      }
    ]
  },
  {
    "id": "files-errors",
    "title": {
      "en": "Files, JSON and recoverable errors",
      "ru": "Файлы, JSON и обработка ошибок",
      "uk": "Файли, JSON та обробка помилок"
    },
    "intro": {
      "en": "Programs need data after they stop. Files keep text; JSON turns lists and dictionaries into text. Start with one file, then handle the specific error that can occur.",
      "ru": "Программе нужны данные после остановки. Файл хранит текст; JSON превращает списки и словари в текст. Начни с одного файла, затем обработай конкретную возможную ошибку.",
      "uk": "Програмі потрібні дані після зупинки. Файл зберігає текст; JSON перетворює списки й словники на текст. Почни з одного файлу, потім оброби конкретну можливу помилку."
    },
    "example": "import json\nwith open(\"settings.json\", \"w\", encoding=\"utf8\") as file:\n    json.dump({\"volume\": 3}, file)\nwith open(\"settings.json\", encoding=\"utf8\") as file:\n    settings = json.load(file)\nprint(settings[\"volume\"])",
    "notes": [
      {
        "en": "import json makes the standard-library module available. You do not install it.",
        "ru": "import json подключает модуль стандартной библиотеки. Устанавливать его не нужно.",
        "uk": "import json підключає модуль стандартної бібліотеки. Встановлювати його не потрібно."
      },
      {
        "en": "The w mode replaces a file. The a mode appends. Reading is the default mode.",
        "ru": "Режим w заменяет файл. Режим a дописывает. По умолчанию файл читается.",
        "uk": "Режим w замінює файл. Режим a дописує. Типово файл читається."
      },
      {
        "en": "with closes the file when the block finishes, even after an exception.",
        "ru": "with закрывает файл после блока, даже при исключении.",
        "uk": "with закриває файл після блоку, навіть за винятку."
      },
      {
        "en": "Exercise files are temporary and reset for every test. Your code and completion are saved separately.",
        "ru": "Файлы упражнений временные и создаются заново для каждого теста. Код и прохождение сохраняются отдельно.",
        "uk": "Файли вправ тимчасові й створюються заново для кожного тесту. Код і проходження зберігаються окремо."
      }
    ],
    "tasks": [
      {
        "id": "json-read",
        "title": {
          "en": "Read JSON data",
          "ru": "Прочитай JSON",
          "uk": "Прочитай JSON"
        },
        "learn": {
          "en": "json.loads reads JSON text into Python values. JSON true becomes Python True.",
          "ru": "json.loads превращает JSON-текст в значения Python. JSON true становится Python True.",
          "uk": "json.loads перетворює JSON-текст на значення Python. JSON true стає Python True."
        },
        "instruction": {
          "en": "Read a JSON object containing quantity and price. Print their product.",
          "ru": "Прочитай JSON-объект с quantity и price. Выведи произведение.",
          "uk": "Прочитай JSON-об’єкт із quantity та price. Виведи добуток."
        },
        "example": "import json\npoint = json.loads('{\"x\": 4}')\nprint(point[\"x\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "{\"quantity\": 3, \"price\": 8}"
            ],
            "out": "24"
          },
          {
            "input": [
              "{\"quantity\": 0, \"price\": 5}"
            ],
            "out": "0"
          },
          {
            "input": [
              "{\"quantity\": 2, \"price\": 11}"
            ],
            "out": "22"
          }
        ],
        "features": [
          "call:json.loads"
        ],
        "revision": 1,
        "exampleOut": "4"
      },
      {
        "id": "read-file",
        "title": {
          "en": "Read a supplied file",
          "ru": "Прочитай готовый файл",
          "uk": "Прочитай готовий файл"
        },
        "learn": {
          "en": "The file fixture is already there before your code starts. read() returns its whole text.",
          "ru": "Файл из условия уже существует перед запуском. read() возвращает весь текст.",
          "uk": "Файл з умови вже існує перед запуском. read() повертає весь текст."
        },
        "instruction": {
          "en": "Open note.txt with encoding=\"utf8\" and print its text without adding a newline. No input() is needed.",
          "ru": "Открой note.txt с encoding=\"utf8\" и выведи текст без добавления новой строки. input() не нужен.",
          "uk": "Відкрий note.txt з encoding=\"utf8\" і виведи текст без додавання нового рядка. input() не потрібен."
        },
        "example": "import json\nwith open(\"settings.json\", \"w\", encoding=\"utf8\") as file:\n    json.dump({\"volume\": 3}, file)\nwith open(\"settings.json\", encoding=\"utf8\") as file:\n    settings = json.load(file)\nprint(settings[\"volume\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "hello",
            "files": {
              "note.txt": "hello"
            }
          },
          {
            "input": [],
            "out": "one\ntwo",
            "files": {
              "note.txt": "one\ntwo"
            }
          },
          {
            "input": [],
            "out": "",
            "files": {
              "note.txt": ""
            }
          }
        ],
        "features": [
          "With",
          "call:open"
        ],
        "revision": 1,
        "exampleOut": "3"
      },
      {
        "id": "write-file",
        "title": {
          "en": "Save text to a file",
          "ru": "Сохрани текст в файл",
          "uk": "Збережи текст у файл"
        },
        "learn": {
          "en": "write(text) writes text. The checker also reads the saved file, so printing alone is insufficient.",
          "ru": "write(text) записывает текст. Проверка также читает сохранённый файл: одного print недостаточно.",
          "uk": "write(text) записує текст. Перевірка також читає збережений файл: одного print недостатньо."
        },
        "instruction": {
          "en": "Read one line. Save exactly that text to result.txt using with, then print SAVED.",
          "ru": "Прочитай строку. Сохрани в result.txt ровно этот текст через with, затем выведи SAVED.",
          "uk": "Прочитай рядок. Збережи в result.txt саме цей текст через with, потім виведи SAVED."
        },
        "example": "import json\nwith open(\"settings.json\", \"w\", encoding=\"utf8\") as file:\n    json.dump({\"volume\": 3}, file)\nwith open(\"settings.json\", encoding=\"utf8\") as file:\n    settings = json.load(file)\nprint(settings[\"volume\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "hello"
            ],
            "out": "SAVED",
            "written": {
              "result.txt": "hello"
            }
          },
          {
            "input": [
              "a b"
            ],
            "out": "SAVED",
            "written": {
              "result.txt": "a b"
            }
          },
          {
            "input": [
              ""
            ],
            "out": "SAVED",
            "written": {
              "result.txt": ""
            }
          }
        ],
        "features": [
          "With",
          "call:open"
        ],
        "revision": 1,
        "exampleOut": "3"
      },
      {
        "id": "append-file",
        "title": {
          "en": "Append without replacing",
          "ru": "Дополни без замены",
          "uk": "Доповни без заміни"
        },
        "learn": {
          "en": "The a mode keeps old text. Add separators yourself when needed.",
          "ru": "Режим a сохраняет старый текст. Разделители добавляй самостоятельно.",
          "uk": "Режим a зберігає старий текст. Роздільники додавай самостійно."
        },
        "instruction": {
          "en": "Read a word. Append word + a newline to log.txt; then print the entire file without an extra newline.",
          "ru": "Прочитай слово. Допиши слово и перевод строки в log.txt; затем выведи весь файл без лишнего перевода строки.",
          "uk": "Прочитай слово. Допиши слово та переведення рядка в log.txt; потім виведи весь файл без зайвого переведення рядка."
        },
        "example": "import json\nwith open(\"settings.json\", \"w\", encoding=\"utf8\") as file:\n    json.dump({\"volume\": 3}, file)\nwith open(\"settings.json\", encoding=\"utf8\") as file:\n    settings = json.load(file)\nprint(settings[\"volume\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "new"
            ],
            "out": "old\nnew",
            "files": {
              "log.txt": "old\n"
            },
            "written": {
              "log.txt": "old\nnew\n"
            }
          },
          {
            "input": [
              "x"
            ],
            "out": "x",
            "files": {
              "log.txt": ""
            },
            "written": {
              "log.txt": "x\n"
            }
          },
          {
            "input": [
              "b"
            ],
            "out": "a\nb",
            "files": {
              "log.txt": "a\n"
            },
            "written": {
              "log.txt": "a\nb\n"
            }
          }
        ],
        "features": [
          "With"
        ],
        "revision": 1,
        "exampleOut": "3"
      },
      {
        "id": "catch-value-error",
        "title": {
          "en": "Recover from invalid numbers",
          "ru": "Обработай неверное число",
          "uk": "Оброби неправильне число"
        },
        "learn": {
          "en": "try runs an operation; except ValueError handles invalid numeric text. Catch the specific expected error.",
          "ru": "try выполняет действие; except ValueError обрабатывает неправильную запись числа. Лови ожидаемую конкретную ошибку.",
          "uk": "try виконує дію; except ValueError обробляє неправильний запис числа. Лови очікувану конкретну помилку."
        },
        "instruction": {
          "en": "Read text. Convert to int and print twice its value. If conversion raises ValueError, print INVALID.",
          "ru": "Прочитай текст. Преобразуй в int и выведи удвоенное число. При ValueError выведи INVALID.",
          "uk": "Прочитай текст. Перетвори на int і виведи подвоєне число. За ValueError виведи INVALID."
        },
        "example": "try:\n    number = int(\"oops\")\nexcept ValueError:\n    print(\"Please enter an integer\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "12"
            ],
            "out": "24"
          },
          {
            "input": [
              "oops"
            ],
            "out": "INVALID"
          },
          {
            "input": [
              "3.5"
            ],
            "out": "INVALID"
          },
          {
            "input": [
              "-2"
            ],
            "out": "-4"
          }
        ],
        "features": [
          "Try",
          "ExceptHandler"
        ],
        "revision": 1,
        "exampleOut": "Please enter an integer"
      },
      {
        "id": "missing-file",
        "title": {
          "en": "A missing file",
          "ru": "Отсутствующий файл",
          "uk": "Відсутній файл"
        },
        "learn": {
          "en": "FileNotFoundError is different from malformed file content. Handle the missing-file case alone.",
          "ru": "FileNotFoundError отличается от неправильного содержимого файла. Обработай только отсутствие файла.",
          "uk": "FileNotFoundError відрізняється від неправильного вмісту файлу. Оброби лише відсутність файлу."
        },
        "instruction": {
          "en": "Try to read config.txt. Print its text, or DEFAULT if the file does not exist.",
          "ru": "Попробуй прочитать config.txt. Выведи его текст либо DEFAULT, если файла нет.",
          "uk": "Спробуй прочитати config.txt. Виведи його текст або DEFAULT, якщо файлу немає."
        },
        "example": "try:\n    with open(\"missing-example.txt\", encoding=\"utf8\") as file:\n        print(file.read())\nexcept FileNotFoundError:\n    print(\"Use default\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "dark",
            "files": {
              "config.txt": "dark"
            }
          },
          {
            "input": [],
            "out": "DEFAULT"
          },
          {
            "input": [],
            "out": "",
            "files": {
              "config.txt": ""
            }
          }
        ],
        "features": [
          "Try",
          "With"
        ],
        "revision": 1,
        "exampleOut": "Use default"
      },
      {
        "id": "json-file",
        "title": {
          "en": "Load structured file data",
          "ru": "Прочитай данные из файла",
          "uk": "Прочитай дані з файлу"
        },
        "learn": {
          "en": "json.load reads a file object; json.loads reads a string.",
          "ru": "json.load читает файловый объект; json.loads читает строку.",
          "uk": "json.load читає файловий об’єкт; json.loads читає рядок."
        },
        "instruction": {
          "en": "Read scores.json, a JSON list of integers. Print count and sum on one line.",
          "ru": "Прочитай scores.json — JSON-список целых чисел. Выведи количество и сумму через пробел.",
          "uk": "Прочитай scores.json — JSON-список цілих чисел. Виведи кількість і суму через пробіл."
        },
        "example": "import json\nwith open(\"settings.json\", \"w\", encoding=\"utf8\") as file:\n    json.dump({\"volume\": 3}, file)\nwith open(\"settings.json\", encoding=\"utf8\") as file:\n    settings = json.load(file)\nprint(settings[\"volume\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "3 12",
            "files": {
              "scores.json": "[2,4,6]"
            }
          },
          {
            "input": [],
            "out": "0 0",
            "files": {
              "scores.json": "[]"
            }
          },
          {
            "input": [],
            "out": "2 0",
            "files": {
              "scores.json": "[-3,3]"
            }
          }
        ],
        "features": [
          "call:json.load",
          "With"
        ],
        "revision": 1,
        "exampleOut": "3"
      },
      {
        "id": "save-settings",
        "title": {
          "en": "A settings round trip",
          "ru": "Сохранение настроек",
          "uk": "Збереження налаштувань"
        },
        "learn": {
          "en": "A round trip writes data and reads it again. Compare values rather than the spacing in JSON text.",
          "ru": "Полный круг — записать данные и прочитать обратно. Сравнивай значения, а не пробелы JSON-текста.",
          "uk": "Повне коло — записати дані й прочитати назад. Порівнюй значення, а не пробіли JSON-тексту."
        },
        "instruction": {
          "en": "Read JSON settings. Save them to settings.json with json.dump, read with json.load, then print the theme field or system.",
          "ru": "Прочитай JSON-настройки. Сохрани в settings.json через json.dump, прочитай через json.load и выведи theme либо system.",
          "uk": "Прочитай JSON-налаштування. Збережи в settings.json через json.dump, прочитай через json.load і виведи theme або system."
        },
        "example": "import json\nwith open(\"settings.json\", \"w\", encoding=\"utf8\") as file:\n    json.dump({\"volume\": 3}, file)\nwith open(\"settings.json\", encoding=\"utf8\") as file:\n    settings = json.load(file)\nprint(settings[\"volume\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "{\"theme\":\"dark\"}"
            ],
            "out": "dark"
          },
          {
            "input": [
              "{}"
            ],
            "out": "system"
          },
          {
            "input": [
              "{\"theme\":\"light\",\"size\":2}"
            ],
            "out": "light"
          }
        ],
        "features": [
          "call:json.dump",
          "call:json.load"
        ],
        "revision": 1,
        "exampleOut": "3"
      }
    ]
  },
  {
    "id": "modules-library",
    "title": {
      "en": "Modules and standard tools",
      "ru": "Модули и стандартные инструменты",
      "uk": "Модулі й стандартні інструменти"
    },
    "intro": {
      "en": "A module is a file whose names can be imported. The standard library already includes many useful tools. Import only what your program needs; learn package installation later in the local-work guide.",
      "ru": "Модуль — файл, имена из которого можно импортировать. В стандартной библиотеке уже много полезных инструментов. Подключай нужное; установку пакетов разберём в руководстве для компьютера.",
      "uk": "Модуль — файл, імена з якого можна імпортувати. У стандартній бібліотеці вже багато корисних інструментів. Підключай потрібне; встановлення пакетів розберемо в посібнику для комп’ютера."
    },
    "example": "from math import ceil\nfrom decimal import Decimal\nprint(ceil(7 / 3))\nprint(Decimal(\"0.1\") + Decimal(\"0.2\"))",
    "notes": [
      {
        "en": "from math import ceil imports one name; import math would require math.ceil.",
        "ru": "from math import ceil подключает одно имя; после import math пришлось бы писать math.ceil.",
        "uk": "from math import ceil підключає одне ім’я; після import math довелося б писати math.ceil."
      },
      {
        "en": "ceil rounds upward, so 7/3 needs 3 groups.",
        "ru": "ceil округляет вверх: для 7/3 нужно 3 группы.",
        "uk": "ceil округлює вгору: для 7/3 потрібно 3 групи."
      },
      {
        "en": "Decimal is built from text here to preserve the decimal values exactly.",
        "ru": "Decimal создаётся из текста, чтобы точно сохранить десятичные значения.",
        "uk": "Decimal створюється з тексту, щоб точно зберегти десяткові значення."
      },
      {
        "en": "Supplied helper modules and files reset for each case; their source is visible beside the task.",
        "ru": "Готовые модули и файлы создаются заново для каждого теста; их код виден рядом с заданием.",
        "uk": "Готові модулі й файли створюються заново для кожного тесту; їхній код видно поруч із завданням."
      }
    ],
    "tasks": [
      {
        "id": "import-math",
        "title": {
          "en": "Use a standard module",
          "ru": "Подключи стандартный модуль",
          "uk": "Підключи стандартний модуль"
        },
        "learn": {
          "en": "math.isqrt returns the integer square root, without float rounding.",
          "ru": "math.isqrt возвращает целую часть квадратного корня без округления float.",
          "uk": "math.isqrt повертає цілу частину квадратного кореня без округлення float."
        },
        "instruction": {
          "en": "Read a nonnegative integer. Import math and print math.isqrt(n).",
          "ru": "Прочитай неотрицательное целое число. Подключи math и выведи math.isqrt(n).",
          "uk": "Прочитай невід’ємне ціле число. Підключи math і виведи math.isqrt(n)."
        },
        "example": "import math\nprint(math.gcd(12, 8))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "16"
            ],
            "out": "4"
          },
          {
            "input": [
              "20"
            ],
            "out": "4"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          }
        ],
        "features": [
          "Import",
          "call:math.isqrt"
        ],
        "revision": 1,
        "exampleOut": "4"
      },
      {
        "id": "import-helper",
        "title": {
          "en": "Import a supplied function",
          "ru": "Импорт готовой функции",
          "uk": "Імпорт готової функції"
        },
        "learn": {
          "en": "from module import name makes that name available directly.",
          "ru": "from модуль import имя делает это имя доступным напрямую.",
          "uk": "from модуль import ім’я робить це ім’я доступним безпосередньо."
        },
        "instruction": {
          "en": "The supplied pricing module has add_tax(total), adding 7. Import that function; read total and print its result.",
          "ru": "В готовом модуле pricing функция add_tax(total) прибавляет 7. Импортируй её, прочитай total и выведи результат.",
          "uk": "У готовому модулі pricing функція add_tax(total) додає 7. Імпортуй її, прочитай total та виведи результат."
        },
        "example": "from math import ceil\nfrom decimal import Decimal\nprint(ceil(7 / 3))\nprint(Decimal(\"0.1\") + Decimal(\"0.2\"))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "10"
            ],
            "out": "17",
            "modules": {
              "pricing": "def add_tax(total):\n    return total + 7"
            }
          },
          {
            "input": [
              "0"
            ],
            "out": "7",
            "modules": {
              "pricing": "def add_tax(total):\n    return total + 7"
            }
          },
          {
            "input": [
              "20"
            ],
            "out": "27",
            "modules": {
              "pricing": "def add_tax(total):\n    return total + 7"
            }
          }
        ],
        "features": [
          "ImportFrom",
          "call:add_tax"
        ],
        "revision": 1,
        "exampleOut": "3\n0.3"
      },
      {
        "id": "decimal-money",
        "title": {
          "en": "Exact decimal amounts",
          "ru": "Точные десятичные суммы",
          "uk": "Точні десяткові суми"
        },
        "learn": {
          "en": "Binary floats cannot exactly represent every decimal fraction. Decimal from text suits this calculation.",
          "ru": "Двоичный float не представляет точно все десятичные дроби. Здесь подходит Decimal из текста.",
          "uk": "Двійковий float не представляє точно всі десяткові дроби. Тут підходить Decimal із тексту."
        },
        "instruction": {
          "en": "Read decimal price, then integer quantity. Use Decimal and print their product with exactly two decimal places.",
          "ru": "Прочитай десятичную цену, затем целое количество. Используй Decimal и выведи произведение с двумя знаками после точки.",
          "uk": "Прочитай десяткову ціну, потім цілу кількість. Використай Decimal і виведи добуток із двома знаками після крапки."
        },
        "example": "from math import ceil\nfrom decimal import Decimal\nprint(ceil(7 / 3))\nprint(Decimal(\"0.1\") + Decimal(\"0.2\"))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "0.10",
              "3"
            ],
            "out": "0.30"
          },
          {
            "input": [
              "12.50",
              "2"
            ],
            "out": "25.00"
          },
          {
            "input": [
              "5",
              "0"
            ],
            "out": "0.00"
          }
        ],
        "features": [
          "call:Decimal"
        ],
        "revision": 1,
        "exampleOut": "3\n0.3"
      },
      {
        "id": "date-distance",
        "title": {
          "en": "Dates instead of guesses",
          "ru": "Даты без догадок",
          "uk": "Дати без здогадів"
        },
        "learn": {
          "en": "date.fromisoformat reads YYYY-MM-DD. Subtraction returns a timedelta whose days field is an integer.",
          "ru": "date.fromisoformat читает ГГГГ-ММ-ДД. Разность даёт timedelta с целым полем days.",
          "uk": "date.fromisoformat читає РРРР-ММ-ДД. Різниця дає timedelta з цілим полем days."
        },
        "instruction": {
          "en": "Read two ISO dates. Print the number of days from the first date to the second; it may be negative.",
          "ru": "Прочитай две ISO-даты. Выведи число дней от первой до второй; оно может быть отрицательным.",
          "uk": "Прочитай дві ISO-дати. Виведи кількість днів від першої до другої; вона може бути від’ємною."
        },
        "example": "from datetime import date\nstart = date.fromisoformat(\"2024-01-01\")\nend = date.fromisoformat(\"2024-01-04\")\nprint((end - start).days)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "2024-02-28",
              "2024-03-01"
            ],
            "out": "2"
          },
          {
            "input": [
              "2025-01-01",
              "2025-01-01"
            ],
            "out": "0"
          },
          {
            "input": [
              "2025-01-03",
              "2025-01-01"
            ],
            "out": "-2"
          }
        ],
        "features": [],
        "revision": 1,
        "exampleOut": "3"
      },
      {
        "id": "counter-tool",
        "title": {
          "en": "Use Counter",
          "ru": "Используй Counter",
          "uk": "Використай Counter"
        },
        "learn": {
          "en": "Counter is a standard dictionary-like counting tool. Missing counts are zero.",
          "ru": "Counter — стандартный инструмент подсчёта, похожий на словарь. Отсутствующие счётчики равны нулю.",
          "uk": "Counter — стандартний засіб підрахунку, схожий на словник. Відсутні лічильники дорівнюють нулю."
        },
        "instruction": {
          "en": "Read words then one query word. Use collections.Counter to print that word’s count.",
          "ru": "Прочитай слова, затем искомое слово. Используй collections.Counter и выведи частоту слова.",
          "uk": "Прочитай слова, потім шукане слово. Використай collections.Counter і виведи частоту слова."
        },
        "example": "from collections import Counter\ncounts = Counter([\"red\", \"blue\", \"red\"])\nprint(counts[\"red\"])\nprint(counts[\"green\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "a b a",
              "a"
            ],
            "out": "2"
          },
          {
            "input": [
              "x",
              "y"
            ],
            "out": "0"
          },
          {
            "input": [
              "",
              "x"
            ],
            "out": "0"
          }
        ],
        "features": [
          "call:Counter"
        ],
        "revision": 1,
        "exampleOut": "2\n0"
      },
      {
        "id": "csv-reader",
        "title": {
          "en": "Read a CSV table",
          "ru": "Прочитай CSV-таблицу",
          "uk": "Прочитай CSV-таблицю"
        },
        "learn": {
          "en": "csv.DictReader turns each row into a dictionary using the header. It handles quoted separators.",
          "ru": "csv.DictReader превращает строки в словари по заголовку. Он учитывает разделители в кавычках.",
          "uk": "csv.DictReader перетворює рядки на словники за заголовком. Він враховує роздільники в лапках."
        },
        "instruction": {
          "en": "Read the supplied sales.csv with price and quantity columns. Print the sum of price * quantity using integer values.",
          "ru": "Прочитай готовый sales.csv со столбцами price и quantity. Выведи сумму price * quantity для целых значений.",
          "uk": "Прочитай готовий sales.csv зі стовпцями price та quantity. Виведи суму price * quantity для цілих значень."
        },
        "example": "import csv, io\ntext = \"name,points\\nAda,8\\nSam,5\\n\"\nfor row in csv.DictReader(io.StringIO(text)):\n    print(row[\"name\"], int(row[\"points\"]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "26",
            "files": {
              "sales.csv": "price,quantity\n5,4\n3,2\n"
            }
          },
          {
            "input": [],
            "out": "0",
            "files": {
              "sales.csv": "price,quantity\n"
            }
          },
          {
            "input": [],
            "out": "7",
            "files": {
              "sales.csv": "price,quantity\n7,1\n"
            }
          }
        ],
        "features": [
          "call:csv.DictReader"
        ],
        "revision": 1,
        "exampleOut": "Ada 8\nSam 5"
      },
      {
        "id": "pathlib-name",
        "title": {
          "en": "Work with paths",
          "ru": "Работай с путями",
          "uk": "Працюй зі шляхами"
        },
        "learn": {
          "en": "Path handles path components. suffix gives the last extension, including its dot.",
          "ru": "Path работает с частями пути. suffix даёт последнее расширение с точкой.",
          "uk": "Path працює з частинами шляху. suffix дає останнє розширення з крапкою."
        },
        "instruction": {
          "en": "Read a filename. Use pathlib.Path to print its stem and suffix on separate lines.",
          "ru": "Прочитай имя файла. Через pathlib.Path выведи stem и suffix с разных строк.",
          "uk": "Прочитай ім’я файлу. Через pathlib.Path виведи stem та suffix із різних рядків."
        },
        "example": "from pathlib import Path\npath = Path(\"folder/notes.txt\")\nprint(path.stem)\nprint(path.suffix)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "report.csv"
            ],
            "out": "report\n.csv"
          },
          {
            "input": [
              "archive.tar.gz"
            ],
            "out": "archive.tar\n.gz"
          },
          {
            "input": [
              "README"
            ],
            "out": "README\n"
          }
        ],
        "features": [
          "call:Path"
        ],
        "revision": 1,
        "exampleOut": "notes\n.txt"
      },
      {
        "id": "library-report",
        "title": {
          "en": "A reusable report module",
          "ru": "Переиспользуемый модуль отчёта",
          "uk": "Повторно вживаний модуль звіту"
        },
        "learn": {
          "en": "Combine an imported function with input validation. Keep the function reusable outside this script.",
          "ru": "Соедини импорт функции с проверкой ввода. Функция должна оставаться пригодной для другого скрипта.",
          "uk": "Поєднай імпорт функції з перевіркою введення. Функція має залишатися придатною для іншого скрипту."
        },
        "instruction": {
          "en": "Import summarize from report_tools. Read a JSON list of integers, call summarize and print its result as JSON.",
          "ru": "Импортируй summarize из report_tools. Прочитай JSON-список целых чисел, вызови summarize и выведи результат как JSON.",
          "uk": "Імпортуй summarize з report_tools. Прочитай JSON-список цілих чисел, виклич summarize і виведи результат як JSON."
        },
        "example": "from math import ceil\nfrom decimal import Decimal\nprint(ceil(7 / 3))\nprint(Decimal(\"0.1\") + Decimal(\"0.2\"))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[2,4,6]"
            ],
            "out": "{\"count\": 3, \"total\": 12}",
            "modules": {
              "report_tools": "def summarize(values):\n    return {\"count\": len(values), \"total\": sum(values)}"
            }
          },
          {
            "input": [
              "[]"
            ],
            "out": "{\"count\": 0, \"total\": 0}",
            "modules": {
              "report_tools": "def summarize(values):\n    return {\"count\": len(values), \"total\": sum(values)}"
            }
          },
          {
            "input": [
              "[-1,1]"
            ],
            "out": "{\"count\": 2, \"total\": 0}",
            "modules": {
              "report_tools": "def summarize(values):\n    return {\"count\": len(values), \"total\": sum(values)}"
            }
          }
        ],
        "features": [
          "ImportFrom",
          "call:summarize"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "3\n0.3"
      }
    ]
  },
  {
    "id": "objects-types",
    "title": {
      "en": "Objects, classes and types",
      "ru": "Объекты, классы и типы",
      "uk": "Об’єкти, класи й типи"
    },
    "intro": {
      "en": "A class describes objects with state and behavior. self refers to the particular object. Begin with one field; add methods only after you can follow how that field changes.",
      "ru": "Класс описывает объекты с состоянием и действиями. self — конкретный объект. Начни с одного поля; добавляй методы, когда понятно, как меняется это поле.",
      "uk": "Клас описує об’єкти зі станом і діями. self — конкретний об’єкт. Почни з одного поля; додавай методи, коли зрозуміло, як змінюється це поле."
    },
    "example": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self, step):\n        self.value += step\n\na = Counter(2)\nb = Counter(10)\na.add(3)\nprint(a.value, b.value)",
    "notes": [
      {
        "en": "Counter(2) creates an object and calls __init__; its value becomes 2.",
        "ru": "Counter(2) создаёт объект и вызывает __init__; его value становится 2.",
        "uk": "Counter(2) створює об’єкт і викликає __init__; його value стає 2."
      },
      {
        "en": "a and b are separate objects; their fields are independent.",
        "ru": "a и b — отдельные объекты с независимыми полями.",
        "uk": "a та b — окремі об’єкти з незалежними полями."
      },
      {
        "en": "a.add(3) supplies a as self and 3 as step. Only a changes.",
        "ru": "a.add(3) передаёт a как self и 3 как step. Меняется только a.",
        "uk": "a.add(3) передає a як self і 3 як step. Змінюється лише a."
      },
      {
        "en": "Type hints document intended values; Python does not automatically reject a wrong type just because of an annotation.",
        "ru": "Аннотации описывают ожидаемые типы; сами по себе они не запрещают другие значения во время выполнения.",
        "uk": "Анотації описують очікувані типи; самі собою вони не забороняють інші значення під час виконання."
      }
    ],
    "tasks": [
      {
        "id": "class-field",
        "title": {
          "en": "Create an object",
          "ru": "Создай объект",
          "uk": "Створи об’єкт"
        },
        "learn": {
          "en": "__init__ initializes the object; self.name is a field belonging to it.",
          "ru": "__init__ задаёт начальное состояние; self.name — поле объекта.",
          "uk": "__init__ задає початковий стан; self.name — поле об’єкта."
        },
        "instruction": {
          "en": "Define User with __init__(self, name). Read a name, create a User and print its name field.",
          "ru": "Определи User с __init__(self, name). Прочитай имя, создай User и выведи его поле name.",
          "uk": "Визнач User з __init__(self, name). Прочитай ім’я, створи User і виведи його поле name."
        },
        "example": "class Pet:\n    def __init__(self, name):\n        self.name = name\npet = Pet(\"Milo\")\nprint(pet.name)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "Ada"
            ],
            "out": "Ada"
          },
          {
            "input": [
              "Sam"
            ],
            "out": "Sam"
          },
          {
            "input": [
              ""
            ],
            "out": ""
          }
        ],
        "features": [
          "ClassDef",
          "def:__init__"
        ],
        "revision": 1,
        "exampleOut": "Milo"
      },
      {
        "id": "class-method",
        "title": {
          "en": "Change state with a method",
          "ru": "Измени состояние методом",
          "uk": "Зміни стан методом"
        },
        "learn": {
          "en": "Methods receive self automatically when called through an object.",
          "ru": "При вызове через объект метод автоматически получает self.",
          "uk": "Під час виклику через об’єкт метод автоматично отримує self."
        },
        "instruction": {
          "en": "Define Counter with value and add(step). Read start and step; create it, call add and print value.",
          "ru": "Определи Counter с value и add(step). Прочитай начальное значение и шаг; создай объект, вызови add и выведи value.",
          "uk": "Визнач Counter з value та add(step). Прочитай початкове значення й крок; створи об’єкт, виклич add і виведи value."
        },
        "example": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self, step):\n        self.value += step\n\na = Counter(2)\nb = Counter(10)\na.add(3)\nprint(a.value, b.value)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "2",
              "3"
            ],
            "out": "5"
          },
          {
            "input": [
              "0",
              "-1"
            ],
            "out": "-1"
          },
          {
            "input": [
              "8",
              "0"
            ],
            "out": "8"
          }
        ],
        "features": [
          "ClassDef",
          "def:add"
        ],
        "revision": 1,
        "exampleOut": "5 10"
      },
      {
        "id": "independent-objects",
        "title": {
          "en": "Two independent objects",
          "ru": "Два независимых объекта",
          "uk": "Два незалежні об’єкти"
        },
        "learn": {
          "en": "Store per-object state on self, not as a shared mutable class field.",
          "ru": "Состояние отдельного объекта храни в self, а не в общем изменяемом поле класса.",
          "uk": "Стан окремого об’єкта зберігай у self, а не в спільному змінюваному полі класу."
        },
        "instruction": {
          "en": "Define Basket with a fresh items list in __init__ and add(item). Read two words; add the first to basket a and the second to basket b. Print both item lists as JSON lines.",
          "ru": "Определи Basket с новым списком items в __init__ и add(item). Прочитай два слова; первое добавь корзине a, второе — b. Выведи оба списка как строки JSON.",
          "uk": "Визнач Basket з новим списком items у __init__ та add(item). Прочитай два слова; перше додай кошику a, друге — b. Виведи обидва списки як рядки JSON."
        },
        "example": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self, step):\n        self.value += step\n\na = Counter(2)\nb = Counter(10)\na.add(3)\nprint(a.value, b.value)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "tea",
              "cake"
            ],
            "out": "[\"tea\"]\n[\"cake\"]"
          },
          {
            "input": [
              "x",
              "x"
            ],
            "out": "[\"x\"]\n[\"x\"]"
          },
          {
            "input": [
              "",
              "a"
            ],
            "out": "[\"\"]\n[\"a\"]"
          }
        ],
        "features": [
          "ClassDef",
          "def:__init__"
        ],
        "revision": 1,
        "exampleOut": "5 10"
      },
      {
        "id": "dataclass-record",
        "title": {
          "en": "A data class",
          "ru": "Класс данных",
          "uk": "Клас даних"
        },
        "learn": {
          "en": "@dataclass generates an initializer from annotated fields.",
          "ru": "@dataclass создаёт инициализатор по полям с аннотациями.",
          "uk": "@dataclass створює ініціалізатор за полями з анотаціями."
        },
        "instruction": {
          "en": "Define a dataclass Product with name: str and price: int. Read name then price; print the fields separated by a space.",
          "ru": "Определи dataclass Product с name: str и price: int. Прочитай имя и цену; выведи поля через пробел.",
          "uk": "Визнач dataclass Product з name: str та price: int. Прочитай ім’я й ціну; виведи поля через пробіл."
        },
        "example": "from dataclasses import dataclass\n@dataclass\nclass Point:\n    x: int\n    y: int\npoint = Point(2, 5)\nprint(point.x + point.y)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "tea",
              "5"
            ],
            "out": "tea 5"
          },
          {
            "input": [
              "book",
              "0"
            ],
            "out": "book 0"
          },
          {
            "input": [
              "pen",
              "12"
            ],
            "out": "pen 12"
          }
        ],
        "features": [
          "ClassDef",
          "AnnAssign",
          "call:Product",
          "decorator:dataclass"
        ],
        "revision": 1,
        "exampleOut": "7"
      },
      {
        "id": "typed-function",
        "title": {
          "en": "Annotate a function",
          "ru": "Аннотируй функцию",
          "uk": "Анотуй функцію"
        },
        "learn": {
          "en": "def f(x: int) -> int documents argument and result types. The calculation still needs code.",
          "ru": "def f(x: int) -> int описывает тип аргумента и результата. Сам расчёт всё равно нужно написать.",
          "uk": "def f(x: int) -> int описує тип аргументу й результату. Саме обчислення все одно треба написати."
        },
        "instruction": {
          "en": "Define annotated total(values: list[int]) -> int returning the sum. Read JSON integer values and print total(values).",
          "ru": "Определи аннотированную total(values: list[int]) -> int, возвращающую сумму. Прочитай JSON-список и выведи total(values).",
          "uk": "Визнач анотовану total(values: list[int]) -> int, що повертає суму. Прочитай JSON-список і виведи total(values)."
        },
        "example": "def add(a: int, b: int) -> int:\n    return a + b\nprint(add(2, 3))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[2,3]"
            ],
            "out": "5"
          },
          {
            "input": [
              "[]"
            ],
            "out": "0"
          },
          {
            "input": [
              "[-2,2]"
            ],
            "out": "0"
          }
        ],
        "features": [
          "def:total",
          "Return",
          "AnnotatedFunction"
        ],
        "revision": 1,
        "exampleOut": "5"
      },
      {
        "id": "raise-validation",
        "title": {
          "en": "Reject invalid state",
          "ru": "Отклони неверное состояние",
          "uk": "Відхили неправильний стан"
        },
        "learn": {
          "en": "raise ValueError states that an input is invalid. Catch it where you can choose a response.",
          "ru": "raise ValueError сообщает о неверных данных. Лови ошибку там, где можно выбрать ответ.",
          "uk": "raise ValueError повідомляє про неправильні дані. Лови помилку там, де можна вибрати відповідь."
        },
        "instruction": {
          "en": "Define validate_age(age): raise ValueError for negative age, otherwise return age. Read age, print the result, or INVALID when caught.",
          "ru": "Определи validate_age(age): при отрицательном возрасте вызови ValueError, иначе верни age. Прочитай возраст, выведи результат либо INVALID при ошибке.",
          "uk": "Визнач validate_age(age): за від’ємного віку виклич ValueError, інакше поверни age. Прочитай вік, виведи результат або INVALID за помилки."
        },
        "example": "def positive(n):\n    if n <= 0:\n        raise ValueError(\"positive number required\")\n    return n\ntry:\n    print(positive(0))\nexcept ValueError as error:\n    print(error)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "-1"
            ],
            "out": "INVALID"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "25"
            ],
            "out": "25"
          }
        ],
        "features": [
          "Raise",
          "Try",
          "def:validate_age"
        ],
        "revision": 1,
        "exampleOut": "positive number required"
      },
      {
        "id": "inherit-method",
        "title": {
          "en": "Extend behavior",
          "ru": "Расширь поведение",
          "uk": "Розшир поведінку"
        },
        "learn": {
          "en": "A subclass inherits methods; overriding replaces a method for that subclass. Prefer simple composition when inheritance adds no useful relationship.",
          "ru": "Подкласс наследует методы; переопределение заменяет метод для подкласса. Если полезной связи нет, лучше соединять отдельные объекты.",
          "uk": "Підклас успадковує методи; перевизначення замінює метод для підкласу. Якщо корисного зв’язку немає, краще поєднувати окремі об’єкти."
        },
        "instruction": {
          "en": "Define Greeter.greet(name) returning Hi, name. Define LoudGreeter(Greeter) overriding greet to return the parent result in uppercase using super(). Read name and print LoudGreeter().greet(name).",
          "ru": "Определи Greeter.greet(name), возвращающую Hi, имя. В LoudGreeter(Greeter) переопредели greet: верни результат родителя через super() в верхнем регистре. Прочитай имя и выведи LoudGreeter().greet(name).",
          "uk": "Визнач Greeter.greet(name), що повертає Hi, ім’я. У LoudGreeter(Greeter) перевизнач greet: поверни результат батька через super() великими літерами. Прочитай ім’я та виведи LoudGreeter().greet(name)."
        },
        "example": "class Animal:\n    def sound(self):\n        return \"sound\"\nclass Cat(Animal):\n    def sound(self):\n        return super().sound() + \": meow\"\nprint(Cat().sound())",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "Ada"
            ],
            "out": "HI, ADA"
          },
          {
            "input": [
              "sam"
            ],
            "out": "HI, SAM"
          },
          {
            "input": [
              ""
            ],
            "out": "HI, "
          }
        ],
        "features": [
          "ClassDef",
          "call:super"
        ],
        "revision": 1,
        "exampleOut": "sound: meow"
      },
      {
        "id": "wallet-project",
        "title": {
          "en": "A wallet object",
          "ru": "Объект кошелька",
          "uk": "Об’єкт гаманця"
        },
        "learn": {
          "en": "Keep validation inside the method so every caller follows the same rule.",
          "ru": "Храни проверку внутри метода, чтобы правило действовало для каждого вызова.",
          "uk": "Зберігай перевірку всередині методу, щоб правило діяло для кожного виклику."
        },
        "instruction": {
          "en": "Define Wallet(balance) and spend(amount). Spend only when 0 ≤ amount ≤ balance; otherwise keep the balance. Read initial balance then JSON amounts; apply all and print the final balance.",
          "ru": "Определи Wallet(balance) и spend(amount). Трать только при 0 ≤ amount ≤ balance, иначе ничего не меняй. Прочитай баланс, затем JSON-список сумм; обработай все и выведи остаток.",
          "uk": "Визнач Wallet(balance) та spend(amount). Витрачай лише за 0 ≤ amount ≤ balance, інакше нічого не змінюй. Прочитай баланс, потім JSON-список сум; оброби всі й виведи залишок."
        },
        "example": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self, step):\n        self.value += step\n\na = Counter(2)\nb = Counter(10)\na.add(3)\nprint(a.value, b.value)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "100",
              "[30,80,20]"
            ],
            "out": "50"
          },
          {
            "input": [
              "0",
              "[0,1]"
            ],
            "out": "0"
          },
          {
            "input": [
              "10",
              "[-3,5,5]"
            ],
            "out": "0"
          }
        ],
        "features": [
          "ClassDef",
          "def:spend"
        ],
        "revision": 1,
        "exampleOut": "5 10"
      }
    ]
  },
  {
    "id": "language-tools",
    "title": {
      "en": "Understand Python’s behavior",
      "ru": "Пойми поведение Python",
      "uk": "Зрозумій поведінку Python"
    },
    "intro": {
      "en": "Learn what changes, what is shared, and what is calculated lazily. Iterators, closures and decorators become useful once you can trace an ordinary function call.",
      "ru": "Разберись, что меняется, что разделяется и что вычисляется по требованию. Итераторы, замыкания и декораторы нужны после понимания обычного вызова функции.",
      "uk": "Розберися, що змінюється, що розділяється і що обчислюється за потреби. Ітератори, замикання й декоратори потрібні після розуміння звичайного виклику функції."
    },
    "example": "def make_adder(step):\n    def add(value):\n        return value + step\n    return add\n\nadd_three = make_adder(3)\nprint(add_three(8))",
    "notes": [
      {
        "en": "make_adder returns the inner function itself; add has no parentheses on the return line.",
        "ru": "make_adder возвращает внутреннюю функцию; у add в строке return нет скобок.",
        "uk": "make_adder повертає внутрішню функцію; в add у рядку return немає дужок."
      },
      {
        "en": "The inner function remembers step even after the outer call has ended. This is a closure.",
        "ru": "Внутренняя функция помнит step после завершения внешнего вызова. Это замыкание.",
        "uk": "Внутрішня функція пам’ятає step після завершення зовнішнього виклику. Це замикання."
      },
      {
        "en": "add_three(8) supplies value=8 while the remembered step is 3; the result is 11.",
        "ru": "add_three(8) передаёт value=8 при сохранённом step=3; результат равен 11.",
        "uk": "add_three(8) передає value=8 за збереженого step=3; результат дорівнює 11."
      },
      {
        "en": "Use these tools to simplify a real job, not merely to make code shorter.",
        "ru": "Используй эти инструменты для понятной задачи, а не только для сокращения кода.",
        "uk": "Використовуй ці інструменти для зрозумілого завдання, а не лише для скорочення коду."
      }
    ],
    "tasks": [
      {
        "id": "unpack-pair",
        "title": {
          "en": "Unpack values",
          "ru": "Распакуй значения",
          "uk": "Розпакуй значення"
        },
        "learn": {
          "en": "a, b = pair assigns two elements to two names. The lengths must match.",
          "ru": "a, b = pair распределяет два элемента по двум именам. Длины должны совпадать.",
          "uk": "a, b = pair розподіляє два елементи між двома іменами. Довжини мають збігатися."
        },
        "instruction": {
          "en": "Read a JSON pair of integers. Unpack into a and b; print b then a on one line.",
          "ru": "Прочитай JSON-пару целых чисел. Распакуй в a и b; выведи b, затем a через пробел.",
          "uk": "Прочитай JSON-пару цілих чисел. Розпакуй в a та b; виведи b, потім a через пробіл."
        },
        "example": "left, right = [2, 9]\nprint(left)\nprint(right)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[2,5]"
            ],
            "out": "5 2"
          },
          {
            "input": [
              "[0,0]"
            ],
            "out": "0 0"
          },
          {
            "input": [
              "[-1,3]"
            ],
            "out": "3 -1"
          }
        ],
        "features": [],
        "revision": 1,
        "exampleOut": "2\n9"
      },
      {
        "id": "safe-default-list",
        "title": {
          "en": "Avoid a shared default list",
          "ru": "Избеги общего списка по умолчанию",
          "uk": "Уникни спільного типового списку"
        },
        "learn": {
          "en": "Default arguments are created once. Use None and create a list inside the call when needed.",
          "ru": "Значения по умолчанию создаются один раз. Используй None и создавай список внутри вызова.",
          "uk": "Типові значення створюються один раз. Використай None та створюй список усередині виклику."
        },
        "instruction": {
          "en": "Define add_item(item, items=None): create a new list for None, append item and return it. Read two words; call twice without items and print both JSON lists.",
          "ru": "Определи add_item(item, items=None): для None создай новый список, добавь item и верни его. Прочитай два слова; вызови дважды без items и выведи оба JSON-списка.",
          "uk": "Визнач add_item(item, items=None): для None створи новий список, додай item та поверни його. Прочитай два слова; виклич двічі без items і виведи обидва JSON-списки."
        },
        "example": "def append_value(value, values=None):\n    if values is None:\n        values = []\n    values.append(value)\n    return values\nprint(append_value(3))\nprint(append_value(8))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "a",
              "b"
            ],
            "out": "[\"a\"]\n[\"b\"]"
          },
          {
            "input": [
              "x",
              "x"
            ],
            "out": "[\"x\"]\n[\"x\"]"
          },
          {
            "input": [
              "",
              "z"
            ],
            "out": "[\"\"]\n[\"z\"]"
          }
        ],
        "features": [
          "def:add_item",
          "Is",
          "DefaultArgument"
        ],
        "revision": 1,
        "exampleOut": "[3]\n[8]"
      },
      {
        "id": "iterator-next",
        "title": {
          "en": "Consume an iterator",
          "ru": "Пройди итератор",
          "uk": "Пройди ітератор"
        },
        "learn": {
          "en": "iter makes an iterator; next consumes one item. next(it, default) handles exhaustion.",
          "ru": "iter создаёт итератор; next забирает элемент. next(it, запасное) обрабатывает конец.",
          "uk": "iter створює ітератор; next забирає елемент. next(it, запасне) обробляє кінець."
        },
        "instruction": {
          "en": "Read words; make an iterator and print its first two values on separate lines, using END for missing items.",
          "ru": "Прочитай слова; создай итератор и выведи первые два значения с разных строк, заменяя отсутствующие на END.",
          "uk": "Прочитай слова; створи ітератор і виведи перші два значення з різних рядків, замінюючи відсутні на END."
        },
        "example": "items = iter([4, 8])\nprint(next(items, \"END\"))\nprint(next(items, \"END\"))\nprint(next(items, \"END\"))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "a b c"
            ],
            "out": "a\nb"
          },
          {
            "input": [
              "x"
            ],
            "out": "x\nEND"
          },
          {
            "input": [
              ""
            ],
            "out": "END\nEND"
          }
        ],
        "features": [
          "call:iter",
          "call:next"
        ],
        "revision": 1,
        "exampleOut": "4\n8\nEND"
      },
      {
        "id": "generator-yield",
        "title": {
          "en": "Yield values gradually",
          "ru": "Выдавай значения постепенно",
          "uk": "Видавай значення поступово"
        },
        "learn": {
          "en": "yield suspends a generator instead of finishing it. The next iteration resumes after yield.",
          "ru": "yield приостанавливает генератор, а не завершает его. Следующий проход продолжится после yield.",
          "uk": "yield призупиняє генератор, а не завершує його. Наступний прохід продовжиться після yield."
        },
        "instruction": {
          "en": "Define squares(n), yielding squares of 1 through n. Read n ≥ 0; print list(squares(n)) as JSON.",
          "ru": "Определи squares(n), выдающую квадраты от 1 до n через yield. Прочитай n ≥ 0; выведи list(squares(n)) как JSON.",
          "uk": "Визнач squares(n), що видає квадрати від 1 до n через yield. Прочитай n ≥ 0; виведи list(squares(n)) як JSON."
        },
        "example": "def steps():\n    yield 2\n    yield 4\nprint(list(steps()))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "3"
            ],
            "out": "[1, 4, 9]"
          },
          {
            "input": [
              "1"
            ],
            "out": "[1]"
          },
          {
            "input": [
              "0"
            ],
            "out": "[]"
          }
        ],
        "features": [
          "Yield",
          "def:squares"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "[2, 4]"
      },
      {
        "id": "closure-adder",
        "title": {
          "en": "Remember a value",
          "ru": "Запомни значение в замыкании",
          "uk": "Запам’ятай значення в замиканні"
        },
        "learn": {
          "en": "A returned inner function can retain a value from its enclosing call.",
          "ru": "Возвращённая внутренняя функция может помнить значение внешнего вызова.",
          "uk": "Повернена внутрішня функція може пам’ятати значення зовнішнього виклику."
        },
        "instruction": {
          "en": "Define make_multiplier(factor), returning an inner function that multiplies its argument by factor. Read factor then value; print the result of the returned function.",
          "ru": "Определи make_multiplier(factor), возвращающую внутреннюю функцию умножения аргумента на factor. Прочитай factor, затем значение; выведи результат возвращённой функции.",
          "uk": "Визнач make_multiplier(factor), що повертає внутрішню функцію множення аргументу на factor. Прочитай factor, потім значення; виведи результат поверненої функції."
        },
        "example": "def make_adder(step):\n    def add(value):\n        return value + step\n    return add\n\nadd_three = make_adder(3)\nprint(add_three(8))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "3",
              "4"
            ],
            "out": "12"
          },
          {
            "input": [
              "0",
              "8"
            ],
            "out": "0"
          },
          {
            "input": [
              "-2",
              "5"
            ],
            "out": "-10"
          }
        ],
        "features": [
          "def:make_multiplier",
          "Return"
        ],
        "revision": 1,
        "exampleOut": "11"
      },
      {
        "id": "decorator-result",
        "title": {
          "en": "Wrap a function",
          "ru": "Оберни функцию",
          "uk": "Огорни функцію"
        },
        "learn": {
          "en": "A decorator receives a function and returns a replacement. @name applies that transformation at definition time.",
          "ru": "Декоратор получает функцию и возвращает замену. @имя применяет преобразование при определении.",
          "uk": "Декоратор отримує функцію й повертає заміну. @ім’я застосовує перетворення під час визначення."
        },
        "instruction": {
          "en": "Define double_result(func), a decorator whose wrapper doubles the returned number. Decorate identity(n) returning n. Read n and print identity(n).",
          "ru": "Определи double_result(func): обёртка удваивает возвращённое число. Декорируй identity(n), возвращающую n. Прочитай n и выведи identity(n).",
          "uk": "Визнач double_result(func): обгортка подвоює повернене число. Декоруй identity(n), що повертає n. Прочитай n і виведи identity(n)."
        },
        "example": "def add_bonus(func):\n    def wrapper(n):\n        return func(n) + 5\n    return wrapper\n@add_bonus\ndef square(n):\n    return n * n\nprint(square(3))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "4"
            ],
            "out": "8"
          },
          {
            "input": [
              "-2"
            ],
            "out": "-4"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          }
        ],
        "features": [
          "def:double_result",
          "def:wrapper",
          "decorator:double_result"
        ],
        "revision": 1,
        "exampleOut": "14"
      },
      {
        "id": "context-manager",
        "title": {
          "en": "Always finish cleanup",
          "ru": "Всегда выполняй завершение",
          "uk": "Завжди виконуй завершення"
        },
        "learn": {
          "en": "@contextmanager turns a generator with one yield into a with manager. finally runs even when the body fails.",
          "ru": "@contextmanager превращает генератор с одним yield в менеджер with. finally выполняется и при ошибке в блоке.",
          "uk": "@contextmanager перетворює генератор з одним yield на менеджер with. finally виконується і за помилки в блоці."
        },
        "instruction": {
          "en": "Define marked() with contextmanager: print OPEN, yield, then print CLOSE in finally. Read a word; print it inside with marked().",
          "ru": "Определи marked() через contextmanager: выведи OPEN, выполни yield, затем CLOSE в finally. Прочитай слово; выведи его внутри with marked().",
          "uk": "Визнач marked() через contextmanager: виведи OPEN, виконай yield, потім CLOSE у finally. Прочитай слово; виведи його всередині with marked()."
        },
        "example": "from contextlib import contextmanager\n@contextmanager\ndef session():\n    print(\"start\")\n    try:\n        yield\n    finally:\n        print(\"finish\")\nwith session():\n    print(\"work\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "hello"
            ],
            "out": "OPEN\nhello\nCLOSE"
          },
          {
            "input": [
              "x"
            ],
            "out": "OPEN\nx\nCLOSE"
          },
          {
            "input": [
              ""
            ],
            "out": "OPEN\n\nCLOSE"
          }
        ],
        "features": [
          "With",
          "Yield",
          "Try",
          "decorator:contextmanager"
        ],
        "revision": 1,
        "exampleOut": "start\nwork\nfinish"
      },
      {
        "id": "deep-copy-data",
        "title": {
          "en": "Copy nested data",
          "ru": "Скопируй вложенные данные",
          "uk": "Скопіюй вкладені дані"
        },
        "learn": {
          "en": "A shallow copy shares nested lists. deepcopy recursively copies this JSON-shaped data.",
          "ru": "Поверхностная копия разделяет вложенные списки. deepcopy рекурсивно копирует эти JSON-данные.",
          "uk": "Поверхнева копія розділяє вкладені списки. deepcopy рекурсивно копіює ці JSON-дані."
        },
        "instruction": {
          "en": "Read a nonempty JSON list of integer lists. Deep-copy it and append 9 to the first inner list in the copy. Print original then copy as JSON lines.",
          "ru": "Прочитай непустой JSON-список списков чисел. Глубоко скопируй его и добавь 9 в первый вложенный список копии. Выведи исходный и копию как строки JSON.",
          "uk": "Прочитай непорожній JSON-список списків чисел. Глибоко скопіюй його й додай 9 у перший вкладений список копії. Виведи початковий та копію як рядки JSON."
        },
        "example": "from copy import deepcopy\noriginal = [[2]]\nother = deepcopy(original)\nother[0].append(7)\nprint(original)\nprint(other)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[[1],[2]]"
            ],
            "out": "[[1], [2]]\n[[1, 9], [2]]"
          },
          {
            "input": [
              "[[]]"
            ],
            "out": "[[]]\n[[9]]"
          },
          {
            "input": [
              "[[9,0]]"
            ],
            "out": "[[9, 0]]\n[[9, 0, 9]]"
          }
        ],
        "features": [
          "call:deepcopy"
        ],
        "revision": 1,
        "exampleOut": "[[2]]\n[[2, 7]]"
      }
    ]
  },
  {
    "id": "testing-algorithms",
    "title": {
      "en": "Test, debug and choose an algorithm",
      "ru": "Тесты, отладка и алгоритмы",
      "uk": "Тести, налагодження й алгоритми"
    },
    "intro": {
      "en": "A working example is not enough: check boundaries, empty data and failures. An algorithm is the sequence of steps; its cost matters as the input grows. Separate calculation from input to make it testable.",
      "ru": "Одного примера мало: проверь границы, пустые данные и ошибки. Алгоритм — порядок действий; при росте данных важна его стоимость. Отделяй вычисления от ввода, чтобы их можно было тестировать.",
      "uk": "Одного прикладу замало: перевір межі, порожні дані й помилки. Алгоритм — порядок дій; зі зростанням даних важлива його вартість. Відділяй обчислення від введення, щоб їх можна було тестувати."
    },
    "example": "def is_adult(age):\n    return age >= 18\n\nassert is_adult(18) is True\nassert is_adult(17) is False\nassert is_adult(0) is False\nprint(\"PASS\")",
    "notes": [
      {
        "en": "An assert compares actual behavior with an expectation; a false condition raises AssertionError.",
        "ru": "assert сравнивает реальное поведение с ожиданием; ложное условие вызывает AssertionError.",
        "uk": "assert порівнює реальну поведінку з очікуванням; хибна умова викликає AssertionError."
      },
      {
        "en": "Testing 18 and 17 distinguishes >= from >. Choose cases that would catch a plausible mistake.",
        "ru": "Проверки 18 и 17 различают >= и >. Выбирай случаи, которые ловят правдоподобную ошибку.",
        "uk": "Перевірки 18 і 17 розрізняють >= та >. Обирай випадки, що ловлять правдоподібну помилку."
      },
      {
        "en": "Assertions are development checks, not validation for untrusted user input; Python can disable them.",
        "ru": "assert — проверки при разработке, а не проверка пользовательского ввода: Python может их отключить.",
        "uk": "assert — перевірки під час розробки, а не перевірка користувацького введення: Python може їх вимкнути."
      },
      {
        "en": "A single pass over n values is O(n). A loop inside that pass may make the work quadratic.",
        "ru": "Один проход по n значениям — O(n). Цикл внутри такого прохода может сделать работу квадратичной.",
        "uk": "Один прохід по n значеннях — O(n). Цикл усередині такого проходу може зробити роботу квадратичною."
      }
    ],
    "tasks": [
      {
        "id": "assert-boundary",
        "title": {
          "en": "Check a boundary",
          "ru": "Проверь границу",
          "uk": "Перевір межу"
        },
        "learn": {
          "en": "A boundary test should fail for a nearby wrong comparison.",
          "ru": "Граничный тест должен замечать соседнее неправильное сравнение.",
          "uk": "Граничний тест має помічати сусіднє неправильне порівняння."
        },
        "instruction": {
          "en": "Define is_adult(age) returning age >= 18. Write asserts for 17 and 18. Read an age and print the returned boolean.",
          "ru": "Определи is_adult(age), возвращающую age >= 18. Напиши assert для 17 и 18. Прочитай возраст и выведи результат.",
          "uk": "Визнач is_adult(age), що повертає age >= 18. Напиши assert для 17 та 18. Прочитай вік і виведи результат."
        },
        "example": "def is_adult(age):\n    return age >= 18\n\nassert is_adult(18) is True\nassert is_adult(17) is False\nassert is_adult(0) is False\nprint(\"PASS\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "17"
            ],
            "out": "False"
          },
          {
            "input": [
              "18"
            ],
            "out": "True"
          },
          {
            "input": [
              "0"
            ],
            "out": "False"
          },
          {
            "input": [
              "50"
            ],
            "out": "True"
          }
        ],
        "features": [
          "Assert",
          "def:is_adult",
          "count:Assert:2"
        ],
        "revision": 1,
        "exampleOut": "PASS"
      },
      {
        "id": "unittest-method",
        "title": {
          "en": "Run a real unit test",
          "ru": "Запусти модульный тест",
          "uk": "Запусти модульний тест"
        },
        "learn": {
          "en": "unittest.TestCase methods named test_* are collected by the test loader. TextTestRunner returns a result object.",
          "ru": "Методы unittest.TestCase с именем test_* собираются загрузчиком. TextTestRunner возвращает объект результата.",
          "uk": "Методи unittest.TestCase з ім’ям test_* збираються завантажувачем. TextTestRunner повертає об’єкт результату."
        },
        "instruction": {
          "en": "Read n. Define double(x). Define a unittest.TestCase test method asserting double(n) == n*2 and double(0) == 0. Run the suite with stream=io.StringIO(); print wasSuccessful().",
          "ru": "Прочитай n. Определи double(x). В unittest.TestCase напиши тест с проверками double(n) == n*2 и double(0) == 0. Запусти набор с stream=io.StringIO(); выведи wasSuccessful().",
          "uk": "Прочитай n. Визнач double(x). У unittest.TestCase напиши тест із перевірками double(n) == n*2 та double(0) == 0. Запусти набір зі stream=io.StringIO(); виведи wasSuccessful()."
        },
        "example": "import io, unittest\nclass AdditionTests(unittest.TestCase):\n    def test_addition(self):\n        self.assertEqual(2 + 3, 5)\nsuite = unittest.defaultTestLoader.loadTestsFromTestCase(AdditionTests)\nresult = unittest.TextTestRunner(stream=io.StringIO()).run(suite)\nprint(result.testsRun, result.wasSuccessful())",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "4"
            ],
            "out": "True"
          },
          {
            "input": [
              "-2"
            ],
            "out": "True"
          },
          {
            "input": [
              "0"
            ],
            "out": "True"
          }
        ],
        "features": [
          "ClassDef",
          "call:unittest.TextTestRunner",
          "def:test_values"
        ],
        "revision": 1,
        "exampleOut": "1 True"
      },
      {
        "id": "regression-fix",
        "title": {
          "en": "Fix an off-by-one error",
          "ru": "Исправь ошибку на единицу",
          "uk": "Виправ помилку на одиницю"
        },
        "learn": {
          "en": "range stops before its end. A regression test captures a failure so the mistake stays fixed.",
          "ru": "range не включает правую границу. Регрессионный тест сохраняет проверку найденной ошибки.",
          "uk": "range не включає праву межу. Регресійний тест зберігає перевірку знайденої помилки."
        },
        "instruction": {
          "en": "Define sum_to(n) for integers n ≥ 0, summing 1 through n inclusively. Add assert sum_to(1) == 1 and assert sum_to(0) == 0. Read n and print the result.",
          "ru": "Определи sum_to(n) для n ≥ 0: сумма от 1 до n включительно. Добавь assert sum_to(1) == 1 и assert sum_to(0) == 0. Прочитай n и выведи результат.",
          "uk": "Визнач sum_to(n) для n ≥ 0: сума від 1 до n включно. Додай assert sum_to(1) == 1 та assert sum_to(0) == 0. Прочитай n і виведи результат."
        },
        "example": "def is_adult(age):\n    return age >= 18\n\nassert is_adult(18) is True\nassert is_adult(17) is False\nassert is_adult(0) is False\nprint(\"PASS\")",
        "starter": "def sum_to(n):\n    total = 0\n    for value in range(1, n):\n        total += value\n    return total\n\n# Fix the boundary, add regression tests, then read and print.\n",
        "cases": [
          {
            "input": [
              "1"
            ],
            "out": "1"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "5"
            ],
            "out": "15"
          }
        ],
        "features": [
          "Assert",
          "def:sum_to",
          "For",
          "count:Assert:2"
        ],
        "revision": 1,
        "exampleOut": "PASS"
      },
      {
        "id": "linear-search",
        "title": {
          "en": "Search in one pass",
          "ru": "Поиск за один проход",
          "uk": "Пошук за один прохід"
        },
        "learn": {
          "en": "Return when a match is found. After the loop, no item matched.",
          "ru": "Верни ответ при совпадении. После цикла совпадений уже нет.",
          "uk": "Поверни відповідь за збігу. Після циклу збігів уже немає."
        },
        "instruction": {
          "en": "Define find_index(values, target) returning the first matching index or -1. Read a JSON integer list then target; print the result.",
          "ru": "Определи find_index(values, target), возвращающую первый индекс совпадения либо -1. Прочитай JSON-список чисел, затем target; выведи результат.",
          "uk": "Визнач find_index(values, target), що повертає перший індекс збігу або -1. Прочитай JSON-список чисел, потім target; виведи результат."
        },
        "example": "def is_adult(age):\n    return age >= 18\n\nassert is_adult(18) is True\nassert is_adult(17) is False\nassert is_adult(0) is False\nprint(\"PASS\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[3,7,3]",
              "3"
            ],
            "out": "0"
          },
          {
            "input": [
              "[1,2]",
              "9"
            ],
            "out": "-1"
          },
          {
            "input": [
              "[]",
              "1"
            ],
            "out": "-1"
          },
          {
            "input": [
              "[1,2,3]",
              "3"
            ],
            "out": "2"
          }
        ],
        "features": [
          "def:find_index",
          "For"
        ],
        "revision": 1,
        "exampleOut": "PASS"
      },
      {
        "id": "binary-search",
        "title": {
          "en": "Search sorted data",
          "ru": "Поиск в отсортированных данных",
          "uk": "Пошук у відсортованих даних"
        },
        "learn": {
          "en": "Binary search halves a sorted search interval each time. bisect_left returns the insertion position, not proof of a match.",
          "ru": "Двоичный поиск каждый раз делит отсортированный диапазон пополам. bisect_left даёт позицию вставки, а не гарантию совпадения.",
          "uk": "Двійковий пошук щоразу ділить відсортований діапазон навпіл. bisect_left дає позицію вставлення, а не гарантію збігу."
        },
        "instruction": {
          "en": "Read a sorted JSON integer list then target. Use bisect_left; print its first index if present, otherwise -1.",
          "ru": "Прочитай отсортированный JSON-список чисел, затем target. Через bisect_left найди первый индекс, а при отсутствии выведи -1.",
          "uk": "Прочитай відсортований JSON-список чисел, потім target. Через bisect_left знайди перший індекс, а за відсутності виведи -1."
        },
        "example": "from bisect import bisect_left\nvalues = [2, 5, 8]\nprint(bisect_left(values, 5))\nprint(bisect_left(values, 6))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[1,3,3,7]",
              "3"
            ],
            "out": "1"
          },
          {
            "input": [
              "[1,3]",
              "2"
            ],
            "out": "-1"
          },
          {
            "input": [
              "[]",
              "0"
            ],
            "out": "-1"
          },
          {
            "input": [
              "[1]",
              "9"
            ],
            "out": "-1"
          }
        ],
        "features": [
          "call:bisect_left"
        ],
        "revision": 1,
        "exampleOut": "1\n2"
      },
      {
        "id": "recursive-sum",
        "title": {
          "en": "A recursive function",
          "ru": "Рекурсивная функция",
          "uk": "Рекурсивна функція"
        },
        "learn": {
          "en": "Recursion must have a base case and move toward it. It is useful for recursive structures, not always for simple sums.",
          "ru": "Рекурсии нужен базовый случай и движение к нему. Она полезна для рекурсивных структур, но не всегда для простой суммы.",
          "uk": "Рекурсії потрібен базовий випадок і рух до нього. Вона корисна для рекурсивних структур, але не завжди для простої суми."
        },
        "instruction": {
          "en": "Define recursive triangle(n): return 0 for n == 0, otherwise n + triangle(n-1). Read n (0–30) and print the result.",
          "ru": "Определи рекурсивную triangle(n): при n == 0 верни 0, иначе n + triangle(n-1). Прочитай n (0–30) и выведи результат.",
          "uk": "Визнач рекурсивну triangle(n): за n == 0 поверни 0, інакше n + triangle(n-1). Прочитай n (0–30) і виведи результат."
        },
        "example": "def countdown(n):\n    if n == 0:\n        return\n    print(n)\n    countdown(n - 1)\ncountdown(3)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "1"
            ],
            "out": "1"
          },
          {
            "input": [
              "6"
            ],
            "out": "21"
          }
        ],
        "features": [
          "def:triangle",
          "call:triangle"
        ],
        "revision": 1,
        "exampleOut": "3\n2\n1"
      },
      {
        "id": "deduplicate-order",
        "title": {
          "en": "Unique without losing order",
          "ru": "Уникальные с сохранением порядка",
          "uk": "Унікальні зі збереженням порядку"
        },
        "learn": {
          "en": "A set can record seen items while a list records the output order.",
          "ru": "Множество запоминает встреченные элементы, список — порядок результата.",
          "uk": "Множина запам’ятовує зустрінуті елементи, список — порядок результату."
        },
        "instruction": {
          "en": "Read words. Keep only the first occurrence of each, preserving order. Use a set for membership and print a JSON list.",
          "ru": "Прочитай слова. Оставь только первое вхождение каждого в исходном порядке. Используй множество для проверки наличия и выведи JSON-список.",
          "uk": "Прочитай слова. Залиш лише першу появу кожного в початковому порядку. Використай множину для перевірки наявності й виведи JSON-список."
        },
        "example": "def is_adult(age):\n    return age >= 18\n\nassert is_adult(18) is True\nassert is_adult(17) is False\nassert is_adult(0) is False\nprint(\"PASS\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "b a b c a"
            ],
            "out": "[\"b\", \"a\", \"c\"]"
          },
          {
            "input": [
              "x x"
            ],
            "out": "[\"x\"]"
          },
          {
            "input": [
              ""
            ],
            "out": "[]"
          }
        ],
        "features": [
          "call:set",
          "For"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "PASS"
      },
      {
        "id": "test-exception",
        "title": {
          "en": "Test an expected error",
          "ru": "Проверь ожидаемую ошибку",
          "uk": "Перевір очікувану помилку"
        },
        "learn": {
          "en": "assertRaises checks that an operation raises the specified exception; an unexpected success fails the test.",
          "ru": "assertRaises проверяет конкретное исключение; неожиданный успех делает тест неуспешным.",
          "uk": "assertRaises перевіряє конкретний виняток; неочікуваний успіх робить тест неуспішним."
        },
        "instruction": {
          "en": "Define reciprocal(n), raising ValueError for zero, otherwise returning 1/n. Write a unittest test using assertRaises(ValueError) for 0. Run it silently, then read nonzero n and print reciprocal(n) with two decimals.",
          "ru": "Определи reciprocal(n): для нуля вызови ValueError, иначе верни 1/n. Напиши unittest с assertRaises(ValueError) для 0. Запусти без вывода, затем прочитай ненулевое n и выведи reciprocal(n) с двумя знаками.",
          "uk": "Визнач reciprocal(n): для нуля виклич ValueError, інакше поверни 1/n. Напиши unittest з assertRaises(ValueError) для 0. Запусти без виведення, потім прочитай ненульове n і виведи reciprocal(n) із двома знаками."
        },
        "example": "import unittest\ncase = unittest.TestCase()\nwith case.assertRaises(ValueError):\n    int(\"oops\")\nprint(\"PASS\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "2"
            ],
            "out": "0.50"
          },
          {
            "input": [
              "-4"
            ],
            "out": "-0.25"
          },
          {
            "input": [
              "1"
            ],
            "out": "1.00"
          }
        ],
        "features": [
          "ClassDef",
          "With",
          "Assert",
          "def:test_zero"
        ],
        "revision": 1,
        "exampleOut": "PASS"
      }
    ]
  },
  {
    "id": "databases-apis",
    "title": {
      "en": "SQL databases and API data",
      "ru": "Базы SQL и данные API",
      "uk": "Бази SQL та дані API"
    },
    "intro": {
      "en": "SQL queries select and aggregate stored rows. Parameters keep data separate from SQL commands. API exercises use shown response fixtures; fetch_json is a course helper, not a Python built-in. No real network request is made here.",
      "ru": "SQL-запросы выбирают и суммируют сохранённые строки. Параметры отделяют данные от SQL-команд. Упражнения API используют показанные ответы; fetch_json — помощник курса, не встроенная функция Python. Реальных запросов здесь нет.",
      "uk": "SQL-запити вибирають і підсумовують збережені рядки. Параметри відділяють дані від SQL-команд. Вправи API використовують показані відповіді; fetch_json — помічник курсу, не вбудована функція Python. Справжніх запитів тут немає."
    },
    "example": "import sqlite3\nwith sqlite3.connect(\":memory:\") as db:\n    db.execute(\"CREATE TABLE scores (name TEXT, points INTEGER)\")\n    db.execute(\"INSERT INTO scores VALUES (?, ?)\", (\"Ada\", 8))\n    row = db.execute(\"SELECT points FROM scores WHERE name = ?\", (\"Ada\",)).fetchone()\nprint(row[0])",
    "notes": [
      {
        "en": "The in-memory SQLite database is real SQL, reset for each case.",
        "ru": "База SQLite в памяти выполняет настоящий SQL и создаётся заново для каждого теста.",
        "uk": "База SQLite в пам’яті виконує справжній SQL і створюється заново для кожного тесту."
      },
      {
        "en": "The ? is a parameter placeholder. Values are passed separately in a tuple.",
        "ru": "Знак ? — место параметра. Значения передаются отдельно в кортеже.",
        "uk": "Знак ? — місце параметра. Значення передаються окремо в кортежі."
      },
      {
        "en": "fetchone returns one row or None. A row is a sequence, so row[0] gets its first column.",
        "ru": "fetchone возвращает строку результата либо None. row[0] берёт первый столбец.",
        "uk": "fetchone повертає рядок результату або None. row[0] бере перший стовпець."
      },
      {
        "en": "HTTP 2xx means a successful response; failure codes and missing fields need explicit handling.",
        "ru": "HTTP 2xx означает успешный ответ; коды ошибок и отсутствующие поля нужно обрабатывать.",
        "uk": "HTTP 2xx означає успішну відповідь; коди помилок і відсутні поля треба обробляти."
      }
    ],
    "tasks": [
      {
        "id": "sql-one-value",
        "title": {
          "en": "Your first SQL query",
          "ru": "Первый SQL-запрос",
          "uk": "Перший SQL-запит"
        },
        "learn": {
          "en": "SELECT can calculate a value. Use placeholders even when the input looks harmless.",
          "ru": "SELECT может вычислять значение. Используй параметры даже для простого ввода.",
          "uk": "SELECT може обчислювати значення. Використовуй параметри навіть для простого введення."
        },
        "instruction": {
          "en": "Read an integer. Connect to SQLite :memory:, execute SELECT ? * 2 with that parameter, and print the returned value.",
          "ru": "Прочитай целое число. Подключись к SQLite :memory:, выполни SELECT ? * 2 с этим параметром и выведи результат.",
          "uk": "Прочитай ціле число. Підключись до SQLite :memory:, виконай SELECT ? * 2 із цим параметром і виведи результат."
        },
        "example": "import sqlite3\nwith sqlite3.connect(\":memory:\") as db:\n    db.execute(\"CREATE TABLE scores (name TEXT, points INTEGER)\")\n    db.execute(\"INSERT INTO scores VALUES (?, ?)\", (\"Ada\", 8))\n    row = db.execute(\"SELECT points FROM scores WHERE name = ?\", (\"Ada\",)).fetchone()\nprint(row[0])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "4"
            ],
            "out": "8"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "-3"
            ],
            "out": "-6"
          }
        ],
        "features": [
          "call:sqlite3.connect"
        ],
        "revision": 1,
        "exampleOut": "8"
      },
      {
        "id": "sql-insert",
        "title": {
          "en": "Store several rows",
          "ru": "Сохрани несколько строк",
          "uk": "Збережи кілька рядків"
        },
        "learn": {
          "en": "executemany repeats a parameterized statement for a sequence of rows.",
          "ru": "executemany повторяет параметризованную команду для последовательности строк.",
          "uk": "executemany повторює параметризовану команду для послідовності рядків."
        },
        "instruction": {
          "en": "Read a JSON list of integers. Create numbers(value INTEGER), insert all values with executemany, then SELECT COUNT(*) and print it.",
          "ru": "Прочитай JSON-список чисел. Создай numbers(value INTEGER), вставь значения через executemany, затем выполни SELECT COUNT(*) и выведи результат.",
          "uk": "Прочитай JSON-список чисел. Створи numbers(value INTEGER), встав значення через executemany, потім виконай SELECT COUNT(*) і виведи результат."
        },
        "example": "import sqlite3\nwith sqlite3.connect(\":memory:\") as db:\n    db.execute(\"CREATE TABLE scores (name TEXT, points INTEGER)\")\n    db.execute(\"INSERT INTO scores VALUES (?, ?)\", (\"Ada\", 8))\n    row = db.execute(\"SELECT points FROM scores WHERE name = ?\", (\"Ada\",)).fetchone()\nprint(row[0])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[2,4,6]"
            ],
            "out": "3"
          },
          {
            "input": [
              "[]"
            ],
            "out": "0"
          },
          {
            "input": [
              "[1,1]"
            ],
            "out": "2"
          }
        ],
        "features": [
          "call:sqlite3.connect"
        ],
        "revision": 1,
        "exampleOut": "8"
      },
      {
        "id": "sql-filter",
        "title": {
          "en": "Filter with a query",
          "ru": "Отбор запросом",
          "uk": "Відбір запитом"
        },
        "learn": {
          "en": "WHERE filters rows; ORDER BY makes result order explicit.",
          "ru": "WHERE отбирает строки; ORDER BY задаёт порядок результата.",
          "uk": "WHERE відбирає рядки; ORDER BY задає порядок результату."
        },
        "instruction": {
          "en": "Read a JSON integer list then minimum. Store values in numbers(value INTEGER); select values >= minimum ordered ascending, and print as JSON.",
          "ru": "Прочитай JSON-список чисел, затем минимум. Сохрани в numbers(value INTEGER); запросом выбери значения >= минимума по возрастанию и выведи JSON.",
          "uk": "Прочитай JSON-список чисел, потім мінімум. Збережи в numbers(value INTEGER); запитом вибери значення >= мінімуму за зростанням і виведи JSON."
        },
        "example": "import sqlite3\nwith sqlite3.connect(\":memory:\") as db:\n    db.execute(\"CREATE TABLE scores (name TEXT, points INTEGER)\")\n    db.execute(\"INSERT INTO scores VALUES (?, ?)\", (\"Ada\", 8))\n    row = db.execute(\"SELECT points FROM scores WHERE name = ?\", (\"Ada\",)).fetchone()\nprint(row[0])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[5,1,3,5]",
              "3"
            ],
            "out": "[3, 5, 5]"
          },
          {
            "input": [
              "[]",
              "0"
            ],
            "out": "[]"
          },
          {
            "input": [
              "[-2,1]",
              "5"
            ],
            "out": "[]"
          }
        ],
        "features": [
          "call:sqlite3.connect"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "8"
      },
      {
        "id": "sql-aggregate",
        "title": {
          "en": "Aggregate stored data",
          "ru": "Суммируй данные в базе",
          "uk": "Підсумуй дані в базі"
        },
        "learn": {
          "en": "SUM over an empty table returns NULL; COALESCE supplies a fallback.",
          "ru": "SUM по пустой таблице возвращает NULL; COALESCE задаёт замену.",
          "uk": "SUM за порожньою таблицею повертає NULL; COALESCE задає заміну."
        },
        "instruction": {
          "en": "Read JSON rows with price and quantity. Create sales(price INTEGER, quantity INTEGER), insert them and use SELECT COALESCE(SUM(price * quantity), 0). Print the total.",
          "ru": "Прочитай JSON-записи с price и quantity. Создай sales(price INTEGER, quantity INTEGER), вставь строки и выполни SELECT COALESCE(SUM(price * quantity), 0). Выведи итог.",
          "uk": "Прочитай JSON-записи з price та quantity. Створи sales(price INTEGER, quantity INTEGER), встав рядки й виконай SELECT COALESCE(SUM(price * quantity), 0). Виведи підсумок."
        },
        "example": "import sqlite3\nwith sqlite3.connect(\":memory:\") as db:\n    db.execute(\"CREATE TABLE scores (name TEXT, points INTEGER)\")\n    db.execute(\"INSERT INTO scores VALUES (?, ?)\", (\"Ada\", 8))\n    row = db.execute(\"SELECT points FROM scores WHERE name = ?\", (\"Ada\",)).fetchone()\nprint(row[0])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[{\"price\": 5, \"quantity\": 3}, {\"price\": 2, \"quantity\": 4}]"
            ],
            "out": "23"
          },
          {
            "input": [
              "[]"
            ],
            "out": "0"
          },
          {
            "input": [
              "[{\"price\": 9, \"quantity\": 0}]"
            ],
            "out": "0"
          }
        ],
        "features": [
          "call:sqlite3.connect"
        ],
        "revision": 1,
        "exampleOut": "8"
      },
      {
        "id": "sql-safe-lookup",
        "title": {
          "en": "Data is not SQL code",
          "ru": "Данные не SQL-команда",
          "uk": "Дані не SQL-команда"
        },
        "learn": {
          "en": "Never insert user text into SQL with formatting. A placeholder treats quotes as part of the value.",
          "ru": "Не подставляй пользовательский текст в SQL форматированием. Параметр воспринимает кавычки как часть значения.",
          "uk": "Не підставляй користувацький текст у SQL форматуванням. Параметр сприймає лапки як частину значення."
        },
        "instruction": {
          "en": "Create users(name TEXT, points INTEGER) with rows Ada=10 and Sam=20. Read a name; query by a ? parameter. Print points or MISSING.",
          "ru": "Создай users(name TEXT, points INTEGER) со строками Ada=10 и Sam=20. Прочитай имя; найди через параметр ?. Выведи points либо MISSING.",
          "uk": "Створи users(name TEXT, points INTEGER) із рядками Ada=10 та Sam=20. Прочитай ім’я; знайди через параметр ?. Виведи points або MISSING."
        },
        "example": "import sqlite3\nwith sqlite3.connect(\":memory:\") as db:\n    db.execute(\"CREATE TABLE scores (name TEXT, points INTEGER)\")\n    db.execute(\"INSERT INTO scores VALUES (?, ?)\", (\"Ada\", 8))\n    row = db.execute(\"SELECT points FROM scores WHERE name = ?\", (\"Ada\",)).fetchone()\nprint(row[0])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "Ada"
            ],
            "out": "10"
          },
          {
            "input": [
              "Sam"
            ],
            "out": "20"
          },
          {
            "input": [
              "' OR 1=1 --"
            ],
            "out": "MISSING"
          },
          {
            "input": [
              "unknown"
            ],
            "out": "MISSING"
          }
        ],
        "features": [
          "call:sqlite3.connect"
        ],
        "revision": 1,
        "exampleOut": "8"
      },
      {
        "id": "api-field",
        "title": {
          "en": "Read API response data",
          "ru": "Прочитай ответ API",
          "uk": "Прочитай відповідь API"
        },
        "learn": {
          "en": "fetch_json(url) is a course helper returning the fixture body. In a local project you need an HTTP client.",
          "ru": "fetch_json(url) — помощник курса, возвращающий тело готового ответа. В своём проекте понадобится HTTP-клиент.",
          "uk": "fetch_json(url) — помічник курсу, що повертає тіло готової відповіді. У власному проєкті знадобиться HTTP-клієнт."
        },
        "instruction": {
          "en": "Call fetch_json(\"/profile\") and print its name field, or Anonymous when the field is absent.",
          "ru": "Вызови fetch_json(\"/profile\") и выведи поле name либо Anonymous, если поля нет.",
          "uk": "Виклич fetch_json(\"/profile\") і виведи поле name або Anonymous, якщо поля немає."
        },
        "example": "data = fetch_json(\"/example\")\nprint(data.get(\"message\", \"No message\"))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "Ada",
            "responses": {
              "/profile": {
                "body": {
                  "name": "Ada"
                }
              }
            }
          },
          {
            "input": [],
            "out": "Anonymous",
            "responses": {
              "/profile": {
                "body": {}
              }
            }
          },
          {
            "input": [],
            "out": "Sam",
            "responses": {
              "/profile": {
                "body": {
                  "name": "Sam",
                  "age": 20
                }
              }
            }
          }
        ],
        "features": [
          "call:fetch_json"
        ],
        "revision": 1,
        "exampleOut": "Hello",
        "exampleCase": {
          "input": [],
          "responses": {
            "/example": {
              "body": {
                "message": "Hello"
              }
            },
            "/first": {
              "body": {
                "value": 2
              }
            },
            "/second": {
              "body": {
                "value": 7
              }
            }
          }
        }
      },
      {
        "id": "api-http-error",
        "title": {
          "en": "Handle a failed response",
          "ru": "Обработай неуспешный ответ",
          "uk": "Оброби невдалу відповідь"
        },
        "learn": {
          "en": "The helper raises urllib.error.HTTPError for non-2xx statuses. Its code field contains the status.",
          "ru": "Помощник вызывает urllib.error.HTTPError для статусов вне 2xx. Поле code содержит статус.",
          "uk": "Помічник викликає urllib.error.HTTPError для статусів поза 2xx. Поле code містить статус."
        },
        "instruction": {
          "en": "Fetch /profile. Print name on success; for HTTPError print ERROR followed by its status, separated by a space.",
          "ru": "Запроси /profile. При успехе выведи name; при HTTPError выведи ERROR и статус через пробел.",
          "uk": "Запитай /profile. За успіху виведи name; за HTTPError виведи ERROR і статус через пробіл."
        },
        "example": "from urllib.error import HTTPError\ntry:\n    print(fetch_json(\"/example\"))\nexcept HTTPError as error:\n    print(\"Status:\", error.code)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "Ada",
            "responses": {
              "/profile": {
                "body": {
                  "name": "Ada"
                }
              }
            }
          },
          {
            "input": [],
            "out": "ERROR 404",
            "responses": {
              "/profile": {
                "status": 404
              }
            }
          },
          {
            "input": [],
            "out": "ERROR 500",
            "responses": {
              "/profile": {
                "status": 500
              }
            }
          }
        ],
        "features": [
          "Try",
          "call:fetch_json"
        ],
        "revision": 1,
        "exampleOut": "Status: 404",
        "exampleCase": {
          "input": [],
          "responses": {
            "/example": {
              "status": 404
            },
            "/first": {
              "body": {
                "value": 2
              }
            },
            "/second": {
              "body": {
                "value": 7
              }
            }
          }
        }
      },
      {
        "id": "api-shape",
        "title": {
          "en": "Validate external data",
          "ru": "Проверь внешние данные",
          "uk": "Перевір зовнішні дані"
        },
        "learn": {
          "en": "A successful HTTP response can still contain unexpected data. Validate the type before using its fields.",
          "ru": "Успешный HTTP-ответ тоже может содержать неожиданные данные. Перед обращением к полям проверь тип.",
          "uk": "Успішна HTTP-відповідь теж може містити неочікувані дані. Перед зверненням до полів перевір тип."
        },
        "instruction": {
          "en": "Fetch /items. If it is a list of dictionaries each with an integer price (not bool), print the price sum. Otherwise print INVALID.",
          "ru": "Запроси /items. Если это список словарей, у каждого целый price (не bool), выведи сумму цен. Иначе INVALID.",
          "uk": "Запитай /items. Якщо це список словників, у кожного цілий price (не bool), виведи суму цін. Інакше INVALID."
        },
        "example": "data = fetch_json(\"/example\")\nif isinstance(data, dict) and isinstance(data.get(\"message\"), str):\n    print(data[\"message\"])\nelse:\n    print(\"Unexpected data\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "12",
            "responses": {
              "/items": {
                "body": [
                  {
                    "price": 5
                  },
                  {
                    "price": 7
                  }
                ]
              }
            }
          },
          {
            "input": [],
            "out": "INVALID",
            "responses": {
              "/items": {
                "body": {
                  "price": 5
                }
              }
            }
          },
          {
            "input": [],
            "out": "INVALID",
            "responses": {
              "/items": {
                "body": [
                  {
                    "price": true
                  }
                ]
              }
            }
          },
          {
            "input": [],
            "out": "0",
            "responses": {
              "/items": {
                "body": []
              }
            }
          }
        ],
        "features": [
          "call:isinstance"
        ],
        "revision": 1,
        "exampleOut": "Hello",
        "exampleCase": {
          "input": [],
          "responses": {
            "/example": {
              "body": {
                "message": "Hello"
              }
            },
            "/first": {
              "body": {
                "value": 2
              }
            },
            "/second": {
              "body": {
                "value": 7
              }
            }
          }
        }
      }
    ]
  },
  {
    "id": "async-reliability",
    "title": {
      "en": "Async work and reliable boundaries",
      "ru": "Асинхронность и надёжные границы",
      "uk": "Асинхронність і надійні межі"
    },
    "intro": {
      "en": "async def defines a coroutine function. Calling it creates work that must be awaited. await lets other tasks run while this one waits. These exercises use top-level await supported by the course runner; a normal script starts with asyncio.run(main()).",
      "ru": "async def определяет корутину. Вызов создаёт работу, которую надо ожидать через await. Во время ожидания могут работать другие задачи. Здесь тренажёр поддерживает await на верхнем уровне; обычный скрипт запускают через asyncio.run(main()).",
      "uk": "async def визначає корутину. Виклик створює роботу, яку треба очікувати через await. Під час очікування можуть працювати інші задачі. Тут тренажер підтримує await на верхньому рівні; звичайний скрипт запускають через asyncio.run(main())."
    },
    "example": "import asyncio\nasync def double_later(value):\n    await asyncio.sleep(0)\n    return value * 2\n\nresult = await double_later(4)\nprint(result)",
    "notes": [
      {
        "en": "double_later(4) alone does not produce 8. It creates a coroutine object.",
        "ru": "Один вызов double_later(4) не даёт 8. Он создаёт объект корутины.",
        "uk": "Сам виклик double_later(4) не дає 8. Він створює об’єкт корутини."
      },
      {
        "en": "await runs or resumes it and eventually receives its returned value.",
        "ru": "await запускает или продолжает её и получает возвращённое значение.",
        "uk": "await запускає або продовжує її й отримує повернене значення."
      },
      {
        "en": "sleep(0) yields control without a real delay; it is not a way to speed up CPU calculations.",
        "ru": "sleep(0) передаёт управление без реальной задержки; он не ускоряет тяжёлые вычисления.",
        "uk": "sleep(0) передає керування без справжньої затримки; він не прискорює важкі обчислення."
      },
      {
        "en": "async_fetch_json is a fixture helper. Timeouts, limits and error handling still matter with real requests.",
        "ru": "async_fetch_json — помощник готовых ответов. Для реальных запросов нужны тайм-ауты, ограничения и обработка ошибок.",
        "uk": "async_fetch_json — помічник готових відповідей. Для справжніх запитів потрібні тайм-аути, обмеження й обробка помилок."
      }
    ],
    "tasks": [
      {
        "id": "await-function",
        "title": {
          "en": "Await one result",
          "ru": "Дождись результата",
          "uk": "Дочекайся результату"
        },
        "learn": {
          "en": "Use await to obtain the return value of an async function.",
          "ru": "Используй await, чтобы получить возвращённое значение async-функции.",
          "uk": "Використай await, щоб отримати повернене значення async-функції."
        },
        "instruction": {
          "en": "Define async triple_later(n), returning n*3. Read n, await the function and print its result.",
          "ru": "Определи async triple_later(n), возвращающую n*3. Прочитай n, дождись функции и выведи результат.",
          "uk": "Визнач async triple_later(n), що повертає n*3. Прочитай n, дочекайся функції й виведи результат."
        },
        "example": "async def add_later(n):\n    return n + 2\nprint(await add_later(5))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "4"
            ],
            "out": "12"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "-2"
            ],
            "out": "-6"
          }
        ],
        "features": [
          "AsyncFunctionDef",
          "Await"
        ],
        "revision": 1,
        "exampleOut": "7"
      },
      {
        "id": "async-api",
        "title": {
          "en": "Await API data",
          "ru": "Дождись данных API",
          "uk": "Дочекайся даних API"
        },
        "learn": {
          "en": "await async_fetch_json(url) returns the supplied JSON response after yielding control.",
          "ru": "await async_fetch_json(url) возвращает готовый JSON-ответ после передачи управления.",
          "uk": "await async_fetch_json(url) повертає готову JSON-відповідь після передачі керування."
        },
        "instruction": {
          "en": "Await async_fetch_json(\"/score\") and print its points field.",
          "ru": "Дождись async_fetch_json(\"/score\") и выведи поле points.",
          "uk": "Дочекайся async_fetch_json(\"/score\") і виведи поле points."
        },
        "example": "data = await async_fetch_json(\"/example\")\nprint(data[\"message\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "8",
            "responses": {
              "/score": {
                "body": {
                  "points": 8
                }
              }
            }
          },
          {
            "input": [],
            "out": "0",
            "responses": {
              "/score": {
                "body": {
                  "points": 0
                }
              }
            }
          },
          {
            "input": [],
            "out": "-2",
            "responses": {
              "/score": {
                "body": {
                  "points": -2
                }
              }
            }
          }
        ],
        "features": [
          "Await"
        ],
        "revision": 1,
        "exampleOut": "Hello",
        "exampleCase": {
          "input": [],
          "responses": {
            "/example": {
              "body": {
                "message": "Hello"
              }
            },
            "/first": {
              "body": {
                "value": 2
              }
            },
            "/second": {
              "body": {
                "value": 7
              }
            }
          }
        }
      },
      {
        "id": "gather-results",
        "title": {
          "en": "Collect concurrent results",
          "ru": "Собери параллельные результаты",
          "uk": "Збери паралельні результати"
        },
        "learn": {
          "en": "asyncio.gather awaits several coroutines and keeps results in argument order.",
          "ru": "asyncio.gather ожидает несколько корутин и сохраняет результаты в порядке аргументов.",
          "uk": "asyncio.gather очікує кілька корутин і зберігає результати в порядку аргументів."
        },
        "instruction": {
          "en": "Use asyncio.gather to fetch /a and /b concurrently with async_fetch_json. Print the sum of their value fields.",
          "ru": "Через asyncio.gather одновременно запроси /a и /b через async_fetch_json. Выведи сумму полей value.",
          "uk": "Через asyncio.gather одночасно запитай /a та /b через async_fetch_json. Виведи суму полів value."
        },
        "example": "import asyncio\na, b = await asyncio.gather(async_fetch_json(\"/first\"), async_fetch_json(\"/second\"))\nprint(a[\"value\"], b[\"value\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "7",
            "responses": {
              "/a": {
                "body": {
                  "value": 3
                }
              },
              "/b": {
                "body": {
                  "value": 4
                }
              }
            }
          },
          {
            "input": [],
            "out": "0",
            "responses": {
              "/a": {
                "body": {
                  "value": 0
                }
              },
              "/b": {
                "body": {
                  "value": 0
                }
              }
            }
          },
          {
            "input": [],
            "out": "3",
            "responses": {
              "/a": {
                "body": {
                  "value": -2
                }
              },
              "/b": {
                "body": {
                  "value": 5
                }
              }
            }
          }
        ],
        "features": [
          "Await",
          "call:asyncio.gather"
        ],
        "revision": 1,
        "exampleOut": "2 7",
        "exampleCase": {
          "input": [],
          "responses": {
            "/example": {
              "body": {
                "message": "Hello"
              }
            },
            "/first": {
              "body": {
                "value": 2
              }
            },
            "/second": {
              "body": {
                "value": 7
              }
            }
          }
        }
      },
      {
        "id": "handle-timeout",
        "title": {
          "en": "Handle a timeout",
          "ru": "Обработай тайм-аут",
          "uk": "Оброби тайм-аут"
        },
        "learn": {
          "en": "TimeoutError means waiting failed; it does not imply that a fallback is always the right business decision.",
          "ru": "TimeoutError означает ошибку ожидания; запасное значение подходит не для любой задачи.",
          "uk": "TimeoutError означає помилку очікування; запасне значення підходить не для кожного завдання."
        },
        "instruction": {
          "en": "Await /status through async_fetch_json. Print its state field, or TIMEOUT on TimeoutError.",
          "ru": "Дождись /status через async_fetch_json. Выведи state либо TIMEOUT при TimeoutError.",
          "uk": "Дочекайся /status через async_fetch_json. Виведи state або TIMEOUT за TimeoutError."
        },
        "example": "try:\n    data = await async_fetch_json(\"/example\")\n    print(data)\nexcept TimeoutError:\n    print(\"Try again later\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "ready",
            "responses": {
              "/status": {
                "body": {
                  "state": "ready"
                }
              }
            }
          },
          {
            "input": [],
            "out": "TIMEOUT",
            "responses": {
              "/status": {
                "timeout": true
              }
            }
          },
          {
            "input": [],
            "out": "busy",
            "responses": {
              "/status": {
                "body": {
                  "state": "busy"
                }
              }
            }
          }
        ],
        "features": [
          "Try",
          "Await"
        ],
        "revision": 1,
        "exampleOut": "Try again later",
        "exampleCase": {
          "input": [],
          "responses": {
            "/example": {
              "timeout": true
            },
            "/first": {
              "body": {
                "value": 2
              }
            },
            "/second": {
              "body": {
                "value": 7
              }
            }
          }
        }
      },
      {
        "id": "bounded-retry",
        "title": {
          "en": "Retry with a limit",
          "ru": "Повторяй с ограничением",
          "uk": "Повторюй з обмеженням"
        },
        "learn": {
          "en": "Retries must stop. Retry only the expected temporary failure; in real services also consider backoff and whether the operation is safe to repeat.",
          "ru": "Повторы должны заканчиваться. Повторяй только ожидаемый временный сбой; в реальном сервисе учитывай задержку и безопасность повторной операции.",
          "uk": "Повтори мають завершуватися. Повторюй лише очікуваний тимчасовий збій; у справжньому сервісі враховуй затримку й безпечність повторної операції."
        },
        "instruction": {
          "en": "Request /status at most 3 times. Retry only TimeoutError. On first success print state and stop; if all attempts time out, print UNAVAILABLE.",
          "ru": "Запроси /status максимум 3 раза. Повторяй только при TimeoutError. При первом успехе выведи state и остановись; если все попытки завершились тайм-аутом, выведи UNAVAILABLE.",
          "uk": "Запитай /status щонайбільше 3 рази. Повторюй лише за TimeoutError. За першого успіху виведи state й зупинися; якщо всі спроби завершилися тайм-аутом, виведи UNAVAILABLE."
        },
        "example": "for attempt in range(2):\n    try:\n        data = await async_fetch_json(\"/example\")\n        print(data[\"message\"])\n        break\n    except TimeoutError:\n        if attempt == 1:\n            print(\"No response\")",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "ready",
            "responses": {
              "/status": [
                {
                  "timeout": true
                },
                {
                  "body": {
                    "state": "ready"
                  }
                }
              ]
            }
          },
          {
            "input": [],
            "out": "UNAVAILABLE",
            "responses": {
              "/status": [
                {
                  "timeout": true
                }
              ]
            }
          },
          {
            "input": [],
            "out": "ok",
            "responses": {
              "/status": [
                {
                  "body": {
                    "state": "ok"
                  }
                },
                {
                  "timeout": true
                }
              ]
            }
          }
        ],
        "features": [
          "For",
          "Try",
          "Await",
          "Break"
        ],
        "revision": 1,
        "exampleOut": "Hello",
        "exampleCase": {
          "input": [],
          "responses": {
            "/example": [
              {
                "timeout": true
              },
              {
                "body": {
                  "message": "Hello"
                }
              }
            ],
            "/first": {
              "body": {
                "value": 2
              }
            },
            "/second": {
              "body": {
                "value": 7
              }
            }
          }
        }
      },
      {
        "id": "semaphore-limit",
        "title": {
          "en": "Limit simultaneous work",
          "ru": "Ограничь одновременную работу",
          "uk": "Обмеж одночасну роботу"
        },
        "learn": {
          "en": "async with semaphore holds a permit until the block ends, including when an exception occurs.",
          "ru": "async with semaphore держит разрешение до конца блока, в том числе при исключении.",
          "uk": "async with semaphore тримає дозвіл до кінця блоку, зокрема за винятку."
        },
        "instruction": {
          "en": "Read a JSON list of integers. Use Semaphore(2); define async work(n) that enters async with the semaphore, awaits sleep(0), and returns n*2. Gather all results; print JSON.",
          "ru": "Прочитай JSON-список чисел. Используй Semaphore(2); в async work(n) войди в async with семафора, дождись sleep(0) и верни n*2. Собери результаты gather и выведи JSON.",
          "uk": "Прочитай JSON-список чисел. Використай Semaphore(2); в async work(n) увійди в async with семафора, дочекайся sleep(0) і поверни n*2. Збери результати gather й виведи JSON."
        },
        "example": "import asyncio\nlimit = asyncio.Semaphore(2)\nasync def work(n):\n    async with limit:\n        await asyncio.sleep(0)\n        return n + 1\nprint(await asyncio.gather(work(2), work(5)))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[1,2,3]"
            ],
            "out": "[2, 4, 6]"
          },
          {
            "input": [
              "[]"
            ],
            "out": "[]"
          },
          {
            "input": [
              "[-2,0]"
            ],
            "out": "[-4, 0]"
          }
        ],
        "features": [
          "AsyncWith",
          "call:asyncio.Semaphore",
          "call:asyncio.gather"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "[3, 6]"
      },
      {
        "id": "partial-results",
        "title": {
          "en": "Keep successful results",
          "ru": "Сохрани успешные результаты",
          "uk": "Збережи успішні результати"
        },
        "learn": {
          "en": "gather(return_exceptions=True) returns exception objects alongside successes; check each result explicitly.",
          "ru": "gather(return_exceptions=True) возвращает объекты ошибок рядом с успехами; проверь каждый результат.",
          "uk": "gather(return_exceptions=True) повертає об’єкти помилок поряд з успіхами; перевір кожен результат."
        },
        "instruction": {
          "en": "Fetch /a and /b with gather(return_exceptions=True). Sum value from successful results; ignore exception objects. Print the sum.",
          "ru": "Запроси /a и /b через gather(return_exceptions=True). Сложи value успешных результатов, пропусти объекты ошибок. Выведи сумму.",
          "uk": "Запитай /a та /b через gather(return_exceptions=True). Додай value успішних результатів, пропусти об’єкти помилок. Виведи суму."
        },
        "example": "import asyncio\nresults = await asyncio.gather(async_fetch_json(\"/first\"), async_fetch_json(\"/second\"), return_exceptions=True)\nfor value in results:\n    print(\"failed\" if isinstance(value, BaseException) else value[\"value\"])",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "5",
            "responses": {
              "/a": {
                "body": {
                  "value": 5
                }
              },
              "/b": {
                "timeout": true
              }
            }
          },
          {
            "input": [],
            "out": "0",
            "responses": {
              "/a": {
                "status": 500
              },
              "/b": {
                "timeout": true
              }
            }
          },
          {
            "input": [],
            "out": "7",
            "responses": {
              "/a": {
                "body": {
                  "value": 3
                }
              },
              "/b": {
                "body": {
                  "value": 4
                }
              }
            }
          }
        ],
        "features": [
          "call:asyncio.gather",
          "Await"
        ],
        "revision": 1,
        "exampleOut": "2\nfailed",
        "exampleCase": {
          "input": [],
          "responses": {
            "/example": {
              "body": {
                "message": "Hello"
              }
            },
            "/first": {
              "body": {
                "value": 2
              }
            },
            "/second": {
              "timeout": true
            }
          }
        }
      },
      {
        "id": "async-generator",
        "title": {
          "en": "An asynchronous stream",
          "ru": "Асинхронный поток",
          "uk": "Асинхронний потік"
        },
        "learn": {
          "en": "An async generator combines async def with yield; async for awaits its next values.",
          "ru": "Асинхронный генератор объединяет async def с yield; async for ожидает следующие значения.",
          "uk": "Асинхронний генератор поєднує async def із yield; async for очікує наступні значення."
        },
        "instruction": {
          "en": "Define async numbers(n), yielding 1 through n and awaiting sleep(0) between yields. Read n ≥ 0, consume with async for and print their sum.",
          "ru": "Определи async numbers(n): выдавай от 1 до n, между выдачами ожидай sleep(0). Прочитай n ≥ 0, пройди через async for и выведи сумму.",
          "uk": "Визнач async numbers(n): видавай від 1 до n, між видачами очікуй sleep(0). Прочитай n ≥ 0, пройди через async for і виведи суму."
        },
        "example": "import asyncio\nasync def letters():\n    for letter in \"abc\":\n        await asyncio.sleep(0)\n        yield letter\nasync for letter in letters():\n    print(letter)",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "3"
            ],
            "out": "6"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "5"
            ],
            "out": "15"
          }
        ],
        "features": [
          "AsyncFor",
          "Yield",
          "Await"
        ],
        "revision": 1,
        "exampleOut": "a\nb\nc"
      }
    ]
  },
  {
    "id": "python-projects",
    "title": {
      "en": "Build, test and extend projects",
      "ru": "Создавай, проверяй и развивай проекты",
      "uk": "Створюй, перевіряй і розвивай проєкти"
    },
    "intro": {
      "en": "These projects combine tools already practiced. First write a plan in plain language, split it into functions, then test small cases. After browser checks, use the local-work guide to turn a solution into a multi-file project with Git, tests and documentation.",
      "ru": "Эти проекты соединяют уже знакомые приёмы. Сначала запиши план словами, раздели на функции, проверь маленькие случаи. После браузерной проверки преврати решение в проект из нескольких файлов с Git, тестами и документацией по руководству.",
      "uk": "Ці проєкти поєднують уже знайомі прийоми. Спочатку запиши план словами, поділи на функції, перевір маленькі випадки. Після браузерної перевірки перетвори рішення на проєкт із кількох файлів з Git, тестами й документацією за посібником."
    },
    "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
    "notes": [
      {
        "en": "State the input, output and invalid cases before writing implementation.",
        "ru": "До кода определи ввод, вывод и неправильные случаи.",
        "uk": "До коду визнач введення, виведення та неправильні випадки."
      },
      {
        "en": "Keep calculation separate from reading input or calling the network.",
        "ru": "Отделяй расчёт от чтения ввода и сетевого запроса.",
        "uk": "Відділяй обчислення від читання введення й мережевого запиту."
      },
      {
        "en": "The examples are specifications, not the only inputs. Include empty and boundary cases in your own tests.",
        "ru": "Примеры задают поведение, а не единственные входы. Добавляй пустые и граничные случаи в свои тесты.",
        "uk": "Приклади задають поведінку, а не єдині входи. Додавай порожні й граничні випадки до власних тестів."
      },
      {
        "en": "Finishing the path is a foundation for independent work. Keep extending projects and reading unfamiliar code.",
        "ru": "Завершение маршрута даёт основу самостоятельной работы. Развивай проекты и читай незнакомой код.",
        "uk": "Завершення маршруту дає основу самостійної роботи. Розвивай проєкти й читай незнайомий код."
      }
    ],
    "tasks": [
      {
        "id": "project-expenses",
        "title": {
          "en": "An expense summary",
          "ru": "Учёт расходов",
          "uk": "Облік витрат"
        },
        "learn": {
          "en": "Group rows by category, sum each group, then produce a stable report.",
          "ru": "Сгруппируй записи по категории, сложи каждую группу, затем подготовь стабильный отчёт.",
          "uk": "Згрупуй записи за категорією, підсумуй кожну групу, потім підготуй стабільний звіт."
        },
        "instruction": {
          "en": "Read JSON rows with category and integer amount ≥ 0. Define summarize(rows), returning category totals. Print its JSON result; empty input gives {}.",
          "ru": "Прочитай JSON-записи с category и целым amount ≥ 0. Определи summarize(rows), возвращающую суммы по категориям. Выведи JSON-результат; пустой список даёт {}.",
          "uk": "Прочитай JSON-записи з category та цілим amount ≥ 0. Визнач summarize(rows), що повертає суми за категоріями. Виведи JSON-результат; порожній список дає {}."
        },
        "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[{\"category\": \"food\", \"amount\": 5}, {\"category\": \"food\", \"amount\": 7}, {\"category\": \"travel\", \"amount\": 2}]"
            ],
            "out": "{\"food\": 12, \"travel\": 2}"
          },
          {
            "input": [
              "[]"
            ],
            "out": "{}"
          },
          {
            "input": [
              "[{\"category\": \"x\", \"amount\": 0}]"
            ],
            "out": "{\"x\": 0}"
          }
        ],
        "features": [
          "def:summarize"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "14"
      },
      {
        "id": "project-cart",
        "title": {
          "en": "An order total with validation",
          "ru": "Заказ с проверкой данных",
          "uk": "Замовлення з перевіркою даних"
        },
        "learn": {
          "en": "Validate before calculating. Keep money as integer smallest units in this project.",
          "ru": "Проверь данные до расчёта. Здесь деньги хранятся целым числом минимальных единиц.",
          "uk": "Перевір дані до обчислення. Тут гроші зберігаються цілим числом найменших одиниць."
        },
        "instruction": {
          "en": "Read JSON rows with integer price and quantity. Define order_total(rows): raise ValueError for a negative price or quantity, otherwise return the total. Print total or INVALID.",
          "ru": "Прочитай JSON-записи с целыми price и quantity. Определи order_total(rows): при отрицательной цене или количестве вызови ValueError, иначе верни сумму. Выведи итог либо INVALID.",
          "uk": "Прочитай JSON-записи з цілими price та quantity. Визнач order_total(rows): за від’ємної ціни чи кількості виклич ValueError, інакше поверни суму. Виведи підсумок або INVALID."
        },
        "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[{\"price\": 10, \"quantity\": 2}, {\"price\": 3, \"quantity\": 4}]"
            ],
            "out": "32"
          },
          {
            "input": [
              "[{\"price\": -1, \"quantity\": 2}]"
            ],
            "out": "INVALID"
          },
          {
            "input": [
              "[]"
            ],
            "out": "0"
          },
          {
            "input": [
              "[{\"price\": 2, \"quantity\": -1}]"
            ],
            "out": "INVALID"
          }
        ],
        "features": [
          "def:order_total",
          "Raise",
          "Try"
        ],
        "revision": 1,
        "exampleOut": "14"
      },
      {
        "id": "project-tasks",
        "title": {
          "en": "A task-list engine",
          "ru": "Движок списка задач",
          "uk": "Рушій списку завдань"
        },
        "learn": {
          "en": "Keep state on an object and expose only the operations the program needs.",
          "ru": "Храни состояние в объекте и предоставляй нужные программе действия.",
          "uk": "Зберігай стан в об’єкті й надавай потрібні програмі дії."
        },
        "instruction": {
          "en": "Define TaskList with add(text), done(index), and pending(). Read JSON commands: [\"add\", text] or [\"done\", zero-based index]. Invalid done indices do nothing. Print pending task texts as JSON in original order.",
          "ru": "Определи TaskList с add(text), done(index) и pending(). Прочитай JSON-команды [\"add\", текст] или [\"done\", индекс с 0]. Неверный индекс ничего не меняет. Выведи JSON-список невыполненных текстов в исходном порядке.",
          "uk": "Визнач TaskList з add(text), done(index) та pending(). Прочитай JSON-команди [\"add\", текст] або [\"done\", індекс від 0]. Неправильний індекс нічого не змінює. Виведи JSON-список невиконаних текстів у початковому порядку."
        },
        "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[[\"add\",\"study\"],[\"add\",\"walk\"],[\"done\",0]]"
            ],
            "out": "[\"walk\"]"
          },
          {
            "input": [
              "[[\"done\",-1],[\"add\",\"x\"]]"
            ],
            "out": "[\"x\"]"
          },
          {
            "input": [
              "[]"
            ],
            "out": "[]"
          },
          {
            "input": [
              "[[\"add\",\"x\"],[\"done\",5],[\"done\",0],[\"done\",0]]"
            ],
            "out": "[]"
          }
        ],
        "features": [
          "ClassDef",
          "def:pending"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "14"
      },
      {
        "id": "project-json-report",
        "title": {
          "en": "A report from a file",
          "ru": "Отчёт из файла",
          "uk": "Звіт із файлу"
        },
        "learn": {
          "en": "Turn file input into a reusable transformation and a structured output file.",
          "ru": "Преврати файловый ввод в отдельное преобразование и структурированный файл результата.",
          "uk": "Перетвори файлове введення на окреме перетворення й структурований файл результату."
        },
        "instruction": {
          "en": "Load supplied values.json. Define stats(values) returning {\"count\": ..., \"total\": ...}. Save that result to report.json with json.dump, then print count and total. Empty list gives 0 0.",
          "ru": "Загрузи готовый values.json. Определи stats(values), возвращающую {\"count\": ..., \"total\": ...}. Сохрани результат в report.json через json.dump, затем выведи count и total. Пустой список даёт 0 0.",
          "uk": "Завантаж готовий values.json. Визнач stats(values), що повертає {\"count\": ..., \"total\": ...}. Збережи результат у report.json через json.dump, потім виведи count та total. Порожній список дає 0 0."
        },
        "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "3 12",
            "files": {
              "values.json": "[2,4,6]"
            },
            "writtenJson": {
              "report.json": {
                "count": 3,
                "total": 12
              }
            }
          },
          {
            "input": [],
            "out": "0 0",
            "files": {
              "values.json": "[]"
            },
            "writtenJson": {
              "report.json": {
                "count": 0,
                "total": 0
              }
            }
          },
          {
            "input": [],
            "out": "2 0",
            "files": {
              "values.json": "[-2,2]"
            },
            "writtenJson": {
              "report.json": {
                "count": 2,
                "total": 0
              }
            }
          }
        ],
        "features": [
          "def:stats",
          "call:json.dump",
          "call:json.load"
        ],
        "revision": 1,
        "exampleOut": "14"
      },
      {
        "id": "project-ledger",
        "title": {
          "en": "A SQL ledger",
          "ru": "Журнал операций SQL",
          "uk": "Журнал операцій SQL"
        },
        "learn": {
          "en": "Transactions group related changes; SQL aggregates summarize stored rows.",
          "ru": "Транзакции объединяют связанные изменения; SQL-агрегаты суммируют строки.",
          "uk": "Транзакції об’єднують пов’язані зміни; SQL-агрегати підсумовують рядки."
        },
        "instruction": {
          "en": "Read a JSON list of signed integer amounts. Create SQLite entries(amount INTEGER), insert them inside a transaction, then print COUNT(*) and COALESCE(SUM(amount),0) on one line.",
          "ru": "Прочитай JSON-список целых сумм со знаком. Создай SQLite entries(amount INTEGER), вставь их внутри транзакции, затем выведи COUNT(*) и COALESCE(SUM(amount),0) через пробел.",
          "uk": "Прочитай JSON-список цілих сум зі знаком. Створи SQLite entries(amount INTEGER), встав їх усередині транзакції, потім виведи COUNT(*) та COALESCE(SUM(amount),0) через пробіл."
        },
        "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[100,-30,-20]"
            ],
            "out": "3 50"
          },
          {
            "input": [
              "[]"
            ],
            "out": "0 0"
          },
          {
            "input": [
              "[-5,5]"
            ],
            "out": "2 0"
          }
        ],
        "features": [
          "call:sqlite3.connect",
          "With"
        ],
        "revision": 1,
        "exampleOut": "14"
      },
      {
        "id": "project-api-dashboard",
        "title": {
          "en": "An asynchronous dashboard",
          "ru": "Асинхронная сводка",
          "uk": "Асинхронне зведення"
        },
        "learn": {
          "en": "Combine concurrent requests with partial failure handling and stable output.",
          "ru": "Соедини одновременные запросы с обработкой частичных ошибок и стабильным выводом.",
          "uk": "Поєднай одночасні запити з обробкою часткових помилок і стабільним виведенням."
        },
        "instruction": {
          "en": "Fetch /stock and /orders concurrently using gather(return_exceptions=True). A success body contains count. Print a JSON object with stock and orders counts, using null for a failed request.",
          "ru": "Одновременно запроси /stock и /orders через gather(return_exceptions=True). Успешный ответ содержит count. Выведи JSON-объект с числами stock и orders; для ошибки используй null.",
          "uk": "Одночасно запитай /stock та /orders через gather(return_exceptions=True). Успішна відповідь містить count. Виведи JSON-об’єкт із числами stock та orders; для помилки використай null."
        },
        "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [],
            "out": "{\"stock\": 5, \"orders\": 2}",
            "responses": {
              "/stock": {
                "body": {
                  "count": 5
                }
              },
              "/orders": {
                "body": {
                  "count": 2
                }
              }
            }
          },
          {
            "input": [],
            "out": "{\"stock\": null, \"orders\": 0}",
            "responses": {
              "/stock": {
                "timeout": true
              },
              "/orders": {
                "body": {
                  "count": 0
                }
              }
            }
          },
          {
            "input": [],
            "out": "{\"stock\": null, \"orders\": null}",
            "responses": {
              "/stock": {
                "status": 500
              },
              "/orders": {
                "timeout": true
              }
            }
          }
        ],
        "features": [
          "call:asyncio.gather",
          "Await"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "14"
      },
      {
        "id": "project-clean-pipeline",
        "title": {
          "en": "A validated data pipeline",
          "ru": "Обработка данных с проверкой",
          "uk": "Обробка даних із перевіркою"
        },
        "learn": {
          "en": "Separate parsing, filtering and reporting. A bad row should follow a stated rule, not disappear accidentally.",
          "ru": "Раздели чтение, отбор и отчёт. Для неправильной записи нужно явное правило.",
          "uk": "Розділи читання, відбір і звіт. Для неправильного запису потрібне явне правило."
        },
        "instruction": {
          "en": "Read JSON rows. Define clean_rows(rows): keep dictionaries with string name (strip it, reject empty) and integer age ≥ 0 (reject bool). Return only name and age fields. Print JSON; preserve order.",
          "ru": "Прочитай JSON-записи. Определи clean_rows(rows): оставь словари со строкой name (убери пробелы по краям, отсекай пустые) и целым age ≥ 0 (не bool). Верни только name и age. Выведи JSON, сохрани порядок.",
          "uk": "Прочитай JSON-записи. Визнач clean_rows(rows): залиш словники з рядком name (прибери пробіли по краях, відкинь порожні) і цілим age ≥ 0 (не bool). Поверни лише name та age. Виведи JSON, збережи порядок."
        },
        "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[{\"name\": \" Ada \", \"age\": 20}, {\"name\": \" \", \"age\": 2}, {\"name\": \"X\", \"age\": -1}]"
            ],
            "out": "[{\"name\": \"Ada\", \"age\": 20}]"
          },
          {
            "input": [
              "[null, {\"name\": \"X\", \"age\": true}, {\"name\": \"Sam\", \"age\": 0, \"extra\": 1}]"
            ],
            "out": "[{\"name\": \"Sam\", \"age\": 0}]"
          },
          {
            "input": [
              "[]"
            ],
            "out": "[]"
          }
        ],
        "features": [
          "def:clean_rows"
        ],
        "revision": 1,
        "compare": "json",
        "exampleOut": "14"
      },
      {
        "id": "project-tested-module",
        "title": {
          "en": "A tested application core",
          "ru": "Проверенное ядро приложения",
          "uk": "Перевірене ядро застосунку"
        },
        "learn": {
          "en": "Finish with a reusable function, explicit validation and your own regression checks. Then move it into a module on your computer.",
          "ru": "Заверши отдельной функцией, явной проверкой данных и своими регрессионными тестами. Затем вынеси её в модуль на компьютере.",
          "uk": "Заверши окремою функцією, явною перевіркою даних і своїми регресійними тестами. Потім винеси її в модуль на комп’ютері."
        },
        "instruction": {
          "en": "Define average(values): return 0 for empty input; raise ValueError if any item has type other than int (bool invalid); otherwise return sum/length. Add asserts for [] and [2,4]. Read JSON and print the average with two decimals, or INVALID.",
          "ru": "Определи average(values): для пустого ввода верни 0; если тип любого элемента не int (bool недопустим), вызови ValueError; иначе верни сумму/длину. Добавь assert для [] и [2,4]. Прочитай JSON и выведи среднее с двумя знаками либо INVALID.",
          "uk": "Визнач average(values): для порожнього введення поверни 0; якщо тип будь-якого елемента не int (bool неприпустимий), виклич ValueError; інакше поверни суму/довжину. Додай assert для [] та [2,4]. Прочитай JSON і виведи середнє з двома знаками або INVALID."
        },
        "example": "def calculate_total(rows):\n    return sum(row[\"price\"] * row[\"quantity\"] for row in rows)\n\nassert calculate_total([]) == 0\nassert calculate_total([{\"price\": 4, \"quantity\": 3}]) == 12\nprint(calculate_total([{\"price\": 7, \"quantity\": 2}]))",
        "starter": "# Write your solution below. / Напиши решение ниже. / Напиши розв’язок нижче.\n",
        "cases": [
          {
            "input": [
              "[2,4,9]"
            ],
            "out": "5.00"
          },
          {
            "input": [
              "[]"
            ],
            "out": "0.00"
          },
          {
            "input": [
              "[true,2]"
            ],
            "out": "INVALID"
          },
          {
            "input": [
              "[\"3\",2]"
            ],
            "out": "INVALID"
          },
          {
            "input": [
              "[-2,2]"
            ],
            "out": "0.00"
          }
        ],
        "features": [
          "def:average",
          "Assert",
          "Raise",
          "count:Assert:2"
        ],
        "revision": 1,
        "exampleOut": "14"
      }
    ]
  }
];
