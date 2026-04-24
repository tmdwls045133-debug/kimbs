import { Task } from '@/data/types';
import { PRIORITY_COLORS, STATUS_COLORS } from '@/data/constants';
import { formatDateShort, getDaysRemaining } from '@/utils/format';

interface TodoCardProps {
  tasks: Task[];
}

/**
 * 할 일 목록 카드 컴포넌트
 */
export default function TodoCard({ tasks }: TodoCardProps) {
  const incompleteTasks = tasks.filter((task) => task.status !== '완료');

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      {/* 헤더 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          📋 할 일
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {incompleteTasks.length}개 진행 중
        </p>
      </div>

      {/* 할 일 목록 */}
      <div className="space-y-3">
        {incompleteTasks.slice(0, 5).map((task) => {
          const daysLeft = getDaysRemaining(task.dueDate);
          const urgency =
            daysLeft <= 3 ? 'urgent' : daysLeft <= 7 ? 'soon' : 'normal';

          return (
            <div
              key={task.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {/* 체크박스 */}
              <input
                type="checkbox"
                defaultChecked={task.status === '완료'}
                className="w-5 h-5 mt-1 rounded border-gray-300 text-blue-600 cursor-pointer"
              />

              {/* 내용 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {task.title}
                  </h3>

                  {/* 우선순위 배지 */}
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                      PRIORITY_COLORS[task.priority].badge
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                {/* 메타 정보 */}
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <span>{task.assignee}</span>
                  <span>•</span>
                  <span className={urgency === 'urgent' ? 'text-red-600 dark:text-red-400 font-semibold' : ''}>
                    {daysLeft <= 0 ? '마감됨' : `${daysLeft}일 남음`}
                  </span>
                </div>
              </div>

              {/* 상태 배지 */}
              <span
                className={`text-xs font-medium px-2 py-1 rounded whitespace-nowrap ${
                  STATUS_COLORS[task.status]
                }`}
              >
                {task.status}
              </span>
            </div>
          );
        })}
      </div>

      {/* 더보기 링크 */}
      {incompleteTasks.length > 5 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            +{incompleteTasks.length - 5}개 더보기
          </p>
        </div>
      )}
    </div>
  );
}
