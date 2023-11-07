import { useState } from "react";
import { Link } from "react-router-dom";
import { useActionData } from "react-router-dom";


export function ItemPage({data, update}) {
const [amount, setAmount] = useState(1);

  function eventHandlerAdd() {
    if (amount >= 10) {
      setAmount(10)
    } else {
      setAmount(amount + 1)
    }
  }
  function eventHandlerSubtract() {
    if (amount == 1) {
      setAmount(1)
    } else {
      setAmount(amount - 1)
    }
  }
  return (
    <div className="item-page">
      <div className="item-box">
        <div className="top-section">
      <div className="page-image"><img src={data.image} className="item-image" /></div>
      <div className="page-input">
        <h2 className="short-desc">{data.title}</h2>
        <p className="price">${data.price}</p>
        <div className="input-container">
        <button type="button" className="value-button" onClick={eventHandlerSubtract}>-</button>
        <input type="text" id="item-amount" value={amount} />
        <button type="button" className="value-button" onClick={eventHandlerAdd}>+</button>
        </div>
        <button type="button" className="cart-button" onClick={update}>Add to Cart</button>
      </div>
      <Link to='/shop'><button type="button" className="exit">X</button></Link>
      </div>
      <div className="bottom-section">
      <div className="page-description">
        <h2 className="short-desc">Description</h2>
        <p>{data.description}</p>
      </div>
      </div>
      </div>
    </div>
  )
}