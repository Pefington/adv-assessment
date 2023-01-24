import { describe, it, expect, vitest } from 'vitest';
import { generateInvoice } from '../generateInvoice.ts';
import { printInvoiceTotal } from '../printInvoiceTotal.ts';
import { basket } from '../data/testBasket.ts';

describe('printInvoiceTotal', () => {
  it('should console.log a formatted invoice total', () => {
    const logSpy = vitest.spyOn(global.console, 'log');
    const invoice = generateInvoice(basket);
    printInvoiceTotal(invoice);

    expect(logSpy).toHaveBeenCalledWith('Total : 145,72\xa0€\n\n');

    logSpy.mockClear();
  });
});
