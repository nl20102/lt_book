"use client";

import type { Lesson, LessonSection } from "@/lib/lessons/types";
import { lessonHasContent } from "@/lib/lessons/types";
import { DialogueViewer } from "@/components/lesson/DialogueViewer";
import { VocabList } from "@/components/lesson/VocabList";
import { GrammarCard } from "@/components/lesson/GrammarCard";
import { ExerciseSectionRunner } from "@/components/lesson/ExerciseSectionRunner";
import { ListeningPlayer } from "@/components/lesson/ListeningPlayer";
import { ReadingPassageView } from "@/components/lesson/ReadingPassageView";
import { MarkSectionComplete } from "@/components/MarkSectionComplete";
import { useProgressContext } from "@/components/ProgressProvider";

export function LessonSectionBody({ lesson, section }: { lesson: Lesson; section: LessonSection }) {
  const { markSectionComplete } = useProgressContext();
  const ready = lessonHasContent(lesson);

  if (!ready) {
    return (
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <p className="text-lg font-semibold text-[var(--text)]">Этот урок скоро появится</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Пока доступны только цели и темы. Полный интерактивный контент добавлен для уроков 1–3.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
          {lesson.objectivesRu.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {section === "dialogues" ? <DialogueViewer dialogues={lesson.dialogues} /> : null}
      {section === "vocabulary" ? <VocabList items={lesson.vocabulary} /> : null}
      {section === "grammar" ? <GrammarCard topics={lesson.grammar} /> : null}
      {section === "exercises" ? (
        <ExerciseSectionRunner exercises={lesson.exercises} onAllBlocksDone={() => markSectionComplete(lesson.slug, "exercises")} />
      ) : null}
      {section === "listening" ? (
        <ListeningPlayer items={lesson.listening} questions={lesson.listeningQuestions} />
      ) : null}
      {section === "reading" ? <ReadingPassageView passage={lesson.reading} /> : null}
      <MarkSectionComplete lessonSlug={lesson.slug} section={section} />
    </div>
  );
}
