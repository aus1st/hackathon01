import Image from 'next/image'
import Hero from './components/widgets/Hero'
import Promotions from './components/Promotions'
import Wrapper from './components/Shared/Wrapper'
import Eproduct from './components/Eproduct'

export default function Home() {
  return (
    
    <>
    <Wrapper>
    <Hero/>
    <Promotions/>

    <Eproduct/>
    </Wrapper>
    </>
  )
}
