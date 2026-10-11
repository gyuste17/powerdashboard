import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

/** Shared heading block so every home section has the same rhythm. */
export function SectionHeader({ eyebrow, title, description, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center mx-auto' : 'text-left', 'max-w-2xl', className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-stone-900 dark:text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
