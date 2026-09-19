import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Sparkles, ChefHat, Utensils } from 'lucide-react';
import { Image as UIImage } from '@/components/ui/image';
import RecipeResult from '@/components/RecipeResult';
import { RECIPES, CATEGORIES } from '@/data/portugueseRecipes';
import { RECIPE_IMAGES } from '@/data/portugueseRecipeImages';

const CATEGORY_STYLES = {
  'entradas': 'from-amber-400 to-orange-500',
  'carne': 'from-rose-400 to-red-500',
  'peixe': 'from-sky-400 to-blue-500',
  'sobremesas': 'from-pink-400 to-fuchsia-500',
  'sopas': 'from-emerald-400 to-green-500',
  'street food': 'from-violet-400 to-purple-500'
};

const CATEGORY_LABELS = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));

function CardImage({ recipe, image }) {
  const [hasError, setHasError] = useState(false);

  if (image && !hasError) {
    return (
      <img
        src={image}
        alt={recipe.name}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
    );
  }
  return (
    <div className={`w-full h-full bg-gradient-to-br ${CATEGORY_STYLES[recipe.category] || 'from-orange-400 to-rose-500'} flex flex-col items-center justify-center gap-2`}>
      <span className="w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
        <span className="font-heading font-bold text-lg text-white">{recipe.name.charAt(0)}</span>
      </span>
      <Utensils className="w-4 h-4 text-white/60" />
    </div>
  );
}

export default function PortugueseRecipes() {
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState('todas');

  const filtered = category === 'todas' ? RECIPES : RECIPES.filter((r) => r.category === category);

  return (
    <div className="flex-1 flex flex-col w-full py-2">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white shadow-sm mb-3">
          <ChefHat className="w-3.5 h-3.5 text-orange-500" />
          <span className="text-xs font-medium text-foreground/70">Cozinha tradicional</span>
        </div>
        <h2 className="font-heading text-2xl font-bold">Receitas</h2>
        <p className="text-sm text-muted-foreground mt-1">{RECIPES.length} receitas clássicas, com imagem e passo a passo.</p>
      </div>

      {/* filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition border ${category === c.id ? 'bg-orange-500 text-white border-orange-500 shadow-sm' : 'bg-white/70 border-white text-foreground hover:bg-white'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {filtered.map((r, i) => (
          <motion.button
            key={r.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.03, 0.3) }}
            whileHover={{ y: -3 }}
            onClick={() => setSelected(r)}
            className="group text-left rounded-2xl overflow-hidden bg-white border border-border/60 shadow-sm hover:shadow-lg transition"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <CardImage recipe={r} image={RECIPE_IMAGES[r.wiki]} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-white/85 text-foreground/80 font-medium backdrop-blur-sm">
                {CATEGORY_LABELS[r.category] || r.category}
              </span>
              <h3 className="absolute bottom-2 left-2.5 right-2.5 font-heading font-semibold text-sm text-white leading-tight drop-shadow-sm">
                {r.name}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2.5">
              {r.difficulty && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 font-medium flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> {r.difficulty}
                </span>
              )}
              {r.prep_time && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-medium flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> {r.prep_time}
                </span>
              )}
            </div>
          </motion.button>
        ))}
      </div>

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
                  <ChefHat className="w-5 h-5 text-orange-500" />
                  <h2 className="font-heading text-lg font-semibold">{selected.name}</h2>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 rounded-full hover:bg-muted transition">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <RecipeResult
                  image={RECIPE_IMAGES[selected.wiki]}
                  recipe={{
                    recipe_name: selected.name,
                    description: selected.description,
                    difficulty: selected.difficulty,
                    prep_time: selected.prep_time,
                    ingredients: selected.ingredients,
                    steps: selected.steps
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}