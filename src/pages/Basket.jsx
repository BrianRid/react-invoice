import React from 'react';

import Invoice from "../components/Invoice"

import { Discount } from '../components/Discount';
import { vouchersDatabase } from '../database'

export function Basket() {

    return (
      <div className="container">
        <Invoice />
        {/* On donne en props la database de vouchers pour permettre l'identification des bons coupons */}
        <Discount vouchers={vouchersDatabase}
        />
      </div>
    )
}
