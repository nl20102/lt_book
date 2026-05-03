import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson09: Lesson = {
  id: 9,
  slug: "pamoka-9",
  title: { lt: "Jaučiuosi puikiai!", ru: "Чувствую себя отлично!" },
  objectivesRu: [
    "Говорить о самочувствии",
    "Записаться к врачу",
    "Купить лекарства",
  ],
  grammarTopicsRu: ["Условные конструкции", "Просьбы и пожелания", "Цель (kad + …)", "Приставка nebe-", "Деминутивы"],
  vocabThemesRu: ["Части тела", "Здоровье", "Лекарства"],
  dialogues: [
    dialogue("d1", "Kaip jautiesi?", "Как ты себя чувствуешь?", [
      { speaker: "Greta", lt: "Kaip jautiesi šiandien?", ru: "Как ты себя чувствуешь сегодня?" },
      { speaker: "Domas", lt: "Jaučiuosi geriau, bet dar skauda galvą.", ru: "Чувствую себя лучше, но ещё болит голова." },
      { speaker: "Greta", lt: "Gal reikia pailsėti?", ru: "Может, нужно отдохнуть?" },
      { speaker: "Domas", lt: "Taip, jei turėsiu laiko, miegosiu po pietų.", ru: "Да, если будет время, посплю после обеда." },
    ]),
    dialogue("d2", "Registratūroje", "В регистратуре", [
      { speaker: "Pacientė", lt: "Norėčiau užsiregistruoti pas gydytoją.", ru: "Я хотела бы записаться к врачу." },
      { speaker: "Registratorė", lt: "Kada jums patogu?", ru: "Когда вам удобно?" },
      { speaker: "Pacientė", lt: "Rytoj ryte, jei yra laisvas laikas.", ru: "Завтра утром, если есть свободное время." },
      { speaker: "Registratorė", lt: "Yra devintą trisdešimt. Prašom atvykti laiku.", ru: "Есть в девять тридцать. Пожалуйста, приходите вовремя." },
    ]),
    dialogue("d3", "Pas gydytoją", "У врача", [
      { speaker: "Gydytojas", lt: "Kuo skundžiatės?", ru: "На что жалуетесь?" },
      { speaker: "Pacientas", lt: "Man skauda gerklę ir kosėju.", ru: "У меня болит горло и я кашляю." },
      { speaker: "Gydytojas", lt: "Ar turite temperatūros?", ru: "У вас есть температура?" },
      { speaker: "Pacientas", lt: "Taip, vakar buvo trisdešimt aštuoni.", ru: "Да, вчера было тридцать восемь." },
    ]),
    dialogue("d4", "Vaistinėje", "В аптеке", [
      { speaker: "Vaistininkė", lt: "Ko ieškote?", ru: "Что вы ищете?" },
      { speaker: "Klientė", lt: "Man reikia vaistų nuo kosulio ir pastilių gerklei.", ru: "Мне нужны лекарства от кашля и пастилки для горла." },
      { speaker: "Vaistininkė", lt: "Gerkite sirupą du kartus per dieną.", ru: "Пейте сироп два раза в день." },
      { speaker: "Klientė", lt: "Ačiū. Tikiuosi, greitai pasveiksiu.", ru: "Спасибо. Надеюсь, быстро выздоровею." },
    ]),
    dialogue("d5", "Sveikimas", "Выздоровление", [
      { speaker: "Ieva", lt: "Ar tu dar sergi?", ru: "Ты ещё болеешь?" },
      { speaker: "Tomas", lt: "Ne, nebesergu. Jaučiuosi puikiai.", ru: "Нет, уже не болею. Чувствую себя отлично." },
      { speaker: "Ieva", lt: "Labai gerai. Tik saugok gerklytę.", ru: "Очень хорошо. Только береги горлышко." },
      { speaker: "Tomas", lt: "Saugosiu ir gersiu daug vandens.", ru: "Буду беречь и пить много воды." },
    ]),
  ],
  vocabulary: [
    { lt: "sveikata", ru: "здоровье", pos: "noun" },
    { lt: "savijauta", ru: "самочувствие", pos: "noun" },
    { lt: "gydytojas", ru: "врач", pos: "noun" },
    { lt: "gydytoja", ru: "врач (ж.)", pos: "noun" },
    { lt: "pacientas", ru: "пациент", pos: "noun" },
    { lt: "registratūra", ru: "регистратура", pos: "noun" },
    { lt: "vaistinė", ru: "аптека", pos: "noun" },
    { lt: "vaistininkė", ru: "фармацевт", pos: "noun" },
    { lt: "vaistas", ru: "лекарство", pos: "noun" },
    { lt: "tabletė", ru: "таблетка", pos: "noun" },
    { lt: "sirupas", ru: "сироп", pos: "noun" },
    { lt: "pastilė", ru: "пастилка", pos: "noun" },
    { lt: "lašai", ru: "капли", pos: "noun" },
    { lt: "receptas", ru: "рецепт", pos: "noun" },
    { lt: "temperatūra", ru: "температура", pos: "noun" },
    { lt: "galva", ru: "голова", pos: "noun" },
    { lt: "akis", ru: "глаз", pos: "noun" },
    { lt: "ausis", ru: "ухо", pos: "noun" },
    { lt: "nosis", ru: "нос", pos: "noun" },
    { lt: "gerklė", ru: "горло", pos: "noun" },
    { lt: "dantis", ru: "зуб", pos: "noun" },
    { lt: "ranka", ru: "рука", pos: "noun" },
    { lt: "koja", ru: "нога", pos: "noun" },
    { lt: "pilvas", ru: "живот", pos: "noun" },
    { lt: "nugara", ru: "спина", pos: "noun" },
    { lt: "širdis", ru: "сердце", pos: "noun" },
    { lt: "gerklytė", ru: "горлышко", pos: "noun" },
    { lt: "rankytė", ru: "ручка", pos: "noun" },
    { lt: "kojytė", ru: "ножка", pos: "noun" },
    { lt: "skaudėti", ru: "болеть", pos: "verb", forms: ["skauda"] },
    { lt: "sirgti", ru: "болеть", pos: "verb", forms: ["sergu", "serga"] },
    { lt: "kosėti", ru: "кашлять", pos: "verb", forms: ["kosėju", "kosi"] },
    { lt: "sloguoti", ru: "быть с насморком", pos: "verb", forms: ["sloguoju"] },
    { lt: "karščiuoti", ru: "температурить", pos: "verb", forms: ["karščiuoju"] },
    { lt: "pasveikti", ru: "выздороветь", pos: "verb" },
    { lt: "pailsėti", ru: "отдохнуть", pos: "verb" },
    { lt: "miegoti", ru: "спать", pos: "verb", forms: ["miegu", "miega"] },
    { lt: "gerti", ru: "пить", pos: "verb", forms: ["geriu", "geria"] },
    { lt: "užsiregistruoti", ru: "записаться", pos: "verb" },
    { lt: "atvykti", ru: "прибыть / прийти", pos: "verb" },
    { lt: "skųstis", ru: "жаловаться", pos: "verb", forms: ["skundžiuosi"] },
    { lt: "saugoti", ru: "беречь", pos: "verb", forms: ["saugau"] },
    { lt: "jaučiuosi", ru: "я чувствую себя", pos: "phrase" },
    { lt: "puikiai", ru: "отлично", pos: "adv" },
    { lt: "blogai", ru: "плохо", pos: "adv" },
    { lt: "geriau", ru: "лучше", pos: "adv" },
    { lt: "blogiau", ru: "хуже", pos: "adv" },
    { lt: "pavargęs", ru: "уставший", pos: "adj" },
    { lt: "silpnas", ru: "слабый", pos: "adj" },
    { lt: "sveikas", ru: "здоровый", pos: "adj" },
    { lt: "nebesergu", ru: "уже не болею", pos: "phrase" },
    { lt: "kad", ru: "чтобы", pos: "phrase" },
    { lt: "jei", ru: "если", pos: "phrase" },
    { lt: "linkiu", ru: "желаю", pos: "verb" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Jei...", ru: "Условные конструкции" },
      explanationRu:
        "Jei значит «если». После jei можно говорить о возможном действии: jei turėsiu laiko, pailsėsiu; jei skauda, kreipkitės į gydytoją.",
      examples: [
        { lt: "Jei turėsiu laiko, miegosiu po pietų.", ru: "Если будет время, посплю после обеда." },
        { lt: "Jei skauda gerklę, gerkite šiltą arbatą.", ru: "Если болит горло, пейте тёплый чай." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Prašymai ir linkėjimai", ru: "Просьбы и пожелания" },
      explanationRu:
        "Для просьб используйте prašom, prašyčiau, gal galėtumėte. Для пожеланий: linkiu sveikatos, sveikite, greičiau pasveik.",
      examples: [
        { lt: "Prašom atvykti laiku.", ru: "Пожалуйста, приходите вовремя." },
        { lt: "Linkiu greitai pasveikti.", ru: "Желаю быстро выздороветь." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Kad + veiksmažodis", ru: "Kad + глагол цели" },
      explanationRu:
        "Kad часто переводится как «чтобы»: geriu arbatą, kad greičiau pasveikčiau. В простой речи можно использовать kad + будущая или условная форма.",
      examples: [
        { lt: "Geriu daug vandens, kad greičiau pasveikčiau.", ru: "Пью много воды, чтобы быстрее выздороветь." },
        { lt: "Užsiregistravau, kad gydytojas mane apžiūrėtų.", ru: "Я записался, чтобы врач меня осмотрел." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Priešdėlis nebe-", ru: "Приставка nebe-" },
      explanationRu:
        "Nebe- значит «уже не»: nebesergu, nebekosėju, nebeskauda. Это удобно для разговора о выздоровлении.",
      tableMarkdown: `| Buvo | Dabar |\n| --- | --- |\n| sergu | nebesergu |\n| kosėju | nebekosėju |\n| skauda | nebeskauda |`,
      examples: [
        { lt: "Aš nebesergu ir jaučiuosi puikiai.", ru: "Я уже не болею и чувствую себя отлично." },
        { lt: "Man nebeskauda galvos.", ru: "У меня уже не болит голова." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Mažybinės formos", ru: "Уменьшительные формы" },
      explanationRu:
        "В разговоре с детьми или мягкой речи часто появляются формы: ranka - rankytė, koja - kojytė, gerklė - gerklytė.",
      examples: [
        { lt: "Saugok gerklytę ir gerk šiltą arbatą.", ru: "Береги горлышко и пей тёплый чай." },
        { lt: "Vaikui skauda kojytę.", ru: "У ребёнка болит ножка." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Kam skauda?", ru: "У кого болит?" },
      explanationRu:
        "По-литовски часто говорят man skauda, tau skauda, vaikui skauda. Больная часть тела обычно стоит в винительном: galvą, gerklę, nugarą.",
      examples: [
        { lt: "Man skauda gerklę.", ru: "У меня болит горло." },
        { lt: "Vaikui skauda pilvą.", ru: "У ребёнка болит живот." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "sveikata", ru: "здоровье" },
        { lt: "galva", ru: "голова" },
        { lt: "gerklė", ru: "горло" },
        { lt: "vaistinė", ru: "аптека" },
        { lt: "vaistai", ru: "лекарства" },
        { lt: "nebesergu", ru: "уже не болею" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Kaip pasakyti: у меня болит голова?",
          choices: ["Man skauda galva.", "Man skauda galvą.", "Aš skauda galva."],
          answerIndex: 1,
        },
        {
          lt: "Jei skauda gerklę, ___ šiltą arbatą.",
          choices: ["gerkite", "geria", "gerti"],
          answerIndex: 0,
        },
        {
          lt: "Aš jau nebesergu reiškia...",
          choices: ["Я ещё болею", "Я уже не болею", "Я буду болеть"],
          answerIndex: 1,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Man skauda ___ .", blank: "gerklę", hintRu: "горло" },
        { sentence: "Geriu vandenį, ___ greičiau pasveikčiau.", blank: "kad", hintRu: "чтобы" },
        { sentence: "Aš ___ pas gydytoją rytoj.", blank: "užsiregistravau", hintRu: "записался/записалась" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "galva", ru: "голова" },
        { lt: "nosis", ru: "нос" },
        { lt: "dantis", ru: "зуб" },
        { lt: "nugara", ru: "спина" },
        { lt: "tabletė", ru: "таблетка" },
        { lt: "sirupas", ru: "сироп" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["skauda", "Man", "galvą"],
          correct: ["Man", "skauda", "galvą"],
          ru: "У меня болит голова.",
        },
        {
          words: ["greitai", "pasveikti", "Linkiu"],
          correct: ["Linkiu", "greitai", "pasveikti"],
          ru: "Желаю быстро выздороветь.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Kad, jei, nebe-.",
      questions: [
        {
          lt: "Geriu arbatą, ___ neskaudėtų gerklės.",
          choices: ["jei", "kad", "bet"],
          answerIndex: 1,
        },
        {
          lt: "Kaip pasakyti «уже не кашляю»?",
          choices: ["nebekosėju", "nekosėti", "kosėju nebe"],
          answerIndex: 0,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Skambutis į polikliniką", "Звонок в поликлинику", [
      { speaker: "Pacientas", lt: "Laba diena, norėčiau užsiregistruoti pas gydytoją.", ru: "Добрый день, я хотел бы записаться к врачу." },
      { speaker: "Registratorė", lt: "Kuo skundžiatės?", ru: "На что жалуетесь?" },
      { speaker: "Pacientas", lt: "Man skauda gerklę ir vakar karščiavau.", ru: "У меня болит горло, и вчера была температура." },
      { speaker: "Registratorė", lt: "Ateikite rytoj devintą valandą.", ru: "Приходите завтра в девять часов." },
    ]),
  ],
  listeningQuestions: [
    { q: "Kur skambina pacientas?", choices: ["Į vaistinę", "Į polikliniką", "Į parduotuvę"], answerIndex: 1 },
    { q: "Kas jam skauda?", choices: ["Gerklę", "Koją", "Ranką"], answerIndex: 0 },
    { q: "Kada reikia ateiti?", choices: ["Šiandien vakare", "Rytoj devintą", "Sekmadienį"], answerIndex: 1 },
  ],
  reading: {
    lt: "Vakar Paulius jautėsi blogai: jam skaudėjo galvą, gerklę ir jis kosėjo. Ryte jis užsiregistravo pas gydytoją. Gydytoja patarė ilsėtis, gerti daug vandens ir vartoti sirupą nuo kosulio. Paulius nuėjo į vaistinę, nusipirko vaistų ir grįžo namo. Šiandien jis nebekarščiuoja ir jaučiasi geriau.",
    ru: "Вчера Паулюс чувствовал себя плохо: у него болели голова, горло, и он кашлял. Утром он записался к врачу. Врач посоветовала отдыхать, пить много воды и принимать сироп от кашля. Паулюс пошёл в аптеку, купил лекарства и вернулся домой. Сегодня у него уже нет температуры, и он чувствует себя лучше.",
    questions: [
      { q: "Kaip Paulius jautėsi vakar?", choices: ["Puikiai", "Blogai", "Linksmai"], answerIndex: 1 },
      { q: "Ką patarė gydytoja?", choices: ["Ilsėtis ir gerti vandens", "Bėgti į parką", "Negerti nieko"], answerIndex: 0 },
      { q: "Kaip jis jaučiasi šiandien?", choices: ["Blogiau", "Geriau", "Dar karščiuoja"], answerIndex: 1 },
    ],
  },
};
