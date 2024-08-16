"use client";

import { Product } from "@/Types";
import React, { useState } from "react";
import { Card, CardFooter } from "../ui/card";
import Image from "next/image";
import { formatCurrency, truncate } from "@/lib/formatters";
import Link from "next/link";
import { Button } from "../ui/button";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <>
      <Card className="w-fit outline-none border-none grid grid-rows-5 gap-6 h-[300px] group overflow-hidden p-4">
        <Link
          href={`/product/${product.id}`}
          className="flex items-center justify-center md:h-full md:w-[250px] row-span-3 overflow-hidden"
        >
          <Image
            src={product.img}
            alt={product.title}
            width={120}
            height={200}
            className="group-hover:scale-105 duration-100 transition-all ease-in"
          />
        </Link>
        <CardFooter className="h-fit flex items-center justify-center flex-col gap-3 w-full">
          <div className="flex md:items-center items-start justify-between w-full md:flex-row flex-col">
            <h3 className="text-gray-700 text-sm font-light md:hidden">
              {truncate(product.title, 10)}
            </h3>
            <h3 className="text-gray-700 text-sm font-light hidden md:block">
              {product.title}
            </h3>
            <h1 className="text-gray-900 font-normal">
              {formatCurrency(parseFloat(product.newPrice))}
            </h1>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center justify-center gap-1 ">
              <Button onClick={handleDecrease}>-</Button>
              <span>{quantity}</span>
              <Button onClick={handleIncrease}>+</Button>
            </div>
            <Button
              className="w-fit flex items-center justify-center gap-2"
              onClick={handleAddToCart}
            >
              <CiShoppingCart size={24} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
