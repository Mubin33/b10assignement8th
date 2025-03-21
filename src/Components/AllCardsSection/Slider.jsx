import React from "react";
import { NavLink } from "react-router-dom";

const Slider = ({ slider }) => {
  let { category } = slider;
  return (
    <div className="">
      <NavLink
        to={`/device/${category}`}
        role="tab"
        className={({ isActive }) =>
          `tab lg:w-52 w-40 px-4 h-10 mt-8 lg:text-xl text-sm rounded-lg border-2 ${
            isActive ? "border-purple-800 text-purple-800 shadow-xl shadow-purple-500" : ""
          }`
        } 
      >
        {category}
      </NavLink>
    </div>
  );
};

export default Slider;
