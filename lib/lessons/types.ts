export type Translated = { lt: string; ru: string };

export type DialogueLine = { speaker: string; lt: string; ru: string };

export type Dialogue = { id: string; title: Translated; lines: DialogueLine[] };

export type VocabItem = {
  lt: string;
  ru: string;
  pos?: "noun" | "verb" | "adj" | "adv" | "phrase";
  forms?: string[];
  example?: Translated;
};

export type GrammarTopic = {
  id: string;
  title: Translated;
  explanationRu: string;
  tableMarkdown?: string;
  examples: Translated[];
};

export type McQuestion = {
  lt: string;
  choices: string[];
  answerIndex: number;
  explanationRu?: string;
};

export type FillBlankQuestion = {
  /** Lithuanian sentence with ___ as placeholder */
  sentence: string;
  blank: string;
  hintRu?: string;
};

export type WordOrderQuestion = {
  words: string[];
  correct: string[];
  ru: string;
};

export type Exercise =
  | { kind: "flashcards"; items: VocabItem[] }
  | { kind: "multipleChoice"; promptRu: string; questions: McQuestion[] }
  | { kind: "fillBlank"; promptRu: string; questions: FillBlankQuestion[] }
  | { kind: "match"; promptRu: string; pairs: { lt: string; ru: string }[] }
  | { kind: "wordOrder"; promptRu: string; questions: WordOrderQuestion[] };

export type ReadingPassage = {
  lt: string;
  ru: string;
  questions: { q: string; choices: string[]; answerIndex: number }[];
};

export type LessonSection =
  | "dialogues"
  | "vocabulary"
  | "grammar"
  | "exercises"
  | "listening"
  | "reading";

export const LESSON_SECTIONS: LessonSection[] = [
  "dialogues",
  "vocabulary",
  "grammar",
  "exercises",
  "listening",
  "reading",
];

export type Lesson = {
  id: number;
  slug: string;
  title: Translated;
  objectivesRu: string[];
  grammarTopicsRu: string[];
  vocabThemesRu: string[];
  dialogues: Dialogue[];
  vocabulary: VocabItem[];
  grammar: GrammarTopic[];
  exercises: Exercise[];
  listening: Dialogue[];
  /** Optional comprehension MCQs for the listening section */
  listeningQuestions?: { q: string; choices: string[]; answerIndex: number }[];
  reading: ReadingPassage;
};

export function lessonHasContent(lesson: Lesson): boolean {
  const hasReading = lesson.reading.lt.trim().length > 0;
  return (
    lesson.dialogues.length > 0 ||
    lesson.vocabulary.length > 0 ||
    lesson.grammar.length > 0 ||
    lesson.exercises.length > 0 ||
    lesson.listening.length > 0 ||
    hasReading
  );
}
