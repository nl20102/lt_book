import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson } from "@/lib/lessons";
import { LessonNav } from "@/components/LessonNav";
import { LessonProgressLabel } from "@/components/LessonProgressLabel";

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  return (
    <main>
      <div className="mb-6">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">
          ← На главную
        </Link>
      </div>
      <header className="border-b border-[var(--border)] pb-8">
        <p className="text-xs text-[var(--muted)]">Урок {lesson.id}</p>
        <h1 className="mt-2 text-3xl font-bold text-[var(--text)]">{lesson.title.ru}</h1>
        <p className="mt-1 text-lg text-[var(--muted)]">{lesson.title.lt}</p>
        <LessonProgressLabel slug={lesson.slug} />
        <div className="mt-4 max-w-2xl space-y-2 text-sm text-[var(--muted)]">
          <p className="font-semibold text-[var(--text)]">Цели (RU)</p>
          <ul className="list-disc space-y-1 pl-5">
            {lesson.objectivesRu.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="pt-2 font-semibold text-[var(--text)]">Грамматика (план)</p>
          <ul className="list-disc space-y-1 pl-5">
            {lesson.grammarTopicsRu.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p className="pt-2 font-semibold text-[var(--text)]">Лексика (темы)</p>
          <ul className="list-disc space-y-1 pl-5">
            {lesson.vocabThemesRu.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </header>
      <section className="mt-8">
        <h2 className="text-lg font-semibold text-[var(--text)]">Разделы</h2>
        <LessonNav lesson={lesson} />
      </section>
    </main>
  );
}
