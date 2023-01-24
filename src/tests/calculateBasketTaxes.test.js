import { describe, it, expect } from 'vitest';
import { calculateBasketTaxes } from '../calculateBasketTaxes.ts';
import { basket } from '../data/testBasket.ts';

describe('calculateBasketTaxes', () => {
  it("should return the total of all the basket's products taxes to pay", () => {
    expect(calculateBasketTaxes(basket)).toStrictEqual(1900);
  });
});
