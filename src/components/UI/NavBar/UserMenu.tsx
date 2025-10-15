import React from 'react'
import { FaUser, } from 'react-icons/fa'
import { BiSolidLogOut } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { logout } from '@/store/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className='relative inline-block group'>
         <div className='rounded-icon  border-primary border-2 cursor-pointer'>
                        <FaUser />
                    </div>
                    <div className='absolute right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button   onClick={handleLogout} className='rounded-icon border-primary border-2 cursor-pointer text-6xl p-[4px] '>
                    <BiSolidLogOut />
                    </button >
                    </div>
                    </div>
  )
}

export default UserMenu