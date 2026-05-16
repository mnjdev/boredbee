const dayMs = 24 * 60 * 60 * 1000;

export function dateKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function daysBetween(start: string, end: string, includeEndDate = false) {
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return null;
  const diff = Math.round((endDate.getTime() - startDate.getTime()) / dayMs) + (includeEndDate ? 1 : 0);
  return diff;
}

export function yesterdayKey(date = new Date()) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() - 1);
  return dateKey(copy);
}

export function deterministicIndex(date: Date, length: number) {
  const seed = Number(date.toISOString().slice(0, 10).replaceAll("-", ""));
  return seed % length;
}
