import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm ${className}`}
    >
      {title ? <div className="mb-3 text-sm font-semibold text-[var(--text)]">{title}</div> : null}
      {children}
    </div>
  );
}
