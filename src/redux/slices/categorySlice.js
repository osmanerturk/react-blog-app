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
export const putAsyncCatList = createAsyncThunk("blog/addCategories", async (name) => {
  const res = await axios.put("http://127.0.0.1:1076/Categories", name);
  return res.data;
});

export const delAsyncCat = createAsyncThunk("blog/delCategories", async (id) => {
  await axios.delete(`http://127.0.0.1:1076/Categories/${id}`);
  return id;
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
    [putAsyncCatList.fulfilled]: (state, action) => {
      state.catPost.push(action.payload)
    },
    [delAsyncCat.fulfilled]: (state, action) => {
      const id = action.payload;
      console.log(id);
     state.catPost = state.catPost.filter((item) => item.id !== id);
      console.log(state.catPost);
    },
  },
});

export const selectItems = (state) => state.category.catPost
export default categorySlice.reducer;
