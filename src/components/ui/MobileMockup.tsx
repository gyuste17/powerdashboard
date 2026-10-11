'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MobileMockupProps {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
}

/**
 * Hyper-polished modern smartphone (iPhone) device frame mockup.
 */
export function MobileMockup({
  src,
  alt = 'Executive Dashboard en Móvil',
  className,
  priority = false,
  children,
}: MobileMockupProps) {
  return (
    <div
      className={cn(
        'relative w-64 sm:w-72 rounded-[42px] p-2.5 bg-gradient-to-b from-stone-800 via-stone-700 to-stone-900 shadow-[0_25px_60px_-15px_rgba(28,25,23,0.35)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.8)] border border-stone-600/60 ring-1 ring-white/20',
        className
      )}
    >
      {/* Side buttons accents */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-stone-700 rounded-l-sm" />
      <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-stone-700 rounded-l-sm" />
      <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-stone-700 rounded-r-sm" />

      {/* Screen container */}
      <div
        className="relative w-full overflow-hidden rounded-[34px] bg-stone-950 border border-stone-900"
        style={{ aspectRatio: '9 / 19.5' }}
      >
        {/* Dynamic Island Pill */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full flex items-center justify-between px-2 z-30 ring-1 ring-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] ring-1 ring-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0c2a40]/90" />
        </div>

        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="300px"
            className="object-cover object-top"
          />
        ) : (
          children
        )}

        {/* Screen glass reflection overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]"
        />

        {/* Home indicator bar at bottom */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-30" />
      </div>
    </div>
  );
}
