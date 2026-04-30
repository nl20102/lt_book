import { lesson01 } from "@/lib/lessons/lesson-01";
import { lesson02 } from "@/lib/lessons/lesson-02";
import { lesson03 } from "@/lib/lessons/lesson-03";
import {
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
} from "@/lib/lessons/lesson-04-12";
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
