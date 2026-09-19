// Heuristic filtering of recipes by dietary preferences, based on ingredient names.
// Used by Fridge Mode so manual suggestions always respect the selected diet.

const normalize = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const FORBIDDEN = {
  vegetarian: ['frango', 'porco', 'vaca', 'borrego', 'chourico', 'chouriço', 'entremeada', 'orelheira', 'pato', 'galo', 'cabra', 'figado', 'figo', 'linguica', 'salsicha', 'fiambre', 'presunto', 'alheira', 'morcela', 'farinheira', 'carne', 'borrego', 'ossos de porco', 'tripas', 'rojoes', 'bife', 'lagosta'],
  vegan: [], // appended to vegetarian below
  pescatarian: ['frango', 'porco', 'vaca', 'borrego', 'chourico', 'chouriço', 'entremeada', 'orelheira', 'pato', 'galo', 'cabra', 'figado', 'linguica', 'salsicha', 'fiambre', 'presunto', 'alheira', 'morcela', 'farinheira', 'carne', 'borrego', 'ossos de porco', 'tripas', 'rojoes', 'bife'],
  keto: ['pao', 'massa', 'arroz', 'batata', 'acucar', 'farinha', 'mel', 'bolacha', 'aletria', 'feijao', 'grao', 'favas', 'pao de lo', 'rabanadas', 'filhos', 'arroz doce', 'sericaia', 'farofias', 'toucinho do ceu', 'ovos moles', 'pao de chourico', 'tosta', 'broa', 'pao'],
  lowCarb: ['pao', 'massa', 'arroz', 'acucar', 'farinha', 'bolacha', 'aletria', 'rabanadas', 'filhos', 'arroz doce', 'pao de lo'],
  paleo: ['pao', 'massa', 'arroz', 'farinha', 'acucar', 'mel', 'feijao', 'grao', 'favas', 'queijo', 'natas', 'leite', 'manteiga', 'bolacha', 'aletria', 'pao de lo', 'toucinho do ceu', 'sericaia', 'farofias', 'ovos moles', 'pao de chourico', 'tosta', 'broa', 'rebolar']
};

const GLUTEN_KEYWORDS = ['pao', 'massa', 'farinha', 'bolacha', 'cuscuz', 'aletria', 'pao de lo', 'pao de chourico', 'tosta', 'broa'];

const VEGAN_EXTRA = ['ovo', 'ovos', 'queijo', 'natas', 'leite', 'manteiga', 'mel'];

const hasAny = (ingredients, keywords) => {
  const text = ingredients.map((i) => normalize(i.name)).join(' ');
  return keywords.some((k) => text.includes(k));
};

/** Returns recipes that respect the given preferences. */
export function filterByDiet(recipes, prefs) {
  if (!prefs) return recipes;
  const diet = prefs.diet || 'omni';
  let forbidden = FORBIDDEN[diet] ? [...FORBIDDEN[diet]] : [];
  if (diet === 'vegan') forbidden = [...FORBIDDEN.vegetarian, ...VEGAN_EXTRA];
  if (prefs.restrictions?.glutenFree) forbidden = [...forbidden, ...GLUTEN_KEYWORDS];
  // lactoseFree: forbid dairy
  if (prefs.restrictions?.lactoseFree) forbidden = [...forbidden, 'queijo', 'natas', 'leite', 'manteiga'];
  // allergies
  const allergyMap = { nuts: 'frutos secos', peanut: 'amendoim', shellfish: 'marisco', egg: 'ovo', soy: 'soja' };
  (prefs.allergies || []).forEach((a) => {
    const kw = allergyMap[a];
    if (kw) forbidden.push(kw);
  });
  if (!forbidden.length) return recipes;
  return recipes.filter((r) => !hasAny(r.ingredients || [], forbidden));
}