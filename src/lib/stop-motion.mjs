export function frameAt(distance, pixelsPerFrame = 52, frameCount = 6) {
  const cycle = (frameCount - 1) * 2;
  const step = Math.floor(Math.max(0, distance) / pixelsPerFrame) % cycle;
  return step < frameCount ? step : cycle - step;
}

export function chapterAt(scroll, starts) {
  let index = 0;
  for (let i = 1; i < starts.length; i++) {
    if (scroll < starts[i]) break;
    index = i;
  }
  return index;
}
