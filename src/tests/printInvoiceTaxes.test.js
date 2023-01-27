import { describe, it, expect, vitest } from 'vitest';
import { generateInvoice } from '../generateInvoice.ts';
import { printInvoiceTaxes } from '../printInvoiceTaxes.ts';
import { testBasket } from '../data/testBasket.ts';

describe('printInvoiceTaxes', () => {
  it('should console.log a formatted invoice', () => {
    const logSpy = vitest.spyOn(global.console, 'log');
    const invoice = generateInvoice(testBasket);
    printInvoiceTaxes(invoice);

    expect(logSpy).toHaveBeenCalledWith('\nMontant des taxes : 19,00\xa0€');

    logSpy.mockClear();
  });
});
