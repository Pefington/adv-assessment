import { ROUNDING_STEP } from './constants.js';
import { PriceInCents } from './types.js';

export function applyRoundingStep(tax: number): PriceInCents {
  const taxInCents = Math.ceil(tax);
  const roundingRemainder = taxInCents % ROUNDING_STEP;
  if (roundingRemainder === 0) return taxInCents;

  const roundingCorrection: number = ROUNDING_STEP - roundingRemainder;
  return taxInCents + roundingCorrection;
}
