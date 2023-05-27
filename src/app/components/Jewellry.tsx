import React from 'react'
import Wrapper from './Shared/Wrapper'

const Jewellry = () => {
    const jewl = "Unique and Authentic \nVintage Designer \nJewellery"
  return (
    <Wrapper>
    <div className='flex justify-end mt-10 mr-4'>
      <h1 className="sm:text-4xl text-3xl font-bold sm:leading-20 leading-10  sm:whitespace-pre-line">
        {jewl}
      </h1>
    </div>
    </Wrapper>
  )
}
 
export default Jewellry
