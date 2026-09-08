'use client';

import Link from 'next/link';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '@/data/siteData';

export function PricingSection() {
  return (
    <section className="py-20 bg-slate-900/40 relative" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Tarifas Transparentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Inversión Clara, Sin Sorpresas ni Letra Pequeña
          </h2>
          <p className="text-slate-400 text-base mt-4 leading-relaxed">
            Planes adaptados tanto para empresas que necesitan su primer cuadro de mando como para aquellas que buscan un partner continuo de Business Intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-slate-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/15 md:-translate-y-2'
                  : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md tracking-wider uppercase">
                  ⭐ Más Recomendado
                </div>
              )}

              <div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[36px]">{plan.subtitle}</p>
                </div>

                {/* Price block */}
                <div className="my-6 pb-6 border-b border-slate-800 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400">{plan.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                    Incluye:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 mt-6 border-t border-slate-800">
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs text-center transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom quote note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            ¿Requieres un proyecto a medida o integración con bases de datos on-premise? <Link href="/contacto" className="text-amber-400 underline hover:text-amber-300">Pide presupuesto personalizado</Link>.
          </span>
        </div>
      </div>
    </section>
  );
}
