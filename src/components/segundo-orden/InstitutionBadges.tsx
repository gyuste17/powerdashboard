import React from 'react';

export const InstitutionLogo = ({ name, className = "h-5" }: { name: string; className?: string }) => {
  const n = name.toLowerCase();

  if (n.includes('banco de españa') || n.includes('bde')) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-[10px] uppercase font-bold tracking-wider ${className}`}>
        <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.5 6 12 2.5 19.5 6 12 9.5zm0 3.5l-8-4v6l8 4 8-4v-6l-8 4z"/>
        </svg>
        <span>Banco de España</span>
      </div>
    );
  }

  if (n.includes('eurostat')) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-[10px] uppercase font-bold tracking-wider ${className}`}>
        <svg className="w-3.5 h-3.5 fill-blue-400" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="6" r="1.2" fill="currentColor"/>
          <circle cx="16.2" cy="7.8" r="1.2" fill="currentColor"/>
          <circle cx="18" cy="12" r="1.2" fill="currentColor"/>
          <circle cx="16.2" cy="16.2" r="1.2" fill="currentColor"/>
          <circle cx="12" cy="18" r="1.2" fill="currentColor"/>
          <circle cx="7.8" cy="16.2" r="1.2" fill="currentColor"/>
          <circle cx="6" cy="12" r="1.2" fill="currentColor"/>
          <circle cx="7.8" cy="7.8" r="1.2" fill="currentColor"/>
        </svg>
        <span>Eurostat UE</span>
      </div>
    );
  }

  if (n.includes('ine')) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 font-mono text-[10px] uppercase font-bold tracking-wider ${className}`}>
        <span className="font-black text-rose-400 tracking-tighter">INE</span>
        <span className="text-zinc-400 font-normal">Oficial</span>
      </div>
    );
  }

  if (n.includes('oecd') || n.includes('ocde')) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[10px] uppercase font-bold tracking-wider ${className}`}>
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>OCDE Internacional</span>
      </div>
    );
  }

  if (n.includes('nber')) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider ${className}`}>
        <span className="font-bold text-purple-400">NBER</span>
        <span className="text-zinc-400 font-normal">Cambridge</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300 font-mono text-[10px] uppercase tracking-wider ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
      <span>{name}</span>
    </div>
  );
};
