'use client';

import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import type { ArgumentItem } from '@/data/segundo-orden/types';

interface SocialShareModalProps {
  argument: ArgumentItem | null;
  onClose: () => void;
}

export const SocialShareModal = ({ argument, onClose }: SocialShareModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!argument) return null;

  const getOrigin = () => (typeof window !== 'undefined' ? window.location.origin : 'https://powerdashboard-eta.vercel.app');

  const socialPostText = `🔎 ${argument.title.toUpperCase()}

❌ EL DOGMA SIMPLISTA:
${argument.surfaceClaim.headline}

💡 LA MECÁNICA REAL (SEGUNDO ORDEN):
${argument.deepReality.coreMechanism}

📊 EL DATO CLAVE:
${argument.empiricalEvidence.metrics.map(m => `• ${m.label}: ${m.value}`).join('\n')}

🔗 Lee el desglose completo con fuentes oficiales en Segundo Orden:
${getOrigin()}/segundo-orden#${argument.id}`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(socialPostText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenTwitter = () => {
    const text = encodeURIComponent(
      `🔎 ${argument.title}\n\n❌ El eslogan: ${argument.surfaceClaim.headline}\n💡 Lo que no se ve: ${argument.deepReality.coreMechanism}\n\nDesglose empírico en Segundo Orden: ${getOrigin()}/segundo-orden#${argument.id}`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `*${argument.title}*\n\n❌ _El dogma:_ ${argument.surfaceClaim.headline}\n\n💡 _La realidad:_ ${argument.deepReality.coreMechanism}\n\nAnálisis con fuentes: ${getOrigin()}/segundo-orden#${argument.id}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="w-full max-w-lg bg-[#111218] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Ficha para Redes Sociales
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The Visual Social Card (Ready to screenshot) */}
        <div className="p-5 overflow-y-auto">
          <div 
            id="social-capture-card-pd" 
            className="bg-[#0b0c10] border border-white/15 rounded-xl p-5 relative overflow-hidden shadow-2xl text-left"
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Brand Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-500 text-zinc-950 font-black text-[10px] flex items-center justify-center font-mono">
                  2°
                </span>
                <span className="text-xs font-bold tracking-tight text-white font-mono">
                  SEGUNDO ORDEN
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                {argument.categoryLabel.toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h4 className="text-base sm:text-lg font-extrabold text-white leading-snug mb-3">
              {argument.title}
            </h4>

            {/* Contrast Block */}
            <div className="space-y-2.5 mb-4 text-xs">
              <div className="p-2.5 rounded-lg bg-rose-950/25 border border-rose-500/30">
                <span className="text-[9px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-0.5">
                  1. LO QUE SE VE (EL DOGMA)
                </span>
                <p className="text-zinc-200 italic leading-snug">
                  {argument.surfaceClaim.headline}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-950/25 border border-emerald-500/30">
                <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">
                  2. LO QUE NO SE VE (LA REALIDAD)
                </span>
                <p className="text-emerald-100 font-medium leading-snug">
                  {argument.deepReality.coreMechanism}
                </p>
              </div>
            </div>

            {/* Key Data Point Pill */}
            <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 mb-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono text-[11px]">
                  {argument.empiricalEvidence.metrics[0].label}:
                </span>
                <span className="font-mono font-black text-sm text-emerald-400">
                  {argument.empiricalEvidence.metrics[0].value}
                </span>
              </div>
            </div>

            {/* Card Footer Tag */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-zinc-400 font-mono">
              <span>fuentes: {argument.sources[0].name}</span>
              <span className="text-emerald-400 font-semibold">segundo-orden</span>
            </div>
          </div>

          <p className="text-center text-[11px] text-zinc-500 mt-3">
            💡 Puedes hacer una captura de pantalla a este recuadro o copiar el texto formateado.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-[#0c0d12] flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleCopyText}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-xs font-bold transition-colors shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡Copiado al portapapeles!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar texto formateado</span>
              </>
            )}
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleOpenTwitter}
              className="px-3.5 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-medium transition-colors"
              title="Compartir en X"
            >
              Publicar en X
            </button>
            <button
              onClick={handleOpenWhatsApp}
              className="px-3.5 py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-colors"
              title="Compartir en WhatsApp"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
