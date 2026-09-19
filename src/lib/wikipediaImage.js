// Fetches a real dish image from Wikipedia (free, no AI image-generation credits).
// Tries an exact article match first, then falls back to a prefix search.

export async function fetchDishImage(name) {
  if (!name) return null;
  const term = name.trim();
  if (!term) return null;

  // 1. Exact REST summary (best quality original image).
  try {
    const summaryRes = await fetch(
      `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term.replace(/\s+/g, '_'))}`
    );
    if (summaryRes.ok) {
      const data = await summaryRes.json();
      if (data.type !== 'disambiguation' && data.type !== 'not-found') {
        const src = data.originalimage?.source || data.thumbnail?.source;
        if (src) return src;
      }
    }
  } catch (e) {
    /* ignore, try fallback */
  }

  // 2. Prefix search for the closest matching article with an image.
  try {
    const searchUrl =
      `https://pt.wikipedia.org/w/api.php?action=query&format=json` +
      `&generator=prefixsearch&gpssearch=${encodeURIComponent(term)}&gpslimit=1` +
      `&prop=pageimages&piprop=thumbnail&pithumbsize=600&origin=*`;
    const res = await fetch(searchUrl);
    const data = await res.json();
    const pages = data.query?.pages || {};
    const page = Object.values(pages)[0];
    if (page?.thumbnail?.source) return page.thumbnail.source;
  } catch (e) {
    /* ignore */
  }

  return null;
}