import Note from "./Note/Note"
import NoteSearch from "./UI/NoteSearch"
import NoteAddButton from "./UI/NoteAddButton"
import LeftMenu from "./LeftMenu/LeftMenu"
import RightMenu from "./RightMenu/RightMenu"
import {selectUserProfile} from "@/store/userProfile/userProfileSelector";
import { useSelector } from "react-redux";


const NotePage = () => {
  const user = useSelector(selectUserProfile);
  
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
    {user?.notesHistory && <Note />}
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