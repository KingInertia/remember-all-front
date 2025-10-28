import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userProfileReducer from "./userProfile/userProfileSlice";
import notesReducer from './notes/notesSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        userProfile: userProfileReducer,
        notes: notesReducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;