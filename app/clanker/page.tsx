import Nav from "@/components/clanker/Nav";
import Hero from "@/components/clanker/Hero";
import Features from "@/components/clanker/Features";
import SocialProof from "@/components/clanker/SocialProof";
import Pricing from "@/components/clanker/Pricing";
import Faq from "@/components/clanker/Faq";
import Cta from "@/components/clanker/Cta";
import Footer from "@/components/clanker/Footer";

export default function ClankerPage() {
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
