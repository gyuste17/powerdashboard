'use client';

import { useState, useMemo, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { CategoryFilter } from './CategoryFilter';
import { ArgumentCard } from './ArgumentCard';
import { QuickMatrixView } from './QuickMatrixView';
import { SimulatorModal } from './SimulatorModal';
import { ManifestoModal } from './ManifestoModal';
import { SocialShareModal } from './SocialShareModal';
import { Footer } from './Footer';
import { ARGUMENTS, CATEGORIES } from '@/data/segundo-orden/arguments';
import type { ArgumentItem, CategoryId } from '@/data/segundo-orden/types';
import { LayoutGrid, ListFilter } from 'lucide-react';

export function SegundoOrdenClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'detailed' | 'matrix'>('detailed');
  
  // Modals
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [manifestoOpen, setManifestoOpen] = useState(false);
  const [socialModalArgument, setSocialModalArgument] = useState<ArgumentItem | null>(null);
  const [copiedSiteLink, setCopiedSiteLink] = useState(false);

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
    const text = 'Plataforma empírica que desglosa los mitos económicos y políticos en España con datos y leyes de incentivos:';

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

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col selection:bg-emerald-500/25 selection:text-emerald-300 relative -mt-20">
      {/* Top Navigation */}
      <Navbar
        onOpenManifesto={() => setManifestoOpen(true)}
        onOpenSimulator={() => setSimulatorOpen(true)}
        onShareSite={handleShareSite}
        copied={copiedSiteLink}
      />

      {/* Hero Header */}
      <div className="flex-1">
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalArguments={ARGUMENTS.length}
        />

        {/* Categories Bar */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          counts={counts}
        />

        {/* View Switcher Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>Mostrando {filteredArguments.length} {filteredArguments.length === 1 ? 'argumento' : 'argumentos'}</span>
            {searchQuery && (
              <span className="text-emerald-400">para «{searchQuery}»</span>
            )}
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center bg-[#111218] border border-white/[0.08] rounded-xl p-1 gap-1">
            <button
              onClick={() => setViewMode('detailed')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'detailed'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Vista de análisis completo en tarjetas"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Fichas en Detalle</span>
            </button>

            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'matrix'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Vista comparativa rápida"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Matriz Dogma vs Realidad</span>
            </button>
          </div>
        </div>

        {/* Main Content: Detailed Cards or Matrix */}
        {filteredArguments.length === 0 ? (
          <div className="max-w-md mx-auto my-16 text-center p-8 rounded-2xl bg-[#111218] border border-white/[0.08]">
            <p className="text-zinc-300 font-semibold mb-2">No se encontraron argumentos</p>
            <p className="text-xs text-zinc-500 mb-4">
              Prueba con términos como «alquiler», «despido», «sanidad», «SMI» o «supermercados».
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
            >
              Restablecer filtros
            </button>
          </div>
        ) : viewMode === 'detailed' ? (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {filteredArguments.map((arg) => (
              <ArgumentCard
                key={arg.id}
                argument={arg}
                onOpenSocialModal={(item) => setSocialModalArgument(item)}
              />
            ))}
          </div>
        ) : (
          <QuickMatrixView
            argumentsList={filteredArguments}
            onSelectArgument={(item) => {
              setViewMode('detailed');
              setTimeout(() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          />
        )}
      </div>

      {/* Footer */}
      <Footer
        onOpenManifesto={() => setManifestoOpen(true)}
        onOpenSimulator={() => setSimulatorOpen(true)}
      />

      {/* Interactive Modals */}
      <SimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />

      <ManifestoModal
        isOpen={manifestoOpen}
        onClose={() => setManifestoOpen(false)}
      />

      <SocialShareModal
        argument={socialModalArgument}
        onClose={() => setSocialModalArgument(null)}
      />
    </div>
  );
}
