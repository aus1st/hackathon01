import React from "react";
import Wrapper from "./Shared/Wrapper";
import Logo from "../../../public/Logo.webp";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";

import { ICart } from "../lib/product";
import { cookies } from "next/dist/client/components/headers";
import FullScreenNav from "./Shared/FullScreenNav";


export const getcartData = async () => {
  const cookie = cookies();
  const user_id = cookie.get('user_id')?.value as string;
  console.log('user id from servie ',user_id)
  if (user_id) {
    try {
      console.log("calling api");

      const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://hackathon01-aus1st.vercel.app'

      console.log("calling api");
      const data = await fetch(
        `${url}/api/cart?user_id=${user_id}`
      );
           
      return await data.json();
      
    } catch (error) {
      console.log("Error Occured", error);
    }
  }
};


const Nav =  async () => {
let productCount = 0;

  const cartDtls:ICart[] = await getcartData();
cartDtls?.map(q=>{
  productCount+= q.quantity;
})

  //console.log('cart Count:', cartDtls?.length)
  return (
    <header className="top-0 z-10">
      <Wrapper>
        <FullScreenNav productCount={productCount}/>
      </Wrapper>
    </header>
  );
};

export default Nav;
