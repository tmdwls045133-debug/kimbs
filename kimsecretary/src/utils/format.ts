/**
 * 포맷팅 유틸리티 함수들
 */

/**
 * 숫자를 한국 금액 형식으로 포맷팅
 * @example formatCurrency(1000000) => "1,000,000원"
 */
export function formatCurrency(amount: number): string {
  return `${amount.toLocaleString('ko-KR')}원`;
}

/**
 * 숫자를 천 단위로 포맷팅 (단위: 만원)
 * @example formatMillion(5000) => "5,000만원"
 */
export function formatMillion(amount: number): string {
  return `${amount.toLocaleString('ko-KR')}만원`;
}

/**
 * 날짜를 한국식 형식으로 포맷팅
 * @example formatDate("2026-03-10") => "2026년 3월 10일"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * 날짜를 짧은 형식으로 포맷팅
 * @example formatDateShort("2026-03-10") => "3.10"
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('ko-KR', {
    month: 'numeric',
    day: 'numeric',
  });
}

/**
 * 진행률을 퍼센트 형식으로 포맷팅
 * @example formatProgress(65) => "65%"
 */
export function formatProgress(progress: number): string {
  return `${Math.min(Math.max(progress, 0), 100)}%`;
}

/**
 * 남은 일수 계산
 * @example getDaysRemaining("2026-03-20") => 10
 */
export function getDaysRemaining(dueDate: string): number {
  const due = new Date(dueDate + 'T23:59:59');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = due.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * 예산 대비 집행률 계산
 * @example getBudgetUtilization(5000, 3250) => 65
 */
export function getBudgetUtilization(budget: number, spent: number): number {
  if (budget === 0) return 0;
  return Math.round((spent / budget) * 100);
}

/**
 * 주간 시작, 종료 날짜 포맷팅
 * @example formatWeekRange("2026-03-10", "2026-03-14") => "3월 10일 ~ 3월 14일"
 */
export function formatWeekRange(startDate: string, endDate: string): string {
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');

  const startMonth = start.getMonth() + 1;
  const startDay = start.getDate();
  const endMonth = end.getMonth() + 1;
  const endDay = end.getDate();

  if (startMonth === endMonth) {
    return `${startMonth}월 ${startDay}일 ~ ${endDay}일`;
  } else {
    return `${startMonth}월 ${startDay}일 ~ ${endMonth}월 ${endDay}일`;
  }
}
