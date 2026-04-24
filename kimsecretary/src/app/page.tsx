import Dashboard from '@/components/Dashboard';
import {
  mockTasks,
  mockSchedule,
  mockProjects,
  mockRevenueSummary,
} from '@/data/mockData';

/**
 * 메인 대시보드 페이지
 */
export default function Home() {
  return (
    <Dashboard
      tasks={mockTasks}
      schedule={mockSchedule}
      projects={mockProjects}
      revenue={mockRevenueSummary}
    />
  );
}
