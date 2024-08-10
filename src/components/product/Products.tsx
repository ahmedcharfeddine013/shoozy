import { Product } from "@/Types";
import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center md:gap-6 gap-2">
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
};

export default Products;
