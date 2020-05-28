import React, { Component } from "react";


export class Discount extends Component {

  state = {
    value: '',
    message: ''
  }

 handleChange = (event) => {
   const value = event.target.value;
   this.setState({ value: event.target.value })
   this.checkVoucher(value)
  }

  checkVoucher = (value) => {

    for (const voucher of this.props.vouchers) {
      if (value in voucher) {
        this.setState({ message: 'Votre coupon est valable' })
        return true;
      }
    }
    this.setState({ message: "Votre coupon n'est pas valable" })
    return false;
  }


  render() {
    return(
        <div>
          <input type="text" className="form-control" placeholder="Code de Réduction" value={this.state.value} onChange={this.handleChange}/>
          <label htmlFor="LabelID">{this.state.message}</label>
        </div>
    )
  }

}
