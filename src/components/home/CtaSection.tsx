'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export function CtaSection() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-slate-950 shadow-2xl shadow-amber-500/20 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/10 text-slate-950 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Empieza sin compromiso
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              ¿Listo para tomar el control de los datos de tu empresa?
            </h2>

            <p className="text-slate-900 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Cuéntame qué fuentes de datos utilizas y te envío una propuesta personalizada con estructura recomendada y presupuesto cerrado en menos de 48 horas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contacto"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Solicitar Diagnóstico Gratuito</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/20 hover:bg-white/30 text-slate-950 font-bold text-base transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-900 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Sin compromiso de contratación</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Respuesta en &lt; 24h laborables</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
