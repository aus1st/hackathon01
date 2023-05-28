import ProductDtl from '@/app/components/ProductDtl'
import { IProduct } from '@/app/lib/product'
import { getProductData, getProductDataById } from '@/app/lib/productservice'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'



type Props= {
    params:{
        id:string
    }
}

const page = async ({params}: {params:{id:string}}) => {
   const {id} = params
   console.log(id)
    const product: IProduct = await getProductDataById(id)
    console.log(product)
  return (
    <div>
      <ProductDtl product={product} />
    </div>
  )
}

export default page
