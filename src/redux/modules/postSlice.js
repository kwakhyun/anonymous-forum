import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("GET_POST", async () => {
  const res = await axios.get("http://localhost:3001/posts");
  return res.data;
});

export const addPost = createAsyncThunk("ADD_POST", async (post) => {
  const res = await axios.post("http://localhost:3001/posts", post);
  return res.data;
});

export const deletePost = createAsyncThunk("DELETE_POST", async (id) => {
  const res = await axios.delete("http://localhost:3001/posts/" + id);
  return res.data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.posts = [...action.payload];
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export default postSlice.reducer;
