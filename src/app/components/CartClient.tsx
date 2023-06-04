"use client";
import { FC, useState } from "react";
import Image from "next/image";

import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { ICart, IProduct } from "../lib/product";
import { Image as IImage } from "sanity";
;

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

/* @ts-expect-error Server Component */
const Cart: FC<{title?: string, price?: number, quantity?: number, image: IImage}> = async ({title,price,quantity,image}) => {
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
        <div className="flex sm:flex-row flex-col gap-x-5 w-full">

          {/* image */}
          <div className="bg-gray-100 w-60 h-60 border border-gray-100 rounded-lg">
            {/* <Image src={urlFor(image?.image).url()} width={150} height={100} alt={title as string}></Image> */}
          </div>

          <div className="flex flex-col space-y-3 justify-around w-full">
            {/* product name */}
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <span className="text-md text-gray-500 font-bold">
                {
                  title?.split(" ")[
                    title?.split(" ").length - 1
                  ]
                }
              </span>
            </div>
                
            {/* price */}
            <div>
              <h4 className="font -bold text-lg">$ {price}</h4>
            </div>
          </div>

          {/* controls */}
          <div className="flex sm:flex-col flex-row justify-around items-center">
            <button className="bg-white rounded-full p-2">
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>

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
  return <div>{orderDtls}</div>;
};

export default Cart;
