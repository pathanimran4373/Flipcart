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
      <div className="w-full h-screen md:p-10">
        <div className="w-11/12 h-full mx-auto mt-11 bg-white shadow-lg px-4">
          <div className="xl:-mt-10 -mt-7">
            {/* <Breadcrumbs title={productInfo.productName} prevLocation={prevLocation} /> */}
          </div>
          {/* Product details section */}
          <div className="w-full h-full flex md:flex-row justify-center items-center flex-col  py-10 px-4">
            {/* image and button container */}
            <div className="w-full shadow-lg flex flex-col justify-start items-center md:w-5/12 h-full">
              {/* Product image */}
              <div className="md:h-3/4 md:w-3/4">
              <img
                className="w-full h-full aspect-auto object-center bg-blue-600"
                src={productInfo.img}
                alt={productInfo.img}
              />
              </div>

              {/* Button to add product to cart */}

              <div className="flex md:flex-row items-center justify-center my-3">
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
                <Link to="/order">
                  <button className="flex flex-row items-center justify-center rounded w-[140px] h-[45px] bg-orange-600 ml-2 mt-4 hover:bg-blue-900 duration-300 text-white text-lg font-titleFont">
                    <TiTick className="text-white mr-4 " />
                    <span>ORDER IT</span>
                  </button>
                </Link>
              </div>
            </div>
            {/* Product details */}
            <div className="md:w-2/4 h-full w-full md:ml-14  ">
              <ProductInfo productInfo={productInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
