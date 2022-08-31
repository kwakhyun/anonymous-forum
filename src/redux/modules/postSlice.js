import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("GET_POST", async () => {
  const res = await axios.get(`${process.env.REACT_APP_URL}/posts`);
  return res.data;
});

export const addPost = createAsyncThunk("ADD_POST", async (post) => {
  const res = await axios.post(`${process.env.REACT_APP_URL}/posts/`, post);
  return res.data;
});

export const deletePost = createAsyncThunk("DELETE_POST", async (id) => {
  await axios.delete(`${process.env.REACT_APP_URL}/posts/` + id);
});

export const updatePost = createAsyncThunk("UPDATE_POST", async (post) => {
  await axios.patch(`${process.env.REACT_APP_URL}/posts/` + post.id, {
    title: post.title,
    content: post.content,
  });
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {},
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
