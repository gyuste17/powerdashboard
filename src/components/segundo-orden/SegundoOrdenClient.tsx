'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ArgumentCard } from './ArgumentCard';
import { QuickMatrixView } from './QuickMatrixView';
import { SocialShareModal } from './SocialShareModal';
import { Footer } from './Footer';
import { ARGUMENTS, CATEGORIES } from '@/data/segundo-orden/arguments';
import type { ArgumentItem, CategoryId } from '@/data/segundo-orden/types';
import { LayoutGrid, ListFilter } from 'lucide-react';

export function SegundoOrdenClient() {
  // Theme state: default to 'light' (with instant toggle to 'dark')
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'detailed' | 'matrix'>('detailed');
  
  // Modals
  const [socialModalArgument, setSocialModalArgument] = useState<ArgumentItem | null>(null);
  const [copiedSiteLink, setCopiedSiteLink] = useState(false);

  // Load saved theme preference if available
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('segundo_orden_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme);
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try {
      localStorage.setItem('segundo_orden_theme', nextTheme);
    } catch (e) {
      // Ignore
    }
  };

  // Category counts
  const counts = useMemo(() => {
    const map: Record<CategoryId, number> = {
      all: ARGUMENTS.length,
      vivienda: 0,
      laboral: 0,
      sanidad: 0,
      fiscalidad: 0,
      pensiones: 0,
      precios: 0,
    };
    ARGUMENTS.forEach((arg) => {
      if (map[arg.category] !== undefined) {
        map[arg.category]++;
      }
    });
    return map;
  }, []);

  // Filtered arguments
  const filteredArguments = useMemo(() => {
    return ARGUMENTS.filter((arg) => {
      const matchesCategory = selectedCategory === 'all' || arg.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        arg.title.toLowerCase().includes(q) ||
        arg.surfaceClaim.headline.toLowerCase().includes(q) ||
        arg.surfaceClaim.whyItSoundsGood.toLowerCase().includes(q) ||
        arg.deepReality.coreMechanism.toLowerCase().includes(q) ||
        arg.deepReality.explanation.some(p => p.toLowerCase().includes(q)) ||
        arg.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  // Handle sharing full platform
  const handleShareSite = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://powerdashboard-eta.vercel.app/segundo-orden';
    const title = 'Segundo Orden | Pensar más allá del titular';
    const text = 'Plataforma de análisis empírico sobre economía y política en España. Menos texto, más gráficos y simuladores:';

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (e) {
        // Fallback
      }
    }

    navigator.clipboard.writeText(`${text}\n${url}`);
    setCopiedSiteLink(true);
    setTimeout(() => setCopiedSiteLink(false), 2500);
  };

  // Scroll to hash if present on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen flex flex-col w-full overflow-x-hidden transition-colors duration-200 selection:bg-emerald-500/25 selection:text-emerald-700 relative ${
      isLight 
        ? 'bg-[#f8fafc] text-slate-900' 
        : 'bg-gradient-to-b from-[#151c2a] via-[#101622] to-[#0c1017] text-slate-100'
    }`}>
      {/* ── Always Sticky Navbar with Theme Switch & Filter Pills ── */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onShareSite={handleShareSite}
        copied={copiedSiteLink}
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        counts={counts}
      />

      {/* ── Main Content Area ── */}
      <main className="flex-1 pb-16">
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalArguments={ARGUMENTS.length}
          theme={theme}
        />

        {/* View Switcher Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-6 flex items-center justify-between gap-4">
          <div className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            <span>{filteredArguments.length} {filteredArguments.length === 1 ? 'caso visual' : 'casos visuales'}</span>
            {searchQuery && (
              <span className="text-emerald-500 font-semibold ml-1">para «{searchQuery}»</span>
            )}
          </div>

          {/* Toggle View Mode */}
          <div className={`flex items-center rounded-xl p-1 gap-1 border ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#151c2a] border-slate-800'
          }`}>
            <button
              onClick={() => setViewMode('detailed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'detailed'
                  ? isLight
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : isLight
                    ? 'text-slate-500 hover:text-slate-900'
                    : 'text-slate-400 hover:text-white'
              }`}
              title="Vista en tarjetas completas"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tarjetas Visuales</span>
            </button>

            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'matrix'
                  ? isLight
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : isLight
                    ? 'text-slate-500 hover:text-slate-900'
                    : 'text-slate-400 hover:text-white'
              }`}
              title="Vista de matriz comparativa"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Matriz Comparativa</span>
            </button>
          </div>
        </div>

        {/* Detailed Cards or Matrix */}
        {filteredArguments.length === 0 ? (
          <div className={`max-w-md mx-auto my-16 text-center p-8 rounded-3xl border ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#151c2a] border-slate-800'
          }`}>
            <p className={`font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              No se encontraron argumentos
            </p>
            <p className={`text-xs mb-4 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Prueba con términos como «alquiler», «despido», «sanidad», «SMI» o «supermercados».
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-bold shadow-sm hover:bg-emerald-600 transition-all"
            >
              Restablecer filtros
            </button>
          </div>
        ) : viewMode === 'detailed' ? (
          <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
            {filteredArguments.map((arg, index) => (
              <ArgumentCard
                key={arg.id}
                argument={arg}
                theme={theme}
                index={index}
                onOpenSocialModal={(item) => setSocialModalArgument(item)}
              />
            ))}
          </div>
        ) : (
          <QuickMatrixView
            argumentsList={filteredArguments}
            theme={theme}
            onSelectArgument={(item) => {
              setViewMode('detailed');
              setTimeout(() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          />
        )}
      </main>

      {/* ── Complete Manifesto in the Footer ── */}
      <Footer theme={theme} />

      {/* Social Card Modal */}
      <SocialShareModal
        argument={socialModalArgument}
        onClose={() => setSocialModalArgument(null)}
      />
    </div>
  );
}
