import Nav from "@/components/hindsight/Nav";
import Hero from "@/components/hindsight/Hero";
import Features from "@/components/hindsight/Features";
import SocialProof from "@/components/hindsight/SocialProof";
import Pricing from "@/components/hindsight/Pricing";
import Faq from "@/components/hindsight/Faq";
import Cta from "@/components/hindsight/Cta";
import Footer from "@/components/hindsight/Footer";

export default function HindsightPage() {
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
