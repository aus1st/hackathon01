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
          <h3 className="sm:text-3xl text-2xl font-bold mt-2">Our Promotions Events</h3>
        </div>

        {/* Promotions */}
        <div className="flex sm:flex-row flex-col mt-5 items-center gap-x-10">

          {/* left side */}
          <div className="sm:w-6/12 w-full">
            {/* card1 */}
            <div className="bg-gray-300 flex sm:flex-row flex-col justify-center items-center">
              <div className="text-center">
                <h3 className="text-xl sm:text-3xl mt-2 font-bold">
                  GET UPTO <b>60%</b>
                </h3>
                {/* <span className="text-5xl font-bold">60%</span> */}
                <p className="mt-1 text-lg">For the summer season</p>
              </div>
              <div className="sm:scale-100  scale-75">
                <Image src={event1} alt="promotion image"></Image>
              </div>
            </div>

            {/* card2 */}
            <div className="bg-gray-900 flex flex-col space-y-5 text-white p-5  text-center mt-3 items-center">
              <h3 className="text-3xl font-bold mt-3">GET 30% Off</h3>
              <p className="">USE PROMO CODE</p>
              <button className="bg-gray-600 sm:w-48 sm:py-3 py-3 px-5 rounded-md">
                DINEWEEKENDSALE
              </button>
            </div>
            </div>

          {/* right side */}
              
          <div className="sm:w-6/12 w-full flex sm:flex-row flex-col sm:gap-x-3 gap-y-3 justify-center items-center">

          {/* `<div className="items-center flex sm:flex-row mt-3 flex-col gap-3"> */}
`
          
            {/* card1 */}
            <div className="bg-[#efe1c7] w-full sm:w-6/12">
              <div className="flex flex-col p-3">
                <div>
                  <p>Flex Sweatshirt</p>
                </div>
                <div className="flex gap-x-3">
                  <p className="line-through">$100.00 </p>
                  <span className="font-bold">$75.00</span>
                </div>
              </div>
              <div className="sm:ml-0 ml-10">
              <Image src={event2} alt="promotion2 image"></Image>
              </div>
            </div>

          {/* card2 */}
            <div className="bg-gray-200 w-full sm:w-6/12">
              <div className="flex flex-col p-3">
                <div>
                  <p>Flex Push Button Bomber</p>
                </div>
                <div className="flex gap-x-3">
                  <p className="line-through">$225.00 </p>
                  <span className="font-bold">$190.00</span>
                </div>
              </div>
              <div className="sm:ml-0 ml-10">
              <Image src={event3} alt="promotion3 image"></Image>
              </div>
            </div>
          </div>
          {/* </div> */}

        </div>
      </Wrapper>
    </section>
  );
};

export default Promotions;
