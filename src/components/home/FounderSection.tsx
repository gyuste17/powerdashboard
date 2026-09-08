'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ShieldCheck,
  Linkedin,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Award,
  Users,
  Briefcase,
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

const CREDENTIALS = [
  { icon: Award,    label: '+7 Años BI',          sub: 'Power BI, SQL, Python',  color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { icon: Users,    label: '100% Entregados',      sub: 'Proyectos a tiempo',     color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: Clock,    label: 'Respuesta < 48h',      sub: 'Diagnóstico y propuesta',color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Briefcase,label: 'Trato 1 a 1',          sub: 'Sin intermediarios',     color: 'text-violet-400', bg: 'bg-violet-500/10' },
];

const CHECKLIST = [
  'Modelos relacionales limpios y DAX optimizado',
  'Acuerdo de Confidencialidad (NDA) firmado',
  'Propiedad 100% del código y paneles',
  'Formación y soporte directo post-entrega',
];

export function FounderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 bg-transparent relative overflow-hidden" id="sobre-mi">
      {/* Background aurora */}
      <div className="absolute top-1/2 right-[-5%] w-[600px] h-[600px] bg-amber-500/12 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-[-5%] w-[450px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text content ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              Especialista & Fundador
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Hola, soy{' '}
              <span className="gradient-text">{SITE_CONFIG.founder.name}</span>
              <br />
              <span className="text-2xl sm:text-3xl font-bold text-slate-300">
                Tu consultor de datos de confianza
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Llevo más de{' '}
                <strong className="text-white">7 años dedicado a la consultoría,
                modelado de datos y formación en Business Intelligence</strong>{' '}
                (Power BI, Looker Studio, Tableau y SQL).
              </p>
              <p>
                Creé <strong className="text-amber-300">PowerDashboard.es</strong> con una
                misión clara: acercar el Business Intelligence de primer nivel a PYMEs y
                directivos, eliminando el coste inflado y la lentitud de las grandes agencias.
              </p>
              <p className="text-slate-400 text-sm">
                Cuando trabajas conmigo, no tratas con comerciales ni con juniors a los que
                delegan tu cuenta. Tratas 1 a 1 con el especialista que entiende tu negocio
                y programa tus modelos.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3">
              {CHECKLIST.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-2.5 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/contacto" className="btn-primary group">
                Reservar llamada de diagnóstico
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={SITE_CONFIG.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Credential card ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {/* Profile card */}
            <div className="glass rounded-2xl p-6 border border-white/[0.07] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-[60px] rounded-full" />
              <div className="flex items-center gap-4 relative">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-black text-2xl flex items-center justify-center shadow-amber-glow-sm shrink-0">
                  GY
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{SITE_CONFIG.founder.name}</h3>
                  <p className="text-sm text-amber-400 font-medium">{SITE_CONFIG.founder.role}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{SITE_CONFIG.founder.location}</p>
                </div>
                {/* Active badge */}
                <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Disponible
                </div>
              </div>
            </div>

            {/* Credential stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {CREDENTIALS.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-5 border border-white/[0.06] hover:border-white/[0.12] transition-all group cursor-default"
                >
                  <div className={`p-2.5 rounded-xl ${cred.bg} w-fit mb-3 group-hover:scale-110 transition-transform`}>
                    <cred.icon className={`w-5 h-5 ${cred.color}`} />
                  </div>
                  <div className={`text-lg font-black ${cred.color}`}>{cred.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{cred.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="glass-amber rounded-2xl p-5 flex items-start gap-3"
            >
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-amber-300 mb-1">Garantía de Satisfacción</div>
                <p className="text-xs text-amber-200/70 leading-relaxed">
                  Si en la primera fase de diseño el cuadro de mando no cumple con tus
                  requisitos acordados, lo ajustamos sin coste adicional.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
