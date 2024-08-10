import { Product } from "@/Types";
import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";
import { formatCurrency, truncate } from "@/lib/formatters";
import Link from "next/link";
import { Button } from "../ui/button";
import { CiShoppingCart } from "react-icons/ci";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/shop/product/${product.id}`}>
      <Card className="w-fit outline-none border-none grid grid-rows-5 gap-6 h-[300px] group overflow-hidden p-4">
        <div className="flex items-center justify-center md:h-full md:w-[300px] row-span-3 overflow-hidden">
          <Image
            src={product.img}
            alt={product.title}
            width={150}
            height={200}
            className="group-hover:scale-105 duration-100 transition-all ease-in"
          />
        </div>
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
          <Button className="w-full flex items-center justify-center gap-2">
            <p className="hidden md:block">Add To Cart</p>
            <CiShoppingCart size={24} />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
