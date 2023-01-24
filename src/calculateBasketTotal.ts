import { calculateProductPrice } from './calculateProductPrice.js';
import { Basket, PriceInCents } from './types.js';

export function calculateBasketTotal(basket: Basket): PriceInCents {
  let basketTotal = 0;
  for (const product of basket) {
    const productPrice = calculateProductPrice(product);
    basketTotal += productPrice * product.quantity;
  }
  return basketTotal;
}
