import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Loader2, X, RefreshCw, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RADIUS = 5000; // 5 km
const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
  'https://overpass.private.coding1234.com/api/interpreter'
];

const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const formatDistance = (m) => (m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1)} km`);

const googleMapsNearbyUrl = (lat, lon) =>
  `https://www.google.com/maps/search/restaurantes/@${lat},${lon},14z`;

const overpassFetch = async (query) => {
  let lastErr;
  for (const base of OVERPASS_ENDPOINTS) {
    try {
      const resp = await fetch(base, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(query)
      });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return await resp.json();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('overpass falhou');
};

export default function RestaurantMode({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const [location, setLocation] = useState(null);

  const findRestaurants = async () => {
    setError(null);
    setLoading(true);
    setRestaurants(null);
    try {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000
        });
      });
      const { latitude, longitude } = pos.coords;
      setLocation({ latitude, longitude });

      const query = `[out:json][timeout:25];(node["amenity"~"restaurant|fast_food|pub|cafe"](around:${RADIUS},${latitude},${longitude});way["amenity"~"restaurant|fast_food|pub|cafe"](around:${RADIUS},${latitude},${longitude}););out center tags 200;`;
      const data = await overpassFetch(query);

      const list = (data.elements || [])
        .map((el) => {
          const lat = el.lat ?? el.center?.lat;
          const lon = el.lon ?? el.center?.lon;
          if (lat == null || lon == null) return null;
          const t = el.tags || {};
          const name = t.name;
          if (!name) return null;
          const distance = haversine(latitude, longitude, lat, lon);
          const street = [t['addr:housenumber'], t['addr:street']].filter(Boolean).join(' ').trim();
          const city = t['addr:city'] || t['addr:town'] || t['addr:village'] || '';
          const address = [street, city].filter(Boolean).join(', ');
          const cuisine = t.cuisine
            ? t.cuisine
                .split(';')
                .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
                .join(', ')
            : '';
          return { name, cuisine, distance, distance_km: distance / 1000, address, lat, lon };
        })
        .filter(Boolean)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 10);

      setRestaurants(list);
    } catch (e) {
      if (e?.code === 1 || e?.message?.includes('denied') || e?.message?.includes('permission')) {
        setError('Preciso da tua localização para encontrar restaurantes perto de ti.');
      } else {
        setError('Não consegui descarregar os restaurantes. Verifica a ligação e tenta outra vez.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    if (!restaurants && !loading) {
      findRestaurants();
    }
  };

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
            onAnimationComplete={handleOpen}
            className="bg-background w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background/90 backdrop-blur flex items-center justify-between px-6 py-4 border-b border-border z-10">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-rose-500" />
                <h2 className="font-heading text-lg font-semibold">Modo Restaurante</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {loading && (
                <div className="text-center py-16">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-500/10 flex items-center justify-center"
                  >
                    <MapPin className="w-8 h-8 text-rose-500" />
                  </motion.div>
                  <p className="text-muted-foreground">À procura de restaurantes perto de ti…</p>
                </div>
              )}

              {error && (
                <div className="text-center py-12 space-y-3">
                  <p className="text-destructive">{error}</p>
                  <Button variant="outline" onClick={findRestaurants}>Tentar outra vez</Button>
                  {location && (
                    <a
                      href={googleMapsNearbyUrl(location.latitude, location.longitude)}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-center text-sm font-medium text-white bg-rose-500 hover:bg-rose-600 px-4 py-2.5 rounded-full transition"
                    >
                      Abrir restaurantes no Google Maps
                    </a>
                  )}
                </div>
              )}

              {restaurants && restaurants.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <p className="text-sm text-muted-foreground">
                      Os {restaurants.length} restaurantes mais próximos de ti, por ordem de distância:
                    </p>
                    {location && (
                      <a
                        href={googleMapsNearbyUrl(location.latitude, location.longitude)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-rose-500 hover:bg-rose-600 px-3 py-1.5 rounded-full transition"
                      >
                        <Navigation className="w-3.5 h-3.5" /> Ver no Google Maps
                      </a>
                    )}
                  </div>
                  {restaurants.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.04, 0.5) }}
                      className="rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-sm shadow-rose-500/30">
                            {i + 1}
                          </span>
                          <h3 className="font-heading font-bold text-base leading-snug">{r.name}</h3>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-xl bg-rose-500/10 text-rose-700 font-bold border border-rose-500/20 flex items-center gap-1.5 shrink-0 shadow-sm">
                          <MapPin className="w-3.5 h-3.5 text-rose-500 stroke-[2.2]" /> {formatDistance(r.distance)}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-2 pl-10">
                        {r.cuisine && (
                          <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-orange-50 text-orange-800 font-semibold border border-orange-200/60">
                            🍽️ {r.cuisine}
                          </span>
                        )}
                      </div>
                      {r.address && <p className="text-xs text-muted-foreground pl-10 mb-2">{r.address}</p>}
                      <div className="pl-10">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${r.lat}%2C${r.lon}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 px-4 py-2 rounded-xl transition-all shadow-sm shadow-rose-500/25 active:scale-95"
                        >
                          <Navigation className="w-3.5 h-3.5 stroke-[2.2]" /> Abrir no Google Maps
                        </a>
                      </div>
                    </motion.div>
                  ))}
                  <Button onClick={findRestaurants} variant="outline" className="w-full rounded-full h-11 mt-2">
                    <RefreshCw className="w-4 h-4 mr-2" /> Atualizar lista
                  </Button>
                </motion.div>
              )}

              {restaurants && restaurants.length === 0 && !loading && (
                <div className="text-center py-12 space-y-3">
                  <p className="text-muted-foreground">Não há restaurantes registados num raio de 5 km.</p>
                  <Button variant="outline" onClick={findRestaurants}>Tentar outra vez</Button>
                  {location && (
                    <a
                      href={googleMapsNearbyUrl(location.latitude, location.longitude)}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-center text-sm font-medium text-white bg-rose-500 hover:bg-rose-600 px-4 py-2.5 rounded-full transition"
                    >
                      Abrir restaurantes no Google Maps
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}