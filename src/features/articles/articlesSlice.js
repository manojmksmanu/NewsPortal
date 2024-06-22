import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  status: "idle",
  error: null,
  category: "general",
  page: 1,
  totalResults: 0,
  searchQuery: "",
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ category, page, searchQuery }) => {
    const queryParam = searchQuery ? `&q=${searchQuery}` : "";

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&page=${page}${queryParam}&language=en&apiKey=259d27197b8d4d6c9a6356a62da60cdc`
    );
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.url !== action.payload.url
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setCategory,
  setPage,
  setSearchQuery,
  addFavorite,
  removeFavorite,
} = articlesSlice.actions;

export default articlesSlice.reducer;
