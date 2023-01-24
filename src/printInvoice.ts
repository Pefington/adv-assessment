import { toFrenchFormat } from './utils/toFrenchFormat.js';
import { generateInvoice } from './generateInvoice.js';
import { Basket } from './types/types.js';

export function printInvoice(basket: Basket): void {
  const invoice = generateInvoice(basket);

  invoice.lines.forEach((line) => {
    console.log(
      `* ${line.quantity} ${line.name} à ${toFrenchFormat(
        line.price
      )}\xa0€ : ${toFrenchFormat(line.total)}\xa0€ TTC`
    );
  });

  console.log(
    `\nMontant des taxes : ${toFrenchFormat(invoice.taxesAmount)}\xa0€`
  );
  console.log(`Total : ${toFrenchFormat(invoice.basketPrice)}\xa0€\n\n`);
}
