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
      <div className="grid sm:grid-cols-[repeat(3,auto)] grid-cols-[repeat(1,auto)] gap-x-5 justify-center gap-y-3">
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
