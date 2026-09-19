import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, X, RefreshCw, Check, Sparkles, Utensils, Camera, Video, Loader2, Plus } from 'lucide-react';
import { generateRecipeFromMedia, fileToResizedInlineData, blobToInlineData } from '@/lib/gemini';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RecipeResult, { recipeSchema } from '@/components/RecipeResult';
import { fetchDishImage } from '@/lib/wikipediaImage';
import { extractVideoFrames } from '@/lib/videoFrames';
import { RECIPES } from '@/data/portugueseRecipes';
import { usePreferences, buildDietContext } from '@/hooks/usePreferences';
import { filterByDiet } from '@/lib/dietFilter';

const INGREDIENT_GROUPS = [
  { title: 'Peixe & Marisco', icon: '🐟', items: ['Bacalhau', 'Polvo', 'Camarão', 'Sardinha', 'Pescada', 'Atum', 'Amêijoas', 'Lulas'] },
  { title: 'Carne & Aves', icon: '🥩', items: ['Frango', 'Porco', 'Vaca', 'Borrego', 'Chouriço', 'Entremeada'] },
  { title: 'Legumes & Frescos', icon: '🥦', items: ['Batata', 'Cebola', 'Alho', 'Tomate', 'Cenoura', 'Couve', 'Pimento', 'Feijão', 'Grão', 'Favas', 'Abóbora'] },
  { title: 'Ovos & Laticínios', icon: '🧀', items: ['Ovos', 'Queijo', 'Natas', 'Leite', 'Manteiga'] },
  { title: 'Despensa & Temperos', icon: '🧂', items: ['Arroz', 'Massa', 'Azeite', 'Açúcar', 'Farinha', 'Pão', 'Limão', 'Coentros', 'Salsa', 'Vinho'] }
];

const CATEGORY_OPTIONS = [
  { id: 'aleatorio', label: 'Aleatório' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'carne', label: 'Carne' },
  { id: 'peixe', label: 'Peixe' },
  { id: 'sobremesas', label: 'Sobremesas' },
  { id: 'sopas', label: 'Sopas' },
  { id: 'street food', label: 'Street Food' }
];

const PHOTO_CATEGORIES = [
  { id: 'prato_principal', label: 'Prato Principal' },
  { id: 'sopa', label: 'Sopa' },
  { id: 'sobremesa', label: 'Sobremesa' },
  { id: 'street_food', label: 'Street Food' }
];

const DIET_OPTIONS = [
  { id: 'omni', label: 'Sem restrição' },
  { id: 'vegetarian', label: 'Vegetariano' },
  { id: 'vegan', label: 'Vegano' },
  { id: 'pescatarian', label: 'Pescetariano' },
  { id: 'keto', label: 'Keto' },
  { id: 'lowCarb', label: 'Low-carb' },
  { id: 'paleo', label: 'Paleo' }
];

const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const matchRecipes = (selected, category, prefs) => {
  const sel = selected.map(normalize);
  let pool = category && category !== 'aleatorio' ? RECIPES.filter((r) => r.category === category) : RECIPES;
  pool = filterByDiet(pool, prefs);
  return pool.map((r) => {
    const ings = r.ingredients.map((i) => normalize(i.name));
    let matched = 0;
    ings.forEach((name) => {
      if (sel.some((s) => name.includes(s) || s.includes(name))) matched++;
    });
    return { recipe: r, matched, total: ings.length };
  })
    .filter((x) => x.matched > 0)
    .sort((a, b) => b.matched - a.matched || a.total - b.total);
};

export default function FridgeMode({ open, onClose }) {
  const [selected, setSelected] = useState([]);
  const [category, setCategory] = useState('aleatorio');
  const [prefs, updatePrefs] = usePreferences();
  const [scored, setScored] = useState(null);
  const [index, setIndex] = useState(0);
  const [dishImage, setDishImage] = useState(null);
  const [loadingImg, setLoadingImg] = useState(false);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [photoError, setPhotoError] = useState(null);
  const [aiRecipe, setAiRecipe] = useState(null);
  const [aiImage, setAiImage] = useState(null);
  const [photoUrls, setPhotoUrls] = useState(null);
  const [photoMedia, setPhotoMedia] = useState(null);
  const [photoCategory, setPhotoCategory] = useState(null);
  const [customInput, setCustomInput] = useState('');
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const toggle = (item) =>
    setSelected((s) => (s.includes(item) ? s.filter((x) => x !== item) : [...s, item]));

  const addCustom = () => {
    const val = customInput.trim();
    if (!val) return;
    setSelected((s) => (s.includes(val) ? s : [...s, val]));
    setCustomInput('');
  };

  const handlePhoto = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setPhotoError(null);
    setPhotoLoading(true);
    try {
      const { previewUrl, inlineData } = await fileToResizedInlineData(file);
      setPhotoUrls([previewUrl]);
      setPhotoMedia([inlineData]);
      setPhotoCategory(null);
    } catch (err) {
      console.error(err);
      setPhotoError('Não consegui processar a foto. Tenta novamente.');
    } finally {
      setPhotoLoading(false);
    }
  };

  const handleVideo = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setPhotoError(null);
    setPhotoLoading(true);
    try {
      const blobs = await extractVideoFrames(file, 4);
      const previews = [];
      const media = [];
      for (const blob of blobs) {
        const item = await blobToInlineData(blob);
        previews.push(item.previewUrl);
        media.push(item.inlineData);
      }
      setPhotoUrls(previews);
      setPhotoMedia(media);
      setPhotoCategory(null);
    } catch (err) {
      console.error(err);
      setPhotoError('Não consegui analisar o vídeo. Tenta novamente ou usa a foto.');
    } finally {
      setPhotoLoading(false);
    }
  };

  const generateFromPhoto = async (cat) => {
    if (!photoMedia || !photoMedia.length || !cat) return;
    setPhotoError(null);
    setPhotoLoading(true);
    try {
      const catLabel = PHOTO_CATEGORIES.find((c) => c.id === cat)?.label.toLowerCase();
      const dietCtx = buildDietContext(prefs);
      const dietClause = dietCtx ? ` ${dietCtx} A receita tem de respeitar obrigatoriamente estas restrições alimentares.` : '';
      const prompt = `Olha para estas imagens (de uma fotografia ou de frames de um vídeo) de um frigorífico ou despensa e identifica os ingredientes visíveis. Depois sugere ${catLabel} que possa ser feito com esses ingredientes, aproveitando o máximo possível o que aparece.${dietClause} Devolve a receita completa em português de Portugal: nome atraente, breve descrição, dificuldade, tempo de preparação, lista de ingredientes com quantidades aproximadas e passos numerados de preparação.`;
      const res = await generateRecipeFromMedia({
        mediaList: photoMedia,
        prompt
      });
      setAiRecipe(res);
      const img = await fetchDishImage(res.recipe_name);
      setAiImage(img);
    } catch (err) {
      console.error(err);
      setPhotoError('Não consegui analisar a foto com a Google AI. Tenta novamente.');
    } finally {
      setPhotoLoading(false);
    }
  };

  const loadImage = async (recipe) => {
    setDishImage(null);
    setLoadingImg(true);
    const img = await fetchDishImage(recipe.name);
    setDishImage(img);
    setLoadingImg(false);
  };

  const suggest = () => {
    const results = matchRecipes(selected, category, prefs);
    setScored(results);
    setIndex(0);
    if (results.length) loadImage(results[0].recipe);
  };

  const next = () => {
    const ni = index + 1;
    if (!scored || ni >= scored.length) return;
    setIndex(ni);
    loadImage(scored[ni].recipe);
  };

  const reset = () => {
    setScored(null);
    setIndex(0);
    setDishImage(null);
    setSelected([]);
    setCategory('aleatorio');
    setAiRecipe(null);
    setAiImage(null);
    setPhotoUrls(null);
    setPhotoMedia(null);
    setPhotoCategory(null);
    setPhotoError(null);
  };

  const current = scored && scored.length > 0 ? scored[index] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="bg-background w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background/90 backdrop-blur flex items-center justify-between px-6 py-4 border-b border-border z-10">
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-orange-500" />
                <h2 className="font-heading text-lg font-semibold">Modo Frigorífico</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {!scored && !aiRecipe && !photoUrls && (
                <>
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-orange-500/10 flex items-center justify-center"
                    >
                      <Utensils className="w-8 h-8 text-orange-500" />
                    </motion.div>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      Seleciona os ingredientes que tens em casa e eu sugiro uma receita tradicional portuguesa que os aproveite.
                    </p>
                  </div>

                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      className="hidden"
                      onChange={handlePhoto}
                    />
                    <input
                      ref={videoInputRef}
                      type="file"
                      accept="video/*"
                      capture="environment"
                      className="hidden"
                      onChange={handleVideo}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={photoLoading}
                        className="group flex items-center justify-center gap-3 p-3.5 rounded-2xl border border-orange-200/80 bg-gradient-to-br from-orange-50/70 via-white to-amber-50/50 hover:from-orange-100 hover:to-amber-100 shadow-sm hover:shadow-md active:scale-[0.98] transition-all text-left"
                      >
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-sm shadow-orange-500/30 shrink-0 group-hover:scale-105 transition-transform">
                          {photoLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Camera className="w-5 h-5 stroke-[2.2]" />}
                        </span>
                        <div>
                          <span className="block text-xs sm:text-sm font-bold text-foreground leading-tight">Tirar Foto</span>
                          <span className="text-[10px] text-muted-foreground">Reconhecer IA</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => videoInputRef.current?.click()}
                        disabled={photoLoading}
                        className="group flex items-center justify-center gap-3 p-3.5 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/70 via-white to-pink-50/50 hover:from-rose-100 hover:to-pink-100 shadow-sm hover:shadow-md active:scale-[0.98] transition-all text-left"
                      >
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-sm shadow-rose-500/30 shrink-0 group-hover:scale-105 transition-transform">
                          {photoLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Video className="w-5 h-5 stroke-[2.2]" />}
                        </span>
                        <div>
                          <span className="block text-xs sm:text-sm font-bold text-foreground leading-tight">Gravar Vídeo</span>
                          <span className="text-[10px] text-muted-foreground">Varrer prateleiras</span>
                        </div>
                      </button>
                    </div>
                    {photoError && <p className="text-xs text-destructive mt-2 text-center">{photoError}</p>}
                    <div className="flex gap-2 mt-3">
                      <Input
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addCustom(); } }}
                        placeholder="Adicionar ingrediente à mão…"
                        className="rounded-full bg-white"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addCustom}
                        disabled={!customInput.trim()}
                        className="rounded-full px-4 shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    {selected.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selected.map((item) => (
                          <button
                            key={item}
                            onClick={() => toggle(item)}
                            className="px-3 py-1.5 rounded-full text-sm font-medium bg-orange-500 text-white border border-orange-500 flex items-center gap-1.5"
                          >
                            {item}<X className="w-3 h-3" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Preferências alimentares</h4>
                    <div className="flex flex-wrap gap-2">
                      {DIET_OPTIONS.map((d) => {
                        const on = prefs.diet === d.id;
                        return (
                          <button
                            key={d.id}
                            onClick={() => updatePrefs({ diet: d.id })}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${on ? 'bg-orange-500 text-white border-orange-500 shadow-sm' : 'bg-white border-border text-foreground hover:bg-muted'}`}
                          >
                            {d.label}
                          </button>
                        );
                      })}
                      <button
                        onClick={() => updatePrefs((p) => ({ restrictions: { ...p.restrictions, glutenFree: !p.restrictions.glutenFree } }))}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${prefs.restrictions?.glutenFree ? 'bg-orange-500 text-white border-orange-500 shadow-sm' : 'bg-white border-border text-foreground hover:bg-muted'}`}
                      >
                        Sem glúten
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Categoria</h4>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORY_OPTIONS.map((c) => {
                        const on = category === c.id;
                        return (
                          <button
                            key={c.id}
                            onClick={() => setCategory(c.id)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${on ? 'bg-orange-500 text-white border-orange-500 shadow-sm' : 'bg-white border-border text-foreground hover:bg-muted'}`}
                          >
                            {c.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {INGREDIENT_GROUPS.map((g) => (
                      <div key={g.title}>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                          <span className="text-sm">{g.icon}</span>
                          <span>{g.title}</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {g.items.map((item) => {
                            const on = selected.includes(item);
                            return (
                              <button
                                key={item}
                                onClick={() => toggle(item)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition flex items-center gap-1.5 ${on ? 'bg-orange-500 text-white border-orange-500 shadow-sm' : 'bg-white border-border text-foreground hover:bg-muted'}`}
                              >
                                {on && <Check className="w-3.5 h-3.5" />}
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={suggest}
                    disabled={selected.length === 0}
                    className="w-full rounded-full h-12 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" /> Sugerir receita
                  </Button>
                </>
              )}

              {photoUrls && !aiRecipe && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                  <div className="text-center">
                    {photoUrls[0] ? (
                      <img
                        src={photoUrls[0]}
                        alt="Foto do frigorífico"
                        className="w-24 h-24 object-cover mx-auto mb-3 rounded-2xl shadow-md border-2 border-orange-300"
                      />
                    ) : (
                      <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                        <Camera className="w-7 h-7 text-orange-500" />
                      </div>
                    )}
                    <p className="text-muted-foreground text-sm">
                      {photoUrls.length > 1 ? `${photoUrls.length} imagens prontas!` : 'Imagem pronta!'} Que tipo de prato queres fazer com os ingredientes visíveis?
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {PHOTO_CATEGORIES.map((c) => {
                      const on = photoCategory === c.id;
                      return (
                        <button
                          key={c.id}
                          onClick={() => setPhotoCategory(c.id)}
                          className={`px-4 py-3 rounded-2xl text-sm font-medium border transition ${on ? 'bg-orange-500 text-white border-orange-500 shadow-sm' : 'bg-white border-border text-foreground hover:bg-muted'}`}
                        >
                          {c.label}
                        </button>
                      );
                    })}
                  </div>
                  {photoError && <p className="text-xs text-destructive text-center">{photoError}</p>}
                  <Button
                    onClick={() => generateFromPhoto(photoCategory)}
                    disabled={!photoCategory || photoLoading}
                    className="w-full rounded-full h-12 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    {photoLoading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> A gerar receita com Google AI…</> : <><Sparkles className="w-4 h-4 mr-2" /> Gerar receita</>}
                  </Button>
                  <Button onClick={reset} variant="ghost" className="w-full rounded-full h-11">Começar de novo</Button>
                </motion.div>
              )}

              {aiRecipe && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600 font-medium">
                    <Sparkles className="w-3.5 h-3.5" /> Receita criada com Google Gemini AI
                  </span>
                  <RecipeResult recipe={aiRecipe} image={aiImage} />
                  <Button onClick={reset} variant="outline" className="w-full rounded-full h-11">
                    <RefreshCw className="w-4 h-4 mr-2" /> Começar de novo
                  </Button>
                </motion.div>
              )}

              {scored && scored.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Não encontrei uma receita com esses ingredientes. Tenta adicionar mais ingredientes básicos (batata, cebola, arroz…).</p>
                  <Button variant="outline" onClick={reset}>Começar de novo</Button>
                </div>
              )}

              {current && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600 font-medium">
                      <Sparkles className="w-3.5 h-3.5" /> Usa {current.matched} dos teus ingredientes
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Sugestão {index + 1} de {scored.length}
                    </span>
                  </div>

                  <RecipeResult recipe={current.recipe} image={dishImage} />

                  <div className="flex gap-2">
                    {index + 1 < scored.length && (
                      <Button onClick={next} variant="outline" className="flex-1 rounded-full h-11">
                        <RefreshCw className="w-4 h-4 mr-2" /> Outra sugestão
                      </Button>
                    )}
                    <Button onClick={reset} variant="ghost" className="flex-1 rounded-full h-11">
                      Começar de novo
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}