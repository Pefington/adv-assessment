import { calculateProductPrice } from './calculateProductPrice.js';
import { Basket, PriceInCents } from './types/types.js';

export function calculateBasketTotal(basket: Basket): PriceInCents {
  return basket.reduce((total, product): PriceInCents => {
    return total + calculateProductPrice(product) * product.quantity;
  }, 0);
}
