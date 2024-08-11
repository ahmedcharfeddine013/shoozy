import { filterProps } from "@/Types";
import React from "react";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";

const Sidebar = ({ handleChange }: filterProps) => {
  return (
    <section className="w-[15%] fixed h-full border-r-2 top-0 z-10 flex flex-col items-center justify-center p-4 gap-3 bg-white">
      <Category handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
