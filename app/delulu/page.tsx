import Nav from "@/components/delulu/Nav";
import Hero from "@/components/delulu/Hero";
import Features from "@/components/delulu/Features";
import SocialProof from "@/components/delulu/SocialProof";
import Pricing from "@/components/delulu/Pricing";
import Faq from "@/components/delulu/Faq";
import Cta from "@/components/delulu/Cta";
import Footer from "@/components/delulu/Footer";

export default function DeluluPage() {
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
