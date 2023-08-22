"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

type Istate = {
  isLoggedIn: boolean;
  isLoading: boolean;
  guest_session_id: string;
  expires_at: string;
};

const initialState: Istate = {
  isLoggedIn: false,
  isLoading: false,
  expires_at: "",
  guest_session_id: "",
};

// for creating a new session
export const createSession = createAsyncThunk("/auth/session", async () => {
  try {
    const res = await axios.get("/api/auth/session");
    return res.data;
  } catch (error: any) {
    toast.error(error?.message);
  }
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // for create session
      .addCase(createSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.isLoggedIn = true;
          state.guest_session_id = action.payload?.data?.guest_session_id;
          state.expires_at = action.payload?.data?.expires_at;
          toast.success(action?.payload?.message);
        }
      })
      .addCase(createSession.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
