"use client";

import data from "@/db/data";
import { Product } from "@/Types";
import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardFooter } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency, truncate } from "@/lib/formatters";

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      const newProducts = data.slice(0, 3);
      setProducts(newProducts);
    };

    fetchData();
  }, []);

  if (!products)
    return (
      <div className="w-full flex items-center justify-center"> Loading...</div>
    );

  return (
    <section>
      <SectionTitle title="NEW ARRIVALS" />
      <div className="flex items-center justify-center flex-col sm:flex-row gap-10">
        {products.map((product) => (
          <ProductCardShow product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

const ProductCardShow = ({ product }: { product: Product }) => {
  return (
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
            {truncate(product.title, 15)}
          </h3>
          <h3 className="text-gray-700 text-sm font-light hidden md:block">
            {product.title}
          </h3>
          <h1 className="text-gray-900 font-normal">
            {formatCurrency(parseFloat(product.newPrice))}
          </h1>
        </div>
      </CardFooter>
    </Card>
  );
};
