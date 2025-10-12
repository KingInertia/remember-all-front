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
      <h1 className='opacity-95 uppercase font-bold text-6xl  text-center '>Your memory <br /> organized</h1>
      <div className='mt-12  bg-secondary/75 border-2 border-primary rounded-xl p-4'>
        <h1 className="text-2xl uppercase">Vehicle features</h1>
        <p className='text-xl leading-loose'>
          text-text-text text-text-text text-text-text text-text-text
                    text-text-text text-text-text text-text-text text-text-text
                    text-text-text text-text-text text-text-text text-text-text
                    text-text-text text-text-text text-text-text text-text-text
                    text-text-text text-text-text text-text-text text-text-text
                       text-text-text text-text-text text-text-text text-text-text
                    text-text-text text-text-text text-text-text text-text-text
                    text-text-text text-text-text text-text-text text-text-text
        </p>
      </div>
      </div>
     </div>
 {/* image */}
 <div className='relative'>
   <img src={BookImg} alt="" className='opacity-82 w-full relative z-5 md:scale-125 mb-18'/>

<Button onClick={()=> navigate('/auth')} className='absolute bottom-1/7 left-1/2 -translate-x-1/2 text-xl font-medium rounded-xl z-10'><div className='flex items-center space-x-3'><p>Explore</p> <FaArrowRight /> </div></Button>
 
 </div>
        </div>
      </div>
    </div>
  )
}

export default Hero