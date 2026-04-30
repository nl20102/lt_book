import Link from "next/link";
import { LESSONS } from "@/lib/lessons";
import { LessonCard } from "@/components/ui/LessonCard";
import { APP_SUBTITLE, APP_TITLE } from "@/lib/strings";

export default function HomePage() {
  return (
    <main>
      <header className="mb-10 border-b border-[var(--border)] pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text)]">{APP_TITLE}</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">{APP_SUBTITLE}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/lessons/pamoka-1"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--accent-dim)]"
          >
            Начать с урока 1
          </Link>
          <a
            href="https://www.vu.lt/leidyba/knygos/vadovelis-ne-dienos-be-lietuviu-kalbos"
            className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--surface)]"
            target="_blank"
            rel="noreferrer"
          >
            Оригинальные материалы издательства VU
          </a>
        </div>
      </header>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">Все уроки (12)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {LESSONS.map((l) => (
            <LessonCard key={l.slug} lesson={l} />
          ))}
        </div>
      </section>
    </main>
  );
}
