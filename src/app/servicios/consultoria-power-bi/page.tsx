import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Users, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { SERVICES_DATA, SITE_CONFIG } from '@/data/siteData';
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/lib/jsonLd';

const service = SERVICES_DATA.find(s => s.id === 'power-bi')!;

export const metadata: Metadata = {
  title: 'Consultoría Power BI & Microsoft Fabric en España | Cuadros de Mando',
  description: 'Consultoría especializada en Microsoft Power BI, modelado relacional DAX, Power Query y Microsoft Fabric. Convierte tus datos en decisiones ejecutivas en tiempo real.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios/consultoria-power-bi`,
  },
  openGraph: {
    title: 'Consultor Power BI & Microsoft Fabric | PowerDashboard.es',
    description: 'Diseño, modelado y despliegue de cuadros de mando profesionales en Power BI.',
    url: `${SITE_CONFIG.url}/servicios/consultoria-power-bi`,
  },
};

export default function PowerBiServicePage() {
  const serviceJsonLd = generateServiceJsonLd(service);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/#servicios' },
    { name: 'Consultoría Power BI', url: '/servicios/consultoria-power-bi' },
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
            <span className="text-amber-400 font-medium">Consultoría Power BI</span>
          </div>
        </div>

        {/* Hero Service */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                Microsoft Power BI & Fabric
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.heroSubheadline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contacto?servicio=power-bi"
                  className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Solicitar Presupuesto Power BI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/portfolio?category=Ventas"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm transition-colors"
                >
                  Ver Cuadros de Mando
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-emerald-400">
                <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
                <span><strong>Impacto estimado:</strong> {service.expectedRoi}</span>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/dashboards/MAT.png"
                    alt="Ejemplo Cuadro de Mando Power BI"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-bold text-xs">
                    Modelo DAX Optimizado
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-white text-base">Ideal para:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.idealFor.map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 text-xs text-slate-300 border border-slate-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-800 pt-4">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400">Herramientas y Tecnologías</h3>
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

        {/* Deliverables Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ¿Qué incluye el servicio de Consultoría Power BI?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Un proceso integral llave en mano: desde la ingesta de datos hasta la formación de usuarios finales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-white text-sm">Fase {idx + 1}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{deliv}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-amber-500/30 rounded-2xl p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">
              ¿Tienes un proyecto de Power BI en mente?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Revisamos tus fuentes actuales y te enviamos un presupuesto cerrado con entregables exactos en 24-48 horas.
            </p>
            <div className="pt-2">
              <Link
                href="/contacto?servicio=power-bi"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md"
              >
                <span>Solicitar Consulta Técnica Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
