"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";

type Istate = {
  isLoading: boolean;
  movies: any;
};

const initialState: Istate = {
  isLoading: false,
  movies: [],
};

// for fetching the poupular movies
export const fetchPopularMovies = createAsyncThunk(
  "/get/popular/movies",
  async () => {
    try {
      const res = await axios.get("/api/movie/popular");
      return res.data;
    } catch (error: any) {
      toast.error(error?.message);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          console.log(action.payload);
          toast.success("Movies fetched successfully");
        }
      })
      .addCase(fetchPopularMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = moviesSlice.actions;
export default moviesSlice.reducer;
