import { describe, it, expect } from 'vitest';
import { calculateTax } from '../calculateTax.ts';
import { other1899, otherImport2799, testBasket } from '../data/testBasket.ts';

describe('calculateTax', () => {
  it('given a product, should calculate the tax to pay for a local product', () => {
    expect(calculateTax(other1899)).toStrictEqual(380);
  });

  it('given a product, should calculate the tax to pay for an imported product', () => {
    expect(calculateTax(otherImport2799)).toStrictEqual(700);
  });

  it('given a basket, should return the total taxes of a basket', () => {
    expect(calculateTax(testBasket)).toStrictEqual(1900);
  });
});
