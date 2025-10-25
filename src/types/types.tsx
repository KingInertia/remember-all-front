export interface User {
  id: number;
  username: string;
  email: string;
  notesHistory: number | null; 
}


  export interface NoteImage {
  id: number;
  image: string; 
}


export interface Note {
  id: number;
  title: string;
  content: string;
    links_out: number[];
  links_in: number[];
  images?: NoteImage[] | null;
}