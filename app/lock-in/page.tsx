import Nav from "@/components/lock-in/Nav";
import Hero from "@/components/lock-in/Hero";
import Features from "@/components/lock-in/Features";
import SocialProof from "@/components/lock-in/SocialProof";
import Pricing from "@/components/lock-in/Pricing";
import Faq from "@/components/lock-in/Faq";
import Cta from "@/components/lock-in/Cta";
import Footer from "@/components/lock-in/Footer";

export default function LockInPage() {
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
