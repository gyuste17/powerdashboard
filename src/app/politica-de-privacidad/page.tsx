import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen text-slate-300 text-sm leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-bold text-white mb-6">Política de Privacidad</h1>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">1. Responsable del Tratamiento de Datos</h2>
          <p>
            De conformidad con el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos que los datos personales facilitados a través de los formularios de contacto o correo electrónico serán tratados por:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li><strong>Responsable:</strong> {SITE_CONFIG.founder.name} (PowerDashboard.es)</li>
            <li><strong>Contacto DPO / Privacidad:</strong> {SITE_CONFIG.founder.email}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">2. Finalidad del Tratamiento</h2>
          <p>Tratamos sus datos personales con las siguientes finalidades:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Atender solicitudes de presupuesto, auditorías gratuitas o dudas técnicas enviadas mediante formularios.</li>
            <li>Gestionar la relación contractual y prestación de servicios de Business Intelligence.</li>
            <li>Envío de comunicaciones profesionales estrictamente relacionadas con su solicitud.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">3. Legitimación y Conservación</h2>
          <p>
            La base legal para el tratamiento de sus datos es el consentimiento explícito manifestado al enviar el formulario o el interés legítimo en la ejecución de la relación comercial. Los datos se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">4. Derechos del Usuario</h2>
          <p>
            Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad enviando un correo electrónico a <a href={`mailto:${SITE_CONFIG.founder.email}`} className="text-amber-400 underline">{SITE_CONFIG.founder.email}</a> junto con una copia de su documento de identidad.
          </p>
        </section>

        <div className="pt-8 border-t border-slate-800">
          <Link href="/" className="text-amber-400 hover:underline">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
