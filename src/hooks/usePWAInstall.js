import { useState, useEffect, useCallback } from 'react';

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect if already installed / running in standalone mode
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true ||
        document.referrer.includes('android-app://');
      setIsInstalled(isStandaloneMode);
    };

    checkStandalone();

    // Detect iOS
    const ua = window.navigator.userAgent.toLowerCase();
    const isAppleDevice =
      /iphone|ipad|ipod/.test(ua) ||
      (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
    setIsIOS(isAppleDevice);

    // Detect Android
    const isAndroidDevice = /android/.test(ua);
    setIsAndroid(isAndroidDevice);

    // Capture Android / Chrome beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      setDeferredPrompt(e);
    };

    // Capture appinstalled event
    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsInstalled(true);
      setShowIOSModal(false);
      console.log('[PWA] Aplicação instalada com sucesso!');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    // If Android / Desktop Chrome has a deferred prompt ready
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('[PWA] O utilizador aceitou a instalação.');
          setDeferredPrompt(null);
        } else {
          console.log('[PWA] O utilizador dispensou a instalação.');
        }
      } catch (err) {
        console.warn('[PWA] Erro ao disparar prompt de instalação:', err);
      }
      return;
    }

    // If on iOS, open the step-by-step iOS guide modal
    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    // Fallback: open guidance modal
    setShowIOSModal(true);
  }, [deferredPrompt, isIOS]);

  return {
    isInstalled,
    isIOS,
    isAndroid,
    hasDeferredPrompt: !!deferredPrompt,
    canInstall: !isInstalled,
    showIOSModal,
    setShowIOSModal,
    promptInstall
  };
}
