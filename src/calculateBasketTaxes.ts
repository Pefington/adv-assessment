import { calculateProductTax } from './calculateProductTax.js';
import { Basket, PriceInCents } from './types.js';

export function calculateBasketTaxes(basket: Basket): PriceInCents {
  let basketTaxes = 0;
  for (const product of basket) {
    const productTaxes = calculateProductTax(product);
    basketTaxes += productTaxes * product.quantity;
  }
  return basketTaxes;
}
