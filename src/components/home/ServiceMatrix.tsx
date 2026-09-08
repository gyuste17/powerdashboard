'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  BarChart3,
  PieChart,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap,
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/siteData';

const iconMap: Record<string, typeof BarChart3> = {
  'power-bi':        BarChart3,
  'looker-studio':   PieChart,
  'migracion-excel': RefreshCw,
};

const cardGradients = [
  'from-amber-500/15 via-transparent to-transparent',
  'from-indigo-500/10 via-transparent to-transparent',
  'from-cyan-500/10 via-transparent to-transparent',
];

const accentColors = [
  { bg: 'bg-amber-500/15', border: 'border-amber-500/30', text: 'text-amber-400', iconHover: 'group-hover:bg-amber-500 group-hover:text-slate-950', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
  { bg: 'bg-indigo-500/10', border: 'border-indigo-500/25', text: 'text-indigo-400', iconHover: 'group-hover:bg-indigo-500 group-hover:text-white', badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
  { bg: 'bg-cyan-500/10', border: 'border-cyan-500/25', text: 'text-cyan-400', iconHover: 'group-hover:bg-cyan-500 group-hover:text-slate-950', badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
];

export function ServiceMatrix() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-[#080c14] relative" id="servicios">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg-sm opacity-50" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Section header ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-amber-400 text-xs font-bold uppercase tracking-widest mb-5">
            <Zap className="w-3.5 h-3.5" />
            Servicios Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Soluciones de{' '}
            <span className="gradient-text">Business Intelligence</span>
            {' '}orientadas a resultados
          </h2>
          <p className="text-slate-400 text-base mt-5 leading-relaxed">
            No te vendemos gráficos bonitos sin utilidad. Diseñamos sistemas analíticos robustos
            que responden directamente a las preguntas clave de tu negocio.
          </p>
        </motion.div>

        {/* ── Service Cards ──────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.id] || BarChart3;
            const accent = accentColors[index];
            const gradient = cardGradients[index];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative bg-gradient-to-br ${gradient} bg-[#0f172a]/80 border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-7 flex flex-col justify-between transition-all duration-400 hover:shadow-card-hover group card-hover overflow-hidden`}
              >
                {/* Card inner glow on hover */}
                <div className={`absolute top-0 right-0 w-48 h-48 ${accent.bg} blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div>
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                      className={`p-3 rounded-xl ${accent.bg} ${accent.text} border ${accent.border} ${accent.iconHover} transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${accent.badge}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-white group-hover:${accent.text} transition-colors duration-200`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/[0.05]" />

                  {/* Pain point */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400/90 uppercase tracking-wider">
                      <AlertTriangle className="w-3 h-3" />
                      Problema que soluciona
                    </div>
                    <p className="text-xs text-slate-500 italic leading-relaxed">
                      &ldquo;{service.painPoints[0]}&rdquo;
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400/90 uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3" />
                      Entregables clave
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className={`${accent.text} font-bold mt-px shrink-0`}>›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-7 pt-6 border-t border-white/[0.05]">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/cta
                      bg-white/[0.04] hover:bg-amber-500 text-slate-300 hover:text-slate-950 border border-white/[0.06] hover:border-amber-500`}
                  >
                    <span>Ver metodología y casos</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Training Banner ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-[#0f172a] to-amber-500/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute top-0 left-0 w-48 h-full bg-amber-500/5 blur-[60px]" />
          <div className="space-y-2 text-center md:text-left relative">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              Formación Práctica a Equipos
            </div>
            <h4 className="text-xl font-bold text-white">
              ¿Quieres capacitar a tu equipo en Power BI, DAX o Looker Studio?
            </h4>
            <p className="text-sm text-slate-400 max-w-2xl">
              Cursos 100% prácticos adaptados a tus datos reales, para que tu equipo cree y mantenga sus propios dashboards de forma autónoma.
            </p>
          </div>
          <Link
            href="/contacto?asunto=formacion"
            className="btn-secondary shrink-0 group"
          >
            <span>Consultar Formación</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
