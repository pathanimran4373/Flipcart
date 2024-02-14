import React from "react";
// import { FaAngleRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-11 shadow-lg h-20 text-black bg-white rounded cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-0"
      onClick={onClick}
    >
      <span className="bg-transparent">
      <FaAngleRight /></span>
    </div>
  );
};

export default SampleNextArrow;
