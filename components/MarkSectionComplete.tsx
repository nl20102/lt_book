"use client";

import { Button } from "@/components/ui/Button";
import { useProgressContext } from "@/components/ProgressProvider";
import type { LessonSection } from "@/lib/lessons/types";

export function MarkSectionComplete({
  lessonSlug,
  section,
}: {
  lessonSlug: string;
  section: LessonSection;
}) {
  const { markSectionComplete, isSectionComplete, hydrated } = useProgressContext();
  const done = hydrated && isSectionComplete(lessonSlug, section);

  return (
    <div className="mt-10 border-t border-[var(--border)] pt-6">
      <p className="text-sm text-[var(--muted)]">
        Когда закончите раздел, отметьте его — прогресс сохранится в браузере (localStorage).
      </p>
      <div className="mt-3">
        <Button disabled={!hydrated || done} onClick={() => markSectionComplete(lessonSlug, section)}>
          {done ? "Раздел отмечен" : "Отметить раздел как пройденный"}
        </Button>
      </div>
    </div>
  );
}
