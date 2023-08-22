import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
