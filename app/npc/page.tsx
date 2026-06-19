import Nav from "@/components/npc/Nav";
import Hero from "@/components/npc/Hero";
import Features from "@/components/npc/Features";
import SocialProof from "@/components/npc/SocialProof";
import Pricing from "@/components/npc/Pricing";
import Faq from "@/components/npc/Faq";
import Cta from "@/components/npc/Cta";
import Footer from "@/components/npc/Footer";

export default function NpcPage() {
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
