import type { RootState } from '../store';
import type { Note } from '@/types/types';

export const selectNoteStatus = (state: RootState) => state.notes.status;
export const selectNote = (state: RootState): Note | null  => state.notes.note;