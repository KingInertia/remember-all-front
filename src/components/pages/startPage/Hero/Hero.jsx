import React from 'react'
import Particles from 'react-tsparticles'
import Button from '../../../UI/Button'
import BookImg from '../../../../assets/images/book-img.png'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
const navigate = useNavigate()

  return (
    <div>
      <div className='container mx-auto '>
        <div className='text-textWhite grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center min-h-[900px]'>

     {/* text block */}
     <div className=" relative">
      <div className='space-y-8 pt-16'>
      <h1 className=' uppercase font-bold text-7xl'>Remember All</h1>
      <h1 className='opacity-95 uppercase font-bold text-6xl  text-center '>Your memory <br /> is organized</h1>
      <div className='mt-12  bg-secondary/75 border-2 border-primary rounded-xl p-4'>
        <h1 className="text-2xl uppercase">Your Second Brain</h1>
        <p className='text-xl leading-loose'>
           Your thoughts aren’t chaos — they’re a system.
Each note has its place, its links, its meaning.
Here, memory becomes a tool for thinking,
and notes form a living network of ideas.
Write, connect, return — and truly remember all.
Your second brain starts here.
Every connection strengthens your understanding.
Every note brings you closer to clarity.
Knowledge doesn’t fade — it evolves.
Capture it, organize it, and let it grow with you.
        </p>
      </div>
      </div>
     </div>
 {/* image */}
 <div className='relative'>
   <img src={BookImg} alt="" className='opacity-82 w-full relative z-5 md:scale-125 mb-18'/>

<Button onClick={()=> navigate('/auth')} className='px-6 py-2 absolute bottom-1/7 left-1/2 -translate-x-1/2 text-xl font-medium rounded-xl z-10'><div className='flex items-center space-x-3'><p>Explore</p> <FaArrowRight /> </div></Button>
 
 </div>
        </div>
      </div>
    </div>
  )
}

export default Hero