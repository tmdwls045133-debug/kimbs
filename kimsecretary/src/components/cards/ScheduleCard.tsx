import { WeeklySchedule } from '@/data/types';
import { formatWeekRange } from '@/utils/format';

interface ScheduleCardProps {
  schedule: WeeklySchedule;
}

/**
 * 주간 일정 카드 컴포넌트
 */
export default function ScheduleCard({ schedule }: ScheduleCardProps) {
  const days = ['월', '화', '수', '목', '금'] as const;
  const totalEvents = days.reduce(
    (sum, day) => sum + (schedule.events[day]?.length || 0),
    0
  );

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      {/* 헤더 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          📅 주간 일정
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {formatWeekRange(schedule.weekStart, schedule.weekEnd)}
        </p>
      </div>

      {/* 요일별 일정 */}
      <div className="grid grid-cols-5 gap-3">
        {days.map((day) => {
          const dayEvents = schedule.events[day] || [];

          return (
            <div
              key={day}
              className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
            >
              {/* 요일 헤더 */}
              <div className="mb-3 pb-2 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  {day}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {dayEvents.length}개
                </p>
              </div>

              {/* 일정 목록 */}
              <div className="space-y-2">
                {dayEvents.slice(0, 3).map((event, idx) => (
                  <div key={idx} className="text-xs">
                    <p className="font-semibold text-blue-600 dark:text-blue-400">
                      {event.time}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 truncate">
                      {event.title}
                    </p>
                  </div>
                ))}

                {dayEvents.length > 3 && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 pt-1">
                    +{dayEvents.length - 3}개
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 하단 정보 */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          이번 주 총 {totalEvents}개 스케줄
        </p>
      </div>
    </div>
  );
}
