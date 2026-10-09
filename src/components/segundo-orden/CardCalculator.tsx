'use client';

import React, { useState } from 'react';
import { Sliders, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

interface CardCalculatorProps {
  argumentId: string;
  theme: 'light' | 'dark';
}

export const CardCalculator: React.FC<CardCalculatorProps> = ({ argumentId, theme }) => {
  const isLight = theme === 'light';

  // 1. Alquiler state
  const [rentCap, setRentCap] = useState(25);
  // 2. Despido state
  const [severanceDays, setSeveranceDays] = useState(33);
  // 3. Sanidad state
  const [privateCoverage, setPrivateCoverage] = useState(25);
  // 4. SMI state
  const [smiValue, setSmiValue] = useState(1184);
  // 5. Impuesto Ricos state
  const [wealthTaxRate, setWealthTaxRate] = useState(2.5);
  // 6. Supermercados state
  const [superMarketMargin, setSuperMarketMargin] = useState(2.7);

  const containerBg = isLight 
    ? 'bg-slate-100/80 border-slate-200 text-slate-800' 
    : 'bg-[#121722] border-slate-800/80 text-slate-200';

  const cardInnerBg = isLight ? 'bg-white border-slate-200' : 'bg-[#182030] border-slate-700/50';
  const labelColor = isLight ? 'text-slate-600' : 'text-slate-400';
  const headingColor = isLight ? 'text-slate-900' : 'text-slate-100';

  if (argumentId === 'control-alquiler') {
    const supplyDrop = Math.round(rentCap * 1.35);
    const candidates = Math.round(25 + rentCap * 3.2);
    const rejectionRate = Math.min(95, Math.round(30 + rentCap * 1.6));

    return (
      <div className={`p-4 rounded-2xl border ${containerBg} space-y-3.5`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-500 uppercase tracking-wider font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulador de Segundo Orden</span>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-500">
            Tope forzado: -{rentCap}%
          </span>
        </div>

        <div>
          <input
            type="range"
            min="5"
            max="40"
            step="1"
            value={rentCap}
            onChange={(e) => setRentCap(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>-5% (Leve)</span>
            <span>-20% (Zonas tensionadas)</span>
            <span>-40% (Intervención extrema)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Caída de oferta</span>
            <span className="text-lg font-bold font-mono text-rose-500 flex items-center gap-1 mt-0.5">
              -{supplyDrop}% <TrendingDown className="w-3.5 h-3.5" />
            </span>
            <span className="text-[9px] text-slate-500 block">Fuga a alquiler temporal</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Candidatos / anuncio</span>
            <span className="text-lg font-bold font-mono text-amber-500 flex items-center gap-1 mt-0.5">
              {candidates} pers. <TrendingUp className="w-3.5 h-3.5" />
            </span>
            <span className="text-[9px] text-slate-500 block">Colapso de visitas y colas</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Exclusión de vulnerables</span>
            <span className="text-lg font-bold font-mono text-rose-500 mt-0.5 block">
              {rejectionRate}%
            </span>
            <span className="text-[9px] text-slate-500 block">Solo perfiles ultra solventes</span>
          </div>
        </div>

        <p className={`text-[11px] ${labelColor} italic leading-snug`}>
          💡 <strong>Consecuencia real:</strong> Bajar el precio por ley un {rentCap}% no crea casas; reduce la oferta un {supplyDrop}% y concentra los pocos pisos en inquilinos de rentas más altas.
        </p>
      </div>
    );
  }

  if (argumentId === 'coste-despido') {
    const pymeCost = Math.round(severanceDays * 65.5 * 3);
    const hiringHesitation = Math.round(((severanceDays - 20) / 30) * 85);
    const youthUnemployment = ((severanceDays - 20) * 0.45 + 14).toFixed(1);

    return (
      <div className={`p-4 rounded-2xl border ${containerBg} space-y-3.5`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-500 uppercase tracking-wider font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulador de Segundo Orden</span>
          </div>
          <span className="text-xs font-mono font-bold text-cyan-500">
            {severanceDays} días / año
          </span>
        </div>

        <div>
          <input
            type="range"
            min="20"
            max="50"
            step="1"
            value={severanceDays}
            onChange={(e) => setSeveranceDays(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>20 días (Dinamarca / Flex)</span>
            <span>33 días (España actual)</span>
            <span>50 días (Hiperprotección)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Pasivo pyme (3 años)</span>
            <span className="text-lg font-bold font-mono text-cyan-500 mt-0.5 block">
              {pymeCost.toLocaleString()} €
            </span>
            <span className="text-[9px] text-slate-500 block">Riesgo contingente latente</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Freno a contratación</span>
            <span className="text-lg font-bold font-mono text-amber-500 flex items-center gap-1 mt-0.5">
              +{hiringHesitation}% <TrendingUp className="w-3.5 h-3.5" />
            </span>
            <span className="text-[9px] text-slate-500 block">Prudencia extrema de pymes</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Paro juvenil estimado</span>
            <span className="text-lg font-bold font-mono text-rose-500 mt-0.5 block">
              {youthUnemployment}%
            </span>
            <span className="text-[9px] text-slate-500 block">Muro insalvable a principiantes</span>
          </div>
        </div>

        <p className={`text-[11px] ${labelColor} italic leading-snug`}>
          💡 <strong>Consecuencia real:</strong> Un despido de {severanceDays} días protege a quien ya tiene plaza fija, pero bloquea la puerta de entrada para los recién graduados.
        </p>
      </div>
    );
  }

  if (argumentId === 'sanidad-privada') {
    const savingsMln = Math.round(privateCoverage * 228);
    const waitingListDays = Math.round(privateCoverage * 2.3);

    return (
      <div className={`p-4 rounded-2xl border ${containerBg} space-y-3.5`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-500 uppercase tracking-wider font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulador de Segundo Orden</span>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-500">
            Cobertura privada: {privateCoverage}%
          </span>
        </div>

        <div>
          <input
            type="range"
            min="10"
            max="40"
            step="1"
            value={privateCoverage}
            onChange={(e) => setPrivateCoverage(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>10% (Baja penetración)</span>
            <span>25% (Media española actual)</span>
            <span>40% (Alta colaboración)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Ahorro al SNS público</span>
            <span className="text-lg font-bold font-mono text-emerald-500 mt-0.5 block">
              {savingsMln.toLocaleString()} M€
            </span>
            <span className="text-[9px] text-slate-500 block">Gasto que no asume el Estado</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Alivio en listas de espera</span>
            <span className="text-lg font-bold font-mono text-cyan-500 flex items-center gap-1 mt-0.5">
              -{waitingListDays} días <TrendingDown className="w-3.5 h-3.5" />
            </span>
            <span className="text-[9px] text-slate-500 block">Camas y consultas liberadas</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Satisfacción paciente</span>
            <span className="text-lg font-bold font-mono text-amber-500 mt-0.5 block">
              88% positiva
            </span>
            <span className="text-[9px] text-slate-500 block">Competencia por reputación</span>
          </div>
        </div>

        <p className={`text-[11px] ${labelColor} italic leading-snug`}>
          💡 <strong>Consecuencia real:</strong> Quien paga un seguro privado paga la sanidad pública dos veces (con impuestos y póliza) y alivia la presión asistencial para los pacientes públicos.
        </p>
      </div>
    );
  }

  if (argumentId === 'salario-minimo') {
    const employerCost = Math.round(smiValue * 1.325);
    const taxWedge = Math.round(employerCost - smiValue * 0.88);
    const hoursRisk = Math.min(90, Math.round(((smiValue - 1000) / 600) * 100));

    return (
      <div className={`p-4 rounded-2xl border ${containerBg} space-y-3.5`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-wider font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulador de Segundo Orden</span>
          </div>
          <span className="text-xs font-mono font-bold text-amber-500">
            SMI fijado: {smiValue.toLocaleString()} €
          </span>
        </div>

        <div>
          <input
            type="range"
            min="1000"
            max="1600"
            step="20"
            value={smiValue}
            onChange={(e) => setSmiValue(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>1.000 €</span>
            <span>1.184 € (Actual)</span>
            <span>1.600 € (Propuesta máxima)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Coste Real Empresa</span>
            <span className="text-lg font-bold font-mono text-rose-500 mt-0.5 block">
              {employerCost.toLocaleString()} €
            </span>
            <span className="text-[9px] text-slate-500 block">+32.5% cotización patronal</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Cuña fiscal / mes</span>
            <span className="text-lg font-bold font-mono text-cyan-500 mt-0.5 block">
              {taxWedge.toLocaleString()} €
            </span>
            <span className="text-[9px] text-slate-500 block">Retenido por el Estado</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Riesgo recorte horas</span>
            <span className="text-lg font-bold font-mono text-amber-500 flex items-center gap-1 mt-0.5">
              {hoursRisk}% <AlertTriangle className="w-3.5 h-3.5" />
            </span>
            <span className="text-[9px] text-slate-500 block">Pymes con márgenes &lt; 5%</span>
          </div>
        </div>

        <p className={`text-[11px] ${labelColor} italic leading-snug`}>
          💡 <strong>Consecuencia real:</strong> Al subir el SMI a {smiValue} €, el empresario debe pagar {employerCost} €. Si el valor producido por el empleado no supera esa cifra, la plaza desaparece o se recortan horas.
        </p>
      </div>
    );
  }

  if (argumentId === 'impuesto-ricos') {
    const flightEst = (wealthTaxRate * 7.4).toFixed(1);
    const taxLoss = Math.round(wealthTaxRate * 910);

    return (
      <div className={`p-4 rounded-2xl border ${containerBg} space-y-3.5`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-500 uppercase tracking-wider font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulador de Segundo Orden</span>
          </div>
          <span className="text-xs font-mono font-bold text-rose-500">
            Tipo sobre patrimonio: {wealthTaxRate}%
          </span>
        </div>

        <div>
          <input
            type="range"
            min="0.5"
            max="4.0"
            step="0.1"
            value={wealthTaxRate}
            onChange={(e) => setWealthTaxRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>0.5% (Testimonial)</span>
            <span>2.5% (España actual)</span>
            <span>4.0% (Confiscatorio)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Fuga de capital acumulada</span>
            <span className="text-lg font-bold font-mono text-rose-500 mt-0.5 block">
              {flightEst} mil M€
            </span>
            <span className="text-[9px] text-slate-500 block">Hacia Portugal, Italia, Andorra</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Pérdida en IRPF e IVA</span>
            <span className="text-lg font-bold font-mono text-amber-500 mt-0.5 block">
              -{taxLoss.toLocaleString()} M€
            </span>
            <span className="text-[9px] text-slate-500 block">Efecto neto recaudatorio negativo</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Países UE con este tributo</span>
            <span className="text-lg font-bold font-mono text-cyan-500 mt-0.5 block">
              1 de 27
            </span>
            <span className="text-[9px] text-slate-500 block">Solo España lo conserva</span>
          </div>
        </div>

        <p className={`text-[11px] ${labelColor} italic leading-snug`}>
          💡 <strong>Consecuencia real:</strong> El capital es líquido y móvil. Gravarlo al {wealthTaxRate}% expulsa a los contribuyentes que más aportan por IRPF y consumo.
        </p>
      </div>
    );
  }

  if (argumentId === 'margenes-supermercados') {
    const profitOn100 = superMarketMargin.toFixed(2);
    const supplyRisk = superMarketMargin < 1.0 ? 'Crítico (Desabastecimiento)' : 'Moderado';

    return (
      <div className={`p-4 rounded-2xl border ${containerBg} space-y-3.5`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-500 uppercase tracking-wider font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulador de Segundo Orden</span>
          </div>
          <span className="text-xs font-mono font-bold text-cyan-500">
            Margen neto supermercado: {superMarketMargin}%
          </span>
        </div>

        <div>
          <input
            type="range"
            min="0.0"
            max="5.0"
            step="0.1"
            value={superMarketMargin}
            onChange={(e) => setSuperMarketMargin(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>0% (Super público a coste)</span>
            <span>2.7% (Media del sector)</span>
            <span>5.0% (Margen extraordinario)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Ganancia en compra de 100 €</span>
            <span className="text-lg font-bold font-mono text-cyan-500 mt-0.5 block">
              {profitOn100} €
            </span>
            <span className="text-[9px] text-slate-500 block">De cada 100€ que gastas</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Ahorro si margen fuera 0%</span>
            <span className="text-lg font-bold font-mono text-emerald-500 mt-0.5 block">
              Solo {profitOn100} €
            </span>
            <span className="text-[9px] text-slate-500 block">Apenas 2-3 céntimos por euro</span>
          </div>

          <div className={`p-2.5 rounded-xl border ${cardInnerBg}`}>
            <span className={`text-[10px] ${labelColor} block leading-tight`}>Riesgo en la cadena</span>
            <span className={`text-lg font-bold font-mono ${superMarketMargin < 1.0 ? 'text-rose-500' : 'text-slate-400'} mt-0.5 block`}>
              {supplyRisk}
            </span>
            <span className="text-[9px] text-slate-500 block">Si se impone venta a pérdidas</span>
          </div>
        </div>

        <p className={`text-[11px] ${labelColor} italic leading-snug`}>
          💡 <strong>Consecuencia real:</strong> De cada 100 € de compra, más de 97 € se van en pagar a agricultores, luz de cámaras, gasolina de camiones y salarios. Eliminar todo el beneficio del súper apenas rebajaría la cesta {profitOn100} €.
        </p>
      </div>
    );
  }

  return null;
};
