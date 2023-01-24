import { describe, it, expect } from 'vitest';
import { calculateProductPrice } from '../src/calculateProductPrice';
import { essential975, otherImport2799 } from '../src/testBaskets';

describe('calculateProductPrice', () => {
  it("should return a local essential product's initial price", () => {
    expect(calculateProductPrice(essential975)).toStrictEqual(975);
  });
  it("should calculate a product's price after taxes", () => {
    expect(calculateProductPrice(otherImport2799)).toStrictEqual(3499);
  });
});
