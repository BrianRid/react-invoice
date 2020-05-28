import React from 'react';

import './ProductCard.css'

export function Card(props) {
  return (
    <div className="card">
      <img src={`${props.productCode.toLowerCase()}.jpg`} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.description}</h5>
        <p className='card-text'>{props.unitPrice}</p>
        <button className="btn btn-outline-secondary btn-sm"> + </button>
      </div>
    </div>
  )
}
