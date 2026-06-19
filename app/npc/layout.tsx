import type { Metadata } from "next";
import { Rubik, DM_Sans } from "next/font/google";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NPC — passive income, zero personality required",
  description:
    "Become a livestream NPC for passive income. We send the gifts, you do the gestures. Ice cream so good. Gang gang. Your dignity, monetized.",
};

export default function NpcLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${rubik.variable} ${dmSans.variable} min-h-screen bg-np-bg font-np-body text-np-ink`}
    >
      {children}
    </div>
  );
}
