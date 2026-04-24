/**
 * 업무 프로세스 페이지
 * 5단계 프로세스 흐름도
 */
export default function DiagramPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🔄 업무 프로세스
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            5단계 업무 프로세스 흐름: 기획 → 제작 → 검토 → 배포 → 분석
          </p>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg min-h-96 flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400">프로세스 다이어그램 (구현 예정)</p>
        </div>
      </div>
    </main>
  );
}
