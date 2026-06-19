import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Streakr — don't break the streak",
  description:
    "Streakr tracks a streak for everything you do, then makes breaking it feel like a death in the family. Loss aversion, gamified, monetized. Keep the flame alive.",
};

export default function StreakrLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${archivo.variable} ${figtree.variable} min-h-screen bg-st-bg font-st-body text-st-ink`}
    >
      {children}
    </div>
  );
}
