'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Calculator, ArrowRight, TrendingUp, Clock, PiggyBank, Sparkles, AlertTriangle } from 'lucide-react';

/* ── Custom range input styles ──────────────────────────── */
const rangeStyle = `
  input[type=range].roi-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 6px;
    background: #e2dfd7;
    outline: none;
    cursor: pointer;
  }
  .dark input[type=range].roi-slider {
    background: rgba(255,255,255,0.06);
  }
  input[type=range].roi-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border: 3px solid #ffffff;
    box-shadow: 0 2px 8px rgba(245,158,11,0.4);
    cursor: pointer;
    transition: box-shadow 0.2s;
  }
  .dark input[type=range].roi-slider::-webkit-slider-thumb {
    border: 3px solid #0f172a;
    box-shadow: 0 0 12px rgba(245,158,11,0.5);
  }
  input[type=range].roi-slider:hover::-webkit-slider-thumb {
    box-shadow: 0 0 16px rgba(245,158,11,0.6);
  }
  input[type=range].roi-slider::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #f59e0b var(--pct, 30%), #e7e5df 0%);
    height: 6px;
    border-radius: 6px;
  }
  .dark input[type=range].roi-slider::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #f59e0b var(--pct, 30%), rgba(255,255,255,0.06) 0%);
  }
`;

/* ── Individual slider ──────────────────────────────────── */
function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-stone-700 dark:text-slate-300 font-semibold">{label}</span>
        <motion.span
          key={value}
          initial={{ opacity: 0.5, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-amber-700 dark:text-amber-400 font-black text-base"
        >
          {format(value)}
        </motion.span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider w-full"
        style={{ '--pct': `${pct}%` } as React.CSSProperties}
      />
      <div className="flex justify-between text-[11px] text-stone-400 dark:text-slate-600 font-medium">
        <span>{format(min)}</span>
        <span>{format(Math.round((min + max) / 2))}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

/* ── Result metric card ─────────────────────────────────── */
function MetricCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
  bg,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  sub: string;
  color: string;
  bg: string;
}) {
  return (
    <div className={`${bg} rounded-2xl p-5 space-y-1 border border-stone-200/90 dark:border-white/[0.05] shadow-sm`}>
      <div className={`flex items-center gap-2 text-xs font-semibold ${color} opacity-90 mb-1.5`}>
        <Icon className="w-4 h-4" />
        {label}
      </div>
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${color}`}
      >
        {value}
      </motion.div>
      <p className="text-xs text-stone-500 dark:text-slate-400">{sub}</p>
    </div>
  );
}

export function RoiCalculator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [employees,   setEmployees]   = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [hourlyRate,  setHourlyRate]  = useState(32);

  const totalAnnualHours   = employees * hoursPerWeek * 48;
  const currentAnnualCost  = totalAnnualHours * hourlyRate;
  const hoursSavedAnnual   = Math.round(totalAnnualHours * 0.85);
  const moneySavedAnnual   = Math.round(currentAnnualCost * 0.85);
  const referenceInvestment = 1250;
  const netRoi             = Math.max(100, Math.round(((moneySavedAnnual - referenceInvestment) / referenceInvestment) * 100));

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="calculadora-roi">
      <style>{rangeStyle}</style>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Header ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-xs font-bold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Calculadora ROI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            ¿Cuánto cuesta{' '}
            <span className="gradient-text">no tener un dashboard</span>?
          </h2>
          <p className="text-stone-600 dark:text-slate-400 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Ajusta los parámetros de tu equipo para ver el retorno y ahorro real de automatizar tus informes con PowerDashboard.
          </p>
        </motion.div>

        {/* ── Grid ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/90 dark:bg-[#0f172a]/80 rounded-3xl p-7 sm:p-8 space-y-7 border border-stone-200/90 dark:border-white/[0.08] shadow-md dark:shadow-xl"
          >
            <h3 className="font-bold text-stone-900 dark:text-white text-lg flex items-center gap-2.5 pb-4 border-b border-stone-200/80 dark:border-white/[0.05]">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              Parámetros de tu Equipo
            </h3>

            <Slider
              label="Personas que crean o recopilan datos"
              value={employees}
              min={1} max={20} step={1}
              format={(v) => `${v} persona${v !== 1 ? 's' : ''}`}
              onChange={setEmployees}
            />
            <Slider
              label="Horas semanales por persona en Excel / informes"
              value={hoursPerWeek}
              min={2} max={25} step={1}
              format={(v) => `${v} h / semana`}
              onChange={setHoursPerWeek}
            />
            <Slider
              label="Coste hora medio (salario bruto + costes empresa)"
              value={hourlyRate}
              min={15} max={80} step={1}
              format={(v) => `${v} € / hora`}
              onChange={setHourlyRate}
            />

            {/* Cost summary */}
            <div className="p-4 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                Coste actual de la operativa manual
              </div>
              <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">
                Tu equipo invierte{' '}
                <strong className="text-stone-900 dark:text-white font-bold">
                  {totalAnnualHours.toLocaleString()} horas/año
                </strong>{' '}
                en recopilar datos manualmente, con un coste salarial de{' '}
                <strong className="text-rose-700 dark:text-rose-400 font-bold">
                  {currentAnnualCost.toLocaleString()} €/año
                </strong>.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/95 dark:bg-[#0f172a]/90 border border-amber-300 dark:border-amber-500/20 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-6">
              {/* ROI badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-widest">
                  Ahorro y Retorno Estimado
                </span>
                <motion.div
                  key={netRoi}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 text-xs font-bold border border-emerald-300 dark:border-emerald-500/25"
                >
                  <TrendingUp className="w-3 h-3" />
                  ROI +{netRoi}%
                </motion.div>
              </div>

              {/* Metric cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <MetricCard
                  icon={PiggyBank}
                  label="Ahorro Económico Anual"
                  value={`${moneySavedAnnual.toLocaleString()} €`}
                  sub="Dinero recuperado al año"
                  color="text-amber-700 dark:text-amber-400"
                  bg="bg-amber-50/70 dark:bg-[#080c14]/80"
                />
                <MetricCard
                  icon={Clock}
                  label="Horas Recuperadas"
                  value={`${hoursSavedAnnual.toLocaleString()} h`}
                  sub="Horas/año dedicadas a crecer"
                  color="text-cyan-700 dark:text-cyan-400"
                  bg="bg-cyan-50/70 dark:bg-[#080c14]/80"
                />
              </div>

              {/* Key message */}
              <div className="p-4 rounded-2xl bg-stone-100/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-white/[0.06] text-xs text-stone-600 dark:text-slate-400 leading-relaxed space-y-1">
                <span className="font-bold text-stone-900 dark:text-white block">
                  ¿En cuánto tiempo se amortiza el proyecto?
                </span>
                <span>
                  Con una inversión media típica a partir de 490 €, el proyecto se amortiza en menos de{' '}
                  <strong className="text-amber-700 dark:text-amber-400">
                    {Math.max(1, Math.round((1250 / (moneySavedAnnual / 12)) * 10) / 10)} meses
                  </strong>.
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-500 dark:text-slate-400 text-center sm:text-left">
                Diagnóstico previo personalizado en menos de 48 horas.
              </span>
              <Link
                href="/auditoria-gratuita"
                className="btn-primary w-full sm:w-auto text-xs py-3 px-6 shrink-0"
              >
                <span>Solicitar Auditoría Gratuita</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
