import React from "react";
import Wrapper from "../Shared/Wrapper";
import hero from "../../assets/images/hero.webp";
import Image from "next/image";
import feature1 from '../../assets/images/Featured1.webp'
import feature2 from '../../assets/images/Featured2.webp'
import feature3 from '../../assets/images/Featured3.webp'
import feature4  from '../../assets/images/Featured4.webp'

const Hero = () => {
  const heading = "An Industrial Take \non Streetware";
  const p = "Anyone can beat you but no one can beat your \noutfit as long as you wear Dine outfits."
  return (
    <section>
      <Wrapper>
        {/* left side */}
        <div className="flex items-center justify-between ml-5">

          <div className="flex-1">
          <div className="bg-blue-100 w-28 py-2 font-sans px-4 rounded-md text-lg text-blue-600 font-bold">
            Sale 70%
          </div>
          <h1 className="sm:text-6xl text-5xl leading-[1] mt-10 font-bold font-sora sm:whitespace-pre-line">{heading}</h1>
          
          <p className="sm:mt-16 mt-10 sm:font-medium text-sm text-gray-500 sm:whitespace-pre-line">{p}</p>
          
          
          <button className="bg-black text-white flex gap-2 mt-10 sm:py-5 sm:px-5 py-3 px-6 items-center p-3 sm:text-lg text-sm font-semibold">
          <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="26" width="26 " xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z" fill="currentColor"></path><path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" fill="currentColor"></path><path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="currentColor"></path></svg>
            Start Shopping
          </button>
       
       {/* features  */}
          {/* <div className="flex sm:flex-row flex-wrap gap-8 sm:mt-40 mt-20"> */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:mt-40 mt-10">
          <Image src={feature1} alt="feature1 logo"></Image>
          <Image src={feature2} alt="feature2 logo"></Image>
          <Image src={feature3} alt="feature3 logo"></Image>
          <Image src={feature4} alt="feature4 logo"></Image>
          </div>
          </div>
       

          
          {/* right side  */}
          <div className="relative flex-1 hidden sm:block">
            <div className="py-72 px-72 right-18 top-[50px] -z-10 absolute rounded-full bg-[#ffece3]">
             
            </div>
            <div>
                <Image src={hero} className="w-650 mt-14 " alt="hero image" ></Image>
              </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
