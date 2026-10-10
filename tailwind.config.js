/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          gold: '#db9121',
          dark: '#080c14',
          navy: '#0a0e17',
          card: '#0f172a',
          cardHover: '#141f35',
        }
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'aurora-1':         'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,158,11,0.15), transparent)',
        'aurora-2':         'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(99,102,241,0.08), transparent)',
        'aurora-3':         'radial-gradient(ellipse 40% 60% at 20% 80%, rgba(20,184,166,0.06), transparent)',
      },
      animation: {
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':         'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'shimmer':       'shimmer 3s linear infinite',
        'aurora':        'aurora 8s ease-in-out infinite',
        'spin-slow':     'spin-slow 20s linear infinite',
        'pulse-ring':    'pulse-ring 2s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
        'fade-in':       'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up':    'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        aurora: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%':       { opacity: '0.3',  transform: 'scale(1.08)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'amber-glow':    '0 0 40px rgba(245,158,11,0.25), 0 0 80px rgba(245,158,11,0.10)',
        'amber-glow-sm': '0 0 20px rgba(245,158,11,0.2), 0 4px 20px rgba(0,0,0,0.4)',
        'card':          '0 4px 30px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover':    '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,158,11,0.15)',
        'nav':           '0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      blur: {
        '4xl': '80px',
        '5xl': '120px',
      },
    },
  },
  plugins: [],
};
