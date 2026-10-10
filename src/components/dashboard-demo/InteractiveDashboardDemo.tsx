'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Maximize2,
  Code2,
  Database,
  ArrowRight,
  ShieldCheck,
  Zap,
  Filter,
  X,
  ChevronDown,
  Layers,
  Cpu,
} from 'lucide-react';

/* ── Platform Definitions ────────────────────────────────── */
type PlatformId = 'power-bi' | 'looker-studio' | 'tableau' | 'custom-dashboard';

interface PlatformConfig {
  id: PlatformId;
  name: string;
  brandTitle: string;
  badge: string;
  tagline: string;
  summary: string;
  accent: {
    text: string;
    border: string;
    bg: string;
    glow: string;
    badgeBg: string;
  };
  image: string;
  mockUrl: string;
  specs: {
    sources: string;
    refreshRate: string;
    security: string;
    recommendedFor: string;
  };
  metrics: {
    label: string;
    value: string;
    sub: string;
  }[];
  codeSnippet: {
    title: string;
    language: string;
    code: string;
    explanation: string;
  };
}

const PLATFORMS: PlatformConfig[] = [
  {
    id: 'power-bi',
    name: 'Power BI',
    brandTitle: 'Microsoft Power BI',
    badge: 'Líder Corporativo',
    tagline: 'Modelado Relacional Star Schema & Motor DAX',
    summary:
      'Solución corporativa para comités de dirección, control de P&L, márgenes comerciales y reporting financiero consolidado.',
    accent: {
      text: 'text-amber-700 dark:text-amber-400',
      border: 'border-amber-500/40',
      bg: 'bg-amber-500/10 dark:bg-amber-500/15',
      glow: 'from-amber-500/15 via-yellow-500/10 to-transparent',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30',
    },
    image: '/images/dashboards/MAT.png',
    mockUrl: 'app.powerbi.com/groups/corporativo/reports/p&l-ejecutivo',
    specs: {
      sources: 'SAP ERP, Navision / Business Central, SQL Server, Excel, CRM',
      refreshRate: 'Actualización automática 8x/día o DirectQuery en tiempo real',
      security: 'Row-Level Security (RLS) por país, división o comercial',
      recommendedFor: 'Dirección General, CFOs, Controllers y Equipos Comerciales',
    },
    metrics: [
      { label: 'Facturación YTD', value: '€2.48M', sub: '+16.2% vs presupuesto' },
      { label: 'EBITDA Operativo', value: '24.8%', sub: '+3.1 pts vs año ant.' },
      { label: 'Días Cobro (DSO)', value: '37 días', sub: '-5 días de mejora' },
      { label: 'Velocidad DAX', value: '0.14s', sub: 'Modelos en memoria VertiPaq' },
    ],
    codeSnippet: {
      title: 'Medida DAX: Margen Contributivo con Time Intelligence',
      language: 'DAX',
      code: `Margen Contributivo % = 
VAR _VentasNetas = [Total Facturacion] - [Descuentos Comerciales]
VAR _CostesDirectos = CALCULATE(
    SUM(Costes[CosteMateriales]) + SUM(Costes[LogisticaDirecta]),
    USERELATIONSHIP(Calendario[Fecha], Ventas[FechaOperacion])
)
VAR _MargenAbsoluto = _VentasNetas - _CostesDirectos
RETURN
DIVIDE(_MargenAbsoluto, _VentasNetas, 0)`,
      explanation: 'DAX modular y limpio para máxima velocidad de renderizado en modelos masivos.',
    },
  },
  {
    id: 'looker-studio',
    name: 'Looker Studio',
    brandTitle: 'Google Looker Studio',
    badge: 'Sin Licencias Pro',
    tagline: 'Reporting Ágil para Marketing & eCommerce',
    summary:
      'Paneles dinámicos conectados a Google Analytics 4, Shopify y redes publicitarias para analizar ROAS blended y conversión sin coste mensual de software.',
    accent: {
      text: 'text-cyan-700 dark:text-cyan-400',
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-500/10 dark:bg-cyan-500/15',
      glow: 'from-cyan-500/15 via-sky-500/10 to-transparent',
      badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-300 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/30',
    },
    image: '/images/dashboards/Informe ventas.png',
    mockUrl: 'lookerstudio.google.com/reporting/ecommerce-performance',
    specs: {
      sources: 'Google Analytics 4, Shopify, Meta Ads, Google Ads, BigQuery',
      refreshRate: 'Streaming directo con caché adaptativa de 15 minutos',
      security: 'Permisos granulares mediante cuentas de Google Workspace',
      recommendedFor: 'eCommerce Managers, CMOs, Agencias de Marketing y Startups',
    },
    metrics: [
      { label: 'Blended ROAS', value: '4.85x', sub: '+28.4% eficiencia publicitaria' },
      { label: 'Coste Adquisición (CAC)', value: '€14.20', sub: '-18.5% reducción de coste' },
      { label: 'Conversión Media Web', value: '3.62%', sub: '+0.7 pts vs benchmark' },
      { label: 'Coste Software', value: '0 €/mes', sub: '100% libre de licencias' },
    ],
    codeSnippet: {
      title: 'Query BigQuery: Atribución Multi-Touch de Conversiones',
      language: 'SQL',
      code: `SELECT 
  traffic_source.source AS canal_adquisicion,
  COUNT(DISTINCT user_pseudo_id) AS usuarios_unicos,
  SUM(event_params.value.int_value) AS facturacion_generada,
  SAFE_DIVIDE(SUM(ad_spend), COUNT(DISTINCT purchase_id)) AS cac_efectivo
FROM \`empresa.analytics_ga4.events_*\`
WHERE _TABLE_SUFFIX BETWEEN '20240101' AND '20240930'
GROUP BY 1 ORDER BY facturacion_generada DESC;`,
      explanation: 'Consulta de particionamiento optimizada en BigQuery para carga instantánea.',
    },
  },
  {
    id: 'tableau',
    name: 'Tableau',
    brandTitle: 'Tableau Software',
    badge: 'Visualización Avanzada',
    tagline: 'Analítica Geoespacial & Operaciones Complejas',
    summary:
      'Herramienta de análisis exploratorio para cadenas de suministro, redes de distribución y grandes bases de datos territoriales.',
    accent: {
      text: 'text-indigo-700 dark:text-indigo-400',
      border: 'border-indigo-500/40',
      bg: 'bg-indigo-500/10 dark:bg-indigo-500/15',
      glow: 'from-indigo-500/15 via-purple-500/10 to-transparent',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30',
    },
    image: '/images/dashboards/Tableau.png',
    mockUrl: 'tableau.corporativo.es/#/views/operaciones-logistica',
    specs: {
      sources: 'Snowflake, Databricks, PostgreSQL, AWS Redshift, Oracle',
      refreshRate: 'Tableau Hyper Data Extracts programados o Live Query',
      security: 'Row-Level Security corporativo & Data Masking avanzado',
      recommendedFor: 'Directores de Operaciones, Logística y Supply Chain',
    },
    metrics: [
      { label: 'Cumplimiento OTIF', value: '96.4%', sub: '+4.2 pts entrega a tiempo' },
      { label: 'Lead Time Medio', value: '1.9 días', sub: '-0.8 días optimización' },
      { label: 'Rutas Optimizadas', value: '1,420', sub: 'Ahorro de combustible' },
      { label: 'Precisión GIS', value: '99.8%', sub: 'Capas poligonales de reparto' },
    ],
    codeSnippet: {
      title: 'Fórmula Tableau LOD: Nivel de Detalle Fijo de Productividad',
      language: 'Tableau LOD',
      code: `// Cálculo LOD Fijo independiente de los filtros de vista
{ FIXED [Region_Operativa], [Familia_Producto] : 
  SUM([Unidades_Entregadas]) / SUM([Horas_Proceso]) 
} - { AVG([Objetivo_Productividad_Nacional]) }`,
      explanation: 'Expresión analítica para normalizar rendimiento entre delegaciones con distinto volumen.',
    },
  },
  {
    id: 'custom-dashboard',
    name: 'Custom Web App',
    brandTitle: 'Embedded BI Next.js',
    badge: 'Desarrollo a Medida',
    tagline: 'Cuadro de Mando en tu Propio Software / Intranet',
    summary:
      'Aplicación web analítica en tu propio dominio sin licencias por usuario. Ideal para dar acceso a clientes, socios o franquicias.',
    accent: {
      text: 'text-emerald-700 dark:text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
      glow: 'from-emerald-500/15 via-teal-500/10 to-transparent',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30',
    },
    image: '/images/dashboards/Contabilidad.png',
    mockUrl: 'portal.tuempresa.es/analytics/cuadro-mando-clientes',
    specs: {
      sources: 'APIs REST, Webhooks Stripe/Shopify, PostgreSQL, Supabase',
      refreshRate: 'Streaming por WebSockets en tiempo real instantáneo',
      security: 'Autenticación corporativa SSO / OAuth2 / JWT a medida',
      recommendedFor: 'Empresas B2B SaaS, Portales de Clientes y Franquicias',
    },
    metrics: [
      { label: 'Coste por Usuario', value: '0 €', sub: 'Sin licencias mensuales Pro' },
      { label: 'Latencia Edge API', value: '< 18ms', sub: 'Despliegue global instantáneo' },
      { label: 'Marca Corporativa', value: '100% White-label', sub: 'Totalmente a tu identidad' },
      { label: 'Usuarios Concurrentes', value: 'Ilimitados', sub: 'Arquitectura Serverless' },
    ],
    codeSnippet: {
      title: 'Endpoint Edge API: Streaming de Métricas en Tiempo Real',
      language: 'TypeScript',
      code: `// Route Handler para analítica reactiva sin intermediarios
export async function GET(req: NextRequest) {
  const telemetry = await db.transacciones.aggregate({
    _sum: { importeNeto: true },
    _avg: { margenOperativo: true },
    where: { estado: 'CONFIRMADO', fecha: { gte: inicioJornada } }
  });
  return NextResponse.json({ liveKpis: telemetry, latencyMs: 12 });
}`,
      explanation: 'Microservicio ultra rápido para alimentar cuadros de mando web integrados.',
    },
  },
];

export function InteractiveDashboardDemo() {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformId>('power-bi');
  const [showDaxModal, setShowDaxModal]         = useState(false);
  const [showImageZoom, setShowImageZoom]       = useState(false);
  const [showFullSpecs, setShowFullSpecs]       = useState(false);
  const [filterScenario, setFilterScenario]     = useState<'base' | 'optimista' | 'conservador'>('base');

  const current = PLATFORMS.find((p) => p.id === selectedPlatform) || PLATFORMS[0];

  return (
    <div className="w-full relative">
      {/* Outer subtle glow */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r ${current.accent.glow} rounded-3xl blur-2xl opacity-60 transition-all duration-700 pointer-events-none -z-10`}
      />

      {/* Main Container Card */}
      <div className="w-full bg-white/95 dark:bg-[#0a0f1d]/95 border border-stone-200/90 dark:border-white/10 rounded-3xl shadow-xl dark:shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden relative">
        {/* ── 1. Platform Switcher Tabs ─────────────────────── */}
        <div className="p-3 sm:p-4 bg-stone-100/70 dark:bg-[#070b16] border-b border-stone-200/80 dark:border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-slate-300">
                Hub de Plataformas BI
              </span>
            </div>

            {/* Segmented Control */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-stone-200/60 dark:bg-slate-950/80 rounded-2xl border border-stone-300/40 dark:border-white/[0.06]">
              {PLATFORMS.map((platform) => {
                const isActive = selectedPlatform === platform.id;
                return (
                  <button
                    key={platform.id}
                    onClick={() => {
                      setSelectedPlatform(platform.id);
                      setShowFullSpecs(false);
                    }}
                    type="button"
                    className={`relative px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center ${
                      isActive
                        ? 'bg-white text-stone-900 shadow-sm border border-stone-200 dark:bg-[#0f172a] dark:text-white dark:border-white/10'
                        : 'text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    <span className="truncate">{platform.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 2. Chrome Top Bar ─────────────────────────────── */}
        <div className="px-5 py-3 bg-stone-50/60 dark:bg-slate-950/70 border-b border-stone-200/80 dark:border-white/[0.06] flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="hidden md:inline font-mono text-[11px] text-stone-500 dark:text-slate-500 pl-2">
              {current.mockUrl}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${current.accent.badgeBg}`}>
              {current.badge}
            </span>
            <button
              onClick={() => setShowDaxModal(true)}
              type="button"
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-white/[0.06] border border-stone-200 dark:border-white/10 text-stone-800 dark:text-white text-[11px] font-bold flex items-center gap-1.5 hover:bg-stone-50 dark:hover:bg-white/[0.1] shadow-2xs transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Ver Código ({current.codeSnippet.language})</span>
            </button>
          </div>
        </div>

        {/* ── 3. Main Workspace Area ────────────────────────── */}
        <div className="p-5 sm:p-7 lg:p-9 space-y-6">
          {/* Header & Scenario Slicer */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200/80 dark:border-white/[0.07]">
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${current.accent.text}`}>
                  {current.brandTitle}
                </span>
                <span className="text-stone-300 dark:text-slate-600">·</span>
                <span className="text-xs text-stone-500 dark:text-slate-400">{current.tagline}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                Cuadro de Mando en Producción
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 mt-1 max-w-2xl">
                {current.summary}
              </p>
            </div>

            {/* Scenario toggle */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-100 dark:bg-slate-950 border border-stone-200/80 dark:border-white/[0.06] self-start md:self-auto shrink-0">
              <span className="text-[11px] text-stone-500 dark:text-slate-400 font-semibold px-2 flex items-center gap-1">
                <Filter className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                Escenario:
              </span>
              {(['base', 'optimista', 'conservador'] as const).map((scen) => (
                <button
                  key={scen}
                  onClick={() => setFilterScenario(scen)}
                  type="button"
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                    filterScenario === scen
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {scen}
                </button>
              ))}
            </div>
          </div>

          {/* ── 4. Compact KPI Cards ──────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {current.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-stone-50/80 dark:bg-[#0e1526] border border-stone-200/80 dark:border-white/[0.06] p-4 rounded-2xl"
              >
                <div className="text-stone-500 dark:text-slate-400 text-xs font-medium">
                  {metric.label}
                </div>
                <div className={`text-2xl font-black font-mono mt-1 tracking-tight ${current.accent.text}`}>
                  {filterScenario === 'optimista' && metric.value.includes('€')
                    ? '€' + (parseFloat(metric.value.replace('€', '').replace('M', '')) * 1.15).toFixed(2) + 'M'
                    : filterScenario === 'conservador' && metric.value.includes('€')
                    ? '€' + (parseFloat(metric.value.replace('€', '').replace('M', '')) * 0.92).toFixed(2) + 'M'
                    : metric.value}
                </div>
                <div className="text-[11px] text-stone-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">●</span>
                  <span>{metric.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── 5. Real Dashboard Image Frame ─────────────────── */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 dark:border-white/[0.1] bg-stone-100 dark:bg-slate-950 shadow-lg group/canvas">
            {/* Action Bar */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
              <button
                onClick={() => setShowImageZoom(true)}
                type="button"
                className="px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-stone-200 dark:border-white/20 text-stone-900 dark:text-white text-xs font-bold shadow-md backdrop-blur-md flex items-center gap-1.5 hover:scale-105 transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Pantalla Completa</span>
              </button>
            </div>

            {/* Dashboard Screenshot */}
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px]">
              <Image
                src={current.image}
                alt={`${current.name} Cuadro de Mando Real`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover/canvas:scale-[1.01]"
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Hotspot Floating Chip */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-3.5 rounded-xl bg-white/95 dark:bg-[#0a0f1d]/90 border border-stone-200 dark:border-white/15 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Proyecto Real en Producción</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-slate-300 mt-1">
                  Modelado relacional directo, sin fórmulas manuales de Excel intermedias.
                </p>
              </div>
            </div>
          </div>

          {/* ── 6. Condensed Architecture Specs (Scannable & Expandable) */}
          <div className="rounded-2xl border border-stone-200/90 dark:border-white/[0.08] bg-stone-50/60 dark:bg-white/[0.02] p-4">
            {/* Quick Micro-pills */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/[0.05] border border-stone-200 dark:border-white/10 font-medium text-stone-700 dark:text-slate-200">
                  <Database className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span className="font-bold">Fuentes:</span>
                  <span className="truncate max-w-[160px] sm:max-w-none">{current.specs.sources}</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/[0.05] border border-stone-200 dark:border-white/10 font-medium text-stone-700 dark:text-slate-200">
                  <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span className="font-bold">Frecuencia:</span>
                  <span>{current.specs.refreshRate.split(' o ')[0]}</span>
                </div>

                <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/[0.05] border border-stone-200 dark:border-white/10 font-medium text-stone-700 dark:text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold">Seguridad:</span>
                  <span>{current.specs.security.split(' por ')[0]}</span>
                </div>
              </div>

              {/* Toggle full specs */}
              <button
                onClick={() => setShowFullSpecs(!showFullSpecs)}
                type="button"
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 flex items-center gap-1 ml-auto"
              >
                <span>{showFullSpecs ? 'Cerrar ficha' : 'Ver ficha técnica completa'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFullSpecs ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Expandable full details */}
            <AnimatePresence>
              {showFullSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 mt-4 border-t border-stone-200/80 dark:border-white/[0.06] text-xs">
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white block mb-0.5">Orígenes de Datos</span>
                      <p className="text-stone-600 dark:text-slate-400 leading-relaxed">{current.specs.sources}</p>
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white block mb-0.5">Actualización</span>
                      <p className="text-stone-600 dark:text-slate-400 leading-relaxed">{current.specs.refreshRate}</p>
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white block mb-0.5">Gobernanza y RLS</span>
                      <p className="text-stone-600 dark:text-slate-400 leading-relaxed">{current.specs.security}</p>
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white block mb-0.5">Perfil Destinatario</span>
                      <p className="text-stone-600 dark:text-slate-400 leading-relaxed">{current.specs.recommendedFor}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── 7. Single-line Action Footer ─────────────────── */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-500 dark:text-slate-400 text-center sm:text-left">
              ¿Quieres un cuadro de mando profesional en <strong>{current.name}</strong> adaptado a tu empresa?
            </span>
            <Link
              href={`/contacto?tecnologia=${current.id}`}
              className="btn-primary py-2.5 px-6 text-xs group shrink-0 w-full sm:w-auto"
            >
              <span>Pedir Presupuesto en {current.name}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Modal: DAX & Code Inspector ─────────────────────── */}
      <AnimatePresence>
        {showDaxModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0b1020] border border-stone-200 dark:border-white/15 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="font-bold text-stone-900 dark:text-white text-base">
                    {current.codeSnippet.title}
                  </h4>
                </div>
                <button
                  onClick={() => setShowDaxModal(false)}
                  type="button"
                  className="p-1 rounded-lg text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-4">
                <pre className="p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed shadow-inner">
                  {current.codeSnippet.code}
                </pre>
                <p className="text-xs text-stone-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {current.codeSnippet.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200 dark:border-white/10 flex justify-end">
                <button
                  onClick={() => setShowDaxModal(false)}
                  type="button"
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Modal: High-Resolution Zoom ─────────────────────── */}
      <AnimatePresence>
        {showImageZoom && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setShowImageZoom(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-6xl w-full h-[85vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowImageZoom(false)}
                type="button"
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-contain p-2"
                priority
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
