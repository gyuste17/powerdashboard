import { Hero } from "@/components/home/Hero";
import { InteractiveDashboardDemo } from "@/components/dashboard-demo/InteractiveDashboardDemo";
import { RoiCalculator } from "@/components/home/RoiCalculator";
import { ServiceMatrix } from "@/components/home/ServiceMatrix";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { FounderSection } from "@/components/home/FounderSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";
import { generateFaqJsonLd } from "@/lib/jsonLd";

export default function HomePage() {
  const faqJsonLd = generateFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Live Interactive Dashboard Showcase right under Hero */}
      <section className="py-8 sm:py-16 bg-transparent px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 sm:-mt-12 relative z-20">
        <InteractiveDashboardDemo />
      </section>

      {/* 3. Core Services & Topical Authority */}
      <ServiceMatrix />

      {/* 4. Interactive ROI & Savings Calculator */}
      <RoiCalculator />

      {/* 5. Real Dashboards Showcase & Categorized Portfolio */}
      <ShowcaseSection />

      {/* 6. Founder & E-E-A-T Section (Guillermo Yuste) */}
      <FounderSection />

      {/* 7. Transparent Pricing */}
      <PricingSection />

      {/* 8. FAQs for GEO & Search Intent */}
      <FaqSection />

      {/* 9. Final High-Conversion CTA */}
      <CtaSection />
    </>
  );
}
