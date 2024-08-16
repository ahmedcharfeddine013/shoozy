import { cartItem } from "@/store/cartSlice";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "../../lib/formatters";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { IoIosClose } from "react-icons/io";

const CartItem = ({ item }: { item: cartItem }) => {
  
  const product = item;
  const totalProductPricing = item.quantity * parseFloat(product.newPrice);

  return (
    <TableRow>
      <TableCell>
        <Image src={product.img} alt={product.title} height={100} width={100} />
      </TableCell>
      <TableCell>{product.title}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>
        <Button>
          <IoIosClose size={24} />
        </Button>
      </TableCell>
      <TableCell className="text-lg font-bold">
        {formatCurrency(totalProductPricing)}
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
