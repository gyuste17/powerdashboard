'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, ArrowUp, ArrowLeft } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="manifiesto"
      className={`border-t transition-colors duration-200 py-16 px-4 sm:px-8 relative overflow-hidden ${
        isLight 
          ? 'bg-slate-100/90 border-slate-200/90 text-slate-800' 
          : 'bg-[#0f141f] border-slate-800/80 text-slate-200'
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* ── Manifiesto Header ──────────────────────────── */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Fundamentos Intelectuales</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            El Manifiesto de Segundo Orden
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Por qué nace esta plataforma y cuál es nuestra postura ética, intelectual y metodológica frente a la política en España.
          </p>
        </div>

        {/* ── The Problem: Infantilización y Eslogans ─────── */}
        <div className={`p-6 sm:p-7 rounded-2xl border ${
          isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-[#151c2a] border-slate-700/70 shadow-lg'
        }`}>
          <blockquote className={`text-sm sm:text-base italic font-medium leading-relaxed mb-3 ${
            isLight ? 'text-slate-800' : 'text-slate-200'
          }`}>
            «En el debate político español contemporáneo, la inteligencia se ha sustituido por eslóganes emocionales de diez segundos. Se asume que la ciudadanía está formada por niños a los que hay que seducir con promesas gratuitas, en lugar de adultos capaces de comprender que todo en esta vida conlleva sacrificios, incentivos y consecuencias imprevistas.»
          </blockquote>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Cuando un gobernante promete un tope al alquiler, un encarecimiento del despido o una subida arbitraria de impuestos, solo muestra la primera jugada del tablero. Nuestro objetivo es mostrar la segunda, la tercera y la décima: cómo responde el mercado, cómo se adaptan los incentivos y quién acaba pagando la factura real.
          </p>
        </div>

        {/* ── Dos Pilares Fundamentales (Bastiat & Sowell) ──── */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-bold">
            Nuestros dos pilares de pensamiento económico:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pilar 1: Bastiat */}
            <div className={`p-5 rounded-2xl border space-y-2.5 ${
              isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-[#151c2a] border-slate-700/70 shadow-lg'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-mono font-bold flex items-center justify-center">
                  1
                </span>
                <span className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Frédéric Bastiat (1850)
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-500 font-semibold block">
                «Ce qu’on voit et ce qu’on ne voit pas»
              </span>
              <p className={`text-xs leading-relaxed font-light ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                Entre un mal y un buen economista, toda la diferencia es esta: el mal economista solo ve la consecuencia visible e inmediata. El buen economista prevé tanto el efecto que se ve como aquellos que es necesario prever (lo que no se ve: oferta destruida, desempleo oculto, fuga de talento e inversión).
              </p>
            </div>

            {/* Pilar 2: Sowell */}
            <div className={`p-5 rounded-2xl border space-y-2.5 ${
              isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-[#151c2a] border-slate-700/70 shadow-lg'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-500 text-xs font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <span className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Thomas Sowell
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-500 font-semibold block">
                «No hay soluciones, solo trade-offs»
              </span>
              <p className={`text-xs leading-relaxed font-light ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                La política promete soluciones mágicas a coste cero. La economía recuerda la realidad matemática del mundo: los recursos son escasos y tienen usos alternativos. No existen soluciones definitivas; toda intervención tiene un coste de oportunidad que alguien tiene que soportar.
              </p>
            </div>
          </div>
        </div>

        {/* ── Transparencia y Postura Liberal ────────────── */}
        <div className={`p-6 rounded-2xl border space-y-3 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#121824] border-slate-800'
        }`}>
          <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
            Transparencia total sobre nuestro enfoque:
          </h4>
          <p className={`text-xs sm:text-sm leading-relaxed ${
            isLight ? 'text-slate-700' : 'text-slate-300'
          }`}>
            No escondemos nuestro prisma: <strong>somos de convicción liberal</strong>. Creemos en la soberanía individual, en la competencia libre frente al monopolio coercitivo estatal, en el respeto a la propiedad privada y en la asombrosa capacidad del sistema de precios de mercado para coordinar el bienestar social.
          </p>
          <p className={`text-xs sm:text-sm leading-relaxed ${
            isLight ? 'text-slate-700' : 'text-slate-300'
          }`}>
            Pero más allá de banderas y trincheras partidistas, nuestro compromiso innegociable es con <strong>los datos, la evidencia empírica y la verdad matemática</strong>. Los números del Banco de España, de Eurostat o del INE no son de izquierdas ni de derechas: son hechos contrastados.
          </p>
        </div>

        {/* ── Tres Compromisos Inquebrantables ─────────────── */}
        <div className="space-y-3 pt-2">
          <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${
            isLight ? 'text-slate-800' : 'text-slate-200'
          }`}>
            Nuestros tres compromisos con el lector:
          </h4>
          <div className="space-y-2">
            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                <strong>Cero descalificaciones personales:</strong> atacamos argumentos, incentivos y falacias lógicas; jamás insultamos a personas ni a partidos.
              </span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                <strong>Fuentes institucionales y contrastadas:</strong> cada métrica se basa en informes oficiales del Banco de España, INE, OCDE, Eurostat o papers académicos de prestigio.
              </span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                <strong>Invitación permanente a la duda:</strong> no pedimos que creas nada a ciegas. Te invitamos a comprobar las fuentes, mover los simuladores y pensar por ti mismo.
              </span>
            </div>
          </div>
        </div>

        {/* ── Attribution & Bottom Bar ─────────────────────── */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800 text-slate-400'
        }`}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-500 font-mono font-bold text-xs flex items-center justify-center">
              2°
            </div>
            <span className={`font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
              SEGUNDO ORDEN
            </span>
            <span>— Pensamiento crítico y rigor económico</span>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PowerDashboard</span>
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
            >
              <span>Subir arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
