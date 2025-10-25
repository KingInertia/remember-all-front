import { createSlice } from "@reduxjs/toolkit";
import LOADINGSTATES from "@/constans/LoadingStates";
import { createNewNote } from "./notesActions";
import type { Note } from "@/types/types";


interface NoteState {
    note: Note | null
    status: typeof LOADINGSTATES[keyof typeof LOADINGSTATES];
    error: string;
}

const initialState: NoteState = {
    note: null,
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
      state.note = payload
      console.log(payload)
}
)
    .addCase(createNewNote.rejected, (state, {payload}) =>
{
      state.status = LOADINGSTATES.FAILED;
            state.error = (payload as string) || 'Unknown error';
}
)
}

})


export default notesSlice.reducer;