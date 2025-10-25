import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const createNewNote = createAsyncThunk(
    "user/createNote",
    async ( title: string , {rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.post("/notes/", 
                {title}
            );
            return data;
        } catch (error: any) {
            if (error.response) {
        return rejectWithValue(Object.values(error.response.data).join(' '));
      } else {
        return rejectWithValue(error.message);
      }
        }
    }
);