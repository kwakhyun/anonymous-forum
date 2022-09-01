import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("GET_POST", async () => {
  const response = await axios.get(`${process.env.REACT_APP_URL}/posts`);

  if (response.status !== 200) {
    alert("게시글을 불러오는데 실패했습니다.");
  } else {
    return response.data;
  }
});

export const addPost = createAsyncThunk("ADD_POST", async (post) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL}/posts/`,
    post
  );

  if (response.status !== 201) {
    alert("게시글 작성에 실패했습니다.");
  } else {
    return response.data;
  }
});

export const deletePost = createAsyncThunk("DELETE_POST", async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_URL}/posts/` + id
  );

  if (response.status !== 200) {
    alert("게시글 삭제에 실패했습니다.");
  } else {
    alert("게시글이 삭제되었습니다.");
  }
});

export const updatePost = createAsyncThunk("UPDATE_POST", async (post) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_URL}/posts/` + post.id,
    {
      title: post.title,
      content: post.content,
    }
  );

  if (response.status !== 200) {
    alert("게시글 수정에 실패했습니다.");
  } else {
    alert("게시글이 수정되었습니다.");
  }
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
