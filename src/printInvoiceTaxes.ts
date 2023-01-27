import { formatToFrench } from './utils/formatToFrench.js';
import { Invoice } from './types/types.js';

export function printInvoiceTaxes(invoice: Invoice): void {
  const taxes = formatToFrench(invoice.taxes);
  console.log(`\nMontant des taxes : ${taxes}\xa0€`);
}
