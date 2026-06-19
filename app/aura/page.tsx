import Nav from "@/components/aura/Nav";
import Hero from "@/components/aura/Hero";
import Features from "@/components/aura/Features";
import SocialProof from "@/components/aura/SocialProof";
import Pricing from "@/components/aura/Pricing";
import Faq from "@/components/aura/Faq";
import Cta from "@/components/aura/Cta";
import Footer from "@/components/aura/Footer";

export default function AuraPage() {
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
