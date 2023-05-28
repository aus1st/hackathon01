import React, { FC } from 'react'
import Image from 'next/image'


import {client} from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { IProduct } from '../lib/product';

const builder = imageUrlBuilder(client);

const urlFor = (source:any)=>{
  return builder.image(source);
}



const getProductData = async ()=>{
    const res = await client.fetch(`*[_type=='product']{
        _id,title,description,image,price
    }`);
    return res;
}


const ProductImage:FC<{product:IProduct}> =  ({product}) => {
    //const products : IProduct[] = await getProductData();
    // console.log(products[0].image);
    return (
              
               <div className='hover:scale-110 transition delay-300 duration-300 ease-in-out'>
                <div className='flex sm:gap-x-2 gap-x-3 '>
                <Image src={urlFor(product.image).url()} alt={product.title} width={380} height={400}></Image>
                </div>
                <p className='sm:font-bold text-sm'>{product.title}</p>
                <p className='sm:font-bold text-sm'>$ {product.price}</p>
                </div>
                 
    )

  
}

export default ProductImage
