import React, { Component } from 'react';

import './ProductList.css'


import { formatMoney } from '../utilities';
import { AppContext } from '../AppContext'


export class ProductList extends Component {

  static contextType = AppContext;


  onClickAddToBasket = (event) => {
    this.context.addToBasket(event.target.dataset.product);
  }


  render() {

      const productCards = this.props.database.map((product, index) => {
        return <div className="card" key={index}>
          <img src={`${product.productCode.toLowerCase()}.jpg`} className="card-img-top" alt={`${product.description}`}></img>
          <div className="card-body">
            <h5 className="card-title">{product.description}</h5>
            <p className='card-text'>{formatMoney(product.unitPrice)}</p>
            <div className="d-flex">
              <p className="basket-add"> Ajouter l'article au panier :</p>
              <button className="btn btn-success" data-product={product.productCode} onClick={this.onClickAddToBasket}>+</button>
            </div>
          </div>
        </div>
      });

    return(
      <div className='cards-container'>
        {productCards}
      </div>
    )
  }
}
