import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/home.css'

export function Header({cart}) {
  return (
    <div className="home">
      <div className="home-header">
        <div className="header-logo">
          <Link to="/"><h2>General Shop</h2></Link>
        </div>
        <div className="header-links">
          <Link to="/"><button type="button" className="nav-button">Home</button></Link>
          <Link to="/shop"><button type="button" className="nav-button">Shop</button></Link>
          <img src="../src/assets/cart-outline.svg" className="cart-icon"/>
          <div className="cart-contents">{cart.length}</div>
        </div>
      </div>

    </div>
  )
}