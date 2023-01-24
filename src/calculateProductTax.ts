import { applyRoundingStep } from './applyRoundingStep.js';
import { IMPORT_TAX_RATE } from './taxRates.js';
import { Product, PriceInCents } from './types.js';

export function calculateProductTax(product: Product): PriceInCents {
  const tax = applyRoundingStep((product.priceInCents * product.taxRate) / 100);
  if (!product.isImported) return tax;

  const importTax = applyRoundingStep(
    (product.priceInCents * IMPORT_TAX_RATE) / 100
  );
  return tax + importTax;
}
