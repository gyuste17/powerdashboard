'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, TrendingUp, Clock, PiggyBank, Sparkles, AlertTriangle } from 'lucide-react';

/* ── Custom range input styles injected via style tag ─ */
const rangeStyle = `
  input[type=range].roi-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 6px;
    background: rgba(255,255,255,0.06);
    outline: none;
    cursor: pointer;
  }
  input[type=range].roi-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border: 3px solid #0f172a;
    box-shadow: 0 0 12px rgba(245,158,11,0.5);
    cursor: pointer;
    transition: box-shadow 0.2s;
  }
  input[type=range].roi-slider:hover::-webkit-slider-thumb {
    box-shadow: 0 0 20px rgba(245,158,11,0.7);
  }
  input[type=range].roi-slider::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #f59e0b var(--pct, 30%), rgba(255,255,255,0.06) 0%);
    height: 6px;
    border-radius: 6px;
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
        <span className="text-slate-300 font-medium">{label}</span>
        <motion.span
          key={value}
          initial={{ opacity: 0.5, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-amber-400 font-bold text-base"
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
      <div className="flex justify-between text-[10px] text-slate-600">
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
    <div className={`${bg} rounded-2xl p-5 space-y-1 border border-white/[0.05]`}>
      <div className={`flex items-center gap-2 text-xs font-medium ${color} opacity-80 mb-2`}>
        <Icon className="w-4 h-4" />
        {label}
      </div>
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${color}`}
      >
        {value}
      </motion.div>
      <p className="text-xs text-slate-500">{sub}</p>
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
    <section className="py-24 bg-[#0a0e17] relative overflow-hidden" id="calculadora-roi">
      <style>{rangeStyle}</style>

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Header ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-amber-400 text-xs font-bold uppercase tracking-widest mb-5">
            <Calculator className="w-3.5 h-3.5" />
            Calculadora ROI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            ¿Cuánto cuesta{' '}
            <span className="gradient-text">no tener un dashboard</span>?
          </h2>
          <p className="text-slate-400 text-base mt-5 leading-relaxed">
            Ajusta los parámetros de tu equipo para ver el ROI real de automatizar
            tus datos con PowerDashboard.
          </p>
        </motion.div>

        {/* ── Grid ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-2xl p-7 sm:p-8 space-y-7 border border-white/[0.06]"
          >
            <h3 className="font-bold text-white text-lg flex items-center gap-2.5 pb-4 border-b border-white/[0.05]">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-amber-glow-sm" />
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
              label="Coste hora (salario bruto + empresa)"
              value={hourlyRate}
              min={15} max={80} step={1}
              format={(v) => `${v} € / hora`}
              onChange={setHourlyRate}
            />

            {/* Cost summary */}
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                Coste actual de los informes manuales
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tu equipo invierte{' '}
                <motion.strong key={totalAnnualHours} initial={{ color: '#f87171' }} animate={{ color: '#fff' }} className="text-white">
                  {totalAnnualHours.toLocaleString()} horas/año
                </motion.strong>{' '}
                en datos manuales, con un coste salarial de{' '}
                <motion.strong key={currentAnnualCost} className="text-rose-400">
                  {currentAnnualCost.toLocaleString()} €/año
                </motion.strong>.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-amber-500/12 via-[#0f172a]/90 to-[#0f172a] border border-amber-500/20 rounded-2xl p-7 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* ROI badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Ahorro y Retorno Estimado
                </span>
                <motion.div
                  key={netRoi}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/25"
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
                  color="text-amber-400"
                  bg="bg-[#080c14]/80"
                />
                <MetricCard
                  icon={Clock}
                  label="Horas Liberadas al Año"
                  value={`${hoursSavedAnnual.toLocaleString()} h`}
                  sub="Para tareas estratégicas"
                  color="text-cyan-400"
                  bg="bg-[#080c14]/80"
                />
              </div>

              {/* Qualitative benefits */}
              <div className="p-4 rounded-xl glass border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Beneficios adicionales inmediatos
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {[
                    'Eliminación de errores humanos en fórmulas de hojas de cálculo',
                    'Decisiones estratégicas con datos al día, sin esperar al cierre mensual',
                    'Fin del estrés de fin de mes y reportes urgentes de dirección',
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-amber-500 shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-white/[0.05] mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="btn-primary flex-1 group"
              >
                Pedir Auditoría y Presupuesto
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/precios"
                className="btn-secondary sm:w-auto"
              >
                Ver Tarifas
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
