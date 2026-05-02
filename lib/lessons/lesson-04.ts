import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson04: Lesson = {
  id: 4,
  slug: "pamoka-4",
  title: { lt: "Kaip skanu!", ru: "Как вкусно!" },
  objectivesRu: [
    "Говорить о еде и напитках",
    "Пригласить в гости и похвалить угощение",
    "Попросить, предложить и назвать посуду за столом",
  ],
  grammarTopicsRu: [
    "Настоящее время на -o",
    "Управление глаголов",
    "Творительный и дательный падежи",
    "Повелительное наклонение",
    "Будущее время",
  ],
  vocabThemesRu: ["Еда", "Напитки", "Посуда"],
  dialogues: [
    dialogue("d1", "Prie stalo", "За столом", [
      { speaker: "Rasa", lt: "Prašom prie stalo. Vakarienė jau paruošta.", ru: "Прошу к столу. Ужин уже готов." },
      { speaker: "Mantas", lt: "Ačiū, kaip skaniai kvepia!", ru: "Спасибо, как вкусно пахнет!" },
      { speaker: "Rasa", lt: "Čia daržovių sriuba ir kepta žuvis.", ru: "Это овощной суп и жареная рыба." },
      { speaker: "Mantas", lt: "Labai skanu. Ar galiu paragauti salotų?", ru: "Очень вкусно. Можно попробовать салат?" },
    ]),
    dialogue("d2", "Svečiai", "Гости", [
      { speaker: "Ieva", lt: "Ar jums įpilti vandens ar sulčių?", ru: "Вам налить воды или сока?" },
      { speaker: "Svečias", lt: "Vandens, prašom. Sultys labai saldžios.", ru: "Воды, пожалуйста. Сок очень сладкий." },
      { speaker: "Ieva", lt: "Imkite duonos ir sūrio.", ru: "Берите хлеб и сыр." },
      { speaker: "Svečias", lt: "Dėkui, aš mėgstu šviežią duoną.", ru: "Спасибо, я люблю свежий хлеб." },
    ]),
    dialogue("d3", "Kava ar arbata", "Кофе или чай", [
      { speaker: "Tomas", lt: "Ką gersi po vakarienės?", ru: "Что будешь пить после ужина?" },
      { speaker: "Austėja", lt: "Gersiu arbatą su medumi.", ru: "Буду пить чай с мёдом." },
      { speaker: "Tomas", lt: "O aš noriu kavos be cukraus.", ru: "А я хочу кофе без сахара." },
      { speaker: "Austėja", lt: "Puodeliai yra spintelėje.", ru: "Чашки в шкафчике." },
    ]),
    dialogue("d4", "Virtuvėje", "На кухне", [
      { speaker: "Mama", lt: "Supjaustyk pomidorus ir agurkus, prašau.", ru: "Нарежь помидоры и огурцы, пожалуйста." },
      { speaker: "Lina", lt: "Gerai. Ar salotoms reikia druskos?", ru: "Хорошо. Для салата нужна соль?" },
      { speaker: "Mama", lt: "Taip, truputį druskos ir aliejaus.", ru: "Да, немного соли и масла." },
      { speaker: "Lina", lt: "Aš maišau salotas šaukštu.", ru: "Я перемешиваю салат ложкой." },
    ]),
    dialogue("d5", "Rytoj gaminsime", "Завтра будем готовить", [
      { speaker: "Paulius", lt: "Ką gaminsime rytoj?", ru: "Что будем готовить завтра?" },
      { speaker: "Eglė", lt: "Gaminsime vištieną su bulvėmis.", ru: "Будем готовить курицу с картошкой." },
      { speaker: "Paulius", lt: "Aš nupirksiu pieno ir obuolių pyragui.", ru: "Я куплю молоко и яблоки для пирога." },
      { speaker: "Eglė", lt: "Puiku. Svečiai ateis septintą valandą.", ru: "Отлично. Гости придут в семь часов." },
    ]),
  ],
  vocabulary: [
    { lt: "maistas", ru: "еда", pos: "noun" },
    { lt: "patiekalas", ru: "блюдо", pos: "noun" },
    { lt: "vakarienė", ru: "ужин", pos: "noun" },
    { lt: "pusryčiai", ru: "завтрак", pos: "noun" },
    { lt: "pietūs", ru: "обед", pos: "noun" },
    { lt: "sriuba", ru: "суп", pos: "noun" },
    { lt: "duona", ru: "хлеб", pos: "noun" },
    { lt: "sūris", ru: "сыр", pos: "noun" },
    { lt: "sviestas", ru: "масло сливочное", pos: "noun" },
    { lt: "kiaušinis", ru: "яйцо", pos: "noun" },
    { lt: "mėsa", ru: "мясо", pos: "noun" },
    { lt: "žuvis", ru: "рыба", pos: "noun" },
    { lt: "vištiena", ru: "курица", pos: "noun" },
    { lt: "bulvė", ru: "картофель", pos: "noun" },
    { lt: "ryžiai", ru: "рис", pos: "noun" },
    { lt: "daržovės", ru: "овощи", pos: "noun" },
    { lt: "salotos", ru: "салат", pos: "noun" },
    { lt: "pomidoras", ru: "помидор", pos: "noun" },
    { lt: "agurkas", ru: "огурец", pos: "noun" },
    { lt: "vaisiai", ru: "фрукты", pos: "noun" },
    { lt: "obuolys", ru: "яблоко", pos: "noun" },
    { lt: "pyragas", ru: "пирог", pos: "noun" },
    { lt: "medus", ru: "мёд", pos: "noun" },
    { lt: "cukrus", ru: "сахар", pos: "noun" },
    { lt: "druska", ru: "соль", pos: "noun" },
    { lt: "aliejus", ru: "растительное масло", pos: "noun" },
    { lt: "vanduo", ru: "вода", pos: "noun" },
    { lt: "arbata", ru: "чай", pos: "noun" },
    { lt: "kava", ru: "кофе", pos: "noun" },
    { lt: "sultys", ru: "сок", pos: "noun" },
    { lt: "pienas", ru: "молоко", pos: "noun" },
    { lt: "puodelis", ru: "чашка", pos: "noun" },
    { lt: "lėkštė", ru: "тарелка", pos: "noun" },
    { lt: "dubuo", ru: "миска", pos: "noun" },
    { lt: "šaukštas", ru: "ложка", pos: "noun" },
    { lt: "šakutė", ru: "вилка", pos: "noun" },
    { lt: "peilis", ru: "нож", pos: "noun" },
    { lt: "stiklinė", ru: "стакан", pos: "noun" },
    { lt: "virtuvė", ru: "кухня", pos: "noun" },
    { lt: "svečias", ru: "гость", pos: "noun" },
    { lt: "skanus", ru: "вкусный", pos: "adj" },
    { lt: "saldus", ru: "сладкий", pos: "adj" },
    { lt: "karštas", ru: "горячий", pos: "adj" },
    { lt: "šaltas", ru: "холодный", pos: "adj" },
    { lt: "šviežias", ru: "свежий", pos: "adj" },
    { lt: "valgyti", ru: "есть", pos: "verb", forms: ["valgau", "valgo"] },
    { lt: "gerti", ru: "пить", pos: "verb", forms: ["geriu", "geria"] },
    { lt: "gaminti", ru: "готовить", pos: "verb", forms: ["gaminu", "gamina"] },
    { lt: "ragauti", ru: "пробовать", pos: "verb", forms: ["ragauju", "ragauja"] },
    { lt: "prašyti", ru: "просить", pos: "verb", forms: ["prašau", "prašo"] },
    { lt: "vaišintis", ru: "угощаться", pos: "verb", forms: ["vaišinuosi", "vaišinasi"] },
    { lt: "įpilti", ru: "налить", pos: "verb" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "-o tipo esamasis laikas", ru: "Настоящее время на -o" },
      explanationRu:
        "У части глаголов 3-е лицо настоящего времени оканчивается на -o: valgyti - valgo, prašyti - prašo. В 1-м лице часто слышим -au: valgau, prašau.",
      tableMarkdown: `| Bendratis | aš | jis / ji |\n| --- | --- | --- |\n| valgyti | valgau | valgo |\n| prašyti | prašau | prašo |\n| žinoti | žinau | žino |`,
      examples: [
        { lt: "Aš valgau sriubą, o Mantas valgo žuvį.", ru: "Я ем суп, а Мантас ест рыбу." },
        { lt: "Ji prašo vandens.", ru: "Она просит воды." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Veiksmažodžių valdymas", ru: "Управление глаголов" },
      explanationRu:
        "После разных глаголов нужны разные формы. Norėti и prašyti часто требуют родительного: noriu kavos, prašau vandens. Valgyti и gerti часто берут объект: valgau sriubą, geriu arbatą.",
      examples: [
        { lt: "Aš noriu kavos be cukraus.", ru: "Я хочу кофе без сахара." },
        { lt: "Prašau stiklinės vandens.", ru: "Прошу стакан воды." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Įnagininkas", ru: "Творительный падеж" },
      explanationRu:
        "Творительный отвечает на вопрос kuo? - чем? За столом это часто посуда или способ: šaukštu, peiliu, šakute, su pienu.",
      tableMarkdown: `| Vardininkas | Kuo? |\n| --- | --- |\n| šaukštas | šaukštu |\n| peilis | peiliu |\n| šakutė | šakute |`,
      examples: [
        { lt: "Aš valgau sriubą šaukštu.", ru: "Я ем суп ложкой." },
        { lt: "Tomas geria arbatą su medumi.", ru: "Томас пьёт чай с мёдом." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Naudininkas", ru: "Дательный падеж" },
      explanationRu:
        "Дательный отвечает на вопрос kam? - кому? Jis нужен, когда что-то дают, предлагают или помогают: mamai, svečiui, draugui.",
      examples: [
        { lt: "Įpilk svečiui vandens.", ru: "Налей гостю воды." },
        { lt: "Padėk mamai virtuvėje.", ru: "Помоги маме на кухне." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Liepiamoji nuosaka", ru: "Повелительное наклонение" },
      explanationRu:
        "Просьбы и предложения часто звучат как короткая форма: imk, ragauk, gerkite, vaišinkitės. Для вежливости добавляйте prašom или prašau.",
      examples: [
        { lt: "Ragaukite salotų, prašom.", ru: "Попробуйте салат, пожалуйста." },
        { lt: "Imk duonos ir sūrio.", ru: "Возьми хлеб и сыр." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Būsimasis laikas", ru: "Будущее время" },
      explanationRu:
        "Будущее время помогает говорить о планах: gaminsiu, valgysime, gersiu, ateis. Часто рядом стоят rytoj, vakare, savaitgalį.",
      examples: [
        { lt: "Rytoj gaminsime vištieną su bulvėmis.", ru: "Завтра будем готовить курицу с картошкой." },
        { lt: "Svečiai ateis septintą valandą.", ru: "Гости придут в семь часов." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "duona", ru: "хлеб" },
        { lt: "sūris", ru: "сыр" },
        { lt: "vanduo", ru: "вода" },
        { lt: "šaukštas", ru: "ложка" },
        { lt: "skanus", ru: "вкусный" },
        { lt: "vaišinkitės", ru: "угощайтесь" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Ką ji valgo?",
          choices: ["Ji valgo sriubą.", "Ji valgyti sriubą.", "Ji valgau sriubą."],
          answerIndex: 0,
        },
        {
          lt: "Ko tu nori?",
          choices: ["Noriu kava.", "Noriu kavos.", "Noriu kavą."],
          answerIndex: 1,
          explanationRu: "После norėti часто родительный: kavos.",
        },
        {
          lt: "Kuo valgome sriubą?",
          choices: ["Šaukštu", "Šaukštas", "Šaukštą"],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Aš ___ sriubą.", blank: "valgau", hintRu: "я ем" },
        { sentence: "Prašau stiklinės ___ .", blank: "vandens", hintRu: "воды (род.)" },
        { sentence: "Padėk ___ virtuvėje.", blank: "mamai", hintRu: "маме (дат.)" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "lėkštė", ru: "тарелка" },
        { lt: "šakutė", ru: "вилка" },
        { lt: "peilis", ru: "нож" },
        { lt: "arbata", ru: "чай" },
        { lt: "pyragas", ru: "пирог" },
        { lt: "druska", ru: "соль" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["skani", "Sriuba", "labai", "yra"],
          correct: ["Sriuba", "yra", "labai", "skani"],
          ru: "Суп очень вкусный.",
        },
        {
          words: ["vandens", "svečiui", "Įpilk"],
          correct: ["Įpilk", "svečiui", "vandens"],
          ru: "Налей гостю воды.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Повелительное и будущее время.",
      questions: [
        {
          lt: "Kaip pasiūlyti svečiams?",
          choices: ["Vaišinkitės!", "Vaišinasi!", "Vaišinausi!"],
          answerIndex: 0,
        },
        {
          lt: "Rytoj mes ___ pyragą.",
          choices: ["gamina", "gaminsime", "gaminu"],
          answerIndex: 1,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Vakarienė pas draugus", "Ужин у друзей", [
      { speaker: "Agnė", lt: "Sveiki atvykę! Ant stalo yra sriuba, žuvis ir salotos.", ru: "Добро пожаловать! На столе суп, рыба и салат." },
      { speaker: "Darius", lt: "Kaip skanu! Ar sriuba karšta?", ru: "Как вкусно! Суп горячий?" },
      { speaker: "Agnė", lt: "Taip, bet sultys yra šaltos. Prašom vaišintis.", ru: "Да, но сок холодный. Прошу угощаться." },
      { speaker: "Darius", lt: "Ačiū. Aš valgysiu žuvį su salotomis.", ru: "Спасибо. Я буду есть рыбу с салатом." },
    ]),
  ],
  listeningQuestions: [
    { q: "Kas yra ant stalo?", choices: ["Tik pyragas", "Sriuba, žuvis ir salotos", "Kava ir duona"], answerIndex: 1 },
    { q: "Kokios yra sultys?", choices: ["Karštos", "Šaltos", "Sūrios"], answerIndex: 1 },
    { q: "Ką valgys Darius?", choices: ["Žuvį su salotomis", "Tik sriubą", "Pyragą su medumi"], answerIndex: 0 },
  ],
  reading: {
    lt: "Šeštadienį Rūta kviečia draugus vakarienės. Ji verda daržovių sriubą, kepa žuvį ir gamina salotas. Ant stalo yra lėkštės, šakutės, peiliai ir stiklinės. Draugai geria vandenį ir sultis. Po vakarienės jie valgys obuolių pyragą ir gers arbatą su medumi.",
    ru: "В субботу Рута приглашает друзей на ужин. Она варит овощной суп, жарит рыбу и готовит салат. На столе тарелки, вилки, ножи и стаканы. Друзья пьют воду и сок. После ужина они будут есть яблочный пирог и пить чай с мёдом.",
    questions: [
      { q: "Kada Rūta kviečia draugus?", choices: ["Pirmadienį", "Šeštadienį", "Sekmadienį"], answerIndex: 1 },
      { q: "Ką ji kepa?", choices: ["Žuvį", "Duoną", "Kiaušinius"], answerIndex: 0 },
      { q: "Ką draugai gers po vakarienės?", choices: ["Kavą", "Arbatą su medumi", "Pieną"], answerIndex: 1 },
    ],
  },
};
