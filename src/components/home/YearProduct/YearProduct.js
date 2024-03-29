import React from "react";
// import Banner image
import  BannerImg from "../../../assets/images/productOfTheYear.webp"
// import button component
import ShopNow from "../../designLayouts/buttons/ShopNow";

const YearProduct = () => {
  return (
      <div className="w-11/12 mx-auto h-80 my-11 relative shadow font-titleFont">
        <img 
        src={BannerImg}
         alt="watch" className="w-full h-full aspect-[1/1] object-contain"/>
        <div className="w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 -right-8 flex flex-col items-start gap-6 justify-center">
          <h1 className="md:text-3xl text-lg font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="md:text-base text-sm font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <ShopNow />
        </div>
      </div>
  );
};

export default YearProduct;
