'use client';

import React from 'react';
import { Search, TrendingUp, ShieldCheck, Database } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalArguments: number;
  theme: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  totalArguments,
  theme,
}) => {
  const isLight = theme === 'light';

  return (
    <section className="relative pt-8 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-8 text-center overflow-hidden">
      {/* Ambient background glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] blur-3xl pointer-events-none -z-10 ${
        isLight 
          ? 'bg-gradient-to-b from-emerald-100/60 via-slate-100/40 to-transparent' 
          : 'bg-gradient-to-b from-slate-700/25 via-emerald-950/20 to-transparent'
      }`} />

      <div className="max-w-4xl mx-auto space-y-5">
        {/* Editorial Pill */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono shadow-sm ${
          isLight 
            ? 'bg-white border-slate-200 text-slate-700' 
            : 'bg-[#151c2a] border-slate-700/80 text-slate-300'
        }`}>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-emerald-500 font-bold tracking-wider">SEGUNDO ORDEN</span>
          <span className={isLight ? 'text-slate-300' : 'text-slate-600'}>|</span>
          <span>ANÁLISIS ECONÓMICO EMPÍRICO</span>
        </div>

        {/* Heading */}
        <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}>
          La política promete en diez segundos. <br />
          <span className={
            isLight
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200'
          }>
            La economía responde durante diez años.
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed ${
          isLight ? 'text-slate-600' : 'text-slate-300'
        }`}>
          Menos eslóganes, más datos. Desmontamos mitos sobre{' '}
          <strong className={isLight ? 'text-slate-900 font-semibold' : 'text-white font-semibold'}>
            vivienda, despido, sanidad y salarios
          </strong>{' '}
          analizando incentivos, consecuencias no deseadas y fuentes oficiales.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-2">
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${
              isLight ? 'text-slate-400 group-focus-within:text-emerald-600' : 'text-slate-500 group-focus-within:text-emerald-400'
            }`}>
              <Search className="w-4 h-4" />
            </div>
            <input
              id="search-input-so-v2"
              name="search"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar por tema (ej. alquiler, despido, sanidad, salario mínimo)..."
              className={`w-full pl-11 pr-16 py-3 rounded-2xl text-sm transition-all shadow-md font-normal focus:outline-none focus:ring-2 ${
                isLight
                  ? 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20'
                  : 'bg-[#151c2a] border border-slate-700/80 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className={`absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold ${
                  isLight ? 'text-slate-400 hover:text-slate-700' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs font-mono ${
          isLight ? 'text-slate-500' : 'text-slate-400'
        }`}>
          <div className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-emerald-500" />
            <span>{totalArguments} Casos Desglosados</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
            <span>Fuentes: BDE, Eurostat, INE, OCDE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
            <span>Gráficos y Simuladores Interactivos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
