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
    "label": "Todas 🍹"
  },
  {
    "id": "fumo",
    "label": "Fumo Aromático 💨"
  },
  {
    "id": "energy",
    "label": "Energéticas & Mixes ⚡"
  },
  {
    "id": "cocktails",
    "label": "Cocktails Clássicos 🍸"
  },
  {
    "id": "short",
    "label": "Short Drinks 🥃"
  },
  {
    "id": "long",
    "label": "Long Drinks 🥤"
  },
  {
    "id": "shots",
    "label": "Shots 🎯"
  },
  {
    "id": "hot",
    "label": "Hot Drinks ☕"
  },
  {
    "id": "mocktails",
    "label": "Mocktails (Virgin) 🍹"
  },
  {
    "id": "soft",
    "label": "Soft Drinks & Refrescos 🍋"
  },
  {
    "id": "portuguesas",
    "label": "Tradição Portuguesa 🇵🇹"
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
    "name": "Caipirinha Brasileira Autêntica com Cachaça",
    "alcoholic": true,
    "category": "long",
    "categoryLabel": "Long Drinks 🥤",
    "technique": "Muddled & Shaken or Built",
    "description": "A paixão brasileira: cachaça de alambique, lima verde fatiada com casca e açúcar macerados com energia e muito gelo.",
    "difficulty": "Fácil",
    "prep_time": "3 min",
    "glass": "Copo Baixo Old Fashioned ou Caipirinha",
    "ice": "Gelo em Cubos Quebrados ou Picado",
    "abv": "20% ABV (Intenso & Tropical)",
    "badge": "Brasil Autêntico 🇧🇷",
    "smoking_technique": null,
    "bar_tools": [
      "Muddler de Madeira",
      "Tábua de Corte",
      "Faca Afiada",
      "Shaker (Opcional)"
    ],
    "ingredients": [
      {
        "name": "Cachaça Brasileira Tradicional",
        "quantity": "60 ml"
      },
      {
        "name": "Lima Verde Inteira e Suculenta",
        "quantity": "1 unidade"
      },
      {
        "name": "Açúcar Branco Refinado",
        "quantity": "2 colheres de sobremesa"
      },
      {
        "name": "Gelo Quebrado",
        "quantity": "Até preencher o copo"
      }
    ],
    "steps": [
      "Corta as duas extremidades da lima, divide-a ao meio no sentido do comprimento e retira a parte branca central (o miolo branco amarga o drink).",
      "Corta a lima em 8 pedaços pequenos e coloca-os no copo com a polpa virada para cima.",
      "Adiciona o açúcar sobre a polpa da lima.",
      "Com o pilão, pressiona com firmeza mas sem esmagar em excesso a casca exterior.",
      "Enche o copo com gelo quebrado até à borda.",
      "Deita a cachaça e transfere para o shaker para uma rápida batida de 5 segundos (ou mexe muito bem no próprio copo de baixo para cima).",
      "Serve com duas palhinhas curtas."
    ],
    "bartender_tip": "O segredo de ouro dos barmen brasileiros: retirar SEMPRE a nervura branca central da lima antes de pilar. É ela a responsável pelo amargor indesejado!"
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
    "category": "soft",
    "categoryLabel": "Soft Drinks & Refrescos 🍋",
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
  }
];
