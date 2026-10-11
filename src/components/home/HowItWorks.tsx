'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plug, PenTool, Rocket, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '@/data/siteData';
import { SectionHeader } from '@/components/home/SectionHeader';

const STEPS = [
  {
    icon: Plug,
    timing: 'Días 1–3',
    title: 'Conexión de tus datos',
    text: 'Conecto de forma segura tu ERP, CRM, Excel o Google Analytics. Sin migraciones ni cambiar las herramientas que ya usáis.',
  },
  {
    icon: PenTool,
    timing: 'Semanas 1–2',
    title: 'Diseño y modelado a medida',
    text: 'Definimos juntos los KPIs que importan y construyo un modelo de datos sólido. Validas cada pantalla antes de avanzar.',
  },
  {
    icon: Rocket,
    timing: 'Semanas 2–3',
    title: 'En producción y autónomo',
    text: 'Actualización automática, permisos por usuario y formación para que tu equipo trabaje sin depender de nadie.',
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32" id="como-funciona">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cómo funciona"
          title="De tus datos dispersos a un panel en producción en 3 pasos"
          description="Un proceso corto, con entregas visibles cada semana y sin sorpresas."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent dark:via-white/10"
          />
          <ol className="relative grid md:grid-cols-3 gap-10 md:gap-8">
            {STEPS.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
                className="text-center"
              >
                <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#0d1322] ring-1 ring-stone-200 dark:ring-white/10 shadow-sm">
                  <step.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-slate-500">
                  Paso {index + 1} · {step.timing}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-stone-900 dark:text-white">{step.title}</h3>
                <p className="mt-3 text-stone-600 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Services */}
        <div id="servicios" className="mt-24 scroll-mt-28">
          <p className="text-center text-sm text-stone-500 dark:text-slate-400">Servicios especializados</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.id}
                href={`/servicios/${service.slug}`}
                className="group rounded-2xl p-6 bg-white/70 dark:bg-white/[0.03] ring-1 ring-stone-200/80 dark:ring-white/[0.06] hover:ring-amber-500/40 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-stone-900 dark:text-white">{service.title}</h3>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-stone-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm text-stone-600 dark:text-slate-400 leading-relaxed">{service.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
