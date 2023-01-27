import { calculateProductPrice } from './calculateProductPrice.js';
import { InvoiceLine, Product } from './types/types.js';

export function generateInvoiceLine(product: Product): InvoiceLine {
  const isSingleProduct = product.quantity === 1;

  return {
    quantity: product.quantity,
    name: isSingleProduct ? product.nameSingular : product.namePlural,
    price: product.priceInCents,
    total: calculateProductPrice(product) * product.quantity,
  };
}
