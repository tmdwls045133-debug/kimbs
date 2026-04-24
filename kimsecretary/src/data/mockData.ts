/**
 * 김비서 대시보드 - 더미 데이터
 * 워크숍 데이터(업무목록.csv, 주간일정.txt, 프로젝트현황.csv, 매출데이터.csv)를 기반으로 생성
 */

import { Task, WeeklySchedule, Project, RevenueSummary, SalesData, MeetingMinutes } from './types';

// ==================== 할 일 데이터 ====================

export const mockTasks: Task[] = [
  {
    id: '1',
    title: '대시보드 개발',
    priority: '높음',
    status: '진행중',
    assignee: '김과장',
    dueDate: '2026-03-20',
    category: '마케팅',
  },
  {
    id: '2',
    title: '마케팅 자료 작성',
    priority: '높음',
    status: '진행중',
    assignee: '이대리',
    dueDate: '2026-03-15',
    category: '콘텐츠',
  },
  {
    id: '3',
    title: '경쟁사 분석 리포트',
    priority: '보통',
    status: '대기',
    assignee: '박대리',
    dueDate: '2026-03-22',
    category: '리서치',
  },
  {
    id: '4',
    title: '회의 자료 준비',
    priority: '높음',
    status: '진행중',
    assignee: '최팀장',
    dueDate: '2026-03-12',
    category: '보고',
  },
  {
    id: '5',
    title: '고객 피드백 정리',
    priority: '보통',
    status: '진행중',
    assignee: '김과장',
    dueDate: '2026-03-18',
    category: '운영',
  },
  {
    id: '6',
    title: 'Q1 실적 보고',
    priority: '높음',
    status: '대기',
    assignee: '이대리',
    dueDate: '2026-04-05',
    category: '보고',
  },
  {
    id: '7',
    title: '신규 프로젝트 기획',
    priority: '보통',
    status: '대기',
    assignee: '박대리',
    dueDate: '2026-03-25',
    category: '마케팅',
  },
  {
    id: '8',
    title: '팀 교육 세션 준비',
    priority: '낮음',
    status: '대기',
    assignee: '최팀장',
    dueDate: '2026-03-28',
    category: '운영',
  },
  {
    id: '9',
    title: '출장비 정산',
    priority: '보통',
    status: '진행중',
    assignee: '김과장',
    dueDate: '2026-03-14',
    category: '운영',
  },
  {
    id: '10',
    title: '고객 미팅 준비',
    priority: '높음',
    status: '진행중',
    assignee: '이대리',
    dueDate: '2026-03-13',
    category: '마케팅',
  },
  {
    id: '11',
    title: '월간 보고서 작성',
    priority: '높음',
    status: '완료',
    assignee: '박대리',
    dueDate: '2026-03-10',
    category: '보고',
  },
];

// ==================== 주간 일정 ====================

export const mockSchedule: WeeklySchedule = {
  weekStart: '2026-03-10',
  weekEnd: '2026-03-14',
  events: {
    월: [
      { time: '09:00', title: '마케팅팀 주간회의' },
      { time: '14:00', title: '고객 미팅' },
      { time: '16:00', title: '프로젝트 검토' },
    ],
    화: [
      { time: '10:00', title: '경영진 보고' },
      { time: '13:00', title: '팀 스탠드업' },
      { time: '15:30', title: '전략회의' },
    ],
    수: [
      { time: '09:30', title: '신규 프로젝트 킥오프' },
      { time: '11:00', title: 'R&D 미팅' },
      { time: '14:00', title: '고객 피드백 세션' },
    ],
    목: [
      { time: '10:00', title: '디자인 리뷰' },
      { time: '13:00', title: '분석팀 회의' },
      { time: '16:00', title: '출장 보고' },
    ],
    금: [
      { time: '09:00', title: '주간 회고' },
      { time: '11:00', title: '다음주 계획' },
      { time: '14:00', title: '팀 미팅' },
    ],
  },
};

// ==================== 프로젝트 현황 ====================

export const mockProjects: Project[] = [
  {
    id: '1',
    name: '웹사이트 리뉴얼',
    progress: 65,
    status: '진행중',
    owner: '김과장',
    startDate: '2026-01-15',
    dueDate: '2026-04-30',
    budget: 5000,
    spent: 3250,
  },
  {
    id: '2',
    name: '모바일 앱 개발',
    progress: 45,
    status: '진행중',
    owner: '이대리',
    startDate: '2026-02-01',
    dueDate: '2026-05-31',
    budget: 8000,
    spent: 3600,
  },
  {
    id: '3',
    name: '마케팅 캠페인',
    progress: 30,
    status: '준비중',
    owner: '박대리',
    startDate: '2026-03-01',
    dueDate: '2026-04-15',
    budget: 3000,
    spent: 900,
  },
  {
    id: '4',
    name: 'AI 분석 도구',
    progress: 80,
    status: '마무리',
    owner: '최팀장',
    startDate: '2025-11-01',
    dueDate: '2026-03-31',
    budget: 6000,
    spent: 5400,
  },
  {
    id: '5',
    name: '고객 포털 개선',
    progress: 55,
    status: '진행중',
    owner: '김과장',
    startDate: '2026-01-20',
    dueDate: '2026-05-20',
    budget: 4500,
    spent: 2475,
  },
  {
    id: '6',
    name: '데이터 센터 이전',
    progress: 20,
    status: '기획중',
    owner: '이대리',
    startDate: '2026-04-01',
    dueDate: '2026-07-31',
    budget: 10000,
    spent: 2000,
  },
];

// ==================== 매출 요약 ====================

export const mockRevenueSummary: RevenueSummary[] = [
  {
    label: '총 매출액',
    value: 45230000,
    unit: '원',
    color: 'blue',
  },
  {
    label: '거래 건수',
    value: 342,
    unit: '건',
    color: 'green',
  },
  {
    label: '평균 거래액',
    value: 132000,
    unit: '원',
    color: 'orange',
  },
  {
    label: '판매 상품 종류',
    value: 24,
    unit: '종',
    color: 'red',
  },
];

// ==================== 매출 데이터 ====================

export const mockSalesData: SalesData[] = [
  {
    date: '2026-03-01',
    product: '무선 이어폰',
    category: '전자기기',
    quantity: 15,
    unitPrice: 89000,
    totalSales: 1335000,
    region: '서울',
  },
  {
    date: '2026-03-01',
    product: '보조배터리',
    category: '전자기기',
    quantity: 32,
    unitPrice: 45000,
    totalSales: 1440000,
    region: '부산',
  },
  {
    date: '2026-03-02',
    product: '텀블러',
    category: '생활용품',
    quantity: 48,
    unitPrice: 25000,
    totalSales: 1200000,
    region: '서울',
  },
  {
    date: '2026-03-02',
    product: '블루투스 스피커',
    category: '전자기기',
    quantity: 12,
    unitPrice: 120000,
    totalSales: 1440000,
    region: '대구',
  },
  {
    date: '2026-03-03',
    product: '무선 충전기',
    category: '전자기기',
    quantity: 25,
    unitPrice: 55000,
    totalSales: 1375000,
    region: '서울',
  },
  {
    date: '2026-03-03',
    product: '에코백',
    category: '생활용품',
    quantity: 60,
    unitPrice: 18000,
    totalSales: 1080000,
    region: '부산',
  },
];

// ==================== 회의록 ====================

export const mockMeetingMinutes: MeetingMinutes = {
  id: '1',
  title: '마케팅팀 주간회의',
  date: '2026-03-10',
  attendees: ['최팀장', '김과장', '이대리', '박대리'],
  previousTopics: [
    '지난주 캠페인 성과: 클릭율 12% 증가',
    '고객 피드백 분석 완료',
    '경쟁사 동향 파악',
  ],
  actionItems: [
    '신규 마케팅 자료 작성 (이대리)',
    'SNS 포스팅 계획서 제출 (박대리)',
    'ROI 분석 리포트 (김과장)',
    '다음주 캠페인 최종 검토 (최팀장)',
  ],
  discussions: [
    'Q2 마케팅 예산 조정안 논의 → 승인',
    '새로운 타겟 오디언스 세분화 전략',
    '콘텐츠 마켓팅 강화 방안',
  ],
  nextMeetingDate: '2026-03-17',
};

// ==================== 월별 매출 데이터 (차트용) ====================

export const mockMonthlySalesChart = [
  { month: '1월', sales: 3200000 },
  { month: '2월', sales: 4100000 },
  { month: '3월', sales: 5230000 },
];

// ==================== 제품별 매출 데이터 (차트용) ====================

export const mockProductSalesChart = [
  { product: '무선 이어폰', sales: 1335000 },
  { product: '보조배터리', sales: 1440000 },
  { product: '블루투스 스피커', sales: 1440000 },
  { product: '무선 충전기', sales: 1375000 },
];
