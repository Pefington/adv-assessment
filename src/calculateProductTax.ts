import { applyRoundingStep } from './applyRoundingStep.js';
import { TAX_RATE } from './constants.js';
import { Product, PriceInCents } from './types.js';

export function calculateProductTax(product: Product): PriceInCents {
  const tax = applyRoundingStep((product.priceInCents * product.taxRate) / 100);
  if (!product.isImported) return tax;

  const importTax = applyRoundingStep(
    (product.priceInCents * TAX_RATE.Import) / 100
  );
  return tax + importTax;
}
