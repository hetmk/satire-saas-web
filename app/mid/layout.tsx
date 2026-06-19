import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "mid — the review app that already decided",
  description:
    "mid rates everything mid out of 5, so you never have to form an opinion again. Restaurants? Mid. The new album? Mid. This app? Mid. You're welcome.",
};

export default function MidLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${anton.variable} ${workSans.variable} min-h-screen bg-md-bg font-md-body text-md-ink`}
    >
      {children}
    </div>
  );
}
