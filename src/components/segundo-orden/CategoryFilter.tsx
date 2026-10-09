'use client';

import { 
  Sparkles, 
  Home, 
  Briefcase, 
  HeartPulse, 
  Receipt, 
  ShoppingBag 
} from 'lucide-react';
import type { CategoryId, Category } from '@/data/segundo-orden/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  counts: Record<CategoryId, number>;
}

const getCategoryIcon = (id: CategoryId) => {
  switch (id) {
    case 'vivienda': return <Home className="w-3.5 h-3.5" />;
    case 'laboral': return <Briefcase className="w-3.5 h-3.5" />;
    case 'sanidad': return <HeartPulse className="w-3.5 h-3.5" />;
    case 'fiscalidad': return <Receipt className="w-3.5 h-3.5" />;
    case 'precios': return <ShoppingBag className="w-3.5 h-3.5" />;
    default: return <Sparkles className="w-3.5 h-3.5" />;
  }
};

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
}: CategoryFilterProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-8">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 justify-start sm:justify-center">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = counts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all shrink-0 ${
                isSelected
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-[#111218] text-zinc-400 hover:text-zinc-200 border border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <span className={isSelected ? 'text-emerald-400' : 'text-zinc-500'}>
                {getCategoryIcon(cat.id)}
              </span>
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                isSelected 
                  ? 'bg-emerald-500/20 text-emerald-300' 
                  : 'bg-white/[0.05] text-zinc-500'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
