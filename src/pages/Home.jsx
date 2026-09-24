import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChefHat,
  Navigation,
  Camera,
  Vibrate,
  Sparkles,
  User,
  ShoppingCart,
  UtensilsCrossed,
  Heart,
  Smartphone,
  ChevronRight,
  Martini
} from 'lucide-react';
import { useShake, requestMotionPermission } from '@/hooks/useShake';
import { useShoppingList } from '@/hooks/useShoppingList';
import { useFavorites } from '@/hooks/useFavorites';
import FridgeMode from '@/components/FridgeMode';
import RestaurantMode from '@/components/RestaurantMode';
import DishMode from '@/components/DishMode';
import PortugueseRecipes from '@/components/PortugueseRecipes';
import DrinksMode from '@/components/DrinksMode';
import FavoritesView from '@/components/FavoritesView';
import ShoppingList from '@/components/ShoppingList';

export default function Home() {
  const [activeMode, setActiveMode] = useState(null); // 'fridge' | 'restaurant' | null
  const [shaking, setShaking] = useState(false);
  const [tab, setTab] = useState('shake'); // 'shake' | 'dish' | 'portuguese' | 'favorites'
  const [picking, setPicking] = useState(false);
  const [shoppingOpen, setShoppingOpen] = useState(false);
  const [shakeTarget, setShakeTarget] = useState('fridge'); // 'fridge' | 'random' | 'restaurant'

  const { items: shoppingItems } = useShoppingList();
  const { favorites } = useFavorites();
  const shoppingCount = shoppingItems.filter((i) => !i.checked).length;

  // Auto request motion permission on first mobile interaction
  useEffect(() => {
    const handleFirstInteraction = async () => {
      await requestMotionPermission();
    };
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const pickMode = useCallback(async (forcedTarget = null) => {
    if (picking) return;
    setPicking(true);
    setShaking(true);
    try {
      if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
    } catch (e) {}

    // suspense before opening
    await new Promise((r) => setTimeout(r, 600));

    const target = forcedTarget || shakeTarget;
    let choice = target;
    if (target === 'random') {
      choice = Math.random() < 0.5 ? 'fridge' : 'restaurant';
    }

    setShaking(false);
    setPicking(false);
    setActiveMode(choice);
  }, [picking, shakeTarget]);

  const handleShake = useCallback(() => {
    if (!activeMode) {
      pickMode();
    }
  }, [activeMode, pickMode]);

  useShake(handleShake);

  const startShake = async () => {
    await requestMotionPermission();
    pickMode();
  };

  const closeMode = () => setActiveMode(null);

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${
      tab === 'drinks'
        ? 'bg-[#08070d] text-slate-100'
        : 'bg-gradient-to-br from-orange-50/90 via-amber-50/70 to-rose-50/80'
    }`}>
      {/* decorative ambient blurs */}
      <div className={`pointer-events-none absolute -top-28 -right-24 w-80 h-80 rounded-full blur-3xl transition-all duration-700 ${
        tab === 'drinks' ? 'bg-amber-600/15' : 'bg-orange-300/35'
      }`} />
      <div className={`pointer-events-none absolute -bottom-36 -left-20 w-96 h-96 rounded-full blur-3xl transition-all duration-700 ${
        tab === 'drinks' ? 'bg-purple-900/20' : 'bg-rose-300/30'
      }`} />

      <div className={`relative z-10 flex flex-col items-center min-h-screen px-3 sm:px-6 py-4 sm:py-8 transition-all duration-500 ${
        tab === 'drinks' ? 'max-w-6xl' : 'max-w-xl'
      } mx-auto`}>
        {/* top bar */}
        <div className="w-full flex justify-end gap-2 mb-3">
          <button
            onClick={() => setShoppingOpen(true)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl backdrop-blur-xl border text-xs sm:text-sm font-semibold hover:shadow-md active:scale-95 transition-all ${
              tab === 'drinks'
                ? 'bg-white/10 border-amber-500/30 text-amber-100 hover:bg-white/15'
                : 'bg-white/80 border-white/80 text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.04)]'
            }`}
          >
            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-white shadow-sm ${
              tab === 'drinks'
                ? 'bg-gradient-to-tr from-amber-500 to-amber-600 shadow-amber-500/25'
                : 'bg-gradient-to-tr from-amber-400 to-orange-500 shadow-orange-500/25'
            }`}>
              <ShoppingCart className="w-3.5 h-3.5 stroke-[2.2]" />
            </span>
            <span>Compras</span>
            {shoppingCount > 0 && (
              <span className={`px-1.5 py-0.5 rounded-full text-white text-[10px] font-extrabold leading-none shadow-sm ${
                tab === 'drinks' ? 'bg-amber-500 text-black' : 'bg-orange-500'
              }`}>
                {shoppingCount}
              </span>
            )}
          </button>

          <Link
            to="/perfil"
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl backdrop-blur-xl border text-xs sm:text-sm font-semibold hover:shadow-md active:scale-95 transition-all ${
              tab === 'drinks'
                ? 'bg-white/10 border-amber-500/30 text-amber-100 hover:bg-white/15'
                : 'bg-white/80 border-white/80 text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.04)]'
            }`}
          >
            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-white shadow-sm ${
              tab === 'drinks'
                ? 'bg-gradient-to-tr from-amber-600 to-amber-700 shadow-amber-600/25'
                : 'bg-gradient-to-tr from-orange-500 to-rose-500 shadow-rose-500/25'
            }`}>
              <User className="w-3.5 h-3.5 stroke-[2.2]" />
            </span>
            <span>Preferências</span>
          </Link>
        </div>

        {/* header (shown on food tabs, hidden on drinks which has its own luxury lounge facade) */}
        {tab !== 'drinks' && (
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm mb-4 ring-1 ring-orange-500/10">
              <Sparkles className="w-3.5 h-3.5 text-orange-500 fill-orange-400" />
              <span className="text-xs font-semibold text-foreground/80 tracking-tight">Decisões de jantar, sem stress</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Sem ideias para<br />o jantar?
            </h1>
            <p className="text-muted-foreground text-xs sm:text-sm mt-2.5 max-w-sm mx-auto leading-relaxed">
              Abana o telemóvel e eu decido por ti — uma receita com o que tens no frigorífico ou o restaurante mais próximo.
            </p>
          </div>
        )}

        {/* tabs / segmented control */}
        <div className={`w-full max-w-lg mx-auto mb-6 p-1 sm:p-1.5 rounded-2xl backdrop-blur-xl border shadow-inner flex gap-1 transition-all duration-500 ${
          tab === 'drinks'
            ? 'bg-black/60 border-amber-500/25 shadow-black/60'
            : 'bg-black/[0.04] border-white/60'
        }`}>
          {[
            { id: 'shake', label: 'Abanar', icon: Smartphone },
            { id: 'dish', label: 'Prato', icon: UtensilsCrossed },
            { id: 'portuguese', label: 'Receitas', icon: ChefHat },
            { id: 'drinks', label: 'Bebidas', icon: Martini },
            { id: 'favorites', label: 'Favoritas', icon: Heart, count: favorites.length },
          ].map((t) => {
            const active = tab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-1 rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-200 select-none relative ${
                  active
                    ? t.id === 'drinks'
                      ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-stone-950 font-black shadow-md shadow-amber-500/25 ring-1 ring-amber-300 scale-[1.02]'
                      : 'bg-white text-orange-600 shadow-sm shadow-orange-950/10 ring-1 ring-black/5 scale-[1.02]'
                    : tab === 'drinks'
                    ? 'text-stone-400 hover:text-amber-200 hover:bg-white/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/40'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${
                    active
                      ? t.id === 'favorites'
                        ? 'text-rose-500 fill-rose-500'
                        : t.id === 'drinks'
                        ? 'text-stone-950 stroke-[2.5]'
                        : 'text-orange-500 stroke-[2.2]'
                      : ''
                  }`}
                />
                <span className="truncate">{t.label}</span>
                {t.count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold leading-tight ${
                      active ? 'bg-rose-100 text-rose-600' : 'bg-black/10 text-muted-foreground'
                    }`}
                  >
                    {t.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {tab === 'dish' ? (
          <div className="flex-1 flex flex-col justify-center w-full py-4">
            <DishMode />
          </div>
        ) : tab === 'portuguese' ? (
          <div className="flex-1 flex flex-col justify-center w-full py-4">
            <PortugueseRecipes />
          </div>
        ) : tab === 'drinks' ? (
          <div className="flex-1 flex flex-col justify-center w-full py-4">
            <DrinksMode />
          </div>
        ) : tab === 'favorites' ? (
          <div className="flex-1 flex flex-col justify-center w-full py-4">
            <FavoritesView />
          </div>
        ) : (
          <>
            {/* shake zone */}
            <div className="flex-1 flex flex-col items-center justify-center w-full py-8 sm:py-12">
              <div className="relative flex items-center justify-center">
                {/* Ambient pulsating neon halo */}
                <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-600 blur-2xl opacity-40 animate-pulse pointer-events-none" />

                {/* Ripple ring when not shaking */}
                {!shaking && (
                  <div
                    className="absolute -inset-2 sm:-inset-3 rounded-full border-2 border-orange-400/30 animate-ping pointer-events-none"
                    style={{ animationDuration: '3s' }}
                  />
                )}

                <motion.button
                  onClick={startShake}
                  animate={
                    shaking
                      ? {
                          rotate: [0, -12, 12, -10, 10, -6, 6, 0],
                          scale: [1, 1.06, 0.96, 1.04, 0.98, 1],
                        }
                      : { rotate: 0, scale: 1 }
                  }
                  transition={shaking ? { duration: 0.5, repeat: Infinity } : { duration: 0.3 }}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-gradient-to-b from-white/60 via-white/20 to-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(249,115,22,0.4)] flex flex-col items-center justify-center text-white group cursor-pointer border border-white/40"
                >
                  {/* Core gradient orb with specular gloss */}
                  <div className="absolute inset-2 sm:inset-2.5 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-600 shadow-inner overflow-hidden">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-28 bg-white/25 rounded-full blur-md pointer-events-none" />
                    <div className="absolute inset-0 bg-radial-gradient from-white/15 to-transparent pointer-events-none" />
                  </div>

                  {/* Icon Container with frosted glass effect */}
                  <motion.div
                    animate={!shaking ? { y: [0, -4, 0], rotate: [0, -3, 3, 0] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-3xl bg-white/20 backdrop-blur-md border border-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.15)] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform"
                  >
                    <div className="relative flex items-center justify-center">
                      <Smartphone className="w-9 h-9 sm:w-10 sm:h-10 text-white drop-shadow-md stroke-[2.2]" />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute -right-3 -top-1"
                      >
                        <Sparkles className="w-5 h-5 text-amber-200 fill-amber-200" />
                      </motion.div>
                    </div>
                  </motion.div>

                  <div className="relative z-10 flex flex-col items-center">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-white drop-shadow-md">
                      Abana!
                    </span>
                    <span className="mt-1 px-3 py-0.5 rounded-full bg-black/20 backdrop-blur-sm text-[11px] sm:text-xs font-medium text-white/90 border border-white/20 shadow-sm">
                      ou toca aqui
                    </span>
                  </div>
                </motion.button>
              </div>

              <AnimatePresence>
                {shaking && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-orange-200 text-sm font-semibold text-orange-600"
                  >
                    <Sparkles className="w-4 h-4 animate-spin text-orange-500" />
                    <span>{shakeTarget === 'fridge' ? 'A abrir o Modo Frigorífico…' : shakeTarget === 'restaurant' ? 'A procurar restaurantes…' : 'A sortear a melhor opção…'}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shake Target Selector */}
              <div className="mt-4 flex items-center gap-1 p-1 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-sm">
                <span className="text-[11px] font-bold text-muted-foreground px-2">Ao abanar:</span>
                {[
                  { id: 'fridge', label: '🧊 Frigorífico' },
                  { id: 'random', label: '🎲 Sortear' },
                  { id: 'restaurant', label: '📍 Restaurante' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setShakeTarget(opt.id)}
                    className={`text-xs px-2.5 py-1 rounded-xl font-bold transition-all ${
                      shakeTarget === opt.id
                        ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* quick mode cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mt-auto pt-4">
              <button
                onClick={() => setActiveMode('fridge')}
                className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] p-4 sm:p-5 text-left hover:shadow-[0_12px_30px_rgba(249,115,22,0.15)] active:scale-[0.98] transition-all duration-200 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 opacity-80" />

                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform">
                    <Camera className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">
                    <Sparkles className="w-2.5 h-2.5 fill-orange-500 text-orange-500" /> IA
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-foreground group-hover:text-orange-600 transition-colors">
                      Frigorífico
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Foto ou ingredientes
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                </div>
              </button>

              <button
                onClick={() => setActiveMode('restaurant')}
                className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] p-4 sm:p-5 text-left hover:shadow-[0_12px_30px_rgba(225,29,72,0.15)] active:scale-[0.98] transition-all duration-200 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 to-red-600 opacity-80" />

                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 via-red-500 to-pink-600 flex items-center justify-center text-white shadow-md shadow-rose-500/30 group-hover:scale-105 transition-transform">
                    <Navigation className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" /> GPS
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-foreground group-hover:text-rose-600 transition-colors">
                      Restaurante
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Mais próximo de ti
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                </div>
              </button>
            </div>
          </>
        )}

        <div className="text-xs text-muted-foreground/80 text-center mt-6 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-white/50">
          <ChefHat className="w-3.5 h-3.5 text-orange-500" />
          <span>Funciona melhor no telemóvel, com movimento e localização ativos.</span>
        </div>
      </div>

      <FridgeMode open={activeMode === 'fridge'} onClose={closeMode} />
      <RestaurantMode open={activeMode === 'restaurant'} onClose={closeMode} />
      <ShoppingList open={shoppingOpen} onClose={() => setShoppingOpen(false)} />
    </div>
  );
}