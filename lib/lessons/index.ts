import { lesson01 } from "@/lib/lessons/lesson-01";
import { lesson02 } from "@/lib/lessons/lesson-02";
import { lesson03 } from "@/lib/lessons/lesson-03";
import { lesson04 } from "@/lib/lessons/lesson-04";
import { lesson05 } from "@/lib/lessons/lesson-05";
import { lesson06 } from "@/lib/lessons/lesson-06";
import { lesson07 } from "@/lib/lessons/lesson-07";
import { lesson08 } from "@/lib/lessons/lesson-08";
import { lesson09 } from "@/lib/lessons/lesson-09";
import { lesson10 } from "@/lib/lessons/lesson-10";
import { lesson11 } from "@/lib/lessons/lesson-11";
import { lesson12 } from "@/lib/lessons/lesson-12";
import type { Lesson } from "@/lib/lessons/types";

export * from "@/lib/lessons/types";

export const LESSONS: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
];

export function getLesson(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}
