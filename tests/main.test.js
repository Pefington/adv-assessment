import { describe, expect, it } from 'vitest';
import { calculateTax } from '../src/main.ts';

describe('calculateTax', () => {
  it('calculates the tax amount for a given product', () => {
    expect(calculateTax(10, 20)).toStrictEqual(2);
  });
});
