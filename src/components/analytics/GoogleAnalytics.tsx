'use client';

import { useEffect } from 'react';
import { SITE_CONFIG } from '@/data/siteData';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    // 1. Initialize consent mode default immediately without blocking
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500,
    });

    // 2. Defer heavy GTM script until first user interaction or idle timer
    let isLoaded = false;
    const loadGtm = () => {
      if (isLoaded) return;
      isLoaded = true;

      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${SITE_CONFIG.gtmId}`;
      document.head.appendChild(script);

      cleanUp();
    };

    const events = ['scroll', 'touchstart', 'click', 'mousemove', 'keydown'];
    const cleanUp = () => {
      events.forEach((evt) => window.removeEventListener(evt, loadGtm));
    };

    events.forEach((evt) => {
      window.addEventListener(evt, loadGtm, { once: true, passive: true });
    });

    // 3. Fallback timer (3.5s) if user doesn't interact immediately
    const timer = setTimeout(loadGtm, 3500);

    return () => {
      clearTimeout(timer);
      cleanUp();
    };
  }, []);

  return null;
}

export function GoogleAnalyticsNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${SITE_CONFIG.gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
