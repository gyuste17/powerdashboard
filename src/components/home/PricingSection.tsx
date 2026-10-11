'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '@/data/siteData';
import { SectionHeader } from '@/components/home/SectionHeader';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;

export function PricingSection() {
  return (
    <section className="py-24 sm:py-32" id="precios">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Precios transparentes"
          title="Inversión clara, sin sorpresas"
          description="Presupuesto cerrado desde el primer día. Sin permanencias ni costes ocultos."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              className={cn(
                'relative flex flex-col rounded-3xl p-8',
                plan.popular
                  ? 'bg-stone-900 text-white dark:bg-white/[0.06] ring-1 ring-stone-900 dark:ring-amber-500/50 shadow-[0_32px_64px_-24px_rgba(28,25,23,0.45)] dark:shadow-none'
                  : 'bg-white/80 dark:bg-white/[0.02] ring-1 ring-stone-200/80 dark:ring-white/[0.08]'
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className={cn('text-lg font-semibold', plan.popular ? 'text-white' : 'text-stone-900 dark:text-white')}>
                  {plan.name}
                </h3>
                {plan.popular && (
                  <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-semibold">
                    Recomendado
                  </span>
                )}
              </div>
              <p className={cn('mt-2 text-sm leading-relaxed min-h-[2.5rem]', plan.popular ? 'text-stone-300 dark:text-slate-400' : 'text-stone-600 dark:text-slate-400')}>
                {plan.subtitle}
              </p>

              <p className="mt-8 flex items-baseline gap-2">
                <span className={cn('text-5xl font-bold tracking-tight', plan.popular ? 'text-white' : 'text-stone-900 dark:text-white')}>
                  {plan.price}
                </span>
                <span className={cn('text-sm', plan.popular ? 'text-stone-400' : 'text-stone-500 dark:text-slate-500')}>
                  {plan.period}
                </span>
              </p>

              <Link
                href={plan.ctaLink}
                className={cn(
                  'mt-8 group',
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                )}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <ul className={cn('mt-8 pt-8 space-y-3 border-t', plan.popular ? 'border-white/10' : 'border-stone-200/80 dark:border-white/[0.06]')}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn('flex items-start gap-3 text-sm leading-relaxed', plan.popular ? 'text-stone-200 dark:text-slate-300' : 'text-stone-700 dark:text-slate-300')}
                  >
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-stone-500 dark:text-slate-400">
          ¿Necesitas algo distinto?{' '}
          <Link href="/contacto" className="font-semibold text-amber-700 dark:text-amber-400 hover:underline">
            Cuéntame tu caso
          </Link>{' '}
          y te envío una propuesta en 48h.
        </p>
      </div>
    </section>
  );
}
