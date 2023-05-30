// "use client";
import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import Wrapper from "./Shared/Wrapper";
import { getProductData } from "../lib/productservice";
import { IProduct } from "../lib/product";
import ProductImage from "./ProductImage";

const Eproduct = async () => {
  const products: IProduct[] = await getProductData();
  return (
    <>
      <Wrapper>
        <div className="text-center mt-36">
          <p className="text-blue-700 font-bold">PRODUCTS</p>
          <h1 className="text-3xl font-bold">Check What We Have</h1>
        </div>
        <div className="flex gap-4 sm:mt-10 mt-5">
        {/* <Swiper slidesPerView={3} className="sm:mt-10 mt-5"> */}
          {products.map((p) => (
            // <SwiperSlide key={p._id}>
              <ProductImage product={p} key={p._id}/>
            // </SwiperSlide>
          ))}
        {/* </Swiper> */}
        </div>
      </Wrapper>
      </>
     
  );
};

export default Eproduct;
