import { toFrenchFormat } from './utils/toFrenchFormat.js';
import { generateInvoice } from './generateInvoice.js';
import { Basket } from './types/types.js';

export function printInvoice(basket: Basket): void {
  const invoice = generateInvoice(basket);

  invoice.products.forEach((product) => {
    const [quantity, name, price, totalProductPrice] = product;
    console.log(
      `* ${quantity} ${name} à ${toFrenchFormat(price)}\xa0€ : ${toFrenchFormat(
        totalProductPrice
      )}\xa0€ TTC`
    );
  });

  console.log(
    `\nMontant des taxes : ${toFrenchFormat(invoice.taxesAmount)}\xa0€`
  );
  console.log(`Total : ${toFrenchFormat(invoice.basketPrice)}\xa0€\n\n`);
}
