import { TAX_RATE } from './constants.js';
import { Basket, Product } from '../types/types.js';

export const otherImport2799: Product = {
  nameSingular: 'flacon de parfum importé',
  namePlural: 'flacons de parfum importés',
  taxRate: TAX_RATE.Other,
  isImported: true,
  priceInCents: 2799,
  quantity: 2,
};

export const other1899: Product = {
  nameSingular: 'flacon de parfum',
  namePlural: 'flacons de parfum',
  taxRate: TAX_RATE.Other,
  isImported: false,
  priceInCents: 1899,
  quantity: 1,
};

export const essential975: Product = {
  nameSingular: 'boîte de pilules contre la migraine',
  namePlural: 'boîtes de pilules contre la migraine',
  taxRate: TAX_RATE.FoodOrMedication,
  isImported: false,
  priceInCents: 975,
  quantity: 3,
};

export const testBasket: Basket = [
  otherImport2799,
  other1899,
  essential975,
  {
    nameSingular: 'boîte de chocolats importée',
    namePlural: 'boîtes de chocolats importées',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: true,
    priceInCents: 1125,
    quantity: 2,
  },
];
