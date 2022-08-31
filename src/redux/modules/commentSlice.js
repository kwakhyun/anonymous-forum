import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteComment = createAsyncThunk("DELETE_COMMENT", async (id) => {
  await axios.delete(`${process.env.REACT_APP_URL}/comments/` + id);
});

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    id: 0,
    list: [],
  },
  reducers: {
    postComment: (state, action) => {
      state.id = action.payload.id;
      state.list = action.payload.list;
    },
    editComment: (state, action) => {
      state.list = action.payload.list;
    },
  },
});

export default commentSlice.reducer;

export const { postComment, editComment } = commentSlice.actions;
