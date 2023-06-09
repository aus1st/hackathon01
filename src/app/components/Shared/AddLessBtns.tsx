"use client";
import { s } from "drizzle-orm/query-promise.d-afecc38e";
import React, { FC, useState } from "react";

import { useRouter } from "next/navigation";


import toast, {Toaster} from 'react-hot-toast'
import { FaCartPlus } from "react-icons/fa";

export const AddLessBtns: FC<{ ID: number, price?: number; title?: string,product_id: string, _qty?:number }> = ({
  price,
  title,
  product_id,
  _qty,
  ID
}) => {
  const [qty, setQty] = useState(_qty==undefined?0:_qty);
  const [amount, setAmount] = useState(price);
  //const [total, setTotal]= useState(amount);
  const {refresh} = useRouter()

  // const adjustTotal = () => {
  //   // console.log('adjust amount called')
  //   setTotal(s=>s==undefined?0:+(amount==undefined?0:amount))
  // };


  const notify = (msg:string) => toast.success(msg,{
    duration: 4000,
    position: "top-center"
  }); 

  const notifyError = (msg:string) => toast.error(msg,{
    duration: 4000,
    position: "top-center"
  }); 



  const handleSubmit = async (qty: number)=>{
   
    try {
     const res = await fetch('/api/cart',{
       method: 'PUT',    
       body: JSON.stringify({
           product_id: product_id,
           price: price,
           quantity: qty,
           //size:size
       })
   })
   
   //console.log(res);
   notify('Qty Updated');
   refresh();    
  
  
    } catch (error) {
       console.log(error)
       notifyError('something went wrong')
    }
 
   
   }

   
  const handleDelete = async ()=>{
   
    try {
     const res = await fetch(`/api/cart?ID=${ID}`,{
       method: 'DELETE'
   })
   
   //console.log(res);
   
   refresh(); 
   notifyError('Item Deleted');   
    } catch (error) {
       console.log(error)
       notifyError('something went wrong')
    }
 
   
   }


  const adjustQty = (opr: string) => {
    //console.log(opr);
    //console.log('adjust qty called')
    if (opr == "-") {
      if (qty > 1) {
        setQty((s) => s - 1);
        handleSubmit(qty-1);
        setAmount((a) =>
          a == undefined ? 0 : a - (price == undefined ? 0 : price)
        );
      } else {
        setAmount((a) =>
          a == undefined ? 0 : (a = price == undefined ? 0 : price)
        );
        return;
      }
    } else if (opr == "+") {
      setQty((s) => s + 1);
      handleSubmit(qty+1);
      //cartService.updateCart(id as string,qty)
      setAmount((a) =>
      
        a == undefined ? 0 : a + (price == undefined ? 0 : price)
      
      );
      console.log(amount);
    }
  };

if(title) {
  return (

   
    // <div className="flex gap-x-3 mt-10 items-center">
    <div className="flex sm:flex-row flex-col space-y-3 justify-around gap-x-12 w-full">
      <div className="flex flex-col w-full gap-y-10 justify-between">
       
       <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <span className="text-md text-gray-500 font-bold">
          {title?.split(" ")[title?.split(" ").length - 1]}
        </span>
        </div>
        <div className="font-bold text-lg">$ {price==undefined?0:price * qty}</div>
      </div>
      

      <div className="flex sm:flex-col w-full flex-row items-center justify-around sm:gap-y-36">
        <div>
        <button onClick={()=>handleDelete()} className="bg-white rounded-full p-2">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
        </div>
        <div className="flex space-x-6 items-center">
        <button
          onClick={() => { adjustQty("-");}}
          className="bg-gray-300 text-black p-2 rounded-full"
        >
          ➖
        </button>
        <span className="text-xl font-bold">{qty}</span>
        <button
          onClick={() => {adjustQty("+");}}
          className="bg-white border border-black text-black p-2 rounded-full"
        >
          ➕
        </button>
      </div>
      </div>

    <div>
      {/* <CheckOut qty={qty} total={total}/> */}
    </div>
    <Toaster/> 

   
    </div>
  );
} else {
  return (
    
    <div className="text-2xl font-bold">Your cart is Empty 
    <FaCartPlus className="w-12 h-auto"/>
    </div>
    
  )
}

  
};


//export default AddLessBtns
