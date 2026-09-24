const fs = require('fs');
const path = require('path');

// Read existing base script
const baseScript = fs.readFileSync(path.join(__dirname, 'generateDrinksData.cjs'), 'utf8');

// The 8 new coffee drinks
const coffeeDrinks = [
  {
    id: 'cappuccino_italiano',
    name: 'Cappuccino Italiano Clássico (Latte Art & Microespuma)',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Cafés & Barista ☕',
    technique: 'Espresso Extraction & Milk Steaming (Microespuma Aveludada)',
    description: 'A proporção áurea italiana (1/3 expresso, 1/3 leite vaporizado, 1/3 microespuma acetinada) com desenho de latte art e toque de cacau.',
    difficulty: 'Média',
    prep_time: '3 min',
    glass: 'Chávena Tradicional de Cappuccino (160 ml)',
    ice: 'Sem Gelo (Servido Quente a 65°C)',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Barista Clássico ☕',
    smoking_technique: null,
    bar_tools: ['Máquina de Expresso com Lança de Vapor', 'Jarro de Inox (Pitcher)', 'Chávena Aquecida'],
    ingredients: [
      { name: 'Café Expresso Curto Encorpado', quantity: '30 ml (1 bica)' },
      { name: 'Leite Fresco Gordo Bem Frio', quantity: '110 ml' },
      { name: 'Cacau em Pó Puro 100% ou Canela', quantity: 'Para polvilhar' }
    ],
    steps: [
      'Escalda a chávena de cerâmica com água quente.',
      'Tira um café expresso perfeito (com crema densa e aveludada) diretamente para a chávena.',
      'Deita o leite fresco gordo no jarro de inox até à base do bico.',
      'Insere a lança de vapor ligeiramente abaixo da superfície a 45 graus. Abre o vapor ao máximo para criar um vórtice e aerar o leite durante 3 segundos.',
      'Mergulha a lança um centímetro mais fundo para texturizar e aquecer o leite até 60-65°C, criando uma microespuma brilhante sem bolhas visíveis.',
      'Bate suavemente o jarro na bancada e faz movimentos circulares para homogeneizar a textura sedosa.',
      'Verte com fluxo contínuo no centro da chávena e finaliza com um movimento ondulatório de pulso para desenhar um coração ou rosetta.',
      'Polvilha levemente com cacau em pó a gosto.'
    ],
    bartender_tip: 'O leite nunca deve ultrapassar os 68°C! Acima dessa temperatura, as proteínas desnaturam e o leite ganha sabor a cozido perdendo a doçura natural.'
  },
  {
    id: 'latte_macchiato',
    name: 'Latte Macchiato em 3 Camadas Visuais',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Cafés & Barista ☕',
    technique: 'Layered Hot Milk, Espresso & Dense Foam',
    description: 'A perfeição estética em copo alto: leite quente no fundo, expresso escuro no meio e uma coroa imaculada de espuma de leite densa.',
    difficulty: 'Média',
    prep_time: '3 min',
    glass: 'Copo Alto de Vidro Transparente',
    ice: 'Sem Gelo (Servido Quente)',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Visual 3 Camadas 🥛',
    smoking_technique: null,
    bar_tools: ['Máquina de Expresso', 'Jarro de Inox', 'Copo Alto de Vidro'],
    ingredients: [
      { name: 'Leite Gordo Fresco Vaporizado', quantity: '180 ml' },
      { name: 'Café Expresso Curto Acabado de Tirar', quantity: '30 ml' },
      { name: 'Açúcar Mascavado ou Simples (Opcional)', quantity: 'A gosto' }
    ],
    steps: [
      'Vaporiza o leite fresco no jarro com bastante aeração para obter uma espuma fofa e espessa.',
      'Deita o leite vaporizado e a espuma no copo alto de vidro transparente.',
      'Deixa repousar durante 30 a 45 segundos (o leite líquido denso desce para a base e a espuma sobe para o cimo).',
      'Tira o café expresso para uma jarrinha medidora com bico.',
      'Verte o café expresso lentamente no centro da espuma: por ter menor densidade que o leite mas maior que a espuma, acomoda-se exatamente no meio.',
      'Admira a divisão nítida das 3 camadas e serve com colher longa.'
    ],
    bartender_tip: 'O intervalo de repouso de 30 segundos antes de deitar o café é o segredo físico que permite a separação milimétrica das camadas.'
  },
  {
    id: 'flat_white',
    name: 'Flat White Australiano (Duplo Ristretto & Microespuma)',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Cafés & Barista ☕',
    technique: 'Double Ristretto Extraction with Flat Microfoam',
    description: 'Nascido nos cafés de Melbourne e Sydney: o dobro da força de café com duplo ristretto suave coberto por uma microespuma ultra-fina e sedosa.',
    difficulty: 'Média',
    prep_time: '3 min',
    glass: 'Chávena Média de Cerâmica (160 ml)',
    ice: 'Sem Gelo (Quente)',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Herança Australiana 🇦🇺',
    smoking_technique: null,
    bar_tools: ['Máquina de Expresso', 'Jarro de Inox', 'Chávena Flat White'],
    ingredients: [
      { name: 'Duplo Ristretto Concentrado', quantity: '35 ml (2 extrações curtas)' },
      { name: 'Leite Gordo Fresco Vaporizado', quantity: '120 ml' }
    ],
    steps: [
      'Tira um duplo ristretto (cerca de 35 ml extraídos em apenas 20 segundos) para capturar as notas doces e ácidas dos grãos.',
      'Vaporiza o leite no jarro mantendo o vórtice ativo e pouca aeração superficial para criar uma microespuma elástica e plana ("flat").',
      'Roda o leite no jarro até parecer tinta branca espelhada.',
      'Verte sobre o duplo ristretto desde uma altura de 5 cm integrando a base e aproxima o bico no final para criar um coração artístico na superfície.',
      'Serve sem polvilhos para destacar o sabor puro do grão.'
    ],
    bartender_tip: 'O Flat White é a escolha de quem ama sentir o sabor verdadeiro e potente do café sem a espuma espessa e seca do cappuccino.'
  },
  {
    id: 'espresso_con_panna',
    name: 'Espresso con Panna com Natas Frescas Batidas',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Cafés & Barista ☕',
    technique: 'Short Espresso with Hand-Whipped Cream Cap',
    description: 'O luxo da cafetaria romana e vienense: café expresso curto intenso e quente coroado com uma nuvem de natas frescas batidas à mão.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Chávena de Expresso de Vidro',
    ice: 'Sem Gelo',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Clássico Romano 👑',
    smoking_technique: null,
    bar_tools: ['Máquina de Expresso', 'Batedor de Arame Pequeno'],
    ingredients: [
      { name: 'Café Expresso Curto Intenso', quantity: '25 ml' },
      { name: 'Natas Frescas Líquidas Bem Frias', quantity: '30 ml' },
      { name: 'Açúcar em Pó de Confeiteiro', quantity: '1 colher de café' },
      { name: 'Raspas de Chocolate Negro 70%', quantity: 'Para finalizar' }
    ],
    steps: [
      'Numa tacinha, bate as natas frias com o açúcar em pó com o batedor de arame até formar picos médios aveludados.',
      'Tira o café expresso curto para a chávena de vidro aquecida.',
      'Com uma colher, pousa uma generosa noz de natas batidas sobre o café quente.',
      'Decora com raspas finas de chocolate negro.',
      'Bebe imediatamente o café quente através da camada de natas frias.'
    ],
    bartender_tip: 'Não mistures com a colher! A genialidade desta bebida reside no contraste térmico na boca entre o café quente e amargo e as natas frias e doces.'
  },
  {
    id: 'cafe_bombon',
    name: 'Café Bombón Espanhol com Leite Condensado',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Cafés & Barista ☕',
    technique: 'Dense Condensed Milk Layering',
    description: 'A sobremesa dos cafés de Madrid e Valência: uma base espessa de leite condensado doce coberta por um café expresso escuro e aromático.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Pequeno de Vidro Transparente',
    ice: 'Sem Gelo',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Gulosice Espanhola 🇪🇸',
    smoking_technique: null,
    bar_tools: ['Copo de Vidro', 'Colher', 'Máquina de Expresso'],
    ingredients: [
      { name: 'Leite Condensado Espesso', quantity: '35 ml' },
      { name: 'Café Expresso Curto Acabado de Tirar', quantity: '30 ml' },
      { name: 'Canela em Pó ou Raspas de Limão', quantity: 'Opcional' }
    ],
    steps: [
      'Deita o leite condensado no fundo do copo de vidro transparente.',
      'Tira o café expresso para uma chávena à parte.',
      'Encosta as costas de uma colher à parede de vidro logo acima do leite condensado.',
      'Verte o café expresso quente lentamente sobre a colher para flutuar.',
      'Observa o contraste cromático perfeito entre o branco e o preto.',
      'Serve com colher para misturar no momento de beber.'
    ],
    bartender_tip: 'Nas Ilhas Canárias, juntam 15 ml de Licor 43, uma tira de casca de limão e um pau de canela a esta receita, criando o famoso Barraquito!'
  },
  {
    id: 'iced_caramel_macchiato',
    name: 'Iced Caramel Macchiato com Caramelo Salgado',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Cafés & Barista ☕',
    technique: 'Cold Built with Espresso Pour & Caramel Crosshatch',
    description: 'O café gelado mais cobiçado: leite fresco com xarope de baunilha, muito gelo, expresso duplo a flutuar e desenho axadrezado de caramelo.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Alto Transparente',
    ice: 'Gelo em Cubos Grandes',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Café Gelado Gourmet 🍯',
    smoking_technique: null,
    bar_tools: ['Copo Alto', 'Bisnaga de Caramelo', 'Jigger'],
    ingredients: [
      { name: 'Café Expresso Duplo Quente', quantity: '50 ml' },
      { name: 'Leite Fresco Gordo Bem Gelado', quantity: '140 ml' },
      { name: 'Xarope de Baunilha Artesanal', quantity: '20 ml' },
      { name: 'Calda Espessa de Caramelo Salgado', quantity: '2 colheres de sopa' },
      { name: 'Cubos de Gelo', quantity: 'Até cima do copo' }
    ],
    steps: [
      'No fundo do copo alto, coloca o xarope de baunilha.',
      'Adiciona o leite fresco gelado e mexe suavemente.',
      'Enche o copo até cima com cubos grandes de gelo.',
      'Verte o expresso duplo quente diretamente por cima do gelo: o café fica a flutuar no cimo criando um degradé visual espetacular.',
      'Com a bisnaga de caramelo, desenha uma grelha axadrezada generosa sobre o gelo e a espuma.',
      'Serve com palhinha.'
    ],
    bartender_tip: 'Não mistures antes de servir! A magia do drink está em tirar uma foto do degradé e permitir ao cliente mexer a palhinha para dosar o café e o caramelo.'
  },
  {
    id: 'cold_brew_artesanal',
    name: 'Cold Brew Artesanal Infundido a Frio 18 Horas',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Cafés & Barista ☕',
    technique: '18-Hour Slow Cold Water Steeping & Double Filtered',
    description: 'Extração lenta a frio durante 18 horas: doçura natural do grão 100% Arábica sem amargor nem acidez, servido com bloco de gelo transparente.',
    difficulty: 'Fácil',
    prep_time: '18 horas de infusão (2 min no serviço)',
    glass: 'Copo Rocks Baixo ou Tumbler',
    ice: 'Cubo Único Gigante de Gelo Translúcido',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Zero Acidez 🧊',
    smoking_technique: null,
    bar_tools: ['Frasco Hermético de Infusão', 'Filtro V60 ou Pano Fino'],
    ingredients: [
      { name: 'Café de Especialidade 100% Arábica (Moagem Grossa)', quantity: '50 g' },
      { name: 'Água Mineral Fria', quantity: '400 ml' },
      { name: 'Cubo Gigante de Gelo', quantity: '1 bloco' },
      { name: 'Casca de Laranja Fresca (Twist)', quantity: '1 tira (Opcional)' }
    ],
    steps: [
      'Num frasco de vidro limpo, junta o café com moagem grossa e a água mineral fria.',
      'Mexe suavemente para que todo o café fique embebido em água.',
      'Tapa o frasco e coloca no frigorífico durante 16 a 18 horas.',
      'Filtra o líquido através de um filtro de papel V60 ou pano de algodão fino sem espremer para manter a limpidez.',
      'Coloca o cubo gigante de gelo no copo rocks.',
      'Verte o Cold Brew concentrado sobre o gelo.',
      'Torce uma casca de laranja por cima para perfumar e serve.'
    ],
    bartender_tip: 'A extração a frio não dissolve os compostos amargos do grão, criando um café suave com notas naturais a cacau, nozes e caramelo.'
  },
  {
    id: 'cafe_mocha',
    name: 'Café Mocha Gourmet com Chocolate Negro Derretido',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Cafés & Barista ☕',
    technique: 'Melted Dark Ganache, Espresso & Steamed Milk with Whipped Cream',
    description: 'O encontro do café de barista com o chocolate artesanal: expresso duplo sobre chocolate negro 70% derretido, leite vaporizado e chantilly.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Caneca de Vidro com Pega',
    ice: 'Sem Gelo (Servido Quente)',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Chocolate & Café 🍫',
    smoking_technique: null,
    bar_tools: ['Máquina de Expresso', 'Jarro de Inox', 'Chantilly'],
    ingredients: [
      { name: 'Chocolate Negro 70% em Pedaços ou Ganache', quantity: '30 g' },
      { name: 'Café Expresso Duplo Quente', quantity: '50 ml' },
      { name: 'Leite Fresco Vaporizado Cremoso', quantity: '120 ml' },
      { name: 'Chantilly Fresco Firme', quantity: 'Para cobrir' },
      { name: 'Raspas de Chocolate Negro e Cacau', quantity: 'Para polvilhar' }
    ],
    steps: [
      'No fundo da caneca de vidro aquecida, coloca os pedaços de chocolate negro.',
      'Tira o expresso duplo quente diretamente por cima do chocolate e mexe com vigor até formar uma ganache sedosa e brilhante.',
      'Adiciona o leite vaporizado cremoso, integrando-o suavemente com o chocolate.',
      'Cobre o cimo com uma coroa generosa de chantilly fresco.',
      'Decora com raspas finas de chocolate negro e pó de cacau.',
      'Serve bem quente.'
    ],
    bartender_tip: 'Evita pós artificiais de chocolate: usar chocolate negro com 70% de cacau autêntico eleva este clássico ao nível de uma sobremesa gourmet.'
  }
];

// Reclassify existing drinks into 'cafes' if applicable
const reclassifiedIds = ['affogato_al_caffe', 'frappe_grego', 'dalgona', 'mazagran_portugues'];

const drinksDataFile = fs.readFileSync(path.join(__dirname, '../src/data/drinksData.js'), 'utf8');
const drinksJson = drinksDataFile.replace(/^[\s\S]*?export const DRINKS = /, '').replace(/;\s*$/, '');
let currentDrinks = JSON.parse(drinksJson);


console.log("Current drinks in memory:", currentDrinks.length);

// Reclassify coffee drinks
currentDrinks.forEach(d => {
  if (reclassifiedIds.includes(d.id)) {
    d.category = 'cafes';
    d.categoryLabel = 'Cafés & Barista ☕';
  }
});

// Append coffeeDrinks if not already present
coffeeDrinks.forEach(cDrink => {
  if (!currentDrinks.some(d => d.id === cDrink.id)) {
    currentDrinks.push(cDrink);
  }
});

console.log("New total drinks count:", currentDrinks.length);

// 1. Generate src/data/drinksImages.js
const imports = [];
const imageMapEntries = [];

currentDrinks.forEach(drink => {
  const camelName = drink.id.replace(/_([a-z0-9])/g, (_, letter) => letter.toUpperCase()) + 'Img';
  imports.push("import " + camelName + " from '@/assets/drinks/" + drink.id + ".jpg';");
  imageMapEntries.push("  " + drink.id + ": " + camelName + ",");
});

const drinksImagesContent = imports.join('\n') + '\n\nexport const DRINK_IMAGES = {\n' + imageMapEntries.join('\n') + '\n};\n';
fs.writeFileSync(path.join(__dirname, '../src/data/drinksImages.js'), drinksImagesContent, 'utf8');
console.log('Successfully wrote src/data/drinksImages.js with ' + currentDrinks.length + ' image mappings!');

// 2. Generate src/data/drinksData.js
const ALCOHOL_FILTERS = [
  { id: 'todos', label: 'Todas as Bebidas' },
  { id: 'alcoolicas', label: 'Alcoólicas 🍸' },
  { id: 'nao_alcoolicas', label: 'Sem Álcool (Virgin) 🥤' }
];

const DRINK_CATEGORIES = [
  { id: 'todas', label: 'Todas as Bebidas 🍹', icon: 'Sparkles', desc: 'Explora o cardápio completo com 110 opções' },
  { id: 'cafes', label: 'Cafés & Barista ☕', icon: 'Coffee', desc: 'Cappuccinos, Lattes em camadas, Cold Brews, Mochas e Espressos' },
  { id: 'fumo', label: 'Fumo Aromático 💨', icon: 'Wind', desc: 'Cocktails defumados com campânula, maçarico e madeiras nobres' },
  { id: 'energy', label: 'Energéticas & Mixes ⚡', icon: 'Zap', desc: 'Misturas vibrantes com Red Bull, Monster e destilados' },
  { id: 'cocktails', label: 'Cocktails Clássicos 🍸', icon: 'Wine', desc: 'Grandes clássicos internacionais de cocktail da IBA' },
  { id: 'short', label: 'Short Drinks 🥃', icon: 'GlassWater', desc: 'Bebidas curtas servidas em copos rocks ou taças coupe' },
  { id: 'long', label: 'Long Drinks 🥤', icon: 'Sparkles', desc: 'Cocktails refrescantes com bastante gelo e misturador' },
  { id: 'shots', label: 'Shots 🎯', icon: 'Flame', desc: 'Doses rápidas, camadas densas e rituais de balcão' },
  { id: 'hot', label: 'Hot Drinks 🔥', icon: 'Flame', desc: 'Bebidas quentes reconfortantes com especiarias e café' },
  { id: 'mocktails', label: 'Mocktails (Virgin) 🍹', icon: 'GlassWater', desc: 'Cocktails sofisticados 100% livres de álcool' },
  { id: 'soft', label: 'Soft Drinks & Refrescos 🍋', icon: 'GlassWater', desc: 'Limonadas artesanais, batidos, sodas e refrescos' },
  { id: 'portuguesas', label: 'Tradição Portuguesa 🇵🇹', icon: 'Wine', desc: 'Ponchas da Madeira, licores tradicionais e sangrias' }
];

const drinksDataContent = 'export const ALCOHOL_FILTERS = ' + JSON.stringify(ALCOHOL_FILTERS, null, 2) + ';\n\n' +
  'export const DRINK_CATEGORIES = ' + JSON.stringify(DRINK_CATEGORIES, null, 2) + ';\n\n' +
  'export const DRINKS = ' + JSON.stringify(currentDrinks, null, 2) + ';\n';

fs.writeFileSync(path.join(__dirname, '../src/data/drinksData.js'), drinksDataContent, 'utf8');
console.log('Successfully wrote src/data/drinksData.js with ' + currentDrinks.length + ' drinks!');
