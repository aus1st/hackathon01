import React from 'react'
import BackgroundText from './Shared/BackgroundText'

const NewsLetter = () => {
  return (
    <>
    <div className='relative'>
    
    <h2 className='text-4xl mt-[230px] font-bold text-center'>Subscribe Our Newsletter</h2>
    <p className='text-gray-400 text-lg text-center mt-4'>Get the latest information and promo offers directly
    <div className='flex items-center justify-center gap-5 mt-3'>
    <form>
        <input type="text" placeholder='input email address' className=' border border-black p-1 px-14' />
    
    
    </form>
    <button className='bg-black text-white px-3 py-1 font-semibold'>Get Started</button>
    </div>

</p>
<h3 className='absolute text-[130px] right-[27%] text-gray-100 leading-[100px] whitespace-pre-line -z-10 -top-1 font-bold'>Newsletter</h3>
  
    </div>
    
    
    </>
  )
}

export default NewsLetter
