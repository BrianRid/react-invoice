import React from 'react';

// Libraire de tests de composants React
import { render, getByTestId } from '@testing-library/react';

import { App } from './App';

it("affichage commun de l'application", () => {
  const { getByText } = render(<App />);

  expect(getByText('Geek Shop !')).toBeInTheDocument();
});


it("verifie initialisation du panier à 0", () => {
  const { getByTestId } = render (<App />);

  expect(getByTestId('basket')).toHaveTextContent('Panier: 0');
});
