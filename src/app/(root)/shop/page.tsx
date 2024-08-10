import Products from "@/components/product/Products";
import data from "@/db/data";
import React from "react";
import Sidebar from "../../../components/filter/Sidebar";

const ShopPage = () => {
  return (
    <div>
      <Sidebar handleChange={() => {}} />
      <Products products={data} />
    </div>
  );
};

export default ShopPage;
