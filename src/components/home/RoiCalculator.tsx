'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, TrendingUp, Clock, PiggyBank, Sparkles } from 'lucide-react';

export function RoiCalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [hourlyRate, setHourlyRate] = useState(32);

  // Math:
  // Total hours spent annually = employees * hoursPerWeek * 48 weeks
  // Cost per year = Total hours * hourlyRate
  // Estimated savings with PowerDashboard = 85% of hours + reduction in errors
  const totalAnnualHours = employees * hoursPerWeek * 48;
  const currentAnnualCost = totalAnnualHours * hourlyRate;
  const hoursSavedAnnual = Math.round(totalAnnualHours * 0.85);
  const moneySavedAnnual = Math.round(currentAnnualCost * 0.85);
  const estimatedDashboardCost = 1250; // Reference Pro package
  const netRoi = Math.round(((moneySavedAnnual - estimatedDashboardCost) / estimatedDashboardCost) * 100);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden" id="calculadora-roi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Calculadora de Rentabilidad (ROI)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Cuánto dinero y horas pierde tu empresa creando informes manuales?
          </h2>
          <p className="text-slate-400 text-base mt-4 leading-relaxed">
            Ajusta los parámetros según tu equipo para calcular el retorno de inversión y el tiempo que recuperarás automatizando tus datos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls column */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Parámetros de tu Equipo
            </h3>

            {/* Range 1: Employees */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Personas que generan o recopilan datos:</span>
                <span className="font-mono text-amber-400 font-bold text-base">{employees} personas</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>1 persona</span>
                <span>10</span>
                <span>20+ personas</span>
              </div>
            </div>

            {/* Range 2: Hours/week */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Horas semanales dedicadas a Excel / informes por persona:</span>
                <span className="font-mono text-amber-400 font-bold text-base">{hoursPerWeek} h / semana</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>2 horas</span>
                <span>12 horas</span>
                <span>25 horas</span>
              </div>
            </div>

            {/* Range 3: Hourly wage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Coste medio por hora (salario bruto + costes empresa):</span>
                <span className="font-mono text-amber-400 font-bold text-base">{hourlyRate} € / hora</span>
              </div>
              <input
                type="range"
                min="15"
                max="80"
                step="1"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>15 €/h</span>
                <span>45 €/h</span>
                <span>80 €/h</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300">Coste actual en horas manuales:</span>
              <p>Tu equipo invierte actualmente <strong className="text-white">{totalAnnualHours.toLocaleString()} horas/año</strong> en recopilar datos y preparar informes, con un coste salarial de <strong className="text-rose-400">{currentAnnualCost.toLocaleString()} €/año</strong>.</p>
            </div>
          </div>

          {/* Results column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-500/15 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Ahorro y Retorno Estimado</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> ROI +{netRoi > 0 ? netRoi : 100}%
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/90 border border-slate-800 p-5 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <PiggyBank className="w-4 h-4 text-amber-400" />
                    <span>Ahorro Económico Anual</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                    {moneySavedAnnual.toLocaleString()} €
                  </div>
                  <p className="text-xs text-slate-400">Dinero recuperado al año</p>
                </div>

                <div className="bg-slate-950/90 border border-slate-800 p-5 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Horas Liberadas al Año</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight">
                    {hoursSavedAnnual.toLocaleString()} h
                  </div>
                  <p className="text-xs text-slate-400">Para tareas estratégicas y ventas</p>
                </div>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-xl space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 font-semibold text-white">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Beneficios no cuantitativos inmediatos:
                </div>
                <ul className="space-y-1 text-slate-400 list-disc list-inside">
                  <li>Eliminación de errores humanos en fórmulas de hojas de cálculo.</li>
                  <li>Decisiones estratégicas con datos al día en vez de mirar el retrovisor a mes vencido.</li>
                  <li>Fin del estrés de fin de mes y reportes urgentes de dirección.</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contacto"
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm text-center shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Pedir Auditoría y Presupuesto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/precios"
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium text-sm text-center transition-colors"
              >
                Ver Tarifas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
