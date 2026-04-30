"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { shuffle } from "@/lib/answer";

export function MatchPairs({
  promptRu,
  pairs,
  onComplete,
  onFinished,
}: {
  promptRu: string;
  pairs: { lt: string; ru: string }[];
  onComplete?: (correct: number, total: number) => void;
  onFinished?: () => void;
}) {
  const ruOrder = useMemo(() => shuffle(pairs.map((p) => p.ru)), [pairs]);
  const [ltPick, setLtPick] = useState<string | null>(null);
  const [ruPick, setRuPick] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(() => new Set());
  const [done, setDone] = useState(false);

  const total = pairs.length;

  function tryMatch() {
    if (!ltPick || !ruPick) return;
    const pair = pairs.find((p) => p.lt === ltPick && p.ru === ruPick);
    if (pair) {
      setMatched((m) => new Set(m).add(pair.lt));
      if (matched.size + 1 >= total) {
        onComplete?.(total, total);
        onFinished?.();
        setDone(true);
      }
    }
    setLtPick(null);
    setRuPick(null);
  }

  if (done) {
    return (
      <div className="space-y-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
        <p className="font-medium text-[var(--text)]">Все пары собраны!</p>
        <Button onClick={() => { setDone(false); setMatched(new Set()); setLtPick(null); setRuPick(null); }}>
          Ещё раз
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--muted)]">{promptRu}</p>
      <p className="text-xs text-[var(--muted)]">
        Сопоставлено: {matched.size} / {total}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="mb-2 text-xs font-semibold text-[var(--muted)]">Литовский</div>
          <div className="grid gap-2">
            {pairs.map((p) => {
              const isMatched = matched.has(p.lt);
              const isSel = ltPick === p.lt;
              return (
                <button
                  key={p.lt}
                  type="button"
                  disabled={isMatched}
                  onClick={() => setLtPick(isSel ? null : p.lt)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm ${
                    isMatched
                      ? "border-emerald-700/40 bg-emerald-900/20 text-emerald-100"
                      : isSel
                        ? "border-[var(--accent)] bg-[var(--surface-hover)]"
                        : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40"
                  }`}
                >
                  {p.lt}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <div className="mb-2 text-xs font-semibold text-[var(--muted)]">Русский</div>
          <div className="grid gap-2">
            {ruOrder.map((ru) => {
              const used = pairs.some((p) => p.ru === ru && matched.has(p.lt));
              const isSel = ruPick === ru;
              return (
                <button
                  key={ru}
                  type="button"
                  disabled={used}
                  onClick={() => setRuPick(isSel ? null : ru)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm ${
                    used
                      ? "border-emerald-700/40 bg-emerald-900/20 text-emerald-100"
                      : isSel
                        ? "border-[var(--accent)] bg-[var(--surface-hover)]"
                        : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40"
                  }`}
                >
                  {ru}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Button onClick={tryMatch} disabled={!ltPick || !ruPick}>
        Соединить выбранное
      </Button>
    </div>
  );
}
