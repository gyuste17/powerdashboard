'use client';

import { Search, TrendingUp, ShieldCheck, Database, Sparkles } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalArguments: number;
}

export const Hero = ({
  searchQuery,
  onSearchChange,
  totalArguments,
}: HeroProps) => {
  return (
    <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-10 overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-slate-800/20 via-emerald-950/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-slate-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-emerald-400 font-bold tracking-wider">SEGUNDO ORDEN</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">ANÁLISIS ECONÓMICO EMPÍRICO</span>
        </div>

        {/* Heading with Personality & Impact */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
          La política promete en diez segundos. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
            La economía responde durante diez años.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Menos eslóganes, más datos. Desmontamos los mitos sobre <strong className="text-slate-200 font-semibold">vivienda, despido, sanidad y salarios</strong> analizando incentivos y consecuencias no deseadas.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-3">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400 transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="search-input-so-v2"
              name="search"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar por tema (ej. alquiler, despido, sanidad, salario mínimo)..."
              className="w-full pl-11 pr-4 py-3.5 bg-[#12151d] border border-slate-800 focus:border-emerald-500/50 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xl font-light"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-500 hover:text-slate-300"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Trust Badges with Real Data */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>{totalArguments} Casos Desglosados</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Evidencia Banco de España & Eurostat</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span>Gráficos y Métricas Cuantitativas</span>
          </div>
        </div>
      </div>
    </section>
  );
};
