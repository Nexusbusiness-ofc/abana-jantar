import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Timer, Play, Pause, RotateCcw, Bell } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PRESETS = [1, 3, 5, 10];

const fmt = (s) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

const beep = () => {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    const playTone = (offset) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine';
      o.frequency.value = 880;
      const t = ctx.currentTime + offset;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.3, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
      o.start(t); o.stop(t + 0.45);
    };
    playTone(0); playTone(0.5); playTone(1.0);
    setTimeout(() => ctx.close(), 2000);
  } catch (e) { /* ignore */ }
};

export default function StepTimer({ stepNumber }) {
  const [duration, setDuration] = useState(0); // seconds chosen
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [customMin, setCustomMin] = useState('');
  const intervalRef = useRef(null);
  const { toast } = useToast();

  const finish = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    setRunning(false);
    setRemaining(0);
    beep();
    if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);
    toast({
      title: `⏰ Tempo do passo ${stepNumber} terminado!`,
      description: 'Hora de avançar para o próximo passo.',
      duration: 8000
    });
  }, [stepNumber, toast]);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const start = () => {
    if (duration <= 0) return;
    setRemaining(duration);
    setRunning(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) { finish(); return 0; }
        return r - 1;
      });
    }, 1000);
  };

  const pause = () => {
    setRunning(false);
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  };

  const reset = () => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    setRunning(false);
    setRemaining(0);
    setDuration(0);
  };

  const setPreset = (min) => { pause(); setDuration(min * 60); setRemaining(0); };
  const applyCustom = () => {
    const m = parseInt(customMin, 10);
    if (!isNaN(m) && m > 0) { pause(); setDuration(m * 60); setRemaining(0); }
  };

  const active = duration > 0;

  return (
    <div className="mt-2 rounded-xl border border-orange-200 bg-orange-50/50 p-2.5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600">
          <Timer className="w-3.5 h-3.5" /> Temporizador
        </span>
        {active && (
          <span className={`text-sm font-mono font-bold ${running ? 'text-orange-600' : 'text-muted-foreground'}`}>
            {running ? fmt(remaining) : fmt(duration)}
          </span>
        )}
        {!active && (
          <div className="flex items-center gap-1.5">
            {PRESETS.map((m) => (
              <button key={m} onClick={() => setPreset(m)} className="px-2 py-1 rounded-full text-xs font-medium bg-white border border-orange-200 text-orange-600 hover:bg-orange-100 transition">
                {m} min
              </button>
            ))}
            <input
              type="number"
              min="1"
              value={customMin}
              onChange={(e) => setCustomMin(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') applyCustom(); }}
              placeholder="min"
              className="w-14 h-7 px-2 text-xs rounded-full border border-orange-200 bg-white text-center"
            />
          </div>
        )}
        <div className="flex items-center gap-1.5 ml-auto">
          {!running ? (
            <button onClick={start} disabled={!active} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-40 transition">
              <Play className="w-3 h-3" /> Iniciar
            </button>
          ) : (
            <button onClick={pause} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-500 text-white hover:bg-orange-600 transition">
              <Pause className="w-3 h-3" /> Pausar
            </button>
          )}
          <button onClick={reset} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white border border-orange-200 text-orange-600 hover:bg-orange-100 transition">
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>
      {running && remaining <= 10 && (
        <p className="text-[11px] text-orange-600 mt-1.5 flex items-center gap-1">
          <Bell className="w-3 h-3 animate-pulse" /> Quase a terminar…
        </p>
      )}
    </div>
  );
}