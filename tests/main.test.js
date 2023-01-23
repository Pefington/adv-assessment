import { describe, expect, it } from 'vitest';
import {
  calculateProductTax,
  calculateAfterTaxProductPrice,
  calculateBasketTaxes,
  calculateBasketTotal
} from '../src/main.ts';

const testProductLocal = {
  taxRate: 10,
  isImported: false,
  priceInCents: 80,
  quantity: 2
};

const testProductImported = {
  taxRate: 10,
  isImported: true,
  priceInCents: 80,
  quantity: 3
};

const testProductEssential = {
  taxRate: 0,
  isImported: false,
  priceInCents: 80,
  quantity: 1
};

const testBasket = [
  testProductLocal,
  testProductImported,
  testProductEssential,
];

describe('calculateProductTax', () => {
  it('should calculate the tax to pay for a local product', () => {
    expect(calculateProductTax(testProductLocal)).toStrictEqual(10);
  });
  it('should calculate the tax to pay for an imported product', () => {
    expect(calculateProductTax(testProductImported)).toStrictEqual(15);
  });
});

describe('calculateFinalProductPrice', () => {
  it("should return a local essential product's initial price", () => {
    expect(calculateAfterTaxProductPrice(testProductEssential)).toStrictEqual(
      80
    );
  });
  it("should calculate a product's price after taxes", () => {
    expect(calculateAfterTaxProductPrice(testProductImported)).toStrictEqual(
      95
    );
  });
});

describe('calculateBasketTaxes', () => {
  it("should return the total of all the basket's products taxes to pay", () => {
    expect(calculateBasketTaxes(testBasket)).toStrictEqual(65);
  });
});

describe('calculateBasketTotal', () => {
  it("should return the total price for the basket, including taxes", () => {
    expect(calculateBasketTotal(testBasket)).toStrictEqual(545);
  });
} );
