const TECHNOLOGIES = [
  {
    name: 'Power BI',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" aria-hidden="true">
        <rect x="3" y="16" width="5.5" height="12" rx="1.5" fill="#F2C811" />
        <rect x="10.5" y="10" width="5.5" height="18" rx="1.5" fill="#F2C811" />
        <rect x="18" y="4" width="5.5" height="24" rx="1.5" fill="#F2C811" />
        <rect x="25.5" y="11" width="4" height="17" rx="1.5" fill="#EAA300" />
      </svg>
    ),
  },
  {
    name: 'Looker Studio',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" aria-hidden="true">
        <rect x="4" y="17" width="5" height="11" rx="1" fill="#4285F4" />
        <rect x="11" y="11" width="5" height="17" rx="1" fill="#34A853" />
        <rect x="18" y="5" width="5" height="23" rx="1" fill="#FBBC05" />
        <rect x="25" y="9" width="5" height="19" rx="1" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: 'Tableau',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" aria-hidden="true">
        <path d="M15 2h2v7h-2zM15 23h2v7h-2zM2 15h7v2H2zM23 15h7v2h-7z" fill="#E8762D" />
        <path d="M8 8h2v5H8zM22 8h2v5h-2zM8 19h2v5H8zM22 19h2v5h-2z" fill="#1F77B4" />
        <rect x="14" y="10" width="4" height="12" rx="1" fill="#E24A3F" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Fabric',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" aria-hidden="true">
        <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" fill="url(#fabricGradLogos)" />
        <path d="M16 3v26M4 10l24 12M28 10L4 22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <defs>
          <linearGradient id="fabricGradLogos" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B7C3" />
            <stop offset="1" stopColor="#0078D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'SQL',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" aria-hidden="true">
        <ellipse cx="16" cy="8" rx="11" ry="4" fill="#0284C7" />
        <path d="M5 8v6c0 2.2 4.9 4 11 4s11-1.8 11-4V8" stroke="#0284C7" strokeWidth="2.2" fill="none" />
        <path d="M5 16v6c0 2.2 4.9 4 11 4s11-1.8 11-4v-6" stroke="#0284C7" strokeWidth="2.2" fill="none" />
      </svg>
    ),
  },
];

export function TechLogos() {
  return (
    <section aria-label="Tecnologías" className="py-12 sm:py-16 border-y border-stone-200/70 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-stone-500 dark:text-slate-400">
          Trabajo con las herramientas que tu empresa ya usa
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {TECHNOLOGIES.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-2.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
            >
              {tech.icon}
              <span className="text-base font-semibold tracking-tight text-stone-700 dark:text-slate-300 whitespace-nowrap">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
