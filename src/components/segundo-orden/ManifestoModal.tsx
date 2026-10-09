'use client';

import { X, Compass, CheckCircle2 } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManifestoModal = ({ isOpen, onClose }: ManifestoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-[#111218] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                El Manifiesto de Segundo Orden
              </h3>
              <p className="text-xs text-zinc-400">
                Por qué nace este proyecto y cuál es nuestra postura ética e intelectual
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
          {/* Introducción */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="font-normal text-white text-sm sm:text-base mb-2">
              «En el debate político español, la inteligencia se ha sustituido por eslóganes emocionales de diez segundos.»
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Se asume que la sociedad está formada por niños a los que hay que seducir con promesas sin coste, en lugar de adultos capaces de comprender que todo en esta vida conlleva sacrificios, incentivos y consecuencias imprevistas.
            </p>
          </div>

          {/* Los dos pilares teóricos */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Nuestros dos principios fundamentales:
            </h4>

            <div className="p-4 rounded-xl bg-[#0d0e14] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono">1</span>
                <span>Frédéric Bastiat (1850) — «Lo que se ve y lo que no se ve»</span>
              </div>
              <p className="text-zinc-400 text-xs">
                Entre una mala y una buena política económica solo hay una diferencia: el mal economista solo ve la consecuencia inmediata (lo que se ve). El buen economista prevé tanto la consecuencia visible como todas las que se desencadenan después (lo que no se ve: oferta destruida, desempleo oculto, capital fugado).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0e14] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono">2</span>
                <span>Thomas Sowell — «No hay soluciones mágicas, solo trade-offs»</span>
              </div>
              <p className="text-zinc-400 text-xs">
                La política promete "soluciones gratuitas": alquiler barato para todos, salarios altos por decreto, despidos imposibles sin coste. La economía recuerda la realidad biológica del mundo: no hay soluciones definitivas; toda medida tiene un coste de oportunidad y altera el comportamiento humano.
              </p>
            </div>
          </div>

          {/* Nuestra postura transparente */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Transparencia total sobre nuestro enfoque:
            </h4>
            <p>
              No escondemos nuestro prisma: <strong>somos liberales</strong>. Creemos en la soberanía del individuo, en la competencia libre frente al monopolio estatal, en el derecho a la propiedad y en la asombrosa capacidad autorreguladora del mercado libre para coordinar las necesidades de millones de personas sin necesidad de coerción burocrática.
            </p>
            <p>
              Pero más allá de etiquetas partidistas —que a menudo no son más que trincheras vacías— nuestro compromiso absoluto es con <strong>los datos, la evidencia empírica y la verdad matemática</strong>. Ningún partido político tiene la franquicia de la sensatez.
            </p>
          </div>

          {/* Tres compromisos */}
          <div className="pt-2 border-t border-white/[0.06] space-y-2">
            <div className="flex items-start gap-2.5 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Cero descalificaciones personales:</strong> atacamos argumentos y falacias lógicas, jamás personas ni partidos.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Fuentes institucionales y académicas:</strong> cada afirmación viene respaldada por organismos oficiales y papers revisados por pares.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Pensamiento crítico activo:</strong> te invitamos a dudar de todo, contrastar los datos y llegar a tus propias conclusiones.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-[#0c0d12] flex items-center justify-between">
          <span className="text-[11px] font-mono text-zinc-500">
            SEGUNDO ORDEN • 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-xs font-bold transition-colors"
          >
            Entendido y De Acuerdo
          </button>
        </div>
      </div>
    </div>
  );
};
