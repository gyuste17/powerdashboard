'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Linkedin, 
  CheckCircle2, 
  Award, 
  Clock, 
  UserCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export function FounderSection() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden" id="sobre-mi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Col: Info & Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" />
                Especialista & Fundador
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hola, soy <span className="text-amber-400">{SITE_CONFIG.founder.name}</span>. Te ayudo a transformar tus datos en decisiones de negocio rentables.
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Llevo más de 7 años dedicado a la <strong>consultoría, modelado de datos y formación en Business Intelligence</strong> (Power BI, Looker Studio, Tableau y SQL).
                </p>
                <p>
                  En 2022 creé <strong>PowerDashboard.es</strong> con una misión clara: acercar el Business Intelligence de primer nivel a PYMEs, directores y profesionales, eliminando el coste inflado y la lentitud de las grandes agencias generalistas.
                </p>
                <p className="text-slate-400 text-sm">
                  Cuando trabajas conmigo, no tratas con comerciales ni con juniors a los que delegan tu cuenta. Tratas 1 a 1 con el especialista que entiende tu negocio y programa tus modelos.
                </p>
              </div>

              {/* Trust checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Modelos relacionales limpios y DAX optimizado',
                  'Acuerdo de Confidencialidad (NDA) firmado',
                  'Propiedad 100% tuya del código y paneles',
                  'Formación y soporte directo post-entrega',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Reservar llamada de diagnóstico</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={SITE_CONFIG.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>Conectar en LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Col: Stats & Credentials Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                    GY
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{SITE_CONFIG.founder.name}</h3>
                    <p className="text-xs text-amber-400 font-medium">{SITE_CONFIG.founder.role}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{SITE_CONFIG.founder.location}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
                    <div className="text-2xl font-black text-white font-mono">+7</div>
                    <div className="text-xs text-slate-400 mt-0.5">Años de experiencia en datos</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
                    <div className="text-2xl font-black text-amber-400 font-mono">100%</div>
                    <div className="text-xs text-slate-400 mt-0.5">Proyectos entregados a tiempo</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
                    <div className="text-2xl font-black text-cyan-400 font-mono">0 min</div>
                    <div className="text-xs text-slate-400 mt-0.5">Tiempo de reporte manual</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
                    <div className="text-2xl font-black text-emerald-400 font-mono">&lt; 48h</div>
                    <div className="text-xs text-slate-400 mt-0.5">Diagnóstico y propuesta</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Garantía de Satisfacción:</strong> Si en la primera fase de diseño el cuadro de mando no cumple exactamente con tus requisitos acordados, lo ajustamos sin coste adicional.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
