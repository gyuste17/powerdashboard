'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BarChart, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { DASHBOARD_EXAMPLES, DashboardExample } from '@/data/siteData';

export function ShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Ventas', 'Finanzas', 'Marketing', 'Operaciones', 'RRHH'];

  const filteredDashboards = selectedCategory === 'Todos'
    ? DASHBOARD_EXAMPLES
    : DASHBOARD_EXAMPLES.filter(d => d.category === selectedCategory);

  return (
    <section className="py-20 bg-slate-900/60 relative" id="dashboards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              Casos Reales y Proyectos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Galería de Cuadros de Mando Interactivos
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-2xl">
              Explora ejemplos de dashboards desarrollados para distintos sectores y áreas operativas.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDashboards.map((dashboard) => (
            <div
              key={dashboard.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={dashboard.image}
                    alt={dashboard.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Tool Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-semibold text-white">
                      {dashboard.tool}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/80 backdrop-blur-md text-[11px] font-bold text-slate-950">
                      {dashboard.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                    {dashboard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {dashboard.description}
                  </p>

                  {/* Highlight pill */}
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{dashboard.highlight}</span>
                  </div>

                  {/* KPIs */}
                  <div className="pt-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      KPIs integrados:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dashboard.kpis.map((kpi, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-950 text-[11px] text-slate-300 border border-slate-800"
                        >
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card CTA */}
              <div className="p-6 pt-0">
                <Link
                  href={`/contacto?proyecto=${dashboard.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-medium text-xs transition-all flex items-center justify-center gap-1.5 group-hover:bg-amber-500 group-hover:text-slate-950"
                >
                  <span>Solicitar un dashboard similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
          >
            <span>Ver todos los sectores y proyectos detallados</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
