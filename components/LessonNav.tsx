"use client";

import Link from "next/link";
import type { Lesson } from "@/lib/lessons/types";
import { LESSON_SECTIONS } from "@/lib/lessons/types";
import { SECTION_LABELS_RU } from "@/lib/strings";
import { lessonHasContent } from "@/lib/lessons/types";
import { useProgressContext } from "@/components/ProgressProvider";
import { Badge } from "@/components/ui/Badge";

export function LessonNav({ lesson }: { lesson: Lesson }) {
  const { hydrated, isSectionComplete } = useProgressContext();
  const ready = lessonHasContent(lesson);

  return (
    <nav className="mt-6 grid gap-2 sm:grid-cols-2">
      {LESSON_SECTIONS.map((s) => {
        const done = hydrated && isSectionComplete(lesson.slug, s);
        const label = SECTION_LABELS_RU[s];
        const inner = (
          <>
            <span className="font-medium text-[var(--text)]">{label}</span>
            {done ? <Badge tone="success">OK</Badge> : <Badge tone="neutral">…</Badge>}
          </>
        );

        if (!ready) {
          return (
            <div
              key={s}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm opacity-60"
              title="Контент урока ещё не добавлен"
            >
              {inner}
            </div>
          );
        }

        return (
          <Link
            key={s}
            href={`/lessons/${lesson.slug}/${s}`}
            className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm transition hover:border-[var(--accent)]/40"
          >
            {inner}
          </Link>
        );
      })}
    </nav>
  );
}
