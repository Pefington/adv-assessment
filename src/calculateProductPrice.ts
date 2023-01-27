import { calculateProductTax } from './calculateProductTax.js';
import { Product, PriceInCents } from './types/types.js';

export function calculateProductPrice(product: Product): PriceInCents {
  return product.priceInCents + calculateProductTax(product);
}
