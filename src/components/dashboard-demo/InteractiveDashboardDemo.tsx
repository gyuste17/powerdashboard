'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Layers,
  Sparkles,
  Maximize2,
  Code2,
  Cpu,
  CheckCircle2,
  Database,
  ArrowRight,
  ShieldCheck,
  Zap,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet,
  Download,
  Filter,
  X
} from 'lucide-react';

/* ── Platform Definitions ────────────────────────────────── */
type PlatformId = 'power-bi' | 'looker-studio' | 'tableau' | 'custom-dashboard';

interface PlatformConfig {
  id: PlatformId;
  name: string;
  brandTitle: string;
  badge: string;
  tagline: string;
  description: string;
  accent: {
    text: string;
    border: string;
    bg: string;
    glow: string;
    badgeBg: string;
  };
  image: string;
  secondaryImage?: string;
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
    isPositive: boolean;
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
    name: 'Microsoft Power BI',
    brandTitle: 'Power BI Enterprise Suite',
    badge: 'Gartner Magic Quadrant Leader',
    tagline: 'Modelado Relacional Star Schema, DirectQuery & DAX Optimizado',
    description:
      'Solución analítica corporativa estándar mundial para comités de dirección, control financiero P&L, ventas B2B y reporting consolidado de filiales.',
    accent: {
      text: 'text-amber-400',
      border: 'border-amber-500/40',
      bg: 'bg-amber-500/10',
      glow: 'from-amber-500/25 via-yellow-500/10 to-transparent',
      badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    },
    image: '/images/dashboards/MAT.png',
    secondaryImage: '/images/dashboards/Contabilidad.png',
    mockUrl: 'app.powerbi.com/groups/corporativo/reports/p&l-ejecutivo-2024',
    specs: {
      sources: 'SAP ERP, Navision / Business Central, SQL Server, Excel, Salesforce',
      refreshRate: 'Actualización automática 8x/día o DirectQuery en tiempo real',
      security: 'Row-Level Security (RLS) por país, división o comercial',
      recommendedFor: 'Dirección General, CFOs, Controllers Financieros y Directores Comerciales',
    },
    metrics: [
      { label: 'Facturación YTD', value: '€2.48M', sub: '+16.2% vs presupuesto', isPositive: true },
      { label: 'EBITDA Operativo', value: '24.8%', sub: '+3.1 pts vs año ant.', isPositive: true },
      { label: 'Días Cobro (DSO)', value: '37 días', sub: '-5 días de mejora', isPositive: true },
      { label: 'Velocidad Query DAX', value: '0.14s', sub: 'Modelos en memoria VertiPaq', isPositive: true },
    ],
    codeSnippet: {
      title: 'Medida DAX: Margen Contributivo Dinámico con Time Intelligence',
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
      explanation: 'DAX limpio, modular y libre de dependencias circulares para máxima velocidad en modelos masivos.',
    },
  },
  {
    id: 'looker-studio',
    name: 'Google Looker Studio',
    brandTitle: 'Looker Studio & BigQuery',
    badge: 'Cero Costes de Licencia Pro',
    tagline: 'Reporting Ejecutivo Ágil para eCommerce, Performance & Marketing',
    description:
      'Paneles dinámicos conectados nativamente al ecosistema Google y pasarelas de pago. Ideal para analizar ROAS blended, atribución publicitaria y métricas web sin coste mensual de software.',
    accent: {
      text: 'text-cyan-400',
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-500/10',
      glow: 'from-cyan-500/25 via-sky-500/10 to-transparent',
      badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    },
    image: '/images/dashboards/Informe ventas.png',
    secondaryImage: '/images/dashboards/Airbnb.png',
    mockUrl: 'lookerstudio.google.com/reporting/ecommerce-performance-overview',
    specs: {
      sources: 'Google Analytics 4, Shopify, Meta Ads, Google Ads, BigQuery, Google Sheets',
      refreshRate: 'Streaming directo con caché adaptativa de 15 minutos',
      security: 'Permisos granulares mediante Google Workspace / cuentas corporativas',
      recommendedFor: 'eCommerce Managers, CMOs, Agencias de Performance y Startups',
    },
    metrics: [
      { label: 'Blended ROAS', value: '4.85x', sub: '+28.4% eficiencia publicitaria', isPositive: true },
      { label: 'Coste Adquisición (CAC)', value: '€14.20', sub: '-18.5% reducción de coste', isPositive: true },
      { label: 'Conversión Media Web', value: '3.62%', sub: '+0.7 pts vs benchmark', isPositive: true },
      { label: 'Coste de Software', value: '0 €/mes', sub: '100% sin licencias por usuario', isPositive: true },
    ],
    codeSnippet: {
      title: 'Query SQL BigQuery: Modelo de Atribución Multi-Touch de Conversiones',
      language: 'SQL',
      code: `SELECT 
  traffic_source.source AS canal_adquisicion,
  COUNT(DISTINCT user_pseudo_id) AS usuarios_unicos,
  SUM(event_params.value.int_value) AS facturacion_generada,
  SAFE_DIVIDE(SUM(ad_spend), COUNT(DISTINCT purchase_id)) AS cac_efectivo
FROM \`empresa.analytics_ga4.events_*\`
WHERE _TABLE_SUFFIX BETWEEN '20240101' AND '20240930'
GROUP BY 1 ORDER BY facturacion_generada DESC;`,
      explanation: 'Consulta de particionamiento optimizada en BigQuery para reportes que cargan en menos de un segundo.',
    },
  },
  {
    id: 'tableau',
    name: 'Tableau Software',
    brandTitle: 'Tableau Cloud & Advanced Viz',
    badge: 'Analítica Exploratoria & Geoespacial',
    tagline: 'Visualización Multivariable, Clustering & Operaciones Complejas',
    description:
      'Herramienta de análisis profundo para empresas que gestionan cadenas de suministro, redes logísticas, distribución territorial y grandes volúmenes de datos relacionales.',
    accent: {
      text: 'text-indigo-400',
      border: 'border-indigo-500/40',
      bg: 'bg-indigo-500/10',
      glow: 'from-indigo-500/25 via-purple-500/10 to-transparent',
      badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    },
    image: '/images/dashboards/Tableau.png',
    secondaryImage: '/images/dashboards/Metro.png',
    mockUrl: 'tableau.corporativo.es/#/views/operaciones-logistica/distribucion-nacional',
    specs: {
      sources: 'Snowflake, Databricks, PostgreSQL, AWS Redshift, Oracle, Hadoop',
      refreshRate: 'Tableau Hyper Data Extracts programados o Live Query directo',
      security: 'Row-Level Security corporativo & Data Masking avanzado',
      recommendedFor: 'Directores de Operaciones, Logística, Supply Chain e Ingenieros de Datos',
    },
    metrics: [
      { label: 'Cumplimiento OTIF', value: '96.4%', sub: '+4.2 pts de entrega a tiempo', isPositive: true },
      { label: 'Lead Time Medio', value: '1.9 días', sub: '-0.8 días de optimización', isPositive: true },
      { label: 'Rutas Optimizadas', value: '1,420', sub: 'Reducción de coste combustible', isPositive: true },
      { label: 'Precisión Territorial', value: '99.8%', sub: 'Capas poligonales GIS', isPositive: true },
    ],
    codeSnippet: {
      title: 'Fórmula Tableau LOD: Nivel de Detalle Fijo para Comparativa de Sedes',
      language: 'Tableau LOD',
      code: `// Cálculo LOD Fijo independiente de los filtros de vista
{ FIXED [Region_Operativa], [Familia_Producto] : 
  SUM([Unidades_Entregadas]) / SUM([Horas_Proceso]) 
} - { AVG([Objetivo_Productividad_Nacional]) }`,
      explanation: 'Expresión analítica avanzada para normalizar rendimiento entre delegaciones con distinto volumen.',
    },
  },
  {
    id: 'custom-dashboard',
    name: 'Custom Power Dashboard',
    brandTitle: 'Embedded Analytics Web App',
    badge: 'Desarrollo Web Full-Stack a Medida',
    tagline: 'Plataforma Analítica Propia en Tu Dominio sin Límites de Software',
    description:
      'Cuadro de mando desarrollado en Next.js, React y bases de datos modernas. Integra datos en tiempo real dentro de tu intranet o software SaaS para clientes sin cobrar licencias por usuario.',
    accent: {
      text: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      glow: 'from-emerald-500/25 via-teal-500/10 to-transparent',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    },
    image: '/images/dashboards/Contabilidad.png',
    secondaryImage: '/images/dashboards/AMEX.png',
    mockUrl: 'intranet.tuempresa.es/analytics/portal-clientes-ejecutivo',
    specs: {
      sources: 'Cualquier API REST, Webhooks Stripe/Shopify, PostgreSQL, Supabase, Neon',
      refreshRate: 'Streaming de eventos por WebSockets en tiempo real instantáneo',
      security: 'Autenticación corporativa SSO / OAuth2 / JWT totalmente a medida',
      recommendedFor: 'Empresas B2B SaaS, Portales de Clientes, Franquicias y Grandes Colectivos',
    },
    metrics: [
      { label: 'Coste por Usuario', value: '0 €', sub: 'Sin licencias mensuales Pro', isPositive: true },
      { label: 'Latencia de Servidor', value: '< 18ms', sub: 'Despliegue Edge Global', isPositive: true },
      { label: 'Diseño & Marca', value: '100% White-label', sub: 'Totalmente personalizado a tu logo', isPositive: true },
      { label: 'Usuarios Concurrentes', value: 'Ilimitados', sub: 'Arquitectura Serverless escalable', isPositive: true },
    ],
    codeSnippet: {
      title: 'Endpoint Edge API: Streaming de Métricas de Negocio por WebSocket',
      language: 'TypeScript',
      code: `// Route Handler optimizado para analítica reactiva instantánea
export async function GET(req: NextRequest) {
  const telemetry = await db.transacciones.aggregate({
    _sum: { importeNeto: true },
    _avg: { margenOperativo: true },
    where: { estado: 'CONFIRMADO', fecha: { gte: inicioJornada } }
  });
  return NextResponse.json({ liveKpis: telemetry, latencyMs: 12 });
}`,
      explanation: 'Microservicio analítico ultra rápido desplegado en Edge para alimentar paneles en tiempo real.',
    },
  },
];

export function InteractiveDashboardDemo() {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformId>('power-bi');
  const [showDaxModal, setShowDaxModal] = useState(false);
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [filterScenario, setFilterScenario] = useState<'base' | 'optimista' | 'conservador'>('base');

  const current = PLATFORMS.find((p) => p.id === selectedPlatform) || PLATFORMS[0];

  return (
    <div className="w-full relative">
      {/* Outer ambient aura reflecting the current platform's color */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r ${current.accent.glow} rounded-3xl blur-2xl opacity-70 transition-all duration-700 pointer-events-none -z-10`}
      />

      {/* Main Studio Frame */}
      <div className="w-full bg-[#0a0f1d]/95 border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden relative">
        {/* ── 1. Top Global Navigation: Tool Switcher ─────────────────── */}
        <div className="p-3 sm:p-4 bg-[#070b16] border-b border-white/[0.08]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Header label */}
            <div className="flex items-center gap-2.5 px-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Hub de Plataformas Analíticas
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                · Selecciona una tecnología para explorar su arquitectura
              </span>
            </div>

            {/* Platform Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-white/[0.06]">
              {PLATFORMS.map((platform) => {
                const isActive = selectedPlatform === platform.id;
                return (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`relative px-3 py-2 rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isActive
                        ? `${platform.accent.bg} ${platform.accent.text} shadow-md border ${platform.accent.border}`
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePlatformIndicator"
                        className="absolute inset-0 rounded-lg bg-white/[0.04]"
                        transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                      />
                    )}
                    <span className="relative truncate">{platform.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 2. Studio Titlebar Mock (Browser / Service Workspace Chrome) */}
        <div className="px-4 sm:px-6 py-3 bg-slate-950/90 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/70 inline-block border border-rose-400/40" />
              <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block border border-amber-400/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block border border-emerald-400/40" />
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-slate-400">
              <span className={current.accent.text}>https://</span>
              <span>{current.mockUrl}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${current.accent.badgeBg}`}>
              {current.badge}
            </span>

            {/* Inspect DAX / Code button */}
            <button
              onClick={() => setShowDaxModal(true)}
              className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white text-[11px] font-semibold transition-colors flex items-center gap-1.5"
              title="Inspeccionar lógica de modelado"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Ver Código ({current.codeSnippet.language})</span>
            </button>
          </div>
        </div>

        {/* ── 3. Main Workspace Area ───────────────────────────────────── */}
        <div className="p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${current.accent.text}`}>
                      {current.brandTitle}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span className="text-xs text-slate-400">{current.tagline}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {current.name}: Arquitectura & Entregables de Negocio
                  </h3>
                  <p className="text-sm text-slate-300 mt-1.5 max-w-3xl leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Scenario Simulator Slicer */}
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-950/80 border border-white/[0.07] shrink-0 self-start lg:self-auto">
                  <span className="text-[11px] text-slate-400 font-semibold px-2 flex items-center gap-1">
                    <Filter className="w-3 h-3 text-amber-400" />
                    Escenario:
                  </span>
                  {(['base', 'optimista', 'conservador'] as const).map((scen) => (
                    <button
                      key={scen}
                      onClick={() => setFilterScenario(scen)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                        filterScenario === scen
                          ? 'bg-amber-500 text-slate-950 font-bold shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {scen}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── 4. Key Performance Indicator Cards ───────────────── */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {current.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-[#0e1526] border border-white/[0.06] hover:border-white/[0.15] p-4 sm:p-5 rounded-2xl transition-all group"
                  >
                    <div className="text-slate-400 text-xs font-medium flex items-center justify-between">
                      <span>{metric.label}</span>
                      <Sparkles className={`w-3.5 h-3.5 opacity-60 group-hover:opacity-100 ${current.accent.text}`} />
                    </div>
                    <div className={`text-2xl sm:text-3xl font-black font-mono mt-2 tracking-tight ${current.accent.text}`}>
                      {filterScenario === 'optimista' && metric.value.includes('€')
                        ? '€' + (parseFloat(metric.value.replace('€', '').replace('M', '')) * 1.15).toFixed(2) + 'M'
                        : filterScenario === 'conservador' && metric.value.includes('€')
                        ? '€' + (parseFloat(metric.value.replace('€', '').replace('M', '')) * 0.92).toFixed(2) + 'M'
                        : metric.value}
                    </div>
                    <div className="text-slate-400 text-xs mt-1.5 flex items-center gap-1">
                      <span className="text-emerald-400 font-semibold">●</span>
                      <span>{metric.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── 5. Real Dashboard Canvas (High Resolution Viewport) ── */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-slate-950 shadow-2xl group/canvas">
                {/* Floating Canvas Toolbar */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                  <button
                    onClick={() => setShowImageZoom(true)}
                    className="px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-white text-xs font-medium shadow-lg backdrop-blur-md flex items-center gap-1.5 transition-all hover:scale-105"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver en Pantalla Completa</span>
                  </button>
                </div>

                {/* Dashboard Image Viewport */}
                <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px]">
                  <Image
                    src={current.image}
                    alt={`${current.name} Dashboard Corporativo Real`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover/canvas:scale-[1.01]"
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-black/20 pointer-events-none" />

                  {/* Hotspot Hover Card: Explaining Real Engineering */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 rounded-xl glass border border-white/15 shadow-2xl backdrop-blur-xl space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>Proyecto Real Entregado</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Captura directa del cuadro de mando en producción. Cada gráfico, tarjeta y matriz responde a modelos de datos certificados sin hojas de cálculo intermedias.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── 6. Architecture & Implementation Specs ─────────────── */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-amber-400" />
                    Fuentes de Datos
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{current.specs.sources}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    Actualización
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{current.specs.refreshRate}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Gobernanza & Seguridad
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{current.specs.security}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    Perfil Recomendado
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{current.specs.recommendedFor}</p>
                </div>
              </div>

              {/* ── 7. Call To Action Footer for the Selected Platform ─── */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-[#0f172a] to-slate-950 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                    <span>¿Necesitas un cuadro de mando profesional en {current.name}?</span>
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xl">
                    Diseñamos la estructura completa, conectamos tus orígenes de datos y entregamos tu solución llave en mano con formación para tu equipo.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                  <Link
                    href={`/contacto?tecnologia=${current.id}`}
                    className="btn-primary w-full sm:w-auto text-xs py-3 px-6 group"
                  >
                    <span>Solicitar Presupuesto {current.name}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Modal: DAX & Engineering Code Inspector ────────────────────── */}
      <AnimatePresence>
        {showDaxModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b1020] border border-white/15 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-white text-base">
                    {current.codeSnippet.title}
                  </h4>
                </div>
                <button
                  onClick={() => setShowDaxModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Sintaxis: <strong className="text-amber-300 font-mono">{current.codeSnippet.language}</strong></span>
                  <span>100% optimizado para grandes volúmenes</span>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs sm:text-sm font-mono text-amber-200/90 overflow-x-auto leading-relaxed">
                  {current.codeSnippet.code}
                </pre>
                <p className="text-xs text-slate-300 mt-3 italic leading-relaxed">
                  {current.codeSnippet.explanation}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setShowDaxModal(false)}
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Cerrar Inspector
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Modal: High-Resolution Fullscreen View ─────────────────────── */}
      <AnimatePresence>
        {showImageZoom && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setShowImageZoom(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-6xl w-full h-[85vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-30">
                <button
                  onClick={() => setShowImageZoom(false)}
                  className="p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-white shadow-xl backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <Image
                src={current.image}
                alt={`${current.name} Detalle en Alta Resolución`}
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
