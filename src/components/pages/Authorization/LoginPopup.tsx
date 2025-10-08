import React from 'react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

type PopupProps = {
  onClick?: () => void
}

const LoginPopup = ({onClick}:PopupProps) => {
  return (
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]
                        bg-black/70 border-2 border-primary rounded-3xl p-6
                        flex flex-col gap-6'>
            <h1 className='text-4xl text-center text-white puzzle-img'>Login</h1>
            <form className='flex flex-col gap-4'>
                <input type="text" placeholder='Username' className='p-3 rounded-lg bg-black/50 border-2 border-primary text-white outline-none focus:border-white duration-200 placeholder:text-white placeholder:opacity-50'/>
                <input type="password" placeholder='Password' className='p-3 rounded-lg bg-black/50 border-2 border-primary text-white outline-none focus:border-white duration-200 placeholder:text-white placeholder:opacity-50'/>
                <button type='submit' className='w-full inline-block uppercase px-6 py-2 border-2 border-primary duration-200 rounded-3xl 
                 hover:shadow-[0px_0px_20px_8px_#66FFE9] puzzle-img cursor-pointer text-white'>Login</button>
            </form>
                        <div className='flex justify-center items-center space-x-6 text-textWhite'>

                            <div className='rounded-icon border-2 border-primary cursor-pointer h-[42px] w-[42px]'>
                <FaGoogle className='text-xl'/>
                </div>
<div className='rounded-icon border-2 border-primary cursor-pointer h-[42px] w-[42px]'>               
     <FaFacebookF className='text-xl'/>
                </div>
            </div>

            <div className='text-center text-white'>
                <span className='opacity-50'>Don't have an account? </span>
                <button onClick={onClick} className='text-primary hover:underline underline-offset-4 cursor-pointer'>Register</button>
            </div>


        </div>
  )
}

export default LoginPopup