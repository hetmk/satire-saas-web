import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghosted — the CRM that stops replying for you",
  description:
    "Ghosted is a relationship CRM that quietly, politely stops replying to people on your behalf. Inbox zero, but make it emotional. They'll figure it out.",
};

export default function GhostedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${jakarta.variable} ${publicSans.variable} min-h-screen bg-gh-bg font-gh-body text-gh-ink`}
    >
      {children}
    </div>
  );
}
