import { calculateTax } from './calculateTax.js';
import { calculatePrice } from './calculatePrice.js';
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

  invoice.taxes = calculateTax(basket);
  invoice.total = calculatePrice(basket);
  return invoice;
}
