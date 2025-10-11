import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    refreshToken: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setAuthToken: (state, action) => {
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    logout: state => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      state.refreshToken = null;
      state.accessToken = null;
    },
    },

});

export default authSlice.reducer;
export const {setAuthToken, logout} = authSlice.actions;