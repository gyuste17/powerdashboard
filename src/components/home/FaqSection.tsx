'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageSquare } from 'lucide-react';
import { FAQS_DATA, SITE_CONFIG } from '@/data/siteData';
import { SectionHeader } from '@/components/home/SectionHeader';
import { cn } from '@/lib/utils';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-24 sm:py-32" id="faqs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeader
            align="left"
            eyebrow="Preguntas frecuentes"
            title="Antes de empezar"
            description="Plazos, herramientas, seguridad y qué ocurre tras la entrega."
          />
          <a
            href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20tengo%20una%20consulta%20sobre%20PowerDashboard.es`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-8"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Pregúntame por WhatsApp</span>
          </a>
        </div>

        <div className="lg:col-span-8 divide-y divide-stone-200/80 dark:divide-white/[0.08] border-y border-stone-200/80 dark:border-white/[0.08]">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full py-6 text-left flex items-start justify-between gap-6 group"
                >
                  <span className="font-semibold text-stone-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      'w-5 h-5 mt-0.5 shrink-0 text-stone-400 dark:text-slate-500 transition-transform duration-300',
                      isOpen && 'rotate-45 text-amber-600 dark:text-amber-400'
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-stone-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
