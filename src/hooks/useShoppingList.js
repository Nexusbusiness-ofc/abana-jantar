import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'abana_shopping_list';
const EVENT = 'abana-shopping-list-change';

const safeLoad = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const safeSave = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(EVENT));
  } catch {
    /* ignore */
  }
};

const genId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

export function useShoppingList() {
  const [items, setItems] = useState(safeLoad);

  useEffect(() => {
    const onChange = () => setItems(safeLoad());
    window.addEventListener(EVENT, onChange);
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener('storage', onChange);
    };
  }, []);

  const add = useCallback((name, quantity = '') => {
    const clean = (name || '').trim();
    if (!clean) return;
    setItems((prev) => {
      const existing = prev.find((i) => i.name.toLowerCase() === clean.toLowerCase());
      let next;
      if (existing) {
        next = prev.map((i) => (i.id === existing.id ? { ...i, checked: false, quantity: quantity || i.quantity } : i));
      } else {
        next = [...prev, { id: genId(), name: clean, quantity, checked: false }];
      }
      safeSave(next);
      return next;
    });
  }, []);

  const addMany = useCallback((list) => {
    const cleaned = list
      .map((x) => ({ name: (x.name || '').trim(), quantity: x.quantity || '' }))
      .filter((x) => x.name);
    if (!cleaned.length) return;
    setItems((prev) => {
      let next = [...prev];
      cleaned.forEach((c) => {
        const existing = next.find((i) => i.name.toLowerCase() === c.name.toLowerCase());
        if (existing) {
          next = next.map((i) => (i.id === existing.id ? { ...i, checked: false } : i));
        } else {
          next = [...next, { id: genId(), name: c.name, quantity: c.quantity, checked: false }];
        }
      });
      safeSave(next);
      return next;
    });
  }, []);

  const remove = useCallback((id) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.id !== id);
      safeSave(next);
      return next;
    });
  }, []);

  const toggle = useCallback((id) => {
    setItems((prev) => {
      const next = prev.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i));
      safeSave(next);
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    safeSave([]);
    setItems([]);
  }, []);

  const clearChecked = useCallback(() => {
    setItems((prev) => {
      const next = prev.filter((i) => !i.checked);
      safeSave(next);
      return next;
    });
  }, []);

  return { items, add, addMany, remove, toggle, clear, clearChecked };
}