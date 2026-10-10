'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/segundo-orden') || pathname?.startsWith('/politica')) {
    return null;
  }

  return (
    <footer className="bg-[#f5f2eb] dark:bg-[#060912] border-t border-stone-200/90 dark:border-white/[0.04] text-stone-600 dark:text-slate-500 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-stone-200/80 dark:border-white/[0.05]">
          {/* ── Brand column ──────────────────────── */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/logos/PowerDashboardLogoMedio.png"
                  alt="PowerDashboard.es"
                  fill
                  className="object-contain dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                  sizes="180px"
                />
              </div>
            </Link>

            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Consultoría especializada en Business Intelligence, Power BI, Looker Studio
              y automatización analítica. Transformamos datos caóticos en decisiones rentables.
            </p>

            {/* Profile mini card */}
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-4 border border-stone-200/90 dark:border-white/[0.05] shadow-xs space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-black text-xs flex items-center justify-center">
                  GY
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 dark:text-white">{SITE_CONFIG.founder.name}</div>
                  <div className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold">{SITE_CONFIG.founder.role}</div>
                </div>
                <div className="ml-auto flex items-center gap-1 text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/20 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </div>
              </div>
              <p className="text-[11px] text-stone-500 dark:text-slate-500">
                Trato 1 a 1 sin intermediarios. NDA firmado en cada proyecto.
              </p>
            </div>

            {/* Audit CTA */}
            <Link
              href="/auditoria-gratuita"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20 hover:bg-amber-200/70 dark:hover:bg-amber-500/15 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Auditoría Express Gratuita 48h
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* ── Servicios ─────────────────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-900 dark:text-slate-300 flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Servicios BI
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-sm text-stone-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/portfolio" className="text-sm text-stone-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Dashboards por Sector
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Soluciones ────────────────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-900 dark:text-slate-300 flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Soluciones
            </h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-stone-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contacto ──────────────────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-900 dark:text-slate-300">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.founder.email}`}
                  className="flex items-center gap-2.5 text-stone-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="truncate">{SITE_CONFIG.founder.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.founder.phoneClean}`}
                  className="flex items-center gap-2.5 text-stone-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{SITE_CONFIG.founder.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-stone-500 dark:text-slate-500">
                <MapPin className="w-4 h-4 shrink-0 text-stone-400 dark:text-slate-600" />
                <span>{SITE_CONFIG.founder.location}</span>
              </li>
              <li className="pt-1">
                <a
                  href={SITE_CONFIG.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-400 hover:underline"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profesional</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom row ────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/aviso-legal" className="hover:text-stone-800 dark:hover:text-slate-400 transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-stone-800 dark:hover:text-slate-400 transition-colors">
              Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="hover:text-stone-800 dark:hover:text-slate-400 transition-colors">
              Cookies
            </Link>
            <Link href="/sitemap.xml" className="hover:text-stone-800 dark:hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
