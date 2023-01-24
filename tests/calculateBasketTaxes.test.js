import { describe, it, expect } from 'vitest';
import { calculateBasketTaxes } from '../src/calculateBasketTaxes';
import { basket } from '../src/testBaskets';

describe('calculateBasketTaxes', () => {
  it("should return the total of all the basket's products taxes to pay", () => {
    expect(calculateBasketTaxes(basket)).toStrictEqual(1900);
  });
});
