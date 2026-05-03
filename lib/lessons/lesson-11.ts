import type { Lesson } from "@/lib/lessons/types";
import { dialogue } from "@/lib/lessons/helpers";

export const lesson11: Lesson = {
  id: 11,
  slug: "pamoka-11",
  title: { lt: "Kaip smagu!", ru: "Как здорово!" },
  objectivesRu: [
    "Говорить о хобби и отдыхе",
    "Покупать билеты на мероприятия",
    "Рассказывать о поездках и природе",
  ],
  grammarTopicsRu: ["Повторяемое прошедшее время", "Время и длительность", "Цель в родительном падеже", "Глаголы движения и занятия"],
  vocabThemesRu: ["Досуг", "Деревня и природа", "Спорт", "Культура", "Путешествие"],
  dialogues: [
    dialogue("d1", "Po atostogų", "После отпуска", [
      { speaker: "Dovilė", lt: "Per atostogas buvome kaime prie ežero.", ru: "Во время отпуска мы были в деревне у озера." },
      { speaker: "Šarūnas", lt: "Ką ten veikdavote?", ru: "Что вы там обычно делали?" },
      { speaker: "Dovilė", lt: "Rytais maudydavomės, o vakarais skaitydavome.", ru: "По утрам купались, а по вечерам читали." },
      { speaker: "Šarūnas", lt: "Skamba ramiai. Aš labiau mėgstu miestą.", ru: "Звучит спокойно. Я больше люблю город." },
    ]),
    dialogue("d2", "Kine", "В кино", [
      { speaker: "Tadas", lt: "Ar norėtum šiandien eiti į kiną?", ru: "Хотела бы сегодня пойти в кино?" },
      { speaker: "Justė", lt: "Norėčiau. Koks filmas rodomas?", ru: "Хотела бы. Какой фильм показывают?" },
      { speaker: "Tadas", lt: "Komedija šeštą valandą.", ru: "Комедия в шесть часов." },
      { speaker: "Justė", lt: "Nupirk bilietus šeštai valandai, o aš ateisiu anksčiau.", ru: "Купи билеты на шесть часов, а я приду раньше." },
    ]),
    dialogue("d3", "Bilietų kasa", "Билетная касса", [
      { speaker: "Klientas", lt: "Prašom du bilietus į koncertą.", ru: "Пожалуйста, два билета на концерт." },
      { speaker: "Kasininkė", lt: "Kur norėtumėte sėdėti?", ru: "Где вы хотели бы сидеть?" },
      { speaker: "Klientas", lt: "Viduryje, jeigu dar yra vietų.", ru: "В середине, если ещё есть места." },
      { speaker: "Kasininkė", lt: "Yra dešimtoje eilėje.", ru: "Есть в десятом ряду." },
    ]),
    dialogue("d4", "Prie ežero", "У озера", [
      { speaker: "Antanas", lt: "Savaitgalį važiuosime prie ežero.", ru: "На выходных поедем к озеру." },
      { speaker: "Rasa", lt: "Kuriam laikui?", ru: "На какой срок?" },
      { speaker: "Antanas", lt: "Dviem dienoms. Statysime palapinę ir kursime laužą.", ru: "На два дня. Будем ставить палатку и разводить костёр." },
      { speaker: "Rasa", lt: "Puiku, pasiimsiu kuprinę ir miegmaišį.", ru: "Отлично, возьму рюкзак и спальник." },
    ]),
    dialogue("d5", "Sporto planas", "Спортивный план", [
      { speaker: "Lukas", lt: "Ar tu sportuoji vakarais?", ru: "Ты занимаешься спортом по вечерам?" },
      { speaker: "Miglė", lt: "Taip, dažnai bėgioju parke arba žaidžiu tenisą.", ru: "Да, часто бегаю в парке или играю в теннис." },
      { speaker: "Lukas", lt: "Gal rytoj žaiskime badmintoną?", ru: "Может, завтра сыграем в бадминтон?" },
      { speaker: "Miglė", lt: "Gera mintis. Susitinkame stadione.", ru: "Хорошая мысль. Встречаемся на стадионе." },
    ]),
  ],
  vocabulary: [
    { lt: "laisvalaikis", ru: "досуг", pos: "noun" },
    { lt: "pomėgis", ru: "хобби", pos: "noun" },
    { lt: "atostogos", ru: "отпуск / каникулы", pos: "noun" },
    { lt: "poilsis", ru: "отдых", pos: "noun" },
    { lt: "kaimas", ru: "деревня", pos: "noun" },
    { lt: "sodyba", ru: "усадьба", pos: "noun" },
    { lt: "sodas", ru: "сад", pos: "noun" },
    { lt: "daržas", ru: "огород", pos: "noun" },
    { lt: "ežeras", ru: "озеро", pos: "noun" },
    { lt: "jūra", ru: "море", pos: "noun" },
    { lt: "miškas", ru: "лес", pos: "noun" },
    { lt: "kalnas", ru: "гора", pos: "noun" },
    { lt: "sala", ru: "остров", pos: "noun" },
    { lt: "krantas", ru: "берег", pos: "noun" },
    { lt: "takelis", ru: "тропинка", pos: "noun" },
    { lt: "palapinė", ru: "палатка", pos: "noun" },
    { lt: "kuprinė", ru: "рюкзак", pos: "noun" },
    { lt: "miegmaišis", ru: "спальник", pos: "noun" },
    { lt: "laužas", ru: "костёр", pos: "noun" },
    { lt: "valtis", ru: "лодка", pos: "noun" },
    { lt: "grybas", ru: "гриб", pos: "noun" },
    { lt: "uoga", ru: "ягода", pos: "noun" },
    { lt: "maudytis", ru: "купаться", pos: "verb", forms: ["maudausi", "maudosi"] },
    { lt: "grybauti", ru: "собирать грибы", pos: "verb" },
    { lt: "uogauti", ru: "собирать ягоды", pos: "verb" },
    { lt: "žvejoti", ru: "рыбачить", pos: "verb" },
    { lt: "plaukti", ru: "плыть", pos: "verb", forms: ["plaukiu", "plaukia"] },
    { lt: "plaukioti", ru: "плавать", pos: "verb" },
    { lt: "bėgioti", ru: "бегать", pos: "verb" },
    { lt: "sportuoti", ru: "заниматься спортом", pos: "verb" },
    { lt: "futbolas", ru: "футбол", pos: "noun" },
    { lt: "krepšinis", ru: "баскетбол", pos: "noun" },
    { lt: "tenisas", ru: "теннис", pos: "noun" },
    { lt: "badmintonas", ru: "бадминтон", pos: "noun" },
    { lt: "šachmatai", ru: "шахматы", pos: "noun" },
    { lt: "stadionas", ru: "стадион", pos: "noun" },
    { lt: "kamuolys", ru: "мяч", pos: "noun" },
    { lt: "kinas", ru: "кино", pos: "noun" },
    { lt: "filmas", ru: "фильм", pos: "noun" },
    { lt: "komedija", ru: "комедия", pos: "noun" },
    { lt: "koncertas", ru: "концерт", pos: "noun" },
    { lt: "teatras", ru: "театр", pos: "noun" },
    { lt: "paroda", ru: "выставка", pos: "noun" },
    { lt: "bilietas", ru: "билет", pos: "noun" },
    { lt: "eilė", ru: "ряд / очередь", pos: "noun" },
    { lt: "vieta", ru: "место", pos: "noun" },
    { lt: "kelionė", ru: "путешествие", pos: "noun" },
    { lt: "lagaminas", ru: "чемодан", pos: "noun" },
    { lt: "žemėlapis", ru: "карта", pos: "noun" },
    { lt: "turistas", ru: "турист", pos: "noun" },
    { lt: "ilsėtis", ru: "отдыхать", pos: "verb", forms: ["ilsiuosi", "ilsisi"] },
    { lt: "leisti laiką", ru: "проводить время", pos: "phrase" },
    { lt: "fotografuoti", ru: "фотографировать", pos: "verb" },
    { lt: "piešti", ru: "рисовать", pos: "verb", forms: ["piešiu", "piešia"] },
    { lt: "dainuoti", ru: "петь", pos: "verb" },
  ],
  grammar: [
    {
      id: "g1",
      title: { lt: "Būtasis dažninis laikas", ru: "Повторяемое прошедшее время" },
      explanationRu:
        "Форма с -dav- описывает привычное действие в прошлом: skaitydavau, eidavome, važiuodavo.",
      tableMarkdown: `| Asmuo | eiti |\n| --- | --- |\n| aš | eidavau |\n| tu | eidavai |\n| jis / ji | eidavo |\n| mes | eidavome |\n| jūs | eidavote |\n| jie / jos | eidavo |`,
      examples: [
        { lt: "Vaikystėje vasaromis važiuodavau į kaimą.", ru: "В детстве летом я ездил в деревню." },
        { lt: "Vakarais mes skaitydavome knygas.", ru: "По вечерам мы обычно читали книги." },
      ],
    },
    {
      id: "g2",
      title: { lt: "Laikas įnagininku", ru: "Время в творительном падеже" },
      explanationRu:
        "Повторяемое время часто выражается творительным: rytais, vakarais, savaitgaliais.",
      examples: [
        { lt: "Rytais maudydavomės ežere.", ru: "По утрам мы купались в озере." },
        { lt: "Savaitgaliais žaidžiu tenisą.", ru: "По выходным я играю в теннис." },
      ],
    },
    {
      id: "g3",
      title: { lt: "Kuriam laikui?", ru: "На какой срок?" },
      explanationRu:
        "Для срока используется дательный: dviem dienoms, trims savaitėms, vienai valandai.",
      examples: [
        { lt: "Išvažiuojame dviem dienoms.", ru: "Уезжаем на два дня." },
        { lt: "Bilietus nupirkau šeštai valandai.", ru: "Я купил билеты на шесть часов." },
      ],
    },
    {
      id: "g4",
      title: { lt: "Kiek laiko?", ru: "Сколько времени?" },
      explanationRu:
        "Длительность часто выражается винительным: dvi dienas, tris savaites, vieną valandą.",
      examples: [
        { lt: "Kaime buvome tris savaites.", ru: "В деревне мы были три недели." },
        { lt: "Filmas truko dvi valandas.", ru: "Фильм длился два часа." },
      ],
    },
    {
      id: "g5",
      title: { lt: "Tikslas kilmininku", ru: "Цель в родительном падеже" },
      explanationRu:
        "Цель действия можно выразить родительным: einu filmo žiūrėti, kviečiu pietų, važiuoju poilsio.",
      examples: [
        { lt: "Eime filmo žiūrėti.", ru: "Пойдём смотреть фильм." },
        { lt: "Pakvietėme draugus vakarienės.", ru: "Мы пригласили друзей на ужин." },
      ],
    },
    {
      id: "g6",
      title: { lt: "Veiksmažodžiai su -inėti / -ioti", ru: "Глаголы с -inėti / -ioti" },
      explanationRu:
        "Эти формы часто обозначают повторяемое или свободное движение: bėgioti, plaukioti, važinėti, slidinėti.",
      examples: [
        { lt: "Vasarą mėgstu plaukioti ežere.", ru: "Летом люблю плавать в озере." },
        { lt: "Rytais ji bėgioja parke.", ru: "По утрам она бегает в парке." },
      ],
    },
  ],
  exercises: [
    {
      kind: "flashcards",
      items: [
        { lt: "laisvalaikis", ru: "досуг" },
        { lt: "palapinė", ru: "палатка" },
        { lt: "laužas", ru: "костёр" },
        { lt: "bilietas", ru: "билет" },
        { lt: "paroda", ru: "выставка" },
        { lt: "bėgioti", ru: "бегать" },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Выберите правильную форму.",
      questions: [
        {
          lt: "Vaikystėje mes dažnai ___ prie ežero.",
          choices: ["važiuodavome", "važiuojame", "važiuosime"],
          answerIndex: 0,
        },
        {
          lt: "Kuriam laikui važiuojate?",
          choices: ["Dviem dienoms.", "Dvi dienas.", "Dvi dienos."],
          answerIndex: 0,
        },
        {
          lt: "Kiek laiko truko koncertas?",
          choices: ["Dvi valandas.", "Dviem valandoms.", "Dvi valandos."],
          answerIndex: 0,
        },
      ],
    },
    {
      kind: "fillBlank",
      promptRu: "Вставьте слово.",
      questions: [
        { sentence: "Rytais mes ___ ežere.", blank: "maudydavomės", hintRu: "обычно купались" },
        { sentence: "Prašom du bilietus šeštai ___ .", blank: "valandai", hintRu: "на шесть часов" },
        { sentence: "Eime filmo ___ .", blank: "žiūrėti", hintRu: "смотреть" },
      ],
    },
    {
      kind: "match",
      promptRu: "Соедините.",
      pairs: [
        { lt: "kuprinė", ru: "рюкзак" },
        { lt: "miegmaišis", ru: "спальник" },
        { lt: "stadionas", ru: "стадион" },
        { lt: "komedija", ru: "комедия" },
        { lt: "uoga", ru: "ягода" },
        { lt: "valtis", ru: "лодка" },
      ],
    },
    {
      kind: "wordOrder",
      promptRu: "Соберите фразу.",
      questions: [
        {
          words: ["eidavome", "Vakarais", "pasivaikščioti"],
          correct: ["Vakarais", "eidavome", "pasivaikščioti"],
          ru: "По вечерам мы ходили гулять.",
        },
        {
          words: ["bilietus", "Nupirkau", "šeštai", "valandai"],
          correct: ["Nupirkau", "bilietus", "šeštai", "valandai"],
          ru: "Я купил билеты на шесть часов.",
        },
      ],
    },
    {
      kind: "multipleChoice",
      promptRu: "Досуг и природа.",
      questions: [
        {
          lt: "Kur statome palapinę?",
          choices: ["Prie ežero", "Bilietų kasoje", "Ant stalo"],
          answerIndex: 0,
        },
        {
          lt: "Ką veikiame kine?",
          choices: ["Žiūrime filmą", "Grybaujame", "Keičiame valiutą"],
          answerIndex: 0,
        },
      ],
    },
  ],
  listening: [
    dialogue("l1", "Savaitgalio planas", "План на выходные", [
      { speaker: "Ieva", lt: "Šeštadienį važiuojame prie jūros trims dienoms.", ru: "В субботу едем к морю на три дня." },
      { speaker: "Marius", lt: "Ką ten veiksite?", ru: "Что вы там будете делать?" },
      { speaker: "Ieva", lt: "Dieną ilsėsimės paplūdimyje, o vakarais vaikščiosime po miestą.", ru: "Днём будем отдыхать на пляже, а вечерами гулять по городу." },
      { speaker: "Marius", lt: "Kaip smagu! Nepamirškite fotoaparato.", ru: "Как здорово! Не забудьте фотоаппарат." },
    ]),
  ],
  listeningQuestions: [
    { q: "Kur važiuoja Ieva?", choices: ["Prie jūros", "Į banką", "Į darbą"], answerIndex: 0 },
    { q: "Kuriam laikui ji važiuoja?", choices: ["Trims dienoms", "Vienai valandai", "Metams"], answerIndex: 0 },
    { q: "Ką jie veiks vakarais?", choices: ["Vaikščios po miestą", "Dirbs biure", "Pirks valiutą"], answerIndex: 0 },
  ],
  reading: {
    lt: "Vaikystėje Greta vasaromis dažnai važiuodavo pas senelius į kaimą. Rytais ji padėdavo sode, po pietų maudydavosi ežere, o vakarais klausydavosi senelio pasakojimų. Dabar Greta gyvena mieste, bet savaitgaliais mėgsta išvažiuoti į gamtą. Ji pasiima kuprinę, palapinę ir žemėlapį. Draugai kuria laužą, žvejoja ir ilgai kalbasi.",
    ru: "В детстве Грета летом часто ездила к бабушке и дедушке в деревню. По утрам она помогала в саду, после обеда купалась в озере, а вечерами слушала рассказы дедушки. Сейчас Грета живёт в городе, но по выходным любит выезжать на природу. Она берёт рюкзак, палатку и карту. Друзья разводят костёр, рыбачат и долго разговаривают.",
    questions: [
      { q: "Kur Greta važiuodavo vaikystėje?", choices: ["Į kaimą", "Į banką", "Į teatrą"], answerIndex: 0 },
      { q: "Ką ji veikdavo po pietų?", choices: ["Maudydavosi ežere", "Dirbdavo kasoje", "Keisdavo valiutą"], answerIndex: 0 },
      { q: "Ką ji pasiima dabar?", choices: ["Kuprinę, palapinę ir žemėlapį", "Pasą ir sutartį", "Voką ir ženklą"], answerIndex: 0 },
    ],
  },
};
