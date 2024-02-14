import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import image component
import Image from "../../designLayouts/Image";
import LoadingSpinner from "../../loadingSpiner";

const Product = (props) => {
  const [loading, setLoading] = useState(false);

  const _id = props.name;

  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();

  const productItem = props;

  // given function navigate on detail page
  const handleProductDetails = () => {
    setLoading(true);
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="w-18 h-15 md:w-42 relative group border-solid border-2 p-4 overflow-hidden">
            <div
              className=" relative overflow-y-hidden cursor-pointer box-border "
              onClick={handleProductDetails}
            >
              <div className="mx-auto">
                {/* image component */}
                <Image
                  className="w-40 h-35 object-cover object-center overflow-hidden md:mx-auto"
                  imgSrc={props.img}
                  productName={props.productName}
                />
              </div>
            </div>
            <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
              <div className="flex flex-col items-center justify-center  font-titleFont">
                <h4 className=" whitespace-nowrap text-primeColor font-bold">
                  {props.productName}
                </h4>
                <p className="text-[#767676] text-[14px] flex flex-row items-center justify-center">
                  <span className="text-amber-400	"> just</span> <FaRupeeSign />
                  {props.price}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
