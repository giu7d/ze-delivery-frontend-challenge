export function calculateDiscount(currentPrice: number, originalPrice: number) {
  return ((currentPrice * 100) / originalPrice - 100).toFixed(0)
}
