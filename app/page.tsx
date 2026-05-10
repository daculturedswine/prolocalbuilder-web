import { Nav } from "@/components/Nav";
import { HeroEditorial } from "@/components/HeroEditorial";
import { BuildForCalls } from "@/components/BuildForCalls";
import { Pricing } from "@/components/Pricing";
import { PricingCompare } from "@/components/PricingCompare";
import { AgencyMath } from "@/components/AgencyMath";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { NoFakeProof } from "@/components/NoFakeProof";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip pb-16 sm:pb-0">
        <HeroEditorial />
        <BuildForCalls />
        <AgencyMath />
        <Pricing />
        <PricingCompare />
        <ProcessTimeline />
        <ServiceAreaSection />
        <NoFakeProof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
