import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson08: Lesson = {
  id: 8,
  slug: "pamoka-8",
  title: { lt: "Šiandien saulėta", ru: "Сегодня солнечно" },
  objectivesRu: [
    "Говорить о погоде",
    "Покупать одежду",
    "Давать советы",
  ],
  grammarTopicsRu: ["Погода", "Одежда", "Материалы", "Украшения"],
  vocabThemesRu: ["Прилагательные в речи", "Комплименты"],
  dialogues: [
    dialogue("d1", "Oras šiandien", "Погода сегодня", [
      { speaker: "Lina", lt: "Koks šiandien oras?", ru: "Какая сегодня погода?" },
      { speaker: "Marius", lt: "Šiandien saulėta, bet vėjuota.", ru: "Сегодня солнечно, но ветрено." },
      { speaker: "Lina", lt: "Ar bus šilta vakare?", ru: "Вечером будет тепло?" },
      { speaker: "Marius", lt: "Ne, vakare bus vėsu. Pasiimk megztinį.", ru: "Нет, вечером будет прохладно. Возьми свитер." },
    ]),
    dialogue("d2", "Drabužių parduotuvėje", "В магазине одежды", [
      { speaker: "Pardavėja", lt: "Kuo galiu padėti?", ru: "Чем могу помочь?" },
      { speaker: "Klientė", lt: "Ieškau šilto palto žiemai.", ru: "Я ищу тёплое пальто на зиму." },
      { speaker: "Pardavėja", lt: "Šitas vilnonis paltas labai patogus.", ru: "Это шерстяное пальто очень удобное." },
      { speaker: "Klientė", lt: "Graži spalva. Ar turite mažesnį dydį?", ru: "Красивый цвет. У вас есть меньший размер?" },
    ]),
    dialogue("d3", "Prie veidrodžio", "У зеркала", [
      { speaker: "Rasa", lt: "Kaip man tinka ši suknelė?", ru: "Как мне идёт это платье?" },
      { speaker: "Eglė", lt: "Tau labai tinka. Atrodai elegantiškai.", ru: "Тебе очень идёт. Ты выглядишь элегантно." },
      { speaker: "Rasa", lt: "Gal reikia sidabrinių auskarų?", ru: "Может, нужны серебряные серьги?" },
      { speaker: "Eglė", lt: "Taip, jie gražiai dera su suknele.", ru: "Да, они красиво сочетаются с платьем." },
    ]),
    dialogue("d4", "Lietinga diena", "Дождливый день", [
      { speaker: "Tomas", lt: "Lauke lyja. Kur mano skėtis?", ru: "На улице дождь. Где мой зонт?" },
      { speaker: "Aistė", lt: "Skėtis prie durų, o batai koridoriuje.", ru: "Зонт у двери, а ботинки в коридоре." },
      { speaker: "Tomas", lt: "Apsivilksiu striukę, nes šalta.", ru: "Надену куртку, потому что холодно." },
      { speaker: "Aistė", lt: "Nepamiršk šaliko.", ru: "Не забудь шарф." },
    ]),
    dialogue("d5", "Patarimas", "Совет", [
      { speaker: "Draugė", lt: "Rytoj važiuoju prie jūros. Ką pasiimti?", ru: "Завтра еду к морю. Что взять?" },
      { speaker: "Ieva", lt: "Pasiimk lengvą striukę ir patogius batus.", ru: "Возьми лёгкую куртку и удобную обувь." },
      { speaker: "Draugė", lt: "Ar reikia kepurės?", ru: "Нужна шапка?" },
      { speaker: "Ieva", lt: "Ne, bet reikės akinių nuo saulės.", ru: "Нет, но понадобятся солнечные очки." },
    ]),
  ],
  vocabulary: [
    { lt: "oras", ru: "погода", pos: "noun" },
    { lt: "saulė", ru: "солнце", pos: "noun" },
    { lt: "lietus", ru: "дождь", pos: "noun" },
    { lt: "sniegas", ru: "снег", pos: "noun" },
    { lt: "vėjas", ru: "ветер", pos: "noun" },
    { lt: "debesys", ru: "облака", pos: "noun" },
    { lt: "saulėta", ru: "солнечно", pos: "adv" },
    { lt: "debesuota", ru: "облачно", pos: "adv" },
    { lt: "vėjuota", ru: "ветрено", pos: "adv" },
    { lt: "lietinga", ru: "дождливо", pos: "adv" },
    { lt: "šilta", ru: "тепло", pos: "adv" },
    { lt: "šalta", ru: "холодно", pos: "adv" },
    { lt: "vėsu", ru: "прохладно", pos: "adv" },
    { lt: "karšta", ru: "жарко", pos: "adv" },
    { lt: "laipsnis", ru: "градус", pos: "noun" },
    { lt: "paltas", ru: "пальто", pos: "noun" },
    { lt: "striukė", ru: "куртка", pos: "noun" },
    { lt: "megztinis", ru: "свитер", pos: "noun" },
    { lt: "marškiniai", ru: "рубашка", pos: "noun" },
    { lt: "suknelė", ru: "платье", pos: "noun" },
    { lt: "sijonas", ru: "юбка", pos: "noun" },
    { lt: "kelnės", ru: "брюки", pos: "noun" },
    { lt: "džinsai", ru: "джинсы", pos: "noun" },
    { lt: "batai", ru: "обувь / ботинки", pos: "noun" },
    { lt: "kojinės", ru: "носки", pos: "noun" },
    { lt: "kepurė", ru: "шапка", pos: "noun" },
    { lt: "šalikas", ru: "шарф", pos: "noun" },
    { lt: "pirštinės", ru: "перчатки", pos: "noun" },
    { lt: "skėtis", ru: "зонт", pos: "noun" },
    { lt: "akiniai", ru: "очки", pos: "noun" },
    { lt: "auskarai", ru: "серьги", pos: "noun" },
    { lt: "žiedas", ru: "кольцо", pos: "noun" },
    { lt: "apyrankė", ru: "браслет", pos: "noun" },
    { lt: "laikrodis", ru: "часы", pos: "noun" },
    { lt: "vilna", ru: "шерсть", pos: "noun" },
    { lt: "medvilnė", ru: "хлопок", pos: "noun" },
    { lt: "oda", ru: "кожа", pos: "noun" },
    { lt: "šilkas", ru: "шёлк", pos: "noun" },
    { lt: "auksinis", ru: "золотой", pos: "adj" },
    { lt: "sidabrinis", ru: "серебряный", pos: "adj" },
    { lt: "vilnonis", ru: "шерстяной", pos: "adj" },
    { lt: "medvilninis", ru: "хлопковый", pos: "adj" },
    { lt: "odinis", ru: "кожаный", pos: "adj" },
    { lt: "lengvas", ru: "лёгкий", pos: "adj" },
    { lt: "šiltas", ru: "тёплый", pos: "adj" },
    { lt: "patogus", ru: "удобный", pos: "adj" },
    { lt: "elegantiškas", ru: "элегантный", pos: "adj" },
    { lt: "gražus", ru: "красивый", pos: "adj" },
    { lt: "dydis", ru: "размер", pos: "noun" },
    { lt: "matavimosi kabina", ru: "примерочная", pos: "phrase" },
    { lt: "apsivilkti", ru: "надеть одежду", pos: "verb", forms: ["apsivelku"] },
    { lt: "pasiimti", ru: "взять с собой", pos: "verb" },
    { lt: "tikti", ru: "подходить", pos: "verb", forms: ["tinka"] },
    { lt: "atrodyti", ru: "выглядеть", pos: "verb", forms: ["atrodo"] },
    { lt: "derėti", ru: "сочетаться", pos: "verb", forms: ["dera"] },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Beasmeniai orų sakiniai", ru: "Безличные фразы о погоде" },
      explanationRu:
        "О погоде часто говорят без подлежащего: šalta, šilta, saulėta, debesuota, lyja, sninga. В будущем: bus šalta, lis, snigs.",
      examples: [
        { lt: "Šiandien saulėta, bet vėjuota.", ru: "Сегодня солнечно, но ветрено." },
        { lt: "Rytoj lis, todėl pasiimk skėtį.", ru: "Завтра будет дождь, поэтому возьми зонт." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Būdvardžiai su drabužiais", ru: "Прилагательные с одеждой" },
      explanationRu:
        "Прилагательные согласуются с одеждой: šiltas paltas, šilta striukė, patogūs batai, sidabriniai auskarai.",
      tableMarkdown: `| Vyr. g. | Mot. g. | Daugiskaita |\n| --- | --- | --- |\n| šiltas paltas | šilta striukė | šilti batai |\n| gražus šalikas | graži suknelė | gražūs auskarai |`,
      examples: [
        { lt: "Ieškau šilto palto žiemai.", ru: "Я ищу тёплое пальто на зиму." },
        { lt: "Man reikia patogių batų.", ru: "Мне нужна удобная обувь." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Medžiagos", ru: "Материалы" },
      explanationRu:
        "Материал часто выражается прилагательным: vilnonis paltas, medvilniniai marškiniai, odiniai batai, šilkinė skarelė.",
      examples: [
        { lt: "Šitas vilnonis paltas labai šiltas.", ru: "Это шерстяное пальто очень тёплое." },
        { lt: "Odinius batus lengva valyti.", ru: "Кожаную обувь легко чистить." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Patarimai", ru: "Советы" },
      explanationRu:
        "Совет можно дать повелительной формой: pasiimk, apsivilk, nepamiršk. Более мягко: reikėtų pasiimti, geriau apsivilkti.",
      examples: [
        { lt: "Pasiimk megztinį, nes vakare bus vėsu.", ru: "Возьми свитер, потому что вечером будет прохладно." },
        { lt: "Reikėtų apsivilkti šiltą striukę.", ru: "Стоило бы надеть тёплую куртку." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Papuošalai", ru: "Украшения" },
      explanationRu:
        "С украшениями часто используются tinka и dera: auskarai tinka prie suknelės, žiedas dera su apyranke.",
      examples: [
        { lt: "Sidabriniai auskarai dera su mėlyna suknele.", ru: "Серебряные серьги сочетаются с синим платьем." },
        { lt: "Šis žiedas tau labai tinka.", ru: "Это кольцо тебе очень идёт." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Komplimentai", ru: "Комплименты" },
      explanationRu:
        "Для комплимента используйте tau tinka, gražiai atrodai, labai elegantiška. Наречия часто имеют -ai: gražiai, puikiai, elegantiškai.",
      examples: [
        { lt: "Atrodai labai elegantiškai.", ru: "Ты выглядишь очень элегантно." },
        { lt: "Tau puikiai tinka ši spalva.", ru: "Тебе отлично подходит этот цвет." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "saulėta", ru: "солнечно" },
        { lt: "lietinga", ru: "дождливо" },
        { lt: "paltas", ru: "пальто" },
        { lt: "suknelė", ru: "платье" },
        { lt: "skėtis", ru: "зонт" },
        { lt: "auskarai", ru: "серьги" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильный вариант.",
      questions: [
        {
          lt: "Koks šiandien oras?",
          choices: ["Šiandien saulėta.", "Šiandien saulėtas.", "Šiandien saulėtą."],
          answerIndex: 0,
        },
        {
          lt: "Man reikia ___ batų.",
          choices: ["patogūs", "patogius", "patogių"],
          answerIndex: 2,
        },
        {
          lt: "Ką sakome kaip patarimą?",
          choices: ["Pasiimk skėtį.", "Pasiima skėtį.", "Pasiimti skėtis."],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Rytoj ___, todėl pasiimk skėtį.", blank: "lis", hintRu: "будет дождь" },
        { sentence: "Šitas paltas yra ___ .", blank: "vilnonis", hintRu: "шерстяной" },
        { sentence: "Tau labai ___ ši suknelė.", blank: "tinka", hintRu: "идёт / подходит" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "kepurė", ru: "шапка" },
        { lt: "šalikas", ru: "шарф" },
        { lt: "pirštinės", ru: "перчатки" },
        { lt: "megztinis", ru: "свитер" },
        { lt: "akiniai", ru: "очки" },
        { lt: "žiedas", ru: "кольцо" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["saulėta", "Šiandien", "yra"],
          correct: ["Šiandien", "yra", "saulėta"],
          ru: "Сегодня солнечно.",
        },
        {
          words: ["skėtį", "Nepamiršk", "rytoj"],
          correct: ["Nepamiršk", "skėtį", "rytoj"],
          ru: "Не забудь зонт завтра.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Материалы и комплименты.",
      questions: [
        {
          lt: "Koks paltas?",
          choices: ["Vilnonis paltas", "Vilnonė paltas", "Vilnonius paltas"],
          answerIndex: 0,
        },
        {
          lt: "Kaip pasakyti komplimentą?",
          choices: ["Atrodai elegantiškai.", "Atrodai elegantiškas.", "Atrodai elegantišką."],
          answerIndex: 0,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Ryto oras", "Утренняя погода", [
      { speaker: "Mama", lt: "Šiandien lauke šalta ir vėjuota.", ru: "Сегодня на улице холодно и ветрено." },
      { speaker: "Sūnus", lt: "Ar man reikia kepurės?", ru: "Мне нужна шапка?" },
      { speaker: "Mama", lt: "Taip, pasiimk kepurę, šaliką ir pirštines.", ru: "Да, возьми шапку, шарф и перчатки." },
      { speaker: "Sūnus", lt: "Gerai, apsivilksiu šiltą striukę.", ru: "Хорошо, надену тёплую куртку." },
    ]),
  ],
  listeningQuestions: [
    { q: "Koks oras lauke?", choices: ["Šilta ir saulėta", "Šalta ir vėjuota", "Karšta"], answerIndex: 1 },
    { q: "Ko reikia sūnui?", choices: ["Kepurės", "Skėčio", "Sandalų"], answerIndex: 0 },
    { q: "Ką jis apsivilks?", choices: ["Šiltą striukę", "Suknelę", "Paltą"], answerIndex: 0 },
  ],
  reading: {
    lt: "Sekmadienį oras bus permainingas. Ryte bus saulėta, bet po pietų lis. Gabija nori eiti į miestą, todėl ji apsivilks lengvą striukę ir pasiims skėtį. Ji ieško patogių batų, nes daug vaikščios. Vakare ji susitiks su drauge, kuri visada gražiai atrodo ir mėgsta sidabrinius auskarus.",
    ru: "В воскресенье погода будет переменчивой. Утром будет солнечно, но после обеда будет дождь. Габия хочет пойти в город, поэтому наденет лёгкую куртку и возьмёт зонт. Она ищет удобную обувь, потому что будет много ходить. Вечером она встретится с подругой, которая всегда красиво выглядит и любит серебряные серьги.",
    questions: [
      { q: "Koks oras bus ryte?", choices: ["Saulėta", "Snieguota", "Labai šalta"], answerIndex: 0 },
      { q: "Kodėl Gabija ieško patogių batų?", choices: ["Nes daug vaikščios", "Nes eis miegoti", "Nes batai auksiniai"], answerIndex: 0 },
      { q: "Kokius auskarus mėgsta draugė?", choices: ["Auksinius", "Sidabrinius", "Medinius"], answerIndex: 1 },
    ],
  },
};
