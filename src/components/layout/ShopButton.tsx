import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const ShopButton = () => {
  return (
    <Link href={"/shop"}>
      <Button>Shop</Button>
    </Link>
  );
};

export default ShopButton;
