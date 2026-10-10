'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Shield,
  Activity,
  Cpu,
  Zap,
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
  { value: 7,   suffix: '+',  label: 'Años de experiencia',     color: 'text-amber-600 dark:text-amber-400' },
  { value: 100, suffix: '%',  label: 'Proyectos a tiempo',       color: 'text-emerald-600 dark:text-emerald-400' },
  { value: 48,  suffix: 'h',  label: 'Diagnóstico exprés',       color: 'text-cyan-600 dark:text-cyan-400' },
];

/* ── Platform Logos with official vectors ───────────────── */
const TECH_PLATFORMS = [
  {
    name: 'Power BI',
    sub: 'Microsoft Enterprise',
    color: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="16" width="5.5" height="12" rx="1.5" fill="#F2C811" />
        <rect x="10.5" y="10" width="5.5" height="18" rx="1.5" fill="#F2C811" />
        <rect x="18" y="4" width="5.5" height="24" rx="1.5" fill="#F2C811" />
        <rect x="25.5" y="11" width="4" height="17" rx="1.5" fill="#EAA300" />
      </svg>
    ),
  },
  {
    name: 'Looker Studio',
    sub: 'Google Cloud & GA4',
    color: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="17" width="5" height="11" rx="1" fill="#4285F4" />
        <rect x="11" y="11" width="5" height="17" rx="1" fill="#34A853" />
        <rect x="18" y="5" width="5" height="23" rx="1" fill="#FBBC05" />
        <rect x="25" y="9" width="5" height="19" rx="1" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: 'Tableau',
    sub: 'Salesforce & Cloud',
    color: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 2h2v7h-2zM15 23h2v7h-2zM2 15h7v2H2zM23 15h7v2h-7z" fill="#E8762D" />
        <path d="M8 8h2v5H8zM22 8h2v5h-2zM8 19h2v5H8zM22 19h2v5h-2z" fill="#1F77B4" />
        <rect x="14" y="10" width="4" height="12" rx="1" fill="#E24A3F" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Fabric',
    sub: 'Data Engineering & Lake',
    color: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" fill="url(#fabricGradHero)" />
        <path d="M16 3v26M4 10l24 12M28 10L4 22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <defs>
          <linearGradient id="fabricGradHero" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B7C3" />
            <stop offset="1" stopColor="#0078D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Power Query & DAX',
    sub: 'Modelado Relacional',
    color: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="26" height="24" rx="4" fill="#107C41" />
        <path d="M10 11l5 5-5 5h3l3.5-3.5L20 21h3l-5-5 5-5h-3l-3.5 3.5L13 11h-3z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'SQL & BigQuery',
    sub: 'Data Warehouse & ETL',
    color: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16" cy="8" rx="11" ry="4" fill="#0284C7" />
        <path d="M5 8v6c0 2.2 4.9 4 11 4s11-1.8 11-4V8" stroke="#0284C7" strokeWidth="2.2" fill="none" />
        <path d="M5 16v6c0 2.2 4.9 4 11 4s11-1.8 11-4v-6" stroke="#0284C7" strokeWidth="2.2" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Python & Pandas',
    sub: 'Analítica Avanzada & APIs',
    color: 'hover:border-yellow-500/50 hover:shadow-yellow-500/10',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8 4C10.5 4 10.7 6.3 10.7 6.3v2.3h5.2v.8H8.6S4.5 9 4.5 14.3c0 5.3 3.6 5.1 3.6 5.1h2.1v-3s-.1-3.6 3.5-3.6H19.7s3.4.1 3.4-3.3V6.3S23.6 4 15.8 4zm-1.9 2a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB" />
        <path d="M16.2 28c5.3 0 5.1-2.3 5.1-2.3V23.4h-5.2v-.8h7.3s4.1.4 4.1-4.9c0-5.3-3.6-5.1-3.6-5.1h-2.1v3s.1 3.6-3.5 3.6H12.3s-3.4-.1-3.4 3.3v4.2s-.5 2.3 7.3 2.3zm1.9-2a1 1 0 110-2 1 1 0 010 2z" fill="#FFD438" />
      </svg>
    ),
  },
  {
    name: 'Snowflake',
    sub: 'Cloud Data Platform',
    color: 'hover:border-blue-400/50 hover:shadow-blue-400/10',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3v26M3 16h26M6.5 6.5l19 19M6.5 25.5l19-19" stroke="#29B5E8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" fill="#29B5E8" />
      </svg>
    ),
  },
];

/* ── Stat Card ───────────────────────────────────────────── */
function StatCard({
  stat,
  inView,
}: {
  stat: (typeof STATS)[number];
  inView: boolean;
}) {
  const value = useCounter(stat.value, 1200, inView);
  return (
    <div
      className="glass rounded-2xl px-5 py-4 text-center relative overflow-hidden group border border-stone-200/90 dark:border-white/[0.08] hover:border-amber-500/40 transition-all shadow-sm dark:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-stone-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`text-3xl font-black font-mono ${stat.color}`}>
        {value}{stat.suffix}
      </div>
      <div className="text-xs text-stone-600 dark:text-slate-400 mt-0.5 font-medium">{stat.label}</div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

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
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* ── Holographic / Perspective Dashboard Background Layer ── */}
      <div 
        className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none select-none opacity-25 dark:opacity-20 -z-10 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
        }}
      >
        <div className="relative w-[1100px] h-[650px] rounded-3xl overflow-hidden border border-stone-300/40 dark:border-white/20 shadow-[0_0_120px_rgba(245,158,11,0.15)]">
          <Image
            src="/images/dashboards/MAT.png"
            alt="Dashboard Preview Background"
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-cover object-top opacity-70 dark:opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] dark:from-[#060913] via-transparent to-transparent" />
        </div>
      </div>

      {/* ── Floating Data Badges (Left & Right) ──────────────────── */}
      <div
        className="hidden xl:flex items-center gap-3.5 absolute top-[28%] left-[4%] glass p-3.5 rounded-2xl border border-stone-200/90 dark:border-white/[0.1] shadow-lg dark:shadow-2xl z-20 animate-float"
      >
        <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-slate-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>Pipeline Comercial</span>
          </div>
          <div className="text-base font-black text-stone-900 dark:text-white font-mono">+38.4% MoM</div>
        </div>
      </div>

      <div
        className="hidden xl:flex items-center gap-3.5 absolute top-[42%] right-[4%] glass p-3.5 rounded-2xl border border-stone-200/90 dark:border-white/[0.1] shadow-lg dark:shadow-2xl z-20 animate-float-delayed"
      >
        <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-slate-400 font-medium">
            <span>DAX Engine</span>
          </div>
          <div className="text-base font-black text-amber-600 dark:text-amber-400 font-mono">0.12s Latencia</div>
        </div>
      </div>

      {/* ── Subtle Top Beam Line ─────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Top Pill Badge ─────────────────────────────────────── */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-amber text-xs font-bold text-amber-800 dark:text-amber-300 shadow-sm dark:shadow-[0_0_25px_rgba(245,158,11,0.25)] border border-amber-500/35">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600 dark:bg-amber-500" />
            </span>
            Consultoría Senior · Power BI · Looker Studio · Automatización
          </div>
        </div>

        {/* ── Headline ───────────────────────────────────────────── */}
        <div className="text-center max-w-5xl mx-auto mt-8 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-black text-stone-900 dark:text-white leading-[1.12] tracking-tight">
            Transforma tus datos en{' '}
            <span className="relative inline-block">
              <span className="gradient-text">
                cuadros de mando
              </span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                style={{ background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)' }}
              />
            </span>{' '}
            que multiplican tu rentabilidad
          </h1>

          {/* ── Subheadline ────────────────────────────────────────── */}
          <p className="text-lg sm:text-xl text-stone-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Elimina las hojas de Excel colapsadas y los reportes manuales de los lunes.
            Centralizamos tus fuentes de datos en paneles interactivos en tiempo real para directivos y equipos que valoran su tiempo.
          </p>

          {/* ── CTAs ───────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Link
              href="/auditoria-gratuita"
              className="btn-primary w-full sm:w-auto group text-base py-4 px-8 shadow-md"
            >
              <Sparkles className="w-5 h-5" />
              <span>Auditoría Gratuita en 48h</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto group text-base py-4 px-7 border-stone-200 dark:border-emerald-500/30 hover:border-emerald-500/60 shadow-sm"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Consulta por WhatsApp</span>
            </a>
          </div>

          {/* ── Trust pills ────────────────────────────────────────── */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs sm:text-sm text-stone-600 dark:text-slate-400 pt-2 font-medium">
            {[
              { icon: CheckCircle2, text: 'Sin permanencias ni costes ocultos' },
              { icon: Shield,       text: 'NDA firmado en cada proyecto' },
              { icon: Zap,          text: 'Trato directo con el especialista' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats ──────────────────────────────────────────────── */}
        <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>

        {/* ── Platform Logos (Moving Ticker with Brand Vectors) ───── */}
        <div className="mt-16 pt-8 max-w-6xl mx-auto">
          <div className="section-divider mb-8" />
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-stone-500 dark:text-slate-400">
              Especialistas certificados en las tecnologías analíticas líderes
            </p>
          </div>

          {/* Infinite Smooth Moving Marquee Carousel */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-4 py-2">
              {/* First loop */}
              {TECH_PLATFORMS.map((tech) => (
                <div
                  key={`p1-${tech.name}`}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl shrink-0 transition-all duration-300
                    bg-white/85 dark:bg-[#0f172a]/80 border border-stone-200/90 dark:border-white/10
                    shadow-sm dark:shadow-md hover:-translate-y-1 ${tech.color}`}
                >
                  {tech.icon}
                  <div className="text-left">
                    <div className="text-xs font-bold text-stone-900 dark:text-slate-100 whitespace-nowrap">
                      {tech.name}
                    </div>
                    <div className="text-[10px] text-stone-500 dark:text-slate-400 whitespace-nowrap">
                      {tech.sub}
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate loop for infinite seamless sliding */}
              {TECH_PLATFORMS.map((tech) => (
                <div
                  key={`p2-${tech.name}`}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl shrink-0 transition-all duration-300
                    bg-white/85 dark:bg-[#0f172a]/80 border border-stone-200/90 dark:border-white/10
                    shadow-sm dark:shadow-md hover:-translate-y-1 ${tech.color}`}
                >
                  {tech.icon}
                  <div className="text-left">
                    <div className="text-xs font-bold text-stone-900 dark:text-slate-100 whitespace-nowrap">
                      {tech.name}
                    </div>
                    <div className="text-[10px] text-stone-500 dark:text-slate-400 whitespace-nowrap">
                      {tech.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Fade ────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#faf8f5] dark:from-[#060913] to-transparent pointer-events-none" />
    </section>
  );
}
