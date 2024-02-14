import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-11 h-20 rounded text-black bg-white cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-0 shadow-lg
      "
      onClick={onClick}
    >
      <span>
        <FaAngleLeft />
      </span>
    </div>
  );
};

export default SamplePrevArrow;
