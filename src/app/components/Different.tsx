import React from "react";
import Wrapper from "./Shared/Wrapper";
import featureImg from "../assets/images/feature.webp";
import Image from "next/image";

const data = [
  {
    heading: "Using Good Quality Materials",
    content: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    heading: "100% Handmade Products",
    content: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    heading: "Modern Fashion Design",
    content: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  
  {
    heading: "Discount for Bulk Orders",
    content: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
];

const Different = () => {
    const backgroundText = "Different \nfrom \nothers"
  return (
    <section>    
      <Wrapper>
      <div className="flex sm:flex-row flex-col gap-20 mt-10 items-center">
        {/* left */}
        <div className="relative grid grid-cols-2 sm:gap-12 gap-10 content-center  sm:w-5/12 w-full gap-y-10 sm:gap-y-16 ">
          {data.map((d) => (
            <div key={d.heading}>
              <h3 className="sm:text-xl text-md font-semibold" key={d.heading}>
                {d.heading}
              </h3>
            <div className="mt-5">
              <span >{d.content}</span>
              </div>
            </div>
            
          ))}
        </div>
        <div className="absolute sm:text-[100px] text-[80px] 
                      text-gray-100 sm:leading-[100px] 
        whitespace-pre-line -z-10 font-bold ">
          {backgroundText}
          </div>
        {/* right */}
        <div className="flex gap-8 sm:w-7/12 w-full sm:flex-row flex-col items-center">
          {/* image */}
          <Image src={featureImg} width={350} height={300} alt="feature Image" className="sm:w-[430px] sm:h-[380px] w-[330px] h-[360px]"></Image>
          {/* content */}
          <div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              culpa autem officia repellat consectetur voluptates facilis, quia
              dolorum numquam praesentium quis distinctio deserunt eius pariatur
              repudiandae quaerat repellendus, nobis mollitia?
            </p>
            <button className="bg-black text-white py-2 px-4 font-semibold mt-10">See All Products</button>
          </div>
          
        </div>
      </div>
    </Wrapper>
    </section>

  );
};

export default Different;
