import { NextRequest } from "next/server";
import stripe from "stripe";
//import Stripe from "stripe";

export async function POST(request: NextRequest) {

const {item} = await request.json();

const transformedItem = {
    price_data: {
        currency: 'usd',
        product_data: {
            images:[item.image],
            name: item.name,
        },
        unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: item.quantity
};

const params: stripe.Checkout.Session = {
    submit_type: 'donate',
    payment_method_types: ['card'],
    line_items: [
        
    //   {
    //     name: 'Custom amount donation',
    //     amount: formatAmountForStripe(amount, CURRENCY),
    //     currency: CURRENCY,
    //     quantity: 1,
    //   },
    ],
    success_url: `${item.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${item.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  };
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.Checkout.SessionsResource.caller(params);
}


function formatAmountForStripe(amount: any, CURRENCY: any) {
    throw new Error("Function not implemented.");
}
