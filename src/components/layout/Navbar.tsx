'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  BarChart3, 
  PieChart, 
  RefreshCw, 
  ChevronDown, 
  Sparkles, 
  ArrowRight,
  Calculator,
  MessageSquare
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '@/data/siteData';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const serviceIcons: Record<string, typeof BarChart3> = {
    'power-bi': BarChart3,
    'looker-studio': PieChart,
    'migracion-excel': RefreshCw,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-36 sm:h-10 sm:w-44 transition-transform duration-200 group-hover:scale-102">
              <Image
                src="/logos/PowerDashboardLogoMedio.png"
                alt="PowerDashboard.es"
                fill
                className="object-contain"
                priority
                sizes="180px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-amber-400 bg-amber-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Inicio
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  pathname.startsWith('/servicios') ? 'text-amber-400 bg-amber-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
                aria-expanded={servicesDropdown}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 pt-2 animate-fade-in">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                    {SERVICES_DATA.map((service) => {
                      const Icon = serviceIcons[service.id] || BarChart3;
                      return (
                        <Link
                          key={service.id}
                          href={`/servicios/${service.slug}`}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-800/80 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-medium text-white text-sm group-hover:text-amber-400 transition-colors">
                              {service.title}
                            </div>
                            <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {service.shortDesc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/portfolio' ? 'text-amber-400 bg-amber-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Dashboards
            </Link>

            <Link
              href="/precios"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/precios' ? 'text-amber-400 bg-amber-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Precios
            </Link>

            <Link
              href="/auditoria-gratuita"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              Auditoría Express
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto%20de%20Business%20Intelligence.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/20 transition-colors"
              title="Chat directo por WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <Link
              href="/contacto"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5 group"
            >
              <span>Contactar</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 backdrop-blur-xl animate-fade-in">
          <Link
            href="/"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            Inicio
          </Link>
          <div className="space-y-1 pl-3 border-l-2 border-amber-500/40 my-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/80 px-3">Servicios</span>
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.id}
                href={`/servicios/${service.slug}`}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-900"
              >
                {service.title}
              </Link>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            Galería de Dashboards
          </Link>
          <Link
            href="/precios"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            Planes y Precios
          </Link>
          <Link
            href="/auditoria-gratuita"
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30"
          >
            ✨ Auditoría Express (Gratuita)
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/contacto"
              className="w-full text-center py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md"
            >
              Pedir Presupuesto / Contactar
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.founder.phoneClean}?text=Hola%20Guillermo,%20vengo%20de%20PowerDashboard.es%20y%20me%20gustar%C3%ADa%20consultar%20un%20proyecto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-medium text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
