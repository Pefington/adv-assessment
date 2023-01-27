import { formatToFrench } from './utils/formatToFrench.js';
import { Invoice } from './types/types.js';

export function printInvoiceTotal(invoice: Invoice): void {
  const total = formatToFrench(invoice.total);
  console.log(`Total : ${total}\xa0€\n\n`);
}
