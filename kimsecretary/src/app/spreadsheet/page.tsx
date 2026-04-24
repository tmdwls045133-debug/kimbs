/**
 * 판매 데이터 페이지
 * 구글 스프레드시트 연동 데이터 + 차트
 */
export default function SpreadsheetPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            📊 판매 데이터
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            구글 스프레드시트 연동 판매 데이터 및 트렌드 분석
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-xl p-6 text-white shadow-lg">
            <p className="text-sm font-medium opacity-90">총 거래액</p>
            <p className="text-3xl font-bold mt-2">분석 중...</p>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-emerald-600 dark:from-green-500 dark:to-emerald-700 rounded-xl p-6 text-white shadow-lg">
            <p className="text-sm font-medium opacity-90">거래 건수</p>
            <p className="text-3xl font-bold mt-2">분석 중...</p>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-700 rounded-xl p-6 text-white shadow-lg">
            <p className="text-sm font-medium opacity-90">평균 거래액</p>
            <p className="text-3xl font-bold mt-2">분석 중...</p>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            데이터 테이블
          </h2>
          <p className="text-gray-600 dark:text-gray-400">판매 데이터 테이블 (구현 예정)</p>
        </div>
      </div>
    </main>
  );
}
