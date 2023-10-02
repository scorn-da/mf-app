import React, { useState } from 'react';
import Login from "./Login";

const CartContent = () => {
  const [ token, setToken ] = useState("");

  return (
    <div>
      <div></div>
      JWT: {token}
      <Login />
    </div>
  );
};

export default CartContent;