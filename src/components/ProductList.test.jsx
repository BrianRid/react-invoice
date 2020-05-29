import React from 'react';

// Libraire de tests de composants React
import { render } from '@testing-library/react';

import { ProductList } from './ProductList';

const productTestDatabase = [
  {
    productCode: 'TEST',
    description: "Produit de test",
    unitPrice: 29.90,
  }
];

it('une image possède une balise alt', () => {

  const { getByRole } = render(<ProductList database={productTestDatabase}/>);

  const image = getByRole('img');
  const button = getByRole('button');

  expect(image).toHaveAttribute('alt', 'Produit de test')
  expect(image).toHaveAttribute('src', 'test.jpg');

  expect(button).toHaveAttribute('data-product', "TEST");


});
