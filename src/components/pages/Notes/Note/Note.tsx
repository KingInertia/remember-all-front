import { useState, useEffect } from "react";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { lightRedTheme } from "./NoteTheme";
import { useSelector } from "react-redux";
import { selectNote } from "@/store/notes/notesSelector";


  const Note = () => {
    const [editMode, setEditMode] = useState(true);
    const [fontSize, setFontSize] = useState(20);
    const editor = useCreateBlockNote();
    const note = useSelector(selectNote)

    useEffect(()=>{

    },[])

    useEffect(() => {
  const unsub = editor.onChange(async () => {
    const textt = await editor.getSelectedText();
    console.log("Current content:", textt);
  });

  return () => unsub();
}, [editor]);


    return (
<div className="flex flex-col h-full">
    <div className="relative flex-1 rounded-4xl border-2 border-primary bg-secondary/90 overflow-hidden">
      <div className="absolute inset-0 my-1 mr-3 ml-4">
        <BlockNoteView
          className="my-blocknote"
          editor={editor}
          theme={lightRedTheme}
          sideMenu={false}
          style={{ ['--bn-font-size' as any]: `${fontSize}px`}}
          editable={editMode}
          />
          </div>
          </div>
            </div>
    )
  }

  export default Note