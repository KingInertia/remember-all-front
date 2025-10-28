import React from 'react'
import { useState, useRef, useEffect } from 'react';
import LOADINGSTATES from '@/constans/LoadingStates';
import { changeNote } from '@/store/notes/notesActions';
import { useAppSelector } from "@/hooks/hooks";
import { selectNoteStatus } from "@/store/notes/notesSelector";
import { CiEdit } from "react-icons/ci";


type NoteProps = {
    noteId: number;
  noteTitle: string;
}

const NoteTitle = ({noteId, noteTitle}: NoteProps) => {
    const [editMode, setEditMode] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const status = useAppSelector(selectNoteStatus)
    const [text, setText] = useState(noteTitle);

    useEffect(() => {
  setText(noteTitle);
}, [noteTitle]);

    useEffect(() => {
        if (editMode) {
          inputRef.current?.focus();
        }
      }, [editMode]);

  const handleChangeTitle = async () => {
    try{
        await changeNote({id:noteId, title: text})
    }
    catch(e){
    }

    if(status == LOADINGSTATES.SUCCESS)
        setEditMode(false)
  };
  
    const handleCancel = () => {
    setEditMode(false)
    setText(noteTitle)
  }

  return (
    <div className={`  border-2 border-primary/90 rounded-3xl bg-secondary/90
                  px-4 py-1 flex items-center justify-center
                  h-[46px] 
                  transition-all duration-250 ease-in-out overflow-hidden
                 ${editMode ? "w-[430px]" : "w-[300px] "}
      `}>
        {
        editMode ?
        (<div className='flex items-center justify-between w-full space-x-4 text-textBoxWhite'>
                    <input type="text"
                    value={text }
                    ref={inputRef}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={status != LOADINGSTATES.LOADING ? 'Note title': 'Creating new note...'} 
                    className="font-medium bg-transparent outline-none w-full  placeholder:text-gray-400 text-textBoxWhite  border-b-2 border-primary/60"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleChangeTitle();
                      if (e.key === 'Escape') handleCancel();
                    }}
                    disabled={!editMode || status == LOADINGSTATES.LOADING}
                    />
        
                     <div className='flex items-center space-x-2'>
                    <button
                      onClick={editMode ? handleChangeTitle : handleCancel}
                      className='px-4 py-1 text-sm font-medium rounded-2xl bg-primary/60 hover:bg-primary/45 hover:text-textWhite/85 duration-200'
                      disabled={status != LOADINGSTATES.LOADING ? false: true}
                    >
                      Save
                    </button>
                      <button
              onClick={handleCancel}
              className='px-4 py-1 text-sm font-medium rounded-2xl bg-neonRed/60 hover:bg-neonRed/45 hover:text-textWhite/85 duration-200 '
              disabled={status != LOADINGSTATES.LOADING ? false: true}
            >
              Cancel
            </button>
                  </div>
                    
                 </div>)
                :
                (<div className="relative flex items-center flex-1">
  <div className="absolute left-1/2 -translate-x-1/2 text-lg font-medium text-center text-textOrange">
    {text}
  </div>
    <button
    onClick={() => setEditMode(true)}
    className="ml-auto text-[26px] text-textWhite hover:text-primary/90 transition-colors"
  >
    <CiEdit />
  </button>
</div>   
            ) 
                }
</div>
  )
}

export default NoteTitle