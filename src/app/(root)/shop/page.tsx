"use client";

import Products from "@/components/product/Products";
import data from "@/db/data";
import React, { useState } from "react";
import Sidebar from "../../../components/filter/Sidebar";
import { Product } from "@/Types";
import MobileFilter from "../../../components/filter/MobileFilter";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleMobileChange = (value: string) => {
    setSelectedCategory(value);
  };

  function filteredData() {
    let filteredProducts = data;
    if (selectedCategory && selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter((product: Product) => {
        return product.category === selectedCategory;
      });
    }
    return filteredProducts;
  }

  const products = filteredData();

  return (
    <div className="relative">
      <Sidebar handleChange={handleChange} />
      <div className="sm:ml-[150px] space-y-6">
        <div className="flex items-center justify-center">
          <MobileFilter handleChange={handleMobileChange} />
        </div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default ShopPage;
