import { RevenueSummary } from '@/data/types';
import { REVENUE_GRADIENTS } from '@/data/constants';

interface RevenueCardProps {
  revenue: RevenueSummary[];
}

/**
 * 매출 요약 카드 컴포넌트
 */
export default function RevenueCard({ revenue }: RevenueCardProps) {
  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      {/* 헤더 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          💰 매출 요약
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          이번 주 주요 지표
        </p>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-2 gap-4">
        {revenue.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${
              REVENUE_GRADIENTS[item.color]
            } rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div>
              <p className="text-sm font-medium opacity-90">{item.label}</p>
              <p className="text-2xl font-bold mt-2">
                {item.value.toLocaleString('ko-KR')}
              </p>
              <p className="text-xs opacity-75 mt-1">{item.unit}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 노트 */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          2026년 3월 집계 기준
        </p>
      </div>
    </div>
  );
}
