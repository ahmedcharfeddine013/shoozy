"use client";

import { filterProps } from "@/Types";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";

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
      className={`${
        !isFixed ? "absolute bottom-0" : "fixed top-0 "
      } w-[15%] h-screen border-r-2 z-10  flex flex-col items-center justify-center p-4 gap-3 bg-white`}
    >
      <Category handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
