import React, { useState } from 'react';
import { Sparkles, Clock, Utensils, ShoppingCart, Heart, Flame } from 'lucide-react';
import { Image as UIImage } from '@/components/ui/image';
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
  const fav = isFavorite(recipe);

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

  if (!recipe) return null;
  return (
    <div className="space-y-5">
      {image && (
        <div className="relative w-full h-44 sm:h-52 rounded-3xl overflow-hidden bg-muted shadow-md">
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
          <h3 className="font-heading text-xl font-bold leading-tight text-foreground">{recipe.recipe_name}</h3>
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

      {recipe.ingredients?.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground">Ingredientes</h4>
            <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/80">
              <ShoppingCart className="w-3 h-3" /> toca para adicionar à lista
            </span>
          </div>
          <ul className="space-y-2">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>
                <button
                  onClick={() => setPending({ name: ing.name, quantity: ing.quantity })}
                  className="w-full flex items-baseline gap-3 text-sm text-left rounded-lg px-2 py-1.5 -mx-2 hover:bg-orange-50 transition group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 translate-y-1 group-hover:bg-orange-500" />
                  <span className="font-medium">{ing.name}</span>
                  {ing.quantity && <span className="text-muted-foreground">— {ing.quantity}</span>}
                  <ShoppingCart className="w-3.5 h-3.5 text-orange-400 opacity-0 group-hover:opacity-100 transition ml-auto shrink-0 translate-y-0.5" />
                </button>
              </li>
            ))}
          </ul>
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