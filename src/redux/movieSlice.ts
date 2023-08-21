"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";
import { IindividualMovieData } from "@/helper/intances";

type Istate = {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  isLoading: boolean;
  movies: IindividualMovieData[];
};

const initialState: Istate = {
  currentPage: 0,
  totalPages: 0,
  totalResults: 0,
  isLoading: false,
  movies: [],
};

// for fetching the poupular movies
export const fetchPopularMovies = createAsyncThunk(
  "/get/popular/movies",
  async (page: number) => {
    try {
      const res = await axios.post("/api/movie/popular", { page });
      return res.data;
    } catch (error: any) {
      toast.error(error?.message);
    }
  }
);

const moviesSlice = createSlice({
  name: "moviesSlice",
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
          state.currentPage = action.payload?.data?.page;
          state.movies = action.payload?.data
            ?.results as IindividualMovieData[];
          state.totalPages = action.payload?.data?.total_pages;
          state.totalResults = action.payload?.data?.total_results;
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
