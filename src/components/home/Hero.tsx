'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { SITE_CONFIG } from '@/data/siteData';

const TRUST_SIGNALS = [
  `${SITE_CONFIG.founder.experienceYears} en Business Intelligence`,
  'NDA firmado en cada proyecto',
  'Trato directo con el especialista',
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Copy ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            Consultoría Power BI · Looker Studio
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-stone-900 dark:text-white text-balance">
            Cuadros de mando que convierten tus datos en{' '}
            <span className="gradient-text">decisiones</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            Deja atrás los Excel interminables y los informes manuales de cada lunes.
            Unifico tu ERP, CRM y contabilidad en un único panel que se actualiza solo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/auditoria-gratuita" className="btn-primary w-full sm:w-auto group text-base px-7 py-3.5">
              <span>Auditoría Gratuita en 48h</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto text-base px-7 py-3.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Consulta por WhatsApp</span>
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-500 dark:text-slate-400">
            {TRUST_SIGNALS.map((signal) => (
              <li key={signal} className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                {signal}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Product visual ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="relative mt-16 sm:mt-20"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-x-10 -top-10 bottom-10 -z-10 rounded-[3rem] bg-gradient-to-b from-amber-400/20 via-amber-200/10 to-transparent dark:from-amber-500/15 dark:via-indigo-500/5 blur-3xl"
          />
          <BrowserFrame
            src="/images/dashboards/MAT.png"
            alt="Cuadro de mando comercial en Power BI con facturación, margen y evolución mensual"
            url="app.powerbi.com/cuadro-de-mando-comercial"
            aspectRatio="1436 / 802"
            sizes="(max-width: 1200px) 100vw, 1152px"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
