import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  console.log(products);

  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <>
      <Breadcrumbs />

        {products.length > 0 ? (
          <div className="flex flex-row">
            <div className="bg-white col-span-4 p-4 rounded-lg w-8/12">
              <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
                <p className="text-2xl font-semibold text-amazon_blue">
                  Shopping Cart
                </p>
                <p className="text-lg font-semibold text-amazon_blue mr-10">Subtotal</p>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                {products.map((item) => (
                  <div key={item._id}>
                    <ItemCard item={item} />
                  </div>
                ))}
                <button
                  onClick={() => dispatch(resetCart())}
                  className="py-2 mr-5 px-10 bg-blue-600 text-white font-semibold uppercase mb-4 hover:bg-blue-900 duration-300"
                >
                  Reset cart
                </button>

              </div>

            </div>
            <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">
              <div className="w-96 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
                <div>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Subtotal
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${totalAmt}
                    </span>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Shipping Charge
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${shippingCharge}
                    </span>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                    Total
                    <span className="font-bold tracking-wide text-lg font-titleFont">
                      ${totalAmt + shippingCharge}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link to="/paymentgateway">
                    <button className="w-52 h-10 bg-blue-600 text-white hover:bg-blue-900 duration-300">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
                <hr />
                <Link to="/shop"><button
                  className="py-2 px-10 bg-blue-600 text-white w-full font-semibold uppercase mb-4 hover:bg-blue-900 duration-300"
                >
                  Continew Shopping
                </button></Link>
              </div>
            </div>
          </div>

        ) : (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex w-full h-40 border-box"
          >

            <div className="flex items-center justify-center w-full h-full">
              <div className="max-w-[900px] mb-30 bg-white absolute mx-auto inset-x-auto flex gap-4 flex-col items-center">

                <div>
                  <img
                    className="w-80 rounded-lg p-4 mx-auto"
                    src={emptyCart}
                    alt="emptyCart"
                  />
                </div>


                <h1 className="font-titleFont text-xl font-bold uppercase">
                  Your Cart feels lonely.
                </h1>

                <Link to="/shop">
                  <button className="bg-blue-600 rounded-md cursor-pointer hover:bg-blue-900 active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
    </>
  );
};

export default Cart;
