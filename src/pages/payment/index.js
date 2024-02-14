import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
   <>
    <div className="w-full h-64 flex justify-center items-center">
      <div className="pb-10">
        <p className="text-xl font-medium">Your cart is Successfull !.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-blue-600 text-white text-lg mt-4 hover:bg-blue-900 duration-300">
            Go Home
          </button>
        </Link>
      </div>
    </div>
   </>
  );
};

export default Payment;
