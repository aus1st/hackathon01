import React from 'react'
import { IProduct } from '../lib/product'
import { getAllProducts, getProductDataByGender } from '../lib/productservice'
import ProductImage from '../components/ProductImage';
import Wrapper from '../components/Shared/Wrapper';

const page = async () => {
    const data:IProduct[] =  await getAllProducts();
    
    return (
        <Wrapper>
    <div className='flex sm:flex-row flex-col gap-x-3 flex-wrap'>
      {        
                 data.map(p=>(
                <ProductImage product={p} key={p._id}></ProductImage>
            ))
        
      }
    </div>
    </Wrapper>
  )
}

export default page
