import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson06: Lesson = {
  id: 6,
  slug: "pamoka-6",
  title: { lt: "Eikite tiesiai!", ru: "Идите прямо!" },
  objectivesRu: [
    "Спросить дорогу и время",
    "Купить билеты",
    "Договориться о встрече",
  ],
  grammarTopicsRu: ["Выражение времени и места", "Направление", "Месяцы", "Транспорт"],
  vocabThemesRu: ["Ориентация в городе", "Расписание"],
  dialogues: [
    dialogue("d1", "Kaip nueiti?", "Как пройти?", [
      { speaker: "Turistas", lt: "Atsiprašau, kaip nueiti iki Katedros aikštės?", ru: "Извините, как пройти до Кафедральной площади?" },
      { speaker: "Moteris", lt: "Eikite tiesiai iki šviesoforo, tada sukite į kairę.", ru: "Идите прямо до светофора, потом поверните налево." },
      { speaker: "Turistas", lt: "Ar tai toli?", ru: "Это далеко?" },
      { speaker: "Moteris", lt: "Ne, apie dešimt minučių pėsčiomis.", ru: "Нет, около десяти минут пешком." },
    ]),
    dialogue("d2", "Prie stoties", "У вокзала", [
      { speaker: "Lukas", lt: "Kur yra autobusų stotelė?", ru: "Где автобусная остановка?" },
      { speaker: "Agnė", lt: "Ji yra šalia stoties, už tilto.", ru: "Она рядом с вокзалом, за мостом." },
      { speaker: "Lukas", lt: "Kuris autobusas važiuoja į centrą?", ru: "Какой автобус едет в центр?" },
      { speaker: "Agnė", lt: "Trečias autobusas. Jis atvyksta po penkių minučių.", ru: "Третий автобус. Он приезжает через пять минут." },
    ]),
    dialogue("d3", "Bilietų kasa", "Билетная касса", [
      { speaker: "Keleivė", lt: "Prašom vieną bilietą į Kauną.", ru: "Пожалуйста, один билет в Каунас." },
      { speaker: "Kasininkė", lt: "Traukinys išvyksta dešimtą valandą.", ru: "Поезд отправляется в десять часов." },
      { speaker: "Keleivė", lt: "Kada jis atvyksta į Kauną?", ru: "Когда он прибывает в Каунас?" },
      { speaker: "Kasininkė", lt: "Vienuoliktą valandą trisdešimt minučių.", ru: "В одиннадцать часов тридцать минут." },
    ]),
    dialogue("d4", "Susitikimas", "Встреча", [
      { speaker: "Rūta", lt: "Kelinta dabar valanda?", ru: "Который сейчас час?" },
      { speaker: "Tomas", lt: "Pusė trijų.", ru: "Половина третьего." },
      { speaker: "Rūta", lt: "Susitinkame prie muziejaus trečią valandą?", ru: "Встречаемся у музея в три часа?" },
      { speaker: "Tomas", lt: "Gerai. Aš ateisiu anksčiau ir palauksiu.", ru: "Хорошо. Я приду раньше и подожду." },
    ]),
    dialogue("d5", "Kelionės planas", "План поездки", [
      { speaker: "Dalia", lt: "Kada tavo draugas atvyksta į Vilnių?", ru: "Когда твой друг приезжает в Вильнюс?" },
      { speaker: "Marius", lt: "Jis atvyksta gegužės mėnesį.", ru: "Он приезжает в мае." },
      { speaker: "Dalia", lt: "Ar važiuosite autobusu ar traukiniu?", ru: "Вы поедете автобусом или поездом?" },
      { speaker: "Marius", lt: "Važiuosime traukiniu, nes tvarkaraštis patogus.", ru: "Поедем поездом, потому что расписание удобное." },
    ]),
  ],
  vocabulary: [
    { lt: "tiesiai", ru: "прямо", pos: "adv" },
    { lt: "į kairę", ru: "налево", pos: "phrase" },
    { lt: "į dešinę", ru: "направо", pos: "phrase" },
    { lt: "atgal", ru: "назад", pos: "adv" },
    { lt: "netoli", ru: "недалеко", pos: "adv" },
    { lt: "toli", ru: "далеко", pos: "adv" },
    { lt: "šalia", ru: "рядом", pos: "phrase" },
    { lt: "prie", ru: "у / возле", pos: "phrase" },
    { lt: "už", ru: "за", pos: "phrase" },
    { lt: "tarp", ru: "между", pos: "phrase" },
    { lt: "per", ru: "через", pos: "phrase" },
    { lt: "gatvė", ru: "улица", pos: "noun" },
    { lt: "sankryža", ru: "перекрёсток", pos: "noun" },
    { lt: "šviesoforas", ru: "светофор", pos: "noun" },
    { lt: "perėja", ru: "пешеходный переход", pos: "noun" },
    { lt: "stotis", ru: "вокзал / станция", pos: "noun" },
    { lt: "stotelė", ru: "остановка", pos: "noun" },
    { lt: "centras", ru: "центр", pos: "noun" },
    { lt: "senamiestis", ru: "старый город", pos: "noun" },
    { lt: "aikštė", ru: "площадь", pos: "noun" },
    { lt: "tiltas", ru: "мост", pos: "noun" },
    { lt: "muziejus", ru: "музей", pos: "noun" },
    { lt: "kasa", ru: "касса", pos: "noun" },
    { lt: "bilietas", ru: "билет", pos: "noun" },
    { lt: "tvarkaraštis", ru: "расписание", pos: "noun" },
    { lt: "autobusas", ru: "автобус", pos: "noun" },
    { lt: "troleibusas", ru: "троллейбус", pos: "noun" },
    { lt: "traukinys", ru: "поезд", pos: "noun" },
    { lt: "važiuoti", ru: "ехать", pos: "verb", forms: ["važiuoju", "važiuoja"] },
    { lt: "eiti", ru: "идти", pos: "verb", forms: ["einu", "eina"] },
    { lt: "sukti", ru: "поворачивать", pos: "verb", forms: ["suku", "suka"] },
    { lt: "pereiti", ru: "перейти", pos: "verb" },
    { lt: "įlipti", ru: "войти / сесть в транспорт", pos: "verb" },
    { lt: "išlipti", ru: "выйти из транспорта", pos: "verb" },
    { lt: "laukti", ru: "ждать", pos: "verb", forms: ["laukiu", "laukia"] },
    { lt: "atvykti", ru: "прибыть", pos: "verb", forms: ["atvyksta"] },
    { lt: "išvykti", ru: "отправиться", pos: "verb", forms: ["išvyksta"] },
    { lt: "kelionė", ru: "поездка", pos: "noun" },
    { lt: "žemėlapis", ru: "карта", pos: "noun" },
    { lt: "valanda", ru: "час", pos: "noun" },
    { lt: "minutė", ru: "минута", pos: "noun" },
    { lt: "pusė", ru: "половина", pos: "noun" },
    { lt: "ketvirtis", ru: "четверть", pos: "noun" },
    { lt: "sausis", ru: "январь", pos: "noun" },
    { lt: "vasaris", ru: "февраль", pos: "noun" },
    { lt: "kovas", ru: "март", pos: "noun" },
    { lt: "balandis", ru: "апрель", pos: "noun" },
    { lt: "gegužė", ru: "май", pos: "noun" },
    { lt: "birželis", ru: "июнь", pos: "noun" },
    { lt: "liepa", ru: "июль", pos: "noun" },
    { lt: "rugpjūtis", ru: "август", pos: "noun" },
    { lt: "rugsėjis", ru: "сентябрь", pos: "noun" },
    { lt: "spalis", ru: "октябрь", pos: "noun" },
    { lt: "lapkritis", ru: "ноябрь", pos: "noun" },
    { lt: "gruodis", ru: "декабрь", pos: "noun" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Nurodymai mieste", ru: "Указания направления" },
      explanationRu:
        "Чтобы объяснить путь, используйте вежливые формы: eikite, sukite, pereikite, palaukite. Часто добавляются tiesiai, į kairę, į dešinę.",
      examples: [
        { lt: "Eikite tiesiai iki šviesoforo.", ru: "Идите прямо до светофора." },
        { lt: "Pereikite gatvę ir sukite į dešinę.", ru: "Перейдите улицу и поверните направо." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Vieta su kilmininku", ru: "Место с родительным падежом" },
      explanationRu:
        "Многие слова места требуют родительного: prie stoties, šalia muziejaus, už tilto, tarp parko ir aikštės.",
      tableMarkdown: `| Žodis | Pavyzdys |\n| --- | --- |\n| prie | prie stoties |\n| šalia | šalia muziejaus |\n| už | už tilto |\n| tarp | tarp parko ir aikštės |`,
      examples: [
        { lt: "Stotelė yra šalia stoties.", ru: "Остановка рядом с вокзалом." },
        { lt: "Kasa yra už tilto.", ru: "Касса за мостом." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Judėjimo kryptis", ru: "Направление движения" },
      explanationRu:
        "Куда? часто выражается через į + винительный: į centrą, į stotį. До какого места? - iki + родительный: iki šviesoforo.",
      examples: [
        { lt: "Trečias autobusas važiuoja į centrą.", ru: "Третий автобус едет в центр." },
        { lt: "Eikite iki Katedros aikštės.", ru: "Идите до Кафедральной площади." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Laikas", ru: "Время" },
      explanationRu:
        "Kelinta valanda? - который час? Для договорённостей часто используется винительный: trečią valandą, dešimtą valandą. Pusė trijų значит 2:30.",
      examples: [
        { lt: "Susitinkame trečią valandą.", ru: "Встречаемся в три часа." },
        { lt: "Traukinys išvyksta dešimtą valandą.", ru: "Поезд отправляется в десять часов." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Transportas įnagininku", ru: "Транспорт в творительном падеже" },
      explanationRu:
        "Когда говорим, на чём едем, используем творительный: autobusu, troleibusu, traukiniu.",
      tableMarkdown: `| Kas? | Kuo važiuoju? |\n| --- | --- |\n| autobusas | autobusu |\n| troleibusas | troleibusu |\n| traukinys | traukiniu |`,
      examples: [
        { lt: "Važiuosime traukiniu.", ru: "Мы поедем поездом." },
        { lt: "Į centrą važiuoju autobusu.", ru: "В центр я еду автобусом." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Mėnesiai", ru: "Месяцы" },
      explanationRu:
        "Месяц можно назвать через mėnesį: gegužės mėnesį, rugsėjo mėnesį. В короткой речи часто говорят gegužę, rugsėjį.",
      examples: [
        { lt: "Draugas atvyksta gegužės mėnesį.", ru: "Друг приезжает в мае." },
        { lt: "Rugsėjį prasideda pamokos.", ru: "В сентябре начинаются занятия." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "tiesiai", ru: "прямо" },
        { lt: "į kairę", ru: "налево" },
        { lt: "stotis", ru: "вокзал" },
        { lt: "bilietas", ru: "билет" },
        { lt: "tvarkaraštis", ru: "расписание" },
        { lt: "gegužė", ru: "май" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Kur yra stotelė?",
          choices: ["Šalia stoties.", "Šalia stotis.", "Šalia stotį."],
          answerIndex: 0,
          explanationRu: "Šalia требует родительный: stoties.",
        },
        {
          lt: "Kuo važiuojate?",
          choices: ["Autobusas.", "Autobusu.", "Autobusą."],
          answerIndex: 1,
        },
        {
          lt: "Kur važiuoja traukinys?",
          choices: ["Į Kauną.", "Į Kaunas.", "Kaune."],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Eikite ___ iki šviesoforo.", blank: "tiesiai", hintRu: "прямо" },
        { sentence: "Sukite ___ kairę.", blank: "į", hintRu: "часть фразы налево" },
        { sentence: "Traukinys išvyksta dešimtą ___ .", blank: "valandą", hintRu: "в десять часов" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "sankryža", ru: "перекрёсток" },
        { lt: "šviesoforas", ru: "светофор" },
        { lt: "perėja", ru: "переход" },
        { lt: "aikštė", ru: "площадь" },
        { lt: "tiltas", ru: "мост" },
        { lt: "stotelė", ru: "остановка" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["iki", "Eikite", "šviesoforo", "tiesiai"],
          correct: ["Eikite", "tiesiai", "iki", "šviesoforo"],
          ru: "Идите прямо до светофора.",
        },
        {
          words: ["važiuoju", "centrą", "autobusu", "į"],
          correct: ["Į", "centrą", "važiuoju", "autobusu"],
          ru: "В центр я еду автобусом.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Время и месяцы.",
      questions: [
        {
          lt: "Pusė trijų yra...",
          choices: ["2:30", "3:30", "2:00"],
          answerIndex: 0,
        },
        {
          lt: "Draugas atvyksta ___ mėnesį.",
          choices: ["gegužės", "gegužė", "gegužę"],
          answerIndex: 0,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Kelias į muziejų", "Дорога в музей", [
      { speaker: "Keliautojas", lt: "Atsiprašau, kur yra muziejus?", ru: "Извините, где находится музей?" },
      { speaker: "Vyras", lt: "Eikite tiesiai, pereikite gatvę ir sukite į dešinę.", ru: "Идите прямо, перейдите улицу и поверните направо." },
      { speaker: "Keliautojas", lt: "Ar muziejus yra šalia aikštės?", ru: "Музей рядом с площадью?" },
      { speaker: "Vyras", lt: "Taip, jis yra tarp aikštės ir parko.", ru: "Да, он между площадью и парком." },
    ]),
  ],
  listeningQuestions: [
    { q: "Kur nori eiti keliautojas?", choices: ["Į stotį", "Į muziejų", "Į parduotuvę"], answerIndex: 1 },
    { q: "Ką reikia pereiti?", choices: ["Gatvę", "Tiltą", "Stotį"], answerIndex: 0 },
    { q: "Kur yra muziejus?", choices: ["Už stoties", "Tarp aikštės ir parko", "Prie kasos"], answerIndex: 1 },
  ],
  reading: {
    lt: "Rytoj Domas važiuos į Kauną traukiniu. Jis nusipirks bilietą stoties kasoje. Traukinys išvyksta devintą valandą, todėl Domas ateis į stotį pusę devynių. Kaune jis susitiks su drauge prie muziejaus. Muziejus yra netoli centro, tarp aikštės ir parko.",
    ru: "Завтра Домас поедет в Каунас поездом. Он купит билет в кассе вокзала. Поезд отправляется в девять часов, поэтому Домас придёт на вокзал в половине девятого. В Каунасе он встретится с подругой у музея. Музей недалеко от центра, между площадью и парком.",
    questions: [
      { q: "Kuo Domas važiuos į Kauną?", choices: ["Autobusu", "Traukiniu", "Troleibusu"], answerIndex: 1 },
      { q: "Kur jis pirks bilietą?", choices: ["Stoties kasoje", "Kavinėje", "Muziejuje"], answerIndex: 0 },
      { q: "Kur yra muziejus?", choices: ["Tarp aikštės ir parko", "Už oro uosto", "Šalia namų"], answerIndex: 0 },
    ],
  },
};
