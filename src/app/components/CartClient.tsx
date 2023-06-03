"use client";
import { FC, useState } from "react";
import Image from "next/image";

import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { ICart, IProduct } from "../lib/product";

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};


  /* @ts-expect-error Server Component */
const Cart: FC<{ data: ICart; product?: IProduct }> = async ({
  data,
  product,
}) => {
  const [qty, setQty] = useState(1);
  // const [amount, setAmount]= useState(0)

  const adjustQty = (opr: string) => {
    console.log(opr);
    if (opr == "-") {
      if (qty > 1) setQty(qty - 1);
      else return;
    } else if (opr == "+") {
      setQty(qty + 1);
    }
  };

  const orderDtls = (
    <div>
      {
        <div>
          <div className="bg-gray-100 w-20 h-auto border border-gray-100 rounded-lg" >
            {/* <Image src={urlFor(product?.image?.image).url()} width={150} height={100} alt={product?.title as string}></Image> */}
          </div>

          <div className="flex flex-col space-y-3">
            <h2 className="text-xl font-bold">{product?.title}</h2>
            <span className="text-md text-gray-500 font-bold">
              {product?.title.split(" ")[product?.title.split(" ").length - 1]}
            </span>

           
            <h4 className="font -bold text-lg">$ {product?.price}</h4>
          </div>

          {/* controls */}
          <div>
            <button className="bg-white rounded-full p-2">❌</button>

            <div className="flex  gap-x-3 gap-y-3 items-start justify-end">
              <button
                onClick={() => adjustQty("-")}
                className="bg-gray-300 text-black p-2 rounded-full"
              >
                ➖
              </button>
              <span className="text-xl font-bold">{qty}</span>
              <button
                onClick={() => adjustQty("+")}
                className="bg-white border border-black text-black p-2 rounded-full"
              >
                ➕
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
  return (
   
      <div>
      {orderDtls}
      </div>     
   
  );
};

export default Cart;
