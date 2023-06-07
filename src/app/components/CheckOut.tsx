"use client";

import { cookies } from "next/dist/client/components/headers";

import * as cartService from '../lib/cartService';
import React, { FC, useState } from 'react'



import {client} from '../../../sanity/lib/client'

import imageUrlBuilder from '@sanity/image-url'
import { Image as IImage } from 'sanity';
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/navigation'
import { product } from "../../../sanity/product";

const builder = imageUrlBuilder(client);

const urlFor = (source:any)=>{
    return builder.image(source);
  }

  interface IProduct  {
    title: string,
    _id: string
    description: string,
    image: IImage,
    price: number,
    qty?: number,
    category: {
      name: string
    }
  }

  const qty = 0;//artItems.map(q=>q.quantity).reduce((accumulator: number, input: number): number =>accumulator+input);

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey!);
  


const CheckOut:FC<{products: IProduct[]}> =  ({products}) => {

let total = 0;
  // const handleBuy = ()=>{
  //   setItem({
  //     title: title,
  //     product_id: product._id,
  //         amount: product.price * quantity,
  //         image: urlFor(product.image).url()
  //   })
  //   console.log(item)
  // }

products.forEach(t=>{
  total+= t.price * t.qty!
})



  const createCheckOutSession = async ()=>{
    //setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await fetch('/api/create-stripe-session',{
      method: 'POST',
      body: JSON.stringify(products)
    });
  
    //setLoading(false);
    const data = await checkoutSession.json();
    console.log(data);
    const result = await stripe?.redirectToCheckout({
      sessionId: data.id
    });
  
    if(result?.error) {
      alert(result.error.message)
    }
  }
  


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


