"use client";

import Link from "next/link";
import type { Lesson } from "@/lib/lessons/types";
import { lessonHasContent } from "@/lib/lessons/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useProgressContext } from "@/components/ProgressProvider";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  const { hydrated, lessonProgressFraction } = useProgressContext();
  const ready = lessonHasContent(lesson);
  const frac = hydrated ? lessonProgressFraction(lesson.slug) : 0;

  return (
    <Link href={`/lessons/${lesson.slug}`} className="block">
      <Card className="h-full transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--surface-hover)]">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-xs text-[var(--muted)]">Урок {lesson.id}</div>
            <div className="mt-1 text-lg font-semibold text-[var(--text)]">{lesson.title.ru}</div>
            <div className="mt-0.5 text-sm text-[var(--muted)]">{lesson.title.lt}</div>
          </div>
          {ready ? <Badge tone="success">Готов</Badge> : <Badge tone="warn">Скоро</Badge>}
        </div>
        {ready ? (
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs text-[var(--muted)]">
              <span>Прогресс</span>
              <span>{Math.round(frac * 100)}%</span>
            </div>
            <ProgressBar value={frac} />
          </div>
        ) : (
          <p className="mt-3 text-sm text-[var(--muted)]">План и цели — внутри урока.</p>
        )}
      </Card>
    </Link>
  );
}
