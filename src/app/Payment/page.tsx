'use client'
import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from '../components/PaymentForm';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

const page = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
    {/* @ts-expect-error Server Component */}
        <PaymentForm/>
      </Elements>
    </div>
  )
}

export default page
