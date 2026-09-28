import React, { useState, useMemo } from 'react';
import { Clock, Utensils, ShoppingCart, Heart, Flame, LayoutGrid, List, CheckCheck } from 'lucide-react';
import ShareButton from '@/components/ShareButton';
import StepTimer from '@/components/StepTimer';
import { useFavorites } from '@/hooks/useFavorites';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { useShoppingList } from '@/hooks/useShoppingList';
import { useToast } from '@/components/ui/use-toast';
import IngredientCard from '@/components/IngredientCard';
import { expandRecipeIngredients, getIngredientInfo } from '@/data/ingredientImages';

export const recipeSchema = {
  type: 'object',
  properties: {
    recipe_name: { type: 'string' },
    description: { type: 'string' },
    difficulty: { type: 'string' },
    prep_time: { type: 'string' },
    ingredients: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          quantity: { type: 'string' }
        }
      }
    },
    steps: { type: 'array', items: { type: 'string' } }
  }
};

/** Shared recipe presentation: title, description, badges, ingredients, steps. */
export default function RecipeResult({ recipe, image }) {
  const { add } = useShoppingList();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  const [pending, setPending] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const fav = isFavorite(recipe);

  // Expand compound seasonings for optimal visual presentation
  const displayIngredients = useMemo(() => {
    return expandRecipeIngredients(recipe?.ingredients || []);
  }, [recipe?.ingredients]);

  const handleFavorite = () => {
    toggleFavorite(recipe, image);
    toast({
      title: fav ? 'Removida dos favoritos' : 'Receita guardada nos favoritos',
      duration: 2500
    });
  };

  const confirmAdd = () => {
    if (!pending) return;
    add(pending.name, pending.quantity || '');
    toast({ title: `${pending.name} adicionado à lista de compras` });
    setPending(null);
  };

  const handleAddAll = () => {
    if (!displayIngredients.length) return;
    displayIngredients.forEach((ing) => {
      add(ing.name, ing.quantity || '');
    });
    toast({
      title: 'Todos os ingredientes foram adicionados!',
      description: `${displayIngredients.length} itens adicionados à tua lista de compras.`,
      duration: 3000
    });
  };

  if (!recipe) return null;
  return (
    <div className="space-y-6">
      {image && (
        <div className="relative w-full h-44 sm:h-56 rounded-3xl overflow-hidden bg-muted shadow-md">
          <img
            src={image}
            alt={recipe.recipe_name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.parentElement.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="flex items-start gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/30 shrink-0">
          <Utensils className="w-6 h-6 stroke-[2.2]" />
        </div>
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight text-foreground">{recipe.recipe_name}</h3>
          {recipe.description && <p className="text-sm text-muted-foreground mt-1 leading-snug">{recipe.description}</p>}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 justify-between pt-1">
        <div className="flex flex-wrap gap-2">
          {recipe.difficulty && (
            <span className="text-xs px-3 py-1.5 rounded-xl bg-orange-500/10 text-orange-700 font-semibold border border-orange-500/20 flex items-center gap-1.5 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-400" /> {recipe.difficulty}
            </span>
          )}
          {recipe.prep_time && (
            <span className="text-xs px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-700 font-semibold border border-blue-500/20 flex items-center gap-1.5 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-blue-500 stroke-[2.2]" /> {recipe.prep_time}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleFavorite}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border shadow-sm transition active:scale-95 ${
              fav
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white border-rose-500 shadow-rose-500/25'
                : 'bg-white border-border text-foreground hover:bg-rose-50 hover:text-rose-600'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${fav ? 'fill-white stroke-white' : 'text-rose-500'}`} />
            {fav ? 'Guardada' : 'Guardar'}
          </button>
          <ShareButton recipe={recipe} />
        </div>
      </div>

      {displayIngredients?.length > 0 && (
        <div className="space-y-3">
          {/* Header of Ingredients */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-xs" />
              <h4 className="font-heading font-bold text-sm sm:text-base text-foreground tracking-tight">
                Ingredientes Necessários ({displayIngredients.length})
              </h4>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Add All Button */}
              <button
                type="button"
                onClick={handleAddAll}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-orange-500/10 hover:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-500/25 transition active:scale-95"
                title="Adicionar todos os ingredientes à lista de compras"
              >
                <CheckCheck className="w-3.5 h-3.5 text-orange-500" />
                <span className="hidden xs:inline">Adicionar Todos</span>
              </button>

              {/* View Switcher: Grid vs List */}
              <div className="flex items-center p-0.5 rounded-xl bg-muted/60 border border-border/40">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-black/50 text-foreground shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  title="Vista em Grelha Visual"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-black/50 text-foreground shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  title="Vista em Lista Simples"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-muted-foreground/80 flex items-center justify-between">
            <span>Toca em qualquer ingrediente para adicionar à lista de compras</span>
          </div>

          {/* Cards View (Default) */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              {displayIngredients.map((ing, i) => (
                <IngredientCard
                  key={`${ing.name}-${i}`}
                  ingredient={ing}
                  onAddToList={(item) => setPending({ name: item.name, quantity: item.quantity })}
                />
              ))}
            </div>
          ) : (
            /* List View */
            <ul className="space-y-2 pt-1">
              {displayIngredients.map((ing, i) => {
                const info = getIngredientInfo(ing.name, ing.quantity);
                return (
                  <li key={`${ing.name}-${i}`}>
                    <button
                      type="button"
                      onClick={() => setPending({ name: ing.name, quantity: ing.quantity })}
                      className="w-full flex items-center justify-between gap-3 text-sm text-left rounded-2xl p-2.5 bg-white/70 dark:bg-[#13111c]/70 hover:bg-orange-50/70 dark:hover:bg-white/5 border border-border/60 hover:border-orange-500/40 transition group shadow-xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-black/[0.02] to-black/[0.06] dark:from-white/[0.04] dark:to-white/[0.02] border border-border/40 flex items-center justify-center p-1 shrink-0">
                          <img
                            src={info.image}
                            alt={ing.name}
                            className="w-full h-full object-contain filter drop-shadow-xs"
                          />
                        </div>
                        <span className="font-semibold text-foreground truncate text-xs sm:text-sm">
                          {ing.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {ing.quantity && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${info.theme.badge}`}>
                            {ing.quantity}
                          </span>
                        )}
                        <ShoppingCart className="w-4 h-4 text-orange-400 opacity-50 group-hover:opacity-100 transition" />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}

      <AlertDialog open={!!pending} onOpenChange={(o) => !o && setPending(null)}>
        <AlertDialogContent className="max-w-sm rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Adicionar à lista de compras?</AlertDialogTitle>
            <AlertDialogDescription>
              {pending ? `${pending.name}${pending.quantity ? ` (${pending.quantity})` : ''}` : ''}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Não</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAdd}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Adicionar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {recipe.steps?.length > 0 && (
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Preparação</h4>
          <ol className="space-y-3">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/30">{i + 1}</span>
                <div className="flex-1">
                  <span className="pt-0.5 block">{step}</span>
                  <StepTimer stepNumber={i + 1} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}