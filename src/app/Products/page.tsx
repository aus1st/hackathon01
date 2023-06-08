import React from 'react'
import { IProduct } from '../lib/product'
import { getAllProducts, getProductDataByGender } from '../lib/productservice'
import ProductImage from '../components/ProductImage';
import Wrapper from '../components/Shared/Wrapper';
import Link from 'next/link';

const page = async () => {
    const data:IProduct[] =  await getAllProducts();
    
    return (
        <Wrapper>
    <div className='grid grid-cols-1 sm:grid-cols-5 sm:justify-center gap-x-3 justify-center gap-y-3'>
      {        

                 data.map(p=>(
                  <Link key={p._id} href={`/product/${p._id}`}>
                  <ProductImage product={p} key={p._id}></ProductImage>
                  </Link>
            ))
        
      }
    </div>
    </Wrapper>
  )
}

export default page
