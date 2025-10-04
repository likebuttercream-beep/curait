import type { Metadata } from 'next';
import './globals.css';
import '../styles/tokens.css';
import { Header } from '../components/Header';
import { SearchProvider } from '../components/providers/SearchProvider';

export const metadata: Metadata = {
  title: 'Curait Prompt Market',
  description:
    'Curait Prompt Market — 산업별 전문 프롬프트를 탐색하고 제작하세요. 외식업부터 IT 개발까지 세련된 프롬프트 마켓플레이스.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-black">
        <SearchProvider>
          <Header />
          <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10">{children}</main>
        </SearchProvider>
      </body>
    </html>
  );
}
