'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Eye, 
  EyeOff, 
  Share2, 
  ChevronDown, 
  ChevronUp, 
  TrendingDown, 
  TrendingUp, 
  Check,
  Layers
} from 'lucide-react';
import type { ArgumentItem } from '@/data/segundo-orden/types';
import { InteractiveChart } from './InteractiveChart';
import { InstitutionLogo } from './InstitutionBadges';
import { CardCalculator } from './CardCalculator';

interface ArgumentCardProps {
  argument: ArgumentItem;
  theme: 'light' | 'dark';
  onOpenSocialModal: (arg: ArgumentItem) => void;
}

export const ArgumentCard = ({
  argument,
  theme,
  onOpenSocialModal,
}: ArgumentCardProps) => {
  const [showDeepTheory, setShowDeepTheory] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const isLight = theme === 'light';

  const handleShare = async () => {
    const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/segundo-orden#${argument.id}`;
    const shareText = `«${argument.title}» - Análisis visual de segundo orden:`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: argument.title,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Fallback
      }
    }

    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Theme-aware styles
  const cardBg = isLight 
    ? 'bg-white border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-slate-300' 
    : 'bg-[#151c2a]/90 border-slate-800/80 shadow-2xl hover:border-slate-700/80';

  const verdictBg = isLight
    ? 'bg-amber-50/90 border-amber-200/90 text-amber-900'
    : 'bg-amber-950/20 border-amber-500/25 text-amber-200';

  const sloganBg = isLight
    ? 'bg-rose-50/80 border-rose-200/80 text-rose-950'
    : 'bg-rose-950/20 border-rose-500/25 text-rose-100';

  const realityBg = isLight
    ? 'bg-emerald-50/80 border-emerald-200/80 text-emerald-950'
    : 'bg-emerald-950/20 border-emerald-500/25 text-emerald-100';

  const kpiBoxBg = isLight
    ? 'bg-slate-50/90 border-slate-200 text-slate-900'
    : 'bg-[#0f141f] border-slate-800/90 text-slate-100';

  const expanderBg = isLight
    ? 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
    : 'bg-[#101520] hover:bg-[#161d2b] border-slate-800 text-slate-300';

  const theoryBodyBg = isLight
    ? 'bg-slate-50/90 border-slate-200 text-slate-700'
    : 'bg-[#0d121c] border-slate-800 text-slate-300';

  const footerBorder = isLight ? 'border-slate-100' : 'border-slate-800/70';

  return (
    <article 
      id={argument.id}
      className={`group relative rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col scroll-mt-36 text-left ${cardBg}`}
    >
      {/* ── Visual Editorial Image Header with Title OVER the Image ─────────────── */}
      <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-900">
        {argument.image && (
          <Image
            src={argument.image}
            alt={argument.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={argument.id === 'control-alquiler'}
          />
        )}
        {/* Scrim gradient overlay to ensure perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
        
        {/* Content overlaid directly on the image */}
        <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between z-10">
          {/* Top badges */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-slate-100 font-bold shadow-sm">
              {argument.categoryLabel}
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/25 backdrop-blur-md text-emerald-300 border border-emerald-400/35 font-bold shadow-sm">
              {argument.badge}
            </span>
          </div>

          {/* Headline directly over the image */}
          <h3 className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight leading-snug drop-shadow-md">
            {argument.title}
          </h3>
        </div>
      </div>

      {/* ── Impact Verdict Banner ───────────────────────── */}
      <div className="px-5 sm:px-6 pt-4 pb-2">
        <div className={`p-3 rounded-xl border text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-2 ${verdictBg}`}>
          <span className="font-bold text-amber-500 shrink-0">Veredicto:</span>
          <span>{argument.impactVerdict}</span>
        </div>
      </div>

      {/* ── Side-by-Side Quick Contrast (Eslogan vs Realidad) ──── */}
      <div className="px-5 sm:px-6 space-y-2.5 pt-1">
        {/* 1. Lo que se ve */}
        <div className={`p-3 rounded-xl border ${sloganBg}`}>
          <div className="flex items-center gap-1.5 text-rose-500 text-[10px] font-bold uppercase font-mono mb-1">
            <EyeOff className="w-3.5 h-3.5" />
            <span>El Eslogan Populista</span>
          </div>
          <p className="text-xs sm:text-sm italic font-medium leading-snug">
            {argument.surfaceClaim.headline}
          </p>
        </div>

        {/* 2. Lo que no se ve */}
        <div className={`p-3 rounded-xl border ${realityBg}`}>
          <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase font-mono mb-1">
            <Eye className="w-3.5 h-3.5" />
            <span>La Realidad de Mercado (Segundo Orden)</span>
          </div>
          <p className="text-xs sm:text-sm font-medium leading-snug">
            {argument.deepReality.coreMechanism}
          </p>
        </div>
      </div>

      {/* ── Quantitative KPIs Row ──── */}
      <div className="px-5 sm:px-6 pt-4 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {argument.empiricalEvidence.metrics.map((m, i) => (
            <div 
              key={i}
              className={`border rounded-xl p-3 flex flex-col justify-between ${kpiBoxBg}`}
            >
              <span className={`text-[11px] leading-tight mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {m.label}
              </span>
              <div className="flex items-baseline justify-between gap-1">
                <span className={`text-xl sm:text-2xl font-bold font-mono ${
                  m.color === 'rose' ? 'text-rose-500' :
                  m.color === 'emerald' ? 'text-emerald-500' :
                  m.color === 'amber' ? 'text-amber-500' : 'text-cyan-500'
                }`}>
                  {m.value}
                </span>
                {m.trend === 'up' && <TrendingUp className="w-4 h-4 text-rose-500" />}
                {m.trend === 'down' && <TrendingDown className="w-4 h-4 text-emerald-500" />}
              </div>
            </div>
          ))}
        </div>

        {/* ── Interactive Chart (Responsive) ──── */}
        <InteractiveChart
          title={argument.empiricalEvidence.chartData.title}
          subtitle={argument.empiricalEvidence.chartData.subtitle}
          data={argument.empiricalEvidence.chartData.data}
          dataKeys={argument.empiricalEvidence.chartData.dataKeys}
          chartType={argument.empiricalEvidence.chartData.chartType}
          theme={theme}
        />

        {/* ── INLINE INTERACTIVE CALCULATOR (Right in this Card!) ──── */}
        <CardCalculator argumentId={argument.id} theme={theme} />

        {/* ── Official Institutional Sources Badges ──── */}
        <div className="pt-1 flex flex-wrap items-center gap-2">
          <span className={`text-[10px] font-mono uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Fuentes Oficiales:
          </span>
          {argument.sources.map((src, i) => (
            <InstitutionLogo key={i} name={src.name} />
          ))}
        </div>

        {/* ── Collapsible Bastiat Theoretical Analysis ──── */}
        <div>
          <button
            onClick={() => setShowDeepTheory(!showDeepTheory)}
            className={`w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl border text-xs font-semibold transition-all ${expanderBg}`}
          >
            <span>{showDeepTheory ? 'Ocultar análisis teórico' : 'Leer análisis teórico y consecuencias (Bastiat)'}</span>
            {showDeepTheory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDeepTheory && (
            <div className={`mt-2.5 p-4 rounded-xl border space-y-3 text-xs leading-relaxed font-light ${theoryBodyBg}`}>
              <div className="space-y-2">
                {argument.deepReality.explanation.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <blockquote className={`pt-2 border-t italic ${isLight ? 'border-slate-200 text-slate-600' : 'border-slate-800 text-slate-400'}`}>
                «{argument.deepReality.lawPrinciple.quote.replace(/[«»]/g, '')}»
                <cite className="not-italic text-[10px] block mt-1 font-mono text-emerald-500">
                  — {argument.deepReality.lawPrinciple.author}
                </cite>
              </blockquote>
            </div>
          )}
        </div>
      </div>

      {/* ── Card Footer Actions ────────────────────────── */}
      <footer className={`p-5 sm:p-6 mt-auto border-t flex items-center justify-between gap-2 pt-4 ${footerBorder}`}>
        <button
          onClick={() => onOpenSocialModal(argument)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all border ${
            isLight
              ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              : 'bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border-white/[0.08]'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-slate-400" />
          <span>Ficha para Redes</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-600 dark:text-emerald-300 text-xs font-bold transition-all border border-emerald-500/30 shadow-sm"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>¡Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Compartir</span>
            </>
          )}
        </button>
      </footer>
    </article>
  );
};
