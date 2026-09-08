import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle,
  FileSpreadsheet,
  Check
} from 'lucide-react';
import { SERVICES_DATA, SITE_CONFIG } from '@/data/siteData';
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/lib/jsonLd';

const service = SERVICES_DATA.find(s => s.id === 'migracion-excel')!;

export const metadata: Metadata = {
  title: 'Migración de Excel a Power BI & Automatización de Reportes',
  description: 'Automatiza tus hojas de Excel complejas. Eliminamos tareas manuales repetitivas y fórmulas rotas migrando tus informes a cuadros de mando interactivos y automáticos.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios/migracion-excel-a-power-bi`,
  },
  openGraph: {
    title: 'Migración de Excel a Power BI | PowerDashboard.es',
    description: 'Transforma hojas de cálculo manuales en flujos analíticos 100% automatizados.',
    url: `${SITE_CONFIG.url}/servicios/migracion-excel-a-power-bi`,
  },
};

export default function ExcelMigrationServicePage() {
  const serviceJsonLd = generateServiceJsonLd(service);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/#servicios' },
    { name: 'Migración Excel a Power BI', url: '/servicios/migracion-excel-a-power-bi' },
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
            <span className="text-amber-400 font-medium">Migración Excel a Power BI</span>
          </div>
        </div>

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <RefreshCw className="w-3.5 h-3.5" />
                Automatización de Datos
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.heroSubheadline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contacto?servicio=migracion-excel"
                  className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Auditar mis Excels Actuales</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#calculadora-roi"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm transition-colors"
                >
                  Calcular Ahorro en Horas
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-emerald-400">
                <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
                <span><strong>Impacto directo:</strong> {service.expectedRoi}</span>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/dashboards/Contabilidad.png"
                    alt="De Excel a Dashboard Financiero"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-emerald-500 text-slate-950 font-bold text-xs">
                    0 Copiar y Pegar Manual
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Riesgos comunes de seguir con Excel manual:
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-start gap-1.5">• Fórmulas manuales con errores inadvertidos.</li>
                    <li className="flex items-start gap-1.5">• Versiones desincronizadas entre departamentos.</li>
                    <li className="flex items-start gap-1.5">• Archivos pesados que se corrompen sin aviso.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Antes vs Después de la Migración
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-rose-400 text-lg">❌ Situación Actual (Excel Manual)</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• 4 a 10 horas cada lunes extrayendo y limpiando ficheros CSV.</li>
                <li>• Si la persona clave está de vacaciones o se marcha, nadie sabe armar el informe.</li>
                <li>• Gráficos estáticos sin posibilidad de filtrar interactivamente.</li>
                <li>• Datos que llegan tarde a las reuniones de dirección.</li>
              </ul>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-900/40 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-emerald-400 text-lg">✅ Con Power Dashboard</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• 0 horas: Las fuentes se actualizan automáticamente de forma programada.</li>
                <li>• Modelo centralizado y documentado bajo la seguridad corporativa.</li>
                <li>• Paneles interactivos con drill-down, filtros y vistas responsive.</li>
                <li>• Decisiones basadas en datos reales al segundo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
