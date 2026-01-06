export const formatTime = (minutes: number, seconds: number) => {
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  return `${m}:${s}`;
};