import { DashboardProps } from '@/data/types';
import TodoCard from './cards/TodoCard';
import ScheduleCard from './cards/ScheduleCard';
import ProjectCard from './cards/ProjectCard';
import RevenueCard from './cards/RevenueCard';

/**
 * 메인 대시보드 컴포넌트
 * 할 일, 일정, 프로젝트, 매출 카드를 배치
 */
export default function Dashboard({
  tasks,
  schedule,
  projects,
  revenue,
}: DashboardProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* 페이지 패딩과 최대 너비 */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* 페이지 제목 */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            대시보드
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {new Date().toLocaleDateString('ko-KR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 할 일 */}
          <div>
            <TodoCard tasks={tasks} />
          </div>

          {/* 일정 */}
          <div>
            <ScheduleCard schedule={schedule} />
          </div>

          {/* 프로젝트 */}
          <div>
            <ProjectCard projects={projects} />
          </div>

          {/* 매출 */}
          <div>
            <RevenueCard revenue={revenue} />
          </div>
        </div>

        {/* 하단 스페이서 */}
        <div className="mt-12" />
      </div>
    </main>
  );
}
