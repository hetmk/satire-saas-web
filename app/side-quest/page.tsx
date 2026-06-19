import Nav from "@/components/side-quest/Nav";
import Hero from "@/components/side-quest/Hero";
import Features from "@/components/side-quest/Features";
import SocialProof from "@/components/side-quest/SocialProof";
import Pricing from "@/components/side-quest/Pricing";
import Faq from "@/components/side-quest/Faq";
import Cta from "@/components/side-quest/Cta";
import Footer from "@/components/side-quest/Footer";

export default function SideQuestPage() {
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
