import { NextRequest, NextResponse } from "next/server";
//import stripe from "stripe";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: '2022-11-15',
});

export async function POST(request: NextRequest) {

    const { data } = await request.json();
    const { amount } = data;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount) * 100,
            currency: 'USD'
        });

        return new NextResponse(paymentIntent.client_secret, { status: 200 });
    } catch (error) {
        console.log(error)
        return new NextResponse('error', {
            status: 400
        })
    }

}

