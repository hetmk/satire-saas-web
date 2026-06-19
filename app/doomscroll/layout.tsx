import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-ds",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "doomscroll+ — the feed, perfected",
  description:
    "Premium infinite scroll. No content. No outrage. No reason. Just the pure, uninterrupted motion of the scroll. Finally, nothing to see.",
};

export default function DoomscrollLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${bricolage.variable} ${inter.variable} min-h-screen bg-ds-bg font-ds-body text-ds-ink`}
    >
      {children}
    </div>
  );
}
