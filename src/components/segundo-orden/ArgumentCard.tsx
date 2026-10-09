'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeOff, 
  Eye, 
  Scale, 
  Share2, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight,
  TrendingDown, 
  TrendingUp, 
  Check,
  Layers,
  BarChart3,
  Sliders,
  Sparkles,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import type { ArgumentItem } from '@/data/segundo-orden/types';
import { InteractiveChart } from './InteractiveChart';
import { InstitutionLogo } from './InstitutionBadges';
import { CardCalculator } from './CardCalculator';

interface ArgumentCardProps {
  argument: ArgumentItem;
  theme: 'light' | 'dark';
  index?: number;
  onOpenSocialModal: (arg: ArgumentItem) => void;
}

type StoryStage = 'mito' | 'realidad' | 'veredicto';

export const ArgumentCard = ({
  argument,
  theme,
  index = 0,
  onOpenSocialModal,
}: ArgumentCardProps) => {
  // Interactive story stage (Mito -> Realidad -> Veredicto)
  const [activeStage, setActiveStage] = useState<StoryStage>('mito');
  const [expandAllStages, setExpandAllStages] = useState(false);

  // Toggle between Graphic and Simulator (default: 'chart')
  const [visualMode, setVisualMode] = useState<'chart' | 'simulator'>('chart');

  // Theory collapse
  const [showDeepTheory, setShowDeepTheory] = useState(false);

  // Subtle share dropdown
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
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

  const handleOpenTwitter = () => {
    const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/segundo-orden#${argument.id}`;
    const text = encodeURIComponent(
      `🔎 ${argument.title}\n\n❌ El mito: ${argument.surfaceClaim.headline}\n💡 Lo que no se ve: ${argument.deepReality.coreMechanism}\n\nDesglose empírico: ${shareUrl}`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const handleOpenWhatsApp = () => {
    const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/segundo-orden#${argument.id}`;
    const text = encodeURIComponent(
      `*${argument.title}*\n\n❌ _El mito:_ ${argument.surfaceClaim.headline}\n\n💡 _La realidad:_ ${argument.deepReality.coreMechanism}\n\nAnálisis con datos: ${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleNextStage = () => {
    if (activeStage === 'mito') setActiveStage('realidad');
    else if (activeStage === 'realidad') setActiveStage('veredicto');
    else setActiveStage('mito');
  };

  // Theme-aware styles
  const cardBg = isLight 
    ? 'bg-white border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-slate-300' 
    : 'bg-[#151c2a]/90 border-slate-800/80 shadow-2xl hover:border-slate-700/80';

  const mitoBg = isLight
    ? 'bg-rose-50/80 border-rose-200/80 text-rose-950'
    : 'bg-rose-950/20 border-rose-500/25 text-rose-100';

  const realidadBg = isLight
    ? 'bg-emerald-50/80 border-emerald-200/80 text-emerald-950'
    : 'bg-emerald-950/20 border-emerald-500/25 text-emerald-100';

  const veredictoBorder = isLight
    ? 'border-2 border-amber-500/60 bg-transparent text-amber-900'
    : 'border-2 border-amber-500/50 bg-transparent text-amber-200';

  const kpiBoxBg = isLight
    ? 'bg-slate-50/90 border-slate-200 text-slate-900'
    : 'bg-[#0f141f] border-slate-800/90 text-slate-100';

  const toggleBg = isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#0f141f] border-slate-800';

  const expanderBg = isLight
    ? 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
    : 'bg-[#101520] hover:bg-[#161d2b] border-slate-800 text-slate-300';

  const theoryBodyBg = isLight
    ? 'bg-slate-50/90 border-slate-200 text-slate-700'
    : 'bg-[#0d121c] border-slate-800 text-slate-300';

  return (
    <motion.article 
      id={argument.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4) }}
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
            priority={index === 0}
          />
        )}
        {/* Scrim gradient overlay */}
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

      {/* ── Interactive 3-Stage Stepper: 1. El Mito -> 2. La Realidad -> 3. El Veredicto ── */}
      <div className="p-4 sm:p-6 pb-2 space-y-3">
        {/* Segmented Story Tabs / Progress Bar */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-1">
            {/* Stage 1: El Mito */}
            <button
              onClick={() => { setActiveStage('mito'); setExpandAllStages(false); }}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 border ${
                activeStage === 'mito' && !expandAllStages
                  ? 'bg-rose-500/20 text-rose-500 border-rose-500/40 shadow-xs'
                  : isLight 
                    ? 'bg-slate-100 text-slate-500 border-slate-200 hover:text-slate-800' 
                    : 'bg-[#121722] text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <EyeOff className="w-3 h-3" />
              <span>1. El Mito</span>
            </button>

            {/* Stage 2: La Realidad */}
            <button
              onClick={() => { setActiveStage('realidad'); setExpandAllStages(false); }}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 border ${
                activeStage === 'realidad' && !expandAllStages
                  ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/40 shadow-xs'
                  : isLight 
                    ? 'bg-slate-100 text-slate-500 border-slate-200 hover:text-slate-800' 
                    : 'bg-[#121722] text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>2. Realidad</span>
            </button>

            {/* Stage 3: El Veredicto */}
            <button
              onClick={() => { setActiveStage('veredicto'); setExpandAllStages(false); }}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 border ${
                activeStage === 'veredicto' && !expandAllStages
                  ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 shadow-xs'
                  : isLight 
                    ? 'bg-slate-100 text-slate-500 border-slate-200 hover:text-slate-800' 
                    : 'bg-[#121722] text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Scale className="w-3 h-3" />
              <span>3. Veredicto</span>
            </button>
          </div>

          {/* Toggle "Ver los 3 juntos" */}
          <button
            onClick={() => setExpandAllStages(!expandAllStages)}
            className={`text-[10px] font-mono px-2 py-1 rounded-md border transition-colors shrink-0 ${
              expandAllStages
                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30 font-bold'
                : isLight
                  ? 'bg-slate-100 text-slate-500 hover:text-slate-800 border-slate-200'
                  : 'bg-[#121722] text-slate-500 hover:text-slate-300 border-slate-800'
            }`}
            title="Alternar entre modo interactivo paso a paso y ver todo desplegado"
          >
            {expandAllStages ? 'Paso a paso' : 'Ver las 3'}
          </button>
        </div>

        {/* ── Active Stage Card Content (With Tap-to-Advance Story Feel) ── */}
        {!expandAllStages ? (
          <div 
            onClick={handleNextStage}
            className="cursor-pointer group/card relative select-none"
            title="Haz clic para avanzar a la siguiente tarjeta"
          >
            <AnimatePresence mode="wait">
              {activeStage === 'mito' && (
                <motion.div
                  key="stage-mito"
                  initial={{ opacity: 0, scale: 0.98, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className={`p-4 rounded-2xl border min-h-[110px] flex flex-col justify-between ${mitoBg}`}
                >
                  <div>
                    <div className="flex items-center justify-between text-rose-500 text-[10px] font-bold uppercase font-mono mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>1. El Mito Populista</span>
                      </div>
                      <span className="text-[10px] font-normal text-rose-400/80 font-sans hidden sm:inline">
                        Toca para desmontar →
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm italic font-medium leading-relaxed">
                      {argument.surfaceClaim.headline}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-rose-500/90 font-bold">
                    <span>{argument.surfaceClaim.popularQuote}</span>
                    <span className="flex items-center gap-1 sm:hidden">
                      Toca <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              )}

              {activeStage === 'realidad' && (
                <motion.div
                  key="stage-realidad"
                  initial={{ opacity: 0, scale: 0.98, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className={`p-4 rounded-2xl border min-h-[110px] flex flex-col justify-between ${realidadBg}`}
                >
                  <div>
                    <div className="flex items-center justify-between text-emerald-500 text-[10px] font-bold uppercase font-mono mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>2. La Realidad de Mercado (Segundo Orden)</span>
                      </div>
                      <span className="text-[10px] font-normal text-emerald-400/80 font-sans hidden sm:inline">
                        Toca para veredicto →
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed">
                      {argument.deepReality.coreMechanism}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-emerald-500/90 font-bold">
                    <span>Mecánica empírica comprobada</span>
                    <span className="flex items-center gap-1 sm:hidden">
                      Toca <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              )}

              {activeStage === 'veredicto' && (
                <motion.div
                  key="stage-veredicto"
                  initial={{ opacity: 0, scale: 0.98, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className={`p-4 rounded-2xl min-h-[110px] flex flex-col justify-between ${veredictoBorder}`}
                >
                  <div>
                    <div className="flex items-center justify-between text-amber-500 text-[10px] font-bold uppercase font-mono mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5" />
                        <span>3. El Veredicto Final</span>
                      </div>
                      <span className="text-[10px] font-normal text-amber-500/80 font-sans hidden sm:inline flex items-center gap-1">
                        <RotateCcw className="w-3 h-3" /> Volver al mito
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                      {argument.impactVerdict}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-amber-500 font-bold">
                    <span>Consecuencia neta a largo plazo</span>
                    <span className="flex items-center gap-1 sm:hidden">
                      Reiniciar ↻
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Modo desplegado: las 3 juntas en orden solicitado */
          <div className="space-y-2.5">
            {/* 1. El Mito */}
            <div className={`p-3.5 rounded-2xl border ${mitoBg}`}>
              <div className="flex items-center gap-1.5 text-rose-500 text-[10px] font-bold uppercase font-mono mb-1">
                <EyeOff className="w-3.5 h-3.5" />
                <span>1. El Mito</span>
              </div>
              <p className="text-xs sm:text-sm italic font-medium leading-snug">
                {argument.surfaceClaim.headline}
              </p>
            </div>

            {/* 2. La Realidad */}
            <div className={`p-3.5 rounded-2xl border ${realidadBg}`}>
              <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase font-mono mb-1">
                <Eye className="w-3.5 h-3.5" />
                <span>2. La Realidad de Mercado</span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-snug">
                {argument.deepReality.coreMechanism}
              </p>
            </div>

            {/* 3. El Veredicto (sin fondo, con borde de color) */}
            <div className={`p-3.5 rounded-2xl ${veredictoBorder}`}>
              <div className="flex items-center gap-1.5 text-amber-500 text-[10px] font-bold uppercase font-mono mb-1">
                <Scale className="w-3.5 h-3.5" />
                <span>3. El Veredicto</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold leading-snug">
                {argument.impactVerdict}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── Quantitative KPIs Row with Explicit Baselines ("Comparado con") ──── */}
      <div className="px-4 sm:px-6 pt-2 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {argument.empiricalEvidence.metrics.map((m, i) => (
            <div 
              key={i}
              className={`border rounded-2xl p-3 flex flex-col justify-between ${kpiBoxBg}`}
            >
              <div>
                <span className={`text-[11px] font-medium leading-tight block mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {m.label}
                </span>
                <div className="flex items-baseline justify-between gap-1">
                  <span className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${
                    m.color === 'rose' ? 'text-rose-500' :
                    m.color === 'emerald' ? 'text-emerald-500' :
                    m.color === 'amber' ? 'text-amber-500' : 'text-cyan-500'
                  }`}>
                    {m.value}
                  </span>
                  {m.trend === 'up' && <TrendingUp className="w-4 h-4 text-rose-500 shrink-0" />}
                  {m.trend === 'down' && <TrendingDown className="w-4 h-4 text-emerald-500 shrink-0" />}
                </div>
              </div>

              {/* Explicit baseline comparison detail */}
              <div className="mt-2 pt-1.5 border-t border-slate-200/50 dark:border-slate-800/80">
                <span className={`text-[10px] leading-tight block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  <strong className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300 font-semibold'}>
                    Comparado con:{' '}
                  </strong>
                  {m.comparison || m.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Toggle: Gráfico Oficial vs Simulador Interactivo ──── */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-mono uppercase tracking-wider font-bold ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Evidencia & Análisis
            </span>

            {/* Segmented Switcher */}
            <div className={`p-1 rounded-xl border flex items-center gap-1 ${toggleBg}`}>
              <button
                onClick={() => setVisualMode('chart')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  visualMode === 'chart'
                    ? isLight
                      ? 'bg-white text-emerald-700 border border-slate-200 shadow-xs'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-xs'
                    : isLight
                      ? 'text-slate-500 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Gráfico Oficial</span>
              </button>

              <button
                onClick={() => setVisualMode('simulator')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  visualMode === 'simulator'
                    ? isLight
                      ? 'bg-white text-emerald-700 border border-slate-200 shadow-xs'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-xs'
                    : isLight
                      ? 'text-slate-500 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5 text-emerald-500" />
                <span>Calculadora</span>
              </button>
            </div>
          </div>

          {/* Interactive display area */}
          <div className="min-h-[280px]">
            {visualMode === 'chart' ? (
              <InteractiveChart
                title={argument.empiricalEvidence.chartData.title}
                subtitle={argument.empiricalEvidence.chartData.subtitle}
                data={argument.empiricalEvidence.chartData.data}
                dataKeys={argument.empiricalEvidence.chartData.dataKeys}
                chartType={argument.empiricalEvidence.chartData.chartType}
                theme={theme}
              />
            ) : (
              <CardCalculator argumentId={argument.id} theme={theme} />
            )}
          </div>
        </div>

        {/* ── Official Institutional Sources Badges ──── */}
        <div className="pt-1 flex flex-wrap items-center gap-2">
          <span className={`text-[10px] font-mono uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Fuentes:
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

      {/* ── Subtle Expandable Share & Social Menu at the bottom ──── */}
      <footer className="px-4 sm:px-6 py-3 mt-auto border-t border-slate-100 dark:border-slate-800/70">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShareMenuOpen(!shareMenuOpen)}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors py-1 px-2 rounded-lg ${
              isLight
                ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Compartir y Redes</span>
            {shareMenuOpen ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
          </button>

          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600">
            #{argument.id}
          </span>
        </div>

        {/* Expandable subtle action options */}
        <AnimatePresence>
          {shareMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pt-2 pb-1 overflow-hidden"
            >
              <div className={`p-2.5 rounded-xl border flex flex-wrap items-center gap-2 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#101520] border-slate-800'
              }`}>
                {/* 1. Copiar enlace */}
                <button
                  onClick={handleShare}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    copiedLink
                      ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border-emerald-500/30'
                      : isLight
                        ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
                </button>

                {/* 2. Ficha para redes */}
                <button
                  onClick={() => onOpenSocialModal(argument)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ficha Gráfica</span>
                </button>

                {/* 3. Compartir X */}
                <button
                  onClick={handleOpenTwitter}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                  title="Compartir en X"
                >
                  <span>X (Twitter)</span>
                </button>

                {/* 4. Compartir WhatsApp */}
                <button
                  onClick={handleOpenWhatsApp}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-emerald-700 border-slate-200'
                      : 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border-slate-700'
                  }`}
                  title="Compartir en WhatsApp"
                >
                  <span>WhatsApp</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </footer>
    </motion.article>
  );
};
