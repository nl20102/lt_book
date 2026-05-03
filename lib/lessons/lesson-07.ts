import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson07: Lesson = {
  id: 7,
  slug: "pamoka-7",
  title: { lt: "Čia labai jauku!", ru: "Здесь очень уютно!" },
  objectivesRu: [
    "Говорить о жилье",
    "Снять квартиру",
    "Хвалить интерьер",
  ],
  grammarTopicsRu: ["Склонение прилагательных", "Указательные и относительные местоимения", "virš + кого?"],
  vocabThemesRu: ["Квартира", "Комнаты", "Мебель"],
  dialogues: [
    dialogue("d1", "Naujas butas", "Новая квартира", [
      { speaker: "Ema", lt: "Sveika atvykusi į mano naują butą.", ru: "Добро пожаловать в мою новую квартиру." },
      { speaker: "Justė", lt: "Čia labai jauku ir šviesu.", ru: "Здесь очень уютно и светло." },
      { speaker: "Ema", lt: "Svetainė maža, bet virtuvė erdvi.", ru: "Гостиная маленькая, но кухня просторная." },
      { speaker: "Justė", lt: "Man patinka šitas medinis stalas.", ru: "Мне нравится этот деревянный стол." },
    ]),
    dialogue("d2", "Nuoma", "Аренда", [
      { speaker: "Nuomininkas", lt: "Ar butas dar laisvas?", ru: "Квартира ещё свободна?" },
      { speaker: "Savininkė", lt: "Taip, butas laisvas nuo pirmadienio.", ru: "Да, квартира свободна с понедельника." },
      { speaker: "Nuomininkas", lt: "Kiek kainuoja nuoma per mėnesį?", ru: "Сколько стоит аренда в месяц?" },
      { speaker: "Savininkė", lt: "Keturi šimtai eurų, įskaitant šildymą.", ru: "Четыреста евро, включая отопление." },
    ]),
    dialogue("d3", "Kambariai", "Комнаты", [
      { speaker: "Agentas", lt: "Čia yra miegamasis, o ten - darbo kambarys.", ru: "Здесь спальня, а там кабинет." },
      { speaker: "Pirkėja", lt: "Ar vonios kambarys yra šalia miegamojo?", ru: "Ванная рядом со спальней?" },
      { speaker: "Agentas", lt: "Taip, jis yra dešinėje.", ru: "Да, она справа." },
      { speaker: "Pirkėja", lt: "Šis butas man tinka.", ru: "Эта квартира мне подходит." },
    ]),
    dialogue("d4", "Baldai", "Мебель", [
      { speaker: "Tadas", lt: "Kur pastatysime sofą?", ru: "Куда поставим диван?" },
      { speaker: "Rūta", lt: "Prie lango. Virš sofos pakabinsime paveikslą.", ru: "У окна. Над диваном повесим картину." },
      { speaker: "Tadas", lt: "O lentyną pastatysime prie sienos.", ru: "А полку поставим у стены." },
      { speaker: "Rūta", lt: "Gerai, tada kambarys bus patogus.", ru: "Хорошо, тогда комната будет удобной." },
    ]),
    dialogue("d5", "Remontas", "Ремонт", [
      { speaker: "Mantas", lt: "Kokią spalvą renkamės sienoms?", ru: "Какой цвет выбираем для стен?" },
      { speaker: "Agnė", lt: "Šviesiai pilką. Ji dera su baltais baldais.", ru: "Светло-серый. Он сочетается с белой мебелью." },
      { speaker: "Mantas", lt: "Reikia naujos lempos ir mažo kilimo.", ru: "Нужна новая лампа и маленький ковёр." },
      { speaker: "Agnė", lt: "Nupirksime juos šeštadienį.", ru: "Купим их в субботу." },
    ]),
  ],
  vocabulary: [
    { lt: "butas", ru: "квартира", pos: "noun" },
    { lt: "namas", ru: "дом", pos: "noun" },
    { lt: "laiptinė", ru: "подъезд", pos: "noun" },
    { lt: "aukštas", ru: "этаж", pos: "noun" },
    { lt: "nuoma", ru: "аренда", pos: "noun" },
    { lt: "nuomininkas", ru: "арендатор", pos: "noun" },
    { lt: "savininkas", ru: "владелец", pos: "noun" },
    { lt: "kambarys", ru: "комната", pos: "noun" },
    { lt: "svetainė", ru: "гостиная", pos: "noun" },
    { lt: "miegamasis", ru: "спальня", pos: "noun" },
    { lt: "virtuvė", ru: "кухня", pos: "noun" },
    { lt: "vonia", ru: "ванна", pos: "noun" },
    { lt: "vonios kambarys", ru: "ванная комната", pos: "phrase" },
    { lt: "koridorius", ru: "коридор", pos: "noun" },
    { lt: "balkonas", ru: "балкон", pos: "noun" },
    { lt: "langas", ru: "окно", pos: "noun" },
    { lt: "durys", ru: "дверь", pos: "noun" },
    { lt: "siena", ru: "стена", pos: "noun" },
    { lt: "lubos", ru: "потолок", pos: "noun" },
    { lt: "grindys", ru: "пол", pos: "noun" },
    { lt: "baldai", ru: "мебель", pos: "noun" },
    { lt: "stalas", ru: "стол", pos: "noun" },
    { lt: "kėdė", ru: "стул", pos: "noun" },
    { lt: "sofa", ru: "диван", pos: "noun" },
    { lt: "lova", ru: "кровать", pos: "noun" },
    { lt: "spinta", ru: "шкаф", pos: "noun" },
    { lt: "lentyna", ru: "полка", pos: "noun" },
    { lt: "kilimas", ru: "ковёр", pos: "noun" },
    { lt: "lempa", ru: "лампа", pos: "noun" },
    { lt: "paveikslas", ru: "картина", pos: "noun" },
    { lt: "šaldytuvas", ru: "холодильник", pos: "noun" },
    { lt: "viryklė", ru: "плита", pos: "noun" },
    { lt: "skalbimo mašina", ru: "стиральная машина", pos: "phrase" },
    { lt: "šildymas", ru: "отопление", pos: "noun" },
    { lt: "elektra", ru: "электричество", pos: "noun" },
    { lt: "vandentiekis", ru: "водопровод", pos: "noun" },
    { lt: "jaukus", ru: "уютный", pos: "adj" },
    { lt: "šviesus", ru: "светлый", pos: "adj" },
    { lt: "tamsus", ru: "тёмный", pos: "adj" },
    { lt: "erdvus", ru: "просторный", pos: "adj" },
    { lt: "patogus", ru: "удобный", pos: "adj" },
    { lt: "senas", ru: "старый", pos: "adj" },
    { lt: "naujas", ru: "новый", pos: "adj" },
    { lt: "medinis", ru: "деревянный", pos: "adj" },
    { lt: "laisvas", ru: "свободный", pos: "adj" },
    { lt: "šitas", ru: "этот", pos: "adj" },
    { lt: "tas", ru: "тот", pos: "adj" },
    { lt: "kuris", ru: "который", pos: "phrase" },
    { lt: "tinka", ru: "подходит", pos: "verb" },
    { lt: "derėti", ru: "сочетаться", pos: "verb", forms: ["dera"] },
    { lt: "pastatyti", ru: "поставить", pos: "verb" },
    { lt: "pakabinti", ru: "повесить", pos: "verb" },
    { lt: "renkuosi", ru: "выбираю", pos: "verb" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Būdvardžių galūnės", ru: "Окончания прилагательных" },
      explanationRu:
        "Прилагательное согласуется с существительным по роду, числу и падежу: jaukus butas, jauki virtuvė, jaukūs kambariai.",
      tableMarkdown: `| Vyr. g. | Mot. g. | Daugiskaita |\n| --- | --- | --- |\n| jaukus butas | jauki virtuvė | jaukūs kambariai |\n| naujas stalas | nauja lempa | nauji baldai |`,
      examples: [
        { lt: "Šis butas yra šviesus ir jaukus.", ru: "Эта квартира светлая и уютная." },
        { lt: "Virtuvė maža, bet labai patogi.", ru: "Кухня маленькая, но очень удобная." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Būdvardis su daiktavardžiu", ru: "Прилагательное с существительным" },
      explanationRu:
        "Когда существительное меняет падеж, прилагательное тоже меняется: naujas butas - naują butą, jauki virtuvė - jaukioje virtuvėje.",
      examples: [
        { lt: "Ieškau naujo buto centre.", ru: "Я ищу новую квартиру в центре." },
        { lt: "Gyvenu jaukiame kambaryje.", ru: "Я живу в уютной комнате." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Šis / tas", ru: "Этот / тот" },
      explanationRu:
        "Šis указывает на близкий предмет, tas - на более дальний или уже известный. Формы меняются: šitas stalas, šitą stalą, tame kambaryje.",
      examples: [
        { lt: "Šitas medinis stalas man patinka.", ru: "Мне нравится этот деревянный стол." },
        { lt: "Tas kambarys yra tamsus.", ru: "Та комната тёмная." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Kuris / kuri", ru: "Который / которая" },
      explanationRu:
        "Kuris и kuri помогают уточнять предмет: kambarys, kuris yra dešinėje; virtuvė, kuri yra šalia svetainės.",
      examples: [
        { lt: "Man patinka butas, kuris yra senamiestyje.", ru: "Мне нравится квартира, которая находится в старом городе." },
        { lt: "Tai sofa, kuri stovi prie lango.", ru: "Это диван, который стоит у окна." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Virš + kilmininkas", ru: "Virš + родительный падеж" },
      explanationRu:
        "Virš означает «над» и требует родительного: virš stalo, virš sofos, virš lovos.",
      examples: [
        { lt: "Virš sofos kabės paveikslas.", ru: "Над диваном будет висеть картина." },
        { lt: "Virš stalo yra nauja lempa.", ru: "Над столом новая лампа." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Vieta kambaryje", ru: "Место в комнате" },
      explanationRu:
        "Для расположения используйте prie + родительный, ant + родительный/винительный по смыслу, kampe, dešinėje, kairėje.",
      examples: [
        { lt: "Lova stovi prie sienos.", ru: "Кровать стоит у стены." },
        { lt: "Lentyna yra dešinėje, o spinta - kairėje.", ru: "Полка справа, а шкаф слева." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "butas", ru: "квартира" },
        { lt: "svetainė", ru: "гостиная" },
        { lt: "miegamasis", ru: "спальня" },
        { lt: "sofa", ru: "диван" },
        { lt: "jaukus", ru: "уютный" },
        { lt: "nuoma", ru: "аренда" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Koks yra butas?",
          choices: ["Butas yra jaukus.", "Butas yra jauki.", "Butas yra jaukiame."],
          answerIndex: 0,
        },
        {
          lt: "Kur kabės paveikslas?",
          choices: ["Virš sofa.", "Virš sofos.", "Virš sofą."],
          answerIndex: 1,
        },
        {
          lt: "Ieškau ___ buto.",
          choices: ["naujo", "naujas", "naują"],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Virtuvė yra labai ___ .", blank: "jauki", hintRu: "уютная" },
        { sentence: "Virš ___ yra lempa.", blank: "stalo", hintRu: "над столом" },
        { sentence: "Šitas butas man ___ .", blank: "tinka", hintRu: "подходит" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "lova", ru: "кровать" },
        { lt: "spinta", ru: "шкаф" },
        { lt: "kilimas", ru: "ковёр" },
        { lt: "lempa", ru: "лампа" },
        { lt: "langas", ru: "окно" },
        { lt: "siena", ru: "стена" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["labai", "Čia", "jauku", "yra"],
          correct: ["Čia", "yra", "labai", "jauku"],
          ru: "Здесь очень уютно.",
        },
        {
          words: ["sofos", "paveikslas", "kabės", "Virš"],
          correct: ["Virš", "sofos", "kabės", "paveikslas"],
          ru: "Над диваном будет висеть картина.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Указательные и относительные местоимения.",
      questions: [
        {
          lt: "Tai kambarys, ___ yra šalia virtuvės.",
          choices: ["kuris", "kuri", "kurie"],
          answerIndex: 0,
        },
        {
          lt: "Man patinka ___ nauja lempa.",
          choices: ["šita", "šitas", "šitame"],
          answerIndex: 0,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Butas centre", "Квартира в центре", [
      { speaker: "Agentė", lt: "Butas yra trečiame aukšte, šalia parko.", ru: "Квартира на третьем этаже, рядом с парком." },
      { speaker: "Klientas", lt: "Ar svetainė šviesi?", ru: "Гостиная светлая?" },
      { speaker: "Agentė", lt: "Taip, svetainėje yra du dideli langai.", ru: "Да, в гостиной два больших окна." },
      { speaker: "Klientas", lt: "Puiku. Man patinka butai, kurie yra jaukūs.", ru: "Отлично. Мне нравятся квартиры, которые уютные." },
    ]),
  ],
  listeningQuestions: [
    { q: "Kelintame aukšte yra butas?", choices: ["Pirmame", "Trečiame", "Penktame"], answerIndex: 1 },
    { q: "Kas yra šalia buto?", choices: ["Parkas", "Stotis", "Turgus"], answerIndex: 0 },
    { q: "Kiek langų yra svetainėje?", choices: ["Vienas", "Du", "Trys"], answerIndex: 1 },
  ],
  reading: {
    lt: "Aistė nuomojasi mažą butą senamiestyje. Bute yra šviesi svetainė, jauki virtuvė ir mažas miegamasis. Prie lango stovi sofa, o virš sofos kabo paveikslas. Virtuvėje yra medinis stalas ir dvi kėdės. Aistei patinka šis butas, nes jis patogus ir netoli darbo.",
    ru: "Айсте снимает маленькую квартиру в старом городе. В квартире светлая гостиная, уютная кухня и маленькая спальня. У окна стоит диван, а над диваном висит картина. На кухне деревянный стол и два стула. Айсте нравится эта квартира, потому что она удобная и недалеко от работы.",
    questions: [
      { q: "Kur Aistė nuomojasi butą?", choices: ["Senamiestyje", "Kaime", "Prie stoties"], answerIndex: 0 },
      { q: "Kas kabo virš sofos?", choices: ["Lempa", "Paveikslas", "Kilimas"], answerIndex: 1 },
      { q: "Kodėl jai patinka butas?", choices: ["Jis patogus ir netoli darbo", "Jis labai brangus", "Jis be langų"], answerIndex: 0 },
    ],
  },
};
