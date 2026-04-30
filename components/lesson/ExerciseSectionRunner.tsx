"use client";

import { useState } from "react";
import type { Exercise } from "@/lib/lessons/types";
import { Flashcards } from "@/components/exercises/Flashcards";
import { MultipleChoice } from "@/components/exercises/MultipleChoice";
import { FillBlank } from "@/components/exercises/FillBlank";
import { MatchPairs } from "@/components/exercises/MatchPairs";
import { WordOrder } from "@/components/exercises/WordOrder";

export function ExerciseSectionRunner({
  exercises,
  onAllBlocksDone,
}: {
  exercises: Exercise[];
  onAllBlocksDone?: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const ex = exercises[idx];

  function advance() {
    if (idx + 1 >= exercises.length) {
      onAllBlocksDone?.();
      return;
    }
    setIdx((i) => i + 1);
  }

  if (!ex) {
    return <p className="text-sm text-[var(--muted)]">Упражнений пока нет.</p>;
  }

  return (
    <div className="space-y-4">
      <p className="text-xs text-[var(--muted)]">
        Блок {idx + 1} из {exercises.length}
      </p>
      {ex.kind === "flashcards" ? (
        <Flashcards items={ex.items} onFinished={advance} />
      ) : null}
      {ex.kind === "multipleChoice" ? (
        <MultipleChoice promptRu={ex.promptRu} questions={ex.questions} onFinished={advance} />
      ) : null}
      {ex.kind === "fillBlank" ? (
        <FillBlank promptRu={ex.promptRu} questions={ex.questions} onFinished={advance} />
      ) : null}
      {ex.kind === "match" ? (
        <MatchPairs promptRu={ex.promptRu} pairs={ex.pairs} onFinished={advance} />
      ) : null}
      {ex.kind === "wordOrder" ? (
        <WordOrder promptRu={ex.promptRu} questions={ex.questions} onFinished={advance} />
      ) : null}
    </div>
  );
}
