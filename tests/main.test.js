import { describe, expect, it } from 'vitest';
import { calculateProductTax } from '../src/main.ts';

const testProductLocal = {
  taxRate: 10,
  isImported: false,
  priceInCents: 80,
};

const testProductImported = {
  taxRate: 10,
  isImported: true,
  priceInCents: 80,
};

describe('calculateProductTax', () => {
  it('should calculate the tax in cents for a local product', () => {
    expect(calculateProductTax(testProductLocal)).toStrictEqual(10);
  });
  it('should calculate the tax in cents for an imported product', () => {
    expect(calculateProductTax(testProductImported)).toStrictEqual(15);
  });
});
