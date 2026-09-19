import React, { useState } from 'react';
import { Share2, X, Copy, Check, MessageCircle, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

/** Builds a plain-text share message for a recipe. */
const buildText = (recipe) => {
  if (!recipe) return '';
  const name = recipe.recipe_name || recipe.name || 'Receita';
  const lines = [`🍳 ${name}`];
  if (recipe.description) lines.push(recipe.description);
  if (recipe.ingredients?.length) {
    lines.push('', 'Ingredientes:');
    recipe.ingredients.forEach((i) => lines.push(`• ${i.name}${i.quantity ? ` — ${i.quantity}` : ''}`));
  }
  if (recipe.steps?.length) {
    lines.push('', 'Preparação:');
    recipe.steps.forEach((s, idx) => lines.push(`${idx + 1}. ${s}`));
  }
  lines.push('', 'Partilhado via Abana & Jantar 🥘');
  return lines.join('\n');
};

export default function ShareButton({ recipe, label = 'Partilhar' }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const text = buildText(recipe);
  const enc = encodeURIComponent(text);

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: recipe?.recipe_name || 'Receita', text });
        return;
      } catch (e) { /* user cancelled */ }
    }
    setOpen(true);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({ title: 'Receita copiada para a área de transferência' });
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      toast({ title: 'Não consegui copiar', variant: 'destructive' });
    }
  };

  const targets = [
    { name: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/?text=${enc}`, color: 'bg-green-500' },
    { name: 'Facebook', icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${enc}`, color: 'bg-blue-600' },
    { name: 'X / Twitter', icon: Twitter, href: `https://twitter.com/intent/tweet?text=${enc}`, color: 'bg-sky-500' }
  ];

  return (
    <>
      <Button type="button" variant="outline" onClick={nativeShare} className="rounded-full h-9 px-4">
        <Share2 className="w-4 h-4 mr-2" /> {label}
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6" onClick={() => setOpen(false)}>
          <div className="bg-background w-full sm:max-w-sm rounded-t-3xl sm:rounded-3xl shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-lg">Partilhar receita</h3>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-muted"><X className="w-5 h-5" /></button>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {targets.map((t) => (
                <a
                  key={t.name}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-border hover:bg-muted transition"
                >
                  <span className={`w-11 h-11 rounded-full ${t.color} text-white flex items-center justify-center`}>
                    <t.icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-medium">{t.name}</span>
                </a>
              ))}
            </div>
            <Button type="button" variant="outline" onClick={copy} className="w-full rounded-full h-11">
              {copied ? <><Check className="w-4 h-4 mr-2 text-green-500" /> Copiado!</> : <><Copy className="w-4 h-4 mr-2" /> Copiar texto</>}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Para o Instagram, copia o texto e cola na tua publicação ou story.
            </p>
          </div>
        </div>
      )}
    </>
  );
}