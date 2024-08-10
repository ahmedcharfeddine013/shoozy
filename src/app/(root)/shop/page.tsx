import Products from "@/components/product/Products";
import data from "@/db/data";
import React from "react";

const ShopPage = () => {
  return (
    <div>
      <Products products={data} />
    </div>
  );
};

export default ShopPage;
