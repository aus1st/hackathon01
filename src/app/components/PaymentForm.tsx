'use client'

import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Wrapper from './Shared/Wrapper';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const cardElement = elements?.getElement('card');
        console.log(cardElement)
        try {
            console.log('reached inside try')
            if(!stripe || !cardElement) return null;

            const res = await fetch('/api/create-payment-intent', {
                method: 'POST',
                body: JSON.stringify({
                    data: {amount: 89}
                })
        })
        const {data} =  await res.json();
        const clientSecret =  data;
        //console.log(clientSecret);
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
        <CardElement className='max-w-md'/>
       
       <div className='mt-10'>
        <button className='p-3 rounded-md bg-blue-700 text-white' type='submit'>Submit</button>
        </div> 
      </form>
      </div>
      </Wrapper>
    
  );
}

export default PaymentForm
