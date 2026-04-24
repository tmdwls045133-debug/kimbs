/**
 * 테마 관련 유틸리티 함수들
 */

const THEME_KEY = 'kim-secretary-theme';

export type Theme = 'light' | 'dark';

/**
 * 저장된 테마 불러오기
 * localStorage에서 테마를 읽어옴
 */
export function getSavedTheme(): Theme | null {
  if (typeof window === 'undefined') return null;

  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'dark' ? 'dark' : saved === 'light' ? 'light' : null;
  } catch {
    return null;
  }
}

/**
 * 테마 저장하기
 */
export function saveTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // localStorage 사용 불가능한 경우 무시
  }
}

/**
 * 시스템 선호 테마 확인
 */
export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * HTML 요소에 테마 클래스 적용
 */
export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;

  const html = document.documentElement;

  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}

/**
 * 테마 토글
 */
export function toggleTheme(currentTheme: Theme): Theme {
  return currentTheme === 'dark' ? 'light' : 'dark';
}

/**
 * 초기 테마 설정
 * 1. 저장된 테마 확인
 * 2. 없으면 시스템 선호 테마
 * 3. 없으면 라이트 모드
 */
export function initializeTheme(): Theme {
  const saved = getSavedTheme();
  if (saved) return saved;

  const system = getSystemTheme();
  return system;
}
