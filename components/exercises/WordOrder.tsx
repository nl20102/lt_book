"use client";

import { useEffect, useState } from "react";
import type { WordOrderQuestion } from "@/lib/lessons/types";
import { Button } from "@/components/ui/Button";
import { normalizeAnswer, shuffle } from "@/lib/answer";

export function WordOrder({
  promptRu,
  questions,
  onComplete,
  onFinished,
}: {
  promptRu: string;
  questions: WordOrderQuestion[];
  onComplete?: (correct: number, total: number) => void;
  onFinished?: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [pool, setPool] = useState<string[]>([]);
  const [built, setBuilt] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [ok, setOk] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[idx];

  useEffect(() => {
    if (!q) return;
    setPool(shuffle([...q.words]));
    setBuilt([]);
    setChecked(false);
    setOk(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset per question index
  }, [idx, questions]);

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
            setScore(0);
          }}
        >
          Пройти снова
        </Button>
      </div>
    );
  }

  if (!q) return null;

  function addFromPool(w: string) {
    if (checked) return;
    setPool((p) => {
      const i = p.indexOf(w);
      if (i === -1) return p;
      return p.filter((_, j) => j !== i);
    });
    setBuilt((b) => [...b, w]);
  }

  function undoLast() {
    if (checked) return;
    setBuilt((b) => {
      if (b.length === 0) return b;
      const last = b[b.length - 1];
      setPool((p) => [...p, last]);
      return b.slice(0, -1);
    });
  }

  function resetRow() {
    if (checked) return;
    setPool(shuffle([...q.words]));
    setBuilt([]);
  }

  function check() {
    setChecked(true);
    const user = normalizeAnswer(built.join(" "));
    const ans = normalizeAnswer(q.correct.join(" "));
    const good = user === ans;
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
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--muted)]">{promptRu}</p>
      <p className="text-sm text-[var(--text)]">{q.ru}</p>
      <p className="text-xs text-[var(--muted)]">
        Фраза {idx + 1} / {questions.length}
      </p>
      <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
        <div className="mb-2 text-xs text-[var(--muted)]">Соберите фразу (лит.)</div>
        <div className="min-h-[48px] rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface)] p-2">
          {built.length === 0 ? (
            <span className="text-sm text-[var(--muted)]">…</span>
          ) : (
            <div className="flex flex-wrap gap-2">
              {built.map((w, i) => (
                <span key={`${w}-${i}`} className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-1 text-sm">
                  {w}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {pool.map((w, i) => (
            <button
              key={`${w}-${i}`}
              type="button"
              disabled={checked}
              onClick={() => addFromPool(w)}
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-sm hover:border-[var(--accent)]/40"
            >
              {w}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {!checked ? (
            <>
              <Button onClick={check} disabled={built.length === 0}>
                Проверить
              </Button>
              <Button variant="secondary" onClick={undoLast} disabled={built.length === 0}>
                Отменить слово
              </Button>
              <Button variant="ghost" onClick={resetRow}>
                Сбросить
              </Button>
            </>
          ) : (
            <>
              <p className={`w-full text-sm ${ok ? "text-emerald-300" : "text-red-300"}`}>
                {ok ? "Отлично!" : `Ожидалось: ${q.correct.join(" ")}`}
              </p>
              <Button onClick={next}>{idx + 1 >= questions.length ? "Итог" : "Дальше"}</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
