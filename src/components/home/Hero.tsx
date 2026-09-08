'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Zap,
  Shield,
  BarChart2,
  Activity,
  Cpu,
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
      className={`absolute rounded-full blur-[140px] pointer-events-none ${className}`}
      animate={{ 
        scale: [1, 1.18, 0.94, 1.1, 1], 
        opacity: [0.22, 0.38, 0.26, 0.42, 0.22],
        rotate: [0, 45, -30, 0]
      }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay }}
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
      className="glass rounded-2xl px-5 py-4 text-center relative overflow-hidden group border border-white/[0.08] hover:border-amber-500/30 transition-all shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
  const yParallax = useSpring(useTransform(scrollY, [0, 500], [0, -50]), {
    stiffness: 80,
    damping: 20,
  });

  const dashboardTilt = useSpring(useTransform(scrollY, [0, 600], [15, 0]), {
    stiffness: 70,
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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* ── Rich Multi-Color Ambient Glow Spheres ────────────────── */}
      <AuroraBlob
        className="w-[750px] h-[550px] bg-gradient-to-tr from-amber-500/30 via-orange-500/20 to-yellow-400/15 top-[-100px] left-1/2 -translate-x-1/2"
        delay={0}
      />
      <AuroraBlob
        className="w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-blue-500/15 top-[20%] left-[-8%]"
        delay={3}
      />
      <AuroraBlob
        className="w-[450px] h-[450px] bg-gradient-to-tl from-cyan-500/20 via-sky-500/15 to-emerald-500/10 top-[15%] right-[-6%]"
        delay={6}
      />

      {/* ── Holographic / Perspective Dashboard Background Layer ── */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20 -z-10 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
        }}
      >
        <motion.div
          style={{ rotateX: dashboardTilt, scale: 1.15 }}
          className="relative w-[1100px] h-[650px] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_120px_rgba(245,158,11,0.2)]"
        >
          <Image
            src="/images/dashboards/MAT.png"
            alt="Dashboard Preview Background"
            fill
            className="object-cover object-top opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* ── Floating Data Badges (Left & Right) ──────────────────── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden xl:flex items-center gap-3.5 absolute top-[28%] left-[4%] glass p-3.5 rounded-2xl border border-white/[0.1] shadow-2xl z-20"
      >
        <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Pipeline Comercial</span>
          </div>
          <div className="text-base font-black text-white font-mono">+38.4% MoM</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden xl:flex items-center gap-3.5 absolute top-[42%] right-[4%] glass p-3.5 rounded-2xl border border-white/[0.1] shadow-2xl z-20"
      >
        <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <span>DAX Engine</span>
          </div>
          <div className="text-base font-black text-amber-400 font-mono">0.12s Latencia</div>
        </div>
      </motion.div>

      {/* ── Animated Beam / Scanline ────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)]" />

      <motion.div
        style={{ y: yParallax }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* ── Top Pill Badge ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-amber text-xs font-semibold text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.25)] border border-amber-500/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            Consultoría Senior · Power BI · Looker Studio · Automatización
          </div>
        </motion.div>

        {/* ── Headline ───────────────────────────────────────────── */}
        <div className="text-center max-w-5xl mx-auto mt-8 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-[66px] font-black text-white leading-[1.1] tracking-tight drop-shadow-sm"
          >
            Transforma tus datos en{' '}
            <span className="relative inline-block">
              <span className="gradient-text-shimmer drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
                cuadros de mando
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full shadow-[0_0_12px_rgba(245,158,11,0.8)]"
                style={{ background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)' }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>{' '}
            que multiplican tu rentabilidad
          </motion.h1>

          {/* ── Subheadline ────────────────────────────────────────── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Elimina las hojas de Excel colapsadas y los reportes manuales de los lunes.
            Centralizamos tus fuentes de datos en paneles interactivos en tiempo real para directivos y equipos que valoran su tiempo.
          </motion.p>

          {/* ── CTAs ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3"
          >
            <Link
              href="/auditoria-gratuita"
              className="btn-primary w-full sm:w-auto group text-base py-4 px-8 shadow-[0_4px_30px_rgba(245,158,11,0.4)]"
            >
              <Sparkles className="w-5 h-5" />
              <span>Auditoría Gratuita en 48h</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto group text-base py-4 px-7 border-emerald-500/30 hover:border-emerald-500/60 shadow-lg"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Consulta por WhatsApp</span>
            </a>
          </motion.div>

          {/* ── Trust pills ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs sm:text-sm text-slate-400 pt-2"
          >
            {[
              { icon: CheckCircle2, text: 'Sin permanencias ni costes ocultos' },
              { icon: Shield,       text: 'NDA firmado en cada proyecto' },
              { icon: Zap,          text: 'Trato directo con el especialista' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Stats ──────────────────────────────────────────────── */}
        <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Tech stack bar ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 max-w-5xl mx-auto"
        >
          <div className="section-divider mb-8" />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-6">
            Especialistas certificados en las mejores tecnologías del mercado
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {TECHS.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-xl p-3.5 text-center cursor-default group border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-md"
              >
                <div className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] text-amber-400/80 mt-1 font-medium">{tech.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Smooth Bottom Fade ───────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#060913] via-[#060913]/70 to-transparent pointer-events-none" />
    </section>
  );
}
