import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/newsApi';
import { Notify } from 'notiflix';

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getAllNews();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNewsByTitle = createAsyncThunk(
  'news/getNewsByTitle',
  async (title, { rejectWithValue }) => {
    try {
      const data = await api.getNewsByTitle(title);
      return data;
    } catch (error) {
      Notify.failure('Sorry, news not found', {
        timeout: 2000,
        clickToClose: true,
        position: 'center-center',
      });
      return rejectWithValue(error.message);
    }
  }
);
