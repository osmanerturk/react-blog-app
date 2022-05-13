import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postAsyncCatList = createAsyncThunk("blog/categories", async () => {
  const res = await axios.post("http://127.0.0.1:1076/Categories", {
    where: {},
    include: {
      posts: true,
    },
  });
  return res.data;
});
export const getAsyncCats = createAsyncThunk("blog/posts", async (id) => {
  const res = await axios.post(`http://127.0.0.1:1076/Categories/${id}`, {
    where: {},
    include: {
      author: true,
      category: true,
    },
  });
  return res.data;
});

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    catPost: [],
    postPost: [],
  },
  reducers: {},
  extraReducers: {
    [postAsyncCatList.fulfilled]: (state, action) => {
      state.catPost = action.payload;
    },
    [getAsyncCats.fulfilled]: (state, action) => {
      state.postPost = action.payload;
      console.log(action.payload);
    },
  },
});

export default categorySlice.reducer;
