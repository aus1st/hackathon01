"use client";
import React, { FC } from "react";
import { useState } from "react";
import { set } from "sanity";

const sizes = ["XS", "S", "M", "L", "XL"];

const SizeQty:FC<{price: number}> = ({price}) => {

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const adjustQty = (opr: string) => {
    console.log(opr);
    if (opr == "-") {
      if (qty > 1) setQty(qty - 1);
      else return;
    } else if (opr == "+") {
      setQty(qty + 1);
    }
  };

  return (
    <div>
      <h3 className="font-bold text-lg text-gray-600 mt-5">Select Size</h3>
      <div className="flex gap-x-4 mt-5">
        {sizes.map((b) => (
          <button
            className="hover:bg-white hover:shadow-xl font-bold text-gray-500 rounded-full py-3 px-3"
            key={b}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="flex gap-x-3 mt-10 items-center">
        <h3 className="text-xl font-bold">Quantity:</h3>
        <button
          onClick={() => adjustQty("-")}
          className="bg-gray-300 text-black p-2 rounded-full"
        >
          ➖
        </button>
        <span className="text-xl font-bold">{qty}</span>
        <button
          onClick={() => adjustQty("+")}
          className="bg-white border border-black text-black p-2 rounded-full"
        >
          ➕
        </button>
      </div>

       <div className="flex mt-10 gap-x-3 items-center">
        <button className="bg-black text-white sm:py-2 sm:px-5 py-1 px-4">🛒 Add to Card</button>
        <h3 className="sm:text-3xl text-xl font-bold">$ {price}</h3>
        </div>   

    </div>
  );
};

export default SizeQty;
