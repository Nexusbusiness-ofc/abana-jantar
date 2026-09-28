import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('public/ingredients');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function wrapSvg(id, defs, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <defs>
    <filter id="shadow-${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity="0.18"/>
    </filter>
    <radialGradient id="base-glow-${id}" cx="50%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#000" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    ${defs}
  </defs>
  <!-- Ambient ground shadow -->
  <ellipse cx="60" cy="100" rx="38" ry="8" fill="url(#base-glow-${id})"/>
  <g filter="url(#shadow-${id})">
    ${content}
  </g>
</svg>`;
}

const SVGS = {
  // 1. Farinha
  farinha: wrapSvg('farinha', `
    <linearGradient id="sackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdfbf7"/>
      <stop offset="50%" stop-color="#f3ede2"/>
      <stop offset="100%" stop-color="#dfd3be"/>
    </linearGradient>
    <linearGradient id="flourGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f0ebe1"/>
    </linearGradient>
    <linearGradient id="wheatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fcd34d"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  `, `
    <path d="M 32 50 C 32 40, 40 38, 60 38 C 80 38, 88 40, 88 50 C 90 70, 92 88, 86 96 C 80 100, 40 100, 34 96 C 28 88, 30 70, 32 50 Z" fill="url(#sackGrad)" stroke="#cbbca6" stroke-width="1.5"/>
    <path d="M 28 46 C 30 42, 44 40, 60 40 C 76 40, 90 42, 92 46 C 92 52, 78 54, 60 54 C 42 54, 28 52, 28 46 Z" fill="#e8decb" stroke="#baa78e" stroke-width="1.5"/>
    <path d="M 35 44 C 42 32, 52 26, 60 26 C 68 26, 78 32, 85 44 Z" fill="url(#flourGrad)"/>
    <ellipse cx="60" cy="38" rx="20" ry="6" fill="#ffffff" opacity="0.9"/>
    <g transform="translate(70, 42) rotate(25) scale(0.7)">
      <path d="M 10 70 Q 10 30 10 0" stroke="#b45309" stroke-width="2.5" fill="none"/>
      <ellipse cx="6" cy="10" rx="5" ry="9" fill="url(#wheatGrad)" transform="rotate(-30 6 10)"/>
      <ellipse cx="14" cy="10" rx="5" ry="9" fill="url(#wheatGrad)" transform="rotate(30 14 10)"/>
      <ellipse cx="6" cy="24" rx="5" ry="9" fill="url(#wheatGrad)" transform="rotate(-30 6 24)"/>
      <ellipse cx="14" cy="24" rx="5" ry="9" fill="url(#wheatGrad)" transform="rotate(30 14 24)"/>
      <ellipse cx="10" cy="2" rx="4" ry="8" fill="url(#wheatGrad)"/>
    </g>
    <rect x="42" y="65" width="36" height="16" rx="4" fill="#eedcb7" stroke="#caa97d" stroke-width="1"/>
    <text x="60" y="77" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#78350f" text-anchor="middle">TRIGO</text>
  `),

  // 2. Açúcar
  acucar: wrapSvg('acucar', `
    <linearGradient id="sugarBowl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#e0f2fe" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0.85"/>
    </linearGradient>
    <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
  `, `
    <path d="M 28 55 C 28 85, 42 94, 60 94 C 78 94, 92 85, 92 55 Z" fill="url(#sugarBowl)" stroke="#38bdf8" stroke-width="1.5"/>
    <ellipse cx="60" cy="55" rx="32" ry="8" fill="#f0f9ff" stroke="#38bdf8" stroke-width="1.5"/>
    <ellipse cx="60" cy="54" rx="27" ry="7" fill="#ffffff"/>
    <g transform="translate(42, 38)">
      <polygon points="12,0 24,6 24,18 12,12" fill="url(#cubeGrad)" stroke="#cbd5e1" stroke-width="0.8"/>
      <polygon points="0,6 12,0 12,12 0,18" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.8"/>
      <polygon points="0,6 12,0 24,6 12,12" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"/>
    </g>
    <g transform="translate(56, 32)">
      <polygon points="12,0 24,6 24,18 12,12" fill="url(#cubeGrad)" stroke="#cbd5e1" stroke-width="0.8"/>
      <polygon points="0,6 12,0 12,12 0,18" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.8"/>
      <polygon points="0,6 12,0 24,6 12,12" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"/>
    </g>
    <path d="M 40 28 Q 40 33 35 33 Q 40 33 40 38 Q 40 33 45 33 Q 40 33 40 28 Z" fill="#38bdf8"/>
    <path d="M 80 34 Q 80 38 76 38 Q 80 38 80 42 Q 80 38 84 38 Q 80 38 80 34 Z" fill="#38bdf8"/>
  `),

  // 3. Ovos
  ovos: wrapSvg('ovos', `
    <linearGradient id="eggBrown" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fed7aa"/>
      <stop offset="50%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#c2410c"/>
    </linearGradient>
    <linearGradient id="eggWhite" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="80%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <radialGradient id="yolkGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </radialGradient>
  `, `
    <ellipse cx="44" cy="58" rx="22" ry="29" fill="url(#eggBrown)" transform="rotate(-15 44 58)"/>
    <ellipse cx="76" cy="62" rx="20" ry="26" fill="url(#eggWhite)" transform="rotate(18 76 62)"/>
    <circle cx="58" cy="74" r="14" fill="url(#yolkGrad)"/>
    <ellipse cx="53" cy="69" rx="4" ry="2.5" fill="#ffffff" opacity="0.8" transform="rotate(-20 53 69)"/>
  `),

  // 4. Gemas
  gemas: wrapSvg('gemas', `
    <radialGradient id="pureYolk" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="35%" stop-color="#f59e0b"/>
      <stop offset="85%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </radialGradient>
  `, `
    <path d="M 28 65 C 28 88, 42 96, 60 96 C 78 96, 92 88, 92 65 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <path d="M 28 65 Q 36 68 44 65 Q 52 62 60 65 Q 68 68 76 65 Q 84 62 92 65" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <circle cx="60" cy="60" r="22" fill="url(#pureYolk)"/>
    <ellipse cx="53" cy="52" rx="6" ry="3.5" fill="#ffffff" opacity="0.85" transform="rotate(-25 53 52)"/>
    <circle cx="68" cy="64" r="2" fill="#ffffff" opacity="0.6"/>
  `),

  // 5. Azeite
  azeite: wrapSvg('azeite', `
    <linearGradient id="oliveOil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#bef264"/>
      <stop offset="40%" stop-color="#84cc16"/>
      <stop offset="85%" stop-color="#65a30d"/>
      <stop offset="100%" stop-color="#4d7c0f"/>
    </linearGradient>
  `, `
    <rect x="54" y="16" width="12" height="10" rx="2" fill="#d97706"/>
    <rect x="55" y="26" width="10" height="20" fill="#a3e635" opacity="0.5"/>
    <path d="M 55 42 C 45 48, 30 60, 30 76 C 30 92, 43 96, 60 96 C 77 96, 90 92, 90 76 C 90 60, 75 48, 65 42 Z" fill="url(#oliveOil)" stroke="#4d7c0f" stroke-width="1.5"/>
    <path d="M 37 72 C 37 60, 46 50, 56 46" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.75"/>
    <ellipse cx="78" cy="88" rx="8" ry="11" fill="#4d7c0f" transform="rotate(35 78 88)"/>
    <ellipse cx="88" cy="84" rx="7" ry="10" fill="#1e293b" transform="rotate(-20 88 84)"/>
    <circle cx="76" cy="85" r="2" fill="#a3e635"/>
  `),

  // 6. Óleo Vegetal
  oleo: wrapSvg('oleo', `
    <linearGradient id="vegOil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
  `, `
    <rect x="54" y="18" width="12" height="12" rx="2" fill="#ef4444"/>
    <path d="M 42 36 L 42 45 L 36 55 L 36 94 L 84 94 L 84 55 L 78 45 L 78 36 Z" fill="url(#vegOil)" stroke="#ca8a04" stroke-width="1.5"/>
    <rect x="44" y="58" width="32" height="22" rx="3" fill="#ffffff" opacity="0.9"/>
    <circle cx="60" cy="69" r="6" fill="#facc15"/>
    <path d="M 42 60 L 42 88" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
  `),

  // 7. Alho
  alho: wrapSvg('alho', `
    <linearGradient id="garlicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#fdf4ff"/>
      <stop offset="85%" stop-color="#f5d0fe"/>
      <stop offset="100%" stop-color="#e9d5ff"/>
    </linearGradient>
  `, `
    <path d="M 60 20 Q 56 36 34 50 C 26 58, 26 78, 40 88 C 50 94, 70 94, 80 88 C 94 78, 94 58, 86 50 Q 64 36 60 20 Z" fill="url(#garlicGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <path d="M 60 22 C 55 44, 46 72, 48 91" stroke="#d8b4fe" stroke-width="1.5" fill="none"/>
    <path d="M 60 22 C 65 44, 74 72, 72 91" stroke="#d8b4fe" stroke-width="1.5" fill="none"/>
    <rect x="58" y="14" width="4" height="9" rx="1.5" fill="#a16207"/>
    <path d="M 72 74 C 76 68, 88 70, 92 78 C 96 86, 88 94, 80 94 C 74 94, 70 88, 72 74 Z" fill="#ffffff" stroke="#c084fc" stroke-width="1.2"/>
  `),

  // 8. Cebola
  cebola: wrapSvg('cebola', `
    <linearGradient id="onionGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdba74"/>
      <stop offset="40%" stop-color="#f97316"/>
      <stop offset="80%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#9a3412"/>
    </linearGradient>
  `, `
    <path d="M 60 22 C 72 32, 94 48, 94 68 C 94 88, 78 96, 60 96 C 42 96, 26 88, 26 68 C 26 48, 48 32, 60 22 Z" fill="url(#onionGold)" stroke="#7c2d12" stroke-width="1.5"/>
    <path d="M 54 96 Q 52 102 50 105 M 60 96 L 60 106 M 66 96 Q 68 102 70 105" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
    <path d="M 60 25 C 72 45, 84 66, 78 90" stroke="#fef08a" stroke-width="1.2" opacity="0.6" fill="none"/>
    <path d="M 60 25 C 48 45, 36 66, 42 90" stroke="#fef08a" stroke-width="1.2" opacity="0.6" fill="none"/>
    <path d="M 60 22 L 58 14 L 62 14 Z" fill="#65a30d"/>
  `),

  // 9. Batata
  batata: wrapSvg('batata', `
    <linearGradient id="potatoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#eab308"/>
      <stop offset="80%" stop-color="#ca8a04"/>
      <stop offset="100%" stop-color="#854d0e"/>
    </linearGradient>
  `, `
    <path d="M 32 46 C 30 30, 68 25, 84 38 C 98 50, 96 74, 82 86 C 68 96, 36 94, 28 80 C 22 70, 34 56, 32 46 Z" fill="url(#potatoGrad)" stroke="#713f12" stroke-width="1.5"/>
    <circle cx="48" cy="45" r="2" fill="#713f12" opacity="0.6"/>
    <circle cx="70" cy="50" r="2.5" fill="#713f12" opacity="0.6"/>
    <circle cx="56" cy="72" r="1.8" fill="#713f12" opacity="0.6"/>
    <circle cx="40" cy="65" r="1.5" fill="#713f12" opacity="0.6"/>
    <ellipse cx="32" cy="76" rx="14" ry="10" fill="url(#potatoGrad)" stroke="#713f12" stroke-width="1.2" transform="rotate(-20 32 76)"/>
  `),

  // 10. Batata Palha
  batata_palha: wrapSvg('batata_palha', `
    <linearGradient id="fryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="60%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  `, `
    <g transform="translate(60, 60)">
      <line x1="-30" y1="-20" x2="30" y2="20" stroke="url(#fryGrad)" stroke-width="4" stroke-linecap="round"/>
      <line x1="-25" y1="15" x2="28" y2="-18" stroke="url(#fryGrad)" stroke-width="4" stroke-linecap="round"/>
      <line x1="-35" y1="0" x2="35" y2="0" stroke="url(#fryGrad)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="-15" y1="-30" x2="15" y2="30" stroke="url(#fryGrad)" stroke-width="4" stroke-linecap="round"/>
      <line x1="5" y1="-28" x2="-8" y2="28" stroke="url(#fryGrad)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="-22" y1="-8" x2="24" y2="12" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>
    </g>
  `),

  // 11. Tomate
  tomate: wrapSvg('tomate', `
    <radialGradient id="tomatoGrad" cx="38%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="30%" stop-color="#ef4444"/>
      <stop offset="75%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </radialGradient>
  `, `
    <path d="M 60 36 C 75 34, 94 44, 94 65 C 94 85, 78 95, 60 95 C 42 95, 26 85, 26 65 C 26 44, 45 34, 60 36 Z" fill="url(#tomatoGrad)" stroke="#7f1d1d" stroke-width="1.5"/>
    <ellipse cx="46" cy="48" rx="8" ry="5" fill="#ffffff" opacity="0.6" transform="rotate(-30 46 48)"/>
    <g transform="translate(60, 36)">
      <path d="M 0 -6 L 0 0 M 0 0 L -12 -5 M 0 0 L -8 6 M 0 0 L 0 10 M 0 0 L 8 6 M 0 0 L 12 -5 M 0 0 L 0 -12" stroke="#16a34a" stroke-width="3" stroke-linecap="round" fill="none"/>
      <circle cx="0" cy="0" r="3.5" fill="#15803d"/>
    </g>
  `),

  // 12. Polpa de Tomate
  polpa_tomate: wrapSvg('polpa_tomate', `
    <linearGradient id="passataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="60%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
  `, `
    <rect x="42" y="24" width="36" height="12" rx="3" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
    <path d="M 36 36 L 84 36 L 80 94 L 40 94 Z" fill="url(#passataGrad)" stroke="#7f1d1d" stroke-width="1.5"/>
    <rect x="42" y="52" width="36" height="26" rx="2" fill="#ffffff"/>
    <circle cx="60" cy="65" r="7" fill="#ef4444"/>
  `),

  // 13. Cenoura
  cenoura: wrapSvg('cenoura', `
    <linearGradient id="carrotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdba74"/>
      <stop offset="35%" stop-color="#fb923c"/>
      <stop offset="75%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#c2410c"/>
    </linearGradient>
  `, `
    <path d="M 32 30 Q 20 18 14 14 M 32 30 Q 26 12 28 8 M 32 30 Q 36 14 42 10" stroke="#22c55e" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 28 32 C 34 26, 42 34, 42 36 L 94 88 C 96 90, 94 94, 91 94 L 88 91 L 28 32 Z" fill="url(#carrotGrad)" stroke="#9a3412" stroke-width="1.5"/>
    <path d="M 40 45 Q 43 43 46 48 M 52 56 Q 55 54 58 60 M 64 68 Q 67 66 70 72" stroke="#7c2d12" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.6"/>
  `),

  // 14. Bacalhau
  bacalhau: wrapSvg('bacalhau', `
    <linearGradient id="codGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#fef3c7"/>
      <stop offset="80%" stop-color="#fde68a"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="codSkin" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  `, `
    <path d="M 24 50 Q 60 40 96 50 L 94 58 Q 60 48 24 58 Z" fill="url(#codSkin)"/>
    <path d="M 24 54 C 24 54, 30 84, 40 88 C 55 94, 75 92, 86 86 C 96 80, 96 54, 96 54 Z" fill="url(#codGrad)" stroke="#b45309" stroke-width="1.5"/>
    <path d="M 34 62 Q 60 56 86 62" stroke="#d97706" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M 38 72 Q 60 66 82 72" stroke="#d97706" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M 44 80 Q 60 76 76 80" stroke="#d97706" stroke-width="1.5" fill="none" opacity="0.6"/>
    <rect x="52" y="60" width="3" height="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.5"/>
    <rect x="66" y="68" width="3.5" height="3.5" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.5"/>
  `),

  // 15. Carne de Vaca
  carne_vaca: wrapSvg('carne_vaca', `
    <linearGradient id="beefGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="40%" stop-color="#dc2626"/>
      <stop offset="85%" stop-color="#991b1b"/>
      <stop offset="100%" stop-color="#450a0a"/>
    </linearGradient>
  `, `
    <path d="M 28 50 C 24 35, 52 26, 75 32 C 95 38, 98 65, 92 80 C 86 94, 55 96, 38 90 C 26 84, 30 65, 28 50 Z" fill="url(#beefGrad)" stroke="#450a0a" stroke-width="1.5"/>
    <path d="M 32 35 C 50 28, 70 30, 85 36" stroke="#fef2f2" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M 45 46 Q 55 48 68 44 M 40 60 Q 56 64 74 58 M 48 76 Q 62 78 78 72" stroke="#fee2e2" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8"/>
  `),

  // 16. Carne de Porco (Lombo / Febra)
  carne_porco: wrapSvg('carne_porco', `
    <linearGradient id="porkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fecdd3"/>
      <stop offset="40%" stop-color="#fb7185"/>
      <stop offset="80%" stop-color="#e11d48"/>
      <stop offset="100%" stop-color="#9f1239"/>
    </linearGradient>
  `, `
    <path d="M 30 52 C 26 36, 60 28, 80 36 C 96 44, 94 72, 85 84 C 70 94, 42 92, 32 80 C 25 70, 34 60, 30 52 Z" fill="url(#porkGrad)" stroke="#881337" stroke-width="1.5"/>
    <path d="M 36 38 C 55 32, 75 35, 86 42" stroke="#fff1f2" stroke-width="3" stroke-linecap="round" fill="none"/>
    <circle cx="56" cy="58" r="6" fill="#ffe4e6" opacity="0.8"/>
  `),

  // 17. Frango
  frango: wrapSvg('frango', `
    <linearGradient id="chickenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fed7aa"/>
      <stop offset="40%" stop-color="#fb923c"/>
      <stop offset="80%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#9a3412"/>
    </linearGradient>
  `, `
    <circle cx="30" cy="80" r="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="36" cy="86" r="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <rect x="32" y="68" width="8" height="15" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" transform="rotate(-40 36 75)"/>
    <path d="M 42 66 C 36 50, 48 30, 68 30 C 88 30, 96 46, 92 64 C 88 80, 68 84, 54 78 Z" fill="url(#chickenGrad)" stroke="#7c2d12" stroke-width="1.5"/>
    <ellipse cx="70" cy="46" rx="14" ry="8" fill="#fef08a" opacity="0.6" transform="rotate(-20 70 46)"/>
  `),

  // 18. Pato
  pato: wrapSvg('pato', `
    <linearGradient id="duckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="40%" stop-color="#92400e"/>
      <stop offset="85%" stop-color="#451a03"/>
    </linearGradient>
  `, `
    <path d="M 28 58 C 24 40, 52 32, 78 36 C 96 42, 98 68, 88 82 C 75 92, 45 92, 34 80 C 26 72, 30 65, 28 58 Z" fill="url(#duckGrad)" stroke="#451a03" stroke-width="1.5"/>
    <path d="M 32 44 Q 60 38 84 46" stroke="#fef3c7" stroke-width="3" stroke-linecap="round" fill="none"/>
    <line x1="42" y1="58" x2="78" y2="58" stroke="#ca8a04" stroke-width="1.5"/>
    <line x1="46" y1="68" x2="74" y2="68" stroke="#ca8a04" stroke-width="1.5"/>
  `),

  // 19. Borrego
  borrego: wrapSvg('borrego', `
    <linearGradient id="lambGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="40%" stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#450a0a"/>
    </linearGradient>
  `, `
    <line x1="75" y1="25" x2="45" y2="70" stroke="#f8fafc" stroke-width="5" stroke-linecap="round"/>
    <circle cx="75" cy="25" r="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    <ellipse cx="45" cy="70" rx="20" ry="14" fill="url(#lambGrad)" stroke="#450a0a" stroke-width="1.5" transform="rotate(-20 45 70)"/>
    <circle cx="45" cy="70" r="4" fill="#ffffff"/>
  `),

  // 20. Peixe
  peixe: wrapSvg('peixe', `
    <linearGradient id="fishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="40%" stop-color="#94a3b8"/>
      <stop offset="80%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  `, `
    <polygon points="20,40 20,80 38,60" fill="url(#fishGrad)" stroke="#334155" stroke-width="1.2"/>
    <path d="M 32 60 C 44 40, 75 42, 98 60 C 75 78, 44 80, 32 60 Z" fill="url(#fishGrad)" stroke="#334155" stroke-width="1.5"/>
    <path d="M 80 50 Q 86 60 80 70" stroke="#0f172a" stroke-width="1.5" fill="none"/>
    <circle cx="88" cy="56" r="3" fill="#0f172a"/>
    <circle cx="89" cy="55" r="1" fill="#ffffff"/>
    <ellipse cx="60" cy="56" rx="14" ry="4" fill="#ffffff" opacity="0.5"/>
  `),

  // 21. Camarão
  camarao: wrapSvg('camarao', `
    <linearGradient id="prawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="40%" stop-color="#f87171"/>
      <stop offset="80%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
  `, `
    <path d="M 78 35 C 95 50, 90 75, 70 85 C 50 95, 30 85, 30 68 C 30 55, 45 50, 56 60 C 64 68, 70 65, 72 55 C 74 45, 68 38, 78 35 Z" fill="url(#prawnGrad)" stroke="#991b1b" stroke-width="1.5"/>
    <path d="M 28 66 L 16 60 L 22 70 L 14 74 L 28 72 Z" fill="#ef4444" stroke="#991b1b" stroke-width="1"/>
    <path d="M 82 52 Q 74 56 68 52 M 78 66 Q 70 70 62 66 M 66 78 Q 58 82 50 78" stroke="#fee2e2" stroke-width="1.5" fill="none"/>
  `),

  // 22. Amêijoas
  ameijoas: wrapSvg('ameijoas', `
    <linearGradient id="clamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#cbd5e1"/>
      <stop offset="85%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  `, `
    <ellipse cx="60" cy="65" rx="28" ry="22" fill="url(#clamGrad)" stroke="#1e293b" stroke-width="1.5"/>
    <path d="M 60 87 L 45 48 M 60 87 L 55 45 M 60 87 L 65 45 M 60 87 L 75 48" stroke="#f8fafc" stroke-width="1.2" opacity="0.6"/>
    <!-- Fresh coriander leaf on top -->
    <path d="M 60 55 C 50 48, 62 38, 70 46 Z" fill="#22c55e"/>
  `),

  // 23. Polvo
  polvo: wrapSvg('polvo', `
    <linearGradient id="tentacle" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="50%" stop-color="#9333ea"/>
      <stop offset="100%" stop-color="#581c87"/>
    </linearGradient>
  `, `
    <path d="M 30 85 C 30 50, 48 35, 70 35 C 88 35, 95 48, 85 62 C 75 75, 60 70, 62 58 C 64 50, 72 50, 72 56" stroke="url(#tentacle)" stroke-width="14" stroke-linecap="round" fill="none"/>
    <circle cx="44" cy="50" r="3.5" fill="#fdf4ff" stroke="#9333ea" stroke-width="1"/>
    <circle cx="58" cy="40" r="3.5" fill="#fdf4ff" stroke="#9333ea" stroke-width="1"/>
    <circle cx="74" cy="40" r="3.5" fill="#fdf4ff" stroke="#9333ea" stroke-width="1"/>
    <circle cx="86" cy="54" r="3" fill="#fdf4ff" stroke="#9333ea" stroke-width="1"/>
  `),

  // 24. Leite
  leite: wrapSvg('leite', `
    <linearGradient id="milkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="80%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
  `, `
    <rect x="42" y="24" width="16" height="8" rx="2" fill="#38bdf8"/>
    <path d="M 44 32 L 44 42 L 32 54 L 32 94 L 68 94 L 68 54 L 56 42 L 56 32 Z" fill="url(#milkGrad)" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="36" y="62" width="28" height="18" rx="2" fill="#e0f2fe"/>
    <circle cx="50" cy="71" r="5" fill="#38bdf8"/>
    <path d="M 68 62 L 86 62 L 82 94 L 72 94 Z" fill="url(#milkGrad)" stroke="#94a3b8" stroke-width="1.2"/>
  `),

  // 25. Natas
  natas: wrapSvg('natas', `
    <linearGradient id="creamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#fef9c3"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
  `, `
    <path d="M 60 20 C 65 25, 75 35, 70 45 C 85 45, 92 60, 84 72 C 94 76, 94 92, 75 94 C 55 96, 30 94, 30 82 C 22 72, 28 58, 40 52 C 38 42, 48 30, 60 20 Z" fill="url(#creamGrad)" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M 60 22 Q 62 40 46 54" stroke="#eab308" stroke-width="1.5" fill="none"/>
    <path d="M 70 45 Q 68 60 48 72" stroke="#eab308" stroke-width="1.5" fill="none"/>
    <path d="M 84 72 Q 74 82 56 88" stroke="#eab308" stroke-width="1.5" fill="none"/>
  `),

  // 26. Manteiga
  manteiga: wrapSvg('manteiga', `
    <linearGradient id="butterTop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef9c3"/>
      <stop offset="100%" stop-color="#fde047"/>
    </linearGradient>
    <linearGradient id="butterSide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
  `, `
    <ellipse cx="60" cy="85" rx="42" ry="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <polygon points="40,46 76,40 90,52 54,58" fill="url(#butterTop)" stroke="#ca8a04" stroke-width="1.2"/>
    <polygon points="40,46 54,58 54,78 40,66" fill="url(#butterSide)" stroke="#ca8a04" stroke-width="1.2"/>
    <polygon points="54,58 90,52 90,72 54,78" fill="#eab308" stroke="#ca8a04" stroke-width="1.2"/>
    <path d="M 62 48 C 66 42, 74 44, 72 50 C 70 54, 64 52, 62 48 Z" fill="#ffffff" opacity="0.6"/>
  `),

  // 27. Queijo
  queijo: wrapSvg('queijo', `
    <linearGradient id="cheeseTop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#facc15"/>
    </linearGradient>
    <linearGradient id="cheeseSide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
  `, `
    <polygon points="26,62 82,34 94,68" fill="url(#cheeseTop)" stroke="#a16207" stroke-width="1.5"/>
    <polygon points="26,62 94,68 94,88 26,82" fill="url(#cheeseSide)" stroke="#a16207" stroke-width="1.5"/>
    <polygon points="82,34 94,68 94,88 82,54" fill="#a16207" opacity="0.3"/>
    <ellipse cx="44" cy="72" rx="4" ry="6" fill="#854d0e"/>
    <ellipse cx="68" cy="75" rx="5" ry="7" fill="#854d0e"/>
    <ellipse cx="84" cy="74" rx="3" ry="5" fill="#854d0e"/>
    <ellipse cx="62" cy="50" rx="6" ry="3" fill="#ca8a04"/>
  `),

  // 28. Pão
  pao: wrapSvg('pao', `
    <linearGradient id="breadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde68a"/>
      <stop offset="35%" stop-color="#d97706"/>
      <stop offset="85%" stop-color="#92400e"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
  `, `
    <path d="M 24 72 C 20 54, 38 34, 60 34 C 82 34, 100 54, 96 72 C 94 88, 78 94, 60 94 C 42 94, 26 88, 24 72 Z" fill="url(#breadGrad)" stroke="#451a03" stroke-width="1.5"/>
    <path d="M 40 44 Q 45 54 44 64" stroke="#fef3c7" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 58 40 Q 62 52 60 64" stroke="#fef3c7" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M 76 44 Q 80 54 78 64" stroke="#fef3c7" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="60" cy="38" rx="25" ry="6" fill="#ffffff" opacity="0.35"/>
  `),

  // 29. Arroz
  arroz: wrapSvg('arroz', `
    <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  `, `
    <ellipse cx="60" cy="55" rx="34" ry="18" fill="#ffffff"/>
    <path d="M 24 55 C 24 85, 40 94, 60 94 C 80 94, 96 85, 96 55 Z" fill="url(#bowlGrad)" stroke="#0369a1" stroke-width="1.5"/>
    <ellipse cx="60" cy="55" rx="36" ry="8" fill="none" stroke="#0284c7" stroke-width="2"/>
    <ellipse cx="50" cy="46" rx="4" ry="2" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.5" transform="rotate(20 50 46)"/>
    <ellipse cx="62" cy="44" rx="4" ry="2" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.5" transform="rotate(-15 62 44)"/>
    <ellipse cx="72" cy="48" rx="4" ry="2" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.5" transform="rotate(35 72 48)"/>
  `),

  // 30. Massa
  massa: wrapSvg('massa', `
    <linearGradient id="pastaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="60%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
  `, `
    <path d="M 30 70 Q 60 30 90 70 Q 60 95 30 70 Z" fill="url(#pastaGrad)" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M 35 60 Q 60 85 85 60" stroke="#a16207" stroke-width="2.5" fill="none"/>
    <path d="M 40 50 Q 60 75 80 50" stroke="#a16207" stroke-width="2.5" fill="none"/>
    <path d="M 30 75 Q 60 55 90 75" stroke="#a16207" stroke-width="2.5" fill="none"/>
    <path d="M 60 46 C 50 38, 50 28, 60 26 C 70 28, 70 38, 60 46 Z" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
  `),

  // 31. Feijão
  feijao: wrapSvg('feijao', `
    <linearGradient id="beanRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="60%" stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#7f1d1d"/>
    </linearGradient>
    <linearGradient id="beanWhite" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#f3f4f6"/>
      <stop offset="100%" stop-color="#d1d5db"/>
    </linearGradient>
  `, `
    <path d="M 42 36 C 56 32, 70 42, 70 56 C 70 66, 60 70, 50 68 C 42 66, 36 60, 36 50 C 36 42, 38 38, 42 36 Z" fill="url(#beanRed)" stroke="#450a0a" stroke-width="1.2"/>
    <path d="M 58 56 C 72 52, 86 62, 86 76 C 86 86, 76 90, 66 88 C 58 86, 52 80, 52 70 C 52 62, 54 58, 58 56 Z" fill="url(#beanWhite)" stroke="#9ca3af" stroke-width="1.2"/>
  `),

  // 32. Grão
  grao: wrapSvg('grao', `
    <radialGradient id="chickpea" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#a16207"/>
    </radialGradient>
  `, `
    <path d="M 44 45 C 44 32, 62 32, 65 42 C 67 48, 64 58, 54 60 C 44 60, 44 54, 44 45 Z" fill="url(#chickpea)" stroke="#78350f" stroke-width="1.2"/>
    <path d="M 62 58 C 62 48, 80 48, 82 56 C 84 62, 80 72, 70 74 C 62 74, 62 68, 62 58 Z" fill="url(#chickpea)" stroke="#78350f" stroke-width="1.2"/>
    <path d="M 34 65 C 34 55, 50 55, 52 62 C 54 68, 50 78, 42 80 C 34 80, 34 74, 34 65 Z" fill="url(#chickpea)" stroke="#78350f" stroke-width="1.2"/>
  `),

  // 33. Ervilhas
  ervilhas: wrapSvg('ervilhas', `
    <linearGradient id="podGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4ade80"/>
      <stop offset="50%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
    <radialGradient id="peaGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#86efac"/>
      <stop offset="60%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#166534"/>
    </radialGradient>
  `, `
    <path d="M 22 75 C 35 45, 75 40, 98 55 C 80 75, 45 85, 22 75 Z" fill="url(#podGrad)" stroke="#14532d" stroke-width="1.5"/>
    <circle cx="44" cy="62" r="9" fill="url(#peaGrad)"/>
    <circle cx="62" cy="60" r="9" fill="url(#peaGrad)"/>
    <circle cx="80" cy="62" r="9" fill="url(#peaGrad)"/>
    <circle cx="41" cy="58" r="2" fill="#ffffff" opacity="0.75"/>
    <circle cx="59" cy="56" r="2" fill="#ffffff" opacity="0.75"/>
    <circle cx="77" cy="58" r="2" fill="#ffffff" opacity="0.75"/>
  `),

  // 34. Couve
  couve: wrapSvg('couve', `
    <linearGradient id="kaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#86efac"/>
      <stop offset="40%" stop-color="#22c55e"/>
      <stop offset="80%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
  `, `
    <path d="M 30 70 C 20 50, 30 35, 45 30 C 60 20, 75 25, 85 35 C 98 48, 95 72, 85 82 C 72 94, 45 94, 30 70 Z" fill="url(#kaleGrad)" stroke="#052e16" stroke-width="1.5"/>
    <path d="M 60 90 L 60 35 M 60 55 Q 46 45 38 48 M 60 65 Q 46 58 36 62 M 60 55 Q 74 45 82 48 M 60 65 Q 74 58 84 62" stroke="#bbf7d0" stroke-width="2" stroke-linecap="round" fill="none"/>
  `),

  // 35. Cogumelos
  cogumelos: wrapSvg('cogumelos', `
    <linearGradient id="shroomCap" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
  `, `
    <path d="M 52 56 L 50 88 C 50 92, 70 92, 70 88 L 68 56 Z" fill="#f8fafc" stroke="#64748b" stroke-width="1.2"/>
    <path d="M 28 58 C 28 32, 92 32, 92 58 C 92 62, 28 62, 28 58 Z" fill="url(#shroomCap)" stroke="#475569" stroke-width="1.5"/>
    <ellipse cx="60" cy="58" rx="30" ry="4" fill="#cbd5e1"/>
    <path d="M 34 68 C 34 50, 60 50, 60 68 Z" fill="url(#shroomCap)" stroke="#475569" stroke-width="1"/>
    <rect x="44" y="68" width="6" height="18" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
  `),

  // 36. Chocolate
  chocolate: wrapSvg('chocolate', `
    <linearGradient id="chocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#582f1b"/>
      <stop offset="50%" stop-color="#3e1f10"/>
      <stop offset="100%" stop-color="#261208"/>
    </linearGradient>
  `, `
    <g transform="translate(60, 60) rotate(-15) translate(-35, -35)">
      <rect x="0" y="0" width="70" height="70" rx="6" fill="url(#chocGrad)" stroke="#1a0b04" stroke-width="1.5"/>
      <rect x="6" y="6" width="26" height="26" rx="3" fill="#6a3921" stroke="#261208" stroke-width="1"/>
      <rect x="38" y="6" width="26" height="26" rx="3" fill="#6a3921" stroke="#261208" stroke-width="1"/>
      <rect x="6" y="38" width="26" height="26" rx="3" fill="#6a3921" stroke="#261208" stroke-width="1"/>
      <rect x="38" y="38" width="26" height="26" rx="3" fill="#6a3921" stroke="#261208" stroke-width="1"/>
      <line x1="8" y1="8" x2="30" y2="8" stroke="#874728" stroke-width="1.5"/>
      <line x1="40" y1="8" x2="62" y2="8" stroke="#874728" stroke-width="1.5"/>
    </g>
  `),

  // 37. Café
  cafe: wrapSvg('cafe', `
    <linearGradient id="coffeeCrema" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="60%" stop-color="#78350f"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>
  `, `
    <ellipse cx="60" cy="88" rx="36" ry="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <path d="M 36 48 L 40 78 C 40 84, 80 84, 80 78 L 84 48 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <path d="M 82 52 C 92 52, 92 70, 80 70" stroke="#cbd5e1" stroke-width="3" fill="none"/>
    <ellipse cx="60" cy="48" rx="24" ry="7" fill="url(#coffeeCrema)"/>
    <path d="M 52 38 Q 48 26 56 20" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
    <path d="M 68 38 Q 72 26 64 20" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
  `),

  // 38. Limão
  limao: wrapSvg('limao', `
    <linearGradient id="lemonPeel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
    <radialGradient id="pulpGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef9c3"/>
      <stop offset="60%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#eab308"/>
    </radialGradient>
  `, `
    <circle cx="60" cy="62" r="32" fill="url(#lemonPeel)" stroke="#ca8a04" stroke-width="1.5"/>
    <circle cx="60" cy="62" r="28" fill="#ffffff"/>
    <circle cx="60" cy="62" r="26" fill="url(#pulpGrad)"/>
    <g stroke="#ffffff" stroke-width="2" fill="none">
      <line x1="60" y1="36" x2="60" y2="88"/>
      <line x1="34" y1="62" x2="86" y2="62"/>
      <line x1="41" y1="44" x2="79" y2="80"/>
      <line x1="41" y1="80" x2="79" y2="44"/>
    </g>
    <circle cx="60" cy="62" r="3" fill="#ffffff"/>
    <path d="M 78 35 C 90 25, 95 15, 90 12 C 85 10, 75 18, 70 30 Z" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
  `),

  // 39. Laranja
  laranja: wrapSvg('laranja', `
    <linearGradient id="orangePeel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fed7aa"/>
      <stop offset="40%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
  `, `
    <circle cx="60" cy="62" r="32" fill="url(#orangePeel)" stroke="#c2410c" stroke-width="1.5"/>
    <circle cx="60" cy="62" r="28" fill="#ffffff"/>
    <circle cx="60" cy="62" r="26" fill="#f97316"/>
    <g stroke="#ffffff" stroke-width="2" fill="none">
      <line x1="60" y1="36" x2="60" y2="88"/>
      <line x1="34" y1="62" x2="86" y2="62"/>
      <line x1="41" y1="44" x2="79" y2="80"/>
      <line x1="41" y1="80" x2="79" y2="44"/>
    </g>
    <circle cx="60" cy="62" r="3" fill="#ffffff"/>
    <path d="M 78 35 C 90 25, 95 15, 90 12 C 85 10, 75 18, 70 30 Z" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
  `),

  // 40. Maçã
  maca: wrapSvg('maca', `
    <radialGradient id="appleGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="40%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </radialGradient>
  `, `
    <path d="M 60 38 C 45 25, 24 35, 26 62 C 28 85, 48 94, 60 94 C 72 94, 92 85, 94 62 C 96 35, 75 25, 60 38 Z" fill="url(#appleGrad)" stroke="#7f1d1d" stroke-width="1.5"/>
    <path d="M 60 38 Q 65 24 72 18" stroke="#78350f" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 62 28 C 72 20, 80 22, 78 28 Z" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
    <ellipse cx="45" cy="50" rx="8" ry="4" fill="#ffffff" opacity="0.6" transform="rotate(-30 45 50)"/>
  `),

  // 41. Morango
  morango: wrapSvg('morango', `
    <radialGradient id="strawGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="50%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </radialGradient>
  `, `
    <path d="M 60 92 C 40 78, 28 55, 32 40 C 36 28, 84 28, 88 40 C 92 55, 80 78, 60 92 Z" fill="url(#strawGrad)" stroke="#7f1d1d" stroke-width="1.5"/>
    <!-- Calyx Leaf -->
    <path d="M 40 32 L 60 38 L 80 32 L 72 24 L 60 28 L 48 24 Z" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
    <!-- Strawberry Seeds (Yellow dots) -->
    <circle cx="48" cy="45" r="1.5" fill="#fef08a"/>
    <circle cx="62" cy="44" r="1.5" fill="#fef08a"/>
    <circle cx="74" cy="46" r="1.5" fill="#fef08a"/>
    <circle cx="42" cy="58" r="1.5" fill="#fef08a"/>
    <circle cx="56" cy="58" r="1.5" fill="#fef08a"/>
    <circle cx="70" cy="60" r="1.5" fill="#fef08a"/>
    <circle cx="50" cy="72" r="1.5" fill="#fef08a"/>
    <circle cx="64" cy="72" r="1.5" fill="#fef08a"/>
  `),

  // 42. Maracujá
  maracuja: wrapSvg('maracuja', `
    <radialGradient id="passionSkin" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#9333ea"/>
      <stop offset="80%" stop-color="#6b21a8"/>
      <stop offset="100%" stop-color="#3b0764"/>
    </radialGradient>
    <radialGradient id="passionPulp" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="60%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </radialGradient>
  `, `
    <circle cx="60" cy="62" r="32" fill="url(#passionSkin)" stroke="#3b0764" stroke-width="1.5"/>
    <circle cx="60" cy="62" r="26" fill="#fdf4ff"/>
    <circle cx="60" cy="62" r="23" fill="url(#passionPulp)"/>
    <ellipse cx="52" cy="54" rx="3.5" ry="2" fill="#1e1b4b" transform="rotate(25 52 54)"/>
    <ellipse cx="68" cy="52" rx="3.5" ry="2" fill="#1e1b4b" transform="rotate(-30 68 52)"/>
    <ellipse cx="60" cy="66" rx="3.5" ry="2" fill="#1e1b4b" transform="rotate(45 60 66)"/>
    <ellipse cx="48" cy="68" rx="3.5" ry="2" fill="#1e1b4b" transform="rotate(-15 48 68)"/>
    <ellipse cx="72" cy="68" rx="3.5" ry="2" fill="#1e1b4b" transform="rotate(10 72 68)"/>
  `),

  // 43. Manga
  manga: wrapSvg('manga', `
    <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="35%" stop-color="#facc15"/>
      <stop offset="70%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  `, `
    <path d="M 38 32 C 55 24, 88 32, 92 60 C 94 82, 75 94, 52 92 C 32 90, 24 68, 28 50 C 30 40, 32 35, 38 32 Z" fill="url(#mangoGrad)" stroke="#c2410c" stroke-width="1.5"/>
    <path d="M 38 32 L 35 24" stroke="#78350f" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="60" cy="46" rx="14" ry="6" fill="#ffffff" opacity="0.6" transform="rotate(-20 60 46)"/>
  `),

  // 44. Canela
  canela: wrapSvg('canela', `
    <linearGradient id="cinnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="40%" stop-color="#b45309"/>
      <stop offset="85%" stop-color="#78350f"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>
  `, `
    <g transform="translate(60, 60) rotate(-35) translate(-10, -40)">
      <rect x="0" y="0" width="18" height="80" rx="3" fill="url(#cinnaGrad)" stroke="#451a03" stroke-width="1.2"/>
      <ellipse cx="9" cy="4" rx="7" ry="3" fill="#290e04"/>
      <line x1="5" y1="4" x2="5" y2="80" stroke="#451a03" stroke-width="1.2"/>
    </g>
    <g transform="translate(60, 60) rotate(25) translate(-8, -36)">
      <rect x="0" y="0" width="16" height="72" rx="3" fill="url(#cinnaGrad)" stroke="#451a03" stroke-width="1.2"/>
      <ellipse cx="8" cy="4" rx="6" ry="2.5" fill="#290e04"/>
    </g>
  `),

  // 45. Baunilha
  baunilha: wrapSvg('baunilha', `
    <linearGradient id="vanillaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#451a03"/>
      <stop offset="60%" stop-color="#261208"/>
      <stop offset="100%" stop-color="#0a0502"/>
    </linearGradient>
  `, `
    <!-- Slender vanilla bean pod curved -->
    <path d="M 32 88 Q 50 50 68 28 Q 74 18 86 16" stroke="url(#vanillaGrad)" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M 40 88 Q 58 55 76 34" stroke="url(#vanillaGrad)" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    <!-- Yellow Orchid blossom -->
    <circle cx="50" cy="65" r="5" fill="#fef08a"/>
    <ellipse cx="44" cy="62" rx="6" ry="3" fill="#fef9c3" stroke="#facc15" stroke-width="0.8"/>
    <ellipse cx="56" cy="62" rx="6" ry="3" fill="#fef9c3" stroke="#facc15" stroke-width="0.8"/>
    <ellipse cx="50" cy="56" rx="3" ry="6" fill="#fef9c3" stroke="#facc15" stroke-width="0.8"/>
  `),

  // 46. Sal
  sal: wrapSvg('sal', `
    <linearGradient id="saltBowl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  `, `
    <ellipse cx="60" cy="76" rx="34" ry="12" fill="#0f172a" opacity="0.4"/>
    <path d="M 28 60 C 28 84, 42 90, 60 90 C 78 90, 92 84, 92 60 Z" fill="url(#saltBowl)" stroke="#0f172a" stroke-width="1.5"/>
    <ellipse cx="60" cy="58" rx="28" ry="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <polygon points="56,48 64,52 60,60 52,56" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
    <polygon points="66,54 72,50 74,58 68,62" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
  `),

  // 47. Pimenta
  pimenta: wrapSvg('pimenta', `
    <linearGradient id="millGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="50%" stop-color="#451a03"/>
      <stop offset="100%" stop-color="#1c0a02"/>
    </linearGradient>
  `, `
    <path d="M 52 28 C 52 24, 68 24, 68 28 L 65 52 L 70 88 C 70 92, 50 92, 50 88 L 55 52 Z" fill="url(#millGrad)" stroke="#1c0a02" stroke-width="1.5"/>
    <circle cx="60" cy="22" r="3.5" fill="#f59e0b" stroke="#78350f" stroke-width="1"/>
    <circle cx="34" cy="80" r="4.5" fill="#1e293b" stroke="#0f172a" stroke-width="0.8"/>
    <circle cx="44" cy="85" r="4" fill="#334155" stroke="#0f172a" stroke-width="0.8"/>
    <circle cx="76" cy="82" r="4.2" fill="#1e293b" stroke="#0f172a" stroke-width="0.8"/>
  `),

  // 48. Piri-piri
  piri_piri: wrapSvg('piri_piri', `
    <linearGradient id="chiliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="40%" stop-color="#ef4444"/>
      <stop offset="85%" stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#7f1d1d"/>
    </linearGradient>
  `, `
    <path d="M 40 32 C 55 36, 85 52, 88 82 C 88 88, 82 92, 78 88 C 65 72, 48 55, 34 38 Z" fill="url(#chiliGrad)" stroke="#7f1d1d" stroke-width="1.5"/>
    <path d="M 34 38 C 36 32, 42 32, 40 32 L 32 20" stroke="#15803d" stroke-width="3" stroke-linecap="round" fill="none"/>
    <polygon points="32,36 40,32 42,42 34,44" fill="#16a34a"/>
    <path d="M 46 42 Q 65 56 72 74" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
  `),

  // 49. Louro
  louro: wrapSvg('louro', `
    <linearGradient id="bayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#84cc16"/>
      <stop offset="50%" stop-color="#65a30d"/>
      <stop offset="100%" stop-color="#3f6212"/>
    </linearGradient>
  `, `
    <path d="M 30 80 C 25 50, 40 35, 55 24 C 65 42, 60 65, 30 80 Z" fill="url(#bayGrad)" stroke="#365314" stroke-width="1.5"/>
    <path d="M 30 80 Q 45 52 55 24" stroke="#a3e635" stroke-width="1.5" fill="none"/>
    <path d="M 40 82 C 55 70, 75 60, 92 42 C 85 62, 70 82, 40 82 Z" fill="url(#bayGrad)" stroke="#365314" stroke-width="1.5"/>
    <path d="M 40 82 Q 65 65 92 42" stroke="#a3e635" stroke-width="1.5" fill="none"/>
  `),

  // 50. Salsa
  salsa: wrapSvg('salsa', `
    <linearGradient id="herbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4ade80"/>
      <stop offset="50%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
  `, `
    <path d="M 60 96 Q 58 60 45 42 M 60 75 Q 68 55 75 38 M 60 60 L 60 30" stroke="#15803d" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M 52 28 C 48 18, 72 18, 68 28 C 76 28, 72 40, 60 38 C 48 40, 44 28, 52 28 Z" fill="url(#herbGrad)" stroke="#14532d" stroke-width="1.2"/>
    <path d="M 38 42 C 30 35, 50 28, 48 38 C 55 38, 52 48, 45 46 Z" fill="url(#herbGrad)" stroke="#14532d" stroke-width="1.2"/>
    <path d="M 72 38 C 80 32, 90 42, 80 46 C 85 52, 75 55, 72 46 Z" fill="url(#herbGrad)" stroke="#14532d" stroke-width="1.2"/>
  `),

  // 51. Coentros
  coentros: wrapSvg('coentros', `
    <linearGradient id="corianderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#86efac"/>
      <stop offset="50%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#166534"/>
    </linearGradient>
  `, `
    <path d="M 60 96 Q 55 65 42 45 M 60 75 Q 66 58 78 40" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none"/>
    <circle cx="40" cy="40" r="8" fill="url(#corianderGrad)" stroke="#14532d" stroke-width="1"/>
    <circle cx="50" cy="30" r="9" fill="url(#corianderGrad)" stroke="#14532d" stroke-width="1"/>
    <circle cx="76" cy="36" r="8" fill="url(#corianderGrad)" stroke="#14532d" stroke-width="1"/>
    <circle cx="68" cy="24" r="9" fill="url(#corianderGrad)" stroke="#14532d" stroke-width="1"/>
  `),

  // 52. Vinho Branco
  vinho_branco: wrapSvg('vinho_branco', `
    <linearGradient id="whiteWine" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef9c3"/>
      <stop offset="60%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#facc15"/>
    </linearGradient>
  `, `
    <rect x="36" y="20" width="8" height="10" rx="1.5" fill="#ca8a04"/>
    <path d="M 37 30 L 37 42 L 30 52 L 30 92 L 50 92 L 50 52 L 43 42 L 43 30 Z" fill="#65a30d" stroke="#365314" stroke-width="1.5"/>
    <path d="M 64 52 C 64 74, 86 74, 86 52 Z" fill="url(#whiteWine)" stroke="#cbd5e1" stroke-width="1.2"/>
    <line x1="75" y1="74" x2="75" y2="92" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="66" y1="92" x2="84" y2="92" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
  `),

  // 53. Vinho Tinto
  vinho_tinto: wrapSvg('vinho_tinto', `
    <linearGradient id="redWine" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#991b1b"/>
      <stop offset="50%" stop-color="#7f1d1d"/>
      <stop offset="100%" stop-color="#450a0a"/>
    </linearGradient>
  `, `
    <rect x="36" y="20" width="8" height="10" rx="1.5" fill="#ca8a04"/>
    <path d="M 37 30 L 37 42 L 30 52 L 30 92 L 50 92 L 50 52 L 43 42 L 43 30 Z" fill="#14532d" stroke="#052e16" stroke-width="1.5"/>
    <path d="M 64 52 C 64 74, 86 74, 86 52 Z" fill="url(#redWine)" stroke="#cbd5e1" stroke-width="1.2"/>
    <line x1="75" y1="74" x2="75" y2="92" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="66" y1="92" x2="84" y2="92" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
  `),

  // 54. Cerveja
  cerveja: wrapSvg('cerveja', `
    <linearGradient id="beerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  `, `
    <rect x="40" y="44" width="40" height="48" rx="6" fill="url(#beerGrad)" stroke="#b45309" stroke-width="1.5"/>
    <path d="M 80 52 C 92 52, 92 78, 80 78" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M 36 44 C 36 34, 46 32, 52 36 C 58 30, 70 30, 74 36 C 80 32, 86 36, 84 44 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  `),

  // 55. Azeitonas
  azeitonas: wrapSvg('azeitonas', `
    <radialGradient id="blackOlive" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="40%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#020617"/>
    </radialGradient>
    <radialGradient id="greenOlive" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#bef264"/>
      <stop offset="50%" stop-color="#65a30d"/>
      <stop offset="100%" stop-color="#365314"/>
    </radialGradient>
  `, `
    <ellipse cx="46" cy="62" rx="16" ry="22" fill="url(#blackOlive)" transform="rotate(-20 46 62)"/>
    <circle cx="42" cy="54" r="3" fill="#ffffff" opacity="0.6"/>
    <ellipse cx="72" cy="68" rx="15" ry="21" fill="url(#greenOlive)" transform="rotate(30 72 68)"/>
    <circle cx="68" cy="60" r="3" fill="#ffffff" opacity="0.7"/>
    <ellipse cx="78" cy="74" rx="4" ry="3" fill="#ef4444"/>
    <path d="M 52 38 C 65 28, 80 35, 78 48 C 65 48, 55 45, 52 38 Z" fill="#4d7c0f" stroke="#365314" stroke-width="1"/>
  `),

  // 56. Chouriço
  chourico: wrapSvg('chourico', `
    <linearGradient id="sausageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="40%" stop-color="#b91c1c"/>
      <stop offset="85%" stop-color="#7f1d1d"/>
      <stop offset="100%" stop-color="#450a0a"/>
    </linearGradient>
  `, `
    <path d="M 32 78 C 22 55, 36 32, 60 32 C 84 32, 98 55, 88 78 C 82 82, 74 78, 76 70 C 82 55, 74 44, 60 44 C 46 44, 38 55, 44 70 C 46 78, 38 82, 32 78 Z" fill="url(#sausageGrad)" stroke="#450a0a" stroke-width="1.8"/>
    <line x1="38" y1="74" x2="82" y2="74" stroke="#fde68a" stroke-width="2" stroke-dasharray="3,2"/>
    <circle cx="48" cy="42" r="2" fill="#fca5a5" opacity="0.8"/>
    <circle cx="68" cy="40" r="2.5" fill="#fca5a5" opacity="0.8"/>
  `),

  // 57. Presunto & Bacon
  presunto: wrapSvg('presunto', `
    <linearGradient id="hamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="40%" stop-color="#dc2626"/>
      <stop offset="80%" stop-color="#991b1b"/>
      <stop offset="100%" stop-color="#7f1d1d"/>
    </linearGradient>
  `, `
    <path d="M 24 55 Q 40 40 60 52 Q 80 64 96 48 L 94 65 Q 75 75 58 64 Q 40 54 26 70 Z" fill="url(#hamGrad)" stroke="#7f1d1d" stroke-width="1.2"/>
    <path d="M 28 58 Q 42 46 60 56 Q 78 66 94 54" stroke="#fef2f2" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M 28 72 Q 44 60 64 70 Q 82 80 94 68 L 92 82 Q 76 90 60 82 Q 42 74 30 86 Z" fill="url(#hamGrad)" stroke="#7f1d1d" stroke-width="1.2"/>
    <path d="M 32 75 Q 46 64 64 74 Q 80 82 92 72" stroke="#fef2f2" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  `),

  // 58. Bolacha Maria
  bolacha: wrapSvg('bolacha', `
    <radialGradient id="biscuitGrad" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fef3c7"/>
      <stop offset="50%" stop-color="#fde68a"/>
      <stop offset="100%" stop-color="#d97706"/>
    </radialGradient>
  `, `
    <circle cx="60" cy="60" r="34" fill="url(#biscuitGrad)" stroke="#b45309" stroke-width="1.5"/>
    <circle cx="60" cy="60" r="28" fill="none" stroke="#b45309" stroke-width="1" stroke-dasharray="2,3"/>
    <text x="60" y="64" font-family="'Plus Jakarta Sans', serif" font-size="11" font-weight="bold" fill="#78350f" text-anchor="middle" letter-spacing="2">MARIA</text>
    <circle cx="48" cy="48" r="1.5" fill="#78350f"/>
    <circle cx="72" cy="48" r="1.5" fill="#78350f"/>
    <circle cx="48" cy="72" r="1.5" fill="#78350f"/>
    <circle cx="72" cy="72" r="1.5" fill="#78350f"/>
  `),

  // 59. Fermento
  fermento: wrapSvg('fermento', `
    <linearGradient id="yeastGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  `, `
    <rect x="36" y="32" width="48" height="62" rx="4" fill="url(#yeastGrad)" stroke="#b91c1c" stroke-width="1.5"/>
    <rect x="42" y="44" width="36" height="28" rx="2" fill="#ffffff"/>
    <text x="60" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">FERMENTO</text>
    <path d="M 60 18 Q 60 26 54 26 Q 60 26 60 32 Q 60 26 66 26 Q 60 26 60 18 Z" fill="#facc15"/>
  `),

  // 60. Nozes
  nozes: wrapSvg('nozes', `
    <radialGradient id="nutGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fed7aa"/>
      <stop offset="50%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#9a3412"/>
    </radialGradient>
  `, `
    <path d="M 32 50 C 30 35, 65 32, 68 45 C 72 60, 68 78, 55 82 C 40 85, 34 68, 32 50 Z" fill="url(#nutGrad)" stroke="#7c2d12" stroke-width="1.5"/>
    <path d="M 42 45 Q 52 50 44 65 M 56 45 Q 48 55 58 70" stroke="#7c2d12" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M 65 65 C 65 52, 85 45, 90 60 C 95 75, 80 88, 70 82 C 64 78, 65 72, 65 65 Z" fill="#d97706" stroke="#78350f" stroke-width="1.2"/>
  `),

  // 61. Mel
  mel: wrapSvg('mel', `
    <linearGradient id="honeyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  `, `
    <rect x="44" y="24" width="32" height="10" rx="3" fill="#ca8a04"/>
    <path d="M 38 34 L 82 34 L 86 86 C 86 92, 34 92, 34 86 Z" fill="url(#honeyGrad)" stroke="#b45309" stroke-width="1.5"/>
    <ellipse cx="60" cy="56" rx="14" ry="12" fill="#ffffff" opacity="0.8"/>
    <text x="60" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="bold" fill="#78350f" text-anchor="middle">MEL</text>
  `),

  // 62. Vinagre
  vinagre: wrapSvg('vinagre', `
    <linearGradient id="vinegarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#701a75"/>
      <stop offset="60%" stop-color="#4a044e"/>
      <stop offset="100%" stop-color="#2e1065"/>
    </linearGradient>
  `, `
    <rect x="55" y="18" width="10" height="12" rx="2" fill="#a16207"/>
    <path d="M 54 30 L 54 44 L 40 56 L 40 92 L 80 92 L 80 56 L 66 44 L 66 30 Z" fill="url(#vinegarGrad)" stroke="#1e1b4b" stroke-width="1.5"/>
    <rect x="48" y="60" width="24" height="20" rx="2" fill="#fdf4ff"/>
    <text x="60" y="73" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#701a75" text-anchor="middle">VINAGRE</text>
  `),

  // 63. Mostarda
  mostarda: wrapSvg('mostarda', `
    <linearGradient id="mustardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
  `, `
    <rect x="42" y="26" width="36" height="10" rx="3" fill="#ca8a04"/>
    <path d="M 38 36 L 82 36 L 80 90 L 40 90 Z" fill="url(#mustardGrad)" stroke="#a16207" stroke-width="1.5"/>
    <rect x="44" y="52" width="32" height="22" rx="2" fill="#ffffff"/>
    <text x="60" y="66" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="bold" fill="#a16207" text-anchor="middle">MOSTARDA</text>
  `),

  // 64. Maionese
  maionese: wrapSvg('maionese', `
    <linearGradient id="mayoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#fefce8"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
  `, `
    <rect x="42" y="26" width="36" height="10" rx="3" fill="#38bdf8"/>
    <path d="M 38 36 L 82 36 L 80 90 L 40 90 Z" fill="url(#mayoGrad)" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect x="44" y="52" width="32" height="22" rx="2" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <circle cx="60" cy="63" r="6" fill="#38bdf8"/>
  `),

  // 65. Brócolos
  brocolos: wrapSvg('brocolos', `
    <linearGradient id="broccoliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#86efac"/>
      <stop offset="40%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
  `, `
    <path d="M 52 65 L 50 92 C 50 96, 70 96, 70 92 L 68 65 Z" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
    <circle cx="44" cy="52" r="15" fill="url(#broccoliGrad)"/>
    <circle cx="76" cy="52" r="15" fill="url(#broccoliGrad)"/>
    <circle cx="60" cy="40" r="18" fill="url(#broccoliGrad)"/>
    <circle cx="50" cy="48" r="10" fill="#22c55e" opacity="0.5"/>
    <circle cx="70" cy="48" r="10" fill="#22c55e" opacity="0.5"/>
  `),

  // 66. Água
  agua: wrapSvg('agua', `
    <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e0f2fe"/>
      <stop offset="50%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
  `, `
    <path d="M 38 36 L 44 90 C 44 94, 76 94, 76 90 L 82 36 Z" fill="url(#waterGrad)" stroke="#0284c7" stroke-width="1.5"/>
    <ellipse cx="60" cy="36" rx="22" ry="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
    <ellipse cx="60" cy="46" rx="19" ry="5" fill="#38bdf8" opacity="0.8"/>
    <circle cx="54" cy="62" r="2.5" fill="#ffffff" opacity="0.7"/>
    <circle cx="66" cy="72" r="3" fill="#ffffff" opacity="0.7"/>
  `),

  // 67. Temperos Gerais
  temperos: wrapSvg('temperos', `
    <linearGradient id="mortarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="60%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  `, `
    <ellipse cx="60" cy="88" rx="34" ry="8" fill="#0f172a" opacity="0.3"/>
    <path d="M 28 54 C 28 84, 42 90, 60 90 C 78 90, 92 84, 92 54 Z" fill="url(#mortarGrad)" stroke="#1e293b" stroke-width="1.5"/>
    <ellipse cx="60" cy="54" rx="32" ry="8" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
    <ellipse cx="60" cy="54" rx="26" ry="6" fill="#15803d"/>
    <rect x="54" y="24" width="12" height="38" rx="5" fill="#cbd5e1" stroke="#475569" stroke-width="1.5" transform="rotate(25 60 40)"/>
    <path d="M 38 48 C 30 35, 45 25, 52 35 Z" fill="#84cc16"/>
    <circle cx="70" cy="52" r="2" fill="#ef4444"/>
    <circle cx="62" cy="56" r="1.8" fill="#ef4444"/>
  `)
};

let count = 0;
for (const [name, content] of Object.entries(SVGS)) {
  const filePath = path.join(OUT_DIR, `${name}.svg`);
  fs.writeFileSync(filePath, content, 'utf8');
  count++;
}

console.log(`Generated ${count} complete culinary ingredient SVGs in ${OUT_DIR}`);
