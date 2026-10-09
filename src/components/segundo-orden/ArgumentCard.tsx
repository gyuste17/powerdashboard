'use client';

import { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  BarChart3, 
  BookOpen, 
  Share2, 
  Quote, 
  TrendingDown, 
  TrendingUp, 
  Check,
  Layers
} from 'lucide-react';
import type { ArgumentItem } from '@/data/segundo-orden/types';
import { InteractiveChart } from './InteractiveChart';

interface ArgumentCardProps {
  argument: ArgumentItem;
  onOpenSocialModal: (arg: ArgumentItem) => void;
}

type TabType = 'surface' | 'deep' | 'data' | 'sources';

export const ArgumentCard = ({
  argument,
  onOpenSocialModal,
}: ArgumentCardProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('deep');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/segundo-orden#${argument.id}`;
    const shareText = `«${argument.title}» - Análisis empírico de segundo orden. Lo que se ve vs lo que no se ve:`;

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
      className="group relative rounded-2xl bg-[#111218]/90 border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 overflow-hidden shadow-2xl flex flex-col scroll-mt-24 text-left"
    >
      {/* Glow highlight top corner */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all" />

      {/* Card Header */}
      <header className="p-5 sm:p-6 pb-4 border-b border-white/[0.06] relative z-10">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300 font-medium">
              {argument.categoryLabel}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {argument.badge}
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-600">
            #{argument.id}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
          {argument.title}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 mt-2 flex items-center gap-1.5 font-medium">
          <span className="text-amber-400 font-semibold">Impacto real:</span>
          <span>{argument.impactVerdict}</span>
        </p>
      </header>

      {/* Segmented Control Tabs */}
      <div className="px-5 sm:px-6 pt-3 pb-1 border-b border-white/[0.06] bg-[#0d0e14]/50">
        <div className="flex gap-1 overflow-x-auto no-scrollbar py-1 pr-2">
          <button
            onClick={() => setActiveTab('deep')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeTab === 'deep'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>2º Orden (Lo que no se ve)</span>
          </button>

          <button
            onClick={() => setActiveTab('surface')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeTab === 'surface'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
            }`}
          >
            <EyeOff className="w-3.5 h-3.5 text-rose-400" />
            <span>El Titular (Lo que se ve)</span>
          </button>

          <button
            onClick={() => setActiveTab('data')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeTab === 'data'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Evidencia & Gráfica</span>
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeTab === 'sources'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Fuentes ({argument.sources.length})</span>
          </button>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="p-5 sm:p-6 flex-1 min-h-[340px] flex flex-col justify-between">
        {/* TAB 1: DEEP REALITY (LO QUE NO SE VE) */}
        {activeTab === 'deep' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-300/90 text-xs sm:text-sm font-medium leading-relaxed">
              <span className="font-bold text-emerald-400 block mb-1">Mecanismo de mercado:</span>
              {argument.deepReality.coreMechanism}
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {argument.deepReality.explanation.map((parr, i) => (
                <p key={i} className="text-zinc-300 font-light">
                  {parr}
                </p>
              ))}
            </div>

            {/* Consecuencias imprevistas */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-2">
                Consecuencias no deseadas:
              </span>
              <ul className="space-y-1.5">
                {argument.deepReality.unintendedConsequences.map((c, i) => (
                  <li key={i} className="text-xs text-zinc-400 flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cita celebre */}
            <blockquote className="pt-3 border-t border-white/[0.06] flex gap-3 text-xs text-zinc-400 italic">
              <Quote className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p>«{argument.deepReality.lawPrinciple.quote.replace(/[«»]/g, '')}»</p>
                <cite className="not-italic text-[11px] text-zinc-500 font-medium block mt-1">
                  — {argument.deepReality.lawPrinciple.author}
                </cite>
              </div>
            </blockquote>
          </div>
        )}

        {/* TAB 2: SURFACE CLAIM (LO QUE SE VE) */}
        {activeTab === 'surface' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 relative">
              <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold block mb-1">
                El eslogan repetido
              </span>
              <p className="text-base sm:text-lg font-semibold text-rose-100 italic leading-snug">
                {argument.surfaceClaim.headline}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono mb-1.5">
                ¿Por qué suena tan intuitivo?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {argument.surfaceClaim.whyItSoundsGood}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono mb-1">
                La trampa de primer orden:
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {argument.surfaceClaim.fallacy}
              </p>
            </div>

            <div className="pt-2 text-xs text-zinc-500">
              <span className="text-zinc-400 font-medium">Nota:</span> Thomas Sowell definió el pensamiento de primer orden como detenerse en la primera consecuencia visible, sin preguntarse jamás: <em>«¿Y luego qué pasa?»</em>.
            </div>
          </div>
        )}

        {/* TAB 3: EMPIRICAL EVIDENCE & CHART */}
        {activeTab === 'data' && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-zinc-200">
                {argument.empiricalEvidence.headline}
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                {argument.empiricalEvidence.summary}
              </p>
            </div>

            {/* Quick Metrics KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {argument.empiricalEvidence.metrics.map((m, i) => (
                <div 
                  key={i}
                  className="bg-[#0e0f16] border border-white/[0.06] rounded-xl p-3 flex flex-col justify-between"
                >
                  <span className="text-[11px] text-zinc-400 leading-tight mb-2">
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
                  {m.detail && (
                    <span className="text-[10px] text-zinc-500 mt-1 block">
                      {m.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Chart */}
            <div className="pt-1">
              <InteractiveChart
                title={argument.empiricalEvidence.chartData.title}
                subtitle={argument.empiricalEvidence.chartData.subtitle}
                data={argument.empiricalEvidence.chartData.data}
                dataKeys={argument.empiricalEvidence.chartData.dataKeys}
                chartType={argument.empiricalEvidence.chartData.chartType}
              />
            </div>

            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium">
              <span className="font-bold">Conclusión empírica: </span>
              {argument.empiricalEvidence.verdict}
            </div>
          </div>
        )}

        {/* TAB 4: SOURCES */}
        {activeTab === 'sources' && (
          <div className="space-y-3">
            <p className="text-xs text-zinc-400 mb-2">
              Todos los datos y mecánicas expuestas se sustentan en organismos de estadística oficial y literatura económica contrastada:
            </p>

            <div className="space-y-2.5">
              {argument.sources.map((src, i) => (
                <div 
                  key={i}
                  className="p-3 rounded-xl bg-[#0e0f16] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {src.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-zinc-400 border border-white/[0.05]">
                      {src.type}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-light">
                    {src.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] text-zinc-500">
              ¿Quieres contrastar estos datos por tu cuenta? Puedes buscar directamente cualquiera de los informes citados en los portales oficiales del Banco de España, Eurostat o el INE.
            </div>
          </div>
        )}

        {/* Card Footer Actions */}
        <footer className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <button
            onClick={() => onOpenSocialModal(argument)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 text-xs font-medium transition-all border border-white/[0.08]"
          >
            <Layers className="w-3.5 h-3.5 text-zinc-400" />
            <span>Ficha para Redes</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs font-medium transition-all border border-emerald-500/30"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>¡Enlace copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Compartir</span>
              </>
            )}
          </button>
        </footer>
      </div>
    </article>
  );
};
