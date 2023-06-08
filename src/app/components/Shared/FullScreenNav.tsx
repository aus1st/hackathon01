'use client'
import Logo from "../../../../public/Logo.webp";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";

import React, { FC, useState } from 'react'

type Props = {
    
        open: boolean,
        setOpen: any,
        productCount: number
}

const MobileNav:FC<Props> = ({open,setOpen, productCount})=> {
return (
    <div className={`absolute top-0 left-0 p-5 w-screen bg-white transform ${open? "-translate-y-0":"-translate-y-full"} transition-transform duration-300 ease-in-out filter`}>
      
     
        <div className="flex flex-col justify-center items-center mt-28">

        <a href="/" className="flex items-center">
              <Image
                src={Logo}
                width={155}
                height={35}
                alt="dine mart logo"
              ></Image>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
        
            <Link href="/Cart">
                  <div className="p-3 relative bg-gray-100 rounded-full hover:scale-125 mt-4 duration-300">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="22"
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    {/* item qty */}
                    <span className="bg-red-600 h-6 w-6  text-white text-md rounded-full text-center absolute right-1 -top-2">
                      {productCount}
                    </span>
                  </div>
                </Link>
            <Link href="/" className="text-2xl text-red-500 font-bold my-4">Home</Link>
            <Link href="/Female" className="text-2xl hover:text-red-500 font-bold my-4">Female</Link>
            <Link href="/Male" className="text-2xl hover:text-red-500 font-bold my-4">Male</Link>
            <Link href="/Kids" className="text-2xl hover:text-red-500 font-bold my-4">Kids</Link>
            <Link href="/Products" className="text-2xl hover:text-red-500 font-bold">All Products</Link>
        </div>
    </div>
)
}

const FullScreenNav:FC<{productCount: number}> = ({productCount}) => {
    const [open, setOpen] = useState(false)
  return (
    <nav className="top-0 z-10">
        <MobileNav open={open} setOpen={setOpen} productCount={productCount}/>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between ">
            <a href="/" className="flex items-center">
              <Image
                src={Logo}
                width={155}
                height={35}
                alt="dine mart logo"
              ></Image>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-14 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link href={"/"}>Home</Link>
                <Link href={"/Female"}>Female</Link>
                <Link href={"/Male"}>Male</Link>
                <Link href={"/Kids"}>Kids</Link>
                <Link href={"/Products"}>All Products</Link>

                <li>
                  <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="search"
                      name="q"
                      className="py-1 px-8 text-sm text-white rounded-md pl-10 focus:outline-none border focus:bg-white focus:text-gray-900"
                      placeholder="What are you looking for..."
                    />
                  </div>
                </li>
                <Link href="/Cart">
                <li>
                  <div className="p-3 relative bg-gray-100 rounded-full hover:scale-125 duration-300">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="22"
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    {/* item qty */}
                    <span className="bg-red-600 h-6 w-6  text-white text-md rounded-full text-center absolute right-1 -top-2">
                      {productCount}
                    </span>
                  </div>
                </li>
                </Link>
              </ul>
            </div>
          </div>

        <div className='w-11/12 flex justify-end items-center sm:hidden block '>
                <div className='group z-50  relative w-6 h-6  cursor-pointer flex-col justify-between items-center flex' onClick={()=>{setOpen(!open)}}>
                {/* hamburger  */}
                <span className={`h-1 w-full bg-black  rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open? "rotate-45 translate-y-2.5":""}`}/>
             
                <span className={`h-1 w-full bg-black  rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open? "w-0":"w-full"}`}/>
                
                <span className={`h-1 w-full bg-black  rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open? "-rotate-45 -translate-y-2.5":""}`}/>
                </div>
        </div>
    </nav>
  )
}

export default FullScreenNav
