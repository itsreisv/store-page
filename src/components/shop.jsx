import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";
import { Cards } from "./cards";

export function Shop({cart, items}) {

  return (
    <div className="container">
      <Header cart={cart}/>
      <div className="card-container">
        {items.map((item, index) => (
          <Cards key={index} data={item} />
        ))}
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}