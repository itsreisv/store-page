import { Link, useActionData } from "react-router-dom"
import { CartItems } from "./cart-items"
import { useState } from "react"

export function Cart({data, total}) {
  return (
    <div className="cart-backdrop">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Cart({data.length} items)</h2>
          <Link to='/shop'><button type="button">X</button></Link>
        </div>
        <div className="cart-items">
        {data.map((item, index) => (
          <CartItems key={index} data={item} />
        ))}
        </div>
        <div className="cart-footer">
          <h2 className="total">Total: $ {total}</h2>
          <button type="button" className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  )
}