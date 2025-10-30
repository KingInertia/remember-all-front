import React from 'react';
import bookImg from '@/assets/images/book-img3.png';
import { useNavigate } from 'react-router-dom';
import type { NoteHistory } from '@/types/types';
import { updateNotesHistory } from '@/store/userProfile/userProfileSlice';
import { useDispatch } from 'react-redux';

type NoteProps = {
  notesHistory: NoteHistory[] | [];
};

const LeftMenu = ({ notesHistory }: NoteProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnCLick = (note: { id: number; title: string }) => {
    dispatch(
      updateNotesHistory({
        id: note.id,
        title: note.title,
      }),
    );

    navigate(`/notes/${note.id}`);
  };

  return (
    <div className="container mx-auto h-full flex flex-col">
      <div className="flex flex-col items-center ">
        <div>
          <img
            onClick={() => navigate('/')}
            src={bookImg}
            alt=""
            className=" h-[50px]  rounded-xl opacity-95 cursor-pointer scale-105 transition-transform hover:scale-100"
          />
        </div>
      </div>

      <div className="flex-1 rounded-4xl border-2 border-primary/90 bg-blockNoteMenu/75 p-4 text-textWhite mt-3">
        <h2 className="text-lg font-semibold mb-3 flex justify-center">
          Recent Notes
        </h2>
        <div className="overflow-y-auto green-scroll-bar">
          <ul className="space-y-2 ">
            {notesHistory.length > 1 ? (
              notesHistory.slice(1).map(note => (
                <li
                  key={note.id}
                  onClick={() => handleOnCLick(note)}
                  className="cursor-pointer p-2 rounded-lg underline hover:bg-primary/20 transition-colors"
                >
                  {note.title}
                </li>
              ))
            ) : (
              <li className="text-gray-400">No notes history</li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex-1 rounded-4xl border-2 border-primary/90 bg-blockNoteMenu/75 mt-4"></div>
    </div>
  );
};

export default LeftMenu;
