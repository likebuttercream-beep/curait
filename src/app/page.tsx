import { PromptGrid } from '../components/PromptGrid';
import { CATEGORY_LABELS, prompts, type CategoryKey } from '../lib/data';

const allCategories = Array.from(new Set(prompts.map((item) => item.category))) as CategoryKey[];

const FeaturedCategories = () => {
  const groups = allCategories.slice(0, 6);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((category) => (
        <div key={category} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-foreground">{CATEGORY_LABELS[category]}</h3>
          <p className="mt-2 text-sm text-neutral-600">
            {prompts
              .filter((item) => item.category === category)
              .slice(0, 2)
              .map((item) => item.title)
              .join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-8 rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm md:grid-cols-[3fr_2fr]">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            산업별 슈퍼 프롬프트를 한 곳에서.
          </h1>
          <p className="text-base text-neutral-600">
            Curait Prompt Market은 F&B부터 제조, 세무, 마케팅까지 실전에서 바로 쓰는 프롬프트를 큐레이션합니다. 지금
            바로 팀의 생산성을 올려 보세요.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
            <span className="rounded-full bg-neutral-100 px-4 py-2">실시간 업데이트</span>
            <span className="rounded-full bg-neutral-100 px-4 py-2">Supabase 연동 준비완료</span>
            <span className="rounded-full bg-neutral-100 px-4 py-2">Stripe/Toss 결제 예정</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-neutral-50 p-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Popular Industries</span>
          <FeaturedCategories />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">전체 프롬프트</h2>
          <span className="text-sm text-neutral-500">{prompts.length}개의 프롬프트</span>
        </div>
        <PromptGrid items={prompts} categories={allCategories} />
      </section>
    </div>
  );
}
