import { BenefitStrip } from "@/components/BenefitStrip";
import { CategoriesSection } from "@/components/CategoriesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Newsletter } from "@/components/Newsletter";
import { NewsSection } from "@/components/NewsSection";
import { TrustFactorySection } from "@/components/TrustFactorySection";
import { ValueChain } from "@/components/ValueChain";
import { MotionReveal } from "@/components/MotionReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitStrip />
        <CategoriesSection />
        <ValueChain />
        <MotionReveal>
          <TrustFactorySection />
        </MotionReveal>
        <MotionReveal>
          <NewsSection />
        </MotionReveal>
        <MotionReveal>
          <Newsletter />
        </MotionReveal>
      </main>
      <Footer />
    </>
  );
}
