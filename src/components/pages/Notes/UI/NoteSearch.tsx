import { useState, useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";

const NoteSearch = () => {
  const [text, setText] = useState('');
  

  return (
    <div className=" h-[46px] flex-1 text-textBlockWhite rounded-4xl border-2 border-primary/90 px-4 py-1 flex items-center justify-center">
<div className='flex items-center justify-between w-full space-x-4'>
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Search note...'
            className="font-medium bg-transparent outline-none  placeholder:text-gray-400 text-textBoxWhite flex-1 border-b-2 border-primary/60"
            
            />
            <button
                onClick={()=> {}}
                className="ml-auto text-[16px] text-textWhite "
              >
                <FaSearch />
              </button>
            </div>
            </div>
  )
}

export default NoteSearch