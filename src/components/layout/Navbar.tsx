'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  BarChart3,
  PieChart,
  RefreshCw,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '@/data/siteData';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const serviceIcons: Record<string, typeof BarChart3> = {
  'power-bi':       BarChart3,
  'looker-studio':  PieChart,
  'migracion-excel': RefreshCw,
};

export function Navbar() {
  const [isOpen, setIsOpen]                   = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname                              = usePathname();
  const dropdownRef                           = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { href: '/',         label: 'Inicio' },
    { href: '/portfolio', label: 'Dashboards' },
    { href: '/precios',  label: 'Precios' },
    { href: '/blog',     label: 'Blog' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  if (pathname?.startsWith('/segundo-orden') || pathname?.startsWith('/politica')) {
    return null;
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf8f5]/90 dark:bg-[#080c14]/90 backdrop-blur-xl border-b border-stone-200/80 dark:border-white/[0.06] shadow-sm dark:shadow-nav py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ── Logo ─────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative h-9 w-40 sm:h-10 sm:w-48"
              >
                <Image
                  src="/logos/PowerDashboardLogoMedio.webp"
                  alt="PowerDashboard.es — Consultoría Power BI y Looker Studio"
                  fill
                  className="object-contain dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                  priority
                  sizes="200px"
                />
              </motion.div>
            </Link>

            {/* ── Desktop Nav ───────────────────────────── */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-amber-700 dark:text-amber-400'
                      : 'text-stone-600 hover:text-stone-950 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-amber-500/10 dark:bg-amber-500/10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                    pathname.startsWith('/servicios')
                      ? 'text-amber-700 bg-amber-500/10 dark:text-amber-400'
                      : 'text-stone-600 hover:text-stone-950 dark:text-slate-400 dark:hover:text-white'
                  }`}
                  aria-expanded={servicesDropdown}
                >
                  Servicios
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdown ? 'rotate-180 text-amber-600 dark:text-amber-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 w-[340px] pt-2"
                    >
                      <div className="bg-white/95 dark:bg-slate-900/95 rounded-2xl p-2 shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-stone-200/90 dark:border-white/[0.07] backdrop-blur-xl">
                        {SERVICES_DATA.map((service, i) => {
                          const Icon = serviceIcons[service.id] || BarChart3;
                          return (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Link
                                href={`/servicios/${service.slug}`}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-stone-100/70 dark:hover:bg-white/[0.04] transition-colors group/item"
                              >
                                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover/item:bg-amber-500 group-hover/item:text-slate-950 transition-all duration-200 mt-0.5 shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="font-semibold text-stone-900 dark:text-white text-sm group-hover/item:text-amber-700 dark:group-hover/item:text-amber-300 transition-colors">
                                    {service.title}
                                  </div>
                                  <div className="text-xs text-stone-500 dark:text-slate-500 line-clamp-1 mt-0.5">
                                    {service.shortDesc}
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                        <div className="mx-3 my-1 h-px bg-stone-200/80 dark:bg-white/[0.05]" />
                        <Link
                          href="/auditoria-gratuita"
                          className="flex items-center gap-2 p-3 rounded-xl text-sm font-semibold text-amber-700 dark:text-amber-300 hover:bg-amber-500/10 transition-colors"
                        >
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          Auditoría Express Gratuita
                          <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* ── Desktop CTAs ──────────────────────────── */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />

              <a
                href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <Link
                href="/contacto"
                className="btn-primary py-2.5 px-5 text-xs group"
              >
                <span>Contactar</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* ── Mobile Right Actions ─────────────────── */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-white/[0.05] transition-colors"
                aria-label="Menú"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,360px)] bg-[#faf8f5] dark:bg-[#0a0e17] border-l border-stone-200 dark:border-white/[0.06] md:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 dark:border-white/[0.06]">
                <span className="text-sm font-bold text-amber-700 dark:text-amber-400">Menú</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-white/[0.05] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive(link.href)
                          ? 'text-amber-700 bg-amber-500/10 dark:text-amber-400'
                          : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Servicios section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-2"
                >
                  <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500/80">
                    Servicios
                  </div>
                  <div className="pl-3 border-l-2 border-amber-500/30 space-y-1 ml-4">
                    {SERVICES_DATA.map((service, i) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.06 }}
                      >
                        <Link
                          href={`/servicios/${service.slug}`}
                          className="block px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:text-amber-700 hover:bg-amber-50 dark:text-slate-300 dark:hover:text-amber-300 dark:hover:bg-amber-500/5 transition-colors"
                        >
                          {service.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </nav>

              {/* Drawer footer CTAs */}
              <div className="px-4 pb-6 pt-3 border-t border-stone-200 dark:border-white/[0.06] space-y-3">
                <Link
                  href="/auditoria-gratuita"
                  className="block text-center px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-semibold text-sm"
                >
                  ✨ Auditoría Express Gratuita
                </Link>
                <Link
                  href="/contacto"
                  className="btn-primary w-full justify-center"
                >
                  Contactar Ahora
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300 font-semibold text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
