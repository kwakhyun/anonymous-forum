import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./modules/commentSlice";
import postSlice from "./modules/postSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
    comment: commentSlice,
  },
});

export default store;
