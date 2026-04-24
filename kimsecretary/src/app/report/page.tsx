/**
 * 사이트 분석 페이지
 * 웹사이트 구조, 기술 스택, UX/디자인 평가
 */
export default function ReportPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            📑 사이트 분석
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            웹사이트 구조, 기술 스택, UX/디자인 평가
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              웹사이트 구조
            </h2>
            <p className="text-gray-600 dark:text-gray-400">분석 콘텐츠 (구현 예정)</p>
          </div>

          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              기술 스택 분석
            </h2>
            <p className="text-gray-600 dark:text-gray-400">분석 콘텐츠 (구현 예정)</p>
          </div>

          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              UX/디자인 평가
            </h2>
            <p className="text-gray-600 dark:text-gray-400">분석 콘텐츠 (구현 예정)</p>
          </div>
        </div>
      </div>
    </main>
  );
}
