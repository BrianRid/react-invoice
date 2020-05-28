import React, { Component } from 'react';
import {Card} from "./ProductCard"

import './ProductList.css'


import { formatMoney } from '../utilities';

export class ProductList extends Component {

  state = {
    productCards: []
  };

  componentDidMount() {
    let productCards = this.props.database.map((product,index)=> {
      return <Card
                key={ index }
                productCode = { product.productCode }
                description= { product.description }
                unitPrice= { formatMoney(product.unitPrice) }
                />
    })

    this.setState({ productCards: productCards })
  }


  render() {
    return(
      <div className='cards-container'>
        {this.state.productCards}
      </div>
    )
  }
}
