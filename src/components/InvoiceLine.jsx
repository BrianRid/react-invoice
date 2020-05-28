import React from 'react'

import { formatMoney } from '../utilities'

export function InvoiceLine(props) {
  return(
    <tr>
      <td>{ props.productCode }</td>
      <td>{ props.description }</td>
      <td>{ props.quantity }</td>
      <td>
        <div className="btn-group">
          <button className="btn btn-outline-secondary btn-sm" onClick={ () => props.handleClick(props.index, 1) }> + </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={ () => props.handleClick(props.index, -1) }> - </button>
        </div>
      </td>
      <td className='text-right'>{formatMoney(props.unitPrice)}</td>
      <td className='text-right'>{formatMoney(props.quantity * props.unitPrice)}</td>
    </tr>
  )
}



