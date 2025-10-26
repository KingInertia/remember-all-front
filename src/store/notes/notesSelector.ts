import type { RootState } from '../store';
import type { Note } from '@/types/types';

export const selectNoteStatus = (state: RootState) => state.notes.status;
export const selectNotes = (state: RootState): Note[] | null  => state.notes.notes;