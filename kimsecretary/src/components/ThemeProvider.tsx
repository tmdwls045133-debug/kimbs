'use client';

import { ReactNode, useEffect, useState } from 'react';
import { initializeTheme, applyTheme, type Theme } from '@/utils/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * 테마 제공자 컴포넌트
 * localStorage 기반 다크/라이트 모드 관리
 */
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 초기 테마 설정
    const initialTheme = initializeTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  if (!mounted) {
    // 초기화 완료까지 기다림 (flash 방지)
    return <>{children}</>;
  }

  return <>{children}</>;
}
