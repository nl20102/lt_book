import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson } from "@/lib/lessons";
import { LESSON_SECTIONS, type LessonSection } from "@/lib/lessons/types";
import { SECTION_LABELS_RU } from "@/lib/strings";
import { LessonSectionBody } from "@/components/LessonSectionBody";

function isSection(s: string): s is LessonSection {
  return (LESSON_SECTIONS as string[]).includes(s);
}

export default async function LessonSectionPage({
  params,
}: {
  params: Promise<{ slug: string; section: string }>;
}) {
  const { slug, section } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  if (!isSection(section)) notFound();

  return (
    <main>
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <Link href="/" className="text-[var(--muted)] hover:text-[var(--text)]">
          Главная
        </Link>
        <span className="text-[var(--muted)]">/</span>
        <Link href={`/lessons/${lesson.slug}`} className="text-[var(--muted)] hover:text-[var(--text)]">
          {lesson.title.ru}
        </Link>
        <span className="text-[var(--muted)]">/</span>
        <span className="text-[var(--text)]">{SECTION_LABELS_RU[section]}</span>
      </div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--text)]">{SECTION_LABELS_RU[section]}</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          {lesson.title.lt} — {lesson.title.ru}
        </p>
      </header>
      <LessonSectionBody lesson={lesson} section={section} />
    </main>
  );
}
