// Service worker registration utility
export function registerServiceWorker() {
  if (typeof window === 'undefined') return;

  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    window.addEventListener('load', () => {
      // Determine base path for sw.js
      const swUrl = `${import.meta.env.BASE_URL || './'}sw.js`.replace(/\/\//g, '/');

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('[PWA] Service Worker registrado com sucesso:', registration.scope);

          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
              installingWorker.addEventListener('statechange', () => {
                if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('[PWA] Nova versão disponível em cache.');
                }
              });
            }
          });
        })
        .catch((error) => {
          console.warn('[PWA] Erro ao registar Service Worker:', error);
        });
    });
  }
}
