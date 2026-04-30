"use client";

import type { ReactNode } from "react";

export type TabItem = { id: string; label: string; content: ReactNode };

export function Tabs({ items, activeId, onChange }: { items: TabItem[]; activeId: string; onChange: (id: string) => void }) {
  return (
    <div>
      <div className="flex flex-wrap gap-1 border-b border-[var(--border)] pb-2">
        {items.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              activeId === t.id
                ? "bg-[var(--accent)] text-white"
                : "text-[var(--muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{items.find((i) => i.id === activeId)?.content}</div>
    </div>
  );
}
