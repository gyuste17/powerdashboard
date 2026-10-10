'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  PieChart,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap,
  ChevronDown,
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/siteData';

const iconMap: Record<string, typeof BarChart3> = {
  'power-bi':        BarChart3,
  'looker-studio':   PieChart,
  'migracion-excel': RefreshCw,
};

const accentColors = [
  {
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    border: 'border-amber-500/30',
    text: 'text-amber-700 dark:text-amber-400',
    badge: 'bg-amber-100/80 text-amber-900 border-amber-300 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20',
  },
  {
    bg: 'bg-indigo-500/10 dark:bg-indigo-500/15',
    border: 'border-indigo-500/30',
    text: 'text-indigo-700 dark:text-indigo-400',
    badge: 'bg-indigo-100/80 text-indigo-900 border-indigo-300 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20',
  },
  {
    bg: 'bg-cyan-500/10 dark:bg-cyan-500/15',
    border: 'border-cyan-500/30',
    text: 'text-cyan-700 dark:text-cyan-400',
    badge: 'bg-cyan-100/80 text-cyan-900 border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20',
  },
];

export function ServiceMatrix() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Section header ─────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            Servicios Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            Soluciones de{' '}
            <span className="gradient-text">Business Intelligence</span>
            {' '}orientadas a resultados
          </h2>
          <p className="text-stone-600 dark:text-slate-400 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Diseñamos sistemas analíticos robustos que responden directamente a las preguntas críticas de rentabilidad de tu negocio.
          </p>
        </div>

        {/* ── Service Cards (Airy & Expandable) ───── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.id] || BarChart3;
            const accent = accentColors[index];
            const isExpanded = !!expandedCards[service.id];

            return (
              <div
                key={service.id}
                className="relative bg-white/90 dark:bg-[#0f172a]/80 border border-stone-200/90 dark:border-white/[0.08] rounded-3xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl dark:hover:shadow-card-hover group overflow-hidden"
              >
                <div>
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${accent.bg} ${accent.text} border ${accent.border} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${accent.badge}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Accordion for Pain Point & Deliverables */}
                  <div className="mt-5 pt-4 border-t border-stone-200/80 dark:border-white/[0.06]">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      type="button"
                      className="w-full flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 transition-colors py-1 group/btn"
                    >
                      <span>{isExpanded ? 'Ocultar detalles técnicos' : 'Ver entregables y alcance'}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 space-y-4">
                            {/* Pain point */}
                            <div className="p-3.5 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 space-y-1">
                              <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                Problema que resuelve
                              </div>
                              <p className="text-xs text-stone-700 dark:text-slate-300 italic leading-relaxed">
                                &ldquo;{service.painPoints[0]}&rdquo;
                              </p>
                            </div>

                            {/* Deliverables */}
                            <div className="space-y-2">
                              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Entregables incluidos
                              </div>
                              <ul className="space-y-1.5">
                                {service.deliverables.slice(0, 3).map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 dark:text-slate-300">
                                    <span className={`${accent.text} font-bold mt-px shrink-0`}>›</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-5 border-t border-stone-200/80 dark:border-white/[0.06]">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2
                      bg-stone-100 hover:bg-amber-500 hover:text-slate-950 text-stone-800 dark:bg-white/[0.04] dark:hover:bg-amber-500 dark:text-slate-200 dark:hover:text-slate-950 border border-stone-200/80 dark:border-white/[0.06] hover:border-amber-500"
                  >
                    <span>Conocer Metodología y Casos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Training Banner (Clean & High Contrast) ── */}
        <div className="mt-12 rounded-3xl border border-amber-300/80 dark:border-amber-500/20 bg-amber-50/80 dark:bg-gradient-to-r dark:from-amber-500/10 dark:via-[#0f172a] dark:to-amber-500/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Capacitación a Equipos
            </div>
            <h4 className="text-xl font-bold text-stone-900 dark:text-white">
              ¿Quieres formar a tu equipo en Power BI, DAX o Looker Studio?
            </h4>
            <p className="text-sm text-stone-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Cursos 100% prácticos sobre los datos reales de tu empresa para que tu equipo aprenda a crear y mantener sus propios cuadros de mando con autonomía.
            </p>
          </div>
          <Link
            href="/contacto?asunto=formacion"
            className="btn-primary shrink-0 py-3 px-6 text-xs"
          >
            <span>Consultar Formación</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
