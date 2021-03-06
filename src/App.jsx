import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Basket } from "./pages/Basket";
import { Home } from './pages/Home';

import { Navbar } from './components/Navbar'

import { AppContext} from './AppContext'

import './App.css';

export class App extends React.Component  {

  state = {
    basket      :  [],
    voucherRate: null,

    addToBasket :  (productCode) => {

      let basket = [...this.state.basket]
      let basketItem = basket.find((basketItem) => basketItem.productCode === productCode)
      if (basketItem === undefined) {
        basket.push({ productCode: productCode, quantity: 1 })
      } else {
       basketItem.quantity++;
      }
      this.setState({basket: basket})
    },

    clearBasket: () => {

      this.setState({ basket: [] });
    },

    setVoucherRate: (voucherRate) => {
      this.setState({ voucherRate: voucherRate })
    }
  }

  render(){
    return (
      <AppContext.Provider value={ this.state }>
        <Router>
          <header>
            <Navbar />
            <h1>Geek Shop !</h1>
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/basket">
              <Basket />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    )
  }
}


