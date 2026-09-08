'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare, CheckCircle2, Zap, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

const TRUST_POINTS = [
  { icon: CheckCircle2, text: 'Sin compromiso de contratación' },
  { icon: Clock,        text: 'Respuesta en < 24h laborables' },
  { icon: Zap,          text: 'Propuesta personalizada y detallada' },
];

export function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-[#080c14] relative overflow-hidden" ref={ref}>
      {/* Large ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/12 blur-[100px] rounded-full" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Card gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600" />

          {/* Decorative noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }} />

          {/* Decorative circle blobs */}
          <div className="absolute -right-24 -top-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-black/15 rounded-full blur-3xl" />
          <div className="absolute right-1/3 top-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

          {/* Content */}
          <div className="relative p-10 sm:p-14 lg:p-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/15 text-slate-950 text-xs font-black uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Sin compromiso · Gratis
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto"
            >
              ¿Listo para transformar los datos de tu empresa en ventaja competitiva?
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-slate-900 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-5"
            >
              Cuéntame qué fuentes de datos usas y recibirás una propuesta personalizada
              con estructura recomendada y presupuesto cerrado en menos de 48 horas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <Link
                href="/contacto"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold text-base shadow-xl shadow-black/30 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Solicitar Diagnóstico Gratuito</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/20 hover:bg-white/30 text-slate-950 font-bold text-base transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp directo</span>
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-xs text-slate-900/80 font-semibold"
            >
              {TRUST_POINTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-slate-950/60" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
