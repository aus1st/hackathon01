import React from 'react'
import Wrapper from './Shared/Wrapper'

const Jewellry = () => {
    const jewl = "Unique and Authentic \nVintage Designer \nJewellery"
  return (
    <Wrapper>
    <div className='flex justify-end mt-20 mr-4'>
      <h1 className="text-4xl font-bold leading-20  whitespace-pre-line">
        {jewl}
      </h1>
    </div>
    </Wrapper>
  )
}
 
export default Jewellry
