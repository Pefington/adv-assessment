import { describe, it, expect } from 'vitest';
import { calculateProductPrice } from '../calculateProductPrice.ts';
import { essential975, otherImport2799 } from '../data/testBaskets.ts';

describe('calculateProductPrice', () => {
  it("should return a local essential product's initial price", () => {
    expect(calculateProductPrice(essential975)).toStrictEqual(975);
  });
  it("should calculate a product's price after taxes", () => {
    expect(calculateProductPrice(otherImport2799)).toStrictEqual(3499);
  });
});
