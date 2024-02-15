// import React from "react";
import { FaStar, FaRupeeSign } from "react-icons/fa";

// ProductInfo component displays product information
const ProductInfo = ({ productInfo }) => {
  
  return (
    <div className="flex flex-col gap-3 justify-center items-start md:p-16">
      {/* Product name */}
      <h2 className="text-2xl font-semibold">{productInfo.productName}</h2>
      {/* Product ratings */}
      <div className="flex flex-row justify-center items-center">
        <button className="bg-[green] w-9 text-white flex flex-row items-center justify-center">
          <p>4</p>
          <FaStar className="text-white" />
        </button>
        <p className="">1430 Ratings & 803 Review</p>
      </div>
      {/* Product price */}
      <div className="flex flex-row items-center justify-center">
        <span className="text-2xl">
          <FaRupeeSign />
        </span>
        <p className="text-4xl font-semibold">{productInfo.price}</p>
      </div>
      {/* Product description */}
      <p className="text-base text-gray-600">{productInfo.des}</p>
      {/* Review prompt */}
      <p className="text-sm">Be the first to leave a review.</p>
      {/* Product colors */}
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      {/* Product categories */}
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
