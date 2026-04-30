"use client";

import { useState } from "react";
import type { McQuestion } from "@/lib/lessons/types";
import { Button } from "@/components/ui/Button";
import { speakLt } from "@/lib/tts";

export function MultipleChoice({
  promptRu,
  questions,
  onComplete,
  onFinished,
}: {
  promptRu: string;
  questions: McQuestion[];
  onComplete?: (correct: number, total: number) => void;
  onFinished?: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[idx];

  if (done) {
    return (
      <div className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
        <p className="font-medium text-[var(--text)]">Готово!</p>
        <p className="text-sm text-[var(--muted)]">
          Правильно: {score} из {questions.length}
        </p>
        <Button
          onClick={() => {
            setDone(false);
            setIdx(0);
            setPicked(null);
            setScore(0);
          }}
        >
          Пройти снова
        </Button>
      </div>
    );
  }

  if (!q) return null;

  function pick(answerIndex: number) {
    if (picked !== null) return;
    setPicked(answerIndex);
    if (answerIndex === q.answerIndex) setScore((s) => s + 1);
  }

  function goNext() {
    const isLast = idx + 1 >= questions.length;
    if (isLast) {
      if (picked === null) return;
      onComplete?.(score, questions.length);
      onFinished?.();
      setDone(true);
      return;
    }
    setIdx(idx + 1);
    setPicked(null);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--muted)]">{promptRu}</p>
      <p className="text-xs text-[var(--muted)]">
        Вопрос {idx + 1} / {questions.length}
      </p>
      <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-lg font-medium text-[var(--text)]">{q.lt}</p>
          <Button variant="secondary" onClick={() => speakLt(q.lt)}>
            Слушать
          </Button>
        </div>
        <div className="mt-3 grid gap-2">
          {q.choices.map((c, i) => {
            const show = picked !== null;
            const isCorrect = i === q.answerIndex;
            const isWrongPick = show && picked === i && !isCorrect;
            return (
              <button
                key={i}
                type="button"
                disabled={picked !== null}
                onClick={() => pick(i)}
                className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                  show && isCorrect
                    ? "border-emerald-600/60 bg-emerald-900/20"
                    : isWrongPick
                      ? "border-red-600/50 bg-red-900/20"
                      : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
        {picked !== null ? (
          <div className="mt-3 space-y-2">
            {q.explanationRu ? <p className="text-sm text-[var(--muted)]">{q.explanationRu}</p> : null}
            <Button onClick={goNext}>{idx + 1 >= questions.length ? "Итог" : "Следующий вопрос"}</Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
