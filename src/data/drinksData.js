export const ALCOHOL_FILTERS = [
  { id: 'todos', label: 'Todas' },
  { id: 'alcoolicas', label: 'Alcoólicas 🍸' },
  { id: 'nao_alcoolicas', label: 'Sem Álcool 🥤' }
];

export const DRINK_CATEGORIES = [
  { id: 'todas', label: 'Todas' },
  { id: 'criativos', label: 'Criativos & Especiais ✨' },
  { id: 'classicos', label: 'Clássicos do Bar 🍸' },
  { id: 'portuguesas', label: 'Tradicionais PT 🇵🇹' },
  { id: 'mocktails', label: 'Mocktails & Refrescos 🍹' },
  { id: 'sumos', label: 'Sumos & Batidos 🥤' },
  { id: 'cafes', label: 'Cafés & Chás Gelados ☕' }
];

export const DRINKS = [
  // --- CRIATIVOS & DESTAQUE ---
  {
    id: 'cocktail_fumegante',
    name: 'Cocktail Fumegante Mistério (Poção Violeta)',
    alcoholic: true,
    category: 'criativos',
    categoryLabel: 'Cocktail Criativo',
    description: 'Cocktail violeta fascinante com névoa aromática fumegante, notas florais e toque cítrico refrescante.',
    difficulty: 'Média',
    prep_time: '5 min',
    glass: 'Taça de Martini / Cocktail',
    ice: 'Gelo para agitar',
    badge: 'Destaque ✨',
    ingredients: [
      { name: 'Gin premium ou Vodka', quantity: '50 ml' },
      { name: 'Licor de violeta ou flor de sabugueiro', quantity: '25 ml' },
      { name: 'Sumo de lima fresco', quantity: '20 ml' },
      { name: 'Xarope simples ou de amora', quantity: '15 ml' },
      { name: 'Gelo em cubos para agitar', quantity: '4 a 5 cubos' },
      { name: 'Gelo seco alimentar ou ramo de alecrim em brasa para fumegar', quantity: '1 unidade' }
    ],
    steps: [
      'Coloca uma taça de martini no congelador durante 10 minutos para arrefecer bem.',
      'Num shaker com cubos de gelo, deita o gin (ou vodka), o licor floral, o sumo de lima fresco e o xarope.',
      'Fecha bem o shaker e bate energicamente durante 15 a 20 segundos até a superfície exterior condensar e gelar.',
      'Verte a mistura através do passador para a taça de martini fria.',
      'Para o efeito fumegante místico: coloca com uma pinça uma pequena pedrinha de gelo seco no fundo (espera dissolver antes de beber) OU defuma um ramo de alecrim fresco com um maçarico e apoia na borda do copo.',
      'Serve de imediato com a névoa branca a transbordar da taça.'
    ],
    bartender_tip: 'O gelo seco nunca deve ser mastigado nem engolido; deixa a névoa atuar ou usa a técnica segura de fumo de alecrim tostado para aromatizar!'
  },
  {
    id: 'aurora_boreal',
    name: 'Cocktail Mágico Aurora Boreal',
    alcoholic: false,
    category: 'criativos',
    categoryLabel: 'Mocktail Molecular',
    description: 'Bebida mágica sem álcool com chá Butterfly Pea: muda naturalmente de azul cobalto para violeta cintilante ao juntar a lima.',
    difficulty: 'Fácil',
    prep_time: '6 min',
    glass: 'Copo Alto (Highball)',
    ice: 'Gelo em cubos abundante',
    badge: 'Efeito Mágico 🔮',
    ingredients: [
      { name: 'Flores de chá Butterfly Pea (Clitoria ternatea)', quantity: '5 a 6 flores' },
      { name: 'Água a ferver para infusão', quantity: '100 ml' },
      { name: 'Sumo de lima acabado de espremer', quantity: '30 ml' },
      { name: 'Xarope simples de açúcar ou mel', quantity: '20 ml' },
      { name: 'Água tónica premium ou água com gás', quantity: '120 ml' },
      { name: 'Rodelas de lima e hortelã', quantity: 'para guarnecer' }
    ],
    steps: [
      'Infusiona as flores azuis na água a ferver durante 5 minutos até obteres um azul cobalto profundo. Deixa arrefecer.',
      'Enche um copo alto com bastante gelo até ao topo.',
      'Adiciona o xarope de açúcar e completa com água tónica até cerca de 3/4 do copo.',
      'Verte delicadamente o chá azul frio por cima com as costas de uma colher para criar uma camada azul.',
      'No momento de servir à frente de todos, deita o sumo de lima fresco: a acidez faz a cor transformar-se instantaneamente num rosa-violeta luminoso!',
      'Decora com rodela de lima fresca e ramo de hortelã.'
    ],
    bartender_tip: 'A mudança de cor acontece devido ao pH natural da antocianina da flor que reage com o ácido cítrico da lima.'
  },

  // --- TRADICIONAIS PORTUGUESAS ---
  {
    id: 'poncha',
    name: 'Poncha Tradicional da Madeira',
    alcoholic: true,
    category: 'portuguesas',
    categoryLabel: 'Tradicional Portuguesa',
    description: 'A emblemática bebida madeirense com aguardente de cana da Madeira, mel de abelhas e sumo de limão fresco batida com caralhinho.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo pequeno de poncha (On the rocks)',
    ice: 'Sem gelo ou com 1 cubo',
    badge: 'Madeira 🇵🇹',
    ingredients: [
      { name: 'Aguardente de cana da Madeira 50°', quantity: '100 ml' },
      { name: 'Mel de abelhas puro (ou cana)', quantity: '2 a 3 colheres de sopa cheias' },
      { name: 'Sumo de limão fresco', quantity: 'sumo de 2 limões' },
      { name: 'Casca fina de 1 limão', quantity: 'sem a parte branca' },
      { name: 'Sumo de laranja fresco (opcional para poncha regional)', quantity: 'sumo de 1 laranja' }
    ],
    steps: [
      'Coloca as cascas de limão no fundo de um jarro ou copo alto e junta o mel.',
      'Com o caralhinho (ou pilão de madeira), esmaga e macera as cascas no mel para extrair todos os óleos essenciais aromáticos.',
      'Adiciona o sumo de limão (e laranja, se usares) e mexe energicamente com o mexote/caralhinho em movimentos rápidos de rotação.',
      'Adiciona a aguardente de cana em fio, continuando a bater com vigor até formar uma ligeira espuma suave.',
      'Verte de imediato para copos pequenos. Aprecia em pequenos goles!'
    ],
    bartender_tip: 'O segredo da poncha está no bater enérgico entre as palmas das mãos com o tradicional caralhinho de madeira.'
  },
  {
    id: 'porto_tonico',
    name: 'Porto Tónico Refrescante',
    alcoholic: true,
    category: 'portuguesas',
    categoryLabel: 'Aperitivo Português',
    description: 'O aperitivo de verão clássico de Portugal com Vinho do Porto Branco Seco, água tónica gelada, hortelã e limão.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo de vinho largo ou balão',
    ice: 'Muitos cubos de gelo grandes',
    badge: 'Porto 🇵🇹',
    ingredients: [
      { name: 'Vinho do Porto Branco Extra Seco ou Dry', quantity: '60 ml' },
      { name: 'Água tónica premium bem gelada', quantity: '120 ml' },
      { name: 'Rodela de limão ou lima', quantity: '1 rodela' },
      { name: 'Ramo de hortelã fresca', quantity: '1 ramo' },
      { name: 'Cubos de gelo grandes', quantity: 'q.b.' }
    ],
    steps: [
      'Enche uma taça de vinho ou copo balão com gelo de boa qualidade até ao topo.',
      'Verte o Vinho do Porto Branco sobre o gelo.',
      'Adiciona a água tónica gelada lentamente pelas costas da colher para preservar as bolhas finas.',
      'Bate suavemente o ramo de hortelã na mão para libertar os óleos e coloca-o no copo com a rodela de limão.',
      'Dá uma única mexida suave de baixo para cima com a colher de bar e serve de imediato.'
    ],
    bartender_tip: 'Usa Porto Branco Seco em vez de Doce para um aperitivo leve, fresco e equilibrado.'
  },
  {
    id: 'sangria_tinta',
    name: 'Sangria Tinta Tradicional Portuguesa',
    alcoholic: true,
    category: 'portuguesas',
    categoryLabel: 'Jarro Tradicional',
    description: 'A rainha dos jantares e esplanadas: vinho tinto encorpado, Licor Beirão, fruta fresca marinada, canela e gasosa.',
    difficulty: 'Fácil',
    prep_time: '15 min',
    glass: 'Copo de vinho ou jarro',
    ice: 'Gelo abundante',
    badge: 'Festa 🍷',
    ingredients: [
      { name: 'Vinho tinto jovem e frutado', quantity: '1 garrafa (750 ml)' },
      { name: 'Licor Beirão', quantity: '60 ml' },
      { name: 'Vinho do Porto Tinto ou Brandy', quantity: '50 ml' },
      { name: 'Refrigerante gasoso ou água com gás', quantity: '330 ml' },
      { name: 'Maçã em cubos pequenos', quantity: '1 unidade' },
      { name: 'Laranja em fatias', quantity: '1 unidade' },
      { name: 'Pau de canela', quantity: '1 a 2 unidades' },
      { name: 'Açúcar amarelo', quantity: '2 colheres de sopa' },
      { name: 'Ramos de hortelã fresca', quantity: 'q.b.' }
    ],
    steps: [
      'Num jarro grande, coloca as frutas picadas (maçã, laranja), o açúcar amarelo e os paus de canela.',
      'Rega com o Licor Beirão e o Porto (ou brandy), mexe e deixa macerar durante 15 a 20 minutos para a fruta absorver os aromas.',
      'Verte a garrafa de vinho tinto bem fresca.',
      'No momento de servir à mesa, junta bastante gelo e completa com o refrigerante com gás bem fresco.',
      'Finaliza com as folhas de hortelã e mexe com uma colher comprida.'
    ],
    bartender_tip: 'Deixar a fruta macerar nos licores antes de adicionar o vinho faz toda a diferença no sabor final.'
  },
  {
    id: 'sangria_branca',
    name: 'Sangria Branca de Espumante e Frutos Silvestres',
    alcoholic: true,
    category: 'portuguesas',
    categoryLabel: 'Jarro Sofisticado',
    description: 'Espumante bruto refrescante com frutos vermelhos silvestres, maçã verde, hortelã fresca e um toque cítrico suave.',
    difficulty: 'Fácil',
    prep_time: '10 min',
    glass: 'Copo de vinho branco ou flûte',
    ice: 'Cubos de gelo frescos',
    badge: 'Elegante 🥂',
    ingredients: [
      { name: 'Espumante bruto ou vinho branco seco', quantity: '1 garrafa (750 ml)' },
      { name: 'Frutos vermelhos (morangos, framboesas, mirtilos)', quantity: '150 g' },
      { name: 'Licor de laranja (Cointreau) ou Licor Beirão', quantity: '50 ml' },
      { name: 'Maçã verde fatiada finamente', quantity: '1 unidade' },
      { name: 'Água com gás ou gasosa de limão', quantity: '250 ml' },
      { name: 'Folhas de hortelã fresca', quantity: '1 punhado' },
      { name: 'Açúcar ou xarope simples', quantity: '1 colher de sopa' }
    ],
    steps: [
      'Num jarro transparente, coloca os frutos vermelhos e a maçã verde com a colher de açúcar e o licor.',
      'Mexe suavemente e deixa marinar no frigorífico 10 minutos.',
      'Adiciona bastantes cubos de gelo.',
      'Verte o espumante ou vinho branco gelado e de seguida a água com gás/gasosa.',
      'Decora com ramos de hortelã e serve bem frio.'
    ],
    bartender_tip: 'Para manter o gás do espumante até ao final, verte sempre o espumante devagar e mexe apenas uma vez suavemente.'
  },
  {
    id: 'ginjinha',
    name: 'Ginjinha Tradicional em Copo de Chocolate',
    alcoholic: true,
    category: 'portuguesas',
    categoryLabel: 'Licor Típico',
    description: 'O licor doce e aveludado de ginjas silvestres portuguesas servido no tradicional copo comestível de chocolate crocante.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo de chocolate comestível ou cálice',
    ice: 'Sem gelo (temperatura ambiente fresca)',
    badge: 'Óbidos 🇵🇹',
    ingredients: [
      { name: 'Licor de Ginjinha Portuguesa (com ou sem elas)', quantity: '40 ml' },
      { name: 'Copos de chocolate preto', quantity: '1 a 2 unidades' },
      { name: 'Ginjas marinadas no licor', quantity: '1 a 2 frutos' }
    ],
    steps: [
      'Prepara os copos pequenos de chocolate preto numa travessa decorativa.',
      'Agita ligeiramente a garrafa de ginjinha para que o licor fique homogéneo.',
      'Enche cada copo de chocolate até quase ao rebordo com o licor de ginjinha.',
      'Coloca uma ginja no fundo de cada copo.',
      'Consome bebendo o licor aromático e mastigando o copo de chocolate logo de seguida.'
    ],
    bartender_tip: 'O contraste entre o licor doce e alcoólico de ginja e a acidez do chocolate preto é uma das melhores experiências da doçaria e bar português.'
  },

  // --- CLÁSSICOS INTERNACIONAIS DO BAR ---
  {
    id: 'caipirinha',
    name: 'Caipirinha Clássica de Lima',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Clássico Internacional',
    description: 'O clássico mundial brasileiro com cachaça, lima fresca macerada com açúcar de cana e muito gelo picado.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Copo Baixo (Old Fashioned)',
    ice: 'Gelo picado abundante',
    badge: 'Popular 🇧🇷',
    ingredients: [
      { name: 'Cachaça de boa qualidade', quantity: '60 ml' },
      { name: 'Lima fresca sumarenta', quantity: '1 unidade inteira' },
      { name: 'Açúcar branco refinado ou mascavado', quantity: '2 colheres de sobremesa' },
      { name: 'Gelo picado', quantity: '1 copo cheio' }
    ],
    steps: [
      'Lava a lima, retira as duas extremidades e o veio branco central (para evitar o amargor).',
      'Corta a lima em 8 gomos pequenos e coloca-os diretamente no copo baixo.',
      'Adiciona as 2 colheres de açúcar por cima das limas.',
      'Com um pilão de bar, macera suavemente as limas pressionando apenas a polpa sem esmagar demasiado a casca verde.',
      'Enche o copo com gelo picado até transbordar.',
      'Verte a cachaça e mexe bem com uma colher de baixo para cima para diluir o açúcar no gelo.',
      'Serve com duas palhinhas curtas.'
    ],
    bartender_tip: 'Retirar o veio branco central da lima é o segredo de ouro para que a caipirinha nunca fique amarga!'
  },
  {
    id: 'mojito',
    name: 'Mojito Cubano Tradicional',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Clássico Refrescante',
    description: 'Fresco e revigorante com rum branco, hortelã fresca aromática, lima, açúcar e água gaseificada gelada.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo Alto (Collins / Highball)',
    ice: 'Gelo picado',
    badge: 'Cuba 🇨🇺',
    ingredients: [
      { name: 'Rum branco (Carta Blanca)', quantity: '50 ml' },
      { name: 'Folhas de hortelã fresca selecionadas', quantity: '10 a 12 folhas' },
      { name: 'Lima fresca cortada em gomos', quantity: 'metade de 1 lima' },
      { name: 'Açúcar de cana ou xarope simples', quantity: '2 colheres de chá' },
      { name: 'Água com gás (Soda)', quantity: 'para completar (cerca de 60 ml)' },
      { name: 'Gelo picado', quantity: 'q.b.' }
    ],
    steps: [
      'No copo alto, coloca as folhas de hortelã, os gomos de lima e o açúcar.',
      'Com um pilão, pressiona delicadamente para libertar os sumos e o aroma da hortelã (sem rasgar as folhas para não amargar).',
      'Enche metade do copo com gelo picado.',
      'Adiciona o rum branco e mexe bem para incorporar o açúcar.',
      'Adiciona mais gelo picado até ao topo e completa com a água com gás.',
      'Dá uma leve mexida de baixo para cima, decora com um ramo generoso de hortelã fresca e uma rodela de lima.'
    ],
    bartender_tip: 'Bate o ramo de hortelã nas costas da mão antes de colocar no copo para libertar um perfume intenso que se sente no primeiro gole.'
  },
  {
    id: 'margarita',
    name: 'Margarita Clássica com Bordo de Sal',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Clássico Mexicano',
    description: 'Equilíbrio supremo entre tequila prata, licor de laranja Triple Sec e sumo de lima fresco com aro crocante de sal marinho.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Taça Margarita / Coupe',
    ice: 'Gelo para bater no shaker',
    badge: 'México 🇲🇽',
    ingredients: [
      { name: 'Tequila Prata (Blanco) 100% Agave', quantity: '50 ml' },
      { name: 'Triple Sec ou Cointreau', quantity: '25 ml' },
      { name: 'Sumo de lima fresca acabado de espremer', quantity: '25 ml' },
      { name: 'Sal marinho fino ou flor de sal', quantity: 'para o bordo' },
      { name: 'Gomo de lima', quantity: 'para passar na taça e decorar' },
      { name: 'Cubos de gelo', quantity: '5 a 6 cubos' }
    ],
    steps: [
      'Passa o gomo de lima pelo rebordo exterior da taça.',
      'Pressiona o rebordo num pratinho com sal marinho fino para criar uma crosta uniforme.',
      'Enche o shaker com cubos de gelo.',
      'Junta a tequila, o Triple Sec e o sumo de lima acabado de espremer.',
      'Bate energicamente durante 15 segundos até o shaker gelar.',
      'Filtra a bebida com cuidado para a taça preparada, sem tocar no bordo de sal.'
    ],
    bartender_tip: 'Aplica o sal apenas no rebordo exterior da taça para que não caia sal dentro do cocktail e estrague o equilíbrio.'
  },
  {
    id: 'pina_colada',
    name: 'Piña Colada Caribenha',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Cocktail Tropical',
    description: 'Cremosa e aveludada com rum branco, polpa de ananás doce, leite de coco espesso e textura de smoothie gelado.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo Hurricane ou Tropical',
    ice: 'Gelo triturado batido',
    badge: 'Tropical 🌴',
    ingredients: [
      { name: 'Rum branco caribenho', quantity: '50 ml' },
      { name: 'Sumo de ananás natural (ou polpa)', quantity: '100 ml' },
      { name: 'Creme ou leite de coco espesso', quantity: '50 ml' },
      { name: 'Gelo picado', quantity: '1 chávena cheia' },
      { name: 'Triângulo de ananás e cereja em calda', quantity: 'para guarnecer' }
    ],
    steps: [
      'No liquidificador, junta o rum branco, o sumo de ananás bem fresco, o creme de coco e o gelo picado.',
      'Tritura em velocidade máxima durante 30 a 40 segundos até obteres uma textura homogénea, fofa e cremosa como frappé.',
      'Verte para um copo alto tipo Hurricane.',
      'Encaixa uma fatia triangular de ananás no bordo e adiciona uma cereja marasquino com palhinha.'
    ],
    bartender_tip: 'Usar creme de coco espesso em vez de leite de coco magro garante aquela textura aveludada inconfundível dos melhores resorts caribenhos.'
  },
  {
    id: 'aperol_spritz',
    name: 'Aperol Spritz Italiano',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Aperitivo Veneziano',
    description: 'O famoso spritz alaranjado de Veneza com Aperol, espumante Prosecco, toque de água com gás e fatia de laranja.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo de vinho balão grande',
    ice: 'Gelo em cubos abundante',
    badge: 'Itália 🇮🇹',
    ingredients: [
      { name: 'Prosecco DOC ou espumante seco', quantity: '90 ml (3 partes)' },
      { name: 'Aperol', quantity: '60 ml (2 partes)' },
      { name: 'Água com gás (Soda)', quantity: '30 ml (1 parte)' },
      { name: 'Rodela de laranja fresca', quantity: '1 unidade' },
      { name: 'Cubos de gelo grandes', quantity: 'copo cheio' }
    ],
    steps: [
      'Enche um copo de vinho balão grande com muito gelo.',
      'Verte primeiro o Prosecco (para evitar que o Aperol assente no fundo).',
      'Adiciona o Aperol num movimento circular.',
      'Finaliza com o jorro de água com gás.',
      'Mexe suavemente uma única vez de baixo para cima.',
      'Mergulha a rodela de laranja suculenta e serve imediatamente.'
    ],
    bartender_tip: 'Segue a clássica regra italiana 3-2-1: 3 partes de espumante, 2 partes de Aperol e 1 parte de soda!'
  },
  {
    id: 'espresso_martini',
    name: 'Espresso Martini',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Cocktail de Café',
    description: 'Elegante, aveludado e estimulante: vodka, licor de café Kahlúa e café expresso quente com espuma densa de crema.',
    difficulty: 'Média',
    prep_time: '5 min',
    glass: 'Taça de Martini / Coupe',
    ice: 'Gelo para bater no shaker',
    badge: 'Energia ☕',
    ingredients: [
      { name: 'Vodka pura de qualidade', quantity: '50 ml' },
      { name: 'Licor de café (Kahlúa ou Tia Maria)', quantity: '25 ml' },
      { name: 'Café expresso forte acabado de tirar', quantity: '30 ml (1 bica curta)' },
      { name: 'Xarope simples de açúcar (opcional)', quantity: '10 ml' },
      { name: 'Grãos de café torrado', quantity: '3 grãos para guarnecer' },
      { name: 'Gelo em cubos abundantes', quantity: '5 a 6 cubos' }
    ],
    steps: [
      'Tira uma bica de café expresso bem forte e deixa amornar ligeiramente 1 minuto.',
      'Enche o shaker com bastante gelo rígido.',
      'Deita a vodka, o licor de café, o café expresso fresco e o xarope de açúcar.',
      'Bate vigorosamente com toda a energia durante 20 segundos para criar a espuma aveludada clássica.',
      'Verte com coador de rede fina para a taça de martini gelada.',
      'A espuma bege subirá à superfície: coloca delicadamente 3 grãos de café no centro formando um triângulo.'
    ],
    bartender_tip: 'Os 3 grãos de café representam tradicionalmente saúde, riqueza e felicidade!'
  },
  {
    id: 'gin_tonico',
    name: 'Gin Tónico com Zimbro e Lima',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Cocktail Botânico',
    description: 'Gin premium aromático com bagas de zimbro esmagadas, zeste de lima e água tónica premium com bolha fina.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Copo Balão Grande',
    ice: 'Grandes cubos de gelo maciço',
    badge: 'Botânico 🍸',
    ingredients: [
      { name: 'Gin premium (London Dry ou floral)', quantity: '50 ml' },
      { name: 'Água tónica premium (fever-tree ou similar)', quantity: '150 ml' },
      { name: 'Bagas de zimbro secas', quantity: '4 a 5 bagas' },
      { name: 'Zeste (casca fina) de lima fresca', quantity: '1 espiral' },
      { name: 'Cubos de gelo maciço', quantity: 'copo cheio' }
    ],
    steps: [
      'Gela o copo balão rodando pedras de gelo e descarta a água que derreter.',
      'Esmaga ligeiramente as bagas de zimbro entre os dedos para libertar o aroma e coloca no copo.',
      'Verte o gin sobre o gelo e deixa repousar 15 segundos para aromatizar.',
      'Inclina o copo e verte a água tónica gelada lentamente com a colher espiral para não quebrar a bolha.',
      'Torce a zeste de lima sobre o copo para borrifar os óleos cítricos essenciais e coloca no interior.',
      'Não batas nem mexas em excesso: basta um toque suave de baixo para cima.'
    ],
    bartender_tip: 'Nunca uses gelo quebrado ou oco: gelo grande e translúcido não derrete depressa e mantém a pureza do gin.'
  },
  {
    id: 'negroni',
    name: 'Negroni Clássico Italiano',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Clássico Amargo & Doce',
    description: 'A perfeição da coquetelaria italiana: partes rigorosamente iguais de Gin, Campari e Vermute tinto doce com zeste de laranja.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Baixo (Tumbler / Old Fashioned)',
    ice: 'Cubo de gelo grande único',
    badge: 'Intenso 🍊',
    ingredients: [
      { name: 'Gin London Dry', quantity: '30 ml' },
      { name: 'Campari Bitter', quantity: '30 ml' },
      { name: 'Vermute tinto doce (Carpano ou Martini Rosso)', quantity: '30 ml' },
      { name: 'Casca ou rodela de laranja fresca', quantity: '1 unidade' },
      { name: 'Cubo de gelo maciço grande', quantity: '1 bloco' }
    ],
    steps: [
      'Num copo misturador ou diretamente no copo baixo com um grande cubo de gelo, junta o gin, o Campari e o vermute tinto.',
      'Com uma colher de bar comprida, mexe suavemente durante 30 segundos para gelar e atingir a diluição perfeita.',
      'Corta uma tira larga de casca de laranja.',
      'Espreme a casca sobre o copo libertando os óleos aromáticos e passa a casca no rebordo.',
      'Coloca a casca no copo e serve.'
    ],
    bartender_tip: 'O Negroni é uma das poucas bebidas que nunca deve ser agitada num shaker: mexe-se sempre com colher para ficar aveludado e cristalino.'
  },
  {
    id: 'moscow_mule',
    name: 'Moscow Mule na Caneca de Cobre',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Cocktail Refrescante',
    description: 'Vodka suave, sumo de lima fresco e cerveja de gengibre picante e efervescente servida numa caneca de cobre gelada.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Caneca de Cobre tradicional (Copper Mug)',
    ice: 'Gelo picado abundante',
    badge: 'Caneca de Cobre 🧊',
    ingredients: [
      { name: 'Vodka', quantity: '50 ml' },
      { name: 'Cerveja de gengibre (Ginger Beer com gás)', quantity: '120 ml' },
      { name: 'Sumo de lima fresco', quantity: '20 ml' },
      { name: 'Rodela de lima fresca', quantity: '1 unidade' },
      { name: 'Ramo de hortelã fresca', quantity: '1 ramo' },
      { name: 'Gelo picado', quantity: 'copo cheio' }
    ],
    steps: [
      'Enche a caneca de cobre tradicional com bastante gelo picado até ao topo.',
      'Verte a vodka e o sumo de lima fresco acabado de espremer.',
      'Completa com a cerveja de gengibre (Ginger Beer) gelada.',
      'Mexe suavemente para misturar os ingredientes.',
      'Decora com uma rodela de lima e o ramo de hortelã no topo.'
    ],
    bartender_tip: 'A caneca de cobre não é só visual: o metal conduz o frio instantaneamente, mantendo o cocktail gelado do primeiro ao último gole.'
  },
  {
    id: 'daiquiri',
    name: 'Daiquiri de Morango Frappé',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Cocktail Frutado',
    description: 'Morangos maduros e doces triturados com rum branco, sumo de lima fresco e gelo tipo granizado.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Taça Coupe ou Margarita',
    ice: 'Gelo triturado no liquidificador',
    badge: 'Morango 🍓',
    ingredients: [
      { name: 'Rum branco', quantity: '50 ml' },
      { name: 'Morangos frescos maduros lavados', quantity: '6 a 8 unidades' },
      { name: 'Sumo de lima fresco', quantity: '25 ml' },
      { name: 'Xarope simples de açúcar', quantity: '20 ml' },
      { name: 'Gelo picado', quantity: '1 chávena' }
    ],
    steps: [
      'Retira os pés dos morangos e corta-os ao meio.',
      'Coloca os morangos, o rum branco, o sumo de lima, o xarope de açúcar e o gelo no liquidificador.',
      'Tritura em pulso até o gelo desfazer e obteres um puré suave e cremoso tipo granizado.',
      'Verte para uma taça de cocktail larga.',
      'Decora com um morango fresco na borda da taça.'
    ],
    bartender_tip: 'Se os teus morangos forem muito doces, podes reduzir um pouco o xarope de açúcar para evidenciar a acidez fresca da lima.'
  },
  {
    id: 'tequila_sunrise',
    name: 'Tequila Sunrise Degradé',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Cocktail Icónico',
    description: 'O famoso cocktail com as cores do nascer do sol: tequila prata, sumo de laranja fresco e fio de granadina que desce ao fundo.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Alto (Highball)',
    ice: 'Gelo em cubos',
    badge: 'Cores Vivas 🌅',
    ingredients: [
      { name: 'Tequila Prata', quantity: '50 ml' },
      { name: 'Sumo de laranja natural fresco', quantity: '120 ml' },
      { name: 'Xarope de groselha ou granadina', quantity: '15 ml' },
      { name: 'Rodela de laranja e cereja', quantity: 'para guarnecer' },
      { name: 'Gelo em cubos', quantity: 'q.b.' }
    ],
    steps: [
      'Enche um copo alto com cubos de gelo.',
      'Verte a tequila e completa com o sumo de laranja fresco, mexendo ligeiramente.',
      'Com cuidado, verte a granadina lentamente pelo rebordo interior do copo ou com as costas de uma colher.',
      'Não mexas! A granadina, sendo mais densa, desce suavemente para o fundo, criando o espetacular degradé vermelho, laranja e amarelo.',
      'Decora com uma rodela de laranja e cereja marasquino no topo com palhinha.'
    ],
    bartender_tip: 'O segredo visual é nunca mexer após verter a granadina: bebe com palhinha para sentir a evolução dos sabores da base ao topo.'
  },
  {
    id: 'blue_lagoon',
    name: 'Blue Lagoon Tropical',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Cocktail Azul Elétrico',
    description: 'Vibrante azul oceânico com vodka, licor Blue Curaçao, sumo de limão e refrigerante lima-limão estaladiço.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Taça Hurricane ou Copo Alto',
    ice: 'Gelo em cubos abundante',
    badge: 'Azul Celeste 🌊',
    ingredients: [
      { name: 'Vodka', quantity: '50 ml' },
      { name: 'Licor Blue Curaçao', quantity: '25 ml' },
      { name: 'Sumo de limão fresco', quantity: '20 ml' },
      { name: 'Refrigerante de lima-limão (Sprite ou 7Up)', quantity: '100 ml' },
      { name: 'Rodela de limão e cereja', quantity: 'para guarnecer' }
    ],
    steps: [
      'Num shaker com gelo, agita a vodka, o Blue Curaçao e o sumo de limão fresco.',
      'Enche um copo alto com cubos de gelo.',
      'Coa a mistura azul elétrico para o copo com gelo.',
      'Completa delicadamente com o refrigerante lima-limão gelado.',
      'Decora com rodela de limão e cereja.'
    ],
    bartender_tip: 'O Blue Curaçao é feito com cascas de laranjas amargas da ilha caribenha de Curaçao, conferindo um sabor cítrico maravilhoso.'
  },
  {
    id: 'cuba_libre',
    name: 'Cuba Libre Tradicional',
    alcoholic: true,
    category: 'classicos',
    categoryLabel: 'Long Drink',
    description: 'Rum dourado, refrigerante de cola gelado, fatias de lima fresca e sumo cítrico espremido que corta a doçura.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Alto (Highball)',
    ice: 'Gelo em cubos abundante',
    badge: 'Rápido 🍹',
    ingredients: [
      { name: 'Rum dourado ou escuro caribenho', quantity: '50 ml' },
      { name: 'Refrigerante de cola bem gelado', quantity: '130 ml' },
      { name: 'Sumo de meia lima fresca', quantity: '15 ml' },
      { name: 'Gomos de lima fresca', quantity: '2 gomos' },
      { name: 'Cubos de gelo', quantity: 'q.b.' }
    ],
    steps: [
      'Enche um copo alto com gelo abundante.',
      'Espreme o sumo de meia lima diretamente sobre o gelo e deita os gomos dentro do copo.',
      'Adiciona o rum dourado.',
      'Completa com a cola bem gelada.',
      'Dá uma mexida muito suave e serve imediatamente.'
    ],
    bartender_tip: 'Um Cuba Libre não é apenas rum com cola: o sumo de lima fresca é o ingrediente obrigatório que define este clássico.'
  },

  // --- BEBIDAS NÃO ALCOÓLICAS (MOCKTAILS & REFRESCOS) ---
  {
    id: 'virgin_mojito',
    name: 'Virgin Mojito de Hortelã e Lima',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Mocktail Sem Álcool',
    description: 'Toda a frescura explosiva do Mojito sem uma gota de álcool: hortelã aromática, sumo de lima, açúcar de cana e água gaseificada.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Copo Alto (Highball)',
    ice: 'Gelo picado abundante',
    badge: 'Sem Álcool 🍃',
    ingredients: [
      { name: 'Folhas de hortelã fresca lavadas', quantity: '12 a 15 folhas' },
      { name: 'Lima cortada em gomos', quantity: '1 unidade inteira' },
      { name: 'Açúcar mascavado ou amarelo', quantity: '2 colheres de chá' },
      { name: 'Água com gás ou Ginger Ale gelada', quantity: '150 ml' },
      { name: 'Gelo picado', quantity: 'copo cheio' }
    ],
    steps: [
      'No fundo de um copo alto resistente, coloca os gomos de lima, as folhas de hortelã e o açúcar.',
      'Com um pilão de madeira, esmaga suavemente para libertar o sumo da lima e os óleos da hortelã.',
      'Enche o copo até ao topo com gelo picado fino.',
      'Completa com água com gás gelada (ou ginger ale para um toque extra crocante de gengibre).',
      'Mexe com a colher de baixo para cima para espalhar as folhas de hortelã e o sumo.',
      'Decora com um ramo verde vigoroso de hortelã e palhinha.'
    ],
    bartender_tip: 'Substituir a água com gás por Ginger Ale adiciona notas picantes de gengibre que compensam a ausência do rum!'
  },
  {
    id: 'san_francisco',
    name: 'San Francisco (Mocktail de Frutas Tropicais)',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Mocktail Sem Álcool',
    description: 'O clássico dos cocktails sem álcool: camadas sumarentas de laranja, ananás, pêssego, limão e bordo açucarado com groselha.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo Alto ou Taça Hurricane',
    ice: 'Gelo em cubos',
    badge: 'Vitamina C 🍊',
    ingredients: [
      { name: 'Sumo de laranja natural', quantity: '50 ml' },
      { name: 'Sumo de ananás natural', quantity: '50 ml' },
      { name: 'Néctar de pêssego', quantity: '40 ml' },
      { name: 'Sumo de limão fresco', quantity: '20 ml' },
      { name: 'Xarope de groselha ou granadina', quantity: '20 ml' },
      { name: 'Açúcar para o bordo do copo', quantity: 'q.b.' },
      { name: 'Gelo em cubos', quantity: 'q.b.' }
    ],
    steps: [
      'Molha o rebordo do copo com um pouco de groselha e pressiona num prato com açúcar para criar uma crosta rosa brilhante.',
      'No shaker com cubos de gelo, junta o sumo de laranja, ananás, pêssego e limão.',
      'Agita energicamente durante 15 segundos para emulsionar e criar espuma.',
      'Enche o copo preparado com cubos de gelo novos.',
      'Coa a mistura frutada para o copo.',
      'Deita lentamente o xarope de groselha pelas costas da colher para assentar no fundo com o contraste de cores perfeito.'
    ],
    bartender_tip: 'É o mocktail mais popular em esplanadas e hotéis de todo o mundo pelas suas cores vibrantes e sabor equilibrado.'
  },
  {
    id: 'pina_colada_virgem',
    name: 'Piña Colada Virgem (Coco Loco)',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Mocktail Sem Álcool',
    description: 'Batido tropical aveludado e sem álcool com polpa de ananás, leite de coco espesso e aroma a baunilha.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo Tropical',
    ice: 'Gelo triturado no liquidificador',
    badge: 'Cremoso 🥥',
    ingredients: [
      { name: 'Sumo natural de ananás bem maduro', quantity: '150 ml' },
      { name: 'Leite ou creme de coco espesso', quantity: '60 ml' },
      { name: 'Xarope de baunilha ou mel', quantity: '15 ml' },
      { name: 'Gelo picado', quantity: '1 chávena' },
      { name: 'Fatia de ananás para decorar', quantity: '1 unidade' }
    ],
    steps: [
      'No liquidificador, junta o sumo de ananás fresco, o creme de coco, o xarope de baunilha e o gelo picado.',
      'Bate na velocidade máxima durante 40 segundos até ficar completamente espumoso e com textura aveludada.',
      'Verte para um copo alto ou taça de sobremesa.',
      'Decora com um triângulo de ananás fresco e palhinha.'
    ],
    bartender_tip: 'Ideal para crianças e adultos que queiram desfrutar do ambiente de férias caribenho sem álcool.'
  },
  {
    id: 'limonada_hortela',
    name: 'Limonada de Frutos Vermelhos e Hortelã',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Refresco Natural',
    description: 'Limonada refrescante com puré de framboesas e morangos, sumo de limão fresco e folhas perfumadas de hortelã.',
    difficulty: 'Fácil',
    prep_time: '6 min',
    glass: 'Copo Alto ou Frasco Vintage (Mason Jar)',
    ice: 'Muitos cubos de gelo',
    badge: 'Refrescante 🍓',
    ingredients: [
      { name: 'Morangos e framboesas frescas', quantity: '100 g' },
      { name: 'Sumo de limão fresco', quantity: 'sumo de 2 limões' },
      { name: 'Água fresca com ou sem gás', quantity: '250 ml' },
      { name: 'Açúcar de cana ou mel', quantity: '2 colheres de sopa' },
      { name: 'Folhas de hortelã fresca', quantity: '8 folhas' },
      { name: 'Gelo em cubos', quantity: 'q.b.' }
    ],
    steps: [
      'Numa tigela, esmaga os frutos vermelhos com o açúcar e o sumo de limão com um garfo até formar uma calda rústica.',
      'Passa a mistura para um copo grande ou jarro com bastante gelo.',
      'Junta as folhas de hortelã ligeiramente estaladas.',
      'Completa com a água bem fresca (com ou sem gás conforme a preferência).',
      'Mexe bem e serve com rodelas de limão a boiar.'
    ],
    bartender_tip: 'A água com gás dá-lhe um toque efervescente muito próximo de um espumante de frutas sem álcool.'
  },
  {
    id: 'limonada_suica',
    name: 'Limonada Suíça Cremosa',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Refresco Cremoso',
    description: 'A famosa limonada batida com limas inteiras com casca, leite condensado e gelo: cremosa, espumante e agridoce.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo Alto',
    ice: 'Gelo batido',
    badge: 'Cremoso 🍋',
    ingredients: [
      { name: 'Limas frescas com casca fina lavadas', quantity: '3 unidades' },
      { name: 'Leite condensado', quantity: '4 colheres de sopa' },
      { name: 'Água bem gelada', quantity: '500 ml' },
      { name: 'Cubos de gelo', quantity: '1 chávena' }
    ],
    steps: [
      'Lava muito bem as limas, retira as pontas e corta em 4 gomos cada, retirando o miolo branco central.',
      'No liquidificador, coloca as limas com casca, a água gelada e o gelo.',
      'Bate no botão pulsar durante apenas 10 a 12 segundos (não batas muito para a casca não amargar!).',
      'Coa a mistura rapidamente por um passador de rede para um jarro.',
      'Devolve o líquido ao liquidificador, junta o leite condensado e bate mais 15 segundos até espumar.',
      'Serve de imediato enquanto está cremosa e espumante.'
    ],
    bartender_tip: 'Bater apenas alguns segundos no modo pulsar é a chave mágica: retira o sumo e os óleos da casca sem libertar o amargo.'
  },

  // --- SUMOS & BATIDOS NUTRITIVOS ---
  {
    id: 'smoothie_manga',
    name: 'Smoothie Tropical de Manga e Maracujá',
    alcoholic: false,
    category: 'sumos',
    categoryLabel: 'Smoothie Vitaminado',
    description: 'Textura sedosa de manga madura doce, a acidez perfumada do maracujá e a cremosidade do iogurte grego.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo Alto de Smoothie',
    ice: 'Gelo picado ou fruta congelada',
    badge: 'Fruta Pura 🥭',
    ingredients: [
      { name: 'Polpa de manga madura fresca ou congelada', quantity: '200 g' },
      { name: 'Polpa com sementes de maracujá fresco', quantity: '2 maracujás' },
      { name: 'Iogurte natural cremoso ou grego', quantity: '120 g' },
      { name: 'Sumo de laranja natural', quantity: '100 ml' },
      { name: 'Mel', quantity: '1 colher de chá' },
      { name: 'Gelo em cubos', quantity: '3 a 4 cubos' }
    ],
    steps: [
      'Reserva uma colher de chá de sementes de maracujá para a decoração final.',
      'Coloca no liquidificador a manga em cubos, a polpa de maracujá, o iogurte, o sumo de laranja e o mel.',
      'Tritura em alta velocidade até obteres um smoothie cremoso e espesso.',
      'Deita no copo alto.',
      'Decora o topo com as sementes de maracujá reservadas e uma folhinha de hortelã.'
    ],
    bartender_tip: 'Se congelares a manga previamente em cubos, o smoothie fica com a consistência de um gelado cremoso delicioso.'
  },
  {
    id: 'detox_verde',
    name: 'Sumo Detox Verde Energético',
    alcoholic: false,
    category: 'sumos',
    categoryLabel: 'Sumo Funcional',
    description: 'Revitalizante e purificante: maçã verde ácida, pepino refrescante, espinafres tenros, gengibre picante e água de coco.',
    difficulty: 'Fácil',
    prep_time: '6 min',
    glass: 'Copo Alto',
    ice: 'Cubos de gelo',
    badge: 'Detox 🍏',
    ingredients: [
      { name: 'Maçã verde (Granny Smith) com casca', quantity: '1 unidade' },
      { name: 'Pepino com casca', quantity: 'metade de 1 unidade' },
      { name: 'Folhas de espinafres frescos baby', quantity: '1 chávena cheia' },
      { name: 'Gengibre fresco ralado', quantity: '1 rodela pequena' },
      { name: 'Sumo de limão fresco', quantity: 'metade de 1 limão' },
      { name: 'Água de coco bem fresca', quantity: '200 ml' }
    ],
    steps: [
      'Lava muito bem todos os vegetais e a maçã.',
      'Corta a maçã e o pepino em pedaços pequenos descartando as sementes da maçã.',
      'Coloca no liquidificador os espinafres, a maçã, o pepino, o gengibre, o sumo de limão e a água de coco.',
      'Bate tudo em velocidade máxima durante 1 minuto até ficar completamente líquido e homogéneo.',
      'Se preferires mais liso, podes passar por um passador fino (ou bebe com a fibra nutritiva).',
      'Serve de imediato com cubos de gelo.'
    ],
    bartender_tip: 'O toque de gengibre e limão equilibra os vegetais e ativa o metabolismo logo pela manhã.'
  },
  {
    id: 'mango_lassi',
    name: 'Lassi de Manga Indiano Tradicional',
    alcoholic: false,
    category: 'sumos',
    categoryLabel: 'Bebida Tradicional Indiana',
    description: 'Bebida milenar cremosa e refrescante de iogurte natural com manga madura, cardamomo aromático e mel.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo Alto',
    ice: 'Gelo em cubos',
    badge: 'Indiana 🇮🇳',
    ingredients: [
      { name: 'Manga fresca madura bem doce', quantity: '1 manga grande (ou 250 g de polpa)' },
      { name: 'Iogurte natural cremoso inteiro', quantity: '200 g' },
      { name: 'Leite fresco gordo ou vegetal', quantity: '80 ml' },
      { name: 'Mel ou açúcar de cana', quantity: '1 colher de sopa' },
      { name: 'Cardamomo em pó', quantity: '1 pitada (1/4 colher de chá)' },
      { name: 'Pistácios picados finamente (opcional)', quantity: 'para polvilhar' }
    ],
    steps: [
      'Descasca e corta a polpa da manga em pedaços.',
      'No liquidificador, junta a manga, o iogurte natural, o leite, o mel e a pitada de cardamomo.',
      'Tritura durante 45 segundos até obteres uma consistência rica, homogénea e sedosa.',
      'Acrescenta 2 cubos de gelo e pulsa mais 5 segundos.',
      'Verte para os copos e polvilha com pistácios picados e uma ponta de cardamomo no topo.'
    ],
    bartender_tip: 'O cardamomo moído confere um toque exótico inconfundível que corta a doçura e refresca o paladar.'
  },
  {
    id: 'batido_morango',
    name: 'Batido Cremoso de Morango e Banana',
    alcoholic: false,
    category: 'sumos',
    categoryLabel: 'Batido Clássico',
    description: 'Morangos frescos doces batidos com banana madura cremosa, leite de amêndoa e sementes de chia saciantes.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Copo Alto',
    ice: 'Gelo triturado',
    badge: 'Energia 🍌',
    ingredients: [
      { name: 'Morangos maduros lavados', quantity: '8 a 10 morangos' },
      { name: 'Banana madura', quantity: '1 unidade' },
      { name: 'Leite fresco (ou de amêndoa/aveia)', quantity: '200 ml' },
      { name: 'Iogurte natural ou grego', quantity: '2 colheres de sopa' },
      { name: 'Sementes de chia ou aveia fina', quantity: '1 colher de chá' },
      { name: 'Mel (opcional)', quantity: '1 colher de chá' }
    ],
    steps: [
      'Coloca no liquidificador os morangos cortados, a banana em rodelas, o leite, o iogurte e o mel.',
      'Bate tudo durante 30 a 40 segundos até ficar super aveludado e cremoso.',
      'Verte para o copo e polvilha as sementes de chia por cima.',
      'Serve bem fresco com palhinha.'
    ],
    bartender_tip: 'A banana madura confere toda a doçura natural e textura aveludada dispensando açúcares refinados.'
  },

  // --- CAFÉS & CHÁS GELADOS ---
  {
    id: 'dalgona',
    name: 'Café Dalgona Gelado Cremoso',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Café Especial',
    description: 'Nuvem espumosa dourada de café batido aveludado pousada sobre leite bem fresco com cubos de gelo.',
    difficulty: 'Fácil',
    prep_time: '5 min',
    glass: 'Copo de Vidro Transparente',
    ice: 'Cubos de gelo grandes',
    badge: 'Tendência ☕',
    ingredients: [
      { name: 'Café solúvel clássico', quantity: '2 colheres de sopa cheias' },
      { name: 'Açúcar branco', quantity: '2 colheres de sopa cheias' },
      { name: 'Água a ferver', quantity: '2 colheres de sopa cheias' },
      { name: 'Leite fresco gordo ou vegetal', quantity: '200 ml' },
      { name: 'Cubos de gelo', quantity: '4 a 5 cubos' }
    ],
    steps: [
      'Numa tigela estreita, junta o café solúvel, o açúcar e a água a ferver na proporção rigorosa 1:1:1.',
      'Com uma batedeira elétrica (ou vara de arames), bate energicamente durante 2 a 3 minutos até transformar num creme dourado denso com picos firmes como merengue.',
      'Enche um copo de vidro transparente com cubos de gelo até metade e deita o leite bem fresco.',
      'Com uma colher, coloca a mousse de café batida por cima do leite.',
      'Mexe com a palhinha antes de beber para misturar a mousse com o leite fresco.'
    ],
    bartender_tip: 'A proporção 1:1:1 de café, açúcar e água quente é crucial para a emulsão bater até ao ponto de chantilly perfeito.'
  },
  {
    id: 'iced_tea',
    name: 'Iced Tea Caseiro de Pêssego e Limão',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Chá Gelado Artesanal',
    description: 'Chá preto infusionado com calda caseira de pêssegos frescos, sumo de limão, hortelã e muito gelo.',
    difficulty: 'Fácil',
    prep_time: '12 min',
    glass: 'Copo Alto ou Jarro de Vidro',
    ice: 'Gelo em cubos abundante',
    badge: 'Caseiro 🍑',
    ingredients: [
      { name: 'Chá preto de qualidade (sacos ou folhas)', quantity: '3 sacos' },
      { name: 'Água a ferver', quantity: '500 ml' },
      { name: 'Pêssegos maduros em fatias', quantity: '2 unidades' },
      { name: 'Sumo de limão fresco', quantity: 'sumo de 1 limão' },
      { name: 'Açúcar amarelo ou mel', quantity: '3 colheres de sopa' },
      { name: 'Ramos de hortelã fresca', quantity: 'q.b.' },
      { name: 'Cubos de gelo', quantity: 'abundante' }
    ],
    steps: [
      'Infusiona os sacos de chá preto na água a ferver durante 4 minutos. Retira os sacos e deixa arrefecer.',
      'Num tachinho, ferve as fatias de pêssego com o açúcar e 50 ml de água durante 5 minutos até ficarem macios e libertarem calda aromatizada. Deixa arrefecer.',
      'Num jarro grande com gelo, junta o chá preto frio, a calda com os pêssegos e o sumo de limão fresco.',
      'Mexe bem e finaliza com raminhos de hortelã.',
      'Serve bem gelado com uma fatia de pêssego no copo.'
    ],
    bartender_tip: 'Muito mais saudável e saboroso do que os refrigerantes industriais, sem corantes nem conservantes.'
  },
  {
    id: 'cha_hibisco',
    name: 'Chá Gelado de Hibisco e Frutos do Bosque',
    alcoholic: false,
    category: 'cafes',
    categoryLabel: 'Infusão Gelada',
    description: 'Infusão floral vermelha rubi de flores de hibisco secas, pau de canela, rodelas de laranja e frutos silvestres.',
    difficulty: 'Fácil',
    prep_time: '8 min',
    glass: 'Copo Alto de Vidro',
    ice: 'Gelo abundante',
    badge: 'Antioxidante 🌺',
    ingredients: [
      { name: 'Flores secas de hibisco', quantity: '2 colheres de sopa' },
      { name: 'Água a ferver', quantity: '500 ml' },
      { name: 'Pau de canela', quantity: '1 unidade' },
      { name: 'Rodelas de laranja fresca', quantity: '1 laranja' },
      { name: 'Frutos silvestres (amoras ou mirtilos)', quantity: '50 g' },
      { name: 'Mel ou xarope de agave', quantity: '2 colheres de sopa' },
      { name: 'Gelo em cubos', quantity: 'q.b.' }
    ],
    steps: [
      'Coloca o hibisco e o pau de canela na água a ferver e tapa durante 6 minutos para extrair a cor rubi intensa.',
      'Coa a infusão, adoça com o mel e deixa arrefecer completamente no frigorífico.',
      'Enche copos com bastante gelo, rodelas de laranja e frutos silvestres.',
      'Verte o chá de hibisco gelado sobre o gelo.',
      'Serve fresco e aromático.'
    ],
    bartender_tip: 'O hibisco é rico em vitamina C e antioxidantes, ajudando na hidratação e retenção de líquidos.'
  }
];
