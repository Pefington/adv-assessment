import { PriceInCents } from './types.js';

export function formatFR(price: PriceInCents): string {
  return (price / 100).toFixed(2).replace('.', ',');
}
