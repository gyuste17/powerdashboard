import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { TechLogos } from "@/components/home/TechLogos";
import { generateFaqJsonLd } from "@/lib/jsonLd";

const ChaosToControl = dynamic(
  () => import("@/components/home/ChaosToControl").then((mod) => mod.ChaosToControl)
);

const ShowcaseSection = dynamic(
  () => import("@/components/home/ShowcaseSection").then((mod) => mod.ShowcaseSection)
);

const HowItWorks = dynamic(
  () => import("@/components/home/HowItWorks").then((mod) => mod.HowItWorks)
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

      {/* 1. Hero + framed flagship dashboard */}
      <Hero />

      {/* 2. Technology ecosystem */}
      <TechLogos />

      {/* 3. Problem vs solution */}
      <ChaosToControl />

      {/* 4. Real dashboards gallery */}
      <ShowcaseSection />

      {/* 5. Process in 3 steps + services (#servicios) */}
      <HowItWorks />

      {/* 6. Founder & authority */}
      <FounderSection />

      {/* 7. Transparent pricing */}
      <PricingSection />

      {/* 8. FAQs */}
      <FaqSection />

      {/* 9. Final CTA */}
      <CtaSection />
    </>
  );
}
