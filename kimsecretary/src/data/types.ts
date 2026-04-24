/**
 * 김비서 대시보드 - TypeScript 타입 정의
 */

// ==================== Union Types ====================

export type Priority = '높음' | '보통' | '낮음';
export type TaskStatus = '진행중' | '대기' | '완료';
export type ProjectStatus = '진행중' | '준비중' | '마무리' | '기획중';
export type RevenueColor = 'blue' | 'green' | 'orange' | 'red';
export type DayOfWeek = '월' | '화' | '수' | '목' | '금';

// ==================== Task (할 일) ====================

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  status: TaskStatus;
  assignee: string;
  dueDate: string; // YYYY-MM-DD
  category: string;
}

// ==================== Schedule (일정) ====================

export interface ScheduleEvent {
  time: string; // HH:MM
  title: string;
}

export interface WeeklySchedule {
  weekStart: string; // YYYY-MM-DD
  weekEnd: string;   // YYYY-MM-DD
  events: Record<DayOfWeek, ScheduleEvent[]>;
}

// ==================== Project (프로젝트) ====================

export interface Project {
  id: string;
  name: string;
  progress: number; // 0-100
  status: ProjectStatus;
  owner: string;
  startDate: string; // YYYY-MM-DD
  dueDate: string;   // YYYY-MM-DD
  budget: number;    // 만원
  spent: number;     // 만원
}

// ==================== Revenue (매출) ====================

export interface RevenueSummary {
  label: string;
  value: number;
  unit: string;
  color: RevenueColor;
}

export interface SalesData {
  date: string;     // YYYY-MM-DD
  product: string;
  category: '전자기기' | '생활용품';
  quantity: number;
  unitPrice: number;
  totalSales: number;
  region: '서울' | '부산' | '대구';
}

// ==================== Meeting (회의) ====================

export interface MeetingMinutes {
  id: string;
  title: string;
  date: string;      // YYYY-MM-DD
  attendees: string[];
  previousTopics: string[];
  actionItems: string[];
  discussions: string[];
  nextMeetingDate: string;
}

// ==================== Dashboard Props ====================

export interface DashboardProps {
  tasks: Task[];
  schedule: WeeklySchedule;
  projects: Project[];
  revenue: RevenueSummary[];
}
