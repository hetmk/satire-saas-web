import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "delulu — manifestation that gaslights you into confidence",
  description:
    "delulu is the solulu. Set goals so unrealistic your brain has no choice but to believe them. Manifestation-as-a-service for the chronically optimistic.",
};

export default function DeluluLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fredoka.variable} ${poppins.variable} min-h-screen bg-dl-bg font-dl-body text-dl-ink`}
    >
      {children}
    </div>
  );
}
