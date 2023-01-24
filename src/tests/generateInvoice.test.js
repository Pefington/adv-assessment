import { describe, it, expect } from 'vitest';
import { generateInvoice } from '../generateInvoice.ts';
import { basket } from '../data/testBaskets.ts';

describe('generateInvoice', () => {
  it('should return an object with the desired output data', () => {
    expect(generateInvoice(basket)).toEqual({
      products: [
        [2, 'flacons de parfum importés', 2799, 6998],
        [1, 'flacon de parfum', 1899, 2279],
        [3, 'boîtes de pilules contre la migraine', 975, 2925],
        [2, 'boîtes de chocolats importées', 1125, 2370],
      ],
      taxesAmount: 1900,
      basketPrice: 14572,
    });
  });
});
