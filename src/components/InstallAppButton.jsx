import React from 'react';
import { Smartphone, Download } from 'lucide-react';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import InstallAppModal from './InstallAppModal';

export default function InstallAppButton({ tab, variant = 'button' }) {
  const {
    isInstalled,
    isIOS,
    isAndroid,
    hasDeferredPrompt,
    showIOSModal,
    setShowIOSModal,
    promptInstall
  } = usePWAInstall();

  // If already installed, don't show install buttons
  if (isInstalled) return null;

  return (
    <>
      {variant === 'button' ? (
        <button
          onClick={promptInstall}
          className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-2xl backdrop-blur-xl border text-xs sm:text-sm font-semibold hover:shadow-md active:scale-95 transition-all ${
            tab === 'drinks'
              ? 'bg-amber-500/15 border-amber-500/40 text-amber-200 hover:bg-amber-500/25 shadow-sm shadow-amber-500/10'
              : 'bg-white/80 border-orange-500/30 text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:border-orange-500/50'
          }`}
          title="Instalar aplicação no telemóvel (iOS e Android)"
        >
          <span
            className={`w-6 h-6 rounded-lg flex items-center justify-center text-white shadow-sm ${
              tab === 'drinks'
                ? 'bg-gradient-to-tr from-amber-400 to-amber-600 shadow-amber-500/25 text-black'
                : 'bg-gradient-to-tr from-amber-500 to-orange-500 shadow-orange-500/25 text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 stroke-[2.2]" />
          </span>
          <span className="hidden xs:inline">Instalar</span>
          <span className="xs:hidden">App</span>
        </button>
      ) : (
        /* Floating mini banner for mobile */
        <div
          onClick={promptInstall}
          className="cursor-pointer flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#14121d]/95 backdrop-blur-xl border border-amber-500/35 text-white shadow-xl shadow-amber-950/30 active:scale-98 transition-all"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold shrink-0 shadow-md shadow-amber-500/30">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                Instalar Aplicação
                <span className="px-1.5 py-0.2 rounded text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                  Grátis
                </span>
              </div>
              <div className="text-[11px] text-white/60">
                Acede em ecrã total no teu telemóvel
              </div>
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-xl bg-amber-500 text-black text-xs font-bold shrink-0 shadow-sm hover:bg-amber-400">
            Instalar
          </button>
        </div>
      )}

      {/* iOS / Fallback Guide Modal */}
      <InstallAppModal
        isOpen={showIOSModal}
        onClose={() => setShowIOSModal(false)}
        isIOS={isIOS}
        isAndroid={isAndroid}
        hasDeferredPrompt={hasDeferredPrompt}
        onInstallDirect={() => {
          promptInstall();
          setShowIOSModal(false);
        }}
      />
    </>
  );
}
