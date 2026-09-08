import type { Metadata } from 'next';
import { PricingSection } from '@/components/home/PricingSection';
import { RoiCalculator } from '@/components/home/RoiCalculator';
import { FaqSection } from '@/components/home/FaqSection';
import { SITE_CONFIG } from '@/data/siteData';
import { generateBreadcrumbJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Precios y Tarifas de Cuadros de Mando y Business Intelligence',
  description: 'Tarifas transparentes para proyectos de Power BI, Looker Studio y consultoría de Business Intelligence en España. Sin costes ocultos.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/precios`,
  },
  openGraph: {
    title: 'Precios y Planes BI | PowerDashboard.es',
    description: 'Tarifas de consultoría y desarrollo de cuadros de mando.',
    url: `${SITE_CONFIG.url}/precios`,
  },
};

export default function PreciosPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Precios y Tarifas', url: '/precios' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="pt-28 bg-transparent min-h-screen">
        <PricingSection />
        <RoiCalculator />
        <FaqSection />
      </div>
    </>
  );
}
