import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { ServiceMatrix } from "@/components/home/ServiceMatrix";
import { generateFaqJsonLd } from "@/lib/jsonLd";

const InteractiveDashboardDemo = dynamic(
  () => import("@/components/dashboard-demo/InteractiveDashboardDemo").then((mod) => mod.InteractiveDashboardDemo),
  {
    loading: () => <div className="w-full h-[500px] rounded-2xl bg-slate-900/40 animate-pulse border border-white/5" />,
  }
);

const RoiCalculator = dynamic(
  () => import("@/components/home/RoiCalculator").then((mod) => mod.RoiCalculator),
  {
    loading: () => <div className="w-full h-[400px] rounded-2xl bg-slate-900/40 animate-pulse" />,
  }
);

const ShowcaseSection = dynamic(
  () => import("@/components/home/ShowcaseSection").then((mod) => mod.ShowcaseSection)
);

const FounderSection = dynamic(
  () => import("@/components/home/FounderSection").then((mod) => mod.FounderSection)
);

const PricingSection = dynamic(
  () => import("@/components/home/PricingSection").then((mod) => mod.PricingSection)
);

const FaqSection = dynamic(
  () => import("@/components/home/FaqSection").then((mod) => mod.FaqSection)
);

const CtaSection = dynamic(
  () => import("@/components/home/CtaSection").then((mod) => mod.CtaSection)
);

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
