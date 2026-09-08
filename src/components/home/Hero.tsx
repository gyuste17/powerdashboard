'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  Play
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs font-semibold text-amber-300 shadow-lg shadow-black/40 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>Consultoría Senior en Power BI, Looker Studio & Automatización</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Transformamos el caos de tus datos en{' '}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/40 decoration-wavy underline-offset-8">
              Cuadros de Mando
            </span>{' '}
            que multiplican tu rentabilidad
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Elimina las hojas de Excel colapsadas y los reportes manuales de los lunes. Centralizamos tus fuentes en paneles interactivos en tiempo real para directivos y equipos que valoran su tiempo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Link
              href="/auditoria-gratuita"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Solicitar Auditoría Gratuita 48h</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-emerald-500/50 font-medium text-base transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Consulta Rápida por WhatsApp</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Sin permanencias ni costes ocultos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Trato directo con consultor senior</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Acuerdo de Confidencialidad (NDA)</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Logos Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Especialistas certificados en las mejores tecnologías del mercado
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {[
              { name: 'Microsoft Power BI', sub: 'Líder en BI Corporativo' },
              { name: 'Google Looker Studio', sub: 'Analítica & Marketing' },
              { name: 'Microsoft Fabric', sub: 'Data Engineering' },
              { name: 'Tableau Software', sub: 'Visualización Avanzada' },
              { name: 'Power Query & DAX', sub: 'Modelado Relacional' },
              { name: 'SQL & Python', sub: 'ETL & Automatización' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-3 text-center hover:border-amber-500/40 transition-colors"
              >
                <div className="text-xs font-bold text-slate-200">{tech.name}</div>
                <div className="text-[10px] text-amber-400/80 mt-0.5">{tech.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
