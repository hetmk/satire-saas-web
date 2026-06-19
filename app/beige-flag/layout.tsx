import type { Metadata } from "next";
import { Quicksand, Nunito_Sans } from "next/font/google";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "beige flag — your situationship, finally diagnosed",
  description:
    "Paste their texts. beige flag tells you whether it's a red flag, a green flag, or — most likely — a beige flag. Closure, but make it an algorithm.",
};

export default function BeigeFlagLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${quicksand.variable} ${nunitoSans.variable} min-h-screen bg-bf-bg font-bf-body text-bf-ink`}
    >
      {children}
    </div>
  );
}
