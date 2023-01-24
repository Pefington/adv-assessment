import { describe, it, expect } from 'vitest';
import { calculateBasketTotal } from '../calculateBasketTotal.ts';
import { basket } from '../data/testBaskets.ts';

describe('calculateBasketTotal', () => {
  it('should return the total price for the basket, including taxes', () => {
    expect(calculateBasketTotal(basket)).toStrictEqual(14572);
  });
});
