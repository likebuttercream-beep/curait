'use client';

import { useMemo, useState } from 'react';
import { CategoryTabs } from '../components/CategoryTabs';
import { PromptCard } from '../components/PromptCard';
import { searchPrompts, type CategoryKey } from '../lib/data';
import { useSearchContext } from '../components/providers/SearchProvider';

export default function HomePage() {
  const { query } = useSearchContext();
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'all'>('all');

  const prompts = useMemo(() => {
    const list = searchPrompts(query, activeCategory);
    return list;
  }, [query, activeCategory]);

  const total = prompts.length;

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-black px-6 py-10 text-white shadow-subtle">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          산업별로 큐레이션된 슈퍼 프롬프트 마켓
        </h1>
        <p className="max-w-2xl text-base text-white/80">
          Curait Prompt Market은 실무에 바로 적용 가능한 프롬프트 번들을 제공합니다. 외식업, 제조, IT 개발 등
          다양한 산업 전문가가 검증한 템플릿으로 팀의 생산성을 향상하세요.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-white/70">
          <span className="rounded-full border border-white/20 px-3 py-1">프리미엄 큐레이션</span>
          <span className="rounded-full border border-white/20 px-3 py-1">실전 시나리오</span>
          <span className="rounded-full border border-white/20 px-3 py-1">Supabase 연동 준비</span>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold text-black">전체 프롬프트</h2>
            <span className="text-sm text-black/60">{total.toLocaleString()}개</span>
          </div>
          <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {prompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
        {total === 0 && (
          <div className="rounded-2xl border border-black/5 bg-black/5 p-8 text-center text-sm text-black/60">
            조건에 맞는 프롬프트가 아직 없습니다. 검색어나 카테고리를 변경해보세요.
          </div>
        )}
      </section>
    </div>
  );
}
