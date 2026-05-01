"use client";

let current: HTMLAudioElement | null = null;

function notifyGlobalStop(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("lt-lesson-audio-stop"));
  }
}

export function stopLessonAudio(): void {
  if (current) {
    current.pause();
    current.src = "";
    current = null;
  }
  notifyGlobalStop();
}

export function playLessonAudio(src: string): HTMLAudioElement {
  stopLessonAudio();
  const el = new Audio(src);
  current = el;
  el.addEventListener(
    "ended",
    () => {
      if (current === el) current = null;
      notifyGlobalStop();
    },
    { once: true },
  );
  void el.play();
  return el;
}
