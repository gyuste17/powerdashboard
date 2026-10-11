'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, UserCheck, ShieldCheck, Linkedin, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

const PILLARS = [
  {
    icon: Award,
    title: `${SITE_CONFIG.founder.experienceYears} de experiencia`,
    text: 'Consultoría, modelado de datos y formación en Power BI, Looker Studio, Tableau y SQL.',
  },
  {
    icon: UserCheck,
    title: 'Trato directo con el especialista',
    text: 'Sin comerciales ni juniors. Quien entiende tu negocio es quien construye tu modelo.',
  },
  {
    icon: ShieldCheck,
    title: 'NDA garantizado',
    text: 'Acuerdo de confidencialidad firmado antes de empezar. Tus datos no salen de tus sistemas.',
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function FounderSection() {
  return (
    <section className="py-24 sm:py-32" id="sobre-mi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-white/[0.03] ring-1 ring-stone-200/80 dark:ring-white/[0.08] shadow-[0_24px_48px_-24px_rgba(28,25,23,0.18)] dark:shadow-none">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white dark:text-slate-950 font-bold text-2xl flex items-center justify-center">
                GY
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900 dark:text-white">
                {SITE_CONFIG.founder.name}
              </h3>
              <p className="mt-1 text-stone-600 dark:text-slate-400">{SITE_CONFIG.founder.role}</p>
              <p className="mt-4 flex items-center gap-1.5 text-sm text-stone-500 dark:text-slate-500">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                {SITE_CONFIG.founder.location}
              </p>
              <div className="mt-8 pt-6 border-t border-stone-200/80 dark:border-white/[0.06] flex flex-wrap gap-3">
                <Link href="/contacto" className="btn-primary group">
                  <span>Hablar con Guillermo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={SITE_CONFIG.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="Perfil de LinkedIn de Guillermo Yuste"
                >
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
              Quién está detrás
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-stone-900 dark:text-white text-balance">
              Un especialista senior, no una agencia
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600 dark:text-slate-400">
              Creé PowerDashboard.es para acercar el Business Intelligence de primer nivel a PYMEs y
              equipos directivos, sin el coste inflado ni la lentitud de las grandes consultoras.
            </p>

            <ul className="mt-10 space-y-6">
              {PILLARS.map((pillar, index) => (
                <motion.li
                  key={pillar.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
                  className="flex gap-4"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 ring-1 ring-amber-500/20 shrink-0">
                    <pillar.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-stone-900 dark:text-white">{pillar.title}</p>
                    <p className="mt-1 text-stone-600 dark:text-slate-400 leading-relaxed">{pillar.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
