'use client'
import Image from 'next/image'
import img1 from '../assets/images/products/img1.png'
import img2 from '../assets/images/products/img2.png'
import img3 from '../assets/images/products/img3.png'
import img4 from '../assets/images/products/img4.png'
import img5 from '../assets/images/products/img5.png'
import img6 from '../assets/images/products/img6.png'
import img7 from '../assets/images/products/img7.png'
import img8 from '../assets/images/products/img8.png'
import img9 from '../assets/images/products/img9.png'
import img10 from '../assets/images/products/img10.png'
import img11 from '../assets/images/products/img11.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Wrapper from './Shared/Wrapper'


type product = {
    productName: string,
    price: number,
    currency: string,
    imgPath: any

}


const products: product[] = [
    {
        productName: 'Brushed Raglan Sweatshirt',
        price: 195,
        currency: '$',
        imgPath: img1
    },
    {
        productName: 'Cameryn Sash Tie Dress',
        price: 545,
        currency: '$',
        imgPath: img2
    },
    {
        
        productName: 'Muscle Tank',
        price: 75,
        currency: '$',
        imgPath: img10
        
    },
    {
        productName: 'Brushed Raglan Sweatshirt',
        price: 175,
        currency: '$',
        imgPath: img4
    },
    {
        productName: 'Flex Sweatpants',
        price: 175,
        currency: '$',
        imgPath: img5
    },
    {
        productName: 'Pink Fleece Sweatpant',
        price: 195,
        currency: '$',
        imgPath: img6
    },
    {
        productName: 'Lite Sweatpant',
        price: 150,
        currency: '$',
        imgPath: img7
    },
    {
        productName: 'Imperial Alpaca Hoodie',
        price: 525,
        currency: '$',
        imgPath: img8
    },
    {
        productName: 'Flex Push Button Bomber',
        price: 225,
        currency: '$',
        imgPath: img9
    },
    {
        productName: 'Flex Sweatshirt',
        price: 195,
        currency: '$',
        imgPath: img3
    },
    {
        productName: 'Brushed Bomber',
        price: 225,
        currency: '$',
        imgPath: img11
    },
    {
        productName: 'Raglan Sweatshirt',
        price: 195,
        currency: '$',
        imgPath: img11
    },
]


const Eproduct = () => {
  return (
<>
<Wrapper>
  
  <div className="text-center mt-36">
  <p className='text-blue-700 font-bold'>PRODUCTS</p>
  <h1 className='text-3xl font-bol'>Check What We Have</h1>
  </div>
    <Swiper className='mt-10'
       slidesPerView={3}>
    {
    
      products.map((p)=>(
                     
            <SwiperSlide key={p.productName}>
         <div className='hover:scale-110 transition delay-300 duration-300 ease-in-out'>
            <div className='flex gap-1 '>
            <Image src={p.imgPath} alt={p.productName} width={380} height={400}></Image>
            </div>
            <p className='font-bold'>{p.productName}</p>
            <p className='font-bold'>{p.currency} {p.price}</p>
            </div>
            
            </SwiperSlide>
           
            
            
        )
      )  
    
    }
     </Swiper>
  </Wrapper>
    </>
  )
}

export default Eproduct;
