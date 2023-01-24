import { toFrenchFormat } from './utils/toFrenchFormat.js';
import { Invoice } from './types/types.js';

export function printInvoiceTotal(invoice: Invoice): void {
  const total = toFrenchFormat(invoice.basketPrice);
  console.log(`Total : ${total}\xa0€\n\n`);
}
