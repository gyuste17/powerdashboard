'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Star, Zap, X } from 'lucide-react';
import { PRICING_PLANS } from '@/data/siteData';

export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="precios">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Tarifas Transparentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            Inversión clara,{' '}
            <span className="gradient-text">sin sorpresas</span>
          </h2>
          <p className="text-stone-600 dark:text-slate-400 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Planes adaptados tanto para empresas que necesitan su primer cuadro de mando
            como para aquellas que buscan un partner continuo de Business Intelligence.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto pt-4">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 + index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-amber-500/10 via-white to-amber-500/5 dark:from-amber-500/15 dark:to-[#0f172a] border-2 border-amber-500 shadow-xl dark:shadow-[0_0_60px_rgba(245,158,11,0.2)] md:-translate-y-3'
                  : 'bg-white/90 dark:bg-[#0f172a]/80 border border-stone-200/90 dark:border-white/[0.06] hover:border-amber-500/30 shadow-sm'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-b-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-sm whitespace-nowrap">
                  <Star className="w-3 h-3 fill-slate-950" />
                  Más Recomendado
                </div>
              )}

              <div className="p-7 sm:p-8 flex flex-col flex-1">
                {/* Plan name */}
                <div className="space-y-1 mb-6 mt-2">
                  <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${plan.popular ? 'text-amber-700 dark:text-amber-400' : 'text-stone-400 dark:text-slate-500'}`}>
                    {plan.popular ? <Zap className="w-3 h-3" /> : null}
                    {plan.name}
                  </div>
                  <h3 className="text-2xl font-black text-stone-900 dark:text-white">{plan.name}</h3>
                  <p className="text-xs text-stone-500 dark:text-slate-400 leading-relaxed min-h-[32px]">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="pb-6 mb-6 border-b border-stone-200/80 dark:border-white/[0.05]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-black text-stone-900 dark:text-white font-mono tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-stone-500 dark:text-slate-500">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500/80 mb-3">
                    Incluye:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 + idx * 0.04 }}
                        className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-slate-300"
                      >
                        <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}

                    {/* Not included */}
                    {plan.notIncluded?.map((item, idx) => (
                      <li
                        key={`not-${idx}`}
                        className="flex items-start gap-2.5 text-xs text-stone-400 dark:text-slate-600 line-through"
                      >
                        <div className="w-4 h-4 rounded-full bg-stone-100 dark:bg-white/[0.03] text-stone-400 dark:text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA button */}
                <div className="mt-8 pt-4">
                  <Link
                    href={plan.ctaLink}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 group ${
                      plan.popular
                        ? 'btn-primary shadow-md'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-900 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] dark:text-white border border-stone-200 dark:border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <div className="mt-12 text-center text-xs text-stone-500 dark:text-slate-500">
          ¿Necesitas un desarrollo a medida o una bolsa de horas personalizada?{' '}
          <Link href="/contacto" className="text-amber-700 dark:text-amber-400 underline hover:no-underline font-semibold">
            Cuéntame tu caso
          </Link>{' '}
          y preparamos una propuesta ajustada en 48h.
        </div>
      </div>
    </section>
  );
}
