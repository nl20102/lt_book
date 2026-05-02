import type { Lesson } from "@/lib/lessons/types";

function scaffold(
  id: number,
  slug: string,
  titleLt: string,
  titleRu: string,
  objectivesRu: string[],
  grammarTopicsRu: string[],
  vocabThemesRu: string[],
): Lesson {
  return {
    id,
    slug,
    title: { lt: titleLt, ru: titleRu },
    objectivesRu,
    grammarTopicsRu,
    vocabThemesRu,
    dialogues: [],
    vocabulary: [],
    grammar: [],
    exercises: [],
    listening: [],
    reading: { lt: "", ru: "", questions: [] },
  };
}

export const lesson07 = scaffold(
  7,
  "pamoka-7",
  "Čia labai jauku!",
  "Здесь очень уютно!",
  ["Говорить о жилье", "Снять квартиру", "Хвалить интерьер"],
  ["Склонение прилагательных", "Указательные и относительные местоимения", "virš + кого?"],
  ["Квартира", "Комнаты", "Мебель"],
);

export const lesson08 = scaffold(
  8,
  "pamoka-8",
  "Šiandien saulėta",
  "Сегодня солнечно",
  ["Говорить о погоде", "Покупать одежду", "Давать советы"],
  ["Погода", "Одежда", "Материалы", "Украшения"],
  ["Прилагательные в речи", "Комплименты"],
);

export const lesson09 = scaffold(
  9,
  "pamoka-9",
  "Jaučiuosi puikiai!",
  "Чувствую себя отлично!",
  ["Говорить о самочувствии", "Записаться к врачу", "Купить лекарства"],
  ["Условные конструкции", "Просьбы и пожелания", "Цель (kad + …)", "Приставка nebe-", "Деминутивы"],
  ["Части тела", "Здоровье", "Лекарства"],
);

export const lesson10 = scaffold(
  10,
  "pamoka-10",
  "Ką veiki šiandien?",
  "Что ты делаешь сегодня?",
  ["Разговор в банке и на почте", "Рабочие темы", "Рассказать о дне"],
  ["Возвратные глаголы", "Работа", "Распорядок дня"],
  ["Банк", "Почта", "Работа"],
);

export const lesson11 = scaffold(
  11,
  "pamoka-11",
  "Kaip smagu!",
  "Как здорово!",
  ["Хобби и досуг", "Купить билеты", "Путешествия"],
  ["Прошедшее повторяемое время", "Длительность", "Цель в родительном падеже"],
  ["Отдых", "Природа", "Спорт", "Культура"],
);

export const lesson12 = scaffold(
  12,
  "pamoka-12",
  "Sveikinu!",
  "Поздравляю!",
  ["Праздники и традиции", "Поздравления", "Приглашения"],
  ["Праздники", "Традиции", "Поздравительные фразы"],
  ["События", "Подарки"],
);
