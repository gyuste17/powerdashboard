'use client';

import { useState } from 'react';
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
  ShoppingCart, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter, 
  Calendar,
  Sparkles,
  Layers
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
  { name: 'Venta Directa B2B', value: 45, color: '#f59e0b' },
  { name: 'eCommerce / Web', value: 30, color: '#06b6d4' },
  { name: 'Canal Distribuidores', value: 15, color: '#10b981' },
  { name: 'Partners Estratégicos', value: 10, color: '#8b5cf6' },
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
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Decorative gradient header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                Demo Interactiva en Vivo
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">Actualizado en tiempo real</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              Cuadro de Mando Ejecutivo de Rendimiento Comercial
            </h3>
          </div>
        </div>

        {/* Time filters */}
        <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
          {(['3M', '6M', '9M'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                timeRange === range
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {range === '3M' ? 'Último Trimestre' : range === '6M' ? 'Último Semestre' : 'Año en Curso'}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
        <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 sm:p-4 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Facturación Total</span>
            <DollarSign className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1.5 font-mono">
            {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(totalRevenue)}
          </div>
          <div className="flex items-center gap-1 text-emerald-400 text-xs mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+18.4% vs objetivo</span>
          </div>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 sm:p-4 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Margen Bruto Medio</span>
            <TrendingUp className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1.5 font-mono">
            {avgMargin}%
          </div>
          <div className="flex items-center gap-1 text-emerald-400 text-xs mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+4.2 pts vs año anterior</span>
          </div>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 sm:p-4 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Win Rate Comercial</span>
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1.5 font-mono">
            34.8%
          </div>
          <div className="flex items-center gap-1 text-emerald-400 text-xs mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+6.1% eficiencia</span>
          </div>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 sm:p-4 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Tiempo de Reporte</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1.5 font-mono">
            0 horas
          </div>
          <div className="text-slate-400 text-xs mt-1">
            100% automatizado
          </div>
        </div>
      </div>

      {/* Tabs selector */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6">
        <button
          onClick={() => setActiveTab('ventas')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'ventas'
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Evolución Facturación vs Objetivo
        </button>
        <button
          onClick={() => setActiveTab('margen')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'margen'
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Curva de Margen Operativo %
        </button>
        <button
          onClick={() => setActiveTab('canales')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'canales'
              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Mix por Canales
        </button>
      </div>

      {/* Interactive Chart Container */}
      <div className="h-64 sm:h-80 w-full pt-2">
        {activeTab === 'ventas' && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#64748b" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} tickFormatter={(v) => `${v / 1000}k€`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                formatter={(val: number) => [`${val.toLocaleString()} €`, '']}
              />
              <Area type="monotone" dataKey="revenue" name="Facturación Real" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#revenueGrad)" />
              <Area type="monotone" dataKey="target" name="Objetivo Presupuestario" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#targetGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'margen' && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData}>
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} tickFormatter={(v) => `${v}%`} domain={[20, 50]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                formatter={(val: number) => [`${val}%`, 'Margen']}
              />
              <Line type="monotone" dataKey="margin" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'canales' && (
          <div className="grid sm:grid-cols-2 gap-6 h-full items-center">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Distribución de Ingresos por Canal</h4>
              {CHANNELS_DATA.map((ch) => (
                <div key={ch.name} className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>{ch.name}</span>
                    <span className="font-mono font-semibold">{ch.value}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${ch.value}%`, backgroundColor: ch.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Insight de Negocio</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                El canal directo B2B genera el 45% del volumen con el mayor margen medio (42%). Recomendamos incrementar el esfuerzo comercial en cuentas clave.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-amber-400" />
          Ejemplo funcional de cómo visualizamos y estructuramos los datos para tu negocio.
        </span>
        <span className="text-amber-400/90 font-medium">100% a medida con tus herramientas</span>
      </div>
    </div>
  );
}
