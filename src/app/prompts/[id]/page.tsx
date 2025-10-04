import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getPromptById,
  getSimilarPrompts,
  TAG_SUGGESTIONS,
  type CategoryKey
} from '../../../lib/data';
import { PurchaseButton } from '../../../components/PurchaseButton';

function formatPrice(value: number) {
  return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(value);
}

type PromptDetailPageProps = {
  params: { id: string };
};

export default function PromptDetailPage({ params }: PromptDetailPageProps) {
  const prompt = getPromptById(params.id);

  if (!prompt) {
    return notFound();
  }

  const hasDiscount = typeof prompt.discount === 'number' && prompt.discount > 0;
  const discountedPrice = hasDiscount ? Math.round(prompt.price * (1 - (prompt.discount ?? 0) / 100)) : prompt.price;
  const similarPrompts = getSimilarPrompts(prompt, 4);

  const tagList = (prompt.allTags && prompt.allTags.length > 0
    ? prompt.allTags
    : TAG_SUGGESTIONS[prompt.category as CategoryKey]
  ).slice(0, 10);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-black/50">{prompt.category}</span>
              <h1 className="text-3xl font-semibold text-black">{prompt.title}</h1>
            </div>
            <div className="hidden whitespace-nowrap lg:flex">
              <PurchaseButton promptId={prompt.id} />
            </div>
          </div>
          <p className="text-base text-black/70">{prompt.description}</p>
          <div className="rounded-2xl border border-black/5 bg-black/5 p-4 text-sm text-black/70">
            <h2 className="mb-2 text-sm font-semibold text-black">프롬프트 미리보기</h2>
            <p className="whitespace-pre-line leading-relaxed">{prompt.preview}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-black/70">
            <div className="flex items-baseline gap-2 text-black">
              <span className="text-2xl font-bold text-black">{formatPrice(discountedPrice)}</span>
              {hasDiscount && <span className="text-sm text-black/50 line-through">{formatPrice(prompt.price)}</span>}
              {hasDiscount && (
                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">-{prompt.discount}%</span>
              )}
            </div>
            <span>⭐ {prompt.rating.toFixed(1)} ({prompt.sold.toLocaleString()} 판매)</span>
            <div className="flex lg:hidden">
              <PurchaseButton promptId={prompt.id} className="w-full" />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black">상세 정보 & 사용법</h2>
          <article className="prose prose-neutral max-w-none text-sm leading-relaxed text-black/80">
            <p className="whitespace-pre-line">{prompt.body}</p>
          </article>
          <div className="flex flex-wrap gap-2">
            {tagList.map((tag) => (
              <span key={tag} className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">
                #{tag}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black">작성자</h2>
          <div className="flex items-center gap-4">
            {prompt.author.avatar ? (
              <Image
                src={prompt.author.avatar}
                alt={`${prompt.author.name} 아바타`}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-black/10" aria-hidden />
            )}
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold text-black">{prompt.author.name}</span>
              <span className="text-sm text-black/60">누적 판매 {prompt.sold.toLocaleString()} · 평점 {prompt.rating.toFixed(1)}</span>
              <span className="text-xs text-black/50">멤버십 {prompt.author.membership_level ?? 'FREE'}</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black">리뷰</h2>
          <div className="rounded-2xl border border-black/5 bg-black/5 p-6 text-center text-sm text-black/60">
            아직 등록된 리뷰가 없습니다.
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black">유사 프롬프트</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {similarPrompts.map((item) => (
              <Link
                key={item.id}
                href={`/prompts/${item.id}`}
                className="group flex flex-col gap-3 rounded-2xl border border-black/5 bg-black/5 p-4 transition hover:border-black/20 hover:bg-black/10"
              >
                <span className="text-sm font-semibold text-black group-hover:underline">{item.title}</span>
                <p className="line-clamp-2 text-xs text-black/60">{item.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-black/60">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 px-2 py-1">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
            {similarPrompts.length === 0 && (
              <div className="rounded-2xl border border-black/5 bg-black/5 p-6 text-center text-sm text-black/60">
                유사한 프롬프트가 아직 없습니다.
              </div>
            )}
          </div>
        </section>
      </div>

      <aside className="flex flex-col gap-6">
        <div className="sticky top-28 flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-black">구매 요약</h2>
          <div className="flex flex-col gap-2 text-sm text-black/70">
            <span>카테고리: {prompt.category}</span>
            <span>발행일: {new Date(prompt.createdAt).toLocaleDateString('ko-KR')}</span>
            <span>판매량: {prompt.sold.toLocaleString()}회</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-black">{formatPrice(discountedPrice)}</span>
            {hasDiscount && <span className="text-sm text-black/40 line-through">{formatPrice(prompt.price)}</span>}
          </div>
          <PurchaseButton promptId={prompt.id} />
          <div className="text-xs text-black/50">
            Stripe/Toss Payments 연동 예정. 구매 시 라이선스 및 업데이트 알림이 이메일로 전달됩니다.
          </div>
        </div>
      </aside>
    </div>
  );
}
