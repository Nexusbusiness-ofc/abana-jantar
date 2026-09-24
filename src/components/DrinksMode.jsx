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
  RotateCcw
} from 'lucide-react';
import { DRINKS, DRINK_CATEGORIES, ALCOHOL_FILTERS } from '@/data/drinksData';
import { DRINK_IMAGES } from '@/data/drinksImages';
import ShareButton from '@/components/ShareButton';
import StepTimer from '@/components/StepTimer';
import { useShoppingList } from '@/hooks/useShoppingList';
import { useFavorites } from '@/hooks/useFavorites';
import { useToast } from '@/components/ui/use-toast';

// Master mixologist sequence for displaying all categories on the page
const CATEGORY_ORDER = [
  'cafes',
  'fumo',
  'cocktails',
  'short',
  'long',
  'energy',
  'shots',
  'hot',
  'mocktails',
  'soft',
  'portuguesas'
];

// Helper to get category icon
function getCategoryIcon(catId, className = 'w-5 h-5') {
  switch (catId) {
    case 'cafes':
      return <Coffee className={`${className} text-amber-700`} />;
    case 'fumo':
      return <Wind className={`${className} text-amber-500`} />;
    case 'energy':
      return <Zap className={`${className} text-amber-500`} />;
    case 'cocktails':
      return <Wine className={`${className} text-rose-500`} />;
    case 'short':
      return <GlassWater className={`${className} text-amber-600`} />;
    case 'long':
      return <Sparkles className={`${className} text-blue-500`} />;
    case 'shots':
      return <Flame className={`${className} text-red-500`} />;
    case 'hot':
      return <Flame className={`${className} text-orange-500`} />;
    case 'mocktails':
      return <GlassWater className={`${className} text-emerald-500`} />;
    case 'soft':
      return <GlassWater className={`${className} text-teal-500`} />;
    case 'portuguesas':
      return <Wine className={`${className} text-red-600`} />;
    default:
      return <Sparkles className={`${className} text-purple-600`} />;
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
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    );
  }
  return (
    <div className={`w-full h-full bg-gradient-to-br ${drink.alcoholic ? 'from-rose-500 to-amber-600' : 'from-emerald-500 to-teal-600'} flex flex-col items-center justify-center gap-2 p-3 text-center`}>
      <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shadow-inner">
        {drink.alcoholic ? <Wine className="w-6 h-6 text-white" /> : <Coffee className="w-6 h-6 text-white" />}
      </span>
      <span className="font-heading font-bold text-xs text-white leading-tight line-clamp-2">{drink.name}</span>
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
    DRINKS.forEach(d => {
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
        const matchesIng = drink.ingredients.some((ing) => ing.name.toLowerCase().includes(query));
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

    const orderToUse = categoryFilter !== 'todas'
      ? [categoryFilter]
      : CATEGORY_ORDER;

    return orderToUse.map(catId => {
      const catObj = DRINK_CATEGORIES.find(c => c.id === catId);
      const drinksInCat = filteredDrinks.filter(d => d.category === catId);
      return {
        id: catId,
        label: catObj ? catObj.label : catId,
        desc: catObj ? catObj.desc : '',
        drinks: drinksInCat
      };
    }).filter(group => group.drinks.length > 0);
  }, [filteredDrinks, categoryFilter, sortBy, search]);

  const resetFilters = () => {
    setAlcoholFilter('todos');
    setCategoryFilter('todas');
    setSortBy('recomendada');
    setSearch('');
    toast({ title: 'Filtros restaurados!' });
  };

  const pickRandomDrink = () => {
    const pool = filteredDrinks.length > 0 ? filteredDrinks : DRINKS;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setSelected(random);
    toast({
      title: `🎲 Bebida Sorteada: ${random.name}!`,
      description: random.alcoholic ? `${random.categoryLabel} • Com Álcool` : `${random.categoryLabel} • Sem Álcool`,
      duration: 3000
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
      title: 'Todos os ingredientes adicionados!',
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
    <div className="flex-1 flex flex-col w-full py-2">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm mb-2 ring-1 ring-purple-500/10">
          <Wine className="w-3.5 h-3.5 text-purple-600" />
          <span className="text-xs font-semibold text-foreground/80">Mixologia & Cafetaria Profissional</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Bebidas, Cocktails & Cafés
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-lg mx-auto leading-relaxed">
          {DRINKS.length} receitas completas organizadas por categoria. Clica no símbolo de filtro para filtrar por teor alcoólico, estilo ou ordenação.
        </p>
      </div>

      {/* Control Bar: Search Input, Filter Button with Icon & Random Pick */}
      <div className="w-full max-w-2xl mx-auto mb-4 flex items-center gap-2">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar café, fumo, gin, shot, vodka..."
            className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/70"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Trigger Button with Filter Icon */}
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className={`relative px-3.5 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-1.5 shadow-sm transition active:scale-95 border ${
            activeFiltersCount > 0
              ? 'bg-purple-600 text-white border-purple-600 shadow-purple-500/25 ring-2 ring-purple-500/20'
              : 'bg-white text-foreground/80 hover:bg-muted/80 border-border/80'
          }`}
          title="Abrir menu de filtros"
        >
          <Filter className={`w-4 h-4 ${activeFiltersCount > 0 ? 'text-white' : 'text-purple-600'}`} />
          <span className="hidden sm:inline">Filtros</span>
          {activeFiltersCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-white text-purple-700 text-[10px] font-black flex items-center justify-center shrink-0 shadow-xs">
              {activeFiltersCount}
            </span>
          )}
        </button>

        {/* Quick Random Button */}
        <button
          onClick={pickRandomDrink}
          className="p-2.5 rounded-2xl bg-white text-purple-600 hover:bg-purple-50 border border-border/80 shadow-sm active:scale-95 transition"
          title="Sortear Bebida Aleatória"
        >
          <Shuffle className="w-4 h-4" />
        </button>
      </div>

      {/* Active Filter Chips / Feedback Pill Row */}
      {activeFiltersCount > 0 && (
        <div className="w-full max-w-2xl mx-auto mb-4 flex flex-wrap items-center gap-1.5 px-1 text-xs">
          <span className="text-[11px] font-bold text-muted-foreground mr-1">Filtros Ativos:</span>

          {alcoholFilter !== 'todos' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold text-[11px] border border-purple-200">
              {alcoholFilter === 'alcoolicas' ? '🍸 Alcoólicas' : '🥤 Sem Álcool'}
              <button onClick={() => setAlcoholFilter('todos')} className="hover:text-purple-950">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {categoryFilter !== 'todas' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold text-[11px] border border-purple-200">
              {DRINK_CATEGORIES.find(c => c.id === categoryFilter)?.label || categoryFilter}
              <button onClick={() => setCategoryFilter('todas')} className="hover:text-purple-950">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {sortBy !== 'recomendada' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold text-[11px] border border-purple-200">
              {sortBy === 'nome' ? 'Nome A-Z' : 'Mais Rápidas'}
              <button onClick={() => setSortBy('recomendada')} className="hover:text-purple-950">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            onClick={resetFilters}
            className="text-[11px] font-bold text-purple-700 hover:underline ml-auto flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Limpar tudo</span>
          </button>
        </div>
      )}

      {/* Quick Jump Anchor Pills Bar (when showing all categories) */}
      {!search && sortBy === 'recomendada' && categoryFilter === 'todas' && (
        <div className="w-full max-w-4xl mx-auto mb-5 overflow-x-auto pb-1 no-scrollbar flex items-center gap-1.5 px-1">
          <span className="text-[11px] font-extrabold text-muted-foreground uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Layers className="w-3 h-3 text-purple-600" /> Ir para:
          </span>
          {CATEGORY_ORDER.map(catId => {
            const cat = DRINK_CATEGORIES.find(c => c.id === catId);
            if (!cat) return null;
            return (
              <button
                key={catId}
                onClick={() => scrollToCategory(catId)}
                className="px-2.5 py-1 rounded-full bg-white/80 hover:bg-white text-foreground/80 hover:text-purple-700 font-semibold text-xs border border-border/60 shadow-2xs whitespace-nowrap shrink-0 transition"
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Drinks Content:
          1. If grouped by categories (default view with all drinks ordered by category)
          2. Or flat grid (if sorted by name/time or searched)
      */}
      {filteredDrinks.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-3xl bg-white/60 backdrop-blur-md border border-white max-w-lg mx-auto">
          <GlassWater className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
          <h3 className="font-heading font-bold text-base text-foreground">Nenhuma bebida encontrada</h3>
          <p className="text-xs text-muted-foreground mt-1">Experimenta alterar as opções no menu de filtros.</p>
          <button
            onClick={resetFilters}
            className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-sm active:scale-95 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Todos os Filtros</span>
          </button>
        </div>
      ) : groupedCategories ? (
        /* CATEGORY SECTIONS (ALL DRINKS SHOWN ORDERED BY CATEGORY) */
        <div className="space-y-8 w-full max-w-6xl mx-auto">
          {groupedCategories.map((group) => (
            <section
              key={group.id}
              id={`cat-${group.id}`}
              className="scroll-mt-20"
            >
              {/* Category Section Header */}
              <div className="flex items-center justify-between gap-3 mb-3.5 pb-2 border-b border-border/60">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-white shadow-2xs border border-border/50">
                    {getCategoryIcon(group.id, 'w-4 h-4 sm:w-5 sm:h-5')}
                  </span>
                  <div>
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-foreground flex items-center gap-2 leading-tight">
                      <span>{group.label}</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                        {group.drinks.length} {group.drinks.length === 1 ? 'receita' : 'receitas'}
                      </span>
                    </h3>
                    {group.desc && (
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {group.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Grid of drinks inside this category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {group.drinks.map((drink, i) => (
                  <motion.button
                    key={drink.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.015, 0.15) }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelected(drink)}
                    className="group text-left rounded-2xl overflow-hidden bg-white border border-border/60 shadow-sm hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <DrinkCardImage drink={drink} image={DRINK_IMAGES[drink.id]} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-2 inset-x-2 flex items-center justify-between gap-1 pointer-events-none">
                        <span
                          className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-extrabold backdrop-blur-md shadow-sm ${
                            drink.alcoholic
                              ? 'bg-rose-500/90 text-white'
                              : 'bg-emerald-500/90 text-white'
                          }`}
                        >
                          {drink.alcoholic ? 'Alcoólica' : 'Sem Álcool'}
                        </span>

                        {drink.badge && (
                          <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-white/95 text-foreground font-bold backdrop-blur-md shadow-sm truncate max-w-[120px]">
                            {drink.badge}
                          </span>
                        )}
                      </div>

                      {/* Category specific indicator badge */}
                      {drink.category === 'cafes' && (
                        <div className="absolute top-8 left-2 px-2 py-0.5 rounded-full bg-amber-900/90 text-amber-200 text-[9px] font-bold flex items-center gap-1 backdrop-blur-md border border-amber-400/20">
                          <Coffee className="w-2.5 h-2.5" /> Barista & Café
                        </div>
                      )}
                      {drink.category === 'fumo' && (
                        <div className="absolute top-8 left-2 px-2 py-0.5 rounded-full bg-slate-900/90 text-amber-300 text-[9px] font-bold flex items-center gap-1 backdrop-blur-md border border-amber-400/30">
                          <Wind className="w-2.5 h-2.5" /> Fumo Aromático
                        </div>
                      )}
                      {drink.category === 'energy' && (
                        <div className="absolute top-8 left-2 px-2 py-0.5 rounded-full bg-amber-500/90 text-black text-[9px] font-extrabold flex items-center gap-1 backdrop-blur-md">
                          <Zap className="w-2.5 h-2.5" /> Energético
                        </div>
                      )}

                      {/* Title */}
                      <h4 className="absolute bottom-2 left-2.5 right-2.5 font-heading font-bold text-xs sm:text-sm text-white leading-tight drop-shadow-md line-clamp-2">
                        {drink.name}
                      </h4>
                    </div>

                    {/* Card Footer Info */}
                    <div className="p-2 sm:p-2.5 flex flex-col gap-1 text-[10px] text-muted-foreground mt-auto bg-card">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md truncate max-w-[110px]">
                          {drink.glass}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-foreground/70">
                          <Clock className="w-2.5 h-2.5 text-blue-500" />
                          {drink.prep_time}
                        </span>
                      </div>
                      {drink.abv && (
                        <div className="flex items-center justify-between text-[9px] text-muted-foreground border-t border-border/40 pt-1">
                          <span className="truncate max-w-[120px] font-medium">{drink.difficulty}</span>
                          <span className="font-bold text-foreground/80">{drink.abv.split(' ')[0]}</span>
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
        <div className="w-full max-w-6xl mx-auto space-y-3">
          <div className="flex items-center justify-between px-1 text-xs text-muted-foreground">
            <span>{filteredDrinks.length} {filteredDrinks.length === 1 ? 'bebida encontrada' : 'bebidas encontradas'}</span>
            {search && (
              <button onClick={() => setSearch('')} className="text-purple-600 font-bold hover:underline">
                Limpar pesquisa
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredDrinks.map((drink, i) => (
              <motion.button
                key={drink.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.015, 0.2) }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(drink)}
                className="group text-left rounded-2xl overflow-hidden bg-white border border-border/60 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <DrinkCardImage drink={drink} image={DRINK_IMAGES[drink.id]} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-2 inset-x-2 flex items-center justify-between gap-1 pointer-events-none">
                    <span
                      className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-extrabold backdrop-blur-md shadow-sm ${
                        drink.alcoholic
                          ? 'bg-rose-500/90 text-white'
                          : 'bg-emerald-500/90 text-white'
                      }`}
                    >
                      {drink.alcoholic ? 'Alcoólica' : 'Sem Álcool'}
                    </span>

                    {drink.badge && (
                      <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-white/95 text-foreground font-bold backdrop-blur-md shadow-sm truncate max-w-[120px]">
                        {drink.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="absolute bottom-2 left-2.5 right-2.5 font-heading font-bold text-xs sm:text-sm text-white leading-tight drop-shadow-md line-clamp-2">
                    {drink.name}
                  </h4>
                </div>

                <div className="p-2 sm:p-2.5 flex flex-col gap-1 text-[10px] text-muted-foreground mt-auto bg-card">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md truncate max-w-[110px]">
                      {drink.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-foreground/70">
                      <Clock className="w-2.5 h-2.5 text-blue-500" />
                      {drink.prep_time}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* FILTER MENU MODAL (Opens via Filter Icon Button) */}
      <AnimatePresence>
        {isFilterModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setIsFilterModalOpen(false)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="bg-background w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[88vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Filter Header */}
              <div className="sticky top-0 bg-background/95 backdrop-blur-md flex items-center justify-between px-6 py-4 border-b border-border z-10">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                    <Filter className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-foreground leading-tight">Filtros de Bebidas</h3>
                    <p className="text-[11px] text-muted-foreground">Filtra por álcool, estilo de barman ou ordenação</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-muted transition text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Body */}
              <div className="p-6 space-y-6">
                {/* 1. Teor Alcoólico */}
                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                    1. Teor Alcoólico
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {ALCOHOL_FILTERS.map((f) => {
                      const active = alcoholFilter === f.id;
                      return (
                        <button
                          key={f.id}
                          onClick={() => setAlcoholFilter(f.id)}
                          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border text-center ${
                            active
                              ? f.id === 'alcoolicas'
                                ? 'bg-rose-500 text-white border-rose-500 shadow-sm shadow-rose-500/30'
                                : f.id === 'nao_alcoolicas'
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-600/30'
                                : 'bg-purple-600 text-white border-purple-600 shadow-sm shadow-purple-500/25'
                              : 'bg-white border-border/80 text-foreground/80 hover:bg-muted'
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
                    <label className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      2. Estilo de Bebida
                    </label>
                    <span className="text-[11px] font-semibold text-purple-700">
                      {categoryFilter === 'todas' ? 'Todas Selecionadas' : '1 Selecionada'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCategoryFilter('todas')}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition text-left flex items-center justify-between ${
                        categoryFilter === 'todas'
                          ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                          : 'bg-white border-border/80 text-foreground/80 hover:bg-muted'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Todas as Categorias</span>
                      </span>
                      <span className="text-[10px] opacity-80">({DRINKS.length})</span>
                    </button>

                    {DRINK_CATEGORIES.filter(c => c.id !== 'todas').map((cat) => {
                      const active = categoryFilter === cat.id;
                      const count = categoryCounts[cat.id] || 0;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setCategoryFilter(cat.id)}
                          className={`p-2.5 rounded-xl text-xs font-semibold border transition text-left flex items-center justify-between ${
                            active
                              ? 'bg-purple-600 text-white border-purple-600 shadow-sm font-bold'
                              : 'bg-white border-border/80 text-foreground/80 hover:bg-muted'
                          }`}
                        >
                          <span className="truncate pr-1">{cat.label}</span>
                          <span className="text-[10px] opacity-75 shrink-0">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Ordenação */}
                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2.5 flex items-center gap-1">
                    <ArrowUpDown className="w-3.5 h-3.5" />
                    <span>3. Ordenação na Página</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'recomendada', label: 'Por Categoria' },
                      { id: 'nome', label: 'Nome A a Z' },
                      { id: 'tempo', label: 'Mais Rápidas' }
                    ].map((s) => {
                      const active = sortBy === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setSortBy(s.id)}
                          className={`py-2 px-2 rounded-xl text-xs font-bold transition border text-center ${
                            active
                              ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                              : 'bg-white border-border/80 text-foreground/80 hover:bg-muted'
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
              <div className="sticky bottom-0 bg-background/95 backdrop-blur-md p-4 border-t border-border flex items-center justify-between gap-3">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2.5 rounded-xl border border-border bg-white text-xs font-bold text-foreground/80 hover:bg-muted active:scale-95 transition"
                >
                  Limpar Tudo
                </button>

                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-500/25 active:scale-95 transition text-center"
                >
                  Ver {filteredDrinks.length} {filteredDrinks.length === 1 ? 'Bebida' : 'Bebidas'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drink Detail Modal (Barman & Barista Masterclass View) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="bg-background w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Sticky Header */}
              <div className="sticky top-0 bg-background/95 backdrop-blur-md flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-border z-10">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white ${selected.alcoholic ? 'bg-gradient-to-tr from-rose-500 to-amber-500' : 'bg-gradient-to-tr from-emerald-500 to-teal-500'}`}>
                    {selected.alcoholic ? <Wine className="w-4 h-4" /> : <Coffee className="w-4 h-4" />}
                  </div>
                  <div>
                    <h2 className="font-heading text-sm sm:text-base font-bold leading-tight">{selected.name}</h2>
                    <span className="text-[11px] font-semibold text-muted-foreground">{selected.categoryLabel}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1.5 rounded-full hover:bg-muted transition text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Hero Drink Image */}
                {DRINK_IMAGES[selected.id] && (
                  <div className="relative w-full h-56 sm:h-64 rounded-3xl overflow-hidden bg-muted shadow-md">
                    <img
                      src={DRINK_IMAGES[selected.id]}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold shadow-md ${
                          selected.alcoholic
                            ? 'bg-rose-500 text-white'
                            : 'bg-emerald-500 text-white'
                        }`}
                      >
                        {selected.alcoholic ? '🍸 Contém Álcool' : '☕ Sem Álcool'}
                      </span>
                      {selected.badge && (
                        <span className="text-xs px-3 py-1 rounded-full bg-white/95 text-foreground font-bold shadow-md backdrop-blur-sm">
                          {selected.badge}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Description & Technical Specs */}
                <div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                    {selected.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200/60 flex flex-col">
                      <span className="text-purple-600 font-bold uppercase tracking-wider text-[9px]">Copo / Chávena</span>
                      <span className="font-semibold text-foreground mt-0.5 truncate">{selected.glass}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200/60 flex flex-col">
                      <span className="text-blue-600 font-bold uppercase tracking-wider text-[9px]">Gelo Indicado</span>
                      <span className="font-semibold text-foreground mt-0.5 truncate">{selected.ice}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 flex flex-col">
                      <span className="text-amber-600 font-bold uppercase tracking-wider text-[9px]">Teor Alcoólico</span>
                      <span className="font-semibold text-foreground mt-0.5">{selected.abv}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/60 flex flex-col">
                      <span className="text-emerald-600 font-bold uppercase tracking-wider text-[9px]">Dificuldade</span>
                      <span className="font-semibold text-foreground mt-0.5">{selected.difficulty} • {selected.prep_time}</span>
                    </div>
                  </div>

                  {/* Technique Tag */}
                  {selected.technique && (
                    <div className="mt-2.5 flex items-center gap-2 p-2 rounded-xl bg-muted/60 text-xs text-foreground/90">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span className="font-bold text-purple-950">Técnica Profissional:</span>
                      <span className="font-medium text-muted-foreground">{selected.technique}</span>
                    </div>
                  )}
                </div>

                {/* Smoky Drinks Special Masterclass Section */}
                {selected.smoking_technique && (
                  <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white p-4.5 border border-purple-500/30 shadow-lg">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm mb-2">
                      <Wind className="w-4 h-4 text-amber-300 animate-pulse" />
                      <span>💨 Técnica de Fumo Aromático (Masterclass)</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-200 font-medium">
                      {selected.smoking_technique}
                    </p>
                  </div>
                )}

                {/* Bar & Barista Tools */}
                {selected.bar_tools && selected.bar_tools.length > 0 && (
                  <div className="rounded-2xl bg-black/[0.02] border border-border/70 p-4">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Wrench className="w-3.5 h-3.5 text-purple-600" />
                      <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-foreground">
                        Material & Utensílios Necessários
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.bar_tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white border border-border/60 text-foreground font-semibold text-xs shadow-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ingredients Section */}
                <div className="rounded-3xl bg-black/[0.02] border border-border/70 p-5">
                  <div className="flex items-center justify-between mb-3.5">
                    <h4 className="font-heading text-sm font-bold tracking-tight text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      Ingredientes Rigorosos ({selected.ingredients.length})
                    </h4>
                    <button
                      onClick={() => handleAddAllIngredients(selected.ingredients)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-bold transition active:scale-95"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Adicionar Todos</span>
                    </button>
                  </div>

                  <ul className="space-y-2">
                    {selected.ingredients.map((ing, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-white/80 border border-white/80 shadow-xs text-xs sm:text-sm"
                      >
                        <span className="font-medium text-foreground">{ing.name}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-bold text-purple-700 text-xs bg-purple-50 px-2 py-0.5 rounded-md">{ing.quantity}</span>
                          <button
                            onClick={() => handleAddIngredient(ing)}
                            title="Adicionar à lista de compras"
                            className="w-6 h-6 rounded-lg bg-purple-100 hover:bg-purple-200 active:scale-95 text-purple-700 flex items-center justify-center transition"
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
                  <h4 className="font-heading text-sm font-bold tracking-tight text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Passo a Passo de Preparação
                  </h4>

                  <ol className="space-y-3">
                    {selected.steps.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-xs sm:text-sm text-foreground/90 p-3.5 rounded-2xl bg-white/70 border border-border/50 shadow-xs"
                      >
                        <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-sm">
                          {idx + 1}
                        </span>
                        <div className="flex-1 space-y-2 pt-0.5">
                          <p className="leading-relaxed">{step}</p>
                          <StepTimer stepText={step} />
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Bartender / Barista Tip */}
                {selected.bartender_tip && (
                  <div className="rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-purple-500/10 border border-amber-500/30 p-4 flex gap-3 text-xs text-foreground/90">
                    <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-900 block mb-0.5">
                        {selected.category === 'cafes' ? 'Segredo do Barista (Dica Pro):' : 'Segredo do Barman (Dica Pro):'}
                      </span>
                      <p className="leading-relaxed text-muted-foreground font-medium">{selected.bartender_tip}</p>
                    </div>
                  </div>
                )}

                {/* Action Buttons: Favorite and Share */}
                <div className="pt-2 flex items-center justify-between border-t border-border">
                  <button
                    onClick={() => {
                      const recipeLike = {
                        recipe_name: selected.name,
                        description: selected.description,
                        ingredients: selected.ingredients,
                        steps: selected.steps
                      };
                      toggleFavorite(recipeLike, DRINK_IMAGES[selected.id]);
                      toast({
                        title: isFavorite(recipeLike) ? 'Removida dos favoritos' : 'Bebida guardada nos favoritos! ⭐'
                      });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-white text-xs font-bold shadow-sm hover:bg-muted active:scale-95 transition"
                  >
                    <Heart className="w-4 h-4 text-rose-500" />
                    <span>Guardar Favorita</span>
                  </button>

                  <ShareButton
                    title={selected.name}
                    text={`Aprende a fazer ${selected.name} no Abana Jantar!`}
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
