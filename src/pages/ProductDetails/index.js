import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// react icons
import { FaShoppingCart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

import Breadcrumbs from "../../components/breadCrumbs";
import ProductInfo from "../../components/ProductDetail/ProductInfo";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/ReducerSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();

  // Get the current location using useLocation hook
  const location = useLocation();

  // State to store previous location and product information
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  // Update product information and previous location when location changes
  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo]);

  return (
    <>
      {/* Container for product details */}
      <div className="w-full md:mt-[55px]">
        <div className="md:w-11/12 mx-auto bg-white shadow-lg px-4">
          <div className="xl:-mt-10 -mt-7">
            <Breadcrumbs title="" prevLocation={prevLocation} />
          </div>
          {/* Product details section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full  xl:-mt-8 py-10 p-4">
            {/* Product image */}
            <div className="shadow-lg xl:col-span-2">
              <div className="w-full bg-white p-2">
                <img
                  className="w-full md:h-72 object-cover"
                  src={productInfo.img}
                  alt={productInfo.img}
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                {/* Button to add product to cart */}
                <Link to="/cart">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: productInfo.id,
                          name: productInfo.productName,
                          quantity: 1,
                          image: productInfo.img,
                          badge: productInfo.badge,
                          price: productInfo.price,
                          colors: productInfo.color,
                        })
                      )
                    }
                    className="flex flex-row items-center justify-center rounded w-[140px] h-[45px] bg-amber-600 mt-4 hover:bg-blue-900 duration-300 text-white text-md font-titleFont"
                  >
                    <FaShoppingCart className="text-white mr-2 " />
                    <span className="white-space-wrap">ADD To CART</span>
                  </button>
                </Link>
                <button className="flex flex-row items-center justify-center rounded w-40 h-12 bg-orange-600 ml-5 mt-4 hover:bg-blue-900 duration-300 text-white text-lg font-titleFont">
                <TiTick className="text-white mr-4 "/>
                  <span>ORDER IT</span>
                </button>
              </div>
            </div>
            {/* Product details */}
            <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
              <ProductInfo productInfo={productInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
