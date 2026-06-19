import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hindsight — your post-mortem, before the mortem",
  description:
    "Hindsight writes your startup's failure analysis before you start, so you can skip the 18 months. Fail fast. Fail first. Fail now.",
};

export default function HindsightLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${hanken.variable} ${plexMono.variable} min-h-screen bg-h-bg font-h-body text-h-ink`}
    >
      {children}
    </div>
  );
}
