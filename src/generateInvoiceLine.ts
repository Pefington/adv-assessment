import { calculateProductPrice } from './calculateProductPrice.js';
import { InvoiceLine, Product } from './types/types.js';

export function generateInvoiceLine(product: Product): InvoiceLine {
  const isSingle = product.quantity === 1;

  return {
    quantity: product.quantity,
    name: isSingle ? product.nameSingular : product.namePlural,
    price: product.priceInCents,
    total: calculateProductPrice(product) * product.quantity,
  };
}
