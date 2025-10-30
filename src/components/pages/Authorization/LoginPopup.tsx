import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import LOADINGSTATES from '../../../constans/LoadingStates';
import { loginUser } from '../../../store/auth/authActions';
import { setAuthToken } from '../../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { selectAccessToken } from '../../../store/auth/authSelector';

type PopupProps = {
  onClick: () => void;
};

const LoginPopup = ({ onClick }: PopupProps) => {
  const dispatch = useDispatch();
  const [loadingState, setLoadingState] = useState(LOADINGSTATES.IDLE);
  const navigate = useNavigate();
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get('username') as string | null;
    const password = data.get('password') as string | null;
    if (!username || !password) {
      return;
    }

    setLoadingState(LOADINGSTATES.LOADING);

    try {
      const data = await loginUser({ username: username, password: password });
      const { access, refresh } = data;
      dispatch(setAuthToken({ accessToken: access, refreshToken: refresh }));
      navigate('/');
    } catch (error) {
      setLoadingState(LOADINGSTATES.IDLE);
    }
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]
                        bg-black/70 border-2 border-primary rounded-3xl p-6
                        flex flex-col gap-6"
    >
      <h1 className="text-4xl text-center text-white puzzle-img">Login</h1>
      {loadingState != LOADINGSTATES.LOADING ? (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Login"
            className="p-3 rounded-lg bg-black/50 border-2 border-primary text-white outline-none focus:border-white duration-200 placeholder:text-white placeholder:opacity-50"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-black/50 border-2 border-primary text-white outline-none focus:border-white duration-200 placeholder:text-white placeholder:opacity-50"
          />
          <button
            type="submit"
            className="w-full inline-block uppercase px-6 py-2 border-2 border-primary duration-200 rounded-3xl 
                 hover:shadow-[0px_0px_20px_8px_#66FFE9] puzzle-img cursor-pointer text-white"
          >
            Login
          </button>
        </form>
      ) : (
        <h1 className="text-center text-white">Loading...</h1>
      )}
      <div className="flex justify-center items-center space-x-6 text-textWhite">
        <div className="rounded-icon border-2 border-primary cursor-pointer h-[42px] w-[42px]">
          <FaGoogle className="text-xl" />
        </div>
        <div className="rounded-icon border-2 border-primary cursor-pointer h-[42px] w-[42px]">
          <FaFacebookF className="text-xl" />
        </div>
      </div>

      <div className="text-center text-white">
        <span className="opacity-50">Don't have an account? </span>
        <button
          onClick={onClick}
          className="text-primary hover:underline underline-offset-4 cursor-pointer"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
