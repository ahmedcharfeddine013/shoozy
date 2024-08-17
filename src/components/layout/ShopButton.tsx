"use client";

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ShopButton = () => {
  const [isFixed, setIsFixed] = useState<Boolean>();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerHeight = footer.getBoundingClientRect().height;
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const distanceFromBottom = documentHeight - scrollPosition;

        if (distanceFromBottom <= footerHeight + 24) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Link
      href={"/shop"}
      id="shop-button"
      className={cn(
        "transition-all duration-300 ease-in-out",
        !isFixed ? "absolute bottom-6 right-6 z-50" : "fixed bottom-6 right-6",
        pathname === "/cart" ? "hidden" : "block"
      )}
    >
      <Button className="bg-primary text-white p-3 rounded-full hover:p-4 duration-100 transition-all ease-in ">
        Shop
      </Button>
    </Link>
  );
};

export default ShopButton;
