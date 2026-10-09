'use client';

interface FooterProps {
  onOpenManifesto: () => void;
  onOpenSimulator: () => void;
}

export const Footer = ({
  onOpenManifesto,
  onOpenSimulator,
}: FooterProps) => {
  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#090a0f] py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Bastiat Quote Section */}
        <div className="p-6 rounded-2xl bg-[#111218] border border-white/[0.06] relative">
          <div className="max-w-3xl text-left">
            <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed font-light">
              «Entre un mal y un buen economista, toda la diferencia es esta: el uno se atiene al efecto visible; el otro tiene en cuenta tanto el efecto que se ve como aquellos que es necesario prever. Pero esta diferencia es enorme, pues sucede casi siempre que, cuando la consecuencia inmediata es favorable, las consecuencias ulteriores son funestas, y viceversa.»
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
              <span>— Frédéric Bastiat</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-500 font-normal">«Ce qu’on voit et ce qu’on ne voit pas» (1850)</span>
            </div>
          </div>
        </div>

        {/* Links & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/[0.04] text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px] flex items-center justify-center">
              2°
            </div>
            <span className="font-bold text-white tracking-tight">SEGUNDO ORDEN</span>
            <span>— Pensamiento crítico y rigor económico</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSimulator}
              className="hover:text-emerald-400 transition-colors"
            >
              Laboratorio
            </button>
            <button
              onClick={onOpenManifesto}
              className="hover:text-emerald-400 transition-colors"
            >
              Manifiesto
            </button>
            <a
              href="#top"
              className="hover:text-zinc-300 transition-colors"
            >
              Volver arriba ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
