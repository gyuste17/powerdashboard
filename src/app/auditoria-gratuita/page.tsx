'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Send, 
  ArrowRight,
  Database,
  FileSpreadsheet
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export default function AuditoriaGratuitaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tools: '',
    mainChallenge: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Sin Coste ni Compromiso
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Auditoría Express de Datos en 48 Horas
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Analizamos tu flujo actual de hojas de cálculo o informes y te enviamos un diagnóstico en vídeo/documento con las oportunidades de automatización, ahorro de costes y estructura de cuadro de mando recomendada.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left: Value proposition */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h2 className="font-bold text-white text-base">¿Qué recibirás en tu auditoría?</h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Detección de cuellos de botella y riesgos en tus hojas de cálculo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Estimación de horas de reporte ahorradas al mes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Recomendación de arquitectura tecnológica (Power BI vs Looker Studio).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Mockup o wireframe preliminar del cuadro de mando sugerido.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Garantía absoluta de confidencialidad y protección de datos RGPD.</span>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Solicitud recibida con éxito!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Guillermo Yuste revisará tu información personalmente y se pondrá en contacto contigo en menos de 48 horas laborables.
                </p>
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20acabo%20de%20solicitar%20la%20auditor%C3%ADa%20gratuita%20desde%20la%20web.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30"
                  >
                    <span>¿Tienes prisa? Escríbeme por WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-bold text-white text-lg border-b border-slate-800 pb-3">
                  Pide tu Auditoría Gratuita
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre y Apellidos *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carlos Martínez"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Profesional *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@tuempresa.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Empresa / Proyecto</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Distribuciones SL"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">¿Qué herramientas de datos utilizas hoy?</label>
                  <input
                    type="text"
                    value={formData.tools}
                    onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                    placeholder="Ej. Múltiples hojas de Excel, Holded, Navision, Shopify..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">¿Cuál es tu mayor problema o cuello de botella?</label>
                  <textarea
                    rows={3}
                    value={formData.mainChallenge}
                    onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                    placeholder="Ej. Tardo 8 horas cada lunes en preparar el informe de ventas y los comerciales no tienen visibilidad de sus márgenes..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar y Recibir Diagnóstico en 48h</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Tus datos están 100% protegidos y nunca serán cedidos a terceros.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
