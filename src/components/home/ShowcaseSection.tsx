'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { DASHBOARD_EXAMPLES, type DashboardExample } from '@/data/siteData';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { SectionHeader } from '@/components/home/SectionHeader';
import { cn } from '@/lib/utils';

const TOOL_HOSTS: Record<DashboardExample['tool'], string> = {
  'Power BI': 'app.powerbi.com',
  'Looker Studio': 'lookerstudio.google.com',
  'Tableau': 'public.tableau.com',
};

const EASE = [0.16, 1, 0.3, 1] as const;

interface ShowcaseSectionProps {
  /** Hide the link to /portfolio when the section is rendered on that page */
  showPortfolioLink?: boolean;
}

export function ShowcaseSection({ showPortfolioLink = true }: ShowcaseSectionProps) {
  const [activeId, setActiveId] = useState(DASHBOARD_EXAMPLES[0].id);
  const active = DASHBOARD_EXAMPLES.find((d) => d.id === activeId) ?? DASHBOARD_EXAMPLES[0];

  return (
    <section className="py-24 sm:py-32" id="dashboards">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Casos reales"
          title="Cuadros de mando que ya están tomando decisiones"
          description="Una selección de proyectos para ventas, finanzas, marketing, operaciones y personas. Cada uno resolvió una pregunta concreta de negocio."
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Dashboards del portfolio"
          className="mt-14 -mx-4 px-4 sm:mx-0 sm:px-0 flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto no-scrollbar"
        >
          {DASHBOARD_EXAMPLES.map((dashboard) => {
            const isActive = dashboard.id === active.id;
            return (
              <button
                key={dashboard.id}
                type="button"
                role="tab"
                id={`tab-${dashboard.id}`}
                aria-selected={isActive}
                aria-controls="dashboard-panel"
                onClick={() => setActiveId(dashboard.id)}
                className={cn(
                  'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap',
                  isActive
                    ? 'bg-stone-900 text-white dark:bg-white dark:text-slate-950'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.06]'
                )}
              >
                {dashboard.category}
                <span className={cn('ml-1.5', isActive ? 'opacity-60' : 'opacity-50')}>· {dashboard.tool}</span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id="dashboard-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <BrowserFrame
                  src={active.image}
                  alt={active.title}
                  url={`${TOOL_HOSTS[active.tool]}/${active.id}`}
                  aspectRatio="1157 / 716"
                  sizes="(max-width: 1024px) 100vw, 760px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="lg:col-span-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-slate-500">
                {active.category} · {active.tool}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900 dark:text-white">
                {active.title}
              </h3>
              <p className="mt-4 text-stone-600 dark:text-slate-400 leading-relaxed">
                {active.description}
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl p-4 bg-amber-50 dark:bg-amber-500/[0.08] ring-1 ring-amber-500/20">
                <TrendingUp className="w-5 h-5 mt-0.5 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-800/70 dark:text-amber-300/70">Impacto</p>
                  <p className="mt-0.5 font-semibold text-amber-900 dark:text-amber-200">{active.highlight}</p>
                </div>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-slate-500">KPIs principales</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {active.kpis.map((kpi) => (
                  <li
                    key={kpi}
                    className="px-3 py-1 rounded-full text-xs font-medium text-stone-700 dark:text-slate-300 bg-white dark:bg-white/[0.04] ring-1 ring-stone-200 dark:ring-white/[0.08]"
                  >
                    {kpi}
                  </li>
                ))}
              </ul>

              <Link
                href={`/contacto?proyecto=${active.id}`}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 group"
              >
                Quiero un dashboard así
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {showPortfolioLink && (
          <div className="mt-16 text-center">
            <Link href="/portfolio" className="btn-secondary group">
              <span>Ver el portfolio completo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
