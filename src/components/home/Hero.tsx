'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Zap,
  Shield,
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

/* ── Animated counter hook ─────────────────────────────── */
function useCounter(target: number, duration = 1500, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return value;
}

/* ── Stat card data ─────────────────────────────────────── */
const STATS = [
  { value: 7,   suffix: '+',  label: 'Años de experiencia',     color: 'text-amber-400' },
  { value: 100, suffix: '%',  label: 'Proyectos a tiempo',       color: 'text-emerald-400' },
  { value: 48,  suffix: 'h',  label: 'Diagnóstico exprés',       color: 'text-cyan-400' },
];

/* ── Tech bar items ─────────────────────────────────────── */
const TECHS = [
  { name: 'Power BI',        sub: 'Corporativo'     },
  { name: 'Looker Studio',   sub: 'Marketing & Web' },
  { name: 'Microsoft Fabric',sub: 'Data Engineering'},
  { name: 'Tableau',         sub: 'Viz Avanzada'    },
  { name: 'Power Query/DAX', sub: 'Modelado'        },
  { name: 'SQL & Python',    sub: 'ETL & APIs'      },
];

/* ── Floating blob component ─────────────────────────────── */
function AuroraBlob({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
      animate={{ scale: [1, 1.12, 0.95, 1.08, 1], opacity: [0.15, 0.28, 0.18, 0.32, 0.15] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

/* ── Stat Card ───────────────────────────────────────────── */
function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof STATS)[number];
  index: number;
  inView: boolean;
}) {
  const value = useCounter(stat.value, 1200, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-2xl px-5 py-4 text-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`text-3xl font-black font-mono ${stat.color}`}>
        {value}{stat.suffix}
      </div>
      <div className="text-xs text-slate-400 mt-0.5 font-medium">{stat.label}</div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const { scrollY } = useScroll();
  const yParallax = useSpring(useTransform(scrollY, [0, 500], [0, -60]), {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden grid-bg"
    >
      {/* ── Aurora background ────────────────────────── */}
      <AuroraBlob
        className="w-[700px] h-[500px] bg-amber-500/20 top-[-100px] left-1/2 -translate-x-1/2"
        delay={0}
      />
      <AuroraBlob
        className="w-[400px] h-[400px] bg-indigo-600/10 top-[30%] left-[5%]"
        delay={3}
      />
      <AuroraBlob
        className="w-[300px] h-[300px] bg-cyan-500/8 top-[20%] right-[5%]"
        delay={6}
      />

      {/* ── Scanline decorative line ─────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <motion.div
        style={{ y: yParallax }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* ── Badge ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-amber text-xs font-semibold text-amber-300 shadow-amber-glow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            Consultoría Senior · Power BI · Looker Studio · Automatización
          </div>
        </motion.div>

        {/* ── Headline ─────────────────────────────────── */}
        <div className="text-center max-w-5xl mx-auto mt-7 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] tracking-tight"
          >
            Transforma tus datos en{' '}
            <span className="relative inline-block">
              <span className="gradient-text-shimmer">cuadros de mando</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)' }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>{' '}
            que multiplican tu rentabilidad
          </motion.h1>

          {/* ── Subheadline ──────────────────────────────── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Elimina las hojas de Excel colapsadas y los reportes manuales de los lunes.
            Centralizamos tus fuentes en paneles interactivos en tiempo real.
          </motion.p>

          {/* ── CTAs ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/auditoria-gratuita"
              className="btn-primary w-full sm:w-auto group"
            >
              <Sparkles className="w-4 h-4" />
              <span>Auditoría Gratuita en 48h</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto group"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Consulta por WhatsApp</span>
            </a>
          </motion.div>

          {/* ── Trust pills ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 pt-1"
          >
            {[
              { icon: CheckCircle2, text: 'Sin permanencias ni costes ocultos' },
              { icon: Shield,       text: 'NDA firmado en cada proyecto' },
              { icon: Zap,          text: 'Trato directo con el especialista' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Stats ────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-5 max-w-lg mx-auto">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Tech stack bar ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-8 max-w-5xl mx-auto"
        >
          <div className="section-divider mb-8" />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-6">
            Especialistas certificados en las mejores tecnologías del mercado
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {TECHS.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.4 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="glass rounded-xl p-3 text-center cursor-default group border border-white/5 hover:border-amber-500/30 transition-colors duration-300"
              >
                <div className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] text-amber-500/70 mt-0.5">{tech.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom fade ──────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080c14] to-transparent pointer-events-none" />
    </section>
  );
}
