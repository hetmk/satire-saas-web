import Nav from "@/components/mid/Nav";
import Hero from "@/components/mid/Hero";
import Features from "@/components/mid/Features";
import SocialProof from "@/components/mid/SocialProof";
import Pricing from "@/components/mid/Pricing";
import Faq from "@/components/mid/Faq";
import Cta from "@/components/mid/Cta";
import Footer from "@/components/mid/Footer";

export default function MidPage() {
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
