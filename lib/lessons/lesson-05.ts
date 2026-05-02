import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson05: Lesson = {
  id: 5,
  slug: "pamoka-5",
  title: { lt: "Prašom paragauti!", ru: "Угощайтесь!" },
  objectivesRu: [
    "Заказать еду в кафе",
    "Купить продукты",
    "Спросить про меню и количество",
  ],
  grammarTopicsRu: ["Количественное выражение", "Нужно (reikia)", "Сослагательное наклонение", "Союзы"],
  vocabThemesRu: ["Упаковки", "Вес", "Цвета", "Числа 11-19"],
  dialogues: [
    dialogue("d1", "Kavinėje", "В кафе", [
      { speaker: "Padavėja", lt: "Laba diena. Štai meniu.", ru: "Добрый день. Вот меню." },
      { speaker: "Klientas", lt: "Ačiū. Norėčiau sriubos ir salotų.", ru: "Спасибо. Я хотел бы суп и салат." },
      { speaker: "Padavėja", lt: "Ar norėtumėte kavos ar arbatos?", ru: "Вы хотели бы кофе или чай?" },
      { speaker: "Klientas", lt: "Norėčiau arbatos be cukraus.", ru: "Я хотел бы чай без сахара." },
    ]),
    dialogue("d2", "Užsakymas", "Заказ", [
      { speaker: "Padavėjas", lt: "Ką užsakysite?", ru: "Что вы закажете?" },
      { speaker: "Aistė", lt: "Užsakysiu vištienos porciją ir stiklinę vandens.", ru: "Я закажу порцию курицы и стакан воды." },
      { speaker: "Padavėjas", lt: "Ar reikės deserto?", ru: "Нужен будет десерт?" },
      { speaker: "Aistė", lt: "Taip, prašom gabalą pyrago.", ru: "Да, пожалуйста, кусок пирога." },
    ]),
    dialogue("d3", "Parduotuvėje", "В магазине", [
      { speaker: "Pirkėjas", lt: "Prašom vieną pakelį sviesto ir litrą pieno.", ru: "Пожалуйста, одну пачку масла и литр молока." },
      { speaker: "Pardavėja", lt: "Dar ko nors?", ru: "Ещё что-нибудь?" },
      { speaker: "Pirkėjas", lt: "Taip, pusę kilogramo sūrio.", ru: "Да, полкилограмма сыра." },
      { speaker: "Pardavėja", lt: "Viskas kainuoja šešis eurus.", ru: "Всё стоит шесть евро." },
    ]),
    dialogue("d4", "Turguje", "На рынке", [
      { speaker: "Ona", lt: "Kiek kainuoja raudoni obuoliai?", ru: "Сколько стоят красные яблоки?" },
      { speaker: "Pardavėjas", lt: "Du eurai už kilogramą.", ru: "Два евро за килограмм." },
      { speaker: "Ona", lt: "Prašom du kilogramus ir vieną maišelį morkų.", ru: "Пожалуйста, два килограмма и один пакет моркови." },
      { speaker: "Pardavėjas", lt: "Prašom. Obuoliai šiandien labai saldūs.", ru: "Пожалуйста. Яблоки сегодня очень сладкие." },
    ]),
    dialogue("d5", "Prie stalo", "За столом", [
      { speaker: "Močiutė", lt: "Prašom paragauti varškės pyrago.", ru: "Пожалуйста, попробуйте творожный пирог." },
      { speaker: "Anūkė", lt: "Ačiū, jis labai skanus, bet aš noriu tik mažo gabalo.", ru: "Спасибо, он очень вкусный, но я хочу только маленький кусок." },
      { speaker: "Močiutė", lt: "Gerai. Reikia dar arbatos?", ru: "Хорошо. Нужно ещё чаю?" },
      { speaker: "Anūkė", lt: "Taip, norėčiau puodelio arbatos.", ru: "Да, я хотела бы чашку чая." },
    ]),
  ],
  vocabulary: [
    { lt: "meniu", ru: "меню", pos: "noun" },
    { lt: "padavėjas", ru: "официант", pos: "noun" },
    { lt: "padavėja", ru: "официантка", pos: "noun" },
    { lt: "klientas", ru: "клиент", pos: "noun" },
    { lt: "pirkėjas", ru: "покупатель", pos: "noun" },
    { lt: "pardavėjas", ru: "продавец", pos: "noun" },
    { lt: "parduotuvė", ru: "магазин", pos: "noun" },
    { lt: "turgus", ru: "рынок", pos: "noun" },
    { lt: "sąskaita", ru: "счёт", pos: "noun" },
    { lt: "užsakymas", ru: "заказ", pos: "noun" },
    { lt: "kaina", ru: "цена", pos: "noun" },
    { lt: "euras", ru: "евро", pos: "noun" },
    { lt: "centas", ru: "цент", pos: "noun" },
    { lt: "porcija", ru: "порция", pos: "noun" },
    { lt: "gabalas", ru: "кусок", pos: "noun" },
    { lt: "kilogramas", ru: "килограмм", pos: "noun" },
    { lt: "gramas", ru: "грамм", pos: "noun" },
    { lt: "litras", ru: "литр", pos: "noun" },
    { lt: "butelis", ru: "бутылка", pos: "noun" },
    { lt: "pakelis", ru: "пачка / пакетик", pos: "noun" },
    { lt: "dėžutė", ru: "коробочка", pos: "noun" },
    { lt: "maišelis", ru: "пакет", pos: "noun" },
    { lt: "pusė", ru: "половина", pos: "noun" },
    { lt: "sviestas", ru: "сливочное масло", pos: "noun" },
    { lt: "dešra", ru: "колбаса", pos: "noun" },
    { lt: "varškė", ru: "творог", pos: "noun" },
    { lt: "uogienė", ru: "варенье", pos: "noun" },
    { lt: "medus", ru: "мёд", pos: "noun" },
    { lt: "miltai", ru: "мука", pos: "noun" },
    { lt: "morka", ru: "морковь", pos: "noun" },
    { lt: "kopūstas", ru: "капуста", pos: "noun" },
    { lt: "svogūnas", ru: "лук", pos: "noun" },
    { lt: "bananas", ru: "банан", pos: "noun" },
    { lt: "braškė", ru: "клубника", pos: "noun" },
    { lt: "raudonas", ru: "красный", pos: "adj" },
    { lt: "geltonas", ru: "жёлтый", pos: "adj" },
    { lt: "žalias", ru: "зелёный", pos: "adj" },
    { lt: "baltas", ru: "белый", pos: "adj" },
    { lt: "juodas", ru: "чёрный", pos: "adj" },
    { lt: "pigus", ru: "дешёвый", pos: "adj" },
    { lt: "brangus", ru: "дорогой", pos: "adj" },
    { lt: "vienuolika", ru: "одиннадцать", pos: "noun" },
    { lt: "dvylika", ru: "двенадцать", pos: "noun" },
    { lt: "trylika", ru: "тринадцать", pos: "noun" },
    { lt: "keturiolika", ru: "четырнадцать", pos: "noun" },
    { lt: "penkiolika", ru: "пятнадцать", pos: "noun" },
    { lt: "šešiolika", ru: "шестнадцать", pos: "noun" },
    { lt: "septyniolika", ru: "семнадцать", pos: "noun" },
    { lt: "aštuoniolika", ru: "восемнадцать", pos: "noun" },
    { lt: "devyniolika", ru: "девятнадцать", pos: "noun" },
    { lt: "reikia", ru: "нужно", pos: "phrase" },
    { lt: "norėčiau", ru: "я хотел(а) бы", pos: "phrase" },
    { lt: "užsakyti", ru: "заказывать", pos: "verb", forms: ["užsakau", "užsako"] },
    { lt: "kainuoti", ru: "стоить", pos: "verb", forms: ["kainuoja"] },
    { lt: "paragauti", ru: "попробовать", pos: "verb" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Kiekiai ir kilmininkas", ru: "Количество и родительный падеж" },
      explanationRu:
        "После слов количества часто нужен родительный: kilogramas obuolių, litras pieno, puodelis arbatos, gabalas pyrago.",
      tableMarkdown: `| Kiekis | Ko? |\n| --- | --- |\n| kilogramas | obuolių |\n| litras | pieno |\n| puodelis | arbatos |\n| gabalas | pyrago |`,
      examples: [
        { lt: "Prašom pusę kilogramo sūrio.", ru: "Пожалуйста, полкилограмма сыра." },
        { lt: "Norėčiau puodelio arbatos.", ru: "Я хотел бы чашку чая." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Reikia", ru: "Нужно" },
      explanationRu:
        "Reikia используется без изменения по лицам: man reikia, tau reikia, mums reikia. С существительным часто родительный: reikia duonos. С действием - инфинитив: reikia mokėti.",
      examples: [
        { lt: "Man reikia vieno pakelio sviesto.", ru: "Мне нужна одна пачка масла." },
        { lt: "Reikia sumokėti prie kasos.", ru: "Нужно заплатить у кассы." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Tariamoji nuosaka mandagumui", ru: "Вежливая условная форма" },
      explanationRu:
        "В кафе и магазине вежливо звучит norėčiau - я хотел(а) бы. Можно добавить prašom или prašyčiau.",
      tableMarkdown: `| Tiesiai | Mandagiau |\n| --- | --- |\n| Noriu kavos. | Norėčiau kavos. |\n| Duokite sąskaitą. | Prašyčiau sąskaitos. |`,
      examples: [
        { lt: "Norėčiau vištienos porcijos.", ru: "Я хотел бы порцию курицы." },
        { lt: "Prašyčiau sąskaitos.", ru: "Я попросил бы счёт." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Jungtukai", ru: "Союзы" },
      explanationRu:
        "Частые союзы: ir - и, arba - или, bet - но, nes - потому что, jei - если. Они помогают соединять короткие фразы.",
      examples: [
        { lt: "Norėčiau sriubos ir salotų.", ru: "Я хотел бы суп и салат." },
        { lt: "Sultys saldžios, bet aš noriu vandens.", ru: "Сок сладкий, но я хочу воды." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Skaičiai 11-19", ru: "Числа 11-19" },
      explanationRu:
        "Числа 11-19 часто используются с родительным множественного: vienuolika eurų, dvylika obuolių, devyniolika centų.",
      examples: [
        { lt: "Sąskaita kainuoja vienuolika eurų.", ru: "Счёт составляет одиннадцать евро." },
        { lt: "Maišelyje yra dvylika obuolių.", ru: "В пакете двенадцать яблок." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Spalvos", ru: "Цвета и согласование" },
      explanationRu:
        "Прилагательное цвета согласуется с существительным: raudonas obuolys, raudona braškė, žali agurkai.",
      examples: [
        { lt: "Raudoni obuoliai šiandien pigūs.", ru: "Красные яблоки сегодня дешёвые." },
        { lt: "Prašom geltoną bananą.", ru: "Пожалуйста, жёлтый банан." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "meniu", ru: "меню" },
        { lt: "sąskaita", ru: "счёт" },
        { lt: "kilogramas", ru: "килограмм" },
        { lt: "pakelis", ru: "пачка" },
        { lt: "reikia", ru: "нужно" },
        { lt: "norėčiau", ru: "я хотел(а) бы" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Ko norėtumėte?",
          choices: ["Norėčiau kava.", "Norėčiau kavos.", "Norėčiau kavoje."],
          answerIndex: 1,
        },
        {
          lt: "Prašom litrą ___.",
          choices: ["pieno", "pienas", "pieną"],
          answerIndex: 0,
        },
        {
          lt: "Kiek kainuoja?",
          choices: ["Vienuolika eurų.", "Vienuolika euro.", "Vienuolika eurai."],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Man ___ duonos.", blank: "reikia", hintRu: "нужно" },
        { sentence: "Norėčiau gabalo ___ .", blank: "pyrago", hintRu: "пирога (род.)" },
        { sentence: "Šie obuoliai yra ___ .", blank: "raudoni", hintRu: "красные" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "butelis", ru: "бутылка" },
        { lt: "dėžutė", ru: "коробочка" },
        { lt: "maišelis", ru: "пакет" },
        { lt: "litras", ru: "литр" },
        { lt: "porcija", ru: "порция" },
        { lt: "kaina", ru: "цена" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["arbatos", "puodelio", "Norėčiau"],
          correct: ["Norėčiau", "puodelio", "arbatos"],
          ru: "Я хотел(а) бы чашку чая.",
        },
        {
          words: ["kainuoja", "eurų", "vienuolika", "Sąskaita"],
          correct: ["Sąskaita", "kainuoja", "vienuolika", "eurų"],
          ru: "Счёт стоит одиннадцать евро.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Союзы и вежливая просьба.",
      questions: [
        {
          lt: "Norėčiau sriubos ___ salotų.",
          choices: ["ir", "bet", "nes"],
          answerIndex: 0,
        },
        {
          lt: "Aš noriu vandens, ___ sultys per saldžios.",
          choices: ["arba", "nes", "ir"],
          answerIndex: 1,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Užsakymas kavinėje", "Заказ в кафе", [
      { speaker: "Padavėja", lt: "Laba diena. Ką norėtumėte užsakyti?", ru: "Добрый день. Что вы хотели бы заказать?" },
      { speaker: "Klientė", lt: "Norėčiau salotų, gabalo pyrago ir arbatos.", ru: "Я хотела бы салат, кусок пирога и чай." },
      { speaker: "Padavėja", lt: "Ar arbata su cukrumi?", ru: "Чай с сахаром?" },
      { speaker: "Klientė", lt: "Ne, be cukraus. Ir prašyčiau sąskaitos.", ru: "Нет, без сахара. И я попросила бы счёт." },
    ]),
  ],
  listeningQuestions: [
    { q: "Ką klientė užsako?", choices: ["Tik kavą", "Salotų, pyrago ir arbatos", "Sriubos ir vandens"], answerIndex: 1 },
    { q: "Kokia arbata?", choices: ["Su cukrumi", "Be cukraus", "Su pienu"], answerIndex: 1 },
    { q: "Ko ji prašo pabaigoje?", choices: ["Meniu", "Sąskaitos", "Maišelio"], answerIndex: 1 },
  ],
  reading: {
    lt: "Po darbo Milda eina į parduotuvę. Jai reikia duonos, vieno pakelio sviesto, litro pieno ir dviejų kilogramų obuolių. Obuoliai yra raudoni ir pigūs. Prie kasos Milda dar paima mažą dėžutę braškių, nes namuose bus svečių. Viskas kainuoja devyniolika eurų.",
    ru: "После работы Милда идёт в магазин. Ей нужны хлеб, одна пачка масла, литр молока и два килограмма яблок. Яблоки красные и дешёвые. У кассы Милда ещё берёт маленькую коробочку клубники, потому что дома будут гости. Всё стоит девятнадцать евро.",
    questions: [
      { q: "Ko reikia Mildai?", choices: ["Tik kavos", "Duonos, sviesto, pieno ir obuolių", "Bilietų"], answerIndex: 1 },
      { q: "Kokie yra obuoliai?", choices: ["Raudoni ir pigūs", "Žali ir brangūs", "Juodi"], answerIndex: 0 },
      { q: "Kiek viskas kainuoja?", choices: ["Dvylika eurų", "Devyniolika eurų", "Penki eurai"], answerIndex: 1 },
    ],
  },
};
