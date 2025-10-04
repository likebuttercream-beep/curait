import Image from 'next/image';
import Link from 'next/link';
import type { PromptItem } from '../lib/data';

function formatPrice(value: number) {
  return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(value);
}

type PromptCardProps = {
  prompt: PromptItem;
};

export function PromptCard({ prompt }: PromptCardProps) {
  const hasDiscount = typeof prompt.discount === 'number' && prompt.discount > 0;
  const discountedPrice = hasDiscount ? Math.round(prompt.price * (1 - (prompt.discount ?? 0) / 100)) : prompt.price;

  return (
    <Link
      href={`/prompts/${prompt.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={prompt.thumbnail}
          alt={`${prompt.title} 썸네일`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {hasDiscount && (
          <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white shadow">
            -{prompt.discount}%
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-wider text-black/50">
          <span>{prompt.category}</span>
          <span>
            ⭐ {prompt.rating.toFixed(1)} · {prompt.sold.toLocaleString()} 판매
          </span>
        </div>
        <h3 className="text-lg font-semibold text-black text-balance">{prompt.title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-black/70">{prompt.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {prompt.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium text-black/70"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-black">{formatPrice(discountedPrice)}</div>
            {hasDiscount && <div className="text-xs text-black/50 line-through">{formatPrice(prompt.price)}</div>}
          </div>
        </div>
      </div>
    </Link>
  );
}
