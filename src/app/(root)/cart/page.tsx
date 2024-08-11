"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(({ product, quantity }) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
