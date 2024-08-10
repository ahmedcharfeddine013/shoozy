import { Product } from "@/Types";
import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-fit outline-none border-none">
      <div>
        <Image src={product.img} alt={product.title} height={300} width={300} />
      </div>
      <CardFooter>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>
          {product.newPrice}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
