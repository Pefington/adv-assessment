const enum TAX_RATE {
  FoodOrMedication = 0,
  Book = 10,
  Other = 20,
}

// const IMPORT_ADDITIONAL_TAX_RATE = 5;
// const ROUNDING_STEP = 5;

interface Product {
  nameSingular: string;
  namePlural: string;
  taxRate: TAX_RATE;
  isImported: boolean;
  priceInEuroCents: number;
  quantity: number;
}

type Basket = Product[]

export const basket1: Basket = [
  {
    nameSingular: 'livre',
    namePlural: 'livres',
    taxRate: TAX_RATE.Book,
    isImported: false,
    priceInEuroCents: 1249,
    quantity: 2,
  },
  {
    nameSingular: 'CD musical',
    namePlural: 'CD musicaux',
    taxRate: TAX_RATE.Other,
    isImported: false,
    priceInEuroCents: 1499,
    quantity: 1,
  },
  {
    nameSingular: 'barre de chocolat',
    namePlural: 'barres de chocolat',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: false,
    priceInEuroCents: 85,
    quantity: 3,
  },
];

export const basket2: Basket = [
  {
    nameSingular: 'boîte de chocolats importée',
    namePlural: 'boîtes de chocolats importées',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: true,
    priceInEuroCents: 1000,
    quantity: 2,
  },
  {
    nameSingular: 'flacon de parfum importé',
    namePlural: 'flacons de parfum importés',
    taxRate: TAX_RATE.Other,
    isImported: true,
    priceInEuroCents: 4750,
    quantity: 3,
  },
];

export const basket3: Basket = [
  {
    nameSingular: 'flacon de parfum importé',
    namePlural: 'flacons de parfum importés',
    taxRate: TAX_RATE.Other,
    isImported: true,
    priceInEuroCents: 2799,
    quantity: 2,
  },
  {
    nameSingular: 'flacon de parfum',
    namePlural: 'flacons de parfum',
    taxRate: TAX_RATE.Other,
    isImported: false,
    priceInEuroCents: 1899,
    quantity: 1,
  },
  {
    nameSingular: 'boîte de pilules contre la migraine',
    namePlural: 'boîtes de pilules contre la migraine',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: false,
    priceInEuroCents: 975,
    quantity: 3,
  },
  {
    nameSingular: 'boîte de chocolats importée',
    namePlural: 'boîtes de chocolats importées',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: true,
    priceInEuroCents: 1125,
    quantity: 2,
  },
];

// function calculateTax( product: Product ) {

// }
console.log(basket1)
