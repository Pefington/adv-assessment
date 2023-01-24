import { formatFR } from './formatFR.js';
import { generateInvoice } from './generateInvoice.js';
import { Basket } from './types.js';

export function printInvoice(basket: Basket): void {
  const invoice = generateInvoice(basket);

  invoice.products.forEach((product) => {
    const [quantity, name, price, totalProductPrice] = product;
    console.log(
      `* ${quantity} ${name} à ${formatFR(price)}\xa0€ : ${formatFR(totalProductPrice)}\xa0€ TTC`
    );
  });

  console.log(`\nMontant des taxes : ${formatFR(invoice.taxesAmount)}\xa0€`);
  console.log(`Total : ${formatFR(invoice.basketPrice)}\xa0€\n\n`);
}
