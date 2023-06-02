"use client";
import { useState } from "react";
import Wrapper from "../components/Shared/Wrapper";
import Image from "next/image";
import { cookies } from "next/dist/client/components/headers";
import { ICart } from "../lib/product";




const getcartData = async ()=> {
  const cookie = cookies();
const user_id = cookie.get('user_id')?.value as string;
console.log(user_id)
if(!user_id) {
  try {
    const data = await fetch(`api/cart?id=${user_id}`);
    return await data.json();    
  } catch (error) {
    console.log('Error Occured',error)
  }
}
}


const Cart = async () => {
  const [qty, setQty] = useState(1);
  const [amount, setAmount]= useState()



  const adjustQty = (opr: string) => {
    console.log(opr);
    if (opr == "-") {
      if (qty > 1) setQty(qty - 1);
      else return;
    } else if (opr == "+") {
      setQty(qty + 1);
    }
  };

  
  const data: ICart[] = await getcartData();
  return (
    <Wrapper>
      <div>
        <h1 className="text-2xl font-bold text-black">Shopping Cart</h1>
      {
          data.map(p=>{

          
        
                    <div className="flex flex-col sm:flex-row gap-x-25 items-center justify-evenly">
            <div className="border rounded-lg border-gray-500">
              <Image src={""} alt=""></Image>
            </div>
  
            <div className="flex flex-col space-y-5">
              <h2 className="text-xl font-bold">Product Name</h2>
              <span className="text-md text-gray-500 font-bold">
                Product SubTitle
              </span>
  
              <h3 className="text-xl text-gray-800 font-bold">
                Deliver Estimation
              </h3>
              <h3 className="text-orange-400 font-bold text-xl">
                5 Working Days
              </h3>
              <h4 className="font-bold text-lg">$ Price</h4>
            </div>
  
            {/* controls */}
            <div>
              <button className="bg-white rounded-full p-2">Del</button>
  
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
          
      })
      }
      


          {/* order summary */}
          <div>
            <div>
              <h2 className="text-2xl mt-3 font-bold">Order Summary</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div className="font-bold">Quanity</div>
              <div className="font-bold">1</div>
              <div className="font-bold">Sub Total</div>
              <div className="font-bold">$195</div>
              <div className="col-span-2">
                <button className="bg-black text-white py-3 px-5">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
