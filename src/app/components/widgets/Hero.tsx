import React from 'react'
import Wrapper from '../Shared/Wrapper'
import hero from '../../assets/images/hero.webp'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
        <Wrapper>
      {/* left side */}
      <div className="flex items-center">



      {/* right side  */}
<div>
    <div className="relative">
    <Image src={hero} alt="hero image" className="absolute"></Image>
    </div>
    
    
</div>
      </div>
      
      </Wrapper>
    </section>
  )
}

export default Hero
