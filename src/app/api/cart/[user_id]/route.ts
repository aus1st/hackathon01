import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/app/lib/drizzle";
import { eq } from "drizzle-orm";

type Props = {
    params: {
        user_id: string
    }
}


export async function GET(requet: NextRequest, { params: { user_id } }: Props) {
    const req = new URL(requet.url);
    if (user_id) {
        try {
            // const res = await db
            //   .select()
            //   .from(cartTable)
            //   .where(eq(cartTable.user_id, req.searchParams.get('user_id') as string));
            const res = await db
                .select()
                .from(cartTable)
                .where(eq(cartTable.user_id, user_id as string));
            return NextResponse.json({ res });
        } catch (error) {
            return NextResponse.json({ Error: "something went wrong" });
        }
    } else {
        return NextResponse.json({ message: "User is ID is missing" });
    }
}
