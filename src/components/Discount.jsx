import React, { Component } from "react";
import "./Discount.css"

import { findVoucher} from '../database';
import { AppContext } from '../AppContext'

export class Discount extends Component {

  static contextType = AppContext;

  state = {
    voucherCode: '',
    message: '',
    watcherDisabled: true

  }

  onClickApplyVoucher = () => {

    const voucherRate = findVoucher(this.state.voucherCode);

    if(voucherRate !== false) {
      this.context.setVoucherRate(voucherRate)
    }
  }

// On récupère en argument value qui vaut ce qui est tapé par le user dans l'input
  onChangeVoucher = (event) => {
    const voucherCode = event.target.value.toUpperCase();

    const voucherRate = findVoucher(voucherCode);

    if(voucherRate !== false) {
      this.setState({
        message : `Code valide : ${voucherRate * 100} % de réduction`,
        watcherDisabled: false
      })
    }else {
      this.setState({
        message : "Code non valide",
        watcherDisabled: true
      })
    }
    this.setState({ voucherCode: voucherCode})
  }


  render() {
    return(
        <div className='d-flex'>
          <div className="col-3">
            <input type="text" className="form-control" placeholder="Code de Réduction" value={this.state.voucherCode} onChange={this.onChangeVoucher} />
            <label htmlFor="LabelID">{this.state.message}</label>
          </div>
          <button className="btn btn-info" disabled={this.state.watcherDisabled} onClick={ this.onClickApplyVoucher }> Appliquer </button>
        </div>
    )
  }

}
