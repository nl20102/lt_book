"use client";

import { useState } from "react";
import type { Dialogue } from "@/lib/lessons/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AudioPlayButton } from "@/components/AudioPlayButton";
import { AUDIO_MANIFEST } from "@/lib/generated/audio-manifest";
import { listeningLineSrc } from "@/lib/lesson-audio-paths";

export function ListeningPlayer({
  lessonSlug,
  items,
  questions,
}: {
  lessonSlug: string;
  items: Dialogue[];
  questions?: { q: string; choices: string[]; answerIndex: number }[];
}) {
  const [showText, setShowText] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);
  const main = items[0];
  const [picked, setPicked] = useState<Record<number, number | null>>({});

  if (!main) {
    return <p className="text-sm text-[var(--muted)]">Нет аудиотекста.</p>;
  }

  const line = main.lines[lineIdx];
  const lineSrc = line ? listeningLineSrc(lessonSlug, main.id, lineIdx) : "";

  function nextLine() {
    if (lineIdx + 1 >= main.lines.length) {
      setLineIdx(0);
      return;
    }
    setLineIdx(lineIdx + 1);
  }

  return (
    <div className="space-y-6">
      <Card title={<span>Аудирование: {main.title.ru}</span>}>
        <p className="mb-4 text-sm text-[var(--muted)]">{main.title.lt}</p>
        <div className="flex flex-wrap gap-2">
          {line && AUDIO_MANIFEST.has(lineSrc) ? (
            <AudioPlayButton key={lineIdx} src={lineSrc} variant="primary">
              Воспроизвести строку
            </AudioPlayButton>
          ) : null}
          <Button variant="secondary" onClick={nextLine}>
            Следующая строка ({lineIdx + 1}/{main.lines.length})
          </Button>
          <Button variant="secondary" onClick={() => setShowText((s) => !s)}>
            {showText ? "Скрыть текст" : "Показать текст"}
          </Button>
        </div>
        {showText && line ? (
          <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
            <div className="text-xs text-[var(--muted)]">{line.speaker}</div>
            <p className="mt-1 text-lg text-[var(--text)]">{line.lt}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{line.ru}</p>
          </div>
        ) : null}
      </Card>
      {questions?.length ? (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-[var(--text)]">Понимание</h3>
          {questions.map((qq, qi) => (
            <div key={qi} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="font-medium text-[var(--text)]">{qq.q}</p>
              <div className="mt-2 grid gap-2">
                {qq.choices.map((c, ci) => {
                  const chosen = picked[qi];
                  const show = typeof chosen === "number";
                  const isCorrect = ci === qq.answerIndex;
                  return (
                    <button
                      key={ci}
                      type="button"
                      disabled={show}
                      onClick={() => setPicked((p) => ({ ...p, [qi]: ci }))}
                      className={`rounded-lg border px-3 py-2 text-left text-sm ${
                        show && isCorrect
                          ? "border-emerald-600/60 bg-emerald-900/20"
                          : show && chosen === ci
                            ? "border-red-600/50 bg-red-900/20"
                            : "border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)]/40"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
