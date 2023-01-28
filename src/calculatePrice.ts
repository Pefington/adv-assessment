import { calculateTax } from './calculateTax.js';
import { Basket, Product, PriceInCents } from './types/types.js';

export function calculatePrice(
  basketOrProduct: Basket | Product
): PriceInCents {
  if (Array.isArray(basketOrProduct))
    return basketOrProduct.reduce((total, product): PriceInCents => {
      return total + calculatePrice(product) * product.quantity;
    }, 0);

  return basketOrProduct.priceInCents + calculateTax(basketOrProduct);
}
