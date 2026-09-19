import { useState, useEffect, useCallback } from 'react';

const KEY = 'abana:preferences';
const EVENT = 'abana:prefs-change';

export const DEFAULT_PREFERENCES = {
  diet: 'omni', // omni | vegetarian | vegan | pescatarian
  restrictions: { glutenFree: false, lactoseFree: false },
  allergies: [], // ['nuts','peanut','shellfish','egg','soy']
  other: ''
};

export function loadPreferences() {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PREFERENCES,
      ...parsed,
      restrictions: { ...DEFAULT_PREFERENCES.restrictions, ...(parsed.restrictions || {}) }
    };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export function savePreferences(prefs) {
  try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export function usePreferences() {
  const [prefs, setPrefs] = useState(loadPreferences);
  useEffect(() => {
    const handler = () => setPrefs(loadPreferences());
    window.addEventListener(EVENT, handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener(EVENT, handler);
      window.removeEventListener('storage', handler);
    };
  }, []);
  const update = useCallback((patch) => {
    const current = loadPreferences();
    const next = typeof patch === 'function' ? patch(current) : { ...current, ...patch };
    savePreferences(next);
  }, []);
  return [prefs, update];
}

const DIET_RULES = {
  omni: '',
  vegetarian: 'A receita deve ser vegetariana (sem carne nem peixe).',
  vegan: 'A receita deve ser vegana (sem quaisquer produtos de origem animal, incluindo ovos, lacticínios e mel).',
  pescatarian: 'A receita deve ser pescetariana (pode incluir peixe ou marisco, mas não carne).',
  keto: 'A receita deve ser cetogénica (keto): muito baixa em hidratos de carbono, alta em gordura e moderada em proteína. Evitar pão, massa, arroz, batata, açúcar, frutas doces e farinhas.',
  lowCarb: 'A receita deve ser baixa em hidratos de carbono (low-carb): reduzir/evitar pão, massa, arroz, açúcar e farinha.',
  paleo: 'A receita deve ser paleo: sem cereais, leguminosas, lacticínios, açúcar refinado nem alimentos processados; priorizar carne, peixe, ovos, vegetais e frutos secos.'
};

const ALLERGY_LABELS = {
  nuts: 'frutos secos',
  peanut: 'amendoim',
  shellfish: 'marisco',
  egg: 'ovo',
  soy: 'soja'
};

/** Builds a human string of dietary constraints to inject into an LLM prompt. */
export function buildDietContext(prefs) {
  if (!prefs) return '';
  const parts = [];
  const rule = DIET_RULES[prefs.diet];
  if (rule) parts.push(rule);
  if (prefs.restrictions?.glutenFree) parts.push('A receita não deve conter glúten.');
  if (prefs.restrictions?.lactoseFree) parts.push('A receita não deve conter lactose nem lacticínios.');
  const allergies = (prefs.allergies || [])
    .map(a => ALLERGY_LABELS[a] || a)
    .filter(Boolean);
  if (allergies.length) parts.push(`A receita NÃO deve conter nem incluir: ${allergies.join(', ')}.`);
  if (prefs.other?.trim()) parts.push(`Outras restrições a respeitar: ${prefs.other.trim()}.`);
  return parts.join(' ');
}