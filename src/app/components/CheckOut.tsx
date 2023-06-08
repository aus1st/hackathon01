import { cookies } from "next/dist/client/components/headers";

import React, { FC, useState } from 'react'
import {client} from '../../../sanity/lib/client'

import imageUrlBuilder from '@sanity/image-url'
import { Image as IImage } from 'sanity';
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/navigation'
import { product } from "../../../sanity/product";
import { IProduct } from "../lib/product";
import CheckOutButton from "./CheckOutButton";

//artItems.map(q=>q.quantity).reduce((accumulator: number, input: number): number =>accumulator+input);

 


const CheckOut:FC<{products: IProduct[]}> =  ({products}) => {

let total = 0;
let qty = 0;

products.forEach(t=>{
  total+= t.price * t.quantity!;
  qty+= t.quantity!;
})

//console.log(products[0].price)
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
          <CheckOutButton products={products}/>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;


