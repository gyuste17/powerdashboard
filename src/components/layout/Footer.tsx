'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Database,
  BarChart3
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '@/data/siteData';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand & Founder */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/logos/PowerDashboardLogoMedio.png"
                  alt="PowerDashboard.es"
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Consultoría especializada en Business Intelligence, Power BI, Looker Studio y automatización analítica. Transformamos datos caóticos en decisiones de negocio rentables.
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                  GY
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{SITE_CONFIG.founder.name}</div>
                  <div className="text-xs text-amber-400">{SITE_CONFIG.founder.role}</div>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Atención directa 1 a 1 sin intermediarios de agencia. Garantía de confidencialidad (NDA) y código limpio.
              </p>
            </div>
          </div>

          {/* Col 3: Servicios */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-400" />
              Servicios BI
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/portfolio" className="hover:text-amber-400 transition-colors">
                  Dashboards por Sector
                </Link>
              </li>
              <li>
                <Link href="/auditoria-gratuita" className="text-amber-400/90 hover:text-amber-300 font-medium transition-colors">
                  Auditoría de Datos 48h
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Soluciones & Sectores */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <Database className="w-4 h-4 text-amber-400" />
              Soluciones
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/portfolio?category=Finanzas" className="hover:text-amber-400 transition-colors">
                  Cuadros de Mando Financieros & P&L
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Ventas" className="hover:text-amber-400 transition-colors">
                  Dashboards de Ventas & Pipeline CRM
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Marketing" className="hover:text-amber-400 transition-colors">
                  Paneles eCommerce & Atribución ROAS
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Operaciones" className="hover:text-amber-400 transition-colors">
                  Control de Stock y Operaciones
                </Link>
              </li>
              <li>
                <Link href="/precios" className="hover:text-amber-400 transition-colors">
                  Tarifas y Presupuesto
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.founder.email}`} className="hover:text-amber-400 transition-colors">
                  {SITE_CONFIG.founder.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`tel:${SITE_CONFIG.founder.phoneClean}`} className="hover:text-amber-400 transition-colors">
                  {SITE_CONFIG.founder.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.founder.location}</span>
              </li>
              <li className="pt-1">
                <a
                  href={SITE_CONFIG.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium border border-slate-800 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>Perfil LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/aviso-legal" className="hover:text-amber-400 transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-amber-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="hover:text-amber-400 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
