// Mapping and helper utilities for recipe ingredient visuals and metadata.

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Categories and style configurations for cards
export const INGREDIENT_CATEGORIES = {
  baking: {
    label: 'Despensa & Farinhas',
    bg: 'from-amber-500/10 via-amber-400/5 to-transparent',
    border: 'border-amber-500/25',
    badge: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30',
    iconColor: 'text-amber-600'
  },
  dairy: {
    label: 'Laticínios & Ovos',
    bg: 'from-blue-500/10 via-sky-400/5 to-transparent',
    border: 'border-sky-500/25',
    badge: 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30',
    iconColor: 'text-sky-600'
  },
  meat: {
    label: 'Carnes & Charcutaria',
    bg: 'from-rose-500/10 via-red-400/5 to-transparent',
    border: 'border-rose-500/25',
    badge: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30',
    iconColor: 'text-rose-600'
  },
  fish: {
    label: 'Peixe & Marisco',
    bg: 'from-cyan-500/10 via-teal-400/5 to-transparent',
    border: 'border-teal-500/25',
    badge: 'bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30',
    iconColor: 'text-teal-600'
  },
  produce: {
    label: 'Hortícolas & Legumes',
    bg: 'from-emerald-500/10 via-green-400/5 to-transparent',
    border: 'border-emerald-500/25',
    badge: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    iconColor: 'text-emerald-600'
  },
  fruit: {
    label: 'Frutas & Citrinos',
    bg: 'from-orange-500/10 via-amber-400/5 to-transparent',
    border: 'border-orange-500/25',
    badge: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-500/30',
    iconColor: 'text-orange-600'
  },
  spices: {
    label: 'Ervas & Especiarias',
    bg: 'from-amber-600/10 via-yellow-500/5 to-transparent',
    border: 'border-amber-600/25',
    badge: 'bg-amber-600/15 text-amber-800 dark:text-amber-200 border-amber-600/30',
    iconColor: 'text-amber-700'
  },
  grains: {
    label: 'Cereais & Massas',
    bg: 'from-yellow-500/10 via-amber-400/5 to-transparent',
    border: 'border-yellow-500/25',
    badge: 'bg-yellow-500/15 text-yellow-800 dark:text-yellow-200 border-yellow-500/30',
    iconColor: 'text-yellow-600'
  },
  beverages: {
    label: 'Vinhos & Bebidas',
    bg: 'from-purple-500/10 via-violet-400/5 to-transparent',
    border: 'border-purple-500/25',
    badge: 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30',
    iconColor: 'text-purple-600'
  },
  general: {
    label: 'Condimentos & Básicos',
    bg: 'from-stone-500/10 via-zinc-400/5 to-transparent',
    border: 'border-stone-500/20',
    badge: 'bg-stone-500/15 text-stone-700 dark:text-stone-300 border-stone-500/25',
    iconColor: 'text-stone-600'
  }
};

// Comprehensive list of keyword rules
const INGREDIENT_RULES = [
  // 1. Farinhas & Pastelaria
  {
    id: 'farinha',
    cat: 'baking',
    label: 'Farinha',
    keywords: ['farinha', 'trigo', 'maizena', 'amido', 'semola', 'pao ralado']
  },
  {
    id: 'acucar',
    cat: 'baking',
    label: 'Açúcar',
    keywords: ['acucar', 'caramelo', 'mascavado', 'glace', 'gelatina']
  },
  {
    id: 'fermento',
    cat: 'baking',
    label: 'Fermento',
    keywords: ['fermento', 'bicarbonato']
  },
  {
    id: 'chocolate',
    cat: 'baking',
    label: 'Chocolate',
    keywords: ['chocolate', 'cacau']
  },
  {
    id: 'bolacha',
    cat: 'baking',
    label: 'Bolacha Maria',
    keywords: ['bolacha', 'bolachas', 'biscoito', 'biscoitos', 'palitos la reine', 'savoiardi']
  },
  {
    id: 'nozes',
    cat: 'baking',
    label: 'Frutos Secos',
    keywords: ['noz', 'nozes', 'amendoa', 'amendoas', 'pinhao', 'pinhoes', 'avela', 'avelas', 'amendoim']
  },
  {
    id: 'mel',
    cat: 'baking',
    label: 'Mel',
    keywords: ['mel', 'geleia', 'compota', 'marmelada', 'doce de']
  },

  // 2. Laticínios & Ovos
  {
    id: 'gemas',
    cat: 'dairy',
    label: 'Gemas de Ovo',
    keywords: ['gema', 'gemas']
  },
  {
    id: 'ovos',
    cat: 'dairy',
    label: 'Ovos',
    keywords: ['ovo', 'ovos', 'clara', 'claras']
  },
  {
    id: 'leite',
    cat: 'dairy',
    label: 'Leite',
    keywords: ['leite', 'leite gordo', 'leite condensado', 'leite de coco']
  },
  {
    id: 'natas',
    cat: 'dairy',
    label: 'Natas',
    keywords: ['nata', 'natas', 'bechamel']
  },
  {
    id: 'manteiga',
    cat: 'dairy',
    label: 'Manteiga',
    keywords: ['manteiga', 'banha', 'margarina']
  },
  {
    id: 'queijo',
    cat: 'dairy',
    label: 'Queijo',
    keywords: ['queijo', 'requeijao', 'parmesao', 'mozzarella', 'mascarpone', 'azeitao', 'serra']
  },

  // 3. Carnes & Charcutaria
  {
    id: 'carne_vaca',
    cat: 'meat',
    label: 'Carne de Vaca',
    keywords: ['vaca', 'bife', 'bifes', 'alcatra', 'lombo de vaca', 'vazia', 'hamburguer', 'carne picada', 'novilho', 'vitela']
  },
  {
    id: 'carne_porco',
    cat: 'meat',
    label: 'Carne de Porco',
    keywords: ['porco', 'entremeada', 'febra', 'febras', 'rojoes', 'lombo de porco', 'orelheira', 'tripas', 'costeleta', 'toucinho']
  },
  {
    id: 'frango',
    cat: 'meat',
    label: 'Frango & Aves',
    keywords: ['frango', 'galinha', 'galo', 'cabidela', 'peru']
  },
  {
    id: 'pato',
    cat: 'meat',
    label: 'Pato',
    keywords: ['pato']
  },
  {
    id: 'borrego',
    cat: 'meat',
    label: 'Borrego & Cabrito',
    keywords: ['borrego', 'cabrito', 'cabra', 'carneiro']
  },
  {
    id: 'chourico',
    cat: 'meat',
    label: 'Chouriço & Enchidos',
    keywords: ['chourico', 'chourica', 'morcela', 'farinheira', 'alheira', 'linguica', 'salpicao', 'salsicha']
  },
  {
    id: 'presunto',
    cat: 'meat',
    label: 'Presunto & Bacon',
    keywords: ['presunto', 'bacon', 'fiambre', 'pancetta']
  },

  // 4. Peixes & Mariscos
  {
    id: 'bacalhau',
    cat: 'fish',
    label: 'Bacalhau',
    keywords: ['bacalhau']
  },
  {
    id: 'peixe',
    cat: 'fish',
    label: 'Peixe Fresco',
    keywords: ['salmao', 'sardinha', 'sardinhas', 'pescada', 'dourada', 'robalo', 'carapau', 'cacao', 'atum', 'peixe', 'peixes']
  },
  {
    id: 'camarao',
    cat: 'fish',
    label: 'Camarão & Crustáceos',
    keywords: ['camarao', 'gambas', 'sapateira', 'caranguejo', 'lagosta', 'marisco']
  },
  {
    id: 'ameijoas',
    cat: 'fish',
    label: 'Amêijoas & Bivalves',
    keywords: ['ameijoa', 'ameijoas', 'berbigao', 'conquilhas', 'mexilhao', 'mexilhoes']
  },
  {
    id: 'polvo',
    cat: 'fish',
    label: 'Polvo & Cefalópodes',
    keywords: ['polvo', 'lula', 'lulas', 'choco', 'chocos']
  },

  // 5. Hortícolas, Tubérculos & Legumes
  {
    id: 'batata_palha',
    cat: 'produce',
    label: 'Batata Palha',
    keywords: ['batata palha', 'palha']
  },
  {
    id: 'batata',
    cat: 'produce',
    label: 'Batata',
    keywords: ['batata', 'batatas', 'pure']
  },
  {
    id: 'polpa_tomate',
    cat: 'produce',
    label: 'Polpa de Tomate',
    keywords: ['polpa de tomate', 'tomate pelado', 'concentrado de tomate', 'passata', 'ketchup']
  },
  {
    id: 'tomate',
    cat: 'produce',
    label: 'Tomate',
    keywords: ['tomate', 'tomates']
  },
  {
    id: 'alho',
    cat: 'produce',
    label: 'Alho',
    keywords: ['alho', 'alhos']
  },
  {
    id: 'cebola',
    cat: 'produce',
    label: 'Cebola',
    keywords: ['cebola', 'cebolas', 'cebolinho']
  },
  {
    id: 'cenoura',
    cat: 'produce',
    label: 'Cenoura',
    keywords: ['cenoura', 'cenouras']
  },
  {
    id: 'couve',
    cat: 'produce',
    label: 'Couve & Folhas',
    keywords: ['couve', 'grelos', 'nabo', 'repolho', 'espinafre', 'espinafres', 'alface']
  },
  {
    id: 'brocolos',
    cat: 'produce',
    label: 'Brócolos',
    keywords: ['brocolo', 'brocolos']
  },
  {
    id: 'cogumelos',
    cat: 'produce',
    label: 'Cogumelos',
    keywords: ['cogumelo', 'cogumelos', 'champignon']
  },
  {
    id: 'ervilhas',
    cat: 'produce',
    label: 'Ervilhas & Favas',
    keywords: ['ervilha', 'ervilhas', 'fava', 'favas', 'feijao-verde', 'milho']
  },
  {
    id: 'feijao',
    cat: 'produce',
    label: 'Feijão',
    keywords: ['feijao', 'feijao branco', 'feijao vermelho']
  },
  {
    id: 'grao',
    cat: 'produce',
    label: 'Grão-de-bico',
    keywords: ['grao', 'grao-de-bico']
  },

  // 6. Frutas & Citrinos
  {
    id: 'limao',
    cat: 'fruit',
    label: 'Limão & Citrinos',
    keywords: ['limao', 'lima', 'sumo de limao']
  },
  {
    id: 'laranja',
    cat: 'fruit',
    label: 'Laranja',
    keywords: ['laranja', 'laranjas', 'tangerina', 'clementina']
  },
  {
    id: 'maca',
    cat: 'fruit',
    label: 'Maçã',
    keywords: ['maca', 'macas', 'reineta', 'pera']
  },
  {
    id: 'morango',
    cat: 'fruit',
    label: 'Morangos & Frutos Silvestres',
    keywords: ['morango', 'morangos', 'frutos vermelhos', 'framboesa', 'amora']
  },
  {
    id: 'maracuja',
    cat: 'fruit',
    label: 'Maracujá',
    keywords: ['maracuja', 'polpa de maracuja']
  },
  {
    id: 'manga',
    cat: 'fruit',
    label: 'Manga & Fruta Tropical',
    keywords: ['manga', 'polpa de manga', 'pessego', 'damasco', 'melao', 'abacaxi', 'ananas']
  },

  // 7. Cereais, Pão & Massas
  {
    id: 'pao',
    cat: 'grains',
    label: 'Pão & Broa',
    keywords: ['pao', 'broa', 'tostas', 'papo seco', 'carcaca', 'baguete']
  },
  {
    id: 'arroz',
    cat: 'grains',
    label: 'Arroz',
    keywords: ['arroz', 'carolino', 'agulha']
  },
  {
    id: 'massa',
    cat: 'grains',
    label: 'Massa & Esparguete',
    keywords: ['massa', 'esparguete', 'macarrao', 'lasanha', 'penne', 'noodles', 'aletria', 'cotovelo']
  },

  // 8. Óleos, Azeites & Molhos
  {
    id: 'azeite',
    cat: 'general',
    label: 'Azeite',
    keywords: ['azeite', 'azeite virgem', 'azeite extra virgem']
  },
  {
    id: 'oleo',
    cat: 'general',
    label: 'Óleo',
    keywords: ['oleo', 'oleo vegetal', 'oleo de girassol']
  },
  {
    id: 'vinagre',
    cat: 'general',
    label: 'Vinagre',
    keywords: ['vinagre', 'balsamico']
  },
  {
    id: 'mostarda',
    cat: 'general',
    label: 'Mostarda',
    keywords: ['mostarda', 'dijon']
  },
  {
    id: 'maionese',
    cat: 'general',
    label: 'Maionese',
    keywords: ['maionese']
  },
  {
    id: 'azeitonas',
    cat: 'general',
    label: 'Azeitonas',
    keywords: ['azeitona', 'azeitonas']
  },

  // 9. Ervas, Especiarias & Condimentos
  {
    id: 'sal',
    cat: 'spices',
    label: 'Sal',
    keywords: ['sal', 'sal grosso', 'flor de sal', 'pitada de sal']
  },
  {
    id: 'pimenta',
    cat: 'spices',
    label: 'Pimenta',
    keywords: ['pimenta', 'pimenta preta', 'pimenta branca', 'pimentao-doce', 'colorau']
  },
  {
    id: 'piri_piri',
    cat: 'spices',
    label: 'Piri-piri & Picante',
    keywords: ['piri-piri', 'piripiri', 'picante', 'malagueta', 'chili', 'tabasco']
  },
  {
    id: 'canela',
    cat: 'spices',
    label: 'Canela',
    keywords: ['canela', 'pau de canela']
  },
  {
    id: 'baunilha',
    cat: 'spices',
    label: 'Baunilha',
    keywords: ['baunilha', 'essencia de baunilha']
  },
  {
    id: 'louro',
    cat: 'spices',
    label: 'Folha de Louro',
    keywords: ['louro', 'folha de louro', 'folhas de louro']
  },
  {
    id: 'salsa',
    cat: 'spices',
    label: 'Salsa',
    keywords: ['salsa', 'salsa picada', 'oregao', 'oregaos', 'tomilho', 'alecrim', 'hortela', 'erva']
  },
  {
    id: 'coentros',
    cat: 'spices',
    label: 'Coentros',
    keywords: ['coentros', 'coentro']
  },

  // 10. Bebidas & Vinhos
  {
    id: 'vinho_branco',
    cat: 'beverages',
    label: 'Vinho Branco',
    keywords: ['vinho branco', 'conhaque']
  },
  {
    id: 'vinho_tinto',
    cat: 'beverages',
    label: 'Vinho Tinto & Porto',
    keywords: ['vinho tinto', 'vinho do porto', 'porto', 'vinho']
  },
  {
    id: 'cerveja',
    cat: 'beverages',
    label: 'Cerveja',
    keywords: ['cerveja']
  },
  {
    id: 'cafe',
    cat: 'beverages',
    label: 'Café',
    keywords: ['cafe', 'expresso']
  },
  {
    id: 'agua',
    cat: 'general',
    label: 'Água / Caldo',
    keywords: ['agua', 'caldo']
  }
];

/**
 * Returns complete visual metadata for any recipe ingredient
 * @param {string} rawName - The ingredient name string (e.g. 'Farinha de trigo sem fermento')
 * @param {string} quantity - Quantity text (e.g. '400 g', 'q.b.')
 */
export function getIngredientInfo(rawName = '', quantity = '') {
  const norm = normalize(rawName);

  let matched = null;
  for (const rule of INGREDIENT_RULES) {
    if (rule.keywords.some((k) => norm.includes(k))) {
      matched = rule;
      break;
    }
  }

  // Fallback to general seasonings/condiments
  const item = matched || {
    id: 'temperos',
    cat: 'general',
    label: rawName
  };

  const catStyle = INGREDIENT_CATEGORIES[item.cat] || INGREDIENT_CATEGORIES.general;

  return {
    id: item.id,
    image: `./ingredients/${item.id}.svg`,
    name: rawName || item.label,
    cleanLabel: item.label,
    quantity: quantity || '',
    category: item.cat,
    categoryLabel: catStyle.label,
    theme: catStyle
  };
}

/**
 * Expands bundled seasonings or compound ingredient strings
 * (e.g., 'Azeite, salsa, sal e pimenta' with 'q.b.') into individual ingredient items
 * while preserving atomic items with descriptions (e.g. 'Bifes de vaca (vazia ou alcatra)').
 */
export function expandRecipeIngredients(ingredients = []) {
  const result = [];

  for (const item of ingredients) {
    if (!item) continue;
    const rawName = item.name || '';
    const quantity = item.quantity || '';

    // Check if it's a bundled comma-separated list of simple seasonings
    // (excluding items where commas are inside parentheses or specifying cuts)
    const withoutParens = rawName.replace(/\([^)]*\)/g, '');
    const isBundled =
      (withoutParens.includes(',') || withoutParens.includes(' e ')) &&
      (quantity === 'q.b.' || quantity === '1 cada' || !quantity) &&
      !rawName.toLowerCase().includes('vazia') &&
      !rawName.toLowerCase().includes('alcatra') &&
      !rawName.toLowerCase().includes('lombo') &&
      !rawName.toLowerCase().includes('gemas e claras') &&
      !rawName.toLowerCase().includes('sem fermento');

    if (isBundled) {
      const parts = withoutParens
        .split(/,\s*|\s+e\s+/)
        .map((p) => p.trim())
        .filter(Boolean);

      if (parts.length > 1) {
        for (const p of parts) {
          result.push({
            name: p.charAt(0).toUpperCase() + p.slice(1),
            quantity: quantity || 'q.b.'
          });
        }
        continue;
      }
    }

    result.push(item);
  }

  return result;
}
