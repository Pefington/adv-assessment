import { describe, it, expect } from 'vitest';
import { generateInvoiceLine } from '../generateInvoiceLine.ts';
import {
  other1899 as singularProduct,
  otherImport2799 as pluralProduct,
} from '../data/testBasket.ts';

describe('generateInvoiceLine', () => {
  it('should generate an invoice line for each product', () => {
    expect(generateInvoiceLine(singularProduct)).toEqual({
      quantity: 1,
      name: 'flacon de parfum',
      price: 1899,
      total: 2279,
    });

    expect(generateInvoiceLine(pluralProduct)).toEqual({
      quantity: 2,
      name: 'flacons de parfum importés',
      price: 2799,
      total: 6998,
    });
  });
});
