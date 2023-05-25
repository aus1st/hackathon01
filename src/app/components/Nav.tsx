import React from 'react'
import Wrapper from './Shared/Wrapper'
import Logo from '../../../public/Logo.webp'
import Image from 'next/image'
import {  FaCartPlus } from "react-icons/fa";

const Nav = () => {
  return (
    <header className='top-0 z-10 sticky'>
      <Wrapper>
        <div className='flex p-5 mt-3 justify-around items-center'>
        <div>
            <Image src={Logo} alt="dine mart logo"></Image>
        </div>

        <ul className='flex space-x-10 font-medium items-center'>
            <li>Female</li>
            <li>Male</li>
            <li>Kids</li>
            <li>All Products</li>
            <li>
            <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="py-2 text-sm text-white rounded-md pl-10 focus:outline-none outline-dotted focus:bg-white focus:text-gray-900" placeholder="Search..." />
        </div>
            </li>
            <li>
                <div className="p-3 relative bg-gray-100 rounded-full hover:scale-125 duration-300">
                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z" fill="currentColor"></path><path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" fill="currentColor"></path><path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="currentColor"></path></svg>
                <span className='bg-red-600 text-white rounded-full shrink-0 absolute right-2 -top-2'>0</span>
                </div>
         
            </li>
        </ul>
        </div>
        
      </Wrapper>
    </header>
  )
}

export default Nav
