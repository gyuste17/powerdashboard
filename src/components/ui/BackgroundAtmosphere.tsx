export function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* ── Global Animated Gradient Mesh Orbs (Hardware-accelerated CSS) ── */}
      <div
        aria-hidden="true"
        className="animate-orb-1 absolute -top-32 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-transparent blur-[120px] rounded-full"
      />

      <div
        aria-hidden="true"
        className="animate-orb-2 absolute top-[25%] -right-40 w-[700px] h-[700px] bg-gradient-to-bl from-indigo-600/20 via-violet-500/15 to-transparent blur-[140px] rounded-full"
      />

      <div
        aria-hidden="true"
        className="animate-orb-3 absolute top-[55%] -left-48 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/18 via-sky-500/10 to-transparent blur-[130px] rounded-full"
      />

      <div
        aria-hidden="true"
        className="animate-orb-4 absolute bottom-10 right-1/4 w-[750px] h-[750px] bg-gradient-to-tl from-amber-500/22 via-orange-500/12 to-transparent blur-[140px] rounded-full"
      />

      {/* ── Subtle Geometric Grid with Radial Fade Mask ──────────── */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 95%)',
        }}
      />

      {/* ── Glowing Data Stream Beam Lines ────────────────────── */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="-10%" y1="15%" x2="110%" y2="45%" stroke="url(#beam1)" strokeWidth="1" strokeDasharray="12 18" />
        <line x1="110%" y1="65%" x2="-10%" y2="90%" stroke="url(#beam2)" strokeWidth="1" strokeDasharray="16 22" />
      </svg>
    </div>
  );
}
