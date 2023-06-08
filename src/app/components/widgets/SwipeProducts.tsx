'use client'
import React, { FC } from 'react'
import Wrapper from '../Shared/Wrapper'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { A11y, Navigation } from "swiper";
import { IProduct } from '@/app/lib/product';
import ProductImage from '../ProductImage';

const SwipeProducts:FC<{products: IProduct[]}> = ({products}) => {
  return (

      <Wrapper>
    <div>
        <div className="text-center mt-36">
          <p className="text-blue-700 font-bold">PRODUCTS</p>
          <h1 className="text-3xl font-bold">Check What We Have</h1>
        </div>
        <div className='sm:mt-10 mt-3'>
          <Swiper
            breakpoints={{
              300:{
                slidesPerView:1,
                spaceBetween:100
              },
              1000:{
                slidesPerView:2,
                spaceBetween:0
              },
              1260:{
                slidesPerView:3,
                spaceBetween:0
              }
            }}
        modules={[Navigation,A11y]} spaceBetween={0} slidesPerView={3} navigation>
        
          {products.map((p) => (
             <SwiperSlide key={p._id}>
              <ProductImage product={p} key={p._id}/>
             </SwiperSlide>
          ))}
          
        </Swiper>
        </div>
        </div>
      </Wrapper>

  )
}

export default SwipeProducts
