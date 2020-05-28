import React from 'react';

import Invoice from "../components/Invoice"
import { Discount } from '../components/Discount';

import { vouchersDatabase } from '../database'

export function Basket() {

  // Init un basket vide
  let basket = [];

// On doit ici updater le array basket avec les objets qui sont créés --> Attention le .push marche quand on ajoute un item de façon unique (un seul DBZ un seul OPM par ex), sinon il faut faire un update
  basket.push({ productCode: 'DBZ', quantity: 1 })
  basket.push({ productCode: 'STW', quantity: 1 })
  basket.push({ productCode: 'SKY', quantity: 1 })
  basket.push({ productCode: 'OPM', quantity: 1 })
  basket.push({ productCode: 'FMA', quantity: 1 })


  return (
    <div className="container">
      <Invoice basket={basket} />
      <Discount vouchers={vouchersDatabase} />
    </div>
  )
}
