'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { FAQS_DATA } from '@/data/siteData';
import { SITE_CONFIG } from '@/data/siteData';

export function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-28 bg-transparent relative overflow-hidden" id="faqs" ref={ref}>
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-amber text-amber-400 text-xs font-bold uppercase tracking-widest mb-5">
            <HelpCircle className="w-3.5 h-3.5" />
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Todo lo que necesitas saber{' '}
            <span className="gradient-text">antes de empezar</span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
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
                transition={{ delay: 0.1 + index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`glass rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen ? 'border-amber-500/30' : 'border-white/[0.05] hover:border-white/[0.10]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${isOpen ? 'text-amber-300' : 'text-white group-hover:text-amber-300'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`shrink-0 p-1 rounded-lg transition-colors ${isOpen ? 'bg-amber-500/15 text-amber-400' : 'text-slate-500 group-hover:text-amber-400'}`}
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
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-white/[0.05]">
                        <p className="text-sm text-slate-300 leading-relaxed">
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm mb-4">
            ¿No encuentras respuesta a tu duda?
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20tengo%20una%20consulta%20sobre%20PowerDashboard.es`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex group"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            Escríbeme directamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
