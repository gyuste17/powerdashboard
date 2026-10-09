'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Settings, Check, X } from 'lucide-react';

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAccepted, setAnalyticsAccepted] = useState(true);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('powerdashboard_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 4000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(consent);
        updateGtagConsent(parsed.analytics, parsed.marketing);
      } catch {
        setIsOpen(true);
      }
    }
  }, []);

  const updateGtagConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const preferences = { technical: true, analytics: true, marketing: true, date: new Date().toISOString() };
    localStorage.setItem('powerdashboard_cookie_consent', JSON.stringify(preferences));
    updateGtagConsent(true, true);
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    const preferences = { technical: true, analytics: false, marketing: false, date: new Date().toISOString() };
    localStorage.setItem('powerdashboard_cookie_consent', JSON.stringify(preferences));
    updateGtagConsent(false, false);
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    const preferences = { technical: true, analytics: analyticsAccepted, marketing: marketingAccepted, date: new Date().toISOString() };
    localStorage.setItem('powerdashboard_cookie_consent', JSON.stringify(preferences));
    updateGtagConsent(analyticsAccepted, marketingAccepted);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-700/60 p-2.5 rounded-full backdrop-blur shadow-lg transition-all text-xs flex items-center gap-1.5"
        title="Configurar Cookies"
        aria-label="Configurar Cookies"
      >
        <ShieldCheck className="w-4 h-4 text-amber-500" />
        <span className="hidden sm:inline">Cookies</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 bg-slate-950/95 border-t border-slate-800/80 backdrop-blur-xl shadow-2xl animate-fade-in text-slate-200">
      <div className="max-w-6xl mx-auto">
        {!showPreferences ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-white text-base">Privacidad y Uso de Cookies</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Utilizamos cookies propias y de terceros para analizar el tráfico, personalizar la experiencia y optimizar nuestros servicios de Business Intelligence. Puedes aceptar todas, rechazarlas o configurar tus preferencias. Más información en nuestra{' '}
                <Link href="/politica-de-cookies" className="text-amber-400 hover:underline">
                  Política de Cookies
                </Link>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-900/80 hover:bg-slate-800 text-sm font-medium text-slate-300 transition-colors flex items-center gap-2"
              >
                <Settings className="w-4 h-4 text-slate-400" />
                Configurar
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-900/80 hover:bg-slate-800 text-sm font-medium text-slate-300 transition-colors"
              >
                Rechazar no esenciales
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-md shadow-amber-500/20 transition-all"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-semibold text-white text-lg flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-400" />
                Panel de Configuración de Cookies
              </h3>
              <button onClick={() => setShowPreferences(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 py-2">
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white text-sm">Técnicas (Obligatorias)</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">Siempre activas</span>
                </div>
                <p className="text-xs text-slate-400">Garantizan el funcionamiento correcto y la seguridad del sitio web.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white text-sm">Analíticas (GA4 / GTM)</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsAccepted}
                      onChange={(e) => setAnalyticsAccepted(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-400">Nos ayudan a entender de forma anónima cómo navegan los usuarios para mejorar la web.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white text-sm">Marketing / Conversión</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketingAccepted}
                      onChange={(e) => setMarketingAccepted(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-400">Permiten medir la efectividad de campañas publicitarias en plataformas de búsqueda y redes.</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-900 text-sm text-slate-300"
              >
                Volver
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                Guardar Preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
