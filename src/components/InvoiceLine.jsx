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
          {/* Dans les gestionnaires d'event "onClick" on a recours à une fonction flechée car si on fait :
           - handleclick(props.index, 1) directement on appelerais la méthode immédiatement et on perdrait l'intérêt de l'écoute de l'event on click
           - Donc on a recours à une fonction fléchée pour pouvoir initialiser l'appel de handleclick via l'appel de la fonction fléchée uniquement au click  */}
          <button className="btn btn-outline-secondary btn-sm" onClick={ () => props.handleClick(props.index, 1) }> + </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={ () => props.handleClick(props.index, -1) }> - </button>
        </div>
      </td>
      <td className='text-right'>{formatMoney(props.unitPrice)}</td>
      <td className='text-right'>{formatMoney(props.quantity * props.unitPrice)}</td>
    </tr>
  )
}



