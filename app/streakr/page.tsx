import Nav from "@/components/streakr/Nav";
import Hero from "@/components/streakr/Hero";
import Features from "@/components/streakr/Features";
import SocialProof from "@/components/streakr/SocialProof";
import Pricing from "@/components/streakr/Pricing";
import Faq from "@/components/streakr/Faq";
import Cta from "@/components/streakr/Cta";
import Footer from "@/components/streakr/Footer";

export default function StreakrPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
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
