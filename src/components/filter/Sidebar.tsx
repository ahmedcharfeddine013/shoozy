"use client";

import { filterProps } from "@/Types";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
import { cn } from "@/lib/utils";

const Sidebar = ({ handleChange }: filterProps) => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerHeight = footer.getBoundingClientRect().height;
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const distanceFromBottom = documentHeight - scrollPosition;

        if (distanceFromBottom <= footerHeight) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="sidebar"
      className={cn(
        !isFixed ? "absolute bottom-0" : "fixed top-0 ",
        "w-[150px] h-screen border-r-2 z-10 hidden sm:flex flex-col items-center justify-center p-4 gap-3 bg-white"
      )}
    >
      <Category handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
