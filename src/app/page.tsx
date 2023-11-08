import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Process from './components/process/process'
import Welness from './welness/welness'
import Blogs from './components/Blogs/Blogs'




export default function Home() {
  return (
    <main className='container'>
      
   <Banner/>
   <Features/>
   <Process/>
   <Welness/>
   <Blogs/>
    </main>
  )
}
