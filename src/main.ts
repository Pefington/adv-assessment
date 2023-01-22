const enum TAX_RATE {
  FoodOrMedication = 0,
  Book = 10,
  Other = 20,
}

const ADDITIONAL_IMPORT_TAX_RATE = 5;
const ROUNDING_STEP = 5;

type Basket = Product[];
type PriceInCents = number;

interface Product {
  nameSingular: string;
  namePlural: string;
  taxRate: TAX_RATE;
  isImported: boolean;
  priceInCents: PriceInCents;
  quantity: number;
}

// interface Invoice {
//   basket: Basket;
//   totalTaxes: PriceInCents;
//   totalPrice: PriceInCents;
// }

export function calculateAfterTaxProductPrice(product: Product): PriceInCents {
  const productTaxesInCents = calculateProductTax(product);
  return product.priceInCents + productTaxesInCents;
}

export function calculateProductTax(product: Product): PriceInCents {
  let taxRate = product.taxRate;
  if (product.isImported) taxRate += ADDITIONAL_IMPORT_TAX_RATE;

  const totalTaxInCents = (product.priceInCents * taxRate) / 100;
  const roundingRemainder = totalTaxInCents % ROUNDING_STEP;
  if (roundingRemainder === 0) return totalTaxInCents;

  const roundingCorrection = ROUNDING_STEP - roundingRemainder;
  return totalTaxInCents + roundingCorrection;
}

export const basket1: Basket = [
  {
    nameSingular: 'livre',
    namePlural: 'livres',
    taxRate: TAX_RATE.Book,
    isImported: false,
    priceInCents: 1249,
    quantity: 2,
  },
  {
    nameSingular: 'CD musical',
    namePlural: 'CD musicaux',
    taxRate: TAX_RATE.Other,
    isImported: false,
    priceInCents: 1499,
    quantity: 1,
  },
  {
    nameSingular: 'barre de chocolat',
    namePlural: 'barres de chocolat',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: false,
    priceInCents: 85,
    quantity: 3,
  },
];

export const basket2: Basket = [
  {
    nameSingular: 'boîte de chocolats importée',
    namePlural: 'boîtes de chocolats importées',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: true,
    priceInCents: 1000,
    quantity: 2,
  },
  {
    nameSingular: 'flacon de parfum importé',
    namePlural: 'flacons de parfum importés',
    taxRate: TAX_RATE.Other,
    isImported: true,
    priceInCents: 4750,
    quantity: 3,
  },
];

export const basket3: Basket = [
  {
    nameSingular: 'flacon de parfum importé',
    namePlural: 'flacons de parfum importés',
    taxRate: TAX_RATE.Other,
    isImported: true,
    priceInCents: 2799,
    quantity: 2,
  },
  {
    nameSingular: 'flacon de parfum',
    namePlural: 'flacons de parfum',
    taxRate: TAX_RATE.Other,
    isImported: false,
    priceInCents: 1899,
    quantity: 1,
  },
  {
    nameSingular: 'boîte de pilules contre la migraine',
    namePlural: 'boîtes de pilules contre la migraine',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: false,
    priceInCents: 975,
    quantity: 3,
  },
  {
    nameSingular: 'boîte de chocolats importée',
    namePlural: 'boîtes de chocolats importées',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: true,
    priceInCents: 1125,
    quantity: 2,
  },
];
