'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';
import { DeviceShowcase } from '@/components/ui/DeviceShowcase';
import { SITE_CONFIG } from '@/data/siteData';

const TRUST_SIGNALS = [
  `${SITE_CONFIG.founder.experienceYears} en Business Intelligence`,
  'NDA firmado en cada proyecto',
  'Trato directo con el especialista',
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden" id="hero">
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
            Consultoría Senior · Power BI · Looker Studio
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-stone-900 dark:text-white text-balance">
            Cuadros de mando que convierten tus datos en{' '}
            <span className="gradient-text">decisiones</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            Elimina las hojas de Excel interminables y los reportes manuales de los lunes.
            Centralizo tu ERP, CRM y facturación en paneles visuales que se actualizan solos.
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

        {/* ── Product visual: Laptop + Smartphone Dual Mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="relative mt-16 sm:mt-20"
        >
          <DeviceShowcase
            desktopSrc="/images/mockups/laptop-dashboard-macbook.jpg"
            mobileSrc="/images/mockups/mobile-dashboard-iphone.jpg"
            desktopAlt="Cuadro de Mando Ejecutivo en MacBook Pro"
            mobileAlt="Dashboard Ejecutivo en iPhone"
          />
        </motion.div>
      </div>
    </section>
  );
}
