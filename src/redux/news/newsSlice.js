import { createSlice } from '@reduxjs/toolkit';
import { getAllNews, getNewsByTitle } from './newsOperations';

const newsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getAllNews.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = payload.result;
      })
      .addCase(getAllNews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.items = [];
      })
      .addCase(getNewsByTitle.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getNewsByTitle.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = payload.result;
      })
      .addCase(getNewsByTitle.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.items = [];
      });
  },
});

const newsReducer = newsSlice.reducer;
export default newsReducer;
