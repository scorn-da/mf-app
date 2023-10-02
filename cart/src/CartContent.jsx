import React, { useEffect, useState } from 'react';
import Login from "./Login";
import { jwt } from "./cart";

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
    </div>
  );
};

export default CartContent;