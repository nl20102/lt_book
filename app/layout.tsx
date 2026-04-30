import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/components/ProgressProvider";
import { TtsPrime } from "@/components/TtsPrime";
import { APP_TITLE } from "@/lib/strings";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "Интерактивные уроки литовского для русскоязычных",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen antialiased">
        <ProgressProvider>
          <TtsPrime />
          <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>
        </ProgressProvider>
      </body>
    </html>
  );
}
