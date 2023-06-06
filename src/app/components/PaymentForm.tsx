'use client'

import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Wrapper from './Shared/Wrapper';

const PaymentForm = async () => {

    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const cardElement = elements?.getElement('card');
        console.log(cardElement)
        try {
            if(!stripe || !cardElement) return null;

            const res = await fetch('/api/create-payment-intent', {
                method: 'POST',
                body: JSON.stringify({
                    data: {amount: 89}
                })
        })

        const clientSecret = await res.json();

        await stripe?.confirmCardPayment(clientSecret, {
            payment_method: {card: cardElement},
            
        });

        } catch (error) {
            console.log(error)
        }

       
    }

  return (
   
        <Wrapper>
             <div>
      <form onSubmit={onSubmit}>
        <CardElement/>
        <button className='p-3 rounded-md bg-blue-700 text-white' type='submit'>Submit</button>
      </form>
      </div>
      </Wrapper>
    
  );
}

export default PaymentForm
