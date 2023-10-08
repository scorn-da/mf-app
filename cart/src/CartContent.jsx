import React, { useEffect, useState } from 'react';
import Login from "./Login";
import { jwt } from "./cart";
import MiniCart from "./MiniCart";

const CartContent = () => {
  const [ token, setToken ] = useState("");

  useEffect(() => {
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return (
    <div>
      <div></div>
      JWT: {token}
      <Login />
      <MiniCart/>
    </div>
  );
};

export default CartContent;