import React, { FC, useState } from 'react'

const AddLessBtns:FC<{quantity: number}> = ({quantity}) => {
    const [qty, setQty] = useState(1);

    const adjustQty = (opr: string) => {
        console.log(opr);
        if (opr == "-") {
          if (qty > 1) setQty(qty - 1);
          else return;
        } else if (opr == "+") {
          setQty(qty + 1);
        }
      };
  return (
    
    <div className="flex gap-x-3 mt-10 items-center">
 
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
  )
}

export default AddLessBtns
