import cataplanaImg from '@/assets/recipes/cataplana.jpg';
import arrozDePatoImg from '@/assets/recipes/arroz_de_pato.jpg';
import ranchoImg from '@/assets/recipes/rancho.jpg';
import pregoImg from '@/assets/recipes/prego.jpg';
import alheiraImg from '@/assets/recipes/alheira.jpg';
import paoDeChouricoImg from '@/assets/recipes/pao_de_chourico.jpg';
import strogonoffImg from '@/assets/recipes/strogonoff_frango.jpg';
import carilFrangoImg from '@/assets/recipes/caril_frango.jpg';
import bifeCogumelosImg from '@/assets/recipes/bife_cogumelos.jpg';
import empadaoCarneImg from '@/assets/recipes/empadao_carne.jpg';
import febrasGrelhadasImg from '@/assets/recipes/febras_grelhadas.jpg';
import tortilhaBatataImg from '@/assets/recipes/tortilha_batata.jpg';
import saladaRussaImg from '@/assets/recipes/salada_russa.jpg';
import mousseChocolateImg from '@/assets/recipes/mousse_chocolate.jpg';
import salameChocolateImg from '@/assets/recipes/salame_chocolate.jpg';

// Real dish images from Wikimedia Commons and high-resolution culinary photography.
// Keyed by the recipe `wiki` title. Recipes without a corresponding image fall back
// to the gradient + icon in the UI.

export const RECIPE_IMAGES = {
  // Peixe
  'Bacalhau_à_Brás': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bacalhau_a_Bras.jpg/500px-Bacalhau_a_Bras.jpg',
  'Polvo_à_lagareiro': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Polvo_%C3%A0_Lagareiro.jpg/500px-Polvo_%C3%A0_Lagareiro.jpg',
  'Bacalhau_à_Gomes_de_Sá': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bacalhau_%C3%A0_Gomes_de_S%C3%A1.jpg/500px-Bacalhau_%C3%A0_Gomes_de_S%C3%A1.jpg',
  'Bacalhau_espiritual': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80',
  'Bacalhau_com_natas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bacalhau_com_natas.jpg/500px-Bacalhau_com_natas.jpg',
  'Arroz_de_marisco': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Arroz_de_marisco_-_Tavira_2.jpg/500px-Arroz_de_marisco_-_Tavira_2.jpg',
  'Cataplana_de_marisco': cataplanaImg,
  'Sardinha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sardinhas_assadas.jpg/500px-Sardinhas_assadas.jpg',
  'Carapau': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
  'Açorda_de_marisco': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/A_orda_de_Marisco_%28cropped%29.jpg/500px-A_orda_de_Marisco_%28cropped%29.jpg',
  'Caldeirada': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Caldeirada.jpg/500px-Caldeirada.jpg',
  'Bacalhau_à_Lagareiro': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bacalhau_assado_com_batatas_a_murro.jpg/500px-Bacalhau_assado_com_batatas_a_murro.jpg',
  'Pescada': 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=600&q=80',
  'Salmão_grelhado': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
  'Dourada_assada': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',

  // Carne
  'Cozido_à_portuguesa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cozido_a_portuguesa_1.JPG/500px-Cozido_a_portuguesa_1.JPG',
  'Feijoada_à_transmontana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Feijoada_%C3%A0_transmontada.jpg/500px-Feijoada_%C3%A0_transmontada.jpg',
  'Carne_de_porco_à_alentejana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Carne_de_porco_%C3%A0_Alentejana.jpg/500px-Carne_de_porco_%C3%A0_Alentejana.jpg',
  'Cabidela': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/PortoExterior_PatoDeCabidela.JPG/500px-PortoExterior_PatoDeCabidela.JPG',
  'Rojões': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Roj%C3%B5es_%C3%A0_moda_do_minho_com_arroz_de_sarrabulho.jpg/500px-Roj%C3%B5es_%C3%A0_moda_do_minho_com_arroz_de_sarrabulho.jpg',
  'Chanfana': 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80',
  'Rancho': ranchoImg,
  'Tripas_à_moda_do_Porto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Tripas_%C3%A0_moda_do_Porto.JPG/500px-Tripas_%C3%A0_moda_do_Porto.JPG',
  'Favas_à_portuguesa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Favas_%C3%A0_Portuguesa_.png/500px-Favas_%C3%A0_Portuguesa_.png',
  'Arroz_de_pato': arrozDePatoImg,
  'Ensopado': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ensopado_de_borrego%2C_%C3%93bidos.jpg/500px-Ensopado_de_borrego%2C_%C3%93bidos.jpg',
  'Frango_assado_com_batatas': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80',
  'Panados_de_frango': 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
  'Strogonoff_de_frango': strogonoffImg,
  'Caril_de_frango': carilFrangoImg,
  'Bife_com_cogumelos': bifeCogumelosImg,
  'Hambúrguer_no_prato': 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
  'Empadão_de_carne': empadaoCarneImg,
  'Febras_grelhadas': febrasGrelhadasImg,

  // Massas & Rápidos
  'Esparguete_à_bolonhesa': 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=600&q=80',
  'Massa_com_atum': 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80',
  'Esparguete_à_carbonara': 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80',
  'Lasanha_de_carne': 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80',
  'Risotto_de_cogumelos': 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80',

  // Entradas
  'Ameijoas_à_Bulhão_Pato': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Am%C3%AAijoas_%C3%A0_Bulh%C3%A3o_Pato.jpg/500px-Am%C3%AAijoas_%C3%A0_Bulh%C3%A3o_Pato.jpg',
  'Camarão': 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80',
  'Pataniscas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pataniscas_de_Bacalhau.jpg/500px-Pataniscas_de_Bacalhau.jpg',
  'Pastel_de_bacalhau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bolinhos_de_bacalhau.jpg/500px-Bolinhos_de_bacalhau.jpg',
  'Orelheira': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
  'Melão_com_presunto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Prosciutto_with_melon.jpg/500px-Prosciutto_with_melon.jpg',
  'Polvo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Octopus_salad_%284497641966%29.jpg/500px-Octopus_salad_%284497641966%29.jpg',
  'Queijo_Azeitão': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Queijo_de_Azeit%C3%A3o.jpg/500px-Queijo_de_Azeit%C3%A3o.jpg',
  'Tortilha_de_batata': tortilhaBatataImg,
  'Salada_russa': saladaRussaImg,

  // Sobremesas
  'Pastel_de_nata': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Pastel_de_nata_%2818616473070%29.jpg/500px-Pastel_de_nata_%2818616473070%29.jpg',
  'Toucinho_do_céu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Toucinhoceu.jpg/500px-Toucinhoceu.jpg',
  'Arroz_doce': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Arroz_doce%2C_Paran%C3%A1.jpg/500px-Arroz_doce%2C_Paran%C3%A1.jpg',
  'Aletria': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Aletria.jpg/500px-Aletria.jpg',
  'Pudim_Abade_de_Priscos': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pudim_Abade_de_Priscos.png/500px-Pudim_Abade_de_Priscos.png',
  'Bolo_de_bolacha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bolo_de_bolacha.jpg/500px-Bolo_de_bolacha.jpg',
  'Sericaia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sericaia3.jpg/500px-Sericaia3.jpg',
  'Farófias': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Far%C3%B3fias_2020.jpg/500px-Far%C3%B3fias_2020.jpg',
  'Filhós': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Filh%C3%B3s.jpg/500px-Filh%C3%B3s.jpg',
  'Rabanadas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Rabanadas%2C_Christmas_cakes_%282135990222%29.jpg/500px-Rabanadas%2C_Christmas_cakes_%282135990222%29.jpg',
  'Ovos_moles_de_Aveiro': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ovos_moles.jpg',
  'Pão_de_ló': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/P%C3%A3o-de-l%C3%B3.jpg/500px-P%C3%A3o-de-l%C3%B3.jpg',
  'Mousse_de_chocolate': mousseChocolateImg,
  'Salame_de_chocolate': salameChocolateImg,
  'Panquecas': 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
  'Baba_de_camelo': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
  'Leite-creme': 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=600&q=80',
  'Natas_do_céu': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80',
  'Serradura': 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
  'Mousse_de_maracujá': 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80',
  'Mousse_de_manga': 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=600&q=80',
  'Pudim_flan': 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80',
  'Torta_de_laranja': 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80',
  'Bolo_de_cenoura': 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80',
  'Tarte_de_maçã': 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80',
  'Cheesecake': 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
  'Queijadas_de_Sintra': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  'Travesseiros_de_Sintra': 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80',
  'Tiramisù': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
  'Brownie': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',

  // Sopas
  'Caldo_verde': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Caldo_verde_-_Jul_2008.jpg/500px-Caldo_verde_-_Jul_2008.jpg',
  'Sopa_da_pedra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sopa_da_pedra_em_Almeirim.JPG/500px-Sopa_da_pedra_em_Almeirim.JPG',
  'Sopa_de_cação': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sopa_de_ca%C3%A7%C3%A3o.jpg/500px-Sopa_de_ca%C3%A7%C3%A3o.jpg',
  'Canja_de_galinha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Canja_de_galinha.jpg/500px-Canja_de_galinha.jpg',
  'Sopa_de_legumes': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
  'Sopa_de_peixe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fish_soup%2C_Porto_Moniz%2C_Madeira.jpg/500px-Fish_soup%2C_Porto_Moniz%2C_Madeira.jpg',
  'Açorda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/A%C3%A7orda_%C3%A0_Alentejana.jpg/500px-A%C3%A7orda_%C3%A0_Alentejana.jpg',

  // Street food
  'Francesinha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/A_Francesinha_%285401346513%29.jpg/500px-A_Francesinha_%285401346513%29.jpg',
  'Bifana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bifana_on_a_plate.jpg/500px-Bifana_on_a_plate.jpg',
  'Prego_no_pão': pregoImg,
  'Alheira': alheiraImg,
  'Rissol': 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80',
  'Pão_de_chouriço': paoDeChouricoImg,
  'Tosta_mista': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
};