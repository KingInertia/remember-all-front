import { FaUser } from 'react-icons/fa'
import { BiSolidLogOut, BiSolidLogIn } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { logout } from '@/store/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const UserMenu = ({isAuntificated}: {isAuntificated: boolean}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className='relative inline-block group'>
         {isAuntificated ? (<button className='rounded-icon  border-primary border-2 cursor-pointer'>
                        <FaUser />
                    </button>):
                    (<div className='flex items-center'>
                    <Button className='px-4 mr-4 py-1.5 text-sm font-medium' onClick={() => navigate("/auth")} >
                        Sing in
                    </Button>
                        <Button className='px-4 py-1.5 text-sm font-medium' onClick={() => navigate("/auth")} >
                        Sing up
                    </Button>

                    </div>
                    )}
                    {isAuntificated && (<div className='absolute right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400'>
                    <button   onClick={handleLogout} className='rounded-icon border-primary border-2 cursor-pointer p-[4px] '>
                    <BiSolidLogOut />
                    </button >
                    </div>)}
                    </div>
  )
}

export default UserMenu