import React, { useEffect, useState } from 'react';

import { getProducts, currency } from "./products";

const HomeContent = () => {
  const [products, setProducts] = useState([]);

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
        </li>
      ))}
    </ul>
  );
};

export default HomeContent;