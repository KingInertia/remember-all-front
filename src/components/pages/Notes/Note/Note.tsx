import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const Note = () => {
  const [value, setValue] = useState<string | undefined>("## Нова замітка");
  const [editMode, setEditMode] = useState(true);


  return (
    <div className="container flex flex-col px-20 py-8 h-screen opacity-95">
        <div className="p-2 flex justify-between items-center">
        <div className=" text-amber-300">Note Name</div>
        {/* Search */}
        <div className=" text-amber-300"> adsdsa
        </div>
        </div>
        {editMode ? (<MDEditor
        hideToolbar
          value={value}
          onChange={setValue}
          preview="edit"
          height="100%"
        />) :
        (<MDEditor.Markdown source={value} style={{  height: "100%",
            width: "100%", whiteSpace: 'pre-wrap' }} />)}
            </div>
  )
}

export default Note