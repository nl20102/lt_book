"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { GrammarTopic } from "@/lib/lessons/types";
import { Card } from "@/components/ui/Card";
import { AudioPlayButton } from "@/components/AudioPlayButton";
import { AUDIO_MANIFEST } from "@/lib/generated/audio-manifest";
import { grammarExampleSrc } from "@/lib/lesson-audio-paths";

export function GrammarCard({ lessonSlug, topics }: { lessonSlug: string; topics: GrammarTopic[] }) {
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
              {t.examples.map((ex, i) => {
                const src = grammarExampleSrc(lessonSlug, t.id, i);
                return (
                  <div
                    key={i}
                    className="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3"
                  >
                    <div>
                      {AUDIO_MANIFEST.has(src) ? (
                        <AudioPlayButton asText src={src} textClassName="font-medium">
                          {ex.lt}
                        </AudioPlayButton>
                      ) : (
                        <p className="font-medium text-[var(--text)]">{ex.lt}</p>
                      )}
                      <p className="text-sm text-[var(--muted)]">{ex.ru}</p>
                    </div>
                    {AUDIO_MANIFEST.has(src) ? (
                      <AudioPlayButton src={src} variant="secondary">
                        Слушать
                      </AudioPlayButton>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
