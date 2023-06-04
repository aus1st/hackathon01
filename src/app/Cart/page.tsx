

import Image from "next/image";

import { Image as IImage } from "sanity";

import Wrapper from "../components/Shared/Wrapper";

import { cookies } from "next/dist/client/components/headers";
import { ICart } from "../lib/product";
import { getAllProducts } from "../lib/productservice";

import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { IProduct } from "../lib/product";

import CheckOut from "../components/CheckOut";
import  { DeleteBtn,AddLessBtns,Amount } from "../components/Shared/AddLessBtns";
import { P } from "drizzle-orm/db.d-89e25221";

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

//const fetcher = (url: string) => fetch(url).then(res=> res.json());
let productQnty = 0;


const getcartData = async () => {
  const cookie = cookies();
  const user_id = cookie.get('user_id')?.value as string;
  // console.log(user_id)
  if (user_id) {
    try {
      console.log("calling api");
     
     
      const data = await fetch(
        `http://localhost:3000/api/cart?user_id=${user_id}`
      );
      
      
      return await data.json();
      
    } catch (error) {
      console.log("Error Occured", error);
    }
  }
};



const Page = async () => {


  // async function qtyInParent(_qty: number) {
  //   'use server'
  //   //console.log(_qty)
  //   productQnty+= _qty;
  //   console.log(productQnty);
  // }

 const  sumqty = (qty:number[]): number=> {
  //let qnty = 0;  
  qty.forEach(q=>{
    productQnty +=q;
    })

    return productQnty;
  }
  const products: IProduct[] = await getAllProducts();
  
  const cartDtls:ICart[] = await getcartData();
  
  const orderDtls = cartDtls?.map((c) => {
    const x = products.find((p) => p._id == c.product_id);
    return (
      <div key={c.id}>
        <div className="flex sm:flex-row flex-col gap-x-5 w-full">
          {/* image */}
          <div className="rounded-lg">
            <Image
              src={urlFor(x?.image).url()}
              width={210}
              height={224}
              alt={x?.title as string}
              className="rounded-lg w-[400px] h-auto" ></Image>
          </div>

          <div className="flex flex-col space-y-3 justify-around w-full">
          
          <AddLessBtns price={x?.price} title={x?.title} product_id={x?._id as string}/>
        </div>
          {/* controls */}
          {/* <div className="flex sm:flex-col flex-row justify-around sm:items-center items-center">
        
          </div> */}
        </div>
      </div>
    );
  });

  return (
    <Wrapper>
     
      <h1 className="text-2xl font-bold text-black">Shopping Cart</h1>
      <div className="flex sm:flex-row mt-5 flex-col gap-5 justify-between">
        <div className="flex flex-col gap-x-25 gap-y-5">{orderDtls}</div>
        <div>
          {productQnty}     
           {/* @ts-expect-error Server Component */}
          <CheckOut/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
