'use client';

import React from 'react';
import type { ArgumentItem } from '@/data/segundo-orden/types';
import { EyeOff, Eye, ChevronRight } from 'lucide-react';

interface QuickMatrixViewProps {
  argumentsList: ArgumentItem[];
  onSelectArgument: (arg: ArgumentItem) => void;
  theme: 'light' | 'dark';
}

export const QuickMatrixView: React.FC<QuickMatrixViewProps> = ({
  argumentsList,
  onSelectArgument,
  theme,
}) => {
  const isLight = theme === 'light';

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
      <div className="text-center sm:text-left mb-2">
        <span className={`text-[11px] font-mono uppercase tracking-widest ${
          isLight ? 'text-slate-500' : 'text-slate-400'
        }`}>
          Modo Matriz Comparativa • Contraste Directo
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3.5">
        {argumentsList.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectArgument(item)}
            className={`group cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-200 border text-left ${
              isLight
                ? 'bg-white border-slate-200/90 hover:border-emerald-500/50 hover:shadow-md'
                : 'bg-[#151c2a] border-slate-800/80 hover:border-emerald-500/40 hover:shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                  isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-slate-300'
                }`}>
                  {item.categoryLabel}
                </span>
                <span className={`text-xs sm:text-sm font-bold transition-colors ${
                  isLight ? 'text-slate-900 group-hover:text-emerald-600' : 'text-white group-hover:text-emerald-400'
                }`}>
                  {item.title}
                </span>
              </div>
              <span className={`text-xs flex items-center gap-1 font-medium transition-colors ${
                isLight ? 'text-slate-500 group-hover:text-emerald-600' : 'text-slate-400 group-hover:text-emerald-400'
              }`}>
                Ver detalle
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Lo que se ve */}
              <div className={`p-3 rounded-xl border ${
                isLight ? 'bg-rose-50/80 border-rose-200 text-rose-950' : 'bg-rose-950/20 border-rose-500/25 text-rose-100'
              }`}>
                <div className="flex items-center gap-1.5 text-rose-500 text-[11px] font-bold uppercase font-mono mb-1">
                  <EyeOff className="w-3 h-3" />
                  <span>Lo que se ve (Dogma)</span>
                </div>
                <p className="text-xs italic leading-snug">
                  {item.surfaceClaim.headline}
                </p>
              </div>

              {/* Lo que no se ve */}
              <div className={`p-3 rounded-xl border ${
                isLight ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-emerald-950/20 border-emerald-500/25 text-emerald-100'
              }`}>
                <div className="flex items-center gap-1.5 text-emerald-500 text-[11px] font-bold uppercase font-mono mb-1">
                  <Eye className="w-3 h-3" />
                  <span>Lo que no se ve (Realidad)</span>
                </div>
                <p className="text-xs font-medium leading-snug">
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
