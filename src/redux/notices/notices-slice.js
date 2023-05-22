import { createSlice } from '@reduxjs/toolkit';

import operations from './notices-operations';

const initialState = {
  noticesByCategory: [],
  noticeById: [],
  isLoading: false,
  isError: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      // отримання оголошень по категоріям
      .addCase(operations.getNoticesByCategory.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(
        operations.getNoticesByCategory.fulfilled,
        (store, { payload }) => {
          store.noticesByCategory = payload.result;
          store.isLoading = false;
          store.isError = null;
        }
      )
      .addCase(
        operations.getNoticesByCategory.rejected,
        (store, { payload }) => {
          store.noticesByCategory = [];
          store.isLoading = false;
          store.isError = payload;
        }
      )
      // отримання одного оголошення
      .addCase(operations.getNoticeById.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(operations.getNoticeById.fulfilled, (store, { payload }) => {
        store.noticeById = payload;
        store.isLoading = false;
        store.isError = null;
      })
      .addCase(operations.getNoticeById.rejected, (store, { payload }) => {
        store.noticeById = null;
        store.isLoading = false;
        store.isError = payload;
      });
    //додавання оголошення до обраних
    // .addCase(operations.updateFavorite.pending, store => {
    //   store.isLoading = true;
    //   store.isError = null;
    // })
    // .addCase(operations.updateFavorite.fulfilled, (store, _) => {
    //   store.isLoading = false;
    //   store.isError = null;
    // })
    // .addCase(operations.updateFavorite.rejected, (store, { payload }) => {
    //   store.isLoading = false;
    //   store.isError = payload;
    // });
  },
});

export default noticesSlice.reducer;
