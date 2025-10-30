import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import StarsBg from '@/components/UI/StarsBg';
import Navbar from '@/components/UI/NavBar/NavBar';
import { setAuthToken } from '@/store/auth/authSlice';
import { getUserProfile } from '@/store/userProfile/userProfileActions';
import { useAppDispatch } from '@/hooks/hooks';

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const hideNavbarPaths = ['/notes'];
  const shouldHideNavbar = hideNavbarPaths.some(path =>
    location.pathname.startsWith(path),
  );

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('token');

    if (!refreshToken) return;
    dispatch(setAuthToken({ accessToken, refreshToken }));

    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div>
      <StarsBg />
      <div className="z-5 relative md:px-0 px-4">
        {!shouldHideNavbar && <Navbar />}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
