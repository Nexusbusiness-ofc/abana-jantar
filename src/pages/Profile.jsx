import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Wheat, Milk, Check, Sparkles, User, Leaf } from 'lucide-react';
import { usePreferences } from '@/hooks/usePreferences';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

const DIETS = [
  { id: 'omni', label: 'Tudo', desc: 'Sem restrições' },
  { id: 'vegetarian', label: 'Vegetariano', desc: 'Sem carne nem peixe' },
  { id: 'vegan', label: 'Vegano', desc: 'Sem produtos animais' },
  { id: 'pescatarian', label: 'Pescetariano', desc: 'Peixe, sem carne' },
  { id: 'keto', label: 'Keto', desc: 'Baixa em hidratos' },
  { id: 'lowCarb', label: 'Low-carb', desc: 'Poucos hidratos' },
  { id: 'paleo', label: 'Paleo', desc: 'Sem processados' },
];

const RESTRICTIONS = [
  { key: 'glutenFree', label: 'Sem glúten', icon: Wheat },
  { key: 'lactoseFree', label: 'Sem lactose', icon: Milk },
];

const ALLERGIES = [
  { id: 'nuts', label: 'Frutos secos' },
  { id: 'peanut', label: 'Amendoim' },
  { id: 'shellfish', label: 'Marisco' },
  { id: 'egg', label: 'Ovo' },
  { id: 'soy', label: 'Soja' },
];

export default function Profile() {
  const [prefs, update] = usePreferences();

  const toggleAllergy = (id) => {
    const set = new Set(prefs.allergies || []);
    if (set.has(id)) set.delete(id); else set.add(id);
    update({ allergies: Array.from(set) });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
      <div className="max-w-xl mx-auto px-6 py-10 sm:py-16">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition mb-8">
          <ChevronLeft className="w-4 h-4" /> Voltar
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
            <User className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold leading-tight">Preferências alimentares</h1>
            <p className="text-sm text-muted-foreground">A IA usa isto ao sugerir receitas do frigorífico.</p>
          </div>
        </div>

        {/* Diet type */}
        <section className="mb-8">
          <h2 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Tipo de alimentação</h2>
          <div className="grid grid-cols-2 gap-3">
            {DIETS.map(d => {
              const active = prefs.diet === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => update({ diet: d.id })}
                  className={`rounded-2xl p-4 text-left border transition ${active ? 'border-orange-400 bg-white shadow-md' : 'border-white bg-white/70 hover:bg-white'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold">{d.label}</span>
                    {active && <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center"><Check className="w-3 h-3" /></span>}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{d.desc}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Restrictions */}
        <section className="mb-8">
          <h2 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Restrições</h2>
          <div className="rounded-2xl bg-white/70 border border-white divide-y divide-border overflow-hidden">
            {RESTRICTIONS.map(r => (
              <div key={r.key} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <r.icon className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="font-medium">{r.label}</span>
                </div>
                <Switch
                  checked={!!prefs.restrictions?.[r.key]}
                  onCheckedChange={(val) => update({ restrictions: { ...prefs.restrictions, [r.key]: val } })}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Allergies */}
        <section className="mb-8">
          <h2 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Alergias</h2>
          <div className="flex flex-wrap gap-2">
            {ALLERGIES.map(a => {
              const active = (prefs.allergies || []).includes(a.id);
              return (
                <button
                  key={a.id}
                  onClick={() => toggleAllergy(a.id)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium border transition ${active ? 'border-rose-400 bg-rose-500 text-white shadow-sm' : 'border-white bg-white/70 text-foreground hover:bg-white'}`}
                >
                  {active && <Check className="w-3.5 h-3.5 inline mr-1" />}{a.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Other */}
        <section className="mb-10">
          <h2 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Outras restrições</h2>
          <Input
            value={prefs.other || ''}
            onChange={(e) => update({ other: e.target.value })}
            placeholder="Ex: sem alho, baixo teor de sal…"
            className="rounded-xl bg-white/70"
          />
        </section>

        <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
          <Leaf className="w-4 h-4" /> Guardado automaticamente no teu dispositivo.
        </div>
      </div>
    </div>
  );
}