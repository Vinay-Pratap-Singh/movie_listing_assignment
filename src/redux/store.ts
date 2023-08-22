import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import authSlice from "./authSlice";
import listsSlice from "./listsSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    auth: authSlice,
    lists: listsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
