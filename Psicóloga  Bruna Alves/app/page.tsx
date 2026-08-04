import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { Hero } from "@/components/sections/hero";
import { TrustBand } from "@/components/sections/trust-band";
import { About } from "@/components/sections/about";
import { Approaches } from "@/components/sections/approaches";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Modalities } from "@/components/sections/modalities";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustBand />
        <About />
        <Approaches />
        <HowItWorks />
        <Modalities />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
