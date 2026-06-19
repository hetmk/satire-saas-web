import type { Metadata } from "next";
import { Schibsted_Grotesk, Inter_Tight, JetBrains_Mono } from "next/font/google";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "lock in — focus, witnessed by strangers",
  description:
    "lock in livestreams your screen to strangers who judge you into productivity. Body-doubling, but make it public accountability with consequences.",
};

export default function LockInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${schibsted.variable} ${interTight.variable} ${jetbrains.variable} min-h-screen bg-li-bg font-li-body text-li-ink`}
    >
      {children}
    </div>
  );
}
