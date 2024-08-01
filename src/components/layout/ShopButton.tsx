import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const ShopButton = () => {
  return (
    <Link href={"/shop"}>
      <Button className="bg-primary text-white p-3 rounded-full hover:p-4 duration-100 transition-all ease-in ">
        Shop
      </Button>
    </Link>
  );
};

export default ShopButton;
