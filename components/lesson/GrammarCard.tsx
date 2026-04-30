"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { GrammarTopic } from "@/lib/lessons/types";
import { speakLt } from "@/lib/tts";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function GrammarCard({ topics }: { topics: GrammarTopic[] }) {
  return (
    <div className="space-y-6">
      {topics.map((t) => (
        <Card key={t.id} title={<span>{t.title.ru}</span>}>
          <p className="mb-2 text-sm text-[var(--muted)]">{t.title.lt}</p>
          <div className="mt-4 max-w-none space-y-3 text-sm">
            <p className="whitespace-pre-wrap text-[var(--text)]">{t.explanationRu}</p>
            {t.tableMarkdown ? (
              <div className="markdown mt-4 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
                <Markdown remarkPlugins={[remarkGfm]}>{t.tableMarkdown}</Markdown>
              </div>
            ) : null}
            <div className="mt-4 space-y-2">
              <div className="text-xs font-semibold text-[var(--muted)]">Примеры (нажмите, чтобы услышать)</div>
              {t.examples.map((ex, i) => (
                <div key={i} className="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
                  <div>
                    <button type="button" className="text-left font-medium text-[var(--text)]" onClick={() => speakLt(ex.lt)}>
                      {ex.lt}
                    </button>
                    <p className="text-sm text-[var(--muted)]">{ex.ru}</p>
                  </div>
                  <Button variant="secondary" onClick={() => speakLt(ex.lt)}>
                    Слушать
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
