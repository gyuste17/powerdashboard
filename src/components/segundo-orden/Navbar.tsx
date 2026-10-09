'use client';

import Link from 'next/link';
import { Compass, Sliders, Share2, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  onOpenManifesto: () => void;
  onOpenSimulator: () => void;
  onShareSite: () => void;
  copied: boolean;
}

export const Navbar = ({
  onOpenManifesto,
  onOpenSimulator,
  onShareSite,
  copied,
}: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090a0f]/90 border-b border-white/[0.08] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo & Back to Main */}
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
            title="Volver a la portada de PowerDashboard"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PowerDashboard</span>
          </Link>

          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all shadow-sm">
              2°
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
                SEGUNDO ORDEN
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="hidden md:block text-[10px] font-mono text-zinc-500 -mt-1 tracking-wider uppercase">
                Pensar más allá del titular
              </span>
            </div>
          </a>
        </div>

        {/* Action Pills */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            onClick={onOpenSimulator}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/25 transition-all shadow-sm"
          >
            <Sliders className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xs:inline">Laboratorio</span>
            <span className="xs:hidden">Simular</span>
          </button>

          <button
            onClick={onOpenManifesto}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">El Manifiesto</span>
            <span className="sm:hidden">Manifiesto</span>
          </button>

          <button
            onClick={onShareSite}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all border border-transparent hover:border-white/[0.08]"
            title="Compartir plataforma"
          >
            <Share2 className="w-4 h-4 sm:hidden text-zinc-300" />
            <span className="hidden sm:inline">
              {copied ? '¡Copiado!' : 'Compartir'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
