import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson01: Lesson = {
  id: 1,
  slug: "pamoka-1",
  title: { lt: "Susipažinkime!", ru: "Знакомство!" },
  objectivesRu: [
    "Поздороваться и попрощаться",
    "Представиться и спросить, откуда человек",
    "Сказать, где живёте и какие языки понимаете",
  ],
  grammarTopicsRu: [
    "Личные местоимения",
    "Глагол būti / nebūti",
    "Вопросы kas и ar",
    "Род. падеж ед. числа с iš, местный падеж",
    "Настоящее время на -a",
    "Наречия на -iškai",
  ],
  vocabThemesRu: ["Приветствия", "Страны и языки", "Города", "Базовые глаголы"],
  dialogues: [
    dialogue("d1", "Rytas biure", "Утро в офисе", [
      { speaker: "Aistė", lt: "Labas rytas!", ru: "Доброе утро!" },
      { speaker: "Mantas", lt: "Labas rytas! Kaip sekasi?", ru: "Доброе утро! Как дела?" },
      { speaker: "Aistė", lt: "Gerai, ačiū. O tau?", ru: "Хорошо, спасибо. А у тебя?" },
      { speaker: "Mantas", lt: "Taip pat gerai.", ru: "Тоже хорошо." },
    ]),
    dialogue("d2", "Pirmas susitikimas", "Первая встреча", [
      { speaker: "Elena", lt: "Laba diena. Aš esu Elena.", ru: "Добрый день. Я Елена." },
      { speaker: "Tadas", lt: "Labai malonu. Aš esu Tadas.", ru: "Очень приятно. Я Тадас." },
      { speaker: "Elena", lt: "Iš kur tu esi?", ru: "Откуда ты?" },
      { speaker: "Tadas", lt: "Aš esu iš Kauno. O tu?", ru: "Я из Каунаса. А ты?" },
      { speaker: "Elena", lt: "Aš esu iš Sankt Peterburgo, bet dabar gyvenu Vilniuje.", ru: "Я из Санкт-Петербурга, но сейчас живу в Вильнюсе." },
    ]),
    dialogue("d3", "Kalbos", "Языки", [
      { speaker: "Jonas", lt: "Ar tu kalbi lietuviškai?", ru: "Ты говоришь по-литовски?" },
      { speaker: "Sofija", lt: "Šiek tiek kalbu, bet dar mokausi.", ru: "Немного говорю, но ещё учусь." },
      { speaker: "Jonas", lt: "Ar tu supranti rusiškai?", ru: "Ты понимаешь по-русски?" },
      { speaker: "Sofija", lt: "Taip, suprantu rusiškai ir angliškai.", ru: "Да, понимаю по-русски и по-английски." },
    ]),
    dialogue("d4", "Universitete", "В университете", [
      { speaker: "Dėstytoja", lt: "Laba diena. Kur jūs esate dabar?", ru: "Добрый день. Где вы сейчас?" },
      { speaker: "Studentas", lt: "Mes esame universitete.", ru: "Мы в университете." },
      { speaker: "Dėstytoja", lt: "Ar jūs studijuojate čia?", ru: "Вы здесь учитесь?" },
      { speaker: "Studentas", lt: "Taip, mes studijuojame Vilniuje.", ru: "Да, мы учимся в Вильнюсе." },
    ]),
    dialogue("d5", "Draugai", "Друзья", [
      { speaker: "Ugnė", lt: "Kas jis yra?", ru: "Кто он?" },
      { speaker: "Martynas", lt: "Jis yra mano draugas Paulius.", ru: "Это мой друг Паулюс." },
      { speaker: "Ugnė", lt: "Ar Paulius yra lietuvis?", ru: "Паулюс литовец?" },
      { speaker: "Martynas", lt: "Taip, jis yra lietuvis.", ru: "Да, он литовец." },
    ]),
    dialogue("d6", "Vakaras", "Вечер", [
      { speaker: "Ieva", lt: "Labas vakaras!", ru: "Добрый вечер!" },
      { speaker: "Nojus", lt: "Labas vakaras! Kur tu dabar esi?", ru: "Добрый вечер! Где ты сейчас?" },
      { speaker: "Ieva", lt: "Aš esu namuose.", ru: "Я дома." },
      { speaker: "Nojus", lt: "Puiku. Viso gero!", ru: "Отлично. Всего хорошего!" },
      { speaker: "Ieva", lt: "Viso gero!", ru: "Всего хорошего!" },
    ]),
  ],
  vocabulary: [
    { lt: "labas rytas", ru: "доброе утро", pos: "phrase" },
    { lt: "laba diena", ru: "добрый день", pos: "phrase" },
    { lt: "labas vakaras", ru: "добрый вечер", pos: "phrase" },
    { lt: "viso gero", ru: "до свидания / всего хорошего", pos: "phrase" },
    { lt: "ačiū", ru: "спасибо", pos: "phrase" },
    { lt: "prašom", ru: "пожалуйста", pos: "phrase" },
    { lt: "taip", ru: "да", pos: "phrase" },
    { lt: "ne", ru: "нет", pos: "phrase" },
    { lt: "aš", ru: "я", pos: "phrase" },
    { lt: "tu", ru: "ты", pos: "phrase" },
    { lt: "jis", ru: "он", pos: "phrase" },
    { lt: "ji", ru: "она", pos: "phrase" },
    { lt: "mes", ru: "мы", pos: "phrase" },
    { lt: "jūs", ru: "вы", pos: "phrase" },
    { lt: "jie", ru: "они (м.р.)", pos: "phrase" },
    { lt: "būti", ru: "быть", pos: "verb", forms: ["esu", "esi", "yra", "esame", "esate"] },
    { lt: "gyventi", ru: "жить", pos: "verb", forms: ["gyvenu", "gyvena"] },
    { lt: "studijuoti", ru: "учиться (в вузе)", pos: "verb", forms: ["studijuoja"] },
    { lt: "kalbėti", ru: "говорить", pos: "verb", forms: ["kalbu", "kalba"] },
    { lt: "suprasti", ru: "понимать", pos: "verb", forms: ["suprantu", "supranta"] },
    { lt: "mokytis", ru: "учиться", pos: "verb", forms: ["mokausi"] },
    { lt: "dabar", ru: "сейчас", pos: "adv" },
    { lt: "čia", ru: "здесь", pos: "adv" },
    { lt: "universitetas", ru: "университет", pos: "noun" },
    { lt: "namai", ru: "дом", pos: "noun" },
    { lt: "draugas", ru: "друг", pos: "noun" },
    { lt: "studentas", ru: "студент", pos: "noun" },
    { lt: "dėstytoja", ru: "преподавательница", pos: "noun" },
    { lt: "Lietuva", ru: "Литва", pos: "noun" },
    { lt: "Vilnius", ru: "Вильнюс", pos: "noun" },
    { lt: "Kaunas", ru: "Каунас", pos: "noun" },
    { lt: "Rusija", ru: "Россия", pos: "noun" },
    { lt: "lietuvis", ru: "литовец", pos: "noun" },
    { lt: "lietuvė", ru: "литовка", pos: "noun" },
    { lt: "iš", ru: "из (предлог + род. падеж)", pos: "phrase" },
    { lt: "kur", ru: "где", pos: "adv" },
    { lt: "kas", ru: "кто", pos: "phrase" },
    { lt: "ar", ru: "вопросительная частица", pos: "phrase" },
    { lt: "lietuviškai", ru: "по-литовски", pos: "adv" },
    { lt: "rusiškai", ru: "по-русски", pos: "adv" },
    { lt: "angliškai", ru: "по-английски", pos: "adv" },
    { lt: "gerai", ru: "хорошо", pos: "adv" },
    { lt: "puiku", ru: "отлично", pos: "adv" },
    { lt: "šiek tiek", ru: "немного", pos: "phrase" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Įvardžiai ir būti", ru: "Местоимения и глагол būti" },
      explanationRu:
        "В литовском местоимения: aš, tu, jis, ji, mes, jūs, jie. Глагол būti (быть) в настоящем: aš esu, tu esi, jis/ji yra, mes esame, jūs esate, jie yra.\n\nОтрицание с ne-: aš nesu…, jis nėra…",
      tableMarkdown: `| Asmuo | būti |\n| --- | --- |\n| aš | esu |\n| tu | esi |\n| jis/ji | yra |\n| mes | esame |\n| jūs | esate |\n| jie | yra |`,
      examples: [
        { lt: "Aš esu studentas.", ru: "Я студент." },
        { lt: "Ji yra iš Lietuvos.", ru: "Она из Литвы." },
        { lt: "Mes nesame namuose.", ru: "Мы не дома." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Klausimai kas / ar", ru: "Вопросы kas и ar" },
      explanationRu:
        "**kas** — «кто?» (прямой вопрос). **ar** — частица «разве / ли» для вопроса да/нет: Ar tu esi studentas?",
      examples: [
        { lt: "Kas jis yra?", ru: "Кто он?" },
        { lt: "Ar jūs kalbate lietuviškai?", ru: "Вы говорите по-литовски?" },
      ],
    },
    {
      id: "g3",
      title: { lt: "Kilmininkas su iš", ru: "Родительный падеж с iš" },
      explanationRu:
        "После iš (из) нужен родительный падеж города/страны: iš Vilniaus, iš Kauno, iš Lietuvos.",
      tableMarkdown: `| Vietovardis (V.) | Kilmininkas (K.) |\n| --- | --- |\n| Vilnius | Vilniaus |\n| Kaunas | Kauno |\n| Lietuva | Lietuvos |`,
      examples: [
        { lt: "Aš esu iš Sankt Peterburgo.", ru: "Я из Санкт-Петербурга." },
        { lt: "Jis yra iš Vilniaus.", ru: "Он из Вильнюса." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Vietininkas ir -iškai", ru: "Местный падеж и наречия на -iškas" },
      explanationRu:
        "**Kur?** — где? Ответ часто в местном: Vilniuje, Kaune, universitete. Национальность → наречие: lietuvis → lietuviškai.",
      examples: [
        { lt: "Mes gyvename Vilniuje.", ru: "Мы живём в Вильнюсе." },
        { lt: "Aš suprantu rusiškai.", ru: "Я понимаю по-русски." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "ačiū", ru: "спасибо" },
        { lt: "kur", ru: "где" },
        { lt: "dabar", ru: "сейчас" },
        { lt: "universitetas", ru: "университет" },
        { lt: "lietuviškai", ru: "по-литовски" },
        { lt: "iš Kauno", ru: "из Каунаса" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильный ответ.",
      questions: [
        {
          lt: "Kur jūs esate?",
          choices: ["Mes esame namuose.", "Mes esame namų.", "Mes esame namus."],
          answerIndex: 0,
          explanationRu: "С «kur?» часто местный падеж: namuose.",
        },
        {
          lt: "Iš kur tu esi?",
          choices: ["Aš esu iš Vilnius.", "Aš esu iš Vilniaus.", "Aš esu iš Vilniuje."],
          answerIndex: 1,
          explanationRu: "После iš — родительный: iš Vilniaus.",
        },
        {
          lt: "Ar ji kalba lietuviškai?",
          choices: ["Taip, ji kalba.", "Taip, ji kalbėti.", "Taip, ji kalba lietuviškai."],
          answerIndex: 2,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте одно слово (лит.).",
      questions: [
        { sentence: "Aš ___ studentas.", blank: "esu", hintRu: "1 л., наст. время būti" },
        { sentence: "Jie ___ iš Lietuvos.", blank: "yra", hintRu: "они + быть" },
        { sentence: "Mes gyvename ___ .", blank: "Vilniuje", hintRu: "в Вильнюсе (местный)" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините литовское слово с русским.",
      pairs: [
        { lt: "ačiū", ru: "спасибо" },
        { lt: "kur", ru: "где" },
        { lt: "dabar", ru: "сейчас" },
        { lt: "universitetas", ru: "университет" },
        { lt: "draugas", ru: "друг" },
        { lt: "namai", ru: "дом" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите литовское предложение.",
      questions: [
        {
          words: ["esu", "Aš", "Vilniuje", "gyvenu"],
          correct: ["Aš", "gyvenu", "Vilniuje"],
          ru: "Я живу в Вильнюсе.",
        },
        {
          words: ["studentė", "Ji", "yra", "čia"],
          correct: ["Ji", "yra", "studentė", "čia"],
          ru: "Она здесь студентка.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Местоимения и согласование.",
      questions: [
        {
          lt: "___ esate jūs?",
          choices: ["Kas", "Kur", "Ar"],
          answerIndex: 0,
        },
        {
          lt: "___ tu supranti rusiškai?",
          choices: ["Kas", "Ar", "Kur"],
          answerIndex: 1,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Trumpas pokalbis", "Короткий разговор", [
      { speaker: "Greta", lt: "Labas! Aš esu Greta. Iš kur tu esi?", ru: "Привет! Я Грета. Откуда ты?" },
      { speaker: "Markas", lt: "Labas! Aš esu iš Berlyno, bet dabar gyvenu Kaune.", ru: "Привет! Я из Берлина, но сейчас живу в Каунасе." },
      { speaker: "Greta", lt: "Ar tu kalbi lietuviškai?", ru: "Ты говоришь по-литовски?" },
      { speaker: "Markas", lt: "Šiek tiek kalbu ir dar mokausi.", ru: "Немного говорю и ещё учусь." },
    ]),
  ],
  listeningQuestions: [
    {
      q: "Где сейчас живёт Маркас?",
      choices: ["В Берлине", "В Каунасе", "В Вильнюсе"],
      answerIndex: 1,
    },
    {
      q: "Откуда он родом?",
      choices: ["Из Каунаса", "Из Берлина", "Из Вильнюса"],
      answerIndex: 1,
    },
    {
      q: "Как он оценивает свой литовский?",
      choices: ["Свободно говорит", "Немного говорит и учится", "Не говорит"],
      answerIndex: 1,
    },
  ],
  reading: {
    lt: "Mano vardas Olga. Aš esu iš Maskvos, bet dabar gyvenu Vilniuje. Aš studijuoju universitete. Aš suprantu lietuviškai ir rusiškai. Mano draugė yra lietuvė. Ji kalba lietuviškai labai gerai.",
    ru: "Меня зовут Ольга. Я из Москвы, но сейчас живу в Вильнюсе. Я учусь в университете. Я понимаю по-литовски и по-русски. Моя подруга — литовка. Она говорит по-литовски очень хорошо.",
    questions: [
      {
        q: "Kur Olga dabar gyvena?",
        choices: ["Maskvoje", "Vilniuje", "Kaune"],
        answerIndex: 1,
      },
      {
        q: "Ką ji supranta?",
        choices: ["Tik rusiškai", "Tik lietuviškai", "Lietuviškai ir rusiškai"],
        answerIndex: 2,
      },
      {
        q: "Kas yra jos draugė?",
        choices: ["Studentė", "Lietuvė", "Iš Berlyno"],
        answerIndex: 1,
      },
    ],
  },
};
