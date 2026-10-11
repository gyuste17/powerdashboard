'use client';

import React from 'react';
import {
  PowerBiLogo,
  LookerStudioLogo,
  TableauLogo,
  FabricLogo,
  ExcelLogo,
  SnowflakeLogo,
  PythonLogo,
  BigQueryLogo,
} from '@/components/icons/TechIcons';

const TECHNOLOGIES = [
  {
    name: 'Power BI',
    desc: 'Microsoft Enterprise',
    Icon: PowerBiLogo,
  },
  {
    name: 'Looker Studio',
    desc: 'Google Cloud & GA4',
    Icon: LookerStudioLogo,
  },
  {
    name: 'Tableau',
    desc: 'Salesforce & Cloud',
    Icon: TableauLogo,
  },
  {
    name: 'Microsoft Fabric',
    desc: 'Data Lake & Analytics',
    Icon: FabricLogo,
  },
  {
    name: 'Excel & DAX',
    desc: 'Modelado Relacional',
    Icon: ExcelLogo,
  },
  {
    name: 'SQL & BigQuery',
    desc: 'Data Warehouse & ETL',
    Icon: BigQueryLogo,
  },
  {
    name: 'Snowflake',
    desc: 'Cloud Data Platform',
    Icon: SnowflakeLogo,
  },
  {
    name: 'Python',
    desc: 'Automation & ML',
    Icon: PythonLogo,
  },
];

export function TechLogos() {
  return (
    <section
      aria-label="Ecosistema de Tecnologías y Conectores"
      className="py-12 sm:py-16 border-y border-stone-200/80 dark:border-white/[0.06] overflow-hidden bg-stone-100/40 dark:bg-white/[0.01]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-slate-400">
          Especialistas certificados en las tecnologías analíticas líderes
        </p>
      </div>

      {/* Infinite smooth moving marquee */}
      <div className="relative w-full mask-linear-fade overflow-hidden">
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee py-2 hover:[animation-play-state:paused]">
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-stone-200/90 dark:border-white/[0.08] shadow-sm hover:shadow-md dark:shadow-none hover:border-amber-500/40 transition-all duration-300 group shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-stone-50 dark:bg-slate-800/80 flex items-center justify-center p-1 border border-stone-200/60 dark:border-white/[0.05] group-hover:scale-110 transition-transform duration-300">
                <tech.Icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-stone-900 dark:text-white tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] text-stone-500 dark:text-slate-400 font-medium">
                  {tech.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
