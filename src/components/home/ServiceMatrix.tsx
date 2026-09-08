'use client';

import Link from 'next/link';
import { 
  BarChart3, 
  PieChart, 
  RefreshCw, 
  ArrowRight, 
  Check, 
  AlertCircle,
  Sparkles,
  Database
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/siteData';

export function ServiceMatrix() {
  const iconMap: Record<string, typeof BarChart3> = {
    'power-bi': BarChart3,
    'looker-studio': PieChart,
    'migracion-excel': RefreshCw,
  };

  return (
    <section className="py-20 bg-slate-950 relative" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Database className="w-3.5 h-3.5" />
            Servicios Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluciones de Business Intelligence orientadas a Resultados
          </h2>
          <p className="text-slate-400 text-base mt-4 leading-relaxed">
            No te vendemos gráficos bonitos sin utilidad. Diseñamos sistemas analíticos robustos que responden directamente a las preguntas clave de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.id] || BarChart3;
            return (
              <div
                key={service.id}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group relative"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Problem vs Solution */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        ¿Qué problema soluciona?
                      </div>
                      <p className="text-xs text-slate-400 italic">
                        &quot;{service.painPoints[0]}&quot;
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        Entregables clave:
                      </div>
                      <ul className="space-y-1.5">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="pt-6 border-t border-slate-800/80 mt-6">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-semibold text-sm transition-all flex items-center justify-center gap-2 group-hover:bg-amber-500 group-hover:text-slate-950"
                  >
                    <span>Ver Detalles y Metodología</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-Company Training Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Formación Práctica a Equipos
            </div>
            <h4 className="text-xl font-bold text-white">
              ¿Quieres capacitar a tu equipo en Power BI, DAX o Looker Studio?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Cursos 100% prácticos y adaptados a tus propios datos reales, para que tu equipo aprenda a crear y mantener sus propios cuadros de mando de forma autónoma.
            </p>
          </div>
          <Link
            href="/contacto?asunto=formacion"
            className="shrink-0 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
          >
            Consultar Formación In-Company
          </Link>
        </div>
      </div>
    </section>
  );
}
