import { describe, expect, it, vitest } from 'vitest';
import {
  basket3,
  applyRoundingStep,
  calculateProductTax,
  calculateProductPrice,
  calculateBasketTaxes,
  calculateBasketTotal,
  generateInvoice,
  printInvoice,
  formatFR,
} from '../src/main.ts';

const other1899 = basket3[1];
const otherImport2799 = basket3[0];
const essential975 = basket3[2];

describe('applyRoundingStep', () => {
  it('should NOT round to 5 cents if the ceiling is a multiple of 5 cents', () => {
    expect(applyRoundingStep(379.8)).toStrictEqual(380);
  });
  it('should round a price UP to the nearest 5 cents otherwise', () => {
    expect(applyRoundingStep(101)).toStrictEqual(105);
  });
});

describe('calculateProductTax', () => {
  it('should calculate the tax to pay for a local product', () => {
    expect(calculateProductTax(other1899)).toStrictEqual(380);
  });
  it('should calculate the tax to pay for an imported product', () => {
    expect(calculateProductTax(otherImport2799)).toStrictEqual(700);
  });
});

describe('calculateProductPrice', () => {
  it("should return a local essential product's initial price", () => {
    expect(calculateProductPrice(essential975)).toStrictEqual(975);
  });
  it("should calculate a product's price after taxes", () => {
    expect(calculateProductPrice(otherImport2799)).toStrictEqual(3499);
  });
});

describe('calculateBasketTaxes', () => {
  it("should return the total of all the basket's products taxes to pay", () => {
    expect(calculateBasketTaxes(basket3)).toStrictEqual(1900);
  });
});

describe('calculateBasketTotal', () => {
  it('should return the total price for the basket, including taxes', () => {
    expect(calculateBasketTotal(basket3)).toStrictEqual(14572);
  });
});

describe('generateInvoice', () => {
  it('should return an object with the desired output data', () => {
    expect(generateInvoice(basket3)).toEqual({
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

describe('formatFR', () => {
  it('should show an integer to two decimal places, with a comma', () => {
    expect(formatFR(1900)).toStrictEqual('19,00');
  });
});

describe('printInvoice', () => {
  it('should console.log a formatted invoice', () => {
    const logSpy = vitest.spyOn(global.console, 'log');
    printInvoice(basket3);
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
