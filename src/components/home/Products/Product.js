import React from "react";
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <div className="w-15 h-15 relative group border-solid border-2 p-2">
      <div className="w-50 h-50 relative overflow-y-hidden cursor-pointer box-border"    
       onClick={handleProductDetails}>
        <div className="h-60 w-full">
          <Image className="w-full h-full object-fill object-cover object-center" imgSrc={props.img} />
        </div>
        
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
