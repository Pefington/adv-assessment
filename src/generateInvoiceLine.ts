import { calculatePrice } from './calculatePrice.js';
import { InvoiceLine, Product } from './types/types.js';

export function generateInvoiceLine(product: Product): InvoiceLine {
  const isSingle = (product: Product): boolean => product.quantity === 1;
  return {
    quantity: product.quantity,
    name: isSingle(product) ? product.nameSingular : product.namePlural,
    price: product.priceInCents,
    total: calculatePrice(product) * product.quantity,
  };
}
