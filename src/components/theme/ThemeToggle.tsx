'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('pd-theme');
    if (saved === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('pd-theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl border border-stone-200 dark:border-white/10 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      title={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      className={`relative p-2 rounded-xl transition-all duration-300 flex items-center justify-center
        bg-stone-100/80 hover:bg-stone-200/90 text-stone-700 border border-stone-200/90 shadow-sm
        dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-amber-400 dark:border-white/10 dark:shadow-none
        ${className}`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12 text-stone-700" />
      ) : (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
      )}
    </button>
  );
}
