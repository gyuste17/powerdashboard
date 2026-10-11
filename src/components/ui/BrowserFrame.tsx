import Image from 'next/image';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrowserFrameProps {
  src: string;
  alt: string;
  /** Text shown in the address bar, e.g. "app.powerbi.com/ventas" */
  url?: string;
  /** CSS aspect-ratio of the screenshot area, e.g. "1436 / 802" */
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Minimal macOS-style browser window used to present dashboard screenshots
 * as real products instead of flat, isolated images.
 */
export function BrowserFrame({
  src,
  alt,
  url = 'app.powerbi.com',
  aspectRatio = '16 / 10',
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 1024px',
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl sm:rounded-2xl',
        'bg-white dark:bg-[#0d1322]',
        'ring-1 ring-stone-900/[0.08] dark:ring-white/[0.08]',
        'shadow-[0_1px_2px_rgba(28,25,23,0.04),0_12px_32px_-8px_rgba(28,25,23,0.12),0_40px_80px_-24px_rgba(28,25,23,0.22)]',
        'dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_24px_64px_-12px_rgba(0,0,0,0.65)]',
        className
      )}
    >
      {/* Window chrome */}
      <div className="relative flex items-center h-9 sm:h-10 px-3 sm:px-4 border-b border-stone-200/80 dark:border-white/[0.06] bg-stone-50/90 dark:bg-white/[0.02]">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/90 dark:bg-[#ff5f57]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/90 dark:bg-[#febc2e]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/90 dark:bg-[#28c840]/70" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-1.5 h-6 w-[min(55%,22rem)] justify-center rounded-md bg-white dark:bg-white/[0.04] ring-1 ring-stone-200/80 dark:ring-white/[0.06] text-[11px] text-stone-500 dark:text-slate-400">
          <Lock className="w-2.5 h-2.5 shrink-0" aria-hidden="true" />
          <span className="truncate">{url}</span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative w-full bg-stone-100 dark:bg-slate-950" style={{ aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
