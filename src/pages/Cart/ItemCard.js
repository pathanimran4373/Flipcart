import React from "react";
import { FaRupeeSign } from "react-icons/fa";

import { useDispatch } from "react-redux";

import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/ReducerSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex flex-col md:flex-row items-center md:justify-start justify-center w-12/12 gap-4 w-full  ">
        <div className="">
          <img className="w-32 h-32" src={item.image} alt={item.name} />
        </div>

        {/* item description */}
        <div className="flex md:flex-row md:justify-between  w-full h-100% items-center  px-2 relative flex-col justify-center">
          <div className="flex flex-col gap-1 my-2">
            <h1 className="font-titleFont font-semibold">{item.name}</h1>
            <div className="flex flex-row items-center w-1/3 text-lg font-semibold my-1">
              <h3 className="mr-2"> Price:</h3>
              <span className="flex flex-row items-center justify-around">
                <FaRupeeSign />
                {item.price}
              </span>
            </div>

            {/* increment and decrement button */}
            <div className="flex flex-row items-center my-1 gap-2 text-lg">
              Qty:
              <span
                onClick={() => dispatch(drecreaseQuantity({ id: item.id }))}
                className="cursor-pointer text-xlg"
              >
                -
              </span>
              <p>{item.quantity}</p>
              <span
                onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                className="text-xlg cursor-pointer"
              >
                +
              </span>
            </div>
            {/* remove button */}
            <button
              className="w-[120px] h-8 rounded bg-blue-600 text-white hover:bg-blue-900 duration-300 cursor-pointer "
              onClick={() => dispatch(deleteItem(item.id))}
            >
              Remove
            </button>
          </div>
          {/* total price */}
          <div className="font-bold text-lg absolute hidden md:block right-14">
            <p className="flex flex-row items-center justify-around">
              <FaRupeeSign />
              {item.quantity * item.price}
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 h-2" />
    </>
  );
};

export default ItemCard;
