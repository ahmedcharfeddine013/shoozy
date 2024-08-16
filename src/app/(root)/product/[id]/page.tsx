"use client";

import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import data from "@/db/data";
import { formatCurrency } from "@/lib/formatters";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/Types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";

const ProductPage = ({ params: { id } }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>();

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
    if (product) {
      dispatch(addToCart({ product, quantity }));
    }
  };

  useEffect(() => {
    const product = data.find((item) => item.id.toString() === id);
    setProduct(product);
  }, [id]);

  useEffect(() => {
    if (product) {
      const products = data
        .filter(
          (item) => item.category === product.category && item.id !== product.id
        )
        .slice(0, 3);
      setProducts(products);
      console.log(products);
    }
  }, [product]);

  if (!product || !products)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        Loading...
      </div>
    );

  return (
    <main className=" w-full p-10 space-y-20 min-h-[60vh]">
      <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-20">
        <div>
          <Image
            src={product.img}
            alt={product.title}
            height={300}
            width={300}
          />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-xl ">{product.title}</h1>
          <div className="flex w-full items-center justify-between">
            <p className="py-3 px-6 rounded-sm bg-gray-200 w-fit  text-sm">
              {product.company}
            </p>
            <p className=" font-bold  text-red-600 text-3xl">
              {formatCurrency(parseFloat(product.newPrice))}
            </p>
          </div>
          <div className="flex items-center gap-5 justify-between">
            <div className="flex items-center justify-center gap-3 ">
              <Button onClick={handleDecrease}>-</Button>
              <span>{quantity}</span>
              <Button onClick={handleIncrease}>+</Button>
            </div>
            <Button
              className="w-fit flex items-center justify-center gap-2"
              onClick={handleAddToCart}
            >
              Add To Cart
              <CiShoppingCart size={24} />
            </Button>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col">
        <h1 className="font-extrabold text-xl md:text-3xl">
          Recommended For You
        </h1>
        <div className="flex flex-row flex-wrap">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
