import Kniga from '@/assets/images/book-img3.png'
import { FaUser } from "react-icons/fa";
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { selectAccessToken } from '@/store/auth/authSelector';
import { useSelector } from 'react-redux';


const NavMenu = [
  { id: 1, title: "Home", link: "" },
  { id: 2, title: "About", link: "about" },
  { id: 3, title: "Guide", link: "guide" },
];

const NavBar = () => {
  const navigate = useNavigate()
    const accessToken = useSelector(selectAccessToken)

  return (
      <div  className='relative container mx-auto'>
        <div  className='absolute top-0 left-0 w-full z-20 md-pt-10 pt-4'>
            <div className='container'>
            <div className='flex justify-between items-center'>
                {/* logo */}
                <div>
                    <img onClick={()=>navigate('/')} src={Kniga} alt="" className='md:w-[100px] w-[80px] rounded-xl opacity-95'/>
                </div>
                {/* NavMenu */}
                <div className='hidden  md:block text-textWhite text-lg'>
                <ul className='flex gap-8'>
                    {NavMenu.map((item) => (
                        <li key={item.id}>
                            <Button onClick={() => {navigate(`/${item.link}`)}}>{item.title}</Button>
                            </li>
                    ))
                    }
                    {accessToken && (<li>
                        <Button onClick={() => {navigate('/notes')}} >MY NOTES</Button>
                    </li>) }
                </ul>
                </div>

                {/* Hamburger menu */}
                <div className='text-textWhite text-lg flex gap-6'>
                    <div className='rounded-icon  border-primary border-2 cursor-pointer'>
                        <FaUser />
                    </div>
                    <div className='rounded-icon border-2 border-primary cursor-pointer'>
                        <h1 className=' text-xs font-bold'>EN</h1>
                    </div>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default NavBar