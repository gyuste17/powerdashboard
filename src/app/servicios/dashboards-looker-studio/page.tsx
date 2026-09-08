import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PieChart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Globe,
  Share2
} from 'lucide-react';
import { SERVICES_DATA, SITE_CONFIG } from '@/data/siteData';
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/lib/jsonLd';

const service = SERVICES_DATA.find(s => s.id === 'looker-studio')!;

export const metadata: Metadata = {
  title: 'Dashboards en Google Looker Studio | Analítica, Marketing y eCommerce',
  description: 'Creación de cuadros de mando ágiles y visuales en Looker Studio para marketing digital, GA4, Shopify, Meta Ads y Google Ads. Sin costes de licencias.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios/dashboards-looker-studio`,
  },
  openGraph: {
    title: 'Dashboards Google Looker Studio | PowerDashboard.es',
    description: 'Centraliza tus métricas de marketing, eCommerce y analítica web en Looker Studio.',
    url: `${SITE_CONFIG.url}/servicios/dashboards-looker-studio`,
  },
};

export default function LookerStudioServicePage() {
  const serviceJsonLd = generateServiceJsonLd(service);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/#servicios' },
    { name: 'Dashboards Looker Studio', url: '/servicios/dashboards-looker-studio' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="pt-32 pb-20 bg-slate-950 min-h-screen text-slate-100">
        {/* Breadcrumb Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-amber-400">Servicios</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Google Looker Studio</span>
          </div>
        </div>

        {/* Hero Service */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <PieChart className="w-3.5 h-3.5" />
                Google Looker Studio
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.heroSubheadline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contacto?servicio=looker-studio"
                  className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Pedir Dashboard Looker Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/portfolio?category=Marketing"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm transition-colors"
                >
                  Ver Ejemplos de Marketing
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-cyan-400">
                <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
                <span><strong>Impacto estimado:</strong> {service.expectedRoi}</span>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/dashboards/Informe ventas.png"
                    alt="Ejemplo Dashboard Looker Studio"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-cyan-500 text-slate-950 font-bold text-xs">
                    0€ en Licencias Adicionales
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-white text-base">Recomendado para:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.idealFor.map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 text-xs text-slate-300 border border-slate-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-800 pt-4">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400">Conectores soportados</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ¿Qué incluye el servicio de Looker Studio?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Paneles visualmente limpios, intuitivos y compartibles con un enlace seguro o incrustados en tu intranet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-white text-sm">Entregable {idx + 1}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{deliv}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
