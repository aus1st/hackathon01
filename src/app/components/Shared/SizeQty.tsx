"use client";
import { ICart } from "@/app/lib/product";
import React, { FC } from "react";
import { useState } from "react";
import { set } from "sanity";
import toast, {Toaster} from 'react-hot-toast'

import { useRouter } from "next/navigation";

const sizes = ["XS", "S", "M", "L", "XL"];

const SizeQty:FC<{product_id: string, price: number}> = ({product_id,price}) => {

  const notify = (msg:string) => toast.success(msg,{
    duration: 4000,
    position: "top-center"
  }); 

  const notifyError = (msg:string) => toast.error(msg,{
    duration: 4000,
    position: "top-center"
  }); 

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const {refresh} = useRouter();
  const handleSubmit = async ()=>{
   
   try {
    const res = await fetch('/api/cart',{
      method: 'POST',    
      body: JSON.stringify({
          product_id: product_id,
          price: price,
          quantity: qty,
          size:size
      })
  })
  
  return res;    
   } catch (error) {
      console.log(error)
      notifyError('something went wrong')
   }

  
  }
  
const selectSize = (b:string) => {
  //console.log(s);   
  setSize(b);
  
 
}

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
      <div className="flex gap-x-3 mt-5 justify-center items-center">
        {sizes.map((b) => (
          <button value={b}  onClick={()=>selectSize(b)}
            className="shrink-0  hover:bg-white focus:bg-gray-200 hover:shadow-xl font-bold text-gray-500 rounded-full p-3 "
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
        <button onClick={()=>{handleSubmit(), notify('Product Added'), refresh()}} className="bg-black text-white sm:py-2  sm:px-5 py-1 px-4">🛒 Add to Card</button>
        <h3 className="sm:text-3xl text-xl font-bold">$ {price}</h3>
        </div>   
        <Toaster/>  
    </div>
  );
};

export default SizeQty;
