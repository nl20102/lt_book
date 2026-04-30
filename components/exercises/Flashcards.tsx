"use client";

import { useState } from "react";
import type { VocabItem } from "@/lib/lessons/types";
import { Button } from "@/components/ui/Button";
import { speakLt } from "@/lib/tts";

export function Flashcards({
  items,
  onComplete,
  onFinished,
}: {
  items: VocabItem[];
  onComplete?: (correct: number, total: number) => void;
  onFinished?: () => void;
}) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const total = items.length;
  const cur = items[i];

  if (!cur) {
    return <p className="text-sm text-[var(--muted)]">Нет карточек.</p>;
  }

  function advance() {
    if (i + 1 >= total) {
      onComplete?.(total, total);
      onFinished?.();
      setI(0);
      setFlipped(false);
      return;
    }
    setI(i + 1);
    setFlipped(false);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--muted)]">
        Карточка {i + 1} / {total}
      </p>
      <button
        type="button"
        onClick={() => setFlipped(!flipped)}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 text-left transition hover:border-[var(--accent)]/40"
      >
        <div className="text-xs text-[var(--muted)]">{flipped ? "RU" : "LT"}</div>
        <div className="mt-2 text-xl font-medium text-[var(--text)]">
          {flipped ? cur.ru : cur.lt}
        </div>
        {!flipped ? (
          <div className="mt-4">
            <Button
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                speakLt(cur.lt);
              }}
            >
              Прослушать (LT)
            </Button>
          </div>
        ) : null}
      </button>
      <div className="flex flex-wrap gap-2">
        <Button onClick={advance}>{i < total - 1 ? "Дальше" : "Завершить"}</Button>
        <Button variant="ghost" onClick={() => (onComplete?.(i + 1, total), onFinished?.())}>
          Завершить блок
        </Button>
      </div>
    </div>
  );
}
