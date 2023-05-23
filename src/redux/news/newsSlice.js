import { createSlice } from '@reduxjs/toolkit';
import { getAllNews } from './newsOperations';

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
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getAllNews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

const newsReducer = newsSlice.reducer;
export default newsReducer;
