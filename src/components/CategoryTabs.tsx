'use client';

import { CATEGORY_LABELS, type CategoryKey } from '../lib/data';
import { cn } from '../lib/utils';

type CategoryTabsProps = {
  categories: CategoryKey[];
  active?: CategoryKey;
  onSelect?: (category: CategoryKey | undefined) => void;
};

export const CategoryTabs = ({ categories, active, onSelect }: CategoryTabsProps) => {
  const handleSelect = (category?: CategoryKey) => {
    onSelect?.(category);
  };

  return (
    <div className="scrollbar-none flex gap-3 overflow-x-auto pb-2" role="tablist" aria-label="카테고리 선택">
      <button
        type="button"
        role="tab"
        aria-selected={active === undefined}
        className={cn(
          'whitespace-nowrap rounded-2xl border border-neutral-200 px-4 py-2 text-sm transition-colors hover:bg-neutral-200',
          active === undefined ? 'bg-black text-white border-black' : 'bg-white text-neutral-700'
        )}
        onClick={() => handleSelect(undefined)}
      >
        전체
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={active === category}
          className={cn(
            'whitespace-nowrap rounded-2xl border border-neutral-200 px-4 py-2 text-sm transition-colors hover:bg-neutral-200',
            active === category ? 'bg-black text-white border-black' : 'bg-white text-neutral-700'
          )}
          onClick={() => handleSelect(category)}
        >
          {CATEGORY_LABELS[category]}
        </button>
      ))}
    </div>
  );
};
