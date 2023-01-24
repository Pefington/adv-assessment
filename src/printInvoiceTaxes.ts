import { toFrenchFormat } from './utils/toFrenchFormat.js';
import { Invoice } from './types/types.js';

export function printInvoiceTaxes(invoice: Invoice): void {
  const taxes = toFrenchFormat(invoice.taxesAmount);
  console.log(`\nMontant des taxes : ${taxes}\xa0€`);
}
