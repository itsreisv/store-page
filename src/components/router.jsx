import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { Shop } from "./shop";
import { useState, useEffect } from "react";
import { ItemPage } from "./item-page";
import { Cart } from "./cart";


const Router = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState('');

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      setItems([
        {image: response[3].image, title: response[3].title, price: response[3].price, description: response[3].description},
        {image: response[2].image, title: response[2].title, price: response[2].price, description: response[2].description},
        {image: response[5].image, title: response[5].title, price: response[5].price, description: response[5].description},
        {image: response[6].image, title: response[6].title, price: response[6].price, description: response[6].description},
        
      ])
      console.log(response)
    });
  }, [])

  useEffect(() => {
    getTotal();
  }, [getTotal])

  function createObj(name, price, image, number) {
    let newObj = {
      name: name,
      price: price,
      image: image,
    }
    if (number == 1) {
      setCart(cart => [...cart, newObj])
    } else if (number > 1) {
      for (let i = 0; i <= number - 1; i++) {
        setCart(cart => [...cart, newObj])
      }
    }
  }

  function getTotal() {
    const updatedItems = cart.map(cart => {
      return {
        ...cart,
        price: parseInt(cart.price.replace('$',''))
      }
    })
    let sum = updatedItems.reduce((acc, updatedItems) => acc + updatedItems.price, 0);
    setTotal(sum)
  }

  function updateCart() {
    const name = document.querySelector('.short-desc').textContent;
    const price = document.querySelector('.price').textContent;
    const image = document.querySelector('.item-image').src;
    const number = document.querySelector('#item-amount').value;
    createObj(name, price, image, number)
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home cart={cart}/>,
    },
    {
      path: "/shop",
      element: <Shop cart={cart} items={items}/>,
      children: [
        { path: "Mens Casual Slim Fit", element: <ItemPage data={items[0]} update={updateCart}/>},
        { path: "Mens Cotton Jacket", element: <ItemPage data={items[1]} update={updateCart}/>},
        { path: "Solid Gold Petite Micropave", element: <ItemPage data={items[2]} update={updateCart}/>},
        { path: 'White Gold Plated Princess', element: <ItemPage data={items[3]} update={updateCart}/>},
        { path: 'Cart', element: <Cart data={cart} total={total}/>}
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;