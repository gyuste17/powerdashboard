'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

const TRUST_POINTS = ['Sin compromiso', 'Respuesta en menos de 48h', 'Presupuesto cerrado'];

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl px-6 py-16 sm:px-16 sm:py-24 text-center bg-stone-900 dark:bg-white/[0.04] ring-1 ring-stone-900 dark:ring-white/[0.08]"
        >
          <div
            aria-hidden="true"
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-amber-500/25 blur-[100px]"
          />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white max-w-3xl mx-auto text-balance">
              Descubre en 48 horas lo que tus datos pueden decirte
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-300 dark:text-slate-400 max-w-2xl mx-auto">
              Revisamos tus fuentes de datos y te propongo estructura, KPIs y presupuesto cerrado.
              Gratis y sin compromiso.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/auditoria-gratuita" className="btn-primary w-full sm:w-auto group text-base px-7 py-3.5">
                <span>Auditoría Gratuita en 48h</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/15 ring-1 ring-white/15 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Consulta por WhatsApp</span>
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-400 dark:text-slate-500">
              {TRUST_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-stone-400 dark:text-slate-500">
              ¿Prefieres escribir?{' '}
              <Link href="/contacto" className="font-semibold text-amber-400 hover:underline">
                Usa el formulario de contacto
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
