import { toFrenchFormat } from './utils/toFrenchFormat.js';
import { InvoiceLine } from './types/types.js';

export function printInvoiceLine(line: InvoiceLine): void {
  const price = toFrenchFormat(line.price);
  const total = toFrenchFormat(line.total);
  console.log(
    `* ${line.quantity} ${line.name} à ${price}\xa0€ : ${total}\xa0€ TTC`
  );
}
