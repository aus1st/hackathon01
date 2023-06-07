'use client'
import React, { FC } from 'react'
import { IProduct } from '../lib/product'
import { loadStripe } from '@stripe/stripe-js';


const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey!);

const CheckOutButton:FC<{products: IProduct[]}> =  ({products}) => {

    
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
    <div>
      <button onClick={createCheckOutSession} className="bg-black text-white py-3 px-8">
            Proceed to Checkout
          </button>
    </div>
  )
}

export default CheckOutButton
