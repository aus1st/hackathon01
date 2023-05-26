import React from "react";
import Wrapper from "./Shared/Wrapper";
import event1 from "../assets/images/event1.webp";
import event2 from "../assets/images/event2.webp";
import event3 from "../assets/images/event3.webp";
import even14 from "../assets/images/event4.webp";
import Image from "next/image";

const Promotions = () => {
  return (
    <section>
      <Wrapper>
        <div className="text-center">
          <p className="text-blue-700 font-medium mt-20">PROMOTIONS</p>
          <h3 className="text-3xl font-bold mt-2">Our Promotions Events</h3>
        </div>

        {/* Promotions */}
        <div className="flex mt-5 justify-center gap-x-3">
          <div className="w-6/12 flex-row">
            <div className="bg-gray-300 flex justify-around items-center">
              <div className="flex flex-col ml-4">
                <h3 className="text-3xl font-bold">GET UPTO </h3>
                <span className="text-5xl font-bold">60%</span>
                 <p className="mt-1">For the summer season</p>
              </div>
              <div>
                <Image src={event1} alt="promotion image"></Image>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col space-y-5 text-white p-5   text-center mt-3 items-center">
              <h3 className="text-3xl font-bold mt-3">GET 30% Off</h3>
              <p className="">USE PROMO CODE</p>
              <button className="bg-gray-600 w-72 py-3 rounded-md">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          <div className="w-6/12 flex gap-3 justify-center">
            <div className="bg-[#efe1c7]">

            <div className="flex flex-col p-3">
              <div>
                <p>Flex Sweatshirt</p>
              </div>
              <div className="flex gap-x-3">
                <p className="line-through">$100.00 </p>
                <span className="font-bold">$75.00</span>
              </div>
             
              </div>
              <Image src={event2} alt="promotion2 image"></Image>
            </div>
            <div className="bg-gray-200">

            <div className="flex flex-col p-3">
              <div>
                <p>Flex Push Button Bomber</p>
              </div>
              <div className="flex gap-x-3">
                <p className="line-through">$225.00 </p>
                <span className="font-bold">$190.00</span>
              </div>
              
             
              </div>
              <Image src={event3} alt="promotion3 image"></Image>
            </div>
          </div>
          
        </div>
      </Wrapper>
    </section>
  );
};

export default Promotions;
