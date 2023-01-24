import { TAX_RATE } from '../data/constants.js';

export type Basket = Product[];
export type PriceInCents = number;
export type TotalInCents = PriceInCents;
export type Quantity = number;
export type DisplayName = string;

export interface Product {
  nameSingular: DisplayName;
  namePlural: DisplayName;
  taxRate: TAX_RATE;
  isImported: boolean;
  priceInCents: PriceInCents;
  quantity: Quantity;
}

export interface Invoice {
  products: Array<[Quantity, DisplayName, PriceInCents, TotalInCents]>;
  taxesAmount: PriceInCents;
  basketPrice: PriceInCents;
}
