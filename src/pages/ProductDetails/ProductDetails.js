import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";
const ProductDetails = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo]);

  return (
    <>
      <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
        <div className="max-w-container mx-auto px-4">
          <div className="xl:-mt-10 -mt-7">
            <Breadcrumbs title="" prevLocation={prevLocation} />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full  xl:-mt-8 py-10 bg-gray-100 p-4">
            {/* product image */}
            <div className="h-full xl:col-span-2">
              <div className="h-74 w-full bg-white p-2">
                <img
                  className="w-full h-full object-cover"
                  src={productInfo.img}
                  alt={productInfo.img}
                />
              </div>

              <Link to="/cart">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: productInfo._id,
                        name: productInfo.productName,
                        quantity: 1,
                        image: productInfo.img,
                        badge: productInfo.badge,
                        price: productInfo.price,
                        colors: productInfo.color,
                      })
                    )
                  }
                  className="w-full py-4 bg-blue-600 mt-4 hover:bg-blue-900 duration-300 text-white text-lg font-titleFont"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
            {/* product details */}
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
