import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Basket } from "./pages/Basket";
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar'

import './App.css';

export function App() {


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </Router>
  )
}


