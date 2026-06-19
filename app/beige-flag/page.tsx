import Nav from "@/components/beige-flag/Nav";
import Hero from "@/components/beige-flag/Hero";
import Features from "@/components/beige-flag/Features";
import SocialProof from "@/components/beige-flag/SocialProof";
import Pricing from "@/components/beige-flag/Pricing";
import Faq from "@/components/beige-flag/Faq";
import Cta from "@/components/beige-flag/Cta";
import Footer from "@/components/beige-flag/Footer";

export default function BeigeFlagPage() {
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
