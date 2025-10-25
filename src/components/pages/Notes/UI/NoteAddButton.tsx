import { IoIosAdd } from "react-icons/io";
import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { createNewNote } from "@/store/notes/notesActions";
import LOADINGSTATES from "@/constans/LoadingStates";
import { selectNoteStatus } from "@/store/notes/notesSelector";

const NoteAddButton = () => {
  const [openCreating, setOpenCreating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('');
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectNoteStatus)

    useEffect(() => {
    if (openCreating) {
      inputRef.current?.focus();
    }
  }, [openCreating]);

  const handleCreate = async () => {
    await dispatch(createNewNote(text))
  };

  const handleCancel = () => {
    setOpenCreating(false)
    setText('')
  }

  return (
    <div className={`text-textWhite  border-2 border-primary rounded-3xl
                  px-4 py-1 flex items-center justify-center
                  h-[46px]
                  transition-all duration-250 ease-in-out overflow-hidden
                 ${openCreating ? "w-[430px]" : "w-[150px] hover:shadow-[0px_0px_20px_8px_#66FFE9] cursor-pointer"}
      `}>
    {!openCreating ? 
    (
      <button onClick={()=> {
      setOpenCreating(true);
    } } className='text-base font-medium'>
      <div className='flex items-center justify-center space-x-2 '>
        <p>New Note</p>
         <IoIosAdd className='text-3xl'/> 
         </div> 
         </button>
         ) :
         (<div className='flex items-center justify-between w-full space-x-4'>
            <input type="text"
             
            value={text}
            ref={inputRef}
            onChange={(e) => setText(e.target.value)}
            placeholder={status != LOADINGSTATES.LOADING ? 'Note title': 'Creating new note...'} 
            className="font-medium bg-transparent outline-none  placeholder:text-gray-400 text-textBoxWhite flex-1 border-b-2 border-primary/60"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCreate();
              if (e.key === 'Escape') handleCancel();
            }}
            disabled={status != LOADINGSTATES.LOADING ? false: true}
            />

             <div className='flex items-center space-x-2'>
            <button
              onClick={handleCreate}
              className='px-4 py-1 text-sm font-medium rounded-2xl bg-primary/60 hover:bg-primary/45 hover:text-textWhite/85 duration-200'
              disabled={status != LOADINGSTATES.LOADING ? false: true}
            >
              Create
            </button>

            <button
              onClick={handleCancel}
              className='px-4 py-1 text-sm font-medium rounded-2xl bg-neonRed/60 hover:bg-neonRed/45 hover:text-textWhite/85 duration-200 '
              disabled={status != LOADINGSTATES.LOADING ? false: true}
            >
              Cancel
            </button>
          </div>

         </div>)}
    
    </div>
  )
}

export default NoteAddButton