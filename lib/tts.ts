"use client";

let warnedNoVoice = false;

export function isSpeechSynthesisAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speakLt(text: string): void {
  if (!isSpeechSynthesisAvailable()) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "lt-LT";
  u.rate = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const lt = voices.find((v) => v.lang?.toLowerCase().startsWith("lt"));
  if (lt) u.voice = lt;
  else if (!warnedNoVoice) {
    warnedNoVoice = true;
    console.warn("Lithuanian TTS voice not found; browser default may mispronounce.");
  }
  window.speechSynthesis.speak(u);
}

/** Some browsers load voices asynchronously */
export function primeSpeechVoices(): void {
  if (!isSpeechSynthesisAvailable()) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
