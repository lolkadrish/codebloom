/* CodeBloom: stable task IDs; EN/RU/UK learning content. */
window.JAVASCRIPT_COURSE = [
  {
    "id": "first-lines",
    "title": {
      "en": "Your first lines",
      "ru": "Первые строки",
      "uk": "Перші рядки"
    },
    "intro": {
      "en": "A program follows instructions in order. Start with one visible result. console.log(value) prints a value. Quotes make text; numbers do not need quotes. Here input() is a course helper: each call reads one line from the input box. It is not a built-in JavaScript function.",
      "ru": "Программа выполняет команды по порядку. Начнём с одного видимого результата. console.log(значение) выводит значение. Текст пишут в кавычках, числа — без них. Здесь input() — помощник тренажёра: каждый вызов читает строку из поля ввода. В самом JavaScript такой встроенной функции нет.",
      "uk": "Програма виконує команди по черзі. Почнемо з одного видимого результату. console.log(значення) виводить значення. Текст пишуть у лапках, числа — без них. Тут input() — помічник тренажера: кожен виклик читає рядок із поля введення. У самому JavaScript такої вбудованої функції немає."
    },
    "example": "const name = input();\nconsole.log(\"Hello, \" + name);",
    "notes": [
      {
        "en": "const gives a name to a value. input() reads the first input line as text.",
        "ru": "const даёт значению имя. input() читает первую строку как текст.",
        "uk": "const дає значенню ім’я. input() читає перший рядок як текст."
      },
      {
        "en": "The + joins text here. console.log displays the result; it does not change name.",
        "ru": "Здесь + соединяет текст. console.log показывает результат и не меняет name.",
        "uk": "Тут + поєднує текст. console.log показує результат і не змінює name."
      }
    ],
    "tasks": [
      {
        "id": "hello",
        "title": {
          "en": "Make the program speak",
          "ru": "Пусть программа заговорит",
          "uk": "Нехай програма заговорить"
        },
        "learn": {
          "en": "Think of console.log as a screen. The text goes inside parentheses and quotes. A semicolon finishes the command.",
          "ru": "Представь console.log как экран. Текст помещают в скобки и кавычки. Точка с запятой завершает команду.",
          "uk": "Уяви console.log як екран. Текст поміщають у дужки та лапки. Крапка з комою завершує команду."
        },
        "instruction": {
          "en": "Print exactly Hello, CodeBloom! on one line. No input is needed.",
          "ru": "Выведи ровно Hello, CodeBloom! одной строкой. Ввод не нужен.",
          "uk": "Виведи точно Hello, CodeBloom! одним рядком. Введення не потрібне."
        },
        "example": "console.log(\"Good morning!\");",
        "starter": "// Write one command below.\n",
        "cases": [
          {
            "input": [],
            "out": "Hello, CodeBloom!"
          }
        ],
        "features": [
          "log"
        ],
        "revision": 1
      },
      {
        "id": "arithmetic",
        "title": {
          "en": "Calculate, then display",
          "ru": "Посчитай и покажи",
          "uk": "Порахуй й покажи"
        },
        "learn": {
          "en": "Without quotes, JavaScript calculates. \"2 + 4\" is text; 2 + 4 is a calculation.",
          "ru": "Без кавычек JavaScript считает. \"2 + 4\" — текст, а 2 + 4 — вычисление.",
          "uk": "Без лапок JavaScript рахує. \"2 + 4\" — текст, а 2 + 4 — обчислення."
        },
        "instruction": {
          "en": "Use a calculation to print the sum of 17 and 25.",
          "ru": "Выведи сумму 17 и 25 с помощью вычисления.",
          "uk": "Виведи суму 17 і 25 за допомогою обчислення."
        },
        "example": "console.log(6 + 8);",
        "starter": "console.log();\n",
        "cases": [
          {
            "input": [],
            "out": "42"
          }
        ],
        "features": [
          "+"
        ],
        "revision": 1
      },
      {
        "id": "read-name",
        "title": {
          "en": "Use the input",
          "ru": "Используй введённое",
          "uk": "Використай введене"
        },
        "learn": {
          "en": "input() reads the actual input. Do not replace it with a word from an example. const stores the result under a name.",
          "ru": "input() читает настоящий ввод. Не подменяй его словом из примера. const сохраняет результат под именем.",
          "uk": "input() читає справжнє введення. Не підміняй його словом із прикладу. const зберігає результат під іменем."
        },
        "instruction": {
          "en": "Read one line into name and print name unchanged.",
          "ru": "Прочитай строку в name и выведи name без изменений.",
          "uk": "Прочитай рядок у name та виведи name без змін."
        },
        "example": "const city = input();\nconsole.log(city);",
        "starter": "const name = input();\n",
        "cases": [
          {
            "input": [
              "Ada"
            ],
            "out": "Ada"
          },
          {
            "input": [
              "Lin"
            ],
            "out": "Lin"
          },
          {
            "input": [
              "two words"
            ],
            "out": "two words"
          },
          {
            "input": [
              ""
            ],
            "out": ""
          }
        ],
        "features": [
          "input",
          "log"
        ],
        "revision": 1
      },
      {
        "id": "number-input",
        "title": {
          "en": "Text becomes a number",
          "ru": "Текст становится числом",
          "uk": "Текст стає числом"
        },
        "learn": {
          "en": "input() returns text. Number(text) converts a numeric string. Otherwise + may join strings: \"4\" + \"2\" is \"42\".",
          "ru": "input() возвращает текст. Number(текст) превращает числовую строку в число. Иначе + может склеить строки: \"4\" + \"2\" даст \"42\".",
          "uk": "input() повертає текст. Number(текст) перетворює числовий рядок на число. Інакше + може склеїти рядки: \"4\" + \"2\" дасть \"42\"."
        },
        "instruction": {
          "en": "Read an integer n. Print n plus 10 as a number.",
          "ru": "Прочитай целое n. Выведи число n плюс 10.",
          "uk": "Прочитай ціле n. Виведи число n плюс 10."
        },
        "example": "const age = Number(input());\nconsole.log(age + 2);",
        "starter": "const n = Number(input());\n",
        "cases": [
          {
            "input": [
              "4"
            ],
            "out": "14"
          },
          {
            "input": [
              "0"
            ],
            "out": "10"
          },
          {
            "input": [
              "-10"
            ],
            "out": "0"
          },
          {
            "input": [
              "20"
            ],
            "out": "30"
          }
        ],
        "features": [
          "Number",
          "+"
        ],
        "revision": 1
      },
      {
        "id": "update-value",
        "title": {
          "en": "Change a saved value",
          "ru": "Измени сохранённое значение",
          "uk": "Зміни збережене значення"
        },
        "learn": {
          "en": "let permits reassignment. In score = score + 3, the right side reads the old score. The = stores the new result; it is not a mathematical equality.",
          "ru": "let разрешает менять значение. В score = score + 3 справа берётся старое score. Знак = сохраняет новый результат, а не обозначает математическое равенство.",
          "uk": "let дозволяє змінювати значення. У score = score + 3 праворуч береться старе score. Знак = зберігає новий результат, а не позначає математичну рівність."
        },
        "instruction": {
          "en": "Read coins as a number. Increase the saved coins by 5, then print coins.",
          "ru": "Прочитай число coins. Увеличь сохранённое coins на 5, затем выведи coins.",
          "uk": "Прочитай число coins. Збільш збережене coins на 5, потім виведи coins."
        },
        "example": "let score = 7;\nscore = score + 3;\nconsole.log(score);",
        "starter": "let coins = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "5"
          },
          {
            "input": [
              "3"
            ],
            "out": "8"
          },
          {
            "input": [
              "15"
            ],
            "out": "20"
          },
          {
            "input": [
              "-5"
            ],
            "out": "0"
          }
        ],
        "features": [
          "let",
          "AssignmentExpression"
        ],
        "revision": 1
      },
      {
        "id": "greeting",
        "title": {
          "en": "Build a message",
          "ru": "Собери сообщение",
          "uk": "Склади повідомлення"
        },
        "learn": {
          "en": "A template string uses backticks. ${name} inserts the current value of name. Ordinary quotes do not substitute it.",
          "ru": "Шаблонная строка пишется в обратных кавычках. ${name} вставляет текущее значение name. Обычные кавычки не подставляют его.",
          "uk": "Шаблонний рядок пишеться у зворотних лапках. ${name} вставляє поточне значення name. Звичайні лапки не підставляють його."
        },
        "instruction": {
          "en": "Read name. Print Hello, NAME! with the actual name. Use a template string.",
          "ru": "Прочитай name. Выведи Hello, ИМЯ! с введённым именем. Используй шаблонную строку.",
          "uk": "Прочитай name. Виведи Hello, ІМ’Я! із введеним ім’ям. Використай шаблонний рядок."
        },
        "example": "const item = \"book\";\nconsole.log(`One ${item}.`);",
        "starter": "const name = input();\n",
        "cases": [
          {
            "input": [
              "Ada"
            ],
            "out": "Hello, Ada!"
          },
          {
            "input": [
              "Alex"
            ],
            "out": "Hello, Alex!"
          },
          {
            "input": [
              "Code Bloom"
            ],
            "out": "Hello, Code Bloom!"
          }
        ],
        "features": [
          "TemplateLiteral"
        ],
        "revision": 1
      }
    ]
  },
  {
    "id": "decisions",
    "title": {
      "en": "Make decisions",
      "ru": "Принимай решения",
      "uk": "Ухвалюй рішення"
    },
    "intro": {
      "en": "A comparison produces true or false. if runs its braces only when the condition is true. else handles the other case. === compares without converting types; && needs both checks, || needs at least one.",
      "ru": "Сравнение даёт true или false. if выполняет команды в фигурных скобках, когда условие верно. else обрабатывает другой случай. === сравнивает без преобразования типов; && требует обе проверки, || — хотя бы одну.",
      "uk": "Порівняння дає true або false. if виконує команди у фігурних дужках, коли умова істинна. else обробляє інший випадок. === порівнює без перетворення типів; && потребує обидві перевірки, || — хоча б одну."
    },
    "example": "const age = Number(input());\nif (age >= 18) {\n  console.log(\"Adult\");\n} else {\n  console.log(\"Junior\");\n}",
    "notes": [
      {
        "en": "Read and convert age before comparing. >= includes exactly 18.",
        "ru": "Сначала прочитай и преобразуй age. >= включает ровно 18.",
        "uk": "Спочатку прочитай і перетвори age. >= включає рівно 18."
      },
      {
        "en": "Braces group the commands in a branch. Exactly one of these two branches runs.",
        "ru": "Скобки группируют команды ветки. Здесь выполняется ровно одна ветка.",
        "uk": "Дужки групують команди гілки. Тут виконується рівно одна гілка."
      }
    ],
    "tasks": [
      {
        "id": "strict-match",
        "title": {
          "en": "A precise match",
          "ru": "Точное совпадение",
          "uk": "Точний збіг"
        },
        "learn": {
          "en": "=== asks whether two values are equal in both type and value. Use quotes around the text being compared.",
          "ru": "=== проверяет совпадение типа и значения. Сравниваемый текст заключают в кавычки.",
          "uk": "=== перевіряє збіг типу та значення. Текст для порівняння беруть у лапки."
        },
        "instruction": {
          "en": "Read word. Print whether it is exactly ready: true or false.",
          "ru": "Прочитай word. Выведи, равно ли оно ровно ready: true или false.",
          "uk": "Прочитай word. Виведи, чи дорівнює воно точно ready: true або false."
        },
        "example": "console.log(\"open\" === \"closed\");",
        "starter": "const word = input();\n",
        "cases": [
          {
            "input": [
              "ready"
            ],
            "out": "true"
          },
          {
            "input": [
              "Ready"
            ],
            "out": "false"
          },
          {
            "input": [
              "no"
            ],
            "out": "false"
          },
          {
            "input": [
              ""
            ],
            "out": "false"
          }
        ],
        "features": [
          "==="
        ],
        "revision": 1
      },
      {
        "id": "positive-only",
        "title": {
          "en": "One condition, one action",
          "ru": "Одно условие — одно действие",
          "uk": "Одна умова — одна дія"
        },
        "learn": {
          "en": "An if does not need an else. When the condition is false, JavaScript skips its braces and continues below.",
          "ru": "У if не обязательно есть else. Когда условие ложно, JavaScript пропускает его блок и идёт дальше.",
          "uk": "У if не обов’язково є else. Коли умова хибна, JavaScript пропускає його блок і йде далі."
        },
        "instruction": {
          "en": "Read n. Only if n is greater than zero, print Positive. Otherwise print nothing.",
          "ru": "Прочитай n. Только если n больше нуля, выведи Positive. Иначе ничего не выводи.",
          "uk": "Прочитай n. Лише якщо n більше нуля, виведи Positive. Інакше нічого не виводь."
        },
        "example": "if (4 > 2) {\n  console.log(\"Bigger\");\n}",
        "starter": "const n = Number(input());\n",
        "cases": [
          {
            "input": [
              "1"
            ],
            "out": "Positive"
          },
          {
            "input": [
              "0"
            ],
            "out": ""
          },
          {
            "input": [
              "-3"
            ],
            "out": ""
          },
          {
            "input": [
              "20"
            ],
            "out": "Positive"
          }
        ],
        "features": [
          "IfStatement"
        ],
        "revision": 1
      },
      {
        "id": "even-odd",
        "title": {
          "en": "Choose one of two answers",
          "ru": "Выбери один из двух ответов",
          "uk": "Обери одну з двох відповідей"
        },
        "learn": {
          "en": "% returns a remainder. A number is even when its remainder after division by 2 is 0. else has no condition.",
          "ru": "% возвращает остаток. Чётное число при делении на 2 даёт остаток 0. У else нет условия.",
          "uk": "% повертає остачу. Парне число при діленні на 2 дає остачу 0. У else немає умови."
        },
        "instruction": {
          "en": "Read integer n. Print Even if it is even, otherwise Odd.",
          "ru": "Прочитай целое n. Выведи Even для чётного, иначе Odd.",
          "uk": "Прочитай ціле n. Виведи Even для парного, інакше Odd."
        },
        "example": "console.log(10 % 3); // 1",
        "starter": "const n = Number(input());\n",
        "cases": [
          {
            "input": [
              "2"
            ],
            "out": "Even"
          },
          {
            "input": [
              "3"
            ],
            "out": "Odd"
          },
          {
            "input": [
              "0"
            ],
            "out": "Even"
          },
          {
            "input": [
              "-4"
            ],
            "out": "Even"
          },
          {
            "input": [
              "-3"
            ],
            "out": "Odd"
          }
        ],
        "features": [
          "IfStatement",
          "%"
        ],
        "revision": 1
      },
      {
        "id": "three-signs",
        "title": {
          "en": "Three possible states",
          "ru": "Три возможных состояния",
          "uk": "Три можливі стани"
        },
        "learn": {
          "en": "else if asks the next question only if the earlier one was false. After excluding positive and negative values, only zero remains.",
          "ru": "else if задаёт следующий вопрос, только если предыдущий ответ был «нет». После исключения положительных и отрицательных значений остаётся ноль.",
          "uk": "else if ставить наступне запитання лише коли попередня відповідь була «ні». Після виключення додатних і від’ємних значень залишається нуль."
        },
        "instruction": {
          "en": "Read n. Print Positive, Negative or Zero according to its sign.",
          "ru": "Прочитай n. Выведи Positive, Negative или Zero в зависимости от знака.",
          "uk": "Прочитай n. Виведи Positive, Negative або Zero залежно від знака."
        },
        "example": "if (7 > 10) {\n  console.log(\"High\");\n} else if (7 > 5) {\n  console.log(\"Middle\");\n} else {\n  console.log(\"Low\");\n}",
        "starter": "const n = Number(input());\n",
        "cases": [
          {
            "input": [
              "7"
            ],
            "out": "Positive"
          },
          {
            "input": [
              "-4"
            ],
            "out": "Negative"
          },
          {
            "input": [
              "0"
            ],
            "out": "Zero"
          },
          {
            "input": [
              "1"
            ],
            "out": "Positive"
          },
          {
            "input": [
              "-1"
            ],
            "out": "Negative"
          }
        ],
        "features": [
          "IfStatement"
        ],
        "revision": 1
      },
      {
        "id": "both-checks",
        "title": {
          "en": "Both conditions",
          "ru": "Оба условия",
          "uk": "Обидві умови"
        },
        "learn": {
          "en": "&& means AND: each complete comparison must be true. Think of a door with two locks.",
          "ru": "&& означает И: каждое полное сравнение должно быть истинным. Представь дверь с двумя замками.",
          "uk": "&& означає І: кожне повне порівняння має бути істинним. Уяви двері з двома замками."
        },
        "instruction": {
          "en": "Read n. Print Inside if n is from 10 to 20 inclusive, otherwise Outside. Use &&.",
          "ru": "Прочитай n. Выведи Inside для диапазона от 10 до 20 включительно, иначе Outside. Используй &&.",
          "uk": "Прочитай n. Виведи Inside для діапазону від 10 до 20 включно, інакше Outside. Використай &&."
        },
        "example": "console.log(8 >= 5 && 8 <= 12);",
        "starter": "const n = Number(input());\n",
        "cases": [
          {
            "input": [
              "9"
            ],
            "out": "Outside"
          },
          {
            "input": [
              "10"
            ],
            "out": "Inside"
          },
          {
            "input": [
              "15"
            ],
            "out": "Inside"
          },
          {
            "input": [
              "20"
            ],
            "out": "Inside"
          },
          {
            "input": [
              "21"
            ],
            "out": "Outside"
          }
        ],
        "features": [
          "&&"
        ],
        "revision": 1
      },
      {
        "id": "either-check",
        "title": {
          "en": "Either condition",
          "ru": "Хотя бы одно условие",
          "uk": "Хоча б одна умова"
        },
        "learn": {
          "en": "|| means OR. Repeat the full comparison on each side: day === \"Sat\" || day === \"Sun\". A bare word is not the second comparison.",
          "ru": "|| означает ИЛИ. С обеих сторон нужна полная проверка: day === \"Sat\" || day === \"Sun\". Одно слово не заменяет второе сравнение.",
          "uk": "|| означає АБО. З обох боків потрібна повна перевірка: day === \"Sat\" || day === \"Sun\". Одне слово не замінює другого порівняння."
        },
        "instruction": {
          "en": "Read day. Print Rest for Sat or Sun, otherwise Work. Use ||.",
          "ru": "Прочитай day. Выведи Rest для Sat или Sun, иначе Work. Используй ||.",
          "uk": "Прочитай day. Виведи Rest для Sat або Sun, інакше Work. Використай ||."
        },
        "example": "console.log(\"red\" === \"red\" || \"red\" === \"blue\");",
        "starter": "const day = input();\n",
        "cases": [
          {
            "input": [
              "Sat"
            ],
            "out": "Rest"
          },
          {
            "input": [
              "Sun"
            ],
            "out": "Rest"
          },
          {
            "input": [
              "Mon"
            ],
            "out": "Work"
          },
          {
            "input": [
              "unknown"
            ],
            "out": "Work"
          },
          {
            "input": [
              ""
            ],
            "out": "Work"
          }
        ],
        "features": [
          "||"
        ],
        "revision": 1
      },
      {
        "id": "short-choice",
        "title": {
          "en": "Save a choice",
          "ru": "Сохрани выбранное",
          "uk": "Збережи обране"
        },
        "learn": {
          "en": "condition ? first : second chooses a value. The value before : is used when the condition is true; the other value is used when false. Save the result with =.",
          "ru": "условие ? первое : второе выбирает значение. До : стоит вариант для true, после — для false. Результат сохраняют через =.",
          "uk": "умова ? перше : друге обирає значення. До : стоїть варіант для true, після — для false. Результат зберігають через =."
        },
        "instruction": {
          "en": "Read age. Save Adult in label if age >= 18, otherwise Junior, using ?:, then print label.",
          "ru": "Прочитай age. Через ?: сохрани в label Adult при age >= 18, иначе Junior. Выведи label.",
          "uk": "Прочитай age. Через ?: збережи в label Adult при age >= 18, інакше Junior. Виведи label."
        },
        "example": "const weather = 8 < 10 ? \"Cool\" : \"Warm\";\nconsole.log(weather);",
        "starter": "const age = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "Junior"
          },
          {
            "input": [
              "17"
            ],
            "out": "Junior"
          },
          {
            "input": [
              "18"
            ],
            "out": "Adult"
          },
          {
            "input": [
              "30"
            ],
            "out": "Adult"
          }
        ],
        "features": [
          "ConditionalExpression"
        ],
        "revision": 1
      }
    ]
  },
  {
    "id": "loops",
    "title": {
      "en": "Repeat and accumulate",
      "ru": "Повторяй и накапливай",
      "uk": "Повторюй і накопичуй"
    },
    "intro": {
      "en": "A loop checks, runs its body, and returns to the check. Keep the boundary separate from the changing counter. n stays the end point; i starts at 1. i = i + 1 reads the old i, adds one, then saves the new value. Without this change a while may never stop.",
      "ru": "Цикл проверяет условие, выполняет блок и возвращается к проверке. Граница и меняющийся счётчик — разные переменные. n остаётся концом, i начинается с 1. i = i + 1 берёт старое i, прибавляет 1 и сохраняет новое значение. Без изменения while может не закончиться.",
      "uk": "Цикл перевіряє умову, виконує блок і повертається до перевірки. Межа та змінний лічильник — різні змінні. n залишається кінцем, i починається з 1. i = i + 1 бере старе i, додає 1 та зберігає нове значення. Без зміни while може не завершитися."
    },
    "example": "let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  i = i + 1;\n}",
    "notes": [
      {
        "en": "Start: i is 1. The condition 1 <= 3 is true, so print 1.",
        "ru": "Старт: i равно 1. Условие 1 <= 3 верно, выводим 1.",
        "uk": "Старт: i дорівнює 1. Умова 1 <= 3 істинна, виводимо 1."
      },
      {
        "en": "Save 2 into i, return to while. Repeat for 2 and 3. When i becomes 4 the condition is false.",
        "ru": "Сохрани 2 в i и вернись к while. Повтори для 2 и 3. При i равном 4 условие ложно.",
        "uk": "Збережи 2 в i та повернися до while. Повтори для 2 та 3. Коли i дорівнює 4, умова хибна."
      }
    ],
    "tasks": [
      {
        "id": "while-count",
        "title": {
          "en": "Count up with while",
          "ru": "Считаем вверх с while",
          "uk": "Рахуємо вгору з while"
        },
        "learn": {
          "en": "Start i at 1. Print first, then increase i. Use <= so the final n is included. If n is 0, the first check already fails.",
          "ru": "Начни i с 1. Сначала выводи, потом увеличивай i. Используй <=, чтобы включить само n. При n = 0 первая проверка сразу ложная.",
          "uk": "Почни i з 1. Спочатку виводь, потім збільшуй i. Використай <=, щоб включити саме n. Коли n = 0, перша перевірка одразу хибна."
        },
        "instruction": {
          "en": "Read n from 0 to 20. Use while to print 1 through n, each on its own line.",
          "ru": "Прочитай n от 0 до 20. Через while выведи числа от 1 до n, каждое с новой строки.",
          "uk": "Прочитай n від 0 до 20. Через while виведи числа від 1 до n, кожне з нового рядка."
        },
        "example": "let level = 2;\nwhile (level <= 4) {\n  console.log(level);\n  level = level + 1;\n}",
        "starter": "const n = Number(input());\nlet i = 1;\n",
        "cases": [
          {
            "input": [
              "3"
            ],
            "out": "1\n2\n3"
          },
          {
            "input": [
              "0"
            ],
            "out": ""
          },
          {
            "input": [
              "1"
            ],
            "out": "1"
          },
          {
            "input": [
              "5"
            ],
            "out": "1\n2\n3\n4\n5"
          }
        ],
        "features": [
          "WhileStatement"
        ],
        "revision": 1
      },
      {
        "id": "count-down",
        "title": {
          "en": "Count down",
          "ru": "Обратный отсчёт",
          "uk": "Зворотний відлік"
        },
        "learn": {
          "en": "A decreasing counter uses i = i - 1. Decide whether zero should be printed before choosing > or >=.",
          "ru": "Убывающий счётчик меняется через i = i - 1. До выбора > или >= реши, нужно ли выводить ноль.",
          "uk": "Спадний лічильник змінюється через i = i - 1. До вибору > або >= виріши, чи треба виводити нуль."
        },
        "instruction": {
          "en": "Read n from 0 to 20. Use while to print n down to 1. For 0 print nothing.",
          "ru": "Прочитай n от 0 до 20. Через while выведи от n до 1. Для 0 ничего не выводи.",
          "uk": "Прочитай n від 0 до 20. Через while виведи від n до 1. Для 0 нічого не виводь."
        },
        "example": "let lives = 2;\nwhile (lives > 0) {\n  console.log(lives);\n  lives = lives - 1;\n}",
        "starter": "let n = Number(input());\n",
        "cases": [
          {
            "input": [
              "3"
            ],
            "out": "3\n2\n1"
          },
          {
            "input": [
              "0"
            ],
            "out": ""
          },
          {
            "input": [
              "1"
            ],
            "out": "1"
          },
          {
            "input": [
              "5"
            ],
            "out": "5\n4\n3\n2\n1"
          }
        ],
        "features": [
          "WhileStatement"
        ],
        "revision": 1
      },
      {
        "id": "for-count",
        "title": {
          "en": "A compact counter",
          "ru": "Счётчик в одной строке",
          "uk": "Лічильник в одному рядку"
        },
        "learn": {
          "en": "for (start; condition; change) collects the three loop parts. i++ means increase i by 1. The body still uses braces.",
          "ru": "for (старт; условие; изменение) собирает три части цикла. i++ означает увеличение i на 1. Блок по-прежнему заключён в фигурные скобки.",
          "uk": "for (старт; умова; зміна) збирає три частини циклу. i++ означає збільшення i на 1. Блок і далі у фігурних дужках."
        },
        "instruction": {
          "en": "Read n from 0 to 20. Use for to print every integer from 0 through n.",
          "ru": "Прочитай n от 0 до 20. Через for выведи все целые от 0 до n включительно.",
          "uk": "Прочитай n від 0 до 20. Через for виведи всі цілі від 0 до n включно."
        },
        "example": "for (let i = 2; i <= 4; i++) {\n  console.log(i);\n}",
        "starter": "const n = Number(input());\n",
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
            "out": "0\n1"
          },
          {
            "input": [
              "4"
            ],
            "out": "0\n1\n2\n3\n4"
          },
          {
            "input": [
              "7"
            ],
            "out": "0\n1\n2\n3\n4\n5\n6\n7"
          }
        ],
        "features": [
          "ForStatement"
        ],
        "revision": 1
      },
      {
        "id": "sum-range",
        "title": {
          "en": "Remember a running total",
          "ru": "Сохрани накопленную сумму",
          "uk": "Збережи накопичену суму"
        },
        "learn": {
          "en": "Create total before the loop. Each step saves total + i back into total. Print only after the loop, otherwise you print intermediate totals.",
          "ru": "Создай total до цикла. На каждом шаге сохраняй total + i обратно в total. Выводи после цикла, иначе получатся промежуточные суммы.",
          "uk": "Створи total до циклу. На кожному кроці зберігай total + i назад у total. Виводь після циклу, інакше отримаєш проміжні суми."
        },
        "instruction": {
          "en": "Read n from 0 to 20. Use a loop to calculate 1 + 2 + ... + n. Print one final total.",
          "ru": "Прочитай n от 0 до 20. Циклом вычисли 1 + 2 + ... + n. Выведи одну итоговую сумму.",
          "uk": "Прочитай n від 0 до 20. Циклом обчисли 1 + 2 + ... + n. Виведи одну підсумкову суму."
        },
        "example": "let total = 0;\nfor (let x = 2; x <= 4; x++) {\n  total = total + x;\n}\nconsole.log(total);",
        "starter": "const n = Number(input());\nlet total = 0;\n",
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
              "4"
            ],
            "out": "10"
          },
          {
            "input": [
              "10"
            ],
            "out": "55"
          }
        ],
        "features": [
          "ForStatement"
        ],
        "revision": 1
      },
      {
        "id": "skip-three",
        "title": {
          "en": "Skip an iteration",
          "ru": "Пропусти повторение",
          "uk": "Пропусти повторення"
        },
        "learn": {
          "en": "continue skips the rest of the current body and moves to the next iteration. In a for loop the counter update still happens.",
          "ru": "continue пропускает остаток текущего блока и переходит к следующему повторению. В for изменение счётчика всё равно выполняется.",
          "uk": "continue пропускає решту поточного блоку та переходить до наступного повторення. У for зміна лічильника все одно виконується."
        },
        "instruction": {
          "en": "Read n from 0 to 15. Print 1 through n except numbers divisible by 3. Use continue.",
          "ru": "Прочитай n от 0 до 15. Выведи от 1 до n, пропуская кратные 3. Используй continue.",
          "uk": "Прочитай n від 0 до 15. Виведи від 1 до n, пропускаючи кратні 3. Використай continue."
        },
        "example": "for (let x = 1; x <= 4; x++) {\n  if (x === 2) continue;\n  console.log(x);\n}",
        "starter": "const n = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": ""
          },
          {
            "input": [
              "3"
            ],
            "out": "1\n2"
          },
          {
            "input": [
              "7"
            ],
            "out": "1\n2\n4\n5\n7"
          },
          {
            "input": [
              "10"
            ],
            "out": "1\n2\n4\n5\n7\n8\n10"
          }
        ],
        "features": [
          "ContinueStatement"
        ],
        "revision": 1
      },
      {
        "id": "stop-zero",
        "title": {
          "en": "Stop at a signal",
          "ru": "Остановись по сигналу",
          "uk": "Зупинися за сигналом"
        },
        "learn": {
          "en": "break ends the whole nearest loop. Read each new value inside the loop; do not keep checking the first value forever.",
          "ru": "break завершает весь ближайший цикл. Читай новое значение внутри цикла, а не проверяй первое бесконечно.",
          "uk": "break завершує весь найближчий цикл. Читай нове значення всередині циклу, а не перевіряй перше нескінченно."
        },
        "instruction": {
          "en": "Input contains integers, one per line, ending in 0. Print their sum before the first 0. Use break. There is always a 0.",
          "ru": "Во вводе целые по одному в строке, в конце 0. Выведи сумму до первого 0. Используй break. Ноль есть всегда.",
          "uk": "У введенні цілі по одному в рядку, наприкінці 0. Виведи суму до першого 0. Використай break. Нуль є завжди."
        },
        "example": "while (true) {\n  const word = input();\n  if (word === \"stop\") break;\n  console.log(word);\n}",
        "starter": "let total = 0;\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "3",
              "7",
              "0"
            ],
            "out": "10"
          },
          {
            "input": [
              "-4",
              "2",
              "0"
            ],
            "out": "-2"
          },
          {
            "input": [
              "2",
              "0",
              "99"
            ],
            "out": "2"
          }
        ],
        "features": [
          "BreakStatement"
        ],
        "revision": 1
      }
    ]
  },
  {
    "id": "functions",
    "title": {
      "en": "Build reusable functions",
      "ru": "Создавай функции",
      "uk": "Створюй функції"
    },
    "intro": {
      "en": "A function names a small job. Parameters receive values at a call. return sends a result to the caller and stops the function. console.log only displays: printing a result is different from returning it. A function can be called many times with different inputs.",
      "ru": "Функция даёт имя небольшой работе. Параметры получают значения при вызове. return возвращает результат вызывающему коду и завершает функцию. console.log только показывает: вывести и вернуть — разные действия. Функцию можно вызывать много раз с разными данными.",
      "uk": "Функція дає ім’я невеликій роботі. Параметри отримують значення під час виклику. return повертає результат коду, що викликав функцію, та завершує її. console.log лише показує: вивести й повернути — різні дії. Функцію можна викликати багато разів із різними даними."
    },
    "example": "function double(number) {\n  return number * 2;\n}\nconst result = double(6);\nconsole.log(result);",
    "notes": [
      {
        "en": "number is the parameter. During double(6), number is 6.",
        "ru": "number — параметр. При вызове double(6) он равен 6.",
        "uk": "number — параметр. Під час виклику double(6) він дорівнює 6."
      },
      {
        "en": "return produces 12. The call is replaced by its result, which is saved in result and then printed.",
        "ru": "return даёт 12. Результат вызова сохраняется в result, затем выводится.",
        "uk": "return дає 12. Результат виклику зберігається в result, потім виводиться."
      }
    ],
    "tasks": [
      {
        "id": "function-triple",
        "title": {
          "en": "Your first return",
          "ru": "Первый return",
          "uk": "Перший return"
        },
        "learn": {
          "en": "The function must return its calculation. Call it after reading the input and display the returned value.",
          "ru": "Функция должна вернуть вычисленный результат. Вызови её после чтения ввода и выведи возвращённое значение.",
          "uk": "Функція має повернути обчислений результат. Виклич її після читання введення та виведи повернуте значення."
        },
        "instruction": {
          "en": "Write triple(n), returning n * 3. Read n, call triple and print its result.",
          "ru": "Напиши triple(n), возвращающую n * 3. Прочитай n, вызови triple и выведи результат.",
          "uk": "Напиши triple(n), що повертає n * 3. Прочитай n, виклич triple та виведи результат."
        },
        "example": "function square(x) {\n  return x * x;\n}\nconsole.log(square(4));",
        "starter": "function triple(n) {\n  // Return a value.\n}\nconst n = Number(input());\nconsole.log(triple(n));\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "2"
            ],
            "out": "6"
          },
          {
            "input": [
              "-3"
            ],
            "out": "-9"
          },
          {
            "input": [
              "11"
            ],
            "out": "33"
          }
        ],
        "features": [
          "FunctionDeclaration",
          "ReturnStatement"
        ],
        "revision": 1
      },
      {
        "id": "function-two",
        "title": {
          "en": "Two parameters",
          "ru": "Два параметра",
          "uk": "Два параметри"
        },
        "learn": {
          "en": "Parameters are separated by commas. The order of arguments matches the order of parameters.",
          "ru": "Параметры разделяют запятыми. Порядок аргументов соответствует порядку параметров.",
          "uk": "Параметри розділяють комами. Порядок аргументів відповідає порядку параметрів."
        },
        "instruction": {
          "en": "Write area(width, height), returning width * height. Read width and height on separate lines; print the returned area.",
          "ru": "Напиши area(width, height), возвращающую width * height. Прочитай ширину и высоту с разных строк, выведи площадь.",
          "uk": "Напиши area(width, height), що повертає width * height. Прочитай ширину та висоту з різних рядків, виведи площу."
        },
        "example": "function sum(a, b) { return a + b; }\nconsole.log(sum(2, 5));",
        "starter": "function area(width, height) {\n}\nconst width = Number(input());\nconst height = Number(input());\n",
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
              "1",
              "7"
            ],
            "out": "7"
          },
          {
            "input": [
              "5",
              "2"
            ],
            "out": "10"
          }
        ],
        "features": [
          "FunctionDeclaration",
          "ReturnStatement"
        ],
        "revision": 1
      },
      {
        "id": "default-parameter",
        "title": {
          "en": "A default value",
          "ru": "Значение по умолчанию",
          "uk": "Значення за замовчуванням"
        },
        "learn": {
          "en": "A default is used only when the argument is missing or undefined. Passing 0 does not activate the default.",
          "ru": "Значение по умолчанию берётся только при отсутствии аргумента или undefined. Переданный 0 не включает значение по умолчанию.",
          "uk": "Значення за замовчуванням береться лише за відсутності аргументу або undefined. Переданий 0 не вмикає значення за замовчуванням."
        },
        "instruction": {
          "en": "Write addBonus(score, bonus = 5). Read score. Print addBonus(score), then addBonus(score, 0) on the next line.",
          "ru": "Напиши addBonus(score, bonus = 5). Прочитай score. Выведи addBonus(score), затем addBonus(score, 0) с новой строки.",
          "uk": "Напиши addBonus(score, bonus = 5). Прочитай score. Виведи addBonus(score), потім addBonus(score, 0) з нового рядка."
        },
        "example": "function multiply(x, factor = 2) { return x * factor; }\nconsole.log(multiply(3));",
        "starter": "function addBonus(score, bonus = 5) {\n}\nconst score = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "5\n0"
          },
          {
            "input": [
              "10"
            ],
            "out": "15\n10"
          },
          {
            "input": [
              "-2"
            ],
            "out": "3\n-2"
          }
        ],
        "features": [
          "AssignmentPattern"
        ],
        "revision": 1
      },
      {
        "id": "early-return",
        "title": {
          "en": "Leave the function early",
          "ru": "Заверши функцию раньше",
          "uk": "Заверши функцію раніше"
        },
        "learn": {
          "en": "An early return handles a special case before the normal calculation. The code below that return is skipped for this call.",
          "ru": "Ранний return обрабатывает особый случай до обычного вычисления. Остальной код функции в этом вызове уже не выполняется.",
          "uk": "Ранній return обробляє особливий випадок до звичайного обчислення. Решта коду функції в цьому виклику вже не виконується."
        },
        "instruction": {
          "en": "Write fee(total): return 0 when total >= 100, otherwise 10. Read total and print fee(total).",
          "ru": "Напиши fee(total): верни 0 при total >= 100, иначе 10. Прочитай total и выведи fee(total).",
          "uk": "Напиши fee(total): поверни 0 при total >= 100, інакше 10. Прочитай total та виведи fee(total)."
        },
        "example": "function safeHalf(n) {\n  if (n < 0) return 0;\n  return n / 2;\n}",
        "starter": "function fee(total) {\n}\nconst total = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "10"
          },
          {
            "input": [
              "99"
            ],
            "out": "10"
          },
          {
            "input": [
              "100"
            ],
            "out": "0"
          },
          {
            "input": [
              "101"
            ],
            "out": "0"
          }
        ],
        "features": [
          "ReturnStatement",
          "IfStatement"
        ],
        "revision": 1
      },
      {
        "id": "arrow-function",
        "title": {
          "en": "A small arrow function",
          "ru": "Небольшая стрелочная функция",
          "uk": "Невелика стрілкова функція"
        },
        "learn": {
          "en": "n => n + 1 is a function expression. Without braces the expression is returned automatically. With braces, write return explicitly.",
          "ru": "n => n + 1 — выражение функции. Без фигурных скобок результат выражения возвращается автоматически. Со скобками нужен явный return.",
          "uk": "n => n + 1 — вираз функції. Без фігурних дужок результат виразу повертається автоматично. Із дужками потрібний явний return."
        },
        "instruction": {
          "en": "Create an arrow function square. Read n and print square(n), equal to n * n.",
          "ru": "Создай стрелочную square. Прочитай n и выведи square(n), равное n * n.",
          "uk": "Створи стрілкову square. Прочитай n та виведи square(n), що дорівнює n * n."
        },
        "example": "const increment = n => n + 1;\nconsole.log(increment(6));",
        "starter": "const n = Number(input());\n// Define square, then call it.\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "2"
            ],
            "out": "4"
          },
          {
            "input": [
              "-4"
            ],
            "out": "16"
          },
          {
            "input": [
              "7"
            ],
            "out": "49"
          }
        ],
        "features": [
          "ArrowFunctionExpression"
        ],
        "revision": 1
      },
      {
        "id": "pass-function",
        "title": {
          "en": "Pass a function as a value",
          "ru": "Передай функцию как значение",
          "uk": "Передай функцію як значення"
        },
        "learn": {
          "en": "A callback is a function passed into another function. Passing transform does not call it; transform(value) does.",
          "ru": "Callback — функция, переданная в другую функцию. Передача transform не вызывает её; transform(value) — вызывает.",
          "uk": "Callback — функція, передана до іншої функції. Передача transform не викликає її; transform(value) — викликає."
        },
        "instruction": {
          "en": "Write applyTwice(value, transform): apply transform twice and return the final value. Read n; use x => x + 3 and print the result.",
          "ru": "Напиши applyTwice(value, transform): примени transform дважды и верни итог. Прочитай n, используй x => x + 3 и выведи результат.",
          "uk": "Напиши applyTwice(value, transform): застосуй transform двічі та поверни підсумок. Прочитай n, використай x => x + 3 і виведи результат."
        },
        "example": "function apply(value, fn) { return fn(value); }\nconsole.log(apply(4, x => x * 2));",
        "starter": "function applyTwice(value, transform) {\n}\nconst n = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "6"
          },
          {
            "input": [
              "2"
            ],
            "out": "8"
          },
          {
            "input": [
              "-6"
            ],
            "out": "0"
          }
        ],
        "features": [
          "FunctionDeclaration",
          "ArrowFunctionExpression"
        ],
        "revision": 1
      }
    ]
  },
  {
    "id": "strings-arrays",
    "title": {
      "en": "Text and arrays",
      "ru": "Текст и массивы",
      "uk": "Текст і масиви"
    },
    "intro": {
      "en": "A string is text. An array is an ordered list; indexes start at 0. Methods return values: save the return value if you need it. map transforms every item, filter keeps matching items, reduce accumulates one result. Each callback receives the current item.",
      "ru": "Строка — текст. Массив — упорядоченный список; индексы начинаются с 0. Методы возвращают значения: сохрани результат, если он нужен. map преобразует элементы, filter оставляет подходящие, reduce накапливает один итог. Callback получает текущий элемент.",
      "uk": "Рядок — текст. Масив — впорядкований список; індекси починаються з 0. Методи повертають значення: збережи результат, якщо він потрібен. map перетворює елементи, filter залишає відповідні, reduce накопичує один підсумок. Callback отримує поточний елемент."
    },
    "example": "const words = \"red,blue\".split(\",\");\nconst loud = words.map(word => word.toUpperCase());\nconsole.log(loud.join(\" | \"));",
    "notes": [
      {
        "en": "split divides text into an array at each separator. It does not remove spaces by itself.",
        "ru": "split делит текст на массив по разделителю. Сам по себе он не убирает пробелы.",
        "uk": "split ділить текст на масив за роздільником. Сам по собі він не прибирає пробіли."
      },
      {
        "en": "map returns a new array. join combines its items into one string with a chosen separator.",
        "ru": "map возвращает новый массив. join соединяет элементы в строку выбранным разделителем.",
        "uk": "map повертає новий масив. join поєднує елементи в рядок обраним роздільником."
      }
    ],
    "tasks": [
      {
        "id": "clean-command",
        "title": {
          "en": "Clean the edges, then the case",
          "ru": "Сначала края, затем регистр",
          "uk": "Спочатку краї, потім регістр"
        },
        "learn": {
          "en": "trim() removes spaces only at the edges. toLowerCase() changes letter case. Strings do not change in place: save the returned result.",
          "ru": "trim() убирает пробелы только по краям. toLowerCase() меняет регистр. Строки не меняются на месте: сохраняй возвращённый результат.",
          "uk": "trim() прибирає пробіли лише з країв. toLowerCase() змінює регістр. Рядки не змінюються на місці: зберігай повернутий результат."
        },
        "instruction": {
          "en": "Read message. Print its trimmed, lowercase version, preserving spaces between words.",
          "ru": "Прочитай message. Убери пробелы по краям и переведи в нижний регистр; пробелы между словами сохрани.",
          "uk": "Прочитай message. Прибери пробіли з країв і переведи в нижній регістр; пробіли між словами збережи."
        },
        "example": "const text = \"  SAVE Now  \";\nconst clean = text.trim().toLowerCase();\nconsole.log(clean);",
        "starter": "const message = input();\n",
        "cases": [
          {
            "input": [
              "  Hello  "
            ],
            "out": "hello"
          },
          {
            "input": [
              "TWO  WORDS"
            ],
            "out": "two  words"
          },
          {
            "input": [
              " word"
            ],
            "out": "word"
          },
          {
            "input": [
              "   "
            ],
            "out": ""
          }
        ],
        "features": [
          "trim",
          "toLowerCase"
        ],
        "revision": 1
      },
      {
        "id": "first-last",
        "title": {
          "en": "Find items by index",
          "ru": "Найди элементы по индексу",
          "uk": "Знайди елементи за індексом"
        },
        "learn": {
          "en": "items[0] is the first item. items.length counts items; the last index is length - 1.",
          "ru": "items[0] — первый элемент. items.length считает элементы; последний индекс равен length - 1.",
          "uk": "items[0] — перший елемент. items.length рахує елементи; останній індекс дорівнює length - 1."
        },
        "instruction": {
          "en": "Read a nonempty comma-separated line. Print the first item and the last item on separate lines.",
          "ru": "Прочитай непустую строку элементов через запятую. Выведи первый и последний с разных строк.",
          "uk": "Прочитай непорожній рядок елементів через кому. Виведи перший та останній з різних рядків."
        },
        "example": "const items = \"a,b,c\".split(\",\");\nconsole.log(items[0]);\nconsole.log(items.length);",
        "starter": "const items = input().split(\",\");\n",
        "cases": [
          {
            "input": [
              "red,blue,green"
            ],
            "out": "red\ngreen"
          },
          {
            "input": [
              "one"
            ],
            "out": "one\none"
          },
          {
            "input": [
              "a,b"
            ],
            "out": "a\nb"
          }
        ],
        "features": [
          "split"
        ],
        "revision": 1
      },
      {
        "id": "append-item",
        "title": {
          "en": "Append to an array",
          "ru": "Добавь в массив",
          "uk": "Додай до масиву"
        },
        "learn": {
          "en": "push(value) appends an item and changes the array. A const array can change its contents; const prevents assigning a different array to that name.",
          "ru": "push(значение) добавляет элемент и меняет массив. Содержимое const-массива можно менять; const запрещает присвоить этому имени другой массив.",
          "uk": "push(значення) додає елемент і змінює масив. Вміст const-масиву можна змінювати; const забороняє присвоїти цьому імені інший масив."
        },
        "instruction": {
          "en": "Read comma-separated items, then one new item on the next line. Append it using push and print the array joined by commas.",
          "ru": "Прочитай элементы через запятую, затем новый элемент со следующей строки. Добавь его через push и выведи массив через запятые.",
          "uk": "Прочитай елементи через кому, потім новий елемент із наступного рядка. Додай його через push і виведи масив через коми."
        },
        "example": "const tasks = [\"read\"];\ntasks.push(\"practice\");\nconsole.log(tasks.join(\",\"));",
        "starter": "const items = input().split(\",\");\nconst item = input();\n",
        "cases": [
          {
            "input": [
              "a,b",
              "c"
            ],
            "out": "a,b,c"
          },
          {
            "input": [
              "one",
              "two"
            ],
            "out": "one,two"
          },
          {
            "input": [
              "x,y",
              "x"
            ],
            "out": "x,y,x"
          }
        ],
        "features": [
          "push"
        ],
        "revision": 1
      },
      {
        "id": "array-total",
        "title": {
          "en": "Visit every value",
          "ru": "Посети каждое значение",
          "uk": "Відвідай кожне значення"
        },
        "learn": {
          "en": "split(\" \").map(Number) converts space-separated numbers to an array. for...of visits the values, rather than their indexes.",
          "ru": "split(\" \").map(Number) превращает числа через пробел в массив. for...of перебирает сами значения, а не их индексы.",
          "uk": "split(\" \").map(Number) перетворює числа через пробіл на масив. for...of перебирає самі значення, а не їхні індекси."
        },
        "instruction": {
          "en": "Read one line of integers separated by single spaces. Use for...of to sum them and print the total.",
          "ru": "Прочитай строку целых через одиночные пробелы. Сложи их через for...of и выведи сумму.",
          "uk": "Прочитай рядок цілих через одинарні пробіли. Додай їх через for...of та виведи суму."
        },
        "example": "const scores = [2, 5];\nlet total = 0;\nfor (const score of scores) total += score;\nconsole.log(total);",
        "starter": "const numbers = input().split(\" \").map(Number);\nlet total = 0;\n",
        "cases": [
          {
            "input": [
              "1 2 3"
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
              "-2 5"
            ],
            "out": "3"
          },
          {
            "input": [
              "10 10 10"
            ],
            "out": "30"
          }
        ],
        "features": [
          "ForOfStatement"
        ],
        "revision": 1
      },
      {
        "id": "map-double",
        "title": {
          "en": "Transform every item",
          "ru": "Преобразуй каждый элемент",
          "uk": "Перетвори кожен елемент"
        },
        "learn": {
          "en": "map calls your function once per item and builds a new array from the returned values. Return the new value, rather than just printing it.",
          "ru": "map вызывает функцию для каждого элемента и строит новый массив из возвращённых значений. Возвращай новое значение, а не просто выводи его.",
          "uk": "map викликає функцію для кожного елемента та будує новий масив із повернутих значень. Повертай нове значення, а не лише виводь його."
        },
        "instruction": {
          "en": "Read space-separated integers. Use map to double every value; print them joined by one space.",
          "ru": "Прочитай целые через пробел. Через map удвой каждое и выведи через один пробел.",
          "uk": "Прочитай цілі через пробіл. Через map подвой кожне та виведи через один пробіл."
        },
        "example": "const values = [1, 3];\nconst changed = values.map(x => x + 1);\nconsole.log(changed.join(\" \"));",
        "starter": "const numbers = input().split(\" \").map(Number);\n",
        "cases": [
          {
            "input": [
              "1 2 3"
            ],
            "out": "2 4 6"
          },
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "-3 4"
            ],
            "out": "-6 8"
          }
        ],
        "features": [
          "map"
        ],
        "revision": 1
      },
      {
        "id": "filter-positive",
        "title": {
          "en": "Keep only matching items",
          "ru": "Оставь подходящие элементы",
          "uk": "Залиш відповідні елементи"
        },
        "learn": {
          "en": "filter keeps an item when its callback returns true. It can return an empty array, whose join result is an empty string.",
          "ru": "filter оставляет элемент, если callback вернул true. Может получиться пустой массив: его join даст пустую строку.",
          "uk": "filter залишає елемент, якщо callback повернув true. Може утворитися порожній масив: його join дасть порожній рядок."
        },
        "instruction": {
          "en": "Read space-separated integers. Use filter to keep only numbers greater than zero. Print them separated by spaces.",
          "ru": "Прочитай целые через пробел. Через filter оставь только числа больше нуля и выведи через пробел.",
          "uk": "Прочитай цілі через пробіл. Через filter залиш лише числа більші за нуль і виведи через пробіл."
        },
        "example": "const even = [1, 2, 4].filter(n => n % 2 === 0);\nconsole.log(even.join(\" \"));",
        "starter": "const numbers = input().split(\" \").map(Number);\n",
        "cases": [
          {
            "input": [
              "-1 0 3 2"
            ],
            "out": "3 2"
          },
          {
            "input": [
              "0 -3"
            ],
            "out": ""
          },
          {
            "input": [
              "1"
            ],
            "out": "1"
          },
          {
            "input": [
              "4 4"
            ],
            "out": "4 4"
          }
        ],
        "features": [
          "filter"
        ],
        "revision": 1
      },
      {
        "id": "find-value",
        "title": {
          "en": "Find the first match",
          "ru": "Найди первое совпадение",
          "uk": "Знайди перший збіг"
        },
        "learn": {
          "en": "find returns the first matching value, or undefined if none matches. Test explicitly for undefined so a found 0 is not mistaken for a missing result.",
          "ru": "find возвращает первое подходящее значение или undefined, если его нет. Сравнивай с undefined явно: найденный 0 не означает отсутствие результата.",
          "uk": "find повертає перше відповідне значення або undefined, якщо його немає. Порівнюй з undefined явно: знайдений 0 не означає відсутності результату."
        },
        "instruction": {
          "en": "Read integers separated by spaces. Find the first even number. Print it, or None when no even number exists.",
          "ru": "Прочитай целые через пробел. Найди первое чётное и выведи его, либо None, если чётных нет.",
          "uk": "Прочитай цілі через пробіл. Знайди перше парне та виведи його, або None, якщо парних немає."
        },
        "example": "const found = [2, 7, 8].find(n => n > 5);\nconsole.log(found === undefined ? \"Missing\" : found);",
        "starter": "const numbers = input().split(\" \").map(Number);\n",
        "cases": [
          {
            "input": [
              "1 3 6 2"
            ],
            "out": "6"
          },
          {
            "input": [
              "0 3"
            ],
            "out": "0"
          },
          {
            "input": [
              "1 3"
            ],
            "out": "None"
          },
          {
            "input": [
              "-4 2"
            ],
            "out": "-4"
          }
        ],
        "features": [
          "find"
        ],
        "revision": 1
      },
      {
        "id": "reduce-total",
        "title": {
          "en": "Reduce to one result",
          "ru": "Сведи к одному результату",
          "uk": "Зведи до одного результату"
        },
        "learn": {
          "en": "reduce((total, item) => total + item, 0) starts with 0 and returns a new total each time. The second argument is the initial accumulator.",
          "ru": "reduce((total, item) => total + item, 0) начинает с 0 и каждый раз возвращает новую сумму. Второй аргумент задаёт начальное значение накопителя.",
          "uk": "reduce((total, item) => total + item, 0) починає з 0 та щоразу повертає нову суму. Другий аргумент задає початкове значення накопичувача."
        },
        "instruction": {
          "en": "Read integers separated by spaces. Use reduce with an initial 0 to print their sum.",
          "ru": "Прочитай целые через пробел. Через reduce с начальным 0 выведи сумму.",
          "uk": "Прочитай цілі через пробіл. Через reduce із початковим 0 виведи суму."
        },
        "example": "const total = [4, 6].reduce((sum, n) => sum + n, 0);\nconsole.log(total);",
        "starter": "const numbers = input().split(\" \").map(Number);\n",
        "cases": [
          {
            "input": [
              "1 2 3"
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
              "-2 5"
            ],
            "out": "3"
          }
        ],
        "features": [
          "reduce"
        ],
        "revision": 1
      }
    ]
  },
  {
    "id": "objects",
    "title": {
      "en": "Objects and collections",
      "ru": "Объекты и коллекции",
      "uk": "Об’єкти та колекції"
    },
    "intro": {
      "en": "Objects group named properties. Arrays keep an order, objects describe a thing. JSON is a text format for data, not executable JavaScript. A Set keeps unique values. A Map connects keys to values and remembers insertion order.",
      "ru": "Объекты объединяют именованные свойства. Массив хранит порядок, объект описывает сущность. JSON — текстовый формат данных, а не исполняемый JavaScript. Set хранит уникальные значения. Map связывает ключи со значениями и помнит порядок добавления.",
      "uk": "Об’єкти об’єднують іменовані властивості. Масив зберігає порядок, об’єкт описує сутність. JSON — текстовий формат даних, а не виконуваний JavaScript. Set зберігає унікальні значення. Map пов’язує ключі зі значеннями та пам’ятає порядок додавання."
    },
    "example": "const user = { name: \"Ada\", score: 7 };\nconst copy = { ...user, score: 8 };\nconsole.log(user.score);\nconsole.log(copy.score);",
    "notes": [
      {
        "en": "Properties have names. user.score accesses one property.",
        "ru": "У свойств есть имена. user.score обращается к одному свойству.",
        "uk": "Властивості мають імена. user.score звертається до однієї властивості."
      },
      {
        "en": "Spread makes a shallow copy; the following score overrides the copied score. Nested objects are still shared.",
        "ru": "Spread создаёт поверхностную копию; следующее score заменяет скопированное. Вложенные объекты всё ещё общие.",
        "uk": "Spread створює поверхневу копію; наступне score замінює скопійоване. Вкладені об’єкти й далі спільні."
      }
    ],
    "tasks": [
      {
        "id": "object-profile",
        "title": {
          "en": "Describe one thing",
          "ru": "Опиши одну сущность",
          "uk": "Опиши одну сутність"
        },
        "learn": {
          "en": "An object literal uses {key: value}. Read property values with a dot, for example book.title.",
          "ru": "Объект записывают как {ключ: значение}. Свойства читают через точку, например book.title.",
          "uk": "Об’єкт записують як {ключ: значення}. Властивості читають через крапку, наприклад book.title."
        },
        "instruction": {
          "en": "Read name, then age. Create user with these two properties. Print user.name and user.age on separate lines.",
          "ru": "Прочитай name, затем age. Создай user с этими свойствами. Выведи user.name и user.age с разных строк.",
          "uk": "Прочитай name, потім age. Створи user із цими властивостями. Виведи user.name та user.age з різних рядків."
        },
        "example": "const book = {title: \"Dune\", pages: 412};\nconsole.log(book.title);",
        "starter": "const name = input();\nconst age = Number(input());\n",
        "cases": [
          {
            "input": [
              "Ada",
              "20"
            ],
            "out": "Ada\n20"
          },
          {
            "input": [
              "Lee",
              "0"
            ],
            "out": "Lee\n0"
          },
          {
            "input": [
              "Sam",
              "42"
            ],
            "out": "Sam\n42"
          }
        ],
        "features": [
          "ObjectExpression"
        ],
        "revision": 1
      },
      {
        "id": "object-copy",
        "title": {
          "en": "Change a copy",
          "ru": "Измени копию",
          "uk": "Зміни копію"
        },
        "learn": {
          "en": "Assigning one object to another variable does not copy it. {...original} creates a new outer object so changing its simple properties leaves original alone.",
          "ru": "Присваивание объекта другой переменной не создаёт копию. {...original} создаёт новый внешний объект: изменение его простых свойств не меняет original.",
          "uk": "Присвоєння об’єкта іншій змінній не створює копію. {...original} створює новий зовнішній об’єкт: зміна його простих властивостей не змінює original."
        },
        "instruction": {
          "en": "Read score. Create original = {score}. Make copy with spread and increase copy.score by 10. Print original.score then copy.score.",
          "ru": "Прочитай score. Создай original = {score}. Через spread сделай copy и увеличь copy.score на 10. Выведи original.score, затем copy.score.",
          "uk": "Прочитай score. Створи original = {score}. Через spread зроби copy та збільш copy.score на 10. Виведи original.score, потім copy.score."
        },
        "example": "const original = {count: 2};\nconst copy = {...original};\ncopy.count = 3;\nconsole.log(original.count);",
        "starter": "const score = Number(input());\nconst original = {score};\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "0\n10"
          },
          {
            "input": [
              "5"
            ],
            "out": "5\n15"
          },
          {
            "input": [
              "99"
            ],
            "out": "99\n109"
          }
        ],
        "features": [
          "SpreadElement"
        ],
        "revision": 1
      },
      {
        "id": "destructure",
        "title": {
          "en": "Unpack named values",
          "ru": "Извлеки именованные значения",
          "uk": "Витягни іменовані значення"
        },
        "learn": {
          "en": "const {name, age} = user reads properties into variables with matching names. It does not remove them from the object.",
          "ru": "const {name, age} = user читает свойства в одноимённые переменные. Из объекта они не удаляются.",
          "uk": "const {name, age} = user читає властивості в однойменні змінні. З об’єкта вони не видаляються."
        },
        "instruction": {
          "en": "Read name and score. Build user = {name, score}; destructure both properties and print NAME:SCORE.",
          "ru": "Прочитай name и score. Создай user = {name, score}; извлеки оба свойства деструктуризацией и выведи ИМЯ:СЧЁТ.",
          "uk": "Прочитай name та score. Створи user = {name, score}; витягни обидві властивості деструктуризацією та виведи ІМ’Я:РАХУНОК."
        },
        "example": "const point = {x: 2, y: 4};\nconst {x, y} = point;\nconsole.log(x + y);",
        "starter": "const user = {name: input(), score: Number(input())};\n",
        "cases": [
          {
            "input": [
              "Ada",
              "7"
            ],
            "out": "Ada:7"
          },
          {
            "input": [
              "Lee",
              "0"
            ],
            "out": "Lee:0"
          },
          {
            "input": [
              "N",
              "20"
            ],
            "out": "N:20"
          }
        ],
        "features": [
          "ObjectPattern"
        ],
        "revision": 1
      },
      {
        "id": "json-read",
        "title": {
          "en": "Read JSON data",
          "ru": "Прочитай данные JSON",
          "uk": "Прочитай дані JSON"
        },
        "learn": {
          "en": "JSON.parse turns JSON text into data. JSON keys and text values need double quotes. Access the resulting object normally.",
          "ru": "JSON.parse превращает JSON-текст в данные. Ключи и текст в JSON пишут в двойных кавычках. К полученному объекту обращаются обычно.",
          "uk": "JSON.parse перетворює JSON-текст на дані. Ключі та текст у JSON пишуть у подвійних лапках. До отриманого об’єкта звертаються звичайно."
        },
        "instruction": {
          "en": "Read a valid JSON object containing price and quantity. Print their product.",
          "ru": "Прочитай корректный JSON-объект с price и quantity. Выведи их произведение.",
          "uk": "Прочитай коректний JSON-об’єкт із price та quantity. Виведи їхній добуток."
        },
        "example": "const data = JSON.parse('{\"count\":3}');\nconsole.log(data.count);",
        "starter": "const data = JSON.parse(input());\n",
        "cases": [
          {
            "input": [
              "{\"price\":5,\"quantity\":3}"
            ],
            "out": "15"
          },
          {
            "input": [
              "{\"price\":0,\"quantity\":8}"
            ],
            "out": "0"
          },
          {
            "input": [
              "{\"price\":7,\"quantity\":2}"
            ],
            "out": "14"
          }
        ],
        "features": [
          "parse"
        ],
        "revision": 1
      },
      {
        "id": "unique-values",
        "title": {
          "en": "Keep unique values",
          "ru": "Оставь уникальные значения",
          "uk": "Залиш унікальні значення"
        },
        "learn": {
          "en": "new Set(array) removes repeated values. [...set] converts it back into an array, keeping the first occurrence order.",
          "ru": "new Set(массив) убирает повторяющиеся значения. [...set] возвращает массив с порядком первых появлений.",
          "uk": "new Set(масив) прибирає повторні значення. [...set] повертає масив із порядком перших появ."
        },
        "instruction": {
          "en": "Read comma-separated words. Use Set to print each different word once, joined by commas, in first-seen order.",
          "ru": "Прочитай слова через запятую. Через Set оставь каждое один раз и выведи через запятые в порядке первого появления.",
          "uk": "Прочитай слова через кому. Через Set залиш кожне один раз та виведи через коми в порядку першої появи."
        },
        "example": "const unique = [...new Set([\"a\", \"b\", \"a\"])];\nconsole.log(unique.join(\",\"));",
        "starter": "const words = input().split(\",\");\n",
        "cases": [
          {
            "input": [
              "a,b,a,c"
            ],
            "out": "a,b,c"
          },
          {
            "input": [
              "one,one"
            ],
            "out": "one"
          },
          {
            "input": [
              "x,y"
            ],
            "out": "x,y"
          }
        ],
        "features": [
          "Set"
        ],
        "revision": 1
      },
      {
        "id": "map-counts",
        "title": {
          "en": "Count with a Map",
          "ru": "Посчитай через Map",
          "uk": "Порахуй через Map"
        },
        "learn": {
          "en": "map.get(key) reads a value; map.set(key, value) saves one. A missing key returns undefined. Use ?? 0 to start its count at zero.",
          "ru": "map.get(ключ) читает значение, map.set(ключ, значение) сохраняет его. Отсутствующий ключ даёт undefined. Через ?? 0 начинай его счёт с нуля.",
          "uk": "map.get(ключ) читає значення, map.set(ключ, значення) зберігає його. Відсутній ключ дає undefined. Через ?? 0 починай його лічильник із нуля."
        },
        "instruction": {
          "en": "Read comma-separated words, then a target word on the next line. Count with Map and print how often the target occurs, or 0.",
          "ru": "Прочитай слова через запятую, затем искомое слово со следующей строки. Посчитай через Map и выведи число его появлений либо 0.",
          "uk": "Прочитай слова через кому, потім шукане слово з наступного рядка. Порахуй через Map та виведи кількість його появ або 0."
        },
        "example": "const counts = new Map();\ncounts.set(\"red\", (counts.get(\"red\") ?? 0) + 1);\nconsole.log(counts.get(\"red\"));",
        "starter": "const words = input().split(\",\");\nconst target = input();\nconst counts = new Map();\n",
        "cases": [
          {
            "input": [
              "a,b,a",
              "a"
            ],
            "out": "2"
          },
          {
            "input": [
              "x,y",
              "z"
            ],
            "out": "0"
          },
          {
            "input": [
              "one",
              "one"
            ],
            "out": "1"
          }
        ],
        "features": [
          "Map",
          "set",
          "get"
        ],
        "revision": 1
      }
    ]
  },
  {
    "id": "reliability-modules",
    "title": {
      "en": "Reliable code and modules",
      "ru": "Надёжный код и модули",
      "uk": "Надійний код і модулі"
    },
    "intro": {
      "en": "Missing data and invalid input are normal situations. Handle them deliberately. undefined means a value is missing; ?? supplies a fallback only for null or undefined, preserving 0 and false. try/catch handles thrown errors. Modules export named features and import them from another file.",
      "ru": "Отсутствующие данные и неверный ввод — обычные ситуации. Обрабатывай их явно. undefined означает отсутствие значения; ?? подставляет запасное только для null или undefined, сохраняя 0 и false. try/catch обрабатывает выброшенные ошибки. Модули экспортируют возможности и импортируют их из другого файла.",
      "uk": "Відсутні дані та хибне введення — звичайні ситуації. Обробляй їх явно. undefined означає відсутність значення; ?? підставляє запасне лише для null або undefined, зберігаючи 0 та false. try/catch обробляє викинуті помилки. Модулі експортують можливості та імпортують їх з іншого файлу."
    },
    "example": "try {\n  const data = JSON.parse(input());\n  console.log(data.score ?? 0);\n} catch (error) {\n  console.log(\"Invalid data\");\n}",
    "notes": [
      {
        "en": "The parse may throw. Execution then jumps to catch rather than the following log.",
        "ru": "parse может выбросить ошибку. Тогда выполнение переходит в catch, а не в следующий log.",
        "uk": "parse може викинути помилку. Тоді виконання переходить у catch, а не в наступний log."
      },
      {
        "en": "For a valid object, ?? supplies zero only when score is absent or null.",
        "ru": "Для корректного объекта ?? даёт ноль только при отсутствии score или null.",
        "uk": "Для коректного об’єкта ?? дає нуль лише за відсутності score або null."
      }
    ],
    "tasks": [
      {
        "id": "optional-access",
        "title": {
          "en": "Read an optional nested value",
          "ru": "Прочитай необязательное вложенное значение",
          "uk": "Прочитай необов’язкове вкладене значення"
        },
        "learn": {
          "en": "user.profile?.name safely returns undefined if profile is null or undefined. It does not invent a default value.",
          "ru": "user.profile?.name безопасно даёт undefined, если profile равно null или undefined. Значение по умолчанию само не появляется.",
          "uk": "user.profile?.name безпечно дає undefined, якщо profile дорівнює null або undefined. Значення за замовчуванням саме не з’являється."
        },
        "instruction": {
          "en": "Read a JSON object. Print data.profile?.name. Missing profile or name should produce undefined.",
          "ru": "Прочитай JSON-объект. Выведи data.profile?.name. При отсутствии profile или name должно получиться undefined.",
          "uk": "Прочитай JSON-об’єкт. Виведи data.profile?.name. За відсутності profile або name має вийти undefined."
        },
        "example": "const user = {};\nconsole.log(user.address?.city);",
        "starter": "const data = JSON.parse(input());\n",
        "cases": [
          {
            "input": [
              "{\"profile\":{\"name\":\"Ada\"}}"
            ],
            "out": "Ada"
          },
          {
            "input": [
              "{}"
            ],
            "out": "undefined"
          },
          {
            "input": [
              "{\"profile\":null}"
            ],
            "out": "undefined"
          },
          {
            "input": [
              "{\"profile\":{}}"
            ],
            "out": "undefined"
          }
        ],
        "features": [
          "ChainExpression"
        ],
        "revision": 1
      },
      {
        "id": "nullish-default",
        "title": {
          "en": "A fallback that preserves zero",
          "ru": "Запасное значение сохраняет ноль",
          "uk": "Запасне значення зберігає нуль"
        },
        "learn": {
          "en": "value || 10 replaces 0 as well, because 0 is falsy. value ?? 10 replaces only null and undefined. Choose based on the meaning of missing.",
          "ru": "value || 10 заменяет и 0, потому что 0 считается ложным. value ?? 10 заменяет только null и undefined. Выбирай по смыслу отсутствующего значения.",
          "uk": "value || 10 замінює і 0, бо 0 вважається хибним. value ?? 10 замінює лише null та undefined. Обирай за змістом відсутнього значення."
        },
        "instruction": {
          "en": "Read JSON with optional score. Print score, or 10 if it is null or absent. Preserve a score of 0. Use ??.",
          "ru": "Прочитай JSON с необязательным score. Выведи score либо 10, если оно null или отсутствует. Сохрани нулевой score. Используй ??.",
          "uk": "Прочитай JSON із необов’язковим score. Виведи score або 10, якщо воно null чи відсутнє. Збережи нульовий score. Використай ??."
        },
        "example": "console.log(0 ?? 5); // 0\nconsole.log(null ?? 5); // 5",
        "starter": "const data = JSON.parse(input());\n",
        "cases": [
          {
            "input": [
              "{}"
            ],
            "out": "10"
          },
          {
            "input": [
              "{\"score\":null}"
            ],
            "out": "10"
          },
          {
            "input": [
              "{\"score\":0}"
            ],
            "out": "0"
          },
          {
            "input": [
              "{\"score\":7}"
            ],
            "out": "7"
          }
        ],
        "features": [
          "??"
        ],
        "revision": 1
      },
      {
        "id": "finite-number",
        "title": {
          "en": "Validate a conversion",
          "ru": "Проверь преобразование",
          "uk": "Перевір перетворення"
        },
        "learn": {
          "en": "Number(\"hello\") produces NaN, not an exception. Number.isFinite checks that the value is a finite number; it rejects NaN and Infinity.",
          "ru": "Number(\"hello\") даёт NaN, а не исключение. Number.isFinite проверяет, что значение — конечное число, и отвергает NaN и Infinity.",
          "uk": "Number(\"hello\") дає NaN, а не виняток. Number.isFinite перевіряє, що значення — скінченне число, та відкидає NaN і Infinity."
        },
        "instruction": {
          "en": "Read text, convert it with Number. Print the number doubled if finite, otherwise Invalid.",
          "ru": "Прочитай текст и преобразуй через Number. Если число конечное, выведи удвоенное значение, иначе Invalid.",
          "uk": "Прочитай текст та перетвори через Number. Якщо число скінченне, виведи подвоєне значення, інакше Invalid."
        },
        "example": "const n = Number(\"12\");\nconsole.log(Number.isFinite(n));",
        "starter": "const n = Number(input());\n",
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
              "hello"
            ],
            "out": "Invalid"
          },
          {
            "input": [
              "Infinity"
            ],
            "out": "Invalid"
          }
        ],
        "features": [
          "isFinite"
        ],
        "revision": 1
      },
      {
        "id": "catch-json",
        "title": {
          "en": "Recover from invalid JSON",
          "ru": "Обработай неверный JSON",
          "uk": "Оброби хибний JSON"
        },
        "learn": {
          "en": "The risky operation belongs inside try. catch runs only on a thrown error. A normal result should not also print the error message.",
          "ru": "Рискованная операция должна быть внутри try. catch выполняется только при выброшенной ошибке. При обычном результате сообщение об ошибке не выводят.",
          "uk": "Ризикована операція має бути всередині try. catch виконується лише за викинутої помилки. За звичайного результату повідомлення про помилку не виводять."
        },
        "instruction": {
          "en": "Read a line. Try to parse JSON and print its name property. If parsing fails, print Invalid.",
          "ru": "Прочитай строку. Попробуй разобрать JSON и вывести свойство name. При ошибке разбора выведи Invalid.",
          "uk": "Прочитай рядок. Спробуй розібрати JSON та вивести властивість name. За помилки розбору виведи Invalid."
        },
        "example": "try { JSON.parse(\"oops\"); } catch (error) { console.log(\"Cannot read data\"); }",
        "starter": "const text = input();\n",
        "cases": [
          {
            "input": [
              "{\"name\":\"Ada\"}"
            ],
            "out": "Ada"
          },
          {
            "input": [
              "oops"
            ],
            "out": "Invalid"
          },
          {
            "input": [
              "{"
            ],
            "out": "Invalid"
          },
          {
            "input": [
              "{\"name\":\"Lee\"}"
            ],
            "out": "Lee"
          }
        ],
        "features": [
          "TryStatement"
        ],
        "revision": 1
      },
      {
        "id": "throw-range",
        "title": {
          "en": "Report an invalid value",
          "ru": "Сообщи о неверном значении",
          "uk": "Повідом про хибне значення"
        },
        "learn": {
          "en": "throw new Error(message) stops the current normal flow. A surrounding catch can convert that failure into a user-facing answer.",
          "ru": "throw new Error(сообщение) прерывает обычное выполнение. Внешний catch может превратить сбой в понятный ответ.",
          "uk": "throw new Error(повідомлення) перериває звичайне виконання. Зовнішній catch може перетворити збій на зрозумілу відповідь."
        },
        "instruction": {
          "en": "Write validate(score), throwing an Error outside 0..100. Read score, call validate in try, and print Valid; catch prints Invalid.",
          "ru": "Напиши validate(score), выбрасывающую Error вне 0..100. Прочитай score, вызови validate внутри try и выведи Valid. В catch выведи Invalid.",
          "uk": "Напиши validate(score), що викидає Error поза 0..100. Прочитай score, виклич validate у try та виведи Valid. У catch виведи Invalid."
        },
        "example": "function requirePositive(n) {\n  if (n <= 0) throw new Error(\"Must be positive\");\n}",
        "starter": "const score = Number(input());\nfunction validate(score) {\n}\n",
        "cases": [
          {
            "input": [
              "-1"
            ],
            "out": "Invalid"
          },
          {
            "input": [
              "0"
            ],
            "out": "Valid"
          },
          {
            "input": [
              "100"
            ],
            "out": "Valid"
          },
          {
            "input": [
              "101"
            ],
            "out": "Invalid"
          }
        ],
        "features": [
          "ThrowStatement",
          "TryStatement"
        ],
        "revision": 1
      },
      {
        "id": "module-export",
        "title": {
          "en": "Export a reusable function",
          "ru": "Экспортируй функцию",
          "uk": "Експортуй функцію"
        },
        "learn": {
          "en": "export makes a declaration available to another module. In this exercise the checker imports your module and calls the named function; do not read input or print inside it.",
          "ru": "export делает объявление доступным другому модулю. Здесь проверка импортирует твой модуль и вызывает именованную функцию: читать ввод и выводить внутри неё не нужно.",
          "uk": "export робить оголошення доступним іншому модулю. Тут перевірка імпортує твій модуль і викликає іменовану функцію: читати введення та виводити всередині неї не треба."
        },
        "instruction": {
          "en": "Export function triple(n), returning n * 3. The checker passes each example argument and displays the returned value.",
          "ru": "Экспортируй function triple(n), возвращающую n * 3. Проверка передаёт аргумент из примера и показывает возвращённое значение.",
          "uk": "Експортуй function triple(n), що повертає n * 3. Перевірка передає аргумент із прикладу та показує повернуте значення."
        },
        "example": "export function double(n) { return n * 2; }",
        "starter": "export function triple(n) {\n}\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "0",
            "exportName": "triple",
            "args": [
              0
            ]
          },
          {
            "input": [
              "2"
            ],
            "out": "6",
            "exportName": "triple",
            "args": [
              2
            ]
          },
          {
            "input": [
              "-4"
            ],
            "out": "-12",
            "exportName": "triple",
            "args": [
              -4
            ]
          },
          {
            "input": [
              "7"
            ],
            "out": "21",
            "exportName": "triple",
            "args": [
              7
            ]
          }
        ],
        "features": [
          "ExportNamedDeclaration",
          "ReturnStatement"
        ],
        "revision": 1,
        "mode": "module"
      },
      {
        "id": "module-import",
        "title": {
          "en": "Import from another file",
          "ru": "Импортируй из другого файла",
          "uk": "Імпортуй з іншого файлу"
        },
        "learn": {
          "en": "Named imports use braces. This lesson provides a real helpers module exporting add(a, b) and double(n). Only this supplied module is available in the exercise sandbox.",
          "ru": "Именованный импорт записывают в фигурных скобках. В уроке есть настоящий модуль helpers с add(a, b) и double(n). В учебной среде доступен только этот предоставленный модуль.",
          "uk": "Іменований імпорт записують у фігурних дужках. В уроці є справжній модуль helpers з add(a, b) та double(n). У навчальному середовищі доступний лише цей наданий модуль."
        },
        "instruction": {
          "en": "Import add from \"helpers\". Read a and b on separate lines, then print add(a, b).",
          "ru": "Импортируй add из \"helpers\". Прочитай a и b с разных строк и выведи add(a, b).",
          "uk": "Імпортуй add із \"helpers\". Прочитай a та b із різних рядків і виведи add(a, b)."
        },
        "example": "import {double} from \"helpers\";\nconsole.log(double(5));",
        "starter": "// Import the named function first.\nconst a = Number(input());\nconst b = Number(input());\n",
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
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "-4",
              "1"
            ],
            "out": "-3"
          }
        ],
        "features": [
          "ImportDeclaration"
        ],
        "revision": 1,
        "mode": "module"
      }
    ]
  },
  {
    "id": "page-events",
    "title": {
      "en": "Make a page respond",
      "ru": "Оживи страницу",
      "uk": "Оживи сторінку"
    },
    "intro": {
      "en": "HTML describes page elements. <p id=\"result\"> is a paragraph named result; #result selects that id. document is the page tree. querySelector returns an element object. textContent changes plain text. addEventListener registers a function to run later, when an event happens. The HTML below is supplied for you.",
      "ru": "HTML описывает элементы страницы. <p id=\"result\"> — абзац с именем result; #result выбирает этот id. document — дерево страницы. querySelector возвращает объект элемента. textContent меняет обычный текст. addEventListener регистрирует функцию на будущее событие. HTML ниже уже подготовлен.",
      "uk": "HTML описує елементи сторінки. <p id=\"result\"> — абзац з ім’ям result; #result обирає цей id. document — дерево сторінки. querySelector повертає об’єкт елемента. textContent змінює звичайний текст. addEventListener реєструє функцію на майбутню подію. HTML нижче вже підготовлений."
    },
    "example": "const button = document.querySelector(\"#button\");\nconst result = document.querySelector(\"#result\");\nbutton.addEventListener(\"click\", () => {\n  result.textContent = \"Clicked\";\n});",
    "notes": [
      {
        "en": "The selectors refer to id attributes in the supplied HTML. The callback is passed, not called immediately.",
        "ru": "Селекторы ссылаются на id в готовом HTML. Callback передаётся, а не вызывается сразу.",
        "uk": "Селектори посилаються на id у готовому HTML. Callback передається, а не викликається одразу."
      },
      {
        "en": "Clicking runs the callback. Use textContent for user text so it is displayed as text, rather than interpreted as HTML.",
        "ru": "Нажатие запускает callback. Пользовательский текст записывай через textContent: он покажется текстом, а не выполнится как HTML.",
        "uk": "Натискання запускає callback. Користувацький текст записуй через textContent: він відобразиться текстом, а не виконається як HTML."
      }
    ],
    "tasks": [
      {
        "id": "dom-text",
        "title": {
          "en": "Change a paragraph",
          "ru": "Измени абзац",
          "uk": "Зміни абзац"
        },
        "learn": {
          "en": "Assigning element.textContent replaces the displayed plain text of that element. Read the supplied HTML to find its id.",
          "ru": "Присваивание element.textContent заменяет видимый обычный текст элемента. Найди его id в готовом HTML.",
          "uk": "Присвоєння element.textContent замінює видимий звичайний текст елемента. Знайди його id у готовому HTML."
        },
        "instruction": {
          "en": "Select #result and set its textContent to Ready.",
          "ru": "Выбери #result и задай его textContent равным Ready.",
          "uk": "Обери #result та задай його textContent рівним Ready."
        },
        "example": "const title = document.querySelector(\"#title\");\ntitle.textContent = \"Welcome\";",
        "starter": "const result = document.querySelector(\"#result\");\n",
        "cases": [
          {
            "input": [],
            "out": "[\"Ready\"]",
            "html": "<p id=\"result\">Waiting</p>",
            "actions": [],
            "inspect": [
              {
                "selector": "#result"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"Ready\"]",
            "html": "<p id=\"result\">Another start</p>",
            "actions": [],
            "inspect": [
              {
                "selector": "#result"
              }
            ]
          }
        ],
        "features": [
          "querySelector"
        ],
        "revision": 1,
        "dom": true
      },
      {
        "id": "dom-input",
        "title": {
          "en": "Read a field",
          "ru": "Прочитай поле",
          "uk": "Прочитай поле"
        },
        "learn": {
          "en": "An input element stores its text in .value. A paragraph displays text with .textContent. These are different properties.",
          "ru": "Элемент input хранит текст в .value. Абзац показывает текст через .textContent. Это разные свойства.",
          "uk": "Елемент input зберігає текст у .value. Абзац показує текст через .textContent. Це різні властивості."
        },
        "instruction": {
          "en": "Read the value of #name and put it into #result.textContent. Preserve the entered text.",
          "ru": "Прочитай value поля #name и запиши в #result.textContent. Сохрани введённый текст.",
          "uk": "Прочитай value поля #name та запиши у #result.textContent. Збережи введений текст."
        },
        "example": "const value = document.querySelector(\"#city\").value;\ndocument.querySelector(\"#title\").textContent = value;",
        "starter": "const field = document.querySelector(\"#name\");\n",
        "cases": [
          {
            "input": [],
            "out": "[\"Ada\"]",
            "html": "<input id=\"name\" value=\"Ada\"><p id=\"result\"></p>",
            "actions": [],
            "inspect": [
              {
                "selector": "#result"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"Two words\"]",
            "html": "<input id=\"name\" value=\"Two words\"><p id=\"result\"></p>",
            "actions": [],
            "inspect": [
              {
                "selector": "#result"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"\"]",
            "html": "<input id=\"name\" value=\"\"><p id=\"result\"></p>",
            "actions": [],
            "inspect": [
              {
                "selector": "#result"
              }
            ]
          }
        ],
        "features": [
          "querySelector"
        ],
        "revision": 1,
        "dom": true
      },
      {
        "id": "dom-counter",
        "title": {
          "en": "Respond to clicks",
          "ru": "Ответь на нажатие",
          "uk": "Відреагуй на натискання"
        },
        "learn": {
          "en": "Keep count outside the callback so it survives between clicks. A click calls the registered function once. Update the saved number and the visible text.",
          "ru": "Храни count снаружи callback, чтобы он сохранялся между нажатиями. Нажатие вызывает функцию один раз. Обновляй и число, и видимый текст.",
          "uk": "Зберігай count зовні callback, щоб він зберігався між натисканнями. Натискання викликає функцію один раз. Оновлюй і число, і видимий текст."
        },
        "instruction": {
          "en": "Start count at 0. On every click of #button, add 1 and update #count text.",
          "ru": "Начни count с 0. При каждом нажатии #button прибавляй 1 и обновляй текст #count.",
          "uk": "Почни count із 0. За кожного натискання #button додавай 1 та оновлюй текст #count."
        },
        "example": "let count = 0;\nbutton.addEventListener(\"click\", () => {\n  count += 2;\n  result.textContent = String(count);\n});",
        "starter": "let count = 0;\nconst button = document.querySelector(\"#button\");\nconst result = document.querySelector(\"#count\");\n",
        "cases": [
          {
            "input": [],
            "out": "[\"0\"]",
            "html": "<button id=\"button\">Add one</button><p id=\"count\">0</p>",
            "actions": [],
            "inspect": [
              {
                "selector": "#count"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"1\"]",
            "html": "<button id=\"button\">Add one</button><p id=\"count\">0</p>",
            "actions": [
              {
                "selector": "#button"
              }
            ],
            "inspect": [
              {
                "selector": "#count"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"3\"]",
            "html": "<button id=\"button\">Add one</button><p id=\"count\">0</p>",
            "actions": [
              {
                "selector": "#button"
              },
              {
                "selector": "#button"
              },
              {
                "selector": "#button"
              }
            ],
            "inspect": [
              {
                "selector": "#count"
              }
            ]
          }
        ],
        "features": [
          "addEventListener"
        ],
        "revision": 1,
        "dom": true
      },
      {
        "id": "dom-toggle",
        "title": {
          "en": "Toggle a class",
          "ru": "Переключи класс",
          "uk": "Перемкни клас"
        },
        "learn": {
          "en": "classList.toggle(\"done\") adds a missing class or removes an existing one. Classes describe visual state without replacing the whole element.",
          "ru": "classList.toggle(\"done\") добавляет отсутствующий класс или убирает существующий. Класс описывает состояние без замены всего элемента.",
          "uk": "classList.toggle(\"done\") додає відсутній клас або прибирає наявний. Клас описує стан без заміни всього елемента."
        },
        "instruction": {
          "en": "On each click of #button, toggle the class done on #task.",
          "ru": "При каждом нажатии #button переключай класс done у #task.",
          "uk": "За кожного натискання #button перемикай клас done в #task."
        },
        "example": "const item = document.querySelector(\"#item\");\nitem.classList.toggle(\"selected\");",
        "starter": "const item = document.querySelector(\"#task\");\n",
        "cases": [
          {
            "input": [],
            "out": "[\"\"]",
            "html": "<button id=\"button\">Toggle</button><p id=\"task\">Practice</p>",
            "actions": [],
            "inspect": [
              {
                "selector": "#task",
                "property": "className"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"done\"]",
            "html": "<button id=\"button\">Toggle</button><p id=\"task\">Practice</p>",
            "actions": [
              {
                "selector": "#button"
              }
            ],
            "inspect": [
              {
                "selector": "#task",
                "property": "className"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"\"]",
            "html": "<button id=\"button\">Toggle</button><p id=\"task\">Practice</p>",
            "actions": [
              {
                "selector": "#button"
              },
              {
                "selector": "#button"
              }
            ],
            "inspect": [
              {
                "selector": "#task",
                "property": "className"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"done\"]",
            "html": "<button id=\"button\">Toggle</button><p id=\"task\">Practice</p>",
            "actions": [
              {
                "selector": "#button"
              },
              {
                "selector": "#button"
              },
              {
                "selector": "#button"
              }
            ],
            "inspect": [
              {
                "selector": "#task",
                "property": "className"
              }
            ]
          }
        ],
        "features": [
          "toggle",
          "addEventListener"
        ],
        "revision": 1,
        "dom": true
      },
      {
        "id": "dom-live-input",
        "title": {
          "en": "React while someone types",
          "ru": "Реагируй при вводе",
          "uk": "Реагуй під час введення"
        },
        "learn": {
          "en": "The input event fires when the field changes. Read .value inside the callback to get the current text, not the initial text.",
          "ru": "Событие input происходит при изменении поля. Читай .value внутри callback, чтобы получить текущий, а не начальный текст.",
          "uk": "Подія input відбувається за зміни поля. Читай .value всередині callback, щоб отримати поточний, а не початковий текст."
        },
        "instruction": {
          "en": "On every input event in #name, put its trimmed uppercase value into #result.",
          "ru": "На каждое событие input в #name записывай его значение без крайних пробелов в верхнем регистре в #result.",
          "uk": "На кожну подію input у #name записуй його значення без крайніх пробілів у верхньому регістрі в #result."
        },
        "example": "field.addEventListener(\"input\", () => {\n  result.textContent = field.value.toLowerCase();\n});",
        "starter": "const field = document.querySelector(\"#name\");\nconst result = document.querySelector(\"#result\");\n",
        "cases": [
          {
            "input": [],
            "out": "[\"ADA\"]",
            "html": "<input id=\"name\"><p id=\"result\"></p>",
            "actions": [
              {
                "selector": "#name",
                "type": "input",
                "value": " Ada "
              }
            ],
            "inspect": [
              {
                "selector": "#result"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"HELLO\"]",
            "html": "<input id=\"name\"><p id=\"result\"></p>",
            "actions": [
              {
                "selector": "#name",
                "type": "input",
                "value": "hello"
              }
            ],
            "inspect": [
              {
                "selector": "#result"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"\"]",
            "html": "<input id=\"name\"><p id=\"result\"></p>",
            "actions": [
              {
                "selector": "#name",
                "type": "input",
                "value": "  "
              }
            ],
            "inspect": [
              {
                "selector": "#result"
              }
            ]
          }
        ],
        "features": [
          "addEventListener",
          "trim",
          "toUpperCase"
        ],
        "revision": 1,
        "dom": true
      },
      {
        "id": "dom-list",
        "title": {
          "en": "Create elements safely",
          "ru": "Безопасно создай элементы",
          "uk": "Безпечно створи елементи"
        },
        "learn": {
          "en": "document.createElement(\"li\") creates one list item. Set its textContent, then append it to the list. Do not build user text as HTML.",
          "ru": "document.createElement(\"li\") создаёт пункт списка. Задай textContent, затем добавь в список через append. Не превращай пользовательский текст в HTML.",
          "uk": "document.createElement(\"li\") створює пункт списку. Задай textContent, потім додай до списку через append. Не перетворюй користувацький текст на HTML."
        },
        "instruction": {
          "en": "Read comma-separated words with input(). Create one li per word in #list, keeping order and plain text.",
          "ru": "Прочитай слова через запятую с input(). В #list создай li для каждого слова, сохраняя порядок и обычный текст.",
          "uk": "Прочитай слова через кому з input(). У #list створи li для кожного слова, зберігаючи порядок та звичайний текст."
        },
        "example": "const li = document.createElement(\"li\");\nli.textContent = \"One item\";\ndocument.querySelector(\"#list\").append(li);",
        "starter": "const words = input().split(\",\");\nconst list = document.querySelector(\"#list\");\n",
        "cases": [
          {
            "input": [
              "red,blue"
            ],
            "out": "[2,\"redblue\"]",
            "html": "<ul id=\"list\"></ul>",
            "actions": [],
            "inspect": [
              {
                "selector": "#list li",
                "property": "count"
              },
              {
                "selector": "#list"
              }
            ]
          },
          {
            "input": [
              "one"
            ],
            "out": "[1,\"one\"]",
            "html": "<ul id=\"list\"></ul>",
            "actions": [],
            "inspect": [
              {
                "selector": "#list li",
                "property": "count"
              },
              {
                "selector": "#list"
              }
            ]
          },
          {
            "input": [
              "<b>x</b>,safe"
            ],
            "out": "[2,\"<b>x</b>safe\"]",
            "html": "<ul id=\"list\"></ul>",
            "actions": [],
            "inspect": [
              {
                "selector": "#list li",
                "property": "count"
              },
              {
                "selector": "#list"
              }
            ]
          }
        ],
        "features": [
          "createElement",
          "append"
        ],
        "revision": 1,
        "dom": true
      }
    ]
  },
  {
    "id": "async",
    "title": {
      "en": "Promises and asynchronous work",
      "ru": "Промисы и асинхронность",
      "uk": "Проміси й асинхронність"
    },
    "intro": {
      "en": "A Promise represents a result available later. await pauses this async function, not the entire page. Handle both success and failure. Our wait(ms) helper waits briefly; our fetch uses the shown local response fixtures, so tests never depend on a real server. In your own website fetch would make an actual network request.",
      "ru": "Promise представляет результат, который будет позже. await приостанавливает эту async-функцию, а не всю страницу. Обрабатывай успех и сбой. Помощник wait(ms) кратко ждёт; fetch здесь использует показанные учебные ответы, поэтому тесты не зависят от сервера. На собственном сайте fetch делает настоящий сетевой запрос.",
      "uk": "Promise представляє результат, що буде пізніше. await призупиняє цю async-функцію, а не всю сторінку. Обробляй успіх і збій. Помічник wait(ms) коротко чекає; fetch тут використовує показані навчальні відповіді, тому тести не залежать від сервера. На власному сайті fetch робить справжній мережевий запит."
    },
    "example": "async function load() {\n  const response = await fetch(\"/api/example\");\n  if (!response.ok) throw new Error(\"Request failed\");\n  return await response.json();\n}",
    "notes": [
      {
        "en": "await fetch waits for a response. An HTTP failure such as 404 needs an explicit response.ok check.",
        "ru": "await fetch ждёт ответа. HTTP-ошибку вроде 404 нужно проверять через response.ok явно.",
        "uk": "await fetch чекає відповіді. HTTP-помилку на кшталт 404 треба перевіряти через response.ok явно."
      },
      {
        "en": "json() is asynchronous too. A caller awaits load() and can use try/catch around the call.",
        "ru": "json() тоже асинхронен. Вызывающий код ждёт load() через await и может обернуть вызов в try/catch.",
        "uk": "json() також асинхронний. Код, що викликає, чекає load() через await та може огорнути виклик у try/catch."
      }
    ],
    "tasks": [
      {
        "id": "promise-value",
        "title": {
          "en": "Wait for a promised value",
          "ru": "Дождись обещанного значения",
          "uk": "Дочекайся обіцяного значення"
        },
        "learn": {
          "en": "Promise.resolve(value) creates a fulfilled promise. await unwraps its value. Printing the promise object is different from printing the result.",
          "ru": "Promise.resolve(значение) создаёт выполненный промис. await получает его значение. Вывести объект промиса — не то же самое, что вывести результат.",
          "uk": "Promise.resolve(значення) створює виконаний проміс. await отримує його значення. Вивести об’єкт проміса — не те саме, що вивести результат."
        },
        "instruction": {
          "en": "Read n. Create Promise.resolve(n + 1), await it and print its resolved value.",
          "ru": "Прочитай n. Создай Promise.resolve(n + 1), дождись через await и выведи полученное значение.",
          "uk": "Прочитай n. Створи Promise.resolve(n + 1), дочекайся через await та виведи отримане значення."
        },
        "example": "const answer = await Promise.resolve(6);\nconsole.log(answer);",
        "starter": "const n = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "1"
          },
          {
            "input": [
              "2"
            ],
            "out": "3"
          },
          {
            "input": [
              "-3"
            ],
            "out": "-2"
          }
        ],
        "features": [
          "AwaitExpression",
          "resolve"
        ],
        "revision": 1
      },
      {
        "id": "async-function",
        "title": {
          "en": "Return from an async function",
          "ru": "Верни из async-функции",
          "uk": "Поверни з async-функції"
        },
        "learn": {
          "en": "An async function always returns a promise. Return the final value inside it, then await the call outside.",
          "ru": "async-функция всегда возвращает промис. Верни итоговое значение внутри, затем дождись вызова снаружи.",
          "uk": "async-функція завжди повертає проміс. Поверни підсумкове значення всередині, потім дочекайся виклику зовні."
        },
        "instruction": {
          "en": "Write async doubleLater(n): await wait(1), then return n * 2. Read n and print the awaited function result.",
          "ru": "Напиши async doubleLater(n): дождись wait(1), верни n * 2. Прочитай n и выведи результат функции после await.",
          "uk": "Напиши async doubleLater(n): дочекайся wait(1), поверни n * 2. Прочитай n та виведи результат функції після await."
        },
        "example": "async function later() {\n  await wait(1);\n  return \"Done\";\n}\nconsole.log(await later());",
        "starter": "async function doubleLater(n) {\n}\nconst n = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
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
          }
        ],
        "features": [
          "async",
          "AwaitExpression",
          "wait"
        ],
        "revision": 1
      },
      {
        "id": "fetch-data",
        "title": {
          "en": "Read a JSON response",
          "ru": "Прочитай JSON-ответ",
          "uk": "Прочитай JSON-відповідь"
        },
        "learn": {
          "en": "First await fetch; then await response.json(). The fixture panel shows exactly what this lesson service returns.",
          "ru": "Сначала дождись fetch, затем response.json(). Панель учебного ответа показывает, что именно вернёт сервис урока.",
          "uk": "Спочатку дочекайся fetch, потім response.json(). Панель навчальної відповіді показує, що саме поверне сервіс уроку."
        },
        "instruction": {
          "en": "Fetch /api/user, await its JSON and print data.name. The response is valid and successful in this task.",
          "ru": "Получи /api/user, дождись JSON и выведи data.name. В этом задании ответ корректный и успешный.",
          "uk": "Отримай /api/user, дочекайся JSON та виведи data.name. У цьому завданні відповідь коректна й успішна."
        },
        "example": "const response = await fetch(\"/api/example\");\nconst data = await response.json();\nconsole.log(data.title);",
        "starter": "// The fixture is shown above the editor.\n",
        "cases": [
          {
            "input": [],
            "out": "Ada",
            "responses": {
              "/api/user": {
                "body": {
                  "name": "Ada"
                }
              }
            }
          },
          {
            "input": [],
            "out": "Lee",
            "responses": {
              "/api/user": {
                "body": {
                  "name": "Lee"
                }
              }
            }
          },
          {
            "input": [],
            "out": "CodeBloom",
            "responses": {
              "/api/user": {
                "body": {
                  "name": "CodeBloom"
                }
              }
            }
          }
        ],
        "features": [
          "fetch",
          "AwaitExpression",
          "json"
        ],
        "revision": 1
      },
      {
        "id": "fetch-status",
        "title": {
          "en": "Handle HTTP failure",
          "ru": "Обработай HTTP-ошибку",
          "uk": "Оброби HTTP-помилку"
        },
        "learn": {
          "en": "fetch does not automatically throw for a 404 or 500. Check response.ok before reading a successful result.",
          "ru": "fetch не выбрасывает ошибку автоматически для 404 или 500. Проверь response.ok перед чтением успешного результата.",
          "uk": "fetch не викидає помилку автоматично для 404 або 500. Перевір response.ok перед читанням успішного результату."
        },
        "instruction": {
          "en": "Fetch /api/user. If response.ok is false, print Unavailable. Otherwise print its JSON name.",
          "ru": "Получи /api/user. Если response.ok ложно, выведи Unavailable. Иначе выведи name из JSON.",
          "uk": "Отримай /api/user. Якщо response.ok хибне, виведи Unavailable. Інакше виведи name із JSON."
        },
        "example": "const response = await fetch(\"/api/example\");\nif (!response.ok) console.log(\"Try later\");",
        "starter": "const response = await fetch(\"/api/user\");\n",
        "cases": [
          {
            "input": [],
            "out": "Ada",
            "responses": {
              "/api/user": {
                "status": 200,
                "body": {
                  "name": "Ada"
                }
              }
            }
          },
          {
            "input": [],
            "out": "Unavailable",
            "responses": {
              "/api/user": {
                "status": 404,
                "body": {
                  "name": "Ada"
                }
              }
            }
          },
          {
            "input": [],
            "out": "Unavailable",
            "responses": {
              "/api/user": {
                "status": 500,
                "body": {
                  "name": "Ada"
                }
              }
            }
          }
        ],
        "features": [
          "fetch",
          "IfStatement"
        ],
        "revision": 1
      },
      {
        "id": "promise-all",
        "title": {
          "en": "Combine independent results",
          "ru": "Объедини независимые результаты",
          "uk": "Об’єднай незалежні результати"
        },
        "learn": {
          "en": "Promise.all waits for every promise and returns results in input order, not completion order. Start independent jobs before awaiting them together.",
          "ru": "Promise.all ждёт все промисы и возвращает результаты в порядке входа, а не завершения. Запускай независимые работы до совместного ожидания.",
          "uk": "Promise.all чекає всі проміси та повертає результати в порядку входу, а не завершення. Запускай незалежні роботи до спільного очікування."
        },
        "instruction": {
          "en": "Read a and b. Await Promise.all([Promise.resolve(a), Promise.resolve(b)]) and print the sum of the two resolved values.",
          "ru": "Прочитай a и b. Дождись Promise.all([Promise.resolve(a), Promise.resolve(b)]) и выведи сумму двух результатов.",
          "uk": "Прочитай a та b. Дочекайся Promise.all([Promise.resolve(a), Promise.resolve(b)]) та виведи суму двох результатів."
        },
        "example": "const [x, y] = await Promise.all([Promise.resolve(2), Promise.resolve(5)]);\nconsole.log(x * y);",
        "starter": "const a = Number(input());\nconst b = Number(input());\n",
        "cases": [
          {
            "input": [
              "2",
              "5"
            ],
            "out": "7"
          },
          {
            "input": [
              "0",
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "-4",
              "7"
            ],
            "out": "3"
          }
        ],
        "features": [
          "all",
          "AwaitExpression"
        ],
        "revision": 1
      },
      {
        "id": "async-cleanup",
        "title": {
          "en": "Always finish cleanup",
          "ru": "Всегда заверши очистку",
          "uk": "Завжди заверши очищення"
        },
        "learn": {
          "en": "finally runs after try or catch, whether work succeeds or fails. It is useful for removing a loading state.",
          "ru": "finally выполняется после try или catch независимо от успеха. Это удобно для снятия состояния загрузки.",
          "uk": "finally виконується після try або catch незалежно від успіху. Це зручно для зняття стану завантаження."
        },
        "instruction": {
          "en": "Fetch /api/user in try. For a bad response throw an Error; otherwise print its name. catch prints Error. finally always prints Done.",
          "ru": "В try получи /api/user. При плохом ответе выброси Error, иначе выведи name. В catch выведи Error. В finally всегда выводи Done.",
          "uk": "У try отримай /api/user. За поганої відповіді викинь Error, інакше виведи name. У catch виведи Error. У finally завжди виводь Done."
        },
        "example": "try {\n  await Promise.resolve();\n} finally {\n  console.log(\"Finished\");\n}",
        "starter": "try {\n  // Request and validate the response.\n} catch (error) {\n} finally {\n}\n",
        "cases": [
          {
            "input": [],
            "out": "Ada\nDone",
            "responses": {
              "/api/user": {
                "status": 200,
                "body": {
                  "name": "Ada"
                }
              }
            }
          },
          {
            "input": [],
            "out": "Error\nDone",
            "responses": {
              "/api/user": {
                "status": 404,
                "body": {
                  "name": "Ada"
                }
              }
            }
          },
          {
            "input": [],
            "out": "Error\nDone",
            "responses": {
              "/api/user": {
                "status": 500,
                "body": {
                  "name": "Ada"
                }
              }
            }
          }
        ],
        "features": [
          "TryStatement",
          "fetch"
        ],
        "revision": 1
      }
    ]
  },
  {
    "id": "deeper-javascript",
    "title": {
      "en": "Understand JavaScript deeply",
      "ru": "Пойми JavaScript глубже",
      "uk": "Зрозумій JavaScript глибше"
    },
    "intro": {
      "en": "Objects are shared by reference. A closure remembers the variables around its creation. this is determined by the call for ordinary functions, while bind fixes a receiver. Classes use prototypes; extends adds inheritance. The event loop runs synchronous code before queued promise reactions and timers.",
      "ru": "Объекты передаются по ссылке. Замыкание помнит переменные вокруг места создания. Для обычной функции this определяется вызовом, а bind закрепляет получателя. Классы используют прототипы; extends добавляет наследование. Цикл событий сначала выполняет синхронный код, потом реакции промисов и таймеры.",
      "uk": "Об’єкти передаються за посиланням. Замикання пам’ятає змінні навколо місця створення. Для звичайної функції this визначається викликом, а bind закріплює отримувача. Класи використовують прототипи; extends додає наслідування. Цикл подій спочатку виконує синхронний код, потім реакції промісів та таймери."
    },
    "example": "function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nconsole.log(next());\nconsole.log(next());",
    "notes": [
      {
        "en": "The outer function creates count once per call. Returning a function does not run it yet.",
        "ru": "Внешняя функция создаёт count один раз на вызов. Возврат функции ещё не запускает её.",
        "uk": "Зовнішня функція створює count один раз на виклик. Повернення функції ще не запускає її."
      },
      {
        "en": "Both next() calls share that same remembered count, so they return 1 and 2. A second makeCounter() would have its own count.",
        "ru": "Оба вызова next() используют один сохранённый count и возвращают 1 и 2. У второго makeCounter() был бы свой count.",
        "uk": "Обидва виклики next() використовують один збережений count та повертають 1 і 2. Другий makeCounter() мав би свій count."
      }
    ],
    "tasks": [
      {
        "id": "shared-reference",
        "title": {
          "en": "See a shared reference",
          "ru": "Увидь общую ссылку",
          "uk": "Побач спільне посилання"
        },
        "learn": {
          "en": "const alias = original points at the same object. Changing a property through alias changes what original sees too.",
          "ru": "const alias = original ссылается на тот же объект. Изменение свойства через alias видно и через original.",
          "uk": "const alias = original посилається на той самий об’єкт. Зміну властивості через alias видно й через original."
        },
        "instruction": {
          "en": "Read n. Create original = {score: n} and alias = original. Add 1 to alias.score, then print original.score.",
          "ru": "Прочитай n. Создай original = {score: n}, alias = original. Прибавь 1 к alias.score, выведи original.score.",
          "uk": "Прочитай n. Створи original = {score: n}, alias = original. Додай 1 до alias.score, виведи original.score."
        },
        "example": "const box = {value: 2};\nconst other = box;\nother.value = 5;\nconsole.log(box.value);",
        "starter": "const n = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "1"
          },
          {
            "input": [
              "4"
            ],
            "out": "5"
          },
          {
            "input": [
              "-1"
            ],
            "out": "0"
          }
        ],
        "features": [
          "ObjectExpression"
        ],
        "revision": 1
      },
      {
        "id": "closure-counter",
        "title": {
          "en": "Remember private state",
          "ru": "Запомни закрытое состояние",
          "uk": "Запам’ятай прихований стан"
        },
        "learn": {
          "en": "Each call to a factory creates its own local variables. The returned function keeps access to them after the factory returns.",
          "ru": "Каждый вызов фабрики создаёт свои локальные переменные. Возвращённая функция сохраняет доступ к ним после завершения фабрики.",
          "uk": "Кожен виклик фабрики створює власні локальні змінні. Повернена функція зберігає доступ до них після завершення фабрики."
        },
        "instruction": {
          "en": "Write makeCounter(start), returning a function that increases its own counter by 1 and returns it. Read start; print two calls of the returned function.",
          "ru": "Напиши makeCounter(start), возвращающую функцию, которая увеличивает свой счётчик на 1 и возвращает его. Прочитай start, выведи два вызова полученной функции.",
          "uk": "Напиши makeCounter(start), що повертає функцію, яка збільшує власний лічильник на 1 та повертає його. Прочитай start, виведи два виклики отриманої функції."
        },
        "example": "function makeAdder(amount) {\n  return value => value + amount;\n}\nconst addTwo = makeAdder(2);\nconsole.log(addTwo(5));",
        "starter": "function makeCounter(start) {\n}\nconst start = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "1\n2"
          },
          {
            "input": [
              "5"
            ],
            "out": "6\n7"
          },
          {
            "input": [
              "-2"
            ],
            "out": "-1\n0"
          }
        ],
        "features": [
          "FunctionDeclaration",
          "ReturnStatement"
        ],
        "revision": 1
      },
      {
        "id": "bind-this",
        "title": {
          "en": "Keep the receiver with bind",
          "ru": "Закрепи this через bind",
          "uk": "Закріпи this через bind"
        },
        "learn": {
          "en": "A detached method loses its original receiver. method.bind(object) creates a function whose this remains that object.",
          "ru": "Отделённый метод теряет исходного получателя. method.bind(object) создаёт функцию, у которой this остаётся этим объектом.",
          "uk": "Відокремлений метод втрачає початкового отримувача. method.bind(object) створює функцію, у якої this залишається цим об’єктом."
        },
        "instruction": {
          "en": "Read name. Create user with name and a getName() method returning this.name. Bind that method to user, call the bound function and print its result.",
          "ru": "Прочитай name. Создай user с name и методом getName(), возвращающим this.name. Привяжи метод к user через bind, вызови полученную функцию и выведи результат.",
          "uk": "Прочитай name. Створи user із name та методом getName(), що повертає this.name. Прив’яжи метод до user через bind, виклич отриману функцію та виведи результат."
        },
        "example": "const box = {value: 9, read() { return this.value; }};\nconst read = box.read.bind(box);\nconsole.log(read());",
        "starter": "const name = input();\n",
        "cases": [
          {
            "input": [
              "Ada"
            ],
            "out": "Ada"
          },
          {
            "input": [
              "Lee"
            ],
            "out": "Lee"
          },
          {
            "input": [
              "CodeBloom"
            ],
            "out": "CodeBloom"
          }
        ],
        "features": [
          "bind",
          "ThisExpression"
        ],
        "revision": 1
      },
      {
        "id": "prototype-lookup",
        "title": {
          "en": "Look through a prototype",
          "ru": "Найди свойство в прототипе",
          "uk": "Знайди властивість у прототипі"
        },
        "learn": {
          "en": "Object.create(base) makes an object whose prototype is base. A missing own property can be found on that prototype.",
          "ru": "Object.create(base) создаёт объект с прототипом base. Отсутствующее собственное свойство может найтись в прототипе.",
          "uk": "Object.create(base) створює об’єкт із прототипом base. Відсутня власна властивість може знайтися у прототипі."
        },
        "instruction": {
          "en": "Read name. Create base = {kind: \"tool\"}, then item = Object.create(base). Set item.name and print item.name then item.kind.",
          "ru": "Прочитай name. Создай base = {kind: \"tool\"}, затем item = Object.create(base). Задай item.name, выведи item.name и item.kind.",
          "uk": "Прочитай name. Створи base = {kind: \"tool\"}, потім item = Object.create(base). Задай item.name, виведи item.name та item.kind."
        },
        "example": "const animal = {moves: true};\nconst cat = Object.create(animal);\nconsole.log(cat.moves);",
        "starter": "const name = input();\nconst base = {kind: \"tool\"};\n",
        "cases": [
          {
            "input": [
              "Pen"
            ],
            "out": "Pen\ntool"
          },
          {
            "input": [
              "Brush"
            ],
            "out": "Brush\ntool"
          },
          {
            "input": [
              "Key"
            ],
            "out": "Key\ntool"
          }
        ],
        "features": [
          "create"
        ],
        "revision": 1
      },
      {
        "id": "class-counter",
        "title": {
          "en": "Create independent instances",
          "ru": "Создай независимые экземпляры",
          "uk": "Створи незалежні екземпляри"
        },
        "learn": {
          "en": "constructor initializes each new instance. this.value belongs to that instance; a method can update it. Two instances should not share one global counter.",
          "ru": "constructor настраивает каждый новый экземпляр. this.value принадлежит ему; метод может менять это свойство. Два экземпляра не должны делить один глобальный счётчик.",
          "uk": "constructor налаштовує кожен новий екземпляр. this.value належить йому; метод може змінювати цю властивість. Два екземпляри не мають ділити один глобальний лічильник."
        },
        "instruction": {
          "en": "Create class Counter with constructor(start) setting this.value and increment() adding 1. Read n; create a = new Counter(n), b = new Counter(0). Increment a once; print a.value then b.value.",
          "ru": "Создай класс Counter: constructor(start) задаёт this.value, increment() прибавляет 1. Прочитай n, создай a = new Counter(n), b = new Counter(0). Увеличь a один раз, выведи a.value и b.value.",
          "uk": "Створи клас Counter: constructor(start) задає this.value, increment() додає 1. Прочитай n, створи a = new Counter(n), b = new Counter(0). Збільш a один раз, виведи a.value та b.value."
        },
        "example": "class Box {\n  constructor(value) { this.value = value; }\n  read() { return this.value; }\n}",
        "starter": "class Counter {\n}\nconst n = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "1\n0"
          },
          {
            "input": [
              "5"
            ],
            "out": "6\n0"
          },
          {
            "input": [
              "-2"
            ],
            "out": "-1\n0"
          }
        ],
        "features": [
          "ClassDeclaration",
          "ThisExpression"
        ],
        "revision": 1
      },
      {
        "id": "class-inheritance",
        "title": {
          "en": "Extend a class",
          "ru": "Расширь класс",
          "uk": "Розшир клас"
        },
        "learn": {
          "en": "extends sets up inheritance. In a derived constructor call super(...) before using this. A subclass can add its own methods while reusing the base state.",
          "ru": "extends задаёт наследование. В конструкторе потомка вызови super(...) до обращения к this. Потомок может добавлять методы, используя состояние родителя.",
          "uk": "extends задає наслідування. У конструкторі нащадка виклич super(...) до звернення до this. Нащадок може додавати методи, використовуючи стан батька."
        },
        "instruction": {
          "en": "Use the provided Product class. Create SaleProduct extends Product. Its constructor(price) calls super(price). finalPrice() returns Math.max(0, this.price - 5). Read price and print the finalPrice of a new SaleProduct.",
          "ru": "Используй готовый Product. Создай SaleProduct extends Product. Его constructor(price) вызывает super(price). finalPrice() возвращает Math.max(0, this.price - 5). Прочитай price и выведи finalPrice нового SaleProduct.",
          "uk": "Використай готовий Product. Створи SaleProduct extends Product. Його constructor(price) викликає super(price). finalPrice() повертає Math.max(0, this.price - 5). Прочитай price та виведи finalPrice нового SaleProduct."
        },
        "example": "class Named { constructor(name) { this.name = name; } }\nclass User extends Named {\n  constructor(name) { super(name); }\n  greeting() { return `Hi, ${this.name}`; }\n}",
        "starter": "class Product { constructor(price) { this.price = price; } }\n// Add SaleProduct.\nconst price = Number(input());\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "0"
          },
          {
            "input": [
              "3"
            ],
            "out": "0"
          },
          {
            "input": [
              "5"
            ],
            "out": "0"
          },
          {
            "input": [
              "12"
            ],
            "out": "7"
          }
        ],
        "features": [
          "ClassDeclaration",
          "Super"
        ],
        "revision": 1
      },
      {
        "id": "event-loop-order",
        "title": {
          "en": "Observe the event loop",
          "ru": "Проследи цикл событий",
          "uk": "Простеж цикл подій"
        },
        "learn": {
          "en": "Synchronous code runs first. Promise reactions run as microtasks after it. A zero-delay timer runs later; zero does not mean immediately inside the current code.",
          "ru": "Сначала выполняется синхронный код. Потом реакции промисов как микрозадачи. Таймер с нулём выполняется позже: ноль не означает немедленный запуск посреди текущего кода.",
          "uk": "Спочатку виконується синхронний код. Потім реакції промісів як мікрозавдання. Таймер із нулем виконується пізніше: нуль не означає негайний запуск посеред поточного коду."
        },
        "instruction": {
          "en": "Schedule a zero-delay setTimeout printing Timer. Schedule Promise.resolve().then(...) printing Promise. Print Sync synchronously, then await wait(10). The output must be Sync, Promise, Timer.",
          "ru": "Запланируй setTimeout с нулём, выводящий Timer. Запланируй Promise.resolve().then(...), выводящий Promise. Синхронно выведи Sync, затем дождись wait(10). Порядок вывода: Sync, Promise, Timer.",
          "uk": "Заплануй setTimeout із нулем, що виводить Timer. Заплануй Promise.resolve().then(...), що виводить Promise. Синхронно виведи Sync, потім дочекайся wait(10). Порядок виведення: Sync, Promise, Timer."
        },
        "example": "console.log(\"A\");\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"B\");\nawait wait(1);",
        "starter": "// Schedule both jobs before logging Sync.\n",
        "cases": [
          {
            "input": [],
            "out": "Sync\nPromise\nTimer"
          }
        ],
        "features": [
          "setTimeout",
          "then"
        ],
        "revision": 1
      }
    ]
  },
  {
    "id": "testing-tools",
    "title": {
      "en": "Test, debug, and organize",
      "ru": "Проверяй, исправляй и организуй",
      "uk": "Перевіряй, виправляй та організовуй"
    },
    "intro": {
      "en": "A test compares actual behavior to a stated expectation. Use ordinary, boundary and failure cases. Our assert(condition, message) helper throws when a check fails. In a local project you can use node:test and node:assert/strict. A package.json test script such as node --test runs those tests outside this browser; this lesson only practices the configuration data.",
      "ru": "Тест сравнивает реальное поведение с ожиданием. Проверяй обычные случаи, границы и сбои. Наш помощник assert(условие, сообщение) выбрасывает ошибку при провале. В локальном проекте можно использовать node:test и node:assert/strict. Скрипт node --test в package.json запускает такие тесты вне браузера; здесь мы тренируем только данные настройки.",
      "uk": "Тест порівнює реальну поведінку з очікуванням. Перевіряй звичайні випадки, межі й збої. Наш помічник assert(умова, повідомлення) викидає помилку за провалу. У локальному проєкті можна використати node:test та node:assert/strict. Скрипт node --test у package.json запускає такі тести поза браузером; тут ми тренуємо лише дані налаштування."
    },
    "example": "function add(a, b) { return a + b; }\nassert(add(2, 3) === 5, \"ordinary case\");\nassert(add(0, 0) === 0, \"zero case\");\nconsole.log(\"Passed\");",
    "notes": [
      {
        "en": "Each assertion checks a behavior, rather than merely calling the function. A failing assertion stops the test.",
        "ru": "Каждая проверка проверяет поведение, а не просто вызывает функцию. Провал останавливает тест.",
        "uk": "Кожна перевірка перевіряє поведінку, а не лише викликає функцію. Провал зупиняє тест."
      },
      {
        "en": "Keep functions small and keep calculations separate from DOM updates; they are easier to test independently.",
        "ru": "Делай функции небольшими и отделяй расчёты от изменения DOM: их легче проверять отдельно.",
        "uk": "Роби функції невеликими та відокремлюй розрахунки від зміни DOM: їх легше перевіряти окремо."
      }
    ],
    "tasks": [
      {
        "id": "assert-result",
        "title": {
          "en": "Write a real assertion",
          "ru": "Напиши настоящую проверку",
          "uk": "Напиши справжню перевірку"
        },
        "learn": {
          "en": "Pass a boolean comparison to assert, not the raw numeric result. assert(5) only checks truthiness, not whether 5 is the right answer.",
          "ru": "Передавай в assert логическое сравнение, а не само число. assert(5) проверяет только истинность, а не правильность ответа 5.",
          "uk": "Передавай в assert логічне порівняння, а не саме число. assert(5) перевіряє лише істинність, а не правильність відповіді 5."
        },
        "instruction": {
          "en": "Write add(a, b) returning a + b. Assert that add(2, 3) is 5 and add(0, 0) is 0. Then print Passed.",
          "ru": "Напиши add(a, b), возвращающую a + b. Проверь через assert, что add(2, 3) равно 5, а add(0, 0) равно 0. Затем выведи Passed.",
          "uk": "Напиши add(a, b), що повертає a + b. Перевір через assert, що add(2, 3) дорівнює 5, а add(0, 0) дорівнює 0. Потім виведи Passed."
        },
        "example": "assert(2 * 3 === 6, \"multiplication\");",
        "starter": "function add(a, b) {\n}\n",
        "cases": [
          {
            "input": [],
            "out": "Passed"
          }
        ],
        "features": [
          "assert"
        ],
        "revision": 1,
        "minAssertions": 2
      },
      {
        "id": "table-tests",
        "title": {
          "en": "Test a table of cases",
          "ru": "Проверь таблицу случаев",
          "uk": "Перевір таблицю випадків"
        },
        "learn": {
          "en": "A table stores input and expected output together. A loop can run the same assertion for every row. Include zero and a negative number.",
          "ru": "Таблица хранит ввод и ожидание вместе. Цикл выполняет одну и ту же проверку для каждой строки. Включи ноль и отрицательное число.",
          "uk": "Таблиця зберігає введення й очікування разом. Цикл виконує ту саму перевірку для кожного рядка. Включи нуль та від’ємне число."
        },
        "instruction": {
          "en": "Write square(n). Loop through [[0,0],[2,4],[-3,9]], asserting square(input) === expected for every row, then print Passed.",
          "ru": "Напиши square(n). Пройди [[0,0],[2,4],[-3,9]], для каждой строки проверь square(ввод) === ожидание. Затем выведи Passed.",
          "uk": "Напиши square(n). Пройди [[0,0],[2,4],[-3,9]], для кожного рядка перевір square(введення) === очікування. Потім виведи Passed."
        },
        "example": "for (const [input, expected] of [[1,2],[3,6]]) {\n  assert(input * 2 === expected);\n}",
        "starter": "const cases = [[0, 0], [2, 4], [-3, 9]];\nfunction square(n) {\n}\n",
        "cases": [
          {
            "input": [],
            "out": "Passed"
          }
        ],
        "features": [
          "assert",
          "ForOfStatement"
        ],
        "revision": 1,
        "minAssertions": 3
      },
      {
        "id": "test-error",
        "title": {
          "en": "Test the failure path",
          "ru": "Проверь путь ошибки",
          "uk": "Перевір шлях помилки"
        },
        "learn": {
          "en": "To test a thrown error, catch it and record that it happened. Assert the recorded fact afterwards; a missing error should fail the test.",
          "ru": "Чтобы проверить выброшенную ошибку, поймай её и запомни сам факт. После этого проверь факт через assert: отсутствие ошибки должно провалить тест.",
          "uk": "Щоб перевірити викинуту помилку, злови її та запам’ятай сам факт. Потім перевір факт через assert: відсутність помилки має провалити тест."
        },
        "instruction": {
          "en": "Read n, which is 0 or negative. Write requirePositive(n), throwing for n <= 0. Call it in try/catch, assert an error was caught and print Passed.",
          "ru": "Прочитай n, равное 0 или отрицательное. Напиши requirePositive(n), выбрасывающую ошибку при n <= 0. Вызови её в try/catch, проверь через assert, что ошибка поймана, и выведи Passed.",
          "uk": "Прочитай n, що дорівнює 0 або від’ємне. Напиши requirePositive(n), яка викидає помилку за n <= 0. Виклич її в try/catch, перевір через assert, що помилку зловлено, та виведи Passed."
        },
        "example": "let caught = false;\ntry { throw new Error(\"Example\"); } catch { caught = true; }\nassert(caught);",
        "starter": "const n = Number(input());\nlet caught = false;\n",
        "cases": [
          {
            "input": [
              "0"
            ],
            "out": "Passed"
          },
          {
            "input": [
              "-1"
            ],
            "out": "Passed"
          },
          {
            "input": [
              "-10"
            ],
            "out": "Passed"
          }
        ],
        "features": [
          "ThrowStatement",
          "TryStatement",
          "assert"
        ],
        "revision": 1,
        "minAssertions": 1
      },
      {
        "id": "fix-sort",
        "title": {
          "en": "Fix numeric sorting",
          "ru": "Исправь сортировку чисел",
          "uk": "Виправ сортування чисел"
        },
        "learn": {
          "en": "sort() without a comparator orders string representations, so 10 comes before 2. (a, b) => a - b gives numeric ascending order.",
          "ru": "sort() без функции сравнения сортирует строковые представления: 10 идёт перед 2. (a, b) => a - b задаёт числовой порядок по возрастанию.",
          "uk": "sort() без функції порівняння сортує рядкові представлення: 10 іде перед 2. (a, b) => a - b задає числовий порядок за зростанням."
        },
        "instruction": {
          "en": "Fix the starter so space-separated integers are sorted numerically in ascending order and printed with single spaces.",
          "ru": "Исправь заготовку: целые через пробел нужно отсортировать по возрастанию как числа и вывести через один пробел.",
          "uk": "Виправ заготовку: цілі через пробіл потрібно відсортувати за зростанням як числа та вивести через один пробіл."
        },
        "example": "const values = [12, 3, 2];\nvalues.sort((a, b) => a - b);\nconsole.log(values.join(\" \"));",
        "starter": "const numbers = input().split(\" \").map(Number);\nnumbers.sort();\nconsole.log(numbers.join(\" \"));\n",
        "cases": [
          {
            "input": [
              "10 2 1"
            ],
            "out": "1 2 10"
          },
          {
            "input": [
              "-1 -10 3"
            ],
            "out": "-10 -1 3"
          },
          {
            "input": [
              "0 100 20"
            ],
            "out": "0 20 100"
          }
        ],
        "features": [
          "sort"
        ],
        "revision": 1
      },
      {
        "id": "fix-mutation",
        "title": {
          "en": "Keep the original intact",
          "ru": "Сохрани исходное без изменений",
          "uk": "Збережи початкове без змін"
        },
        "learn": {
          "en": "sort changes its array. Copy the outer array with [...] before sorting when the original order must survive.",
          "ru": "sort меняет сам массив. Если исходный порядок нужен, сначала скопируй внешний массив через [...].",
          "uk": "sort змінює сам масив. Якщо початковий порядок потрібний, спочатку скопіюй зовнішній масив через [...]."
        },
        "instruction": {
          "en": "Read numbers separated by spaces. Save a sorted copy without changing numbers. Print the original order, then the numeric ascending order on a new line.",
          "ru": "Прочитай числа через пробел. Сохрани отсортированную копию, не меняя numbers. Выведи исходный порядок, затем числовой возрастающий с новой строки.",
          "uk": "Прочитай числа через пробіл. Збережи відсортовану копію, не змінюючи numbers. Виведи початковий порядок, потім числовий зростаючий з нового рядка."
        },
        "example": "const source = [4, 1];\nconst copy = [...source].sort((a,b) => a-b);",
        "starter": "const numbers = input().split(\" \").map(Number);\nconst sorted = numbers.sort((a, b) => a - b);\nconsole.log(numbers.join(\" \"));\nconsole.log(sorted.join(\" \"));\n",
        "cases": [
          {
            "input": [
              "3 1 2"
            ],
            "out": "3 1 2\n1 2 3"
          },
          {
            "input": [
              "10 2"
            ],
            "out": "10 2\n2 10"
          },
          {
            "input": [
              "-1 -4 0"
            ],
            "out": "-1 -4 0\n-4 -1 0"
          }
        ],
        "features": [
          "SpreadElement",
          "sort"
        ],
        "revision": 1
      },
      {
        "id": "project-config",
        "title": {
          "en": "Describe a module project",
          "ru": "Опиши модульный проект",
          "uk": "Опиши модульний проєкт"
        },
        "learn": {
          "en": "package.json is JSON data. type: \"module\" enables ES modules in Node.js. A scripts.test command defines what npm test runs. This exercise creates the data; it does not run npm in the browser.",
          "ru": "package.json — данные JSON. type: \"module\" включает ES-модули в Node.js. Команда scripts.test задаёт действие npm test. Здесь создаются данные: npm в браузере не запускается.",
          "uk": "package.json — дані JSON. type: \"module\" вмикає ES-модулі у Node.js. Команда scripts.test задає дію npm test. Тут створюються дані: npm у браузері не запускається."
        },
        "instruction": {
          "en": "Read a project name. Create config with name, type: \"module\", and scripts: {test: \"node --test\"}. Print JSON.stringify(config).",
          "ru": "Прочитай имя проекта. Создай config с name, type: \"module\", scripts: {test: \"node --test\"}. Выведи JSON.stringify(config).",
          "uk": "Прочитай ім’я проєкту. Створи config із name, type: \"module\", scripts: {test: \"node --test\"}. Виведи JSON.stringify(config)."
        },
        "example": "const config = {name: \"demo\", private: true};\nconsole.log(JSON.stringify(config));",
        "starter": "const name = input();\n",
        "cases": [
          {
            "input": [
              "demo"
            ],
            "out": "{\"name\":\"demo\",\"type\":\"module\",\"scripts\":{\"test\":\"node --test\"}}"
          },
          {
            "input": [
              "my-app"
            ],
            "out": "{\"name\":\"my-app\",\"type\":\"module\",\"scripts\":{\"test\":\"node --test\"}}"
          },
          {
            "input": [
              "practice"
            ],
            "out": "{\"name\":\"practice\",\"type\":\"module\",\"scripts\":{\"test\":\"node --test\"}}"
          }
        ],
        "features": [
          "ObjectExpression",
          "stringify"
        ],
        "revision": 1,
        "compare": "json"
      }
    ]
  },
  {
    "id": "projects",
    "title": {
      "en": "Build independent projects",
      "ru": "Собери самостоятельные проекты",
      "uk": "Збери самостійні проєкти"
    },
    "intro": {
      "en": "Now combine the tools you have practiced. Break a project into reading data, calculating state, and rendering it. Start with one working behavior, test its boundary cases, then add the next behavior. The supplied HTML and API fixtures make every project reproducible.",
      "ru": "Теперь объедини изученные инструменты. Раздели проект на чтение данных, вычисление состояния и отображение. Начни с одного работающего действия, проверь границы, затем добавляй следующее. Готовые HTML и учебные API делают проекты воспроизводимыми.",
      "uk": "Тепер поєднай вивчені інструменти. Розділи проєкт на читання даних, обчислення стану та відображення. Почни з однієї робочої дії, перевір межі, потім додавай наступну. Готові HTML та навчальні API роблять проєкти відтворюваними."
    },
    "example": "function total(items) {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}\nfunction render(value) {\n  document.querySelector(\"#result\").textContent = String(value);\n}",
    "notes": [
      {
        "en": "One function calculates without changing the page. Another renders a value. This separation helps you test and reuse calculations.",
        "ru": "Одна функция считает без изменения страницы, другая отображает значение. Такое разделение упрощает проверку и повторное использование расчётов.",
        "uk": "Одна функція рахує без зміни сторінки, інша відображає значення. Таке розділення спрощує перевірку та повторне використання розрахунків."
      },
      {
        "en": "The final projects are starting points for your own variations. Completing these checks covers this path, not every possible JavaScript topic.",
        "ru": "Итоговые проекты — основа для собственных вариантов. Прохождение проверок покрывает этот маршрут, а не все возможные темы JavaScript.",
        "uk": "Підсумкові проєкти — основа для власних варіантів. Проходження перевірок покриває цей маршрут, а не всі можливі теми JavaScript."
      }
    ],
    "tasks": [
      {
        "id": "project-bill",
        "title": {
          "en": "Project: a bill calculator",
          "ru": "Проект: расчёт счёта",
          "uk": "Проєкт: розрахунок рахунку"
        },
        "learn": {
          "en": "First calculate the base total. Then apply the student discount once. Finally print one result; intermediate values are not part of the answer.",
          "ru": "Сначала вычисли базовую сумму. Затем один раз примени скидку. В конце выведи один результат: промежуточные значения не нужны.",
          "uk": "Спочатку обчисли базову суму. Потім один раз застосуй знижку. Наприкінці виведи один результат: проміжні значення не потрібні."
        },
        "instruction": {
          "en": "Read price, quantity, then membership (yes or no), one per line.\nBase total is price * quantity. If membership is yes, subtract 10, but do not go below 0.\nPut the calculation in a function and print only the final total.",
          "ru": "Прочитай price, quantity, затем membership (yes или no), по строке.\nБазовая сумма равна price * quantity. При membership = yes вычти 10, но не уходи ниже 0.\nВынеси расчёт в функцию и выведи только итог.",
          "uk": "Прочитай price, quantity, потім membership (yes або no), по рядку.\nБазова сума дорівнює price * quantity. За membership = yes відніми 10, але не йди нижче 0.\nВинеси розрахунок у функцію та виведи лише підсумок."
        },
        "example": "function discounted(total, discount) {\n  return Math.max(0, total - discount);\n}",
        "starter": "const price = Number(input());\nconst quantity = Number(input());\nconst membership = input();\n",
        "cases": [
          {
            "input": [
              "20",
              "2",
              "no"
            ],
            "out": "40"
          },
          {
            "input": [
              "20",
              "2",
              "yes"
            ],
            "out": "30"
          },
          {
            "input": [
              "3",
              "1",
              "yes"
            ],
            "out": "0"
          },
          {
            "input": [
              "0",
              "4",
              "no"
            ],
            "out": "0"
          },
          {
            "input": [
              "10",
              "1",
              "yes"
            ],
            "out": "0"
          }
        ],
        "features": [
          "FunctionDeclaration"
        ],
        "revision": 1
      },
      {
        "id": "project-orders",
        "title": {
          "en": "Project: summarize orders",
          "ru": "Проект: сводка заказов",
          "uk": "Проєкт: підсумок замовлень"
        },
        "learn": {
          "en": "JSON.parse returns an array of objects. Each row contributes quantity to the count and price * quantity to the total. Empty arrays should produce zeros.",
          "ru": "JSON.parse даёт массив объектов. Каждая строка добавляет quantity в количество и price * quantity в сумму. Пустой массив должен дать нули.",
          "uk": "JSON.parse дає масив об’єктів. Кожен рядок додає quantity до кількості та price * quantity до суми. Порожній масив має дати нулі."
        },
        "instruction": {
          "en": "Read a JSON array of {price, quantity} objects.\nCalculate the total quantity and total price.\nPrint a JSON object with keys count and total. An empty input array gives {\"count\":0,\"total\":0}.",
          "ru": "Прочитай JSON-массив объектов {price, quantity}.\nНайди общее количество и общую стоимость.\nВыведи JSON-объект с count и total. Пустой массив даёт {\"count\":0,\"total\":0}.",
          "uk": "Прочитай JSON-масив об’єктів {price, quantity}.\nЗнайди загальну кількість та загальну вартість.\nВиведи JSON-об’єкт із count та total. Порожній масив дає {\"count\":0,\"total\":0}."
        },
        "example": "const rows = [{price: 3, quantity: 2}];\nconst total = rows.reduce((sum, row) => sum + row.price * row.quantity, 0);",
        "starter": "const orders = JSON.parse(input());\n",
        "cases": [
          {
            "input": [
              "[]"
            ],
            "out": "{\"count\":0,\"total\":0}"
          },
          {
            "input": [
              "[{\"price\":5,\"quantity\":3}]"
            ],
            "out": "{\"count\":3,\"total\":15}"
          },
          {
            "input": [
              "[{\"price\":2,\"quantity\":4},{\"price\":10,\"quantity\":1}]"
            ],
            "out": "{\"count\":5,\"total\":18}"
          }
        ],
        "features": [
          "parse",
          "stringify"
        ],
        "revision": 1,
        "compare": "json"
      },
      {
        "id": "project-counter",
        "title": {
          "en": "Project: a bounded counter",
          "ru": "Проект: счётчик с границей",
          "uk": "Проєкт: лічильник із межею"
        },
        "learn": {
          "en": "Keep state in a number and use one render function to update the page. All buttons change the same state; reset sets it back to zero.",
          "ru": "Храни состояние в числе и обновляй страницу одной функцией render. Все кнопки меняют одно состояние, reset возвращает ноль.",
          "uk": "Зберігай стан у числі та оновлюй сторінку однією функцією render. Усі кнопки змінюють один стан, reset повертає нуль."
        },
        "instruction": {
          "en": "Start count at 0 and display it in #count.\n#plus adds 1; #minus subtracts 1 but never below 0; #reset sets 0.\nUpdate the visible count after every click.",
          "ru": "Начни count с 0 и показывай в #count.\n#plus прибавляет 1; #minus вычитает 1, но не ниже 0; #reset задаёт 0.\nОбновляй видимое число после каждого нажатия.",
          "uk": "Почни count із 0 та показуй у #count.\n#plus додає 1; #minus віднімає 1, але не нижче 0; #reset задає 0.\nОновлюй видиме число після кожного натискання."
        },
        "example": "function render() {\n  result.textContent = String(count);\n}",
        "starter": "let count = 0;\nconst result = document.querySelector(\"#count\");\n",
        "cases": [
          {
            "input": [],
            "out": "[\"0\"]",
            "html": "<button id=\"plus\">+</button><button id=\"minus\">-</button><button id=\"reset\">Reset</button><p id=\"count\">0</p>",
            "actions": [
              {
                "selector": "#minus"
              }
            ],
            "inspect": [
              {
                "selector": "#count"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"1\"]",
            "html": "<button id=\"plus\">+</button><button id=\"minus\">-</button><button id=\"reset\">Reset</button><p id=\"count\">0</p>",
            "actions": [
              {
                "selector": "#plus"
              },
              {
                "selector": "#plus"
              },
              {
                "selector": "#minus"
              }
            ],
            "inspect": [
              {
                "selector": "#count"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"0\"]",
            "html": "<button id=\"plus\">+</button><button id=\"minus\">-</button><button id=\"reset\">Reset</button><p id=\"count\">0</p>",
            "actions": [
              {
                "selector": "#plus"
              },
              {
                "selector": "#plus"
              },
              {
                "selector": "#reset"
              }
            ],
            "inspect": [
              {
                "selector": "#count"
              }
            ]
          },
          {
            "input": [],
            "out": "[\"1\"]",
            "html": "<button id=\"plus\">+</button><button id=\"minus\">-</button><button id=\"reset\">Reset</button><p id=\"count\">0</p>",
            "actions": [
              {
                "selector": "#plus"
              },
              {
                "selector": "#reset"
              },
              {
                "selector": "#plus"
              }
            ],
            "inspect": [
              {
                "selector": "#count"
              }
            ]
          }
        ],
        "features": [
          "addEventListener"
        ],
        "revision": 1,
        "dom": true
      },
      {
        "id": "project-search",
        "title": {
          "en": "Project: a live search list",
          "ru": "Проект: живой поиск по списку",
          "uk": "Проєкт: живий пошук у списку"
        },
        "learn": {
          "en": "Store the full original list. Filtering should create a view, not permanently delete items. Clear the result list before rendering a fresh view.",
          "ru": "Сохрани полный исходный список. Фильтрация создаёт представление, а не навсегда удаляет элементы. Перед новым отображением очищай список результатов.",
          "uk": "Збережи повний початковий список. Фільтрація створює подання, а не назавжди видаляє елементи. Перед новим відображенням очищуй список результатів."
        },
        "instruction": {
          "en": "Read a JSON array of names. Render all as li in #results initially.\nOn input in #query, trim and lowercase the query. Keep names containing that text, ignoring case.\nRender matching names in original order with textContent. A blank query shows everything.",
          "ru": "Прочитай JSON-массив имён. Сначала покажи все в li внутри #results.\nПри вводе в #query убери крайние пробелы и понизь регистр запроса. Оставь имена, содержащие запрос без учёта регистра.\nПоказывай имена в исходном порядке через textContent. Пустой запрос показывает всё.",
          "uk": "Прочитай JSON-масив імен. Спочатку покажи всі в li всередині #results.\nПід час введення у #query прибери крайні пробіли та зменш регістр запиту. Залиш імена, що містять запит без урахування регістру.\nПоказуй імена в початковому порядку через textContent. Порожній запит показує все."
        },
        "example": "const visible = [\"Ada\", \"Alan\"].filter(name => name.toLowerCase().includes(\"al\"));\nconsole.log(visible);",
        "starter": "const names = JSON.parse(input());\nconst field = document.querySelector(\"#query\");\nconst list = document.querySelector(\"#results\");\n",
        "cases": [
          {
            "input": [
              "[\"Ada\",\"Alan\",\"Grace\"]"
            ],
            "out": "[3,\"AdaAlanGrace\"]",
            "html": "<input id=\"query\"><ul id=\"results\"></ul>",
            "actions": [
              {
                "selector": "#query",
                "type": "input",
                "value": ""
              }
            ],
            "inspect": [
              {
                "selector": "#results li",
                "property": "count"
              },
              {
                "selector": "#results"
              }
            ]
          },
          {
            "input": [
              "[\"Ada\",\"Alan\",\"Grace\"]"
            ],
            "out": "[1,\"Alan\"]",
            "html": "<input id=\"query\"><ul id=\"results\"></ul>",
            "actions": [
              {
                "selector": "#query",
                "type": "input",
                "value": " AL "
              }
            ],
            "inspect": [
              {
                "selector": "#results li",
                "property": "count"
              },
              {
                "selector": "#results"
              }
            ]
          },
          {
            "input": [
              "[\"Ada\",\"Alan\",\"Grace\"]"
            ],
            "out": "[3,\"AdaAlanGrace\"]",
            "html": "<input id=\"query\"><ul id=\"results\"></ul>",
            "actions": [
              {
                "selector": "#query",
                "type": "input",
                "value": "a"
              }
            ],
            "inspect": [
              {
                "selector": "#results li",
                "property": "count"
              },
              {
                "selector": "#results"
              }
            ]
          },
          {
            "input": [
              "[\"Ada\",\"Alan\",\"Grace\"]"
            ],
            "out": "[0,\"\"]",
            "html": "<input id=\"query\"><ul id=\"results\"></ul>",
            "actions": [
              {
                "selector": "#query",
                "type": "input",
                "value": "xyz"
              }
            ],
            "inspect": [
              {
                "selector": "#results li",
                "property": "count"
              },
              {
                "selector": "#results"
              }
            ]
          }
        ],
        "features": [
          "filter",
          "addEventListener",
          "createElement"
        ],
        "revision": 1,
        "dom": true
      },
      {
        "id": "project-todo",
        "title": {
          "en": "Project: a small task app",
          "ru": "Проект: список дел",
          "uk": "Проєкт: список справ"
        },
        "learn": {
          "en": "Listen to the form submit event and call event.preventDefault(). Read and trim the field, create one safe li, then clear the input. Give each li a click listener to toggle done.",
          "ru": "Слушай submit формы и вызови event.preventDefault(). Прочитай и очисти края поля, создай безопасный li, затем очисти input. На каждый li добавь обработчик переключения done.",
          "uk": "Слухай submit форми та виклич event.preventDefault(). Прочитай і очисть краї поля, створи безпечний li, потім очисть input. На кожен li додай обробник перемикання done."
        },
        "instruction": {
          "en": "On #todo-form submit, prevent navigation. Ignore blank or whitespace-only entries.\nAppend the trimmed text as a new li in #tasks and clear #todo-input.\nClicking a task toggles its done class. Keep earlier tasks when adding a new one.",
          "ru": "При submit #todo-form предотврати переход. Игнорируй пустые и пробельные записи.\nДобавь очищенный текст новым li в #tasks и очисти #todo-input.\nНажатие на задачу переключает класс done. При добавлении сохраняй прежние задачи.",
          "uk": "За submit #todo-form запобігай переходу. Ігноруй порожні та пробільні записи.\nДодай очищений текст новим li до #tasks та очисть #todo-input.\nНатискання на завдання перемикає клас done. За додавання зберігай попередні завдання."
        },
        "example": "form.addEventListener(\"submit\", event => {\n  event.preventDefault();\n  // Read, validate, create, then render.\n});",
        "starter": "const form = document.querySelector(\"#todo-form\");\nconst field = document.querySelector(\"#todo-input\");\nconst list = document.querySelector(\"#tasks\");\n",
        "cases": [
          {
            "input": [],
            "out": "[0,\"\"]",
            "html": "<form id=\"todo-form\"><input id=\"todo-input\"><button>Add</button></form><ul id=\"tasks\"></ul>",
            "actions": [
              {
                "selector": "#todo-input",
                "type": "input",
                "value": "  "
              },
              {
                "selector": "#todo-form",
                "type": "submit"
              }
            ],
            "inspect": [
              {
                "selector": "#tasks li",
                "property": "count"
              },
              {
                "selector": "#tasks"
              }
            ]
          },
          {
            "input": [],
            "out": "[2,\"ReadPractice\",1,\"\"]",
            "html": "<form id=\"todo-form\"><input id=\"todo-input\"><button>Add</button></form><ul id=\"tasks\"></ul>",
            "actions": [
              {
                "selector": "#todo-input",
                "type": "input",
                "value": " Read "
              },
              {
                "selector": "#todo-form",
                "type": "submit"
              },
              {
                "selector": "#todo-input",
                "type": "input",
                "value": "Practice"
              },
              {
                "selector": "#todo-form",
                "type": "submit"
              },
              {
                "selector": "#tasks li"
              }
            ],
            "inspect": [
              {
                "selector": "#tasks li",
                "property": "count"
              },
              {
                "selector": "#tasks"
              },
              {
                "selector": "#tasks .done",
                "property": "count"
              },
              {
                "selector": "#todo-input",
                "property": "value"
              }
            ]
          },
          {
            "input": [],
            "out": "[1,\"<b>text</b>\"]",
            "html": "<form id=\"todo-form\"><input id=\"todo-input\"><button>Add</button></form><ul id=\"tasks\"></ul>",
            "actions": [
              {
                "selector": "#todo-input",
                "type": "input",
                "value": "<b>text</b>"
              },
              {
                "selector": "#todo-form",
                "type": "submit"
              }
            ],
            "inspect": [
              {
                "selector": "#tasks li",
                "property": "count"
              },
              {
                "selector": "#tasks"
              }
            ]
          }
        ],
        "features": [
          "preventDefault",
          "createElement",
          "addEventListener"
        ],
        "revision": 1,
        "dom": true
      },
      {
        "id": "project-dashboard",
        "title": {
          "en": "Final project: a data dashboard",
          "ru": "Итоговый проект: панель данных",
          "uk": "Підсумковий проєкт: панель даних"
        },
        "learn": {
          "en": "Separate loading, rendering and error state. Check response.ok, render data with safe text nodes, and use finally to re-enable the button. The lesson service is a deterministic fixture, not a live external API.",
          "ru": "Раздели загрузку, отображение и состояние ошибки. Проверь response.ok, выводи данные безопасным текстом и включай кнопку обратно в finally. Сервис урока — воспроизводимый учебный ответ, а не внешний живой API.",
          "uk": "Розділи завантаження, відображення та стан помилки. Перевір response.ok, виводь дані безпечним текстом і вмикай кнопку назад у finally. Сервіс уроку — відтворювана навчальна відповідь, а не зовнішній живий API."
        },
        "instruction": {
          "en": "On #load click, disable it and set #status to Loading.\nFetch /api/products; its JSON is an array of {name, price}. For a failed response throw an error.\nClear #products, append one li per product with text NAME: PRICE. Set status to Ready, or Empty for an empty array.\nOn failure, clear the list and set status to Error. Always re-enable the button in finally.",
          "ru": "При нажатии #load выключи кнопку и задай #status = Loading.\nПолучи /api/products: JSON содержит массив {name, price}. При плохом ответе выброси ошибку.\nОчисти #products и добавь li с текстом ИМЯ: ЦЕНА для каждого товара. Задай статус Ready либо Empty для пустого массива.\nПри сбое очисти список и задай Error. В finally всегда включай кнопку обратно.",
          "uk": "За натискання #load вимкни кнопку та задай #status = Loading.\nОтримай /api/products: JSON містить масив {name, price}. За поганої відповіді викинь помилку.\nОчисть #products і додай li з текстом ІМ’Я: ЦІНА для кожного товару. Задай статус Ready або Empty для порожнього масиву.\nЗа збою очисть список та задай Error. У finally завжди вмикай кнопку назад."
        },
        "example": "button.addEventListener(\"click\", async () => {\n  button.disabled = true;\n  try { /* await, validate, render */ }\n  catch (error) { /* show failure */ }\n  finally { button.disabled = false; }\n});",
        "starter": "const button = document.querySelector(\"#load\");\nconst status = document.querySelector(\"#status\");\nconst list = document.querySelector(\"#products\");\n",
        "cases": [
          {
            "input": [],
            "out": "[\"Ready\",\"Pen: 2Book: 8\",false]",
            "html": "<button id=\"load\">Load products</button><p id=\"status\">Idle</p><ul id=\"products\"></ul>",
            "actions": [
              {
                "selector": "#load"
              }
            ],
            "inspect": [
              {
                "selector": "#status"
              },
              {
                "selector": "#products"
              },
              {
                "selector": "#load",
                "property": "disabled"
              }
            ],
            "responses": {
              "/api/products": {
                "status": 200,
                "body": [
                  {
                    "name": "Pen",
                    "price": 2
                  },
                  {
                    "name": "Book",
                    "price": 8
                  }
                ]
              }
            }
          },
          {
            "input": [],
            "out": "[\"Empty\",\"\",false]",
            "html": "<button id=\"load\">Load products</button><p id=\"status\">Idle</p><ul id=\"products\"></ul>",
            "actions": [
              {
                "selector": "#load"
              }
            ],
            "inspect": [
              {
                "selector": "#status"
              },
              {
                "selector": "#products"
              },
              {
                "selector": "#load",
                "property": "disabled"
              }
            ],
            "responses": {
              "/api/products": {
                "status": 200,
                "body": []
              }
            }
          },
          {
            "input": [],
            "out": "[\"Error\",\"\",false]",
            "html": "<button id=\"load\">Load products</button><p id=\"status\">Idle</p><ul id=\"products\"></ul>",
            "actions": [
              {
                "selector": "#load"
              }
            ],
            "inspect": [
              {
                "selector": "#status"
              },
              {
                "selector": "#products"
              },
              {
                "selector": "#load",
                "property": "disabled"
              }
            ],
            "responses": {
              "/api/products": {
                "status": 500,
                "body": []
              }
            }
          },
          {
            "input": [],
            "out": "[\"Ready\",\"<b>safe</b>: 0\",false]",
            "html": "<button id=\"load\">Load products</button><p id=\"status\">Idle</p><ul id=\"products\"></ul>",
            "actions": [
              {
                "selector": "#load"
              }
            ],
            "inspect": [
              {
                "selector": "#status"
              },
              {
                "selector": "#products"
              },
              {
                "selector": "#load",
                "property": "disabled"
              }
            ],
            "responses": {
              "/api/products": {
                "status": 200,
                "body": [
                  {
                    "name": "<b>safe</b>",
                    "price": 0
                  }
                ]
              }
            }
          }
        ],
        "features": [
          "AwaitExpression",
          "fetch",
          "TryStatement",
          "createElement"
        ],
        "revision": 1,
        "dom": true
      }
    ]
  }
];
