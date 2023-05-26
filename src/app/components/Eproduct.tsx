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
        productName: 'Flex Sweatshirt',
        price: 195,
        currency: '$',
        imgPath: img3
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
        productName: 'Muscle Tank',
        price: 75,
        currency: '$',
        imgPath: img10
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
    <Swiper
    spaceBetween={5}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {
    
      products.map((p)=>{
        return (
            <SwiperSlide key={p.productName}>
            <div className='flex'>
            <Image src={p.imgPath} alt={p.productName}></Image>
            </div>
            <p className='font-bold'>{p.productName}</p>
            <p className='font-bold'>{p.currency} {p.price}</p>
            
            </SwiperSlide>
        )
      })  
    
    }
  </Swiper>
    </>
  )
}

export default Eproduct;
