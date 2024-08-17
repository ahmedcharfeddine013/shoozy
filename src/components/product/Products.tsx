import { Product } from "@/Types";
import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-6 gap-2 w-full">
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
};

export default Products;
