import { createSlice } from "@reduxjs/toolkit";
import LOADINGSTATES from "@/constans/LoadingStates";
import { createNewNote, getNote } from "./notesActions";
import type { Note } from "@/types/types";
import type { PayloadAction } from '@reduxjs/toolkit';


interface NoteState {
    notes: Note[]           
    status: typeof LOADINGSTATES[keyof typeof LOADINGSTATES];
    error: string;
}

const initialState: NoteState = {
    notes: [],   //SHOULD change to notes[]
        status: LOADINGSTATES.IDLE,
    error: '',
}

const notesSlice = createSlice({
name: 'notes',
initialState,
reducers: {},
extraReducers: builder => {
    builder
    .addCase(createNewNote.pending, (state) =>
{
      state.status = LOADINGSTATES.LOADING;
            state.error = '';
}
)
    .addCase(createNewNote.fulfilled, (state, {payload}) =>
{
      state.status = LOADINGSTATES.SUCCESS;
          const existingIndex = state.notes.findIndex(note => note.id === payload.id);

            if (existingIndex !== -1) {
                state.notes.splice(existingIndex, 1, payload);
            } else {
                state.notes.push(payload);
            }
}
)
    .addCase(createNewNote.rejected, (state, {payload}) =>
{
      state.status = LOADINGSTATES.FAILED;
            state.error = (payload as string) || 'Unknown error';
}
)

    .addCase(getNote.pending, (state) =>
{
      state.status = LOADINGSTATES.LOADING;
            state.error = '';
}
)
    .addCase(getNote.fulfilled, (state, {payload}) =>
{
      state.status = LOADINGSTATES.SUCCESS;
          const existingIndex = state.notes.findIndex(note => note.id === payload.id);

            if (existingIndex !== -1) {
                state.notes.splice(existingIndex, 1, payload);
            } else {
                state.notes.push(payload);
            }
}
)
    .addCase(getNote.rejected, (state, {payload}) =>
{
      state.status = LOADINGSTATES.FAILED;
            state.error = (payload as string) || 'Unknown error';
}
)
}

})


export default notesSlice.reducer;