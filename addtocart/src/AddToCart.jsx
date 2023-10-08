import React from 'react';
import { createEffect, createSignal, Show } from "solid-js";

const AddToCart = ({ id }) => {
  const [ loggedIn, setLoggedIn ] = createSignal(false);
  
  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt);
    })
  })
  
  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        className="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
      >
        Add To Cart
      </button>
    </Show>
  );
};

export default AddToCart;