import Nav from "@/components/ghosted/Nav";
import Hero from "@/components/ghosted/Hero";
import Features from "@/components/ghosted/Features";
import SocialProof from "@/components/ghosted/SocialProof";
import Pricing from "@/components/ghosted/Pricing";
import Faq from "@/components/ghosted/Faq";
import Cta from "@/components/ghosted/Cta";
import Footer from "@/components/ghosted/Footer";

export default function GhostedPage() {
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
