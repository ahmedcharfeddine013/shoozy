import React from "react";

const Colors = () => {
  return (
    <div className="flex items-start justify-start w-full flex-col">
      <h2 className="filter_header">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test1" />
        All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="black" name="test1" />
        Black
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="blue" name="test1" />
        Blue
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="red" name="test1" />
        Red
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="green" name="test1" />
        Green
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="white" name="test1" />
        White
      </label>
    </div>
  );
};

export default Colors;
