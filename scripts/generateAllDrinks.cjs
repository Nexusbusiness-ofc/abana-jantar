const fs = require('fs');
const path = require('path');

// Read existing 52 drinks from generateDrinksData.cjs or define the complete list
const baseScript = fs.readFileSync(path.join(__dirname, 'generateDrinksData.cjs'), 'utf8');

// We'll extract the first 52 drinks and add the 50 new ones
const newDrinks = [
  // ==========================================
  // NOVOS COCKTAILS CLÁSSICOS & SHORT DRINKS
  // ==========================================
  {
    id: 'cosmopolitan',
    name: 'Cosmopolitan Glamour (Vodka Citron & Arando)',
    alcoholic: true,
    category: 'cocktails',
    categoryLabel: 'Cocktails Clássicos 🍸',
    technique: 'Hard Shaken & Double Strained with Flamed Orange',
    description: 'O ícone cosmopolita de Nova Iorque: Vodka de infusão cítrica, licor Cointreau, sumo de arando (cranberry) rubi e sumo de lima fresca.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Taça de Martini ou Coupe',
    ice: 'Apenas no Shaker',
    abv: '20% ABV (Cítrico & Glamoroso)',
    badge: 'Ícone Fashion 🍸',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador Hawthorne', 'Passador de Rede Fina', 'Fósforo / Isqueiro'],
    ingredients: [
      { name: 'Vodka Cítrica (Vodka Citron)', quantity: '45 ml' },
      { name: 'Licor Cointreau (Triple Sec)', quantity: '20 ml' },
      { name: 'Sumo de Arando Vermelho (Cranberry)', quantity: '30 ml' },
      { name: 'Sumo de Lima Fresca', quantity: '15 ml' },
      { name: 'Casca Redonda de Laranja para Flamejar', quantity: '1 moeda' }
    ],
    steps: [
      'Arrefece a taça de martini no congelador ou com gelo picado.',
      'No shaker com cubos de gelo, deita a vodka cítrica, o Cointreau, o sumo de arando e a lima fresca.',
      'Bate vigorosamente durante 15 segundos até o metal do shaker gelar.',
      'Faz uma coagem dupla para a taça fria para garantir uma textura sedosa e sem lascas de gelo.',
      'Segura uma moeda de casca de laranja sobre a taça com uma chama acesa à frente e espreme a casca: os óleos inflamam suavemente perfumando o cocktail com notas tostadas.',
      'Passa a casca no bordo e descarta.'
    ],
    bartender_tip: 'O segredo da cor perfeita do Cosmo não é ficar vermelho escuro, mas sim um tom rosa translúcido vivo e cintilante!'
  },
  {
    id: 'long_island_iced_tea',
    name: 'Long Island Iced Tea Lendário (5 Destilados)',
    alcoholic: true,
    category: 'long',
    categoryLabel: 'Long Drinks 🥤',
    technique: 'Built / Light Shake & Cola Float',
    description: 'A lenda dos bares: 5 destilados brancos (Vodka, Tequila, Rum, Gin e Triple Sec) com sumo de limão e um toque de cola que imita a cor de chá gelado.',
    difficulty: 'Média',
    prep_time: '3 min',
    glass: 'Copo Alto Collins / Highball',
    ice: 'Gelo em Cubos Grandes',
    abv: '22% ABV (Potente & Traiçoeiro)',
    badge: 'Super Potente ⚡',
    smoking_technique: null,
    bar_tools: ['Jigger', 'Shaker', 'Colher Bailarina'],
    ingredients: [
      { name: 'Vodka', quantity: '15 ml' },
      { name: 'Tequila Blanco', quantity: '15 ml' },
      { name: 'Rum Branco Ligeiro', quantity: '15 ml' },
      { name: 'London Dry Gin', quantity: '15 ml' },
      { name: 'Triple Sec (Licor de Laranja)', quantity: '15 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '25 ml' },
      { name: 'Xarope Simples de Açúcar', quantity: '20 ml' },
      { name: 'Refrigerante Cola (para finalizar)', quantity: '30 ml' }
    ],
    steps: [
      'No shaker com gelo, deita a vodka, a tequila, o rum, o gin, o triple sec, o sumo de limão e o xarope simples.',
      'Dá uma rápida batida de 5 segundos para emulsionar e arrefecer.',
      'Verte com o gelo diretamente para o copo alto Collins.',
      'Completa com um splash subtil de refrigerante cola (apenas o suficiente para conferir o tom âmbar de chá gelado).',
      'Mexe suavemente com a colher bailarina uma só vez.',
      'Decora com uma rodela de limão no bordo e serve com palhinha.'
    ],
    bartender_tip: 'Apesar de não levar uma única gota de chá, o sabor e a cor fazem lembrar ice tea de limão com uma força alcoólica considerável!'
  },
  {
    id: 'sex_on_the_beach',
    name: 'Sex on the Beach Sunset (Vodka, Pêssego & Frutas)',
    alcoholic: true,
    category: 'long',
    categoryLabel: 'Long Drinks 🥤',
    technique: 'Built with Double Juice Gradient',
    description: 'O clássico veraneante: Vodka, licor de pêssego suave, sumo de laranja fresco e sumo de arando (cranberry) em belas camadas solares.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Hurricane ou Highball',
    ice: 'Gelo em Cubos',
    abv: '11% ABV (Doce & Frutado)',
    badge: 'Sensação de Verão 🏖️',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Jigger'],
    ingredients: [
      { name: 'Vodka Premium', quantity: '45 ml' },
      { name: 'Licor de Pêssego (Peach Schnapps)', quantity: '25 ml' },
      { name: 'Sumo de Laranja Fresco', quantity: '50 ml' },
      { name: 'Sumo de Arando (Cranberry)', quantity: '50 ml' },
      { name: 'Cubos de Gelo', quantity: 'Cheios no copo' },
      { name: 'Rodela de Laranja & Cereja Maraschino', quantity: 'Para guarnecer' }
    ],
    steps: [
      'Enche o copo alto com cubos de gelo.',
      'Deita a vodka e o licor de pêssego.',
      'Adiciona o sumo de laranja fresco e mexe suavemente.',
      'Pelas costas da colher bailarina, verte lentamente o sumo de arando no topo para criar um pôr do sol avermelhado.',
      'Encaixa uma rodela de laranja e a cereja no bordo.',
      'Serve com palhinha.'
    ],
    bartender_tip: 'Usar sumo de laranja espremido na hora reduz o excesso de doçura e realça o sabor autêntico do pêssego.'
  },
  {
    id: 'singapore_sling',
    name: 'Singapore Sling Imperial do Hotel Raffles',
    alcoholic: true,
    category: 'long',
    categoryLabel: 'Long Drinks 🥤',
    technique: 'Hard Shaken with Pineapple Foam',
    description: 'Criado em 1915 no mítico Long Bar de Singapura: Gin, licor de cereja Cherry Heering, Cointreau, Bénédictine, ananás e Angostura.',
    difficulty: 'Média',
    prep_time: '4 min',
    glass: 'Copo Alto Hurricane ou Sling',
    ice: 'Gelo em Cubos Grandes',
    abv: '15% ABV (Complexo & Frutado)',
    badge: 'Lenda Histórica 🇸🇬',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador Hawthorne', 'Jigger'],
    ingredients: [
      { name: 'London Dry Gin', quantity: '40 ml' },
      { name: 'Licor de Cereja (Cherry Heering)', quantity: '15 ml' },
      { name: 'Cointreau', quantity: '10 ml' },
      { name: 'Licor Herbal Bénédictine D.O.M.', quantity: '10 ml' },
      { name: 'Sumo de Ananás Natural Fresco', quantity: '80 ml' },
      { name: 'Sumo de Lima Fresco', quantity: '15 ml' },
      { name: 'Xarope de Groselha (Grenadine)', quantity: '10 ml' },
      { name: 'Angostura Bitters', quantity: '1 dash' }
    ],
    steps: [
      'No shaker com muito gelo, coloca todos os ingredientes.',
      'Bate intensamente durante 20 segundos para que as enzimas do ananás produzam uma espuma densa no topo.',
      'Coa para o copo alto cheio de gelo fresco.',
      'A espuma rosada instala-se elegantemente no topo.',
      'Decora com um triângulo de ananás e uma cereja Maraschino.'
    ],
    bartender_tip: 'A combinação de Bénédictine e Cherry Heering é o que confere a singularidade aromática que nenhuma outra receita de bar consegue replicar!'
  },
  {
    id: 'mai_tai',
    name: 'Mai Tai Tradicional Tiki (Trader Vic 1944)',
    alcoholic: true,
    category: 'cocktails',
    categoryLabel: 'Cocktails Clássicos 🍸',
    technique: 'Shaken with Crushed Ice & Dark Rum Float',
    description: 'Mai Tai em Taitiano significa "Fora deste Mundo!": Rum jamaicano envelhecido, rum agrícola, Curaçao de laranja, xarope de amêndoa Orgeat e lima.',
    difficulty: 'Média',
    prep_time: '4 min',
    glass: 'Copo Double Rocks ou Tiki Mug',
    ice: 'Gelo Picado (Crushed Ice) em Abundância',
    abv: '24% ABV (Rico & Amendoado)',
    badge: 'Rei do Tiki 🗿',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador', 'Jigger'],
    ingredients: [
      { name: 'Rum Jamaicano Envelhecido (ex: Appleton Estate)', quantity: '30 ml' },
      { name: 'Rum Agrícola Branco de Martinica', quantity: '30 ml' },
      { name: 'Orange Curaçao (Pierre Ferrand ou Triple Sec)', quantity: '15 ml' },
      { name: 'Xarope de Amêndoa (Orgeat)', quantity: '15 ml' },
      { name: 'Sumo de Lima Fresca', quantity: '25 ml' },
      { name: 'Xarope Simples de Açúcar', quantity: '5 ml' },
      { name: 'Ramo de Hortelã Fresca & Meia Casca de Lima', quantity: 'Para ilha deserta' }
    ],
    steps: [
      'Num shaker com 1 chávena de gelo picado, coloca o rum, o curaçao, o orgeat, o sumo de lima e o xarope simples.',
      'Bate com força durante 10 segundos.',
      'Despeja todo o conteúdo sem coar para o copo rocks.',
      'Adiciona mais gelo picado até criar um monte.',
      'Pousa a meia casca de lima virada ao contrário (simulando uma ilha) e o ramo de hortelã por cima (simulando uma palmeira).',
      'Serve com palhinha curta.'
    ],
    bartender_tip: 'O verdadeiro Mai Tai não leva sumo de ananás nem sumo de laranja! A receita original de 1944 destaca apenas o rum, a amêndoa do orgeat e a acidez da lima.'
  },
  {
    id: 'zombie_tiki',
    name: 'Zombie Tiki Potente (Trio de Rums & Absinto)',
    alcoholic: true,
    category: 'cocktails',
    categoryLabel: 'Cocktails Clássicos 🍸',
    technique: 'Blended Shake & Mint Crown',
    description: 'Criado por Don the Beachcomber para levantar os mortos: três variedades de rum caribenho, absinto aromático, sumo de maracujá, lima e xarope de canela.',
    difficulty: 'Avançada',
    prep_time: '4 min',
    glass: 'Caneca Tiki Cerâmica ou Copo Alto',
    ice: 'Gelo Picado Abundante',
    abv: '28% ABV (Extremamente Intenso)',
    badge: 'Puro Tiki 💀',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Gotero para Absinto', 'Jigger'],
    ingredients: [
      { name: 'Rum Branco Caribenho', quantity: '30 ml' },
      { name: 'Rum Dourado Añejo', quantity: '30 ml' },
      { name: 'Rum Overproof Escuro (75.5% vol)', quantity: '15 ml' },
      { name: 'Absinto Puro', quantity: '3 gotas' },
      { name: 'Sumo de Lima Fresca', quantity: '20 ml' },
      { name: 'Polpa / Sumo de Maracujá', quantity: '20 ml' },
      { name: 'Xarope de Canela Artesanal', quantity: '15 ml' },
      { name: 'Angostura Bitters', quantity: '1 dash' }
    ],
    steps: [
      'No shaker com cubos de gelo, junta os três rums, o absinto, o sumo de lima, o maracujá, o xarope de canela e a Angostura.',
      'Bate com vigor extremo por 15 segundos.',
      'Coa para a caneca Tiki repleta de gelo picado.',
      'Coloca uma coroa densa de hortelã fresca e uma rodela de lima no topo.',
      'Serve com palhinha longa.'
    ],
    bartender_tip: 'Nos anos 1930, os bares limitavam o consumo a no máximo 2 Zombies por pessoa devido à sua incrível potência e teor alcoólico escondido pela fruta!'
  },
  {
    id: 'penicillin',
    name: 'Penicillin Cocktail (Scotch, Gengibre, Mel & Fumo de Islay)',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Shaken with Peated Islay Float',
    description: 'A criação contemporânea mais aclamada deste século: Blended Scotch, xarope de mel e gengibre fresco, com uma camada flutuante de whisky turfado e defumado de Islay.',
    difficulty: 'Média',
    prep_time: '4 min',
    glass: 'Copo Rocks Baixo',
    ice: 'Cubo Único Gigante de Gelo',
    abv: '24% ABV (Defumado & Balsâmico)',
    badge: 'Mixologia Moderna 🧪',
    smoking_technique: 'O fumo e turfa provêm naturalmente da destilação do Single Malt de Islay (ex: Laphroaig ou Ardbeg) vertido sobre as costas da colher no topo do cocktail.',
    bar_tools: ['Shaker', 'Passador Hawthorne', 'Passador Fino', 'Colher Bailarina'],
    ingredients: [
      { name: 'Blended Scotch Whisky', quantity: '50 ml' },
      { name: 'Single Malt Islay Scotch Turfado (ex: Laphroaig 10)', quantity: '10 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '25 ml' },
      { name: 'Xarope de Mel & Gengibre Fresco (1:1)', quantity: '25 ml' },
      { name: 'Gengibre Cristalizado no Palito', quantity: '1 pedaço' }
    ],
    steps: [
      'No shaker com cubos grandes de gelo, junta o blended Scotch, o sumo de limão fresco e o xarope de mel com gengibre.',
      'Bate vigorosamente durante 15 segundos.',
      'Coa com coagem dupla para o copo rocks com o cubo gigante de gelo transparente.',
      'Pelas costas da colher bailarina, verte delicadamente o whisky turfado de Islay para flutuar no topo.',
      'O aroma fumado a turfa e fogueira atinge o nariz antes de cada trago balsâmico.',
      'Decora com o cubo de gengibre cristalizado num espeto de bambu.'
    ],
    bartender_tip: 'Não mistures o whisky de Islay! Ao ficar na superfície, cria a ilusão olfativa de um fumo intenso, enquanto o paladar recebe o frescor doce do limão e gengibre.'
  },
  {
    id: 'sazerac',
    name: 'Sazerac de Nova Orleães (Lavagem de Absinto & Peychaud’s)',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Absinthe Rinse & Stirred in Rocks Glass (No Ice)',
    description: 'O cocktail oficial mais antigo da América: Rye Whiskey robusto, torrão de açúcar e bitters de Peychaud num copo previamente perfumado com absinto.',
    difficulty: 'Média',
    prep_time: '3 min',
    glass: 'Copo Rocks Pequeno Gelado',
    ice: 'Apenas para mexer (Servido puro sem gelo)',
    abv: '34% ABV (Poderoso & Anisado)',
    badge: 'Património Histórico ⚜️',
    smoking_technique: null,
    bar_tools: ['Mixing Glass', 'Colher Bailarina', 'Julep Strainer', 'Vaporizador ou Copo de Absinto'],
    ingredients: [
      { name: 'Rye Whiskey ou Cognac VSOP', quantity: '60 ml' },
      { name: 'Absinto Francês para lavagem de copo', quantity: '5 ml (ou spray)' },
      { name: 'Peychaud’s Bitters', quantity: '3 dashes' },
      { name: 'Angostura Bitters', quantity: '1 dash' },
      { name: 'Torrão de Açúcar Branco', quantity: '1 unidade' },
      { name: 'Casca de Limão Siciliano (Twist)', quantity: '1 tira' }
    ],
    steps: [
      'Gela o copo rocks enchendo-o de gelo enquanto preparas o drink.',
      'No mixing glass, coloca o torrão de açúcar, os bitters de Peychaud e Angostura e umas gotas de água. Esmaga com a colher até virar pasta.',
      'Adiciona o Rye Whiskey e cubos grandes de gelo. Mexe durante 30 segundos com a colher bailarina.',
      'Descarta o gelo do copo rocks, deita os 5 ml de absinto e roda o copo para revestir todas as paredes interiores. Descarta o excesso de absinto.',
      'Coa o líquido do mixing glass para o copo perfumado com absinto (sem gelo).',
      'Torce a casca de limão sobre o copo para libertar os óleos cítricos e descarta a casca (ou apoia na borda).'
    ],
    bartender_tip: 'A lavagem de absinto (rinse) deixa apenas uma película molecular no vidro. O suficiente para libertar aromas de anis a cada trago sem sobrepor o Rye Whiskey!'
  },
  {
    id: 'french_75',
    name: 'French 75 Aristocrático (Gin & Champanhe Brut)',
    alcoholic: true,
    category: 'cocktails',
    categoryLabel: 'Cocktails Clássicos 🍸',
    technique: 'Shaken Base & Champagne Top',
    description: 'Nomeado em honra do canhão francês de 75 mm pela sua potência efervescente: London Dry Gin, sumo de limão siciliano e topo de Champanhe ou Espumante Brut.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Flûte de Champanhe ou Taça Coupe',
    ice: 'Apenas para bater no Shaker',
    abv: '16% ABV (Burbulhante & Elegante)',
    badge: 'Chique & Festivo 🍾',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador', 'Zester de Citrinos'],
    ingredients: [
      { name: 'London Dry Gin', quantity: '35 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '15 ml' },
      { name: 'Xarope Simples de Açúcar', quantity: '15 ml' },
      { name: 'Champanhe Brut ou Espumante Meio-Seco', quantity: '60 ml' },
      { name: 'Espiral Longa de Casca de Limão', quantity: 'Para decoração' }
    ],
    steps: [
      'No shaker com cubos de gelo, junta o gin, o sumo de limão fresco e o xarope simples.',
      'Bate com firmeza durante 12 segundos.',
      'Coa para a flûte de champanhe previamente gelada.',
      'Completa delicadamente com o champanhe ou espumante bem gelado.',
      'Dá uma suave mexida vertical com a colher bailarina.',
      'Coloca uma elegante espiral fina de casca de limão dentro da taça.'
    ],
    bartender_tip: 'Para um perfil mais aveludado ao estilo de Nova Orleães, podes substituir o Gin por Cognac francês!'
  },
  {
    id: 'clover_club',
    name: 'Clover Club (Gin, Framboesa & Espuma de Veludo)',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Dry Shake & Hard Wet Shake',
    description: 'Nascido nos clubes de cavalheiros de Filadélfia no séc. XIX: Gin, xarope caseiro de framboesas frescas, limão e clara de ovo aveludada.',
    difficulty: 'Média',
    prep_time: '4 min',
    glass: 'Taça Coupe Elegante',
    ice: 'Gelo no Shaker',
    abv: '18% ABV (Suave & Frutado)',
    badge: 'Clássico Vitoriano 🌸',
    smoking_technique: null,
    bar_tools: ['Boston Shaker', 'Double Strainer', 'Jigger'],
    ingredients: [
      { name: 'London Dry Gin', quantity: '50 ml' },
      { name: 'Xarope Artesanal de Framboesas Frescas', quantity: '20 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '20 ml' },
      { name: 'Clara de Ovo Fresca (ou Aquafaba)', quantity: '15 ml' },
      { name: 'Framboesas Frescas no Espeto', quantity: '3 unidades' }
    ],
    steps: [
      'No shaker sem gelo, coloca o gin, o xarope de framboesa, o limão e a clara.',
      'Bate a seco vigorosamente durante 15 segundos para emulsionar a espuma.',
      'Junta cubos de gelo até cima do shaker e bate vigorosamente mais 15 segundos.',
      'Faz uma coagem dupla com passador fino para a taça coupe fria.',
      'Uma camada imaculada de espuma rosa-pálido aveludada forma-se no topo.',
      'Decora com 3 framboesas frescas num espeto de bambu apoiado no bordo.'
    ],
    bartender_tip: 'O xarope caseiro de framboesa faz toda a diferença: macera 100 g de framboesas em 100 ml de xarope de açúcar quente e coa antes de usar!'
  },
  {
    id: 'bramble',
    name: 'Bramble Britânico com Licor de Amora Silvestre',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Built over Crushed Ice with Crème de Mûre Bleed',
    description: 'Criado em Londres por Dick Bradsell nos anos 80: Gin, limão fresco e açúcar com uma cascata sangrante de licor de amora negra a descer pelo gelo.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Rocks Baixo',
    ice: 'Gelo Picado (Crushed Ice) abundante',
    abv: '18% ABV (Agridoce & Silvestre)',
    badge: 'London Modern Classic 🫐',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador', 'Colher Bailarina'],
    ingredients: [
      { name: 'London Dry Gin', quantity: '45 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '25 ml' },
      { name: 'Xarope Simples de Açúcar', quantity: '15 ml' },
      { name: 'Licor de Amora Negra (Crème de Mûre)', quantity: '15 ml' },
      { name: 'Amoras Silvestres Frescas', quantity: '2 unidades' },
      { name: 'Rodela de Limão & Raminho de Hortelã', quantity: 'Para guarnecer' }
    ],
    steps: [
      'No shaker com cubos de gelo, junta o gin, o sumo de limão e o xarope simples.',
      'Bate com rapidez durante 10 segundos.',
      'Coa para um copo rocks previamente cheio até ao bordo com gelo picado.',
      'Regue o licor de amora negra (Crème de Mûre) em fio pelo topo do gelo picado.',
      'O licor desce lentamente criando um efeito visual "sangrante" espetacular.',
      'Decora com amoras frescas no topo do gelo e uma rodela de limão.'
    ],
    bartender_tip: 'Nunca batas o licor de amora no shaker! A beleza do Bramble reside exclusivamente no efeito visual do licor escuro a infiltrar-se no gelo branco.'
  },
  {
    id: 'aviation',
    name: 'Aviation Vintage com Violeta & Cereja Maraschino',
    alcoholic: true,
    category: 'cocktails',
    categoryLabel: 'Cocktails Clássicos 🍸',
    technique: 'Hard Shaken & Fine Strained',
    description: 'Dos céus dourados da aviação dos anos 1910: Gin, licor Maraschino, Crème de Violette e sumo de limão numa cor azul-celeste inesquecível.',
    difficulty: 'Média',
    prep_time: '3 min',
    glass: 'Taça Coupe Gelada',
    ice: 'Apenas no Shaker',
    abv: '24% ABV (Floral & Cítrico)',
    badge: 'Azul Celeste ✈️',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador de Rede Fina', 'Jigger'],
    ingredients: [
      { name: 'London Dry Gin', quantity: '50 ml' },
      { name: 'Licor Maraschino (Luxardo)', quantity: '15 ml' },
      { name: 'Crème de Violette (Licor de Violeta)', quantity: '10 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '20 ml' },
      { name: 'Cereja Maraschino Genuína no Fundo', quantity: '1 unidade' }
    ],
    steps: [
      'Arrefece a taça coupe no congelador.',
      'No shaker com cubos de gelo, junta o gin, o licor Maraschino, o Crème de Violette e o sumo de limão fresco.',
      'Bate intensamente durante 15 segundos.',
      'Faz uma coagem dupla para a taça coupe.',
      'A cor ganha um tom lilás-celeste fascinante que lembra o céu ao amanhecer.',
      'Pousa no centro do fundo da taça uma cereja Maraschino escura.'
    ],
    bartender_tip: 'Cuidado com a dosagem do Crème de Violette: apenas 10 ml são suficientes para dar a tonalidade e as notas florais sem parecer perfume excessivo.'
  },
  {
    id: 'boulevardier',
    name: 'Boulevardier Parisiense (Bourbon, Campari & Vermouth)',
    alcoholic: true,
    category: 'cocktails',
    categoryLabel: 'Cocktails Clássicos 🍸',
    technique: 'Stirred in Crystal Mixing Glass',
    description: 'Criado no Harry’s New York Bar em Paris nos anos 1920: a versão mais quente, profunda e aveludada do Negroni com Bourbon no lugar do Gin.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Rocks Baixo com Bloco de Gelo',
    ice: 'Cubo Único Gigante de Gelo Translúcido',
    abv: '26% ABV (Intenso & Amadeirado)',
    badge: 'Parisiense dos Anos 20 🇫🇷',
    smoking_technique: null,
    bar_tools: ['Mixing Glass', 'Colher Bailarina', 'Julep Strainer'],
    ingredients: [
      { name: 'Bourbon ou Rye Whiskey', quantity: '45 ml' },
      { name: 'Campari Bitter', quantity: '30 ml' },
      { name: 'Vermute Tinto Doce (Rosso)', quantity: '30 ml' },
      { name: 'Casca Larga de Laranja Fresca', quantity: '1 unidade' }
    ],
    steps: [
      'No mixing glass com cubos grandes de gelo, deita o Bourbon, o Campari e o vermute tinto.',
      'Mexe com a colher bailarina encostada à parede do copo durante 30 segundos contínuos.',
      'Coloca o cubo gigante de gelo no copo rocks.',
      'Coa o líquido avermelhado límpido sobre o gelo.',
      'Torce a casca de laranja para projetar os óleos sobre a superfície e passa no bordo.',
      'Insere a casca no copo e aprecia a textura aveludada do whiskey com o amargo do Campari.'
    ],
    bartender_tip: 'A proporção 1.5 : 1 : 1 (45 ml de Bourbon para 30 ml de Campari e Vermute) permite ao destilado de carvalho brilhar sem ser dominado pelo amargor.'
  },
  {
    id: 'white_russian',
    name: 'White Russian Aveludado (O Lendário "The Dude")',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Built over Ice with Cream Float',
    description: 'Imortalizado no filme The Big Lebowski: Vodka de qualidade, licor de café Kahlúa e uma coroa densa de natas frescas líquidas.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Rocks Baixo',
    ice: 'Gelo em Cubos Grandes',
    abv: '19% ABV (Cremoso & Doce)',
    badge: 'Cult Clássico 🎳',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Jigger'],
    ingredients: [
      { name: 'Vodka Premium', quantity: '50 ml' },
      { name: 'Licor de Café (Kahlúa)', quantity: '25 ml' },
      { name: 'Natas Frescas Líquidas ou Leite Gordo', quantity: '30 ml' },
      { name: 'Cubos de Gelo', quantity: 'Cheios no copo' }
    ],
    steps: [
      'Enche o copo rocks com cubos grandes de gelo.',
      'Adiciona a vodka e o licor de café Kahlúa.',
      'Mexe suavemente a base com a colher bailarina.',
      'Pelas costas da colher, verte as natas frescas delicadamente sobre a superfície do gelo.',
      'As natas descem em espirais hipnóticas brancas sobre o líquido escuro de café.',
      'Serve sem misturar previamente para que o cliente aprecie o contraste visual e térmico.'
    ],
    bartender_tip: 'Usa natas líquidas de culinária com 30% a 35% de gordura. O leite comum é demasiado ralo e afunda rápido sem criar as espirais aveludadas.'
  },
  {
    id: 'black_russian',
    name: 'Black Russian Puro (Vodka & Kahlúa on the Rocks)',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Stirred on the Rocks',
    description: 'O antecessor minimalista do White Russian, criado no Hotel Métropole em Bruxelas em 1949: apenas vodka e licor de café concentrado.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Rocks Baixo',
    ice: 'Gelo em Cubos Grandes',
    abv: '26% ABV (Escuro & Potente)',
    badge: 'Minimalista Clássico ☕',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Jigger'],
    ingredients: [
      { name: 'Vodka Premium', quantity: '50 ml' },
      { name: 'Licor de Café (Kahlúa)', quantity: '25 ml' },
      { name: 'Gelo em Cubos Grandes', quantity: 'Cheio no copo' },
      { name: 'Cereja Maraschino (Opcional)', quantity: '1 unidade' }
    ],
    steps: [
      'Coloca cubos de gelo no copo rocks.',
      'Adiciona a vodka e o licor de café Kahlúa.',
      'Mexe suavemente com a colher bailarina durante 15 segundos para arrefecer e diluir levemente.',
      'Serve direto, ideal como digestivo após o jantar.'
    ],
    bartender_tip: 'A proporção ideal é 2:1 (2 partes de vodka para 1 parte de licor de café) para garantir que a doçura do licor não abafa o caráter límpido da vodka.'
  },
  {
    id: 'sidecar',
    name: 'Sidecar Clássico com Cognac & Crosta de Açúcar',
    alcoholic: true,
    category: 'cocktails',
    categoryLabel: 'Cocktails Clássicos 🍸',
    technique: 'Shaken with Sugar Rim',
    description: 'O aristocrata francês com Cognac VSOP, Cointreau e sumo de limão fresco numa taça com borda fina de açúcar cristalizado.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Taça Coupe',
    ice: 'Gelo no Shaker',
    abv: '25% ABV (Seco & Encorpado)',
    badge: 'Parisiense Nobre 🇫🇷',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador', 'Pratinho de Açúcar'],
    ingredients: [
      { name: 'Cognac Francês VSOP (ou Brandy Nobre)', quantity: '50 ml' },
      { name: 'Licor de Laranja Cointreau', quantity: '25 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '20 ml' },
      { name: 'Açúcar Branco Fino para a borda', quantity: 'Para a crosta' },
      { name: 'Casca de Laranja', quantity: 'Para aromatizar' }
    ],
    steps: [
      'Passa um gomo de limão em metade do bordo da taça coupe e mergulha em açúcar fino.',
      'No shaker com cubos de gelo, junta o Cognac, o Cointreau e o sumo de limão.',
      'Bate energicamente durante 15 segundos.',
      'Coa com coagem dupla para a taça preparada.',
      'Espreme os óleos da casca de laranja sobre o copo e descarta.'
    ],
    bartender_tip: 'O açúcar no bordo contrabalança a acidez seca do limão e a força do Cognac, criando um dos cocktails mais elegantes de sempre.'
  },
  {
    id: 'gimlet',
    name: 'Gimlet Clássico com Cordial de Lima Artesanal',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Shaken or Stirred Crisp & Cold',
    description: 'Criado pela Marinha Real Britânica no séc. XIX: London Dry Gin misturado com cordial de lima azeda doce e servido estaladiço de frio.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Taça Coupe ou Nick & Nora',
    ice: 'Apenas para bater',
    abv: '22% ABV (Cítrico & Puro)',
    badge: 'Herança Naval Britânica ⚓',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador Fino', 'Jigger'],
    ingredients: [
      { name: 'London Dry Gin de Qualidade', quantity: '60 ml' },
      { name: 'Cordial de Lima (Lime Cordial) ou Sumo de Lima + Xarope', quantity: '30 ml' },
      { name: 'Rodela Fina de Lima Fresca', quantity: '1 unidade' }
    ],
    steps: [
      'No shaker com muito gelo, coloca o gin e o cordial de lima.',
      'Bate energicamente durante 15 segundos.',
      'Coa para uma taça coupe bem gelada.',
      'Pousa delicadamente uma rodela fina de lima a flutuar na superfície.'
    ],
    bartender_tip: 'Para fazer o teu próprio Lime Cordial artesanal: junta partes iguais de sumo de lima fresco e açúcar, adicionando as raspas da casca de 2 limas e deixando repousar por 1 hora antes de coar!'
  },
  {
    id: 'rusty_nail',
    name: 'Rusty Nail Escocês (Scotch Whisky & Drambuie)',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Built over Ice in Rocks Glass',
    description: 'O favorito dos membros do Rat Pack nos anos 60: Scotch Whisky misturado com licor escocês Drambuie à base de mel de urze, ervas e especiarias.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Rocks Baixo',
    ice: 'Cubo Único Gigante de Gelo',
    abv: '32% ABV (Quente & Melado)',
    badge: 'Rat Pack Clássico 🥃',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Jigger'],
    ingredients: [
      { name: 'Blended Scotch Whisky de Qualidade', quantity: '50 ml' },
      { name: 'Licor Escocês Drambuie', quantity: '25 ml' },
      { name: 'Casca de Limão Siciliano', quantity: '1 tira longa' }
    ],
    steps: [
      'Coloca o cubo grande de gelo no copo rocks.',
      'Deita o Scotch Whisky e o Drambuie.',
      'Mexe lentamente durante 20 segundos com a colher bailarina para integrar o licor espesso com o whisky.',
      'Torce a casca de limão para libertar óleos essenciais sobre o copo e insere-a junto ao gelo.'
    ],
    bartender_tip: 'O Drambuie é feito à base de mel e especiarias secretas da realeza escocesa: o seu toque doce arredonda qualquer aresta do whisky de forma magistral.'
  },
  {
    id: 'amaretto_sour',
    name: 'Amaretto Sour de Luxo com Espuma & Bourbon',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Dry Shake & Hard Wet Shake',
    description: 'A versão definitiva de Jeffrey Morgenthaler: licor de amêndoa Disaronno reforçado com Bourbon, limão fresco e espuma sedosa.',
    difficulty: 'Média',
    prep_time: '4 min',
    glass: 'Copo Rocks Baixo',
    ice: 'Gelo em Cubos Grandes',
    abv: '18% ABV (Doce de Amêndoa & Cítrico)',
    badge: 'Perfeição de Barman 🌰',
    smoking_technique: null,
    bar_tools: ['Boston Shaker', 'Passador', 'Zester'],
    ingredients: [
      { name: 'Licor Amaretto Disaronno', quantity: '45 ml' },
      { name: 'Bourbon Whiskey (Cask Strength / Alta Graduação)', quantity: '20 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '30 ml' },
      { name: 'Xarope Simples de Açúcar', quantity: '5 ml' },
      { name: 'Clara de Ovo Fresca', quantity: '15 ml' },
      { name: 'Cereja Maraschino & Casca de Limão', quantity: 'Para guarnição' }
    ],
    steps: [
      'No shaker sem gelo, junta o Amaretto, o Bourbon, o sumo de limão, o xarope e a clara.',
      'Bate a seco durante 15 segundos para criar uma espuma firme.',
      'Adiciona gelo e bate mais 15 segundos até o shaker condensar.',
      'Coa para um copo rocks com gelo fresco.',
      'A espuma branca instala-se como uma nuvem doce.',
      'Decora com uma cereja Maraschino e uma casca de limão.'
    ],
    bartender_tip: 'O segredo desta receita mundialmente premiada é adicionar os 20 ml de Bourbon: o álcool e madeira do whiskey cortam a doçura enjoativa do Amaretto comum!'
  },
  {
    id: 'pisco_sour',
    name: 'Pisco Sour Peruano com Espuma & Amargo Chuncho',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Dry Shake & Drops of Chuncho Bitters',
    description: 'A glória nacional do Peru: aguardente de uva Pisco Quebranta, sumo de lima fresca, xarope de goma e clara de ovo com gotas de bitters aromáticos.',
    difficulty: 'Média',
    prep_time: '4 min',
    glass: 'Copo Pisco ou Taça Coupe',
    ice: 'Apenas no Shaker',
    abv: '22% ABV (Cítrico & Aveludado)',
    badge: 'Património Peruano 🇵🇪',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador Fino', 'Gotero de Bitters'],
    ingredients: [
      { name: 'Pisco Peruano Quebranta', quantity: '60 ml' },
      { name: 'Sumo de Lima Fresca Acabada de Espremer', quantity: '30 ml' },
      { name: 'Xarope Simples de Açúcar (Xarope de Goma)', quantity: '20 ml' },
      { name: 'Clara de Ovo Fresca', quantity: '20 ml' },
      { name: 'Amargo de Angostura ou Amargo Chuncho', quantity: '3 gotas sobre a espuma' }
    ],
    steps: [
      'No shaker sem gelo, junta o Pisco, a lima, o xarope e a clara de ovo.',
      'Bate a seco com energia durante 15 segundos.',
      'Enche o shaker com cubos de gelo e bate com toda a força por 15 segundos.',
      'Coa para o copo de Pisco gelado.',
      'Espera 5 segundos até a espuma estabilizar.',
      'Aplica 3 gotas de bitters sobre a espuma para neutralizar o aroma da clara e trazer notas de especiarias.'
    ],
    bartender_tip: 'A regra clássica do Pisco Sour peruano é a fórmula 3:1:1 (3 partes de pisco, 1 de lima, 1 de xarope).'
  },
  {
    id: 'mint_julep',
    name: 'Mint Julep do Kentucky Derby em Caneca de Prata',
    alcoholic: true,
    category: 'short',
    categoryLabel: 'Short Drinks 🥃',
    technique: 'Built over Mountains of Crushed Ice with Mint Bouquet',
    description: 'O cocktail oficial das corridas de cavalos de Kentucky desde 1938: Bourbon abundante, hortelã fresca fresca e açúcar numa caneca de metal glaciar.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Caneca Tradicional Julep de Metal/Prata',
    ice: 'Gelo Picado (Crushed Ice) a Transbordar',
    abv: '28% ABV (Balsâmico & Potente)',
    badge: 'Kentucky Derby 🐎',
    smoking_technique: null,
    bar_tools: ['Caneca Julep', 'Muddler', 'Colher Bailarina'],
    ingredients: [
      { name: 'Bourbon Whiskey de Kentucky', quantity: '65 ml' },
      { name: 'Xarope Simples de Açúcar de Cana', quantity: '15 ml' },
      { name: 'Folhas de Hortelã Fresca', quantity: '8 a 10 folhas' },
      { name: 'Ramo Generoso de Hortelã', quantity: 'Para coroa aromática' },
      { name: 'Açúcar em Pó para polvilhar', quantity: '1 pitada' }
    ],
    steps: [
      'No fundo da caneca de metal, coloca o xarope de açúcar e as folhas de hortelã.',
      'Pressiona muito suavemente com o pilão para libertar os óleos sem despedaçar as folhas.',
      'Adiciona metade da dose de Bourbon e enche a caneca até metade com gelo picado.',
      'Mexe energicamente com a colher bailarina até o exterior da caneca criar uma densa camada de geada branca.',
      'Adiciona o restante Bourbon e preenche com mais gelo picado formando um cone por cima.',
      'Insere um buquê exuberante de hortelã encostado ao gelo, polvilha com açúcar em pó e serve com palhinha curta.'
    ],
    bartender_tip: 'A palhinha deve ser curta para que, ao beber, o nariz do cliente fique enterrado no buquê de hortelã fresca, amplificando o aroma a cada gole!'
  },
  {
    id: 'tom_collins',
    name: 'Tom Collins Refrescante (Old Tom Gin & Limonada)',
    alcoholic: true,
    category: 'long',
    categoryLabel: 'Long Drinks 🥤',
    technique: 'Shaken Base & Soda Top in Collins Glass',
    description: 'A clássica limonada com gin dos clubes londrinos de 1876: Gin aromático, sumo de limão siciliano, xarope e água com gás efervescente.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Alto Collins',
    ice: 'Gelo em Cubos Grandes',
    abv: '12% ABV (Refrescante & Cítrico)',
    badge: 'Clássico Collins 🍋',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador', 'Colher Bailarina'],
    ingredients: [
      { name: 'Old Tom Gin ou London Dry Gin', quantity: '50 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '30 ml' },
      { name: 'Xarope Simples de Açúcar', quantity: '20 ml' },
      { name: 'Água com Gás Carbonatada', quantity: '80 ml' },
      { name: 'Rodela de Limão & Cereja Maraschino', quantity: 'Para decorar' }
    ],
    steps: [
      'No shaker com cubos de gelo, junta o gin, o sumo de limão e o xarope simples.',
      'Bate com rapidez durante 10 segundos.',
      'Coa para um copo alto Collins repleto de cubos de gelo limpo.',
      'Completa com a água com gás bem fria.',
      'Dá uma suave mexida vertical com a colher bailarina.',
      'Decora com uma rodela de limão no interior e uma cereja Maraschino.'
    ],
    bartender_tip: 'O verdadeiro Tom Collins usava tradicionalmente Old Tom Gin, que possui uma doçura botânica ligeira comparado com o London Dry clássico.'
  },

  // ==========================================
  // NOVOS COCKTAILS COM FUMO AROMÁTICO (SMOKED)
  // ==========================================
  {
    id: 'smoked_rosemary_gin',
    name: 'Gin Defumado com Alecrim em Brasa & Zimbro',
    alcoholic: true,
    category: 'fumo',
    categoryLabel: 'Fumo Aromático 💨',
    technique: 'Torched Herb Smoking & Direct Infusion',
    description: 'Experiência sensorial botânica: London Dry Gin e água tónica premium aromatizados com um ramo espesso de alecrim fresco queimado com maçarico à frente do cliente.',
    difficulty: 'Média',
    prep_time: '3 min',
    glass: 'Taça Balão Grande de Cristal',
    ice: 'Cubos Maciços de Gelo Translúcido',
    abv: '13% ABV (Botânico & Defumado)',
    badge: 'Fumo Botânico 🌿',
    smoking_technique: 'Usa um maçarico culinário diretamente na ponta do ramo verde de alecrim até queimar e formar uma brasa viva incandescente que solta fumo branco espesso. Mergulha a brasa por 2 segundos no topo do drink.',
    bar_tools: ['Maçarico Culinário', 'Pinça de Barman', 'Colher Espiralada'],
    ingredients: [
      { name: 'London Dry Gin Botânico', quantity: '50 ml' },
      { name: 'Água Tónica Premium Gelada', quantity: '150 ml' },
      { name: 'Ramos de Alecrim Fresco', quantity: '2 unidades' },
      { name: 'Bagas de Zimbro Ligeiramente Esmagadas', quantity: '4 unidades' },
      { name: 'Casca de Toranja Rosa', quantity: '1 tira' }
    ],
    steps: [
      'Gela a taça balão com cubos de gelo.',
      'Adiciona o gin e as bagas de zimbro.',
      'Verte a água tónica devagar pela haste da colher bailarina para preservar a bolha.',
      'Pega no ramo de alecrim com uma pinça e acende a ponta com o maçarico até libertar brasas vivas e fumo perfumado.',
      'Pousa o ramo em brasa sobre os cubos de gelo no copo.',
      'Serve imediatamente enquanto o fumo herbal dança sobre a taça.'
    ],
    bartender_tip: 'O calor da brasa liberta o pineno e outros óleos essenciais do alecrim, harmonizando de forma sublime com o zimbro do gin.'
  },
  {
    id: 'smoked_paloma',
    name: 'Smoked Paloma com Madeira de Macieira & Sal Fumado',
    alcoholic: true,
    category: 'fumo',
    categoryLabel: 'Fumo Aromático 💨',
    technique: 'Campânula de Vidro com Fumo de Macieira',
    description: 'A refrescância da toranja e tequila mexicana elevada por fumo aromático de lascas de madeira de macieira sob campânula de vidro transparente.',
    difficulty: 'Avançada',
    prep_time: '5 min',
    glass: 'Copo Alto Highball com Borda de Sal Fumado',
    ice: 'Gelo em Cubos Grandes',
    abv: '12% ABV (Frutado & Defumado)',
    badge: 'Campânula de Fumo 🍎',
    smoking_technique: 'Coloca o copo pronto sob a campânula de vidro. Introduz fumo de aparas de madeira de macieira com a smoking gun ou queima numa tábua e sela durante 40 segundos.',
    bar_tools: ['Campânula de Vidro', 'Smoking Gun / Maçarico', 'Shaker'],
    ingredients: [
      { name: 'Tequila Reposado 100% Agave', quantity: '50 ml' },
      { name: 'Sumo de Toranja Rosa Fresco', quantity: '60 ml' },
      { name: 'Sumo de Lima Fresco', quantity: '15 ml' },
      { name: 'Xarope de Agave', quantity: '15 ml' },
      { name: 'Água com Gás para completar', quantity: '40 ml' },
      { name: 'Sal Marinho Fumado para o bordo', quantity: 'Para a crosta' },
      { name: 'Aparas de Madeira de Macieira', quantity: '1 colher de chá' }
    ],
    steps: [
      'Passa lima em metade do bordo do copo e mergulha em sal marinho fumado.',
      'No shaker com gelo, bate a tequila, o sumo de toranja, a lima e o xarope de agave.',
      'Coa para o copo com cubos de gelo limpo e completa com água com gás.',
      'Coloca o copo na base e cobre com a campânula de vidro.',
      'Injeta o fumo denso de madeira de macieira até a campânula ficar completamente opaca e branca.',
      'Deixa infundir durante 35 segundos.',
      'Levanta a campânula à frente do cliente: o fumo dissipa-se e deixa um aroma doce e amadeirado incomparável!'
    ],
    bartender_tip: 'A madeira de macieira tem um fumo frutado e suave que não sobrepõe a acidez da toranja, complementando as notas vegetais da tequila.'
  },
  {
    id: 'thyme_bourbon_smoke',
    name: 'Bourbon com Tomilho em Brasa & Xarope de Figo',
    alcoholic: true,
    category: 'fumo',
    categoryLabel: 'Fumo Aromático 💨',
    technique: 'Torched Fresh Thyme & Inverted Smoked Glass',
    description: 'Uma ode aos sabores rústicos de outono: Bourbon encorpado, compota ou xarope de figo maduro e fumo denso de tomilho fresco em brasa.',
    difficulty: 'Média',
    prep_time: '4 min',
    glass: 'Copo Rocks Baixo',
    ice: 'Cubo Único Gigante de Gelo',
    abv: '27% ABV (Herbal & Amadeirado)',
    badge: 'Assinatura Rústica 🌿',
    smoking_technique: 'Queima ramos de tomilho fresco numa ardósia com maçarico e tapa com o copo virado para baixo durante 1 minuto para capturar a essência terrosa.',
    bar_tools: ['Maçarico', 'Mixing Glass', 'Colher Bailarina', 'Passador'],
    ingredients: [
      { name: 'Bourbon Whiskey', quantity: '60 ml' },
      { name: 'Xarope Simples de Figo ou Mel', quantity: '15 ml' },
      { name: 'Sumo de Limão Siciliano', quantity: '10 ml' },
      { name: 'Angostura Bitters', quantity: '2 dashes' },
      { name: 'Ramos de Tomilho Fresco', quantity: '3 a 4 ramos' }
    ],
    steps: [
      'Numa ardósia, acende 2 ramos de tomilho com o maçarico até libertar brasas e muito fumo.',
      'Cobre imediatamente com o copo rocks virado ao contrário para aprisionar o fumo.',
      'No mixing glass com gelo, junta o bourbon, o xarope de figo, o sumo de limão e a Angostura. Mexe durante 25 segundos.',
      'Vira o copo (o fumo espesso sai num espetáculo visual!), adiciona o cubo grande de gelo e coa a mistura.',
      'Decora com um ramo fresco de tomilho tostado na ponta e apoia no gelo.'
    ],
    bartender_tip: 'O tomilho tem óleos com timol que proporcionam uma nota herbácea profunda que combina de forma celestial com o carvalho do bourbon.'
  },

  // ==========================================
  // NOVAS BEBIDAS ENERGÉTICAS (ENERGY MIXES)
  // ==========================================
  {
    id: 'monster_mango_vodka',
    name: 'Monster Mango Loco com Vodka & Lima',
    alcoholic: true,
    category: 'energy',
    categoryLabel: 'Misturas Energéticas ⚡',
    technique: 'Built over Ice with Mint Slap',
    description: 'Fusão tropical extrema: Monster Energy Mango Loco sumarento com Vodka destilada, sumo de lima fresca e folhas de hortelã estaladas.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Alto Highball',
    ice: 'Gelo em Cubos Abundante',
    abv: '12% ABV (Tropical & Estimulante)',
    badge: 'Sabor Extremo 🥭',
    smoking_technique: null,
    bar_tools: ['Jigger', 'Colher Bailarina'],
    ingredients: [
      { name: 'Vodka Premium', quantity: '50 ml' },
      { name: 'Monster Energy Mango Loco Bem Frio', quantity: '150 ml' },
      { name: 'Sumo de Lima Fresca', quantity: '15 ml' },
      { name: 'Folhas de Hortelã Fresca', quantity: '6 folhas' },
      { name: 'Gelo em Cubos', quantity: 'Cheio no copo' }
    ],
    steps: [
      'Enche o copo com cubos de gelo até cima.',
      'Adiciona a vodka e o sumo de lima acabado de espremer.',
      'Dá uma palmada na hortelã e junta ao copo.',
      'Completa com o Monster Mango Loco gelado.',
      'Dá uma suave mexida vertical com a colher bailarina.',
      'Serve com palhinha.'
    ],
    bartender_tip: 'O Monster Mango Loco já contém sumos naturais de manga e maracujá na sua composição, criando um long drink equilibrado e encorpado sem necessidade de xaropes extra.'
  },
  {
    id: 'redbull_watermelon_fizz',
    name: 'Red Bull Watermelon com Gin & Manjericão',
    alcoholic: true,
    category: 'energy',
    categoryLabel: 'Misturas Energéticas ⚡',
    technique: 'Muddled Basil & Built over Ice',
    description: 'Elegância e energia: Red Bull Red Edition (Melancia), Gin botânico, folhas frescas de manjericão e gotas de sumo de lima fresca.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Taça Balão ou Copo Alto',
    ice: 'Gelo em Cubos Grandes',
    abv: '12% ABV (Refrescante & Doce)',
    badge: 'Vermelho Vibrante 🍉',
    smoking_technique: null,
    bar_tools: ['Muddler', 'Colher Bailarina'],
    ingredients: [
      { name: 'London Dry Gin', quantity: '50 ml' },
      { name: 'Red Bull Red Edition (Melancia)', quantity: '140 ml' },
      { name: 'Sumo de Lima Fresco', quantity: '15 ml' },
      { name: 'Folhas de Manjericão Fresco', quantity: '4 folhas' },
      { name: 'Fatia Triangular de Melancia', quantity: 'Para guarnição' }
    ],
    steps: [
      'No fundo do copo, pressiona as folhas de manjericão com o sumo de lima para soltar os aromas.',
      'Enche o copo com cubos de gelo.',
      'Adiciona o Gin.',
      'Completa com o Red Bull de Melancia bem gelado.',
      'Mexe levemente com a colher bailarina.',
      'Encaixa o triângulo de melancia no bordo e serve.'
    ],
    bartender_tip: 'O manjericão corta o açúcar doce da melancia e confere uma assinatura fresca de bar gourmet a esta mistura energética.'
  },
  {
    id: 'energy_blue_kamikaze',
    name: 'Energy Blue Kamikaze (Shot Duplo Energético)',
    alcoholic: true,
    category: 'energy',
    categoryLabel: 'Misturas Energéticas ⚡',
    technique: 'Shaken Base & Energy Drop',
    description: 'A cor azul néon mais vibrante da noite: Vodka, Blue Curaçao e sumo de lima batidos e cobertos com Red Bull efervescente.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Rocks ou Copos de Shot Duplos',
    ice: 'Gelo no Shaker',
    abv: '16% ABV (Elétrico & Cítrico)',
    badge: 'Néon da Noite ⚡',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador', 'Jigger'],
    ingredients: [
      { name: 'Vodka', quantity: '40 ml' },
      { name: 'Licor Blue Curaçao', quantity: '20 ml' },
      { name: 'Sumo de Lima Fresca', quantity: '15 ml' },
      { name: 'Red Bull Original Gelado', quantity: '60 ml' }
    ],
    steps: [
      'No shaker com gelo, bate a vodka, o Blue Curaçao e o sumo de lima por 10 segundos.',
      'Coa para um copo rocks com cubos de gelo ou divide por dois copos de shot grandes.',
      'Completa com o Red Bull gelado por cima.',
      'Bebe de imediato para sentir a efervescência azul cítrica.'
    ],
    bartender_tip: 'Visualmente deslumbrante sob luzes negras de discoteca devido à fluorescência natural dos ingredientes cítricos!'
  },
  {
    id: 'monster_ultra_spritz',
    name: 'Monster Ultra Spritz com Espumante (Zero Açúcar)',
    alcoholic: true,
    category: 'energy',
    categoryLabel: 'Misturas Energéticas ⚡',
    technique: 'Spritz Build over Ice',
    description: 'Para quem quer energia sem calorias de açúcar: Monster Ultra White cítrico com Espumante Brut e rodela de toranja fresca.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Taça de Vinho Grande',
    ice: 'Gelo em Cubos Grandes',
    abv: '9% ABV (Leve & Efervescente)',
    badge: 'Zero Açúcar Adicionado ⚡',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina'],
    ingredients: [
      { name: 'Vinho Espumante Brut Gelado', quantity: '90 ml' },
      { name: 'Monster Ultra White (Sem Açúcar)', quantity: '90 ml' },
      { name: 'Sumo de Lima Fresco', quantity: '10 ml' },
      { name: 'Fatia de Toranja Rosa ou Limão', quantity: '1 unidade' }
    ],
    steps: [
      'Enche a taça de vinho com cubos de gelo.',
      'Deita o sumo de lima e o espumante Brut.',
      'Adiciona o Monster Ultra White lentamente.',
      'Dá uma meia volta com a colher bailarina para preservar a bolha.',
      'Guarnece com a rodela de toranja rosa.'
    ],
    bartender_tip: 'O sabor cítrico suave do Monster Ultra substitui a necessidade de refrigerantes açucarados, criando um spritz moderno e estaladiço.'
  },

  // ==========================================
  // NOVOS SHOTS
  // ==========================================
  {
    id: 'tequila_slammer',
    name: 'Tequila Slammer (O Shot do Estrondo no Balcão)',
    alcoholic: true,
    category: 'shots',
    categoryLabel: 'Shots 🎯',
    technique: 'Slam & Foam Explosion',
    description: 'O ritual mais divertido de bar: Tequila Blanco com refrigerante gasoso coberto com a mão e batido com força no balcão para espumar instantaneamente.',
    difficulty: 'Fácil',
    prep_time: '1 min',
    glass: 'Copo de Shot Resistente ou Rocks Baixo',
    ice: 'Sem Gelo',
    abv: '20% ABV (Efervescente & Divertido)',
    badge: 'Estrondo no Balcão 💥',
    smoking_technique: null,
    bar_tools: ['Guardanapo de Bar', 'Copo de Shot Grosso'],
    ingredients: [
      { name: 'Tequila Blanco 100% Agave', quantity: '30 ml' },
      { name: 'Refrigerante Sprite/7Up ou Água Tónica com Gás', quantity: '30 ml' }
    ],
    steps: [
      'Num copo de shot resistente, coloca a tequila e o refrigerante gasoso em partes iguais.',
      'Dobra um guardanapo de papel limpo e tapa a boca do copo firmemente com a palma da mão para selar todo o ar.',
      'Bate o fundo do copo uma vez com firmeza contra o balcão do bar (ou sobre uma base de borracha).',
      'O choque físico liberta todo o gás carbónico subitamente, transformando o líquido numa espuma branca densa instantânea.',
      'Retira a mão e bebe de imediato de um só trago enquanto espuma e borbulha na boca!'
    ],
    bartender_tip: 'Usa sempre copos de shot com base reforçada e espessa para nunca partir o vidro no balcão!'
  },
  {
    id: 'lemon_drop_shot',
    name: 'Lemon Drop Shot com Limão Açucarado',
    alcoholic: true,
    category: 'shots',
    categoryLabel: 'Shots 🎯',
    technique: 'Hard Shaken with Sugar-Coated Lemon Ritual',
    description: 'O shot doce e ácido mais pedido: vodka e triple sec batidos com lima, acompanhados por uma rodela de limão mergulhada em açúcar mascavado para morder.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo de Shot',
    ice: 'Apenas para bater',
    abv: '24% ABV (Cítrico & Caramelizado)',
    badge: 'Ritual Clássico 🍋',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador', 'Tábua e Faca'],
    ingredients: [
      { name: 'Vodka Cítrica', quantity: '35 ml' },
      { name: 'Sumo de Limão Fresco', quantity: '15 ml' },
      { name: 'Xarope Simples de Açúcar', quantity: '10 ml' },
      { name: 'Rodela Grossa de Limão', quantity: '1 unidade' },
      { name: 'Açúcar Mascavado ou Branco', quantity: '1 colher de sopa' }
    ],
    steps: [
      'No shaker com cubos de gelo, bate a vodka, o sumo de limão e o xarope simples por 10 segundos.',
      'Coa para o copo de shot.',
      'Passa um lado da rodela de limão pelo açúcar mascavado.',
      'Apoia a rodela açucarada no topo do copo de shot.',
      'Ritual de consumo: bebe o shot de uma vez e morde imediatamente a rodela de limão açucarada para uma explosão doce-cítrica memorável!'
    ],
    bartender_tip: 'O contraste da acidez pura do limão com os cristais de açúcar na língua cria uma sensação de paladar viciante.'
  },
  {
    id: 'flatliner_shot',
    name: 'Flatliner Shot (Sambuca, Tabasco & Tequila)',
    alcoholic: true,
    category: 'shots',
    categoryLabel: 'Shots 🎯',
    technique: 'Layered with Spicy Tabasco Line',
    description: 'Para os mais corajosos: uma camada de Sambuca doce com anis no fundo, uma linha vermelha picante de molho Tabasco no meio e Tequila no topo.',
    difficulty: 'Média',
    prep_time: '2 min',
    glass: 'Copo de Shot Fino',
    ice: 'Sem Gelo',
    abv: '35% ABV (Doce & Picante Extremo)',
    badge: 'Desafio Picante 🌶️',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Gotero de Tabasco'],
    ingredients: [
      { name: 'Licor de Sambuca Branca', quantity: '25 ml' },
      { name: 'Molho Tabasco Original Picante', quantity: '4 a 5 gotas' },
      { name: 'Tequila Blanco ou Reposado', quantity: '25 ml' }
    ],
    steps: [
      'No fundo do copo de shot, deita a Sambuca doce.',
      'Com muito cuidado, pinga 4 a 5 gotas de molho Tabasco vermelho diretamente no centro: as gotas assentam sobre a densa Sambuca formando uma linha horizontal ("flatline").',
      'Pelas costas da colher bailarina, verte a Tequila lentamente por cima.',
      'A linha picante de Tabasco fica perfeitamente suspensa entre a Sambuca e a Tequila.',
      'Bebe de um só gole: primeiro sentes a Tequila, depois a explosão picante do Tabasco e no fim o alívio doce da Sambuca!'
    ],
    bartender_tip: 'O nome "Flatliner" vem da linha vermelha contínua do Tabasco que parece o traçado plano de um monitor cardíaco de hospital!'
  },

  // ==========================================
  // NOVOS HOT DRINKS (BEBIDAS QUENTES)
  // ==========================================
  {
    id: 'mexican_hot_chocolate',
    name: 'Chocolate Quente Mexicano com Mezcal & Canela',
    alcoholic: true,
    category: 'hot',
    categoryLabel: 'Hot Drinks ☕',
    technique: 'Simmered Spiced Cocoa & Mezcal Stir',
    description: 'A tradição asteca em versão de bar: chocolate negro 70% derretido em leite gordo com canela de ceilão, pitada de pimenta caiena e Mezcal defumado.',
    difficulty: 'Fácil',
    prep_time: '6 min',
    glass: 'Caneca Rústica de Barro ou Cerâmica',
    ice: 'Sem Gelo (Fumegante)',
    abv: '12% ABV (Aveludado & Picante)',
    badge: 'Tradição Asteca 🍫',
    smoking_technique: null,
    bar_tools: ['Tacho Pequeno', 'Batedor de Arame', 'Caneca'],
    ingredients: [
      { name: 'Chocolate Negro 70% em Pedaços', quantity: '50 g' },
      { name: 'Leite Gordo ou Bebida de Aveia', quantity: '150 ml' },
      { name: 'Mezcal Artesanal ou Tequila Añejo', quantity: '40 ml' },
      { name: 'Canela em Pó de Ceilão', quantity: '1/2 colher de chá' },
      { name: 'Pimenta Caiena ou Chili em Pó', quantity: '1 leve pitada' },
      { name: 'Açúcar Mascavado', quantity: '1 colher de sopa' },
      { name: 'Mini Marshmallows ou Pau de Canela', quantity: 'Para finalizar' }
    ],
    steps: [
      'Num tacho em lume brando, aquece o leite com o açúcar mascavado, a canela e a pitada de pimenta caiena.',
      'Adiciona os pedaços de chocolate negro e mexe continuamente com o batedor de arame até derreter por completo e espumar.',
      'Retira do lume e junta a dose de Mezcal defumado.',
      'Verte para a caneca de barro aquecida.',
      'Cobre com mini marshmallows ou mexe com um pau de canela.',
      'Serve bem quente.'
    ],
    bartender_tip: 'O toque minúsculo de pimenta caiena ativa as papilas gustativas e potencia o sabor do cacau e as notas fumadas do Mezcal.'
  },
  {
    id: 'cafe_calypso',
    name: 'Café Calypso com Rum Jamaicano & Tia Maria',
    alcoholic: true,
    category: 'hot',
    categoryLabel: 'Hot Drinks ☕',
    technique: 'Hot Coffee Infusion & Hand-Whipped Cream Float',
    description: 'A resposta caribenha ao Irish Coffee: café quente expresso longo, Rum escuro jamaicano envelhecido, licor de café Tia Maria e coroa de natas batidas.',
    difficulty: 'Média',
    prep_time: '4 min',
    glass: 'Copo Toddy de Vidro com Pé',
    ice: 'Sem Gelo (Servido Quente)',
    abv: '15% ABV (Encorpado & Quente)',
    badge: 'Caribe Quente 🏝️',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Shaker para bater natas', 'Cafeteira'],
    ingredients: [
      { name: 'Rum Escuro Jamaicano Encorpado', quantity: '35 ml' },
      { name: 'Licor de Café Tia Maria', quantity: '20 ml' },
      { name: 'Café Expresso Quente Duplo', quantity: '100 ml' },
      { name: 'Açúcar de Cana Mascavado', quantity: '1 colher de sopa' },
      { name: 'Natas Frescas Líquidas Frias', quantity: '40 ml' },
      { name: 'Cacau em Pó para polvilhar', quantity: '1 pitada' }
    ],
    steps: [
      'Escalda o copo de vidro com água a ferver e descarta a água.',
      'No copo quente, dissolve o açúcar mascavado com o café acabado de tirar.',
      'Adiciona o rum escuro e o licor Tia Maria.',
      'Mexe energicamente até tudo estar incorporado.',
      'Bate as natas frias num shaker sem gelo até ficarem aveludadas.',
      'Encosta a colher à superfície e deita as natas para flutuarem suavemente.',
      'Polvilha com cacau em pó e serve sem colher.'
    ],
    bartender_tip: 'O rum jamaicano traz notas de melaço e banana madura que enriquecem o café de forma muito mais exótica que o whiskey tradicional.'
  },
  {
    id: 'mulled_apple_cider',
    name: 'Cidra Quente de Maçã com Especiarias & Bourbon',
    alcoholic: true,
    category: 'hot',
    categoryLabel: 'Hot Drinks ☕',
    technique: 'Simmered Spiced Cider with Bourbon Spike',
    description: 'O aroma aconchegante de outono: sumo de maçã natural e cidra cozinhados com paus de canela, cravinho, casca de laranja e finalizados com Bourbon.',
    difficulty: 'Fácil',
    prep_time: '8 min',
    glass: 'Caneca de Vidro com Pega',
    ice: 'Sem Gelo (Fumegante)',
    abv: '11% ABV (Doce & Especiado)',
    badge: 'Conforto de Outono 🍎',
    smoking_technique: null,
    bar_tools: ['Tacho Pequeno', 'Concha', 'Passador'],
    ingredients: [
      { name: 'Sumo de Maçã 100% Natural ou Cidra de Maçã', quantity: '180 ml' },
      { name: 'Bourbon Whiskey', quantity: '40 ml' },
      { name: 'Pau de Canela', quantity: '1 unidade' },
      { name: 'Cravinhos-da-Índia', quantity: '3 unidades' },
      { name: 'Anis Estrelado', quantity: '1 estrela' },
      { name: 'Casca e Rodela de Laranja Fresca', quantity: '1 unidade' },
      { name: 'Mel Puro', quantity: '1 colher de sopa' }
    ],
    steps: [
      'Num tacho pequeno, junta o sumo de maçã, o mel, os cravinhos, o pau de canela, o anis e a casca de laranja.',
      'Deixa ferver suavemente em lume muito brando durante 6 a 8 minutos para as especiarias libertarem todos os óleos.',
      'Retira do lume e junta a dose de Bourbon.',
      'Coa diretamente para a caneca de vidro aquecida.',
      'Decora com o pau de canela e uma rodela de maçã fresca a boiar.'
    ],
    bartender_tip: 'Podes omitir o Bourbon para obter uma versão 100% sem álcool deliciosa para crianças e toda a família em noites frias!'
  },

  // ==========================================
  // NOVOS MOCKTAILS & VIRGIN DRINKS (SEM ÁLCOOL)
  // ==========================================
  {
    id: 'shirley_temple',
    name: 'Shirley Temple (O Primeiro Mocktail da História)',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Mocktails (Virgin) 🍹',
    technique: 'Built over Ice with Grenadine Float',
    description: 'Criado nos anos 1930 para a atriz mirim de Hollywood: Ginger Ale borbulhante ou gasosa, sumo de lima fresco e xarope de groselha com cereja Maraschino.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Alto Highball',
    ice: 'Gelo em Cubos Grandes',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'História de Hollywood 🎬',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Jigger'],
    ingredients: [
      { name: 'Ginger Ale ou Gasosa / Sprite', quantity: '150 ml' },
      { name: 'Xarope de Groselha (Grenadine)', quantity: '20 ml' },
      { name: 'Sumo de Lima Fresca', quantity: '15 ml' },
      { name: 'Cubos de Gelo', quantity: 'Cheios no copo' },
      { name: 'Cerejas Maraschino com Pé', quantity: '2 unidades' }
    ],
    steps: [
      'Enche o copo alto com cubos de gelo.',
      'Adiciona o sumo de lima fresca e o Ginger Ale gelado.',
      'Deita o xarope de groselha no centro: ele afunda suavemente criando um lindo degradé rosa e rubi.',
      'Pousa 2 cerejas Maraschino no topo.',
      'Serve com palhinha.'
    ],
    bartender_tip: 'O toque de sumo de lima fresca corta o doce excessivo da groselha, tornando este clássico adorado tanto por adultos como por crianças.'
  },
  {
    id: 'virgin_mary',
    name: 'Virgin Mary Nutritivo com Aipo & Especiarias',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Mocktails (Virgin) 🍹',
    technique: 'Roll Mix (Rolado de um Copo para o Outro)',
    description: 'A versão sem álcool do Bloody Mary: sumo de tomate concentrado, sumo de limão, molho inglês Worcestershire, Tabasco, sal de aipo e talo de aipo crocante.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Alto Highball com Borda de Sal de Aipo',
    ice: 'Gelo em Cubos Grandes',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Revigorante & Salgado 🍅',
    smoking_technique: null,
    bar_tools: ['Copo Misturador', 'Passador', 'Tábua'],
    ingredients: [
      { name: 'Sumo de Tomate 100% Puro', quantity: '150 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '20 ml' },
      { name: 'Molho Inglês (Worcestershire)', quantity: '4 dashes' },
      { name: 'Molho Tabasco Picante', quantity: '2 dashes' },
      { name: 'Sal de Aipo e Pimenta Preta Moída na Hora', quantity: '1 pitada de cada' },
      { name: 'Talo de Aipo Fresco Crocante com Folhas', quantity: '1 unidade' },
      { name: 'Azeitona Verde e Rodela de Limão', quantity: 'Para guarnição' }
    ],
    steps: [
      'Passa limão na borda do copo e mergulha em sal de aipo e pimenta preta.',
      'No shaker com gelo, junta o sumo de tomate, limão, molho inglês, Tabasco, sal e pimenta.',
      'Técnica do Rolling: verte suavemente o líquido de um shaker para outro 4 vezes para misturar e gelar sem espumar nem quebrar a viscosidade do tomate.',
      'Coa para o copo alto com cubos de gelo fresco.',
      'Insere o talo de aipo crocante no copo (serve de mexedor natural) e a azeitona verde espetada num palito.'
    ],
    bartender_tip: 'Nunca agites o sumo de tomate com força no shaker! Agitar com gelo deixa o tomate aquoso e cheio de espuma espessa indesejada. O método de "rolar" o líquido é a técnica correta de barman.'
  },
  {
    id: 'cinderella_mocktail',
    name: 'Cinderella Mocktail Tropical (Três Sumos & Groselha)',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Mocktails (Virgin) 🍹',
    technique: 'Shaken with Sparkling Water Top',
    description: 'A harmonia clássica sem álcool dos bares de hotel: proporções iguais de sumo de laranja, ananás e limão batidos e finalizados com soda e grenadine.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Hurricane ou Highball',
    ice: 'Gelo em Cubos Grandes',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Refrescância Tropical 🍍',
    smoking_technique: null,
    bar_tools: ['Shaker', 'Passador', 'Jigger'],
    ingredients: [
      { name: 'Sumo de Laranja Fresco', quantity: '50 ml' },
      { name: 'Sumo de Ananás Natural', quantity: '50 ml' },
      { name: 'Sumo de Limão Fresco', quantity: '30 ml' },
      { name: 'Xarope de Groselha (Grenadine)', quantity: '15 ml' },
      { name: 'Água com Gás ou Ginger Ale', quantity: '50 ml' },
      { name: 'Rodela de Laranja & Ananás', quantity: 'Para guarnecer' }
    ],
    steps: [
      'No shaker com cubos de gelo, junta os sumos de laranja, ananás e limão com a groselha.',
      'Bate vigorosamente durante 15 segundos.',
      'Coa para o copo com cubos de gelo fresco.',
      'Completa com a água com gás ou Ginger Ale para dar efervescência.',
      'Decora com meia rodela de laranja e triângulo de ananás.'
    ],
    bartender_tip: 'Um clássico internacional que agrada a todas as idades pelo seu perfeito equilíbrio cítrico e doce.'
  },
  {
    id: 'blue_ocean_fizz',
    name: 'Blue Ocean Fizz (Curaçao Azul Sem Álcool & Hortelã)',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Mocktails (Virgin) 🍹',
    technique: 'Built with Ocean Gradient',
    description: 'A cor hipnotizante das águas do Caribe sem qualquer álcool: xarope de Blue Curaçao sem álcool, sumo de lima fresca, água tónica e folhas de hortelã.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Alto Highball',
    ice: 'Gelo em Cubos Cristalinos',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Azul do Mar 🌊',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Jigger'],
    ingredients: [
      { name: 'Xarope de Blue Curaçao (0.0% Álcool)', quantity: '25 ml' },
      { name: 'Sumo de Lima Fresca', quantity: '20 ml' },
      { name: 'Água Tónica ou Sprite/Gasosa', quantity: '150 ml' },
      { name: 'Folhas de Hortelã Fresca', quantity: '5 folhas' },
      { name: 'Rodela de Lima e Mirtilos', quantity: 'Para flutuar' }
    ],
    steps: [
      'Enche o copo com cubos de gelo.',
      'Deita o sumo de lima fresca e a hortelã estalada.',
      'Completa com a água tónica ou gasosa gelada.',
      'No final, verte o xarope de Blue Curaçao lentamente no centro: ele desce como uma corrente marinha azul profunda.',
      'Decora com mirtilos e uma rodela de lima fresca.'
    ],
    bartender_tip: 'Perfeito para festas de verão, sessões de fotos e convidados que não consom álcool mas querem um drink vistoso e festivo!'
  },
  {
    id: 'tropical_sunrise_virgin',
    name: 'Tropical Sunrise Virgin (Manga, Maracujá & Laranja)',
    alcoholic: false,
    category: 'mocktails',
    categoryLabel: 'Mocktails (Virgin) 🍹',
    technique: 'Multi-Fruit Layering',
    description: 'Uma explosão de cores solares: néctar de manga madura, polpa de maracujá fresco, sumo de laranja prensado e efeito pôr do sol com grenadine.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Alto ou Hurricane',
    ice: 'Gelo em Cubos Grandes',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Pôr do Sol Tropical 🌅',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Faca de Fruta'],
    ingredients: [
      { name: 'Néctar ou Sumo de Manga Natural', quantity: '60 ml' },
      { name: 'Sumo de Laranja Fresco', quantity: '60 ml' },
      { name: 'Polpa Fresca de Maracujá com Sementes', quantity: '1/2 maracujá' },
      { name: 'Xarope de Groselha (Grenadine)', quantity: '15 ml' },
      { name: 'Cubos de Gelo', quantity: 'Abundante' }
    ],
    steps: [
      'Enche o copo com cubos de gelo.',
      'Deita o sumo de laranja e o néctar de manga e mexe suavemente.',
      'Coloca a polpa de maracujá fresco por cima.',
      'Verte o xarope de groselha na borda interior do copo: ela desce para o fundo formando o pôr do sol.',
      'Serve com palhinha.'
    ],
    bartender_tip: 'As sementes crocantes do maracujá fresco trazem uma textura sensorial maravilhosa a cada golo.'
  },

  // ==========================================
  // NOVOS SOFT DRINKS, CAFÉS & REFRESCOS
  // ==========================================
  {
    id: 'affogato_al_caffe',
    name: 'Affogato al Caffè Italiano com Gelado de Baunilha',
    alcoholic: false,
    category: 'soft',
    categoryLabel: 'Soft Drinks & Refrescos 🍋',
    technique: 'Direct Hot Espresso Pour over Artisanal Gelato',
    description: 'A sobremesa líquida mais amada de Itália: uma bola densa de gelado artesanal de baunilha afogada num café expresso duplo quente e cremoso.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Baixo de Vidro ou Taça de Sobremesa',
    ice: 'Sem Gelo (Choque Térmico com Gelado)',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Clássico Italiano 🍨',
    smoking_technique: null,
    bar_tools: ['Colher de Gelado', 'Máquina de Café Expresso'],
    ingredients: [
      { name: 'Gelado Artesanal de Baunilha ou Nata', quantity: '1 bola generosa bem firme' },
      { name: 'Café Expresso Quente Acabado de Tirar', quantity: '35 ml (1 bica curta e forte)' },
      { name: 'Amêndoas Torradas Laminadas ou Chocolate Ralado', quantity: '1 colher de chá' }
    ],
    steps: [
      'Garante que o gelado está bem firme e frio.',
      'Coloca a bola de gelado no fundo de um copo de vidro transparente.',
      'Tira um café expresso duplo curto, bem denso e quente.',
      'À frente do cliente, verte o café expresso fumegante diretamente sobre o cimo da bola de gelado.',
      'O choque térmico começa a derreter o exterior do gelado criando uma calda aveludada instantânea.',
      'Polvilha com as amêndoas torradas ou raspas de chocolate e serve com colher.'
    ],
    bartender_tip: 'Podes torná-lo alcoólico ("Affogato Corretto") adicionando 15 ml de licor Amaretto ou Baileys sobre o gelado antes do café!'
  },
  {
    id: 'frappe_grego',
    name: 'Café Frappé Grego Tradicional com Espuma Alta',
    alcoholic: false,
    category: 'soft',
    categoryLabel: 'Soft Drinks & Refrescos 🍋',
    technique: 'Electric Frother / Hard Shake for Thick Foam Head',
    description: 'O símbolo do estilo de vida das praias gregas: café solúvel Nescafé batido com água fria e gelo até formar uma espuma cremosa gigante de vários centímetros.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Alto Collins',
    ice: 'Cubos Grandes de Gelo',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Verão Grego 🇬🇷',
    smoking_technique: null,
    bar_tools: ['Misturador Elétrico de Espuma / Shaker', 'Palhinha Longa'],
    ingredients: [
      { name: 'Café Solúvel Clássico', quantity: '2 colheres de chá cheias' },
      { name: 'Açúcar Branco (ou a gosto)', quantity: '2 colheres de chá' },
      { name: 'Água Fria Mineral', quantity: '30 ml para bater + água para completar' },
      { name: 'Leite Fresco Gelado (Opcional, estilo "Me Gala")', quantity: '40 ml' },
      { name: 'Cubos de Gelo', quantity: '4 a 5 cubos' }
    ],
    steps: [
      'Num shaker ou misturador com 30 ml de água fria, junta o café solúvel e o açúcar.',
      'Bate intensamente durante 20 segundos até todo o líquido virar uma espuma densa, bege e firme.',
      'No copo alto, coloca cubos de gelo.',
      'Verte a espuma para dentro do copo.',
      'Adiciona água fria (e um fio de leite gelado se preferires mais suave) por debaixo da espuma com cuidado.',
      'A espuma sobe e fica como uma coroa aveludada.',
      'Serve com palhinha.'
    ],
    bartender_tip: 'Apenas o café solúvel com processo de secagem por pulverização produz esta espuma incrivelmente elástica e persistente que dura horas ao sol.'
  },
  {
    id: 'lassi_morango',
    name: 'Lassi Cremoso de Morango com Água de Rosas',
    alcoholic: false,
    category: 'soft',
    categoryLabel: 'Soft Drinks & Refrescos 🍋',
    technique: 'Blended Yogurt & Rosewater Infusion',
    description: 'Refresco aromático exótico: morangos naturais batidos com iogurte cremoso, leite gelado, açúcar e uma gota de água de rosas biológica.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Copo Alto Tumbler',
    ice: 'Gelo em Cubos',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Aroma a Rosas 🌹',
    smoking_technique: null,
    bar_tools: ['Liquidificador'],
    ingredients: [
      { name: 'Morangos Frescos Maduros', quantity: '120 g' },
      { name: 'Iogurte Natural Cremoso', quantity: '150 g' },
      { name: 'Leite Fresco Gordo', quantity: '60 ml' },
      { name: 'Açúcar Simples ou Mel', quantity: '2 colheres de sopa' },
      { name: 'Água de Rosas Alimentar Biológica', quantity: '2 a 3 gotas' },
      { name: 'Pétalas de Rosa Secas Comestíveis', quantity: 'Para o topo' }
    ],
    steps: [
      'No liquidificador, junta os morangos, o iogurte natural, o leite, o açúcar, as gotas de água de rosas e 3 cubos de gelo.',
      'Bate na velocidade máxima durante 30 segundos até ficar completamente homogéneo e cremoso.',
      'Verte para o copo alto.',
      'Decora com algumas pétalas de rosa comestíveis e um morango no bordo.',
      'Serve bem fresco.'
    ],
    bartender_tip: 'A água de rosas é muito potente: apenas 2 a 3 gotas são suficientes para dar uma elegância floral sublime sem parecer artificial.'
  },
  {
    id: 'agua_fresca_melancia',
    name: 'Água Fresca Mexicana de Melancia & Hortelã',
    alcoholic: false,
    category: 'soft',
    categoryLabel: 'Soft Drinks & Refrescos 🍋',
    technique: 'Cold Blended & Fine Strained Refresher',
    description: 'A bebida dos mercados mexicanos para matar a sede: melancia fresca triturada com água mineral pura, sumo de lima fresco e folhas de hortelã.',
    difficulty: 'Fácil',
    prep_time: '3 min',
    glass: 'Jarro de Vidro ou Copo Alto',
    ice: 'Cubos Grandes de Gelo',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Super Hidratante 🍉',
    smoking_technique: null,
    bar_tools: ['Liquidificador', 'Passador'],
    ingredients: [
      { name: 'Melancia Vermelha Fresca sem pevides', quantity: '300 g' },
      { name: 'Água Mineral Bem Fresca', quantity: '150 ml' },
      { name: 'Sumo de Lima Fresco', quantity: '25 ml' },
      { name: 'Folhas de Hortelã Fresca', quantity: '6 folhas' },
      { name: 'Açúcar de Cana ou Xarope de Agave (Opcional)', quantity: '1 colher de sopa' }
    ],
    steps: [
      'Corta a melancia em cubos e remove as pevides.',
      'No liquidificador, junta a melancia, a água fria, o sumo de lima e o açúcar.',
      'Tritura durante 30 segundos.',
      'Coa através de um passador para retirar o excesso de polpa e obter um líquido límpido e refrescante.',
      'Serve num copo cheio de gelo com folhas de hortelã fresca e uma fatia triangular de melancia no bordo.'
    ],
    bartender_tip: 'A melancia tem 92% de água natural rica em licopeno e potássio, sendo a bebida mais hidratante e revitalizante para dias tórridos de praia.'
  },
  {
    id: 'soda_maca_verde',
    name: 'Soda Italiana de Maçã Verde & Manjericão',
    alcoholic: false,
    category: 'soft',
    categoryLabel: 'Soft Drinks & Refrescos 🍋',
    technique: 'Layered Italian Soda Build',
    description: 'Efervescente, aromática e estaladiça: xarope artesanal de maçã verde, sumo de limão siciliano fresco, água com gás e folhas de manjericão.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Alto Highball',
    ice: 'Gelo em Cubos Grandes',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Soda Italiana 🍏',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Jigger'],
    ingredients: [
      { name: 'Xarope de Maçã Verde (Green Apple Syrup)', quantity: '30 ml' },
      { name: 'Sumo de Limão Siciliano Fresco', quantity: '15 ml' },
      { name: 'Água com Gás com Gás Vigoroso', quantity: '160 ml' },
      { name: 'Fatias Finas de Maçã Verde Granny Smith', quantity: '3 fatias' },
      { name: 'Folhas de Manjericão Fresco', quantity: 'Para guarnecer' }
    ],
    steps: [
      'No fundo do copo, deita o xarope de maçã verde e o sumo de limão siciliano.',
      'Enche o copo com cubos de gelo.',
      'Insere as fatias de maçã verde encostadas à parede de vidro.',
      'Completa com a água com gás bem fria vertida suavemente.',
      'Mexe de baixo para cima uma só vez com a colher bailarina.',
      'Decora com uma folha de manjericão no topo.'
    ],
    bartender_tip: 'A combinação da maçã verde crocante com a frescura botânica do manjericão é uma das maiores tendências dos bares modernos de café.'
  },
  {
    id: 'cha_gelado_jasmim_lichia',
    name: 'Chá Gelado de Jasmim com Polpa de Líchia',
    alcoholic: false,
    category: 'soft',
    categoryLabel: 'Soft Drinks & Refrescos 🍋',
    technique: 'Cold Brewed Floral Tea Infusion',
    description: 'Elegância oriental: infusão fria de flores de jasmim perfumadas com néctar e polpa de líchias suculentas e um toque de hortelã.',
    difficulty: 'Fácil',
    prep_time: '4 min',
    glass: 'Copo Alto de Vidro Fino',
    ice: 'Gelo em Cubos',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Floral Nobre 🌸',
    smoking_technique: null,
    bar_tools: ['Bule / Infusor', 'Passador', 'Colher'],
    ingredients: [
      { name: 'Chá Verde com Flores de Jasmim Infundido e Gelado', quantity: '160 ml' },
      { name: 'Sumo ou Xarope de Líchia', quantity: '40 ml' },
      { name: 'Líchias Frescas ou em Calda Inteiras', quantity: '2 unidades' },
      { name: 'Sumo de Lima Fresca', quantity: '10 ml' },
      { name: 'Cubos de Gelo', quantity: 'Abundante' }
    ],
    steps: [
      'Prepara o chá verde de jasmim e deixa arrefecer totalmente no frio.',
      'No copo com cubos de gelo, coloca as duas líchias inteiras no fundo.',
      'Adiciona o sumo de líchia e o sumo de lima fresca.',
      'Completa com o chá de jasmim bem gelado.',
      'Mexe levemente com a colher bailarina e serve com palhinha.'
    ],
    bartender_tip: 'As flores de jasmim conferem um perfume doce natural que dispensa grandes quantidades de açúcar, mantendo o chá incrivelmente leve e sofisticado.'
  },
  {
    id: 'horchata_mexicana',
    name: 'Horchata Mexicana Tradicional de Arroz & Canela',
    alcoholic: false,
    category: 'soft',
    categoryLabel: 'Soft Drinks & Refrescos 🍋',
    technique: 'Soaked Rice & Cinnamon Artisan Milk',
    description: 'A histórica bebida leitosa vegetal mexicana: arroz cru e amêndoas demolhados com canela, triturados e coados com baunilha e açúcar sobre gelo.',
    difficulty: 'Média',
    prep_time: '10 min',
    glass: 'Copo Alto de Vidro',
    ice: 'Gelo em Cubos Grandes',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Tradição Mexicana 🌾',
    smoking_technique: null,
    bar_tools: ['Liquidificador Potente', 'Pano de Filtragem / Passador Fino'],
    ingredients: [
      { name: 'Arroz Branco Cru (demolhado com canela)', quantity: '100 g' },
      { name: 'Amêndoas sem Pele', quantity: '30 g' },
      { name: 'Paus de Canela', quantity: '1 unidade' },
      { name: 'Água Mineral', quantity: '500 ml' },
      { name: 'Extrato de Baunilha Natural', quantity: '1 colher de chá' },
      { name: 'Leite Condensado ou Açúcar Mascavado', quantity: '3 a 4 colheres de sopa' },
      { name: 'Canela em Pó para polvilhar', quantity: 'Para finalizar' }
    ],
    steps: [
      'Demolha o arroz, as amêndoas e o pau de canela partido em 300 ml de água quente durante pelo menos 2 horas (ou durante a noite).',
      'Coloca tudo no liquidificador (incluindo o pau de canela amolecido) e tritura na potência máxima durante 2 a 3 minutos até ficar muito fino.',
      'Coa através de um pano de queijo fino ou passador de malha bem fina para um jarro, espremendo todo o leite aromático.',
      'Junta a baunilha, o restante da água fria e o leite condensado (ou açúcar), mexendo até dissolver.',
      'Serve em copos cheios de cubos de gelo e polvilha generosamente com canela em pó por cima.'
    ],
    bartender_tip: 'A Horchata é a bebida perfeita para acalmar o paladar após refeições picantes ou condimentadas graças à sua textura aveludada amilácea.'
  },

  // ==========================================
  // NOVOS CLÁSSICOS DA TRADIÇÃO PORTUGUESA
  // ==========================================
  {
    id: 'amarguinha_com_limao',
    name: 'Amêndoa Amarga do Algarve com Gelo & Limão',
    alcoholic: true,
    category: 'portuguesas',
    categoryLabel: 'Tradição Portuguesa 🇵🇹',
    technique: 'Classic Portuguese Serve with Fresh Lime Squeeze',
    description: 'O ex-líbris dos finais de tarde algarvios: licor de amêndoa amarga tradicional (Amarguinha) servido com cubos de gelo e sumo de limão fresco espremido na hora.',
    difficulty: 'Fácil',
    prep_time: '1 min',
    glass: 'Copo Baixo Old Fashioned ou Balão Pequeno',
    ice: 'Gelo em Cubos Grandes Abundante',
    abv: '20% ABV (Doce de Amêndoa & Cítrico)',
    badge: 'Sabor do Algarve ☀️',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina', 'Espremedor Manual'],
    ingredients: [
      { name: 'Licor de Amêndoa Amarga (Amarguinha)', quantity: '50 ml' },
      { name: 'Sumo de Limão Fresco Acabado de Espremer', quantity: '20 ml' },
      { name: 'Cubos Grandes de Gelo', quantity: 'Cheios no copo' },
      { name: 'Rodela Grossa de Limão Fresco', quantity: '1 unidade' }
    ],
    steps: [
      'Enche o copo baixo com bastantes cubos de gelo.',
      'Deita os 50 ml de licor de amêndoa amarga.',
      'Espreme a metade de limão fresco diretamente sobre o gelo.',
      'Mexe com a colher bailarina para que o limão cítrico quebre a doçura do licor.',
      'Insere a rodela de limão no copo.',
      'Aprecia lentamente o contraste doce-amargo inconfundível.'
    ],
    bartender_tip: 'O sumo de limão fresco é obrigatório! Sem ele, o licor de amêndoa é excessivamente doce; o limão transforma-o num dos melhores digestivos do mundo.'
  },
  {
    id: 'licor_beirao_honra',
    name: 'Licor Beirão d’Honra on the Rocks com Hortelã',
    alcoholic: true,
    category: 'portuguesas',
    categoryLabel: 'Tradição Portuguesa 🇵🇹',
    technique: 'Perfect Serve on the Rocks with Citrus & Mint',
    description: 'O Licor de Portugal: a receita secreta da Lousã com dupla destilação de sementes e plantas aromáticas, servido on the rocks com rodela de limão e hortelã.',
    difficulty: 'Fácil',
    prep_time: '1 min',
    glass: 'Copo Baixo Old Fashioned',
    ice: 'Gelo em Cubos Grandes',
    abv: '22% ABV (Aromático & Licoroso)',
    badge: 'O Licor de Portugal 🇵🇹',
    smoking_technique: null,
    bar_tools: ['Colher Bailarina'],
    ingredients: [
      { name: 'Licor Beirão (ou Beirão d’Honra com Aguardente Vínica)', quantity: '50 ml' },
      { name: 'Rodela de Limão Fresco', quantity: '1 unidade' },
      { name: 'Raminho de Hortelã Fresca', quantity: '1 unidade' },
      { name: 'Cubos de Gelo Maciços', quantity: '3 a 4 cubos' }
    ],
    steps: [
      'Coloca os cubos de gelo maciços no copo baixo.',
      'Deita os 50 ml de Licor Beirão.',
      'Bate no raminho de hortelã na palma da mão e introduz no copo.',
      'Espreme ligeiramente a rodela de limão e coloca-a encostada ao gelo.',
      'Dá uma suave volta com a colher e serve.'
    ],
    bartender_tip: 'Para uma versão Long Drink extremamente popular nos festivais de verão (o "Caipirão"), prepara-o como uma caipirinha substituindo a cachaça e o açúcar apenas por Licor Beirão e lima!'
  },
  {
    id: 'mazagran_portugues',
    name: 'Mazagran Tradicional Português (Café & Limão Gelado)',
    alcoholic: false,
    category: 'portuguesas',
    categoryLabel: 'Tradição Portuguesa 🇵🇹',
    technique: 'Built over Ice with Fresh Lemon & Mint',
    description: 'O clássico histórico das tabernas e cafés portugueses do séc. XX: café expresso acabado de tirar deitado sobre gelo, sumo de limão fresco e hortelã.',
    difficulty: 'Fácil',
    prep_time: '2 min',
    glass: 'Copo Alto de Vidro',
    ice: 'Gelo em Cubos Grandes Abundante',
    abv: '0.0% ABV (Sem Álcool)',
    badge: 'Herança das Tabernas ☕',
    smoking_technique: null,
    bar_tools: ['Máquina de Expresso', 'Colher Bailarina'],
    ingredients: [
      { name: 'Café Expresso Quente Forte (Bica Dupla)', quantity: '60 ml' },
      { name: 'Sumo de Limão Fresco', quantity: '20 ml' },
      { name: 'Açúcar de Cana ou Mascavado', quantity: '1 a 2 colheres de chá' },
      { name: 'Cubos de Gelo', quantity: 'Cheios no copo' },
      { name: 'Rodela de Limão e Ramo de Hortelã', quantity: 'Para finalizar' }
    ],
    steps: [
      'Tira o café expresso duplo e dissolve nele o açúcar enquanto está bem quente.',
      'Enche o copo alto até cima com cubos de gelo.',
      'Adiciona o sumo de limão fresco sobre o gelo.',
      'Verte o café expresso quente açucarado diretamente sobre os cubos de gelo: o choque térmico preserva os aromas torrados.',
      'Mexe rapidamente com a colher bailarina.',
      'Decora com a rodela de limão e o ramo de hortelã e serve com palhinha.'
    ],
    bartender_tip: 'O Mazagran foi a primeira versão mundial de café gelado com citrino, trazida pelos soldados portugueses e franceses no séc. XIX e adoptada com fervor em Lisboa!'
  }
];

// Load existing 52 drinks from generateDrinksData.cjs by executing or parsing
const existingDrinksMatch = baseScript.match(/const DRINKS = (\[[\s\S]*?\]);\s*const fileContent/);
if (!existingDrinksMatch) {
  console.error("Could not find DRINKS array in generateDrinksData.cjs");
  process.exit(1);
}

// We evaluate the existing drinks safely in a function
const getExistingDrinks = new Function(baseScript.replace(/const fs =[\s\S]*?const DRINKS =/, 'return').replace(/;\s*const fileContent[\s\S]*/, ';'));
const existingDrinks = getExistingDrinks();

console.log("Loaded existing drinks count:", existingDrinks.length);
console.log("Adding new drinks count:", newDrinks.length);

const allDrinks = [...existingDrinks, ...newDrinks];
console.log("Total combined drinks count:", allDrinks.length);

// 1. Generate src/data/drinksImages.js
const imports = [];
const imageMapEntries = [];

allDrinks.forEach(drink => {
  const camelName = drink.id.replace(/_([a-z0-9])/g, (_, letter) => letter.toUpperCase()) + 'Img';
  imports.push("import " + camelName + " from '@/assets/drinks/" + drink.id + ".jpg';");
  imageMapEntries.push("  " + drink.id + ": " + camelName + ",");
});

const drinksImagesContent = imports.join('\n') + '\n\nexport const DRINK_IMAGES = {\n' + imageMapEntries.join('\n') + '\n};\n';

fs.writeFileSync(path.join(__dirname, '../src/data/drinksImages.js'), drinksImagesContent, 'utf8');
console.log('Successfully wrote src/data/drinksImages.js with ' + allDrinks.length + ' image mappings!');

// 2. Generate src/data/drinksData.js
const ALCOHOL_FILTERS = [
  { id: 'todos', label: 'Todas as Bebidas' },
  { id: 'alcoolicas', label: 'Alcoólicas 🍸' },
  { id: 'nao_alcoolicas', label: 'Sem Álcool (Virgin) 🥤' }
];

const DRINK_CATEGORIES = [
  { id: 'todas', label: 'Todas 🍹' },
  { id: 'fumo', label: 'Fumo Aromático 💨' },
  { id: 'energy', label: 'Energéticas & Mixes ⚡' },
  { id: 'cocktails', label: 'Cocktails Clássicos 🍸' },
  { id: 'short', label: 'Short Drinks 🥃' },
  { id: 'long', label: 'Long Drinks 🥤' },
  { id: 'shots', label: 'Shots 🎯' },
  { id: 'hot', label: 'Hot Drinks ☕' },
  { id: 'mocktails', label: 'Mocktails (Virgin) 🍹' },
  { id: 'soft', label: 'Soft Drinks & Refrescos 🍋' },
  { id: 'portuguesas', label: 'Tradição Portuguesa 🇵🇹' }
];

const drinksDataContent = 'export const ALCOHOL_FILTERS = ' + JSON.stringify(ALCOHOL_FILTERS, null, 2) + ';\n\n' +
  'export const DRINK_CATEGORIES = ' + JSON.stringify(DRINK_CATEGORIES, null, 2) + ';\n\n' +
  'export const DRINKS = ' + JSON.stringify(allDrinks, null, 2) + ';\n';

fs.writeFileSync(path.join(__dirname, '../src/data/drinksData.js'), drinksDataContent, 'utf8');
console.log('Successfully wrote src/data/drinksData.js with ' + allDrinks.length + ' drinks!');

