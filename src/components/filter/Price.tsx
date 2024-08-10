import React from "react";

const Price = () => {
  return (
    <div className="flex items-start justify-start w-full flex-col filter_section">
      <h2 className="filter_header">Price</h2>
      <label>
        <input type="radio" value="" name="test2" />
        All
      </label>
      <label>
        <input type="radio" value={50} name="test2" />
        $0 - 50
      </label>
      <label>
        <input type="radio" value={100} name="test2" />
        $50 - $100
      </label>
      <label>
        <input type="radio" value={150} name="test2" />
        $100 - $150
      </label>
      <label>
        <input type="radio" value={200} name="test2" />
        Over $150
      </label>
    </div>
  );
};

export default Price;
