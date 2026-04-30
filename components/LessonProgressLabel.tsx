"use client";

import { useProgressContext } from "@/components/ProgressProvider";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function LessonProgressLabel({ slug }: { slug: string }) {
  const { hydrated, lessonProgressFraction } = useProgressContext();
  const frac = hydrated ? lessonProgressFraction(slug) : 0;
  return (
    <div className="mt-4 max-w-md">
      <div className="mb-1 flex justify-between text-xs text-[var(--muted)]">
        <span>Прогресс по разделам</span>
        <span>{Math.round(frac * 100)}%</span>
      </div>
      <ProgressBar value={frac} />
    </div>
  );
}
