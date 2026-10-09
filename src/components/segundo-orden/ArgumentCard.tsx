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
  Layers,
  Sparkles
} from 'lucide-react';
import type { ArgumentItem } from '@/data/segundo-orden/types';
import { InteractiveChart } from './InteractiveChart';
import { InstitutionLogo } from './InstitutionBadges';

interface ArgumentCardProps {
  argument: ArgumentItem;
  onOpenSocialModal: (arg: ArgumentItem) => void;
}

export const ArgumentCard = ({
  argument,
  onOpenSocialModal,
}: ArgumentCardProps) => {
  const [showDeepTheory, setShowDeepTheory] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

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

  return (
    <article 
      id={argument.id}
      className="group relative rounded-3xl bg-[#11141c] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 overflow-hidden shadow-2xl flex flex-col scroll-mt-28 text-left"
    >
      {/* ── Visual Editorial Image Header ─────────────── */}
      {argument.image && (
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
          <Image
            src={argument.image}
            alt={argument.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle gradient overlay to fade smoothly into card */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11141c] via-[#11141c]/50 to-transparent" />
          
          {/* Badges on top of image */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-slate-200 font-semibold">
              {argument.categoryLabel}
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 font-semibold">
              {argument.badge}
            </span>
          </div>
        </div>
      )}

      {/* ── Card Title & Verdict ───────────────────────── */}
      <div className="p-6 sm:p-7 pb-4 relative z-10">
        {!argument.image && (
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold">
              {argument.categoryLabel}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              {argument.badge}
            </span>
          </div>
        )}

        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
          {argument.title}
        </h3>

        <div className="mt-3 flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 font-medium leading-relaxed">
          <span className="font-bold text-amber-400 shrink-0">Veredicto:</span>
          <span>{argument.impactVerdict}</span>
        </div>
      </div>

      {/* ── Side-by-Side Quick Contrast (Eslogan vs Realidad) ──── */}
      <div className="px-6 sm:px-7 space-y-3">
        {/* 1. Lo que se ve */}
        <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/25">
          <div className="flex items-center gap-1.5 text-rose-400 text-[10px] font-bold uppercase font-mono mb-1">
            <EyeOff className="w-3.5 h-3.5" />
            <span>El Eslogan Populista</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 italic font-medium leading-snug">
            {argument.surfaceClaim.headline}
          </p>
        </div>

        {/* 2. Lo que no se ve */}
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/25">
          <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold uppercase font-mono mb-1">
            <Eye className="w-3.5 h-3.5" />
            <span>La Realidad de Mercado (Segundo Orden)</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-snug">
            {argument.deepReality.coreMechanism}
          </p>
        </div>
      </div>

      {/* ── Highlight KPIs & Visual Chart (FRONT AND CENTER) ──── */}
      <div className="p-6 sm:p-7 pt-5 space-y-4">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {argument.empiricalEvidence.metrics.map((m, i) => (
            <div 
              key={i}
              className="bg-[#0b0d13] border border-white/[0.06] rounded-xl p-3 flex flex-col justify-between"
            >
              <span className="text-[11px] text-slate-400 leading-tight mb-2">
                {m.label}
              </span>
              <div className="flex items-baseline justify-between gap-1">
                <span className={`text-xl sm:text-2xl font-bold font-mono ${
                  m.color === 'rose' ? 'text-rose-400' :
                  m.color === 'emerald' ? 'text-emerald-400' :
                  m.color === 'amber' ? 'text-amber-400' : 'text-cyan-400'
                }`}>
                  {m.value}
                </span>
                {m.trend === 'up' && <TrendingUp className="w-4 h-4 text-rose-400" />}
                {m.trend === 'down' && <TrendingDown className="w-4 h-4 text-emerald-400" />}
              </div>
            </div>
          ))}
        </div>

        {/* The Graphic (Always visible!) */}
        <InteractiveChart
          title={argument.empiricalEvidence.chartData.title}
          subtitle={argument.empiricalEvidence.chartData.subtitle}
          data={argument.empiricalEvidence.chartData.data}
          dataKeys={argument.empiricalEvidence.chartData.dataKeys}
          chartType={argument.empiricalEvidence.chartData.chartType}
        />

        {/* Institution Badges */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Fuentes Oficiales:</span>
          {argument.sources.map((src, i) => (
            <InstitutionLogo key={i} name={src.name} />
          ))}
        </div>

        {/* Optional Collapsible Theory Expander */}
        <div>
          <button
            onClick={() => setShowDeepTheory(!showDeepTheory)}
            className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs text-slate-300 font-medium transition-all"
          >
            <span>{showDeepTheory ? 'Ocultar análisis teórico' : 'Leer análisis teórico y consecuencias (Bastiat)'}</span>
            {showDeepTheory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDeepTheory && (
            <div className="mt-3 p-4 rounded-xl bg-[#090b10] border border-white/[0.06] space-y-3 text-xs text-slate-300 leading-relaxed font-light">
              <div className="space-y-2">
                {argument.deepReality.explanation.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <blockquote className="pt-2 border-t border-white/[0.06] italic text-slate-400">
                «{argument.deepReality.lawPrinciple.quote.replace(/[«»]/g, '')}»
                <cite className="not-italic text-[10px] text-slate-500 block mt-1 font-mono">
                  — {argument.deepReality.lawPrinciple.author}
                </cite>
              </blockquote>
            </div>
          )}
        </div>
      </div>

      {/* ── Card Footer Actions ────────────────────────── */}
      <footer className="p-6 sm:p-7 pt-0 mt-auto border-t border-white/[0.06] flex items-center justify-between gap-2 pt-4">
        <button
          onClick={() => onOpenSocialModal(argument)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs font-medium transition-all border border-white/[0.08]"
        >
          <Layers className="w-3.5 h-3.5 text-slate-400" />
          <span>Ficha para Redes</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs font-semibold transition-all border border-emerald-500/30 shadow-sm"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>¡Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Compartir</span>
            </>
          )}
        </button>
      </footer>
    </article>
  );
};
