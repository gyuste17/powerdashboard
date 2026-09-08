'use client';

import { useRef } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, Sparkles, ExternalLink, Tag } from 'lucide-react';
import { DASHBOARD_EXAMPLES } from '@/data/siteData';

const CATEGORIES = ['Todos', 'Ventas', 'Finanzas', 'Marketing', 'Operaciones', 'RRHH'];

// Map tools to badge colors
const TOOL_COLORS: Record<string, string> = {
  'Power BI':     'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Looker Studio':'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Tableau':      'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  default:        'bg-slate-700/60 text-slate-300 border-slate-600/50',
};

function getToolColor(tool: string) {
  return TOOL_COLORS[tool] || TOOL_COLORS.default;
}

export function ShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState('Todos');

  const filtered = selected === 'Todos'
    ? DASHBOARD_EXAMPLES
    : DASHBOARD_EXAMPLES.filter((d) => d.category === selected);

  return (
    <section className="py-28 relative bg-transparent overflow-hidden" id="dashboards">
      {/* Luminous ambient backdrops */}
      <div className="absolute top-1/4 right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[550px] h-[550px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              Casos Reales y Proyectos
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Galería de{' '}
              <span className="gradient-text">Cuadros de Mando</span>
            </h2>
            <p className="text-slate-400 text-base mt-3 max-w-xl leading-relaxed">
              Dashboards interactivos desarrollados para distintos sectores y áreas operativas.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelected(cat)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selected === cat
                    ? 'bg-amber-500 text-slate-950 shadow-amber-glow-sm'
                    : 'glass text-slate-400 hover:text-white border border-white/[0.06] hover:border-amber-500/30'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Dashboard grid ─────────────────────── */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((dashboard, index) => (
              <motion.div
                key={dashboard.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ delay: index * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#0f172a]/80 border border-white/[0.06] hover:border-amber-500/25 rounded-2xl overflow-hidden flex flex-col card-hover"
              >
                {/* Image */}
                <div className="relative h-48 bg-slate-950 overflow-hidden">
                  <Image
                    src={dashboard.image}
                    alt={dashboard.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />

                  {/* Tool + Category badges */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border backdrop-blur-sm ${getToolColor(dashboard.tool)}`}>
                      {dashboard.tool}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/85 text-[10px] font-bold text-slate-950 backdrop-blur-sm">
                      {dashboard.category}
                    </span>
                  </div>

                  {/* Hover overlay CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-white border border-white/10">
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                      Ver detalles
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-white group-hover:text-amber-300 transition-colors duration-200">
                    {dashboard.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2 flex-1">
                    {dashboard.description}
                  </p>

                  {/* Highlight */}
                  <div className="mt-4 p-3 rounded-xl glass-amber text-xs font-medium text-amber-200 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{dashboard.highlight}</span>
                  </div>

                  {/* KPI tags */}
                  <div className="mt-4">
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      <Tag className="w-3 h-3" />
                      KPIs integrados
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dashboard.kpis.map((kpi, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-900/80 text-[10px] text-slate-400 border border-white/[0.05]"
                        >
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/contacto?proyecto=${dashboard.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 group/cta
                      bg-white/[0.03] hover:bg-amber-500 text-slate-400 hover:text-slate-950 border border-white/[0.06] hover:border-amber-500"
                  >
                    Solicitar dashboard similar
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="btn-secondary inline-flex group"
          >
            Ver todos los proyectos detallados
            <ArrowRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
