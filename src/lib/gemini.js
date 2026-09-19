export const getGeminiApiKey = () => {
  return (
    import.meta.env.VITE_GEMINI_API_KEY ||
    (typeof window !== 'undefined' ? localStorage.getItem('abana_gemini_api_key') : '') ||
    ''
  );
};

export const GEMINI_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-flash-lite-latest',
  'gemini-3-flash-preview',
  'gemini-3.1-flash-lite',
  'gemini-3.6-flash'
];

export const RECIPE_JSON_SCHEMA = {
  type: 'OBJECT',
  properties: {
    recipe_name: { type: 'STRING' },
    description: { type: 'STRING' },
    difficulty: { type: 'STRING' },
    prep_time: { type: 'STRING' },
    ingredients: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          name: { type: 'STRING' },
          quantity: { type: 'STRING' }
        },
        required: ['name', 'quantity']
      }
    },
    steps: {
      type: 'ARRAY',
      items: { type: 'STRING' }
    }
  },
  required: ['recipe_name', 'description', 'difficulty', 'prep_time', 'ingredients', 'steps']
};

/**
 * Executes a call to Google Gemini generateContent with fallback across models.
 */
export async function callGemini(contents, schema = RECIPE_JSON_SCHEMA) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error('Chave Google Gemini não configurada. Podes adicionar a chave nas Preferências.');
  }

  let lastError = null;

  for (const model of GEMINI_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const payload = {
        contents,
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: schema
        }
      };

      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        throw new Error(`HTTP ${resp.status}: ${errorText}`);
      }

      const json = await resp.json();
      const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error('Resposta vazia da Google AI.');

      return JSON.parse(text);
    } catch (err) {
      console.warn(`Tentativa com ${model} falhou:`, err);
      lastError = err;
    }
  }

  throw lastError || new Error('Não foi possível obter resposta da Google AI.');
}

/**
 * Generates a Portuguese recipe from image media items.
 */
export async function generateRecipeFromMedia({ mediaList, prompt }) {
  const parts = [
    { text: prompt },
    ...mediaList.map((m) => ({ inlineData: m }))
  ];
  return callGemini([{ parts }]);
}

/**
 * Generates a Portuguese recipe from a textual prompt.
 */
export async function generateRecipeFromPrompt({ prompt }) {
  const parts = [{ text: prompt }];
  return callGemini([{ parts }]);
}

/**
 * Resizes and converts a file to base64 inlineData suitable for Gemini API.
 */
export function fileToResizedInlineData(file, maxDimension = 1280) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        resolve({
          previewUrl: dataUrl,
          inlineData: {
            mimeType: 'image/jpeg',
            data: dataUrl.split(',')[1]
          }
        });
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Converts a Blob to base64 inlineData.
 */
export function blobToInlineData(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result;
      resolve({
        previewUrl: dataUrl,
        inlineData: {
          mimeType: blob.type || 'image/jpeg',
          data: dataUrl.split(',')[1]
        }
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
