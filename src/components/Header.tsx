import Link from 'next/link';
import { Input } from './ui/input';
import { AuthButtons } from './AuthButtons';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-background/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-5">
        <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-6">
          <Link href="/" className="text-lg font-semibold" aria-label="Curait Prompt Market 홈으로 이동">
            Curait Prompt Market
          </Link>
          <form className="w-full">
            <Input placeholder="프롬프트 검색 (예: 캠페인, 메뉴, 세무)" aria-label="프롬프트 검색" />
          </form>
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};
