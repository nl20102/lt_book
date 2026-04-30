"use client";

import { useState } from "react";
import type { ReadingPassage } from "@/lib/lessons/types";
import { speakLt } from "@/lib/tts";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ReadingPassageView({ passage }: { passage: ReadingPassage }) {
  const [showRu, setShowRu] = useState(false);
  const [picked, setPicked] = useState<Record<number, number | null>>({});

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button variant={showRu ? "primary" : "secondary"} onClick={() => setShowRu((s) => !s)}>
          {showRu ? "Скрыть перевод" : "Показать перевод"}
        </Button>
        <Button variant="secondary" onClick={() => speakLt(passage.lt)}>
          Прослушать текст
        </Button>
      </div>
      <Card>
        <p className="whitespace-pre-wrap text-lg leading-relaxed text-[var(--text)]">{passage.lt}</p>
        {showRu ? <p className="mt-4 whitespace-pre-wrap text-sm text-[var(--muted)]">{passage.ru}</p> : null}
      </Card>
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-[var(--text)]">Вопросы</h3>
        {passage.questions.map((qq, qi) => (
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
    </div>
  );
}
