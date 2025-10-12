import React from 'react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import LOADINGSTATES from '../../../constans/LoadingStates'
import { useState } from 'react'
import { registerUser } from '../../../store/auth/authActions'


type PopupProps = {
  onClick: () => void
}

const RegistrationPopup = ({onClick}:PopupProps) => {
  const [loadingState, setLoadingState] = useState(LOADINGSTATES.IDLE);

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
    const data = new FormData(event.currentTarget);
    const login = data.get('login') as string | null;
    const email = data.get('email') as string | null;
    const password = data.get('password') as string | null;
    const confirmPassword = data.get('confirmPassword');

  if (!login || !email || !password || !confirmPassword) {
      return;
    }

    if (!validateEmail(email)) {
      return;
    }

    if (!validatePassword(password)) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    setLoadingState(LOADINGSTATES.LOADING);
    try {
    await registerUser({ username: login, email: email, password: password });
      setLoadingState(LOADINGSTATES.SUCCESS);
      onClick();
    } catch (error) {
      setLoadingState(LOADINGSTATES.IDLE);
  
    }

  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_-])[A-Za-z\d!@#$%^&*_-]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]
                        bg-black/70 border-2 border-primary rounded-3xl p-6
                        flex flex-col gap-6'>
            <h1 className='text-4xl text-center text-textWhite puzzle-img'>Registration</h1>
                          <div className='flex justify-center items-center space-x-6 '>
            
                                        <div className='rounded-icon border-2 border-primary cursor-pointer h-[42px] w-[42px]'>
                            <FaGoogle className='text-xl'/>
                            </div>
            <div className='rounded-icon border-2 border-primary cursor-pointer h-[42px] w-[42px]'>               
                 <FaFacebookF className='text-xl'/>
                            </div>
                        </div>
           {loadingState === LOADINGSTATES.SUCCESS ? (<h1>Succes</h1>) : (<form onSubmit={handleSubmit} className='flex flex-col gap-4 text-textWhite'>
                <input name='login' id='login' placeholder='Username' className='p-3 rounded-lg bg-black/50 border-2 border-primary  outline-none focus:border-white duration-200 placeholder:text-textWhite placeholder:opacity-50'/>
                <input name='email' id='email' placeholder='Email' className='p-3 rounded-lg bg-black/50 border-2 border-primary  outline-none focus:border-white duration-200 placeholder:text-textWhite placeholder:opacity-50'/>
                <input name='password' id='password' type="password" placeholder='Password' className='p-3 rounded-lg bg-black/50 border-2 border-primary  outline-none focus:border-white duration-200 placeholder:text-textWhite placeholder:opacity-50'/>
                <input name='confirmPassword' id='confirmPassword' type="password" placeholder='Confirm Password' className='p-3 rounded-lg bg-black/50 border-2 border-primary  outline-none focus:border-white duration-200 placeholder:text-textWhite placeholder:opacity-50'/>
                <button type='submit' className='w-full inline-block uppercase px-6 py-2 border-2 border-primary duration-200 rounded-3xl 
                 hover:shadow-[0px_0px_20px_8px_#66FFE9] puzzle-img cursor-pointer text-white'>Register</button>
            </form>)} 
            {loadingState === LOADINGSTATES.LOADING && (<div className='text-center text-textWhite'>Loading...</div>)}
            <div className='text-center text-textWhite'>
                <span className='opacity-50'>Already have an account? </span>
                <button onClick={onClick} className='text-primary hover:underline underline-offset-4 cursor-pointer'>Login</button>
            </div>

        </div>
  )
}

export default RegistrationPopup