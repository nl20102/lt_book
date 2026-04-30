"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { LessonSection } from "@/lib/lessons/types";

const STORAGE_KEY = "lt-progress";

const ALL_SECTIONS: LessonSection[] = [
  "dialogues",
  "vocabulary",
  "grammar",
  "exercises",
  "listening",
  "reading",
];

export type ProgressState = {
  /** lesson slug -> set of completed section ids */
  sections: Record<string, Partial<Record<LessonSection, boolean>>>;
};

function readProgress(): ProgressState {
  if (typeof window === "undefined") return { sections: {} };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { sections: {} };
    const parsed = JSON.parse(raw) as ProgressState;
    if (!parsed || typeof parsed !== "object" || !parsed.sections) {
      return { sections: {} };
    }
    return parsed;
  } catch {
    return { sections: {} };
  }
}

function writeProgress(state: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>({ sections: {} });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(readProgress());
    setHydrated(true);
  }, []);

  const markSectionComplete = useCallback((lessonSlug: string, section: LessonSection) => {
    setState((prev) => {
      const next: ProgressState = {
        sections: {
          ...prev.sections,
          [lessonSlug]: {
            ...prev.sections[lessonSlug],
            [section]: true,
          },
        },
      };
      writeProgress(next);
      return next;
    });
  }, []);

  const isSectionComplete = useCallback(
    (lessonSlug: string, section: LessonSection) => {
      return Boolean(state.sections[lessonSlug]?.[section]);
    },
    [state.sections],
  );

  const lessonProgressFraction = useCallback(
    (lessonSlug: string) => {
      const done = state.sections[lessonSlug];
      if (!done) return 0;
      const count = ALL_SECTIONS.filter((s) => done[s]).length;
      return count / ALL_SECTIONS.length;
    },
    [state.sections],
  );

  const resetAll = useCallback(() => {
    const empty: ProgressState = { sections: {} };
    setState(empty);
    writeProgress(empty);
  }, []);

  return useMemo(
    () => ({
      hydrated,
      markSectionComplete,
      isSectionComplete,
      lessonProgressFraction,
      resetAll,
      state,
    }),
    [hydrated, markSectionComplete, isSectionComplete, lessonProgressFraction, resetAll, state],
  );
}
