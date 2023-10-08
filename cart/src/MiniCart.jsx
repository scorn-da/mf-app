import React, { useEffect, useState } from 'react';
import { cart, clearCart } from "./cart";
import { currency } from "home/products";

const MiniCart = () => {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    })
  }, []);

  if (!items) return null;

  return (
    <>
       <span onClick={() => setShowCart(!showCart)} id="showcart">
         <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
         {items.length}
       </span>
    </>
  );
};

export default MiniCart;