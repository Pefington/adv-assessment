import { describe, it, expect, vitest } from 'vitest';
import { generateInvoice } from '../generateInvoice.ts';
import { printInvoiceLine } from '../printInvoiceLine.ts';
import { testBasket } from '../data/testBasket.ts';

describe('printInvoiceLine', () => {
  it('should console.log a formatted invoice', () => {
    const logSpy = vitest.spyOn(global.console, 'log');
    const invoice = generateInvoice(testBasket);
    const line = invoice.lines[0];
    printInvoiceLine(line);

    expect(logSpy).toHaveBeenCalledWith(
      '* 2 flacons de parfum importés à 27,99\xa0€ : 69,98\xa0€ TTC'
    );

    logSpy.mockClear();
  });
});
