'use client';

import type { CategoryKey } from '../lib/data';
import { categoryDefinitions } from '../lib/data';
import { clsx } from 'clsx';

export type CategoryTabsProps = {
  active: CategoryKey | 'all';
  onSelect: (category: CategoryKey | 'all') => void;
};

export function CategoryTabs({ active, onSelect }: CategoryTabsProps) {
  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="카테고리 필터">
      <button
        type="button"
        role="tab"
        aria-selected={active === 'all'}
        className={clsx(
          'whitespace-nowrap rounded-2xl border border-black/10 px-4 py-2 text-sm transition-colors',
          active === 'all' ? 'bg-black text-white border-black' : 'bg-white hover:bg-black/5'
        )}
        onClick={() => onSelect('all')}
      >
        전체
      </button>
      {categoryDefinitions.map((category) => (
        <button
          key={category.key}
          type="button"
          role="tab"
          aria-selected={active === category.key}
          className={clsx(
            'whitespace-nowrap rounded-2xl border border-black/10 px-4 py-2 text-sm transition-colors',
            active === category.key ? 'bg-black text-white border-black' : 'bg-white hover:bg-black/5'
          )}
          onClick={() => onSelect(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
