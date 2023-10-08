import React, { useEffect, useState } from 'react';

import { getProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";

const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [ products, setProducts ] = useState([]);
  
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  
  return (
    <ul className="grid grid-cols-3 gap-5">
      {products?.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <span className="flex">
            <b className="flex-grow font-bold">
              <a href={`/products/${product.id}`}>{product.name}</a>
            </b>
            <i className="flex-end">{currency.format(product.price)}</i>
          </span>
          <span className="text-sm mt-4">{product.description}</span>
          {
            loggedIn &&
            (<div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to cart
              </button>
            </div>)
          }
        </li>
      ))}
    </ul>
  );
};

export default HomeContent;