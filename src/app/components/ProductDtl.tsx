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
    <div className='flex sm:flex-row flex-col gap-x-3'>
      
    {/* thumbnail */}
    <div className='flex flex-row'>
        <Image src={urlFor(product.image).url()} width={50} height={50} alt={product.title}></Image>
    </div>

    {/* center section */}
    <div>
    <Image src={urlFor(product.image).url()} width={300} height={340} alt={product.title}></Image>
    </div>

    {/* right */}
    <div>
    <h1 className='text-lg font-bold'>{product.title}</h1>

    {/* size and qty select  */}
    <SizeQty></SizeQty>
    </div>


    {/* product info */}
    </div>
    </Wrapper>
  )
}

export default ProductDtl
