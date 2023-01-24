import { describe, it, expect } from 'vitest';
import { calculateProductTax } from '../calculateProductTax.ts';
import { other1899, otherImport2799 } from '../data/testBasket.ts';

describe('calculateProductTax', () => {
  it('should calculate the tax to pay for a local product', () => {
    expect(calculateProductTax(other1899)).toStrictEqual(380);
  });

  it('should calculate the tax to pay for an imported product', () => {
    expect(calculateProductTax(otherImport2799)).toStrictEqual(700);
  });
});
