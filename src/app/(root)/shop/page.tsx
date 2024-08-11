"use client";

import Products from "@/components/product/Products";
import data from "@/db/data";
import React, { useState } from "react";
import Sidebar from "../../../components/filter/Sidebar";
import { Product } from "@/Types";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData() {
    let filteredProducts = data;
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product: Product) => {
        return product.category === selectedCategory;
      });
    }
    return filteredProducts;
  }

  const products = filteredData();

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <div className="ml-[15%]">
        <Products products={products} />
      </div>
    </div>
  );
};

export default ShopPage;
