# 📊 김비서 (KimSecretary)

> 프리미엄 웹 기반 업무 관리 대시보드 시스템

---

## 🎯 프로젝트 개요

**김비서**는 업무 효율성을 높이기 위한 통합 대시보드 시스템으로, 할 일 관리, 일정 관리, 매출 분석, 프로세스 추적 등을 한 곳에서 관리할 수 있습니다.

### 핵심 특징
- ✨ **Glassomorphism 디자인** - 프리미엄한 UI/UX
- 🌓 **다크/라이트 모드** - localStorage 기반 테마 지속성
- 📱 **반응형 디자인** - 모든 디바이스 지원
- ⚡ **순수 HTML/CSS/JS** - 외부 프레임워크 의존도 최소화
- 🔄 **통합 네비게이션** - 6개 페이지 일관된 메뉴 시스템

---

## 🌟 주요 기능

### 1️⃣ **대시보드** (`dashboard.html`)
- 📋 **할 일 목록** - 우선순위별 작업 관리
- 📅 **주간 일정** - 요일별 스케줄 확인
- 📊 **프로젝트 현황** - 진행률 시각화
- 💰 **매출 요약** - 월별 매출 현황

### 2️⃣ **회의록** (`meeting-result.html`)
- 회의 정보 및 참석자
- 논의 내용 요약
- 액션 아이템 추적
- 📄 PDF 인쇄 기능

### 3️⃣ **매출 분석** (`chart.html`)
- 📈 **월별 매출 추이** - Line Chart
- 📊 **제품별 매출** - Bar Chart
- 🎯 **판매량 현황** - 상세 통계
- 💹 Canvas 기반 순수 차트 구현

### 4️⃣ **업무 프로세스** (`diagram.html`)
- 🔄 **5단계 프로세스 흐름** - 기획 → 제작 → 검토 → 배포 → 분석
- 📝 **단계별 설명** - 각 단계의 상세 내용
- 🎨 **SVG 그래픽** - 벡터 기반 다이어그램
- 🌓 **다크모드 지원** - 모든 색상 자동 조정

### 5️⃣ **사이트 분석** (`report.html`)
- 웹사이트 구조 분석
- 기술 스택 분석
- UX/디자인 평가
- 개선 권장사항

### 6️⃣ **판매 데이터** (`spreadsheet-report.html`)
- 📊 **구글 스프레드시트 연동** - 실시간 데이터
- 📈 **트렌드 분석** - Chart.js 기반 시각화
- 💹 **주요 지표** - 카드 형식 요약
- 📊 **다중 차트** - 라인, 바, 도넛 차트

---

## 📁 파일 구조

```
워크숍-실습/
├── 📄 CLAUDE.md                    # 프로젝트 설명서 (이 파일)
├── 📄 index.html                   # 메인 페이지 (dashboard.html 로드)
├── 📄 dashboard.html               # 메인 대시보드
├── 📄 meeting-result.html          # 회의 결과
├── 📄 chart.html                   # 매출 차트
├── 📄 diagram.html                 # 업무 프로세스
├── 📄 report.html                  # 사이트 분석
├── 📄 spreadsheet-report.html      # 판매 데이터
├── 📄 diagram.svg                  # SVG 다이어그램 (백업)
│
├── 📁 김비서-데이터/
│   ├── 매출데이터.csv              # 월별 매출 통계
│   ├── 업무목록.csv                # 작업 항목
│   ├── 프로젝트현황.csv            # 프로젝트 진행률
│   ├── 주간일정.txt                # 주간 스케줄
│   └── 회의록.txt                  # 회의 기록
│
└── 📁 정리해줘/
    ├── 1_보고서/
    │   ├── 보고서_초안.txt
    │   ├── 보고서_수정.txt
    │   └── 보고서_최종.txt
    ├── 2_메모/
    │   ├── 메모.txt
    │   ├── 기획_메모.txt
    │   ├── 아이디어_메모_0301.txt
    │   ├── 피드백.txt
    │   └── 나중에정리.txt
    ├── 3_업무/
    │   ├── 할일.txt
    │   ├── 영수증_정리.txt
    │   └── 회의실.txt
    └── 4_기타/
        ├── temp.csv
        ├── 링크모음.txt
        └── 무제.txt
```

---

## 🛠️ 사용 기술

### Frontend
- **HTML5** - 시멘틱 마크업
- **CSS3** - 고급 스타일링
  - Grid & Flexbox 레이아웃
  - CSS Variables (커스텀 속성)
  - Gradient & 그림자 효과
  - Backdrop Filter (Glassomorphism)
  - Media Queries (반응형)
- **Vanilla JavaScript** - 프레임워크 미사용
  - Canvas API (차트 렌더링)
  - localStorage (테마 지속성)
  - DOM 조작 및 이벤트 처리

### 라이브러리 (선택적)
- **Chart.js** - spreadsheet-report.html에서만 사용

### 데이터
- **CSV** - 매출 및 업무 데이터
- **Google Sheets** - 클라우드 기반 데이터 소스
- **localStorage** - 클라이언트 사이드 상태 관리

---

## 🎨 디자인 특징

### Glassomorphism 스타일
- 반투명 배경 (`rgba`)
- Backdrop Blur 효과 (`backdrop-filter: blur(10px)`)
- 세련된 그림자 (`box-shadow`)
- 그래디언트 배경 (`linear-gradient`)

### 색상 팔레트
**Light Mode:**
- 배경: `#ffffff` (흰색)
- 텍스트: `#1a1a2e` (진한 파란색)
- 강조: `#667eea` ~ `#764ba2` (자주색 그래디언트)

**Dark Mode:**
- 배경: `#0f0f23` (검은색)
- 텍스트: `#e0e0e0` (밝은 회색)
- 강조: `#a78bfa` ~ `#c084fc` (라이트 보라색)

### 타이포그래피
- 주 폰트: Segoe UI, Tahoma, Geneva
- 제목: 32px, 700 weight, 그래디언트 색상
- 본문: 14px, 400 weight, 변수 색상

---

## 🚀 시작하기

### 로컬 실행
```bash
# 1. 저장소 클론
git clone https://github.com/tmdwls045133-debug/kimbs.git

# 2. 프로젝트 폴더로 이동
cd kimbs

# 3. 로컬 서버 실행 (Python)
python -m http.server 8000

# 4. 브라우저에서 접속
# http://localhost:8000
```

### GitHub Pages 배포
1. 리포지토리 Settings 접속
2. Pages 섹션에서 `main` 또는 `master` 브랜치 선택
3. 자동 배포됨 (https://tmdwls045133-debug.github.io/kimbs)

---

## 📊 주요 통계

- **총 HTML 페이지:** 6개
- **총 데이터 파일:** 29개
- **CSS 변수:** 8개 (light) + 8개 (dark)
- **JavaScript 함수:** 50+개
- **응답형 breakpoint:** 768px (tablet)

---

## 🔧 개발자 정보

### 최신 업데이트
- **날짜:** 2026-04-09
- **마지막 커밋:** Initial commit - Upload workshop practice files
- **브랜치:** master

### 주요 개선 사항
✅ Glassomorphism UI 적용
✅ 다크/라이트 모드 전환
✅ 통합 네비게이션 (6개 페이지)
✅ 캔버스 기반 차트
✅ 구글 시트 데이터 연동
✅ 반응형 디자인

---

## 📝 라이선스

Private Project - tmdwls045133@gmail.com

---

## 📧 연락처

**이메일:** tmdwls045133@gmail.com
**GitHub:** https://github.com/tmdwls045133-debug

---

**마지막 수정:** 2026-04-09
**프로젝트 상태:** Active Development 🚀
