/**
 * 김비서 대시보드 - 상수 및 색상 팔레트
 */

// ==================== 우선순위 색상 ====================

export const PRIORITY_COLORS = {
  '높음': {
    bg: 'bg-red-100 dark:bg-red-950',
    text: 'text-red-700 dark:text-red-300',
    badge: 'bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-100',
  },
  '보통': {
    bg: 'bg-orange-100 dark:bg-orange-950',
    text: 'text-orange-700 dark:text-orange-300',
    badge: 'bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-100',
  },
  '낮음': {
    bg: 'bg-green-100 dark:bg-green-950',
    text: 'text-green-700 dark:text-green-300',
    badge: 'bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-100',
  },
} as const;

// ==================== 작업 상태 색상 ====================

export const STATUS_COLORS = {
  '진행중': 'text-blue-600 dark:text-blue-400',
  '대기': 'text-purple-600 dark:text-purple-400',
  '완료': 'text-green-600 dark:text-green-400',
} as const;

// ==================== 프로젝트 상태 색상 ====================

export const PROJECT_STATUS_COLORS = {
  '진행중': 'text-blue-600 dark:text-blue-400',
  '준비중': 'text-yellow-600 dark:text-yellow-400',
  '마무리': 'text-orange-600 dark:text-orange-400',
  '기획중': 'text-gray-600 dark:text-gray-400',
} as const;

// ==================== 매출 카드 그래디언트 ====================

export const REVENUE_GRADIENTS = {
  blue: 'from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700',
  green: 'from-green-400 to-emerald-600 dark:from-green-500 dark:to-emerald-700',
  orange: 'from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-700',
  red: 'from-red-500 to-red-600 dark:from-red-600 dark:to-red-700',
} as const;

// ==================== 네비게이션 메뉴 ====================

export const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: '📊 대시보드', href: '/' },
  { id: 'meeting', label: '📋 회의록', href: '/meeting' },
  { id: 'chart', label: '📈 매출 현황', href: '/chart' },
  { id: 'diagram', label: '🔄 업무 프로세스', href: '/diagram' },
  { id: 'report', label: '📑 사이트 분석', href: '/report' },
  { id: 'spreadsheet', label: '📊 판매 데이터', href: '/spreadsheet' },
] as const;

// ==================== 요일 ====================

export const DAYS_OF_WEEK = ['월', '화', '수', '목', '금'] as const;

// ==================== 카테고리 ====================

export const TASK_CATEGORIES = [
  '마케팅',
  '콘텐츠',
  '리서치',
  '운영',
  '보고',
] as const;

export const PRODUCT_CATEGORIES = [
  '전자기기',
  '생활용품',
] as const;

export const REGIONS = [
  '서울',
  '부산',
  '대구',
] as const;

// ==================== 테마 색상 ====================

export const THEME_COLORS = {
  light: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f8f9fb',
    bgGlass: 'rgba(255, 255, 255, 0.7)',
    textPrimary: '#1a1a2e',
    textSecondary: '#666666',
    textLight: '#999999',
    borderColor: 'rgba(200, 200, 220, 0.3)',
  },
  dark: {
    bgPrimary: '#0f0f23',
    bgSecondary: '#1a1a3a',
    bgGlass: 'rgba(30, 30, 60, 0.6)',
    textPrimary: '#e0e0e0',
    textSecondary: '#b0b0b0',
    textLight: '#808080',
    borderColor: 'rgba(100, 100, 150, 0.2)',
  },
} as const;

// ==================== 그래디언트 ====================

export const GRADIENTS = {
  light: {
    primary: 'from-blue-500 via-purple-500 to-pink-500',
    secondary: 'from-green-400 to-emerald-600',
  },
  dark: {
    primary: 'from-purple-400 via-purple-500 to-pink-500',
    secondary: 'from-emerald-400 to-cyan-500',
  },
} as const;
