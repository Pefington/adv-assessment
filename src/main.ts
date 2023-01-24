const enum TAX_RATE {
  FoodOrMedication = 0,
  Book = 10,
  Other = 20,
}

const IMPORT_TAX_RATE = 5;
const ROUNDING_STEP = 5;

type Basket = Product[];
type PriceInCents = number;
type TotalInCents = PriceInCents;
type Quantity = number;
type DisplayName = string;

interface Product {
  nameSingular: DisplayName;
  namePlural: DisplayName;
  taxRate: TAX_RATE;
  isImported: boolean;
  priceInCents: PriceInCents;
  quantity: Quantity;
}

interface Invoice {
  products: Array<[Quantity, DisplayName, PriceInCents, TotalInCents]>;
  taxesAmount: PriceInCents;
  basketPrice: PriceInCents;
}

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

export function formatFR(price: PriceInCents): string {
  return (price / 100).toFixed(2).replace('.', ',');
}

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

export function calculateBasketTotal(basket: Basket): PriceInCents {
  let basketTotal = 0;
  for (const product of basket) {
    const productPrice = calculateProductPrice(product);
    basketTotal += productPrice * product.quantity;
  }
  return basketTotal;
}

export function calculateBasketTaxes(basket: Basket): PriceInCents {
  let basketTaxes = 0;
  for (const product of basket) {
    const productTaxes = calculateProductTax(product);
    basketTaxes += productTaxes * product.quantity;
  }
  return basketTaxes;
}

export function calculateProductPrice(product: Product): PriceInCents {
  const productTaxesInCents = calculateProductTax(product);
  return product.priceInCents + productTaxesInCents;
}

export function calculateProductTax(product: Product): PriceInCents {
  const tax = applyRoundingStep((product.priceInCents * product.taxRate) / 100);
  if (!product.isImported) return tax;

  const importTax = applyRoundingStep(
    (product.priceInCents * IMPORT_TAX_RATE) / 100
  );
  return tax + importTax;
}

export function applyRoundingStep(tax: number): PriceInCents {
  const taxInCents = Math.ceil(tax);
  const roundingRemainder = taxInCents % ROUNDING_STEP;
  if (roundingRemainder === 0) return taxInCents;

  const roundingCorrection: number = ROUNDING_STEP - roundingRemainder;
  return taxInCents + roundingCorrection;
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

printInvoice(basket1);
printInvoice(basket2);
printInvoice(basket3);
