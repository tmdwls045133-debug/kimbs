import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '김비서 - 프리미엄 업무 관리 대시보드',
  description:
    '할 일 관리, 일정, 프로젝트 추적, 매출 분석을 한 곳에서 관리하는 통합 대시보드',
  keywords: ['대시보드', '업무 관리', '프로젝트', '매출'],
  authors: [{ name: 'Kim Secretary Team' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={notoSansKR.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
