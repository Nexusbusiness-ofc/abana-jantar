import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Trash2, Check, Eraser, PackageOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useShoppingList } from '@/hooks/useShoppingList';

export default function ShoppingList({ open, onClose }) {
  const { items, add, remove, toggle, clear, clearChecked } = useShoppingList();
  const [name, setName] = useState('');
  const [qty, setQty] = useState('');

  const addCustom = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    add(name, qty.trim());
    setName('');
    setQty('');
  };

  const sorted = [...items].sort((a, b) => Number(a.checked) - Number(b.checked));
  const remaining = items.filter((i) => !i.checked).length;
  const hasChecked = items.some((i) => i.checked);

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
                <ShoppingCart className="w-5 h-5 text-orange-500" />
                <h2 className="font-heading text-lg font-semibold">Lista de Compras</h2>
                {items.length > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 font-medium">
                    {remaining} {remaining === 1 ? 'item' : 'itens'}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <form onSubmit={addCustom} className="flex gap-2">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adicionar item…"
                  className="rounded-full bg-white"
                />
                <Input
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  placeholder="Qtd."
                  className="rounded-full bg-white w-24 shrink-0"
                />
                <Button type="submit" disabled={!name.trim()} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 shrink-0">
                  <Plus className="w-4 h-4" />
                </Button>
              </form>

              {items.length === 0 ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                    <PackageOpen className="w-7 h-7 text-orange-500" />
                  </div>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    A tua lista está vazia. Adiciona itens aqui ou toca nos ingredientes de uma receita para os juntares.
                  </p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {sorted.map((item) => (
                    <li
                      key={item.id}
                      className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition ${item.checked ? 'bg-muted/60 border-border' : 'bg-white border-border/60'}`}
                    >
                      <button
                        onClick={() => toggle(item.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition ${item.checked ? 'bg-orange-500 border-orange-500' : 'border-border hover:border-orange-400'}`}
                        aria-label={item.checked ? 'Desmarcar' : 'Marcar'}
                      >
                        {item.checked && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium leading-tight ${item.checked ? 'line-through text-muted-foreground' : ''}`}>
                          {item.name}
                        </p>
                        {item.quantity && (
                          <p className={`text-xs ${item.checked ? 'text-muted-foreground/70' : 'text-muted-foreground'}`}>{item.quantity}</p>
                        )}
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="p-2 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition"
                        aria-label="Remover"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {items.length > 0 && (
                <div className="flex gap-2 pt-1">
                  {hasChecked && (
                    <Button onClick={clearChecked} variant="outline" className="flex-1 rounded-full h-11">
                      <Eraser className="w-4 h-4 mr-2" /> Limpar marcados
                    </Button>
                  )}
                  <Button onClick={clear} variant="ghost" className="flex-1 rounded-full h-11 text-destructive hover:text-destructive hover:bg-destructive/5">
                    <Trash2 className="w-4 h-4 mr-2" /> Limpar tudo
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}