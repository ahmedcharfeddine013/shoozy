import { Product } from "@/Types";
import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatters";
import Link from "next/link";
import { Button } from "../ui/button";
import { CiShoppingCart } from "react-icons/ci";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/shop/product/${product.id}`}>
      <Card className="w-fit outline-none border-none flex items-center justify-center flex-col gap-6 h-[300px] group">
        <div className="flex items-center justify-center h-full">
          <Image
            src={product.img}
            alt={product.title}
            height={300}
            width={300}
            className="group-hover:scale-110 duration-100 transition-all ease-in"
          />
        </div>
        <CardFooter className="h-fit flex items-center justify-center flex-col gap-3 w-full">
          <div className="flex items-center justify-between w-full  ">
            <h3 className="text-gray-700 text-sm font-light">
              {product.title}
            </h3>
            <h1 className="text-gray-900 font-normal">
              {formatCurrency(parseFloat(product.newPrice))}
            </h1>
          </div>
          <Button className="w-full flex items-center justify-center gap-2">
            Add To Cart <CiShoppingCart size={24} />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
