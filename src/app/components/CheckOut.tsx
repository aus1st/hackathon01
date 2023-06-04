"use client";
import useSWR from 'swr';

import { cookies } from "next/dist/client/components/headers";
import React from "react";
import { ICart } from "../lib/product";
import getCartData from '../lib/getCartData';


const fetcher = (url:string)=> fetch(url).then((res)=> res.json());

const getcartData = async () => {
    const cookie = cookies();
  const user_id = cookie.get('user_id')?.value as string;
  // console.log(user_id)
  if (user_id) {
    try {
      console.log("calling api");
         
      const data = await fetch(
        `http://localhost:3000/api/cart?user_id=${user_id}`
      );
      
      
      return await data.json();
      
    } catch (error) {
      console.log("Error Occured", error);
    }
  }
};


const CheckOut= async () => {
  const cookie = cookies();
  const user_id = cookie.get('user_id')?.value as string;
  console.log(user_id)
  
  const data: Promise<ICart[]> = getCartData(`http://localhost:3000/api/cart?user_id=${user_id}`);


  //const cartDtls:ICart[] = await getcartData();
   const cartDtls = await data;
  const amount = ()=>{
    let total =0;
    cartDtls.map(a=>{
      total+= a.price * a.quantity
    })
    return total;
  }

  const qty = cartDtls.map(q=>q.quantity).reduce((accumulator: number, input: number): number =>accumulator+input);
  return (
    <div className="bg-gray-50 p-8">
      <div>
        <h2 className="text-xl mt-3 font-bold">Order Summary</h2>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-3 justify-center items-center">
        <div className="col-span-3">
          <h3 className="text-md text-gray-800 font-bold">
            Delivery Estimation
          </h3>
          </div>
        <div className="col-span-3">
          <h3 className="text-orange-400 font-bold text-xl">5 Working Days</h3>
          </div>
        
        <div className="font-bold col-span-2">Quantity</div>
        <div className="font-bold">{qty}</div>
        <div className="font-bold col-span-2">Total</div>
        <div className="font-bold">$ {amount()}</div>
        <div className="col-span-3 align-middle">
          <button className="bg-black text-white py-3 px-8">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;


