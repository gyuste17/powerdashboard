'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Smartphone, Sparkles, ShieldCheck } from 'lucide-react';
import { LaptopMockup } from './LaptopMockup';
import { MobileMockup } from './MobileMockup';
import { cn } from '@/lib/utils';

interface DeviceShowcaseProps {
  desktopSrc?: string;
  mobileSrc?: string;
  desktopAlt?: string;
  mobileAlt?: string;
  className?: string;
}

export function DeviceShowcase({
  desktopSrc = '/images/mockups/laptop-dashboard-macbook.jpg',
  mobileSrc = '/images/mockups/mobile-dashboard-iphone.jpg',
  desktopAlt = 'Cuadro de Mando Ejecutivo en Ordenador',
  mobileAlt = 'Dashboard Ejecutivo en Móvil',
  className,
}: DeviceShowcaseProps) {
  const [viewMode, setViewMode] = useState<'both' | 'desktop' | 'mobile'>('both');

  return (
    <div className={cn('relative w-full max-w-5xl mx-auto', className)}>
      {/* ── View switcher pills ──────────────────────────── */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="inline-flex items-center p-1 rounded-2xl bg-stone-200/60 dark:bg-slate-900/80 border border-stone-300/60 dark:border-white/10 shadow-sm backdrop-blur-md">
          <button
            type="button"
            onClick={() => setViewMode('both')}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5',
              viewMode === 'both'
                ? 'bg-white dark:bg-amber-500 text-stone-900 dark:text-slate-950 shadow-sm'
                : 'text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Escritorio + Móvil</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('desktop')}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5',
              viewMode === 'desktop'
                ? 'bg-white dark:bg-amber-500 text-stone-900 dark:text-slate-950 shadow-sm'
                : 'text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
            )}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Portátil</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('mobile')}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5',
              viewMode === 'mobile'
                ? 'bg-white dark:bg-amber-500 text-stone-900 dark:text-slate-950 shadow-sm'
                : 'text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
            )}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Móvil</span>
          </button>
        </div>
      </div>

      {/* ── Main Composition Frame ──────────────────────── */}
      <div className="relative">
        {/* Ambient warm glow under devices */}
        <div
          aria-hidden="true"
          className="absolute -inset-x-6 -top-10 bottom-6 -z-10 rounded-[3rem] bg-gradient-to-b from-amber-400/25 via-amber-200/15 to-transparent dark:from-amber-500/20 dark:via-amber-400/5 blur-3xl"
        />

        {/* Laptop Container */}
        <AnimatePresence mode="wait">
          {(viewMode === 'both' || viewMode === 'desktop') && (
            <motion.div
              key="laptop-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className={cn(
                'transition-all duration-500',
                viewMode === 'both' ? 'sm:pr-24 lg:pr-32' : 'max-w-4xl mx-auto'
              )}
            >
              <LaptopMockup
                src={desktopSrc}
                alt={desktopAlt}
                priority
                aspectRatio="16 / 10"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Mobile Phone Overlap */}
        <AnimatePresence>
          {(viewMode === 'both' || viewMode === 'mobile') && (
            <motion.div
              key="mobile-view"
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.92 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className={cn(
                viewMode === 'both'
                  ? 'absolute -bottom-8 right-0 sm:right-4 lg:right-6 z-30 drop-shadow-2xl'
                  : 'flex justify-center my-6'
              )}
            >
              <MobileMockup
                src={mobileSrc}
                alt={mobileAlt}
                className={cn(
                  viewMode === 'both'
                    ? 'w-48 sm:w-56 lg:w-64 rotate-[1deg] hover:rotate-0 transition-transform duration-300'
                    : 'w-64 sm:w-72'
                )}
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Value Badges */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden sm:flex absolute -left-4 top-1/4 z-30 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-stone-200/90 dark:border-white/10 shadow-lg dark:shadow-2xl backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-stone-900 dark:text-white">KPIs en Tiempo Real</div>
            <div className="text-[10px] text-stone-500 dark:text-slate-400">Actualización automática</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex absolute -right-4 top-10 z-30 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-stone-200/90 dark:border-white/10 shadow-lg dark:shadow-2xl backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-stone-900 dark:text-white">100% Responsive</div>
            <div className="text-[10px] text-stone-500 dark:text-slate-400">Dirección en PC & Móvil</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
