import { useState, useEffect, useRef } from "react";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { lightRedTheme } from "./NoteTheme";
import { changeNote } from "@/store/notes/notesActions";
import type { Note } from "@/types/types";

type NoteProps = {
  noteContent: string;
  noteId: number;
  previousId: number;
}

  const Note = ({ noteContent, noteId, previousId}: NoteProps) => {
    const [editMode, setEditMode] = useState(true);
    const [fontSize, setFontSize] = useState(20);
    const editor = useCreateBlockNote();
    const saveOrLoading = useRef(true);

    useEffect(() => {
      saveOrLoading.current = true;
      const setText= async ()=>{
      try {

        const text = await editor.blocksToMarkdownLossy(editor.document);
        if(text){
        await changeNote({id:previousId, content: text})
        }
        const blocks = await editor.tryParseMarkdownToBlocks(noteContent as string);
           await editor.replaceBlocks(editor.document, blocks);
           saveOrLoading.current = false;
           } catch(e){
            console.log("markdown parse error")
           }
      }
      setText()
    },[noteContent, noteId])


useEffect(() => {
  if (!editor || saveOrLoading.current) return;

  let timeout: NodeJS.Timeout;

  const handleChange =  () => {
    if (saveOrLoading.current) {
      return; 
    }

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
          className="my-blocknote green-scroll-bar"
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