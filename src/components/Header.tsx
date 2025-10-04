'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Input } from './ui/input';
import { AuthButtons } from './AuthButtons';
import { useSearchContext } from './providers/SearchProvider';

export function Header() {
  const pathname = usePathname();
  const { query, setQuery } = useSearchContext();
  const showSearch = pathname === '/';

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-black" aria-label="Curait Prompt Market 홈">
            Curait Prompt Market
          </Link>
          {showSearch ? (
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="프롬프트 검색 (제목, 태그, 작성자)"
              aria-label="프롬프트 검색"
            />
          ) : (
            <div aria-hidden className="h-10" />
          )}
          <div className="justify-self-end">
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
