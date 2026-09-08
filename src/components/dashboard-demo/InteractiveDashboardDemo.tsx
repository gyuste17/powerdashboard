'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  Activity,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const SALES_DATA = [
  { month: 'Ene', revenue: 42000, target: 38000, margin: 28 },
  { month: 'Feb', revenue: 48000, target: 40000, margin: 31 },
  { month: 'Mar', revenue: 55000, target: 45000, margin: 33 },
  { month: 'Abr', revenue: 51000, target: 48000, margin: 30 },
  { month: 'May', revenue: 64000, target: 52000, margin: 35 },
  { month: 'Jun', revenue: 72000, target: 58000, margin: 37 },
  { month: 'Jul', revenue: 69000, target: 60000, margin: 34 },
  { month: 'Ago', revenue: 78000, target: 65000, margin: 38 },
  { month: 'Sep', revenue: 89000, target: 70000, margin: 41 },
];

const CHANNELS_DATA = [
  { name: 'Venta Directa B2B', value: 45, color: '#f59e0b', growth: '+24%' },
  { name: 'eCommerce / Web', value: 30, color: '#06b6d4', growth: '+18%' },
  { name: 'Canal Distribuidores', value: 15, color: '#10b981', growth: '+9%' },
  { name: 'Partners Estratégicos', value: 10, color: '#8b5cf6', growth: '+12%' },
];

export function InteractiveDashboardDemo() {
  const [activeTab, setActiveTab] = useState<'ventas' | 'margen' | 'canales'>('ventas');
  const [timeRange, setTimeRange] = useState<'9M' | '6M' | '3M'>('9M');

  const filteredData = timeRange === '3M' 
    ? SALES_DATA.slice(-3) 
    : timeRange === '6M' 
    ? SALES_DATA.slice(-6) 
    : SALES_DATA;

  const totalRevenue = filteredData.reduce((acc, curr) => acc + curr.revenue, 0);
  const avgMargin = Math.round(filteredData.reduce((acc, curr) => acc + curr.margin, 0) / filteredData.length);

  return (
    <div className="w-full relative group">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Container styled as a high-end SaaS Console */}
      <div className="w-full bg-[#0b1120]/95 border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden relative">
        {/* Top Window Bar (macOS / Terminal style chrome) */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950/80 border-b border-white/[0.07] gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/40 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40 inline-block" />
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.05] text-[11px] text-slate-400 font-mono">
              <span className="text-amber-400 font-semibold">https://</span>
              <span>app.powerdashboard.es/demo/cuadro-mando-ejecutivo</span>
            </div>
          </div>

          {/* Right Status */}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Datos en Vivo</span>
            </div>
          </div>
        </div>

        {/* Dashboard Inner Header */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/25">
                  Demo Interactiva
                </span>
                <span className="text-xs text-slate-400">Prueba los filtros y tabs en tiempo real</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Cuadro de Mando Ejecutivo de Rendimiento Comercial
              </h3>
            </div>

            {/* Time Filter Pills */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-950/90 border border-white/[0.08] self-start md:self-auto">
              {(['3M', '6M', '9M'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                    timeRange === range
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {range === '3M' ? 'Últ. 3 meses' : range === '6M' ? 'Últ. 6 meses' : 'Año en Curso (9M)'}
                </button>
              ))}
            </div>
          </div>

          {/* KPI Cards with reactive animations */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
            <div className="bg-[#0e1626] border border-white/[0.06] hover:border-amber-500/30 p-4 sm:p-5 rounded-xl transition-all group/card">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span className="font-medium">Facturación Total</span>
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover/card:scale-110 transition-transform">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <motion.div 
                key={totalRevenue}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl font-black text-white mt-2 font-mono tracking-tight"
              >
                {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(totalRevenue)}
              </motion.div>
              <div className="flex items-center gap-1 text-emerald-400 text-xs mt-1.5 font-medium">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+18.4% vs objetivo presupuestado</span>
              </div>
            </div>

            <div className="bg-[#0e1626] border border-white/[0.06] hover:border-cyan-500/30 p-4 sm:p-5 rounded-xl transition-all group/card">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span className="font-medium">Margen Bruto Medio</span>
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/card:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <motion.div 
                key={avgMargin}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl font-black text-white mt-2 font-mono tracking-tight"
              >
                {avgMargin}%
              </motion.div>
              <div className="flex items-center gap-1 text-emerald-400 text-xs mt-1.5 font-medium">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+4.2 pts vs año anterior</span>
              </div>
            </div>

            <div className="bg-[#0e1626] border border-white/[0.06] hover:border-purple-500/30 p-4 sm:p-5 rounded-xl transition-all group/card">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span className="font-medium">Win Rate Comercial</span>
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover/card:scale-110 transition-transform">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-2 font-mono tracking-tight">
                34.8%
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-xs mt-1.5 font-medium">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+6.1% eficiencia en cierre</span>
              </div>
            </div>

            <div className="bg-[#0e1626] border border-white/[0.06] hover:border-emerald-500/30 p-4 sm:p-5 rounded-xl transition-all group/card">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span className="font-medium">Tiempo de Reporte</span>
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/card:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-2 font-mono tracking-tight">
                0 minutos
              </div>
              <div className="text-slate-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% automatizado sin Excel</span>
              </div>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-3 mb-6">
            <button
              onClick={() => setActiveTab('ventas')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'ventas'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <span>Evolución Facturación vs Target</span>
            </button>
            <button
              onClick={() => setActiveTab('margen')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'margen'
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <span>Curva de Margen Operativo %</span>
            </button>
            <button
              onClick={() => setActiveTab('canales')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'canales'
                  ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <span>Mix de Facturación por Canal</span>
            </button>
          </div>

          {/* Interactive Chart Container */}
          <div className="h-72 sm:h-84 w-full pt-2">
            <AnimatePresence mode="wait">
              {activeTab === 'ventas' && (
                <motion.div
                  key="ventas"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={filteredData}>
                      <defs>
                        <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.45} />
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                        </linearGradient>
                        <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#64748b" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#64748b" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                      <YAxis stroke="#64748b" fontSize={12} tickLine={false} tickFormatter={(v) => `${v / 1000}k€`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0b1120', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                        formatter={(val: number) => [`${val.toLocaleString()} €`, '']}
                      />
                      <Area type="monotone" dataKey="revenue" name="Facturación Real" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#revenueGrad)" />
                      <Area type="monotone" dataKey="target" name="Objetivo Presupuestario" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#targetGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </motion.div>
              )}

              {activeTab === 'margen' && (
                <motion.div
                  key="margen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={filteredData}>
                      <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                      <YAxis stroke="#64748b" fontSize={12} tickLine={false} tickFormatter={(v) => `${v}%`} domain={[20, 50]} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0b1120', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                        formatter={(val: number) => [`${val}%`, 'Margen']}
                      />
                      <Line type="monotone" dataKey="margin" name="Margen %" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 5, strokeWidth: 2, stroke: '#0b1120' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
              )}

              {activeTab === 'canales' && (
                <motion.div
                  key="canales"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="grid sm:grid-cols-2 gap-6 h-full items-center p-2"
                >
                  <div className="space-y-3.5">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Activity className="w-4 h-4 text-amber-400" />
                      Distribución de Facturación por Canal
                    </h4>
                    {CHANNELS_DATA.map((ch) => (
                      <div key={ch.name} className="space-y-1">
                        <div className="flex justify-between text-xs text-slate-300">
                          <span className="font-medium">{ch.name}</span>
                          <span className="font-mono font-bold text-white">{ch.value}% ({ch.growth})</span>
                        </div>
                        <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-white/[0.05]">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${ch.value}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full" 
                            style={{ backgroundColor: ch.color }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-white/[0.08] space-y-3">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      Insight de Decisión Automatizado
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      El canal <strong>Directo B2B</strong> aporta el 45% del volumen con el mayor margen medio (+42%). La aceleración del canal web (+18%) sugiere incrementar la inversión en automatización de checkout.
                    </p>
                    <div className="pt-2 border-t border-white/[0.06] text-[11px] text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Cálculo automatizado con modelos DAX de Power BI</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Bar */}
          <div className="mt-8 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Ejemplo 100% interactivo. Los cuadros reales se conectan a tu ERP, CRM, SQL o Google Sheets.</span>
            </div>
            <div className="text-amber-400 font-semibold flex items-center gap-1.5">
              <span>Tecnología: Power BI · DAX · DirectQuery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
