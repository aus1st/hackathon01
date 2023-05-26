import Image from 'next/image'
import Hero from './components/widgets/Hero'
import Promotions from './components/Promotions'
import Wrapper from './components/Shared/Wrapper'
import Eproduct from './components/Eproduct'
import Jewellry from './components/Jewellry'
import Different from './components/Different'
import NewsLetter from './components/NewsLetter'

export default function Home() {
  return (
    
    <>

    <Hero/>
    <Promotions/>
    <Eproduct/>
    <Jewellry/>
<Different/>
<NewsLetter/>
    </>
  )
}
