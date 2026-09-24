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
  Info
} from 'lucide-react';
import { DRINKS, DRINK_CATEGORIES, ALCOHOL_FILTERS } from '@/data/drinksData';
import { DRINK_IMAGES } from '@/data/drinksImages';
import RecipeResult from '@/components/RecipeResult';
import ShareButton from '@/components/ShareButton';
import StepTimer from '@/components/StepTimer';
import { useShoppingList } from '@/hooks/useShoppingList';
import { useFavorites } from '@/hooks/useFavorites';
import { useToast } from '@/components/ui/use-toast';

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
    <div className={`w-full h-full bg-gradient-to-br ${drink.alcoholic ? 'from-rose-500 to-amber-600' : 'from-emerald-500 to-teal-600'} flex flex-col items-center justify-center gap-2`}>
      <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
        {drink.alcoholic ? <Wine className="w-6 h-6 text-white" /> : <GlassWater className="w-6 h-6 text-white" />}
      </span>
      <span className="font-heading font-bold text-sm text-white px-2 text-center line-clamp-1">{drink.name}</span>
    </div>
  );
}

export default function DrinksMode() {
  const [selected, setSelected] = useState(null);
  const [alcoholFilter, setAlcoholFilter] = useState('todos'); // 'todos' | 'alcoolicas' | 'nao_alcoolicas'
  const [categoryFilter, setCategoryFilter] = useState('todas');
  const [search, setSearch] = useState('');
  const { add } = useShoppingList();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();

  const filteredDrinks = useMemo(() => {
    return DRINKS.filter((drink) => {
      // Alcohol filter
      if (alcoholFilter === 'alcoolicas' && !drink.alcoholic) return false;
      if (alcoholFilter === 'nao_alcoolicas' && drink.alcoholic) return false;

      // Category filter
      if (categoryFilter !== 'todas' && drink.category !== categoryFilter) return false;

      // Search filter
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesName = drink.name.toLowerCase().includes(query);
        const matchesDesc = drink.description.toLowerCase().includes(query);
        const matchesIng = drink.ingredients.some((ing) => ing.name.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesIng) return false;
      }

      return true;
    });
  }, [alcoholFilter, categoryFilter, search]);

  const pickRandomDrink = () => {
    const pool = filteredDrinks.length > 0 ? filteredDrinks : DRINKS;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setSelected(random);
    toast({
      title: `🎲 Bebida Sorteada: ${random.name}!`,
      description: random.alcoholic ? 'Bebida Alcoólica' : 'Bebida Sem Álcool',
      duration: 3000
    });
  };

  const handleAddIngredient = (item) => {
    add(item.name, item.quantity || '');
    toast({ title: `${item.name} adicionado à lista de compras!` });
  };

  return (
    <div className="flex-1 flex flex-col w-full py-2">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm mb-3 ring-1 ring-purple-500/10">
          <Wine className="w-3.5 h-3.5 text-purple-600" />
          <span className="text-xs font-semibold text-foreground/80">Bar & Refrescos</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Bebidas & Cocktails
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 max-w-md mx-auto leading-relaxed">
          {DRINKS.length} receitas com passo a passo, segredos de barman e opções com ou sem álcool.
        </p>

        {/* Quick Random Sorter Button */}
        <div className="mt-3 flex justify-center">
          <button
            onClick={pickRandomDrink}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-bold shadow-md shadow-purple-500/25 hover:shadow-lg active:scale-95 transition-all"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Sortear Bebida</span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-md mx-auto mb-4">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por nome, rum, gin, fruta, café..."
          className="w-full pl-10 pr-9 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 text-xs sm:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-foreground placeholder:text-muted-foreground/70"
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

      {/* Primary Alcohol Filters (Alcoólicas vs Não Alcoólicas) */}
      <div className="w-full max-w-sm mx-auto mb-3 p-1 rounded-2xl bg-black/[0.04] backdrop-blur-xl border border-white/60 shadow-inner flex gap-1">
        {ALCOHOL_FILTERS.map((f) => {
          const active = alcoholFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setAlcoholFilter(f.id)}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                active
                  ? f.id === 'alcoolicas'
                    ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/30 scale-[1.02]'
                    : f.id === 'nao_alcoolicas'
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30 scale-[1.02]'
                    : 'bg-white text-purple-600 shadow-sm shadow-purple-900/10 scale-[1.02]'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/40'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Secondary Categories Pills */}
      <div className="flex flex-wrap gap-1.5 justify-center mb-5">
        {DRINK_CATEGORIES.map((c) => {
          const active = categoryFilter === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setCategoryFilter(c.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition border ${
                active
                  ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                  : 'bg-white/70 border-white text-foreground hover:bg-white'
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Results Count & Feedback */}
      <div className="flex items-center justify-between px-1 mb-3 text-xs text-muted-foreground">
        <span>{filteredDrinks.length} {filteredDrinks.length === 1 ? 'bebida encontrada' : 'bebidas encontradas'}</span>
        {search && (
          <button onClick={() => setSearch('')} className="text-purple-600 font-medium hover:underline">
            Limpar pesquisa
          </button>
        )}
      </div>

      {/* Drinks Grid */}
      {filteredDrinks.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-3xl bg-white/60 backdrop-blur-md border border-white">
          <GlassWater className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
          <h3 className="font-heading font-bold text-base text-foreground">Nenhuma bebida encontrada</h3>
          <p className="text-xs text-muted-foreground mt-1">Tenta alterar os filtros ou pesquisar por outro ingrediente.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {filteredDrinks.map((drink, i) => (
            <motion.button
              key={drink.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.025, 0.25) }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(drink)}
              className="group text-left rounded-2xl overflow-hidden bg-white border border-border/60 shadow-sm hover:shadow-lg transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <DrinkCardImage drink={drink} image={DRINK_IMAGES[drink.id]} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

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
                    <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-white/90 text-foreground font-bold backdrop-blur-md shadow-sm">
                      {drink.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="absolute bottom-2 left-2.5 right-2.5 font-heading font-bold text-xs sm:text-sm text-white leading-tight drop-shadow-md line-clamp-2">
                  {drink.name}
                </h3>
              </div>

              {/* Card Footer Info */}
              <div className="p-2 sm:p-2.5 flex items-center justify-between text-[10px] text-muted-foreground mt-auto">
                <span className="font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-lg truncate max-w-[110px]">
                  {drink.categoryLabel}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-2.5 h-2.5 text-blue-500" />
                  {drink.prep_time}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {/* Drink Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="bg-background w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Sticky Header */}
              <div className="sticky top-0 bg-background/95 backdrop-blur-md flex items-center justify-between px-6 py-4 border-b border-border z-10">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white ${selected.alcoholic ? 'bg-gradient-to-tr from-rose-500 to-amber-500' : 'bg-gradient-to-tr from-emerald-500 to-teal-500'}`}>
                    {selected.alcoholic ? <Wine className="w-4 h-4" /> : <GlassWater className="w-4 h-4" />}
                  </div>
                  <div>
                    <h2 className="font-heading text-base sm:text-lg font-bold leading-tight">{selected.name}</h2>
                    <span className="text-[11px] font-semibold text-muted-foreground">{selected.categoryLabel}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-full hover:bg-muted transition text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Hero Drink Image */}
                {DRINK_IMAGES[selected.id] && (
                  <div className="relative w-full h-52 sm:h-60 rounded-3xl overflow-hidden bg-muted shadow-md">
                    <img
                      src={DRINK_IMAGES[selected.id]}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold shadow-md ${
                          selected.alcoholic
                            ? 'bg-rose-500 text-white'
                            : 'bg-emerald-500 text-white'
                        }`}
                      >
                        {selected.alcoholic ? '🍸 Contém Álcool' : '🥤 Sem Álcool'}
                      </span>
                      {selected.badge && (
                        <span className="text-xs px-3 py-1 rounded-full bg-white/95 text-foreground font-bold shadow-md backdrop-blur-sm">
                          {selected.badge}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Description & Badges */}
                <div>
                  <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                    {selected.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-3.5">
                    <span className="text-xs px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-700 font-semibold border border-purple-500/20 flex items-center gap-1.5 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" /> {selected.glass}
                    </span>
                    {selected.prep_time && (
                      <span className="text-xs px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-700 font-semibold border border-blue-500/20 flex items-center gap-1.5 shadow-sm">
                        <Clock className="w-3.5 h-3.5 text-blue-600" /> {selected.prep_time}
                      </span>
                    )}
                    {selected.difficulty && (
                      <span className="text-xs px-3 py-1.5 rounded-xl bg-orange-500/10 text-orange-700 font-semibold border border-orange-500/20 flex items-center gap-1.5 shadow-sm">
                        <Flame className="w-3.5 h-3.5 text-orange-600" /> {selected.difficulty}
                      </span>
                    )}
                  </div>
                </div>

                {/* Ingredients Section */}
                <div className="rounded-3xl bg-black/[0.02] border border-border/70 p-5">
                  <div className="flex items-center justify-between mb-3.5">
                    <h4 className="font-heading text-sm font-bold tracking-tight text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      Ingredientes Necessários ({selected.ingredients.length})
                    </h4>
                    <span className="text-[11px] text-muted-foreground">Toca em + para a lista de compras</span>
                  </div>

                  <ul className="space-y-2">
                    {selected.ingredients.map((ing, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-white/80 border border-white/80 shadow-xs text-xs sm:text-sm"
                      >
                        <span className="font-medium text-foreground">{ing.name}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-bold text-purple-700 text-xs">{ing.quantity}</span>
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
                    Como Preparar (Passo a Passo)
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

                {/* Bartender Tip */}
                {selected.bartender_tip && (
                  <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-purple-500/10 border border-amber-500/20 p-4 flex gap-3 text-xs text-foreground/90">
                    <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-800 block mb-0.5">Segredo do Barman:</span>
                      <p className="leading-relaxed text-muted-foreground">{selected.bartender_tip}</p>
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
                    text={`Vê esta receita de ${selected.name} no Abana Jantar!`}
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
