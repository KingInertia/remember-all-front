export interface NoteHistory {
  id: number;
  title: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  notes_history: NoteHistory[] | null;
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

export interface ListNote {
  id: number;
  title: string;
}
