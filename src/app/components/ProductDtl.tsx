import React, { FC } from 'react'
import Image from 'next/image'
import { IProduct } from '../lib/product'
import Wrapper from './Shared/Wrapper'
import SizeQty from './Shared/SizeQty'


import {client} from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client);

const urlFor = (source:any)=>{
  return builder.image(source);
}


const ProductDtl:FC<{product: IProduct}> = ({product}) => {
    console.log(product.price)
  return (
    <Wrapper>
    <div className='flex sm:flex-row flex-col justify-evenly'>
      
    {/* thumbnail */}
    <div className='flex flex-col gap-y-4'>
        <Image src={urlFor(product.image).url()} width={150} height={150} alt={product.title}></Image>
    </div>

    {/* center section */}
    <div className='sm:mt-0 mt-5'>
    <Image src={urlFor(product.image).url()} width={580} height={640} alt={product.title}></Image>
    </div>

    {/* right */}
    <div>
    <h1 className='text-2xl font-bold'>{product.title}</h1>
    <h3 className='text-xl text-gray-400 font-semibold'>
      {
        product.title.split(' ')[product.title.split(' ').length-1]
      }</h3>
    
    {/* size and qty select  */}
    <div>
    <SizeQty price={product.price}></SizeQty>
    </div>
    
    </div>


    {/* product info */}

    </div>
    
    <div className='relative flex sm:flex-row flex-col mt-20'>
      <h4 className='text-3xl font-semibold sm:font-bold'>Product Information</h4>
      <div className='absolute sm:text-[130px] text-[55px] sm:-top-20 -top-5 -z-10 font-bold text-gray-100'>Overview</div>
       
      
      
      
    </div>
    <div className='mt-20 border-t-gray-400 border'></div>
    <div className='flex gap-x-6 p-5'>
        <div className='w-4/12 font-bold text-xl text-gray-500'>Product Details</div>
        <div className='w-8/12'>{product.details}</div>
        </div>
    <div className='flex gap-x-6 p-5 items-center'>
        <div className='w-4/12 font-bold text-xl text-gray-500'>Product Care</div>
        <div className='w-8/12'>{product.details.substring(0,50)}</div>
        </div>
    
    </Wrapper>
  )
}

export default ProductDtl
