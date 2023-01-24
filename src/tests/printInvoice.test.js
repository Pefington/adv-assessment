import { describe, it, expect, vitest } from 'vitest';
import { printInvoice } from '../printInvoice.ts';
import { basket } from '../data/testBaskets.ts';

describe('printInvoice', () => {
  it('should console.log a formatted invoice', () => {
    const logSpy = vitest.spyOn(global.console, 'log');
    printInvoice(basket);
    expect(logSpy).toHaveBeenCalledWith(
      '* 2 flacons de parfum importés à 27,99\xa0€ : 69,98\xa0€ TTC'
    );
    expect(logSpy).toHaveBeenCalledWith(
      '* 1 flacon de parfum à 18,99\xa0€ : 22,79\xa0€ TTC'
    );
    expect(logSpy).toHaveBeenCalledWith(
      '* 3 boîtes de pilules contre la migraine à 9,75\xa0€ : 29,25\xa0€ TTC'
    );
    expect(logSpy).toHaveBeenCalledWith(
      '* 2 boîtes de chocolats importées à 11,25\xa0€ : 23,70\xa0€ TTC'
    );
    expect(logSpy).toHaveBeenCalledWith('\nMontant des taxes : 19,00\xa0€');
    expect(logSpy).toHaveBeenCalledWith('Total : 145,72\xa0€\n\n');

    logSpy.mockClear();
  });
});
