import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import StarsBg from '@/components/UI/StarsBg'
import Navbar from '@/components/UI/Navbar';
import { useDispatch } from 'react-redux';
import { setAuthToken, logout} from '@/store/auth/authSlice';
import { verifyToken } from '@/store/auth/authActions';

const MainLayout = () => {
const dispatch = useDispatch();
const location = useLocation();
const hideNavbarPaths = ['/notes'];
const shouldHideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path));

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('token');

    if (refreshToken && accessToken) {
      dispatch(setAuthToken({ accessToken, refreshToken }));
    }

  }, [dispatch]);

  return (
    <div>
        <StarsBg/>
        <div className='z-5 relative md:px-0 px-4'>
        {!shouldHideNavbar && <Navbar/>}
   <Outlet />
        </div>
    </div>
  )
}

export default MainLayout