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
        </li>
      ))}
    </ul>
  );
};

export default HomeContent;