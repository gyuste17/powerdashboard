'use client';

import { Search, TrendingUp, ShieldCheck, Database } from 'lucide-react';

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
    <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-semibold">ECONOMÍA DE SEGUNDO ORDEN</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">ESPAÑA</span>
        </div>

        {/* Main Punchy Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
          La política promete en 10 segundos. <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-200 bg-clip-text text-transparent">
            La economía responde durante diez años.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Frente a la sobresimplificación y la infantilización del debate público: desgranamos los mitos sobre <strong className="text-zinc-200 font-medium">alquiler, despido, sanidad pública y salarios</strong> mediante incentivos reales y datos empíricos.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-2">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-emerald-400 transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="search-input-so"
              name="search"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar por tema (ej. alquiler, despido, sanidad, salario mínimo)..."
              className="w-full pl-11 pr-4 py-3 bg-[#111218]/90 border border-white/[0.1] focus:border-emerald-500/50 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xl font-light"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-zinc-500 hover:text-zinc-300"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Trust & Source Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>{totalArguments} Casos Desglosados</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Datos Banco de España & Eurostat</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Análisis de Incentivos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
