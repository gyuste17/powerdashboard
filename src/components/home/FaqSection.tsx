'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS_DATA, SITE_CONFIG } from '@/data/siteData';

export function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="faqs" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            Todo lo que necesitas saber{' '}
            <span className="gradient-text">antes de empezar</span>
          </h2>
          <p className="text-stone-600 dark:text-slate-400 text-base sm:text-lg mt-4">
            Dudas habituales sobre plazos, herramientas, seguridad y metodología.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white dark:bg-[#0f172a]/90 border-amber-500/40 shadow-md'
                    : 'bg-white/80 dark:bg-[#0f172a]/70 border-stone-200/90 dark:border-white/[0.05] hover:border-stone-300 dark:hover:border-white/[0.12] shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span className={`font-bold text-sm sm:text-base transition-colors duration-200 ${isOpen ? 'text-amber-800 dark:text-amber-300' : 'text-stone-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 p-1.5 rounded-xl transition-colors ${isOpen ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400' : 'text-stone-400 dark:text-slate-500 group-hover:text-amber-600'}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-stone-200/60 dark:border-white/[0.05]">
                        <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 dark:text-slate-400 text-sm mb-4">
            ¿No encuentras respuesta a tu duda específica?
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20tengo%20una%20consulta%20sobre%20PowerDashboard.es`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
