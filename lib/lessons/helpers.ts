import type { Dialogue } from "@/lib/lessons/types";

export function dialogue(
  id: string,
  titleLt: string,
  titleRu: string,
  lines: { speaker: string; lt: string; ru: string }[],
): Dialogue {
  return { id, title: { lt: titleLt, ru: titleRu }, lines };
}
