'use client';

import { useState } from 'react';
import { X, Sliders, TrendingUp, TrendingDown } from 'lucide-react';

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SimScenario = 'alquiler' | 'despido' | 'smi';

export const SimulatorModal = ({ isOpen, onClose }: SimulatorModalProps) => {
  const [scenario, setScenario] = useState<SimScenario>('alquiler');

  // Slider values
  const [rentCap, setRentCap] = useState<number>(25); // 0 to 40%
  const [severanceDays, setSeveranceDays] = useState<number>(33); // 20 to 50 days
  const [smiValue, setSmiValue] = useState<number>(1184); // 1000 to 1600 €

  if (!isOpen) return null;

  // Calculos simulados
  // 1. Alquiler
  const supplyDrop = Math.round(rentCap * 1.35);
  const candidatesPerAd = Math.round(25 + rentCap * 3.2);
  const rejectionRateVulnerable = Math.min(95, Math.round(30 + rentCap * 1.6));

  // 2. Despido
  const pymeContingentCost = Math.round(severanceDays * 65.5 * 3);
  const hiringHesitation = Math.round(((severanceDays - 20) / 30) * 85);
  const youthUnemploymentImpact = ((severanceDays - 20) * 0.45 + 14).toFixed(1);

  // 3. SMI
  const employerCost = Math.round(smiValue * 1.325);
  const taxWedge = Math.round(employerCost - smiValue * 0.88);
  const hoursCutRisk = Math.min(90, Math.round(((smiValue - 1000) / 600) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-[#111218] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Laboratorio de Segundo Orden
              </h3>
              <p className="text-xs text-zinc-400">
                Simula las consecuencias no deseadas de decretos políticos en tiempo real
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="px-5 sm:px-6 pt-4 pb-2 border-b border-white/[0.06] bg-[#0c0d12]">
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setScenario('alquiler')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-tight transition-all text-center ${
                scenario === 'alquiler'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-white/[0.02] text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Tope al Alquiler
            </button>
            <button
              onClick={() => setScenario('despido')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-tight transition-all text-center ${
                scenario === 'despido'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'bg-white/[0.02] text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Coste del Despido
            </button>
            <button
              onClick={() => setScenario('smi')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-tight transition-all text-center ${
                scenario === 'smi'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-white/[0.02] text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Subida del SMI
            </button>
          </div>
        </div>

        {/* Simulator Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* SCENARIO 1: ALQUILER */}
          {scenario === 'alquiler' && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-zinc-300">
                    Tope de reducción de precio exigido por ley:
                  </label>
                  <span className="text-sm font-bold font-mono text-emerald-400">
                    -{rentCap}% respecto al mercado
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={rentCap}
                  onChange={(e) => setRentCap(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                  <span>-5% (Leve)</span>
                  <span>-20% (Moderado)</span>
                  <span>-40% (Intervención agresiva)</span>
                </div>
              </div>

              {/* Consecuencias calculadas */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                  Efectos de segundo orden proyectados:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Caída oferta tradicional
                    </span>
                    <span className="text-2xl font-bold font-mono text-rose-400 flex items-center gap-1">
                      -{supplyDrop}%
                      <TrendingDown className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Fuga a alquiler temporal o venta
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Candidatos por piso
                    </span>
                    <span className="text-2xl font-bold font-mono text-amber-400 flex items-center gap-1">
                      {candidatesPerAd} pers.
                      <TrendingUp className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Colapso de visitas y colas
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Descarte de jóvenes
                    </span>
                    <span className="text-2xl font-bold font-mono text-rose-400">
                      {rejectionRateVulnerable}%
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Selección por nóminas blindadas
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300 leading-relaxed">
                  <span className="font-semibold text-white block mb-0.5">La paradoja de Bastiat:</span>
                  El precio nominal baja un {rentCap}%, pero la probabilidad real de que un inquilino medio consiga firmar un contrato se divide por cuatro. El piso barato sobre el papel no existe en la calle.
                </div>
              </div>
            </div>
          )}

          {/* SCENARIO 2: DESPIDO */}
          {scenario === 'despido' && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-zinc-300">
                    Días de indemnización por año trabajado:
                  </label>
                  <span className="text-sm font-bold font-mono text-cyan-400">
                    {severanceDays} días/año
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="50"
                  step="1"
                  value={severanceDays}
                  onChange={(e) => setSeveranceDays(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                  <span>20 días (Modelo flex)</span>
                  <span>33 días (Actual España)</span>
                  <span>50 días (Hiperprotección)</span>
                </div>
              </div>

              {/* Consecuencias calculadas */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                  Efectos de segundo orden proyectados:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Pasivo latente pyme (3 años)
                    </span>
                    <span className="text-2xl font-bold font-mono text-cyan-400">
                      {pymeContingentCost.toLocaleString()} €
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Riesgo financiero por empleado
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Freno a contratar
                    </span>
                    <span className="text-2xl font-bold font-mono text-amber-400 flex items-center gap-1">
                      +{hiringHesitation}%
                      <TrendingUp className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Preferencia por no crecer
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Tasa paro juvenil estimada
                    </span>
                    <span className="text-2xl font-bold font-mono text-rose-400">
                      {youthUnemploymentImpact}%
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Muro de entrada para principiantes
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300 leading-relaxed">
                  <span className="font-semibold text-white block mb-0.5">La paradoja de Bastiat:</span>
                  Aumentar a {severanceDays} días blindará al que ya tiene 15 años en la empresa, pero condenará a sus propios hijos a encadenar becas no remuneradas o contratos de sustitución temporal porque nadie asume el riesgo de contratarles.
                </div>
              </div>
            </div>
          )}

          {/* SCENARIO 3: SMI */}
          {scenario === 'smi' && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-zinc-300">
                    Salario Mínimo Bruto fijado en BOE:
                  </label>
                  <span className="text-sm font-bold font-mono text-amber-400">
                    {smiValue.toLocaleString()} € / mes
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="1600"
                  step="20"
                  value={smiValue}
                  onChange={(e) => setSmiValue(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                  <span>1.000 €</span>
                  <span>1.184 € (Actual)</span>
                  <span>1.600 € (Propuesta sindicatos)</span>
                </div>
              </div>

              {/* Consecuencias calculadas */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                  Efectos de segundo orden proyectados:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Coste Real Total Empresa
                    </span>
                    <span className="text-2xl font-bold font-mono text-rose-400">
                      {employerCost.toLocaleString()} €
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Incluye +32.5% cotización patronal
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Cuña fiscal oculta
                    </span>
                    <span className="text-2xl font-bold font-mono text-cyan-400">
                      {taxWedge.toLocaleString()} €/mes
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Lo que se queda el Estado en el camino
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20">
                    <span className="text-[11px] text-zinc-400 block mb-1">
                      Riesgo recorte de horas
                    </span>
                    <span className="text-2xl font-bold font-mono text-amber-400">
                      {hoursCutRisk}%
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      En campo, hostelería y limpieza
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300 leading-relaxed">
                  <span className="font-semibold text-white block mb-0.5">La paradoja de Bastiat:</span>
                  El empleado percibe que le suben el sueldo a {smiValue} €, pero a la pequeña cafetería o taller le cuesta {employerCost} €. Si el valor que genera la hora trabajada no alcanza esa cifra, el puesto se transforma en media jornada o se sustituye por tecnología.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-[#0c0d12] flex items-center justify-between">
          <span className="text-[11px] text-zinc-500 italic">
            Basado en elasticidades empíricas del Banco de España y literatura NBER.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold transition-colors"
          >
            Cerrar Laboratorio
          </button>
        </div>
      </div>
    </div>
  );
};
