"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "@/components/cart/CartItem";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { selectTotalPrice } from "@/store/cartSlice";
import { formatCurrency } from "@/lib/formatters";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div>
      <div className="flex items-start justify-start flex-col m-10  border-2 p-4">
        <h2 className="text-3xl font-bold">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Remove</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </TableBody>
          </Table>
        )}
        <div className="flex items-center justify-between w-full mt-10">
          <div className=" text-xl space-x-2 flex flex-row items-center justify-center">
            <h2>Total Price:</h2>
            <span className="text-2xl font-bold">
              {formatCurrency(totalPrice)}
            </span>
          </div>
          <Button disabled={totalPrice === 0}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
