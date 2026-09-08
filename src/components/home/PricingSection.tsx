'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Check, Sparkles, ArrowRight, ShieldCheck, Star, Zap } from 'lucide-react';
import { PRICING_PLANS } from '@/data/siteData';

export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 bg-transparent relative overflow-hidden" id="precios">
      {/* Golden ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-amber-500/12 via-yellow-500/8 to-amber-500/12 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-amber-400 text-xs font-bold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Tarifas Transparentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Inversión clara,{' '}
            <span className="gradient-text">sin sorpresas</span>
          </h2>
          <p className="text-slate-400 text-base mt-5 leading-relaxed">
            Planes adaptados tanto para empresas que necesitan su primer cuadro de mando
            como para aquellas que buscan un partner continuo de Business Intelligence.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 + index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-amber-500/15 to-[#0f172a] border-2 border-amber-500 shadow-[0_0_60px_rgba(245,158,11,0.2)] md:-translate-y-3'
                  : 'bg-[#0f172a]/80 border border-white/[0.06] hover:border-white/[0.12] card-hover'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              )}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shadow-amber-glow-sm whitespace-nowrap">
                  <Star className="w-3 h-3 fill-slate-950" />
                  Más Recomendado
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Plan name */}
                <div className="space-y-1 mb-6">
                  <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${plan.popular ? 'text-amber-400' : 'text-slate-500'}`}>
                    {plan.popular ? <Zap className="w-3 h-3" /> : null}
                    {plan.name}
                  </div>
                  <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[32px]">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="pb-6 mb-6 border-b border-white/[0.05]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-black text-white font-mono tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500/80 mb-3">
                    Incluye:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 + idx * 0.04 }}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-amber-400' : 'text-emerald-400'}`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                  <Link
                    href={plan.ctaLink}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 group ${
                      plan.popular
                        ? 'btn-primary'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.07] hover:border-white/[0.15]'
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom quote note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>
              ¿Proyecto a medida o integración on-premise?{' '}
              <Link href="/contacto" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                Pide presupuesto personalizado
              </Link>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
