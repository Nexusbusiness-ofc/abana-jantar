export const ALCOHOL_FILTERS = [
  {
    "id": "todos",
    "label": "Todas as Bebidas"
  },
  {
    "id": "alcoolicas",
    "label": "Alcoólicas 🍸"
  },
  {
    "id": "nao_alcoolicas",
    "label": "Sem Álcool (Virgin) 🥤"
  }
];

export const DRINK_CATEGORIES = [
  {
    "id": "todas",
    "label": "Todas as Bebidas 🍹",
    "icon": "Sparkles",
    "desc": "Explora o cardápio completo com 136 opções"
  },
  {
    "id": "fumo",
    "label": "Fumo Aromático 💨",
    "icon": "Wind",
    "desc": "Cocktails defumados com campânula, maçarico e madeiras nobres"
  },
  {
    "id": "gins",
    "label": "Gins de Autor & Botânicos 🍸",
    "icon": "Wine",
    "desc": "Taças balão geladas, botânicos raros, infusões florais, cítricas e zimbro selvagem"
  },
  {
    "id": "caipirinhas",
    "label": "Caipirinhas & Caipiroskas 🍹",
    "icon": "GlassWater",
    "desc": "Caipiblack, Morangoska, Caipirão, Caipiroska e variações tropicais com cachaça e vodkas de luxo"
  },
  {
    "id": "energy",
    "label": "Energéticas & Mixes ⚡",
    "icon": "Zap",
    "desc": "Misturas vibrantes com Red Bull, Monster e destilados"
  },
  {
    "id": "cocktails",
    "label": "Cocktails Clássicos 🍸",
    "icon": "Wine",
    "desc": "Grandes clássicos internacionais de cocktail da IBA"
  },
  {
    "id": "short",
    "label": "Short Drinks 🥃",
    "icon": "GlassWater",
    "desc": "Bebidas curtas servidas em copos rocks ou taças coupe"
  },
  {
    "id": "long",
    "label": "Long Drinks 🥤",
    "icon": "Sparkles",
    "desc": "Cocktails refrescantes com bastante gelo e misturador"
  },
  {
    "id": "shots",
    "label": "Shots 🎯",
    "icon": "Flame",
    "desc": "Doses rápidas, camadas densas e rituais de balcão"
  },
  {
    "id": "hot",
    "label": "Hot Drinks 🔥",
    "icon": "Flame",
    "desc": "Bebidas quentes reconfortantes com especiarias e café"
  },
  {
    "id": "mocktails",
    "label": "Mocktails (Virgin) 🍹",
    "icon": "GlassWater",
    "desc": "Cocktails sofisticados 100% livres de álcool"
  },
  {
    "id": "soft",
    "label": "Soft Drinks & Refrescos 🍋",
    "icon": "GlassWater",
    "desc": "Limonadas artesanais, batidos, sodas e refrescos"
  },
  {
    "id": "portuguesas",
    "label": "Tradição Portuguesa 🇵🇹",
    "icon": "Wine",
    "desc": "Ponchas da Madeira, licores tradicionais e sangrias"
  },
  {
    "id": "cafes",
    "label": "Cafés & Barista ☕",
    "icon": "Coffee",
    "desc": "Cappuccinos, Lattes em camadas, Cold Brews, Mochas e Espressos"
  }
];

export const DRINKS = [
  {
    "id": "cocktail_fumegante",
    "name": "Cocktail Fumegante Mistério (Poção Violeta)",
    "alcoholic": true,
    "category": "fumo",
    "categoryLabel": "Fumo Aromático 💨",
    "technique": "Batido no Shaker & Névoa Aromática",
    "description": "Cocktail violeta hipnotizante com névoa aromática densa, notas florais requintadas e frescura cítrica.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Taça de Martini / Coupe",
    "ice": "Gelo para agitar + Nevoeiro Aromático",
    "abv": "18% ABV (Moderado)",
    "badge": "Destaque Bar ✨",
    "smoking_technique": "Utiliza uma mini pedra de gelo seco alimentar para uma névoa densa a transbordar da taça, ou defuma a taça previamente com ramos de lavanda e alecrim tostados com maçarico de bar.",
    "bar_tools": [
      "Shaker Cobbler",
      "Jigger (Doser)",
      "Strainer (Passador fino)",
      "Pinça de Bar"
    ],
    "ingredients": [
      {
        "name": "Gin Premium ou Vodka",
        "quantity": "50 ml"
      },
      {
        "name": "Licor de Violeta ou Flor de Sabugueiro",
        "quantity": "25 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Xarope Simples ou de Amora",
        "quantity": "15 ml"
      },
      {
        "name": "Gelo em Cubos Grandes",
        "quantity": "4 a 5 cubos"
      },
      {
        "name": "Pedra de Gelo Seco Alimentar ou Ramo de Alecrim Tostado",
        "quantity": "1 un"
      }
    ],
    "steps": [
      "Arrefece previamente a taça de cocktail no congelador durante 10 minutos.",
      "No shaker, adiciona cubos de gelo, o gin (ou vodka), o licor floral, o sumo de lima espremido na hora e o xarope simples.",
      "Fecha bem o shaker e bate vigorosamente durante 15 segundos até o metal ficar completamente gelado e condensado.",
      "Faz um double-strain (coagem dupla) com o passador para dentro da taça gelada.",
      "Técnica do Fumo: com uma pinça própria de barman, solta delicadamente uma pequena pedrinha de gelo seco alimentar no fundo da taça para libertar uma névoa espetacular instantânea.",
      "Serve imediatamente enquanto a névoa perfumada transborda suavemente pela haste do copo."
    ],
    "bartender_tip": "Se usares gelo seco alimentar, avisa sempre o cliente para beber com palhinha ou esperar 2 minutos até que o gelo seco sublime por completo sem nunca mastigar. Em alternativa de bar, queima um raminho de alecrim e pousa-o na taça."
  },
  {
    "id": "smoked_old_fashioned",
    "name": "Smoked Old Fashioned (Campânula de Carvalho)",
    "alcoholic": true,
    "category": "fumo",
    "categoryLabel": "Fumo Aromático 💨",
    "technique": "Mexido no Mixing Glass & Defumado com Campânula",
    "description": "A joia da mixologia contemporânea: Bourbon envelhecido infundido sob campânula de vidro com fumo denso de aparas de madeira de carvalho tostado.",
    "difficulty": "Avançada",
    "prep_time": "5 min",
    "glass": "Copo Baixo Old Fashioned (Rocks Glass)",
    "ice": "Cubo Único de Gelo Cristalino Gigante",
    "abv": "32% ABV (Forte & Encorpado)",
    "badge": "Obra de Arte 🥃",
    "smoking_technique": "Defumação com aparas de carvalho ou barril de bourbon. Usa um maçarico sobre a madeira numa base de ardósia ou uma smoking gun, cobrindo o copo com uma campânula de vidro transparente durante 30 a 45 segundos para prender os óleos aromáticos.",
    "bar_tools": [
      "Mixing Glass",
      "Colher Bailarina (Barspoon)",
      "Strainer Julep",
      "Campânula de Vidro",
      "Maçarico de Bar / Smoking Gun"
    ],
    "ingredients": [
      {
        "name": "Bourbon ou Rye Whiskey de Qualidade",
        "quantity": "60 ml"
      },
      {
        "name": "Angostura Aromatic Bitters",
        "quantity": "3 dashes"
      },
      {
        "name": "Angostura Orange Bitters",
        "quantity": "1 dash"
      },
      {
        "name": "Xarope de Açúcar Demerara (2:1)",
        "quantity": "10 ml"
      },
      {
        "name": "Bloco de Gelo Translúcido",
        "quantity": "1 cubo grande"
      },
      {
        "name": "Casca (Zest) de Laranja Fresca",
        "quantity": "1 tira longa"
      },
      {
        "name": "Aparas de Madeira de Carvalho ou Macieira",
        "quantity": "1 colher de chá"
      }
    ],
    "steps": [
      "No mixing glass, adiciona o xarope demerara e os dashes de Angostura e Orange bitters.",
      "Adiciona o bourbon e enche o mixing glass com cubos grandes de gelo.",
      "Mexe pacientemente com a colher bailarina em movimentos circulares contínuos durante 30 segundos para atingir a diluição e temperatura ideais.",
      "Coloca o cubo único gigante de gelo transparente no copo Old Fashioned.",
      "Coa o líquido para o copo sobre o gelo e espreme os óleos da casca de laranja por cima, passando-a pelo rebordo.",
      "Técnica de Fumo: coloca as aparas de carvalho na tábua, acende com o maçarico até libertar brasas e fumo espesso, cobre imediatamente com a campânula de vidro sobre o copo.",
      "Leva à mesa do cliente e levanta a campânula ao servir: o aroma amadeirado invade o ambiente de forma inesquecível!"
    ],
    "bartender_tip": "O segredo da defumação perfeita é deixar o fumo assentar no copo durante pelo menos 30 segundos. As moléculas de fumo ligam-se aos óleos cítricos da casca de laranja, criando uma profundidade aromática inigualável."
  },
  {
    "id": "mezcal_fumegante",
    "name": "Mezcalita com Alecrim Tostado & Fumo Herbáceo",
    "alcoholic": true,
    "category": "fumo",
    "categoryLabel": "Fumo Aromático 💨",
    "technique": "Shaken com Ramo Incandescente de Alecrim",
    "description": "A alma defumada do agave mexicano combinada com sumo de toranja e o aroma reconfortante de um ramo de alecrim tostado no maçarico.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Baixo (Tumbler)",
    "ice": "Gelo em Cubos Grandes",
    "abv": "22% ABV (Marcante)",
    "badge": "Defumado Selvagem 🌿",
    "smoking_technique": "Tocha diretamente um ramo verde de alecrim fresco com a chama azul do maçarico até produzir brasas incandescentes e fumo branco abundante. Pousa o ramo a fumegar por cima do cocktail.",
    "bar_tools": [
      "Shaker",
      "Jigger",
      "Passador Hawthorne",
      "Maçarico Culinário"
    ],
    "ingredients": [
      {
        "name": "Mezcal Artesanal de Agave Espadín",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Toranja Rosa Fresco",
        "quantity": "30 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "20 ml"
      },
      {
        "name": "Xarope de Agave Orgânico",
        "quantity": "15 ml"
      },
      {
        "name": "Sal Fumado ou Sal Negro para a Borda",
        "quantity": "Para a crosta"
      },
      {
        "name": "Ramo de Alecrim Fresco Robusto",
        "quantity": "2 unidades"
      }
    ],
    "steps": [
      "Passa uma rodela de lima em metade da borda do copo e passa em sal fumado.",
      "Num shaker, quebra ligeiramente um ramo de alecrim com o muddler para soltar a essência.",
      "Junta o mezcal, o sumo de toranja fresco, o sumo de lima, o xarope de agave e cubos de gelo.",
      "Bate vigorosamente no shaker por 15 segundos até gelar totalmente.",
      "Verte com dupla coagem para o copo previamente cheio de gelo fresco.",
      "Técnica do Fumo: segura o segundo ramo de alecrim com uma pinça, queima a ponta com o maçarico até fazer brasas ativas e soltar fumo branco.",
      "Pousa o ramo em brasa sobre o cubo de gelo e serve de imediato enquanto o fumo aromático envolve o copo."
    ],
    "bartender_tip": "O alecrim queima melhor se for seco levemente com um guardanapo antes de tostar. Ao inalar o fumo enquanto se bebe, as notas terrosas do mezcal explodem no paladar!"
  },
  {
    "id": "cinnamon_bourbon_smoke",
    "name": "Bourbon com Canela Incandescente & Laranja",
    "alcoholic": true,
    "category": "fumo",
    "categoryLabel": "Fumo Aromático 💨",
    "technique": "Defumação Reversa de Copo com Pau de Canela",
    "description": "Técnica de barman lendária: o copo é virado ao contrário sobre um pau de canela a queimar para capturar o fumo adocicado antes de verter o cocktail.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Rocks Baixo",
    "ice": "Gelo em Cubos Grandes",
    "abv": "26% ABV (Quente & Aromático)",
    "badge": "Aroma Inesquecível 🪵",
    "smoking_technique": "Defumação de copo invertido (Inverted Glass Smoking): queima-se a ponta de um pau de canela inteiro até ficar em brasa vermelha e coloca-se o copo invertido por cima durante 1 minuto para o vidro absorver os óleos essenciais condensados.",
    "bar_tools": [
      "Mixing Glass",
      "Colher de Bar",
      "Strainer",
      "Maçarico Culinário",
      "Base de Madeira ou Ardósia"
    ],
    "ingredients": [
      {
        "name": "Bourbon Whiskey",
        "quantity": "50 ml"
      },
      {
        "name": "Licor de Laranja (Cointreau ou Triple Sec)",
        "quantity": "20 ml"
      },
      {
        "name": "Xarope de Bordo (Maple Syrup) ou Mel",
        "quantity": "10 ml"
      },
      {
        "name": "Bitters de Canela ou Angostura",
        "quantity": "2 dashes"
      },
      {
        "name": "Pau de Canela Inteiro de Ceilão",
        "quantity": "1 unidade"
      },
      {
        "name": "Rodela de Laranja Desidratada",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Numa tábua resistente, acende a ponta do pau de canela com o maçarico até fazer uma brasa viva e muito fumo.",
      "Coloca o copo de servir virado de cabeça para baixo sobre o pau de canela, aprisionando todo o fumo no seu interior.",
      "Enquanto o copo absorve o fumo (cerca de 45 segundos), prepara o drink: no mixing glass com gelo, junta o bourbon, o licor de laranja, o xarope e os bitters.",
      "Mexe energicamente com a colher bailarina durante 25 segundos para arrefecer bem.",
      "Vira o copo de servir (o fumo denso escapa num espetáculo visual!), adiciona um cubo grande de gelo e coa a mistura.",
      "Finaliza colocando o pau de canela fumegante e a rodela de laranja como guarnição."
    ],
    "bartender_tip": "O fumo da canela cria um filme oleoso no interior do vidro que transfere um sabor aveludado e tostado a cada gole, perfeito para noites frias ou cocktails de assinatura."
  },
  {
    "id": "jager_bomb",
    "name": "Jägerbomb Explosivo (Shot & Energy Drop)",
    "alcoholic": true,
    "category": "energy",
    "categoryLabel": "Misturas Energéticas ⚡",
    "technique": "Drop Shot (Shot Submerso)",
    "description": "O ritual mais enérgico da vida noturna mundial: um shot de licor de ervas Jägermeister gelado a cair dentro de um copo com Red Bull gasoso.",
    "difficulty": "Fácil",
    "prep_time": "1 min",
    "glass": "Copo Highball / Pint Glass + Copo de Shot",
    "ice": "Sem Gelo (Bebidas Extramente Geladas)",
    "abv": "14% ABV (Vibrante)",
    "badge": "Vida Noturna 🔥",
    "smoking_technique": null,
    "bar_tools": [
      "Copo de Shot clássico",
      "Copo Alto Highball ou Tumbler"
    ],
    "ingredients": [
      {
        "name": "Licor de Ervas Jägermeister (a -18°C)",
        "quantity": "45 ml"
      },
      {
        "name": "Bebida Energética (Red Bull Original bem gelada)",
        "quantity": "120 ml"
      }
    ],
    "steps": [
      "Garante que a garrafa de Jägermeister esteve no congelador a -18°C e que a lata de energético está muito gelada.",
      "Enche o copo de shot com os 45 ml de Jägermeister.",
      "No copo alto, deita cerca de meia lata (120 ml) de Red Bull fresco sem gelo para não diluir.",
      "Equilibra o copo de shot no topo ou solta-o diretamente dentro do copo com o energético.",
      "Bebe de imediato de uma só vez (chug) para misturar a doçura energética com o amargor herbal das 56 ervas!"
    ],
    "bartender_tip": "Para festas em grupo, os barmans fazem o lendário Jäger-Train: alinham os copos de shot nas bordas dos copos altos e derrubam o primeiro para um efeito dominó espetacular!"
  },
  {
    "id": "vodka_energy_tropical",
    "name": "Vodka Tropical Energy Fusion (Sunset Highball)",
    "alcoholic": true,
    "category": "energy",
    "categoryLabel": "Misturas Energéticas ⚡",
    "technique": "Montado em Camadas (Built with Float)",
    "description": "Explosão tropical refrescante com Vodka Premium, Red Bull Tropical Edition, sumo de lima fresca e maracujá natural.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Abundante",
    "abv": "12% ABV (Equilibrado & Frutado)",
    "badge": "Sucesso de Verão ☀️",
    "smoking_technique": null,
    "bar_tools": [
      "Jigger",
      "Colher Bailarina",
      "Faca de Guarnição"
    ],
    "ingredients": [
      {
        "name": "Vodka Premium Filtrada",
        "quantity": "50 ml"
      },
      {
        "name": "Red Bull Tropical (Amarelo) ou Melancia",
        "quantity": "150 ml"
      },
      {
        "name": "Polpa de Maracujá Fresco com Sementes",
        "quantity": "1/2 maracujá"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "15 ml"
      },
      {
        "name": "Gelo em Cubos Cristalinos",
        "quantity": "Até encher o copo"
      },
      {
        "name": "Ramo de Hortelã Fresca & Rodela de Lima",
        "quantity": "Para guarnecer"
      }
    ],
    "steps": [
      "Enche o copo alto Highball até ao topo com cubos de gelo.",
      "Adiciona a vodka e o sumo de lima acabado de espremer.",
      "Junta a polpa fresca de meio maracujá por cima do gelo.",
      "Completa delicadamente com o Red Bull Tropical, deixando criar um degradé luminoso amarelo-alaranjado.",
      "Dá uma leve mexida com a colher bailarina de baixo para cima para integrar sem perder o gás.",
      "Guarnece com um ramo de hortelã estalado na mão para libertar o aroma e uma rodela de lima fresca."
    ],
    "bartender_tip": "O segredo para um long drink energético perfeito é usar muito gelo: quanto mais gelo o copo tiver, mais frio o drink fica e menos diluição ocorre durante o consumo!"
  },
  {
    "id": "monster_green_smash",
    "name": "Monster Citrus Smash com Gin & Hortelã",
    "alcoholic": true,
    "category": "energy",
    "categoryLabel": "Misturas Energéticas ⚡",
    "technique": "Muddled & Built (Pressionado no Copo)",
    "description": "Combinação potente e revigorante de London Dry Gin, Monster Energy Original, gomos de lima macerados e hortelã fresca.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto ou Caneca Térmica de Bar",
    "ice": "Gelo Picado (Crushed Ice)",
    "abv": "13% ABV (Energizante)",
    "badge": "Potência Máxima ⚡",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler (Pilão de Bar)",
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin",
        "quantity": "50 ml"
      },
      {
        "name": "Monster Energy Original (Verde)",
        "quantity": "140 ml"
      },
      {
        "name": "Lima Fresca em Gomos",
        "quantity": "1/2 unidade"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "6 a 8 folhas"
      },
      {
        "name": "Xarope de Açúcar de Cana",
        "quantity": "10 ml"
      },
      {
        "name": "Gelo Picado",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "No fundo do copo, coloca os gomos de lima cortados e o xarope de açúcar.",
      "Com o pilão (muddler), pressiona suavemente a lima para extrair todo o sumo e os óleos aromáticos da casca.",
      "Bate nas folhas de hortelã com as palmas das mãos para despertar os aromas e coloca-as no copo.",
      "Adiciona o Gin e preenche o copo até meio com gelo picado.",
      "Mexe ligeiramente para misturar a base.",
      "Enche o restante copo com mais gelo picado e completa com Monster Energy até à borda.",
      "Finaliza com um topo de hortelã e uma palhinha sustentável."
    ],
    "bartender_tip": "Nunca esmagues a hortelã com força no pilão: isso liberta a clorofila amarga. Pressiona apenas a lima e junta a hortelã solta!"
  },
  {
    "id": "energy_mocktail_boost",
    "name": "Tropical Energy Boost (Sem Álcool 0.0%)",
    "alcoholic": false,
    "category": "energy",
    "categoryLabel": "Misturas Energéticas ⚡",
    "technique": "Layered Mocktail (Montado em Camadas)",
    "description": "Bebida energética sem álcool, rica em sabor cítrico e tropical: Red Bull Tropical com sumo de laranja fresco e xarope de romã/groselha no fundo.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Hurricane ou Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Energia Sem Álcool ⚡",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Red Bull Tropical ou Sem Açúcar",
        "quantity": "150 ml"
      },
      {
        "name": "Sumo de Laranja Natural Prensado",
        "quantity": "60 ml"
      },
      {
        "name": "Xarope de Romã (Grenadine) ou Groselha",
        "quantity": "15 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "10 ml"
      },
      {
        "name": "Gelo em Cubos",
        "quantity": "Até preencher o copo"
      },
      {
        "name": "Rodela de Laranja & Mirtilos",
        "quantity": "Para decoração"
      }
    ],
    "steps": [
      "Enche o copo com cubos de gelo.",
      "Deita o xarope de grenadine no fundo do copo: por ser mais denso, assentará no fundo.",
      "Adiciona o sumo de lima e o sumo de laranja fresco suavemente.",
      "Encosta as costas de uma colher bailarina no bordo interior do copo e verte lentamente o Red Bull por cima para criar camadas cromáticas espetaculares (vermelho, laranja e amarelo).",
      "Decora com meia rodela de laranja e mirtilos no topo.",
      "Serve com uma palhinha para o cliente poder misturar ao seu ritmo!"
    ],
    "bartender_tip": "O segredo da densidade líquida: líquidos com maior teor de açúcar ficam no fundo. Se deitares devagar pelas costas da colher, as camadas nunca se misturam antes de servir!"
  },
  {
    "id": "b52_shot",
    "name": "B-52 Shot em 3 Camadas Flutuantes",
    "alcoholic": true,
    "category": "shots",
    "categoryLabel": "Shots 🎯",
    "technique": "Layered (Camadas por Densidade com Colher Bailarina)",
    "description": "O shot em camadas mais famoso do mundo: café licoroso Kahlúa, creme irlandês Baileys e licor de laranja Grand Marnier perfeitamente suspensos.",
    "difficulty": "Avançada",
    "prep_time": "3 min",
    "glass": "Copo de Shot Clássico (50-60 ml)",
    "ice": "Sem Gelo",
    "abv": "27% ABV (Licoroso & Aveludado)",
    "badge": "Clássico Triplo 🎯",
    "smoking_technique": null,
    "bar_tools": [
      "Copo de Shot",
      "Colher Bailarina Invertida (Pouring Spoon)",
      "Bico Dosador de Garrafa"
    ],
    "ingredients": [
      {
        "name": "Licor de Café (Kahlúa ou Tía María)",
        "quantity": "20 ml"
      },
      {
        "name": "Licor Creme Irlandês (Baileys)",
        "quantity": "20 ml"
      },
      {
        "name": "Licor de Laranja (Grand Marnier ou Cointreau)",
        "quantity": "20 ml"
      }
    ],
    "steps": [
      "Pousa o copo de shot numa superfície nivelada e firme.",
      "Primeira Camada: deita os 20 ml de licor de café Kahlúa diretamente no fundo do copo.",
      "Segunda Camada: encosta a ponta da colher bailarina virada ao contrário na parede do vidro, mesmo acima da camada de café. Verte o Baileys muito devagar pela haste da colher.",
      "Terceira Camada: com a mesma técnica delicada, apoia a colher sobre a camada de Baileys e verte o Grand Marnier lentamente.",
      "Observa o resultado: três listras cromáticas perfeitamente nítidas e separadas.",
      "Bebe de um só gole para sentir a evolução térmica e de sabores do café, creme e citrino."
    ],
    "bartender_tip": "Se quiseres a versão Flaming B-52, usa rum com alto teor alcoólico (Overproof 75.5%) numa finíssima película por cima e acende com cuidado. Lembra-te: apagar sempre a chama antes de beber com palhinha!"
  },
  {
    "id": "baby_guinness",
    "name": "Baby Guinness (Mini Stout Shot)",
    "alcoholic": true,
    "category": "shots",
    "categoryLabel": "Shots 🎯",
    "technique": "Layered (Flutuação de Creme)",
    "description": "Ilusão de ótica deliciosa: parece uma mini imperial Guinness perfeita, mas é um shot doce e cremoso de licor de café com coroa aveludada de Baileys.",
    "difficulty": "Média",
    "prep_time": "2 min",
    "glass": "Copo de Shot Pequeno",
    "ice": "Sem Gelo",
    "abv": "21% ABV (Cremoso)",
    "badge": "Favorito de Pub 🍺",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina de Barman",
      "Copo de Shot"
    ],
    "ingredients": [
      {
        "name": "Licor de Café Escuro (Kahlúa ou Patron XO)",
        "quantity": "35 ml"
      },
      {
        "name": "Licor Creme Irlandês (Baileys)",
        "quantity": "15 ml"
      }
    ],
    "steps": [
      "Coloca o licor de café no copo de shot até atingir cerca de 3/4 da altura.",
      "Encosta as costas de uma colher bailarina na borda interior do copo.",
      "Verte o Baileys cuidadosamente sobre as costas da colher para flutuar suavemente por cima do licor escuro.",
      "O Baileys forma uma densa espuma branca no topo, idêntica à famosa espuma cremosa da cerveja stout.",
      "Serve imediatamente à temperatura ambiente ou com licores ligeiramente frescos."
    ],
    "bartender_tip": "Verte o Baileys com um fluxo constante e muito fino. A densidade do Kahlúa suportará o Baileys sem misturar se a colher estiver encostada rente à superfície."
  },
  {
    "id": "kamikaze_shot",
    "name": "Kamikaze Citrus Shot",
    "alcoholic": true,
    "category": "shots",
    "categoryLabel": "Shots 🎯",
    "technique": "Hard Shake & Fine Strain",
    "description": "Um shot cítrico eletrizante e cristalino: vodka premium, triple sec e sumo de lima fresco batidos até quase congelar.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copos de Shot (rende 2 doses)",
    "ice": "Gelo para bater no Shaker",
    "abv": "25% ABV (Cítrico & Intenso)",
    "badge": "Impacto Rápido ⚡",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador Hawthorne",
      "Passador de Rede Fina (Double Strainer)"
    ],
    "ingredients": [
      {
        "name": "Vodka",
        "quantity": "30 ml"
      },
      {
        "name": "Triple Sec (Cointreau)",
        "quantity": "30 ml"
      },
      {
        "name": "Sumo de Lima Fresca Acabado de Espremer",
        "quantity": "30 ml"
      },
      {
        "name": "Xarope Simples de Açúcar (Opcional)",
        "quantity": "5 ml"
      },
      {
        "name": "Gelo em Cubos",
        "quantity": "Para bater"
      }
    ],
    "steps": [
      "Enche o shaker com cubos de gelo abundantes.",
      "Adiciona a vodka, o triple sec e o sumo de lima fresco (e o xarope se preferires menos ácido).",
      "Fecha e bate intensamente durante 15 segundos: o objetivo é fragmentar ligeiramente os cristais de gelo.",
      "Coa rapidamente para dois copos de shot frios.",
      "Decora com um mini triângulo de lima no bordo do copo.",
      "Bebe imediatamente de uma só vez para uma explosão de frescura cítrica."
    ],
    "bartender_tip": "A regra clássica de ouro do Kamikaze é a proporção 1:1:1 (partes iguais de vodka, triple sec e lima). Para paladares que apreciam equilíbrio, 5 ml de xarope de açúcar suavizam a acidez sem perder o perfil vibrante."
  },
  {
    "id": "irish_coffee",
    "name": "Irish Coffee Imperial com Natas Batidas",
    "alcoholic": true,
    "category": "hot",
    "categoryLabel": "Hot Drinks ☕",
    "technique": "Café Quente Infundido & Natas Flutuantes",
    "description": "O clássico mundial aquecido: Whiskey Irlandês com café expresso quente açucarado, coroado com natas frescas batidas à mão que flutuam sem afundar.",
    "difficulty": "Média",
    "prep_time": "5 min",
    "glass": "Caneca Irlandesa de Vidro com Pé (Toddy Glass)",
    "ice": "Sem Gelo (Servido Quente)",
    "abv": "14% ABV (Reconfortante)",
    "badge": "Rei das Noites Frias ❄️",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Vara de Arames Pequena ou Shaker para bater natas",
      "Chávena Medidora"
    ],
    "ingredients": [
      {
        "name": "Whiskey Irlandês (ex: Jameson ou Bushmills)",
        "quantity": "40 ml"
      },
      {
        "name": "Café de Filtro Forte ou Duplo Expresso Quente",
        "quantity": "100 ml"
      },
      {
        "name": "Açúcar Mascavado ou Açúcar Demerara",
        "quantity": "2 colheres de chá"
      },
      {
        "name": "Natas Frescas com Alto Teor de Gordura (35%)",
        "quantity": "40 ml"
      },
      {
        "name": "Noz-moscada ralada na hora ou Grãos de Café",
        "quantity": "Para decorar"
      }
    ],
    "steps": [
      "Pré-aquece o copo de vidro enchendo-o com água a ferver durante 1 minuto. Descarta a água (isto evita que o vidro estale e mantém o drink quente).",
      "No copo quente, adiciona as 2 colheres de açúcar mascavado e o café quente acabado de tirar.",
      "Mexe vigorosamente até o açúcar dissolver completamente (essencial para alterar a densidade do líquido).",
      "Adiciona o whiskey irlandês e mistura mais uma vez.",
      "Num recipiente ou shaker sem gelo, bate levemente as natas frias até ficarem espessas e aveludadas, mas ainda fluidas (não bater até ao ponto de chantilly).",
      "Encosta as costas da colher à superfície do café e verte as natas gentilmente para que fiquem a flutuar no topo.",
      "Rala um toque subtil de noz-moscada fresca no topo e serve sem palhinha nem colher (o cliente deve beber o café quente através da camada de natas frias)."
    ],
    "bartender_tip": "O segredo absoluto para as natas flutuarem: o café tem de ter açúcar completamente dissolvido (aumenta a densidade) e as natas têm de estar frias e semi-batidas. Se o café não tiver açúcar, as natas afundam imediatamente!"
  },
  {
    "id": "hot_toddy",
    "name": "Hot Toddy Reconfortante com Mel & Especiarias",
    "alcoholic": true,
    "category": "hot",
    "categoryLabel": "Hot Drinks ☕",
    "technique": "Infusão a Quente com Especiarias",
    "description": "O remédio ancestral dos bares escoceses: Bourbon ou Scotch Whiskey aquecido com água fervente, mel puro biológico, sumo de limão fresco e cravo-da-índia.",
    "difficulty": "Fácil",
    "prep_time": "4 min",
    "glass": "Caneca de Vidro Térmico ou Chávena de Cerâmica",
    "ice": "Sem Gelo (Muito Quente)",
    "abv": "11% ABV (Suave & Balsâmico)",
    "badge": "Aquecedor de Alma 🍯",
    "smoking_technique": null,
    "bar_tools": [
      "Chaleira",
      "Colher de Bar",
      "Faca de Fruta"
    ],
    "ingredients": [
      {
        "name": "Whiskey Bourbon ou Scotch",
        "quantity": "50 ml"
      },
      {
        "name": "Água a Ferver",
        "quantity": "120 ml"
      },
      {
        "name": "Mel Puro de Abelhas",
        "quantity": "1 colher de sopa generosa"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Pau de Canela",
        "quantity": "1 unidade"
      },
      {
        "name": "Cravinhos-da-Índia inteiros",
        "quantity": "3 a 4 cravinhos"
      },
      {
        "name": "Rodela Grossa de Limão",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Espeta os 4 cravinhos-da-índia na polpa e casca da rodela de limão.",
      "Escalda a caneca com água quente e deita fora.",
      "Coloca o mel e o sumo de limão fresco na caneca.",
      "Adiciona a água a ferver e mexe com o pau de canela até o mel derreter por completo.",
      "Adiciona a dose de whiskey e insere a rodela de limão cravejada com os cravinhos.",
      "Deixa repousar durante 2 minutos para as especiarias libertarem os óleos balsâmicos.",
      "Inala os vapores balsâmicos enquanto bebes pequenos goles reconfortantes."
    ],
    "bartender_tip": "Podes substituir a água simples por um chá Earl Grey ou Camomila a ferver para uma camada botânica ainda mais rica e sedosa."
  },
  {
    "id": "vinho_quente",
    "name": "Vinho Quente Especiado (Glühwein Artesanal)",
    "alcoholic": true,
    "category": "hot",
    "categoryLabel": "Hot Drinks ☕",
    "technique": "Slow Simmer & Spiced Infusion",
    "description": "O aroma das feiras de inverno europeias: vinho tinto encorpado cozinhado lentamente com laranjas frescas, paus de canela, anis estrelado e açúcar mascavado.",
    "difficulty": "Fácil",
    "prep_time": "12 min",
    "glass": "Caneca de Vidro com Pega",
    "ice": "Sem Gelo (Fumegante)",
    "abv": "10% ABV (Frutado & Quente)",
    "badge": "Tradição de Inverno 🍷",
    "smoking_technique": null,
    "bar_tools": [
      "Tacho / Panela de Inox",
      "Concha de Bar",
      "Passador"
    ],
    "ingredients": [
      {
        "name": "Vinho Tinto Português Encorpado (Douro ou Alentejo)",
        "quantity": "200 ml por dose"
      },
      {
        "name": "Laranja Fresca com Casca (cortada em rodelas)",
        "quantity": "1/2 unidade"
      },
      {
        "name": "Pau de Canela",
        "quantity": "1 unidade"
      },
      {
        "name": "Anis Estrelado",
        "quantity": "1 estrela inteira"
      },
      {
        "name": "Cravinho-da-Índia",
        "quantity": "3 unidades"
      },
      {
        "name": "Açúcar Mascavado ou Mel",
        "quantity": "2 colheres de sopa"
      },
      {
        "name": "Cálice de Brandy ou Vinho do Porto Tawny (Opcional)",
        "quantity": "20 ml"
      }
    ],
    "steps": [
      "Num tacho pequeno, junta o açúcar mascavado, as rodelas de laranja, o pau de canela, o anis e o cravinho.",
      "Acrescenta um fio de vinho tinto (50 ml) e aquece em lume brando até o açúcar dissolver e criar um xarope aromático brilhante.",
      "Adiciona o restante vinho tinto (e o cálice de Porto/Brandy se desejares mais corpo).",
      "Mantém em lume muito brando a fumegar suavemente durante 8 a 10 minutos (NUNCA deixes ferver para não evaporar o álcool).",
      "Retira do lume e serve concha a concha para a caneca.",
      "Decora na caneca com o pau de canela e a estrela de anis a boiar."
    ],
    "bartender_tip": "O erro fatal dos principiantes é deixar o vinho levantar fervura: a fervura dissipa os aromas delicados do vinho e amarga as especiarias. O ponto perfeito é cerca de 75°C a 80°C!"
  },
  {
    "id": "whiskey_sour",
    "name": "Whiskey Sour com Espuma Aveludada & Bitters",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Dry Shake & Reverse Shake (Emulsão Dupla)",
    "description": "A expressão máxima do equilíbrio: Bourbon vigoroso, sumo de limão siciliano, xarope e uma espuma de clara aveludada com gotas artísticas de Angostura.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Rocks Baixo ou Taça Coupe",
    "ice": "Cubo Único Gigante de Gelo",
    "abv": "24% ABV (Acídulo & Sedoso)",
    "badge": "Favorito de Mixologia 👑",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker de Duas Peças (Boston Shaker)",
      "Passador Hawthorne",
      "Passador Fino",
      "Gotero de Bitters"
    ],
    "ingredients": [
      {
        "name": "Bourbon ou Rye Whiskey",
        "quantity": "60 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "30 ml"
      },
      {
        "name": "Xarope Simples de Açúcar (1:1)",
        "quantity": "20 ml"
      },
      {
        "name": "Clara de Ovo Fresca (ou Aquafaba vegana)",
        "quantity": "20 ml"
      },
      {
        "name": "Angostura Bitters",
        "quantity": "3 a 4 gotas no topo"
      },
      {
        "name": "Casca de Laranja ou Limão Desidratado",
        "quantity": "Para guarnição"
      }
    ],
    "steps": [
      "No shaker, junta o bourbon, o sumo de limão fresco, o xarope de açúcar e a clara de ovo (sem gelo).",
      "Técnica Dry Shake: bate energicamente a seco durante 15 segundos para criar uma emulsão densa e aerada da clara.",
      "Abre o shaker, enche com cubos grandes de gelo sólido e fecha bem.",
      "Wet Shake: bate vigorosamente mais 15 segundos até o shaker ficar intensamente gelado.",
      "Faz um double-strain (coagem dupla) com o passador fino para um copo rocks com gelo ou taça coupe previamente gelada.",
      "Espera 10 segundos até a espuma branca subir e formar uma coroa densa como cappuccino.",
      "Aplica 3 gotas de Angostura sobre a espuma e, com a ponta de um palito, arrasta em linha reta para criar um desenho de corações entrelaçados."
    ],
    "bartender_tip": "O Dry Shake (bater sem gelo primeiro) é a chave técnica do profissional para quebrar as proteínas da clara e formar uma espuma ultra-sedosa sem odor a ovo!"
  },
  {
    "id": "manhattan",
    "name": "Manhattan Clássico com Vermute Doce & Maraschino",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Mexido no Mixing Glass (Stirred to Perfection)",
    "description": "O rei aristocrático dos short drinks nova-iorquinos: Rye Whiskey picante, Vermute Tinto de Turim e bitters, decorado com cereja Maraschino autêntica.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Taça Coupe ou Nick & Nora",
    "ice": "Apenas para mexer (Servido sem gelo / Up)",
    "abv": "30% ABV (Elegante & Rico)",
    "badge": "Aristocrático 🍒",
    "smoking_technique": null,
    "bar_tools": [
      "Mixing Glass de Cristal",
      "Colher Bailarina Longa",
      "Julep Strainer"
    ],
    "ingredients": [
      {
        "name": "Rye Whiskey (ou Bourbon de Qualidade)",
        "quantity": "60 ml"
      },
      {
        "name": "Vermute Tinto Doce (Rosso di Torino)",
        "quantity": "30 ml"
      },
      {
        "name": "Angostura Aromatic Bitters",
        "quantity": "2 dashes"
      },
      {
        "name": "Cereja Luxardo Maraschino com Calda",
        "quantity": "1 unidade"
      },
      {
        "name": "Zest de Laranja para perfumar",
        "quantity": "1 tira fina"
      }
    ],
    "steps": [
      "Coloca a taça coupe no congelador durante 10 minutos.",
      "Enche o mixing glass até metade com cubos grandes de gelo limpo.",
      "Adiciona o Rye Whiskey, o vermute doce e os dois dashes de Angostura.",
      "Mexe suavemente com a colher bailarina encostada na parede interior do copo durante 35 rotações (cerca de 30 segundos) para atingir diluição e brilho perfeitos sem turvar.",
      "Usa o strainer para coar o líquido límpido e avermelhado para a taça gelada.",
      "Espreme os óleos essenciais da casca de laranja sobre a superfície e descarta a casca.",
      "Pousa no fundo da taça uma cereja Maraschino genuína com uma gota da sua calda rica."
    ],
    "bartender_tip": "Nunca batas um Manhattan no shaker! Agitar com gelo introduz microbolhas de ar que deixam o cocktail leitoso e opaco. O Manhattan deve ser sempre mexido para manter a limpidez e textura sedosa."
  },
  {
    "id": "negroni",
    "name": "Negroni Perfeito (Campari, Gin & Vermute Tinto)",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Stirred & Built over Ice",
    "description": "O ícone do aperitivo italiano com a sua mítica regra de partes iguais: London Dry Gin, Vermute Tinto Doce e Bitter Campari em harmonia milimétrica.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Rocks Baixo (Tumbler)",
    "ice": "Cubo Único Gigante de Gelo Cristalino",
    "abv": "24% ABV (Amargo & Cítrico)",
    "badge": "Ícone Italiano 🇮🇹",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger",
      "Descascador de Citrinos"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin",
        "quantity": "30 ml"
      },
      {
        "name": "Campari Bitter",
        "quantity": "30 ml"
      },
      {
        "name": "Vermute Tinto Doce (Vermouth Rosso)",
        "quantity": "30 ml"
      },
      {
        "name": "Cubo Gigante de Gelo",
        "quantity": "1 bloco"
      },
      {
        "name": "Casca e Meia-Lua de Laranja Fresca",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Coloca o cubo gigante de gelo no copo rocks.",
      "Deita o gin, o Campari e o vermute doce em proporções rigorosamente iguais (30 ml de cada).",
      "Com a colher bailarina, mexe durante 20 segundos em redor do cubo de gelo para integrar e gelar a mistura.",
      "Corta uma tira larga de casca de laranja e torce-a por cima do copo para projetar os óleos essenciais.",
      "Passa a casca pelo bordo do copo e insere uma meia-lua de laranja encostada ao gelo.",
      "Aprecia lentamente o contraste incomparável entre o amargo, o doce e o botânico."
    ],
    "bartender_tip": "Para uma variação memorável (Negroni Sbagliato), substitui o Gin por Espumante Prosecco Brut; para um Boulevardier, substitui o Gin por Bourbon Whiskey!"
  },
  {
    "id": "espresso_martini",
    "name": "Espresso Martini Cremoso com Café Expresso",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Hard Shaken for Rich Crema",
    "description": "O cocktail pós-jantar definitivo: café expresso acabado de tirar, vodka e licor de café batidos com força extrema para criar uma crema densa e dourada.",
    "difficulty": "Média",
    "prep_time": "3 min",
    "glass": "Taça Coupe ou Taça de Martini",
    "ice": "Gelo abundante para bater no Shaker",
    "abv": "19% ABV (Estimulante & Aveludado)",
    "badge": "Favorito do Bar ☕",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador Hawthorne",
      "Passador Fino",
      "Máquina de Café Expresso"
    ],
    "ingredients": [
      {
        "name": "Vodka Premium",
        "quantity": "50 ml"
      },
      {
        "name": "Licor de Café (Kahlúa)",
        "quantity": "25 ml"
      },
      {
        "name": "Café Expresso Quente Acabado de Tirar",
        "quantity": "30 ml (1 bica curta)"
      },
      {
        "name": "Xarope Simples de Açúcar",
        "quantity": "10 ml"
      },
      {
        "name": "Cubos Grandes de Gelo",
        "quantity": "Cheios no Shaker"
      },
      {
        "name": "Grãos de Café Torrado",
        "quantity": "3 grãos para o topo"
      }
    ],
    "steps": [
      "Tira um café expresso bem curto e denso.",
      "Enche imediatamente o shaker até cima com muito gelo grande e sólido.",
      "Junta a vodka, o licor de café, o xarope simples e, por último, o café expresso ainda quente.",
      "Fecha o shaker de imediato e bate com o máximo de energia e velocidade durante 15 a 20 segundos. O choque térmico do café quente com o gelo gera a espuma aveludada.",
      "Faz uma coagem dupla com passador fino para a taça gelada para reter qualquer estilhaço de gelo.",
      "Espera 5 segundos até a crema dourada estabilizar na superfície.",
      "Pousa delicadamente 3 grãos de café no centro da espuma formando um triângulo (simbolizando saúde, riqueza e felicidade)."
    ],
    "bartender_tip": "O café expresso DEVE ser acabado de tirar e ter a sua própria crema natural. Café frio guardado ou instantâneo nunca irá produzir a coroa aveludada caraterística!"
  },
  {
    "id": "margarita",
    "name": "Margarita Mexicana com Borda de Sal Fino",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Shaken with Salt Rim",
    "description": "O cocktail de tequila mais adorado do planeta: Tequila 100% Agave, licor Cointreau e sumo de lima fresco com crosta de sal fino na borda.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Taça Margarita ou Coupe",
    "ice": "Gelo no Shaker / Servido Straight Up ou On The Rocks",
    "abv": "23% ABV (Cítrico & Fresco)",
    "badge": "Clássico Mundial 🇲🇽",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador Hawthorne",
      "Pratinho para Sal"
    ],
    "ingredients": [
      {
        "name": "Tequila Blanco ou Reposado 100% Puro Agave",
        "quantity": "50 ml"
      },
      {
        "name": "Licor de Laranja Cointreau (Triple Sec)",
        "quantity": "25 ml"
      },
      {
        "name": "Sumo de Lima Fresca Espremido na Hora",
        "quantity": "25 ml"
      },
      {
        "name": "Xarope de Agave (Opcional, para equilibrar)",
        "quantity": "5 ml"
      },
      {
        "name": "Sal Marinho Fino ou Flor de Sal",
        "quantity": "Para a borda"
      },
      {
        "name": "Rodela de Lima Fresca",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Passa uma rodela de lima fresca em apenas metade da borda exterior da taça.",
      "Encosta essa metade ao pratinho de sal marinho (deixar metade sem sal permite ao cliente escolher se quer sal em cada gole).",
      "No shaker com cubos de gelo, deita a tequila, o Cointreau e o sumo de lima acabado de espremer.",
      "Bate vigorosamente durante 15 segundos até o shaker condensar por fora.",
      "Coa para a taça previamente preparada sem salpicar o sal da borda.",
      "Prende a rodela de lima no bordo do copo e serve imediatamente."
    ],
    "bartender_tip": "Nunca uses misturas industriais pré-feitas de Margarita (\"sour mix\"). A diferença entre uma Margarita vulgar e uma obra-prima de bar reside exclusivamente em usar limas frescas e tequila 100% de agave."
  },
  {
    "id": "daiquiri",
    "name": "Daiquiri Cubano Clássico com Rum Branco",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Hard Shake & Double Strain",
    "description": "A pureza caribenha em 3 ingredientes simples: Rum Branco ligeiro, sumo de lima fresca e xarope de açúcar fino, o favorito de Ernest Hemingway.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Taça Coupe Gelada",
    "ice": "Apenas para bater no Shaker",
    "abv": "22% ABV (Refrescante & Equilibrado)",
    "badge": "Herança Cubana 🇨🇺",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador Hawthorne",
      "Passador de Malha Fina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Rum Branco Cubano (ex: Havana Club 3 Anos)",
        "quantity": "60 ml"
      },
      {
        "name": "Sumo de Lima Fresco Acabado de Espremer",
        "quantity": "30 ml"
      },
      {
        "name": "Xarope Simples de Açúcar (1:1)",
        "quantity": "20 ml"
      },
      {
        "name": "Gelo em Cubos Grandes",
        "quantity": "Para bater"
      },
      {
        "name": "Roda Fina de Lima Desidratada",
        "quantity": "Para flutuar"
      }
    ],
    "steps": [
      "Deixa a taça coupe a gelar com gelo e água enquanto preparas o drink.",
      "No shaker, junta o rum branco, o sumo de lima fresco e o xarope de açúcar simples.",
      "Enche o shaker com muito gelo em cubos de boa qualidade.",
      "Bate vigorosamente com ritmo constante durante 15 segundos para obter uma aeração perfeita.",
      "Descarta o gelo da taça coupe.",
      "Faz uma coagem dupla (double strain) vertendo o cocktail através do passador fino para a taça.",
      "Coloca uma fina rodela de lima a flutuar na superfície e serve logo."
    ],
    "bartender_tip": "O Daiquiri é o teste supremo com que os melhores bares do mundo avaliam as capacidades de um barman: dominar a acidez da lima em perfeito contraponto com o rum exige sensibilidade e rigor de medidas."
  },
  {
    "id": "aperol_spritz",
    "name": "Aperol Spritz Veneziano com Prosecco",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Built over Ice (Regra 3-2-1)",
    "description": "O aperitivo cintilante de Veneza: Prosecco italiano borbulhante, Aperol de cor laranja vívida e um splash de água com gás com rodela de laranja.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Taça Larga de Vinho com Pé",
    "ice": "Gelo em Cubos Abundante",
    "abv": "11% ABV (Leve & Efervescente)",
    "badge": "Aperitivo Supremo 🍊",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Vinho Espumante Prosecco D.O.C. Brut",
        "quantity": "90 ml (3 partes)"
      },
      {
        "name": "Aperol Liqueur",
        "quantity": "60 ml (2 partes)"
      },
      {
        "name": "Água com Gás ou Soda",
        "quantity": "30 ml (1 splash)"
      },
      {
        "name": "Cubos Grandes de Gelo",
        "quantity": "Até cima da taça"
      },
      {
        "name": "Rodela Grossa de Laranja Fresca",
        "quantity": "1 unidade"
      },
      {
        "name": "Azeitona Verde com Caroço (Estilo Veneziano)",
        "quantity": "1 unidade (Opcional)"
      }
    ],
    "steps": [
      "Enche a taça de vinho com cubos de gelo até ao topo.",
      "Verte primeiro o Prosecco (evita que o Aperol fique preso no fundo da taça).",
      "Adiciona o Aperol com movimentos circulares.",
      "Finaliza com um splash de água com gás bem carbonatada.",
      "Com a colher bailarina, dá apenas uma suave mexida vertical (de baixo para cima) para não quebrar a efervescência.",
      "Guarnece com a rodela de laranja e serve fresca."
    ],
    "bartender_tip": "Memoriza a mítica fórmula do barman veneziano: 3-2-1 (3 partes de Prosecco, 2 partes de Aperol, 1 parte de soda). Seguir esta ordem garante que a cor e o sabor se misturam sozinhos!"
  },
  {
    "id": "mojito",
    "name": "Mojito Tradicional de Havana com Hortelã Fresca",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Gently Muddled & Built with Crushed Ice",
    "description": "O emblema das tardes tropicais de Cuba: rum branco, gomos de lima fresca, hortelã estalada e água com gás sobre uma montanha de gelo picado.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Highball / Collins",
    "ice": "Gelo Picado (Crushed Ice) em Abundância",
    "abv": "12% ABV (Refrescante & Herbáceo)",
    "badge": "Clássico Cubano 🌿",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler de Bar",
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Rum Branco Ligeiro",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Lima Fresco ou 1/2 Lima em Gomos",
        "quantity": "30 ml"
      },
      {
        "name": "Açúcar Branco de Cana ou Xarope Simples",
        "quantity": "2 colheres de chá"
      },
      {
        "name": "Folhas e Ramos de Hortelã Fresca",
        "quantity": "10 a 12 folhas"
      },
      {
        "name": "Água com Gás com Gás Fino",
        "quantity": "60 ml (para completar)"
      },
      {
        "name": "Gelo Picado",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "No fundo do copo alto, coloca os gomos de lima e o açúcar.",
      "Pressiona gentilmente com o pilão para libertar o sumo fresco sem macerar excessivamente a casca branca.",
      "Pega nas folhas de hortelã, coloca-as na palma de uma mão e bate com a outra (o \"slap\" acorda os óleos essenciais sem rasgar as fibras). Junta ao copo.",
      "Adiciona o rum branco e enche metade do copo com gelo picado.",
      "Com a colher bailarina, gira o líquido de baixo para cima para integrar os sabores.",
      "Enche o restante copo com mais gelo picado até formar uma coroa e completa com água com gás.",
      "Guarnece com um topo vistoso de hortelã fresca e uma rodela de lima."
    ],
    "bartender_tip": "Bater na hortelã com a palma da mão liberta o aroma de mentol sem romper as veias da folha. Esmagar hortelã com o pilão estraga o drink tornando-o amargo!"
  },
  {
    "id": "moscow_mule",
    "name": "Moscow Mule na Caneca de Cobre com Gengibre",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Built over Crushed Ice in Copper Mug",
    "description": "Servido na sua emblemática caneca de cobre gelada: Vodka, sumo de lima fresco e cerveja artesanal de gengibre picante com um toque de hortelã.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Caneca Tradicional de Cobre Puro",
    "ice": "Gelo Picado até ao Cimo",
    "abv": "11% ABV (Refrescante & Picante)",
    "badge": "Caneca de Cobre 🧊",
    "smoking_technique": null,
    "bar_tools": [
      "Caneca de Cobre",
      "Colher Bailarina",
      "Espremedor de Citrinos"
    ],
    "ingredients": [
      {
        "name": "Vodka Premium",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "20 ml"
      },
      {
        "name": "Ginger Beer de Qualidade (Cerveja de Gengibre Picante)",
        "quantity": "120 ml"
      },
      {
        "name": "Gelo Picado",
        "quantity": "Até encher a caneca"
      },
      {
        "name": "Fatias Finas de Gengibre Fresco & Rodela de Lima",
        "quantity": "Para guarnecer"
      },
      {
        "name": "Raminho de Hortelã Fresca",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Enche a caneca de cobre com cubos ou gelo picado até transbordar.",
      "Adiciona a vodka e o sumo de lima fresco acabado de espremer.",
      "Completa com a Ginger Beer fresca e borbulhante.",
      "Dá uma mexida rápida e suave com a colher bailarina para unificar.",
      "A caneca de cobre ganha de imediato uma camada de geada branca fria por fora.",
      "Finaliza com uma rodela de lima fresca, fatia de gengibre natural e o topo de hortelã."
    ],
    "bartender_tip": "A condutividade térmica do cobre mantém o drink a temperaturas quase glaciares do primeiro ao último gole, potenciando as notas ardentes do gengibre."
  },
  {
    "id": "caipirinha",
    "name": "Caipirinha Brasileira de Cachaça Nobre",
    "alcoholic": true,
    "category": "caipirinhas",
    "categoryLabel": "Caipirinhas & Caipiroskas 🍹",
    "technique": "Muddled & Built on Crushed Ice",
    "description": "A rainha da coquetelaria brasileira: cachaça artesanal de alambique, lima verde fatiada com casca e açúcar macerados com energia e montanha de gelo picado.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Baixo Old Fashioned de Cristal",
    "ice": "Gelo Picado Compacto e Límpido",
    "abv": "20% ABV (Intenso & Tropical)",
    "badge": "Brasil Autêntico 🇧🇷",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler de Madeira",
      "Tábua de Corte",
      "Faca Afiada de Citrinos",
      "Colher de Bar"
    ],
    "ingredients": [
      {
        "name": "Cachaça de Alambique Artesanal",
        "quantity": "60 ml"
      },
      {
        "name": "Lima Verde Fresca e Suculenta",
        "quantity": "1 unidade"
      },
      {
        "name": "Açúcar Branco Refinado ou de Cana",
        "quantity": "2 colheres de chá cheias"
      },
      {
        "name": "Gelo Picado Cristalino",
        "quantity": "Até preencher o copo"
      }
    ],
    "steps": [
      "Corta as duas extremidades da lima, divide-a ao meio no sentido do comprimento e retira a parte branca central (o miolo branco amarga o drink).",
      "Corta a lima em 8 pedaços pequenos e coloca-os no copo com a polpa virada para cima.",
      "Adiciona o açúcar sobre a polpa da lima.",
      "Com o pilão, pressiona com firmeza mas sem esmagar em excesso a casca exterior para extrair óleos e sumo.",
      "Enche o copo com gelo picado até à borda.",
      "Deita a cachaça e envolve muito bem no copo de baixo para cima com a colher de bar.",
      "Serve com duas palhinhas curtas ecológicas."
    ],
    "bartender_tip": "O segredo de ouro dos barmen brasileiros: retirar SEMPRE a nervura branca central da lima antes de pilar. É ela a responsável pelo amargor indesejado!"
  },
  {
    "id": "caipiblack",
    "name": "Caipiblack Black Velvet (Vodka Negra & Citrinos)",
    "alcoholic": true,
    "category": "caipirinhas",
    "categoryLabel": "Caipirinhas & Caipiroskas 🍹",
    "technique": "Muddled & Chilled Layered Build",
    "description": "O ícone da noite sofisticada: vodka preta aveludada com notas profundas de groselha e frutos do bosque, contrastada com a acidez vibrante da lima macerada e montanha de gelo picado cintilante.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Baixo Old Fashioned de Cristal Lapidado",
    "ice": "Gelo Picado Compacto até ao topo",
    "abv": "18% ABV (Sedutor & Enigmático)",
    "badge": "Noite VIP 🖤",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler de Bar",
      "Jigger (Doser)",
      "Faca Afiada de Citrinos",
      "Colher Bailarina Espiralada"
    ],
    "ingredients": [
      {
        "name": "Vodka Preta Premium (ex: Eristoff Black)",
        "quantity": "60 ml"
      },
      {
        "name": "Lima Verde Fresca e Suculenta",
        "quantity": "1 unidade inteira"
      },
      {
        "name": "Açúcar Branco Fino ou Xarope de Cana",
        "quantity": "2 colheres de chá cheias"
      },
      {
        "name": "Gelo Picado Cristalino",
        "quantity": "Até encher o copo"
      },
      {
        "name": "Amoras Frescas para Decoração (Opcional)",
        "quantity": "2 unidades"
      }
    ],
    "steps": [
      "Corta as pontas da lima, divide-a em quatro gomos verticais e extrai a membrana branca interior para prevenir qualquer travo amargo.",
      "Coloca os pedaços de lima no fundo do copo de cristal com a polpa virada para cima e polvilha o açúcar uniformemente.",
      "Com o muddler, pressiona os gomos de lima com movimentos firmes para extrair o sumo límpido e os óleos aromáticos essenciais da casca.",
      "Enche o copo até ao cimo com gelo picado de alta densidade, criando uma cúpula gelada.",
      "Verte a vodka preta lentamente sobre o gelo com a ajuda da colher bailarina, permitindo que a cor obsidiana escorra dramaticamente pelos cristais de gelo.",
      "Finaliza com uma rodela fina de lima fresca no rebordo e palhinha curta preta reutilizável."
    ],
    "bartender_tip": "Para um efeito visual de cocktail de autor com camadas gradientes, serve com as duas camadas visíveis (verde-cítrico no fundo e preto misterioso no topo) e convida o cliente a misturar com a palhinha no primeiro brinde!"
  },
  {
    "id": "morangoska",
    "name": "Morangoska / Morangasca Silvestre Artesanal",
    "alcoholic": true,
    "category": "caipirinhas",
    "categoryLabel": "Caipirinhas & Caipiroskas 🍹",
    "technique": "Fresh Fruit Muddle & Shaken",
    "description": "A lendária caipiroska de morango adorada nas noites de verão e esplanadas de luxo: morangos frescos maduros macerados no momento com lima verde, vodka premium destilada 5 vezes e uma cúpula cintilante de gelo picado.",
    "difficulty": "Fácil",
    "prep_time": "4 min",
    "glass": "Copo Tumbler Rocks em Cristal Pesado",
    "ice": "Gelo Picado Fresco em Abundância",
    "abv": "17% ABV (Frutado, Doce & Vibrante)",
    "badge": "Sucesso Absoluto 🍓",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler de Inox com Ponta Dentada",
      "Shaker Boston ou Copo Misturador",
      "Jigger",
      "Tábua de Fruta"
    ],
    "ingredients": [
      {
        "name": "Vodka Neutra Premium (ex: Grey Goose ou Belvedere)",
        "quantity": "60 ml"
      },
      {
        "name": "Morangos Frescos Maduros e Vermelhos",
        "quantity": "4 a 5 unidades"
      },
      {
        "name": "Lima Fresca Suculenta",
        "quantity": "1/2 unidade cortada em quartos"
      },
      {
        "name": "Açúcar de Cana ou Açúcar em Pó",
        "quantity": "2 colheres de chá"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "2 folhas para perfumar"
      },
      {
        "name": "Gelo Picado",
        "quantity": "Até preencher o copo"
      }
    ],
    "steps": [
      "Lava e retira os pés dos morangos maduros. Reserva um morango perfeito para a guarnição final e corta os restantes em metades.",
      "Coloca os morangos, os quartos de lima e o açúcar no fundo do copo ou no shaker.",
      "Com o muddler, macera com energia até formar um puré sumarento e perfumado onde o sumo da lima dissolve os cristais de açúcar nos morangos.",
      "Deita a dose de vodka premium selecionada.",
      "Adiciona gelo picado até transbordar ligeiramente e mexe vigorosamente com a colher bailarina de baixo para cima para emulsionar o puré com o destilado.",
      "Guarnece com um morango fresco fatiado no bordo, um ramo de hortelã fresca batido na palma da mão e duas palhinhas curtas."
    ],
    "bartender_tip": "O segredo da melhor Morangoska reside no equilíbrio entre a doçura do morango e a acidez da lima: nunca omitas a meia lima! O ácido cítrico corta a densidade do açúcar e intensifica a cor rubi natural do fruto."
  },
  {
    "id": "caipirao",
    "name": "Caipirão Lusitano (Licor Beirão & Limas Maceradas)",
    "alcoholic": true,
    "category": "caipirinhas",
    "categoryLabel": "Caipirinhas & Caipiroskas 🍹",
    "technique": "Portuguese Muddle & Build",
    "description": "A mais famosa e consensual reinvenção portuguesa da caipirinha: as 13 ervas aromáticas e especiarias secretas do Licor Beirão encontram a acidez cortante da lima fresca e o frescor da hortelã sobre gelo picado. Dispensa adição de açúcar!",
    "difficulty": "Muito Fácil",
    "prep_time": "2 min",
    "glass": "Copo Old Fashioned / Lowball Elegante",
    "ice": "Gelo Picado em Abundância",
    "abv": "16% ABV (Licoroso, Cítrico & Aromático)",
    "badge": "Orgulho Nacional 🇵🇹",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler de Bar",
      "Jigger",
      "Faca de Barman",
      "Colher Espiralada"
    ],
    "ingredients": [
      {
        "name": "Licor Beirão Tradicional",
        "quantity": "60 ml"
      },
      {
        "name": "Lima Inteira Fresca e Firme",
        "quantity": "1 unidade"
      },
      {
        "name": "Gelo Picado Cristalino",
        "quantity": "Copo cheio"
      },
      {
        "name": "Raminho de Hortelã Fresca",
        "quantity": "1 unidade para guarnição"
      }
    ],
    "steps": [
      "Lava bem a lima, corta as extremidades, fatia ao meio e retira todo o fio branco interior.",
      "Corta a lima em 8 pedaços uniformes e transfere-os diretamente para o copo de serviço.",
      "Com o muddler, esmaga suavemente os pedaços de lima no fundo do copo para libertar o sumo ácido e os óleos da casca (dispensa açúcar, pois o Licor Beirão é naturalmente doce).",
      "Enche o copo completamente com gelo picado cristalino.",
      "Verte os 60 ml de Licor Beirão por cima do gelo.",
      "Com a colher de bar, envolve com movimentos circulares verticais suaves para que o sumo da lima e o licor se fundam harmoniosamente.",
      "Finaliza com um topo de folhas de hortelã frescas e serve com palhinha."
    ],
    "bartender_tip": "Regra de ouro de qualquer bartender profissional: NUNCA coloques açúcar no Caipirão! A complexidade do Licor Beirão (canela, cardamomo, eucalipto e alecrim) já equilibra na perfeição o sumo cítrico da lima."
  },
  {
    "id": "caipiroska_classica",
    "name": "Caipiroska Imperial de Vodka Super Premium",
    "alcoholic": true,
    "category": "caipirinhas",
    "categoryLabel": "Caipirinhas & Caipiroskas 🍹",
    "technique": "Muddled & Chilled Build",
    "description": "A versão internacional e purista da caipirinha: vodka neutra premium destilada em alambique de cobre com lima verde madura e açúcar fino. O perfil limpo da vodka deixa a frescura pura dos citrinos brilhar no palato.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo On The Rocks de Cristal Lapidado",
    "ice": "Gelo Picado Granulado Fino",
    "abv": "20% ABV (Límpido, Cítrico & Enérgico)",
    "badge": "Clássico Global 🍸",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler Ergonómico",
      "Jigger Graduado",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Vodka Super Premium (ex: Ketel One ou Belvedere)",
        "quantity": "60 ml"
      },
      {
        "name": "Lima Verde Suculenta de Casca Fina",
        "quantity": "1 unidade"
      },
      {
        "name": "Açúcar Branco Ultrafino",
        "quantity": "2 colheres de bar cheias"
      },
      {
        "name": "Gelo Picado Cristalino",
        "quantity": "Copo repleto"
      },
      {
        "name": "Zest de Lima para Aromatizar",
        "quantity": "1 tira fina"
      }
    ],
    "steps": [
      "Higieniza a lima, remove as extremidades e corta longitudinalmente em quartos, retirando a nervura central branca.",
      "Coloca os gomos no fundo do copo com o açúcar refinado.",
      "Pressiona com o muddler extraindo o néctar e dissolvendo os grãos no sumo fresco.",
      "Completa com gelo picado até ultrapassar ligeiramente a borda do copo.",
      "Adiciona a vodka premium medida com o jigger.",
      "Agita suavemente com a colher bailarina puxando os pedaços de lima para cima entre o gelo.",
      "Decora com uma rodela fina de lima fresca e serve de imediato bem gelado."
    ],
    "bartender_tip": "Usa açúcar ultrafino (ou açúcar em pó) em vez de açúcar cristal grosso: como a vodka pura não tem o perfil de melaço da cachaça, o açúcar ultrafino dissolve instantaneamente no sumo frio sem deixar resíduos no fundo do copo."
  },
  {
    "id": "caipiroska_frutos_vermelhos",
    "name": "Caipiroska de Frutos Silvestres & Framboesas",
    "alcoholic": true,
    "category": "caipirinhas",
    "categoryLabel": "Caipirinhas & Caipiroskas 🍹",
    "technique": "Wild Berry Muddle & Build",
    "description": "Uma sinfonia requintada de bagas silvestres: amoras pretas, framboesas e mirtilos frescos macerados com limas maduras, vodka de luxo e néctar suave. Um cocktail aromático, vibrante e visualmente deslumbrante.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Rocks de Cristal Lapidado",
    "ice": "Gelo Picado Cristalino",
    "abv": "17% ABV (Frutado Silvestre & Equilibrado)",
    "badge": "Frutos do Bosque 🫐",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler de Bar",
      "Jigger",
      "Colher Bailarina",
      "Pinça de Bar"
    ],
    "ingredients": [
      {
        "name": "Vodka Premium",
        "quantity": "60 ml"
      },
      {
        "name": "Mix de Frutos Silvestres Frescos (Amoras, Framboesas e Mirtilos)",
        "quantity": "40 g (aprox. 8 bagas)"
      },
      {
        "name": "Lima Fresca Suculenta",
        "quantity": "1/2 unidade cortada em gomos"
      },
      {
        "name": "Açúcar de Cana ou Xarope de Açúcar",
        "quantity": "1.5 colher de sopa"
      },
      {
        "name": "Ramo de Alecrim ou Tomilho Fresco",
        "quantity": "1 raminho para aroma"
      },
      {
        "name": "Gelo Picado Cristalino",
        "quantity": "Até preencher o copo"
      }
    ],
    "steps": [
      "Coloca a meia lima fatiada e o mix de frutos silvestres no fundo do copo rocks.",
      "Acrescenta o açúcar sobre a fruta.",
      "Com o pilão de bar, macera suavemente libertando o suco vermelho intenso das amoras e framboesas sem triturar excessivamente as sementes.",
      "Preenche todo o copo com gelo picado fresco.",
      "Verte a vodka premium e mexe com a colher espiralada para que o néctar carmesim suba pelos blocos de gelo.",
      "Finaliza espetando um raminho de alecrim ou tomilho e coroa com duas framboesas inteiras no topo do gelo."
    ],
    "bartender_tip": "Dar uma ligeira palmada no raminho de alecrim ou tomilho antes de o espetar no gelo ativa os óleos essenciais da erva aromática, proporcionando uma experiência olfativa inesquecível ao aproximar o copo do nariz."
  },
  {
    "id": "gin_tonico",
    "name": "Gin Tónico Botânico com Zimbro & Lima",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Perfect Serve com Colher Espiralada",
    "description": "A perfeição do Gin Tónico servido em taça balão: gin botânico, água tónica premium fria vertida por espiral, bagas de zimbro e casca de citrino.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Taça Balão Grande de Gin (Copa Glass)",
    "ice": "Cubos Maciços Gigantes de Gelo Transparente",
    "abv": "13% ABV (Botânico & Crispy)",
    "badge": "Perfect Serve 🍸",
    "smoking_technique": null,
    "bar_tools": [
      "Colher de Bar Espiralada",
      "Descascador de Citrinos",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Gin Botânico Premium",
        "quantity": "50 ml"
      },
      {
        "name": "Água Tónica Premium Fresca (ex: Fever-Tree)",
        "quantity": "150 ml"
      },
      {
        "name": "Bagas de Zimbro Ligeiramente Esmagadas",
        "quantity": "3 a 4 unidades"
      },
      {
        "name": "Casca (Twist) de Lima e Limão Frescos",
        "quantity": "1 tira"
      },
      {
        "name": "Gelo Cristalino",
        "quantity": "6 a 7 cubos grandes"
      }
    ],
    "steps": [
      "Gela a taça balão enchendo-a com gelo e rodando os cubos durante 15 segundos. Descarta a água derretida acumulada no fundo.",
      "Espreme uma tira de casca de lima sobre o gelo e passa-a pelo rebordo da taça.",
      "Adiciona os 50 ml de gin medidos com o jigger.",
      "Junta as bagas de zimbro ligeiramente abertas com os dedos para libertarem os óleos aromáticos.",
      "Encosta a ponta da colher espiralada no fundo da taça e verte a água tónica muito devagar pela espiral para preservar todas as bolhas de gás carbónico.",
      "Dá apenas meia volta com a colher e serve de imediato."
    ],
    "bartender_tip": "Nunca deites a água tónica de rajada nem uses refrigerante morno. Verter pela haste em espiral mantém a bolha fina e crocante até ao último golo!"
  },
  {
    "id": "paloma",
    "name": "Paloma Mexicana com Sumo de Toranja & Lima",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Built over Ice with Salt Rim",
    "description": "O cocktail mais consumido no México: Tequila Blanco 100% Agave misturada com sumo de lima fresca e refrigerante efervescente de toranja rosa.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "12% ABV (Cítrico & Refrescante)",
    "badge": "Favorito Mexicano 🇲🇽",
    "smoking_technique": null,
    "bar_tools": [
      "Jigger",
      "Colher de Bar",
      "Pratinho de Sal"
    ],
    "ingredients": [
      {
        "name": "Tequila Blanco de Agave",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "15 ml"
      },
      {
        "name": "Refrigerante de Toranja Rosa (ou Sumo de Toranja + Água com Gás)",
        "quantity": "120 ml"
      },
      {
        "name": "Sal Marinho ou Flor de Sal",
        "quantity": "Para a borda"
      },
      {
        "name": "Fatia Triangular de Toranja Rosa",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Passa um quarto de lima no bordo do copo e mergulha em sal marinho.",
      "Enche o copo com cubos de gelo.",
      "Adiciona a tequila e o sumo de lima fresco.",
      "Completa com o refrigerante de toranja gelado.",
      "Mexe levemente com a colher bailarina para homogeneizar.",
      "Guarnece com um triângulo de toranja rosa encaixado no bordo."
    ],
    "bartender_tip": "Se não encontrares refrigerante de toranja comercial, mistura 60 ml de sumo de toranja rosa natural com 60 ml de água com gás e 10 ml de xarope simples!"
  },
  {
    "id": "dark_and_stormy",
    "name": "Dark 'n' Stormy com Rum das Bermudas & Ginger Beer",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Floated (Camada Escura de Rum a Boiar)",
    "description": "O famoso cocktail das ilhas Bermudas: uma base efervescente de cerveja de gengibre picante coberta por uma nuvem escura e tempestuosa de rum negro.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Abundante",
    "abv": "14% ABV (Intenso & Especiado)",
    "badge": "Tempestade Tropical ⛈️",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Rum Negro Gosling’s Black Seal (ou Rum Escuro Encorpado)",
        "quantity": "50 ml"
      },
      {
        "name": "Ginger Beer Picante e Carbonatada",
        "quantity": "120 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "15 ml"
      },
      {
        "name": "Rodela Grossa de Lima Fresca",
        "quantity": "1 unidade"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Até ao topo"
      }
    ],
    "steps": [
      "Enche o copo alto até ao cimo com cubos de gelo.",
      "Adiciona o sumo de lima fresca e a Ginger Beer gelada, deixando cerca de dois dedos de espaço no topo do copo.",
      "Mexe suavemente a base.",
      "Coloca as costas da colher bailarina encostada ao gelo e verte lentamente o rum negro por cima.",
      "O rum escuro flutua no topo formando uma mancha negra ameaçadora como uma tempestade no oceano.",
      "Encaixa uma rodela de lima e serve sem misturar previamente."
    ],
    "bartender_tip": "O impacto visual do Dark 'n' Stormy vem do contraste da Ginger Beer clara no fundo com o rum escuro denso no topo. Deixa o cliente misturar na hora de saborear!"
  },
  {
    "id": "cuba_libre",
    "name": "Cuba Libre Original com Rum Escuro & Lima",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Muddled Lime & Built over Ice",
    "description": "Muito mais do que um simples rum com cola: a verdadeira receita cubana exige espremer e pilar a lima no copo para soltar os óleos essenciais da casca.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "12% ABV (Clássico Caribenho)",
    "badge": "Herança Histórica 🇨🇺",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Rum Dourado ou Añejo",
        "quantity": "50 ml"
      },
      {
        "name": "Coca-Cola ou Cola de Garrafa de Vidro",
        "quantity": "120 ml"
      },
      {
        "name": "Lima Fresca em Quartos",
        "quantity": "1/2 unidade"
      },
      {
        "name": "Cubos de Gelo Sólido",
        "quantity": "Cheios no copo"
      }
    ],
    "steps": [
      "No fundo do copo, espreme os quartos de lima e deixa as cascas lá dentro.",
      "Com o pilão, dá 2 pressões ligeiras nas cascas para libertar os óleos aromáticos.",
      "Enche o copo com cubos de gelo.",
      "Deita o rum dourado por cima do gelo.",
      "Completa com a cola bem gelada.",
      "Dá uma suave mexida vertical com a colher bailarina e serve com palhinha."
    ],
    "bartender_tip": "A diferença crucial entre um simples \"Rum e Cola\" e um verdadeiro \"Cuba Libre\" é a presença do sumo fresco e dos óleos da casca da lima no fundo do copo!"
  },
  {
    "id": "blue_lagoon",
    "name": "Blue Lagoon Tropical com Blue Curaçao",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Shaken & Topped with Lemonade",
    "description": "Um mergulho no azul turquesa das ilhas tropicais: Vodka, licor Blue Curaçao cítrico e limonada gaseificada fresca.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Hurricane ou Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "13% ABV (Doce & Cítrico)",
    "badge": "Azul Turquesa 🌊",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Vodka",
        "quantity": "45 ml"
      },
      {
        "name": "Licor Blue Curaçao",
        "quantity": "25 ml"
      },
      {
        "name": "Sumo de Limão Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Refrigerante de Lima-Limão (Sprite/7Up) ou Gasosa",
        "quantity": "90 ml"
      },
      {
        "name": "Rodela de Laranja ou Limão & Cereja",
        "quantity": "Para guarnição"
      }
    ],
    "steps": [
      "No shaker com gelo, coloca a vodka, o Blue Curaçao e o sumo de limão.",
      "Bate energicamente durante 10 segundos.",
      "Coa para um copo alto cheio de cubos de gelo fresco.",
      "Completa com o refrigerante de lima-limão e mexe suavemente.",
      "Guarnece com uma rodela de laranja viva que contrasta com o tom azul oceânico e uma cereja no topo."
    ],
    "bartender_tip": "O sabor do Blue Curaçao é essencialmente casca de laranja amarga da ilha de Curaçao. A combinação com o sumo de limão corta a doçura e equilibra o drink!"
  },
  {
    "id": "tequila_sunrise",
    "name": "Tequila Sunrise com Gradiente de Groselha",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Built with Grenadine Sink",
    "description": "O nascer do sol no copo: Tequila e sumo de laranja doce cobertos por uma queda lenta de groselha que se deposita no fundo em gradiente vermelho-dourado.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos",
    "abv": "12% ABV (Doce & Vibrante)",
    "badge": "Pôr do Sol 🌅",
    "smoking_technique": null,
    "bar_tools": [
      "Jigger",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Tequila Blanco ou Reposado",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Laranja Fresco",
        "quantity": "120 ml"
      },
      {
        "name": "Xarope de Groselha ou Grenadine",
        "quantity": "15 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Até cima do copo"
      },
      {
        "name": "Rodela de Laranja & Cereja Maraschino",
        "quantity": "Para decorar"
      }
    ],
    "steps": [
      "Enche o copo alto com cubos de gelo.",
      "Deita a tequila e o sumo de laranja fresco e mexe ligeiramente.",
      "Pega nos 15 ml de xarope de groselha e verte-o muito devagar pelo bordo interior do copo.",
      "Por ser mais espesso e denso, o xarope escorrega para o fundo do copo e cria automaticamente o gradiente perfeito que simula o nascer do sol.",
      "NÃO mexas o copo após colocar a groselha para manter as cores separadas.",
      "Decora com uma rodela de laranja e uma cereja e serve com palhinha."
    ],
    "bartender_tip": "Deixa o cliente saborear primeiro o topo cítrico com a tequila e ir descobrindo a doçura do fundo ao puxar a palhinha para cima e para baixo."
  },
  {
    "id": "pina_colada",
    "name": "Piña Colada Caribenha com Ananás & Coco",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Blended ou Shaken com Creme de Coco",
    "description": "O paraíso tropical em forma líquida: Rum branco, sumo de ananás maduro e creme de coco rico batidos até atingir uma cremosidade acetinada.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Hurricane ou Taça Grande",
    "ice": "Gelo Picado ou Batido no Liquidificador",
    "abv": "13% ABV (Cremoso & Tropical)",
    "badge": "Tesouro de Porto Rico 🍍",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador de Bar ou Shaker",
      "Faca de Fruta"
    ],
    "ingredients": [
      {
        "name": "Rum Branco Caribenho",
        "quantity": "50 ml"
      },
      {
        "name": "Creme de Coco (ex: Coco López) ou Leite de Coco Gordo",
        "quantity": "40 ml"
      },
      {
        "name": "Sumo de Ananás Natural",
        "quantity": "90 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "10 ml"
      },
      {
        "name": "Triângulo de Ananás Fresco & Folhas",
        "quantity": "Para decoração"
      },
      {
        "name": "Cereja Maraschino",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "No liquidificador ou shaker com gelo abundante, coloca o rum branco, o creme de coco, o sumo de ananás e o toque de sumo de lima.",
      "Bate na velocidade máxima durante 20 segundos até a mistura ficar cremosa e espumante.",
      "Verte para o copo Hurricane previamente gelado.",
      "Faz um corte no triângulo de ananás e prende-o no bordo do copo junto com as folhas verdes de ananás limpas e a cereja vermelha.",
      "Serve com uma palhinha larga."
    ],
    "bartender_tip": "O toque de 10 ml de sumo de lima fresca é o truque dos grandes mixologistas: equilibra a doçura pesada do creme de coco e realça a acidez natural do ananás!"
  },
  {
    "id": "virgin_mojito",
    "name": "Virgin Mojito Refrescante (0.0% Álcool)",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Muddled with Apple Juice or Ginger Ale",
    "description": "A versão sem álcool mais pedida do mundo: lima fresca, hortelã estalada e água com gás ou Ginger Ale para uma frescura estival pura.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo Picado Abundante",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Refrescância Pura 🍃",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Lima Fresca cortada em gomos",
        "quantity": "1 unidade"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "12 folhas"
      },
      {
        "name": "Açúcar Mascavado ou Xarope de Cana",
        "quantity": "2 colheres de chá"
      },
      {
        "name": "Sumo de Maçã Claro ou Ginger Ale",
        "quantity": "50 ml"
      },
      {
        "name": "Água com Gás",
        "quantity": "Para completar"
      },
      {
        "name": "Gelo Picado",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "No fundo do copo, esmaga suavemente os gomos de lima com o açúcar usando o pilão.",
      "Bate nas folhas de hortelã na palma da mão e coloca-as no copo.",
      "Adiciona o sumo de maçã ou Ginger Ale e enche até metade com gelo picado.",
      "Mexe de baixo para cima com a colher bailarina.",
      "Completa com mais gelo picado e água com gás bem fria.",
      "Guarnece com um topo de hortelã e uma rodela de lima fresca."
    ],
    "bartender_tip": "Usar 50 ml de sumo de maçã nobre confere o corpo e a complexidade que normalmente o rum traria à receita clássica, sem adicionar qualquer gota de álcool!"
  },
  {
    "id": "virgin_colada",
    "name": "Virgin Colada Cremosa de Coco & Ananás",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Blended Tropical Mocktail",
    "description": "Doçura aveludada sem álcool: sumo de ananás maduro, leite de coco condensado e natas de coco batidos com gelo picado.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Hurricane ou Taça Tropical",
    "ice": "Gelo Batido",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Cremoso Tropical 🥥",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador",
      "Faca de Guarnição"
    ],
    "ingredients": [
      {
        "name": "Sumo de Ananás 100% Fruta",
        "quantity": "140 ml"
      },
      {
        "name": "Creme ou Leite de Coco Gordo",
        "quantity": "60 ml"
      },
      {
        "name": "Natas Frescas Líquidas ou Xarope de Coco",
        "quantity": "20 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "10 ml"
      },
      {
        "name": "Gelo",
        "quantity": "1 chávena de cubos"
      },
      {
        "name": "Fatia de Ananás & Cereja",
        "quantity": "Para decoração"
      }
    ],
    "steps": [
      "Coloca no liquidificador todos os ingredientes líquidos com a chávena de cubos de gelo.",
      "Bate em alta velocidade durante 25 segundos até se formar uma textura espessa e aveludada tipo frappé.",
      "Verte para o copo Hurricane gelado.",
      "Decora com o triângulo de ananás e uma cereja.",
      "Serve com palhinha para uma sobremesa líquida irresistível."
    ],
    "bartender_tip": "Podes juntar um pedaço de ananás congelado no liquidificador para uma textura ainda mais consistente e sem derreter rapidamente no calor!"
  },
  {
    "id": "virgin_daiquiri",
    "name": "Virgin Morango Daiquiri Batido",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Frozen Blended Mocktail",
    "description": "Morangos frescos vermelhos e sumarentos triturados com sumo de lima, xarope de açúcar e gelo até à consistência perfeita de granizado.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Taça Margarita ou Coupe Larga",
    "ice": "Gelo Triturado / Frozen",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Frozen Frutado 🍓",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador Potente",
      "Tábua de Fruta"
    ],
    "ingredients": [
      {
        "name": "Morangos Frescos Maduros (ou congelados)",
        "quantity": "150 g"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "30 ml"
      },
      {
        "name": "Xarope Simples de Açúcar ou Mel",
        "quantity": "25 ml"
      },
      {
        "name": "Sumo de Maçã ou Água de Coco",
        "quantity": "40 ml"
      },
      {
        "name": "Gelo em Cubos",
        "quantity": "1 chávena cheia"
      },
      {
        "name": "Morango Inteiro com Folha",
        "quantity": "Para decorar"
      }
    ],
    "steps": [
      "Lava e retira o pedúnculo verde aos morangos.",
      "No liquidificador, junta os morangos, o sumo de lima, o xarope simples, a água de coco e o gelo.",
      "Tritura na função \"pulse\" e depois contínua durante 30 segundos até virar um granizado macio e vermelho vivo.",
      "Verte para a taça margarita.",
      "Faz um corte no fundo de um morango inteiro e apoia-o na borda da taça.",
      "Serve de imediato com colher de sobremesa ou palhinha larga."
    ],
    "bartender_tip": "Se usares morangos previamente congelados, não precisas de adicionar tanto gelo, garantindo uma intensidade de cor e sabor a fruta fresca sem precedentes!"
  },
  {
    "id": "san_francisco",
    "name": "Mocktail San Francisco Frutado com Borda Açucarada",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Shaken with Sugar Rim & Grenadine Float",
    "description": "O mocktail internacional de eleição: harmonia de sumos naturais de laranja, ananás, pêssego e limão com borda de açúcar e efeito grenadine.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Highball ou Hurricane",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Elegância Sem Álcool 🍑",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Pratinho de Açúcar e Groselha"
    ],
    "ingredients": [
      {
        "name": "Sumo de Laranja Fresco",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Ananás Natural",
        "quantity": "50 ml"
      },
      {
        "name": "Néctar de Pêssego",
        "quantity": "40 ml"
      },
      {
        "name": "Sumo de Limão Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Xarope de Groselha (Grenadine)",
        "quantity": "15 ml"
      },
      {
        "name": "Açúcar Cristalino Rosa ou Branco",
        "quantity": "Para a borda"
      }
    ],
    "steps": [
      "Mergulha a borda do copo em groselha e depois no açúcar para criar uma crosta doce e colorida.",
      "No shaker com cubos de gelo, junta o sumo de laranja, ananás, néctar de pêssego e sumo de limão.",
      "Bate energicamente durante 15 segundos.",
      "Coa para o copo previamente cheio de cubos de gelo.",
      "Adiciona os 15 ml de groselha no centro: ela afunda criando o clássico degradé de pôr do sol.",
      "Decora com uma rodela de laranja e serve com duas palhinhas."
    ],
    "bartender_tip": "A borda de açúcar açucarada não é apenas decorativa: adoça a acidez do limão a cada golo e encanta qualquer convidado em eventos de bar!"
  },
  {
    "id": "aurora_boreal",
    "name": "Cocktail Mágico Aurora Boreal (Butterfly Pea)",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Colour-Changing Molecular Mocktail",
    "description": "Bebida mágica com flor de Fada Azul (Butterfly Pea): muda de azul cobalto profundo para violeta cintilante ao deitar a lima em frente ao cliente!",
    "difficulty": "Fácil",
    "prep_time": "4 min",
    "glass": "Copo Alto Transparente",
    "ice": "Gelo em Cubos Abundante",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Mágica & Viral 🔮",
    "smoking_technique": null,
    "bar_tools": [
      "Infusor de Chá",
      "Jigger",
      "Jarrinha Pequena de Lima"
    ],
    "ingredients": [
      {
        "name": "Chá Azul de Flores de Butterfly Pea (Frio)",
        "quantity": "100 ml"
      },
      {
        "name": "Xarope Simples ou de Flor de Sabugueiro",
        "quantity": "20 ml"
      },
      {
        "name": "Sumo de Lima Fresco (Servido à parte numa jarrinha)",
        "quantity": "30 ml"
      },
      {
        "name": "Água Tónica ou Água com Gás",
        "quantity": "60 ml"
      },
      {
        "name": "Glitter Alimentar Comestível (Opcional)",
        "quantity": "1 pitada"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Até ao topo"
      }
    ],
    "steps": [
      "Faz uma infusão concentrada de flores secas de Butterfly Pea em água quente por 5 minutos e deixa arrefecer (obténs um azul cobalto elétrico).",
      "Enche o copo com cubos de gelo.",
      "Deita o xarope simples e a água com gás ou tónica.",
      "Adiciona o chá azul por cima com cuidado (e o glitter alimentar se quiseres um efeito galáxia).",
      "À mesa do cliente, entrega uma jarrinha pequena com o sumo de lima fresco.",
      "Ao verter a lima ácida dentro do copo, o pH altera instantaneamente e a cor transmuta de azul para magenta-violeta brilhante!"
    ],
    "bartender_tip": "A antocianina da flor Butterfly Pea é um indicador natural de pH. Ao interagir com o ácido cítrico da lima, a reação química muda a cor num segundo, garantindo fotos e vídeos virais!"
  },
  {
    "id": "limonada_suica",
    "name": "Limonada Suíça Cremosa com Leite Condensado",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Quick-Pulse Blended & Strained",
    "description": "A rainha dos refrescos cremosos: limões frescos batidos inteiros com casca, água gelada, gelo e leite condensado suave.",
    "difficulty": "Fácil",
    "prep_time": "4 min",
    "glass": "Copo Alto ou Caneca de Vidro",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Ultra Cremosa 🥛",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador Potente",
      "Passador de Rede Médio",
      "Tábua e Faca"
    ],
    "ingredients": [
      {
        "name": "Limões Taiti Frescos Lavados",
        "quantity": "2 unidades"
      },
      {
        "name": "Leite Condensado",
        "quantity": "4 a 5 colheres de sopa"
      },
      {
        "name": "Água Gelada Mineral",
        "quantity": "500 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "1 chávena"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "Para finalizar"
      }
    ],
    "steps": [
      "Lava muito bem os limões. Corta as duas pontas, divide em 4 gomos e retira a fibra branca central de cada um.",
      "Coloca os pedaços de limão com casca no liquidificador com a água gelada e o gelo.",
      "Técnica do Pulso Rápido: bate na função PULSAR apenas 3 a 4 vezes durante no máximo 10 segundos (bater demais tritura a casca e deixa amargo).",
      "Coa imediatamente a mistura através do passador para um jarro.",
      "Devolve o líquido coado ao liquidificador, junta o leite condensado e bate mais 5 segundos até espumar.",
      "Serve de imediato em copos com gelo e folhas de hortelã."
    ],
    "bartender_tip": "O segredo para não amargar é NUNCA bater por mais de 10 segundos na primeira etapa com as cascas e servir de imediato enquanto está bem gelada!"
  },
  {
    "id": "limonada_hortela",
    "name": "Limonada com Hortelã & Gengibre Fresco",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Macerada e Refrigerada",
    "description": "O sumo revigorante mais refrescante para dias de calor intenso: limão espremido, hortelã fresca e um toque aromático de gengibre ralado.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Tumbler Alto",
    "ice": "Gelo em Cubos",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Detox Natural 🌿",
    "smoking_technique": null,
    "bar_tools": [
      "Jarro de Vidro",
      "Colher de Pau / Bar",
      "Espremedor"
    ],
    "ingredients": [
      {
        "name": "Sumo de Limão Fresco",
        "quantity": "60 ml (cerca de 2 limões)"
      },
      {
        "name": "Água Mineral com ou sem Gás",
        "quantity": "200 ml"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "8 a 10 folhas"
      },
      {
        "name": "Gengibre Fresco Ralado",
        "quantity": "1/2 colher de chá"
      },
      {
        "name": "Mel Puro ou Açúcar Mascavado",
        "quantity": "2 colheres de sopa"
      },
      {
        "name": "Gelo em Cubos",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "No fundo do jarro ou copo, coloca as folhas de hortelã, o gengibre ralado e o mel.",
      "Pressiona com a colher para soltar os óleos da hortelã e do gengibre.",
      "Adiciona o sumo de limão acabado de espremer.",
      "Enche com gelo e completa com água fresca.",
      "Mexe energicamente para dissolver o mel.",
      "Guarnece com rodelas de limão e um ramo generoso de hortelã."
    ],
    "bartender_tip": "Podes preparar uma garrafa de xarope simples de hortelã e gengibre em casa para ter sempre pronto a misturar na hora!"
  },
  {
    "id": "limonada_frutos_vermelhos",
    "name": "Limonada de Frutos Silvestres & Manjericão",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Muddled Berry Refreshment",
    "description": "Cor rubi maravilhosa e sabor irresistível: framboesas, amoras e morangos macerados com limão siciliano e folhas de manjericão fresco.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto ou Jarro de Bar",
    "ice": "Gelo em Cubos",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Antioxidante 🍇",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Frutos Vermelhos Mistos (Morangos, Framboesas, Amoras)",
        "quantity": "80 g"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "35 ml"
      },
      {
        "name": "Xarope Simples ou Açúcar de Cana",
        "quantity": "25 ml"
      },
      {
        "name": "Folhas de Manjericão Fresco",
        "quantity": "3 a 4 folhas"
      },
      {
        "name": "Água com Gás ou Água Mineral Fresca",
        "quantity": "150 ml"
      },
      {
        "name": "Gelo",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "No copo, coloca os frutos vermelhos frescos com o xarope simples e o manjericão.",
      "Muda e esmaga delicadamente com o pilão até formar um puré rústico brilhante.",
      "Adiciona o sumo de limão siciliano.",
      "Enche o copo até cima com cubos de gelo.",
      "Completa com a água com gás para um efeito efervescente cintilante.",
      "Mexe de baixo para cima com a colher e decora com amoras inteiras e uma folha de manjericão."
    ],
    "bartender_tip": "O manjericão casa perfeitamente com frutos vermelhos e citrinos, conferindo uma nota gourmet inconfundível que surpreende qualquer cliente!"
  },
  {
    "id": "ginger_beer_artesanal",
    "name": "Soda Artesanal de Gengibre Picante & Mel",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Artisanal Soda Build",
    "description": "A verdadeira soda caseira dos mixologistas: sumo de gengibre fresco prensado, mel biológico, limão e água carbonatada com gás vigoroso.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Artesanal & Picante 🫚",
    "smoking_technique": null,
    "bar_tools": [
      "Espremedor de Alho / Prensa de Gengibre",
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Sumo Puro de Gengibre Fresco Prensado",
        "quantity": "25 ml"
      },
      {
        "name": "Mel Biológico Diluído (Honey Syrup 1:1)",
        "quantity": "25 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Água com Gás com Alta Carbonatação",
        "quantity": "150 ml"
      },
      {
        "name": "Fatias Finas de Gengibre Cristalizado ou Natural",
        "quantity": "Para guarnecer"
      },
      {
        "name": "Raminho de Alecrim",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Para fazer o sumo de gengibre, rala a raiz com casca e espreme a polpa através de um pano limpo ou prensa.",
      "No copo alto, mistura o sumo de gengibre, o xarope de mel e o sumo de lima.",
      "Enche o copo com cubos grandes de gelo.",
      "Verte a água com gás muito gelada devagar para manter a efervescência viva.",
      "Mexe delicadamente com a colher bailarina uma só vez.",
      "Decora com uma fatia fina de gengibre e um raminho de alecrim no topo."
    ],
    "bartender_tip": "Esta soda natural é uma digestiva excecional e serve de base artesanal suprema para mocktails e Moscow Mules sem químicos nem conservantes artificiais."
  },
  {
    "id": "iced_tea",
    "name": "Iced Tea de Pêssego Caseiro com Hortelã",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Cold Brew / Chá Infundido com Polpa de Fruta",
    "description": "Adeus às latas industriais cheias de açúcar: chá preto Ceylon infundido com puré artesanal de pêssego maduro e rodelas de limão.",
    "difficulty": "Fácil",
    "prep_time": "5 min",
    "glass": "Copo Alto ou Frasco Vintage de Vidro",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "100% Natural 🍑",
    "smoking_technique": null,
    "bar_tools": [
      "Chaleira / Bule",
      "Passador",
      "Jarro de Serviço"
    ],
    "ingredients": [
      {
        "name": "Chá Preto Ceylon ou Earl Grey Infundido e Frio",
        "quantity": "180 ml"
      },
      {
        "name": "Puré ou Néctar de Pêssego Maduro",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Limão Fresco",
        "quantity": "15 ml"
      },
      {
        "name": "Xarope de Açúcar de Cana ou Mel",
        "quantity": "15 ml"
      },
      {
        "name": "Fatias de Pêssego Fresco",
        "quantity": "3 fatias"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "Para guarnição"
      }
    ],
    "steps": [
      "Prepara o chá preto em 200 ml de água a 90°C durante 4 minutos e deixa arrefecer no frigorífico.",
      "No copo com bastante gelo, deita o puré de pêssego e o sumo de limão fresco.",
      "Adiciona o xarope ou mel e mexe bem.",
      "Verte o chá preto bem frio sobre o gelo.",
      "Mistura tudo com a colher bailarina.",
      "Insere as fatias de pêssego fresco entre os cubos de gelo e finaliza com raminhos de hortelã."
    ],
    "bartender_tip": "Podes fazer a versão Cold Brew deixando saquetas de chá preto em água fria no frigorífico durante 8 horas: o chá fica zero adstringente e incrivelmente suave!"
  },
  {
    "id": "detox_verde",
    "name": "Sumo Detox Verde Revitalizante com Maçã & Espinafres",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Cold Press / Liquidificado & Filtrado",
    "description": "Bomba vitamínica para começar o dia ou revitalizar o corpo: maçã verde Granny Smith, pepino crocante, espinafres tenros, gengibre e lima.",
    "difficulty": "Fácil",
    "prep_time": "4 min",
    "glass": "Copo Alto de Vidro",
    "ice": "Gelo a gosto",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Super Saudável 🍏",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador ou Extrator Cold Press",
      "Passador"
    ],
    "ingredients": [
      {
        "name": "Maçã Verde Granny Smith com Casca",
        "quantity": "1 unidade"
      },
      {
        "name": "Pepino Médio com Casca",
        "quantity": "1/2 unidade"
      },
      {
        "name": "Folhas de Espinafre Frescas",
        "quantity": "1 mão cheia"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "20 ml"
      },
      {
        "name": "Gengibre Fresco",
        "quantity": "1 pedaço de 1 cm"
      },
      {
        "name": "Água de Coco ou Água Mineral Gelada",
        "quantity": "150 ml"
      }
    ],
    "steps": [
      "Lava muito bem todos os vegetais e a maçã.",
      "Corta a maçã e o pepino em cubos (mantém a casca para aproveitar a clorofila e fibras).",
      "No liquidificador, junta a maçã, o pepino, os espinafres, o gengibre, o sumo de lima e a água de coco.",
      "Tritura na potência máxima durante 45 segundos até ficar um líquido homogéneo verde esmeralda.",
      "Se preferires mais liso, coa com passador fino; se preferires com fibras nutritivas, serve direto sobre cubos de gelo.",
      "Serve imediatamente para usufruir de todas as enzimas ativas."
    ],
    "bartender_tip": "A água de coco fornece eletrólitos naturais que aceleram a hidratação celular, tornando este sumo o melhor aliado pós-treino ou de recuperação matinal."
  },
  {
    "id": "dalgona",
    "name": "Café Dalgona Cremoso Gelado",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Whipped Foam over Cold Milk",
    "description": "A sensação viral da cafetaria moderna: uma nuvem espessa e dourada de creme de café batido a flutuar sobre leite gelado e cubos de gelo.",
    "difficulty": "Fácil",
    "prep_time": "4 min",
    "glass": "Copo de Vidro Transparente",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Viral & Doce ☕",
    "smoking_technique": null,
    "bar_tools": [
      "Batedor de Arame ou Mini Batedeira Elétrica",
      "Colher"
    ],
    "ingredients": [
      {
        "name": "Café Solúvel de Boa Qualidade",
        "quantity": "2 colheres de sopa"
      },
      {
        "name": "Açúcar Branco ou Mascavado",
        "quantity": "2 colheres de sopa"
      },
      {
        "name": "Água a Ferver",
        "quantity": "2 colheres de sopa"
      },
      {
        "name": "Leite Fresco Gordo ou Bebida Vegetal (Aveia/Amêndoa)",
        "quantity": "200 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "4 a 5 cubos"
      },
      {
        "name": "Cacau em Pó para polvilhar",
        "quantity": "1 pitada"
      }
    ],
    "steps": [
      "Numa tigela pequena, junta o café solúvel, o açúcar e a água a ferver (proporção exata 1:1:1).",
      "Com o batedor de arame ou mini batedeira, bate vigorosamente durante cerca de 2 a 3 minutos até se transformar num creme fofo, acetinado e dourado com picos firmes.",
      "No copo de servir, coloca os cubos de gelo e deita o leite gelado até 3/4 da altura.",
      "Com uma colher, coloca a espuma de café batida por cima do leite até cobrir toda a superfície.",
      "Polvilha com uma leve pitada de cacau em pó ou canela.",
      "Fotografa as duas camadas bem definidas e mexe com palhinha antes de beber!"
    ],
    "bartender_tip": "A reação espumante só acontece se usares café SOLÚVEL tradicional. Café expresso ou de filtro não retém a emulsão estável necessária para formar a nuvem."
  },
  {
    "id": "smoothie_manga",
    "name": "Smoothie Tropical de Manga & Chia",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Thick Blended Smoothie",
    "description": "Espesso, sedoso e rico em cor: polpa de manga madura batida com iogurte grego natural, sementes de chia e sumo de maracujá.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo de Smoothie ou Jarra de Vidro",
    "ice": "Gelo ou Fruta Congelada",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Tropical Cremoso 🥭",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador",
      "Colher"
    ],
    "ingredients": [
      {
        "name": "Manga Fresca Madura em Cubos",
        "quantity": "1 unidade grande"
      },
      {
        "name": "Iogurte Grego Natural sem Açúcar",
        "quantity": "120 g"
      },
      {
        "name": "Sumo de Laranja ou Leite de Amêndoa",
        "quantity": "80 ml"
      },
      {
        "name": "Sementes de Chia",
        "quantity": "1 colher de chá"
      },
      {
        "name": "Mel Puro",
        "quantity": "1 colher de chá"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "Para guarnição"
      }
    ],
    "steps": [
      "Descasca a manga e corta a polpa em cubos (podes congelar metade previamente para textura mais densa).",
      "No liquidificador, junta a manga, o iogurte grego, o sumo de laranja e o mel.",
      "Tritura em alta velocidade por 30 segundos até obteres um creme aveludado e uniforme.",
      "Adiciona as sementes de chia e pulsa 2 vezes para misturar sem triturar totalmente as sementes.",
      "Verte para o copo gelado.",
      "Guarnece com algumas sementes de chia no topo e uma ponta de hortelã fresca."
    ],
    "bartender_tip": "O iogurte grego confere proteínas saudáveis e uma densidade luxuosa que transforma este smoothie num pequeno-almoço ou lanche completo."
  },
  {
    "id": "mango_lassi",
    "name": "Mango Lassi Cremoso Indiano com Cardamomo",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Traditional Indian Yoghurt Blend",
    "description": "A bebida milenar da Índia: manga Alphonso doce batida com iogurte cremoso, leite, açúcar e uma pitada sublime de cardamomo moído.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Tumbler Alto",
    "ice": "Gelo em Cubos",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Tradição Indiana 🇮🇳",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador",
      "Almofariz para Cardamomo"
    ],
    "ingredients": [
      {
        "name": "Polpa de Manga Doce (tipo Alphonso ou Palmer)",
        "quantity": "200 g"
      },
      {
        "name": "Iogurte Natural Cremoso",
        "quantity": "150 g"
      },
      {
        "name": "Leite Fresco Gordo",
        "quantity": "60 ml"
      },
      {
        "name": "Açúcar ou Xarope Simples",
        "quantity": "1 a 2 colheres de sopa"
      },
      {
        "name": "Sementes de Cardamomo Moídas na Hora",
        "quantity": "1 pitada generosa"
      },
      {
        "name": "Pistácios Picados",
        "quantity": "Para decorar o topo"
      }
    ],
    "steps": [
      "Retira as sementes da vagem de cardamomo e esmaga no almofariz até obter um pó perfumado fino.",
      "No liquidificador, coloca a polpa de manga madura, o iogurte, o leite, o açúcar, metade do cardamomo moído e 3 cubos de gelo.",
      "Bate tudo durante 35 segundos até ficar extremamente cremoso e acetinado.",
      "Verte para o copo alto.",
      "Finaliza polvilhando o restante cardamomo perfumado e os pistácios picados por cima.",
      "Serve bem gelado com palhinha larga."
    ],
    "bartender_tip": "O cardamomo moído na hora é a assinatura autêntica que distingue o verdadeiro Lassi indiano de um batido comum de manga. Não dispenses esta especiaria!"
  },
  {
    "id": "batido_morango",
    "name": "Batido Cremoso de Morango com Gelado de Baunilha",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Milkshake Americano Clássico",
    "description": "O clássico irresistível dos diners: morangos naturais batidos com bolas generosas de gelado artesanal de baunilha e leite gordo gelado.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto de Milkshake",
    "ice": "Sem Gelo (Textura dada pelo Gelado)",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Clássico Guloso 🍓",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador",
      "Colher de Gelado"
    ],
    "ingredients": [
      {
        "name": "Morangos Frescos Maduros",
        "quantity": "150 g"
      },
      {
        "name": "Gelado Artesanal de Baunilha ou Nata",
        "quantity": "3 bolas generosas"
      },
      {
        "name": "Leite Gordo Bem Frio",
        "quantity": "120 ml"
      },
      {
        "name": "Chantilly Batido em Spray ou Caseiro",
        "quantity": "Para o topo"
      },
      {
        "name": "Calda de Morango",
        "quantity": "Para o interior do copo"
      }
    ],
    "steps": [
      "Lava e corta os morangos ao meio.",
      "Faz espirais de calda de morango nas paredes interiores do copo de vidro.",
      "No liquidificador, junta os morangos frescos, o leite gordo bem gelado e as 3 bolas de gelado de baunilha.",
      "Bate na velocidade média durante cerca de 20 segundos até atingir uma consistência aveludada, espessa mas fluida.",
      "Verte para o copo preparado.",
      "Cobre o topo com uma coroa generosa de chantilly e decora com um morango fresco inteiro no topo."
    ],
    "bartender_tip": "Não batas o milkshake durante demasiado tempo no liquidificador para não aquecer o gelo nem liquidificar o creme. 20 segundos é o tempo ideal!"
  },
  {
    "id": "cha_hibisco",
    "name": "Chá Gelado de Hibisco com Frutos Silvestres & Laranja",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Cold Infused Herbal Iced Tea",
    "description": "Cor vermelho-rubi hipnotizante, sabor floral ligeiramente ácido e repleto de antioxidantes: flores de hibisco com laranja e amoras frescas.",
    "difficulty": "Fácil",
    "prep_time": "5 min",
    "glass": "Copo Tumbler Grande ou Taça Balão",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Floral & Rubi 🌺",
    "smoking_technique": null,
    "bar_tools": [
      "Infusor / Chaleira",
      "Passador",
      "Jarro de Vidro"
    ],
    "ingredients": [
      {
        "name": "Flores Secas de Hibisco Biológico",
        "quantity": "2 colheres de sopa"
      },
      {
        "name": "Água a Ferver",
        "quantity": "250 ml"
      },
      {
        "name": "Sumo e Meia-Lua de Laranja Fresca",
        "quantity": "30 ml"
      },
      {
        "name": "Mel Puro ou Xarope de Agave",
        "quantity": "1 a 2 colheres de sopa"
      },
      {
        "name": "Amoras ou Framboesas Frescas",
        "quantity": "Para guarnecer"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "Coloca as flores de hibisco na água a ferver durante 6 minutos para extrair toda a cor rubi e aroma floral.",
      "Coa as flores e adoça com o mel ainda quente para dissolver facilmente.",
      "Deixa o chá arrefecer totalmente no frigorífico.",
      "Num copo alto com muito gelo, deita o sumo de laranja fresco e alguns frutos silvestres.",
      "Verte o chá de hibisco gelado por cima.",
      "Mexe levemente e decora com uma meia-lua de laranja e um raminho de alecrim ou hortelã."
    ],
    "bartender_tip": "O hibisco possui uma acidez natural parecida com a do arando (cranberry). A laranja doce corta essa adstringência, tornando a bebida incrivelmente suave e gulosa."
  },
  {
    "id": "poncha",
    "name": "Poncha Tradicional da Madeira à Pescador",
    "alcoholic": true,
    "category": "portuguesas",
    "categoryLabel": "Tradição Portuguesa 🇵🇹",
    "technique": "Mexido com Caralhinho Tradicional Madeirense",
    "description": "A joia etílica da ilha da Madeira: Aguardente de cana-de-açúcar fresca, mel de abelhas puro da serra e sumo de limão regional batidos com o clássico caralhinho.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Baixo Tradicional de Poncha",
    "ice": "Sem Gelo (À moda tradicional de Câmara de Lobos)",
    "abv": "28% ABV (Poderoso & Cítrico)",
    "badge": "Orgulho Madeirense 🇵🇹",
    "smoking_technique": null,
    "bar_tools": [
      "Caralhinho (Mexelote de Madeira da Madeira)",
      "Jarro de Poncha",
      "Descascador de Citrinos"
    ],
    "ingredients": [
      {
        "name": "Aguardente de Cana-de-Açúcar da Madeira (50% vol)",
        "quantity": "50 ml"
      },
      {
        "name": "Mel de Abelhas Puro da Madeira ou Açúcar de Cana",
        "quantity": "30 ml"
      },
      {
        "name": "Sumo de Limão Regional Fresco",
        "quantity": "30 ml"
      },
      {
        "name": "Casca Fina de Limão e Laranja",
        "quantity": "Para pilar no fundo"
      }
    ],
    "steps": [
      "No jarro tradicional de poncha, coloca as cascas finas de limão e o mel de abelhas.",
      "Com o caralhinho de madeira, esmaga e roda vigorosamente entre as palmas das mãos para que o mel absorva os óleos essenciais das cascas.",
      "Junta o sumo de limão acabado de espremer.",
      "Adiciona a autêntica aguardente de cana da Madeira.",
      "Coloca a haste do caralhinho entre as palmas das duas mãos e esfrega com velocidade e força para emulsionar a mistura até criar uma espuma aveludada no topo.",
      "Serve de imediato no copo pequeno tradicional sem gelo."
    ],
    "bartender_tip": "O verdadeiro segredo da Poncha é a fricção do caralhinho de madeira de faia: a velocidade da rotação emulsiona o mel espesso com a aguardente sem necessidade de batedeiras modernas."
  },
  {
    "id": "porto_tonico",
    "name": "Porto Tónico Branco com Hortelã & Limão",
    "alcoholic": true,
    "category": "portuguesas",
    "categoryLabel": "Tradição Portuguesa 🇵🇹",
    "technique": "Built over Ice in Wine Glass",
    "description": "O aperitivo do pôr do sol nas margens do Douro: Vinho do Porto Branco Extra Seco, água tónica premium, rodela de limão fresco e ramo de hortelã.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo de Vinho Branco com Pé ou Taça Balão",
    "ice": "Gelo em Cubos Grandes",
    "abv": "11% ABV (Elegante & Fresco)",
    "badge": "Aperitivo do Douro 🍷",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Vinho do Porto Branco (Seco ou Extra Seco)",
        "quantity": "60 ml"
      },
      {
        "name": "Água Tónica Premium Fresca",
        "quantity": "120 ml"
      },
      {
        "name": "Rodela Grossa de Limão Fresco",
        "quantity": "1 unidade"
      },
      {
        "name": "Ramo de Hortelã Fresca",
        "quantity": "1 unidade"
      },
      {
        "name": "Gelo em Cubos Grandes",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "Enche a taça com bastante gelo em cubos de boa densidade.",
      "Deita o Vinho do Porto Branco medido com o jigger.",
      "Completa com a água tónica fresca deitada suavemente na parede do copo.",
      "Dá apenas uma leve mexida vertical com a colher bailarina.",
      "Dá um estalinho no ramo de hortelã na palma da mão e introduz no copo juntamente com a rodela de limão.",
      "Serve como aperitivo antes das refeições."
    ],
    "bartender_tip": "Para um perfil mais sofisticado, usa Vinho do Porto Branco Seco ou Chip Dry. Se usares Porto Lágrima (muito doce), adiciona 10 ml de sumo de lima fresco para equilibrar os açúcares."
  },
  {
    "id": "sangria_tinta",
    "name": "Sangria Tinta Tradicional de Frutas & Vinho Tinto",
    "alcoholic": true,
    "category": "portuguesas",
    "categoryLabel": "Tradição Portuguesa 🇵🇹",
    "technique": "Jarro de Maceração & Infusão com Licores",
    "description": "A rainha das mesas de verão portuguesas: vinho tinto jovem, maçãs e laranjas em cubos, canela, licor beirão e gasosa bem fresca.",
    "difficulty": "Fácil",
    "prep_time": "6 min",
    "glass": "Jarro de 1 Litro & Copos com Pé",
    "ice": "Gelo em Cubos Abundante",
    "abv": "9% ABV (Sociável & Frutado)",
    "badge": "Festiva & Tradicional 🍷",
    "smoking_technique": null,
    "bar_tools": [
      "Jarro Grande de Vidro",
      "Colher de Pau Longa",
      "Tábua de Fruta"
    ],
    "ingredients": [
      {
        "name": "Vinho Tinto Jovem e Frutado",
        "quantity": "750 ml (1 garrafa)"
      },
      {
        "name": "Refrigerante Gasosa ou 7Up",
        "quantity": "250 ml"
      },
      {
        "name": "Licor Beirão Tradicional",
        "quantity": "50 ml"
      },
      {
        "name": "Brandy ou Aguardente Vínica",
        "quantity": "30 ml"
      },
      {
        "name": "Laranjas Frescas cortadas em meias-luas",
        "quantity": "1 unidade"
      },
      {
        "name": "Maçã Vermelha em cubinhos",
        "quantity": "1 unidade"
      },
      {
        "name": "Pau de Canela",
        "quantity": "2 unidades"
      },
      {
        "name": "Açúcar Mascavado",
        "quantity": "2 colheres de sopa"
      }
    ],
    "steps": [
      "No fundo do jarro grande, coloca as frutas cortadas (laranja e maçã), o açúcar mascavado e os paus de canela.",
      "Adiciona o Licor Beirão e o Brandy.",
      "Mexe e deixa macerar durante 10 minutos para as frutas absorverem os licores e libertarem sumos.",
      "Enche o jarro até meio com cubos de gelo.",
      "Verte o vinho tinto e completa com a gasosa bem fria.",
      "Mexe suavemente de baixo para cima com a colher longa e serve nos copos com gelo e colheres para apanhar as frutas embebidas."
    ],
    "bartender_tip": "O segredo da sangria perfeita nunca é usar vinho velho esquecido, mas sim um vinho tinto jovem, fresco e leve, com a fruta a macerar previamente nos licores!"
  },
  {
    "id": "sangria_branca",
    "name": "Sangria Branca com Espumante & Frutos Vermelhos",
    "alcoholic": true,
    "category": "portuguesas",
    "categoryLabel": "Tradição Portuguesa 🇵🇹",
    "technique": "Sparkling Wine & Summer Berries Maceration",
    "description": "Elegância e frescura incomparáveis: espumante português meio-seco, vinho branco leve, frutos vermelhos frescos, hortelã e licor de laranja.",
    "difficulty": "Fácil",
    "prep_time": "6 min",
    "glass": "Jarro de Vidro Elegante & Taças de Vinho",
    "ice": "Gelo em Cubos Grandes",
    "abv": "10% ABV (Festivo & Cintilante)",
    "badge": "Chique de Verão 🥂",
    "smoking_technique": null,
    "bar_tools": [
      "Jarro de Sangria",
      "Colher Longa"
    ],
    "ingredients": [
      {
        "name": "Vinho Espumante Português Meio-Seco ou Bruto",
        "quantity": "750 ml"
      },
      {
        "name": "Vinho Branco Verde ou do Alentejo",
        "quantity": "250 ml"
      },
      {
        "name": "Licor Cointreau ou Triple Sec",
        "quantity": "50 ml"
      },
      {
        "name": "Frutos Vermelhos Frescos (Morangos fatiados e Framboesas)",
        "quantity": "150 g"
      },
      {
        "name": "Maçã Verde Granny Smith em cubinhos",
        "quantity": "1 unidade"
      },
      {
        "name": "Ramos de Hortelã Fresca",
        "quantity": "6 a 8 folhas"
      },
      {
        "name": "Refrigerante de Lima-Limão (Sprite/7Up)",
        "quantity": "200 ml"
      },
      {
        "name": "Gelo",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "No jarro, coloca os frutos vermelhos, os cubinhos de maçã verde, o licor de laranja e a hortelã fresca.",
      "Deixa repousar durante 5 minutos para perfumar.",
      "Adiciona o vinho branco e cubos de gelo abundantes.",
      "Adiciona a gasosa de lima-limão.",
      "Mesmo antes de servir, deita o espumante bem gelado para preservar ao máximo o perlage cintilante.",
      "Mexe levemente com a colher longa e serve de imediato."
    ],
    "bartender_tip": "Deitar o espumante apenas no último segundo antes de levar o jarro à mesa é o segredo de luxo dos melhores beach clubs portugueses para garantir bolhas vivas em cada copo."
  },
  {
    "id": "ginjinha",
    "name": "Ginjinha Tradicional em Copo de Chocolate",
    "alcoholic": true,
    "category": "portuguesas",
    "categoryLabel": "Tradição Portuguesa 🇵🇹",
    "technique": "Classic Portuguese Liqueur Serve",
    "description": "A histórica iguaria de Óbidos e Lisboa: licor aveludado de ginjas maceradas com canela e aguardente, servido num copo artesanal de chocolate negro comestível com fruta.",
    "difficulty": "Fácil",
    "prep_time": "1 min",
    "glass": "Copo de Chocolate Negro Artesanal (Shot)",
    "ice": "Sem Gelo (Temperatura Ambiente ou Ligeiramente Fresca)",
    "abv": "20% ABV (Doce & Licoroso)",
    "badge": "Óbidos & Lisboa 🍫",
    "smoking_technique": null,
    "bar_tools": [
      "Garrafa de Ginjinha Tradicional com Frutos",
      "Copo Comestível de Chocolate"
    ],
    "ingredients": [
      {
        "name": "Licor de Ginjinha Tradicional Portuguesa",
        "quantity": "40 ml"
      },
      {
        "name": "Ginja Fruto Macerada da Garrafa (\"Com Elas\")",
        "quantity": "1 a 2 ginjas"
      },
      {
        "name": "Copo Comestível de Chocolate Negro 70%",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Agita a garrafa de ginjinha suavemente para que os açúcares e as especiarias se misturem harmoniosamente.",
      "Coloca o copo de chocolate negro numa base bonita ou guardanapo.",
      "Deita os 40 ml de licor de ginjinha no copo de chocolate.",
      "Com uma colher pequena, retira uma ou duas ginjas inteiras maceradas da garrafa e coloca dentro do copo.",
      "Bebe o licor aromático de um ou dois tragos e, de seguida, come o copo de chocolate crocante que contrasta perfeitamente com a acidez da ginja."
    ],
    "bartender_tip": "Ao servir, pergunta sempre ao cliente à boa maneira portuguesa: \"Com elas ou sem elas?\" — referindo-se a incluir ou não as saborosas ginjas embebidas em álcool dentro do copo!"
  },
  {
    "id": "cosmopolitan",
    "name": "Cosmopolitan Glamour (Vodka Citron & Arando)",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Hard Shaken & Double Strained with Flamed Orange",
    "description": "O ícone cosmopolita de Nova Iorque: Vodka de infusão cítrica, licor Cointreau, sumo de arando (cranberry) rubi e sumo de lima fresca.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Taça de Martini ou Coupe",
    "ice": "Apenas no Shaker",
    "abv": "20% ABV (Cítrico & Glamoroso)",
    "badge": "Ícone Fashion 🍸",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador Hawthorne",
      "Passador de Rede Fina",
      "Fósforo / Isqueiro"
    ],
    "ingredients": [
      {
        "name": "Vodka Cítrica (Vodka Citron)",
        "quantity": "45 ml"
      },
      {
        "name": "Licor Cointreau (Triple Sec)",
        "quantity": "20 ml"
      },
      {
        "name": "Sumo de Arando Vermelho (Cranberry)",
        "quantity": "30 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "15 ml"
      },
      {
        "name": "Casca Redonda de Laranja para Flamejar",
        "quantity": "1 moeda"
      }
    ],
    "steps": [
      "Arrefece a taça de martini no congelador ou com gelo picado.",
      "No shaker com cubos de gelo, deita a vodka cítrica, o Cointreau, o sumo de arando e a lima fresca.",
      "Bate vigorosamente durante 15 segundos até o metal do shaker gelar.",
      "Faz uma coagem dupla para a taça fria para garantir uma textura sedosa e sem lascas de gelo.",
      "Segura uma moeda de casca de laranja sobre a taça com uma chama acesa à frente e espreme a casca: os óleos inflamam suavemente perfumando o cocktail com notas tostadas.",
      "Passa a casca no bordo e descarta."
    ],
    "bartender_tip": "O segredo da cor perfeita do Cosmo não é ficar vermelho escuro, mas sim um tom rosa translúcido vivo e cintilante!"
  },
  {
    "id": "long_island_iced_tea",
    "name": "Long Island Iced Tea Lendário (5 Destilados)",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Built / Light Shake & Cola Float",
    "description": "A lenda dos bares: 5 destilados brancos (Vodka, Tequila, Rum, Gin e Triple Sec) com sumo de limão e um toque de cola que imita a cor de chá gelado.",
    "difficulty": "Média",
    "prep_time": "3 min",
    "glass": "Copo Alto Collins / Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "22% ABV (Potente & Traiçoeiro)",
    "badge": "Super Potente ⚡",
    "smoking_technique": null,
    "bar_tools": [
      "Jigger",
      "Shaker",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Vodka",
        "quantity": "15 ml"
      },
      {
        "name": "Tequila Blanco",
        "quantity": "15 ml"
      },
      {
        "name": "Rum Branco Ligeiro",
        "quantity": "15 ml"
      },
      {
        "name": "London Dry Gin",
        "quantity": "15 ml"
      },
      {
        "name": "Triple Sec (Licor de Laranja)",
        "quantity": "15 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "25 ml"
      },
      {
        "name": "Xarope Simples de Açúcar",
        "quantity": "20 ml"
      },
      {
        "name": "Refrigerante Cola (para finalizar)",
        "quantity": "30 ml"
      }
    ],
    "steps": [
      "No shaker com gelo, deita a vodka, a tequila, o rum, o gin, o triple sec, o sumo de limão e o xarope simples.",
      "Dá uma rápida batida de 5 segundos para emulsionar e arrefecer.",
      "Verte com o gelo diretamente para o copo alto Collins.",
      "Completa com um splash subtil de refrigerante cola (apenas o suficiente para conferir o tom âmbar de chá gelado).",
      "Mexe suavemente com a colher bailarina uma só vez.",
      "Decora com uma rodela de limão no bordo e serve com palhinha."
    ],
    "bartender_tip": "Apesar de não levar uma única gota de chá, o sabor e a cor fazem lembrar ice tea de limão com uma força alcoólica considerável!"
  },
  {
    "id": "sex_on_the_beach",
    "name": "Sex on the Beach Sunset (Vodka, Pêssego & Frutas)",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Built with Double Juice Gradient",
    "description": "O clássico veraneante: Vodka, licor de pêssego suave, sumo de laranja fresco e sumo de arando (cranberry) em belas camadas solares.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Hurricane ou Highball",
    "ice": "Gelo em Cubos",
    "abv": "11% ABV (Doce & Frutado)",
    "badge": "Sensação de Verão 🏖️",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Vodka Premium",
        "quantity": "45 ml"
      },
      {
        "name": "Licor de Pêssego (Peach Schnapps)",
        "quantity": "25 ml"
      },
      {
        "name": "Sumo de Laranja Fresco",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Arando (Cranberry)",
        "quantity": "50 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Cheios no copo"
      },
      {
        "name": "Rodela de Laranja & Cereja Maraschino",
        "quantity": "Para guarnecer"
      }
    ],
    "steps": [
      "Enche o copo alto com cubos de gelo.",
      "Deita a vodka e o licor de pêssego.",
      "Adiciona o sumo de laranja fresco e mexe suavemente.",
      "Pelas costas da colher bailarina, verte lentamente o sumo de arando no topo para criar um pôr do sol avermelhado.",
      "Encaixa uma rodela de laranja e a cereja no bordo.",
      "Serve com palhinha."
    ],
    "bartender_tip": "Usar sumo de laranja espremido na hora reduz o excesso de doçura e realça o sabor autêntico do pêssego."
  },
  {
    "id": "singapore_sling",
    "name": "Singapore Sling Imperial do Hotel Raffles",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Hard Shaken with Pineapple Foam",
    "description": "Criado em 1915 no mítico Long Bar de Singapura: Gin, licor de cereja Cherry Heering, Cointreau, Bénédictine, ananás e Angostura.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Alto Hurricane ou Sling",
    "ice": "Gelo em Cubos Grandes",
    "abv": "15% ABV (Complexo & Frutado)",
    "badge": "Lenda Histórica 🇸🇬",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador Hawthorne",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin",
        "quantity": "40 ml"
      },
      {
        "name": "Licor de Cereja (Cherry Heering)",
        "quantity": "15 ml"
      },
      {
        "name": "Cointreau",
        "quantity": "10 ml"
      },
      {
        "name": "Licor Herbal Bénédictine D.O.M.",
        "quantity": "10 ml"
      },
      {
        "name": "Sumo de Ananás Natural Fresco",
        "quantity": "80 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "15 ml"
      },
      {
        "name": "Xarope de Groselha (Grenadine)",
        "quantity": "10 ml"
      },
      {
        "name": "Angostura Bitters",
        "quantity": "1 dash"
      }
    ],
    "steps": [
      "No shaker com muito gelo, coloca todos os ingredientes.",
      "Bate intensamente durante 20 segundos para que as enzimas do ananás produzam uma espuma densa no topo.",
      "Coa para o copo alto cheio de gelo fresco.",
      "A espuma rosada instala-se elegantemente no topo.",
      "Decora com um triângulo de ananás e uma cereja Maraschino."
    ],
    "bartender_tip": "A combinação de Bénédictine e Cherry Heering é o que confere a singularidade aromática que nenhuma outra receita de bar consegue replicar!"
  },
  {
    "id": "mai_tai",
    "name": "Mai Tai Tradicional Tiki (Trader Vic 1944)",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Shaken with Crushed Ice & Dark Rum Float",
    "description": "Mai Tai em Taitiano significa \"Fora deste Mundo!\": Rum jamaicano envelhecido, rum agrícola, Curaçao de laranja, xarope de amêndoa Orgeat e lima.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Double Rocks ou Tiki Mug",
    "ice": "Gelo Picado (Crushed Ice) em Abundância",
    "abv": "24% ABV (Rico & Amendoado)",
    "badge": "Rei do Tiki 🗿",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Rum Jamaicano Envelhecido (ex: Appleton Estate)",
        "quantity": "30 ml"
      },
      {
        "name": "Rum Agrícola Branco de Martinica",
        "quantity": "30 ml"
      },
      {
        "name": "Orange Curaçao (Pierre Ferrand ou Triple Sec)",
        "quantity": "15 ml"
      },
      {
        "name": "Xarope de Amêndoa (Orgeat)",
        "quantity": "15 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "25 ml"
      },
      {
        "name": "Xarope Simples de Açúcar",
        "quantity": "5 ml"
      },
      {
        "name": "Ramo de Hortelã Fresca & Meia Casca de Lima",
        "quantity": "Para ilha deserta"
      }
    ],
    "steps": [
      "Num shaker com 1 chávena de gelo picado, coloca o rum, o curaçao, o orgeat, o sumo de lima e o xarope simples.",
      "Bate com força durante 10 segundos.",
      "Despeja todo o conteúdo sem coar para o copo rocks.",
      "Adiciona mais gelo picado até criar um monte.",
      "Pousa a meia casca de lima virada ao contrário (simulando uma ilha) e o ramo de hortelã por cima (simulando uma palmeira).",
      "Serve com palhinha curta."
    ],
    "bartender_tip": "O verdadeiro Mai Tai não leva sumo de ananás nem sumo de laranja! A receita original de 1944 destaca apenas o rum, a amêndoa do orgeat e a acidez da lima."
  },
  {
    "id": "zombie_tiki",
    "name": "Zombie Tiki Potente (Trio de Rums & Absinto)",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Blended Shake & Mint Crown",
    "description": "Criado por Don the Beachcomber para levantar os mortos: três variedades de rum caribenho, absinto aromático, sumo de maracujá, lima e xarope de canela.",
    "difficulty": "Avançada",
    "prep_time": "4 min",
    "glass": "Caneca Tiki Cerâmica ou Copo Alto",
    "ice": "Gelo Picado Abundante",
    "abv": "28% ABV (Extremamente Intenso)",
    "badge": "Puro Tiki 💀",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Gotero para Absinto",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Rum Branco Caribenho",
        "quantity": "30 ml"
      },
      {
        "name": "Rum Dourado Añejo",
        "quantity": "30 ml"
      },
      {
        "name": "Rum Overproof Escuro (75.5% vol)",
        "quantity": "15 ml"
      },
      {
        "name": "Absinto Puro",
        "quantity": "3 gotas"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "20 ml"
      },
      {
        "name": "Polpa / Sumo de Maracujá",
        "quantity": "20 ml"
      },
      {
        "name": "Xarope de Canela Artesanal",
        "quantity": "15 ml"
      },
      {
        "name": "Angostura Bitters",
        "quantity": "1 dash"
      }
    ],
    "steps": [
      "No shaker com cubos de gelo, junta os três rums, o absinto, o sumo de lima, o maracujá, o xarope de canela e a Angostura.",
      "Bate com vigor extremo por 15 segundos.",
      "Coa para a caneca Tiki repleta de gelo picado.",
      "Coloca uma coroa densa de hortelã fresca e uma rodela de lima no topo.",
      "Serve com palhinha longa."
    ],
    "bartender_tip": "Nos anos 1930, os bares limitavam o consumo a no máximo 2 Zombies por pessoa devido à sua incrível potência e teor alcoólico escondido pela fruta!"
  },
  {
    "id": "penicillin",
    "name": "Penicillin Cocktail (Scotch, Gengibre, Mel & Fumo de Islay)",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Shaken with Peated Islay Float",
    "description": "A criação contemporânea mais aclamada deste século: Blended Scotch, xarope de mel e gengibre fresco, com uma camada flutuante de whisky turfado e defumado de Islay.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Rocks Baixo",
    "ice": "Cubo Único Gigante de Gelo",
    "abv": "24% ABV (Defumado & Balsâmico)",
    "badge": "Mixologia Moderna 🧪",
    "smoking_technique": "O fumo e turfa provêm naturalmente da destilação do Single Malt de Islay (ex: Laphroaig ou Ardbeg) vertido sobre as costas da colher no topo do cocktail.",
    "bar_tools": [
      "Shaker",
      "Passador Hawthorne",
      "Passador Fino",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Blended Scotch Whisky",
        "quantity": "50 ml"
      },
      {
        "name": "Single Malt Islay Scotch Turfado (ex: Laphroaig 10)",
        "quantity": "10 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "25 ml"
      },
      {
        "name": "Xarope de Mel & Gengibre Fresco (1:1)",
        "quantity": "25 ml"
      },
      {
        "name": "Gengibre Cristalizado no Palito",
        "quantity": "1 pedaço"
      }
    ],
    "steps": [
      "No shaker com cubos grandes de gelo, junta o blended Scotch, o sumo de limão fresco e o xarope de mel com gengibre.",
      "Bate vigorosamente durante 15 segundos.",
      "Coa com coagem dupla para o copo rocks com o cubo gigante de gelo transparente.",
      "Pelas costas da colher bailarina, verte delicadamente o whisky turfado de Islay para flutuar no topo.",
      "O aroma fumado a turfa e fogueira atinge o nariz antes de cada trago balsâmico.",
      "Decora com o cubo de gengibre cristalizado num espeto de bambu."
    ],
    "bartender_tip": "Não mistures o whisky de Islay! Ao ficar na superfície, cria a ilusão olfativa de um fumo intenso, enquanto o paladar recebe o frescor doce do limão e gengibre."
  },
  {
    "id": "sazerac",
    "name": "Sazerac de Nova Orleães (Lavagem de Absinto & Peychaud’s)",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Absinthe Rinse & Stirred in Rocks Glass (No Ice)",
    "description": "O cocktail oficial mais antigo da América: Rye Whiskey robusto, torrão de açúcar e bitters de Peychaud num copo previamente perfumado com absinto.",
    "difficulty": "Média",
    "prep_time": "3 min",
    "glass": "Copo Rocks Pequeno Gelado",
    "ice": "Apenas para mexer (Servido puro sem gelo)",
    "abv": "34% ABV (Poderoso & Anisado)",
    "badge": "Património Histórico ⚜️",
    "smoking_technique": null,
    "bar_tools": [
      "Mixing Glass",
      "Colher Bailarina",
      "Julep Strainer",
      "Vaporizador ou Copo de Absinto"
    ],
    "ingredients": [
      {
        "name": "Rye Whiskey ou Cognac VSOP",
        "quantity": "60 ml"
      },
      {
        "name": "Absinto Francês para lavagem de copo",
        "quantity": "5 ml (ou spray)"
      },
      {
        "name": "Peychaud’s Bitters",
        "quantity": "3 dashes"
      },
      {
        "name": "Angostura Bitters",
        "quantity": "1 dash"
      },
      {
        "name": "Torrão de Açúcar Branco",
        "quantity": "1 unidade"
      },
      {
        "name": "Casca de Limão Siciliano (Twist)",
        "quantity": "1 tira"
      }
    ],
    "steps": [
      "Gela o copo rocks enchendo-o de gelo enquanto preparas o drink.",
      "No mixing glass, coloca o torrão de açúcar, os bitters de Peychaud e Angostura e umas gotas de água. Esmaga com a colher até virar pasta.",
      "Adiciona o Rye Whiskey e cubos grandes de gelo. Mexe durante 30 segundos com a colher bailarina.",
      "Descarta o gelo do copo rocks, deita os 5 ml de absinto e roda o copo para revestir todas as paredes interiores. Descarta o excesso de absinto.",
      "Coa o líquido do mixing glass para o copo perfumado com absinto (sem gelo).",
      "Torce a casca de limão sobre o copo para libertar os óleos cítricos e descarta a casca (ou apoia na borda)."
    ],
    "bartender_tip": "A lavagem de absinto (rinse) deixa apenas uma película molecular no vidro. O suficiente para libertar aromas de anis a cada trago sem sobrepor o Rye Whiskey!"
  },
  {
    "id": "french_75",
    "name": "French 75 Aristocrático (Gin & Champanhe Brut)",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Shaken Base & Champagne Top",
    "description": "Nomeado em honra do canhão francês de 75 mm pela sua potência efervescente: London Dry Gin, sumo de limão siciliano e topo de Champanhe ou Espumante Brut.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Flûte de Champanhe ou Taça Coupe",
    "ice": "Apenas para bater no Shaker",
    "abv": "16% ABV (Burbulhante & Elegante)",
    "badge": "Chique & Festivo 🍾",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Zester de Citrinos"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin",
        "quantity": "35 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "15 ml"
      },
      {
        "name": "Xarope Simples de Açúcar",
        "quantity": "15 ml"
      },
      {
        "name": "Champanhe Brut ou Espumante Meio-Seco",
        "quantity": "60 ml"
      },
      {
        "name": "Espiral Longa de Casca de Limão",
        "quantity": "Para decoração"
      }
    ],
    "steps": [
      "No shaker com cubos de gelo, junta o gin, o sumo de limão fresco e o xarope simples.",
      "Bate com firmeza durante 12 segundos.",
      "Coa para a flûte de champanhe previamente gelada.",
      "Completa delicadamente com o champanhe ou espumante bem gelado.",
      "Dá uma suave mexida vertical com a colher bailarina.",
      "Coloca uma elegante espiral fina de casca de limão dentro da taça."
    ],
    "bartender_tip": "Para um perfil mais aveludado ao estilo de Nova Orleães, podes substituir o Gin por Cognac francês!"
  },
  {
    "id": "clover_club",
    "name": "Clover Club (Gin, Framboesa & Espuma de Veludo)",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Dry Shake & Hard Wet Shake",
    "description": "Nascido nos clubes de cavalheiros de Filadélfia no séc. XIX: Gin, xarope caseiro de framboesas frescas, limão e clara de ovo aveludada.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Taça Coupe Elegante",
    "ice": "Gelo no Shaker",
    "abv": "18% ABV (Suave & Frutado)",
    "badge": "Clássico Vitoriano 🌸",
    "smoking_technique": null,
    "bar_tools": [
      "Boston Shaker",
      "Double Strainer",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin",
        "quantity": "50 ml"
      },
      {
        "name": "Xarope Artesanal de Framboesas Frescas",
        "quantity": "20 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Clara de Ovo Fresca (ou Aquafaba)",
        "quantity": "15 ml"
      },
      {
        "name": "Framboesas Frescas no Espeto",
        "quantity": "3 unidades"
      }
    ],
    "steps": [
      "No shaker sem gelo, coloca o gin, o xarope de framboesa, o limão e a clara.",
      "Bate a seco vigorosamente durante 15 segundos para emulsionar a espuma.",
      "Junta cubos de gelo até cima do shaker e bate vigorosamente mais 15 segundos.",
      "Faz uma coagem dupla com passador fino para a taça coupe fria.",
      "Uma camada imaculada de espuma rosa-pálido aveludada forma-se no topo.",
      "Decora com 3 framboesas frescas num espeto de bambu apoiado no bordo."
    ],
    "bartender_tip": "O xarope caseiro de framboesa faz toda a diferença: macera 100 g de framboesas em 100 ml de xarope de açúcar quente e coa antes de usar!"
  },
  {
    "id": "bramble",
    "name": "Bramble Britânico com Licor de Amora Silvestre",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Built over Crushed Ice with Crème de Mûre Bleed",
    "description": "Criado em Londres por Dick Bradsell nos anos 80: Gin, limão fresco e açúcar com uma cascata sangrante de licor de amora negra a descer pelo gelo.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Rocks Baixo",
    "ice": "Gelo Picado (Crushed Ice) abundante",
    "abv": "18% ABV (Agridoce & Silvestre)",
    "badge": "London Modern Classic 🫐",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin",
        "quantity": "45 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "25 ml"
      },
      {
        "name": "Xarope Simples de Açúcar",
        "quantity": "15 ml"
      },
      {
        "name": "Licor de Amora Negra (Crème de Mûre)",
        "quantity": "15 ml"
      },
      {
        "name": "Amoras Silvestres Frescas",
        "quantity": "2 unidades"
      },
      {
        "name": "Rodela de Limão & Raminho de Hortelã",
        "quantity": "Para guarnecer"
      }
    ],
    "steps": [
      "No shaker com cubos de gelo, junta o gin, o sumo de limão e o xarope simples.",
      "Bate com rapidez durante 10 segundos.",
      "Coa para um copo rocks previamente cheio até ao bordo com gelo picado.",
      "Regue o licor de amora negra (Crème de Mûre) em fio pelo topo do gelo picado.",
      "O licor desce lentamente criando um efeito visual \"sangrante\" espetacular.",
      "Decora com amoras frescas no topo do gelo e uma rodela de limão."
    ],
    "bartender_tip": "Nunca batas o licor de amora no shaker! A beleza do Bramble reside exclusivamente no efeito visual do licor escuro a infiltrar-se no gelo branco."
  },
  {
    "id": "aviation",
    "name": "Aviation Vintage com Violeta & Cereja Maraschino",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Hard Shaken & Fine Strained",
    "description": "Dos céus dourados da aviação dos anos 1910: Gin, licor Maraschino, Crème de Violette e sumo de limão numa cor azul-celeste inesquecível.",
    "difficulty": "Média",
    "prep_time": "3 min",
    "glass": "Taça Coupe Gelada",
    "ice": "Apenas no Shaker",
    "abv": "24% ABV (Floral & Cítrico)",
    "badge": "Azul Celeste ✈️",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador de Rede Fina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin",
        "quantity": "50 ml"
      },
      {
        "name": "Licor Maraschino (Luxardo)",
        "quantity": "15 ml"
      },
      {
        "name": "Crème de Violette (Licor de Violeta)",
        "quantity": "10 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Cereja Maraschino Genuína no Fundo",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Arrefece a taça coupe no congelador.",
      "No shaker com cubos de gelo, junta o gin, o licor Maraschino, o Crème de Violette e o sumo de limão fresco.",
      "Bate intensamente durante 15 segundos.",
      "Faz uma coagem dupla para a taça coupe.",
      "A cor ganha um tom lilás-celeste fascinante que lembra o céu ao amanhecer.",
      "Pousa no centro do fundo da taça uma cereja Maraschino escura."
    ],
    "bartender_tip": "Cuidado com a dosagem do Crème de Violette: apenas 10 ml são suficientes para dar a tonalidade e as notas florais sem parecer perfume excessivo."
  },
  {
    "id": "boulevardier",
    "name": "Boulevardier Parisiense (Bourbon, Campari & Vermouth)",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Stirred in Crystal Mixing Glass",
    "description": "Criado no Harry’s New York Bar em Paris nos anos 1920: a versão mais quente, profunda e aveludada do Negroni com Bourbon no lugar do Gin.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Rocks Baixo com Bloco de Gelo",
    "ice": "Cubo Único Gigante de Gelo Translúcido",
    "abv": "26% ABV (Intenso & Amadeirado)",
    "badge": "Parisiense dos Anos 20 🇫🇷",
    "smoking_technique": null,
    "bar_tools": [
      "Mixing Glass",
      "Colher Bailarina",
      "Julep Strainer"
    ],
    "ingredients": [
      {
        "name": "Bourbon ou Rye Whiskey",
        "quantity": "45 ml"
      },
      {
        "name": "Campari Bitter",
        "quantity": "30 ml"
      },
      {
        "name": "Vermute Tinto Doce (Rosso)",
        "quantity": "30 ml"
      },
      {
        "name": "Casca Larga de Laranja Fresca",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "No mixing glass com cubos grandes de gelo, deita o Bourbon, o Campari e o vermute tinto.",
      "Mexe com a colher bailarina encostada à parede do copo durante 30 segundos contínuos.",
      "Coloca o cubo gigante de gelo no copo rocks.",
      "Coa o líquido avermelhado límpido sobre o gelo.",
      "Torce a casca de laranja para projetar os óleos sobre a superfície e passa no bordo.",
      "Insere a casca no copo e aprecia a textura aveludada do whiskey com o amargo do Campari."
    ],
    "bartender_tip": "A proporção 1.5 : 1 : 1 (45 ml de Bourbon para 30 ml de Campari e Vermute) permite ao destilado de carvalho brilhar sem ser dominado pelo amargor."
  },
  {
    "id": "white_russian",
    "name": "White Russian Aveludado (O Lendário \"The Dude\")",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Built over Ice with Cream Float",
    "description": "Imortalizado no filme The Big Lebowski: Vodka de qualidade, licor de café Kahlúa e uma coroa densa de natas frescas líquidas.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Rocks Baixo",
    "ice": "Gelo em Cubos Grandes",
    "abv": "19% ABV (Cremoso & Doce)",
    "badge": "Cult Clássico 🎳",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Vodka Premium",
        "quantity": "50 ml"
      },
      {
        "name": "Licor de Café (Kahlúa)",
        "quantity": "25 ml"
      },
      {
        "name": "Natas Frescas Líquidas ou Leite Gordo",
        "quantity": "30 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Cheios no copo"
      }
    ],
    "steps": [
      "Enche o copo rocks com cubos grandes de gelo.",
      "Adiciona a vodka e o licor de café Kahlúa.",
      "Mexe suavemente a base com a colher bailarina.",
      "Pelas costas da colher, verte as natas frescas delicadamente sobre a superfície do gelo.",
      "As natas descem em espirais hipnóticas brancas sobre o líquido escuro de café.",
      "Serve sem misturar previamente para que o cliente aprecie o contraste visual e térmico."
    ],
    "bartender_tip": "Usa natas líquidas de culinária com 30% a 35% de gordura. O leite comum é demasiado ralo e afunda rápido sem criar as espirais aveludadas."
  },
  {
    "id": "black_russian",
    "name": "Black Russian Puro (Vodka & Kahlúa on the Rocks)",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Stirred on the Rocks",
    "description": "O antecessor minimalista do White Russian, criado no Hotel Métropole em Bruxelas em 1949: apenas vodka e licor de café concentrado.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Rocks Baixo",
    "ice": "Gelo em Cubos Grandes",
    "abv": "26% ABV (Escuro & Potente)",
    "badge": "Minimalista Clássico ☕",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Vodka Premium",
        "quantity": "50 ml"
      },
      {
        "name": "Licor de Café (Kahlúa)",
        "quantity": "25 ml"
      },
      {
        "name": "Gelo em Cubos Grandes",
        "quantity": "Cheio no copo"
      },
      {
        "name": "Cereja Maraschino (Opcional)",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Coloca cubos de gelo no copo rocks.",
      "Adiciona a vodka e o licor de café Kahlúa.",
      "Mexe suavemente com a colher bailarina durante 15 segundos para arrefecer e diluir levemente.",
      "Serve direto, ideal como digestivo após o jantar."
    ],
    "bartender_tip": "A proporção ideal é 2:1 (2 partes de vodka para 1 parte de licor de café) para garantir que a doçura do licor não abafa o caráter límpido da vodka."
  },
  {
    "id": "sidecar",
    "name": "Sidecar Clássico com Cognac & Crosta de Açúcar",
    "alcoholic": true,
    "category": "cocktails",
    "categoryLabel": "Cocktails Clássicos 🍸",
    "technique": "Shaken with Sugar Rim",
    "description": "O aristocrata francês com Cognac VSOP, Cointreau e sumo de limão fresco numa taça com borda fina de açúcar cristalizado.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Taça Coupe",
    "ice": "Gelo no Shaker",
    "abv": "25% ABV (Seco & Encorpado)",
    "badge": "Parisiense Nobre 🇫🇷",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Pratinho de Açúcar"
    ],
    "ingredients": [
      {
        "name": "Cognac Francês VSOP (ou Brandy Nobre)",
        "quantity": "50 ml"
      },
      {
        "name": "Licor de Laranja Cointreau",
        "quantity": "25 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Açúcar Branco Fino para a borda",
        "quantity": "Para a crosta"
      },
      {
        "name": "Casca de Laranja",
        "quantity": "Para aromatizar"
      }
    ],
    "steps": [
      "Passa um gomo de limão em metade do bordo da taça coupe e mergulha em açúcar fino.",
      "No shaker com cubos de gelo, junta o Cognac, o Cointreau e o sumo de limão.",
      "Bate energicamente durante 15 segundos.",
      "Coa com coagem dupla para a taça preparada.",
      "Espreme os óleos da casca de laranja sobre o copo e descarta."
    ],
    "bartender_tip": "O açúcar no bordo contrabalança a acidez seca do limão e a força do Cognac, criando um dos cocktails mais elegantes de sempre."
  },
  {
    "id": "gimlet",
    "name": "Gimlet Clássico com Cordial de Lima Artesanal",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Shaken or Stirred Crisp & Cold",
    "description": "Criado pela Marinha Real Britânica no séc. XIX: London Dry Gin misturado com cordial de lima azeda doce e servido estaladiço de frio.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Taça Coupe ou Nick & Nora",
    "ice": "Apenas para bater",
    "abv": "22% ABV (Cítrico & Puro)",
    "badge": "Herança Naval Britânica ⚓",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador Fino",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin de Qualidade",
        "quantity": "60 ml"
      },
      {
        "name": "Cordial de Lima (Lime Cordial) ou Sumo de Lima + Xarope",
        "quantity": "30 ml"
      },
      {
        "name": "Rodela Fina de Lima Fresca",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "No shaker com muito gelo, coloca o gin e o cordial de lima.",
      "Bate energicamente durante 15 segundos.",
      "Coa para uma taça coupe bem gelada.",
      "Pousa delicadamente uma rodela fina de lima a flutuar na superfície."
    ],
    "bartender_tip": "Para fazer o teu próprio Lime Cordial artesanal: junta partes iguais de sumo de lima fresco e açúcar, adicionando as raspas da casca de 2 limas e deixando repousar por 1 hora antes de coar!"
  },
  {
    "id": "rusty_nail",
    "name": "Rusty Nail Escocês (Scotch Whisky & Drambuie)",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Built over Ice in Rocks Glass",
    "description": "O favorito dos membros do Rat Pack nos anos 60: Scotch Whisky misturado com licor escocês Drambuie à base de mel de urze, ervas e especiarias.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Rocks Baixo",
    "ice": "Cubo Único Gigante de Gelo",
    "abv": "32% ABV (Quente & Melado)",
    "badge": "Rat Pack Clássico 🥃",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Blended Scotch Whisky de Qualidade",
        "quantity": "50 ml"
      },
      {
        "name": "Licor Escocês Drambuie",
        "quantity": "25 ml"
      },
      {
        "name": "Casca de Limão Siciliano",
        "quantity": "1 tira longa"
      }
    ],
    "steps": [
      "Coloca o cubo grande de gelo no copo rocks.",
      "Deita o Scotch Whisky e o Drambuie.",
      "Mexe lentamente durante 20 segundos com a colher bailarina para integrar o licor espesso com o whisky.",
      "Torce a casca de limão para libertar óleos essenciais sobre o copo e insere-a junto ao gelo."
    ],
    "bartender_tip": "O Drambuie é feito à base de mel e especiarias secretas da realeza escocesa: o seu toque doce arredonda qualquer aresta do whisky de forma magistral."
  },
  {
    "id": "amaretto_sour",
    "name": "Amaretto Sour de Luxo com Espuma & Bourbon",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Dry Shake & Hard Wet Shake",
    "description": "A versão definitiva de Jeffrey Morgenthaler: licor de amêndoa Disaronno reforçado com Bourbon, limão fresco e espuma sedosa.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Rocks Baixo",
    "ice": "Gelo em Cubos Grandes",
    "abv": "18% ABV (Doce de Amêndoa & Cítrico)",
    "badge": "Perfeição de Barman 🌰",
    "smoking_technique": null,
    "bar_tools": [
      "Boston Shaker",
      "Passador",
      "Zester"
    ],
    "ingredients": [
      {
        "name": "Licor Amaretto Disaronno",
        "quantity": "45 ml"
      },
      {
        "name": "Bourbon Whiskey (Cask Strength / Alta Graduação)",
        "quantity": "20 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "30 ml"
      },
      {
        "name": "Xarope Simples de Açúcar",
        "quantity": "5 ml"
      },
      {
        "name": "Clara de Ovo Fresca",
        "quantity": "15 ml"
      },
      {
        "name": "Cereja Maraschino & Casca de Limão",
        "quantity": "Para guarnição"
      }
    ],
    "steps": [
      "No shaker sem gelo, junta o Amaretto, o Bourbon, o sumo de limão, o xarope e a clara.",
      "Bate a seco durante 15 segundos para criar uma espuma firme.",
      "Adiciona gelo e bate mais 15 segundos até o shaker condensar.",
      "Coa para um copo rocks com gelo fresco.",
      "A espuma branca instala-se como uma nuvem doce.",
      "Decora com uma cereja Maraschino e uma casca de limão."
    ],
    "bartender_tip": "O segredo desta receita mundialmente premiada é adicionar os 20 ml de Bourbon: o álcool e madeira do whiskey cortam a doçura enjoativa do Amaretto comum!"
  },
  {
    "id": "pisco_sour",
    "name": "Pisco Sour Peruano com Espuma & Amargo Chuncho",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Dry Shake & Drops of Chuncho Bitters",
    "description": "A glória nacional do Peru: aguardente de uva Pisco Quebranta, sumo de lima fresca, xarope de goma e clara de ovo com gotas de bitters aromáticos.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Pisco ou Taça Coupe",
    "ice": "Apenas no Shaker",
    "abv": "22% ABV (Cítrico & Aveludado)",
    "badge": "Património Peruano 🇵🇪",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador Fino",
      "Gotero de Bitters"
    ],
    "ingredients": [
      {
        "name": "Pisco Peruano Quebranta",
        "quantity": "60 ml"
      },
      {
        "name": "Sumo de Lima Fresca Acabada de Espremer",
        "quantity": "30 ml"
      },
      {
        "name": "Xarope Simples de Açúcar (Xarope de Goma)",
        "quantity": "20 ml"
      },
      {
        "name": "Clara de Ovo Fresca",
        "quantity": "20 ml"
      },
      {
        "name": "Amargo de Angostura ou Amargo Chuncho",
        "quantity": "3 gotas sobre a espuma"
      }
    ],
    "steps": [
      "No shaker sem gelo, junta o Pisco, a lima, o xarope e a clara de ovo.",
      "Bate a seco com energia durante 15 segundos.",
      "Enche o shaker com cubos de gelo e bate com toda a força por 15 segundos.",
      "Coa para o copo de Pisco gelado.",
      "Espera 5 segundos até a espuma estabilizar.",
      "Aplica 3 gotas de bitters sobre a espuma para neutralizar o aroma da clara e trazer notas de especiarias."
    ],
    "bartender_tip": "A regra clássica do Pisco Sour peruano é a fórmula 3:1:1 (3 partes de pisco, 1 de lima, 1 de xarope)."
  },
  {
    "id": "mint_julep",
    "name": "Mint Julep do Kentucky Derby em Caneca de Prata",
    "alcoholic": true,
    "category": "short",
    "categoryLabel": "Short Drinks 🥃",
    "technique": "Built over Mountains of Crushed Ice with Mint Bouquet",
    "description": "O cocktail oficial das corridas de cavalos de Kentucky desde 1938: Bourbon abundante, hortelã fresca fresca e açúcar numa caneca de metal glaciar.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Caneca Tradicional Julep de Metal/Prata",
    "ice": "Gelo Picado (Crushed Ice) a Transbordar",
    "abv": "28% ABV (Balsâmico & Potente)",
    "badge": "Kentucky Derby 🐎",
    "smoking_technique": null,
    "bar_tools": [
      "Caneca Julep",
      "Muddler",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Bourbon Whiskey de Kentucky",
        "quantity": "65 ml"
      },
      {
        "name": "Xarope Simples de Açúcar de Cana",
        "quantity": "15 ml"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "8 a 10 folhas"
      },
      {
        "name": "Ramo Generoso de Hortelã",
        "quantity": "Para coroa aromática"
      },
      {
        "name": "Açúcar em Pó para polvilhar",
        "quantity": "1 pitada"
      }
    ],
    "steps": [
      "No fundo da caneca de metal, coloca o xarope de açúcar e as folhas de hortelã.",
      "Pressiona muito suavemente com o pilão para libertar os óleos sem despedaçar as folhas.",
      "Adiciona metade da dose de Bourbon e enche a caneca até metade com gelo picado.",
      "Mexe energicamente com a colher bailarina até o exterior da caneca criar uma densa camada de geada branca.",
      "Adiciona o restante Bourbon e preenche com mais gelo picado formando um cone por cima.",
      "Insere um buquê exuberante de hortelã encostado ao gelo, polvilha com açúcar em pó e serve com palhinha curta."
    ],
    "bartender_tip": "A palhinha deve ser curta para que, ao beber, o nariz do cliente fique enterrado no buquê de hortelã fresca, amplificando o aroma a cada gole!"
  },
  {
    "id": "tom_collins",
    "name": "Tom Collins Refrescante (Old Tom Gin & Limonada)",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Shaken Base & Soda Top in Collins Glass",
    "description": "A clássica limonada com gin dos clubes londrinos de 1876: Gin aromático, sumo de limão siciliano, xarope e água com gás efervescente.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Collins",
    "ice": "Gelo em Cubos Grandes",
    "abv": "12% ABV (Refrescante & Cítrico)",
    "badge": "Clássico Collins 🍋",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Old Tom Gin ou London Dry Gin",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "30 ml"
      },
      {
        "name": "Xarope Simples de Açúcar",
        "quantity": "20 ml"
      },
      {
        "name": "Água com Gás Carbonatada",
        "quantity": "80 ml"
      },
      {
        "name": "Rodela de Limão & Cereja Maraschino",
        "quantity": "Para decorar"
      }
    ],
    "steps": [
      "No shaker com cubos de gelo, junta o gin, o sumo de limão e o xarope simples.",
      "Bate com rapidez durante 10 segundos.",
      "Coa para um copo alto Collins repleto de cubos de gelo limpo.",
      "Completa com a água com gás bem fria.",
      "Dá uma suave mexida vertical com a colher bailarina.",
      "Decora com uma rodela de limão no interior e uma cereja Maraschino."
    ],
    "bartender_tip": "O verdadeiro Tom Collins usava tradicionalmente Old Tom Gin, que possui uma doçura botânica ligeira comparado com o London Dry clássico."
  },
  {
    "id": "smoked_rosemary_gin",
    "name": "Gin Defumado com Alecrim em Brasa & Zimbro",
    "alcoholic": true,
    "category": "fumo",
    "categoryLabel": "Fumo Aromático 💨",
    "technique": "Torched Herb Smoking & Direct Infusion",
    "description": "Experiência sensorial botânica: London Dry Gin e água tónica premium aromatizados com um ramo espesso de alecrim fresco queimado com maçarico à frente do cliente.",
    "difficulty": "Média",
    "prep_time": "3 min",
    "glass": "Taça Balão Grande de Cristal",
    "ice": "Cubos Maciços de Gelo Translúcido",
    "abv": "13% ABV (Botânico & Defumado)",
    "badge": "Fumo Botânico 🌿",
    "smoking_technique": "Usa um maçarico culinário diretamente na ponta do ramo verde de alecrim até queimar e formar uma brasa viva incandescente que solta fumo branco espesso. Mergulha a brasa por 2 segundos no topo do drink.",
    "bar_tools": [
      "Maçarico Culinário",
      "Pinça de Barman",
      "Colher Espiralada"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin Botânico",
        "quantity": "50 ml"
      },
      {
        "name": "Água Tónica Premium Gelada",
        "quantity": "150 ml"
      },
      {
        "name": "Ramos de Alecrim Fresco",
        "quantity": "2 unidades"
      },
      {
        "name": "Bagas de Zimbro Ligeiramente Esmagadas",
        "quantity": "4 unidades"
      },
      {
        "name": "Casca de Toranja Rosa",
        "quantity": "1 tira"
      }
    ],
    "steps": [
      "Gela a taça balão com cubos de gelo.",
      "Adiciona o gin e as bagas de zimbro.",
      "Verte a água tónica devagar pela haste da colher bailarina para preservar a bolha.",
      "Pega no ramo de alecrim com uma pinça e acende a ponta com o maçarico até libertar brasas vivas e fumo perfumado.",
      "Pousa o ramo em brasa sobre os cubos de gelo no copo.",
      "Serve imediatamente enquanto o fumo herbal dança sobre a taça."
    ],
    "bartender_tip": "O calor da brasa liberta o pineno e outros óleos essenciais do alecrim, harmonizando de forma sublime com o zimbro do gin."
  },
  {
    "id": "smoked_paloma",
    "name": "Smoked Paloma com Madeira de Macieira & Sal Fumado",
    "alcoholic": true,
    "category": "fumo",
    "categoryLabel": "Fumo Aromático 💨",
    "technique": "Campânula de Vidro com Fumo de Macieira",
    "description": "A refrescância da toranja e tequila mexicana elevada por fumo aromático de lascas de madeira de macieira sob campânula de vidro transparente.",
    "difficulty": "Avançada",
    "prep_time": "5 min",
    "glass": "Copo Alto Highball com Borda de Sal Fumado",
    "ice": "Gelo em Cubos Grandes",
    "abv": "12% ABV (Frutado & Defumado)",
    "badge": "Campânula de Fumo 🍎",
    "smoking_technique": "Coloca o copo pronto sob a campânula de vidro. Introduz fumo de aparas de madeira de macieira com a smoking gun ou queima numa tábua e sela durante 40 segundos.",
    "bar_tools": [
      "Campânula de Vidro",
      "Smoking Gun / Maçarico",
      "Shaker"
    ],
    "ingredients": [
      {
        "name": "Tequila Reposado 100% Agave",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Toranja Rosa Fresco",
        "quantity": "60 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "15 ml"
      },
      {
        "name": "Xarope de Agave",
        "quantity": "15 ml"
      },
      {
        "name": "Água com Gás para completar",
        "quantity": "40 ml"
      },
      {
        "name": "Sal Marinho Fumado para o bordo",
        "quantity": "Para a crosta"
      },
      {
        "name": "Aparas de Madeira de Macieira",
        "quantity": "1 colher de chá"
      }
    ],
    "steps": [
      "Passa lima em metade do bordo do copo e mergulha em sal marinho fumado.",
      "No shaker com gelo, bate a tequila, o sumo de toranja, a lima e o xarope de agave.",
      "Coa para o copo com cubos de gelo limpo e completa com água com gás.",
      "Coloca o copo na base e cobre com a campânula de vidro.",
      "Injeta o fumo denso de madeira de macieira até a campânula ficar completamente opaca e branca.",
      "Deixa infundir durante 35 segundos.",
      "Levanta a campânula à frente do cliente: o fumo dissipa-se e deixa um aroma doce e amadeirado incomparável!"
    ],
    "bartender_tip": "A madeira de macieira tem um fumo frutado e suave que não sobrepõe a acidez da toranja, complementando as notas vegetais da tequila."
  },
  {
    "id": "thyme_bourbon_smoke",
    "name": "Bourbon com Tomilho em Brasa & Xarope de Figo",
    "alcoholic": true,
    "category": "fumo",
    "categoryLabel": "Fumo Aromático 💨",
    "technique": "Torched Fresh Thyme & Inverted Smoked Glass",
    "description": "Uma ode aos sabores rústicos de outono: Bourbon encorpado, compota ou xarope de figo maduro e fumo denso de tomilho fresco em brasa.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Rocks Baixo",
    "ice": "Cubo Único Gigante de Gelo",
    "abv": "27% ABV (Herbal & Amadeirado)",
    "badge": "Assinatura Rústica 🌿",
    "smoking_technique": "Queima ramos de tomilho fresco numa ardósia com maçarico e tapa com o copo virado para baixo durante 1 minuto para capturar a essência terrosa.",
    "bar_tools": [
      "Maçarico",
      "Mixing Glass",
      "Colher Bailarina",
      "Passador"
    ],
    "ingredients": [
      {
        "name": "Bourbon Whiskey",
        "quantity": "60 ml"
      },
      {
        "name": "Xarope Simples de Figo ou Mel",
        "quantity": "15 ml"
      },
      {
        "name": "Sumo de Limão Siciliano",
        "quantity": "10 ml"
      },
      {
        "name": "Angostura Bitters",
        "quantity": "2 dashes"
      },
      {
        "name": "Ramos de Tomilho Fresco",
        "quantity": "3 a 4 ramos"
      }
    ],
    "steps": [
      "Numa ardósia, acende 2 ramos de tomilho com o maçarico até libertar brasas e muito fumo.",
      "Cobre imediatamente com o copo rocks virado ao contrário para aprisionar o fumo.",
      "No mixing glass com gelo, junta o bourbon, o xarope de figo, o sumo de limão e a Angostura. Mexe durante 25 segundos.",
      "Vira o copo (o fumo espesso sai num espetáculo visual!), adiciona o cubo grande de gelo e coa a mistura.",
      "Decora com um ramo fresco de tomilho tostado na ponta e apoia no gelo."
    ],
    "bartender_tip": "O tomilho tem óleos com timol que proporcionam uma nota herbácea profunda que combina de forma celestial com o carvalho do bourbon."
  },
  {
    "id": "monster_mango_vodka",
    "name": "Monster Mango Loco com Vodka & Lima",
    "alcoholic": true,
    "category": "energy",
    "categoryLabel": "Misturas Energéticas ⚡",
    "technique": "Built over Ice with Mint Slap",
    "description": "Fusão tropical extrema: Monster Energy Mango Loco sumarento com Vodka destilada, sumo de lima fresca e folhas de hortelã estaladas.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Abundante",
    "abv": "12% ABV (Tropical & Estimulante)",
    "badge": "Sabor Extremo 🥭",
    "smoking_technique": null,
    "bar_tools": [
      "Jigger",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Vodka Premium",
        "quantity": "50 ml"
      },
      {
        "name": "Monster Energy Mango Loco Bem Frio",
        "quantity": "150 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "15 ml"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "6 folhas"
      },
      {
        "name": "Gelo em Cubos",
        "quantity": "Cheio no copo"
      }
    ],
    "steps": [
      "Enche o copo com cubos de gelo até cima.",
      "Adiciona a vodka e o sumo de lima acabado de espremer.",
      "Dá uma palmada na hortelã e junta ao copo.",
      "Completa com o Monster Mango Loco gelado.",
      "Dá uma suave mexida vertical com a colher bailarina.",
      "Serve com palhinha."
    ],
    "bartender_tip": "O Monster Mango Loco já contém sumos naturais de manga e maracujá na sua composição, criando um long drink equilibrado e encorpado sem necessidade de xaropes extra."
  },
  {
    "id": "redbull_watermelon_fizz",
    "name": "Red Bull Watermelon com Gin & Manjericão",
    "alcoholic": true,
    "category": "energy",
    "categoryLabel": "Misturas Energéticas ⚡",
    "technique": "Muddled Basil & Built over Ice",
    "description": "Elegância e energia: Red Bull Red Edition (Melancia), Gin botânico, folhas frescas de manjericão e gotas de sumo de lima fresca.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Taça Balão ou Copo Alto",
    "ice": "Gelo em Cubos Grandes",
    "abv": "12% ABV (Refrescante & Doce)",
    "badge": "Vermelho Vibrante 🍉",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "London Dry Gin",
        "quantity": "50 ml"
      },
      {
        "name": "Red Bull Red Edition (Melancia)",
        "quantity": "140 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "15 ml"
      },
      {
        "name": "Folhas de Manjericão Fresco",
        "quantity": "4 folhas"
      },
      {
        "name": "Fatia Triangular de Melancia",
        "quantity": "Para guarnição"
      }
    ],
    "steps": [
      "No fundo do copo, pressiona as folhas de manjericão com o sumo de lima para soltar os aromas.",
      "Enche o copo com cubos de gelo.",
      "Adiciona o Gin.",
      "Completa com o Red Bull de Melancia bem gelado.",
      "Mexe levemente com a colher bailarina.",
      "Encaixa o triângulo de melancia no bordo e serve."
    ],
    "bartender_tip": "O manjericão corta o açúcar doce da melancia e confere uma assinatura fresca de bar gourmet a esta mistura energética."
  },
  {
    "id": "energy_blue_kamikaze",
    "name": "Energy Blue Kamikaze (Shot Duplo Energético)",
    "alcoholic": true,
    "category": "energy",
    "categoryLabel": "Misturas Energéticas ⚡",
    "technique": "Shaken Base & Energy Drop",
    "description": "A cor azul néon mais vibrante da noite: Vodka, Blue Curaçao e sumo de lima batidos e cobertos com Red Bull efervescente.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Rocks ou Copos de Shot Duplos",
    "ice": "Gelo no Shaker",
    "abv": "16% ABV (Elétrico & Cítrico)",
    "badge": "Néon da Noite ⚡",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Vodka",
        "quantity": "40 ml"
      },
      {
        "name": "Licor Blue Curaçao",
        "quantity": "20 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "15 ml"
      },
      {
        "name": "Red Bull Original Gelado",
        "quantity": "60 ml"
      }
    ],
    "steps": [
      "No shaker com gelo, bate a vodka, o Blue Curaçao e o sumo de lima por 10 segundos.",
      "Coa para um copo rocks com cubos de gelo ou divide por dois copos de shot grandes.",
      "Completa com o Red Bull gelado por cima.",
      "Bebe de imediato para sentir a efervescência azul cítrica."
    ],
    "bartender_tip": "Visualmente deslumbrante sob luzes negras de discoteca devido à fluorescência natural dos ingredientes cítricos!"
  },
  {
    "id": "monster_ultra_spritz",
    "name": "Monster Ultra Spritz com Espumante (Zero Açúcar)",
    "alcoholic": true,
    "category": "energy",
    "categoryLabel": "Misturas Energéticas ⚡",
    "technique": "Spritz Build over Ice",
    "description": "Para quem quer energia sem calorias de açúcar: Monster Ultra White cítrico com Espumante Brut e rodela de toranja fresca.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Taça de Vinho Grande",
    "ice": "Gelo em Cubos Grandes",
    "abv": "9% ABV (Leve & Efervescente)",
    "badge": "Zero Açúcar Adicionado ⚡",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Vinho Espumante Brut Gelado",
        "quantity": "90 ml"
      },
      {
        "name": "Monster Ultra White (Sem Açúcar)",
        "quantity": "90 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "10 ml"
      },
      {
        "name": "Fatia de Toranja Rosa ou Limão",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Enche a taça de vinho com cubos de gelo.",
      "Deita o sumo de lima e o espumante Brut.",
      "Adiciona o Monster Ultra White lentamente.",
      "Dá uma meia volta com a colher bailarina para preservar a bolha.",
      "Guarnece com a rodela de toranja rosa."
    ],
    "bartender_tip": "O sabor cítrico suave do Monster Ultra substitui a necessidade de refrigerantes açucarados, criando um spritz moderno e estaladiço."
  },
  {
    "id": "tequila_slammer",
    "name": "Tequila Slammer (O Shot do Estrondo no Balcão)",
    "alcoholic": true,
    "category": "shots",
    "categoryLabel": "Shots 🎯",
    "technique": "Slam & Foam Explosion",
    "description": "O ritual mais divertido de bar: Tequila Blanco com refrigerante gasoso coberto com a mão e batido com força no balcão para espumar instantaneamente.",
    "difficulty": "Fácil",
    "prep_time": "1 min",
    "glass": "Copo de Shot Resistente ou Rocks Baixo",
    "ice": "Sem Gelo",
    "abv": "20% ABV (Efervescente & Divertido)",
    "badge": "Estrondo no Balcão 💥",
    "smoking_technique": null,
    "bar_tools": [
      "Guardanapo de Bar",
      "Copo de Shot Grosso"
    ],
    "ingredients": [
      {
        "name": "Tequila Blanco 100% Agave",
        "quantity": "30 ml"
      },
      {
        "name": "Refrigerante Sprite/7Up ou Água Tónica com Gás",
        "quantity": "30 ml"
      }
    ],
    "steps": [
      "Num copo de shot resistente, coloca a tequila e o refrigerante gasoso em partes iguais.",
      "Dobra um guardanapo de papel limpo e tapa a boca do copo firmemente com a palma da mão para selar todo o ar.",
      "Bate o fundo do copo uma vez com firmeza contra o balcão do bar (ou sobre uma base de borracha).",
      "O choque físico liberta todo o gás carbónico subitamente, transformando o líquido numa espuma branca densa instantânea.",
      "Retira a mão e bebe de imediato de um só trago enquanto espuma e borbulha na boca!"
    ],
    "bartender_tip": "Usa sempre copos de shot com base reforçada e espessa para nunca partir o vidro no balcão!"
  },
  {
    "id": "lemon_drop_shot",
    "name": "Lemon Drop Shot com Limão Açucarado",
    "alcoholic": true,
    "category": "shots",
    "categoryLabel": "Shots 🎯",
    "technique": "Hard Shaken with Sugar-Coated Lemon Ritual",
    "description": "O shot doce e ácido mais pedido: vodka e triple sec batidos com lima, acompanhados por uma rodela de limão mergulhada em açúcar mascavado para morder.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo de Shot",
    "ice": "Apenas para bater",
    "abv": "24% ABV (Cítrico & Caramelizado)",
    "badge": "Ritual Clássico 🍋",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Tábua e Faca"
    ],
    "ingredients": [
      {
        "name": "Vodka Cítrica",
        "quantity": "35 ml"
      },
      {
        "name": "Sumo de Limão Fresco",
        "quantity": "15 ml"
      },
      {
        "name": "Xarope Simples de Açúcar",
        "quantity": "10 ml"
      },
      {
        "name": "Rodela Grossa de Limão",
        "quantity": "1 unidade"
      },
      {
        "name": "Açúcar Mascavado ou Branco",
        "quantity": "1 colher de sopa"
      }
    ],
    "steps": [
      "No shaker com cubos de gelo, bate a vodka, o sumo de limão e o xarope simples por 10 segundos.",
      "Coa para o copo de shot.",
      "Passa um lado da rodela de limão pelo açúcar mascavado.",
      "Apoia a rodela açucarada no topo do copo de shot.",
      "Ritual de consumo: bebe o shot de uma vez e morde imediatamente a rodela de limão açucarada para uma explosão doce-cítrica memorável!"
    ],
    "bartender_tip": "O contraste da acidez pura do limão com os cristais de açúcar na língua cria uma sensação de paladar viciante."
  },
  {
    "id": "flatliner_shot",
    "name": "Flatliner Shot (Sambuca, Tabasco & Tequila)",
    "alcoholic": true,
    "category": "shots",
    "categoryLabel": "Shots 🎯",
    "technique": "Layered with Spicy Tabasco Line",
    "description": "Para os mais corajosos: uma camada de Sambuca doce com anis no fundo, uma linha vermelha picante de molho Tabasco no meio e Tequila no topo.",
    "difficulty": "Média",
    "prep_time": "2 min",
    "glass": "Copo de Shot Fino",
    "ice": "Sem Gelo",
    "abv": "35% ABV (Doce & Picante Extremo)",
    "badge": "Desafio Picante 🌶️",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Gotero de Tabasco"
    ],
    "ingredients": [
      {
        "name": "Licor de Sambuca Branca",
        "quantity": "25 ml"
      },
      {
        "name": "Molho Tabasco Original Picante",
        "quantity": "4 a 5 gotas"
      },
      {
        "name": "Tequila Blanco ou Reposado",
        "quantity": "25 ml"
      }
    ],
    "steps": [
      "No fundo do copo de shot, deita a Sambuca doce.",
      "Com muito cuidado, pinga 4 a 5 gotas de molho Tabasco vermelho diretamente no centro: as gotas assentam sobre a densa Sambuca formando uma linha horizontal (\"flatline\").",
      "Pelas costas da colher bailarina, verte a Tequila lentamente por cima.",
      "A linha picante de Tabasco fica perfeitamente suspensa entre a Sambuca e a Tequila.",
      "Bebe de um só gole: primeiro sentes a Tequila, depois a explosão picante do Tabasco e no fim o alívio doce da Sambuca!"
    ],
    "bartender_tip": "O nome \"Flatliner\" vem da linha vermelha contínua do Tabasco que parece o traçado plano de um monitor cardíaco de hospital!"
  },
  {
    "id": "mexican_hot_chocolate",
    "name": "Chocolate Quente Mexicano com Mezcal & Canela",
    "alcoholic": true,
    "category": "hot",
    "categoryLabel": "Hot Drinks ☕",
    "technique": "Simmered Spiced Cocoa & Mezcal Stir",
    "description": "A tradição asteca em versão de bar: chocolate negro 70% derretido em leite gordo com canela de ceilão, pitada de pimenta caiena e Mezcal defumado.",
    "difficulty": "Fácil",
    "prep_time": "6 min",
    "glass": "Caneca Rústica de Barro ou Cerâmica",
    "ice": "Sem Gelo (Fumegante)",
    "abv": "12% ABV (Aveludado & Picante)",
    "badge": "Tradição Asteca 🍫",
    "smoking_technique": null,
    "bar_tools": [
      "Tacho Pequeno",
      "Batedor de Arame",
      "Caneca"
    ],
    "ingredients": [
      {
        "name": "Chocolate Negro 70% em Pedaços",
        "quantity": "50 g"
      },
      {
        "name": "Leite Gordo ou Bebida de Aveia",
        "quantity": "150 ml"
      },
      {
        "name": "Mezcal Artesanal ou Tequila Añejo",
        "quantity": "40 ml"
      },
      {
        "name": "Canela em Pó de Ceilão",
        "quantity": "1/2 colher de chá"
      },
      {
        "name": "Pimenta Caiena ou Chili em Pó",
        "quantity": "1 leve pitada"
      },
      {
        "name": "Açúcar Mascavado",
        "quantity": "1 colher de sopa"
      },
      {
        "name": "Mini Marshmallows ou Pau de Canela",
        "quantity": "Para finalizar"
      }
    ],
    "steps": [
      "Num tacho em lume brando, aquece o leite com o açúcar mascavado, a canela e a pitada de pimenta caiena.",
      "Adiciona os pedaços de chocolate negro e mexe continuamente com o batedor de arame até derreter por completo e espumar.",
      "Retira do lume e junta a dose de Mezcal defumado.",
      "Verte para a caneca de barro aquecida.",
      "Cobre com mini marshmallows ou mexe com um pau de canela.",
      "Serve bem quente."
    ],
    "bartender_tip": "O toque minúsculo de pimenta caiena ativa as papilas gustativas e potencia o sabor do cacau e as notas fumadas do Mezcal."
  },
  {
    "id": "cafe_calypso",
    "name": "Café Calypso com Rum Jamaicano & Tia Maria",
    "alcoholic": true,
    "category": "hot",
    "categoryLabel": "Hot Drinks ☕",
    "technique": "Hot Coffee Infusion & Hand-Whipped Cream Float",
    "description": "A resposta caribenha ao Irish Coffee: café quente expresso longo, Rum escuro jamaicano envelhecido, licor de café Tia Maria e coroa de natas batidas.",
    "difficulty": "Média",
    "prep_time": "4 min",
    "glass": "Copo Toddy de Vidro com Pé",
    "ice": "Sem Gelo (Servido Quente)",
    "abv": "15% ABV (Encorpado & Quente)",
    "badge": "Caribe Quente 🏝️",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Shaker para bater natas",
      "Cafeteira"
    ],
    "ingredients": [
      {
        "name": "Rum Escuro Jamaicano Encorpado",
        "quantity": "35 ml"
      },
      {
        "name": "Licor de Café Tia Maria",
        "quantity": "20 ml"
      },
      {
        "name": "Café Expresso Quente Duplo",
        "quantity": "100 ml"
      },
      {
        "name": "Açúcar de Cana Mascavado",
        "quantity": "1 colher de sopa"
      },
      {
        "name": "Natas Frescas Líquidas Frias",
        "quantity": "40 ml"
      },
      {
        "name": "Cacau em Pó para polvilhar",
        "quantity": "1 pitada"
      }
    ],
    "steps": [
      "Escalda o copo de vidro com água a ferver e descarta a água.",
      "No copo quente, dissolve o açúcar mascavado com o café acabado de tirar.",
      "Adiciona o rum escuro e o licor Tia Maria.",
      "Mexe energicamente até tudo estar incorporado.",
      "Bate as natas frias num shaker sem gelo até ficarem aveludadas.",
      "Encosta a colher à superfície e deita as natas para flutuarem suavemente.",
      "Polvilha com cacau em pó e serve sem colher."
    ],
    "bartender_tip": "O rum jamaicano traz notas de melaço e banana madura que enriquecem o café de forma muito mais exótica que o whiskey tradicional."
  },
  {
    "id": "mulled_apple_cider",
    "name": "Cidra Quente de Maçã com Especiarias & Bourbon",
    "alcoholic": true,
    "category": "hot",
    "categoryLabel": "Hot Drinks ☕",
    "technique": "Simmered Spiced Cider with Bourbon Spike",
    "description": "O aroma aconchegante de outono: sumo de maçã natural e cidra cozinhados com paus de canela, cravinho, casca de laranja e finalizados com Bourbon.",
    "difficulty": "Fácil",
    "prep_time": "8 min",
    "glass": "Caneca de Vidro com Pega",
    "ice": "Sem Gelo (Fumegante)",
    "abv": "11% ABV (Doce & Especiado)",
    "badge": "Conforto de Outono 🍎",
    "smoking_technique": null,
    "bar_tools": [
      "Tacho Pequeno",
      "Concha",
      "Passador"
    ],
    "ingredients": [
      {
        "name": "Sumo de Maçã 100% Natural ou Cidra de Maçã",
        "quantity": "180 ml"
      },
      {
        "name": "Bourbon Whiskey",
        "quantity": "40 ml"
      },
      {
        "name": "Pau de Canela",
        "quantity": "1 unidade"
      },
      {
        "name": "Cravinhos-da-Índia",
        "quantity": "3 unidades"
      },
      {
        "name": "Anis Estrelado",
        "quantity": "1 estrela"
      },
      {
        "name": "Casca e Rodela de Laranja Fresca",
        "quantity": "1 unidade"
      },
      {
        "name": "Mel Puro",
        "quantity": "1 colher de sopa"
      }
    ],
    "steps": [
      "Num tacho pequeno, junta o sumo de maçã, o mel, os cravinhos, o pau de canela, o anis e a casca de laranja.",
      "Deixa ferver suavemente em lume muito brando durante 6 a 8 minutos para as especiarias libertarem todos os óleos.",
      "Retira do lume e junta a dose de Bourbon.",
      "Coa diretamente para a caneca de vidro aquecida.",
      "Decora com o pau de canela e uma rodela de maçã fresca a boiar."
    ],
    "bartender_tip": "Podes omitir o Bourbon para obter uma versão 100% sem álcool deliciosa para crianças e toda a família em noites frias!"
  },
  {
    "id": "shirley_temple",
    "name": "Shirley Temple (O Primeiro Mocktail da História)",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Built over Ice with Grenadine Float",
    "description": "Criado nos anos 1930 para a atriz mirim de Hollywood: Ginger Ale borbulhante ou gasosa, sumo de lima fresco e xarope de groselha com cereja Maraschino.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "História de Hollywood 🎬",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Ginger Ale ou Gasosa / Sprite",
        "quantity": "150 ml"
      },
      {
        "name": "Xarope de Groselha (Grenadine)",
        "quantity": "20 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "15 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Cheios no copo"
      },
      {
        "name": "Cerejas Maraschino com Pé",
        "quantity": "2 unidades"
      }
    ],
    "steps": [
      "Enche o copo alto com cubos de gelo.",
      "Adiciona o sumo de lima fresca e o Ginger Ale gelado.",
      "Deita o xarope de groselha no centro: ele afunda suavemente criando um lindo degradé rosa e rubi.",
      "Pousa 2 cerejas Maraschino no topo.",
      "Serve com palhinha."
    ],
    "bartender_tip": "O toque de sumo de lima fresca corta o doce excessivo da groselha, tornando este clássico adorado tanto por adultos como por crianças."
  },
  {
    "id": "virgin_mary",
    "name": "Virgin Mary Nutritivo com Aipo & Especiarias",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Roll Mix (Rolado de um Copo para o Outro)",
    "description": "A versão sem álcool do Bloody Mary: sumo de tomate concentrado, sumo de limão, molho inglês Worcestershire, Tabasco, sal de aipo e talo de aipo crocante.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Highball com Borda de Sal de Aipo",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Revigorante & Salgado 🍅",
    "smoking_technique": null,
    "bar_tools": [
      "Copo Misturador",
      "Passador",
      "Tábua"
    ],
    "ingredients": [
      {
        "name": "Sumo de Tomate 100% Puro",
        "quantity": "150 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Molho Inglês (Worcestershire)",
        "quantity": "4 dashes"
      },
      {
        "name": "Molho Tabasco Picante",
        "quantity": "2 dashes"
      },
      {
        "name": "Sal de Aipo e Pimenta Preta Moída na Hora",
        "quantity": "1 pitada de cada"
      },
      {
        "name": "Talo de Aipo Fresco Crocante com Folhas",
        "quantity": "1 unidade"
      },
      {
        "name": "Azeitona Verde e Rodela de Limão",
        "quantity": "Para guarnição"
      }
    ],
    "steps": [
      "Passa limão na borda do copo e mergulha em sal de aipo e pimenta preta.",
      "No shaker com gelo, junta o sumo de tomate, limão, molho inglês, Tabasco, sal e pimenta.",
      "Técnica do Rolling: verte suavemente o líquido de um shaker para outro 4 vezes para misturar e gelar sem espumar nem quebrar a viscosidade do tomate.",
      "Coa para o copo alto com cubos de gelo fresco.",
      "Insere o talo de aipo crocante no copo (serve de mexedor natural) e a azeitona verde espetada num palito."
    ],
    "bartender_tip": "Nunca agites o sumo de tomate com força no shaker! Agitar com gelo deixa o tomate aquoso e cheio de espuma espessa indesejada. O método de \"rolar\" o líquido é a técnica correta de barman."
  },
  {
    "id": "cinderella_mocktail",
    "name": "Cinderella Mocktail Tropical (Três Sumos & Groselha)",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Shaken with Sparkling Water Top",
    "description": "A harmonia clássica sem álcool dos bares de hotel: proporções iguais de sumo de laranja, ananás e limão batidos e finalizados com soda e grenadine.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Hurricane ou Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Refrescância Tropical 🍍",
    "smoking_technique": null,
    "bar_tools": [
      "Shaker",
      "Passador",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Sumo de Laranja Fresco",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Ananás Natural",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Limão Fresco",
        "quantity": "30 ml"
      },
      {
        "name": "Xarope de Groselha (Grenadine)",
        "quantity": "15 ml"
      },
      {
        "name": "Água com Gás ou Ginger Ale",
        "quantity": "50 ml"
      },
      {
        "name": "Rodela de Laranja & Ananás",
        "quantity": "Para guarnecer"
      }
    ],
    "steps": [
      "No shaker com cubos de gelo, junta os sumos de laranja, ananás e limão com a groselha.",
      "Bate vigorosamente durante 15 segundos.",
      "Coa para o copo com cubos de gelo fresco.",
      "Completa com a água com gás ou Ginger Ale para dar efervescência.",
      "Decora com meia rodela de laranja e triângulo de ananás."
    ],
    "bartender_tip": "Um clássico internacional que agrada a todas as idades pelo seu perfeito equilíbrio cítrico e doce."
  },
  {
    "id": "blue_ocean_fizz",
    "name": "Blue Ocean Fizz (Curaçao Azul Sem Álcool & Hortelã)",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Built with Ocean Gradient",
    "description": "A cor hipnotizante das águas do Caribe sem qualquer álcool: xarope de Blue Curaçao sem álcool, sumo de lima fresca, água tónica e folhas de hortelã.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Cristalinos",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Azul do Mar 🌊",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Xarope de Blue Curaçao (0.0% Álcool)",
        "quantity": "25 ml"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "20 ml"
      },
      {
        "name": "Água Tónica ou Sprite/Gasosa",
        "quantity": "150 ml"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "5 folhas"
      },
      {
        "name": "Rodela de Lima e Mirtilos",
        "quantity": "Para flutuar"
      }
    ],
    "steps": [
      "Enche o copo com cubos de gelo.",
      "Deita o sumo de lima fresca e a hortelã estalada.",
      "Completa com a água tónica ou gasosa gelada.",
      "No final, verte o xarope de Blue Curaçao lentamente no centro: ele desce como uma corrente marinha azul profunda.",
      "Decora com mirtilos e uma rodela de lima fresca."
    ],
    "bartender_tip": "Perfeito para festas de verão, sessões de fotos e convidados que não consom álcool mas querem um drink vistoso e festivo!"
  },
  {
    "id": "tropical_sunrise_virgin",
    "name": "Tropical Sunrise Virgin (Manga, Maracujá & Laranja)",
    "alcoholic": false,
    "category": "mocktails",
    "categoryLabel": "Mocktails (Virgin) 🍹",
    "technique": "Multi-Fruit Layering",
    "description": "Uma explosão de cores solares: néctar de manga madura, polpa de maracujá fresco, sumo de laranja prensado e efeito pôr do sol com grenadine.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto ou Hurricane",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Pôr do Sol Tropical 🌅",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Faca de Fruta"
    ],
    "ingredients": [
      {
        "name": "Néctar ou Sumo de Manga Natural",
        "quantity": "60 ml"
      },
      {
        "name": "Sumo de Laranja Fresco",
        "quantity": "60 ml"
      },
      {
        "name": "Polpa Fresca de Maracujá com Sementes",
        "quantity": "1/2 maracujá"
      },
      {
        "name": "Xarope de Groselha (Grenadine)",
        "quantity": "15 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "Enche o copo com cubos de gelo.",
      "Deita o sumo de laranja e o néctar de manga e mexe suavemente.",
      "Coloca a polpa de maracujá fresco por cima.",
      "Verte o xarope de groselha na borda interior do copo: ela desce para o fundo formando o pôr do sol.",
      "Serve com palhinha."
    ],
    "bartender_tip": "As sementes crocantes do maracujá fresco trazem uma textura sensorial maravilhosa a cada golo."
  },
  {
    "id": "affogato_al_caffe",
    "name": "Affogato al Caffè Italiano com Gelado de Baunilha",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Direct Hot Espresso Pour over Artisanal Gelato",
    "description": "A sobremesa líquida mais amada de Itália: uma bola densa de gelado artesanal de baunilha afogada num café expresso duplo quente e cremoso.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Baixo de Vidro ou Taça de Sobremesa",
    "ice": "Sem Gelo (Choque Térmico com Gelado)",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Clássico Italiano 🍨",
    "smoking_technique": null,
    "bar_tools": [
      "Colher de Gelado",
      "Máquina de Café Expresso"
    ],
    "ingredients": [
      {
        "name": "Gelado Artesanal de Baunilha ou Nata",
        "quantity": "1 bola generosa bem firme"
      },
      {
        "name": "Café Expresso Quente Acabado de Tirar",
        "quantity": "35 ml (1 bica curta e forte)"
      },
      {
        "name": "Amêndoas Torradas Laminadas ou Chocolate Ralado",
        "quantity": "1 colher de chá"
      }
    ],
    "steps": [
      "Garante que o gelado está bem firme e frio.",
      "Coloca a bola de gelado no fundo de um copo de vidro transparente.",
      "Tira um café expresso duplo curto, bem denso e quente.",
      "À frente do cliente, verte o café expresso fumegante diretamente sobre o cimo da bola de gelado.",
      "O choque térmico começa a derreter o exterior do gelado criando uma calda aveludada instantânea.",
      "Polvilha com as amêndoas torradas ou raspas de chocolate e serve com colher."
    ],
    "bartender_tip": "Podes torná-lo alcoólico (\"Affogato Corretto\") adicionando 15 ml de licor Amaretto ou Baileys sobre o gelado antes do café!"
  },
  {
    "id": "frappe_grego",
    "name": "Café Frappé Grego Tradicional com Espuma Alta",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Electric Frother / Hard Shake for Thick Foam Head",
    "description": "O símbolo do estilo de vida das praias gregas: café solúvel Nescafé batido com água fria e gelo até formar uma espuma cremosa gigante de vários centímetros.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Collins",
    "ice": "Cubos Grandes de Gelo",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Verão Grego 🇬🇷",
    "smoking_technique": null,
    "bar_tools": [
      "Misturador Elétrico de Espuma / Shaker",
      "Palhinha Longa"
    ],
    "ingredients": [
      {
        "name": "Café Solúvel Clássico",
        "quantity": "2 colheres de chá cheias"
      },
      {
        "name": "Açúcar Branco (ou a gosto)",
        "quantity": "2 colheres de chá"
      },
      {
        "name": "Água Fria Mineral",
        "quantity": "30 ml para bater + água para completar"
      },
      {
        "name": "Leite Fresco Gelado (Opcional, estilo \"Me Gala\")",
        "quantity": "40 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "4 a 5 cubos"
      }
    ],
    "steps": [
      "Num shaker ou misturador com 30 ml de água fria, junta o café solúvel e o açúcar.",
      "Bate intensamente durante 20 segundos até todo o líquido virar uma espuma densa, bege e firme.",
      "No copo alto, coloca cubos de gelo.",
      "Verte a espuma para dentro do copo.",
      "Adiciona água fria (e um fio de leite gelado se preferires mais suave) por debaixo da espuma com cuidado.",
      "A espuma sobe e fica como uma coroa aveludada.",
      "Serve com palhinha."
    ],
    "bartender_tip": "Apenas o café solúvel com processo de secagem por pulverização produz esta espuma incrivelmente elástica e persistente que dura horas ao sol."
  },
  {
    "id": "lassi_morango",
    "name": "Lassi Cremoso de Morango com Água de Rosas",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Blended Yogurt & Rosewater Infusion",
    "description": "Refresco aromático exótico: morangos naturais batidos com iogurte cremoso, leite gelado, açúcar e uma gota de água de rosas biológica.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Tumbler",
    "ice": "Gelo em Cubos",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Aroma a Rosas 🌹",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador"
    ],
    "ingredients": [
      {
        "name": "Morangos Frescos Maduros",
        "quantity": "120 g"
      },
      {
        "name": "Iogurte Natural Cremoso",
        "quantity": "150 g"
      },
      {
        "name": "Leite Fresco Gordo",
        "quantity": "60 ml"
      },
      {
        "name": "Açúcar Simples ou Mel",
        "quantity": "2 colheres de sopa"
      },
      {
        "name": "Água de Rosas Alimentar Biológica",
        "quantity": "2 a 3 gotas"
      },
      {
        "name": "Pétalas de Rosa Secas Comestíveis",
        "quantity": "Para o topo"
      }
    ],
    "steps": [
      "No liquidificador, junta os morangos, o iogurte natural, o leite, o açúcar, as gotas de água de rosas e 3 cubos de gelo.",
      "Bate na velocidade máxima durante 30 segundos até ficar completamente homogéneo e cremoso.",
      "Verte para o copo alto.",
      "Decora com algumas pétalas de rosa comestíveis e um morango no bordo.",
      "Serve bem fresco."
    ],
    "bartender_tip": "A água de rosas é muito potente: apenas 2 a 3 gotas são suficientes para dar uma elegância floral sublime sem parecer artificial."
  },
  {
    "id": "agua_fresca_melancia",
    "name": "Água Fresca Mexicana de Melancia & Hortelã",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Cold Blended & Fine Strained Refresher",
    "description": "A bebida dos mercados mexicanos para matar a sede: melancia fresca triturada com água mineral pura, sumo de lima fresco e folhas de hortelã.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Jarro de Vidro ou Copo Alto",
    "ice": "Cubos Grandes de Gelo",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Super Hidratante 🍉",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador",
      "Passador"
    ],
    "ingredients": [
      {
        "name": "Melancia Vermelha Fresca sem pevides",
        "quantity": "300 g"
      },
      {
        "name": "Água Mineral Bem Fresca",
        "quantity": "150 ml"
      },
      {
        "name": "Sumo de Lima Fresco",
        "quantity": "25 ml"
      },
      {
        "name": "Folhas de Hortelã Fresca",
        "quantity": "6 folhas"
      },
      {
        "name": "Açúcar de Cana ou Xarope de Agave (Opcional)",
        "quantity": "1 colher de sopa"
      }
    ],
    "steps": [
      "Corta a melancia em cubos e remove as pevides.",
      "No liquidificador, junta a melancia, a água fria, o sumo de lima e o açúcar.",
      "Tritura durante 30 segundos.",
      "Coa através de um passador para retirar o excesso de polpa e obter um líquido límpido e refrescante.",
      "Serve num copo cheio de gelo com folhas de hortelã fresca e uma fatia triangular de melancia no bordo."
    ],
    "bartender_tip": "A melancia tem 92% de água natural rica em licopeno e potássio, sendo a bebida mais hidratante e revitalizante para dias tórridos de praia."
  },
  {
    "id": "soda_maca_verde",
    "name": "Soda Italiana de Maçã Verde & Manjericão",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Layered Italian Soda Build",
    "description": "Efervescente, aromática e estaladiça: xarope artesanal de maçã verde, sumo de limão siciliano fresco, água com gás e folhas de manjericão.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto Highball",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Soda Italiana 🍏",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Xarope de Maçã Verde (Green Apple Syrup)",
        "quantity": "30 ml"
      },
      {
        "name": "Sumo de Limão Siciliano Fresco",
        "quantity": "15 ml"
      },
      {
        "name": "Água com Gás com Gás Vigoroso",
        "quantity": "160 ml"
      },
      {
        "name": "Fatias Finas de Maçã Verde Granny Smith",
        "quantity": "3 fatias"
      },
      {
        "name": "Folhas de Manjericão Fresco",
        "quantity": "Para guarnecer"
      }
    ],
    "steps": [
      "No fundo do copo, deita o xarope de maçã verde e o sumo de limão siciliano.",
      "Enche o copo com cubos de gelo.",
      "Insere as fatias de maçã verde encostadas à parede de vidro.",
      "Completa com a água com gás bem fria vertida suavemente.",
      "Mexe de baixo para cima uma só vez com a colher bailarina.",
      "Decora com uma folha de manjericão no topo."
    ],
    "bartender_tip": "A combinação da maçã verde crocante com a frescura botânica do manjericão é uma das maiores tendências dos bares modernos de café."
  },
  {
    "id": "cha_gelado_jasmim_lichia",
    "name": "Chá Gelado de Jasmim com Polpa de Líchia",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Cold Brewed Floral Tea Infusion",
    "description": "Elegância oriental: infusão fria de flores de jasmim perfumadas com néctar e polpa de líchias suculentas e um toque de hortelã.",
    "difficulty": "Fácil",
    "prep_time": "4 min",
    "glass": "Copo Alto de Vidro Fino",
    "ice": "Gelo em Cubos",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Floral Nobre 🌸",
    "smoking_technique": null,
    "bar_tools": [
      "Bule / Infusor",
      "Passador",
      "Colher"
    ],
    "ingredients": [
      {
        "name": "Chá Verde com Flores de Jasmim Infundido e Gelado",
        "quantity": "160 ml"
      },
      {
        "name": "Sumo ou Xarope de Líchia",
        "quantity": "40 ml"
      },
      {
        "name": "Líchias Frescas ou em Calda Inteiras",
        "quantity": "2 unidades"
      },
      {
        "name": "Sumo de Lima Fresca",
        "quantity": "10 ml"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Abundante"
      }
    ],
    "steps": [
      "Prepara o chá verde de jasmim e deixa arrefecer totalmente no frio.",
      "No copo com cubos de gelo, coloca as duas líchias inteiras no fundo.",
      "Adiciona o sumo de líchia e o sumo de lima fresca.",
      "Completa com o chá de jasmim bem gelado.",
      "Mexe levemente com a colher bailarina e serve com palhinha."
    ],
    "bartender_tip": "As flores de jasmim conferem um perfume doce natural que dispensa grandes quantidades de açúcar, mantendo o chá incrivelmente leve e sofisticado."
  },
  {
    "id": "horchata_mexicana",
    "name": "Horchata Mexicana Tradicional de Arroz & Canela",
    "alcoholic": false,
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
    "technique": "Soaked Rice & Cinnamon Artisan Milk",
    "description": "A histórica bebida leitosa vegetal mexicana: arroz cru e amêndoas demolhados com canela, triturados e coados com baunilha e açúcar sobre gelo.",
    "difficulty": "Média",
    "prep_time": "10 min",
    "glass": "Copo Alto de Vidro",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Tradição Mexicana 🌾",
    "smoking_technique": null,
    "bar_tools": [
      "Liquidificador Potente",
      "Pano de Filtragem / Passador Fino"
    ],
    "ingredients": [
      {
        "name": "Arroz Branco Cru (demolhado com canela)",
        "quantity": "100 g"
      },
      {
        "name": "Amêndoas sem Pele",
        "quantity": "30 g"
      },
      {
        "name": "Paus de Canela",
        "quantity": "1 unidade"
      },
      {
        "name": "Água Mineral",
        "quantity": "500 ml"
      },
      {
        "name": "Extrato de Baunilha Natural",
        "quantity": "1 colher de chá"
      },
      {
        "name": "Leite Condensado ou Açúcar Mascavado",
        "quantity": "3 a 4 colheres de sopa"
      },
      {
        "name": "Canela em Pó para polvilhar",
        "quantity": "Para finalizar"
      }
    ],
    "steps": [
      "Demolha o arroz, as amêndoas e o pau de canela partido em 300 ml de água quente durante pelo menos 2 horas (ou durante a noite).",
      "Coloca tudo no liquidificador (incluindo o pau de canela amolecido) e tritura na potência máxima durante 2 a 3 minutos até ficar muito fino.",
      "Coa através de um pano de queijo fino ou passador de malha bem fina para um jarro, espremendo todo o leite aromático.",
      "Junta a baunilha, o restante da água fria e o leite condensado (ou açúcar), mexendo até dissolver.",
      "Serve em copos cheios de cubos de gelo e polvilha generosamente com canela em pó por cima."
    ],
    "bartender_tip": "A Horchata é a bebida perfeita para acalmar o paladar após refeições picantes ou condimentadas graças à sua textura aveludada amilácea."
  },
  {
    "id": "amarguinha_com_limao",
    "name": "Amêndoa Amarga do Algarve com Gelo & Limão",
    "alcoholic": true,
    "category": "portuguesas",
    "categoryLabel": "Tradição Portuguesa 🇵🇹",
    "technique": "Classic Portuguese Serve with Fresh Lime Squeeze",
    "description": "O ex-líbris dos finais de tarde algarvios: licor de amêndoa amarga tradicional (Amarguinha) servido com cubos de gelo e sumo de limão fresco espremido na hora.",
    "difficulty": "Fácil",
    "prep_time": "1 min",
    "glass": "Copo Baixo Old Fashioned ou Balão Pequeno",
    "ice": "Gelo em Cubos Grandes Abundante",
    "abv": "20% ABV (Doce de Amêndoa & Cítrico)",
    "badge": "Sabor do Algarve ☀️",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina",
      "Espremedor Manual"
    ],
    "ingredients": [
      {
        "name": "Licor de Amêndoa Amarga (Amarguinha)",
        "quantity": "50 ml"
      },
      {
        "name": "Sumo de Limão Fresco Acabado de Espremer",
        "quantity": "20 ml"
      },
      {
        "name": "Cubos Grandes de Gelo",
        "quantity": "Cheios no copo"
      },
      {
        "name": "Rodela Grossa de Limão Fresco",
        "quantity": "1 unidade"
      }
    ],
    "steps": [
      "Enche o copo baixo com bastantes cubos de gelo.",
      "Deita os 50 ml de licor de amêndoa amarga.",
      "Espreme a metade de limão fresco diretamente sobre o gelo.",
      "Mexe com a colher bailarina para que o limão cítrico quebre a doçura do licor.",
      "Insere a rodela de limão no copo.",
      "Aprecia lentamente o contraste doce-amargo inconfundível."
    ],
    "bartender_tip": "O sumo de limão fresco é obrigatório! Sem ele, o licor de amêndoa é excessivamente doce; o limão transforma-o num dos melhores digestivos do mundo."
  },
  {
    "id": "licor_beirao_honra",
    "name": "Licor Beirão d’Honra on the Rocks com Hortelã",
    "alcoholic": true,
    "category": "portuguesas",
    "categoryLabel": "Tradição Portuguesa 🇵🇹",
    "technique": "Perfect Serve on the Rocks with Citrus & Mint",
    "description": "O Licor de Portugal: a receita secreta da Lousã com dupla destilação de sementes e plantas aromáticas, servido on the rocks com rodela de limão e hortelã.",
    "difficulty": "Fácil",
    "prep_time": "1 min",
    "glass": "Copo Baixo Old Fashioned",
    "ice": "Gelo em Cubos Grandes",
    "abv": "22% ABV (Aromático & Licoroso)",
    "badge": "O Licor de Portugal 🇵🇹",
    "smoking_technique": null,
    "bar_tools": [
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Licor Beirão (ou Beirão d’Honra com Aguardente Vínica)",
        "quantity": "50 ml"
      },
      {
        "name": "Rodela de Limão Fresco",
        "quantity": "1 unidade"
      },
      {
        "name": "Raminho de Hortelã Fresca",
        "quantity": "1 unidade"
      },
      {
        "name": "Cubos de Gelo Maciços",
        "quantity": "3 a 4 cubos"
      }
    ],
    "steps": [
      "Coloca os cubos de gelo maciços no copo baixo.",
      "Deita os 50 ml de Licor Beirão.",
      "Bate no raminho de hortelã na palma da mão e introduz no copo.",
      "Espreme ligeiramente a rodela de limão e coloca-a encostada ao gelo.",
      "Dá uma suave volta com a colher e serve."
    ],
    "bartender_tip": "Para uma versão Long Drink extremamente popular nos festivais de verão (o \"Caipirão\"), prepara-o como uma caipirinha substituindo a cachaça e o açúcar apenas por Licor Beirão e lima!"
  },
  {
      "id": "gin_hendricks_pepino_rosa",
      "name": "Hendrick's Curiosities (Pepino & Pétalas de Rosa)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Montado na Taça Balão & Perfumado com Zest",
      "description": "O pioneiro da revolução botânica: infusão destilada de pepino holandês e pétalas de rosa damascena búlgara. Servido numa taça balão gelada com fita de pepino crocante e pétalas perfumadas.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Cristal (Copa)",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "12% ABV (Leve a Moderado)",
      "badge": "Floral & Refrescante 🥒",
      "bar_tools": [
          "Colher de Bar Bailarina",
          "Jigger (Doser)",
          "Descascador de Fitas",
          "Pinça de Botânicos"
      ],
      "ingredients": [
          {
              "name": "Hendrick's Gin Escocês",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Premium Indian ou Elderflower",
              "quantity": "150 ml"
          },
          {
              "name": "Fita Longa de Pepino Holandês Fresco",
              "quantity": "1 fita fina"
          },
          {
              "name": "Pétalas de Rosa Desidratadas Comestíveis",
              "quantity": "3 a 4 pétalas"
          },
          {
              "name": "Cubos de Gelo Cristalino",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Enche a taça balão de gelo até ao topo e gira com a colher de bar para gelar o cristal.",
          "Retira o excesso de água formada no fundo da taça com o coador de bar.",
          "Com o descascador, retira uma fita longitudinal e fina de pepino e encosta-a ao interior da taça.",
          "Mede 50 ml de Hendrick's Gin com o jigger e deita suavemente sobre o gelo.",
          "Verte a água tónica premium muito devagar, deslizando pela espiral da colher bailarina.",
          "Dá uma única volta suave para envolver os botânicos sem quebrar as bolhas de gás.",
          "Decora o topo com as pétalas de rosa comestíveis e serve de imediato."
      ],
      "bartender_tip": "Não espremas o pepino nem mexas excessivamente: o aroma de rosa e pepino é volátil e liberta-se naturalmente à medida que o gelo mantém a bebida gelada."
  },
  {
      "id": "gin_monkey_47_amora_alecrim",
      "name": "Monkey 47 Schwarzwald (Amoras Silvestres & Alecrim Fumado)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Maceração Suave & Fumo Aromático de Alecrim",
      "description": "Complexidade inigualável com 47 botânicos recolhidos na misteriosa Floresta Negra alemã. Coroado com amoras silvestres frescas e um raminho de alecrim levemente tostado com maçarico de bar.",
      "difficulty": "Média",
      "prep_time": "4 min",
      "glass": "Taça Balão Cristal Lapidada",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "15% ABV (Equilibrado & Nobre)",
      "badge": "47 Botânicos 🌲",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Maçarico de Bar",
          "Pinça de Precisão"
      ],
      "ingredients": [
          {
              "name": "Monkey 47 Schwarzwald Dry Gin",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Aromatic ou Indian Seca",
              "quantity": "150 ml"
          },
          {
              "name": "Amoras Silvestres Frescas",
              "quantity": "3 unidades"
          },
          {
              "name": "Ramo Fresco de Alecrim",
              "quantity": "1 ramo vigoroso"
          },
          {
              "name": "Zest de Lima Fresca",
              "quantity": "1 twist"
          },
          {
              "name": "Gelo Maciço Cristalino",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Gela a taça de cristal lapidada enchendo-a com cubos maciços de gelo.",
          "No fundo da taça, esmaga suavemente uma das amoras para libertar o seu sumo e cor carmim.",
          "Adiciona 50 ml de Monkey 47 Gin e gira suavemente a taça para infusionar.",
          "Verte a água tónica premium lentamente pela colher espiralada.",
          "Coloca as restantes amoras inteiras à superfície do gelo.",
          "Segura o ramo de alecrim com a pinça e passa a chama do maçarico durante 3 segundos na ponta, pousando-o de imediato sobre o cocktail enquanto liberta um fumo amadeirado.",
          "Perfuma o bordo com um twist de lima e serve."
      ],
      "bartender_tip": "O alecrim tostado no maçarico ativa os óleos balsâmicos que contrastam na perfeição com o zimbro selvagem e os 47 botânicos da Floresta Negra."
  },
  {
      "id": "gin_mare_mediterraneo",
      "name": "Gin Mare Capri (Manjericão, Tomilho & Azeitona Arbequina)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Infusão Herbal no Balcão",
      "description": "A essência ensolarada do Mediterrâneo destilada com azeitonas arbequinas espanholas, tomilho, alecrim e manjericão fresco. Uma viagem sensorial pela Riviera e Costa Brava.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Ampla",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "13% ABV (Herbal Refrescante)",
      "badge": "Mediterrânico 🌿",
      "bar_tools": [
          "Colher de Bar Bailarina",
          "Jigger (Doser)",
          "Espeto de Cocktail em Inox",
          "Pinça de Bar"
      ],
      "ingredients": [
          {
              "name": "Gin Mare Mediterrânico",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Mediterranean (Fever-Tree)",
              "quantity": "150 ml"
          },
          {
              "name": "Folha Fresca de Manjericão",
              "quantity": "2 folhas"
          },
          {
              "name": "Raminho Fresco de Tomilho",
              "quantity": "1 raminho"
          },
          {
              "name": "Azeitona Arbequina em Salmoura",
              "quantity": "1 espetada"
          },
          {
              "name": "Twist de Laranja ou Limão",
              "quantity": "1 tira"
          },
          {
              "name": "Gelo Maciço",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Arrefece a taça balão com gelo abundante e descarta a água residual.",
          "Dá uma leve palmada nas folhas de manjericão na palma da mão ('clapping') para despertar as vesículas aromáticas e coloca na taça.",
          "Adiciona 50 ml de Gin Mare medidos no jigger.",
          "Junta o raminho de tomilho fresco e a tira de casca de laranja.",
          "Completa com água tónica mediterrânica vertida muito devagar.",
          "Finaliza com uma azeitona arbequina perfumada espetada num palito de inox apoiada na borda do copo."
      ],
      "bartender_tip": "A tónica Mediterranean com toques de alecrim e tomilho é a combinação canónica desenhada especificamente para harmonizar com a destilação deste gin."
  },
  {
      "id": "gin_tanqueray_ten_toranja",
      "name": "Tanqueray No. TEN Reserve (Toranja Rosa & Sabugueiro)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Cítrico Expressado & Tónica Floral",
      "description": "Destilado no mítico alambique Tiny Ten com citrinos frescos colhidos à mão (toranjas, laranjas e limas inteiras). Servido com uma fatia generosa de toranja rosa rubi e flor de sabugueiro.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Haute Coquetelaria",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "14% ABV (Vibrante & Cítrico)",
      "badge": "Cítrico Imperial 🍊",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Faca de Guarnição Japonesa",
          "Pinça de Bar"
      ],
      "ingredients": [
          {
              "name": "Tanqueray No. TEN Gin",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Elderflower (Flor de Sabugueiro)",
              "quantity": "150 ml"
          },
          {
              "name": "Fatia Fina Meia-Lua de Toranja Rosa Fresca",
              "quantity": "1 fatia"
          },
          {
              "name": "Raminho de Flores de Sabugueiro ou Menta",
              "quantity": "1 raminho decorativo"
          },
          {
              "name": "Gelo Cristalino Puro",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Enche a taça com cubos maciços de gelo e escorre a água com o passador.",
          "Adiciona 50 ml de Tanqueray No. TEN, deixando o destilado correr pelo gelo.",
          "Insere delicadamente a fatia de toranja rosa contra a parede interior da taça.",
          "Verte a tónica de sabugueiro com delicadeza pela colher bailarina.",
          "Faz um movimento ascendente com a colher de bar para integrar os sabores sem perder efervescência.",
          "Perfuma o cimo da taça com flores de sabugueiro ou folhas de menta e serve."
      ],
      "bartender_tip": "A acidez nobre e ligeiramente amarga da toranja rosa corta na perfeição a doçura subtil da tónica de flor de sabugueiro."
  },
  {
      "id": "gin_bombay_sapphire_zest",
      "name": "Bombay Sapphire Sunset (Zest de Limão & Pimenta Rosa)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Infusão a Vapor & Especiarias",
      "description": "Os 10 botânicos exóticos destilados a vapor ganham vida com zest espiral de limão siciliano fresco e grãos estaladiços de pimenta rosa brasileira.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão de Cristal",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "12% ABV (Seco & Especiado)",
      "badge": "Clássico Botânico 🍋",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Canelador de Citrinos",
          "Pinça de Precisão"
      ],
      "ingredients": [
          {
              "name": "Bombay Sapphire London Dry Gin",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Indian Clássica Premium",
              "quantity": "150 ml"
          },
          {
              "name": "Casca Espiralada de Limão Siciliano",
              "quantity": "1 espiral longa"
          },
          {
              "name": "Bagas de Pimenta Rosa",
              "quantity": "5 a 6 bagas"
          },
          {
              "name": "Gelo Cristalino",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Gela a taça balão com gelo abundante e descarta a água derretida.",
          "Adiciona 50 ml de Bombay Sapphire sobre o gelo.",
          "Esmaga apenas 1 grão de pimenta rosa entre os dedos e deita-o no copo; coloca os restantes grãos inteiros à superfície.",
          "Verte a água tónica premium suavemente com a colher bailarina.",
          "Com a espiral de limão siciliano, torce sobre a taça para libertar a névoa de óleos aromáticos e pousa sobre o gelo.",
          "Envolve suavemente com um único toque de colher."
      ],
      "bartender_tip": "A pimenta rosa não é picante como a preta: é aromática, resinosa e confere uma doçura frutada que complementa a raiz de lírio e o alcaçuz do Bombay."
  },
  {
      "id": "gin_nordes_galego",
      "name": "Nordés Atlantic Galego (Uva Albariño & Folha de Louro)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Montagem Atlântica & Uvas Selecionadas",
      "description": "O incomparável gin atlântico com base vínica de uvas Albariño da Galiza e botânicos marítimos como salva, louro e salicórnia. Servido com três uvas brancas no espeto e louro fresco.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Ampla",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "13% ABV (Frutado Atlântico)",
      "badge": "Galego & Atlântico 🌊",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Espeto de Bambu Gourmet",
          "Pinça de Bar"
      ],
      "ingredients": [
          {
              "name": "Nordés Atlantic Galician Gin",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Neutra Premium (Light ou Indian)",
              "quantity": "150 ml"
          },
          {
              "name": "Uvas Brancas Albariño ou Thompson Frescas",
              "quantity": "3 bagos"
          },
          {
              "name": "Folha Fresca de Louro Verde",
              "quantity": "1 folha"
          },
          {
              "name": "Zest de Lima Suave",
              "quantity": "1 tira fina"
          },
          {
              "name": "Gelo Cristalino",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Gela bem a taça balão com cubos de gelo maciços.",
          "Perfura ligeiramente 3 uvas brancas frescas e coloca-as num espeto de bambu.",
          "Mede 50 ml de Nordés Gin e verte sobre o gelo.",
          "Adiciona a folha fresca de louro, esfregando-a ligeiramente no bordo superior da taça.",
          "Completa com água tónica neutra muito fresca vertida em fio contínuo.",
          "Coloca o espeto de uvas a repousar sobre o gelo e serve."
      ],
      "bartender_tip": "Usa sempre água tónica neutra e com baixo teor de açúcar para não encobrir as notas aromáticas de pêssego, louro e mosto de uva características do Nordés."
  },
  {
      "id": "gin_roku_japones",
      "name": "Roku Gin Japonês (Flor de Sakura & Gengibre em Julienne)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Ritual Japonês 'Shun' das Quatro Estações",
      "description": "Arte japonesa de destilação com 6 botânicos sazonais: sakura (primavera), chás sencha e gyokuro (verão), pimenta sansho (outono) e yuzu (inverno). Servido com finas tiras de gengibre fresco.",
      "difficulty": "Média",
      "prep_time": "4 min",
      "glass": "Taça Balão Minimalista ou Copo Rocks Lapidado",
      "ice": "Gelo Hand-Carved ou Cubos Grandes",
      "abv": "14% ABV (Sofisticado Zen)",
      "badge": "Japonês Artesanal 🌸",
      "bar_tools": [
          "Colher Bailarina Japonesa",
          "Jigger (Doser)",
          "Faca Yanagiba de Precisão",
          "Pinça de Bambu"
      ],
      "ingredients": [
          {
              "name": "Roku Gin Japonês (Suntory)",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Premium Super Seca",
              "quantity": "150 ml"
          },
          {
              "name": "Gengibre Fresco Cortado em Julienne Finíssima",
              "quantity": "6 tiras finas"
          },
          {
              "name": "Pétalas de Sakura ou Flor Comestível Delicada",
              "quantity": "Para guarnecer"
          },
          {
              "name": "Gelo Puro Lapidado",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Prepara 6 tiras finas como cabelo de gengibre fresco com uma faca afiada.",
          "Coloca os cubos de gelo na taça e gira com a colher de bar para refrigerar a taça.",
          "Deita 50 ml de Roku Gin Japonês com precisão ritualística.",
          "Distribui as 6 tiras de gengibre sobre o gelo (cada uma homenageando um botânico do gin).",
          "Despeja a tónica japonesa ou tónica seca premium com máxima serenidade.",
          "Dá uma única rotação com a colher bailarina de baixo para cima.",
          "Pousa pétalas delicadas sobre a espuma do cocktail."
      ],
      "bartender_tip": "O gengibre em tiras finas harmoniza magistralmente com as notas cítricas de yuzu e o calor aromático da pimenta sansho destilada no gin."
  },
  {
      "id": "gin_sharish_maca_bravo",
      "name": "Sharish Alentejano (Maçã Bravo de Esmolfe & Canela)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Infusão Frutada Alentejana",
      "description": "O orgulho alentejano destilado em alambiques de cobre tradicionais em Reguengos de Monsaraz. Infundido com a perfumada Maçã Bravo de Esmolfe DOP e pau de canela tostado.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Alentejo",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "13% ABV (Doce & Especiado)",
      "badge": "100% Português 🇵🇹",
      "bar_tools": [
          "Colher de Bar Bailarina",
          "Jigger (Doser)",
          "Mandolina ou Faca Afiada",
          "Maçarico de Cozinha"
      ],
      "ingredients": [
          {
              "name": "Sharish Gin Alentejano Original",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Premium Neutra",
              "quantity": "150 ml"
          },
          {
              "name": "Maçã Bravo de Esmolfe DOP Fresca",
              "quantity": "3 lâminas finas em leque"
          },
          {
              "name": "Pau de Canela do Ceilão",
              "quantity": "1 pau inteiro"
          },
          {
              "name": "Zest de Limão Galego",
              "quantity": "1 twist"
          },
          {
              "name": "Gelo Maciço",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Arrefece a taça balão com gelo abundante e retira a água acumulada.",
          "Corta 3 fatias muito finas de maçã Bravo de Esmolfe e dispõe-nas em leque.",
          "Mede 50 ml de Sharish Gin e verte sobre os cubos de gelo.",
          "Acende o maçarico e tosta a ponta do pau de canela durante 2 segundos até crepitar, introduzindo-o na taça como agitador.",
          "Verte a água tónica premium suavemente encostada ao pau de canela.",
          "Finaliza colocando o leque de maçã a flutuar no cimo do gelo com um twist de limão."
      ],
      "bartender_tip": "A maçã Bravo de Esmolfe confere um perfume adocicado inconfundível que torna supérfluo qualquer xarope de açúcar."
  },
  {
      "id": "gin_black_pig_costa",
      "name": "Black Pig Costa Alentejana (Laranja do Algarve & Alecrim)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Montado com Botânicos da Costa Vicentina",
      "description": "Multi-premiado internacionalmente, este gin alentejano destila os aromas bravios das dunas de Santiago do Cacém e da Costa Vicentina. Guarnecido com laranja do Algarve e alecrim fresco.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Rústica Chique",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "14% ABV (Costeiro & Solar)",
      "badge": "Costa Vicentina 🇵🇹",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Descascador de Citrinos",
          "Pinça de Bar"
      ],
      "ingredients": [
          {
              "name": "Black Pig Costa Alentejana Gin",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Mediterranean ou Indian Premium",
              "quantity": "150 ml"
          },
          {
              "name": "Casca Larga de Laranja Doce do Algarve",
              "quantity": "1 tira sem polpa branca"
          },
          {
              "name": "Raminho Fresco de Alecrim Alentejano",
              "quantity": "1 unidade"
          },
          {
              "name": "Bagas de Zimbro Silvestre Esmagadas",
              "quantity": "2 unidades"
          },
          {
              "name": "Gelo de Rocha Maciço",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Enche a taça balão de gelo e mexe para gelar as paredes do vidro.",
          "Esmaga as 2 bagas de zimbro na palma da mão e deita no fundo da taça.",
          "Adiciona 50 ml de Black Pig Costa Alentejana Gin.",
          "Torce a casca de laranja sobre o copo para borrifar os óleos cítricos sobre o gin.",
          "Insere o ramo de alecrim fresco verticalmente entre os cubos de gelo.",
          "Verte a água tónica muito lentamente pela colher de bar.",
          "Serve e desfruta da brisa do Atlântico e dos montados alentejanos."
      ],
      "bartender_tip": "Bater com o ramo de alecrim nas costas da mão antes de o colocar ativa os seus óleos aromáticos sem queimar as folhas."
  },
  {
      "id": "gin_botanist_islay",
      "name": "The Botanist Islay 22 (Zimbro Selvagem, Cardamomo & Camomila)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Destilação Lenta & Botânicos Forrageados",
      "description": "Obra-prima forrageada na lendária ilha escocesa de Islay com 22 ervas e flores selvagens colhidas à mão nas falésias e turfeiras. Perfumado com sementes de cardamomo e flores de camomila.",
      "difficulty": "Média",
      "prep_time": "4 min",
      "glass": "Taça Balão Escocesa de Cristal",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "15% ABV (Herbáceo Complexo)",
      "badge": "Islay Foraged 🌿",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Muddler Pequeno",
          "Pinça de Botânicos"
      ],
      "ingredients": [
          {
              "name": "The Botanist Islay Dry Gin (Bruichladdich)",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Premium Indian Seca",
              "quantity": "150 ml"
          },
          {
              "name": "Vagens Verdes de Cardamomo",
              "quantity": "2 vagens levemente abertas"
          },
          {
              "name": "Flores de Camomila Desidratadas",
              "quantity": "Pequena pitada"
          },
          {
              "name": "Ramo Fresco de Hortelã Selvagem",
              "quantity": "1 ponta"
          },
          {
              "name": "Zest de Toranja ou Limão",
              "quantity": "1 twist"
          },
          {
              "name": "Gelo Maciço Puro",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Gela a taça de cristal com bastante gelo e descarta a água residual.",
          "Com a ponta da colher de bar, abre ligeiramente as 2 vagens de cardamomo e deita na taça.",
          "Adiciona 50 ml de The Botanist Gin e deixa repousar 30 segundos para libertar as notas forrageadas.",
          "Adiciona a tónica premium vertendo com delicadeza pela colher bailarina.",
          "Polvilha com as flores de camomila e decora com a ponta de hortelã selvagem e o twist cítrico.",
          "Serve a copo cheio para uma experiência campestre escocesa sublime."
      ],
      "bartender_tip": "O cardamomo verde desperta os 22 botânicos de Islay (artemísia, menta aquática, tojo, urze e tília) num bouquet inesquecível."
  },
  {
      "id": "gin_pink_morango_hibisco",
      "name": "Pink Gin Blush (Morangos Silvestres & Flor de Hibisco)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Infusão Vermelha & Flor Desidratada",
      "description": "Visual glamoroso com tonalidade rubi translúcida sedutora. Morangos silvestres fatiados e flores secas de hibisco que tingem a tónica com elegantes tons carmim aromáticos.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Glamour",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "11% ABV (Doce & Floral)",
      "badge": "Pink Velvet 🍓",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Pinça de Botânicos",
          "Faca de Cozinha"
      ],
      "ingredients": [
          {
              "name": "Pink Gin de Frutos Vermelhos ou London Dry",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Premium Aromatic ou Hibiscus",
              "quantity": "150 ml"
          },
          {
              "name": "Morangos Silvestres Frescos Laminados",
              "quantity": "2 morangos"
          },
          {
              "name": "Flor de Hibisco Desidratada",
              "quantity": "1 flor inteira"
          },
          {
              "name": "Raminho de Hortelã Fresca",
              "quantity": "1 raminho"
          },
          {
              "name": "Gelo Cristalino",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Gela a taça balão com cubos de gelo limpos.",
          "Coloca a flor de hibisco seca no fundo da taça.",
          "Adiciona os 50 ml de gin por cima da flor e aguarda 45 segundos: a flor começará a libertar um tom rosado natural.",
          "Adiciona as lâminas de morango fresco encostadas ao gelo.",
          "Verte a água tónica suavemente pela colher de bar.",
          "Decora com o raminho de hortelã fresca e observa o hipnotizante degradé de cor carmim."
      ],
      "bartender_tip": "A flor de hibisco além de colorir naturalmente sem corantes químicos, empresta uma acidez balsâmica que equilibra a doçura dos morangos."
  },
  {
      "id": "gin_london_dry_classico",
      "name": "London Dry Purista (Zimbro & Duplo Twist de Lima)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Clássico Perfeito em Proporção de Ouro",
      "description": "A matriz fundadora de toda a coquetelaria de gin. London Dry com forte espinha dorsal de zimbro, sementes de coentro e angélica, servido com duplo twist de lima fresca e tónica super seca.",
      "difficulty": "Fácil",
      "prep_time": "2 min",
      "glass": "Copo Balloon / Highball Pesado",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "14% ABV (Seco & Fresco)",
      "badge": "Purista Britânico 🇬🇧",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Descascador de Citrinos",
          "Passador de Bar"
      ],
      "ingredients": [
          {
              "name": "London Dry Gin Clássico (Tanqueray / Beefeater)",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Indian Clássica de Alta Gaseificação",
              "quantity": "150 ml"
          },
          {
              "name": "Casca de Lima Fresca (Twist Duplo)",
              "quantity": "2 tiras sem polpa branca"
          },
          {
              "name": "Bagas de Zimbro Inteiras",
              "quantity": "4 unidades"
          },
          {
              "name": "Gelo Maciço Muito Frio",
              "quantity": "Copo cheio"
          }
      ],
      "steps": [
          "Enche o copo com gelo de rocha até transbordar e gira até embaciar o vidro por fora.",
          "Retira qualquer gota de água derretida.",
          "Verte 50 ml de London Dry Gin.",
          "Torce uma das tiras de lima sobre o copo e esfrega todo o bordo para perfumar os lábios a cada gole.",
          "Adiciona as 4 bagas de zimbro inteiras.",
          "Verte a água tónica encostada à colher bailarina sem quebrar as borbulhas.",
          "Finaliza com o segundo twist de lima pousado no topo."
      ],
      "bartender_tip": "Nunca espremas sumo de lima num London Dry clássico: o ácido cítrico líquido mata o gás da tónica; usa exclusivamente os óleos essenciais da casca."
  },
  {
      "id": "gin_sipsmith_sloe",
      "name": "Sipsmith Sloe Gin (Frutos Silvestres & Laranja Sanguínea)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Macerado com Abrunhos Silvestres",
      "description": "Um tesouro inglês: London Dry artesanal macerado pacientemente com abrunhos silvestres (sloe berries) colhidos após as primeiras geadas de outono. Aveludado, cor de rubi rico e notas de marzipan.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão ou Copo On The Rocks",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "12% ABV (Rico & Aveludado)",
      "badge": "Sloe Vintage 🫐",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Faca de Citrinos",
          "Pinça de Bar"
      ],
      "ingredients": [
          {
              "name": "Sipsmith Sloe Gin Inglês",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Bitter Lemon ou Indian Clássica",
              "quantity": "120 ml"
          },
          {
              "name": "Rodela Fina de Laranja Sanguínea ou Tradicional",
              "quantity": "1 rodela"
          },
          {
              "name": "Amoras ou Mirtilos Silvestres",
              "quantity": "3 a 4 unidades"
          },
          {
              "name": "Raminho de Tomilho",
              "quantity": "1 raminho decorativo"
          },
          {
              "name": "Gelo Maciço",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Arrefece o copo com cubos de gelo maciços.",
          "Deita 50 ml de Sipsmith Sloe Gin, admirando a sua cor carmesim profunda.",
          "Insere a rodela de laranja sanguínea e as bagas silvestres entre os cubos de gelo.",
          "Adiciona água tónica amarga ou clássica muito fresca para criar efervescência e leveza.",
          "Dá uma volta suave com a colher de bar.",
          "Guarnece com o raminho de tomilho e serve."
      ],
      "bartender_tip": "O Sloe Gin pode ser bebido puro sobre uma pedra de gelo como digestivo ou com água tónica como aperitivo requintado de início de serão."
  },
  {
      "id": "gin_citadelle_frances",
      "name": "Citadelle Réserve de Cognac (Yuzu & Sementes de Coentro)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Envelhecido em Cascos de Carvalho Francês",
      "description": "O pioneiro dos gins artesanais franceses, destilado no Château de Bonbonnet em Cognac com 19 botânicos e envelhecido em cascos de carvalho. Notas florais, baunilha nobre e especiarias asiáticas.",
      "difficulty": "Média",
      "prep_time": "4 min",
      "glass": "Taça Balão de Cristal Fino",
      "ice": "Bloco de Gelo Cristalino",
      "abv": "15% ABV (Amadeirado Nobre)",
      "badge": "Artesanal Francês 🇫🇷",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Pinça de Bar",
          "Ralador Zester Fino"
      ],
      "ingredients": [
          {
              "name": "Citadelle Réserve Gin de França",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Super Seca Premium",
              "quantity": "140 ml"
          },
          {
              "name": "Zest Fresco de Yuzu ou Limão Francês",
              "quantity": "1 fita longa"
          },
          {
              "name": "Sementes Inteiras de Coentro",
              "quantity": "3 a 4 sementes"
          },
          {
              "name": "Flor Branca Comestível",
              "quantity": "1 unidade decorativa"
          },
          {
              "name": "Gelo Puro Artesanal",
              "quantity": "Copo cheio"
          }
      ],
      "steps": [
          "Gela a taça de cristal fino com gelo maciço.",
          "Mede 50 ml de Citadelle Réserve e verte sobre o gelo.",
          "Ligeiramente aquece as sementes de coentro na mão para soltar o aroma e adiciona à taça.",
          "Completa com água tónica super seca vertida muito lentamente.",
          "Enrola a fita de yuzu ou limão e pousa-a sobre a superfície.",
          "Finaliza com uma flor branca comestível para celebrar as origens em Cognac."
      ],
      "bartender_tip": "O breve estágio em madeira confere a este gin uma cor levemente dourada e notas aromáticas amanteigadas semelhantes aos grandes vinhos de Borgonha."
  },
  {
      "id": "gin_gvine_floreaison",
      "name": "G'Vine Floraison (Flor de Vinha & Framboesas Frescas)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Destilação de Flor de Videira Ugni Blanc",
      "description": "Uma jóia enológica que destila a efémera flor da videira francesa que desabrocha durante escassos dias na primavera em Cognac. Suavidade inigualável, sedosa, floral e adornada com framboesas.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Elegância Francesa",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "13% ABV (Floral & Sedoso)",
      "badge": "Flor de Videira 🍇",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Pinça de Botânicos",
          "Passador de Bar"
      ],
      "ingredients": [
          {
              "name": "G'Vine Floraison Gin",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Premium Floral ou Neutra",
              "quantity": "150 ml"
          },
          {
              "name": "Framboesas Frescas Selecionadas",
              "quantity": "3 unidades"
          },
          {
              "name": "Bagos de Uva Branca sem grainha",
              "quantity": "2 unidades cortadas ao meio"
          },
          {
              "name": "Pétalas de Flores Comestíveis",
              "quantity": "Para finalizar"
          },
          {
              "name": "Gelo Maciço",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Arrefece a taça com bastante gelo e drena o excesso de água.",
          "Deita 50 ml de G'Vine Floraison e aprecia o seu perfume aéreo e floral.",
          "Introduz as metades de uva e duas framboesas entre os blocos de gelo.",
          "Completa com água tónica vertida com precisão pela colher bailarina.",
          "Pousa a última framboesa intacta e as pétalas florais na superfície.",
          "Serve e desfruta da máxima elegância francesa."
      ],
      "bartender_tip": "Por ter base 100% de aguardente de uva em vez de cereais, o G'Vine possui uma textura redonda na boca que agrada até a quem não costuma apreciar gins secos."
  },
  {
      "id": "gin_malfy_limone",
      "name": "Malfy Con Limone (Limões de Amalfi & Tomilho-Limão)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Maceração Costeira Italiana",
      "description": "A essência solar da Costa Amalfitana e de Capri. Destilado em Moncalieri com limões cultivados à beira-mar, zimbro toscano e um toque herbal de tomilho-limão fresco.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Italiana Capri",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "12% ABV (Ultra Cítrico)",
      "badge": "Costa Amalfitana 🍋",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Faca de Citrinos",
          "Pinça de Bar"
      ],
      "ingredients": [
          {
              "name": "Malfy Con Limone Gin Italiano",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Premium Mediterranean ou Indian",
              "quantity": "150 ml"
          },
          {
              "name": "Rodela Grossa de Limão Siciliano ou Amalfi",
              "quantity": "1 rodela sumarenta"
          },
          {
              "name": "Raminho Fresco de Tomilho-Limão",
              "quantity": "1 raminho"
          },
          {
              "name": "Gelo Maciço",
              "quantity": "Copo cheio"
          }
      ],
      "steps": [
          "Passa a rodela de limão em todo o rebordo da taça para impregnar o óleo cítrico perfumado.",
          "Enche a taça com cubos de gelo translúcidos até ao bordo.",
          "Deita 50 ml de Malfy Con Limone sobre o gelo.",
          "Coloca a rodela de limão encostada à parede do copo.",
          "Verte a água tónica fresca deslizando pela colher espiralada.",
          "Insere o ramo de tomilho-limão como mexedor aromático.",
          "Serve imediatamente para uma frescura costeira italiana estonteante."
      ],
      "bartender_tip": "Os limões amalfitanos possuem uma casca duas vezes mais rica em óleos essenciais do que os limões vulgares, conferindo um perfume cítrico natural exuberante."
  },
  {
      "id": "gin_malfy_rosa",
      "name": "Malfy Rosa Siciliano (Toranja Rosa & Hortelã Doce)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Destilado de Toranja do Mediterrâneo",
      "description": "Sabor vibrante e tonalidade rosa pálido infundida com sumarentas toranjas cultivadas no solo vulcânico da Sicília, zimbro selvagem e folhinhas frescas de hortelã doce.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Rosa Cristal",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "12% ABV (Agridoce Vibrante)",
      "badge": "Sicília Solar ☀️",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Faca de Bar",
          "Pinça de Guarnição"
      ],
      "ingredients": [
          {
              "name": "Malfy Gin Rosa Siciliano",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Mediterranean ou Pink Grapefruit",
              "quantity": "150 ml"
          },
          {
              "name": "Fatia Farta Meia-Lua de Toranja Rosa",
              "quantity": "1 fatia fresca"
          },
          {
              "name": "Folhas Frescas de Hortelã",
              "quantity": "3 a 4 folhas"
          },
          {
              "name": "Gelo Maciço Puro",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Gela a taça de cristal balão com bastante gelo e descarta o excesso de líquido.",
          "Verte 50 ml de Malfy Rosa, revelando a sua cor suave de blush de verão.",
          "Acomoda a fatia de toranja rosa no meio dos cubos de gelo.",
          "Bate nas folhas de hortelã na palma da mão e deita no copo.",
          "Adiciona a água tónica bem gelada pela colher de bar.",
          "Dá uma suave elevação com a colher bailarina e serve."
      ],
      "bartender_tip": "O casamento da toranja siciliana ligeiramente amarga com a hortelã doce cria um perfil aromático sumarento e altamente viciante em dias amenos."
  },
  {
      "id": "gin_tropical_maracuja",
      "name": "Gin Tropical Exótico (Polpa de Maracujá & Manjericão Roxo)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Montagem Tropical com Fruta Fresca",
      "description": "Uma explosão tropical intensa e sensual com polpa fresca de maracujá e as suas sementes estaladiças, equilibrado pelo frescor herbal de folhas de manjericão roxo e lima.",
      "difficulty": "Média",
      "prep_time": "4 min",
      "glass": "Taça Balão Tropical Ampla",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "12% ABV (Exótico & Tropical)",
      "badge": "Exótico Tropical 🌺",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Colher de Fruta",
          "Pinça de Bar"
      ],
      "ingredients": [
          {
              "name": "Gin Seco Artesanal ou Tanqueray Rangpur",
              "quantity": "50 ml"
          },
          {
              "name": "Polpa Fresca de Maracujá com Sementes",
              "quantity": "Polpa de meio maracujá"
          },
          {
              "name": "Água Tónica Premium Indian ou Ginger Beer Suave",
              "quantity": "140 ml"
          },
          {
              "name": "Folhas Frescas de Manjericão Roxo ou Tradicional",
              "quantity": "3 folhas"
          },
          {
              "name": "Rodela Fina de Lima Fresca",
              "quantity": "1 rodela"
          },
          {
              "name": "Gelo Cristalino Abundante",
              "quantity": "Copo cheio"
          }
      ],
      "steps": [
          "Enche a taça balão com cubos de gelo e escorre a água.",
          "Adiciona 50 ml de gin e a rodela de lima.",
          "Com uma colher, retira a polpa dourada de meio maracujá fresco.",
          "Verte a água tónica suavemente com a colher bailarina.",
          "Espalha a polpa de maracujá pelo topo do cocktail para criar um efeito visual bicolor espetacular.",
          "Finaliza com as folhas de manjericão roxo como contraste de cor e aroma."
      ],
      "bartender_tip": "Não batas o maracujá no shaker: o charme deste cocktail de autor é a polpa fresca a flutuar entre os cubos de gelo com as sementes aromáticas estaladiças."
  },
  {
      "id": "gin_four_pillars_shiraz",
      "name": "Four Pillars Bloody Shiraz (Uvas Shiraz & Tónica Seca)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Infusão com Uvas Tintas de Colheita Tardia",
      "description": "A lendária criação australiana de Yarra Valley: uvas tintas Shiraz frescas mergulhadas em gin Rare Dry de alta graduação durante semanas. Cor de sangue de boi que se transforma em rosa néon com a tónica.",
      "difficulty": "Fácil",
      "prep_time": "3 min",
      "glass": "Taça Balão Borgonha / Cristal",
      "ice": "Cubos Grandes Cristalinos",
      "abv": "16% ABV (Rico & Tânico)",
      "badge": "Shiraz Australiano 🍷",
      "bar_tools": [
          "Colher Bailarina",
          "Jigger (Doser)",
          "Pinça de Bar",
          "Faca de Citrinos"
      ],
      "ingredients": [
          {
              "name": "Four Pillars Bloody Shiraz Gin Australiano",
              "quantity": "50 ml"
          },
          {
              "name": "Água Tónica Seca Premium (Dry Tonic)",
              "quantity": "150 ml"
          },
          {
              "name": "Fatia Fina de Laranja Amarga ou Laranja Sanguínea",
              "quantity": "1 fatia"
          },
          {
              "name": "Uvas Tintas Firmes sem grainha",
              "quantity": "2 bagos cortados ao meio"
          },
          {
              "name": "Gelo Maciço Puro",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Gela a taça de cristal borgonha com gelo espesso.",
          "Deita 50 ml de Four Pillars Bloody Shiraz Gin sobre o gelo e observa a sua cor púrpura profunda.",
          "Acomoda a fatia de laranja e as metades de uvas tintas.",
          "Verte a água tónica seca muito lentamente: assiste à reação mágica de opalescência em que o cocktail muda de púrpura escuro para um rosa brilhante luminoso.",
          "Dá uma única volta suave com a colher bailarina e serve de imediato."
      ],
      "bartender_tip": "Sem adição de qualquer açúcar ou corante: toda a cor e taninos provem exclusivamente do contacto natural do gin com a casca das uvas tintas Shiraz."
  },
  {
      "id": "gin_dry_martini_royal",
      "name": "Dry Martini Royal (London Dry, Noilly Prat & Azeitona Gordal)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Stirred no Mixing Glass (Mexido, Não Batido)",
      "description": "O aristocrata incontestado dos cocktails clássicos de bar de hotel de 5 estrelas. London Dry ultra gelado em mixing glass, um véu seco de vermute francês Noilly Prat e azeitona gordal recheada.",
      "difficulty": "Avançada",
      "prep_time": "4 min",
      "glass": "Taça Clássica de Martini (V-Shape)",
      "ice": "Gelo Abundante para o Mixing Glass",
      "abv": "28% ABV (Forte & Elegante)",
      "badge": "Rei dos Bares 👑",
      "bar_tools": [
          "Mixing Glass (Copo Misturador de Cristal)",
          "Colher Bailarina Longa",
          "Jigger (Doser)",
          "Strainer Julep / Hawthorne",
          "Espeto de Cocktail em Inox"
      ],
      "ingredients": [
          {
              "name": "London Dry Gin Super Premium (Tanqueray No. TEN ou Sipsmith)",
              "quantity": "60 ml"
          },
          {
              "name": "Vermute Seco Francês Noilly Prat",
              "quantity": "10 ml"
          },
          {
              "name": "Azeitona Gordal Sevillana de Grande Calibre",
              "quantity": "1 ou 2 azeitonas"
          },
          {
              "name": "Zest de Limão Siciliano para expressar óleos",
              "quantity": "1 twist"
          },
          {
              "name": "Gelo Maciço Cristalino para mexer",
              "quantity": "Abundante"
          }
      ],
      "steps": [
          "Coloca a taça de martini no congelador durante 15 minutos para gelar totalmente o cristal.",
          "No mixing glass, adiciona 10 ml de vermute seco francês e 60 ml de London Dry Gin.",
          "Enche o mixing glass até cima com cubos de gelo maciços e muito secos.",
          "Com a colher bailarina entre os dedos, mexe suave e ritmicamente durante 30 voltas completas até o copo misturador ficar completamente condensado e gelado.",
          "Coa o líquido sedoso com o strainer para dentro da taça de martini gelada.",
          "Torce a casca de limão sobre a taça para libertar a névoa de óleos aromáticos e descarta-a.",
          "Espeta a azeitona gordal no palito de inox e pousa no fundo da taça."
      ],
      "bartender_tip": "Nunca batas um Dry Martini no shaker com gelo: o shaker introduz microbolhas de ar que turvam o líquido e partem o gelo, aguando o cocktail. O mixing glass garante uma textura límpida como vidro fundido e aveludada."
  },
  {
      "id": "pink_lady",
      "name": "Pink Lady Clássico (London Dry, Calvados & Espuma de Romã)",
      "alcoholic": true,
      "category": "gins",
      "categoryLabel": "Gins de Autor & Botânicos 🍸",
      "technique": "Dry Shake & Double Strain (Espuma Sedosa)",
      "description": "Um dos mais venerados cocktails da Era do Jazz e da Lei Seca. A elegância botânica do London Dry harmonizada com a profundidade da maçã do Calvados francês, sumo de limão fresco e a doçura aveludada do xarope de romã artesanal, coroada por uma densa e macia espuma branca.",
      "difficulty": "Média",
      "prep_time": "3 min",
      "glass": "Taça Coupe / Cocktail de Cristal",
      "ice": "Gelo para Shaker (Duplo Batimento)",
      "abv": "19% ABV (Equilibrado & Sedoso)",
      "badge": "Ícone Vintage ✨",
      "bar_tools": [
          "Shaker Boston / Cobbler de Inox",
          "Jigger (Doser)",
          "Hawthorne Strainer",
          "Passador Fino (Fine Mesh Strainer)",
          "Espeto de Cocktail Dourado"
      ],
      "ingredients": [
          {
              "name": "London Dry Gin Premium",
              "quantity": "45 ml"
          },
          {
              "name": "Calvados Francês ou Brandy de Maçã",
              "quantity": "15 ml"
          },
          {
              "name": "Sumo de Limão Fresco Espremido",
              "quantity": "15 ml"
          },
          {
              "name": "Xarope de Romã Artesanal (Grenadine Real)",
              "quantity": "10 ml"
          },
          {
              "name": "Clara de Ovo Pasteurizada (ou Aquafaba vegan)",
              "quantity": "15 ml"
          },
          {
              "name": "Cereja Amarena Luxardo & Pétala de Rosa Comestível",
              "quantity": "Para guarnição"
          }
      ],
      "steps": [
          "Arrefece previamente uma taça coupe enchendo-a com gelo picado ou colocando no congelador.",
          "No shaker, combina o London Dry Gin, o Calvados, o sumo de limão fresco, a grenadine e a clara de ovo (sem adicionar gelo nesta fase).",
          "Realiza o 'Dry Shake': bate vigorosamente a seco durante 15 segundos para emulsionar a clara de ovo e criar uma espuma rica e aveludada.",
          "Abre o shaker, adiciona bastante gelo maciço e bate novamente com força ('Wet Shake') durante 12 segundos até gelar intensamente.",
          "Descarta o gelo da taça coupe.",
          "Faz coagem dupla (Hawthorne strainer + passador fino) vertendo o cocktail suavemente para a taça.",
          "Observa a divisão perfeita entre o corpo rosa pastel e a camada de espuma branca sedosa.",
          "Guarnece com uma cereja Amarena espetada num pick dourado e delicadas pétalas de rosa sobre a espuma."
      ],
      "bartender_tip": "O segredo da textura luxuosa da Pink Lady reside no Dry Shake inicial sem gelo: a temperatura ambiente permite que as proteínas da clara se expandam e criem uma microespuma incrivelmente aveludada. Usar grenadine real (feita com sumo de romã genuíno) confere a autêntica cor blush sem artificialismos."
  },
  {
    "id": "mazagran_portugues",
    "name": "Mazagran Tradicional Português (Café & Limão Gelado)",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Built over Ice with Fresh Lemon & Mint",
    "description": "O clássico histórico das tabernas e cafés portugueses do séc. XX: café expresso acabado de tirar deitado sobre gelo, sumo de limão fresco e hortelã.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Alto de Vidro",
    "ice": "Gelo em Cubos Grandes Abundante",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Herança das Tabernas ☕",
    "smoking_technique": null,
    "bar_tools": [
      "Máquina de Expresso",
      "Colher Bailarina"
    ],
    "ingredients": [
      {
        "name": "Café Expresso Quente Forte (Bica Dupla)",
        "quantity": "60 ml"
      },
      {
        "name": "Sumo de Limão Fresco",
        "quantity": "20 ml"
      },
      {
        "name": "Açúcar de Cana ou Mascavado",
        "quantity": "1 a 2 colheres de chá"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Cheios no copo"
      },
      {
        "name": "Rodela de Limão e Ramo de Hortelã",
        "quantity": "Para finalizar"
      }
    ],
    "steps": [
      "Tira o café expresso duplo e dissolve nele o açúcar enquanto está bem quente.",
      "Enche o copo alto até cima com cubos de gelo.",
      "Adiciona o sumo de limão fresco sobre o gelo.",
      "Verte o café expresso quente açucarado diretamente sobre os cubos de gelo: o choque térmico preserva os aromas torrados.",
      "Mexe rapidamente com a colher bailarina.",
      "Decora com a rodela de limão e o ramo de hortelã e serve com palhinha."
    ],
    "bartender_tip": "O Mazagran foi a primeira versão mundial de café gelado com citrino, trazida pelos soldados portugueses e franceses no séc. XIX e adoptada com fervor em Lisboa!"
  },
  {
    "id": "cappuccino_italiano",
    "name": "Cappuccino Italiano Clássico (Latte Art & Microespuma)",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Espresso Extraction & Milk Steaming (Microespuma Aveludada)",
    "description": "A proporção áurea italiana (1/3 expresso, 1/3 leite vaporizado, 1/3 microespuma acetinada) com desenho de latte art e toque de cacau.",
    "difficulty": "Média",
    "prep_time": "3 min",
    "glass": "Chávena Tradicional de Cappuccino (160 ml)",
    "ice": "Sem Gelo (Servido Quente a 65°C)",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Barista Clássico ☕",
    "smoking_technique": null,
    "bar_tools": [
      "Máquina de Expresso com Lança de Vapor",
      "Jarro de Inox (Pitcher)",
      "Chávena Aquecida"
    ],
    "ingredients": [
      {
        "name": "Café Expresso Curto Encorpado",
        "quantity": "30 ml (1 bica)"
      },
      {
        "name": "Leite Fresco Gordo Bem Frio",
        "quantity": "110 ml"
      },
      {
        "name": "Cacau em Pó Puro 100% ou Canela",
        "quantity": "Para polvilhar"
      }
    ],
    "steps": [
      "Escalda a chávena de cerâmica com água quente.",
      "Tira um café expresso perfeito (com crema densa e aveludada) diretamente para a chávena.",
      "Deita o leite fresco gordo no jarro de inox até à base do bico.",
      "Insere a lança de vapor ligeiramente abaixo da superfície a 45 graus. Abre o vapor ao máximo para criar um vórtice e aerar o leite durante 3 segundos.",
      "Mergulha a lança um centímetro mais fundo para texturizar e aquecer o leite até 60-65°C, criando uma microespuma brilhante sem bolhas visíveis.",
      "Bate suavemente o jarro na bancada e faz movimentos circulares para homogeneizar a textura sedosa.",
      "Verte com fluxo contínuo no centro da chávena e finaliza com um movimento ondulatório de pulso para desenhar um coração ou rosetta.",
      "Polvilha levemente com cacau em pó a gosto."
    ],
    "bartender_tip": "O leite nunca deve ultrapassar os 68°C! Acima dessa temperatura, as proteínas desnaturam e o leite ganha sabor a cozido perdendo a doçura natural."
  },
  {
    "id": "latte_macchiato",
    "name": "Latte Macchiato em 3 Camadas Visuais",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Layered Hot Milk, Espresso & Dense Foam",
    "description": "A perfeição estética em copo alto: leite quente no fundo, expresso escuro no meio e uma coroa imaculada de espuma de leite densa.",
    "difficulty": "Média",
    "prep_time": "3 min",
    "glass": "Copo Alto de Vidro Transparente",
    "ice": "Sem Gelo (Servido Quente)",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Visual 3 Camadas 🥛",
    "smoking_technique": null,
    "bar_tools": [
      "Máquina de Expresso",
      "Jarro de Inox",
      "Copo Alto de Vidro"
    ],
    "ingredients": [
      {
        "name": "Leite Gordo Fresco Vaporizado",
        "quantity": "180 ml"
      },
      {
        "name": "Café Expresso Curto Acabado de Tirar",
        "quantity": "30 ml"
      },
      {
        "name": "Açúcar Mascavado ou Simples (Opcional)",
        "quantity": "A gosto"
      }
    ],
    "steps": [
      "Vaporiza o leite fresco no jarro com bastante aeração para obter uma espuma fofa e espessa.",
      "Deita o leite vaporizado e a espuma no copo alto de vidro transparente.",
      "Deixa repousar durante 30 a 45 segundos (o leite líquido denso desce para a base e a espuma sobe para o cimo).",
      "Tira o café expresso para uma jarrinha medidora com bico.",
      "Verte o café expresso lentamente no centro da espuma: por ter menor densidade que o leite mas maior que a espuma, acomoda-se exatamente no meio.",
      "Admira a divisão nítida das 3 camadas e serve com colher longa."
    ],
    "bartender_tip": "O intervalo de repouso de 30 segundos antes de deitar o café é o segredo físico que permite a separação milimétrica das camadas."
  },
  {
    "id": "flat_white",
    "name": "Flat White Australiano (Duplo Ristretto & Microespuma)",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Double Ristretto Extraction with Flat Microfoam",
    "description": "Nascido nos cafés de Melbourne e Sydney: o dobro da força de café com duplo ristretto suave coberto por uma microespuma ultra-fina e sedosa.",
    "difficulty": "Média",
    "prep_time": "3 min",
    "glass": "Chávena Média de Cerâmica (160 ml)",
    "ice": "Sem Gelo (Quente)",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Herança Australiana 🇦🇺",
    "smoking_technique": null,
    "bar_tools": [
      "Máquina de Expresso",
      "Jarro de Inox",
      "Chávena Flat White"
    ],
    "ingredients": [
      {
        "name": "Duplo Ristretto Concentrado",
        "quantity": "35 ml (2 extrações curtas)"
      },
      {
        "name": "Leite Gordo Fresco Vaporizado",
        "quantity": "120 ml"
      }
    ],
    "steps": [
      "Tira um duplo ristretto (cerca de 35 ml extraídos em apenas 20 segundos) para capturar as notas doces e ácidas dos grãos.",
      "Vaporiza o leite no jarro mantendo o vórtice ativo e pouca aeração superficial para criar uma microespuma elástica e plana (\"flat\").",
      "Roda o leite no jarro até parecer tinta branca espelhada.",
      "Verte sobre o duplo ristretto desde uma altura de 5 cm integrando a base e aproxima o bico no final para criar um coração artístico na superfície.",
      "Serve sem polvilhos para destacar o sabor puro do grão."
    ],
    "bartender_tip": "O Flat White é a escolha de quem ama sentir o sabor verdadeiro e potente do café sem a espuma espessa e seca do cappuccino."
  },
  {
    "id": "espresso_con_panna",
    "name": "Espresso con Panna com Natas Frescas Batidas",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Short Espresso with Hand-Whipped Cream Cap",
    "description": "O luxo da cafetaria romana e vienense: café expresso curto intenso e quente coroado com uma nuvem de natas frescas batidas à mão.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Chávena de Expresso de Vidro",
    "ice": "Sem Gelo",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Clássico Romano 👑",
    "smoking_technique": null,
    "bar_tools": [
      "Máquina de Expresso",
      "Batedor de Arame Pequeno"
    ],
    "ingredients": [
      {
        "name": "Café Expresso Curto Intenso",
        "quantity": "25 ml"
      },
      {
        "name": "Natas Frescas Líquidas Bem Frias",
        "quantity": "30 ml"
      },
      {
        "name": "Açúcar em Pó de Confeiteiro",
        "quantity": "1 colher de café"
      },
      {
        "name": "Raspas de Chocolate Negro 70%",
        "quantity": "Para finalizar"
      }
    ],
    "steps": [
      "Numa tacinha, bate as natas frias com o açúcar em pó com o batedor de arame até formar picos médios aveludados.",
      "Tira o café expresso curto para a chávena de vidro aquecida.",
      "Com uma colher, pousa uma generosa noz de natas batidas sobre o café quente.",
      "Decora com raspas finas de chocolate negro.",
      "Bebe imediatamente o café quente através da camada de natas frias."
    ],
    "bartender_tip": "Não mistures com a colher! A genialidade desta bebida reside no contraste térmico na boca entre o café quente e amargo e as natas frias e doces."
  },
  {
    "id": "cafe_bombon",
    "name": "Café Bombón Espanhol com Leite Condensado",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Dense Condensed Milk Layering",
    "description": "A sobremesa dos cafés de Madrid e Valência: uma base espessa de leite condensado doce coberta por um café expresso escuro e aromático.",
    "difficulty": "Fácil",
    "prep_time": "2 min",
    "glass": "Copo Pequeno de Vidro Transparente",
    "ice": "Sem Gelo",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Gulosice Espanhola 🇪🇸",
    "smoking_technique": null,
    "bar_tools": [
      "Copo de Vidro",
      "Colher",
      "Máquina de Expresso"
    ],
    "ingredients": [
      {
        "name": "Leite Condensado Espesso",
        "quantity": "35 ml"
      },
      {
        "name": "Café Expresso Curto Acabado de Tirar",
        "quantity": "30 ml"
      },
      {
        "name": "Canela em Pó ou Raspas de Limão",
        "quantity": "Opcional"
      }
    ],
    "steps": [
      "Deita o leite condensado no fundo do copo de vidro transparente.",
      "Tira o café expresso para uma chávena à parte.",
      "Encosta as costas de uma colher à parede de vidro logo acima do leite condensado.",
      "Verte o café expresso quente lentamente sobre a colher para flutuar.",
      "Observa o contraste cromático perfeito entre o branco e o preto.",
      "Serve com colher para misturar no momento de beber."
    ],
    "bartender_tip": "Nas Ilhas Canárias, juntam 15 ml de Licor 43, uma tira de casca de limão e um pau de canela a esta receita, criando o famoso Barraquito!"
  },
  {
    "id": "iced_caramel_macchiato",
    "name": "Iced Caramel Macchiato com Caramelo Salgado",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Cold Built with Espresso Pour & Caramel Crosshatch",
    "description": "O café gelado mais cobiçado: leite fresco com xarope de baunilha, muito gelo, expresso duplo a flutuar e desenho axadrezado de caramelo.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Alto Transparente",
    "ice": "Gelo em Cubos Grandes",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Café Gelado Gourmet 🍯",
    "smoking_technique": null,
    "bar_tools": [
      "Copo Alto",
      "Bisnaga de Caramelo",
      "Jigger"
    ],
    "ingredients": [
      {
        "name": "Café Expresso Duplo Quente",
        "quantity": "50 ml"
      },
      {
        "name": "Leite Fresco Gordo Bem Gelado",
        "quantity": "140 ml"
      },
      {
        "name": "Xarope de Baunilha Artesanal",
        "quantity": "20 ml"
      },
      {
        "name": "Calda Espessa de Caramelo Salgado",
        "quantity": "2 colheres de sopa"
      },
      {
        "name": "Cubos de Gelo",
        "quantity": "Até cima do copo"
      }
    ],
    "steps": [
      "No fundo do copo alto, coloca o xarope de baunilha.",
      "Adiciona o leite fresco gelado e mexe suavemente.",
      "Enche o copo até cima com cubos grandes de gelo.",
      "Verte o expresso duplo quente diretamente por cima do gelo: o café fica a flutuar no cimo criando um degradé visual espetacular.",
      "Com a bisnaga de caramelo, desenha uma grelha axadrezada generosa sobre o gelo e a espuma.",
      "Serve com palhinha."
    ],
    "bartender_tip": "Não mistures antes de servir! A magia do drink está em tirar uma foto do degradé e permitir ao cliente mexer a palhinha para dosar o café e o caramelo."
  },
  {
    "id": "cold_brew_artesanal",
    "name": "Cold Brew Artesanal Infundido a Frio 18 Horas",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "18-Hour Slow Cold Water Steeping & Double Filtered",
    "description": "Extração lenta a frio durante 18 horas: doçura natural do grão 100% Arábica sem amargor nem acidez, servido com bloco de gelo transparente.",
    "difficulty": "Fácil",
    "prep_time": "18 horas de infusão (2 min no serviço)",
    "glass": "Copo Rocks Baixo ou Tumbler",
    "ice": "Cubo Único Gigante de Gelo Translúcido",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Zero Acidez 🧊",
    "smoking_technique": null,
    "bar_tools": [
      "Frasco Hermético de Infusão",
      "Filtro V60 ou Pano Fino"
    ],
    "ingredients": [
      {
        "name": "Café de Especialidade 100% Arábica (Moagem Grossa)",
        "quantity": "50 g"
      },
      {
        "name": "Água Mineral Fria",
        "quantity": "400 ml"
      },
      {
        "name": "Cubo Gigante de Gelo",
        "quantity": "1 bloco"
      },
      {
        "name": "Casca de Laranja Fresca (Twist)",
        "quantity": "1 tira (Opcional)"
      }
    ],
    "steps": [
      "Num frasco de vidro limpo, junta o café com moagem grossa e a água mineral fria.",
      "Mexe suavemente para que todo o café fique embebido em água.",
      "Tapa o frasco e coloca no frigorífico durante 16 a 18 horas.",
      "Filtra o líquido através de um filtro de papel V60 ou pano de algodão fino sem espremer para manter a limpidez.",
      "Coloca o cubo gigante de gelo no copo rocks.",
      "Verte o Cold Brew concentrado sobre o gelo.",
      "Torce uma casca de laranja por cima para perfumar e serve."
    ],
    "bartender_tip": "A extração a frio não dissolve os compostos amargos do grão, criando um café suave com notas naturais a cacau, nozes e caramelo."
  },
  {
    "id": "cafe_mocha",
    "name": "Café Mocha Gourmet com Chocolate Negro Derretido",
    "alcoholic": false,
    "category": "cafes",
    "categoryLabel": "Cafés & Barista ☕",
    "technique": "Melted Dark Ganache, Espresso & Steamed Milk with Whipped Cream",
    "description": "O encontro do café de barista com o chocolate artesanal: expresso duplo sobre chocolate negro 70% derretido, leite vaporizado e chantilly.",
    "difficulty": "Fácil",
    "prep_time": "4 min",
    "glass": "Caneca de Vidro com Pega",
    "ice": "Sem Gelo (Servido Quente)",
    "abv": "0.0% ABV (Sem Álcool)",
    "badge": "Chocolate & Café 🍫",
    "smoking_technique": null,
    "bar_tools": [
      "Máquina de Expresso",
      "Jarro de Inox",
      "Chantilly"
    ],
    "ingredients": [
      {
        "name": "Chocolate Negro 70% em Pedaços ou Ganache",
        "quantity": "30 g"
      },
      {
        "name": "Café Expresso Duplo Quente",
        "quantity": "50 ml"
      },
      {
        "name": "Leite Fresco Vaporizado Cremoso",
        "quantity": "120 ml"
      },
      {
        "name": "Chantilly Fresco Firme",
        "quantity": "Para cobrir"
      },
      {
        "name": "Raspas de Chocolate Negro e Cacau",
        "quantity": "Para polvilhar"
      }
    ],
    "steps": [
      "No fundo da caneca de vidro aquecida, coloca os pedaços de chocolate negro.",
      "Tira o expresso duplo quente diretamente por cima do chocolate e mexe com vigor até formar uma ganache sedosa e brilhante.",
      "Adiciona o leite vaporizado cremoso, integrando-o suavemente com o chocolate.",
      "Cobre o cimo com uma coroa generosa de chantilly fresco.",
      "Decora com raspas finas de chocolate negro e pó de cacau.",
      "Serve bem quente."
    ],
    "bartender_tip": "Evita pós artificiais de chocolate: usar chocolate negro com 70% de cacau autêntico eleva este clássico ao nível de uma sobremesa gourmet."
  }
];
