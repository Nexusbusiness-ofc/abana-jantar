import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';
import { getIngredientInfo } from '@/data/ingredientImages';

export default function IngredientCard({ ingredient, onAddToList, isAdded = false }) {
  const [imgError, setImgError] = useState(false);
  const info = getIngredientInfo(ingredient.name, ingredient.quantity);

  return (
    <motion.button
      type="button"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onAddToList && onAddToList(ingredient)}
      className={`group relative flex flex-col items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-[#13111c]/90 backdrop-blur-md border ${info.theme.border} shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-orange-500/40 transition-all duration-300 text-center w-full min-h-[160px] sm:min-h-[175px] overflow-hidden`}
    >
      {/* Ambient background glow matching category */}
      <div
        className={`pointer-events-none absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${info.theme.bg} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`}
      />

      {/* Top: Image Pod */}
      <div className="relative w-full flex items-center justify-center pt-1 pb-2">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-black/[0.02] to-black/[0.06] dark:from-white/[0.04] dark:to-white/[0.02] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-108">
          {!imgError ? (
            <img
              src={info.image}
              alt={info.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.12)] transition-transform duration-300"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center font-bold text-orange-600 text-sm">
              {info.name.charAt(0)}
            </div>
          )}

          {/* Quick Add Shopping Cart Badge on Top-Right */}
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#1a1728] border border-border shadow-xs flex items-center justify-center text-muted-foreground group-hover:text-orange-500 group-hover:border-orange-500/40 transition-colors">
            {isAdded ? (
              <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
            ) : (
              <Plus className="w-3.5 h-3.5 group-hover:scale-110 transition-transform stroke-[2.2]" />
            )}
          </div>
        </div>
      </div>

      {/* Middle: Ingredient Name */}
      <div className="w-full my-auto px-0.5">
        <h5 className="font-heading font-semibold text-xs sm:text-sm text-foreground leading-snug line-clamp-2">
          {ingredient.name}
        </h5>
      </div>

      {/* Bottom: Quantity Badge */}
      <div className="mt-2 w-full flex items-center justify-center">
        {ingredient.quantity ? (
          <span
            className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border ${info.theme.badge} shadow-xs truncate max-w-full`}
            title={ingredient.quantity}
          >
            {ingredient.quantity}
          </span>
        ) : (
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground">
            q.b.
          </span>
        )}
      </div>
    </motion.button>
  );
}
