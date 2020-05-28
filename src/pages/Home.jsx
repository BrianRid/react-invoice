import React from 'react';
import { ProductList } from '../components/ProductList'
//import de la database produit depuis le fichier database.js
import { productDatabase } from '../database';

export function Home() {
  return(
    <div className="container">
    {/* On passe la productDatabase(variable) en props du composant ProductList pour pouvoir le récupérer dans le composant */}
      <ProductList database={ productDatabase } />
    </div>
  )
}
