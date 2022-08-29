import { createSlice } from "@reduxjs/toolkit";

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
    deleteComment: (state, action) => {
      state.list = action.payload.list;
    },
  },
});

export default commentSlice.reducer;

export const { postComment, deleteComment } = commentSlice.actions;
