import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  title: 'Curait Prompt Market',
  description: '슈퍼 프롬프트를 만나는 곳, Curait Prompt Market에서 산업별 맞춤 프롬프트를 탐색하고 판매하세요.',
  openGraph: {
    title: 'Curait Prompt Market',
    description: '산업별 슈퍼 프롬프트를 탐색하고 구매하는 마켓',
    url: 'https://curait.example.com',
    siteName: 'Curait Prompt Market',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
