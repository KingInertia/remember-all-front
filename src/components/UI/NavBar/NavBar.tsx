import Kniga from '@/assets/images/book-img3.png'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';
import { selectIsAuntificated } from '@/store/auth/authSelector';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';


const NavMenu = [
  { id: 1, title: "Home", link: "" },
  { id: 2, title: "About", link: "about" },
  { id: 3, title: "Guide", link: "guide" },
];

const NavBar = () => {
  const navigate = useNavigate()
    const isAuntificated = useSelector(selectIsAuntificated)

  return (
      <div  className='relative container mx-auto'>
        <div  className='absolute top-0 left-0 w-full z-20 md-pt-10 pt-4'>
            <div className='container'>
            <div className='grid grid-cols-3 items-center'>
                {/* logo */}
                <div>
                    <img onClick={()=>navigate('/')} src={Kniga} alt="" className='md:w-[100px] w-[80px] rounded-xl opacity-95'/>
                </div>
                {/* NavMenu */}
                <div className='hidden  md:block text-textWhite text-lg '>
                <ul className='flex gap-8 justify-center '>
                    {NavMenu.map((item) => (
                        <li key={item.id}>
                            <Button className='uppercase px-6 py-2 font-medium' onClick={() => {navigate(`/${item.link}`)}}>{item.title}</Button>
                            </li>
                    ))
                    }
                    {isAuntificated && (<li>
                        <Button className='uppercase px-6 py-2 font-medium' onClick={() => {navigate('/notes')}} >MY NOTES</Button>
                    </li>) }
                </ul>
                </div>

                {/* Hamburger menu */}
                <div className='text-textWhite text-lg flex gap-6 justify-end items-center'>
                    <UserMenu isAuntificated={isAuntificated}/>
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