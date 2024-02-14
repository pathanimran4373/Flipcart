import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FaRupeeSign } from "react-icons/fa";
import { motion } from "framer-motion";

import Breadcrumbs from "../../components/breadCrumbs";
import { resetCart } from "../../redux/ReducerSlice";
import EmptyCartImg from "../../assets/images/emptyCart.png"; 
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);

  // State to hold total amount and shipping charge
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");

  // Calculate total amount when products change
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);

  // Calculate shipping charge based on total amount
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
      {products.length > 0 ? (
        <>
          <div className="flex flex-row justify-between items-center mt-8 w-full">
            {/* Breadcrumbs Component */}
            <div className="flex flex-row justify-between items-center">
              <Breadcrumbs />
              <Link
                className="text-blue-600 cursor-pointer hover:text-blue-900 mt-[13px]"
                to="/"
              >
                /HOME
              </Link>
            </div>
            {/* Reset cart button */}
            <button
              onClick={() => dispatch(resetCart())}
              className="py-2 w-[160px] rounded whitespace-nowrap mr-5 bg-blue-600 text-white md:font-semibold uppercase  hover:bg-blue-900 duration-300"
            >
              Reset cart
            </button>
          </div>
          {/* Check if products are available */}
          <div className="flex md:flex-row flex-col md:justify-center items-center md:items-start justify-center relative w-full mt-7">
            {/* Cart Items */}
            <div className="bg-white md:mr-12 shadow-lg col-span-4 rounded-lg md:w-3/5 md:h-1/2 overflow-auto md:top-28  mb-10 p-5">
              <div className="flex items-center justify-between flex-wrap border-b-[1px] border-b-gray-400 pb-1  ">
                <div className="flex flex-row items-center justify-center">
                  <p className="text-2xl font-semibold text-amazon_blue ">
                    My Cart(
                    <span> {products.length > 0 ? products.length : 0}</span>)
                  </p>
                </div>
                <button className="md:w-[140px] w-38 ml-8 text-md font-semibold text-blue-600 p-1 rounded shadow-inset border  border-blue-600 ">
                  Enter delivery Pincode
                </button>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                {/* Render each item card */}
                {products.map((item) => (
                  <div key={item.id}>
                    <ItemCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Total Section */}
            <div className="bg-white shadow-lg h-64 col-span-1 p-4 rounded-lg flex items-center justify-center  w-full md:w-1/5 px-4">
              <div className="w-96 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-right sm:text-center">
                  Cart totals
                </h1>
                {/* Total Amount, Shipping Charge, and Total */}
                <div>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Subtotal
                    <span className="flex flex-row items-center justify-around font-semibold tracking-wide font-titleFont">
                      <FaRupeeSign />
                      <p>{totalAmt}</p>
                    </span>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Shipping Charge
                    <span className="flex flex-row items-center justify-around font-semibold tracking-wide font-titleFont">
                      <FaRupeeSign />
                      <p>{shippingCharge}</p>
                    </span>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                    Total Amount
                    <span className="flex flex-row items-center justify-around font-bold tracking-wide text-lg font-titleFont">
                      <FaRupeeSign />
                      <p>{totalAmt + shippingCharge}</p>
                    </span>
                  </p>
                </div>
                {/* Proceed to Checkout Button */}
                <div className="flex justify-end">
                  <Link to="/paymentgateway">
                    <button className="uppercase w-52 h-10 rounded bg-blue-600 text-white hover:bg-blue-900 duration-300">
                      Place Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Empty Cart Section
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex w-full h-40 border-box"
        >
          <div className="flex mt-[250px] items-center justify-center md:h-11/12 w-full">
            <div className="max-w-[900px] rounded-lg shadow-lg bg-white mx-auto inset-x-auto flex justify-center gap-4 flex-col items-center md:mt-28 pb-9">
              {/* Empty Cart Image */}
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src={EmptyCartImg}
                alt="emptyCart"
              />
              {/* Empty Cart Message */}
              <h1 className="font-titleFont text-xl font-bold uppercase">
                Your Cart feels lonely.
              </h1>
              {/* Continue Shopping Button */}
              <Link to="/">
                <button className="bg-blue-600 rounded-md text-white cursor-pointer hover:bg-blue-900 px-4 py-2  text-md  duration-300">
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

