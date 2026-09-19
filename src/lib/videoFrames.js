// Extracts evenly-spaced frames from a video file as JPEG Blobs.
// Used to send multiple still images to the vision LLM (more reliable than raw video).
export async function extractVideoFrames(file, count = 4) {
  const url = URL.createObjectURL(file);
  const video = document.createElement('video');
  video.src = url;
  video.muted = true;
  video.playsInline = true;

  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(), 3000);
    video.onloadeddata = () => { clearTimeout(timer); resolve(); };
    video.onerror = () => { clearTimeout(timer); reject(new Error('Não consegui carregar o vídeo.')); };
    video.load();
  });

  const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
  const frames = [];

  for (let i = 0; i < count; i++) {
    const t = duration ? (duration * (i + 0.5)) / count : 0;
    await seek(video, t);
    const blob = await captureFrame(video);
    if (blob) frames.push(blob);
  }

  URL.revokeObjectURL(url);
  if (frames.length === 0) throw new Error('Não consegui extrair frames do vídeo.');
  return frames;
}

function seek(video, time) {
  return new Promise((resolve) => {
    const onSeeked = () => {
      video.removeEventListener('seeked', onSeeked);
      requestAnimationFrame(() => resolve());
    };
    video.addEventListener('seeked', onSeeked);
    video.currentTime = time;
  });
}

function captureFrame(video) {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), 'image/jpeg', 0.8));
}