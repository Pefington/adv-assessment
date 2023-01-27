import { applyRoundingStep } from './applyRoundingStep.js';
import { TAX_RATE } from './data/constants.js';
import { Product, PriceInCents } from './types/types.js';

export function calculateProductTax(product: Product): PriceInCents {
  const tax = (product.priceInCents * product.taxRate) / 100;
  const roundedTax = applyRoundingStep(tax);
  if (!product.isImported) return roundedTax;

  const importTax = (product.priceInCents * TAX_RATE.Import) / 100;
  const roundedImportTax = applyRoundingStep(importTax);
  return roundedTax + roundedImportTax;
}
