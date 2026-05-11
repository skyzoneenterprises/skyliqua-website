import { Navbar }           from "@/components/sections/Navbar";
import { HeroSection }      from "@/components/sections/HeroSection";
import { ProductShowcase }  from "@/components/sections/ProductShowcase";
import { PuresenseSection } from "@/components/sections/PuresenseSection";
import { FeatureGrid }      from "@/components/sections/FeatureGrid";
import { WhySkyliqua }      from "@/components/sections/WhySkyliqua";
import { CtaSection }       from "@/components/sections/CtaSection";
import { Footer }           from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />       {/* marquee strip is pinned inside the hero */}
        <ProductShowcase />
        <PuresenseSection />
        <FeatureGrid />
        <WhySkyliqua />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
