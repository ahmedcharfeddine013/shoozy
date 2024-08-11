import { cartItem } from "@/store/carteSlice";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "../../lib/formatters";

const CartItem = ({ item }: { item: cartItem }) => {
  const product = item.product;

  const totalProductPricing = item.quantity * parseFloat(product.newPrice);

  return (
    <Card>
      <div className="flex flex-row items-start justify-start gap-4">
        <div>
          <Image
            src={product.img}
            alt={product.title}
            height={100}
            width={100}
          />
        </div>
        <div>
          <h2 className="text-lg font-light">{product.title}</h2>
          <div>
            <h4 className="">Quantity: </h4>
            <h1 className="text-lg font-bold">{item.quantity}</h1>
          </div>
          <div>
            <h4>Total product price: </h4>
            <h1 className="text-lg font-bold">
              {formatCurrency(totalProductPricing)}
            </h1>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
