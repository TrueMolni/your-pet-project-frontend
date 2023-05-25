import { createSlice } from '@reduxjs/toolkit';

import operations from './notices-operations';

const initialState = {
  noticesByCategory: [],
  adDetails: null,
  userNotices: [],
  favorite: [],

  pet: [],
  favoriteAds: [],
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
          store.noticesByCategory = payload.data;
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
        store.adDetails = payload;
        store.isLoading = false;
        store.isError = null;
      })
      .addCase(operations.getNoticeById.rejected, (store, { payload }) => {
        store.adDetails = null;
        store.isLoading = false;
        store.isError = payload;
      })
      //додавання оголошення до обраних
      .addCase(operations.updateFavorite.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(operations.updateFavorite.fulfilled, (store, { payload }) => {
        store.favorite = payload.user.favoriteNotices;
        store.isLoading = false;
        store.isError = null;
      })
      .addCase(operations.updateFavorite.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.isError = payload;
      })
      // отримання оголошень авторизованого користувача доданих ним же в обрані
      .addCase(operations.getNoticeByFavorite.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(
        operations.getNoticeByFavorite.fulfilled,
        (store, { payload }) => {
          store.isLoading = false;
          store.isError = null;
          store.favoriteAds = payload.notices;
        }
      )
      .addCase(
        operations.getNoticeByFavorite.rejected,
        (store, { payload }) => {
          store.isLoading = false;
          store.isError = payload;
        }
      )
      //для видалення оголошення авторизованого користувача доданих цим же до обраних
      .addCase(operations.deleteUserNotice.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(operations.deleteUserNotice.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isError = null;
        const index = store.noticesByCategory.findIndex(
          item => item._id === payload.result
        );
        store.noticesByCategory.splice(index, 1);
      })
      .addCase(operations.deleteUserNotice.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.isError = payload;
      })
      //для додавання оголошень відповідно до обраної категорії
      .addCase(operations.addNoticeByCategory.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(
        operations.addNoticeByCategory.fulfilled,
        (store, { payload }) => {
          store.isLoading = false;
          store.isError = null;
          store.noticesByCategory =
            store.category === payload.notice.category
              ? [payload.notice, ...store.noticesByCategory]
              : store.allNotices;
          store.userNotices = [payload.notice, ...store.userNotices];
        }
      )
      .addCase(
        operations.addNoticeByCategory.rejected,
        (store, { payload }) => {
          store.isLoading = false;
          store.isError = payload;
        }
      )
      //для отримання оголошень авторизованого кристувача створених цим же користувачем
      .addCase(operations.getUserNotices.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(operations.getUserNotices.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isError = null;
        store.userNotices = payload.notices;
      })
      .addCase(operations.getUserNotices.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.isError = payload;
      })
      //для додавання оголошень вpet
      .addCase(operations.addPet.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(operations.addPet.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isError = null;
        store.pet = payload;
      })
      .addCase(operations.addPet.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.isError = payload;
      })
      //для отримання коллекції UserPet
      .addCase(operations.getUserPet.pending, store => {
        store.isLoading = true;
        store.isError = null;
      })
      .addCase(operations.getUserPet.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isError = null;
        store.pet = payload;
      })
      .addCase(operations.getUserPet.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.pet = [];
        store.isError = payload;
      });
  },
});

export default noticesSlice.reducer;
