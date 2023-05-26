import React, { FC } from 'react'

const BackgroundText:FC<{text:string}> = ({text}) => {
  return (

    <div className="absolute text-[100px] text-gray-100 leading-[100px] whitespace-pre-line -z-10 font-bold ">{text}</div>

  )
}

export default BackgroundText
