import Link from 'next/link';
import Image from 'next/image';
import { BadgePercent, ShoppingBag } from 'lucide-react';
import { CATEGORY_LABELS, type PromptItem } from '../lib/data';
import { formatCurrency, formatDiscountedPrice } from '../lib/utils';

export type PromptCardProps = {
  prompt: PromptItem;
};

export const PromptCard = ({ prompt }: PromptCardProps) => {
  const discounted = formatDiscountedPrice(prompt.price, prompt.discount);
  const isDiscounted = prompt.discount && prompt.discount > 0 && discounted < prompt.price;

  return (
    <Link
      href={`/prompts/${prompt.id}`}
      className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
      aria-label={`${prompt.title} 상세 보기`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={prompt.thumbnail}
          alt={`${prompt.title} 썸네일`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {isDiscounted && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
            <BadgePercent className="h-3 w-3" aria-hidden />- {prompt.discount}%
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">
            {CATEGORY_LABELS[prompt.category]}
          </span>
          <span>⭐ {prompt.rating.toFixed(1)}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground line-clamp-2">{prompt.title}</h3>
          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{prompt.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {prompt.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-end gap-2">
            <span className="text-lg font-semibold text-foreground">{formatCurrency(discounted)}</span>
            {isDiscounted && <span className="text-sm text-neutral-400 line-through">{formatCurrency(prompt.price)}</span>}
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <ShoppingBag className="h-4 w-4" aria-hidden />
            <span>{prompt.sold.toLocaleString()} sold</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
