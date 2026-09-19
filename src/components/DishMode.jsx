import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Loader2, RefreshCw } from 'lucide-react';
import { generateRecipeFromPrompt } from '@/lib/gemini';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePreferences, buildDietContext } from '@/hooks/usePreferences';
import RecipeResult from '@/components/RecipeResult';
import { fetchDishImage } from '@/lib/wikipediaImage';

const SUGGESTIONS = ['Arroz de pato', 'Francesinha', 'Bolonhesa', 'Frango assado', 'Panquecas', 'Bacalhau com natas'];

export default function DishMode() {
  const [prefs] = usePreferences();
  const [dish, setDish] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [dishImage, setDishImage] = useState(null);
  const [error, setError] = useState(null);

  const generate = async (dishName) => {
    const name = (dishName || '').trim();
    if (!name) return;
    setError(null);
    setRecipe(null);
    setSubmitted(name);
    setLoading(true);
    try {
      const dietContext = buildDietContext(prefs);
      const constraint = dietContext ? `\n\nOBRIGATÓRIO respeitar as preferências alimentares do utilizador: ${dietContext}` : '';
      const prompt = `Cria a receita completa para "${name}" em português de Portugal. Inclui um nome atraente, uma breve descrição, dificuldade, tempo de preparação, lista de ingredientes com quantidades aproximadas e os passos claros, numerados, de como preparar (passo a passo). Se existirem variações regionais, segue a versão mais comum.${constraint}`;
      const res = await generateRecipeFromPrompt({ prompt });
      setRecipe(res);
      const img = await fetchDishImage(res.recipe_name);
      setDishImage(img);
    } catch (e) {
      console.error(e);
      setError('Não consegui gerar a receita com a Google AI. Tenta outra vez.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setRecipe(null);
    setDishImage(null);
    setSubmitted('');
    setDish('');
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center text-center mb-6">
        <motion.div
          animate={{ rotate: [0, -6, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}
          className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-3"
        >
          <Utensils className="w-8 h-8 text-orange-500" />
        </motion.div>
        <h2 className="font-heading text-2xl font-bold mb-1">O que te apetece?</h2>
        <p className="text-muted-foreground text-sm mb-5 max-w-xs">Escreve o prato e eu devolvo a receita com o passo a passo.</p>
        <form
          onSubmit={(e) => { e.preventDefault(); generate(dish); }}
          className="w-full flex gap-2"
        >
          <Input
            value={dish}
            onChange={(e) => setDish(e.target.value)}
            placeholder="Ex.: arroz de pato"
            className="rounded-full bg-white/80"
            autoFocus
          />
          <Button type="submit" disabled={loading || !dish.trim()} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shrink-0">
            Gerar
          </Button>
        </form>
        {!submitted && !loading && (
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => { setDish(s); generate(s); }}
                className="text-xs px-3 py-1.5 rounded-full bg-white/70 border border-white hover:bg-white transition"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading && (
        <div className="text-center py-10">
          <Loader2 className="w-8 h-8 mx-auto text-orange-500 animate-spin mb-3" />
          <p className="text-muted-foreground">A preparar a receita de {submitted}…</p>
        </div>
      )}

      {error && !loading && (
        <div className="text-center py-8">
          <p className="text-destructive mb-4">{error}</p>
          <Button variant="outline" onClick={() => generate(submitted)}>Tentar outra vez</Button>
        </div>
      )}

      {recipe && !loading && (
        <div className="bg-white/80 backdrop-blur rounded-2xl border border-white shadow-sm p-5">
          <RecipeResult recipe={recipe} image={dishImage} />
          <Button onClick={reset} variant="outline" className="w-full rounded-full h-11 mt-5">
            <RefreshCw className="w-4 h-4 mr-2" /> Outra receita
          </Button>
        </div>
      )}
    </div>
  );
}