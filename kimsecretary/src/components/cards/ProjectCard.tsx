import { Project } from '@/data/types';
import { PROJECT_STATUS_COLORS } from '@/data/constants';
import { formatProgress, getBudgetUtilization } from '@/utils/format';

interface ProjectCardProps {
  projects: Project[];
}

/**
 * 프로젝트 진행 상황 카드 컴포넌트
 */
export default function ProjectCard({ projects }: ProjectCardProps) {
  const activeProjects = projects.filter(
    (p) => p.status !== '완료' && p.status !== '기획중'
  );

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      {/* 헤더 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🎯 프로젝트 현황
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {activeProjects.length}개 진행 중
        </p>
      </div>

      {/* 프로젝트 목록 */}
      <div className="space-y-4">
        {activeProjects.map((project) => {
          const utilization = getBudgetUtilization(
            project.budget,
            project.spent
          );

          return (
            <div
              key={project.id}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {/* 프로젝트 헤더 */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    담당: {project.owner}
                  </p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    PROJECT_STATUS_COLORS[project.status]
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* 진행률 바 */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    진행률
                  </span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {formatProgress(project.progress)}
                  </span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* 예산 정보 */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">예산</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {project.budget.toLocaleString('ko-KR')}만원
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">집행</p>
                  <p
                    className={`font-semibold ${
                      utilization > 80
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {project.spent.toLocaleString('ko-KR')}만원
                  </p>
                </div>
              </div>

              {/* 집행률 */}
              <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    집행률
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      utilization > 80
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {utilization}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
