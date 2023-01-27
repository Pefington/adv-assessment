import { formatToFrench } from './utils/formatToFrench.js';
import { InvoiceLine } from './types/types.js';

export function printInvoiceLine(line: InvoiceLine): void {
  const price = formatToFrench(line.price);
  const total = formatToFrench(line.total);
  console.log(
    `* ${line.quantity} ${line.name} à ${price}\xa0€ : ${total}\xa0€ TTC`
  );
}
