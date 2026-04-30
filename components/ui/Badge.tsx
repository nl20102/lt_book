import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "success" | "warn";
}) {
  const colors =
    tone === "success"
      ? "bg-emerald-900/40 text-emerald-200 border-emerald-700/50"
      : tone === "warn"
        ? "bg-amber-900/30 text-amber-100 border-amber-700/40"
        : "bg-[var(--surface-hover)] text-[var(--muted)] border-[var(--border)]";
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs ${colors}`}>
      {children}
    </span>
  );
}
