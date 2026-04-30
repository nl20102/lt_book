import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson03: Lesson = {
  id: 3,
  slug: "pamoka-3",
  title: { lt: "Čia mano šeima", ru: "Это моя семья" },
  objectivesRu: [
    "Рассказать о семье и родственниках",
    "Использовать местоимения šis / tas",
    "Говорить о возможности и желании: galėti, mėgti, turėti + infinitive",
  ],
  grammarTopicsRu: [
    "Настоящее время на -i",
    "Выражение объекта (ką matau?)",
    "galėti / mėgti / turėti + bendratis",
    "šis / tas",
    "Притяжательность",
    "Множественное число (им., род., вин.)",
    "Числительные 1–9 и согласование",
  ],
  vocabThemesRu: ["Семья", "Возраст", "Прилагательные", "Числа"],
  dialogues: [
    dialogue("d1", "Tėvai", "Родители", [
      { speaker: "Justė", lt: "Čia mano mama ir mano tėtis.", ru: "Это моя мама и мой папа." },
      { speaker: "Adele", lt: "Labai malonu. Kur jie gyvena?", ru: "Очень приятно. Где они живут?" },
      { speaker: "Justė", lt: "Jie gyvena Kaune. O aš gyvenu Vilniuje.", ru: "Они живут в Каунасе. А я живу в Вильнюсе." },
    ]),
    dialogue("d2", "Brolis ir sesuo", "Брат и сестра", [
      { speaker: "Lukas", lt: "Ar tu turi brolį?", ru: "У тебя есть брат?" },
      { speaker: "Rūta", lt: "Taip, aš turiu vieną brolį ir dvi seseris.", ru: "Да, у меня один брат и две сестры." },
      { speaker: "Lukas", lt: "Puiku! Aš neturiu brolių, bet turiu seserį.", ru: "Отлично! У меня нет братьев, но есть сестра." },
    ]),
    dialogue("d3", "Vaikai", "Дети", [
      { speaker: "Gintarė", lt: "Kiek jūs turite vaikų?", ru: "Сколько у вас детей?" },
      { speaker: "Tomas", lt: "Mes turime tris vaikus: du sūnus ir dukrą.", ru: "У нас трое детей: два сына и дочь." },
    ]),
    dialogue("d4", "Mėgstamos veiklos", "Любимые занятия", [
      { speaker: "Emilija", lt: "Ką tu mėgsti daryti savaitgalį?", ru: "Что ты любишь делать в выходные?" },
      { speaker: "Petras", lt: "Aš mėgstu skaityti ir vaikščioti parke.", ru: "Я люблю читать и гулять в парке." },
      { speaker: "Emilija", lt: "Aš mėgstu gaminti valgį.", ru: "Я люблю готовить еду." },
    ]),
    dialogue("d5", "Seneliai", "Бабушка и дедушка", [
      { speaker: "Karolis", lt: "Šitie žmonės yra mano seneliai.", ru: "Эти люди — мои бабушка и дедушка." },
      { speaker: "Ona", lt: "Ar jie gyvena čia, Vilniuje?", ru: "Они живут здесь, в Вильнюсе?" },
      { speaker: "Karolis", lt: "Ne, jie gyvena kaime.", ru: "Нет, они живут в деревне." },
    ]),
  ],
  vocabulary: [
    { lt: "šeima", ru: "семья", pos: "noun" },
    { lt: "mama", ru: "мама", pos: "noun" },
    { lt: "tėtis", ru: "папа", pos: "noun" },
    { lt: "tėvai", ru: "родители", pos: "noun" },
    { lt: "brolis", ru: "брат", pos: "noun" },
    { lt: "sesuo", ru: "сестра", pos: "noun" },
    { lt: "sūnus", ru: "сын", pos: "noun" },
    { lt: "dukra", ru: "дочь", pos: "noun" },
    { lt: "vaikas", ru: "ребёнок", pos: "noun" },
    { lt: "vaikai", ru: "дети", pos: "noun" },
    { lt: "seneliai", ru: "бабушка и дедушка", pos: "noun" },
    { lt: "kaimas", ru: "деревня", pos: "noun" },
    { lt: "miestas", ru: "город", pos: "noun" },
    { lt: "turėti", ru: "иметь", pos: "verb", forms: ["turiu", "turi"] },
    { lt: "mėgti", ru: "любить (что-то делать)", pos: "verb", forms: ["mėgstu", "mėgsta"] },
    { lt: "galėti", ru: "мочь", pos: "verb", forms: ["galiu", "gali"] },
    { lt: "skaitau", ru: "я читаю", pos: "verb" },
    { lt: "skaityti", ru: "читать", pos: "verb" },
    { lt: "gaminti", ru: "готовить", pos: "verb" },
    { lt: "valgis", ru: "еда", pos: "noun" },
    { lt: "parkas", ru: "парк", pos: "noun" },
    { lt: "vaikščioti", ru: "гулять", pos: "verb" },
    { lt: "šis", ru: "этот", pos: "adj" },
    { lt: "ši", ru: "эта", pos: "adj" },
    { lt: "tas", ru: "тот", pos: "adj" },
    { lt: "ta", ru: "та", pos: "adj" },
    { lt: "mano", ru: "мой", pos: "phrase" },
    { lt: "tavo", ru: "твой", pos: "phrase" },
    { lt: "jo", ru: "его", pos: "phrase" },
    { lt: "jos", ru: "её", pos: "phrase" },
    { lt: "mūsų", ru: "наш", pos: "phrase" },
    { lt: "jūsų", ru: "ваш", pos: "phrase" },
    { lt: "vienas", ru: "один", pos: "noun" },
    { lt: "du", ru: "два", pos: "noun" },
    { lt: "trys", ru: "три", pos: "noun" },
    { lt: "keturi", ru: "четыре", pos: "noun" },
    { lt: "penki", ru: "пять", pos: "noun" },
    { lt: "šeši", ru: "шесть", pos: "noun" },
    { lt: "septyni", ru: "семь", pos: "noun" },
    { lt: "aštuoni", ru: "восемь", pos: "noun" },
    { lt: "devyni", ru: "девять", pos: "noun" },
    { lt: "didelis", ru: "большой", pos: "adj" },
    { lt: "mažas", ru: "маленький", pos: "adj" },
    { lt: "jaunas", ru: "молодой", pos: "adj" },
    { lt: "senas", ru: "старый", pos: "adj" },
    { lt: "geras", ru: "хороший", pos: "adj" },
    { lt: "kiek", ru: "сколько", pos: "phrase" },
    { lt: "žmonės", ru: "люди", pos: "noun" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "-i tipo esamasis", ru: "Настоящее время на -i" },
      explanationRu:
        "Многие глаголы 3-го спряжения: gyvenu, dirbu, kalbu. Для he/she: gyvena, dirba, kalba.",
      examples: [
        { lt: "Aš gyvenu Vilniuje, o jie gyvena Kaune.", ru: "Я живу в Вильнюсе, а они — в Каунасе." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Objekto raiška", ru: "Выражение объекта" },
      explanationRu: "Вопрос «что я вижу/люблю?» часто требует формы объекта (винительный): aš matau brolį.",
      examples: [{ lt: "Aš turiu seserį.", ru: "У меня есть сестра." }],
    },
    {
      id: "g3",
      title: { lt: "galėti / mėgti / turėti + infinitive", ru: "Модальные глаголы + инфинитив" },
      explanationRu: "После galėti, mėgti, turėti часто идёт инфинитив: mėgstu skaityti.",
      examples: [
        { lt: "Aš galiu šiandien ateiti.", ru: "Я могу прийти сегодня." },
        { lt: "Ji mėgsta gaminti.", ru: "Она любит готовить." },
      ],
    },
    {
      id: "g4",
      title: { lt: "šis / tas", ru: "Указательные местоимения" },
      explanationRu: "**šis** — «этот», **tas** — «тот». Согласуются с родом: ši knyga, tas namas.",
      examples: [
        { lt: "Ši mergina yra mano sesuo.", ru: "Эта девушка — моя сестра." },
        { lt: "Tas vaikas yra mano sūnus.", ru: "Тот ребёнок — мой сын." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Daugiskaita", ru: "Множественное число" },
      explanationRu: "Примеры мн.ч.: vaikai, tėvai, broliai, seserys.",
      examples: [{ lt: "Mano tėvai gyvena kaime.", ru: "Мои родители живут в деревне." }],
    },
    {
      id: "g6",
      title: { lt: "Skaitvardžiai", ru: "Числительные 1–9" },
      explanationRu: "С существительными важно согласование: du broliai, dvi seserys.",
      tableMarkdown: `| Skaičius | vyriškoji | moteriškoji |\n| --- | --- | --- |\n| 1 | vienas brolis | viena sesuo |\n| 2 | du broliai | dvi seserys |`,
      examples: [{ lt: "Mes turime tris vaikus.", ru: "У нас трое детей." }],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "šeima", ru: "семья" },
        { lt: "brolis", ru: "брат" },
        { lt: "sesuo", ru: "сестра" },
        { lt: "tėvai", ru: "родители" },
        { lt: "turėti", ru: "иметь" },
        { lt: "mėgti", ru: "любить" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите верную форму.",
      questions: [
        {
          lt: "Ką ji mėgsta daryti?",
          choices: ["Ji mėgsta skaito.", "Ji mėgsta skaityti.", "Ji mėgstu skaityti."],
          answerIndex: 1,
        },
        {
          lt: "Kiek vaikų jie turi?",
          choices: ["jie turi trys vaikai", "jie turi tris vaikus", "jie turi trys vaikus"],
          answerIndex: 1,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "___ mergina yra mano sesuo.", blank: "Ši", hintRu: "эта (ж.р.)" },
        { sentence: "Aš ___ du brolius.", blank: "turiu", hintRu: "имею" },
        { sentence: "Mano tėvai gyvena ___ .", blank: "kaime", hintRu: "в деревне (местный)" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "mama", ru: "мама" },
        { lt: "tėtis", ru: "папа" },
        { lt: "sūnus", ru: "сын" },
        { lt: "duktė", ru: "дочь" },
        { lt: "seneliai", ru: "бабушка и дедушка" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["turiu", "seserį", "Aš", "vieną"],
          correct: ["Aš", "turiu", "vieną", "seserį"],
          ru: "У меня есть одна сестра.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "šis / tas",
      questions: [
        {
          lt: "___ vaikas yra ramus.",
          choices: ["Šis", "Ši", "Šie"],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Глаголы galėti / mėgti.",
      questions: [
        { sentence: "Ar tu ___ šiandien ateiti?", blank: "gali", hintRu: "можешь?" },
        { sentence: "Mes ___ valgyti namuose.", blank: "mėgstame", hintRu: "любим" },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Šeimos pristatymas", "Представление семьи", [
      { speaker: "Akvilė", lt: "Čia mano vyras ir mūsų dukra.", ru: "Это мой муж и наша дочь." },
      { speaker: "Simonas", lt: "Labai malonu. Kur gyvena tavo tėvai?", ru: "Очень приятно. Где живут твои родители?" },
      { speaker: "Akvilė", lt: "Jie gyvena Vilniuje, senamiestyje.", ru: "Они живут в Вильнюсе, в старом городе." },
    ]),
  ],
  listeningQuestions: [
    { q: "Kas yra šalia Akvilės?", choices: ["Jos brolis", "Jos vyras ir dukra", "Jos sesuo"], answerIndex: 1 },
    { q: "Kur gyvena jos tėvai?", choices: ["Kaune", "Vilniuje", "Klaipėdoje"], answerIndex: 1 },
    { q: "Kur būtent Vilniuje?", choices: ["Prie jūros", "Senamiestyje", "Prie oro uosto"], answerIndex: 1 },
  ],
  reading: {
    lt: "Mano šeima yra nedidelė: mama, tėtis, aš ir mano jaunesnis brolis. Mes gyvename Vilniuje. Mama mėgsta gaminti, o tėtis mėgsta skaityti. Aš studijuoju, o brolis dar mokosi mokykloje. Savaitgaliais mes dažnai vaikštome parke kartu.",
    ru: "Моя семья небольшая: мама, папа, я и мой младший брат. Мы живём в Вильнюсе. Мама любит готовить, а папа — читать. Я учусь в университете, а брат ещё ходит в школу. По выходным мы часто гуляем в парке вместе.",
    questions: [
      { q: "Kiek žmonių yra šeimoje?", choices: ["Trys", "Keturi", "Penki"], answerIndex: 1 },
      { q: "Ką mėgsta mama?", choices: ["Skaityti", "Gaminti", "Studijuoti"], answerIndex: 1 },
      { q: "Kur jie vaikščioja savaitgaliais?", choices: ["Darbe", "Parke", "Parduotuvėje"], answerIndex: 1 },
    ],
  },
};
