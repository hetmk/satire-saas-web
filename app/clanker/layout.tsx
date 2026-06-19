import type { Metadata } from "next";
import { Space_Mono, IBM_Plex_Sans } from "next/font/google";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "clanker — detect the bots (it's you)",
  description:
    "clanker scans any text for signs of artificial intelligence. In testing, it flagged 98% of humans as clankers. The dead internet was inside you all along.",
};

export default function ClankerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${spaceMono.variable} ${plexSans.variable} min-h-screen bg-ck-bg font-ck-body text-ck-ink`}
    >
      {children}
    </div>
  );
}
