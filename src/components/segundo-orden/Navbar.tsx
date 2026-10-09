'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Sun, 
  Moon, 
  Share2, 
  BookOpen, 
  Sparkles, 
  Home, 
  Briefcase, 
  HeartPulse, 
  Receipt, 
  ShoppingBag 
} from 'lucide-react';
import type { CategoryId, Category } from '@/data/segundo-orden/types';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onShareSite: () => void;
  copied: boolean;
  categories: Category[];
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  counts: Record<CategoryId, number>;
}

const getCategoryIcon = (id: CategoryId) => {
  switch (id) {
    case 'vivienda': return <Home className="w-3.5 h-3.5" />;
    case 'laboral': return <Briefcase className="w-3.5 h-3.5" />;
    case 'sanidad': return <HeartPulse className="w-3.5 h-3.5" />;
    case 'fiscalidad': return <Receipt className="w-3.5 h-3.5" />;
    case 'precios': return <ShoppingBag className="w-3.5 h-3.5" />;
    default: return <Sparkles className="w-3.5 h-3.5" />;
  }
};

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onShareSite,
  copied,
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
}) => {
  const isLight = theme === 'light';

  const scrollToManifesto = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('manifiesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b backdrop-blur-xl ${
      isLight 
        ? 'bg-white/95 border-slate-200/90 shadow-sm text-slate-800' 
        : 'bg-[#121824]/95 border-slate-800/80 shadow-lg text-slate-100'
    }`}>
      {/* ── Top Bar ────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Brand & Back Link */}
        <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
          <Link 
            href="/" 
            className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
              isLight 
                ? 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-200' 
                : 'text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border-slate-700/60'
            }`}
            title="Volver a la portada de PowerDashboard"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden md:inline">PowerDashboard</span>
          </Link>

          <a href="#top" className="flex items-center gap-2 group truncate">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 font-mono font-black text-xs sm:text-sm shrink-0 group-hover:scale-105 transition-all">
              2°
            </div>
            <div className="truncate">
              <span className={`font-black text-sm sm:text-base tracking-tight flex items-center gap-1.5 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                SEGUNDO ORDEN
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 hidden sm:inline-block" />
              </span>
              <span className={`hidden lg:block text-[10px] font-mono -mt-1 tracking-wider uppercase ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Pensar más allá del titular
              </span>
            </div>
          </a>
        </div>

        {/* Right Controls: Theme Toggle + Manifesto + Share */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-sm'
                : 'bg-slate-800/80 hover:bg-slate-700 text-amber-300 border-slate-700 shadow-sm'
            }`}
            title={isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
          >
            {isLight ? (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden xs:inline">Modo Oscuro</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden xs:inline">Modo Claro</span>
              </>
            )}
          </button>

          {/* Manifiesto link (scrolls to footer) */}
          <button
            onClick={scrollToManifesto}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                : 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
            <span>Manifiesto</span>
          </button>

          {/* Share Button */}
          <button
            onClick={onShareSite}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              isLight
                ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200'
                : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/30'
            }`}
            title="Compartir enlace"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {copied ? '¡Copiado!' : 'Compartir'}
            </span>
          </button>
        </div>
      </div>

      {/* ── Embedded Sticky Category Filter Bar ──────────────── */}
      <div className={`px-4 sm:px-6 py-2 border-t ${
        isLight ? 'bg-slate-50/95 border-slate-200/80' : 'bg-[#0f141f]/95 border-slate-800/70'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 justify-start sm:justify-center">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = counts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
                  isSelected
                    ? isLight
                      ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                      : 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 font-semibold shadow-sm'
                    : isLight
                      ? 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100/70'
                      : 'bg-[#151c2a] text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className={isSelected ? (isLight ? 'text-white' : 'text-emerald-400') : (isLight ? 'text-slate-500' : 'text-slate-400')}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected 
                    ? isLight 
                      ? 'bg-white/20 text-white font-bold' 
                      : 'bg-emerald-500/30 text-emerald-200 font-bold' 
                    : isLight 
                      ? 'bg-slate-100 text-slate-500' 
                      : 'bg-slate-800/80 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
