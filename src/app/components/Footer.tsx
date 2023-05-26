import React from 'react'
import Logo from '../../../public/Logo.webp'
import Image from 'next/image'
import Wrapper from './Shared/Wrapper'
import { FaFacebook, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <Wrapper>
    <div>
      
      {/* above footer */}
        <div className='flex gap-x-24 mt-20 text-gray-500'>
            <div className='w-4/12'>
            <Image src={Logo} width={140} height={25} alt="logo"></Image>
            <p className='mt-10 text-gray-500'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>

            <ul className='flex gap-x-3 mt-5 font-black'>
                <li className='p-3 rounded-md bg-gray-100'>
                    <FaTwitter></FaTwitter>
                </li>
                <li className='p-3 rounded-md bg-gray-100'>
                    <FaFacebookF />
                </li>
                <li className='p-3 rounded-md bg-gray-100'>
                    <FaLinkedin/>
                </li>

            </ul>

            </div>


            <div className='w-2/12 '>
               <h4 className='font-bold text-lg '>Company</h4> 
                <ul className='space-y-3 font-medium mt-3'>
                    <li>About</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>How it Works</li>
                    <li>Contact Us</li>
                </ul>

            </div>
            <div className='w-2/12'> 
            <h4 className='font-bold text-lg '>Support</h4> 
                <ul className='space-y-3 font-medium mt-3'>
                    <li>Support Carrer</li>
                    <li>24h Service</li>
                    <li>Quick Chat</li>
                    
                </ul></div>
            <div className='w-2/12'> <ul className='space-y-3 font-medium mt-3'>
            <h4 className='font-bold text-lg '>Contact</h4>
                    <li>WhatsApp</li>
                    <li>24h Service</li>
                    
                    
                </ul></div>
            

        </div>

    {/* bottom */}
    </div>
    </Wrapper>

{/* copyright */}
<div className='grid grid-cols-3 border-t text-center border-black mt-10 p-4'>
<div>Copyright © 2022 Dine Market</div>
<div>Design by. <b>Weird Design Studio</b></div>
<div>Code by. <b>aus1st on github</b></div>
</div>

    </>
  )
}

export default Footer

