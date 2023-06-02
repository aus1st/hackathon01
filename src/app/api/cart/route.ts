import { cartTable, db } from "@/app/lib/drizzle";
import { ICart } from "@/app/lib/product";
import { eq } from "drizzle-orm";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from 'uuid';

type Props = {
  params: {
    user_id: string
  }
}

// get data from db by providing user_id saved in cookie

export async function GET(requet: NextRequest) {
  const { searchParams } = new URL(requet.url);
  console.log('Request from Client', searchParams)
  const user_id = searchParams.get('user_id');

  if (user_id) {
    try {
      const res = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, user_id as string));
      console.log(res)
      return NextResponse.json({ res });
    } catch (error) {
      return NextResponse.json({ Error: "something went wrong" });
    }
  } else {
    return NextResponse.json({ message: "User is ID is missing" });
  }
}


export async function POST(requet: NextRequest) {

  const req = await requet.json();
  const { product_id, quantity, price, size }: ICart = req;
  console.log('request received at API')
  console.log(req)
  const cookie = cookies();
  const uid = uuid();
  //set userID
  const user_id = cookies().get('user_id')?.value
  if (!user_id) {

    cookie.set("user_id", uid as string)
  }
  try {
    console.log('sending request to db')
    const res = await db.insert(cartTable).values({
      user_id: user_id,
      product_id: product_id,
      quantity: quantity,
      price: price,
      size: size

    }).returning();
    console.log('response:', res)
    return NextResponse.json({ res });

  } catch (error) {
    return NextResponse.json({ Error: "something went wrong" });
  }

}
