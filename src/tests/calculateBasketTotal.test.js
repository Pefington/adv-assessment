import { describe, it, expect } from 'vitest';
import { calculateBasketTotal } from '../calculateBasketTotal.ts';
import { testBasket } from '../data/testBasket.ts';

describe('calculateBasketTotal', () => {
  it('should return the total price for the basket, including taxes', () => {
    expect(calculateBasketTotal(testBasket)).toStrictEqual(14572);
  });
});
