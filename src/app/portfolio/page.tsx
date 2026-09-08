import type { Metadata } from 'next';
import { ShowcaseSection } from '@/components/home/ShowcaseSection';
import { SITE_CONFIG } from '@/data/siteData';
import { generateBreadcrumbJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Galería de Dashboards y Cuadros de Mando | Portfolio Power BI & Looker',
  description: 'Explora ejemplos reales de cuadros de mando desarrollados para ventas, finanzas, eCommerce, operaciones y RRHH con Power BI, Looker Studio y Tableau.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/portfolio`,
  },
  openGraph: {
    title: 'Portfolio de Dashboards | PowerDashboard.es',
    description: 'Galería de cuadros de mando interactivos por sector.',
    url: `${SITE_CONFIG.url}/portfolio`,
  },
};

export default function PortfolioPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Dashboards & Portfolio', url: '/portfolio' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="pt-28 bg-slate-950 min-h-screen">
        <ShowcaseSection />
      </div>
    </>
  );
}
