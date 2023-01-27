import { calculateBasketTaxes } from './calculateBasketTaxes.js';
import { calculateBasketTotal } from './calculateBasketTotal.js';
import { generateInvoiceLine } from './generateInvoiceLine.js';
import { Basket, Invoice } from './types/types.js';

export function generateInvoice(basket: Basket): Invoice {
  const invoice: Invoice = {
    lines: [],
    taxesAmount: 0,
    basketPrice: 0,
  };

  basket.forEach((product) => {
    const invoiceLine = generateInvoiceLine(product);
    invoice.lines.push(invoiceLine);
  });

  invoice.taxesAmount = calculateBasketTaxes(basket);
  invoice.basketPrice = calculateBasketTotal(basket);
  return invoice;
}
