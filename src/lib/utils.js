/**
 * Combines class names with proper precedence
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format price with currency
 */
export function formatPrice(price, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)
}