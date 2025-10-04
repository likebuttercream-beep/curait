import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PromptCard } from '../../../components/PromptCard';
import { PurchaseButton } from '../../../components/PurchaseButton';
import { CATEGORY_LABELS, getPromptById, getRelatedPrompts } from '../../../lib/data';
import { formatCurrency, formatDiscountedPrice } from '../../../lib/utils';
import { createCheckoutSession } from '../../../lib/data';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const prompt = getPromptById(params.id);
  if (!prompt) {
    return {
      title: '프롬프트를 찾을 수 없습니다 | Curait Prompt Market'
    };
  }
  return {
    title: `${prompt.title} | Curait Prompt Market`,
    description: prompt.description
  };
}

export default function PromptDetailPage({ params }: { params: { id: string } }) {
  const prompt = getPromptById(params.id);
  if (!prompt) {
    notFound();
  }

  const discounted = formatDiscountedPrice(prompt.price, prompt.discount);
  const isDiscounted = prompt.discount && prompt.discount > 0 && discounted < prompt.price;
  const tags = prompt.allTags && prompt.allTags.length > 0 ? prompt.allTags.slice(0, 10) : prompt.tags.slice(0, 10);
  const related = getRelatedPrompts(prompt, 4);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500">{CATEGORY_LABELS[prompt.category]}</span>
            <h1 className="mt-2 text-3xl font-semibold text-foreground">{prompt.title}</h1>
            <p className="mt-4 text-neutral-600">{prompt.description}</p>
          </div>
          <PurchaseButton promptId={prompt.id} />
        </div>
        <div className="grid gap-4 text-sm text-neutral-500 sm:grid-cols-2">
          <div>판매 {prompt.sold.toLocaleString()}회</div>
          <div>평점 ⭐ {prompt.rating.toFixed(1)}</div>
          <div>등록일 {new Date(prompt.createdAt).toLocaleDateString('ko-KR')}</div>
          <div>가격 {formatCurrency(discounted)}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
              #{tag}
            </span>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-neutral-100">
          <Image
            src={prompt.thumbnail}
            alt={`${prompt.title} 미리보기`}
            width={960}
            height={540}
            className="h-full w-full object-cover"
            priority={false}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <section className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">미리보기</h2>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-700">{prompt.preview}</p>
        </section>
        <section className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">가격</h2>
          <div className="flex items-end gap-3">
            <span className="text-2xl font-semibold text-foreground">{formatCurrency(discounted)}</span>
            {isDiscounted && <span className="text-sm text-neutral-400 line-through">{formatCurrency(prompt.price)}</span>}
            {isDiscounted && (
              <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">-{prompt.discount}%</span>
            )}
          </div>
          <p className="text-sm text-neutral-600">구매 후 프롬프트 전문을 확인하고 복사할 수 있습니다.</p>
        </section>
      </div>

      <section className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">상세정보</h2>
          <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-neutral-700">{prompt.body}</p>
        </div>
        <div className="flex flex-col gap-6">
          <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">작성자</h2>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src={prompt.author.avatar ?? 'https://picsum.photos/seed/curait-avatar/120/120'}
                alt={`${prompt.author.name} 아바타`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{prompt.author.name}</p>
                <p className="text-xs text-neutral-500">누적 판매 {prompt.sold.toLocaleString()}회 · 평점 {prompt.rating.toFixed(1)}</p>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">리뷰</h2>
            <p className="mt-3 text-sm text-neutral-500">아직 없음</p>
          </section>
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">유사 프롬프트</h2>
          <span className="text-sm text-neutral-500">같은 카테고리 기반 추천</span>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <PromptCard key={item.id} prompt={item} />
          ))}
          {related.length === 0 && (
            <p className="text-sm text-neutral-500">추천할 다른 프롬프트가 없습니다.</p>
          )}
        </div>
      </section>
    </div>
  );
}
