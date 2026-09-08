'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
  BarChart3,
  Database,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '@/data/siteData';

const SOLUTIONS = [
  { label: 'Cuadros de Mando Financieros',    href: '/portfolio?category=Finanzas'     },
  { label: 'Dashboards de Ventas & CRM',       href: '/portfolio?category=Ventas'       },
  { label: 'Paneles eCommerce & ROAS',         href: '/portfolio?category=Marketing'    },
  { label: 'Control de Stock & Operaciones',   href: '/portfolio?category=Operaciones'  },
  { label: 'Tarifas y Presupuesto',            href: '/precios'                         },
];

const COMPANY = [
  { label: 'Blog y Recursos',   href: '/blog'             },
  { label: 'Sobre el Proyecto', href: '/#sobre-mi'        },
  { label: 'Portfolio',         href: '/portfolio'        },
  { label: 'Contacto',          href: '/contacto'         },
];

export function Footer() {
  return (
    <footer className="bg-[#060912] border-t border-white/[0.04] text-slate-500 relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-12 bg-amber-500/8 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.04]">
          {/* ── Brand column ──────────────────────── */}
          <div className="lg:col-span-2 space-y-5">
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

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Consultoría especializada en Business Intelligence, Power BI, Looker Studio
              y automatización analítica. Transformamos datos caóticos en decisiones rentables.
            </p>

            {/* Profile mini card */}
            <div className="glass rounded-xl p-4 border border-white/[0.05] space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-black text-xs flex items-center justify-center">
                  GY
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{SITE_CONFIG.founder.name}</div>
                  <div className="text-[11px] text-amber-400/90">{SITE_CONFIG.founder.role}</div>
                </div>
                <div className="ml-auto flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                Trato 1 a 1 sin intermediarios. NDA incluido en cada proyecto.
              </p>
            </div>

            {/* Audit CTA */}
            <Link
              href="/auditoria-gratuita"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/15 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Auditoría Express Gratuita 48h
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* ── Servicios ─────────────────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
              Servicios BI
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/portfolio" className="text-sm hover:text-amber-400 transition-colors">
                  Dashboards por Sector
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Soluciones ────────────────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-amber-400" />
              Soluciones
            </h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contacto ──────────────────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.founder.email}`} className="text-sm hover:text-amber-400 transition-colors break-all">
                  {SITE_CONFIG.founder.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                <a href={`tel:${SITE_CONFIG.founder.phoneClean}`} className="text-sm hover:text-amber-400 transition-colors">
                  {SITE_CONFIG.founder.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                <span className="text-sm">{SITE_CONFIG.founder.location}</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="pt-1 flex gap-2">
              <a
                href={SITE_CONFIG.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-white/[0.06] hover:border-sky-500/40 text-white text-xs font-medium transition-all hover:text-sky-300"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            {/* Company links */}
            <div className="space-y-2 pt-2">
              {COMPANY.map(({ label, href }) => (
                <div key={href}>
                  <Link href={href} className="text-xs hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-slate-600">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.
          </span>
          <div className="flex flex-wrap items-center gap-5 text-slate-600">
            <Link href="/aviso-legal" className="hover:text-amber-400 transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-amber-400 transition-colors">
              Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="hover:text-amber-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
