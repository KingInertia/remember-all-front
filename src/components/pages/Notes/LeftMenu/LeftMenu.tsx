import React from 'react'
import bookImg from '@/assets/images/book-img3.png'
import { useNavigate } from 'react-router-dom';

const LeftMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto h-full flex flex-col gap-4">
  <div className="flex flex-col gap-8 items-center ">
    <div>
      <img onClick={()=>navigate('/')} src={bookImg} alt="" className='md:w-[100px] w-[80px] rounded-xl opacity-95'/>
    </div>
  </div>

  <div className="rounded-4xl border-2 border-primary/90 bg-blockNoteMenu/75">
    Блок 1
  </div>
  <div className="rounded-4xl border-2 border-primary/90 bg-blockNoteMenu/75">
    Блок 1
  </div>
  <div className="flex-1 rounded-4xl border-2 border-primary/90 bg-blockNoteMenu/75">
    Блок 2
  </div>
</div>

  )
}

export default LeftMenu