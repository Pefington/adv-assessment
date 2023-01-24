import { describe, it, expect } from 'vitest';
import { calculateBasketTotal } from '../src/calculateBasketTotal';
import { basket } from '../src/testBaskets';

describe('calculateBasketTotal', () => {
  it('should return the total price for the basket, including taxes', () => {
    expect(calculateBasketTotal(basket)).toStrictEqual(14572);
  });
});
