"use client";

import { useState } from "react";
import type { FillBlankQuestion } from "@/lib/lessons/types";
import { Button } from "@/components/ui/Button";
import { normalizeAnswer } from "@/lib/answer";

export function FillBlank({
  promptRu,
  questions,
  onComplete,
  onFinished,
}: {
  promptRu: string;
  questions: FillBlankQuestion[];
  onComplete?: (correct: number, total: number) => void;
  onFinished?: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [ok, setOk] = useState(false);
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
            setValue("");
            setChecked(false);
            setOk(false);
            setScore(0);
          }}
        >
          Пройти снова
        </Button>
      </div>
    );
  }

  if (!q) return null;

  const parts = q.sentence.split("___");

  function check() {
    setChecked(true);
    const good = normalizeAnswer(value) === normalizeAnswer(q.blank);
    setOk(good);
    if (good) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= questions.length) {
      onComplete?.(score, questions.length);
      onFinished?.();
      setDone(true);
      return;
    }
    setIdx(idx + 1);
    setValue("");
    setChecked(false);
    setOk(false);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--muted)]">{promptRu}</p>
      <p className="text-xs text-[var(--muted)]">
        Задание {idx + 1} / {questions.length}
      </p>
      <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
        <p className="text-lg text-[var(--text)]">
          {parts[0]}
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setChecked(false);
            }}
            disabled={checked}
            className="mx-1 inline-block w-40 rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[var(--text)]"
            placeholder="..."
          />
          {parts[1] ?? ""}
        </p>
        {q.hintRu ? <p className="mt-2 text-sm text-[var(--muted)]">Подсказка: {q.hintRu}</p> : null}
        {!checked ? (
          <div className="mt-3">
            <Button onClick={check}>Проверить</Button>
          </div>
        ) : (
          <div className="mt-3 space-y-2">
            <p className={`text-sm ${ok ? "text-emerald-300" : "text-red-300"}`}>
              {ok ? "Верно!" : `Ожидалось: ${q.blank}`}
            </p>
            <Button onClick={next}>{idx + 1 >= questions.length ? "Итог" : "Дальше"}</Button>
          </div>
        )}
      </div>
    </div>
  );
}
