import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import StarsBg from '../components/UI/StarsBg'
import Navbar from '../components/UI/Navbar';
import { useDispatch } from 'react-redux';
import { setAuthToken, logout } from '../store/auth/authSlice';
import { verifyToken } from '../store/auth/authActions';

const MainLayout = () => {
const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('token');

   const validateAndSet = async () => {
    if (!accessToken) return;
    try {
      const isValid = await verifyToken(accessToken); 
      if (isValid) {
        dispatch(setAuthToken({ refreshToken, accessToken }));
      }
    }catch (error) {
      dispatch(logout());
    }

    };
    validateAndSet();
  }, [dispatch]);

  return (
    <div>
        <StarsBg/>
        <div className='z-5 container mx-auto md:px-0 px-4'>
        <Navbar/>
   <Outlet />
        </div>
    </div>
  )
}

export default MainLayout