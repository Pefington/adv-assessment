import { calculateBasketTaxes } from './calculateBasketTaxes.js';
import { calculateBasketTotal } from './calculateBasketTotal.js';
import { generateInvoiceLine } from './generateInvoiceLine.js';
import { Basket, Invoice } from './types/types.js';

export function generateInvoice(basket: Basket): Invoice {
  const invoice: Invoice = {
    lines: [],
    taxes: 0,
    total: 0,
  };

  basket.forEach((product) => {
    const invoiceLine = generateInvoiceLine(product);
    invoice.lines.push(invoiceLine);
  });

  invoice.taxes = calculateBasketTaxes(basket);
  invoice.total = calculateBasketTotal(basket);
  return invoice;
}
