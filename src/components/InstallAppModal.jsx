import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Share2,
  PlusSquare,
  Sparkles,
  Smartphone,
  Download,
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function InstallAppModal({
  isOpen,
  onClose,
  isIOS,
  isAndroid,
  hasDeferredPrompt,
  onInstallDirect
}) {
  // If device is iOS default to 'ios', else 'android'
  const [activeTab, setActiveTab] = useState(isIOS ? 'ios' : 'android');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-[#0f0d17] border border-amber-500/30 rounded-3xl p-5 sm:p-6 text-white shadow-2xl shadow-amber-950/40 overflow-hidden"
        >
          {/* Ambient Gold Glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-44 h-44 bg-purple-600/15 rounded-full blur-3xl" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all active:scale-95"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header with App Icon */}
          <div className="flex items-center gap-3.5 mb-5">
            <div className="relative">
              <img
                src="./icons/icon-192.png"
                alt="Abana o Jantar"
                className="w-14 h-14 rounded-2xl border border-amber-500/40 shadow-lg shadow-amber-900/30 object-cover"
                onError={(e) => {
                  e.currentTarget.src = './favicon.png';
                }}
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border border-black"></span>
              </span>
            </div>
            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-1">
                <Sparkles className="w-2.5 h-2.5" />
                App Oficial
              </div>
              <h2 className="text-lg font-bold font-heading text-white leading-tight">
                Instalar no Telemóvel
              </h2>
              <p className="text-xs text-white/60">
                Experiência de ecrã inteiro e offline
              </p>
            </div>
          </div>

          {/* Device Tabs */}
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-black/40 border border-white/10 rounded-2xl mb-5">
            <button
              onClick={() => setActiveTab('ios')}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'ios'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🍏</span> iPhone / iPad
            </button>
            <button
              onClick={() => setActiveTab('android')}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'android'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🤖</span> Android
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'ios' ? (
            <div className="space-y-3.5 mb-5 text-left">
              <p className="text-xs text-white/80 leading-relaxed">
                No iOS (Safari), podes fixar a aplicação diretamente no teu ecrã inicial em 3 passos simples:
              </p>

              {/* Step 1 */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-300">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">1. Clica em Partilhar</div>
                  <div className="text-[11px] text-white/60 mt-0.5">
                    Na barra inferior do Safari, clica no ícone de partilha (o quadrado com a seta para cima ⎋).
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-300">
                  <PlusSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">2. "Ecrã Principal"</div>
                  <div className="text-[11px] text-white/60 mt-0.5">
                    Desliza para baixo nas opções e seleciona <strong>"Adicionar ao Ecrã Principal"</strong>.
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-300">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">3. Confirma em "Adicionar"</div>
                  <div className="text-[11px] text-white/60 mt-0.5">
                    Toca em "Adicionar" no topo direito. O ícone surgirá junto às tuas outras aplicações.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3.5 mb-5 text-left">
              {hasDeferredPrompt ? (
                <div>
                  <p className="text-xs text-white/80 leading-relaxed mb-4">
                    O teu telemóvel Android suporta instalação nativa com 1 toque.
                  </p>
                  <button
                    onClick={onInstallDirect}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Instalar Agora no Android</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-white/80 leading-relaxed">
                    Para instalar no Android através do Google Chrome ou Samsung Internet:
                  </p>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-300 font-bold text-xs">
                      ⋮
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">1. Abre o Menu (3 Pontos)</div>
                      <div className="text-[11px] text-white/60 mt-0.5">
                        Toca no menu dos 3 pontos no topo direito do navegador.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-300">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">2. "Instalar Aplicação"</div>
                      <div className="text-[11px] text-white/60 mt-0.5">
                        Toca em <strong>"Instalar aplicação"</strong> ou <strong>"Adicionar ao ecrã inicial"</strong>.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Benefits pills */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 mb-5">
            <div className="text-center p-2 rounded-xl bg-white/[0.03]">
              <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="text-[10px] text-white/70 block font-medium">Ultra Rápido</span>
            </div>
            <div className="text-center p-2 rounded-xl bg-white/[0.03]">
              <Smartphone className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="text-[10px] text-white/70 block font-medium">Ecrã Total</span>
            </div>
            <div className="text-center p-2 rounded-xl bg-white/[0.03]">
              <ShieldCheck className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="text-[10px] text-white/70 block font-medium">Modo Offline</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white/90 hover:text-white transition-all active:scale-98"
          >
            Entendido
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
