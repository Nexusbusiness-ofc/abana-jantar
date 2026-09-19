import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Clock, Sparkles, Trash2 } from 'lucide-react';
import { Image as UIImage } from '@/components/ui/image';
import RecipeResult from '@/components/RecipeResult';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from '@/components/ui/button';

export default function FavoritesView() {
  const { favorites, removeFavorite, clearFavorites } = useFavorites();
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex-1 flex flex-col w-full py-2">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white shadow-sm mb-3">
          <Heart className="w-3.5 h-3.5 text-rose-500" />
          <span className="text-xs font-medium text-foreground/70">As tuas receitas</span>
        </div>
        <h2 className="font-heading text-2xl font-bold">Favoritas</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {favorites.length > 0
            ? `${favorites.length} ${favorites.length === 1 ? 'receita guardada' : 'receitas guardadas'}.`
            : 'Ainda não guardaste nenhuma receita.'}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-rose-500/10 flex items-center justify-center">
            <Heart className="w-8 h-8 text-rose-400" />
          </div>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto">
            Toca no coração de qualquer receita para a guardar aqui e aceder rapidamente.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {favorites.map((f, i) => (
              <motion.button
                key={f.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                whileHover={{ y: -3 }}
                onClick={() => setSelected(f)}
                className="group relative text-left rounded-2xl overflow-hidden bg-white border border-border/60 shadow-sm hover:shadow-lg transition"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {f.image ? (
                    <UIImage
                      src={f.image}
                      alt={f.recipe.recipe_name}
                      fittingType="fill"
                      className="w-full h-full group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white/70" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-2 left-2.5 right-2.5 font-heading font-semibold text-sm text-white leading-tight drop-shadow-sm">
                    {f.recipe.recipe_name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2.5">
                  {f.recipe.difficulty && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 font-medium flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> {f.recipe.difficulty}
                    </span>
                  )}
                  {f.recipe.prep_time && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-medium flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> {f.recipe.prep_time}
                    </span>
                  )}
                </div>
                <span
                  role="button"
                  tabIndex={-1}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFavorite(f.key);
                  }}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/85 backdrop-blur flex items-center justify-center text-rose-500 hover:bg-white transition"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </span>
              </motion.button>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="ghost" onClick={clearFavorites} className="text-muted-foreground text-xs">
              <Trash2 className="w-3.5 h-3.5 mr-1.5" /> Limpar favoritas
            </Button>
          </div>
        </>
      )}

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
              <div className="sticky top-0 bg-background/90 backdrop-blur flex items-center justify-between px-6 py-4 border-b border-border z-10">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <h2 className="font-heading text-lg font-semibold truncate">{selected.recipe.recipe_name}</h2>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 rounded-full hover:bg-muted transition">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <RecipeResult recipe={selected.recipe} image={selected.image} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}