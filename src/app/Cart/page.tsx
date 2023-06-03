

import Wrapper from "../components/Shared/Wrapper";

import { cookies } from "next/dist/client/components/headers";
import { ICart } from "../lib/product";


import {client} from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { IProduct } from '../lib/product';
import Cart from "../components/CartClient";
import CheckOut from "../components/Shared/CheckOut";



const getProductData = async ()=>{
  const res = await client.fetch(`*[_type=='product']{
      _id,title,description,image,price
  }`);
  console.log(res)
  return res;
}



const getcartData = async ()=> {
  const cookie = cookies();
const user_id = cookie.get('user_id')?.value as string;
// console.log(user_id)
if(user_id) {
  try {
    console.log('calling api');
    const data = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`);
    const cart : ICart[] = await data.json()
    // console.log(cart)
    return cart; 
  } catch (error) {
    console.log('Error Occured',error)
  }
}
}


const page = async () => { 


  const cartDtls= await getcartData();
  const products:IProduct[] = await getProductData();

   return (
    <Wrapper>
       <h1 className="text-2xl font-bold text-black">Shopping Cart</h1>
      <div className="flex w-8/12 sm:flex-row flex-col gap-5 justify-between">
      
       <div className="flex flex-col gap-x-25">
      {
        cartDtls?.map((c)=>{
          return (

            <div key={c.id}>
            <Cart data={c} product={products.find(p => p._id == c.product_id)} />
              </div>
          
          );
        })
      }
        </div>
        <div className="w-4/12">
        <CheckOut/>
        </div>
        </div>
    </Wrapper>
  );
};

export default page;
