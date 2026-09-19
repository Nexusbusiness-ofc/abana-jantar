import { useState, useEffect, useCallback } from 'react';

const KEY = 'abana_favorites_v1';
const EVENT = 'abana:favorites-change';

const normalize = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

const read = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const write = (list) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
    window.dispatchEvent(new Event(EVENT));
  } catch {
    /* ignore */
  }
};

export const favoriteKey = (recipe) => normalize(recipe?.recipe_name || recipe?.name || '');

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(read);

  useEffect(() => {
    const sync = () => setFavorites(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const isFavorite = useCallback(
    (recipe) => {
      const key = favoriteKey(recipe);
      return !!key && favorites.some((f) => f.key === key);
    },
    [favorites]
  );

  const toggleFavorite = useCallback((recipe, image) => {
    const key = favoriteKey(recipe);
    if (!key) return;
    const list = read();
    if (list.some((f) => f.key === key)) {
      write(list.filter((f) => f.key !== key));
    } else {
      write([
        {
          key,
          savedAt: Date.now(),
          recipe: {
            recipe_name: recipe.recipe_name || recipe.name,
            description: recipe.description,
            difficulty: recipe.difficulty,
            prep_time: recipe.prep_time,
            ingredients: recipe.ingredients,
            steps: recipe.steps
          },
          image: image || null
        },
        ...list
      ]);
    }
  }, []);

  const removeFavorite = useCallback((key) => {
    write(read().filter((f) => f.key !== key));
  }, []);

  const clearFavorites = useCallback(() => {
    write([]);
  }, []);

  return { favorites, isFavorite, toggleFavorite, removeFavorite, clearFavorites };
};