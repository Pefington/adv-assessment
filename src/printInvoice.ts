import { Basket } from './types/types.js';
import { generateInvoice } from './generateInvoice.js';
import { printInvoiceLine } from './printInvoiceLine.js';
import { printInvoiceTaxes } from './printInvoiceTaxes.js';
import { printInvoiceTotal } from './printInvoiceTotal.js';

export function printInvoice(basket: Basket): void {
  const invoice = generateInvoice(basket);

  invoice.lines.forEach((line) => {
    printInvoiceLine(line);
  });

  printInvoiceTaxes(invoice);
  printInvoiceTotal(invoice);
}
