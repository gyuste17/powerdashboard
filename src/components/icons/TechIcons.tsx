import React from 'react';

/**
 * Official, authentic vector brand logos for the Business Intelligence & Data ecosystem.
 */

export function PowerBiLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Power BI">
      <defs>
        <linearGradient id="pbi-grad-tall" x1="26" y1="3" x2="26" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAA300" />
          <stop offset="1" stopColor="#C87A00" />
        </linearGradient>
        <linearGradient id="pbi-grad-mid" x1="18.5" y1="9" x2="18.5" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2C811" />
          <stop offset="1" stopColor="#D99B00" />
        </linearGradient>
        <linearGradient id="pbi-grad-short" x1="11" y1="15" x2="11" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9E066" />
          <stop offset="1" stopColor="#E6B600" />
        </linearGradient>
      </defs>
      {/* Tallest bar (right) */}
      <rect x="22.5" y="3" width="7" height="26" rx="2" fill="url(#pbi-grad-tall)" />
      {/* Middle bar */}
      <rect x="15" y="9" width="7" height="20" rx="2" fill="url(#pbi-grad-mid)" />
      {/* Shortest bar (left) */}
      <rect x="7.5" y="15" width="7" height="14" rx="2" fill="url(#pbi-grad-short)" />
    </svg>
  );
}

export function LookerStudioLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Looker Studio">
      {/* Authentic Google Cloud Looker Studio 4-color multi-bar */}
      <rect x="3.5" y="16" width="5.5" height="12" rx="1.8" fill="#4285F4" />
      <rect x="10.5" y="10" width="5.5" height="18" rx="1.8" fill="#34A853" />
      <rect x="17.5" y="4" width="5.5" height="24" rx="1.8" fill="#FBBC05" />
      <rect x="24.5" y="11" width="5.5" height="17" rx="1.8" fill="#EA4335" />
    </svg>
  );
}

export function TableauLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tableau">
      {/* Center large cross */}
      <path d="M14.5 10.5h3v11h-3zM10.5 14.5h11v3h-11z" fill="#EB5F28" />
      {/* Top cross */}
      <path d="M14.8 2.5h2.4V8h-2.4zM12 4.3h8v1.8h-8z" fill="#E8762D" />
      {/* Bottom cross */}
      <path d="M14.8 24h2.4v5.5h-2.4zM12 25.8h8v1.8h-8z" fill="#D9453D" />
      {/* Left cross */}
      <path d="M4 14.8h5.5v2.4H4zM5.8 12h1.8v8H5.8z" fill="#5B92AB" />
      {/* Right cross */}
      <path d="M22.5 14.8H28v2.4h-5.5zM24.3 12h1.8v8h-1.8z" fill="#1F77B4" />
      {/* Corner cross accents */}
      <rect x="8.5" y="8.5" width="2.5" height="2.5" rx="0.5" fill="#789943" />
      <rect x="21" y="8.5" width="2.5" height="2.5" rx="0.5" fill="#6A9F58" />
      <rect x="8.5" y="21" width="2.5" height="2.5" rx="0.5" fill="#285880" />
      <rect x="21" y="21" width="2.5" height="2.5" rx="0.5" fill="#B0432E" />
    </svg>
  );
}

export function FabricLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Fabric">
      <defs>
        <linearGradient id="fab-grad-1" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C7D4" />
          <stop offset="1" stopColor="#0078D4" />
        </linearGradient>
      </defs>
      <path
        d="M16 3.5L27.5 10.1V21.9L16 28.5L4.5 21.9V10.1L16 3.5Z"
        stroke="url(#fab-grad-1)"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.5V16L27.5 21.9M16 16L4.5 21.9"
        stroke="url(#fab-grad-1)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3" fill="#00C7D4" />
    </svg>
  );
}

export function ExcelLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Excel / Power Query">
      <rect x="10" y="5" width="18" height="22" rx="2.5" fill="#107C41" />
      <path d="M14 9h10v2H14zM14 13h10v2H14zM14 17h10v2H14zM14 21h10v2H14z" fill="#ffffff" fillOpacity="0.4" />
      <path d="M18 9v14M22 9v14" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" />
      <rect x="4" y="9" width="14" height="14" rx="2" fill="#0E5C2F" />
      <path d="M7.5 12.5L10.5 16L7.5 19.5H9.3L11.4 16.9L13.5 19.5H15.3L12.3 16L15.3 12.5H13.5L11.4 15.1L9.3 12.5H7.5Z" fill="#ffffff" />
    </svg>
  );
}

export function SnowflakeLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Snowflake">
      <path d="M16 3v26M3 16h26M6.8 6.8l18.4 18.4M6.8 25.2L25.2 6.8" stroke="#29B5E8" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M13.5 6L16 2.5l2.5 3.5M13.5 26L16 29.5l2.5-3.5M6 13.5L2.5 16l3.5 2.5M26 13.5L29.5 16l-3.5 2.5" stroke="#29B5E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PythonLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Python">
      <path
        d="M15.9 3c-4.2 0-7.1 1.8-7.1 4.2v2.9h7.1v1H5.4C3.5 11.1 2 12.8 2 15.2c0 2.4 1.6 4.1 3.4 4.1h2.2v-2.7c0-2.3 2-4.1 4.3-4.1h6.9c2 0 3.7-1.6 3.7-3.7V5.4C22.5 3.5 19.8 3 15.9 3zm-2.2 2.2a1 1 0 110 2 1 1 0 010-2z"
        fill="#3776AB"
      />
      <path
        d="M16.1 29c4.2 0 7.1-1.8 7.1-4.2v-2.9h-7.1v-1h10.5c1.9 0 3.4-1.7 3.4-4.1 0-2.4-1.6-4.1-3.4-4.1h-2.2v2.7c0 2.3-2 4.1-4.3 4.1H13.2c-2 0-3.7 1.6-3.7 3.7v3.4c0 1.9 2.7 2.4 6.6 2.4zm2.2-2.2a1 1 0 110-2 1 1 0 010 2z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function BigQueryLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SQL / Google BigQuery">
      <ellipse cx="14" cy="7.5" rx="10" ry="3.5" fill="#4285F4" />
      <path d="M4 7.5v6.5c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5V7.5" fill="#1A73E8" />
      <ellipse cx="14" cy="14" rx="10" ry="3.2" fill="#4285F4" fillOpacity="0.8" />
      <path d="M4 14v6.5c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5V14" fill="#0D47A1" />
      <circle cx="23" cy="22" r="5" fill="#FBBC05" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M26.5 25.5L30 29" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
