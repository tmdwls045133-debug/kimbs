# 🤖 김비서 (KimSecretary) - Next.js 대시보드

> 프리미염 웹 기반 업무 관리 대시보드 + Gemini AI 어시스턴트

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.3-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ 주요 기능

### 📊 대시보드
- **할 일 관리** - 우선순위별 작업 목록
- **주간 일정** - 요일별 스케줄 관리
- **프로젝트 현황** - 진행률 및 예산 추적
- **매출 요약** - 주요 지표 시각화

### 🤖 Gemini AI 어시스턴트
- **실시간 채팅** - Google Gemini Pro API 기반
- **메시지 히스토리** - 대화 기록 보관
- **자동 스크롤** - 최신 메시지 자동 표시
- **로딩 상태** - 대기 중 시각적 피드백

### 🎨 디자인
- **Glassomorphism** - 프리미엄 UI 스타일
- **다크/라이트 모드** - 테마 자동 전환
- **반응형 레이아웃** - 모바일~데스크톱 지원
- **6개 페이지** - 대시보드, 매출, 업무, 회의, 분석, 판매

## 🚀 빠른 시작

### 사전 요구사항
- Node.js 18+
- npm 또는 yarn
- Google Gemini API 키 ([여기서 발급](https://makersuite.google.com/app/apikey))

### 설치

```bash
# 1. 저장소 클론
git clone https://github.com/tmdwls045133-debug/kimbs.git
cd kimsecretary

# 2. 의존성 설치
npm install

# 3. 환경변수 설정
cp .env.example .env.local
# .env.local 파일에 Google Gemini API 키 입력
# NEXT_PUBLIC_GEMINI_API_KEY=YOUR_API_KEY_HERE

# 4. 개발 서버 실행
npm run dev
```

### 브라우저에서 접속
```
http://localhost:3000
```

## 📁 프로젝트 구조

```
kimsecretary/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root Layout
│   │   ├── page.tsx                # 메인 대시보드
│   │   ├── api/chat/route.ts       # Gemini API 라우트
│   │   ├── chart/                  # 매출 분석 페이지
│   │   ├── diagram/                # 업무 프로세스 페이지
│   │   ├── report/                 # 사이트 분석 페이지
│   │   ├── meeting/                # 회의록 페이지
│   │   ├── spreadsheet/            # 판매 데이터 페이지
│   │   └── globals.css             # 전역 스타일
│   │
│   ├── components/
│   │   ├── Header.tsx              # 네비게이션 + 테마 토글
│   │   ├── Dashboard.tsx           # 메인 레이아웃
│   │   ├── ThemeProvider.tsx       # 다크모드 관리
│   │   ├── GeminiChat.tsx          # AI 채팅 컴포넌트
│   │   └── cards/
│   │       ├── TodoCard.tsx        # 할 일 카드
│   │       ├── ScheduleCard.tsx    # 일정 카드
│   │       ├── ProjectCard.tsx     # 프로젝트 카드
│   │       └── RevenueCard.tsx     # 매출 카드
│   │
│   ├── data/
│   │   ├── types.ts                # TypeScript 타입
│   │   ├── mockData.ts             # 더미 데이터
│   │   └── constants.ts            # 상수 및 색상
│   │
│   └── utils/
│       ├── format.ts               # 포맷팅 함수
│       └── theme.ts                # 테마 관리
│
├── public/                          # 정적 파일
├── .env.example                     # 환경변수 예시
├── .env.local                       # 로컬 환경변수 (Git 제외)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🔧 사용 기술

### Frontend
- **Next.js 14** - React 풀스택 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 CSS
- **React Hooks** - 상태 관리

### API & AI
- **Google Gemini Pro** - AI 모델
- **Next.js API Routes** - 백엔드 API

### 데이터
- **CSV** - 워크숍 참고 데이터
- **localStorage** - 클라이언트 상태 저장

## 📋 API 사용법

### Gemini 채팅 API

**요청:**
```bash
POST /api/chat
Content-Type: application/json

{
  "message": "Python으로 Hello World를 출력하는 방법은?"
}
```

**응답:**
```json
{
  "success": true,
  "message": "Python에서는 print() 함수를 사용합니다....."
}
```

## 🎨 디자인 특징

### Glassomorphism
- 반투명 배경 (`rgba`)
- Backdrop Blur 효과
- 세련된 그림자
- 그래디언트 배경

### 색상 팔레트
**라이트 모드:**
- 배경: `#ffffff`
- 강조: 파란색~보라색 그래디언트

**다크 모드:**
- 배경: `#0f0f23`
- 강조: 라이트 보라색 그래디언트

## 📱 반응형 디자인

| 기기 | 너비 | 레이아웃 |
|------|------|---------|
| 모바일 | < 768px | 1열 |
| 태블릿 | 768px ~ 1023px | 1열 |
| 데스크톱 | 1024px+ | 3열 |

## 🔒 환경변수 보안

- `.env.local` - 실제 API 키 (Git 제외)
- `.env.example` - 설정 가이드 (Git 포함)

`.env.local` 파일 생성:
```
NEXT_PUBLIC_GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
```

## 📈 성능

- ⚡ Nextjs 자동 최적화
- 🎯 TypeScript 타입 검사
- 🌓 다크모드 로컬스토리지 캐싱
- 📦 최소 번들 크기

## 🚀 배포

### Vercel (권장)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t kimsecretary .
docker run -p 3000:3000 kimsecretary
```

## 📝 라이선스

MIT License - [tmdwls045133](https://github.com/tmdwls045133-debug)

## 👤 작성자

- **GitHub:** [@tmdwls045133-debug](https://github.com/tmdwls045133-debug)
- **Email:** tmdwls045133@gmail.com

## 🙏 감사의 말

- [Google Gemini API](https://ai.google.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📞 지원

문제가 발생하면 [GitHub Issues](https://github.com/tmdwls045133-debug/kimbs/issues)에 보고해주세요.

---

**마지막 업데이트:** 2026-04-24  
**프로젝트 상태:** Active Development 🚀
