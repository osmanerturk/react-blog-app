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
export const putAsyncCat = createAsyncThunk("blog/addCategory", async (name) => {
  const res = await axios.put("http://127.0.0.1:1076/Categories", {
    name,
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
  },
});

export default categorySlice.reducer;
