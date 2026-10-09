'use client';

import type { ArgumentItem } from '@/data/segundo-orden/types';
import { EyeOff, Eye, ChevronRight } from 'lucide-react';

interface QuickMatrixViewProps {
  argumentsList: ArgumentItem[];
  onSelectArgument: (arg: ArgumentItem) => void;
}

export const QuickMatrixView = ({
  argumentsList,
  onSelectArgument,
}: QuickMatrixViewProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
      <div className="text-center sm:text-left mb-2">
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          Modo Matriz Comparativa • Contraste Directo
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3.5">
        {argumentsList.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectArgument(item)}
            className="group cursor-pointer bg-[#111218] border border-white/[0.08] hover:border-emerald-500/40 rounded-xl p-4 sm:p-5 transition-all duration-200 hover:shadow-sm text-left"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.05] text-zinc-400">
                  {item.categoryLabel}
                </span>
                <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </span>
              </div>
              <span className="text-xs text-zinc-500 flex items-center gap-1 group-hover:text-emerald-400 transition-colors font-medium">
                Ver detalle
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Lo que se ve */}
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/20">
                <div className="flex items-center gap-1.5 text-rose-400 text-[11px] font-bold uppercase font-mono mb-1">
                  <EyeOff className="w-3 h-3" />
                  <span>Lo que se ve (Dogma)</span>
                </div>
                <p className="text-xs text-zinc-300 italic leading-snug">
                  {item.surfaceClaim.headline}
                </p>
              </div>

              {/* Lo que no se ve */}
              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold uppercase font-mono mb-1">
                  <Eye className="w-3 h-3" />
                  <span>Lo que no se ve (Realidad)</span>
                </div>
                <p className="text-xs text-emerald-100 font-medium leading-snug">
                  {item.deepReality.coreMechanism}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
