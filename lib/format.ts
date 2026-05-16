export function formatNumber(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits }).format(Number.isFinite(value) ? value : 0);
}

export function formatCurrency(value: number, symbol = "₹") {
  return `${symbol}${formatNumber(value, 0)}`;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
