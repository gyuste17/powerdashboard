'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Check, Layers, Cpu, Database } from 'lucide-react';
import { SectionHeader } from '@/components/home/SectionHeader';

const BEFORE = [
  'Excel de 50 pestañas que circulan por email',
  'Cada lunes se pierde la mañana montando el informe',
  'Comercial y finanzas presentan cifras distintas',
  'Una fórmula rota descuadra todo el mes',
  'Decisiones con datos de hace semanas',
];

const AFTER = [
  'Un único panel con ERP, CRM y contabilidad',
  'Actualización automática, sin tocar nada',
  'Una sola versión de la verdad para todo el comité',
  'Alertas en cuanto un KPI se desvía',
  'Consulta desde el móvil, en cualquier momento',
];

const RESULTS = [
  { value: '15–30 h', label: 'ahorradas al mes por departamento' },
  { value: '-95%', label: 'de errores manuales en los informes' },
  { value: '1 día', label: 'de cierre mensual en vez de 12' },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ChaosToControl() {
  return (
    <section className="py-24 sm:py-32" id="del-caos-al-control">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Del caos al control"
          title="Tu dirección merece algo mejor que un Excel"
          description="La mayoría de empresas no tienen un problema de datos, sino de tiempo y confianza en las cifras. Así transforma tu operativa una arquitectura analítica profesional."
        />

        {/* ── Before vs After Grid ──────────────────────────── */}
        <div className="mt-16 grid md:grid-cols-2 gap-5 lg:gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-3xl p-8 sm:p-10 bg-stone-100/70 dark:bg-white/[0.02] ring-1 ring-stone-200/80 dark:ring-white/[0.06]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-slate-500">Antes</p>
            <h3 className="mt-3 text-xl font-semibold text-stone-700 dark:text-slate-300">Informes manuales y dudas</h3>
            <ul className="mt-8 space-y-4">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-500 dark:text-slate-400">
                  <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-stone-200 dark:bg-white/[0.06] shrink-0">
                    <X className="w-3 h-3 text-stone-600 dark:text-slate-400" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-white/[0.04] ring-1 ring-amber-500/30 shadow-[0_24px_48px_-24px_rgba(180,83,9,0.25)] dark:shadow-none"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">Después</p>
            <h3 className="mt-3 text-xl font-semibold text-stone-900 dark:text-white">Un panel, en tiempo real</h3>
            <ul className="mt-8 space-y-4">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-800 dark:text-slate-200">
                  <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-white dark:text-slate-950 shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Visual Architecture Showcase (Mintlify/Orange Wavy Lines reference) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 rounded-3xl p-4 sm:p-8 bg-stone-50/80 dark:bg-slate-900/40 border border-stone-200/90 dark:border-white/[0.07] shadow-sm"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden border border-stone-200/80 dark:border-white/[0.08] shadow-md bg-white dark:bg-slate-950">
            <Image
              src="/images/mockups/dashboard-wireframe-orange.jpg"
              alt="Arquitectura limpia de Cuadro de Mando conectada a tus herramientas actuales"
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <div>
              <div className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Integración transparente sobre tu software actual
              </div>
              <p className="text-xs text-stone-500 dark:text-slate-400 mt-1">
                Conexión segura a ERPs, CRMs, SQL y hojas de cálculo sin interrumpir el trabajo de tu equipo.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-stone-600 dark:text-slate-300 shrink-0">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-stone-200/80 dark:border-white/10">
                <Database className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                Fuentes Centralizadas
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-stone-200/80 dark:border-white/10">
                <Cpu className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                Modelado DAX / SQL
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Results Bar ───────────────────────────────────── */}
        <div className="mt-16 grid sm:grid-cols-3 gap-10 sm:gap-6 text-center">
          {RESULTS.map((result) => (
            <div key={result.label}>
              <p className="text-4xl font-bold tracking-tight text-stone-900 dark:text-white">{result.value}</p>
              <p className="mt-2 text-sm text-stone-500 dark:text-slate-400">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
