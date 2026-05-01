"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { AUDIO_MANIFEST } from "@/lib/generated/audio-manifest";
import { playLessonAudio, stopLessonAudio } from "@/lib/audio-playback";

type Props = {
  src: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  /** When true, render as plain button (e.g. dialogue line) */
  asText?: boolean;
  textClassName?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "disabled">;

export function AudioPlayButton({
  src,
  children,
  variant = "secondary",
  className = "",
  asText = false,
  textClassName = "",
  ...rest
}: Props) {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  const available = AUDIO_MANIFEST.has(src);

  useEffect(() => {
    const onStop = () => {
      setPlaying(false);
      ref.current = null;
    };
    window.addEventListener("lt-lesson-audio-stop", onStop);
    return () => window.removeEventListener("lt-lesson-audio-stop", onStop);
  }, []);

  const toggle = useCallback(() => {
    if (!available) return;
    setError(false);
    if (playing && ref.current) {
      ref.current.pause();
      ref.current = null;
      stopLessonAudio();
      setPlaying(false);
      return;
    }
    stopLessonAudio();
    const el = playLessonAudio(src);
    ref.current = el;
    setPlaying(true);
    el.onerror = () => {
      setError(true);
      setPlaying(false);
      ref.current = null;
    };
    el.onended = () => {
      setPlaying(false);
      ref.current = null;
    };
  }, [available, playing, src]);

  if (!available) return null;

  const title = error ? "Не удалось загрузить аудио (перегенерируйте MP3)" : undefined;

  if (asText) {
    return (
      <button
        type="button"
        title={title}
        onClick={toggle}
        className={`text-left font-medium text-[var(--text)] hover:text-[var(--accent)] ${textClassName} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <Button variant={variant} title={title} className={className} onClick={toggle} {...rest}>
      {error ? "Ошибка" : playing ? "Стоп" : children ?? "▶"}
    </Button>
  );
}
