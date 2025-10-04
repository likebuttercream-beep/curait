'use client';

import { useMemo, useState } from 'react';
import { CategoryTabs } from './CategoryTabs';
import { PromptCard } from './PromptCard';
import { type CategoryKey, type PromptItem } from '../lib/data';

type PromptGridProps = {
  items: PromptItem[];
  categories: CategoryKey[];
};

export const PromptGrid = ({ items, categories }: PromptGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | undefined>(undefined);

  const filtered = useMemo(() => {
    if (!selectedCategory) return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  return (
    <div className="flex flex-col gap-6">
      <CategoryTabs categories={categories} active={selectedCategory} onSelect={setSelectedCategory} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  );
};
