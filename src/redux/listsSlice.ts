import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialState = {
  lists: [],
  isLoading: false,
};

// for creating a new list
export const createList = createAsyncThunk(
  "/create/list",
  async (data: { name: string; description: string; language: string }) => {
    try {
      const res = await axios.post("/api/lists/create", data);
      console.log(res?.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  }
);

// for deleting a list
// export const deleteList = createAsyncThunk(
//   "/create/list",
//   async (listID: string) => {
//     try {
//       const res = await axios.delete("/api/list");
//       console.log(res?.data);
//       return res.data;
//     } catch (error: any) {
//       toast.error(error?.message);
//     }
//   }
// );

// for getting data from a list
export const getDataFromList = createAsyncThunk(
  "/create/list",
  async (listID: string) => {
    try {
      const res = await axios.post("/api/lists/get", { listID });
      console.log(res?.data);
      return res.data;
    } catch (error: any) {
      toast.error(error?.message);
    }
  }
);

// for clearing list data
export const clearDataFromList = createAsyncThunk(
  "/create/list",
  async (listID: string) => {
    try {
      const res = await axios.post("/api/lists/clear", { listID });
      console.log(res?.data);
      return res.data;
    } catch (error: any) {
      toast.error(error?.message);
    }
  }
);

const listsSlice = createSlice({
  name: "listsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = listsSlice.actions;
export default listsSlice.reducer;
