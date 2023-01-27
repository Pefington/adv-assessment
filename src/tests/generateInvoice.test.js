import { describe, it, expect } from 'vitest';
import { generateInvoice } from '../generateInvoice.ts';
import { testBasket } from '../data/testBasket.ts';

describe('generateInvoice', () => {
  it('should return an object with the desired output data', () => {
    expect(generateInvoice(testBasket)).toEqual({
      lines: [
        {
          quantity: 2,
          name: 'flacons de parfum importés',
          price: 2799,
          total: 6998,
        },
        {
          quantity: 1,
          name: 'flacon de parfum',
          price: 1899,
          total: 2279,
        },
        {
          quantity: 3,
          name: 'boîtes de pilules contre la migraine',
          price: 975,
          total: 2925,
        },
        {
          quantity: 2,
          name: 'boîtes de chocolats importées',
          price: 1125,
          total: 2370,
        },
      ],
      taxes: 1900,
      total: 14572,
    });
  });
});
