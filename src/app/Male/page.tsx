import React from 'react'
import { IProduct } from '../lib/product'
import { getProductDataByGender } from '../lib/productservice'
import ProductImage from '../components/ProductImage';
import Wrapper from '../components/Shared/Wrapper';
import Link from 'next/link';

const page = async () => {
    const data:IProduct[] =  await getProductDataByGender('Male');
    
    return (
        <Wrapper>
 <div className="grid grid-cols-4 gap-x-3 justify-center gap-y-3">
      {        
                 data.map(p=>(
                  <Link href={`/product/${p._id}`} key={p._id}>
                <ProductImage product={p} key={p._id}></ProductImage>
                </Link>
            ))
        
      }
    </div>
    </Wrapper>
  )
}

export default page
