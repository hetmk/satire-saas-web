import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LiveLedger from "@/components/LiveLedger";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tithe — mindful spending for your attention",
  description:
    "Tithe charges you a small, conscious amount every time you open Instagram. Reclaim your attention, one transaction at a time.",
};

export default function TithePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveLedger />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
