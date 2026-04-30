import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

export function Button({ variant = "primary", className = "", children, ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-dim)]"
      : variant === "secondary"
        ? "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-hover)]"
        : "bg-transparent text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]";
  return (
    <button type="button" className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
