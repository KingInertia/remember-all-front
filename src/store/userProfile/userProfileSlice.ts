import { createSlice } from "@reduxjs/toolkit";
import LOADINGSTATES from "@/constans/LoadingStates";
import { getUserProfile } from "./userProfileActions";
import type { User } from '@/types/types';

interface UserProfileState {
  user: User | null;
  status: typeof LOADINGSTATES[keyof typeof LOADINGSTATES];
  error: string;
}

const initialState: UserProfileState = {
    user: null,
    status: LOADINGSTATES.IDLE,
    error: '',

}

const userProfileSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser(state) {
            state.user = null;
            state.status = LOADINGSTATES.IDLE;
            state.error = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserProfile.pending, (state) => {
            state.status = LOADINGSTATES.LOADING;
            state.error = '';
        }
        )
        .addCase(getUserProfile.fulfilled, (state, { payload }) => {
            state.status = LOADINGSTATES.SUCCESS;
            state.user = payload;
        })
        .addCase(getUserProfile.rejected, (state, { payload }) => {
            state.status = LOADINGSTATES.FAILED;
            state.error = (payload as string) || 'Unknown error';
        });
    }

});

export default userProfileSlice.reducer;
export const { logoutUser } = userProfileSlice.actions;