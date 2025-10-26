import { useState, useEffect } from "react";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { lightRedTheme } from "./NoteTheme";
import { changeNote } from "@/store/notes/notesActions";
import type { Note } from "@/types/types";

type NoteProps = {
  noteContent: string;
  noteId: number;
}

  const Note = ({ noteContent, noteId }: NoteProps) => {
    const [editMode, setEditMode] = useState(true);
    const [fontSize, setFontSize] = useState(20);
    const editor = useCreateBlockNote();

    useEffect(() => {
      if (!noteContent) return;

      const setText= async ()=>{
      try {
        const blocks = await editor.tryParseMarkdownToBlocks(noteContent as string);
           editor.replaceBlocks(editor.document, blocks);
           } catch(e){
            console.log("markdown parse error")
           }
      }
      setText()
    },[noteContent])


useEffect(() => {
  if (!editor) return;

  let timeout: NodeJS.Timeout;
  
  const handleChange =  () => {
    clearTimeout(timeout);
    
    timeout = setTimeout( async () => {
      try{
        const text = await editor.blocksToMarkdownLossy(editor.document);
         changeNote({id:noteId, content: text})
      } catch(e){}
    }, 5000);
  };

  const unsubscribe = editor.onChange(handleChange);

  return () => {
    clearTimeout(timeout);
    unsubscribe();
  };
}, [editor]);

    return (
<div className="flex flex-col h-full pt-4">
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