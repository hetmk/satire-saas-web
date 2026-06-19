import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "aura — the points system for your whole personality",
  description:
    "aura tracks your aura points in real time. Gain aura by being unbothered. Lose it for cringe. You just lost 5,000 for reading this.",
};

export default function AuraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${sora.variable} ${manrope.variable} min-h-screen bg-au-bg font-au-body text-au-ink`}
    >
      {children}
    </div>
  );
}
