import { use, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import StarsBg from '../components/UI/StarsBg'
import Navbar from '../components/UI/Navbar';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../store/auth/authSlice';

const MainLayout = () => {
const dispatch = useDispatch();

useEffect(() => {
const refreshToken = localStorage.getItem('refreshToken');
const accessToken = localStorage.getItem('accessToken');

if (refreshToken) {
  const checkAuth = async () => {
    dispatch(setAuthToken({ refreshToken, accessToken }));
  }
 checkAuth(); 
}
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