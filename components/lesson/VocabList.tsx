"use client";

import { useMemo, useState } from "react";
import type { VocabItem } from "@/lib/lessons/types";
import { speakLt } from "@/lib/tts";
import { Button } from "@/components/ui/Button";

export function VocabList({ items }: { items: VocabItem[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter(
      (v) =>
        v.lt.toLowerCase().includes(s) ||
        v.ru.toLowerCase().includes(s) ||
        (v.pos && v.pos.toLowerCase().includes(s)),
    );
  }, [items, q]);

  return (
    <div className="space-y-4">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Поиск (лит., рус., часть речи)…"
        className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--text)]"
      />
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--surface-hover)] text-xs uppercase text-[var(--muted)]">
            <tr>
              <th className="px-3 py-2">LT</th>
              <th className="px-3 py-2">RU</th>
              <th className="px-3 py-2">Формы / пример</th>
              <th className="px-3 py-2" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((v, i) => (
              <tr key={`${v.lt}-${i}`} className="border-t border-[var(--border)]">
                <td className="px-3 py-2 font-medium text-[var(--text)]">{v.lt}</td>
                <td className="px-3 py-2 text-[var(--muted)]">{v.ru}</td>
                <td className="px-3 py-2 text-xs text-[var(--muted)]">
                  {v.forms?.length ? v.forms.join(", ") : "—"}
                  {v.example ? (
                    <div className="mt-1 text-[var(--text)]">
                      <span className="text-[var(--muted)]">Прим.: </span>
                      {v.example.lt} — {v.example.ru}
                    </div>
                  ) : null}
                </td>
                <td className="px-3 py-2 text-right">
                  <Button variant="secondary" onClick={() => speakLt(v.lt)}>
                    ▶
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
