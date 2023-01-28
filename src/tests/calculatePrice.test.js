import { describe, it, expect } from 'vitest';
import { calculatePrice } from '../calculatePrice.ts';
import {
  essential975,
  otherImport2799,
  testBasket,
} from '../data/testBasket.ts';

describe('calculatePrice', () => {
  it("given a product, should return a local essential product's initial price", () => {
    expect(calculatePrice(essential975)).toStrictEqual(975);
  });

  it("given a product, should calculate a product's price after taxes", () => {
    expect(calculatePrice(otherImport2799)).toStrictEqual(3499);
  });

  it('given a basket, should return the total price for the basket, including taxes', () => {
    expect(calculatePrice(testBasket)).toStrictEqual(14572);
  });
});
