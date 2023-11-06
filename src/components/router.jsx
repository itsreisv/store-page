import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { Shop } from "./shop";
import { useState, useEffect } from "react";
import { ItemPage } from "./item-page";


const Router = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

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
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home cart={cart}/>,
    },
    {
      path: "/shop",
      element: <Shop cart={cart} items={items}/>,
      children: [
        { path: "Mens Casual Slim Fit", element: <ItemPage data={items[0]}/>},
        { path: "Mens Cotton Jacket", element: <ItemPage data={items[1]}/>},
        { path: "Solid Gold Petite Micropave", element: <ItemPage data={items[2]}/>},
        { path: 'White Gold Plated Princess', element: <ItemPage data={items[3]}/>}
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;