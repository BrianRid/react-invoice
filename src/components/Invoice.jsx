import React, { Component } from 'react';

import { InvoiceLine} from "./InvoiceLine"

import { formatMoney } from '../utilities'
import { findProduct } from '../database'

export default class Invoice extends Component {

  state = {
    items :[],

    totalAmount : 0,
    vatAmount   : 0,
    grandTotal  : 0
  };


  compute(){
    // Calculs du Tfooter
    let totalAmount = this.state.items.reduce((accumulator, item) => {
      return accumulator + (item.quantity * item.unitPrice)
    }, 0);

    this.setState({ vatAmount: totalAmount * 0.2, totalAmount: totalAmount, grandTotal: (totalAmount * 1.20) })
  }

  // méthode de gestion du click
  editQuantity = (index, newValue) => {

    //création d'une variable intermédiaire (clonage) du state pour travailler sur la denrière version du state
    let items = [...this.state.items];
    //identification de la ligne items et modification de la quantité par newValue --> initié à 1 dans InvoiceLine (on augmente les quantités de 1)

    if (items[index].quantity + newValue >= 1) {
      items[index].quantity += newValue;
      // Mise à jour du state pour déclencher le render (Rappel: Asynchrone)
      this.setState({ items: items })
      // Mise à jour des montants avec les quantités (On rappel compute également basé sur le this.state)
      this.compute();
    }
  }

  componentDidMount() {
    // Identifier les items qui ont été mis dans mon basket
    const invoiceLines = this.props.basket.map(basketItem => {
      // Création pour chaque basketItem d'un objet contenant les infos de la DB
      let product = findProduct(basketItem.productCode)
      // Si false error
      if (product === false) {
        throw new Error (`Il n'y a aucun produit avec le code ${basketItem.productCode}`)
      }
      // Spread opérator pour pouvoir reconstruire un objet avec l'ensemble des infos (code, descr, unit price, quantity)
      return {...product, quantity: basketItem.quantity};
    })
    //mise à jour du state avec invoiceLines qui est un array issu du map d'avant donc d'objet toutes les infos
    this.setState({ items: invoiceLines });
    //calcul des sommes
    this.compute()
  }

  render() {

    // Création du composant Invoice

    const invoiceLines = this.state.items.map((item, index) => {
      return (
        <InvoiceLine
          key={ index }
          index={ index }
          productCode={ item.productCode }
          description={ item.description }
          unitPrice={ item.unitPrice }
          quantity={ item.quantity }
          handleClick={ this.editQuantity }
        />
      )
    });

    return(
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#Produit</th>
            <th scope="col">Description</th>
            <th colSpan='2' scope="col">Quantité</th>
            <th scope="col">Prix Unitaire</th>
            <th scope="col">Prix Total</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan="5" className='text-right'>Montant Total HT:</td>
            <td className='text-right'>{formatMoney(this.state.totalAmount)}</td>
          </tr>
          <tr>
            <td colSpan="5" className='text-right'>TVA (20%):</td>
            <td className='text-right'>{formatMoney(this.state.vatAmount)}</td>
          </tr>
          <tr>
            <td colSpan="5" className='text-right'>Montant total TTC:</td>
            <td className='text-right'>{formatMoney(this.state.grandTotal)}</td>
          </tr>
        </tfoot>
        <tbody>
          { invoiceLines }
        </tbody>
      </table>
    )
  }
}
