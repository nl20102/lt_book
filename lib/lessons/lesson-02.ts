import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson02: Lesson = {
  id: 2,
  slug: "pamoka-2",
  title: { lt: "Kaip sekasi?", ru: "Как дела?" },
  objectivesRu: [
    "Спросить, как дела, и ответить",
    "Назвать адрес и номер телефона",
    "Сказать, куда идёте (į + вин. падеж)",
    "Назвать дни недели и числа 0–10",
  ],
  grammarTopicsRu: [
    "Винительный падеж с į и pas",
    "prie + род. падеж",
    "Родительный в названиях (Vilniaus gatvė)",
    "Время: винительный (šeštadienį)",
    "Отрицание подлежащего: nėra + род. падеж",
    "Звательный падеж (к кому обращаемся)",
  ],
  vocabThemesRu: ["Город и учреждения", "Профессии", "Время суток", "Числа"],
  dialogues: [
    dialogue("d1", "Gatvėje", "На улице", [
      { speaker: "Rokas", lt: "Sveikas, Vytautai! Kaip sekasi?", ru: "Привет, Витаутай! Как дела?" },
      { speaker: "Vytautas", lt: "Sveikas, Rokai! Neblogai. O tau?", ru: "Привет, Рокай! Неплохо. А у тебя?" },
      { speaker: "Rokas", lt: "Gerai. Einu į paštą.", ru: "Хорошо. Иду на почту." },
    ]),
    dialogue("d2", "Adresas", "Адрес", [
      { speaker: "Administratorius", lt: "Koks jūsų adresas?", ru: "Какой ваш адрес?" },
      { speaker: "Klientas", lt: "Mano adresas: Gedimino prospektas 10.", ru: "Мой адрес: проспект Гедимина 10." },
      { speaker: "Administratorius", lt: "Koks telefono numeris?", ru: "Какой номер телефона?" },
      { speaker: "Klientas", lt: "Aštuoni šimtai šeši šimtai dvylika.", ru: "Восемьсот шестьсот двенадцать." },
    ]),
    dialogue("d3", "Į darbą", "На работу", [
      { speaker: "Laura", lt: "Kur tu eini?", ru: "Куда ты идёшь?" },
      { speaker: "Andrius", lt: "Aš einu į banką. O tu?", ru: "Я иду в банк. А ты?" },
      { speaker: "Laura", lt: "Aš einu pas gydytoją.", ru: "Я иду к врачу." },
    ]),
    dialogue("d4", "Susitikimas", "Встреча", [
      { speaker: "Monika", lt: "Kur mes susitinkame?", ru: "Где мы встречаемся?" },
      { speaker: "Tomas", lt: "Susitinkame prie kavinės.", ru: "Встречаемся у кафе." },
      { speaker: "Monika", lt: "Gerai. Kada?", ru: "Хорошо. Когда?" },
      { speaker: "Tomas", lt: "Šeštadienį, septintą valandą vakare.", ru: "В субботу, в семь вечера." },
    ]),
    dialogue("d5", "Savaitgalis", "Выходные", [
      { speaker: "Egidijus", lt: "Sėkmės egzamine!", ru: "Удачи на экзамене!" },
      { speaker: "Kamilė", lt: "Ačiū! Ir tau gero savaitgalio!", ru: "Спасибо! И тебе хороших выходных!" },
    ]),
    dialogue("d6", "Nėra namuose", "Нет дома", [
      { speaker: "Svečias", lt: "Ar yra ponia Kazlauskienė?", ru: "Есть ли госпожа Казлаускене?" },
      { speaker: "Kaimynė", lt: "Ne, šiandien jos nėra namuose.", ru: "Нет, сегодня её нет дома." },
      { speaker: "Svečias", lt: "Ačiū. Viso gero.", ru: "Спасибо. Всего хорошего." },
    ]),
  ],
  vocabulary: [
    { lt: "kaip sekasi?", ru: "как дела?", pos: "phrase" },
    { lt: "gerai", ru: "хорошо", pos: "adv" },
    { lt: "neblogai", ru: "неплохо", pos: "adv" },
    { lt: "blogai", ru: "плохо", pos: "adv" },
    { lt: "adresas", ru: "адрес", pos: "noun" },
    { lt: "gatvė", ru: "улица", pos: "noun" },
    { lt: "numeris", ru: "номер", pos: "noun" },
    { lt: "telefonas", ru: "телефон", pos: "noun" },
    { lt: "bankas", ru: "банк", pos: "noun" },
    { lt: "paštas", ru: "почта", pos: "noun" },
    { lt: "biblioteka", ru: "библиотека", pos: "noun" },
    { lt: "kavinė", ru: "кафе", pos: "noun" },
    { lt: "parduotuvė", ru: "магазин", pos: "noun" },
    { lt: "gydytojas", ru: "врач", pos: "noun" },
    { lt: "gydytoja", ru: "врач (ж.)", pos: "noun" },
    { lt: "eiti", ru: "идти", pos: "verb", forms: ["einu", "eina"] },
    { lt: "į", ru: "в/на (+ вин. падеж)", pos: "phrase" },
    { lt: "pas", ru: "к (+ вин. падеж)", pos: "phrase" },
    { lt: "prie", ru: "у/возле (+ род. падеж)", pos: "phrase" },
    { lt: "susitikti", ru: "встретиться", pos: "verb", forms: ["susitinka"] },
    { lt: "diena", ru: "день", pos: "noun" },
    { lt: "vakaras", ru: "вечер", pos: "noun" },
    { lt: "rytas", ru: "утро", pos: "noun" },
    { lt: "pirmadienis", ru: "понедельник", pos: "noun" },
    { lt: "antradienis", ru: "вторник", pos: "noun" },
    { lt: "trečiadienis", ru: "среда", pos: "noun" },
    { lt: "ketvirtadienis", ru: "четвер", pos: "noun" },
    { lt: "penktadienis", ru: "пятница", pos: "noun" },
    { lt: "šeštadienis", ru: "суббота", pos: "noun" },
    { lt: "sekmadienis", ru: "воскресенье", pos: "noun" },
    { lt: "šiandien", ru: "сегодня", pos: "adv" },
    { lt: "rytoj", ru: "завтра", pos: "adv" },
    { lt: "dabar", ru: "сейчас", pos: "adv" },
    { lt: "valanda", ru: "час", pos: "noun" },
    { lt: "sėkmės", ru: "удачи", pos: "phrase" },
    { lt: "savaitgalis", ru: "выходные", pos: "noun" },
    { lt: "nulis", ru: "ноль", pos: "noun" },
    { lt: "vienas", ru: "один", pos: "noun" },
    { lt: "du", ru: "два", pos: "noun" },
    { lt: "trys", ru: "три", pos: "noun" },
    { lt: "keturi", ru: "четыре", pos: "noun" },
    { lt: "penki", ru: "пять", pos: "noun" },
    { lt: "šeši", ru: "шесть", pos: "noun" },
    { lt: "septyni", ru: "семь", pos: "noun" },
    { lt: "aštuoni", ru: "восемь", pos: "noun" },
    { lt: "devyni", ru: "девять", pos: "noun" },
    { lt: "dešimt", ru: "десять", pos: "noun" },
    { lt: "inžinierius", ru: "инженер", pos: "noun" },
    { lt: "mokytoja", ru: "учительница", pos: "noun" },
    { lt: "programuotojas", ru: "программист", pos: "noun" },
    { lt: "nėra", ru: "нет (чего-то)", pos: "phrase" },
    { lt: "namuose", ru: "дома (местный)", pos: "adv" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Galininkas su į / pas", ru: "Винительный падеж с į и pas" },
      explanationRu:
        "**į** + вин. падеж отвечает на вопрос «куда?»: einu į banką. **pas** + вин. — «к кому?»: einu pas gydytoją.",
      tableMarkdown: `| Klaustukas | Pavyzdys |\n| --- | --- |\n| kur? / į ką? | einu į kavinę |\n| pas ką? | važiuoju pas draugę |`,
      examples: [
        { lt: "Mes einame į teatrą.", ru: "Мы идём в театр." },
        { lt: "Aš skubu pas gydytoją.", ru: "Я спешу к врачу." },
      ],
    },
    {
      id: "g2",
      title: { lt: "prie + kilmininkas", ru: "prie + родительный падеж" },
      explanationRu: "**prie** означает «у / возле»: prie stoties, prie mokyklos, prie kavinės.",
      examples: [{ lt: "Susitinkame prie tilto.", ru: "Встречаемся у моста." }],
    },
    {
      id: "g3",
      title: { lt: "Vardų kilmininkas", ru: "Родительный в названиях" },
      explanationRu:
        "В составных названиях второе слово часто в род. падеже: Vilniaus universitetas, Gedimino prospektas.",
      examples: [{ lt: "Tai yra Vilniaus senamiestis.", ru: "Это вильнюсский старый город." }],
    },
    {
      id: "g4",
      title: { lt: "Laikas galininku", ru: "Время в винительном падеже" },
      explanationRu: "Дни недели в ответ на «когда?» часто в винительном: šeštadienį, sekmadienį.",
      examples: [{ lt: "Susitinkame penktadienį.", ru: "Встречаемся в пятницу." }],
    },
    {
      id: "g5",
      title: { lt: "Ko nėra?", ru: "Отрицание с nėra + род. падеж" },
      explanationRu: "Конструкция «нет кого-то/чего-то»: čia nėra direktoriaus.",
      examples: [
        { lt: "Šiandien nėra tavo draugės.", ru: "Сегодня нет твоей подруги." },
        { lt: "Čia nėra klaidų.", ru: "Здесь нет ошибок." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Šauksmininkas", ru: "Звательный падеж" },
      explanationRu:
        "Обращение к человеку: Sveikas, Jonai! (к Jonas). У женских имён часто -a: Laba diena, Rasa!",
      examples: [
        { lt: "Sveika, Egle!", ru: "Привет, Эгле!" },
        { lt: "Pone direktoriau, laba diena.", ru: "Господин директор, добрый день." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "į banką", ru: "в банк" },
        { lt: "pas gydytoją", ru: "к врачу" },
        { lt: "prie stoties", ru: "у вокзала" },
        { lt: "šeštadienį", ru: "в субботу" },
        { lt: "nėra laiko", ru: "нет времени" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Kur tu eini?",
          choices: ["Aš einu į banką.", "Aš einu į bankas.", "Aš einu į banke."],
          answerIndex: 0,
        },
        {
          lt: "Kada susitinkame?",
          choices: ["šeštadienis", "šeštadienį", "šeštadienyje"],
          answerIndex: 1,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Mes susitinkame ___ kavinės.", blank: "prie", hintRu: "у кафе" },
        { sentence: "Aš skubu ___ gydytoją.", blank: "pas", hintRu: "к врачу" },
        { sentence: "Šiandien ___ laiko.", blank: "nėra", hintRu: "нет времени" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "pirmadienis", ru: "понедельник" },
        { lt: "penktadienis", ru: "пятница" },
        { lt: "sekmadienis", ru: "воскресенье" },
        { lt: "bankas", ru: "банк" },
        { lt: "paštas", ru: "почта" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["biblioteką", "į", "einu", "Aš"],
          correct: ["Aš", "einu", "į", "biblioteką"],
          ru: "Я иду в библиотеку.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Звательный падеж.",
      questions: [
        {
          lt: "Kaip pasveikinti Joną?",
          choices: ["Sveikas, Jonas!", "Sveikas, Jonai!", "Sveikas, Joną!"],
          answerIndex: 1,
          explanationRu: "К Jonas в обращении — Jonai.",
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Время (винительный падеж дня недели).",
      questions: [
        { sentence: "Susitinkame ___ vakare.", blank: "šeštadienį", hintRu: "в субботу" },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Skambutis", "Звонок", [
      { speaker: "A", lt: "Labas, ar čia yra ponia Jurkūnienė?", ru: "Привет, это госпожа Юркунене?" },
      { speaker: "B", lt: "Ne, šiandien jos nėra. Ji yra darbe.", ru: "Нет, сегодня её нет. Она на работе." },
      { speaker: "A", lt: "Suprantu. Ačiū!", ru: "Понятно. Спасибо!" },
    ]),
  ],
  listeningQuestions: [
    { q: "Ar ponia Jurkūnienė yra namuose?", choices: ["Taip", "Ne", "Nežinau"], answerIndex: 1 },
    { q: "Kur ji yra?", choices: ["Parduotuvėje", "Darbe", "Kavinėje"], answerIndex: 1 },
    { q: "Ką sako pašnekovas A pabaigoje?", choices: ["Ačiū", "Viso", "Nežinau"], answerIndex: 0 },
  ],
  reading: {
    lt: "Šiandien yra penktadienis. Rytis eina į banką ryte, o po pietų jis eina pas gydytoją. Vakare jis susitinka su draugais prie kavinės. Jie kalba lietuviškai ir angliškai. Ryčio telefono numeris baigiasi skaičiais du, trys, septyni.",
    ru: "Сегодня пятница. Ритис утром идёт в банк, а после обеда — к врачу. Вечером он встречается с друзьями у кафе. Они говорят по-литовски и по-английски. Телефон Ритиса заканчивается цифрами два, три, семь.",
    questions: [
      { q: "Kokia savaitės diena?", choices: ["šeštadienis", "penktadienis", "sekmadienis"], answerIndex: 1 },
      { q: "Kur jie susitinka vakare?", choices: ["Prie banko", "Prie kavinės", "Prie pašto"], answerIndex: 1 },
      { q: "Kur Rytis eina po pietų?", choices: ["Į banką", "Pas gydytoją", "Į teatrą"], answerIndex: 1 },
    ],
  },
};
