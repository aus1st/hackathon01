

import Wrapper from "../components/Shared/Wrapper";

import { cookies } from "next/dist/client/components/headers";
import { ICart } from "../lib/product";


import {client} from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { IProduct } from '../lib/product';
import Cart from "../components/CartClient";



const getProductData = async ()=>{
  const res = await client.fetch(`*[_type=='product']{
      _id,title,description,image,price
  }`);
  return res;
}



const getcartData = async ()=> {
  const cookie = cookies();
const user_id = cookie.get('user_id')?.value as string;
console.log(user_id)
if(user_id) {
  try {
    console.log('calling api');
    const data = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`);
   
    return await data.json();    
  } catch (error) {
    console.log('Error Occured',error)
  }
}
}


const page = async () => { 


  const cartDtls: ICart[] = await getcartData();
  const products:IProduct[] = await getProductData();

   return (
    <Wrapper>
      
      {
        cartDtls.map((c)=>(
         
          <div key={c.id}>          
          <h1 className="text-2xl font-bold text-black">Shopping Cart</h1>
              <div className="flex flex-col sm:flex-row gap-x-25 items-center justify-evenly"> 

             <Cart data={c} product={products.find(p=>p._id == c.product_id)}/>
          </div>
        </div>
        ))
      }
          
    
    </Wrapper>
  );
};

export default page;
