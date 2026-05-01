import type { Exercise, Lesson } from "@/lib/lessons/types";

const AUDIO_BASE = "/audio";

function safeSegment(id: string): string {
  return id.replace(/[^a-zA-Z0-9_-]/g, "_");
}

export function dialogueLineSrc(slug: string, dialogueId: string, lineIdx: number): string {
  return `${AUDIO_BASE}/${slug}/dlg-${safeSegment(dialogueId)}-L${lineIdx}.mp3`;
}

export function vocabItemSrc(slug: string, vocabIndex: number): string {
  return `${AUDIO_BASE}/${slug}/voc-${vocabIndex}.mp3`;
}

export function grammarExampleSrc(slug: string, topicId: string, exampleIdx: number): string {
  return `${AUDIO_BASE}/${slug}/grm-${safeSegment(topicId)}-ex${exampleIdx}.mp3`;
}

export function exerciseMcSrc(slug: string, blockIdx: number, questionIdx: number): string {
  return `${AUDIO_BASE}/${slug}/ex-mc-${blockIdx}-q${questionIdx}.mp3`;
}

export function exerciseFlashcardSrc(slug: string, blockIdx: number, itemIdx: number): string {
  return `${AUDIO_BASE}/${slug}/ex-fc-${blockIdx}-i${itemIdx}.mp3`;
}

export function listeningLineSrc(slug: string, dialogueId: string, lineIdx: number): string {
  return `${AUDIO_BASE}/${slug}/lst-${safeSegment(dialogueId)}-L${lineIdx}.mp3`;
}

export function readingFullSrc(slug: string): string {
  return `${AUDIO_BASE}/${slug}/read-full.mp3`;
}

/** URL path starting with /audio/... (same as in manifest) */
export function urlToManifestKey(url: string): string {
  return url;
}

export type AudioGenerationJob = {
  /** absolute path from repo root, e.g. public/audio/pamoka-1/voc-0.mp3 */
  fsPath: string;
  /** URL served by Next, e.g. /audio/pamoka-1/voc-0.mp3 */
  url: string;
  text: string;
};

function fsPublicPath(url: string): string {
  const without = url.startsWith("/") ? url.slice(1) : url;
  return `public/${without}`;
}

/** All MP3 jobs for a lesson (for generator + manifest). */
export function collectAudioGenerationJobs(lesson: Lesson): AudioGenerationJob[] {
  const slug = lesson.slug;
  const jobs: AudioGenerationJob[] = [];

  for (const d of lesson.dialogues) {
    d.lines.forEach((line, i) => {
      const url = dialogueLineSrc(slug, d.id, i);
      jobs.push({ fsPath: fsPublicPath(url), url, text: line.lt });
    });
  }

  lesson.vocabulary.forEach((v, i) => {
    const url = vocabItemSrc(slug, i);
    jobs.push({ fsPath: fsPublicPath(url), url, text: v.lt });
  });

  for (const t of lesson.grammar) {
    t.examples.forEach((ex, i) => {
      const url = grammarExampleSrc(slug, t.id, i);
      jobs.push({ fsPath: fsPublicPath(url), url, text: ex.lt });
    });
  }

  lesson.exercises.forEach((ex: Exercise, blockIdx) => {
    if (ex.kind === "multipleChoice") {
      ex.questions.forEach((q, qIdx) => {
        const url = exerciseMcSrc(slug, blockIdx, qIdx);
        jobs.push({ fsPath: fsPublicPath(url), url, text: q.lt });
      });
    }
    if (ex.kind === "flashcards") {
      ex.items.forEach((item, itemIdx) => {
        const url = exerciseFlashcardSrc(slug, blockIdx, itemIdx);
        jobs.push({ fsPath: fsPublicPath(url), url, text: item.lt });
      });
    }
  });

  for (const d of lesson.listening) {
    d.lines.forEach((line, i) => {
      const url = listeningLineSrc(slug, d.id, i);
      jobs.push({ fsPath: fsPublicPath(url), url, text: line.lt });
    });
  }

  const readLt = lesson.reading.lt.trim();
  if (readLt.length > 0) {
    const url = readingFullSrc(slug);
    jobs.push({ fsPath: fsPublicPath(url), url, text: readLt });
  }

  return jobs;
}

export function collectAllLessonsAudioJobs(lessons: Lesson[]): AudioGenerationJob[] {
  return lessons.flatMap((l) => collectAudioGenerationJobs(l));
}
