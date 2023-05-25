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
        <div className="flex mt-5 gap-x-5">
          <div className="w-9/12 flex-row">
            <div className="bg-gray-300 flex justify-around items-center">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold">GET UPTO 60%</h3>
                <p className="mt-3">For the summer season</p>
              </div>
              <div>
                <Image src={event1} alt="promotion image"></Image>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col space-y-5 text-white p-5   text-center mt-3 items-center">
              <h3 className="text-3xl font-bold mt-3">GET 30% Off</h3>
              <p className="">USE PROMO CODE</p>
              <button className="bg-gray-600 w-72 py-3 rounded-md">
                DINE WEEKEND SALE
              </button>
            </div>
          </div>
          <div className="w-3/12 flex">
            <div className="bg-[#efe1c7]">
              <Image src={event2} alt="promotion2 image"></Image>
            </div>
          </div>
          <div className="bg-gray-200">
              <Image src={event3} alt="promotion3 image"></Image>
            </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Promotions;
