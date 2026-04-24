/**
 * 매출 분석 페이지
 * 월별 매출 추이 및 제품별 매출 차트
 */
export default function ChartPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            📈 매출 분석
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            월별 매출 추이 및 제품별 판매 현황
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg h-64 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">월별 매출 차트 (구현 예정)</p>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg h-64 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">제품별 매출 차트 (구현 예정)</p>
          </div>
        </div>
      </div>
    </main>
  );
}
