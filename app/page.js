import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import FounderSection from "@/components/FounderSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Showcase />
      <HowItWorks />
      <WhyUs />
      <FounderSection />
      <FAQ />
      <CTASection />
    </>
  );
}