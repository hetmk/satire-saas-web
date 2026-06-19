import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "gatekeep — taste, kept",
  description:
    "gatekeep hides the good things you find from your friends, so you remain the one with taste. The anti-recommendation engine. If everyone knows, it's over.",
};

export default function GatekeepLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${syne.variable} ${outfit.variable} min-h-screen bg-gk-bg font-gk-body text-gk-ink`}
    >
      {children}
    </div>
  );
}
