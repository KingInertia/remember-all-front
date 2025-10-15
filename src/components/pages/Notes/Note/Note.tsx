import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const Note = () => {
  const [value, setValue] = useState<string | undefined>("## Нова замітка");
  const [editMode, setEditMode] = useState(true);


  return (
    <div className="container flex px-16 py-8 h- opacity-95">
        <div className="flex-1">
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
    </div>
  )
}

export default Note