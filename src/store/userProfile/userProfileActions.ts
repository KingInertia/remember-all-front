import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const getUserProfile = createAsyncThunk(
    "user/getUserProfile",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.get("/auth/users/me/");
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