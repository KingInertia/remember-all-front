import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setAuthToken: (state, action) => {
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },
    logout: state => {
      state.refreshToken = null;
      state.accessToken = null;
    },
    },

});

export default authSlice.reducer;
export const {setAuthToken, logout} = authSlice.actions;