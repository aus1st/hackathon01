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
    heading: "Modern Fashion Design",
    content: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    heading: "100% Handmade Products",
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
    <section>    <Wrapper>
      <div className="flex gap-20 mt-10 items-center">
        {/* left */}
        <div className="relative grid grid-rows-4 w-5/12 gap-y-3 grid-flow-col">
          {data.map((d) => (
            <>
              <h3 className="font-bold" key={d.heading}>
                {d.heading}
              </h3>
              <span>{d.content}</span>
            </>
          ))}
        </div>
        <div className="absolute text-[100px] text-gray-100 leading-[100px] whitespace-pre-line -z-10 font-bold ">{backgroundText}</div>
        {/* right */}
        <div className="flex gap-8 w-7/12 items-center">
          {/* image */}
          <Image src={featureImg} width={350} height={300} alt="feature Image"></Image>
          {/* content */}
          <div>
            <p>
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
