import { Navbar }           from "@/components/sections/Navbar";
import { HeroSection }      from "@/components/sections/HeroSection";
import { ProductShowcase }  from "@/components/sections/ProductShowcase";
import { PuresenseSection } from "@/components/sections/PuresenseSection";
import { FeatureGrid }      from "@/components/sections/FeatureGrid";
import { WhySkyliqua }      from "@/components/sections/WhySkyliqua";
import { CommercialShowcase } from "@/components/sections/CommercialShowcase";
import { CtaSection }       from "@/components/sections/CtaSection";
import { Footer }           from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductShowcase />
        <PuresenseSection />
        <FeatureGrid />
        <WhySkyliqua />
        <CommercialShowcase />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
