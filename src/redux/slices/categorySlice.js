import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postAsyncCatList = createAsyncThunk(
  "blog/categories",
  async () => {
    const res = await axios.post("http://127.0.0.1:1076/Categories", {
      where: {},
      include: {
        posts: true,
      },
    });
    return res.data;
  }
);

export const postAsyncPostList = createAsyncThunk("blog/posts", async () => {
  const res = await axios.post("http://127.0.0.1:1076/Posts", {
    where: {},
    include: {
      author: true,
      category: true,
    },
  });
  return res.data;
});

export const putAsyncCat = createAsyncThunk(
  "blog/addCategories",
  async (name) => {
    const res = await axios.put("http://127.0.0.1:1076/Categories", name);
    return res.data;
  }
);
export const putAsyncPost = createAsyncThunk(
  "blog/addPosts",
  async (formData) => {
  const res =  await axios.put(
      `http://127.0.0.1:1076/Posts/`,
        formData,
        {
          headers:{
            "Content-Type": "multipart/form-data"

        }}
    );
    return res.data;
  }
);

export const delAsyncCat = createAsyncThunk(
  "blog/delCategories",
  async (id) => {
    await axios.delete(`http://127.0.0.1:1076/Categories/${id}`);
    return id;
  }
);

export const delAsyncPost = createAsyncThunk("blog/delPosts", async (id) => {
  await axios.delete(`http://127.0.0.1:1076/Posts/${id}`);
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
    //Categories
    [postAsyncCatList.fulfilled]: (state, action) => {
      state.catPost = action.payload;
    },
    [putAsyncCat.fulfilled]: (state, action) => {
      state.catPost.push(action.payload);
    },
    [delAsyncCat.fulfilled]: (state, action) => {
      const id = action.payload;
      state.catPost = state.catPost.filter((item) => item.id !== id);
    },
    // Posts
    [postAsyncPostList.fulfilled]: (state, action) => {
      state.postPost = action.payload;
    },
    [delAsyncPost.fulfilled]: (state, action) => {
      const id = action.payload;
      state.postPost = state.postPost.filter((item) => item.id !== id);
    },
    [putAsyncPost.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const selectCats = (state) => state.category.catPost;
export const selectPosts = (state) => state.category.postPost;
export default categorySlice.reducer;
