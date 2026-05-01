"use client";

import { useState } from "react";
import type { VocabItem } from "@/lib/lessons/types";
import { Button } from "@/components/ui/Button";
import { AudioPlayButton } from "@/components/AudioPlayButton";
import { AUDIO_MANIFEST } from "@/lib/generated/audio-manifest";
import { exerciseFlashcardSrc } from "@/lib/lesson-audio-paths";

export function Flashcards({
  lessonSlug,
  blockIdx,
  items,
  onComplete,
  onFinished,
}: {
  lessonSlug: string;
  blockIdx: number;
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

  const fcSrc = exerciseFlashcardSrc(lessonSlug, blockIdx, i);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--muted)]">
        Карточка {i + 1} / {total}
      </p>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setFlipped(!flipped)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped(!flipped);
          }
        }}
        className="w-full cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 text-left transition hover:border-[var(--accent)]/40"
      >
        <div className="text-xs text-[var(--muted)]">{flipped ? "RU" : "LT"}</div>
        <div className="mt-2 text-xl font-medium text-[var(--text)]">
          {flipped ? cur.ru : cur.lt}
        </div>
        {!flipped ? (
          <div className="mt-4" onClick={(e) => e.stopPropagation()}>
            {AUDIO_MANIFEST.has(fcSrc) ? (
              <AudioPlayButton src={fcSrc} variant="secondary">
                Прослушать (LT)
              </AudioPlayButton>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={advance}>{i < total - 1 ? "Дальше" : "Завершить"}</Button>
        <Button variant="ghost" onClick={() => (onComplete?.(i + 1, total), onFinished?.())}>
          Завершить блок
        </Button>
      </div>
    </div>
  );
}
