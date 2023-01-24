import { calculateBasketTaxes } from './calculateBasketTaxes.js';
import { calculateBasketTotal } from './calculateBasketTotal.js';
import { calculateProductPrice } from './calculateProductPrice.js';
import { Basket, Invoice } from './types/types.js';

export function generateInvoice(basket: Basket): Invoice {
  const invoice: Invoice = {
    products: [],
    taxesAmount: 0,
    basketPrice: 0,
  };

  basket.forEach((product) => {
    const isSingle = product.quantity === 1;

    invoice.products.push([
      product.quantity,
      isSingle ? product.nameSingular : product.namePlural,
      product.priceInCents,
      calculateProductPrice(product) * product.quantity,
    ]);
  });

  invoice.taxesAmount = calculateBasketTaxes(basket);
  invoice.basketPrice = calculateBasketTotal(basket);
  return invoice;
}
