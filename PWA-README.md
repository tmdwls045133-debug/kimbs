# 📱 김비서 PWA 설정 가이드

**Progressive Web App (PWA)** - 웹과 앱의 장점을 결합한 기술

---

## 🎯 PWA 기능

✅ **오프라인 지원** - 인터넷 없이도 사용 가능  
✅ **설치 가능** - 홈화면에 앱처럼 추가  
✅ **푸시 알림** - 중요 알림 받기  
✅ **빠른 로딩** - 캐시된 리소스로 즉시 로드  
✅ **반응형** - 모든 기기에서 완벽하게 작동  

---

## 📱 설치 방법

### 🍎 **iPhone/iPad (Safari)**

1. Safari에서 https://tmdwls045133-debug.github.io/kimbs 접속
2. 공유 버튼 (↗️) 클릭
3. "홈 화면에 추가" 선택
4. 앱 이름: "김비서" 확인 후 추가

### 🤖 **Android (Chrome)**

1. Chrome에서 https://tmdwls045133-debug.github.io/kimbs 접속
2. 메뉴 (⋮) → "설치" 또는 "앱 설치"
3. 확인 버튼 클릭
4. 앱이 자동으로 설치됨

### 💻 **Windows/Mac (Chrome/Edge)**

1. 브라우저에서 https://tmdwls045133-debug.github.io/kimbs 접속
2. 주소창의 설치 아이콘 (⬇️ 또는 💾) 클릭
3. "설치" 버튼 클릭
4. 스타트 메뉴/응용 프로그램에 추가됨

---

## 🔧 기술 구성

### 파일 구조

```
워크숍-실습/
├── manifest.json         # 앱 메타데이터
├── service-worker.js     # 오프라인 캐싱 & 동기화
├── index.html           # PWA 등록 코드 포함
├── dashboard.html
├── meeting-result.html
├── chart.html
├── diagram.html
├── report.html
└── spreadsheet-report.html
```

### `manifest.json`

앱 이름, 아이콘, 테마 색상, 시작 페이지를 정의합니다.

```json
{
  "name": "김비서 업무 관리 대시보드",
  "short_name": "김비서",
  "start_url": "/index.html",
  "display": "standalone",
  "theme_color": "#667eea",
  "icons": [...]
}
```

### `service-worker.js`

오프라인 지원 및 성능 최적화를 담당합니다:

- **캐시 전략**
  - 정적 자산: 캐시 우선 (빠른 로딩)
  - HTML 페이지: 네트워크 우선 (최신 내용)
  - 외부 API: 네트워크 우선 (실시간 데이터)

- **오프라인 폴백**
  - 인터넷 없을 때 캐시된 페이지 표시
  - 자동으로 온라인 복귀 시 동기화

- **백그라운드 동기화**
  - 온라인 복귀 시 데이터 자동 갱신

- **푸시 알림**
  - 서버에서 알림 수신 가능

---

## 🚀 기능 활성화

### 1️⃣ Service Worker 자동 등록

모든 HTML 파일에 다음 코드가 포함되어 있습니다:

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#667eea">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="김비서">
```

### 2️⃣ JavaScript 초기화

페이지 로드 시 자동으로:

```javascript
// Service Worker 등록
navigator.serviceWorker.register('/service-worker.js')

// 앱 설치 프롬프트 준비
beforeinstallprompt 이벤트 감지

// 업데이트 감지 후 새로고침
controllerchange 이벤트 감시
```

### 3️⃣ 캐싱 동작

**첫 방문:**
1. Service Worker 설치
2. 핵심 파일 캐싱
3. 앱 설치 프롬프트 표시

**재방문:**
1. 캐시에서 로드 (초고속)
2. 백그라운드에서 최신 버전 확인
3. 업데이트 있으면 알림

---

## 📊 성능 지표

PWA 검증 도구로 확인:

```bash
# Lighthouse 분석 (Chrome DevTools)
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
- PWA: 90+
```

---

## 🔐 보안

✅ **HTTPS 필수** - 모든 연결 암호화  
✅ **Content Security Policy** - XSS 방지  
✅ **Manifest Validation** - 올바른 형식 검증  
✅ **Service Worker Scope** - 권한 제한  

---

## 💡 고급 기능

### 앱 설치 프롬프트 프로그래밍

```javascript
// 설치 프롬프트 표시
window.installApp = function() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
    }
}
```

### 수동 캐시 관리

```javascript
// 캐시 초기화
navigator.serviceWorker.controller.postMessage({
    type: 'CLEAR_CACHE'
});
```

### 백그라운드 동기화

```javascript
// 인터넷 복귀 시 자동 동기화
if ('SyncManager' in window) {
    registration.sync.register('sync-data');
}
```

---

## 🧪 테스트 방법

### DevTools에서 확인

1. Chrome DevTools 열기 (F12)
2. **Application** 탭
3. **Manifest** - 앱 정보 확인
4. **Service Workers** - 등록 상태 확인
5. **Cache Storage** - 캐시된 파일 확인

### 오프라인 테스트

1. DevTools의 **Network** 탭
2. **Offline** 체크박스 활성화
3. 페이지가 정상 작동하는지 확인

### 캐시 업데이트 테스트

1. Service Worker 수정
2. 페이지 새로고침
3. DevTools에서 "Update on reload" 확인

---

## 📈 배포 체크리스트

- ✅ `manifest.json` 생성
- ✅ `service-worker.js` 생성
- ✅ 모든 HTML에 manifest 연결
- ✅ `theme-color` 메타 태그 추가
- ✅ `apple-mobile-web-app-*` 메타 태그 추가
- ✅ Service Worker 등록 코드 추가
- ✅ HTTPS 활성화 (GitHub Pages 자동)
- ✅ 앱 아이콘 설정
- ✅ 스플래시 화면 이미지 추가

---

## 🔗 참고 자료

- [MDN - Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev - PWA Checklist](https://web.dev/pwa-checklist/)
- [Manifest Specification](https://www.w3.org/TR/appmanifest/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

---

## ❓ FAQ

**Q. 오프라인에서도 모든 기능이 작동하나요?**  
A. 예, 캐시된 HTML/CSS/JS는 완벽하게 작동합니다. 하지만 구글 스프레드시트 데이터는 캐시된 버전만 보입니다.

**Q. 데이터는 안전한가요?**  
A. 모든 데이터는 브라우저의 localStorage/IndexedDB에 저장되며, 서버에는 저장되지 않습니다.

**Q. 앱 업데이트는 어떻게 되나요?**  
A. Service Worker가 자동으로 감지하고, 다음 방문 시 최신 버전을 로드합니다.

**Q. 저장 공간은 얼마나 필요한가요?**  
A. 캐시된 파일 + 로컬 데이터로 약 10-50MB 정도입니다.

---

**마지막 수정:** 2026-04-16  
**버전:** 1.0  
**상태:** ✅ PWA Ready
