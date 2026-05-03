import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson10: Lesson = {
  id: 10,
  slug: "pamoka-10",
  title: { lt: "Ką veiki šiandien?", ru: "Что ты делаешь сегодня?" },
  objectivesRu: [
    "Разговаривать на почте и в банке",
    "Говорить о работе и документах",
    "Описывать свой обычный день",
  ],
  grammarTopicsRu: ["Возвратные глаголы", "Банк и почта", "Рабочий день", "Распорядок дня"],
  vocabThemesRu: ["Почта", "Банк", "Работа", "Ежедневные действия"],
  dialogues: [
    dialogue("d1", "Pašte", "На почте", [
      { speaker: "Klientė", lt: "Laba diena. Norėčiau išsiųsti siuntinį į Suomiją.", ru: "Добрый день. Я хотела бы отправить посылку в Финляндию." },
      { speaker: "Darbuotojas", lt: "Prašom užpildyti šį blanką ir parašyti adresą.", ru: "Пожалуйста, заполните этот бланк и напишите адрес." },
      { speaker: "Klientė", lt: "Ar siuntinys nueis per savaitę?", ru: "Посылка дойдёт за неделю?" },
      { speaker: "Darbuotojas", lt: "Taip, jeigu siųsite oro paštu.", ru: "Да, если отправите авиапочтой." },
    ]),
    dialogue("d2", "Banke", "В банке", [
      { speaker: "Klientas", lt: "Ar galiu išsikeisti eurus į zlotus?", ru: "Могу ли я обменять евро на злотые?" },
      { speaker: "Banko darbuotoja", lt: "Taip. Kiek eurų norite keisti?", ru: "Да. Сколько евро хотите обменять?" },
      { speaker: "Klientas", lt: "Du šimtus eurų. Ar reikia paso?", ru: "Двести евро. Нужен ли паспорт?" },
      { speaker: "Banko darbuotoja", lt: "Taip, prašom parodyti pasą ir pasirašyti čia.", ru: "Да, пожалуйста, покажите паспорт и подпишитесь здесь." },
    ]),
    dialogue("d3", "Darbo susitikimas", "Рабочая встреча", [
      { speaker: "Vadovė", lt: "Rytoj dešimtą valandą vyks posėdis.", ru: "Завтра в десять часов состоится заседание." },
      { speaker: "Tomas", lt: "Ar darbotvarkė jau paruošta?", ru: "Повестка уже подготовлена?" },
      { speaker: "Vadovė", lt: "Taip, išsiunčiau ją visiems kolegoms elektroniniu paštu.", ru: "Да, я отправила её всем коллегам по электронной почте." },
      { speaker: "Tomas", lt: "Puiku, tada pasiruošiu klausimus.", ru: "Отлично, тогда подготовлю вопросы." },
    ]),
    dialogue("d4", "Ryto rutina", "Утренний распорядок", [
      { speaker: "Agnė", lt: "Kelintą valandą tu keliesi?", ru: "Во сколько ты встаёшь?" },
      { speaker: "Mantas", lt: "Keliuosi septintą, prausiuosi ir rengiuosi.", ru: "Встаю в семь, умываюсь и одеваюсь." },
      { speaker: "Agnė", lt: "Ar pusryčiauji namie?", ru: "Ты завтракаешь дома?" },
      { speaker: "Mantas", lt: "Dažniausiai ne. Kavos nusiperku prie darbo.", ru: "Чаще всего нет. Кофе покупаю возле работы." },
    ]),
    dialogue("d5", "Prašymas dėl atostogų", "Заявление на отпуск", [
      { speaker: "Darbuotoja", lt: "Norėčiau pasitarti dėl atostogų.", ru: "Я хотела бы посоветоваться насчёт отпуска." },
      { speaker: "Viršininkas", lt: "Kuriam laikui norite išeiti?", ru: "На какой срок хотите уйти?" },
      { speaker: "Darbuotoja", lt: "Dviem savaitėms liepos mėnesį.", ru: "На две недели в июле." },
      { speaker: "Viršininkas", lt: "Parašykite prašymą, o aš jį pasirašysiu.", ru: "Напишите заявление, а я его подпишу." },
    ]),
  ],
  vocabulary: [
    { lt: "paštas", ru: "почта", pos: "noun" },
    { lt: "siuntinys", ru: "посылка", pos: "noun" },
    { lt: "laiškas", ru: "письмо", pos: "noun" },
    { lt: "atvirukas", ru: "открытка", pos: "noun" },
    { lt: "vokas", ru: "конверт", pos: "noun" },
    { lt: "pašto ženklas", ru: "почтовая марка", pos: "phrase" },
    { lt: "adresas", ru: "адрес", pos: "noun" },
    { lt: "blankas", ru: "бланк", pos: "noun" },
    { lt: "užpildyti", ru: "заполнить", pos: "verb" },
    { lt: "siųsti", ru: "посылать", pos: "verb", forms: ["siunčiu", "siunčia"] },
    { lt: "gauti", ru: "получать", pos: "verb", forms: ["gaunu", "gauna"] },
    { lt: "bankas", ru: "банк", pos: "noun" },
    { lt: "banknotas", ru: "банкнота", pos: "noun" },
    { lt: "moneta", ru: "монета", pos: "noun" },
    { lt: "pinigai", ru: "деньги", pos: "noun" },
    { lt: "valiuta", ru: "валюта", pos: "noun" },
    { lt: "kursas", ru: "курс", pos: "noun" },
    { lt: "sąskaita", ru: "счёт", pos: "noun" },
    { lt: "mokėjimo kortelė", ru: "платёжная карта", pos: "phrase" },
    { lt: "grynieji", ru: "наличные", pos: "noun" },
    { lt: "keisti", ru: "менять", pos: "verb", forms: ["keičiu", "keičia"] },
    { lt: "pasirašyti", ru: "подписать", pos: "verb" },
    { lt: "pasas", ru: "паспорт", pos: "noun" },
    { lt: "darbas", ru: "работа", pos: "noun" },
    { lt: "darbuotojas", ru: "работник", pos: "noun" },
    { lt: "darbuotoja", ru: "работница", pos: "noun" },
    { lt: "viršininkas", ru: "начальник", pos: "noun" },
    { lt: "vadovė", ru: "руководительница", pos: "noun" },
    { lt: "kolega", ru: "коллега", pos: "noun" },
    { lt: "posėdis", ru: "заседание", pos: "noun" },
    { lt: "susitikimas", ru: "встреча", pos: "noun" },
    { lt: "darbotvarkė", ru: "повестка", pos: "noun" },
    { lt: "sutartis", ru: "договор", pos: "noun" },
    { lt: "prašymas", ru: "заявление", pos: "noun" },
    { lt: "atostogos", ru: "отпуск", pos: "noun" },
    { lt: "komandiruotė", ru: "командировка", pos: "noun" },
    { lt: "elektroninis paštas", ru: "электронная почта", pos: "phrase" },
    { lt: "ruoštis", ru: "готовиться", pos: "verb", forms: ["ruošiuosi", "ruošiasi"] },
    { lt: "tartis", ru: "советоваться", pos: "verb", forms: ["tariuosi", "tariasi"] },
    { lt: "teirautis", ru: "справляться", pos: "verb", forms: ["teiraujuosi", "teiraujasi"] },
    { lt: "keltis", ru: "вставать", pos: "verb", forms: ["keliuosi", "keliasi"] },
    { lt: "praustis", ru: "умываться", pos: "verb", forms: ["prausiuosi", "prausiasi"] },
    { lt: "rengtis", ru: "одеваться", pos: "verb", forms: ["rengiuosi", "rengiasi"] },
    { lt: "skustis", ru: "бриться", pos: "verb", forms: ["skutuosi", "skutasi"] },
    { lt: "šukuotis", ru: "причёсываться", pos: "verb", forms: ["šukuojuosi", "šukuojasi"] },
    { lt: "jaustis", ru: "чувствовать себя", pos: "verb", forms: ["jaučiuosi", "jaučiasi"] },
    { lt: "džiaugtis", ru: "радоваться", pos: "verb", forms: ["džiaugiuosi", "džiaugiasi"] },
    { lt: "domėtis", ru: "интересоваться", pos: "verb", forms: ["domiuosi", "domisi"] },
    { lt: "rūpintis", ru: "заботиться", pos: "verb", forms: ["rūpinuosi", "rūpinasi"] },
    { lt: "vėluoti", ru: "опаздывать", pos: "verb", forms: ["vėluoju", "vėluoja"] },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Sangrąžiniai veiksmažodžiai", ru: "Возвратные глаголы" },
      explanationRu:
        "Возвратные глаголы показывают действие, направленное на себя: keliuosi, prausiuosi, rengiuosi. Частица -si/-s меняется по лицам.",
      tableMarkdown: `| Asmuo | keltis |\n| --- | --- |\n| aš | keliuosi |\n| tu | keliesi |\n| jis / ji | keliasi |\n| mes | keliamės |\n| jūs | keliatės |\n| jie / jos | keliasi |`,
      examples: [
        { lt: "Aš keliuosi septintą valandą.", ru: "Я встаю в семь часов." },
        { lt: "Vaikai rengiasi į mokyklą.", ru: "Дети одеваются в школу." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Praeitis ir ateitis", ru: "Прошлое и будущее возвратных глаголов" },
      explanationRu:
        "В прошедшем и будущем времени возвратная часть остаётся: vakar kėliausi, šiandien keliuosi, rytoj kelsiuosi; vakar ruošiausi, šiandien ruošiuosi.",
      examples: [
        { lt: "Vakar ruošiausi posėdžiui.", ru: "Вчера я готовился к заседанию." },
        { lt: "Rytoj tarsiuosi su viršininku.", ru: "Завтра посоветуюсь с начальником." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Banke", ru: "В банке" },
      explanationRu:
        "Для обмена валюты используйте keisti ką į ką: keisti eurus į zlotus. Для оплаты: mokėti grynais arba kortele.",
      examples: [
        { lt: "Noriu išsikeisti eurus į zlotus.", ru: "Хочу обменять евро на злотые." },
        { lt: "Ar galiu mokėti kortele?", ru: "Могу ли я платить картой?" },
      ],
    },
    {
      id: "g4",
      title: { lt: "Pašte", ru: "На почте" },
      explanationRu:
        "На почте часто нужны слова išsiųsti, gauti, užpildyti, parašyti adresą. Направление страны обычно выражается į + винительный.",
      examples: [
        { lt: "Norėčiau išsiųsti laišką į Latviją.", ru: "Я хотел бы отправить письмо в Латвию." },
        { lt: "Prašom užpildyti blanką.", ru: "Пожалуйста, заполните бланк." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Darbo kalba", ru: "Рабочая речь" },
      explanationRu:
        "Для рабочих планов используются vyks, prasidės, truks. Документы можно paruošti, išsiųsti, pasirašyti.",
      examples: [
        { lt: "Posėdis vyks dešimtą valandą.", ru: "Заседание состоится в десять часов." },
        { lt: "Vadovė pasirašys sutartį.", ru: "Руководительница подпишет договор." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Dienos planas", ru: "План дня" },
      explanationRu:
        "Распорядок удобно описывать настоящим временем и словами dažniausiai, paprastai, po to, tada.",
      examples: [
        { lt: "Paprastai keliuosi anksti, po to prausiuosi.", ru: "Обычно я встаю рано, потом умываюсь." },
        { lt: "Dažniausiai į darbą einu pėsčiomis.", ru: "Чаще всего я иду на работу пешком." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "siuntinys", ru: "посылка" },
        { lt: "bankas", ru: "банк" },
        { lt: "posėdis", ru: "заседание" },
        { lt: "prašymas", ru: "заявление" },
        { lt: "keltis", ru: "вставать" },
        { lt: "rengtis", ru: "одеваться" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Aš ___ septintą valandą.",
          choices: ["keliuosi", "keliasi", "keliesi"],
          answerIndex: 0,
        },
        {
          lt: "Noriu išsikeisti eurus ___ zlotus.",
          choices: ["į", "su", "pas"],
          answerIndex: 0,
        },
        {
          lt: "Ką reikia padaryti ant blanko?",
          choices: ["Pasirašyti", "Bėgioti", "Grybauti"],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Prašom ___ šį blanką.", blank: "užpildyti", hintRu: "заполнить" },
        { sentence: "Rytoj vyks darbo ___ .", blank: "posėdis", hintRu: "заседание" },
        { sentence: "Po dušo aš ___ .", blank: "rengiuosi", hintRu: "одеваюсь" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "vokas", ru: "конверт" },
        { lt: "valiuta", ru: "валюта" },
        { lt: "sutartis", ru: "договор" },
        { lt: "atostogos", ru: "отпуск" },
        { lt: "grynieji", ru: "наличные" },
        { lt: "kolega", ru: "коллега" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["septintą", "Keliuosi", "valandą"],
          correct: ["Keliuosi", "septintą", "valandą"],
          ru: "Встаю в семь часов.",
        },
        {
          words: ["pasirašyti", "Prašom", "čia"],
          correct: ["Prašom", "pasirašyti", "čia"],
          ru: "Пожалуйста, подпишитесь здесь.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Почта, банк, работа.",
      questions: [
        {
          lt: "Kur siunčiame laišką?",
          choices: ["Pašte", "Vonioje", "Darže"],
          answerIndex: 0,
        },
        {
          lt: "Kaip sakome: заседание состоится?",
          choices: ["Posėdis vyks.", "Posėdis valgys.", "Posėdis prausis."],
          answerIndex: 0,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Telefonas į biurą", "Звонок в офис", [
      { speaker: "Klientas", lt: "Laba diena, norėčiau pasiteirauti dėl sutarties.", ru: "Добрый день, я хотел бы справиться насчёт договора." },
      { speaker: "Sekretorė", lt: "Vadovė dabar posėdyje, bet ji grįš po pietų.", ru: "Руководительница сейчас на заседании, но вернётся после обеда." },
      { speaker: "Klientas", lt: "Ar galiu jai išsiųsti dokumentus elektroniniu paštu?", ru: "Могу ли я отправить ей документы по электронной почте?" },
      { speaker: "Sekretorė", lt: "Taip, atsiųskite, o rytoj ji pasirašys.", ru: "Да, отправьте, а завтра она подпишет." },
    ]),
  ],
  listeningQuestions: [
    { q: "Dėl ko teiraujasi klientas?", choices: ["Dėl sutarties", "Dėl atostogų", "Dėl siuntinio"], answerIndex: 0 },
    { q: "Kur dabar vadovė?", choices: ["Pašte", "Posėdyje", "Banke"], answerIndex: 1 },
    { q: "Kada vadovė pasirašys?", choices: ["Šiandien ryte", "Rytoj", "Po metų"], answerIndex: 1 },
  ],
  reading: {
    lt: "Rasa dirba biure. Ji keliasi šeštą trisdešimt, prausiasi, rengiasi ir važiuoja į darbą autobusu. Ryte ji patikrina elektroninį paštą ir paruošia posėdžio darbotvarkę. Per pietų pertrauką Rasa nueina į banką išsikeisti pinigų. Po darbo ji užsuka į paštą ir išsiunčia siuntinį draugei į Vokietiją.",
    ru: "Раса работает в офисе. Она встаёт в шесть тридцать, умывается, одевается и едет на работу автобусом. Утром она проверяет электронную почту и готовит повестку заседания. В обеденный перерыв Раса идёт в банк обменять деньги. После работы она заходит на почту и отправляет посылку подруге в Германию.",
    questions: [
      { q: "Kur dirba Rasa?", choices: ["Biure", "Teatre", "Kaime"], answerIndex: 0 },
      { q: "Ką ji paruošia ryte?", choices: ["Darbotvarkę", "Tortą", "Lagaminą"], answerIndex: 0 },
      { q: "Kur ji išsiunčia siuntinį?", choices: ["Į Vokietiją", "Į banką", "Į mokyklą"], answerIndex: 0 },
    ],
  },
};
