import Nav from "@/components/gatekeep/Nav";
import Hero from "@/components/gatekeep/Hero";
import Features from "@/components/gatekeep/Features";
import SocialProof from "@/components/gatekeep/SocialProof";
import Pricing from "@/components/gatekeep/Pricing";
import Faq from "@/components/gatekeep/Faq";
import Cta from "@/components/gatekeep/Cta";
import Footer from "@/components/gatekeep/Footer";

export default function GatekeepPage() {
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
