// Curated Portuguese recipes with categories.
// Images are resolved at runtime from Wikipedia via the `wiki` title.
// Categories: entradas, carne, peixe, sobremesas, sopas, street food

export const RECIPES = [
  // ---------- PEIXE ----------
  {
    name: 'Bacalhau à Brás', wiki: 'Bacalhau_à_Brás', category: 'peixe',
    description: 'Bacalhau desfiado com batata palha, ovo mexido, azeitonas e salsa.',
    difficulty: 'Fácil', prep_time: '30 min',
    ingredients: [
      { name: 'Bacalhau desfiado demolhado', quantity: '400 g' },
      { name: 'Batata palha', quantity: '300 g' },
      { name: 'Cebolas', quantity: '2' },
      { name: 'Ovos', quantity: '4' },
      { name: 'Azeitonas pretas', quantity: '100 g' },
      { name: 'Azeite, salsa, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o bacalhau em água fria durante 24 a 48 horas, mudando a água 3 a 4 vezes. Depois, escorre-o, retira peles e espinhas e desfia-o com as mãos ou com um garfo, em lascas finas.',
      'Corta as cebolas em rodelas muito finas. Num tacho largo, aquece um fio generoso de azeite e refoga a cebola em lume médio-baixo, com uma pitada de sal, até ficar translúcida e macia (cerca de 8 a 10 minutos), sem deixar alourar.',
      'Junta o bacalhau desfiado ao refogado e envolve bem. Deixa saltear cerca de 5 minutos, para que absorva o sabor do azeite e da cebola e aqueça por igual.',
      'Adiciona a batata palha e mistura delicadamente para não a partir. Deixa aquecer 2 a 3 minutos, envolvendo tudo.',
      'Numa tigela, bate os ovos com uma pitada de sal e pimenta. Junta-os ao tacho e mexe continuamente em lume brando, até os ovos ficarem cremosos e cozidos mas ainda húmidos (não os deixes secar).',
      'Retifica de sal e pimenta. Serve de imediato em pratos fundos, polvilhado com salsa picada e decorado com azeitonas pretas. Acompanha com pão fresco ou uma salada simples.'
    ]
  },
  {
    name: 'Polvo à Lagareiro', wiki: 'Polvo_à_lagareiro', category: 'peixe',
    description: 'Polvo assado com batatas a murro e azeite.',
    difficulty: 'Média', prep_time: '90 min',
    ingredients: [
      { name: 'Polvo', quantity: '1 (≈1,5 kg)' },
      { name: 'Batatas pequenas', quantity: '8' },
      { name: 'Cebola', quantity: '1' },
      { name: 'Alhos', quantity: '4 dentes' },
      { name: 'Azeite', quantity: '150 ml' },
      { name: 'Salsa, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Coloca o polvo numa panela grande com a cebola inteira (ajuda a amaciar) e água fria até cobrir. Leva ao lume e, mal levante fervura, baixa para lume médio e coze tapado 40 a 50 minutos, até um espeto entrar facilmente nos tentáculos.',
      'Entretanto, coze as batatas pequenas com pele em água temperada com sal durante 10 a 15 minutos, até estarem macias mas sem se desfazerem. Escorre e reserva.',
      'Pré-aquece o forno a 220 °C. Coloca o polvo escorrido num tabuleiro e, à volta, as batatas cozidas. Com a base de um copo ou com as mãos, dá um "murro" em cada batata para a abrir em fendas.',
      'Salpica o polvo e as batatas com sal grosso. Rega tudo com o azeite e espalha os alhos laminados por cima. Leva ao forno 20 a 25 minutos, até o polvo tostar ligeiramente nas pontas e as batatas ficarem douradas.',
      'Povilha com salsa picada e serve de imediato, regando com o azeite do tabuleiro. Acompanha com pão para molhar no azeite.'
    ]
  },
  {
    name: 'Bacalhau à Gomes de Sá', wiki: 'Bacalhau_à_Gomes_de_Sá', category: 'peixe',
    description: 'Bacalhau com batata, cebola, ovo e azeitonas, assado.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Bacalhau', quantity: '500 g' },
      { name: 'Batata', quantity: '4' },
      { name: 'Cebola', quantity: '2' },
      { name: 'Ovos', quantity: '2' },
      { name: 'Azeitonas, alho, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o bacalhau em água fria durante 24 horas, mudando a água 3 a 4 vezes. Coze-o em água a ferver durante 8 a 10 minutos, retira e, quando morno, limpa de peles e espinhas e separa em lascas grandes.',
      'Coze as batatas com pele em água temperada com sal. Escorre, descasca e corta em rodelas grossas. Coze também os ovos 10 minutos, passa por água fria e corta em rodelas.',
      'Num tacho, aquece azeite e refoga as cebolas em rodelas finas, juntamente com 2 dentes de alho laminados, em lume brando até a cebola ficar macia e translúcida.',
      'Num tabuleiro de barro, dispõe em camadas: as batatas, o bacalhau em lascas e a cebola refogada por cima. Rega com o azeite do refogado.',
      'Leva ao forno pré-aquecido a 200 °C durante 20 minutos, até tostar ligeiramente. Na altura de servir, decora com as rodelas de ovo cozido e azeitonas pretas, e polvilha com salsa.'
    ]
  },
  {
    name: 'Bacalhau Espiritual', wiki: 'Bacalhau_espiritual', category: 'peixe',
    description: 'Bacalhau desfiado com cebola, pão e natas, gratinado.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Bacalhau', quantity: '400 g' },
      { name: 'Cebola', quantity: '2' },
      { name: 'Pão', quantity: '150 g' },
      { name: 'Natas', quantity: '200 ml' },
      { name: 'Azeite e queijo ralado', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o bacalhau 24 horas, mudando a água várias vezes. Coze em água a ferver 8 minutos, escorre, limpa de peles e espinhas e desfia em lascas finas.',
      'Corta as cebolas em rodelas finas e refoga-as num tacho com azeite, em lume brando, até ficarem translúcidas e macias (10 minutos), sem alourar.',
      'Junta o bacalhau desfiado ao refogado e envolve, deixando saltear 5 minutos para tomar gosto.',
      'Demolha o pão (sem côdea) em leite quente até amolecer e junta ao tacho, envolvendo bem até obter uma mistura cremosa e homogénea.',
      'Coloca a mistura num tabuleiro untado. Rega com as natas e cobre com queijo ralado. Leva ao forno pré-aquecido a 200 °C durante 25 minutos, até a superfície ficar dourada e gratinada. Serve quente.'
    ]
  },
  {
    name: 'Bacalhau com Natas', wiki: 'Bacalhau_com_natas', category: 'peixe',
    description: 'Bacalhau com batata, cebola e natas, gratinado.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Bacalhau', quantity: '400 g' },
      { name: 'Batata', quantity: '4' },
      { name: 'Cebola', quantity: '2' },
      { name: 'Natas', quantity: '200 ml' },
      { name: 'Azeite e pão ralado', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o bacalhau 24 horas, mudando a água várias vezes. Coze-o em água a ferver 8 minutos, escorre, limpa de peles e espinhas e desfia em lascas.',
      'Descasca as batatas, corta em cubos pequenos e frita-os levemente em óleo quente (só até dourarem por fora), ou coze em água temperada com sal. Escorre e reserva.',
      'Refoga as cebolas picadas em azeite, em lume brando, até ficarem translúcidas e macias. Junta o bacalhau desfiado e envolve, salteando 5 minutos.',
      'Num tabuleiro, dispõe camadas alternadas de batata e bacalhau com cebola. Rega cada camada com um pouco de natas e termina com natas por cima.',
      'Polvilha com pão ralado e leva ao forno pré-aquecido a 200 °C durante 25 minutos, até a superfície ficar dourada e a borbulhar. Deixa repousar 5 minutos antes de servir.'
    ]
  },
  {
    name: 'Arroz de Marisco', wiki: 'Arroz_de_marisco', category: 'peixe',
    description: 'Arroz com camarão, amêijoa, sapateira e coentros.',
    difficulty: 'Média', prep_time: '45 min',
    ingredients: [
      { name: 'Arroz', quantity: '300 g' },
      { name: 'Camarão e amêijoas', quantity: '400 g' },
      { name: 'Sapateira', quantity: '1' },
      { name: 'Cebola, tomate, coentros, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Começa por preparar o caldo: coze as cascas e cabeças do camarão, a sapateira e as amêijoas (previamente lavadas em água salgada) em água temperada com sal, durante 20 minutos. Coa o caldo e reserva quente.',
      'Num tacho largo, refoga a cebola picada e o tomate pelado e picado num fio de azeite, em lume médio, até a cebola ficar macia e o tomate desfazer-se.',
      'Junta o arroz (previamente lavado e escorrido) e mexe 1 a 2 minutos para o envolver no refogado, até ficar translúcido.',
      'Adiciona o caldo quente (cerca de 2 a 3 vezes o volume do arroz) e deixa ferver. Baixa o lume e coze 12 a 15 minutos, juntando o camarão descascado e a carne da sapateira a meio da cozedura.',
      'Quando o arroz estiver cozido mas ainda húmido (malandrinho), retifica o sal, polvilha com coentros picados e serve de imediato em pratos fundos.'
    ]
  },
  {
    name: 'Cataplana de Marisco', wiki: 'Cataplana_de_marisco', category: 'peixe',
    description: 'Mariscos e peixe guisados na cataplana.',
    difficulty: 'Média', prep_time: '45 min',
    ingredients: [
      { name: 'Camarão, amêijoas, lulas, pescada', quantity: 'q.b.' },
      { name: 'Chouriço, tomate, azeite, coentros', quantity: 'q.b.' }
    ],
    steps: [
      'Lava muito bem as amêijoas em água salgada para retirar a areia, mudando a água várias vezes. Corta as lulas em argolas e a pescada em postas, e descasca o camarão deixando alguns inteiros para decorar.',
      'Abre a cataplana e, no fundo, dispõe uma camada de rodelas finas de cebola e tomate pelado. Rega com azeite.',
      'Coloca por cima as postas de pescada, as lulas, o chouriço às rodelas e, por fim, as amêijoas e o camarão. Tempera com sal, alho picado e coentros.',
      'Fecha a cataplana hermeticamente e leva a lume médio durante 25 minutos. Abre com cuidado (liberta vapor quente) e verifica se as amêijoas abriram e o peixe está cozido.',
      'Povilha com coentros frescos picados e serve diretamente da cataplana, acompanhado de pão para molhar no molho.'
    ]
  },
  {
    name: 'Sardinha Assada', wiki: 'Sardinha', category: 'peixe',
    description: 'Sardinhas grelhadas com sal e limão.',
    difficulty: 'Fácil', prep_time: '20 min',
    ingredients: [
      { name: 'Sardinhas', quantity: '8' },
      { name: 'Sal, limão, azeite, alho, coentros', quantity: 'q.b.' }
    ],
    steps: [
      'Limpa as sardinhas: retira as escamas, abre e remove as tripas, e lava em água corrente. Seca-as bem com papel de cozinha para ficarem estaladiças.',
      'Salpica generosamente com sal grosso de ambos os lados e deixa repousar 10 minutos para ganhar sabor.',
      'Aquece bem a grelha ou o carvão. Coloca as sardinhas e grelha 3 minutos de cada lado, até a pele tostar e a carne ficar opaca e macia.',
      'Entretanto, mistura num recipiente azeite, alho picado, coentros picados e sumo de meio limão.',
      'Serve as sardinhas regadas com este molho, acompanhadas de pão, salada de tomate e limão à parte.'
    ]
  },
  {
    name: 'Carapau Grelhado', wiki: 'Carapau', category: 'peixe',
    description: 'Carapau grelhado com azeite e alho.',
    difficulty: 'Fácil', prep_time: '25 min',
    ingredients: [
      { name: 'Carapau', quantity: '4' },
      { name: 'Alho, azeite, sal, salsa, limão', quantity: 'q.b.' }
    ],
    steps: [
      'Limpa os carapaus, retira as escamas e as tripas, e lava em água corrente. Seca bem com papel de cozinha.',
      'Tempera com sal e rodelas finas de alho por dentro e por fora. Deixa repousar 15 minutos para tomar sabor.',
      'Aquece bem a grelha e unta-a com um pouco de azeite para não agarrar. Coloca os carapaus e grelha 4 a 5 minutos de cada lado, até a carne ficar opaca e se separar facilmente da espinha.',
      'Numa tigela, mistura azeite, alho picado, salsa picada e sumo de limão.',
      'Serve os carapaus regados com este molho, com limão à parte e pão ou batata cozida.'
    ]
  },
  {
    name: 'Açorda de Marisco', wiki: 'Açorda_de_marisco', category: 'peixe',
    description: 'Açorda de pão com camarão e ovo escalfado.',
    difficulty: 'Média', prep_time: '40 min',
    ingredients: [
      { name: 'Pão alentejano', quantity: '300 g' },
      { name: 'Camarão', quantity: '300 g' },
      { name: 'Alho, coentros, azeite, ovos', quantity: 'q.b.' }
    ],
    steps: [
      'Coze o camarão em água temperada com sal e um pouco de azeite durante 5 minutos. Retira o camarão, descasca-o e reserva. Coa o caldo e mantém-no quente.',
      'Corta o pão alentejano (do dia anterior) em fatias finas e coloca numa tigela.',
      'Num tacho, aquece azeite e refoga 4 dentes de alho laminados em lume brando, sem os queimar. Junta um molho de coentros picados e deixa saltear 1 minuto.',
      'Adiciona o caldo quente do camarão ao tacho e, quando ferver, deita sobre o pão. Deixa repousar 5 minutos para o pão embeber e envolve bem até obter uma açorda cremosa.',
      'Junta o camarão descascado e envolve. À parte, escalfa um ovo por pessoa em água com um fio de vinagre durante 3 minutos.',
      'Serve a açorda em pratos fundos, coroada com o ovo escalfado e polvilhada com coentros frescos.'
    ]
  },
  {
    name: 'Caldeirada de Peixe', wiki: 'Caldeirada', category: 'peixe',
    description: 'Ensopado de peixes variados com batata.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Peixes variados', quantity: '1 kg' },
      { name: 'Batata, cebola, tomate, pimento', quantity: 'q.b.' },
      { name: 'Azeite e coentros', quantity: 'q.b.' }
    ],
    steps: [
      'Limpa os peixes (pescada, robalo, congro, etc.), corta em postas e lava. Corta as batatas em rodelas grossas, a cebola em rodelas, o tomate pelado e o pimento em tiras.',
      'Num tacho de barro, dispõe camadas sucessivas: cebola, tomate, pimento, batata e peixe, repetindo até esgotar os ingredientes.',
      'Rega generosamente com azeite e tempera cada camada com sal. Adiciona um pouco de água fria até quase cobrir.',
      'Tapa e leva a lume brando durante 40 minutos, sem mexer para não desfazer o peixe — abana o tacho em círculos de vez em quando para não pegar no fundo.',
      'No fim, polvilha com coentros picados e serve quente, com pão para acompanhar o caldo.'
    ]
  },
  {
    name: 'Bacalhau à Lagareiro', wiki: 'Bacalhau_à_Lagareiro', category: 'peixe',
    description: 'Bacalhau assado com batatas a murro e azeite.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Bacalhau', quantity: '4 postas' },
      { name: 'Batatas, alho, azeite, cebola, salsa', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha as postas de bacalhau 24 horas, mudando a água. Escorre e seca bem.',
      'Coze as batatas pequenas com pele em água temperada com sal durante 15 minutos, até estarem macias. Escorre e, com a base de um copo, dá um "murro" em cada uma para abrir.',
      'Pré-aquece o forno a 220 °C. Num tabuleiro, coloca o bacalhau com a cebola cortada em rodelas e as batatas a murro. Rega com azeite abundante e espalha alhos laminados por cima.',
      'Leva ao forno 25 a 30 minutos, regando de vez em quando com o azeite do tabuleiro, até o bacalhau tostar e as batatas ficarem douradas.',
      'Povilha com salsa picada e serve de imediato, regado com o azeite do tabuleiro.'
    ]
  },
  {
    name: 'Pescada Frita', wiki: 'Pescada', category: 'peixe',
    description: 'Filetes de pescada panados e fritos.',
    difficulty: 'Fácil', prep_time: '30 min',
    ingredients: [
      { name: 'Pescada', quantity: '4 filetes' },
      { name: 'Farinha, ovo, pão ralado, óleo', quantity: 'q.b.' },
      { name: 'Sal e limão', quantity: 'q.b.' }
    ],
    steps: [
      'Seca bem os filetes de pescada com papel de cozinha e tempera com sal e sumo de limão. Deixa repousar 10 minutos.',
      'Prepara três pratos: um com farinha, um com ovo batido e um com pão ralado.',
      'Passa cada filete primeiro pela farinha (sacudindo o excesso), depois pelo ovo batido e, por fim, pelo pão ralado, pressionando bem para o pão aderir.',
      'Aquece óleo abundante numa frigideira funda. Quando estiver quente (cerca de 170 °C), frita os filetes 3 a 4 minutos de cada lado, até dourados e crocantes.',
      'Escorre em papel absorvente e serve de imediato com limão e salada ou batata frita.'
    ]
  },

  // ---------- CARNE ----------
  {
    name: 'Cozido à Portuguesa', wiki: 'Cozido_à_portuguesa', category: 'carne',
    description: 'Cozido tradicional de carnes, enchidos e vegetais.',
    difficulty: 'Fácil', prep_time: '120 min',
    ingredients: [
      { name: 'Carne de vaca', quantity: '500 g' },
      { name: 'Orelheira de porco', quantity: '1' },
      { name: 'Chouriço, farinheira, morcela', quantity: '1 cada' },
      { name: 'Couve, batatas, cenouras, nabo', quantity: 'q.b.' },
      { name: 'Grão-de-bico cozido', quantity: '200 g' }
    ],
    steps: [
      'Numa panela grande, coloca a carne de vaca e a orelheira de porco cobertas com água fria. Leva ao lume e, ao ferver, retira a espuma que se forma à superfície.',
      'Junta o chouriço inteiro e as cenouras descascadas. Tapa e deixa cozer em lume médio durante 1 hora, até a carne ficar macia.',
      'Adiciona as batatas descascadas, o nabo, a couve cortada em pedaços e o grão-de-bico. Deixa cozer mais 30 minutos, até os vegetais estarem macios.',
      'Nos últimos 15 minutos, junta a farinheira e a morcela (picadas com um palito para não rebentarem) para não se desfazerem.',
      'Retira tudo, corta as carnes e enchidos às fatias e dispõe numa travessa grande, com os vegetais à volta. Serve quente, com o caldo à parte em cumbucas.'
    ]
  },
  {
    name: 'Feijoada à Transmontana', wiki: 'Feijoada_à_transmontana', category: 'carne',
    description: 'Feijão com couve, carnes e enchidos.',
    difficulty: 'Média', prep_time: '120 min',
    ingredients: [
      { name: 'Feijão branco', quantity: '500 g' },
      { name: 'Couve', quantity: '1' },
      { name: 'Ossos de porco, chouriço, morcela', quantity: 'q.b.' },
      { name: 'Cominhos e sal', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o feijão branco em água fria de um dia para o outro. No dia, escorre e coloca numa panela com os ossos de porco e água nova a cobrir.',
      'Leva ao lume e, ao ferver, retira a espuma. Tapa e coze em lume médio cerca de 1 hora, até o feijão começar a amaciar.',
      'Junta o chouriço inteiro e a couve cortada em pedaços. Deixa cozer mais 30 minutos, mexendo de vez em quando.',
      'Adiciona a morcela e tempera com sal e uma colher de cominhos. Deixa apurar em lume brando 20 a 30 minutos, até o molho engrossar e o feijão ficar cremoso.',
      'Retifica o tempero e serve quente em pratos fundos, com pão de centeio.'
    ]
  },
  {
    name: 'Carne de Porco à Alentejana', wiki: 'Carne_de_porco_à_alentejana', category: 'carne',
    description: 'Carne de porco frita com amêijoas e batatas.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Lombo de porco', quantity: '600 g' },
      { name: 'Amêijoas', quantity: '400 g' },
      { name: 'Batata, alho, coentros, azeite, piri-piri', quantity: 'q.b.' }
    ],
    steps: [
      'Corta o lombo de porco em cubos pequenos e tempera com sal, alho picado, piri-piri e vinho branco. Deixa marinar no frigorífico 2 a 4 horas.',
      'Lava muito bem as amêijoas em água salgada, mudando a água várias vezes para retirar a areia. Descasca as batatas e corta em cubos pequenos.',
      'Frita as batatas em óleo quente até dourarem e escorre em papel absorvente. Reserva.',
      'Numa frigideira larga, aquece azeite e frita a carne escorrida da marinada, em lume forte, até dourar por completo. Junta as amêijoas e tapa até abrirem (3 a 5 minutos).',
      'Adiciona as batatas fritas e envolve delicadamente. Polvilha com coentros frescos picados e serve de imediato.'
    ]
  },
  {
    name: 'Cabidela', wiki: 'Cabidela', category: 'carne',
    description: 'Galo guisado com arroz e sangue.',
    difficulty: 'Média', prep_time: '90 min',
    ingredients: [
      { name: 'Galo', quantity: '1' },
      { name: 'Arroz', quantity: '300 g' },
      { name: 'Sangue, cebola, alho, vinho branco, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Corta o galo em pedaços pequenos. Num tacho, aquece azeite e refoga a cebola picada e os alhos laminados em lume brando até a cebola ficar translúcida.',
      'Junta os pedaços de galo e deixa alourar de todos os lados. Adiciona o vinho branco e água quente até cobrir, e tempera com sal.',
      'Tapa e deixa guisar em lume médio cerca de 45 minutos, até a carne ficar macia e se soltar do osso.',
      'Junta o arroz e mais um pouco de água quente (cerca de 2 vezes o volume do arroz). Deixe ferver e baixa o lume.',
      'Quando o arroz estiver quase cozido, adiciona o sangue previamente batido com um pouco de vinagre (para não talhar) e mexe delicadamente. Deixa cozer mais 5 minutos, até o arroz ficar cremoso e escuro. Serve quente.'
    ]
  },
  {
    name: 'Rojões à Moda do Porto', wiki: 'Rojões', category: 'carne',
    description: 'Carne de porco frita com batatas, fígado e vinho.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Carne de porco', quantity: '600 g' },
      { name: 'Batatas, fígado, vinho branco, alho, banha, salsa', quantity: 'q.b.' }
    ],
    steps: [
      'Corta a carne de porco em cubos médios e tempera com sal, alho picado, louro e vinho branco. Deixa marinar 2 horas no frigorífico.',
      'Escorre a carne e reserva a marinada. Num tacho, aquece banha e frita a carne em lume forte, em várias levas, até dourar bem.',
      'Junta a marinada e um pouco de água quente e deixa apurar 15 minutos em lume brando, até a carne ficar macia e o molho reduzir.',
      'À parte, frita as batatas cortadas em cubos em óleo quente e salteia o fígado cortado em tiras finas numa frigideira com banha.',
      'Envolve as batatas e o fígado na carne, retifica o sal e polvilha com salsa picada. Serve quente.'
    ]
  },
  {
    name: 'Tripas à Moda do Porto', wiki: 'Tripas_à_moda_do_Porto', category: 'carne',
    description: 'Tripas com feijão branco, enchidos e vegetais.',
    difficulty: 'Média', prep_time: '120 min',
    ingredients: [
      { name: 'Tripas', quantity: '500 g' },
      { name: 'Feijão branco, chouriço, entremeada, cenoura, cebola, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o feijão branco de véspera. Lava muito bem as tripas sob água corrente e, se necessário, esfrega com limão e sal. Corta em pedaços.',
      'Numa panela, coze as tripas e o feijão em água abundante durante 1 hora, retirando a espuma. Junta a entremeada e o chouriço inteiros a meio da cozedura.',
      'Num tacho à parte, refoga a cebola picada em azeite até ficar translúcida. Junta as cenouras às rodelas e deixa saltear 5 minutos.',
      'Adiciona as tripas, o feijão, as carnes cozidas (cortadas às fatias) e um pouco do caldo da cozedura. Deixa apurar em lume brando 30 a 40 minutos, mexendo de vez em quando.',
      'Retifica o sal e serve quente em pratos fundos, com pão de centeio.'
    ]
  },
  {
    name: 'Favas à Portuguesa', wiki: 'Favas_à_portuguesa', category: 'carne',
    description: 'Favas guisadas com chouriço e entremeada.',
    difficulty: 'Fácil', prep_time: '60 min',
    ingredients: [
      { name: 'Favas', quantity: '500 g' },
      { name: 'Chouriço, entremeada, cebola, alho, coentros, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Se usares favas secas, demolha-as de véspera. Se forem frescas, descasca e retira a pele externa das favas grandes.',
      'Num tacho, aquece azeite e refoga a cebola picada e os alhos laminados em lume brando até a cebola ficar translúcida.',
      'Junta o chouriço às rodelas e a entremeada em pedaços e deixa saltear 5 minutos para largar o gosto.',
      'Adiciona as favas, envolve e cobre com água quente. Tempera com sal e deixa guisar em lume brando 30 a 40 minutos, mexendo de vez em quando, até as favas ficarem macias e o molho cremoso.',
      'Povilha com coentros frescos picados e serve quente, com pão.'
    ]
  },
  {
    name: 'Arroz de Pato', wiki: 'Arroz_de_pato', category: 'carne',
    description: 'Arroz de pato assado no forno com chouriço.',
    difficulty: 'Média', prep_time: '90 min',
    ingredients: [
      { name: 'Pato', quantity: '1' },
      { name: 'Arroz', quantity: '300 g' },
      { name: 'Chouriço, cebola, alho, azeite, salsa', quantity: 'q.b.' }
    ],
    steps: [
      'Coze o pato numa panela grande com água, cebola, alho e sal, durante 1 hora, até a carne ficar macia e se soltar dos ossos. Retira, deixa arrefecer e desfia a carne, reservando o caldo.',
      'Num tacho, aquece azeite e refoga a cebola picada em lume brando até ficar translúcida. Junta o arroz lavado e mexe 1 a 2 minutos.',
      'Adiciona 3 chávenas de caldo do pato (quente) por cada chávena de arroz e deixa ferver. Baixa o lume e deixa cozer 12 minutos.',
      'Num tabuleiro, mistura o arroz com o pato desfiado e dispõe rodelas de chouriço por cima. Rega com um fio de azeite.',
      'Leva ao forno pré-aquecido a 200 °C durante 25 minutos, até a superfície tostar e o chouriço ficar dourado. Polvilha com salsa e serve quente.'
    ]
  },
  {
    name: 'Chanfana', wiki: 'Chanfana', category: 'carne',
    description: 'Cabra estufada em vinho e alho no forno.',
    difficulty: 'Média', prep_time: '150 min',
    ingredients: [
      { name: 'Cabra', quantity: '1 kg' },
      { name: 'Vinho branco, alho, azeite, louro, sal', quantity: 'q.b.' }
    ],
    steps: [
      'Corta a carne de cabra em pedaços médios e tempera de véspera com sal, alho picado, folha de louro e vinho branco abundante. Deixa marinar no frigorífico 12 horas.',
      'Pré-aquece o forno a 160 °C. Coloca a carne e a marinada numa panela de barro de preferência, e junta azeite até quase cobrir.',
      'Tapa bem a panela (com massa de farinha e água a vedar, se possível) e leva ao forno durante 2 horas, sem abrir, para estufar lentamente.',
      'Passado esse tempo, abre com cuidado e verifica se a carne está macia e se solta do osso. Se o molho estiver muito líquido, destapa e deixa reduzir mais 15 minutos.',
      'Serve quente em pratos fundos, com pão de centeio para molhar no molho, e batata cozida à parte.'
    ]
  },
  {
    name: 'Ensopado de Borrego', wiki: 'Ensopado', category: 'carne',
    description: 'Borrego guisado com pão e hortelã.',
    difficulty: 'Média', prep_time: '90 min',
    ingredients: [
      { name: 'Borrego', quantity: '600 g' },
      { name: 'Cebola, alho, tomate, pão, hortelã, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Corta o borrego em pedaços e tempera com sal e alho. Num tacho, aquece azeite e aloura a carne em lume forte, de todos os lados.',
      'Junta a cebola picada e o tomate pelado e picado e deixa refogar 10 minutos, em lume médio, até a cebola ficar macia.',
      'Adiciona água quente até cobrir e deixa guisar em lume brando 1 hora, até a carne ficar macia e o molho apurado.',
      'Corta fatias finas de pão alentejano e coloca no fundo de pratos fundos. Rega com o ensopado quente por cima, para o pão embeber o caldo.',
      'Polvilha com hortelã fresca picada e serve de imediato.'
    ]
  },
  {
    name: 'Rancho de Grão', wiki: 'Rancho', category: 'carne',
    description: 'Rancho de grão com massas e carnes.',
    difficulty: 'Média', prep_time: '90 min',
    ingredients: [
      { name: 'Grão', quantity: '300 g' },
      { name: 'Massa cotovelo, entremeada, chouriço, batata, cebola, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o grão de véspera. No dia, coze-o numa panela com a entremeada e o chouriço inteiros em água abundante, durante 1 hora, retirando a espuma, até o grão ficar macio.',
      'Retira as carnes, corta às fatias e reserva. Mantém o caldo quente.',
      'Num tacho, refoga a cebola picada em azeite até ficar translúcida. Junta a massa cotovelo e a batata em cubos e envolve no refogado.',
      'Adiciona o caldo quente do grão (cerca de 1,5 L) e deixa cozer 15 minutos, até a massa e a batata estarem macias.',
      'Junta o grão cozido e as carnes, envolve e deixa apurar 5 minutos. Retifica o sal e serve quente em pratos fundos.'
    ]
  },

  // ---------- ENTRADAS ----------
  {
    name: 'Ameijoas à Bulhão Pato', wiki: 'Ameijoas_à_Bulhão_Pato', category: 'entradas',
    description: 'Amêijoas salteadas com alho, coentros e azeite.',
    difficulty: 'Fácil', prep_time: '20 min',
    ingredients: [
      { name: 'Amêijoas', quantity: '1 kg' },
      { name: 'Alho, coentros, azeite, limão, sal', quantity: 'q.b.' }
    ],
    steps: [
      'Coloca as amêijoas em água bem salgada durante 2 horas para largarem a areia, mudando a água 2 a 3 vezes. Lava-as muito bem em água corrente e escorre.',
      'Num tacho largo, aquece um fio generoso de azeite e aloura 4 dentes de alho laminados em lume brando, sem os queimar.',
      'Junta as amêijoas e mexe. Tapa o tacho e deixa em lume médio-alto 3 a 5 minutos, abanando o tacho, até as amêijoas abrirem.',
      'Junta um molho de coentros frescos picados e o sumo de meio limão e envolve. Descarta as que não abriram.',
      'Serve de imediato em cumbucas, com pão para molhar no molho de azeite e alho.'
    ]
  },
  {
    name: 'Camarão à Guilho', wiki: 'Camarão', category: 'entradas',
    description: 'Camarão salteado com alho, piri-piri e coentros.',
    difficulty: 'Fácil', prep_time: '15 min',
    ingredients: [
      { name: 'Camarão', quantity: '500 g' },
      { name: 'Alho, azeite, piri-piri, coentros, sal', quantity: 'q.b.' }
    ],
    steps: [
      'Descasca o camarão, deixando a cauda se quiseres, e retira a tripa escura das costas com um palito. Tempera com sal.',
      'Numa frigideira larga, aquece azeite abundante e aloura 5 dentes de alho laminados em lume médio, até ficarem dourados mas não queimados.',
      'Junta o piri-piri (fresco ou em fio) e, de imediato, o camarão. Salteia em lume forte 3 a 4 minutos, mexendo, até o camarão ficar cor-de-rosa e opaco.',
      'Polvilha com coentros frescos picados e serve de imediato, com pão para molhar no azeite.'
    ]
  },
  {
    name: 'Pataniscas de Bacalhau', wiki: 'Pataniscas', category: 'entradas',
    description: 'Fritos de massa com bacalhau desfiado.',
    difficulty: 'Média', prep_time: '40 min',
    ingredients: [
      { name: 'Bacalhau desfiado', quantity: '200 g' },
      { name: 'Farinha, ovos, água gasosa, salsa, cebola, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha e coze o bacalhau, depois desfia-o em lascas finas e reserva. Pica meia cebola e um molho de salsa muito finos.',
      'Numa tigela, mistura a farinha com 2 ovos batidos e vai adicionando água gasosa gelada, mexendo com uma vara, até obter uma massa cremosa e sem grumos (consistência de massa de panquecas).',
      'Junta o bacalhau desfiado, a cebola e a salsa picada à massa e envolve. Tempera com sal e pimenta.',
      'Aquece azeite abundante numa frigideira funda. Quando estiver quente, deita colheradas de massa e frita 2 a 3 minutos de cada lado, até douradas e crocantes.',
      'Escorre as pataniscas em papel absorvente e serve quentes, com salada de feijão-frade ou arroz de tomate.'
    ]
  },
  {
    name: 'Pastéis de Bacalhau', wiki: 'Pastel_de_bacalhau', category: 'entradas',
    description: 'Pastéis fritos de bacalhau e batata.',
    difficulty: 'Média', prep_time: '50 min',
    ingredients: [
      { name: 'Bacalhau', quantity: '300 g' },
      { name: 'Batata, cebola, alho, salsa, ovos, pão ralado, óleo', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o bacalhau 24 horas. Coze-o em água a ferver 8 minutos e, separadamente, coze as batatas descascadas 20 minutos.',
      'Escorre o bacalhau, lima peles e espinhas e desfia muito fino. Esmaga as batatas cozidas em puré, sem adicionar leite.',
      'Numa frigideira, refoga a cebola e o alho picados em azeite até ficarem translúcidos e junta ao puré, com o bacalhau, salsa picada e 2 ovos batidos. Mistura bem até obter uma massa consistente. Deixa arrefecer.',
      'Com as mãos molhadas, molda porções em forma de croquete e passa por ovo batido e depois por pão ralado.',
      'Frita em óleo quente (170 °C) 3 a 4 minutos, até dourados. Escorre em papel absorvente e serve quentes.'
    ]
  },
  {
    name: 'Orelheira de Porco', wiki: 'Orelheira', category: 'entradas',
    description: 'Orelheira de porco cozida e frita com alho.',
    difficulty: 'Fácil', prep_time: '90 min',
    ingredients: [
      { name: 'Orelheira', quantity: '1' },
      { name: 'Alho, azeite, sal, salsa', quantity: 'q.b.' }
    ],
    steps: [
      'Limpa bem a orelheira de porco, queimando os pelos se necessário, e lava em água corrente.',
      'Numa panela, cobre a orelheira com água temperada com sal e uma cebola inteira e coze 1 hora, em lume médio, até a cartilagem ficar macia. Retira e deixa arrefecer.',
      'Corta a orelheira em tiras finas.',
      'Numa frigideira, aquece azeite e aloura 4 dentes de alho laminados. Junta as tiras de orelheira e salteia em lume forte 5 a 7 minutos, até ficarem douradas e estaladiças.',
      'Polvilha com salsa picada e serve quente, com pão e azeitonas.'
    ]
  },
  {
    name: 'Melão com Presunto', wiki: 'Melão_com_presunto', category: 'entradas',
    description: 'Melão fresco com fatias de presunto.',
    difficulty: 'Fácil', prep_time: '5 min',
    ingredients: [
      { name: 'Melão', quantity: '1' },
      { name: 'Presunto', quantity: '8 fatias' },
      { name: 'Pimenta preta', quantity: 'q.b.' }
    ],
    steps: [
      'Corta o melão ao meio, retira as sementes e corta em fatias de espessura média. Podes deixar a casca para facilitar a pegada.',
      'Envolve cada fatia de melão com uma fatia fina de presunto curado.',
      'Dispõe num prato e moe um pouco de pimenta preta por cima.',
      'Serve fresco, como entrada, no pico do verão.'
    ]
  },
  {
    name: 'Salada de Polvo', wiki: 'Polvo', category: 'entradas',
    description: 'Polvo cozido com cebola roxa, coentros e azeite.',
    difficulty: 'Fácil', prep_time: '60 min',
    ingredients: [
      { name: 'Polvo', quantity: '1' },
      { name: 'Cebola roxa, coentros, azeite, vinagre, sal', quantity: 'q.b.' }
    ],
    steps: [
      'Coze o polvo numa panela com água e uma cebola inteira durante 40 a 50 minutos, até um espeto entrar facilmente. Retira e deixa arrefecer.',
      'Corta o polvo cozido em rodelas finas, incluindo os tentáculos.',
      'Numa tigela, mistura o polvo com a cebola roxa cortada em meias rodelas finas e um molho de coentros picados.',
      'Tempera com azeite generoso, vinagre, sal e pimenta e envolve bem. Deixa repousar 15 minutos para ganhar sabor.',
      'Serve fresco ou à temperatura ambiente, com pão.'
    ]
  },
  {
    name: 'Queijo Azeitão', wiki: 'Queijo_Azeitão', category: 'entradas',
    description: 'Queijo cremoso de ovelha, curado.',
    difficulty: 'Fácil', prep_time: '5 min',
    ingredients: [
      { name: 'Queijo Azeitão', quantity: '1' },
      { name: 'Pão e marmelada', quantity: 'q.b.' }
    ],
    steps: [
      'Retira o queijo Azeitão da embalagem e deixa-o estar à temperatura ambiente 30 minutos antes de servir, para amaciar e desenvolver o aroma.',
      'Abre-o ao meio com uma faca, expondo o recheio cremoso.',
      'Acompanha com pão de centeio ou pão alentejano e, se gostares, com marmelada ou compota de abóbora.',
      'Serve como entrada ou fecho de uma refeição, com um copo de tinto.'
    ]
  },

  // ---------- SOBREMESAS ----------
  {
    name: 'Pastel de Nata', wiki: 'Pastel_de_nata', category: 'sobremesas',
    description: 'Tarteleta de massa folhada com creme de ovos e canela.',
    difficulty: 'Média', prep_time: '90 min',
    ingredients: [
      { name: 'Massa folhada', quantity: '1 rolo' },
      { name: 'Leite', quantity: '500 ml' },
      { name: 'Açúcar', quantity: '150 g' },
      { name: 'Gemas + ovos', quantity: '4 + 2' },
      { name: 'Casca de limão, pau de canela, farinha, canela', quantity: 'q.b.' }
    ],
    steps: [
      'Forra formas pequenas (de pastel) com a massa folhada, esticando-a bem contra as paredes.',
      'Num tacho, ferve o leite com a casca de meio limão e um pau de canela. À parte, faz uma calda com o açúcar e um pouco de água, até atingir o ponto de pé (cerca de 105 °C).',
      'Junta a calda quente ao leite, mexendo, e retira o limão e a canela. Dissolve uma colher de farinha em leite frio e junta para ligar.',
      'Numa tigela, bate as gemas com os ovos inteiros. Adiciona uma concha do leite quente e mexe rapidamente para não talhar, depois junta tudo ao tacho e envolve sem levar ao lume. Coa o creme.',
      'Deita o creme nas formas até 2/3. Leva ao forno muito quente (250 °C) durante 12 a 15 minutos, até a superfície tostar em manchas escuras.',
      'Desforma de imediato e polvilha com açúcar e canela. Serve morno.'
    ]
  },
  {
    name: 'Toucinho do Céu', wiki: 'Toucinho_do_céu', category: 'sobremesas',
    description: 'Bolo de amêndoa e gema, tradicional.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Açúcar', quantity: '300 g' },
      { name: 'Amêndoa', quantity: '200 g' },
      { name: 'Gemas', quantity: '10' },
      { name: 'Toucinho, canela, água', quantity: 'q.b.' }
    ],
    steps: [
      'Faz uma calda com o açúcar e 1 chávena de água, levando ao lume até atingir o ponto de pé (fio).',
      'Junta a amêndoa moída e o toucinho derretido (pode ser substituído por manteiga) à calda e mexe em lume brando 5 minutos, até engrossar.',
      'Retira do lume e deixa arrefecer um pouco. Adiciona as gemas, uma a uma, mexendo rapidamente para não talharem.',
      'Deita a massa numa forma untada e forrada com papel vegetal polvilhado com açúcar.',
      'Leva ao forno pré-aquecido a 180 °C durante 30 minutos, até dourar e estar firme. Deixa arrefecer antes de desenformar e polvilha com canela.'
    ]
  },
  {
    name: 'Arroz Doce', wiki: 'Arroz_doce', category: 'sobremesas',
    description: 'Arroz cozido em leite com açúcar e canela.',
    difficulty: 'Fácil', prep_time: '40 min',
    ingredients: [
      { name: 'Arroz', quantity: '150 g' },
      { name: 'Leite', quantity: '1 L' },
      { name: 'Açúcar', quantity: '150 g' },
      { name: 'Casca de limão, canela, manteiga', quantity: 'q.b.' }
    ],
    steps: [
      'Lava o arroz e coze-o numa panela com água durante 5 minutos, escorre e reserva.',
      'Num tacho, aquece o leite com a casca de meio limão e um pau de canela. Quando ferver, junta o arroz e deixa cozer em lume brando 20 minutos, mexendo de vez em quando.',
      'Quando o arroz estiver macio e o leite quase absorvido, junta o açúcar e uma noz de manteiga e mexe até dissolver.',
      'Deixa apurar mais 5 minutos, mexendo, até ficar cremoso. Retira a casca de limão e o pau de canela.',
      'Deita em taças individuais e polvilha com canela em pó, formando desenhos. Serve morno ou frio.'
    ]
  },
  {
    name: 'Aletria', wiki: 'Aletria', category: 'sobremesas',
    description: 'Massa fina cozida em leite com açúcar e canela.',
    difficulty: 'Fácil', prep_time: '40 min',
    ingredients: [
      { name: 'Aletria', quantity: '150 g' },
      { name: 'Leite', quantity: '1 L' },
      { name: 'Açúcar', quantity: '150 g' },
      { name: 'Gemas, casca de limão, canela', quantity: 'q.b.' }
    ],
    steps: [
      'Parta a aletria (massa fina de cabelho) em pedaços mais curtos.',
      'Num tacho, aquece o leite com a casca de meio limão e um pau de canela. Quando ferver, junta a aletria e deixa cozer em lume brando 15 minutos, mexendo frequentemente para não pegar.',
      'Quando a massa estiver macia e o leite quase absorvido, junta o açúcar e envolve até dissolver.',
      'À parte, bate 4 gemas com um pouco de leite frio. Adiciona uma concha do leite quente às gemas e mexe, depois junta tudo ao tacho, fora do lume, envolvendo sem parar para não talhar.',
      'Leva de novo a lume muito brando 2 minutos, mexendo. Deita em taças e polvilha com canela.'
    ]
  },
  {
    name: 'Pudim Abade de Priscos', wiki: 'Pudim_Abade_de_Priscos', category: 'sobremesas',
    description: 'Pudim de pão, toucinho e amêndoa com calda.',
    difficulty: 'Média', prep_time: '90 min',
    ingredients: [
      { name: 'Pão, açúcar, toucinho, amêndoa, gemas, vinho do Porto, canela', quantity: 'q.b.' }
    ],
    steps: [
      'Prepara uma calda de açúcar (caramelo) com água e leva ao lume até ficar dourada. Forra com ela uma forma de pudim e reserva.',
      'Demolha pão (sem côsta) em leite quente até amolecer e reduz a puré. À parte, derrete o toucinho e pica a amêndoa finamente.',
      'Numa tigela, mistura o puré de pão, o toucinho derretido, a amêndoa, um cálice de vinho do Porto e gemas batidas (cerca de 8). Adiciona açúcar a gosto e envolve bem.',
      'Deita a massa na forma caramelizada e tapa com papel vegetal.',
      'Coze em banho-maria no forno pré-aquecido a 180 °C durante 60 minutos, até ficar firme. Deixa arrefecer, desenforma e serve com a calda por cima.'
    ]
  },
  {
    name: 'Bolo de Bolacha', wiki: 'Bolo_de_bolacha', category: 'sobremesas',
    description: 'Bolo frio de bolacha e creme de manteiga.',
    difficulty: 'Fácil', prep_time: '40 min',
    ingredients: [
      { name: 'Bolacha Maria', quantity: '300 g' },
      { name: 'Manteiga, açúcar, ovos, café, chocolate', quantity: 'q.b.' }
    ],
    steps: [
      'Prepara um café forte e deixa arrefecer. À parte, prepara o creme: bate 200 g de manteiga amolecida com 150 g de açúcar até ficar cremoso e esbranquiçado, e junta 2 ovos inteiros, batendo bem.',
      'Passa rapidamente cada bolacha Maria pelo café (sem a demolhar demasiado) e forra o fundo de uma forma redonda, cobrindo os espaços com bolachas partidas.',
      'Cobre a camada de bolacha com uma camada de creme de manteiga. Repõe camadas alternadas até esgotar, terminando com bolacha.',
      'Derrete chocolate em banho-maria e cobre a última camada de bolacha, alisando por cima.',
      'Leva ao frigorífico pelo menos 4 horas (idealmente de um dia para o outro) antes de desenformar e servir.'
    ]
  },
  {
    name: 'Sericaia', wiki: 'Sericaia', category: 'sobremesas',
    description: 'Pudim de pão e ovos com canela.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Pão, leite, açúcar, ovos, canela, casca de limão', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha pão (sem côsta) em leite quente com casca de limão até amolecer e reduz a puré fino.',
      'Junta açúcar a gosto ao puré e leva a lume brando, mexendo, até engrossar ligeiramente.',
      'À parte, bate 6 gemas e junta uma concha do puré quente, mexendo. Depois junta tudo ao tacho, fora do lume, envolvendo sem parar.',
      'Deita a massa numa forma untada e polvilhada com açúcar e canela.',
      'Leva ao forno pré-aquecido a 180 °C durante 40 minutos, até dourar e estar firme. Deixa arrefecer, polvilha com canela e serve com ameixa seca cozida.'
    ]
  },
  {
    name: 'Farófias', wiki: 'Farófias', category: 'sobremesas',
    description: 'Claras batidas cozidas em leite com canela.',
    difficulty: 'Média', prep_time: '50 min',
    ingredients: [
      { name: 'Ovos', quantity: '6' },
      { name: 'Leite, açúcar, casca de limão, canela', quantity: 'q.b.' }
    ],
    steps: [
      'Separa as claras das gemas (guarda as gemas para o molho). Bate as claras em castelo firme com uma pitada de sal.',
      'Num tacho largo, aquece leite (cerca de 1 L) com casca de limão e um pau de canela. Quando estiver quente (sem ferver), deita colheradas de claras batidas e deixa cozer 2 a 3 minutos de cada lado, virando com cuidado.',
      'Retira as farófias cozidas para um prato e reserva. Mantém o leite quente.',
      'Junta açúcar ao leite (cerca de 200 g) e as gemas batidas, mexendo em lume brando até obter um creme espesso (não deixar ferver para não talhar).',
      'Deita o creme numa taça, dispõe as farófias por cima e polvilha com canela em pó. Serve frio.'
    ]
  },
  {
    name: 'Filhós', wiki: 'Filhós', category: 'sobremesas',
    description: 'Fritos de massa com abóbora.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Farinha, abóbora, ovos, fermento, açúcar, canela, óleo', quantity: 'q.b.' }
    ],
    steps: [
      'Coze abóbora em água até ficar macia, escorre muito bem e reduz a puré. Deixa arrefecer.',
      'Numa tigela, mistura o puré de abóbora com 2 ovos, açúcar a gosto, uma pitada de sal e fermento. Vai juntando farinha e mexendo até obter uma massa macia que se solte das mãos.',
      'Deixa a massa repousar 30 minutos, tapada, num local morno.',
      'Estende porções de massa com o rolo, corta em retângulos e faz um corte no meio.',
      'Frita em óleo quente (170 °C) 1 a 2 minutos de cada lado, até dourar. Escorre em papel absorvente e polvilha com açúcar e canela.'
    ]
  },
  {
    name: 'Rabanadas', wiki: 'Rabanadas', category: 'sobremesas',
    description: 'Fatias de pão em leite, ovo e fritas.',
    difficulty: 'Fácil', prep_time: '30 min',
    ingredients: [
      { name: 'Pão, leite, açúcar, ovos, canela, óleo, casca de limão', quantity: 'q.b.' }
    ],
    steps: [
      'Corta o pão (de véspera, em fatias de 1,5 cm de espessura). Aquece leite com casca de limão, um pau de canela e açúcar a gosto, e deixa arrefecer um pouco.',
      'Passa cada fatia de pão pelo leite açucarado, rapidamente, para embeber mas sem se desfazer.',
      'Passa de imediato por ovo batido, dos dois lados.',
      'Frita em óleo quente (170 °C) 1 a 2 minutos de cada lado, até dourar.',
      'Escorre em papel absorvente e passa por uma mistura de açúcar e canela. Serve mornas ou frias.'
    ]
  },
  {
    name: 'Ovos Moles de Aveiro', wiki: 'Ovos_moles_de_Aveiro', category: 'sobremesas',
    description: 'Doce de gemas em casquinhas.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Gemas', quantity: '10' },
      { name: 'Açúcar, água, casquinhas', quantity: 'q.b.' }
    ],
    steps: [
      'Faz uma calda com açúcar (cerca de 250 g) e água (1 chávena), levando ao lume até atingir o ponto de fio (cerca de 110 °C).',
      'Retira do lume e deixa arrefecer um pouco. Passa as gemas por um passador de rede fino para retirar a pele.',
      'Junta as gemas em fio à calda, mexendo sem parar, e leva de novo a lume muito brando, mexendo sempre, até engrossar e fazer estrada (sem ferver, para não talhar).',
      'Deixa arrefecer o doce e, com um saco de pasteleiro, enche as casquinhas (formas de massa folhada ou de hóstia) em formas de peixes, barrigas ou conchas.',
      'Deixa secar e serve à temperatura ambiente.'
    ]
  },
  {
    name: 'Pão de Ló', wiki: 'Pão_de_ló', category: 'sobremesas',
    description: 'Bolo fofo de ovos com gema cremosa.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Ovos', quantity: '6' },
      { name: 'Açúcar', quantity: '200 g' },
      { name: 'Farinha', quantity: '100 g' },
      { name: 'Sal', quantity: 'q.b.' }
    ],
    steps: [
      'Bate os ovos inteiros com o açúcar e uma pitada de sal em banho-maria morno, durante 15 a 20 minutos, até obter um creme fofo, esbranquiçado e que faz fita.',
      'Retira do banho-maria e continua a bater mais 5 minutos até arrefecer.',
      'Junta a farinha peneirada, envolvendo delicadamente com uma espátula, de baixo para cima, para não perder o ar.',
      'Deita a massa numa forma untada e forrada com papel vegetal, sem alisar demasiado.',
      'Leva ao forno pré-aquecido a 180 °C durante 25 a 30 minutos, até dourar por cima mas manter o interior húmido e cremoso. Deixa arrefecer antes de desenformar.'
    ]
  },

  // ---------- SOPAS ----------
  {
    name: 'Caldo Verde', wiki: 'Caldo_verde', category: 'sopas',
    description: 'Sopa de couve-galega cortada fina, com batata e chouriço.',
    difficulty: 'Fácil', prep_time: '40 min',
    ingredients: [
      { name: 'Couve-galega (tiras finas)', quantity: '500 g' },
      { name: 'Batatas', quantity: '4' },
      { name: 'Cebola e alho', quantity: '1 + 1 dente' },
      { name: 'Chouriço de carne', quantity: '1' },
      { name: 'Água, azeite e sal', quantity: 'q.b.' }
    ],
    steps: [
      'Corta a couve-galega em tiras muito finas (juliana), depois de lhe retirar o talo central. Deixa-as secar sobre um pano.',
      'Num tacho, cobre as batatas descascadas e cortadas em pedaços, a cebola e o alho com água temperada de sal. Leva ao lume e coze 20 minutos, até as batatas estarem macias.',
      'Retira as batatas e a cebola e reduz-as a puré com a varinha mágica, juntando um pouco da água da cozedura. Devolve ao tacho.',
      'Junta a couve cortada fina e deixa ferver 10 a 15 minutos, em lume médio, até a couve ficar macia mas ainda verde.',
      'Adiciona o chouriço cortado às rodelas finas e um fio generoso de azeite. Deixa apurar 5 minutos e serve quente em cumbucas, com mais azeite por cima.'
    ]
  },
  {
    name: 'Sopa da Pedra', wiki: 'Sopa_da_pedra', category: 'sopas',
    description: 'Sopa de feijão com carnes e enchidos.',
    difficulty: 'Média', prep_time: '120 min',
    ingredients: [
      { name: 'Feijão, entremeada, chouriço, morcela, couve, batata, cebola, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha o feijão de véspera. No dia, coloca-o numa panela com a entremeada e o chouriço inteiros, cobre com água e coze 1 hora, retirando a espuma, até o feijão amaciar.',
      'Retira as carnes, corta às fatias e reserva. Mantém o caldo quente.',
      'Junta à panela a couve cortada em pedaços e as batatas em cubos e deixa cozer 20 minutos.',
      'Adiciona a morcela e as carnes cortadas e deixa apurar 15 minutos, em lume brando, até o caldo engrossar e ficar cremoso.',
      'Tradicionalmente serve-se com uma pedra lisa limpa no fundo do prato (daí o nome). Serve quente, regado com azeite.'
    ]
  },
  {
    name: 'Sopa de Cação', wiki: 'Sopa_de_cação', category: 'sopas',
    description: 'Sopa de tubarão com pão e coentros.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Cação', quantity: '500 g' },
      { name: 'Pão, tomate, cebola, alho, coentros, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Corta o cação em postas e tempera com sal. Num tacho, aquece azeite e refoga a cebola picada e os alhos laminados em lume brando.',
      'Junta o tomate pelado e picado e deixa refogar 10 minutos, até se desfazer.',
      'Adiciona o cação e cobre com água quente. Deixa guisar em lume médio 25 a 30 minutos, até o peixe estar macio.',
      'Retira o cação, limpa de espinhas e desfia. Junta novamente ao tacho e retifica o sal.',
      'Corta fatias finas de pão alentejano e coloca no fundo de pratos fundos. Deita a sopa quente por cima, polvilha com coentros frescos picados e serve.'
    ]
  },
  {
    name: 'Canja de Galinha', wiki: 'Canja_de_galinha', category: 'sopas',
    description: 'Caldo de galinha com arroz e hortaliça.',
    difficulty: 'Fácil', prep_time: '60 min',
    ingredients: [
      { name: 'Galinha', quantity: '1' },
      { name: 'Arroz, cenoura, cebola, salsa, sal', quantity: 'q.b.' }
    ],
    steps: [
      'Coloca a galinha numa panela grande com água fria, a cebola inteira, a cenoura às rodelas e um molho de salsa. Tempera com sal.',
      'Leva ao lume e, ao ferver, retira a espuma. Tapa e deixa cozer em lume médio 45 minutos, até a galinha ficar macia.',
      'Retira a galinha, desfia a carne e reserva. Coa o caldo e devolve ao lume.',
      'Quando o caldo ferver, junta o arroz lavado e deixa cozer 15 minutos, em lume brando, até o arroz estar macio.',
      'Junta a carne desfiada e retifica o sal. Serve quente em pratos fundos, polvilhada com salsa picada.'
    ]
  },
  {
    name: 'Sopa de Legumes', wiki: 'Sopa_de_legumes', category: 'sopas',
    description: 'Sopa de vegetais variados, cremosa.',
    difficulty: 'Fácil', prep_time: '40 min',
    ingredients: [
      { name: 'Batata, cenoura, cebola, nabo, abóbora, azeite, sal', quantity: 'q.b.' }
    ],
    steps: [
      'Descasca e corta todos os legumes (batata, cenoura, cebola, nabo, abóbora) em pedaços.',
      'Coloca-os numa panela, cobre com água temperada de sal e junta um fio de azeite. Leva ao lume e coze 25 minutos, até os legumes estarem macios.',
      'Reduz tudo a puré cremoso com a varinha mágica.',
      'Junta um fio de azeite extra e retifica o sal. Se ficar demasiado espessa, adiciona um pouco de água quente.',
      'Serve quente, polvilhada com coentros ou salsa picada, e acompanha com pão.'
    ]
  },
  {
    name: 'Sopa de Peixe', wiki: 'Sopa_de_peixe', category: 'sopas',
    description: 'Sopa de peixe com tomate e pão.',
    difficulty: 'Média', prep_time: '50 min',
    ingredients: [
      { name: 'Peixe', quantity: '500 g' },
      { name: 'Pão, tomate, cebola, alho, coentros, azeite', quantity: 'q.b.' }
    ],
    steps: [
      'Limpa o peixe, corta em postas e tempera com sal. Num tacho, aquece azeite e refoga a cebola picada e os alhos laminados em lume brando.',
      'Junta o tomate pelado e picado e deixa refogar 10 minutos, até se desfazer.',
      'Adiciona o peixe e cobre com água quente. Deixa cozer 20 minutos, em lume médio, até o peixe estar macio.',
      'Retira o peixe, limpa de espinhas e desfia. Junta novamente ao tacho e retifica o sal.',
      'Corta fatias finas de pão e coloca no fundo de pratos fundos. Deita a sopa quente por cima e polvilha com coentros picados.'
    ]
  },
  {
    name: 'Açorda de Bacalhau', wiki: 'Açorda', category: 'sopas',
    description: 'Açorda de pão com bacalhau e coentros.',
    difficulty: 'Média', prep_time: '45 min',
    ingredients: [
      { name: 'Pão, bacalhau, alho, coentros, azeite, ovo', quantity: 'q.b.' }
    ],
    steps: [
      'Demolha e coze o bacalhau em água 8 minutos, escorre, limpa de peles e espinhas e desfia. Reserva o caldo quente.',
      'Corta o pão alentejano (do dia anterior) em fatias finas e coloca numa tigela.',
      'Num tacho, aquece azeite e refoga 4 dentes de alho laminados em lume brando, sem queimar. Junta um molho de coentros picados e deixa saltear 1 minuto.',
      'Adiciona o caldo quente do bacalhau e, quando ferver, deita sobre o pão. Deixa repousar 5 minutos e envolve até obter uma açorda cremosa.',
      'Junta o bacalhau desfiado e envolve. Escalfa um ovo por pessoa em água com vinagre (3 minutos) e coroa cada prato com um ovo. Polvilha com coentros.'
    ]
  },

  // ---------- STREET FOOD ----------
  {
    name: 'Francesinha', wiki: 'Francesinha', category: 'street food',
    description: 'Sanduíche do Porto com carnes, queijo e molho picante de tomate e cerveja.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Fatias de pão de forma', quantity: '2' },
      { name: 'Bife, linguiça, salsicha, fiambre, queijo', quantity: '1 cada' },
      { name: 'Cerveja, polpa de tomate, cebola, alho, louro, piri-piri, farinha', quantity: 'q.b.' }
    ],
    steps: [
      'Prepara o molho: num tacho, refoga a cebola e o alho picados em azeite. Junta a polpa de tomate, a folha de louro, a cerveja, um pouco de caldo de carne e piri-piri a gosto. Deixa ferver 15 minutos, engrossa com um pouco de farinha dissolvida em água fria e retifica. Coa e mantém quente.',
      'Grelha o bife fino, a linguiça e a salsicha até estarem dourados.',
      'Monta a sanduíche: numa fatia de pão de forma, dispõe o bife, a linguiça, a salsicha e o fiambre. Cobrir com a outra fatia e, por cima, coloca fatias de queijo.',
      'Coloca a sanduíche num prato e leva ao forno ou gratinador 2 minutos, até o queijo derreter.',
      'Rega generosamente com o molho quente, de modo a cobrir toda a sanduíche. Serve de imediato com batatas fritas à parte.'
    ]
  },
  {
    name: 'Bifana', wiki: 'Bifana', category: 'street food',
    description: 'Sanduíche de carne de porco no pão.',
    difficulty: 'Fácil', prep_time: '30 min',
    ingredients: [
      { name: 'Pão papo seco', quantity: '4' },
      { name: 'Carne de porco', quantity: '400 g' },
      { name: 'Alho, vinho branco, piri-piri, banha', quantity: 'q.b.' }
    ],
    steps: [
      'Corta a carne de porco em fatias muito finas e tempera com sal, alho picado, piri-piri e vinho branco. Deixa marinar 30 minutos.',
      'Numa frigideira, aquece um pouco de banha em lume forte. Escorre a carne e frita-a rapidamente, 2 a 3 minutos, até dourar.',
      'Junta a marinada à frigideira e deixa apurar 2 minutos, até o molho reduzir e envolver a carne.',
      'Abre os pães (papo seco) ao meio e coloca dentro 2 a 3 fatias de carne com o molho.',
      'Serve de imediato, com mostarda e/ou piri-piri à parte.'
    ]
  },
  {
    name: 'Prego no Pão', wiki: 'Prego_no_pão', category: 'street food',
    description: 'Bife de vacão no pão com mostarda.',
    difficulty: 'Fácil', prep_time: '25 min',
    ingredients: [
      { name: 'Pão papo seco', quantity: '4' },
      { name: 'Bife', quantity: '4' },
      { name: 'Alho, manteiga, mostarda, sal', quantity: 'q.b.' }
    ],
    steps: [
      'Tempera os bifes finos de vacão com sal e alho picado. Deixa repousar 10 minutos.',
      'Numa frigideira, aquece manteiga em lume muito forte. Grelha os bifes 1 a 2 minutos de cada lado, até dourar por fora e ficar mal passados por dentro.',
      'Barra o pão (papo seco) com mostarda e, se gostares, com um dente de alho esfregado.',
      'Coloca o bife dentro do pão e rega com o molho da frigideira.',
      'Serve de imediato, para o bife não arrefecer.'
    ]
  },
  {
    name: 'Rissóis de Camarão', wiki: 'Rissol', category: 'street food',
    description: 'Rissóis fritos de massa com camarão.',
    difficulty: 'Média', prep_time: '60 min',
    ingredients: [
      { name: 'Farinha, água, manteiga', quantity: 'q.b.' },
      { name: 'Camarão, cebola, ovo, pão ralado, óleo', quantity: 'q.b.' }
    ],
    steps: [
      'Faz a massa: num tacho, leva ao lume 1 chávena de água, 50 g de manteiga e uma pitada de sal. Quando ferver, junta de uma vez 1 chávena de farinha e mexe vigorosamente com uma colher de pau até se descolar do fundo. Deixa arrefecer.',
      'Prepara o recheio: coze o camarão, descasca e pica. Num tacho, refoga cebola picada em manteiga, junta o camarão, um pouco de farinha e leite, e deixa engrossar até obter um creme. Retifica o sal e deixa arrefecer.',
      'Estende a massa fina com o rolo, corta em círculos e coloca uma colher de recheio no centro de cada um.',
      'Dobra ao meio em meia-lua e fecha as bordas com um garfo. Passa por ovo batido e depois por pão ralado.',
      'Frita em óleo quente (170 °C) 2 a 3 minutos de cada lado, até dourar. Escorre em papel absorvente e serve quentes.'
    ]
  },
  {
    name: 'Alheira', wiki: 'Alheira', category: 'street food',
    description: 'Enchido de pão e aves, frito com ovo.',
    difficulty: 'Fácil', prep_time: '30 min',
    ingredients: [
      { name: 'Alheira', quantity: '4' },
      { name: 'Azeite, ovos, batata frita, salsa', quantity: 'q.b.' }
    ],
    steps: [
      'Pica levemente a alheira com um palito para não rebentar ao fritar.',
      'Numa frigideira, aquece azeite e frita as alheiras em lume médio 6 a 8 minutos, virando de vez em quando, até ficarem douradas e estaladiças por fora.',
      'À parte, frita batatas cortadas em cubos em óleo quente e escorre em papel absorvente.',
      'Escalfa um ovo por pessoa em água com um fio de vinagre (3 minutos).',
      'Serve a alheira com o ovo escalfado por cima, as batatas fritas à volta e polvilha com salsa.'
    ]
  },
  {
    name: 'Pão de Chouriço', wiki: 'Pão_de_chouriço', category: 'street food',
    description: 'Pão recheado com chouriço.',
    difficulty: 'Fácil', prep_time: '90 min',
    ingredients: [
      { name: 'Farinha, água, fermento, chouriço, sal', quantity: 'q.b.' }
    ],
    steps: [
      'Numa tigela, mistura 500 g de farinha com uma pitada de sal e dissolve 15 g de fermento de padeiro em 300 ml de água morna. Amassa 10 minutos até obter uma massa macia e elástica.',
      'Deixa a massa levedar tapada num local morno durante 1 hora, até dobrar de volume.',
      'Corta o chouriço em rodelas grossas. Divide a massa em bolas, abre cada uma e coloca rodelas de chouriço no centro, fechando bem à volta.',
      'Coloca os pães num tabuleiro polvilhado de farinha e deixa levedar mais 30 minutos.',
      'Leva ao forno pré-aquecido a 220 °C durante 25 a 30 minutos, até dourar. Serve morno.'
    ]
  },
  {
    name: 'Tosta Mista', wiki: 'Tosta_mista', category: 'street food',
    description: 'Tosta com fiambre e queijo.',
    difficulty: 'Fácil', prep_time: '10 min',
    ingredients: [
      { name: 'Pão, fiambre, queijo, manteiga', quantity: 'q.b.' }
    ],
    steps: [
      'Barra duas fatias de pão de forma com manteiga amolecida.',
      'Coloca fatias de fiambre e de queijo entre as duas fatias de pão, com a parte barrada para fora.',
      'Aquece uma torneira ou frigideira em lume médio e coloca a tosta.',
      'Prensar ligeiramente e tostar 3 a 4 minutos de cada lado, até o pão dourar e o queijo derreter.',
      'Corta ao meio e serve quente.'
    ]
  },
  // ---------- MASSAS & RÁPIDOS ----------
  {
    name: 'Esparguete à Bolonhesa', wiki: 'Esparguete_à_bolonhesa', category: 'massas',
    description: 'Esparguete al dente com molho de carne picada estufada, tomate e parmesão.',
    difficulty: 'Fácil', prep_time: '25 min',
    ingredients: [
      { name: 'Esparguete', quantity: '350 g' },
      { name: 'Carne picada (vaca/porco)', quantity: '400 g' },
      { name: 'Cebola e alho', quantity: '1 cebola + 2 dentes' },
      { name: 'Polpa de tomate ou tomate pelado', quantity: '300 g' },
      { name: 'Vinho branco ou tinto', quantity: '50 ml' },
      { name: 'Azeite, orégãos, sal e pimenta', quantity: 'q.b.' },
      { name: 'Queijo parmesão ralado', quantity: 'q.b.' }
    ],
    steps: [
      'Pica a cebola e o alho finamente. Num tacho com azeite, refoga até a cebola ficar translúcida.',
      'Junta a carne picada, tempera com sal, pimenta e orégãos, e vai mexendo com uma colher de pau para soltar a carne até mudar de cor.',
      'Rega com o vinho e deixa evaporar o álcool durante 2 minutos.',
      'Adiciona a polpa de tomate e um pouco de água. Tapa o tacho e deixa apurar em lume brando durante 15 a 20 minutos, mexendo ocasionalmente.',
      'Entretanto, coze o esparguete em água abundante a ferver com sal até ficar al dente. Escorre.',
      'Serve o esparguete com o molho bolonhesa generoso por cima e polvilha com queijo parmesão e orégãos frescos.'
    ]
  },
  {
    name: 'Massa com Atum e Natas', wiki: 'Massa_com_atum', category: 'massas',
    description: 'Um clássico rápido e delicioso: massa penne com atum, milho, natas e ervas.',
    difficulty: 'Fácil', prep_time: '15 min',
    ingredients: [
      { name: 'Massa (penne, espirais ou macarrão)', quantity: '350 g' },
      { name: 'Atum em lata (azeite ou água)', quantity: '3 latas' },
      { name: 'Pacote de natas de culinária', quantity: '200 ml' },
      { name: 'Cebola pequena picada', quantity: '1' },
      { name: 'Alho laminado', quantity: '1 dente' },
      { name: 'Milho doce ou ervilhas', quantity: '100 g (opcional)' },
      { name: 'Azeite, orégãos, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Coze a massa em água a ferver temperada com sal conforme o tempo da embalagem. Escorre e reserva.',
      'Num tacho largo, aquece um fio de azeite e refoga a cebola picada e o alho até amolecerem.',
      'Escorre o atum, desfaz-o com um garfo e junta ao tacho com o milho doce. Envolve durante 2 minutos.',
      'Verte as natas, tempera com sal, pimenta e uma pitada de orégãos ou noz-moscada. Deixa levantar fervura em lume brando.',
      'Junta a massa cozida ao molho, envolve bem para que absorva os sabores e deixa cremoso por 1 minuto. Serve quente.'
    ]
  },
  {
    name: 'Esparguete à Carbonara', wiki: 'Esparguete_à_carbonara', category: 'massas',
    description: 'Massa cremosa com pedacinhos estaladiços de bacon, gemas de ovo, pimenta preta e queijo.',
    difficulty: 'Fácil', prep_time: '20 min',
    ingredients: [
      { name: 'Esparguete', quantity: '350 g' },
      { name: 'Bacon em cubos ou tiras', quantity: '150 g' },
      { name: 'Gemas de ovo + 1 ovo inteiro', quantity: '3 gemas + 1 ovo' },
      { name: 'Queijo parmesão ou pecorino ralado', quantity: '60 g' },
      { name: 'Pimenta preta moída na hora e sal', quantity: 'q.b.' }
    ],
    steps: [
      'Leva ao lume uma panela com água abundante e sal. Quando ferver, coze o esparguete até ficar al dente.',
      'Numa frigideira sem gordura, frita o bacon em lume médio até ficar dourado e crocante. Reserva a gordura da frigideira.',
      'Numa taça, bate as gemas e o ovo inteiro com o queijo ralado e bastante pimenta preta moída, até formar uma pasta homogénea.',
      'Escorre o esparguete guardando meia chávena da água da cozedura. Junta o esparguete quente à frigideira do bacon (com o lume apagado!).',
      'Verte a mistura de ovos e queijo sobre a massa quente, mexendo vigorosamente fora do lume. O calor residual da massa cozinha os ovos tornando-os num molho aveludado e cremoso (junta umas colheres da água guardada se precisares de mais cremosidade).',
      'Serve de imediato com mais queijo e pimenta moída.'
    ]
  },
  {
    name: 'Lasanha de Carne à Bolonhesa', wiki: 'Lasanha_de_carne', category: 'massas',
    description: 'Camadas de massa, molho de carne picada rico, bechamel e queijo derretido no forno.',
    difficulty: 'Média', prep_time: '50 min',
    ingredients: [
      { name: 'Placas de lasanha', quantity: '12 placas' },
      { name: 'Carne picada mista', quantity: '500 g' },
      { name: 'Polpa de tomate e cebola', quantity: '400 g + 1 cebola' },
      { name: 'Molho bechamel', quantity: '500 ml' },
      { name: 'Queijo mozzarella ralado', quantity: '200 g' },
      { name: 'Azeite, alho, orégãos, sal e noz-moscada', quantity: 'q.b.' }
    ],
    steps: [
      'Faz um refogado com cebola, alho e azeite. Junta a carne picada, tempera e salteia até ganhar cor.',
      'Adiciona a polpa de tomate e orégãos. Deixa apurar em lume brando durante 15 minutos até obter um molho espesso.',
      'Num tabuleiro de ir ao forno, coloca uma camada fina de bechamel no fundo. Cobre com placas de lasanha.',
      'Espalha uma camada de carne à bolonhesa, depois um pouco de bechamel e queijo ralado. Repete as camadas alternadas.',
      'Termina com placas de lasanha, cobre generosamente com o restante bechamel e polvilha com bastante queijo mozzarella.',
      'Leva ao forno pré-aquecido a 190 °C durante 30 minutos, até a superfície ficar dourada e a borbulhar. Deixa repousar 5 minutos antes de cortar.'
    ]
  },
  {
    name: 'Risotto de Cogumelos', wiki: 'Risotto_de_cogumelos', category: 'massas',
    description: 'Arroz arbóreo aveludado com cogumelos salteados, vinho branco, manteiga e parmesão.',
    difficulty: 'Média', prep_time: '30 min',
    ingredients: [
      { name: 'Arroz para risotto (Arbóreo ou Carnaroli)', quantity: '300 g' },
      { name: 'Cogumelos frescos laminados', quantity: '300 g' },
      { name: 'Caldo de legumes ou galinha quente', quantity: '1 litro' },
      { name: 'Cebola e alho picados', quantity: '1 pequena + 1 dente' },
      { name: 'Vinho branco seco', quantity: '80 ml' },
      { name: 'Manteiga e queijo parmesão ralado', quantity: '40 g + 50 g' },
      { name: 'Azeite, sal e salsa picada', quantity: 'q.b.' }
    ],
    steps: [
      'Numa frigideira com um fio de azeite, salteia os cogumelos em lume vivo até dourarem. Reserva.',
      'Num tacho, refoga a cebola e o alho em azeite até ficarem translúcidos. Junta o arroz e mexe 2 minutos até os grãos ficarem nacarados.',
      'Rega com o vinho branco e mexe até evaporar completamente.',
      'Vai adicionando o caldo quente, concha a concha, mexendo quase continuamente e deixando absorver antes de juntar a concha seguinte (cerca de 18 minutos).',
      'Quando o arroz estiver cozido mas al dente, retira do lume. Junta os cogumelos salteados, a manteiga e o queijo parmesão.',
      'Mexe vigorosamente para emulsionar e criar o efeito aveludado (mantecatura). Tapa 2 minutos e serve de imediato polvilhado com salsa.'
    ]
  },
  // ---------- MAIS PRATOS DE CARNE POPULARES ----------
  {
    name: 'Frango Assado no Forno com Batatas', wiki: 'Frango_assado_com_batatas', category: 'carne',
    description: 'Frango suculento e dourado no forno com batatas assadas, limão, alho e louro.',
    difficulty: 'Fácil', prep_time: '60 min',
    ingredients: [
      { name: 'Frango partido aos pedaços (ou inteiro aberto)', quantity: '1 (≈1,2 kg)' },
      { name: 'Batatas médias cortadas em gomos', quantity: '6' },
      { name: 'Alhos esmagados e louro', quantity: '4 dentes + 2 folhas' },
      { name: 'Limão (sumo e rodelas)', quantity: '1' },
      { name: 'Vinho branco e azeite', quantity: '100 ml + 50 ml' },
      { name: 'Colorau / pimentão-doce, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Numa tigela, faz uma pasta com o alho picado, colorau, sal, pimenta, azeite e sumo de meio limão. Esfrega bem os pedaços de frango.',
      'Dispõe o frango no centro de um tabuleiro de forno e coloca os gomos de batata em volta.',
      'Tempera as batatas com sal, um fio de azeite e as folhas de louro. Rega o fundo do tabuleiro com o vinho branco e espalha rodelas de limão.',
      'Leva ao forno pré-aquecido a 200 °C durante cerca de 50 a 60 minutos, regando a meio com o molho do tabuleiro para ficar bem suculento.',
      'Quando a pele do frango estiver tostada e estaladiça e as batatas tenras, retira e serve com salada verde.'
    ]
  },
  {
    name: 'Panados de Frango com Arroz de Tomate', wiki: 'Panados_de_frango', category: 'carne',
    description: 'Bifes de frango finos e crocantes panados, acompanhados por arroz de tomate bem malandrinho.',
    difficulty: 'Fácil', prep_time: '30 min',
    ingredients: [
      { name: 'Bifes de frango finos', quantity: '4' },
      { name: 'Ovo batido e pão ralado', quantity: '2 ovos + 150 g pão' },
      { name: 'Arroz carolino', quantity: '200 g' },
      { name: 'Tomate maduro picado ou polpa', quantity: '200 g' },
      { name: 'Cebola e alho picados', quantity: '1 cebola + 1 dente' },
      { name: 'Limão, azeite, óleo para fritar, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Tempera os bifes de frango com sal, pimenta, alho e sumo de limão durante 10 minutos.',
      'Para o arroz de tomate: faz um refogado com azeite, cebola e alho. Junta o tomate pelado picado e deixa cozinhar 5 minutos. Adiciona o arroz, mexe e verte o triplo da água a ferver (600 ml). Coze em lume brando 12 a 15 minutos até ficar caldoso.',
      'Passa cada bife de frango por farinha (opcional), pelo ovo batido e depois pelo pão ralado, pressionando bem.',
      'Frita os panados em óleo quente até ficarem bem dourados de ambos os lados (2 a 3 minutos por lado). Escorre em papel absorvente.',
      'Serve os panados crocantes com fatias de limão e o arroz de tomate fumegante.'
    ]
  },
  {
    name: 'Strogonoff de Frango com Cogumelos', wiki: 'Strogonoff_de_frango', category: 'carne',
    description: 'Tiras de frango macias com cogumelos frescos, mostarda e molho cremoso com batata palha.',
    difficulty: 'Fácil', prep_time: '25 min',
    ingredients: [
      { name: 'Peito de frango cortado em tiras', quantity: '500 g' },
      { name: 'Cogumelos laminados', quantity: '200 g' },
      { name: 'Natas de culinária', quantity: '200 ml' },
      { name: 'Mostarda de Dijon ou clássica', quantity: '1 colher de sopa' },
      { name: 'Polpa de tomate ou ketchup', quantity: '2 colheres de sopa' },
      { name: 'Cebola picada e alho', quantity: '1 pequena + 1 dente' },
      { name: 'Manteiga e azeite, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Tempera as tiras de frango com sal e pimenta.',
      'Numa frigideira larga com um pouco de azeite e manteiga em lume alto, sela o frango rapidamente até dourar por fora. Retira e reserva.',
      'Na mesma frigideira, baixa o lume, junta mais um pouco de manteiga e refoga a cebola picada e o alho. Adiciona os cogumelos e cozinha até libertarem a água.',
      'Junta a mostarda e a polpa de tomate, mexendo bem. Devolve o frango e os seus sucos à frigideira.',
      'Adiciona as natas, mexe e deixa apurar em lume brando durante 3 a 4 minutos até o molho engrossar.',
      'Retifica o sal e a pimenta. Serve de imediato com arroz branco solto e batata palha estaladiça.'
    ]
  },
  {
    name: 'Caril de Frango com Arroz Basmati', wiki: 'Caril_de_frango', category: 'carne',
    description: 'Frango tenro em molho exótico e aromático de caril com leite de coco e maçã ou pimento.',
    difficulty: 'Fácil', prep_time: '30 min',
    ingredients: [
      { name: 'Peito ou coxas de frango em cubos', quantity: '500 g' },
      { name: 'Leite de coco', quantity: '400 ml' },
      { name: 'Pó de caril de boa qualidade', quantity: '1 colher de sopa bem cheia' },
      { name: 'Cebola, alho e gengibre ralado', quantity: '1 cebola + 2 dentes + 1 colher chá' },
      { name: 'Maçã em cubinhos ou pimento', quantity: '1 unidade' },
      { name: 'Arroz basmati', quantity: '250 g' },
      { name: 'Azeite, coentros frescos, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Num tacho largo com azeite, refoga a cebola, o alho e o gengibre ralado até dourarem ligeiramente.',
      'Junta o pó de caril e mexe em lume brando durante 1 minuto para libertar os óleos aromáticos das especiarias.',
      'Adiciona os cubos de frango e a maçã, envolvendo bem no refogado para ganharem a cor do caril.',
      'Verte o leite de coco, tempera com sal e deixa cozinhar em lume brando tapado durante 15 a 20 minutos, até o frango ficar macio e o molho espesso.',
      'Entretanto, coze o arroz basmati lavado em duas medidas de água com sal durante 10 minutos com o tacho tapado.',
      'Serve o caril bem quente com o arroz basmati e polvilha com coentros frescos picados.'
    ]
  },
  {
    name: 'Bife com Molho de Cogumelos', wiki: 'Bife_com_cogumelos', category: 'carne',
    description: 'Bife tenro grelhado na perfeição com um molho cremoso de cogumelos frescos, alho e natas.',
    difficulty: 'Fácil', prep_time: '20 min',
    ingredients: [
      { name: 'Bifes de vaca (vazia, alcatra ou lombo)', quantity: '2 grandes' },
      { name: 'Cogumelos frescos laminados', quantity: '200 g' },
      { name: 'Natas de culinária', quantity: '150 ml' },
      { name: 'Alho picado e manteiga', quantity: '2 dentes + 2 colheres sopa' },
      { name: 'Vinho branco ou conhaque', quantity: '30 ml' },
      { name: 'Azeite, sal grosso e pimenta preta', quantity: 'q.b.' }
    ],
    steps: [
      'Seca bem os bifes com papel absorvente e tempera com sal grosso e pimenta moída na hora.',
      'Numa frigideira bem quente com um fio de azeite e uma noz de manteiga, frita os bifes 2 a 3 minutos de cada lado (conforme o ponto desejado). Retira para um prato e deixa repousar cobertos com folha de alumínio.',
      'Na mesma frigideira, junta o alho picado e os cogumelos. Salteia em lume médio durante 3 minutos até dourarem.',
      'Rega com o vinho branco para soltar os sucos caramelizados do fundo da frigideira.',
      'Adiciona as natas e os sucos libertados pela carne que repousou. Cozinha em lume brando até o molho engrossar.',
      'Cobre os bifes com o molho de cogumelos cremoso e serve acompanhado de batatas fritas ou legumes.'
    ]
  },
  {
    name: 'Hambúrguer no Prato com Ovo a Cavalo', wiki: 'Hambúrguer_no_prato', category: 'carne',
    description: 'Hambúrguer de vaca caseiro com molho de cerveja ou mostarda, ovo estrelado a cavalo e batatas.',
    difficulty: 'Fácil', prep_time: '20 min',
    ingredients: [
      { name: 'Hambúrgueres de carne de vaca fresca', quantity: '2 (150 g cada)' },
      { name: 'Ovos', quantity: '2' },
      { name: 'Alho laminado e folha de louro', quantity: '2 dentes + 1 folha' },
      { name: 'Cerveja ou vinho branco', quantity: '50 ml' },
      { name: 'Mostarda e manteiga', quantity: '1 colher chá + 1 colher sopa' },
      { name: 'Azeite, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Tempera os hambúrgueres com sal e pimenta.',
      'Numa frigideira com um fio de azeite e manteiga, frita os hambúrgueres 3 a 4 minutos de cada lado até ao ponto desejado. Retira para os pratos de servir.',
      'Na mesma frigideira, junta o alho e o louro. Verte a cerveja e a mostarda, mexendo para dissolver os sucos da carne até criar um molho aromático e brilhante.',
      'Estrela os ovos noutra frigideira com gema mal passada.',
      'Coloca um ovo estrelado sobre cada hambúrguer (a cavalo) e rega tudo com o molho da frigideira. Serve com batatas fritas e arroz branco.'
    ]
  },
  {
    name: 'Empadão de Carne Picada', wiki: 'Empadão_de_carne', category: 'carne',
    description: 'Carne picada bem estufada e aconchegante entre camadas de puré de batata dourado no forno.',
    difficulty: 'Média', prep_time: '45 min',
    ingredients: [
      { name: 'Carne picada mista', quantity: '500 g' },
      { name: 'Batatas para puré', quantity: '1 kg' },
      { name: 'Leite e manteiga (para o puré)', quantity: '150 ml + 40 g' },
      { name: 'Cebola, alho e polpa de tomate', quantity: '1 cebola + 2 dentes + 3 colheres sopa' },
      { name: 'Gema de ovo batida (para pincelar)', quantity: '1' },
      { name: 'Azeite, noz-moscada, sal e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Descasca e coze as batatas em água com sal. Escorre e desfaz em puré com o passe-vite. Junta o leite morno, a manteiga e uma pitada de noz-moscada, mexendo bem até ficar aveludado.',
      'Faz um refogado com azeite, cebola e alho picados. Junta a carne picada e tempera com sal e pimenta. Adiciona a polpa de tomate e deixa cozinhar 15 minutos até a carne ficar tenra e sem excesso de líquido.',
      'Num tabuleiro de forno untado, espalha metade do puré de batata.',
      'Coloca toda a carne picada estufada por cima, nivelando bem.',
      'Cobre com o restante puré de batata. Podes fazer desenhos com os dentes de um garfo na superfície.',
      'Pincela com a gema de ovo batida e leva ao forno pré-aquecido a 200 °C durante 20 minutos, até dourar e criar uma crosta bonita. Serve quente.'
    ]
  },
  {
    name: 'Febras Grelhadas com Limão e Alho', wiki: 'Febras_grelhadas', category: 'carne',
    description: 'Febras de porco suculentas marinadas em vinho, louro e alho, grelhadas na brasa ou frigideira.',
    difficulty: 'Fácil', prep_time: '15 min',
    ingredients: [
      { name: 'Febras de porco tenras', quantity: '4 a 6' },
      { name: 'Dentes de alho esmagados', quantity: '3' },
      { name: 'Vinho branco', quantity: '50 ml' },
      { name: 'Folha de louro e limão', quantity: '1 folha + 1 limão' },
      { name: 'Azeite, sal grosso e pimenta', quantity: 'q.b.' }
    ],
    steps: [
      'Num prato fundo, tempera as febras com os alhos picados, louro partido, sal grosso, pimenta e vinho branco durante pelo menos 15 minutos.',
      'Aquece bem uma grelha ou frigideira canelada com umas gotas de azeite.',
      'Coloca as febras na grelha bem quente e deixa selar 2 a 3 minutos de cada lado, regando com a marinada, para ficarem douradas mas suculentas (sem deixar secar).',
      'Retira de imediato, rega com sumo de limão fresco e serve com batatas fritas e salada mista.'
    ]
  },
  // ---------- MAIS PEIXES POPULARES ----------
  {
    name: 'Salmão Grelhado com Legumes', wiki: 'Salmão_grelhado', category: 'peixe',
    description: 'Posta de salmão com pele crocante e interior macio, servida com batatas e legumes salteados.',
    difficulty: 'Fácil', prep_time: '20 min',
    ingredients: [
      { name: 'Postas ou lombos de salmão fresco', quantity: '2' },
      { name: 'Limão e dente de alho', quantity: '1 limão + 1 alho' },
      { name: 'Brócolos ou feijão-verde cozido', quantity: '200 g' },
      { name: 'Batatas pequenas cozidas', quantity: '4' },
      { name: 'Azeite virgem extra, sal grosso e ervas', quantity: 'q.b.' }
    ],
    steps: [
      'Seca o salmão com papel absorvente. Tempera com sal grosso, pimenta e umas gotas de sumo de limão.',
      'Aquece uma frigideira antiaderente ou grelha com apenas umas gotas de azeite.',
      'Coloca o salmão com o lado da pele para baixo e deixa grelhar em lume médio cerca de 4 a 5 minutos, até a pele ficar bem crocante.',
      'Vira com cuidado e grelha mais 2 a 3 minutos do outro lado, para que o interior fique rosado e tenro.',
      'Na mesma frigideira ou ao lado, salteia os brócolos e as batatinhas num fio de azeite com alho laminado.',
      'Serve o salmão com os legumes, uma fatia de limão e um fio de azeite virgem extra.'
    ]
  },
  {
    name: 'Dourada Assada no Forno', wiki: 'Dourada_assada', category: 'peixe',
    description: 'Dourada inteira assada no forno com batatas a murro, cebola, pimentos, alho e azeite.',
    difficulty: 'Fácil', prep_time: '45 min',
    ingredients: [
      { name: 'Dourada fresca amanhada (escamada e limpa)', quantity: '1 grande (≈800 g) ou 2 médias' },
      { name: 'Batatas pequenas com pele', quantity: '8' },
      { name: 'Cebola e pimento cortados em tiras', quantity: '1 cebola + 1/2 pimento' },
      { name: 'Alhos laminados e louro', quantity: '3 dentes + 1 folha' },
      { name: 'Vinho branco e azeite generoso', quantity: '60 ml + 80 ml' },
      { name: 'Sal grosso, salsa e rodelas de limão', quantity: 'q.b.' }
    ],
    steps: [
      'Dá dois golpes transversais no lombo da dourada e introduz meias rodelas de limão. Tempera com sal grosso por dentro e por fora.',
      'Coze as batatas com pele em água com sal durante 10 minutos. Escorre e dá-lhes um leve "murro" para abrirem.',
      'Num tabuleiro de forno, faz uma cama com as rodelas de cebola, o pimento em tiras, os alhos e o louro.',
      'Coloca a dourada no centro e as batatas à volta. Rega tudo generosamente com azeite e o vinho branco.',
      'Leva ao forno pré-aquecido a 200 °C durante 25 a 30 minutos, regando a meio com o molho do tabuleiro.',
      'Serve de imediato com salsa fresca picada.'
    ]
  },
  // ---------- MAIS ENTRADAS & VEGETARIANOS ----------
  {
    name: 'Tortilha de Batata e Cebola', wiki: 'Tortilha_de_batata', category: 'entradas',
    description: 'Tortilha alta, dourada e macia feita com batatas cozinhadas lentamente em azeite e ovos batidos.',
    difficulty: 'Fácil', prep_time: '25 min',
    ingredients: [
      { name: 'Ovos grandes', quantity: '5' },
      { name: 'Batatas médias fatiadas finas', quantity: '4' },
      { name: 'Cebola cortada em meias-luas finas', quantity: '1 grande' },
      { name: 'Azeite virgem extra e sal', quantity: '100 ml azeite + sal q.b.' }
    ],
    steps: [
      'Numa frigideira funda antiaderente, aquece o azeite e cozinha as batatas e a cebola em lume brando com uma pitada de sal, sem fritar em demasia, até ficarem bem macias (cerca de 15 minutos). Escorre o excesso de azeite.',
      'Numa tigela grande, bate os ovos com uma pitada de sal. Junta as batatas e a cebola quentes aos ovos e deixa repousar 2 minutos para absorverem o ovo.',
      'Leva a mesma frigideira com uma colher de azeite ao lume médio. Verte a mistura de ovos e batatas e alisa a superfície.',
      'Cozinha durante 3 a 4 minutos até as bordas firmarem e o fundo dourar.',
      'Com a ajuda de um prato raso grande, vira a tortilha com um movimento rápido e desliza-a de volta para a frigideira para cozinhar o outro lado mais 2 a 3 minutos (mantendo o centro húmido).',
      'Transfere para um prato e serve morna ou fria em fatias ou quadrados.'
    ]
  },
  {
    name: 'Salada Russa com Atum e Ovos', wiki: 'Salada_russa', category: 'entradas',
    description: 'Salada fresca de cubos de batata, cenoura e ervilhas com atum, ovos cozidos e maionese.',
    difficulty: 'Fácil', prep_time: '25 min',
    ingredients: [
      { name: 'Batatas médias em cubos', quantity: '3' },
      { name: 'Cenouras em cubos', quantity: '2' },
      { name: 'Ervilhas', quantity: '100 g' },
      { name: 'Atum em lata escorrido', quantity: '2 latas' },
      { name: 'Ovos cozidos', quantity: '2' },
      { name: 'Maionese de boa qualidade', quantity: '4 a 5 colheres sopa' },
      { name: 'Azeitonas, salsa picada e sal', quantity: 'q.b.' }
    ],
    steps: [
      'Coze os cubos de batata, cenoura e as ervilhas em água temperada com sal até ficarem macios mas firmes (cerca de 10 a 12 minutos). Escorre e deixa arrefecer.',
      'Coze os ovos durante 10 minutos, passa por água fria, descasca e pica um deles em pedaços.',
      'Numa saladeira, junta os legumes cozidos arrefecidos, o atum desfiado e o ovo picado.',
      'Adiciona a maionese e envolve delicadamente até todos os ingredientes estarem bem integrados.',
      'Decora com o segundo ovo cortado em rodelas, azeitonas e salsa picada. Leva ao frigorífico 30 minutos antes de servir bem fresca.'
    ]
  },
  // ---------- MAIS SOBREMESAS POPULARES ----------
  {
    name: 'Mousse de Chocolate Caseira', wiki: 'Mousse_de_chocolate', category: 'sobremesas',
    description: 'Mousse de chocolate preto tradicional, intensa, aveludada e aerada com claras em castelo.',
    difficulty: 'Fácil', prep_time: '20 min',
    ingredients: [
      { name: 'Chocolate preto (mínimo 70% cacau)', quantity: '200 g' },
      { name: 'Ovos (gemas e claras separadas)', quantity: '6' },
      { name: 'Manteiga', quantity: '50 g' },
      { name: 'Açúcar', quantity: '4 colheres de sopa' },
      { name: 'Pitada de sal', quantity: '1 pitada' }
    ],
    steps: [
      'Parte o chocolate em pedaços e derrete em banho-maria ou no micro-ondas juntamente com a manteiga, mexendo até ficar liso e brilhante. Deixa amornar.',
      'Bate as gemas com o açúcar até obteres um creme esbranquiçado e volumoso.',
      'Junta o chocolate derretido morno ao creme de gemas e envolve bem.',
      'Noutra tigela limpa, bate as claras em castelo bem firme com uma pitada de sal.',
      'Envolve as claras em castelo na mistura de chocolate, em 3 vezes, com movimentos suaves e envolventes de baixo para cima com uma espátula (para manter o ar).',
      'Distribui por tacinhas ou coloca numa taça grande e leva ao frigorífico durante pelo menos 4 horas antes de servir.'
    ]
  },
  {
    name: 'Salame de Chocolate', wiki: 'Salame_de_chocolate', category: 'sobremesas',
    description: 'O clássico salame com chocolate em pó, manteiga e pedaços crocantes de bolacha Maria.',
    difficulty: 'Fácil', prep_time: '15 min',
    ingredients: [
      { name: 'Bolacha Maria partida aos pedaços', quantity: '200 g' },
      { name: 'Chocolate em pó de culinária', quantity: '100 g' },
      { name: 'Manteiga sem sal amolecida', quantity: '100 g' },
      { name: 'Açúcar', quantity: '100 g' },
      { name: 'Gema de ovo', quantity: '1' },
      { name: 'Açúcar em pó (para decorar)', quantity: 'q.b.' }
    ],
    steps: [
      'Parte as bolachas Maria com as mãos em pedaços pequenos e médios (sem transformar em pó).',
      'Numa tigela, bate a manteiga amolecida com o açúcar e a gema de ovo até formar uma pasta homogénea.',
      'Adiciona o chocolate em pó e mexe até estar completamente integrado.',
      'Junta os pedaços de bolacha e envolve com as mãos ou uma colher até toda a bolacha estar coberta com o preparado de chocolate.',
      'Coloca o preparado sobre uma folha de papel vegetal ou película aderente e molda com as mãos em forma de rolo de salame bem apertado.',
      'Fecha as pontas como se fosse um rebuçado e leva ao frigorífico durante pelo menos 3 horas até endurecer.',
      'Antes de servir, passa por açúcar em pó e corta em fatias com uma faca afiada.'
    ]
  },
  {
    name: 'Panquecas Fofas Caseiras', wiki: 'Panquecas', category: 'sobremesas',
    description: 'Panquecas americanas altas, macias e douradas perfeitas para lanches ou sobremesa.',
    difficulty: 'Fácil', prep_time: '15 min',
    ingredients: [
      { name: 'Farinha de trigo', quantity: '200 g' },
      { name: 'Leite', quantity: '250 ml' },
      { name: 'Ovo', quantity: '1 grande' },
      { name: 'Manteiga derretida', quantity: '30 g' },
      { name: 'Açúcar', quantity: '2 colheres de sopa' },
      { name: 'Fermento em pó', quantity: '1 colher de sopa' },
      { name: 'Pitada de sal e mel ou frutos vermelhos', quantity: 'q.b.' }
    ],
    steps: [
      'Numa tigela, mistura os ingredientes secos: farinha, açúcar, fermento e uma pitada de sal.',
      'Noutra tigela, bate o ovo com o leite e a manteiga derretida.',
      'Junta os líquidos aos secos e mistura com uma vara de arames apenas até homogeneizar (não batas em excesso para ficarem bem fofas).',
      'Aquece uma frigideira antiaderente em lume brando-médio e unta levemente com manteiga.',
      'Deita uma concha pequena de massa. Quando começarem a surgir bolhas na superfície (cerca de 2 minutos), vira com uma espátula e cozinha mais 1 a 2 minutos do outro lado até dourar.',
      'Empilha as panquecas e serve quentes com mel, compota, fruta fresca ou chocolate.'
    ]
  }
];

export const CATEGORIES = [
  { id: 'todas', label: 'Todas' },
  { id: 'massas', label: 'Massas' },
  { id: 'carne', label: 'Carne' },
  { id: 'peixe', label: 'Peixe' },
  { id: 'sopas', label: 'Sopas' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'street food', label: 'Street Food' },
  { id: 'sobremesas', label: 'Sobremesas' }
];