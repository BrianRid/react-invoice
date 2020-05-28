export const productDatabase = [
  {
    productCode: 'DBZ',
    description: "DBZ Kai - Sage de Boo",
    unitPrice: 29.90,
  },
  {
    productCode: 'STW',
    description: "Starwars - L'empire contre-attaque",
    unitPrice: 39.90,
  },
  {
    productCode: 'SKY',
    description: "Skyfall",
    unitPrice: 22.50,
  },
  {
    productCode: 'OPM',
    description: "One Punch Man",
    unitPrice: 10.90,
  },
  {
     productCode: 'FMA',
     description: "Full Metal Alchemist Brotherhood - Partie 1",
     unitPrice: 15.90,
   }
];

export const vouchersDatabase = [
      { PASS20: 0.20 },
      { PASS30: 0.30 },
      { PASS40: 0.40 }
    ];

export function findProduct(productCode) {
  return productDatabase.find((product) => product.productCode === productCode) ?? false;
}
