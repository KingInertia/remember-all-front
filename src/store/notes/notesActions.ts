import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";
import type { Note } from "@/types/types";

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

export const getNote = createAsyncThunk(
    "user/getNote",
    async ( id: number , {rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.get(`/notes/${id}/`
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


export const changeNote = async (note: Partial<Note> & { id: number }) => {
  const response = await axiosInstance.patch(`/notes/${note.id}/`, note);
  return response.data;
};
