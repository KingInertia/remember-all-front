import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    refreshToken: null,
    isAuntificated: false,
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
      state.isAuntificated = true;
    },
    logout: state => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      state.refreshToken = null;
      state.accessToken = null;
      state.isAuntificated = false;
    },
    },

});

export default authSlice.reducer;
export const {setAuthToken, logout} = authSlice.actions;