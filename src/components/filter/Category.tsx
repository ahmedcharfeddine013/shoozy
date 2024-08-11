import React from "react";
import { Label } from "../ui/label";
import { filterProps } from "@/Types";

const Category = ({ handleChange }: filterProps) => {
  return (
    <div className="flex items-start justify-start w-full flex-col">
      <h1 className="filter_header">Category</h1>
      <label>
        <input onChange={handleChange} type="radio" value="" name="test" />
        All
      </label>
      <label>
        <input
          onChange={handleChange}
          type="radio"
          value="sneakers"
          name="test"
        />
        Sneakers
      </label>
      <label>
        <input onChange={handleChange} type="radio" value="flats" name="test" />
        Flats
      </label>
      <label>
        <input
          onChange={handleChange}
          type="radio"
          value="sandals"
          name="test"
        />
        Sandals
      </label>
      <label>
        <input onChange={handleChange} type="radio" value="heels" name="test" />
        Heels
      </label>
    </div>
  );
};

export default Category;
