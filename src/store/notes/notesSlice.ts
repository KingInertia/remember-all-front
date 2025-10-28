import { createSlice } from "@reduxjs/toolkit";
import LOADINGSTATES from "@/constans/LoadingStates";
import { getNote, getNotesList } from "./notesActions";
import type { Note, ListNote } from "@/types/types";


interface NoteState {
    note: Note | null           
    status: typeof LOADINGSTATES[keyof typeof LOADINGSTATES];
    error: string;
    notes: ListNote[]
}

const initialState: NoteState = {
    note: null,   
    status: LOADINGSTATES.IDLE,
    error: '',
    notes: []

}

const notesSlice = createSlice({
name: 'notes',
initialState,
reducers: {},
extraReducers: builder => {
    builder
    .addCase(getNote.pending, (state) =>
{
      state.status = LOADINGSTATES.LOADING;
            state.error = '';
}
)
    .addCase(getNote.fulfilled, (state, {payload}) =>
{
      state.status = LOADINGSTATES.SUCCESS;
       state.note = payload
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