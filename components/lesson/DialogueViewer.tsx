"use client";

import { useState } from "react";
import type { Dialogue } from "@/lib/lessons/types";
import { speakLt } from "@/lib/tts";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function DialogueViewer({ dialogues }: { dialogues: Dialogue[] }) {
  const [showRu, setShowRu] = useState(true);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant={showRu ? "primary" : "secondary"} onClick={() => setShowRu(true)}>
          LT + RU
        </Button>
        <Button variant={!showRu ? "primary" : "secondary"} onClick={() => setShowRu(false)}>
          Только LT
        </Button>
      </div>
      {dialogues.map((d) => (
        <Card key={d.id} title={<span className="text-[var(--text)]">{d.title.ru}</span>}>
          <p className="mb-3 text-sm text-[var(--muted)]">{d.title.lt}</p>
          <div className="space-y-3">
            {d.lines.map((line, i) => (
              <div key={i} className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
                <div className="text-xs text-[var(--muted)]">{line.speaker}</div>
                <button
                  type="button"
                  onClick={() => speakLt(line.lt)}
                  className="mt-1 w-full text-left text-lg font-medium text-[var(--text)] hover:text-[var(--accent)]"
                >
                  {line.lt}
                </button>
                {showRu ? <p className="mt-2 text-sm text-[var(--muted)]">{line.ru}</p> : null}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
