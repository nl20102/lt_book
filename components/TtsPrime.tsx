"use client";

import { useEffect } from "react";
import { primeSpeechVoices } from "@/lib/tts";

export function TtsPrime() {
  useEffect(() => {
    primeSpeechVoices();
  }, []);
  return null;
}
