import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson12: Lesson = {
  id: 12,
  slug: "pamoka-12",
  title: { lt: "Sveikinu!", ru: "Поздравляю!" },
  objectivesRu: [
    "Говорить о праздниках и традициях",
    "Поздравлять и желать по разным поводам",
    "Приглашать праздновать вместе",
  ],
  grammarTopicsRu: ["Поздравления с proga", "Пожелания с linkėti", "Приглашения", "Праздничные даты"],
  vocabThemesRu: ["Праздники", "Традиции", "Поздравления", "Подарки", "Семейные события"],
  dialogues: [
    dialogue("d1", "Naujieji metai", "Новый год", [
      { speaker: "Laima", lt: "Kur švęsite Naujuosius metus?", ru: "Где вы будете праздновать Новый год?" },
      { speaker: "Gabija", lt: "Dar nežinome. Gal liksime mieste.", ru: "Ещё не знаем. Может, останемся в городе." },
      { speaker: "Laima", lt: "Jeigu norite, važiuokite su mumis į kaimą.", ru: "Если хотите, поезжайте с нами в деревню." },
      { speaker: "Gabija", lt: "Ačiū už kvietimą. Pasitarsiu su vyru.", ru: "Спасибо за приглашение. Посоветуюсь с мужем." },
    ]),
    dialogue("d2", "Kalėdų sveikinimas", "Рождественское поздравление", [
      { speaker: "Gediminas", lt: "Linksmų Kalėdų tau ir tavo šeimai!", ru: "Весёлого Рождества тебе и твоей семье!" },
      { speaker: "Algirdas", lt: "Ačiū. Tau taip pat linkiu sveikatos ir laimės.", ru: "Спасибо. Тебе тоже желаю здоровья и счастья." },
      { speaker: "Gediminas", lt: "Perduok linkėjimus žmonai ir vaikams.", ru: "Передай привет жене и детям." },
      { speaker: "Algirdas", lt: "Būtinai perduosiu.", ru: "Обязательно передам." },
    ]),
    dialogue("d3", "Gimtadienis", "День рождения", [
      { speaker: "Mindaugas", lt: "Sveikinu gimtadienio proga!", ru: "Поздравляю с днём рождения!" },
      { speaker: "Vytautas", lt: "Ačiū. Vakare kviečiu pas mus vakarienės.", ru: "Спасибо. Вечером приглашаю к нам на ужин." },
      { speaker: "Mindaugas", lt: "Mielai ateisiu. Ką atnešti?", ru: "С удовольствием приду. Что принести?" },
      { speaker: "Vytautas", lt: "Nieko nereikia, tik gerą nuotaiką.", ru: "Ничего не нужно, только хорошее настроение." },
    ]),
    dialogue("d4", "Vardo diena", "Именины", [
      { speaker: "Jūratė", lt: "Šiandien mamos vardo diena.", ru: "Сегодня мамины именины." },
      { speaker: "Paulius", lt: "Kaip ją sveikinsite?", ru: "Как вы её поздравите?" },
      { speaker: "Jūratė", lt: "Nupinsime vainiką ir padovanosime gėlių.", ru: "Сплетём венок и подарим цветы." },
      { speaker: "Paulius", lt: "Labai graži tradicija.", ru: "Очень красивая традиция." },
    ]),
    dialogue("d5", "Vestuvės", "Свадьба", [
      { speaker: "Eglė", lt: "Ar eisi į Lauros ir Mato vestuves?", ru: "Ты пойдёшь на свадьбу Лауры и Матаса?" },
      { speaker: "Tomas", lt: "Taip, jau nupirkau dovaną ir parašiau sveikinimą.", ru: "Да, уже купил подарок и написал поздравление." },
      { speaker: "Eglė", lt: "Ką jiems palinkėsi?", ru: "Что ты им пожелаешь?" },
      { speaker: "Tomas", lt: "Laimės, meilės ir sutarimo.", ru: "Счастья, любви и согласия." },
    ]),
  ],
  vocabulary: [
    { lt: "šventė", ru: "праздник", pos: "noun" },
    { lt: "tradicija", ru: "традиция", pos: "noun" },
    { lt: "Kūčios", ru: "Сочельник", pos: "noun" },
    { lt: "Kalėdos", ru: "Рождество", pos: "noun" },
    { lt: "Naujieji metai", ru: "Новый год", pos: "phrase" },
    { lt: "Velykos", ru: "Пасха", pos: "noun" },
    { lt: "Joninės", ru: "Йонинес", pos: "noun" },
    { lt: "Užgavėnės", ru: "Масленица", pos: "noun" },
    { lt: "Vėlinės", ru: "День поминовения", pos: "noun" },
    { lt: "gimtadienis", ru: "день рождения", pos: "noun" },
    { lt: "vardadienis", ru: "именины", pos: "noun" },
    { lt: "jubiliejus", ru: "юбилей", pos: "noun" },
    { lt: "vestuvės", ru: "свадьба", pos: "noun" },
    { lt: "krikštynos", ru: "крестины", pos: "noun" },
    { lt: "įkurtuvės", ru: "новоселье", pos: "noun" },
    { lt: "kvietimas", ru: "приглашение", pos: "noun" },
    { lt: "sveikinimas", ru: "поздравление", pos: "noun" },
    { lt: "linkėjimai", ru: "пожелания / приветы", pos: "noun" },
    { lt: "proga", ru: "повод", pos: "noun" },
    { lt: "dovana", ru: "подарок", pos: "noun" },
    { lt: "gėlės", ru: "цветы", pos: "noun" },
    { lt: "atvirukas", ru: "открытка", pos: "noun" },
    { lt: "eglė", ru: "ель", pos: "noun" },
    { lt: "eglutė", ru: "ёлка", pos: "noun" },
    { lt: "žvakė", ru: "свеча", pos: "noun" },
    { lt: "margutis", ru: "пасхальное яйцо", pos: "noun" },
    { lt: "verba", ru: "верба", pos: "noun" },
    { lt: "laužas", ru: "костёр", pos: "noun" },
    { lt: "vainikas", ru: "венок", pos: "noun" },
    { lt: "papartis", ru: "папоротник", pos: "noun" },
    { lt: "kaukė", ru: "маска", pos: "noun" },
    { lt: "blynai", ru: "блины", pos: "noun" },
    { lt: "nuotaka", ru: "невеста", pos: "noun" },
    { lt: "jaunikis", ru: "жених", pos: "noun" },
    { lt: "šeimininkai", ru: "хозяева", pos: "noun" },
    { lt: "svečias", ru: "гость", pos: "noun" },
    { lt: "švęsti", ru: "праздновать", pos: "verb", forms: ["švenčiu", "švenčia"] },
    { lt: "sveikinti", ru: "поздравлять", pos: "verb", forms: ["sveikinu", "sveikina"] },
    { lt: "linkėti", ru: "желать", pos: "verb", forms: ["linkiu", "linki"] },
    { lt: "kviesti", ru: "приглашать", pos: "verb", forms: ["kviečiu", "kviečia"] },
    { lt: "dovanoti", ru: "дарить", pos: "verb" },
    { lt: "puošti", ru: "украшать", pos: "verb", forms: ["puošiu", "puošia"] },
    { lt: "pinti", ru: "плести", pos: "verb", forms: ["pinu", "pina"] },
    { lt: "dažyti", ru: "красить", pos: "verb" },
    { lt: "susituokti", ru: "пожениться", pos: "verb" },
    { lt: "laimė", ru: "счастье", pos: "noun" },
    { lt: "meilė", ru: "любовь", pos: "noun" },
    { lt: "sėkmė", ru: "успех", pos: "noun" },
    { lt: "sveikata", ru: "здоровье", pos: "noun" },
    { lt: "džiaugsmas", ru: "радость", pos: "noun" },
    { lt: "sutarimas", ru: "согласие", pos: "noun" },
    { lt: "nuotaika", ru: "настроение", pos: "noun" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Sveikinu proga", ru: "Поздравляю по поводу" },
      explanationRu:
        "Поздравление строится с родительным + proga: gimtadienio proga, Kalėdų proga, jubiliejaus proga.",
      examples: [
        { lt: "Sveikinu gimtadienio proga!", ru: "Поздравляю с днём рождения!" },
        { lt: "Sveikiname jubiliejaus proga.", ru: "Поздравляем с юбилеем." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Linkėti kam ko", ru: "Желать кому чего" },
      explanationRu:
        "Глагол linkėti требует дательного для человека и родительного для пожелания: linkiu tau sveikatos, linkime jums laimės.",
      tableMarkdown: `| Kam? | Ko? |\n| --- | --- |\n| tau | sveikatos |\n| jums | laimės |\n| draugams | sėkmės |`,
      examples: [
        { lt: "Linkiu tau laimės ir sveikatos.", ru: "Желаю тебе счастья и здоровья." },
        { lt: "Linkime jums sėkmės darbuose.", ru: "Желаем вам успеха в работе." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Kvietimai", ru: "Приглашения" },
      explanationRu:
        "Приглашая, используйте kviečiu, norėčiau pakviesti, ateik, atvykite. Повод можно назвать через į + винительный.",
      examples: [
        { lt: "Kviečiu tave į gimtadienį.", ru: "Приглашаю тебя на день рождения." },
        { lt: "Norėčiau pakviesti jus į vestuves.", ru: "Хотел бы пригласить вас на свадьбу." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Švenčių datos", ru: "Даты праздников" },
      explanationRu:
        "Даты праздников часто называют порядковыми числительными: sausio pirmoji, vasario šešioliktoji, gruodžio dvidešimt penktoji.",
      examples: [
        { lt: "Kalėdos yra gruodžio dvidešimt penktą dieną.", ru: "Рождество двадцать пятого декабря." },
        { lt: "Naujųjų metų diena yra sausio pirmoji.", ru: "Новый год первого января." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Per šventes", ru: "На праздники" },
      explanationRu:
        "Для времени праздника используйте per + винительный: per Kalėdas, per Velykas, per Jonines.",
      examples: [
        { lt: "Per Velykas dažome margučius.", ru: "На Пасху мы красим яйца." },
        { lt: "Per Jonines kuriame laužą.", ru: "На Йонинес мы разводим костёр." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Mandagūs atsakymai", ru: "Вежливые ответы" },
      explanationRu:
        "На поздравление отвечают: ačiū, labai ačiū, tau taip pat, jums taip pat, perduosiu linkėjimus.",
      examples: [
        { lt: "Ačiū, tau taip pat linksmų švenčių!", ru: "Спасибо, тебе тоже весёлых праздников!" },
        { lt: "Būtinai perduosiu linkėjimus šeimai.", ru: "Обязательно передам привет семье." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "šventė", ru: "праздник" },
        { lt: "gimtadienis", ru: "день рождения" },
        { lt: "dovana", ru: "подарок" },
        { lt: "linkiu", ru: "желаю" },
        { lt: "vainikas", ru: "венок" },
        { lt: "margutis", ru: "пасхальное яйцо" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Sveikinu ___ proga!",
          choices: ["gimtadienio", "gimtadienis", "gimtadienį"],
          answerIndex: 0,
        },
        {
          lt: "Linkiu tau ___ .",
          choices: ["sveikatos", "sveikata", "sveikatą"],
          answerIndex: 0,
        },
        {
          lt: "Per Velykas dažome...",
          choices: ["margučius", "eglutę", "pasą"],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Kviečiu tave į ___ .", blank: "gimtadienį", hintRu: "на день рождения" },
        { sentence: "Linksmų ___ !", blank: "Kalėdų", hintRu: "Рождества" },
        { sentence: "Per Jonines kuriame ___ .", blank: "laužą", hintRu: "костёр" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "vestuvės", ru: "свадьба" },
        { lt: "krikštynos", ru: "крестины" },
        { lt: "vardadienis", ru: "именины" },
        { lt: "žvakė", ru: "свеча" },
        { lt: "nuotaka", ru: "невеста" },
        { lt: "sėkmė", ru: "успех" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["gimtadienio", "Sveikinu", "proga"],
          correct: ["Sveikinu", "gimtadienio", "proga"],
          ru: "Поздравляю с днём рождения.",
        },
        {
          words: ["tau", "sveikatos", "Linkiu"],
          correct: ["Linkiu", "tau", "sveikatos"],
          ru: "Желаю тебе здоровья.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Праздники и традиции.",
      questions: [
        {
          lt: "Ką puošiame per Kalėdas?",
          choices: ["Eglutę", "Sutartį", "Lagaminą"],
          answerIndex: 0,
        },
        {
          lt: "Ką dovanojame per šventę?",
          choices: ["Dovaną", "Valiutą", "Darbotvarkę"],
          answerIndex: 0,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Kvietimas į gimtadienį", "Приглашение на день рождения", [
      { speaker: "Austėja", lt: "Sveikas, Mantai. Šeštadienį švenčiu gimtadienį.", ru: "Привет, Мантас. В субботу праздную день рождения." },
      { speaker: "Mantas", lt: "Sveikinu! Kur vyks šventė?", ru: "Поздравляю! Где будет праздник?" },
      { speaker: "Austėja", lt: "Namuose. Kviečiu tave vakarienės septintą valandą.", ru: "Дома. Приглашаю тебя на ужин в семь часов." },
      { speaker: "Mantas", lt: "Ačiū už kvietimą. Mielai ateisiu.", ru: "Спасибо за приглашение. С удовольствием приду." },
    ]),
  ],
  listeningQuestions: [
    { q: "Kada Austėja švenčia gimtadienį?", choices: ["Šeštadienį", "Pirmadienį", "Rytoj ryte"], answerIndex: 0 },
    { q: "Kur vyks šventė?", choices: ["Namuose", "Banke", "Miške"], answerIndex: 0 },
    { q: "Kelintą valandą kviečia?", choices: ["Septintą", "Devintą", "Dvyliktą"], answerIndex: 0 },
  ],
  reading: {
    lt: "Lietuvoje šeimos dažnai kartu švenčia Kalėdas, Velykas, gimtadienius ir vardadienius. Per Kalėdas žmonės puošia eglutę, dovanoja dovanas ir siunčia sveikinimus. Per Velykas dažo margučius. Per gimtadienį svečiai linki laimės, sveikatos ir sėkmės. Jurgitos šeimoje labai svarbi mamos vardo diena: vaikai atneša gėlių, pasako gražius linkėjimus ir visi vakarieniauja kartu.",
    ru: "В Литве семьи часто вместе празднуют Рождество, Пасху, дни рождения и именины. На Рождество люди украшают ёлку, дарят подарки и отправляют поздравления. На Пасху красят яйца. На день рождения гости желают счастья, здоровья и успеха. В семье Юргиты очень важны мамины именины: дети приносят цветы, говорят красивые пожелания, и все ужинают вместе.",
    questions: [
      { q: "Ką žmonės puošia per Kalėdas?", choices: ["Eglutę", "Palapinę", "Banką"], answerIndex: 0 },
      { q: "Ką dažo per Velykas?", choices: ["Margučius", "Vokus", "Bilietus"], answerIndex: 0 },
      { q: "Kas svarbu Jurgitos šeimoje?", choices: ["Mamos vardo diena", "Valiutos kursas", "Darbo posėdis"], answerIndex: 0 },
    ],
  },
};
