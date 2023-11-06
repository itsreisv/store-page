import { useState } from "react"
import { Link } from "react-router-dom"


export function Cards({data}) {
  return (
    <Link to={data.title}><div className="cards">
      <div className="picture"><img src={data.image} className="item-icon" /></div>
      <div className="item-info">
        <p className="item-title">{data.title}</p>
        <p className="item-price">${data.price}</p>
      </div>
    </div>
    </Link>
  )
}