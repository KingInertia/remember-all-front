import Note from "./Note/Note"
import { useEffect, useState } from "react";
import NoteSearch from "./UI/NoteSearch"
import NoteAddButton from "./UI/NoteAddButton"
import NoteTitle from "./UI/NoteTitle";
import LeftMenu from "./LeftMenu/LeftMenu"
import RightMenu from "./RightMenu/RightMenu"
import {selectUserNotesHistory} from "@/store/userProfile/userProfileSelector";
import { selectNote, selectNoteStatus } from "@/store/notes/notesSelector"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getNote } from "@/store/notes/notesActions";
import { useNavigate, useParams } from "react-router-dom";


const NotePage = () => {
  const notes_history = useAppSelector(selectUserNotesHistory) ;
  const note = useAppSelector(selectNote);
  const dispatch = useAppDispatch()
    const navigate = useNavigate();
  const { id } = useParams();

useEffect(() => {
    if (!notes_history) return;

    if (!id) {
      const lastNoteId = notes_history?.[0]?.id;
        navigate(`/notes/${lastNoteId}`, { replace: true });
      return;
    }
      dispatch(getNote(Number(id)));

  }, [ id, dispatch, navigate]);

  return (
<div className="h-screen flex items-center">
  <div className="grid grid-cols-4 gap-8 p-4 h-[950px] w-full items-stretch">
    <div className="col-span-1 ">
      <LeftMenu notesHistory={ notes_history ?? []}/>
    </div>

    <div className="col-span-2 mx-4 flex flex-col h-full">
      <div className="flex justify-between items-center gap-4">
        {note && <NoteTitle noteTitle={note?.title} noteId={note?.id}/>}
        <NoteSearch />
       <NoteAddButton />
      </div>
        <div className="flex-1 min-h-0">
    {note && <Note noteContent={note.content || ''} noteId={note.id} previousId={notes_history[1].id}/>}
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