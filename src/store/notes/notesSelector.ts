import type { RootState } from '../store';
export const selectNoteStatus = (state: RootState) => state.notes.status;
export const selectNote = (state: RootState) => state.notes.note;