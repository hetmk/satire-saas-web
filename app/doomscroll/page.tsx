import Nav from "@/components/doomscroll/Nav";
import Hero from "@/components/doomscroll/Hero";
import Features from "@/components/doomscroll/Features";
import SocialProof from "@/components/doomscroll/SocialProof";
import Pricing from "@/components/doomscroll/Pricing";
import Faq from "@/components/doomscroll/Faq";
import Cta from "@/components/doomscroll/Cta";
import Footer from "@/components/doomscroll/Footer";

export default function DoomscrollPage() {
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
