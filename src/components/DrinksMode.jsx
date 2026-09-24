import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Clock,
  Sparkles,
  Wine,
  GlassWater,
  Search,
  Flame,
  Check,
  ShoppingCart,
  Heart,
  Shuffle,
  Info,
  Zap,
  Wind,
  Layers,
  Wrench,
  Percent,
  PlusCircle,
  Coffee,
  Filter,
  ArrowUpDown,
  RotateCcw,
  Award,
  Crown
} from 'lucide-react';
import { DRINKS, DRINK_CATEGORIES, ALCOHOL_FILTERS } from '@/data/drinksData';
import { DRINK_IMAGES } from '@/data/drinksImages';
import ShareButton from '@/components/ShareButton';
import { useShoppingList } from '@/hooks/useShoppingList';
import { useFavorites } from '@/hooks/useFavorites';
import { useToast } from '@/components/ui/use-toast';

// Master sommelier sequence for displaying all categories on the page
const CATEGORY_ORDER = [
  'fumo',
  'gins',
  'cocktails',
  'short',
  'long',
  'energy',
  'shots',
  'hot',
  'mocktails',
  'soft',
  'portuguesas',
  'cafes'
];

// Helper to get category icon with refined luxury styling
function getCategoryIcon(catId, className = 'w-4 h-4') {
  switch (catId) {
    case 'gins':
      return <Wine className={`${className} text-teal-300`} />;
    case 'cafes':
      return <Coffee className={`${className} text-amber-400`} />;
    case 'fumo':
      return <Wind className={`${className} text-amber-300 animate-pulse`} />;
    case 'energy':
      return <Zap className={`${className} text-yellow-400`} />;
    case 'cocktails':
      return <Wine className={`${className} text-rose-400`} />;
    case 'short':
      return <GlassWater className={`${className} text-amber-500`} />;
    case 'long':
      return <Sparkles className={`${className} text-cyan-400`} />;
    case 'shots':
      return <Flame className={`${className} text-red-400`} />;
    case 'hot':
      return <Flame className={`${className} text-orange-400`} />;
    case 'mocktails':
      return <GlassWater className={`${className} text-emerald-400`} />;
    case 'soft':
      return <GlassWater className={`${className} text-teal-400`} />;
    case 'portuguesas':
      return <Wine className={`${className} text-amber-300`} />;
    default:
      return <Sparkles className={`${className} text-amber-400`} />;
  }
}

function DrinkCardImage({ drink, image }) {
  const [hasError, setHasError] = useState(false);

  if (image && !hasError) {
    return (
      <img
        src={image}
        alt={drink.name}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
      />
    );
  }
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${
        drink.alcoholic
          ? 'from-[#2a171d] via-[#1e1422] to-[#120e18]'
          : 'from-[#142820] via-[#0f1d19] to-[#0d1416]'
      } flex flex-col items-center justify-center gap-2 p-3 text-center`}
    >
      <span className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.15)]">
        {drink.alcoholic ? (
          <Wine className="w-6 h-6 text-amber-400" />
        ) : (
          <Coffee className="w-6 h-6 text-emerald-400" />
        )}
      </span>
      <span className="font-serif font-bold text-xs text-amber-100 leading-tight line-clamp-2">
        {drink.name}
      </span>
    </div>
  );
}

export default function DrinksMode() {
  const [selected, setSelected] = useState(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Filters State
  const [alcoholFilter, setAlcoholFilter] = useState('todos'); // 'todos' | 'alcoolicas' | 'nao_alcoolicas'
  const [categoryFilter, setCategoryFilter] = useState('todas'); // 'todas' | specific category
  const [sortBy, setSortBy] = useState('recomendada'); // 'recomendada' | 'nome' | 'tempo'
  const [search, setSearch] = useState('');

  const { add } = useShoppingList();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();

  // Count active filters (for badge on filter icon)
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (alcoholFilter !== 'todos') count++;
    if (categoryFilter !== 'todas') count++;
    if (sortBy !== 'recomendada') count++;
    return count;
  }, [alcoholFilter, categoryFilter, sortBy]);

  // Total count per category for badges
  const categoryCounts = useMemo(() => {
    const counts = {};
    DRINKS.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered Drinks List
  const filteredDrinks = useMemo(() => {
    let list = DRINKS.filter((drink) => {
      // Alcohol filter
      if (alcoholFilter === 'alcoolicas' && !drink.alcoholic) return false;
      if (alcoholFilter === 'nao_alcoolicas' && drink.alcoholic) return false;

      // Category filter (if chosen in filter menu)
      if (categoryFilter !== 'todas' && drink.category !== categoryFilter) return false;

      // Search filter
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesName = drink.name.toLowerCase().includes(query);
        const matchesDesc = drink.description.toLowerCase().includes(query);
        const matchesTech = (drink.technique || '').toLowerCase().includes(query);
        const matchesCat = (drink.categoryLabel || '').toLowerCase().includes(query);
        const matchesIng = drink.ingredients.some((ing) =>
          ing.name.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDesc && !matchesTech && !matchesCat && !matchesIng) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'nome') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'pt'));
    } else if (sortBy === 'tempo') {
      const parseTime = (t) => {
        const num = parseInt(t);
        return isNaN(num) ? 999 : num;
      };
      list = [...list].sort((a, b) => parseTime(a.prep_time) - parseTime(b.prep_time));
    }

    return list;
  }, [alcoholFilter, categoryFilter, sortBy, search]);

  // Group drinks by category order when in recommended order
  const groupedCategories = useMemo(() => {
    if (sortBy !== 'recomendada' || search.trim() !== '') {
      return null;
    }

    const orderToUse =
      categoryFilter !== 'todas' ? [categoryFilter] : CATEGORY_ORDER;

    return orderToUse
      .map((catId) => {
        const catObj = DRINK_CATEGORIES.find((c) => c.id === catId);
        const drinksInCat = filteredDrinks.filter((d) => d.category === catId);
        return {
          id: catId,
          label: catObj ? catObj.label : catId,
          desc: catObj ? catObj.desc : '',
          drinks: drinksInCat
        };
      })
      .filter((group) => group.drinks.length > 0);
  }, [filteredDrinks, categoryFilter, sortBy, search]);

  const resetFilters = () => {
    setAlcoholFilter('todos');
    setCategoryFilter('todas');
    setSortBy('recomendada');
    setSearch('');
    toast({ title: 'Filtros restaurados com sucesso!' });
  };

  const pickRandomDrink = () => {
    const pool = filteredDrinks.length > 0 ? filteredDrinks : DRINKS;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setSelected(random);
    toast({
      title: `✨ Escolha do Head Bartender: ${random.name}`,
      description: random.alcoholic
        ? `${random.categoryLabel} • Graduação Premium`
        : `${random.categoryLabel} • Mindful Drinking (Sem Álcool)`,
      duration: 3500
    });
  };

  const handleAddIngredient = (item) => {
    add(item.name, item.quantity || '');
    toast({ title: `${item.name} adicionado à lista de compras!` });
  };

  const handleAddAllIngredients = (ingredients) => {
    ingredients.forEach((item) => {
      add(item.name, item.quantity || '');
    });
    toast({
      title: 'Ingredientes guardados no inventário!',
      description: `${ingredients.length} itens adicionados à tua lista de compras.`
    });
  };

  const scrollToCategory = (catId) => {
    const element = document.getElementById(`cat-${catId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full py-2 selection:bg-amber-500/30 selection:text-amber-200">
      {/* ============================================================ */}
      {/* LUXURY LOUNGE FAÇADE & HERO HEADER                           */}
      {/* ============================================================ */}
      <div className="relative text-center mb-6 pt-2 pb-6 px-4 rounded-3xl bg-gradient-to-b from-[#14121d]/80 via-[#0e0c15]/60 to-transparent border border-amber-500/20 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-16 bg-amber-500/15 blur-2xl pointer-events-none" />

        {/* Speakeasy Emblem */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/60 via-amber-900/40 to-amber-950/60 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-3">
          <Crown className="w-3.5 h-3.5 text-amber-400 stroke-[2.2]" />
          <span className="text-[11px] sm:text-xs font-serif tracking-[0.22em] uppercase font-bold text-amber-200/90">
            The Reserve Lounge & Atelier
          </span>
          <Crown className="w-3.5 h-3.5 text-amber-400 stroke-[2.2]" />
        </div>

        {/* Serif Master Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm leading-tight">
          Alta Coquetelaria & Barismo de Autor
        </h1>

        <p className="font-sans text-xs sm:text-sm text-stone-300/80 mt-2.5 max-w-2xl mx-auto leading-relaxed font-light">
          Uma coleção exclusiva de <span className="font-semibold text-amber-300">{DRINKS.length} criações artesanais</span>.
          Do fumo aromático de carvalho e cafés de especialidade aos grandes clássicos certificados pela IBA.
        </p>

        {/* Sommelier Stats Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] text-amber-200/70 font-medium">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-amber-500/20 backdrop-blur-sm">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            110 Receitas Certificadas
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-amber-500/20 backdrop-blur-sm">
            <Wind className="w-3.5 h-3.5 text-amber-400" />
            Rituais de Fumo Aromático
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-amber-500/20 backdrop-blur-sm">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            Cafés de Especialidade
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-amber-500/20 backdrop-blur-sm">
            <GlassWater className="w-3.5 h-3.5 text-emerald-400" />
            Mindful Mocktails (0.0% ABV)
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MASTER CONSOLE BAR: SEARCH, SOMMELIER FILTER & RANDOM PICK    */}
      {/* ============================================================ */}
      <div className="w-full max-w-3xl mx-auto mb-5 p-2 rounded-2xl bg-[#111019]/90 border border-amber-500/25 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-2">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/60" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar por destilado, café, fumo de carvalho, notas aromáticas..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-black/50 border border-amber-500/20 text-xs sm:text-sm text-stone-100 placeholder:text-stone-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 transition"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-amber-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sommelier Filter Modal Trigger Button */}
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className={`relative px-4 py-2.5 rounded-xl font-serif font-bold text-xs tracking-wide flex items-center gap-2 transition active:scale-95 border ${
            activeFiltersCount > 0
              ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
              : 'bg-stone-900/90 hover:bg-stone-850 text-amber-200/90 border-amber-500/30 hover:border-amber-400/50 shadow-sm'
          }`}
          title="Abrir Menu do Sommelier"
        >
          <Filter
            className={`w-3.5 h-3.5 ${
              activeFiltersCount > 0 ? 'text-stone-950' : 'text-amber-400'
            }`}
          />
          <span className="hidden sm:inline">Sommelier</span>
          {activeFiltersCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-stone-950 text-amber-300 text-[10px] font-sans font-black flex items-center justify-center shrink-0 border border-amber-400/40 shadow-xs">
              {activeFiltersCount}
            </span>
          )}
        </button>

        {/* Head Bartender Surprise Randomizer */}
        <button
          onClick={pickRandomDrink}
          className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 hover:from-amber-500/30 hover:to-amber-600/20 text-amber-300 border border-amber-500/30 active:scale-95 transition shadow-sm"
          title="Sugestão do Head Bartender"
        >
          <Shuffle className="w-4 h-4" />
        </button>
      </div>

      {/* Active Filter Chips / Feedback Pill Row */}
      {activeFiltersCount > 0 && (
        <div className="w-full max-w-3xl mx-auto mb-4 flex flex-wrap items-center gap-2 px-1 text-xs">
          <span className="text-[11px] font-serif uppercase tracking-wider font-semibold text-amber-300/70 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> Critérios Ativos:
          </span>

          {alcoholFilter !== 'todos' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-200 border border-amber-500/30 font-medium text-[11px]">
              {alcoholFilter === 'alcoolicas' ? '🍸 Alcoólicas de Autor' : '🥤 Mindful (Sem Álcool)'}
              <button
                onClick={() => setAlcoholFilter('todos')}
                className="hover:text-white transition"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {categoryFilter !== 'todas' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-200 border border-amber-500/30 font-medium text-[11px]">
              {DRINK_CATEGORIES.find((c) => c.id === categoryFilter)?.label || categoryFilter}
              <button
                onClick={() => setCategoryFilter('todas')}
                className="hover:text-white transition"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {sortBy !== 'recomendada' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-200 border border-amber-500/30 font-medium text-[11px]">
              {sortBy === 'nome' ? 'Ordem Alfabética (A-Z)' : 'Mais Rápidas de Preparar'}
              <button
                onClick={() => setSortBy('recomendada')}
                className="hover:text-white transition"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            onClick={resetFilters}
            className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 hover:underline ml-auto flex items-center gap-1 transition"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Limpar seleção</span>
          </button>
        </div>
      )}

      {/* ============================================================ */}
      {/* QUICK JUMP ANCHOR PILLS (WHEN SHOWING ALL CATEGORIES)        */}
      {/* ============================================================ */}
      {!search && sortBy === 'recomendada' && categoryFilter === 'todas' && (
        <div className="w-full max-w-6xl mx-auto mb-6 overflow-x-auto pb-2 no-scrollbar flex items-center gap-2 px-1">
          <span className="text-[11px] font-serif uppercase tracking-[0.16em] text-amber-300/80 shrink-0 mr-1 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" /> Secções:
          </span>
          {CATEGORY_ORDER.map((catId) => {
            const cat = DRINK_CATEGORIES.find((c) => c.id === catId);
            if (!cat) return null;
            const count = categoryCounts[catId] || 0;
            return (
              <button
                key={catId}
                onClick={() => scrollToCategory(catId)}
                className="group px-3 py-1.5 rounded-full bg-[#151320]/80 hover:bg-[#201d30] text-stone-300 hover:text-amber-200 font-sans font-medium text-xs border border-amber-500/20 hover:border-amber-400/40 shadow-xs whitespace-nowrap shrink-0 transition flex items-center gap-1.5"
              >
                <span>{getCategoryIcon(catId, 'w-3 h-3')}</span>
                <span>{cat.label}</span>
                <span className="text-[10px] text-amber-400/70 font-sans">({count})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* ============================================================ */}
      {/* MAIN DRINKS SHOWCASE                                         */}
      {/* 1. Grouped by Sommelier Category Plaques (default view)      */}
      {/* 2. Flat Grid (if sorted or searched)                         */}
      {/* ============================================================ */}
      {filteredDrinks.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl bg-[#12101b]/80 border border-amber-500/20 backdrop-blur-xl max-w-lg mx-auto shadow-2xl">
          <GlassWater className="w-12 h-12 text-amber-400/40 mx-auto mb-3" />
          <h3 className="font-serif text-lg text-amber-100 font-bold">Nenhuma criação encontrada</h3>
          <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto">
            Não foram encontradas receitas com os critérios selecionados no menu do Sommelier.
          </p>
          <button
            onClick={resetFilters}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-xs font-serif font-bold shadow-lg shadow-amber-500/20 active:scale-95 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Carta Completa</span>
          </button>
        </div>
      ) : groupedCategories ? (
        /* CATEGORY SECTIONS (ALL DRINKS SHOWN ORDERED BY CATEGORY) */
        <div className="space-y-10 w-full max-w-6xl mx-auto">
          {groupedCategories.map((group) => (
            <section
              key={group.id}
              id={`cat-${group.id}`}
              className="scroll-mt-24"
            >
              {/* Luxury Wall Plaque Header */}
              <div className="relative mb-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#171524] via-[#12101d] to-[#171524] border border-amber-500/25 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/60 border border-amber-500/30 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(group.id, 'w-5 h-5')}
                  </span>
                  <div>
                    <h2 className="font-serif text-base sm:text-lg lg:text-xl font-extrabold bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-400 bg-clip-text text-transparent flex items-center gap-2.5 leading-tight">
                      <span>{group.label}</span>
                      <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {group.drinks.length} {group.drinks.length === 1 ? 'criação' : 'criações'}
                      </span>
                    </h2>
                    {group.desc && (
                      <p className="font-serif italic text-xs text-amber-200/60 mt-0.5 max-w-xl line-clamp-1">
                        {group.desc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] font-serif uppercase tracking-wider text-amber-400/60">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>The Reserve Collection</span>
                </div>
              </div>

              {/* Grid of drinks inside this category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4.5">
                {group.drinks.map((drink, i) => (
                  <motion.button
                    key={drink.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.015, 0.15) }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelected(drink)}
                    className="group text-left rounded-2xl overflow-hidden bg-[#13121d] hover:bg-[#191726] border border-amber-500/20 hover:border-amber-400/50 shadow-md hover:shadow-[0_12px_36px_rgba(245,158,11,0.18)] transition-all flex flex-col relative"
                  >
                    {/* Drink Image Wrapper */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <DrinkCardImage drink={drink} image={DRINK_IMAGES[drink.id]} />
                      {/* Gradient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13121d] via-[#13121d]/40 to-transparent" />

                      {/* Top Badges & Favorite Heart */}
                      <div className="absolute top-2 inset-x-2 flex items-start justify-between gap-1.5 z-20">
                        <div className="flex flex-col gap-1 items-start max-w-[calc(100%-36px)] pointer-events-none">
                          <span
                            className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-serif font-bold tracking-wide uppercase backdrop-blur-md shadow-md border ${
                              drink.alcoholic
                                ? 'bg-rose-950/80 text-rose-200 border-rose-500/30'
                                : 'bg-emerald-950/80 text-emerald-200 border-emerald-500/30'
                            }`}
                          >
                            {drink.alcoholic ? 'Alcoólica' : 'Sem Álcool'}
                          </span>

                          {drink.badge && (
                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/80 text-amber-200 font-sans font-bold backdrop-blur-md shadow-md border border-amber-400/30 truncate max-w-[120px]">
                              {drink.badge}
                            </span>
                          )}
                        </div>

                        {/* Favorite Heart Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const fav = isFavorite(drink);
                            toggleFavorite(drink, DRINK_IMAGES[drink.id]);
                            toast({
                              title: fav
                                ? `${drink.name} removida das favoritas`
                                : `${drink.name} guardada nas favoritas! ⭐`,
                              duration: 3000
                            });
                          }}
                          title={isFavorite(drink) ? "Remover dos favoritos" : "Guardar nos favoritos"}
                          className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full flex items-center justify-center backdrop-blur-md border shadow-md transition-all duration-200 active:scale-85 ${
                            isFavorite(drink)
                              ? 'bg-rose-950/90 border-rose-500 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.35)] ring-1 ring-rose-500/40'
                              : 'bg-black/60 hover:bg-black/85 border-white/25 text-stone-300 hover:text-rose-400 hover:border-rose-400/50'
                          }`}
                        >
                          <Heart
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                              isFavorite(drink)
                                ? 'fill-rose-500 text-rose-500 scale-110'
                                : 'stroke-[2.2] group-hover:scale-105'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Special Category Badges */}
                      {drink.category === 'gins' && (
                        <div className="absolute top-8 left-2 px-2 py-0.5 rounded-full bg-teal-950/90 text-teal-200 text-[9px] font-sans font-bold flex items-center gap-1 backdrop-blur-md border border-teal-400/40 shadow-sm z-10">
                          <Wine className="w-2.5 h-2.5 text-teal-300" /> Gin de Autor
                        </div>
                      )}
                      {drink.category === 'cafes' && (
                        <div className="absolute top-8 left-2 px-2 py-0.5 rounded-full bg-amber-950/90 text-amber-200 text-[9px] font-sans font-bold flex items-center gap-1 backdrop-blur-md border border-amber-400/30 shadow-sm z-10">
                          <Coffee className="w-2.5 h-2.5 text-amber-300" /> Barista Craft
                        </div>
                      )}
                      {drink.category === 'fumo' && (
                        <div className="absolute top-8 left-2 px-2 py-0.5 rounded-full bg-slate-950/90 text-amber-300 text-[9px] font-sans font-bold flex items-center gap-1 backdrop-blur-md border border-amber-400/40 shadow-sm z-10">
                          <Wind className="w-2.5 h-2.5 text-amber-400 animate-pulse" /> Fumo Nobre
                        </div>
                      )}
                      {drink.category === 'energy' && (
                        <div className="absolute top-8 left-2 px-2 py-0.5 rounded-full bg-yellow-500/90 text-stone-950 text-[9px] font-sans font-black flex items-center gap-1 backdrop-blur-md shadow-sm z-10">
                          <Zap className="w-2.5 h-2.5" /> High Energy
                        </div>
                      )}

                      {/* Cocktail Title Overlay */}
                      <h3 className="absolute bottom-2 left-2.5 right-2.5 font-serif font-bold text-xs sm:text-sm text-stone-100 group-hover:text-amber-300 transition-colors leading-tight drop-shadow-md line-clamp-2 z-10">
                        {drink.name}
                      </h3>
                    </div>

                    {/* Card Footer Technical Specs */}
                    <div className="p-2 sm:p-2.5 flex flex-col gap-1 text-[10px] text-stone-400 mt-auto bg-[#13121d] border-t border-amber-500/15">
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-medium text-amber-200/80 bg-amber-500/10 px-2 py-0.5 rounded-md truncate max-w-[110px] border border-amber-500/20">
                          {drink.glass}
                        </span>
                        <span className="flex items-center gap-1 font-sans text-stone-300">
                          <Clock className="w-2.5 h-2.5 text-amber-400" />
                          {drink.prep_time}
                        </span>
                      </div>
                      {drink.abv && (
                        <div className="flex items-center justify-between text-[9px] text-stone-400 border-t border-white/5 pt-1">
                          <span className="truncate max-w-[120px] font-sans">{drink.difficulty}</span>
                          <span className="font-serif font-bold text-amber-300">{drink.abv.split(' ')[0]}</span>
                        </div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        /* FLAT SEARCH OR SORTED GRID */
        <div className="w-full max-w-6xl mx-auto space-y-4">
          <div className="flex items-center justify-between px-1 text-xs text-stone-400">
            <span className="font-serif">
              {filteredDrinks.length}{' '}
              {filteredDrinks.length === 1 ? 'criação selecionada' : 'criações selecionadas'}
            </span>
            {search && (
              <button
                onClick={() => setSearch('')}
                className="text-amber-400 font-semibold hover:underline"
              >
                Limpar pesquisa
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4.5">
            {filteredDrinks.map((drink, i) => (
              <motion.button
                key={drink.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.015, 0.2) }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(drink)}
                className="group text-left rounded-2xl overflow-hidden bg-[#13121d] hover:bg-[#191726] border border-amber-500/20 hover:border-amber-400/50 shadow-md hover:shadow-[0_12px_36px_rgba(245,158,11,0.18)] transition-all flex flex-col relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <DrinkCardImage drink={drink} image={DRINK_IMAGES[drink.id]} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13121d] via-[#13121d]/40 to-transparent" />

                  {/* Top Badges & Favorite Heart */}
                  <div className="absolute top-2 inset-x-2 flex items-start justify-between gap-1.5 z-20">
                    <div className="flex flex-col gap-1 items-start max-w-[calc(100%-36px)] pointer-events-none">
                      <span
                        className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-serif font-bold tracking-wide uppercase backdrop-blur-md shadow-md border ${
                          drink.alcoholic
                            ? 'bg-rose-950/80 text-rose-200 border-rose-500/30'
                            : 'bg-emerald-950/80 text-emerald-200 border-emerald-500/30'
                        }`}
                      >
                        {drink.alcoholic ? 'Alcoólica' : 'Sem Álcool'}
                      </span>

                      {drink.badge && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/80 text-amber-200 font-sans font-bold backdrop-blur-md shadow-md border border-amber-400/30 truncate max-w-[120px]">
                          {drink.badge}
                        </span>
                      )}
                    </div>

                    {/* Favorite Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const fav = isFavorite(drink);
                        toggleFavorite(drink, DRINK_IMAGES[drink.id]);
                        toast({
                          title: fav
                            ? `${drink.name} removida das favoritas`
                            : `${drink.name} guardada nas favoritas! ⭐`,
                          duration: 3000
                        });
                      }}
                      title={isFavorite(drink) ? "Remover dos favoritos" : "Guardar nos favoritos"}
                      className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full flex items-center justify-center backdrop-blur-md border shadow-md transition-all duration-200 active:scale-85 ${
                        isFavorite(drink)
                          ? 'bg-rose-950/90 border-rose-500 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.35)] ring-1 ring-rose-500/40'
                          : 'bg-black/60 hover:bg-black/85 border-white/25 text-stone-300 hover:text-rose-400 hover:border-rose-400/50'
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                          isFavorite(drink)
                            ? 'fill-rose-500 text-rose-500 scale-110'
                            : 'stroke-[2.2] group-hover:scale-105'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="absolute bottom-2 left-2.5 right-2.5 font-serif font-bold text-xs sm:text-sm text-stone-100 group-hover:text-amber-300 transition-colors leading-tight drop-shadow-md line-clamp-2 z-10">
                    {drink.name}
                  </h3>
                </div>

                <div className="p-2 sm:p-2.5 flex flex-col gap-1 text-[10px] text-stone-400 mt-auto bg-[#13121d] border-t border-amber-500/15">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-medium text-amber-200/80 bg-amber-500/10 px-2 py-0.5 rounded-md truncate max-w-[110px] border border-amber-500/20">
                      {drink.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 font-sans text-stone-300">
                      <Clock className="w-2.5 h-2.5 text-amber-400" />
                      {drink.prep_time}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SOMMELIER FILTER MODAL (DISPATCHED VIA FILTER ICON BUTTON)   */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isFilterModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setIsFilterModalOpen(false)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="bg-[#12101b] border border-amber-500/30 text-stone-100 w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] max-h-[88vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Filter Header */}
              <div className="sticky top-0 bg-[#12101b]/95 backdrop-blur-md flex items-center justify-between px-6 py-4 border-b border-amber-500/20 z-10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                    <Filter className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-extrabold text-base text-amber-100 leading-tight">
                      Menu de Seleção do Sommelier
                    </h3>
                    <p className="text-[11px] text-stone-400">
                      Filtra por teor alcoólico, estilo de barman ou ordenação
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 transition text-stone-400 hover:text-amber-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Body */}
              <div className="p-6 space-y-6">
                {/* 1. Teor Alcoólico */}
                <div>
                  <label className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-amber-300/80 block mb-2.5">
                    1. Filosofia Alcoólica
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {ALCOHOL_FILTERS.map((f) => {
                      const active = alcoholFilter === f.id;
                      return (
                        <button
                          key={f.id}
                          onClick={() => setAlcoholFilter(f.id)}
                          className={`py-2 px-2 rounded-xl text-xs font-serif font-bold transition-all border text-center ${
                            active
                              ? f.id === 'alcoolicas'
                                ? 'bg-rose-950 text-rose-200 border-rose-500 shadow-sm shadow-rose-900/40'
                                : f.id === 'nao_alcoolicas'
                                ? 'bg-emerald-950 text-emerald-200 border-emerald-500 shadow-sm shadow-emerald-900/40'
                                : 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 border-amber-300 shadow-md shadow-amber-500/25'
                              : 'bg-black/40 border-amber-500/20 text-stone-300 hover:bg-white/5 hover:border-amber-400/40'
                          }`}
                        >
                          {f.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Categoria / Estilo */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-amber-300/80">
                      2. Estilo & Família de Bebidas
                    </label>
                    <span className="text-[11px] font-sans font-semibold text-amber-400">
                      {categoryFilter === 'todas' ? 'Todas as Famílias' : '1 Selecionada'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCategoryFilter('todas')}
                      className={`p-2.5 rounded-xl text-xs font-serif font-bold border transition text-left flex items-center justify-between ${
                        categoryFilter === 'todas'
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 border-amber-300 shadow-md shadow-amber-500/25'
                          : 'bg-black/40 border-amber-500/20 text-stone-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Todas as Secções</span>
                      </span>
                      <span className="text-[10px] opacity-80 font-sans">({DRINKS.length})</span>
                    </button>

                    {DRINK_CATEGORIES.filter((c) => c.id !== 'todas').map((cat) => {
                      const active = categoryFilter === cat.id;
                      const count = categoryCounts[cat.id] || 0;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setCategoryFilter(cat.id)}
                          className={`p-2.5 rounded-xl text-xs font-serif border transition text-left flex items-center justify-between ${
                            active
                              ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 border-amber-300 font-bold shadow-md shadow-amber-500/25'
                              : 'bg-black/40 border-amber-500/20 text-stone-300 hover:bg-white/5 hover:border-amber-400/40'
                          }`}
                        >
                          <span className="truncate pr-1 flex items-center gap-1.5">
                            <span>{getCategoryIcon(cat.id, 'w-3 h-3')}</span>
                            <span>{cat.label}</span>
                          </span>
                          <span className="text-[10px] opacity-75 shrink-0 font-sans">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Ordenação */}
                <div>
                  <label className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-amber-300/80 block mb-2.5 flex items-center gap-1">
                    <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
                    <span>3. Critério de Ordenação</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'recomendada', label: 'Por Categoria' },
                      { id: 'nome', label: 'Nome (A-Z)' },
                      { id: 'tempo', label: 'Mais Rápidas' }
                    ].map((s) => {
                      const active = sortBy === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setSortBy(s.id)}
                          className={`py-2 px-2 rounded-xl text-xs font-serif font-bold transition border text-center ${
                            active
                              ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 border-amber-300 shadow-md shadow-amber-500/25'
                              : 'bg-black/40 border-amber-500/20 text-stone-300 hover:bg-white/5'
                          }`}
                        >
                          {s.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Filter Modal Footer */}
              <div className="sticky bottom-0 bg-[#12101b]/95 backdrop-blur-md p-4 border-t border-amber-500/20 flex items-center justify-between gap-3">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2.5 rounded-xl border border-amber-500/20 bg-black/40 text-xs font-serif font-semibold text-stone-300 hover:text-amber-200 active:scale-95 transition"
                >
                  Restaurar Tudo
                </button>

                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 text-xs font-serif font-bold shadow-lg shadow-amber-500/25 active:scale-95 transition text-center"
                >
                  Apresentar {filteredDrinks.length}{' '}
                  {filteredDrinks.length === 1 ? 'Criação' : 'Criações'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* DRINK MASTERCLASS DOSSIER MODAL (DETAIL VIEW)                 */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="bg-[#111019] text-stone-100 border border-amber-500/30 w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.85)] max-h-[92vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Sticky Header */}
              <div className="sticky top-0 bg-[#111019]/95 backdrop-blur-md flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-amber-500/20 z-10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md border ${
                      selected.alcoholic
                        ? 'bg-rose-950/80 border-rose-500/40 text-rose-300'
                        : 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                    }`}
                  >
                    {selected.alcoholic ? (
                      <Wine className="w-4 h-4" />
                    ) : (
                      <Coffee className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-serif text-sm sm:text-base font-bold text-amber-100 leading-tight">
                      {selected.name}
                    </h2>
                    <span className="text-[11px] font-sans text-amber-400/80">
                      {selected.categoryLabel}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 transition text-stone-400 hover:text-amber-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Hero Drink Image */}
                {DRINK_IMAGES[selected.id] && (
                  <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-black/50 border border-amber-500/20 shadow-xl">
                    <img
                      src={DRINK_IMAGES[selected.id]}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111019] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-serif font-bold shadow-md border backdrop-blur-md ${
                          selected.alcoholic
                            ? 'bg-rose-950/90 text-rose-200 border-rose-500/30'
                            : 'bg-emerald-950/90 text-emerald-200 border-emerald-500/30'
                        }`}
                      >
                        {selected.alcoholic ? '🍸 Contém Álcool' : '☕ Mindful (Sem Álcool)'}
                      </span>
                      {selected.badge && (
                        <span className="text-xs px-3 py-1 rounded-full bg-black/85 text-amber-300 font-sans font-bold shadow-md border border-amber-400/30 backdrop-blur-sm">
                          {selected.badge}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Description & Technical Specs */}
                <div>
                  <p className="font-serif text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                    {selected.description}
                  </p>

                  {/* 4 Technical Metrics Pillars */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/20 flex flex-col">
                      <span className="text-amber-400/80 font-serif font-bold uppercase tracking-wider text-[9px]">
                        Copo / Taça
                      </span>
                      <span className="font-sans font-semibold text-stone-200 mt-0.5 truncate">
                        {selected.glass}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/20 flex flex-col">
                      <span className="text-amber-400/80 font-serif font-bold uppercase tracking-wider text-[9px]">
                        Gelo Recomendado
                      </span>
                      <span className="font-sans font-semibold text-stone-200 mt-0.5 truncate">
                        {selected.ice}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/20 flex flex-col">
                      <span className="text-amber-400/80 font-serif font-bold uppercase tracking-wider text-[9px]">
                        Graduação
                      </span>
                      <span className="font-serif font-bold text-amber-300 mt-0.5">
                        {selected.abv}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/20 flex flex-col">
                      <span className="text-amber-400/80 font-serif font-bold uppercase tracking-wider text-[9px]">
                        Dificuldade & Tempo
                      </span>
                      <span className="font-sans font-semibold text-stone-200 mt-0.5">
                        {selected.difficulty} • {selected.prep_time}
                      </span>
                    </div>
                  </div>

                  {/* Technique Tag */}
                  {selected.technique && (
                    <div className="mt-3 flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-200">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-serif font-bold text-amber-300">
                        Técnica do Sommelier:
                      </span>
                      <span className="font-sans text-stone-300">{selected.technique}</span>
                    </div>
                  )}
                </div>

                {/* Smoky Drinks Special Masterclass Section */}
                {selected.smoking_technique && (
                  <div className="rounded-2xl bg-gradient-to-br from-black via-[#1c1828] to-black text-amber-100 p-4 sm:p-5 border border-amber-500/30 shadow-xl">
                    <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-xs sm:text-sm mb-2">
                      <Wind className="w-4 h-4 text-amber-400 animate-pulse" />
                      <span>Ritual de Fumo Aromático (Masterclass)</span>
                    </div>
                    <p className="text-xs leading-relaxed text-stone-300 font-sans">
                      {selected.smoking_technique}
                    </p>
                  </div>
                )}

                {/* Bar & Barista Tools */}
                {selected.bar_tools && selected.bar_tools.length > 0 && (
                  <div className="rounded-2xl bg-black/40 border border-amber-500/20 p-4">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Wrench className="w-3.5 h-3.5 text-amber-400" />
                      <h4 className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-amber-300/80">
                        Utensílios & Material Recomendado
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.bar_tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-amber-500/20 text-stone-200 font-sans font-medium text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ingredients Section */}
                <div className="rounded-2xl bg-black/40 border border-amber-500/20 p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3.5">
                    <h4 className="font-serif text-sm font-bold tracking-wide text-amber-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                      Ingredientes Rigorosos ({selected.ingredients.length})
                    </h4>
                    <button
                      onClick={() => handleAddAllIngredients(selected.ingredients)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-serif font-bold transition active:scale-95"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Adicionar Todos</span>
                    </button>
                  </div>

                  <ul className="space-y-2">
                    {selected.ingredients.map((ing, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between py-2 px-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm"
                      >
                        <span className="font-sans font-medium text-stone-200">{ing.name}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-serif font-bold text-amber-300 text-xs bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                            {ing.quantity}
                          </span>
                          <button
                            onClick={() => handleAddIngredient(ing)}
                            title="Adicionar à lista de compras"
                            className="w-6 h-6 rounded-lg bg-amber-500/15 hover:bg-amber-500/30 active:scale-95 text-amber-300 flex items-center justify-center transition border border-amber-500/20"
                          >
                            <ShoppingCart className="w-3 h-3" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps Section */}
                <div>
                  <h4 className="font-serif text-sm font-bold tracking-wide text-amber-200 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                    Protocolo de Execução
                  </h4>

                  <ol className="space-y-3">
                    {selected.steps.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-xs sm:text-sm text-stone-200 p-3.5 rounded-2xl bg-black/40 border border-amber-500/20 shadow-xs"
                      >
                        <span className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-xs font-serif font-black flex items-center justify-center shrink-0 shadow-sm">
                          {idx + 1}
                        </span>
                        <div className="flex-1 pt-0.5">
                          <p className="leading-relaxed font-sans">{step}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Bartender / Barista Tip */}
                {selected.bartender_tip && (
                  <div className="rounded-2xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-black border border-amber-500/30 p-4 flex gap-3 text-xs text-amber-100">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif font-bold text-amber-300 block mb-0.5">
                        {selected.category === 'cafes'
                          ? 'Segredo do Barista (Craft Tip):'
                          : 'Segredo do Head Bartender (Pro Tip):'}
                      </span>
                      <p className="leading-relaxed text-stone-300 font-sans">
                        {selected.bartender_tip}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Buttons: Favorite and Share */}
                <div className="pt-2 flex items-center justify-between border-t border-amber-500/20">
                  <button
                    onClick={() => {
                      const fav = isFavorite(selected);
                      toggleFavorite(selected, DRINK_IMAGES[selected.id]);
                      toast({
                        title: fav
                          ? `${selected.name} removida das favoritas`
                          : `${selected.name} guardada nas favoritas! ⭐`
                      });
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-serif font-bold shadow-sm active:scale-95 transition ${
                      isFavorite(selected)
                        ? 'border-rose-500/60 bg-rose-950/50 text-rose-300 ring-1 ring-rose-500/30'
                        : 'border-amber-500/30 bg-black/40 hover:bg-white/5 text-amber-200'
                    }`}
                  >
                    <Heart className={`w-4 h-4 text-rose-500 ${isFavorite(selected) ? 'fill-rose-500' : 'fill-rose-500/20'}`} />
                    <span>{isFavorite(selected) ? 'Guardada nas Favoritas' : 'Garrafeira Privada'}</span>
                  </button>

                  <ShareButton
                    title={selected.name}
                    text={`Descobre a receita de autor de ${selected.name} no Abana Jantar!`}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
