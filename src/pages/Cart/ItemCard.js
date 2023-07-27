import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex flex-start items-center w-12/12 gap-4">

      <img className="w-32 h-32" src={item.image} alt="productImage" />
      {/* item description */}
      <div className="flex flex-row w-full h-100% items-center justify-butween px-2 relative">
        <div className="flex flex-col gap-1 my-2">
          <h1 className="font-titleFont font-semibold">{item.name}</h1>
          <div className="flex flex-row items-center w-1/3 text-lg font-semibold my-1">
            <h3 className="mr-2">  Price:</h3><span> ${item.price}</span>
          </div>

          {/* increment and decrement button */}
          <div className="flex flex-row items-center my-1 gap-2 text-lg">
            Qty:
            <span
              onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
              className="cursor-pointer text-xlg"
            >
              -
            </span>
            <p>{item.quantity}</p>
            <span
              onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
              className="text-xlg cursor-pointer"
            >
              +
            </span>
          </div>
          {/* remove button */}
          <button className="w-100% h-8 bg-blue-600 text-white hover:bg-blue-900 duration-300 cursor-pointer " onClick={() => dispatch(deleteItem(item._id))}>delete item</button>
        </div>
        {/* total price */}
        <div className="font-bold text-lg absolute right-14">
          <p>${item.quantity * item.price}</p>
        </div>
      </div>

    </div>
  );
};

export default ItemCard;
