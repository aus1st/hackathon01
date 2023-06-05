"use client";

import { cookies } from "next/dist/client/components/headers";
import React, { FC } from "react";
import * as cartService from '../lib/cartService';

// const cartItems = cartService.getCartItems();
// console.log(cartItems)
// let total= 0;
//   const amount = ()=>{
  
//     cartItems.forEach(a=>{
//       total+= a.price * a.quantity
//     })
//     return total;
//   }
//   amount();
  //const qty = cartDtls.map(q=>q.quantity).reduce((accumulator: number, input: number): number =>accumulator+input);
  const qty = 0;//artItems.map(q=>q.quantity).reduce((accumulator: number, input: number): number =>accumulator+input);



const CheckOut:FC<{qty: number, total: number}> =  ({qty, total}) => {
 // const CheckOut =  () => {
  // const cookie = cookies();
  // const user_id = cookie.get('user_id')?.value as string;
  // console.log(user_id)

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
        <div className="font-bold">$ {total}</div>
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


