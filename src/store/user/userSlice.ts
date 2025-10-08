import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: null,
    error: null,

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},

});