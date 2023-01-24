import { PriceInCents } from '../types/types.js';

export function toFrenchFormat(price: PriceInCents): string {
  return (price / 100).toFixed(2).replace('.', ',');
}
