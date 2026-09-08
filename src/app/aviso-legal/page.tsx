import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen text-slate-300 text-sm leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-bold text-white mb-6">Aviso Legal</h1>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">1. Datos Identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li><strong>Titular:</strong> {SITE_CONFIG.founder.name} (PowerDashboard.es)</li>
            <li><strong>Actividad:</strong> Consultoría de Business Intelligence, Analítica de Datos y Formación.</li>
            <li><strong>Email de contacto:</strong> {SITE_CONFIG.founder.email}</li>
            <li><strong>Teléfono de contacto:</strong> {SITE_CONFIG.founder.phone}</li>
            <li><strong>Sitio Web:</strong> {SITE_CONFIG.url}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">2. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo textos, diseños gráficos, códigos fuente, logotipos, iconos e imágenes son propiedad exclusiva de {SITE_CONFIG.founder.name} o de sus respectivos licenciantes, y están protegidos por las leyes de propiedad intelectual e industrial.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">3. Responsabilidad</h2>
          <p>
            PowerDashboard.es no se hace responsable de los daños y perjuicios derivados del uso indebido de los contenidos, ni del mal funcionamiento derivado de causas ajenas al control técnico del sitio web.
          </p>
        </section>

        <div className="pt-8 border-t border-slate-800">
          <Link href="/" className="text-amber-400 hover:underline">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
