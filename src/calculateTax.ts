import { applyRoundingStep } from './applyRoundingStep.js';
import { TAX_RATE } from './data/constants.js';
import { Basket, Product, PriceInCents } from './types/types.js';

export function calculateTax(basketOrProduct: Basket | Product): PriceInCents {
  if (Array.isArray(basketOrProduct))
    return basketOrProduct.reduce((total, product): PriceInCents => {
      return total + calculateTax(product) * product.quantity;
    }, 0);

  const tax = (basketOrProduct.priceInCents * basketOrProduct.taxRate) / 100;
  const roundedTax = applyRoundingStep(tax);
  if (!basketOrProduct.isImported) return roundedTax;

  const importTax = (basketOrProduct.priceInCents * TAX_RATE.Import) / 100;
  const roundedImportTax = applyRoundingStep(importTax);
  return roundedTax + roundedImportTax;
}
