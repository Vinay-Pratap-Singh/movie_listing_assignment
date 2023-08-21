import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
