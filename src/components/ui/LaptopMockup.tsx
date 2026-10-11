'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LaptopMockupProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
}

/**
 * Hyper-polished modern MacBook Pro device frame mockup.
 */
export function LaptopMockup({
  src,
  alt = 'Executive Dashboard en MacBook',
  aspectRatio = '16 / 10',
  className,
  priority = false,
  children,
}: LaptopMockupProps) {
  return (
    <div className={cn('relative w-full max-w-5xl mx-auto', className)}>
      {/* ── Screen Frame ───────────────────────────────────── */}
      <div className="relative rounded-t-2xl sm:rounded-t-3xl bg-[#141517] p-2 sm:p-3 pb-0 shadow-[0_20px_50px_rgba(28,25,23,0.18)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] border-t border-x border-stone-700/60 dark:border-white/10">
        {/* Top notch with webcam & ambient sensor */}
        <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-3 sm:h-4 bg-[#141517] rounded-b-lg flex items-center justify-center gap-1.5 z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] ring-1 ring-white/10" />
          <span className="w-1 h-1 rounded-full bg-[#053d20]/80" />
        </div>

        {/* Screen Bezel & Display */}
        <div
          className="relative w-full overflow-hidden rounded-t-lg sm:rounded-t-xl bg-stone-900 border border-stone-800"
          style={{ aspectRatio }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover object-top"
            />
          ) : (
            children
          )}

          {/* Realistic glass subtle gradient reflection overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]"
          />
        </div>
      </div>

      {/* ── Laptop Base & Hinge ───────────────────────────── */}
      <div className="relative h-3.5 sm:h-5 bg-gradient-to-b from-[#2b2d30] via-[#404347] to-[#1c1d1f] rounded-b-xl sm:rounded-b-2xl border-t border-stone-600/40 shadow-md flex items-start justify-center">
        {/* Trackpad notch indentation */}
        <div className="w-16 sm:w-28 h-1 sm:h-1.5 bg-[#17181a] rounded-b-md" />
      </div>

      {/* Soft base shadow */}
      <div
        aria-hidden="true"
        className="w-[90%] mx-auto h-4 sm:h-6 bg-stone-900/15 dark:bg-black/50 blur-xl rounded-full mt-1"
      />
    </div>
  );
}
