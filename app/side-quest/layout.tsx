import type { Metadata } from "next";
import { Baloo_2, Mulish, Press_Start_2P } from "next/font/google";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

const press = Press_Start_2P({
  variable: "--font-press",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "side quest — every chore is a quest now",
  description:
    "side quest turns your boring errands into XP, loot, and quests so your brain finally agrees to do them. touch grass, +40 XP.",
};

export default function SideQuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${baloo.variable} ${mulish.variable} ${press.variable} min-h-screen bg-sq-bg font-sq-body text-sq-ink`}
    >
      {children}
    </div>
  );
}
