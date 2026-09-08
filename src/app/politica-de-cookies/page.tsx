import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  robots: { index: false, follow: true },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen text-slate-300 text-sm leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-bold text-white mb-6">Política de Cookies</h1>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">1. ¿Qué son las Cookies?</h2>
          <p>
            Una cookie es un pequeño fichero de texto que un sitio web almacena en el navegador del usuario para facilitar la navegación y recopilar información estadística.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">2. Tipos de Cookies que utilizamos</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <h3 className="font-semibold text-white">Cookies Técnicas (Estrictamente necesarias)</h3>
              <p className="text-xs text-slate-400">
                Permiten la navegación segura y el almacenamiento de tus preferencias de consentimiento de cookies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <h3 className="font-semibold text-white">Cookies Analíticas (Google Analytics 4 / Google Tag Manager)</h3>
              <p className="text-xs text-slate-400">
                Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de los servicios ofrecidos.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">3. Gestión y Desactivación de Cookies</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador o mediante el botón de configuración de cookies disponible en nuestra web.
          </p>
        </section>

        <div className="pt-8 border-t border-slate-800">
          <Link href="/" className="text-amber-400 hover:underline">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
