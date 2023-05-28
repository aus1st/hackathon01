'use client'
import React from 'react'

const sizes = ["XS","S","M","L","XL"]
const SizeQty = () => {
  return (
    <div>
      <h3 className="font-bold text-lg text-gray-600 mt-5">Select Size</h3>
      <div className='flex gap-x-4 mt-5'>
       {
        sizes.map(b=>(
            
            <button className='hover:bg-white hover:shadow-xl font-bold text-gray-500 rounded-full py-3 px-3' key={b}>{b}</button>
          
        ))
       }
         </div>
    </div>
  )
}

export default SizeQty
