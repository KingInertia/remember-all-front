import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../store/auth/authSelector';

const PrivateRouter = () => {
  const token = useSelector(selectAccessToken);
  const storedToken = localStorage.getItem("token");

  if (!token && storedToken) {
    return <h1>Loading...</h1>;
  }
    if (token) {
        return <Outlet />;
    }
    return <Navigate to="/login" replace/>;
}

export default PrivateRouter