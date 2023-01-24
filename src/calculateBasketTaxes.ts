import { calculateProductTax } from './calculateProductTax.js';
import { Basket, PriceInCents } from './types/types.js';

export function calculateBasketTaxes(basket: Basket): PriceInCents {
  return basket.reduce((total, product): PriceInCents => {
    return total + calculateProductTax(product) * product.quantity;
  }, 0);
}
