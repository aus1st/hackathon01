import React from 'react'
import BackgroundText from './Shared/BackgroundText'
import Wrapper from './Shared/Wrapper'

const NewsLetter = () => {
  return (
    <Wrapper>    <>
    <div className='relative'>
    
    <h2 className='text-4xl sm:mt-[230px] mt-[100px] font-bold text-center'>Subscribe Our Newsletter</h2>
    <p className='text-gray-600 text-lg text-center mt-4'>Get the latest information and promo offers directly
    <div className='flex sm:flex-row flex-col items-center justify-center gap-5 mt-3'>
    <form>
        <input type="text" placeholder='input email address' className='border border-black p-1 sm:px-14 px-8' />
       
    </form>
    <button className='bg-black text-white px-4  sm:px-4 py-2 sm:py-1 '>Get Started</button>
    </div>

</p>
<h3 className='absolute sm:text-[130px] text-[55px] sm:right-[20%] right-[-1px] text-gray-100 leading-[100px] whitespace-pre-line -z-10
 -top-1 font-bold'>Newsletter</h3>
  
    </div>
    
    
    </>
    </Wrapper>

  )
}

export default NewsLetter
