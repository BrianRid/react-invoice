import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { AppContext } from '../AppContext'

export function Navbar() {

  const context = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/basket" className="nav-link">Panier</Link>
          </li>
        </ul>
      </div>
      <span className="navbar-text" data-testid="basket">Panier: { context.basket.length }</span>
    </nav>
  )
}
