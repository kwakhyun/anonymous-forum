import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addPost = createAsyncThunk("ADD_POST", async (post) => {
  const res = await axios.post("http://localhost:3001/posts", post);
  return res.data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  extraReducers: {
    [addPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export default postSlice.reducer;
