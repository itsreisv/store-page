import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import '../styles/home.css'

export function Home({cart}) {
  return (
    <div className="container">
    <Header cart={cart} />
    <div className="home-info">
      <h3>You want to buy it? We sell it!</h3>
      <p className="general-info">The General Shop is your one-stop shop for everything
        you need, we sell a variety of products at unbeatable
        prices! We offer the best service and quality in the world,
        as well as a guaranteed satisfactory shopping experience! </p>
      <Link to="/shop"><button type="button" className="new-shop-button">Shop now</button></Link>
    </div>
    <Footer />
    </div>
  )
}