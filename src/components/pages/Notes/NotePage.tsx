import Note from "./Note/Note"
import { useEffect, useState } from "react";
import NoteSearch from "./UI/NoteSearch"
import NoteAddButton from "./UI/NoteAddButton"
import LeftMenu from "./LeftMenu/LeftMenu"
import RightMenu from "./RightMenu/RightMenu"
import {selectUserProfile} from "@/store/userProfile/userProfileSelector";
import { selectNotes, selectNoteStatus } from "@/store/notes/notesSelector"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getNote } from "@/store/notes/notesActions";
import type { User, Note as NoteType } from "@/types/types";

const NotePage = () => {
  const user = useAppSelector(selectUserProfile) as User;
  const notes = useAppSelector(selectNotes);
  const status = useAppSelector(selectNoteStatus);
    const [currentNote, setCurrentNote] = useState<NoteType | null>(null);useState(null);
  const dispatch = useAppDispatch()

    useEffect(() => {
    if (!user || currentNote!= null)
      return;

      const getLastNote = async () =>
      {
        if (user?.notes_history?.[0]) {
         await dispatch(getNote(user.notes_history[0].id))
        }
      }
      getLastNote()

    },[user, dispatch])

    useEffect(()=>{
                if (notes?.length) {
            setCurrentNote(notes[notes.length - 1])
        }
    },[notes])
    
  return (
<div className="h-screen flex items-center">
  <div className="grid grid-cols-4 gap-8 p-4 h-[950px] w-full items-stretch">
    <div className="col-span-1 ">
      <LeftMenu />
    </div>

    <div className="col-span-2 mx-4 flex flex-col h-full">
      <div className="flex justify-between items-center gap-4">
        <NoteSearch />
{        <NoteAddButton />
}      </div>
        <div className="flex-1 min-h-0">
    {currentNote && <Note noteContent={currentNote.content || ''} noteId={currentNote.id}/>}
  </div>
    </div>

    <div className="col-span-1 ">
      <RightMenu />
    </div>
  </div>
</div>

  )
}

export default NotePage