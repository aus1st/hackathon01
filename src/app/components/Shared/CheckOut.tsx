"use client"

import React from 'react'

const CheckOut = () => {
  return (

    <div>
    <div className='bg-gray-50 p-5'>
    <div>
      <h2 className="text-xl mt-3 font-bold">Order Summary</h2>
    </div>
  

    <div className="grid grid-cols-2 gap-5 mt-3 justify-center items-center">
  <div>
  <h3 className="text-lg text-gray-800 font-bold">
              Delivery Estimation
            </h3>
            <h3 className="text-orange-400 font-bold text-xl">
              5 Working Days
            </h3>
  </div> <div></div>
  
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
  )
}

export default CheckOut
