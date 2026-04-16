// 📦 김비서 Service Worker
// 오프라인 지원, 캐싱, 동기화

const CACHE_NAME = 'kimbs-v1';
const RUNTIME_CACHE = 'kimbs-runtime-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/meeting-result.html',
  '/chart.html',
  '/diagram.html',
  '/report.html',
  '/spreadsheet-report.html',
  '/manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js'
];

// ===== 설치 단계 =====
self.addEventListener('install', (event) => {
  console.log('[Service Worker] 설치 중...');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] 캐시 생성:', CACHE_NAME);
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[Service Worker] 일부 파일 캐시 실패:', err);
        // 일부 파일이 없어도 계속 진행
        return Promise.resolve();
      });
    })
  );

  // 새 서비스 워커가 즉시 활성화되도록
  self.skipWaiting();
});

// ===== 활성화 단계 =====
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] 활성화 중...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[Service Worker] 오래된 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  // 대기 중인 클라이언트에 제어권 즉시 주기
  return self.clients.claim();
});

// ===== 요청 처리 =====
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 외부 API 요청은 네트워크 우선
  if (url.origin !== location.origin) {
    event.respondWith(networkFirst(request));
    return;
  }

  // 동적 콘텐츠 (스프레드시트 데이터)는 네트워크 우선
  if (request.url.includes('google') || request.url.includes('api')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // HTML 파일은 네트워크 우선, 실패 시 캐시
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  // 정적 자산은 캐시 우선
  event.respondWith(cacheFirst(request));
});

// ===== 캐시 전략: 캐시 우선 =====
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);

    // 성공한 응답만 캐시
    if (response && response.status === 200) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.warn('[Service Worker] Fetch 실패:', request.url, error);

    // 오프라인 폴백 페이지
    if (request.mode === 'navigate') {
      return caches.match('/index.html');
    }

    throw error;
  }
}

// ===== 캐시 전략: 네트워크 우선 =====
async function networkFirst(request) {
  try {
    const response = await fetch(request);

    // 성공한 응답 캐시
    if (response && response.status === 200) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.warn('[Service Worker] 네트워크 실패, 캐시에서 제공:', request.url);

    // 캐시에서 제공
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }

    // 모두 실패하면 오프라인 페이지
    if (request.mode === 'navigate') {
      return caches.match('/index.html');
    }

    throw error;
  }
}

// ===== 백그라운드 동기화 =====
self.addEventListener('sync', (event) => {
  console.log('[Service Worker] 백그라운드 동기화:', event.tag);

  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  try {
    // 스프레드시트 데이터 새로고침
    const response = await fetch('/spreadsheet-report.html');
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put('/spreadsheet-report.html', response);
      console.log('[Service Worker] 데이터 동기화 완료');
    }
  } catch (error) {
    console.error('[Service Worker] 동기화 실패:', error);
  }
}

// ===== 푸시 알림 =====
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : '새 알림이 있습니다',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%23667eea" width="192" height="192"/><text x="50%" y="50%" font-size="100" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">📊</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%23667eea" width="192" height="192"/><text x="50%" y="50%" font-size="100" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">📊</text></svg>',
    tag: 'kimbs-notification',
    requireInteraction: false,
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="%23667eea" width="96" height="96"/><text x="50%" y="50%" font-size="50" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">K</text></svg>'
  };

  event.waitUntil(
    self.registration.showNotification('📊 김비서', options)
  );
});

// ===== 알림 클릭 처리 =====
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // 이미 열려있는 창이 있으면 포커스
      for (let i = 0; i < clientList.length; i++) {
        if (clientList[i].url === '/' && 'focus' in clientList[i]) {
          return clientList[i].focus();
        }
      }
      // 없으면 새 창 열기
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

// ===== 메시지 처리 (클라이언트 통신) =====
self.addEventListener('message', (event) => {
  console.log('[Service Worker] 메시지 받음:', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME);
    caches.delete(RUNTIME_CACHE);
  }
});

console.log('[Service Worker] 로드 완료');
