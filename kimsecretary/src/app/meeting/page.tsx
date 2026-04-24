/**
 * 회의록 페이지
 * 회의 정보, 참석자, 논의 내용, 액션 아이템
 */
export default function MeetingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            📋 회의록
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            주간 회의 기록 및 액션 아이템 추적
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              마케팅팀 주간회의
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  참석자
                </h3>
                <p className="text-gray-600 dark:text-gray-400">회의 내용 (구현 예정)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  논의 사항
                </h3>
                <p className="text-gray-600 dark:text-gray-400">회의 내용 (구현 예정)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  액션 아이템
                </h3>
                <p className="text-gray-600 dark:text-gray-400">회의 내용 (구현 예정)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
